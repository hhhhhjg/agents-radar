import { describe, expect, it } from "vitest";
import { buildResearchCard, splitMarkdown } from "../feishu-research-preview.ts";

describe("splitMarkdown", () => {
  it("keeps a short report in one card", () => {
    expect(splitMarkdown("# Radar\n\nShort report", 100)).toEqual(["# Radar\n\nShort report"]);
  });

  it("prefers splitting at level-two headings", () => {
    const report = "# Radar\n\nIntro\n\n## Topic A\n\nAAAA\n\n## Topic B\n\nBBBB";
    const chunks = splitMarkdown(report, 30);

    expect(chunks).toEqual(["# Radar\n\nIntro", "## Topic A\n\nAAAA", "## Topic B\n\nBBBB"]);
  });
});

describe("buildResearchCard", () => {
  it("labels test cards and includes the generated report content", () => {
    const card = buildResearchCard("## 今日总览\n内容", 0, 1, "2026-07-23", true);

    expect(card.title).toContain("测试");
    expect(card.content).toContain("测试预览");
    expect(card.content).toContain("## 今日总览\n内容");
  });

  it("uses the same report content in production and adds the web link", () => {
    const card = buildResearchCard(
      "## 今日总览\n内容",
      0,
      1,
      "2026-07-23",
      false,
      "https://hhhhhjg.github.io/agents-radar/",
    );

    expect(card.title).not.toContain("测试");
    expect(card.content).toContain("## 今日总览\n内容");
    expect(card.content).toContain("https://hhhhhjg.github.io/agents-radar/#2026-07-23/ai-arxiv");
  });
});
