import fs from "node:fs";
import path from "node:path";
import { load } from "js-yaml";
import { describe, expect, it } from "vitest";

interface WorkflowConfig {
  concurrency?: {
    group?: string;
    "cancel-in-progress"?: boolean;
    queue?: string;
  };
}

const workflowFiles = ["daily-digest.yml", "weekly-digest.yml", "monthly-digest.yml"];

describe("digest workflow concurrency", () => {
  it.each(workflowFiles)("serializes %s with the shared publish lock", (fileName) => {
    const filePath = path.join(process.cwd(), ".github", "workflows", fileName);
    const workflow = load(fs.readFileSync(filePath, "utf-8")) as WorkflowConfig;

    expect(workflow.concurrency).toEqual({
      group: "agents-radar-publish",
      "cancel-in-progress": false,
      queue: "max",
    });
  });

  it("uses the direct research report sender for test and production Feishu messages", () => {
    const filePath = path.join(process.cwd(), ".github", "workflows", "daily-digest.yml");
    const workflow = fs.readFileSync(filePath, "utf-8");

    expect(workflow.match(/pnpm notify:feishu:research-preview/g)).toHaveLength(2);
    expect(workflow).toContain('FEISHU_TEST_MODE: "true"');
  });
});
