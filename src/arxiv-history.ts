/**
 * Persistent 14-day memory for ArXiv papers.
 *
 * IDs are normalized without the version suffix so v1/v2 of the same paper
 * share one memory entry.
 */

import fs from "node:fs";
import path from "node:path";
import type { ArxivPaper } from "./arxiv.ts";

export const ARXIV_HISTORY_PATH = "state/arxiv-history.json";
export const ARXIV_MEMORY_DAYS = 14;

export interface ArxivHistoryEntry {
  title: string;
  firstSeenAt: string;
  lastSeenAt: string;
}

export interface ArxivHistory {
  version: 1;
  updatedAt: string;
  papers: Record<string, ArxivHistoryEntry>;
}

export function normalizeArxivId(idOrUrl: string): string {
  const lastSegment = idOrUrl.trim().split("/").filter(Boolean).at(-1) ?? idOrUrl.trim();
  return lastSegment.replace(/v\d+$/i, "");
}

export function emptyArxivHistory(now = new Date()): ArxivHistory {
  return {
    version: 1,
    updatedAt: now.toISOString(),
    papers: {},
  };
}

export function loadArxivHistory(historyPath = ARXIV_HISTORY_PATH): ArxivHistory {
  if (!fs.existsSync(historyPath)) return emptyArxivHistory();

  try {
    const parsed = JSON.parse(fs.readFileSync(historyPath, "utf-8")) as Partial<ArxivHistory>;
    if (parsed.version !== 1 || !parsed.papers || typeof parsed.papers !== "object") {
      throw new Error("unsupported history format");
    }
    return {
      version: 1,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date().toISOString(),
      papers: parsed.papers,
    };
  } catch (error) {
    console.error(
      `[arxiv-history] Failed to read ${historyPath}; starting with empty memory: ` +
        `${error instanceof Error ? error.message : error}`,
    );
    return emptyArxivHistory();
  }
}

export function markPreviouslySeen(papers: ArxivPaper[], history: ArxivHistory): void {
  for (const paper of papers) {
    const previous = history.papers[normalizeArxivId(paper.id)];
    paper.seenBefore = Boolean(previous);
    paper.firstSeenAt = previous?.firstSeenAt;
  }
}

export function updateArxivHistory(
  history: ArxivHistory,
  papers: ArxivPaper[],
  now = new Date(),
): ArxivHistory {
  const nowIso = now.toISOString();
  const cutoff = now.getTime() - ARXIV_MEMORY_DAYS * 24 * 60 * 60 * 1000;
  const retained: Record<string, ArxivHistoryEntry> = {};

  for (const [id, entry] of Object.entries(history.papers)) {
    if (new Date(entry.lastSeenAt).getTime() >= cutoff) retained[id] = entry;
  }

  for (const paper of papers) {
    const id = normalizeArxivId(paper.id);
    const previous = retained[id] ?? history.papers[id];
    retained[id] = {
      title: paper.title,
      firstSeenAt: previous?.firstSeenAt ?? nowIso,
      lastSeenAt: nowIso,
    };
  }

  return {
    version: 1,
    updatedAt: nowIso,
    papers: retained,
  };
}

export function saveArxivHistory(
  history: ArxivHistory,
  papers: ArxivPaper[],
  now = new Date(),
  historyPath = ARXIV_HISTORY_PATH,
): ArxivHistory {
  const updated = updateArxivHistory(history, papers, now);
  fs.mkdirSync(path.dirname(historyPath), { recursive: true });
  fs.writeFileSync(historyPath, JSON.stringify(updated, null, 2) + "\n", "utf-8");
  console.log(
    `[arxiv-history] Remembering ${Object.keys(updated.papers).length} paper(s) for ` +
      `${ARXIV_MEMORY_DAYS} days.`,
  );
  return updated;
}
