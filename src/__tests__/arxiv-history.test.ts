import { describe, expect, it } from "vitest";
import type { ArxivPaper } from "../arxiv.ts";
import {
  ARXIV_MEMORY_DAYS,
  markPreviouslySeen,
  normalizeArxivId,
  updateArxivHistory,
  type ArxivHistory,
} from "../arxiv-history.ts";

function paper(id: string, title = "Test paper"): ArxivPaper {
  return {
    id,
    title,
    summary: "Summary",
    authors: ["Author"],
    published: "2026-07-23T00:00:00Z",
    updated: "2026-07-23T00:00:00Z",
    categories: ["cs.AI"],
    url: id,
    pdfUrl: id.replace("/abs/", "/pdf/"),
    topicIds: ["test"],
    seenBefore: false,
  };
}

describe("ArXiv history", () => {
  it("uses a two-week memory and normalizes versioned IDs", () => {
    expect(ARXIV_MEMORY_DAYS).toBe(14);
    expect(normalizeArxivId("https://arxiv.org/abs/2607.12345v3")).toBe("2607.12345");
  });

  it("marks a new version of a remembered paper as previously seen", () => {
    const history: ArxivHistory = {
      version: 1,
      updatedAt: "2026-07-22T00:00:00Z",
      papers: {
        "2607.12345": {
          title: "Earlier version",
          firstSeenAt: "2026-07-20T00:00:00Z",
          lastSeenAt: "2026-07-22T00:00:00Z",
        },
      },
    };
    const candidate = paper("https://arxiv.org/abs/2607.12345v2");

    markPreviouslySeen([candidate], history);

    expect(candidate.seenBefore).toBe(true);
    expect(candidate.firstSeenAt).toBe("2026-07-20T00:00:00Z");
  });

  it("drops entries older than 14 days and remembers today's candidates", () => {
    const now = new Date("2026-07-23T00:00:00Z");
    const history: ArxivHistory = {
      version: 1,
      updatedAt: "2026-07-01T00:00:00Z",
      papers: {
        old: {
          title: "Old",
          firstSeenAt: "2026-07-01T00:00:00Z",
          lastSeenAt: "2026-07-01T00:00:00Z",
        },
      },
    };

    const updated = updateArxivHistory(history, [paper("https://arxiv.org/abs/2607.99999v1")], now);

    expect(updated.papers.old).toBeUndefined();
    expect(updated.papers["2607.99999"]).toMatchObject({
      title: "Test paper",
      firstSeenAt: now.toISOString(),
      lastSeenAt: now.toISOString(),
    });
  });
});
