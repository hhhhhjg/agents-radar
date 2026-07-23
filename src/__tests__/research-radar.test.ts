import { describe, expect, it } from "vitest";
import type { ArxivData } from "../arxiv.ts";
import { buildArxivPrompt } from "../prompts-data.ts";
import { annotateRepeatedArxivEntries, selectArxivDataForAudience } from "../report-savers.ts";

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
  });

  it("marks repeated papers prominently at the beginning of their entry", () => {
    const repeated = { ...data.papers[0]!, seenBefore: true };
    const report = "## Embodied Navigation\n\n1. **Dynamic Navigation with Spatial Memory**\nDetails";

    expect(annotateRepeatedArxivEntries(report, [repeated], "zh")).toContain(
      "🔁 **【过去14天内已出现】** 1. **Dynamic Navigation with Spatial Memory**",
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
});
