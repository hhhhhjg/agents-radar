/**
 * ArXiv AI papers fetched via the ArXiv API (Atom feed).
 *
 * Strategy: when research_topics are configured, query each topic with its
 * own keywords and categories. Results are tagged and capped per topic so one
 * broad direction cannot crowd out the rest of the report.
 */

import type { ResearchTopic } from "./config.ts";

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

/** Delay between requests (ArXiv asks for 3s). */
const REQUEST_DELAY_MS = 3000;

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

  return { id, title, summary, authors, published, updated, categories, url, pdfUrl, topicIds: [] };
}

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchArxivData(topics: ResearchTopic[] = []): Promise<ArxivData> {
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
    if (i > 0) await sleep(REQUEST_DELAY_MS);

    try {
      const params = new URLSearchParams({
        search_query: query.query,
        sortBy: "submittedDate",
        sortOrder: "descending",
        max_results: String(ARXIV_MAX_RESULTS_PER_QUERY),
      });

      const resp = await fetch(`${API_URL}?${params}`, {
        headers: { "User-Agent": "agents-radar/1.0" },
      });

      if (!resp.ok) {
        console.error(`  [arxiv] ${query.label}: HTTP ${resp.status}`);
        continue;
      }

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

  // Three days accommodates ArXiv's publication delay and sparse niche topics.
  const cutoff = Date.now() - 72 * 60 * 60 * 1000;
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

  console.log(`  [arxiv] ${papers.length} papers (from ${seen.size} unique)`);
  return { papers, fetchSuccess, topics };
}
