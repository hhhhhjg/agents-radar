import { describe, expect, it } from "vitest";
import { splitMarkdown } from "../feishu-research-preview.ts";

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
