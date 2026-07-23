/**
 * ArXiv AI papers fetched via the ArXiv API (Atom feed).
 *
 * Strategy: when research_topics are configured, query each topic with its
 * own keywords and categories. Results are tagged and capped per topic so one
 * broad direction cannot crowd out the rest of the report.
 */

import type { ResearchTopic } from "./config.ts";
import { loadArxivHistory, markPreviouslySeen, type ArxivHistory } from "./arxiv-history.ts";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ArxivPaper {
  id: string;
  title: string;
  summary: string;
  authors: string[];
  published: string;
  updated: string;
  categories: string[];
  url: string;
  pdfUrl: string;
  topicIds: string[];
  seenBefore: boolean;
  firstSeenAt?: string;
}

export interface ArxivData {
  papers: ArxivPaper[];
  fetchSuccess: boolean;
  topics: ResearchTopic[];
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ARXIV_MAX_RESULTS = 50;
const ARXIV_MAX_RESULTS_PER_QUERY = 25;
const API_URL = "https://export.arxiv.org/api/query";

/** ArXiv categories to search. */
const CATEGORIES = ["cs.AI", "cs.CL", "cs.LG"];

/** Be more conservative than ArXiv's minimum request interval. */
export const ARXIV_REQUEST_DELAY_MS = 6000;
export const ARXIV_RETRY_BASE_DELAY_MS = 15_000;
export const ARXIV_MAX_ATTEMPTS = 4;
export const ARXIV_LOOKBACK_DAYS = 3;

// ---------------------------------------------------------------------------
// XML helpers (lightweight, no dependency)
// ---------------------------------------------------------------------------

function extractTag(xml: string, tag: string): string {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`);
  const m = xml.match(re);
  return m ? m[1]!.trim() : "";
}

function extractAllTags(xml: string, tag: string): string[] {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "g");
  const results: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    results.push(m[1]!.trim());
  }
  return results;
}

function extractAttr(xml: string, tag: string, attr: string): string[] {
  const re = new RegExp(`<${tag}[^>]*${attr}="([^"]*)"[^>]*/?>`, "g");
  const results: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    results.push(m[1]!);
  }
  return results;
}

function extractLinkHref(xml: string, rel: string): string {
  const re = new RegExp(`<link[^>]*rel="${rel}"[^>]*href="([^"]*)"[^>]*/?>`, "g");
  const m = re.exec(xml);
  return m ? m[1]! : "";
}

// ---------------------------------------------------------------------------
// Parse
// ---------------------------------------------------------------------------

function parseEntry(entryXml: string): ArxivPaper | null {
  const id = extractTag(entryXml, "id");
  if (!id) return null;

  const title = extractTag(entryXml, "title").replace(/\s+/g, " ");
  const summary = extractTag(entryXml, "summary").replace(/\s+/g, " ");
  const authors = extractAllTags(entryXml, "name");
  const published = extractTag(entryXml, "published");
  const updated = extractTag(entryXml, "updated");
  const categories = extractAttr(entryXml, "category", "term");

  const url = id; // ArXiv id IS the URL (e.g. http://arxiv.org/abs/...)
  const pdfUrl = extractLinkHref(entryXml, "related") || id.replace("/abs/", "/pdf/");

  return {
    id,
    title,
    summary,
    authors,
    published,
    updated,
    categories,
    url,
    pdfUrl,
    topicIds: [],
    seenBefore: false,
  };
}

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface ArxivRequestOptions {
  fetchImpl?: typeof fetch;
  sleepImpl?: (ms: number) => Promise<void>;
  maxAttempts?: number;
  retryBaseDelayMs?: number;
}

function retryAfterMs(response: Response): number {
  const value = response.headers.get("retry-after")?.trim();
  if (!value) return 0;

  const seconds = Number(value);
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000);

  const date = Date.parse(value);
  return Number.isNaN(date) ? 0 : Math.max(0, date - Date.now());
}

function isRetryableStatus(status: number): boolean {
  return status === 429 || status === 500 || status === 502 || status === 503 || status === 504;
}

export async function fetchArxivResponse(
  url: string,
  label: string,
  options: ArxivRequestOptions = {},
): Promise<Response | null> {
  const fetchImpl = options.fetchImpl ?? fetch;
  const sleepImpl = options.sleepImpl ?? sleep;
  const maxAttempts = options.maxAttempts ?? ARXIV_MAX_ATTEMPTS;
  const retryBaseDelayMs = options.retryBaseDelayMs ?? ARXIV_RETRY_BASE_DELAY_MS;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await fetchImpl(url, {
        headers: { "User-Agent": "agents-radar/1.0" },
      });
      if (response.ok) return response;

      if (!isRetryableStatus(response.status) || attempt === maxAttempts) {
        console.error(`  [arxiv] ${label}: HTTP ${response.status} after ${attempt} attempt(s)`);
        return null;
      }

      const delayMs = Math.max(retryBaseDelayMs * 2 ** (attempt - 1), retryAfterMs(response));
      console.warn(
        `  [arxiv] ${label}: HTTP ${response.status}; retry ${attempt + 1}/${maxAttempts} ` +
          `in ${Math.ceil(delayMs / 1000)}s`,
      );
      await sleepImpl(delayMs);
    } catch (error) {
      if (attempt === maxAttempts) {
        console.error(`  [arxiv] ${label}: request failed after ${attempt} attempt(s): ${error}`);
        return null;
      }

      const delayMs = retryBaseDelayMs * 2 ** (attempt - 1);
      console.warn(
        `  [arxiv] ${label}: request error; retry ${attempt + 1}/${maxAttempts} ` +
          `in ${Math.ceil(delayMs / 1000)}s: ${error}`,
      );
      await sleepImpl(delayMs);
    }
  }

  return null;
}

export async function fetchArxivData(
  topics: ResearchTopic[] = [],
  history: ArxivHistory = loadArxivHistory(),
): Promise<ArxivData> {
  const seen = new Map<string, ArxivPaper>();
  let fetchSuccess = false;

  const queries =
    topics.length > 0
      ? topics.map((topic) => {
          const categoryQuery = topic.arxivCategories.map((category) => `cat:${category}`).join(" OR ");
          const keywordQuery = topic.keywords
            .map((keyword) => `all:"${keyword.replaceAll('"', " ")}"`)
            .join(" OR ");
          return {
            id: topic.id,
            label: topic.name,
            query: `(${categoryQuery}) AND (${keywordQuery})`,
          };
        })
      : CATEGORIES.map((category) => ({
          id: "",
          label: category,
          query: `cat:${category}`,
        }));

  for (let i = 0; i < queries.length; i++) {
    const query = queries[i]!;
    if (i > 0) await sleep(ARXIV_REQUEST_DELAY_MS);

    try {
      const params = new URLSearchParams({
        search_query: query.query,
        sortBy: "submittedDate",
        sortOrder: "descending",
        max_results: String(ARXIV_MAX_RESULTS_PER_QUERY),
      });

      const resp = await fetchArxivResponse(`${API_URL}?${params}`, query.label);
      if (!resp) continue;

      fetchSuccess = true;
      const xml = await resp.text();

      // Split into entries
      const entryBlocks = xml.split("<entry>").slice(1);
      for (const block of entryBlocks) {
        const paper = parseEntry("<entry>" + block);
        if (paper) {
          const existing = seen.get(paper.id);
          if (existing) {
            if (query.id && !existing.topicIds.includes(query.id)) existing.topicIds.push(query.id);
          } else {
            if (query.id) paper.topicIds.push(query.id);
            seen.set(paper.id, paper);
          }
        }
      }

      console.log(`  [arxiv] ${query.label}: ${entryBlocks.length} candidates`);
    } catch (err) {
      console.error(`  [arxiv] ${query.label}: ${err}`);
    }
  }

  // Every topic uses the same rolling three-day publication window.
  const cutoff = Date.now() - ARXIV_LOOKBACK_DAYS * 24 * 60 * 60 * 1000;
  const recent = [...seen.values()]
    .filter((p) => new Date(p.published).getTime() > cutoff)
    .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());

  let papers: ArxivPaper[];
  if (topics.length > 0) {
    const selected = new Map<string, ArxivPaper>();
    for (const topic of topics) {
      for (const paper of recent
        .filter((item) => item.topicIds.includes(topic.id))
        .slice(0, topic.maxItems)) {
        selected.set(paper.id, paper);
      }
    }
    papers = [...selected.values()].sort(
      (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime(),
    );
  } else {
    papers = recent.slice(0, ARXIV_MAX_RESULTS);
  }

  markPreviouslySeen(papers, history);
  papers.sort(
    (a, b) =>
      Number(a.seenBefore) - Number(b.seenBefore) ||
      new Date(b.published).getTime() - new Date(a.published).getTime(),
  );

  const repeated = papers.filter((paper) => paper.seenBefore).length;
  console.log(
    `  [arxiv] ${papers.length} papers (from ${seen.size} unique; ` +
      `${papers.length - repeated} new, ${repeated} seen in the last 14 days)`,
  );
  return { papers, fetchSuccess, topics };
}
