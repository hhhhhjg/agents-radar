import { describe, it, expect, vi, afterEach } from "vitest";
import fs from "node:fs";
import { toRepoConfig, loadConfig } from "../config.ts";

// ---------------------------------------------------------------------------
// toRepoConfig
// ---------------------------------------------------------------------------

describe("toRepoConfig", () => {
  it("converts a basic entry", () => {
    const result = toRepoConfig({ id: "test", repo: "org/test", name: "Test" });
    expect(result).toEqual({ id: "test", repo: "org/test", name: "Test" });
  });

  it("includes paginated when true", () => {
    const result = toRepoConfig({ id: "test", repo: "org/test", name: "Test", paginated: true });
    expect(result).toEqual({ id: "test", repo: "org/test", name: "Test", paginated: true });
  });

  it("omits paginated when false", () => {
    const result = toRepoConfig({ id: "test", repo: "org/test", name: "Test", paginated: false });
    expect(result).not.toHaveProperty("paginated");
  });
});

// ---------------------------------------------------------------------------
// loadConfig
// ---------------------------------------------------------------------------

describe("loadConfig", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns defaults when config file does not exist", () => {
    vi.spyOn(fs, "existsSync").mockReturnValue(false);
    const config = loadConfig("/nonexistent/config.yml");
    expect(config.cliRepos.length).toBeGreaterThan(0);
    expect(config.skillsRepo).toBe("anthropics/skills");
    expect(config.openclaw.id).toBe("openclaw");
    expect(config.openclawPeers.length).toBeGreaterThan(0);
  });

  it("loads cli_repos from valid YAML", () => {
    vi.spyOn(fs, "existsSync").mockReturnValue(true);
    vi.spyOn(fs, "readFileSync").mockReturnValue(`
cli_repos:
  - id: custom
    repo: org/custom
    name: Custom Tool
skills_repo: custom/skills
`);
    const config = loadConfig("test.yml");
    expect(config.cliRepos).toHaveLength(1);
    expect(config.cliRepos[0]!.id).toBe("custom");
    expect(config.skillsRepo).toBe("custom/skills");
  });

  it("loads configurable research topics", () => {
    vi.spyOn(fs, "existsSync").mockReturnValue(true);
    vi.spyOn(fs, "readFileSync").mockReturnValue(`
research_topics:
  - id: embodied-navigation
    group: 具身智能
    name: 具身导航
    name_en: Embodied Navigation
    keywords: [embodied navigation, dynamic navigation]
    arxiv_categories: [cs.RO, cs.CV]
    max_items: 4
`);
    const config = loadConfig("test.yml");
    expect(config.researchTopics).toEqual([
      {
        id: "embodied-navigation",
        group: "具身智能",
        name: "具身导航",
        nameEn: "Embodied Navigation",
        keywords: ["embodied navigation", "dynamic navigation"],
        arxivCategories: ["cs.RO", "cs.CV"],
        maxItems: 4,
      },
    ]);
  });

  it("falls back to defaults for empty cli_repos", () => {
    vi.spyOn(fs, "existsSync").mockReturnValue(true);
    vi.spyOn(fs, "readFileSync").mockReturnValue("cli_repos: []");
    const config = loadConfig("test.yml");
    expect(config.cliRepos.length).toBeGreaterThan(0);
    expect(config.cliRepos[0]!.id).toBe("claude-code");
  });

  it("falls back to defaults for empty skills_repo", () => {
    vi.spyOn(fs, "existsSync").mockReturnValue(true);
    vi.spyOn(fs, "readFileSync").mockReturnValue("skills_repo: ''");
    const config = loadConfig("test.yml");
    expect(config.skillsRepo).toBe("anthropics/skills");
  });

  it("parses openclaw from YAML", () => {
    vi.spyOn(fs, "existsSync").mockReturnValue(true);
    vi.spyOn(fs, "readFileSync").mockReturnValue(`
openclaw:
  id: myclaw
  repo: org/myclaw
  name: MyClaw
  paginated: true
`);
    const config = loadConfig("test.yml");
    expect(config.openclaw).toEqual({ id: "myclaw", repo: "org/myclaw", name: "MyClaw", paginated: true });
  });

  it("falls back to default openclaw when incomplete", () => {
    vi.spyOn(fs, "existsSync").mockReturnValue(true);
    vi.spyOn(fs, "readFileSync").mockReturnValue("openclaw:\n  id: partial\n");
    const config = loadConfig("test.yml");
    expect(config.openclaw.id).toBe("openclaw"); // default
  });
});

describe("repository research configuration", () => {
  it("includes the point-cloud tracking direction and its tracking-focused keywords", () => {
    const topic = loadConfig("config.yml").researchTopics.find((item) => item.id === "point-cloud-tracking");

    expect(topic).toMatchObject({
      group: "视觉感知",
      name: "3D 点云感知与跟踪",
      nameEn: "3D Point Cloud Perception and Tracking",
      maxItems: 15,
    });
    expect(topic?.keywords).toEqual(
      expect.arrayContaining([
        "3D single object tracking",
        "point cloud tracking",
        "spatio-temporal point cloud modeling",
        "state space models Mamba",
        "sparse point cloud tracking",
        "multi-frame feature fusion",
      ]),
    );
  });
});
