import { describe, expect, it } from "vitest";
import type { ArxivData } from "../arxiv.ts";
import { buildArxivPrompt } from "../prompts-data.ts";
import {
  annotateRepeatedArxivEntries,
  buildEmptyArxivSummary,
  enforceArxivHeadingHierarchy,
  scorePaperForTopic,
  selectArxivDataForAudience,
} from "../report-savers.ts";

describe("research topics radar prompt", () => {
  const data: ArxivData = {
    fetchSuccess: true,
    topics: [
      {
        id: "embodied-navigation",
        group: "具身智能",
        name: "具身导航",
        nameEn: "Embodied Navigation",
        keywords: ["embodied navigation", "dynamic navigation"],
        arxivCategories: ["cs.RO", "cs.CV"],
        maxItems: 5,
      },
      {
        id: "event-camera",
        group: "视觉感知",
        name: "事件相机视觉感知",
        nameEn: "Event Camera Perception",
        keywords: ["event camera"],
        arxivCategories: ["cs.CV"],
        maxItems: 5,
      },
    ],
    papers: [
      {
        id: "https://arxiv.org/abs/2607.00001",
        title: "Dynamic Navigation with Spatial Memory",
        summary: "A method for long-horizon embodied navigation in dynamic scenes.",
        authors: ["Alice", "Bob"],
        published: "2026-07-23T00:00:00Z",
        updated: "2026-07-23T00:00:00Z",
        categories: ["cs.RO"],
        url: "https://arxiv.org/abs/2607.00001",
        pdfUrl: "https://arxiv.org/pdf/2607.00001",
        topicIds: ["embodied-navigation"],
        seenBefore: false,
      },
    ],
  };

  it("keeps dynamic navigation under embodied navigation", () => {
    const prompt = buildArxivPrompt(data, "2026-07-23", "zh");
    expect(prompt).toContain("具身智能 / 具身导航");
    expect(prompt).toContain("Dynamic Navigation with Spatial Memory");
    expect(prompt).toContain("每个方向最多保留 5 篇高相关论文");
    expect(prompt).toContain("同一论文如果匹配多个方向，只放入最相关的一个方向");
    expect(prompt).toContain("具身导航：1 篇新文献，0 篇过去14天内已出现");
    expect(prompt).toContain("事件相机视觉感知：0 篇新文献，0 篇过去14天内已出现");
    expect(prompt).toContain("即使某方向没有新论文也必须列出");
    expect(prompt).toContain("今日暂无新论文");
  });

  it("marks repeated papers prominently at the beginning of their entry", () => {
    const repeated = { ...data.papers[0]!, seenBefore: true };
    const report = "## Embodied Navigation\n\n#### **Dynamic Navigation with Spatial Memory**\nDetails";

    expect(annotateRepeatedArxivEntries(report, [repeated], "zh")).toContain(
      "#### 🔁 **【过去14天内已出现】** **Dynamic Navigation with Spatial Memory**",
    );
  });

  it("enforces main, sub-direction, and paper heading levels", () => {
    const report =
      "#### 具身智能 / 具身导航\n" + "Dynamic Navigation with Spatial Memory\n" + "作者：Alice, Bob";

    expect(enforceArxivHeadingHierarchy(report, data)).toBe(
      "## 具身智能\n" +
        "### 具身导航\n" +
        "#### Dynamic Navigation with Spatial Memory\n" +
        "作者：Alice, Bob",
    );
  });

  it("keeps repeated papers on the web but removes them from chat", () => {
    const repeatedData: ArxivData = {
      ...data,
      papers: [{ ...data.papers[0]!, seenBefore: true }],
    };

    expect(selectArxivDataForAudience(repeatedData, "web").papers).toHaveLength(1);
    expect(selectArxivDataForAudience(repeatedData, "chat").papers).toHaveLength(0);
  });

  it("builds a complete no-new-papers report instead of failing on an empty result", () => {
    const summary = buildEmptyArxivSummary({ ...data, papers: [] }, "zh");

    expect(summary).toContain("### 今日总览");
    expect(summary).toContain("**具身智能 / 具身导航**：今日暂无新论文。");
    expect(summary).toContain("**视觉感知 / 事件相机视觉感知**：今日暂无新论文。");
    expect(summary).toContain("## 具身智能\n\n### 具身导航\n\n今日暂无新论文。");
    expect(summary).toContain("## 视觉感知\n\n### 事件相机视觉感知\n\n今日暂无新论文。");
  });

  it("caps Feishu at three new papers and the web at ten papers per topic", () => {
    const manyPapers: ArxivData = {
      ...data,
      papers: Array.from({ length: 12 }, (_, index) => ({
        ...data.papers[0]!,
        id: `https://arxiv.org/abs/2607.${String(index + 1).padStart(5, "0")}`,
        title: `Navigation Paper ${index + 1}`,
      })),
    };

    expect(selectArxivDataForAudience(manyPapers, "chat").papers).toHaveLength(3);
    expect(selectArxivDataForAudience(manyPapers, "web").papers).toHaveLength(10);
  });

  it("prioritizes new papers first, then ranks them by keyword relevance", () => {
    const looselyRelated = {
      ...data.papers[0]!,
      id: "loose",
      title: "A General Robotics System",
      summary: "A navigation method.",
      published: "2026-07-23T03:00:00Z",
    };
    const stronglyRelated = {
      ...data.papers[0]!,
      id: "strong",
      title: "Dynamic Navigation for Embodied Agents",
      summary: "Embodied navigation with spatial memory.",
      published: "2026-07-23T01:00:00Z",
    };
    const repeatedStrong = {
      ...stronglyRelated,
      id: "repeated",
      seenBefore: true,
      published: "2026-07-23T04:00:00Z",
    };
    const rankedData: ArxivData = {
      ...data,
      papers: [looselyRelated, repeatedStrong, stronglyRelated],
    };

    expect(scorePaperForTopic(stronglyRelated, data.topics[0]!.keywords)).toBeGreaterThan(
      scorePaperForTopic(looselyRelated, data.topics[0]!.keywords),
    );
    expect(selectArxivDataForAudience(rankedData, "web").papers.map((paper) => paper.id)).toEqual([
      "strong",
      "loose",
      "repeated",
    ]);
  });

  it("asks the model for the exact stepped Markdown hierarchy", () => {
    const prompt = buildArxivPrompt(data, "2026-07-23", "zh");

    expect(prompt).toContain("`## 主方向名`");
    expect(prompt).toContain("`### 子方向名`");
    expect(prompt).toContain("`#### [文献标题](ArXiv 链接)`");
    expect(prompt).toContain("禁止把主方向和子方向");
  });

  it("requires every Feishu topic and at most three new papers", () => {
    const prompt = buildArxivPrompt(data, "2026-07-23", "zh", {
      maxPapersPerTopic: 3,
      includeEmptyTopics: true,
    });

    expect(prompt).toContain("每个方向最多保留 3 篇高相关论文");
    expect(prompt).toContain("必须列出每一个已配置方向");
    expect(prompt).toContain("今日暂无新论文");
    expect(prompt).toContain("未出现过的新论文最优先");
    expect(prompt).toContain("与该方向关键词的相关度由高到低");
  });

  it("supports the ten-paper web limit", () => {
    const prompt = buildArxivPrompt(data, "2026-07-23", "zh", {
      maxPapersPerTopic: 10,
    });

    expect(prompt).toContain("每个方向最多保留 10 篇高相关论文");
  });
});
