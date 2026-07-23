/**
 * Generate only the configured ArXiv research radar.
 *
 * This entrypoint is used by the Feishu preview workflow so a test does not
 * generate unrelated reports, deploy Pages, create issues, or notify the
 * production group.
 */

import { fetchArxivData } from "./arxiv.ts";
import { loadConfig } from "./config.ts";
import { toCstDateStr, toUtcStr } from "./date.ts";
import { autoGenFooter } from "./report.ts";
import { saveArxivReport } from "./report-savers.ts";

async function main(): Promise<void> {
  const now = new Date();
  const dateStr = process.env["DIGEST_DATE"]?.trim() || toCstDateStr(now);
  const utcStr = toUtcStr(now);
  const { researchTopics } = loadConfig();

  if (!researchTopics.length) {
    throw new Error("No research_topics are configured in config.yml");
  }

  console.log(`[research-radar] Fetching ArXiv for ${researchTopics.length} configured topic(s)...`);
  const arxivData = await fetchArxivData(researchTopics);
  if (!arxivData.fetchSuccess) {
    throw new Error("ArXiv fetch failed");
  }
  if (!arxivData.papers.length) {
    throw new Error("ArXiv returned no papers matching the configured topics");
  }

  console.log(`[research-radar] Generating reports from ${arxivData.papers.length} matched paper(s)...`);
  await Promise.all([
    saveArxivReport(arxivData, utcStr, dateStr, "", autoGenFooter("zh"), "zh"),
    saveArxivReport(arxivData, utcStr, dateStr, "", autoGenFooter("en"), "en"),
  ]);

  console.log(`[research-radar] Generated Chinese and English reports for ${dateStr}.`);
}

main().catch((error: unknown) => {
  console.error("[research-radar]", error instanceof Error ? error.message : error);
  process.exit(1);
});
