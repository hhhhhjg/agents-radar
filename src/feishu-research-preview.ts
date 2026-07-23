/**
 * Send the freshly generated Chinese research radar directly to Feishu.
 * Test and production use the same chat report; test mode only adds a label.
 */

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { toCstDateStr } from "./date.ts";
import { sendFeishu } from "./feishu.ts";

const MAX_CARD_MARKDOWN_LENGTH = 12_000;

export function splitMarkdown(markdown: string, maxLength = MAX_CARD_MARKDOWN_LENGTH): string[] {
  if (markdown.length <= maxLength) return [markdown];

  const sections = markdown.split(/(?=^##\s)/m);
  const chunks: string[] = [];
  let current = "";

  const flush = (): void => {
    if (current.trim()) chunks.push(current.trim());
    current = "";
  };

  for (const section of sections) {
    if (section.length > maxLength) {
      flush();
      const lines = section.split("\n");
      let partial = "";
      for (const line of lines) {
        if (partial && partial.length + line.length + 1 > maxLength) {
          chunks.push(partial.trim());
          partial = "";
        }
        partial += `${line}\n`;
      }
      if (partial.trim()) chunks.push(partial.trim());
      continue;
    }

    if (current && current.length + section.length > maxLength) flush();
    current += section;
  }

  flush();
  return chunks;
}

export function buildResearchCard(
  chunk: string,
  index: number,
  total: number,
  dateStr: string,
  isTest: boolean,
  pagesUrl?: string,
): { title: string; content: string } {
  const mention = index === 0 ? "<at id=all></at>\n\n" : "";
  const testLabel = index === 0 && isTest ? `**测试预览：以下内容由研究方向实时检索生成。**\n\n` : "";
  const normalizedPagesUrl = pagesUrl?.replace(/\/$/, "");
  const webLink =
    index === 0 && !isTest && normalizedPagesUrl
      ? `[查看网页汇总](${normalizedPagesUrl}/#${dateStr}/ai-arxiv)\n\n`
      : "";
  const title = `研究方向 Radar${isTest ? " 测试" : ""} · ${dateStr} (${index + 1}/${total})`;

  return {
    title,
    content: `${mention}${testLabel}${webLink}${chunk}`,
  };
}

async function main(): Promise<void> {
  const dateStr = process.env["DIGEST_DATE"]?.trim() || toCstDateStr(new Date());
  const isTest = process.env["FEISHU_TEST_MODE"] === "true";
  const pagesUrl = process.env["PAGES_URL"]?.replace(/\/$/, "");
  const reportPath = path.join("digests", dateStr, "ai-arxiv-chat.md");
  if (!fs.existsSync(reportPath)) {
    throw new Error(`Generated research report not found: ${reportPath}`);
  }

  const report = fs.readFileSync(reportPath, "utf-8").trim();
  const chunks = splitMarkdown(report);

  for (const [index, chunk] of chunks.entries()) {
    const card = buildResearchCard(chunk, index, chunks.length, dateStr, isTest, pagesUrl);
    await sendFeishu(card.title, card.content);
  }

  console.log(`[feishu-preview] Sent ${chunks.length} card(s) for ${dateStr}.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error: unknown) => {
    console.error("[feishu-preview]", error instanceof Error ? error.message : error);
    process.exit(1);
  });
}
