# AI CLI Tools Community Digest 2026-07-23

> Generated: 2026-07-23 04:46 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Developer Tools: Cross-Tool Comparison Report — 2026-07-23

## 1. Ecosystem Overview

The AI CLI developer tools landscape is maturing rapidly, with seven actively maintained open-source projects competing for developer mindshare. The ecosystem is characterized by intense feature parity pressure—Claude Code's `/plan` workflow spawns copies across Codex, Copilot CLI, and Kimi Code—while each tool carves differentiation through provider lock-in, agent orchestration depth, or extensibility architecture. The most acute pain points cluster around three areas: **billing/auth reliability at scale** (Claude Code's Fable 5 Max-plan regression, OpenCode's subscription outage), **subagent orchestration fidelity** (Gemini CLI's false-GOAL reporting, Copilot CLI's `task_complete` regression), and **cross-platform polish** (Windows event-loop starvation, Wayland browser-agent gaps, WSL2 clipboard quoting). Platform-specific bugs remain the single largest category of developer frustration across *every* tool. Notably, two emerging themes—AST-aware tooling and enterprise external-memory integration—signal that the next competitive frontier is **context economy** rather than raw capability.

## 2. Activity Comparison (Last 24 Hours)

| Tool | Hot Issues (10 deepest) | Key PRs (significant) | Release Status |
|---|---|---|---|
| **Claude Code** | 10 (1,644 cumulative comments) | 9 (1 merged) | v2.1.218 shipped (background `/code-review`) |
| **OpenAI Codex** | 10 (202 cumulative comments) | 10 (9 merged) | 4 alpha releases (rust-v0.146.0-alpha.1–4) |
| **Gemini CLI** | 10 (high-priority P1/P2 bugs) | 10 (5 merged) | v0.52.0 stable + v0.53.0-preview.0 |
| **GitHub Copilot CLI** | 10 (33–6 👍 range) | 2 (0 merged, 1 withdrawn) | v1.0.74-1 through 74-3 shipped |
| **Kimi Code** | 2 (small community) | 3 (0 merged) | No releases (latest: v0.29.0) |
| **OpenCode** | 10 (185 👍 peak) | 10 (1 merged) | No releases (videos only) |
| **Pi** | 10 (9 👍 peak) | 10 (5 merged) | No releases (latest: v0.80.x) |
| **Qwen Code** | 10 (+2 CI failures) | 10 (0 merged) | Benchmark prerelease only |
| **DeepSeek TUI (CodeWhale)** | 10 (17 comments peak) | 10 (8 merged) | v0.9.1 RC in integration |

**Observation**: Claude Code and OpenAI Codex dominate raw community volume; Gemini CLI and Qwen Code show strongest infrastructure investment; Copilot CLI and DeepSeek TUI ship most frequently but with narrow scopes.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Voicing | Specific Needs |
|---|---|---|
| **Subagent orchestration visibility** | Claude Code, Gemini CLI, Copilot CLI, Kimi Code, OpenCode | Subagent trajectories shareable (#22598), credit breakdown by agent (#4207), model pinning on resume (#76363), per-agent model selection (#2533) |
| **Configurable context/compaction thresholds** | Claude Code, Copilot CLI, Pi, Qwen Code | Auto-compact trigger after every turn (#6879), configurable threshold (#1688), compaction on output token limit (#6993) |
| **MCP/plugin ecosystem stability** | Claude Code, Codex, Gemini CLI, Qwen Code | Empty allowlist blocking all tools (#80365), OAuth issuer validation failures (#31573), publishing pipeline silent failures (#80263), catalog caching (#34849) |
| **Model and cost control** | Codex, Copilot CLI, Pi, Kimi Code | Restrictable model pool (#4218), per-agent credit usage (#4207), provider-reported cost (#6881), cost-tiered sub-agent assignment (#2533) |
| **AST-aware file reading** | Gemini CLI, Claude Code (implicit) | Replace naive reads with AST parsing to reduce token waste (#22745), token-efficient code understanding (#22746) |
| **Enterprise deployment polish** | Qwen Code, Claude Code, Pi | External memory integration (#7449), disk cleanup for managed artifacts (#7524), OAuth PKCE flows (#6927) |
| **Platform parity (Linux, Windows, Wayland)** | Claude Code, Codex, Copilot CLI, Gemini CLI, Qwen Code | Windows hibernate/resume spin (#80404), Wayland browser agent (#21983), WSL2 clipboard (#3534), mobile browser compat (#5958) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|---|
| **Primary model ecosystem** | Anthropic (Claude) | OpenAI (GPT-4o/o1) | Google (Gemini 2.5/3) | Multi-provider (BYOK) | Moonshot (Kimi) | Multi-provider | Multi-provider | Qwen | Multi-provider |
| **Agent architecture** | Background subagents, Cowork/Ultraplan | Multi-agent v2, auto-resolution | A2A protocol, subagent delegation | Autopilot mode, skill chaining | Sub-agent delegation | Plugin-driven, external API | AgentHarness tool abstraction | Goal v3 state protocol | Work agent concept |
| **Extensibility** | MCP plugins, /planwith | Plugin catalog (scoped caching) | Skills, sub-agent configs | Custom agents, MCP | Third-party API proxying | Plugin API, current API | Provider SDKs, extensible TUI | MCP, VS Code companion | Skills (default pack) |
| **Key differentiator** | Cowork Live Artifacts, /ultraplan teleport | Customizable status line (demanded) | Eval coverage, A2A protocol | GitHub ecosystem integration, sandbox | Moonshot API compatibility | Plugin-centric architecture, auto-discovery | Constrained sampling, constrained generation | Cold-start optimization, enterprise CI | Unified skill management, theme system |
| **Target user** | Pro/solo devs, Anthropic ecosystem | Multi-model power users | R&D teams, Google Cloud | Enterprise, GitHub orgs | Moonshot/Kimi ecosystem | Plugin developers, power users | Self-hosted, provider-flexible | Chinese enterprise, Qwen ecosystem | Enthusiasts, multi-provider |

**Strategic Insight**: Claude Code and OpenAI Codex are locked in a feature war with near-complete parity on core capabilities. Gemini CLI differentiates through infrastructure maturity (A2A, eval coverage). Copilot CLI leverages GitHub lock-in but suffers from low PR velocity. Pi and OpenCode occupy the "open infrastructure" niche. Kimi Code and DeepSeek TUI serve smaller, more focused communities.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|---|---|---|
| **High momentum, high maturity** | Claude Code, OpenAI Codex | Daily releases, 50+ active issues each, high PR throughput, dedicated billing/security teams responding to incidents |
| **Rapid iteration, maturing** | Gemini CLI, Qwen Code | Multiple releases/day (Gemini), CI automation maturing (Qwen Code auto-fix), enterprise feature investment |
| **Stable, incremental** | Copilot CLI, Pi | Patch releases only, slow PR pipelines, but responsive to critical bugs |
| **Niche, pre-stable** | Kimi Code, DeepSeek TUI | Small issue counts, single-contributor PRs, release-candidate debugging |

**Maturity Markers**:
- **CI/CD maturity**: Qwen Code's autofix system (auto-rerun, auto-restick) and Gemini's eval-coverage command represent the most advanced infrastructure quality assurance.
- **Security responsiveness**: Gemini CLI patched a variable-expansion bypass (GHSA-wpqr-6v78-jr5g) within hours; DeepSeek TUI tracks 17 Dependabot alerts as release blockers.
- **Community trust erosion risk**: Claude Code's Fable 5 billing regression and OpenCode's subscription outage both involve paying customers unable to use the product—these incidents reduce confidence in commercial reliability.

---

## 6. Trend Signals

### High-Confidence Signals (multiple tools, data-backed)

1. **The "context budget" is the new bottleneck.** AST-aware tooling, configurable compaction thresholds, and system prompt tiering all point to a market realizing that context window size is no longer the constraint—*token efficiency* is. Tools that minimize waste per action will win.

2. **Multi-agent orchestration is the core UX battleground.** Every tool has a subagent concept, and every community reports the same pain point: agents fail silently, misreport outcomes, or fail to delegate. The tool that solves "agentic observability" (credit breakdown, trajectory sharing, failure transparency) first will have a durable advantage.

3. **Billing and auth are the weakest links.** Three of the nine tools had active billing/auth outages today affecting paying subscribers. As these tools move from early adopter to enterprise adoption, payment pipeline robustness and session persistence (OAuth state, token refresh) are table stakes that many projects still struggle with.

4. **Cross-platform quality is a differentiator.** Windows, Linux, Wayland, WSL2, macOS File Provider—each is a source of distinct, reproducible bugs. The tools with the broadest platform coverage (Claude Code, Copilot CLI, Gemini CLI) also have the longest platform-bug tail. There is an opportunity for a tool that nails cross-platform consistency.

5. **Enterprise features are accelerating.** External memory integration, managed artifact cleanup, OAuth PKCE flows, and plan-execution DAG views (Qwen Code #7525) are all enterprise-adjacent capabilities appearing in community requests. The shift from "personal coding assistant" to "team agent platform" is underway.

### Weaker Signals (speculative, worth watching)

- **Decline of single-provider lock-in**: Even Claude Code and Gemini CLI users demand BYOK/multi-provider options. The ecosystem rewards **provider flexibility**.
- **Self-hosted TUI attrition**: Pi's httpIdleTimeoutMs regression and Pi's temp directory pollution suggest that self-hosted users are less forgiving of regressions than cloud users.
- **Terminal UI as differentiator**: Codex's #17827 (customizable status line, 119 👍) and Pi's grapheme-width alignment (#6987) indicate growing sophistication in TUI expectations. The terminal is no longer "good enough"—users want bespoke chromes.

### Reference Value for Developers

If you are choosing an AI CLI tool today:
- **For stability and ecosystem integration**: Copilot CLI (if GitHub-bound) or Claude Code (if Anthropic ecosystem).
- **For multi-provider flexibility and extensibility**: OpenCode (plugins) or Pi (constrained sampling, provider SDKs).
- **For enterprise-ready infrastructure**: Gemini CLI (A2A, eval coverage) or Qwen Code (CI automation, enterprise memory).
- **Avoid until billing/subscription issues stabilize**: OpenCode (ongoing outage), Claude Code (Fable 5 Max-plan regression—monitor #79337 resolution).
- **Most likely to consolidate in 6-12 months**: Kimi Code and DeepSeek TUI, which serve small ecosystems with limited differentiation.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

*Data as of 2026-07-23 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The following Pull Requests received the highest community discussion traction based on comment volume. All are currently **open**.

1. **fix(skill-creator): run_eval.py always reports 0% recall** ([#1298](https://github.com/anthropics/skills/pull/1298))  
   *Function:* Fixes the skill evaluation pipeline — the core tooling that measures whether a skill description correctly triggers on test queries. The bug rendered the entire description-optimization loop (run_loop.py, improve_description.py) ineffective by returning `recall=0%` for every candidate. The fix installs the eval artifact as a real skill, corrects Windows stream reading, trigger detection, and parallel workers.  
   *Discussion highlights:* Community members independently reproduced the bug across 10+ environments; the PR addresses issues #556, #1169, #1329, and #1061. Critical for any skill author using the optimizer.

2. **Add document-typography skill** ([#514](https://github.com/anthropics/skills/pull/514))  
   *Function:* Prevents orphan words, widow paragraphs, and numbering misalignment in AI-generated documents. A universal typographic quality gate for all document outputs.  
   *Discussion highlights:* Users noted these problems affect every Claude-generated document; the skill fills a gap no other existing skill covers.

3. **Add ODT skill** ([#486](https://github.com/anthropics/skills/pull/486))  
   *Function:* Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods). Triggers on mentions of ODT, ODS, LibreOffice.  
   *Discussion highlights:* Strong demand for ISO-standard office format support; complements existing DOCX and PDF skills.

4. **Improve frontend-design skill** ([#210](https://github.com/anthropics/skills/pull/210))  
   *Function:* Revises the existing frontend-design skill for clarity and actionability — ensuring every instruction is followable within a single conversation.  
   *Discussion highlights:* Community feedback highlighted the need for more specific, behavior-steering guidance in design-oriented skills.

5. **Add skill-quality-analyzer and skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83))  
   *Function:* Two meta-skills that evaluate other skills across five dimensions (structure, documentation, quality, security, and performance).  
   *Discussion highlights:* Users see these as essential governance tools for organizations adopting Claude Code Skills at scale.

6. **Add testing-patterns skill** ([#723](https://github.com/anthropics/skills/pull/723))  
   *Function:* Comprehensive skill covering the full testing stack: unit testing (AAA pattern), React Testing Library, integration tests, and end-to-end patterns.  
   *Discussion highlights:* High interest from development teams wanting Claude to enforce consistent testing practices.

7. **feat(skills): add self-audit — mechanical verification + reasoning quality gate** ([#1367](https://github.com/anthropics/skills/pull/1367))  
   *Function:* A universal audit skill that first mechanically verifies all claimed output files exist, then performs a four-dimension reasoning audit in damage-severity priority order.  
   *Discussion highlights:* Novel approach to output quality assurance; sparked debate on whether auditing should be a built-in feature rather than a skill.

8. **Add color-expert skill** ([#1302](https://github.com/anthropics/skills/pull/1302))  
   *Function:* Self-contained color expertise for naming systems (ISCC-NBS, Munsell, RAL), color space selection tables, and cultural color connotation guidance.  
   *Discussion highlights:* Appeals to designers and data visualization authors; noted as a well-structured example of a domain-specific skill.

---

## 2. Community Demand Trends

From the most active Issues, community demand clusters into four directions:

- **Security & Trust Boundaries** — Issue [#492](https://github.com/anthropics/skills/issues/492) (43 comments) reveals concern that community skills distributed under the `anthropic/` namespace create impersonation risk. Users want clear provenance marking and permission scoping.
- **Organizational Skill Sharing** — Issue [#228](https://github.com/anthropics/skills/issues/228) (14 comments) requests native org-wide skill libraries, eliminating the current manual `.skill` file sharing workflow.
- **Reliability of Skill Tooling** — Issues [#556](https://github.com/anthropics/skills/issues/556), [#1061](https://github.com/anthropics/skills/issues/1061), and [#1169](https://github.com/anthropics/skills/issues/1169) collectively surface that `run_eval.py` is broken on Windows and produces 0% trigger rate even on correct descriptions. This is the #1 blocker for skill authors.
- **New Skill Domains** — Proposals for `agent-governance` ([#412](https://github.com/anthropics/skills/issues/412)), `compact-memory` ([#1329](https://github.com/anthropics/skills/issues/1329)), and a `reasoning quality gate pipeline` ([#1385](https://github.com/anthropics/skills/issues/1385)) indicate community appetite for skills that manage agent behavior and context, beyond pure document or code generation.

---

## 3. High-Potential Pending Skills

These PRs are open, actively discussed, and likely to land soon:

| PR | Skill | Impact |
|----|-------|--------|
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | Immediately improves every document Claude produces. |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT / OpenDocument | Fills a key office-format gap. |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | Standardizes test generation across tech stacks. |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit | Novel output verification pipeline. |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel (retro game engine) | Unique creative domain with dedicated MCP server. |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality / security analyzer | Governance meta-skills for enterprise adoption. |

Additionally, critical fixes such as [#1298](https://github.com/anthropics/skills/pull/1298) and [#1099](https://github.com/anthropics/skills/pull/1099) are high-priority but are infrastructure repairs rather than new skill submissions.

---

## 4. Skills Ecosystem Insight

**The community’s most concentrated demand is for reliable skill evaluation tooling and governance mechanisms** — users cannot scale their skill usage without fixing the broken `run_eval.py` pipeline on Windows, and they cannot trust community skills without clear security provenance and organizational sharing capabilities.

---

# Claude Code Community Digest — 2026-07-23

## Today's Highlights

Version **v2.1.218** ships a quality-of-life improvement: `/code-review` now runs as a background subagent, preventing the review output from cluttering the conversation and keeping stacked slash commands as the review target. On the bug front, two issues dominate community discussion – a **Fable 5 usage-credit error on Max plans** (#79337, 35 comments) and a **macOS Desktop extension dispatch failure** (#80002, 57 comments) – both signalling friction around model access and tool dispatch. Additionally, a new Windows event-loop starvation bug (#80404) and a Cowork Live Artifacts MCP allowlist problem (#80365) surfaced today.

## Releases

**v2.1.218** — [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.218)
- `/code-review` now runs as a **background subagent** – review work no longer fills the conversation and stacked slash commands remain its review target.
- Added **screen-reader announcements** for deleted text when using word/line deletion shortcuts (`Option+Delete`, `Ctrl+W`, `Cmd+Backspace`).

No other versions were published in the last 24 hours.

## Hot Issues (10 of 50 total, most commented)

1. **[#80002 – macOS: Claude Desktop never dispatches tools/call to first-party Filesystem extension](https://github.com/anthropics/claude-code/issues/80002)**  
   *57 comments, 👍25*  
   **Why it matters:** Tools/list succeeds but tools/call is never dispatched, effectively breaking file-system access for desktop users. High community engagement suggests widespread impact. Filed July 22, still open.

2. **[#79337 – Fable 5 prompts 'usage credits required' on Max plan](https://github.com/anthropics/claude-code/issues/79337)**  
   *35 comments, 👍9*  
   **Why it matters:** The day Fable 5 became standard on Max plans, users saw silent downgrades to Opus 4.8 with a "usage credits required" message. Points to a billing/integration bug between plan entitlements and model routing.

3. **[#56897 – Max Account downgraded from Max to Free Plan mid-subscription](https://github.com/anthropics/claude-code/issues/56897)**  
   *9 comments, 👍3*  
   **Why it matters:** Long-running auth/billing issue (since May 7) where active Max subscriptions are silently reverted to Free. Likely a payments pipeline regression that continues to affect a subset of users.

4. **[#65330 – Desktop App Cowork: AskUserQuestion never renders; hangs until session stop](https://github.com/anthropics/claude-code/issues/65330)**  
   *8 comments*  
   **Why it matters:** Regression since June 3 in local-agent / Cowork mode. Users cannot approve or deny prompts – the session auto-denies after a timeout. Previously filed as #26940.

5. **[#77966 – Claude account /login OAuth loop on Linux/IntelliJ](https://github.com/anthropics/claude-code/issues/77966)**  
   *8 comments, 👍6*  
   **Why it matters:** "Sign in again to continue" redirect drops the OAuth state parameter, causing an infinite loop. Affects Linux and IntelliJ platform users. High upvote ratio.

6. **[#48024 – Ultraplan teleport: refined plan does not return to originating CLI session](https://github.com/anthropics/claude-code/issues/48024)**  
   *7 comments, 👍7*  
   **Why it matters:** A core UX promise of `/ultraplan` – refining a plan on claude.ai and having the result teleport back to the CLI – is broken. High community desire (👍7).

7. **[#80263 – Plugin submissions "Published" but never appear in directory; stuck duplicates](https://github.com/anthropics/claude-code/issues/80263)**  
   *5 comments*  
   **Why it matters:** Plugin publishing pipeline has a silent failure mode: submissions reach "Published" status but never propagate to the public directory. Also reports stuck duplicate entries.

8. **[#80404 – Windows: Event-loop starvation causing ~200% CPU spin and input lag after hibernate/resume](https://github.com/anthropics/claude-code/issues/80404)**  
   *4 comments*  
   **Why it matters:** Newly filed today. Self-terminates after tens of minutes, linked to the same libuv loop bug as #62308 (macOS). Windows users finally have a tracked reproduction.

9. **[#80055 – Cannot purchase API credits in Japan; card authorization succeeds but payment fails](https://github.com/anthropics/claude-code/issues/80055)**  
   *3 comments*  
   **Why it matters:** Regional payment regression. Multiple cards fail, including newly issued ones. Indicates a backend payment processing issue for Japanese users.

10. **[#80365 – Cowork Live Artifacts: mcp_tools allowlist never populated on some accounts](https://github.com/anthropics/claude-code/issues/80365)**  
    *1 comment*  
    **Why it matters:** Every runtime `callMcpTool` is rejected because the allowlist is empty. Blocks all MCP tool usage in Live Artifacts for affected accounts. Filed today.

## Key PR Progress (9 PRs updated in last 24h)

1. **[#18217 (CLOSED) – feat(plugins): add /planwith command for inline plan mode prompts](https://github.com/anthropics/claude-code/pull/18217)**  
   Closed today. Adds `/planwith <prompt>` to skip the two-step `/plan` toggle workflow – a long-standing feature request.

2. **[#80353 (OPEN) – docs(gcp): stop on checksum mismatch](https://github.com/anthropics/claude-code/pull/80353)**  
   Hardens GCP gateway deployment script to abort on binary checksum mismatch instead of continuing. Small but critical security fix.

3. **[#80326 (OPEN) – Add account profiles plugin](https://github.com/anthropics/claude-code/pull/80326)**  
   Experimental plugin for managing isolated `CLAUDE_CONFIG_DIR` environments when switching between personal, work, or client accounts on one machine. Addresses multi-account pain.

4. **[#80294 (OPEN) – docs: fix 1 broken link via archive.org](https://github.com/anthropics/claude-code/pull/80294)**  
   Automated fix using Wayback Machine for a broken npmjs link in README.

5. **[#80241 (OPEN) – fix: Console scrolling to top when Claude adds text](https://github.com/anthropics/claude-code/pull/80241)**  
   Addresses a TUI scrolling regression where new output forces the user to the top of history.

6. **[#80229 (OPEN) – docs: fix 1 broken link via archive.org](https://github.com/anthropics/claude-code/pull/80229)**  
   Another automated link fix (separate broken URL from #80294).

7. **[#80196 (OPEN) – fix: Auto-compact never triggers despite 100% context used](https://github.com/anthropics/claude-code/pull/80196)**  
   Fixes a bug where auto-compact remains idle even when statusline reports full context. Users on Max/200K mode are forced to manually compact.

8. **[#80195 (OPEN) – fix: Instantly hitting usage limits with Max subscription](https://github.com/anthropics/claude-code/pull/80195)**  
   Proposed fix for the Fable 5 / Max plan credit issue (#79337) – addresses a billing counter logic error.

9. **[#80112 (OPEN) – Make devcontainer firewall init resilient to DNS resolution failures](https://github.com/anthropics/claude-code/pull/80112)**  
   Devcontainers now survive transient DNS failures without aborting the entire firewall setup.

## Feature Request Trends

- **Interrupt/steer during active turns** (#77724): Several developers want the ability to stop or redirect Claude mid-turn instead of having new messages queued until the current action completes.
- **Plan teleport consistency** (#48024, #18217): The `/ultraplan` round-trip from CLI to web and back is unreliable; the `/planwith` PR (closed) formalizes a long-requested inline planning flow.
- **Model pinning on resume** (#76363): Users running autonomous ticket-runner sessions want `--resume` to warn or pin the original model to prevent unexpected cost/quality changes.
- **Plugin directory reliability** (#80263): A request for removing stuck duplicate plugin entries and fixing the silent "Published → never appears" pipeline.
- **Cowork local-agent improvements** (#65330, #80365): Better rendering of `AskUserQuestion` and consistent MCP tool allowlist propagation are top-of-mind for desktop users.

## Developer Pain Points

1. **Fable 5 billing confusion on Max plans** (#79337, #79410, #80195): Silent downgrades, "usage credits required" errors, and session locks are generating significant frustration. The incident on July 20 – when Fable 5 became standard – appears to have triggered multiple billing and routing regressions.

2. **OAuth / login instability** (#77966, #79688): OAuth state-parameter drops and expired tokens without refresh attempts create persistent loop barriers, particularly on Linux and VS Code extension first-launch scenarios.

3. **Cowork and desktop mode bugs** (#80365, #80177, #80435, #78368): Empty MCP allowlists, iOS Simulator crash-loops on macOS 27.0 beta, silent artifact versioning loss, and a security issue where custom Cowork root settings were overwritten – all undermine the desktop experience.

4. **TUI inconsistency** (#72495, #77144, #79919, #80436): Inline prompt suggestions silently stop working on Windows and Linux after updates; GUI apps report the same issue. Also, Japanese locale tooltip transliteration "ディフ" reads as unnatural.

5. **Event-loop and power bugs on Windows** (#80404): After hibernate/resume, the idle session spins ~200% CPU and becomes unresponsive, mirroring a previously closed macOS bug (#62308). No fix yet.

6. **Context isolation and transcript persistence** (#80431, #80434): `/clear` is bypassed on session resumption, and mid-turn assistant text is not persisted to JSONL logs – impacting auditability for autonomous agent workflows.

7. **Plugin publishing pipeline stuck** (#80263): Despite reaching "Published" status, plugins never appear in the public directory – a silent failure that blocks developer distribution.

---

*Generated from GitHub data for `anthropics/claude-code` as of 2026-07-23. All issue/PR links point to the corresponding GitHub pages.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-23

## Today's Highlights
Four new `rust-v0.146.0-alpha` releases landed today, continuing the stream of nightly builds. Community attention remains focused on persistent SQLite log churn on macOS (44 comments), a long-standing demand for customizable terminal status lines (119 👍), and a critical OAuth issuer validation bug (45 👍) affecting CLI users. On the PR side, the team merged several infrastructure improvements—agent mail wake-up, plugin catalog caching, and analytics flushing—as well as a notable policy change to disable image generation for free-tier accounts.

---

## Releases
Four incremental alpha releases for the Rust TUI were published in the last 24 hours:
- `rust-v0.146.0-alpha.1`
- `rust-v0.146.0-alpha.2`
- `rust-v0.146.0-alpha.3`
- `rust-v0.146.0-alpha.4`

No changelog details are available; the versions likely contain minor fixes and internal iterations.

---

## Hot Issues (Top 10 by community activity)

1. **[#29532] macOS: Persistent SQLite TRACE log churn remains after rust-v0.142.0**  
   *Labels: bug, performance* · 44 comments · 8 👍  
   Summary: Partial fix helped with websocket endpoints, but `~/.codex/logs_2.sqlite` still spins heavy TRACE logging. Users are frustrated the regression wasn’t fully resolved.  
   https://github.com/openai/codex/issues/29532

2. **[#17827] Customizable status line (TUI)**  
   *Labels: enhancement, TUI, config* · 31 comments · 119 👍  
   Summary: Request to add a user-configurable bottom bar showing token usage, model, git branch, etc. — inspired by Claude Code. Very high community demand.  
   https://github.com/openai/codex/issues/17827

3. **[#33685] Weekly limit is draining like the old 5-hour limit**  
   *Labels: bug, rate-limits* · 20 comments · 9 👍  
   Summary: Despite the shift to weekly caps, users report the same rapid consumption pattern. The issue indicates a flawed tracking or billing logic for heavy models.  
   https://github.com/openai/codex/issues/33685

4. **[#19504] Add full RTL text support for Arabic & Hebrew users**  
   *Labels: enhancement, app* · 20 comments · 19 👍  
   Summary: Arabic text renders incorrectly in both Chat and Codex panels. Community is asking for native RTL direction support.  
   https://github.com/openai/codex/issues/19504

5. **[#31573] OAuth authentication fails at issuer validation**  
   *Labels: bug, auth, MCP, CLI* · 19 comments · 45 👍  
   Summary: Free-plan CLI users cannot complete OAuth because issuer validation rejects the provider. Blocks MCP access entirely for affected accounts.  
   https://github.com/openai/codex/issues/31573

6. **[#25319] Scope VS Code chats to the current workspace/project**  
   *Labels: enhancement, extension, session* · 17 comments · 47 👍  
   Summary: Chat history is currently global; users want per-workspace isolation to avoid cross-project confusion.  
   https://github.com/openai/codex/issues/25319

7. **[#26764] Login failed — token exchange fails on Windows**  
   *Labels: bug, auth, Windows* · 15 comments · 0 👍  
   Summary: Token exchange error `token_exchange_failed` persists on Windows for some Plus subscribers, suggesting a regional or proxy issue with `auth.openai.com`.  
   https://github.com/openai/codex/issues/26764

8. **[#14745] VS Code extension 26.x fails to load webview (ServiceWorker error) on Windows**  
   *Labels: bug, Windows, app* · 13 comments · 6 👍  
   Summary: Extension webview crashes on Windows 10/Server 2016 due to a ServiceWorker initialization failure. Long-standing issue with no confirmed fix.  
   https://github.com/openai/codex/issues/14745

9. **[#31987] Auto-recharge of credits keeps getting turned back on**  
   *Labels: bug, codex-web, app* · 12 comments · 2 👍  
   Summary: Users who disable auto-recharge find the toggle re-enabled after every credit purchase. Labeled “crime” by a Pro ×20 user.  
   https://github.com/openai/codex/issues/31987

10. **[#29639] Browser Use Node REPL fails in Windows Desktop with WSL workspace**  
    *Labels: bug, Windows, MCP, tool-calls* · 11 comments · 3 👍  
    Summary: The Node REPL MCP server sends Windows binaries but Linux/WSL sandbox paths, causing `unmapped sandboxCwd` errors. Blocks browser automation in WSL setups.  
    https://github.com/openai/codex/issues/29639

---

## Key PR Progress (Top 10 by impact)

1. **[#34852] Wake sleeping threads for queued agent mail**  
   *Merged* — Idle threads with durable sleep now resume when agent work arrives, fixing a class of stalled sub-agent scenarios.  
   https://github.com/openai/codex/pull/34852

2. **[#34851] Use batch metadata for plugin app summaries**  
   *Merged* — Plugin metadata is fetched in batches of 100 via the authenticated batch API, improving performance and resilience when many plugins are installed.  
   https://github.com/openai/codex/pull/34851

3. **[#34850] Disable image generation for Free-plan accounts**  
   *Merged* — The `image_generation` tool is now skipped for free-tier users at registration time. No impact on paid plans or model capabilities.  
   https://github.com/openai/codex/pull/34850

4. **[#34849] Cache remote plugin catalogs by scope**  
   *Merged* — Global, user, and workspace plugin catalogs are now cached on disk (3‑hour TTL) with background refresh. Reduces repeated network calls on startup.  
   https://github.com/openai/codex/pull/34849

5. **[#31817] Update models.json**  
   *Open* — Automated PR to keep the model registry current. Contains the latest supported model IDs and capabilities.  
   https://github.com/openai/codex/pull/31817

6. **[#34847] Use Guardian model limits for review sessions**  
   *Merged* — Fixes a bug where parent context-window overrides (for a different model) leaked into Guardian review sessions, causing inaccurate token enforcement.  
   https://github.com/openai/codex/pull/34847

7. **[#34846] Allow custom providers to opt into standalone web search**  
   *Merged* — Adds a `supports_standalone_web_search` provider flag (default `false`). Custom model providers can now enable the `web.run` tool.  
   https://github.com/openai/codex/pull/34846

8. **[#34845] Track multi-agent mode in world state**  
   *Merged* — Multi-agent mode instructions are now stored in the durable world state, surviving history changes without re-emitting setup hints.  
   https://github.com/openai/codex/pull/34845

9. **[#34840] Add persisted thread pinning to the app server**  
   *Merged* — Users can now pin/unpin threads via `thread/metadata/update`, and filter pinned threads via `thread/list`. Persisted in the database.  
   https://github.com/openai/codex/pull/34840

10. **[#34839] Preserve user input when MCP startup is interrupted**  
    *Merged* — Previously, interrupting a turn while MCP tools were still starting could lose the submitted user prompt. Now the input is recorded reliably.  
    https://github.com/openai/codex/pull/34839

---

## Feature Request Trends
The most requested feature directions from recent issues:

- **Terminal UI customization** — High demand (119 👍) for a configurable status line in the TUI, mirroring Claude Code. Also requests to pin the prompt input box to the bottom of the viewport (#26311, 8 👍).
- **Workspace scoping** — Users want VS Code chat history to be isolated per project/workspace (#25319, 47 👍).
- **RTL/globalization** — Arabic and Hebrew text support (RTL rendering) is a growing concern (#19504, 19 👍).
- **Inline diffs in desktop app** — The desktop app currently only shows “edited file” without changes, while the CLI shows inline diffs. Users want parity (#24513, 3 👍).
- **Permanent opt-out of auto-resolution** — A new request to disable the `autoResolutionMs` feature permanently, as it breaks `/plan` workflows (#34310, 0 👍 but filed this week).

---

## Developer Pain Points
Recurring frustrations and high-frequency issues across the community:

- **Windows ecosystem bugs** — Multiple long-standing issues on Windows: webview ServiceWorker crash (#14745), token exchange failures (#26764), excessive `taskkill.exe` spawns (#33778), and WSL sandbox path mismatches (#29639). Windows users face a disproportionately high bug rate.
- **Rate-limit confusion** — Despite the switch to weekly limits, users report rapid draining similar to the old 5-hour limit (#33685). There is also persistent frustration with unwanted auto-recharge toggling (#31987).
- **MCP integration fragility** — OAuth issuer validation failures (#31573) and resource parameter omissions during refresh (#33403) block MCP server connectivity. Interrupting MCP startup could previously lose user input (now fixed in PR #34839).
- **macOS SQLite log churn** — High disk I/O from TRACE logging continues to affect macOS users after a partial fix (#29532), degrading system performance.
- **Multi-agent UX regressions** — The new multi-agent v2 interface hides model overrides and rejects default call shapes (#32031, 14 👍). Users consider this a critical regression.
- **Session/data loss** — Tasks disappearing from the sidebar after updates (#33727), stale project chats in VS Code (#34457), and remote-control projects missing from the Mac sidebar (#31407) erode trust in session persistence.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-23

## Today's Highlights

Three releases landed today, including the stable v0.52.0 and a new v0.53.0-preview.0 that addresses a critical A2A protocol bug. The community remains focused on agent reliability, with two high-priority issues around subagent false-success reporting and generalist agent hangs continuing to draw attention. A new eval coverage command was also shipped in the nightly, signaling growing investment in systematic testing infra.

---

## Releases

**v0.52.0** (stable) — [Release notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0)
- Refactor: exclude transient CI config files from workspace context (PR #28216)
- feat(caretaker-triage): add triage worker core foundational modules (PR #28472)

**v0.52.0-nightly.20260723.g9681621c6** — [Release notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260723.g9681621c6)
- fix(core): sequentially verify cached credentials and restore `GOOGLE_APPLICATION_CREDENTIALS` fallback (PR #28472)
- feat(evals): add eval coverage report command (PR #28169)

**v0.53.0-preview.0** — [Release notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0-preview.0)
- fix(core, a2a): group cancelled tool responses and coalesce consecutive roles to prevent 400 Bad Request (PR #28407)
- feat(caretaker-triage): implement LLM triage orchestrator and container build (PR #28408)

---

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   *priority/p1, kind/bug*  
   A `codebase_investigator` subagent that hits its turn limit reports `status: "success"` and `Termination Reason: "GOAL"`, even though it performed zero analysis. This masks failures and misleads orchestrator logic. High community engagement (12 comments).

2. **[#21409 — Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   *priority/p1, kind/bug*  
   Users report that simple file operations cause the generalist agent to hang indefinitely (up to an hour). Workaround exists—disabling subagent delegation—but this is a critical UX blocker. 8 👍.

3. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**  
   *priority/p1, kind/customer-issue*  
   An EPIC tracking the evolution from behavioral evals (76 tests) toward fine-grained component-level testing. Signals a maturing QA strategy.

4. **[#22745 — Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**  
   *priority/p2, kind/feature*  
   Investigates whether AST-aware tools can reduce token waste and improve precision when reading code. Potential for fewer turns and better context.

5. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   *priority/p2, kind/bug*  
   Users report the model rarely invokes custom skills or sub-agents autonomously, even when the task is directly related. Purely anecdotal but widely felt.

6. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   *priority/p2, kind/bug*  
   Sessions the extraction agent decides to skip (low-signal) remain “unprocessed” and are resurfaced repeatedly, causing wasted LLM calls. Needs a quarantine mechanism.

7. **[#25166 — Shell command execution gets stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   *priority/p1, kind/bug*  
   Simple CLI commands (e.g., `ls`) leave the shell in “Awaiting user input” state after finishing. Replicates reliably; 3 👍.

8. **[#22232 — Enhance browser_agent resilience: Automatic session takeover and lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232)**  
   *priority/p3, kind/feature*  
   `browser_agent` uses a fail-fast strategy on locked profiles; users want automatic retry or session takeover instead of hard failure.

9. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   *priority/p1, kind/bug*  
   Wayland users cannot use the browser subagent; it terminates with “GOAL” without completing. Desktop Linux users affected.

10. **[#20079 — Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)**  
    *priority/p2, kind/bug*  
    `~/.gemini/agents/filename.md` as a symlink is silently ignored. Users managing agent configs via dotfile repos find this a blocking issue.

---

## Key PR Progress

1. **[#28485 — Add gemini-3.5-flash to model selector](https://github.com/google-gemini/gemini-cli/pull/28485)**  
   Fixes a regression where users on v0.51.0 cannot select newer flash models. The model selector only surfaced `gemini-2.5-flash`; this PR adds dynamic detection.

2. **[#28410 — Shorten MCP tools/list discovery timeout](https://github.com/google-gemini/gemini-cli/pull/28410)**  
   *priority/p1*  
   MCP servers that don't respond (or respond with mismatched JSON-RPC IDs) could freeze CLI startup for 10 minutes. Now fails fast with a short timeout.

3. **[#28403 — Block $VAR and ${VAR} expansion bypass (GHSA-wpqr-6v78-jr5g)](https://github.com/google-gemini/gemini-cli/pull/28403)**  
   *priority/p1, area/security*  
   Completes an incomplete security check for variable expansion. Also hardens the automated issue-dedup workflow. Defense-in-depth fix.

4. **[#28406 — Apply modelIdResolutions to tool sub-agent configs](https://github.com/google-gemini/gemini-cli/pull/28406)**  
   *priority/p1*  
   `web-search`, `web-fetch`, and other utility tools hardcoded `gemini-3-flash-preview`, causing 400 errors for API-key users without preview access. Now resolved.

5. **[#28469 — Rotate session ID on model fallback](https://github.com/google-gemini/gemini-cli/pull/28469)**  
   Prevents stateful API errors (`Please submit a new query`) when permanent fallback to `gemini-2.5-flash` occurs. Rotates the session ID to reset server state.

6. **[#28509 — Filter thought parts from getHistoryTurns](https://github.com/google-gemini/gemini-cli/pull/28509)**  
   Prevents internal monologue/thinking parts from leaking into history when context management is disabled, which caused duplicate reasoning blocks.

7. **[#28404 — Override genai version of google-auth-library to 10.9.0](https://github.com/google-gemini/gemini-cli/pull/28404)**  
   A pin fix to resolve a dependency conflict in the auth library. Small but important for build stability.

8. **[#28169 — Add eval coverage report command](https://github.com/google-gemini/gemini-cli/pull/28169)**  
   New `eval:coverage` command cross-references eval inventory with the tool registry, reporting which built-in tools are covered by evals. Shipped in the nightly.

9. **[#28431 — Cloud Run job, Workflows, and Dockerfile for PR generator](https://github.com/google-gemini/gemini-cli/pull/28431)**  
   Foundational infrastructure for a SSR code generation pipeline—containerized runtime, Cloud Run Job specs, and Eventarc-triggered Workflows.

10. **[#28508 / #28507 — Changelogs for v0.52.0 and v0.53.0-preview.0](https://github.com/google-gemini/gemini-cli/pull/28508)**  
    Automated changelog generation for the two new releases. Routine but essential for release transparency.

---

## Feature Request Trends

- **AST-aware tooling** (#22745, #22746): Multiple issues push for replacing naive file reads with Abstract Syntax Tree parsing to reduce token waste and improve code understanding precision.
- **Subagent orchestration visibility** (#22598, #21432, #21763): Users want subagent trajectories shareable via `/chat share`, inclusion of subagent context in `/bug` reports, and better agent self-awareness about its own CLI flags and hotkeys.
- **Memory system hardening** (#26522, #26523, #26525): Requests for deterministic redaction, quarantine of invalid memory patches, and prevention of indefinite retries on low-signal sessions.
- **Terminal/UI resilience** (#21924, #24935): Ongoing demand for flicker-free terminal resize behavior and corruption recovery after external editor usage.
- **Non-destructive agent behavior** (#22672): Agents should avoid `git reset --force` and other destructive commands when safer alternatives exist.

---

## Developer Pain Points

- **Agent reliability regressions**: The most vocal pain points involve agents failing silently (false `GOAL` success, hangs, stuck shell commands). Issues like #22323 and #21409 represent serious trust-breaking bugs.
- **Shell execution fragility**: Commands hanging after completion (#25166), getting stuck at interactive prompts (#22465), and the model writing temp scripts in random directories (#23571) are recurring complaints.
- **Perceived underutilization of user-defined agents**: Even when skills and sub-agents are explicitly configured, the model rarely uses them autonomously (#21968). This undermines the value proposition of custom agent definitions.
- **Configuration and permission confusion**: Symlinked agents not recognized (#20079), settings.json overrides ignored (#22267), and sub-agents running despite being disabled (#22093) indicate inconsistent configuration semantics.
- **Browser agent platform gaps**: Wayland users (#21983) and those needing session lock recovery (#22232) find the browser agent unreliable on Linux desktop environments.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-23

## Today's Highlights
Three patch releases (v1.0.74-1 through 74-3) rolled out, adding Gemini 3.6 Flash support and a first-run splash for sandbox opt-in. On the issue tracker, a regression in the infinite React/Ink render loop (#4222) and persistent clipboard bugs on WSL2 (#3534) are drawing community attention, while a highly upvoted feature request for PDF reading (#443) continues to gather support.

---

## Releases
Three versions were published in the last 24 hours:

- **v1.0.74-3** and **v1.0.74-2** – minor fixes and changes.
- **v1.0.74-1** – Adds first-run splash screen to opt into the default sandbox; introduces support for **Gemini 3.6 Flash**. Also improves session multiplexing (picker leakage fixed) and the `$` interactive shell shortcut.

No breaking changes were reported.

---

## Hot Issues (10 picked)

1. **[#443 – Built-in PDF Reading Support](https://github.com/github/copilot-cli/issues/443)** (33👍, 6💬)  
   *Feature request*: High demand from academics and technical document users who currently must install external tools. Community strongly supports native PDF parsing.

2. **[#3534 – WSL2 (ARM64) `/copy` fails with `clip.exe` quoting bug](https://github.com/github/copilot-cli/issues/3534)** (4👍, 5💬)  
   *Bug*: Clipboard operations break on ARM64 WSL2 due to cmd.exe quoting. Affects daily workflows for Windows-on-Arm users.

3. **[#4016 – BYOK still rejected in `--acp` mode (regression 1.0.61–1.0.68)](https://github.com/github/copilot-cli/issues/4016)** (4👍, 5💬)  
   *Bug*: Custom provider authentication fails under `--acp` despite working normally. Enterprise users are blocked; maintainers previously marked similar issues fixed.

4. **[#4163 – Zombie processes accumulate on Linux](https://github.com/github/copilot-cli/issues/4163)** (2👍, 3💬)  
   *Bug*: Subprocesses not reaped, leading to ~2 zombies/minute per session. Performance concern for long-running sessions.

5. **[#4206 – MCP environment footer stuck on "Loading" forever](https://github.com/github/copilot-cli/issues/4206)** (2👍, 2💬)  
   *Bug*: Under org MCP policies, the status bar never transitions to "loaded" even when `/env` works. Impairs trust in CLI state.

6. **[#1688 – Configurable auto-compaction threshold](https://github.com/github/copilot-cli/issues/1688)** (5👍, 2💬)  
   *Feature*: Users of large-context models (e.g., Claude Opus) want to trigger compaction earlier than default to avoid latency spikes.

7. **[#4161 – `task_complete` tool unavailable after switching back to autopilot](https://github.com/github/copilot-cli/issues/4161)** (1👍, 2💬)  
   *Regression*: Despite a previous fix, the tool is again filtered out in certain mode transitions. Breaks agent orchestration.

8. **[#4222 – Regression of #2802: Infinite render loop on v1.0.72+](https://github.com/github/copilot-cli/issues/4222)** (0👍, 0💬, triage)  
   *Bug*: "Maximum update depth exceeded" returns on Windows/VSCode integrated terminal. Panels freeze and output is swallowed.

9. **[#4218 – Allow users to configure the model pool used by Auto mode](https://github.com/github/copilot-cli/issues/4218)** (6👍, 0💬)  
   *Feature*: Auto mode selects from all available models, but users cannot restrict the pool. Cost and behavior unpredictability is a top concern.

10. **[#4207 – Show per-subagent AI credit usage breakdown in /usage](https://github.com/github/copilot-cli/issues/4207)** (6👍, 0💬)  
    *Feature*: Ability to see granular credit consumption by sub-agent. Important for cost-conscious teams.

---

## Key PR Progress

Only two pull requests were updated in the last 24 hours:

- **[#4228 – Withdrawn: incorrect scope for #3534](https://github.com/github/copilot-cli/pull/4228)**  
  *Closed*: Author withdrew after realizing the fix addressed documentation instead of the private clipboard implementation. Source branch deleted.

- **[#3163 – ViewSonic monitor](https://github.com/github/copilot-cli/pull/3163)**  
  *Open*: This PR appears unrelated to `copilot-cli` (title and description reference a monitor) and may be accidental or spam.

No substantive code changes are pending review.

---

## Feature Request Trends

From issues created or updated in the last 24 hours, the most desired capabilities are:

- **Model and cost control** – Configure the model pool for Auto mode (#4218), configure retry counts (#4210), and see per-agent credit usage (#4207).
- **Better file support** – Native PDF reading (#443) and configurable context compaction thresholds (#1688).
- **Agent extensibility** – Explicit inline invocation and chaining of custom agents (#4208), a `skill` tool alias for custom agents (#4209), and support for subagent credit accountability.
- **Terminal integration** – OSC 133 sequences for shell navigation (#3428) and improved tmux compatibility (#4223, #4212).
- **Observability** – Show deferred vs. actual MCP tool-schema footprint in `/context` (#4189).

---

## Developer Pain Points

Several themes reoccur across the issue tracker:

- **Platform-specific regressions** – Windows freezes (#4222, #4165), WSL2 clipboard quoting (#3534), Alpine/musl auto-update mismatches (#3696), and tmux rendering bugs (#4212, #4223).
- **Enterprise authentication instability** – BYOK/`--acp` mode repeatedly broken (#4016) and MCP handshake stalls (#4206).
- **Subprocess and resource leaks** – Zombie processes (#4163) and crashes on exit (#4217) frustrate long-running sessions.
- **False positives in permission scanner** – Misclassifying git `-L` arguments and `gh api` read-only commands as dangerous (#4221, #4220).
- **Server error spam** – Numerous transient errors during subagent tasks (#4226) degrade reliability.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-07-23

## Today's Highlights
No new releases dropped today, but the community flagged a regression in 0.29.0 where third‑party API endpoints (e.g., Nvidia nim) break due to an unsupported `prompt_cache_key` parameter – a fix is already in PR #2535. Meanwhile, a feature request for per‑agent model selection (#2533) surfaced, reflecting growing interest in cost‑optimised multi‑agent workflows.

## Releases
No new versions published in the last 24 hours. The latest stable release remains **0.29.0**.

## Hot Issues

1. **#2534** – **[bug] Model API error 400 Validation: Unsupported parameter(s): `prompt_cache_key`**  
   *Author: dewrama*  
   Regression in 0.29.0 breaks third‑party Kimi‑compatible endpoints (Nvidia nim models on Windows). The `prompt_cache_key` parameter is now being sent to all APIs, but only Moonshot's official endpoints support it. Community reaction: 0 👍 so far, but the issue is fresh and the accompanying PR (#2535) already scopes the parameter correctly.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2534)

2. **#2533** – **[Feature] Per-agent model selection for sub-agents**  
   *Author: bob0x-ai*  
   Users want the ability to assign different models to sub‑agents independently of the session’s default model. This would enable cost‑tiered multi‑agent workflows (cheap models for simple tasks, capable models for complex reasoning). No comments yet, but it aligns with ongoing multi‑agent adoption.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2533)

## Key PR Progress

1. **#2535** – **[fix(llm): scope prompt cache keys to Moonshot APIs]**  
   *Author: Sanjays2402*  
   Directly addresses #2534. The PR ensures that the `prompt_cache_key` parameter is only sent to official Moonshot endpoints, leaving third‑party Kimi‑compatible APIs unaffected. Session caching for Moonshot users is preserved.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2535)

2. **#2524** – **[fix(tools): count StrReplaceFile replacements against the running content]**  
   *Author: Sreekant13*  
   Fixes a bug where chained `StrReplaceFile` edits reported replacement counts based on the original file content instead of the current state after previous edits. This caused false negatives for edits that produce new text later replaced. PR resolves #2526. Updated last on 2026-07-22.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2524)

3. **#2530** – **[fix(shell): stop blocking until timeout when a detached child holds the pipes]**  
   *Author: ayaangazali*  
   Resolves #2468. The foreground shell path now checks the exit code earlier instead of waiting indefinitely for stdout/stderr EOF when a detached child (e.g., `some_daemon & echo done`) holds the pipes open. Updated last on 2026-07-22.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2530)

## Feature Request Trends
- **Per‑agent model assignment** (#2533) is the most concrete new request – users want granular control over which model powers each sub‑agent to optimise cost and capability.
- Earlier requests (not in this digest’s 24h window but visible in the project) continue to centre on improved multi‑agent orchestration, custom tool chains, and better third‑party API compatibility.

## Developer Pain Points
- **Third‑party API breakage after updates** (#2534): The most immediate pain point – a 0.29.0 change silently broke compatibility with non‑Moonshot endpoints. Developers using Nvidia nim, OpenRouter, or similar proxies are directly affected.
- **Shell subprocess deadlocks** (PR #2530): Detached child processes holding pipes caused CLI hangs, a subtle but frustrating issue for users running long‑running commands in the foreground.
- **Chained file edit counting** (PR #2524): Incorrect replacement counts in `StrReplaceFile` misled users about whether their edits succeeded, reducing trust in the tool’s feedback loop.

*Digest generated from GitHub data for MoonshotAI/kimi-cli – 2026-07-23 UTC.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the **OpenCode Community Digest** for **2026-07-23**.

---

## 1. Today's Highlights

Today's activity is dominated by a critical **Go subscription outage**: all models return "Request blocked by upstream provider" (#38218), prompting urgent investigation. Simultaneously, a major batch of PRs from contributor **Brendonovich** is advancing a new "current API" for external clients, adding endpoints for session archival, VCS metadata, and PTY shell tokens. Finally, the community is reacting strongly to a potential **regression in v1.18.4**, with reports of models returning no response (#38422) and the Build/Plan toggle disappearing (#38421).

## 2. Releases

No new public versions were shipped in the last 24 hours. The only release artifact is a set of verification videos for PR #38252.

- [PR #38252 verification videos](https://github.com/anomalyco/opencode/issues?q=pr-38252-videos)

## 3. Hot Issues

1.  **[#38218] (OPEN) All subscription models return "Request blocked by upstream provider"** — **Critical.** A showstopper bug for paying users. Every model call via the Go subscription fails uniformly, with 22 comments in less than 24 hours indicating wide impact. The root cause is actively being investigated. [Issue #38218](https://github.com/anomalyco/opencode/issues/38218)

2.  **[#6231] (OPEN) Auto-discover models from OpenAI-compatible endpoints** — **Top Voted.** The most upvoted open feature request (+185 👍). Users managing local providers (Ollama, LM Studio) are frustrated by manual `opencode.json` edits as models change frequently. [Issue #6231](https://github.com/anomalyco/opencode/issues/6231)

3.  **[#7101] (CLOSED) Allow custom system prompts in global, project or custom directories** — **Most Discussed.** This long-running feature request (123 👍, 35 comments) has finally been closed, likely meaning it has been implemented or rejected. It originated from discussions about writing shorter, more effective system prompts. [Issue #7101](https://github.com/anomalyco/opencode/issues/7101)

4.  **[#38445] (OPEN) Using Tencent Work Buddy to connect OpenCode Go** — A new compliance-related inquiry. A user is trying to use OpenCode Go as a backend for a third-party agent but cannot find the correct Base URL. The `[needs:compliance]` label suggests this may require documentation or API adjustments. [Issue #38445](https://github.com/anomalyco/opencode/issues/38445)

5.  **[#26091] (OPEN) LLM response headers are discarded** — A persistent plugin development blocker. Proxy routers (like LiteLLM) return routing metadata in HTTP headers, which are stripped before plugins can access them. This prevents building intelligent proxy-aware plugins. [Issue #26091](https://github.com/anomalyco/opencode/issues/26091)

6.  **[#38378] (OPEN) kimi-k3 fails on /v1/messages but succeeds on /v1/chat/completions** — A provider-specific bug where the Anthropic-compatible endpoint is broken for a specific model while the OpenAI-compatible one works. This suggests a mismatch in how the Go gateway routes messages. [Issue #38378](https://github.com/anomalyco/opencode/issues/38378)

7.  **[#38422] (CLOSED) No response after prompting in v1.18.4** — A concerning report of a complete failure to generate any response. The user tried multiple prompts, reboots, and windows. This was closed, possibly as a duplicate of the broader #38218 subscription issue. [Issue #38422](https://github.com/anomalyco/opencode/issues/38422)

8.  **[#38416] (CLOSED) The new UI is "as ugly as feces"** — A strong negative reaction to a UI update. While the language is harsh, it signals that a recent UX change has frustrated a segment of users. This was likely closed without action. [Issue #38416](https://github.com/anomalyco/opencode/issues/38416)

9.  **[#25582] (CLOSED) Add "Fork to new session" from message timeline** — A feature request to fork conversations from any message, not just the start. This was closed, indicating it may have been implemented in the Desktop app. [Issue #25582](https://github.com/anomalyco/opencode/issues/25582)

10. **[#21911] (CLOSED) AI edit strips TypeScript generics** — A persistent bug where the edit tool removes `<...>` generic syntax from TSX/TS files. The user noted it occurs across all models, pointing to a systemic issue in the edit tool's parsing logic. [Issue #21911](https://github.com/anomalyco/opencode/issues/21911)

## 4. Key PR Progress

1.  **[#38452] (OPEN) fix(llm): preserve response message phases** — Adds proper handling of `phase` metadata (e.g., `commentary`, `final_answer`) from OpenAI Responses API streams. This enables better splitting and display of multi-phase assistant messages. [PR #38452](https://github.com/anomalyco/opencode/pull/38452)

2.  **[#38453] (OPEN) fix(provider): preserve Mistral reasoning history** — Fixes how Mistral's "thinking" chunks are serialized. Ensures reasoning is preserved separately from final output, fixing a regression where delimiters were missing. [PR #38453](https://github.com/anomalyco/opencode/pull/38453)

3.  **[#38423] (OPEN) feat(ai): preserve raw finish reasons** — Standardizes how finish reasons (e.g., `stop`, `length`, `content_filter`) are reported across all major providers. Exposes both a normalized and raw value, crucial for plugin authors and debugging. [PR #38423](https://github.com/anomalyco/opencode/pull/38423)

4.  **[#38443] to [#38437] (OPEN) feat(*): "Current API" stack by Brendonovich** — A series of 7 PRs building a client-facing "current API" for remote control:
    -   `feat(project)` (#38443): Update project names/icons.
    -   `feat(vcs)` (#38442): Expose Git/Mercurial branch metadata.
    -   `feat(pty)` (#38441): List shells and issue connection tokens.
    -   `feat(session)` (#38440): Archive/unarchive sessions.
    -   `feat(command)` (#38438): Identify command sources (config/plugin/MCP).
    -   `feat(server)` (#38437): Expose server directory paths (home, state, config).
    -   `chore(client)` (#38444): Regenerate client libraries. [PR #38443](https://github.com/anomalyco/opencode/pull/38443)

5.  **[#38432] (OPEN) fix(session): finalize assistant messages on failure** — A critical bug fix. When a turn fails (e.g., upstream provider error), the assistant message is now properly marked as "failed" instead of being left in a hanging state, preventing UI inconsistencies. [PR #38432](https://github.com/anomalyco/opencode/pull/38432)

6.  **[#38398] (OPEN) feat(tui): add turn token usage diagnostics** — Adds a detailed token usage panel to the TUI. It groups steps, shows cache read statistics, and highlights cache-busting events. A major win for developer visibility and cost optimization. [PR #38398](https://github.com/anomalyco/opencode/pull/38398)

7.  **[#38418] (OPEN) fix(web): fix model not responding when local client time is behind server time** — Fixes a subtle bug in the web client where local/ server time differences caused message ordering issues, leading to silent failures. [PR #38418](https://github.com/anomalyco/opencode/pull/38418)

8.  **[#37973] (OPEN) fix(opencode): make mini resize replay opt-in** — Fixes a major pain point in mini mode where every terminal resize would clear and replay the entire session. Making this behavior opt-in improves the streaming experience significantly. [PR #37973](https://github.com/anomalyco/opencode/pull/37973)

9.  **[#38449] (CLOSED) fix(core): default custom model capabilities** — A bot-led fix ensuring that user-defined custom models default to having tool support and standard input/output capabilities, preventing silent failures on unlisted models. [PR #38449](https://github.com/anomalyco/opencode/pull/38449)

10. **[#38367] (OPEN) refactor(core): canonicalize tool outcomes** — A significant refactor of tool execution. It defines a single canonical outcome type for tool results, replacing multiple parallel representations. This improves internal consistency and plugin predictability. [PR #38367](https://github.com/anomalyco/opencode/pull/38367)

## 5. Feature Request Trends

- **Provider & Model Management:** The community strongly demands **auto-discovery of models** from local providers (#6231) and better support for **ACP-backed agents** (#28991) to use OpenCode with other AI backends.
- **Session Lifecycle:** Users want finer control over sessions, including **forking from any message** (#25582), **configurable auto-rename** after N messages (#29002), and **durable archival** (#38440).
- **Plugin & API Extensibility:** There is a clear push to expose more data to plugins. Requests include raw **prompt/output message bodies** (#22831) and **LLM response headers** (#26091) for proxy routing metadata.
- **Developer Tooling:** Users are requesting simple built-in tools like `cp` (#29017) and slash commands like `/effort` and `/goal` (#29030) to control agent behavior without complex configurations.

## 6. Developer Pain Points

- **Subscription Reliability:** The **#1 pain point today** is the Go subscription outage (#38218), reinforcing the need for robust upstream error handling and faster rollback procedures.
- **Model Compatibility Issues:** Recurring errors with new Qwen models ("System message must be at the beginning" for #16560 and #20785) and failures on specific endpoints (#38378) highlight the difficulty of keeping pace with rapidly evolving provider APIs.
- **Desktop Memory & Performance:** Windows users report **memory growth to 3-4GB** with multiple tabs (#25490), and renderer process crashes from infinite recursions (#28984) suggest underlying stability issues with the session UI layer.
- **Editor & UI Regressions:** Recent updates have introduced regressions, including **Ctrl+A not selecting all text** (#25637), **Home/End keys broken** (#29053), and a **missing Build/Plan toggle** in v1.18.4 (#38421), eroding user trust in the release cycle.
- **Edit Tool Hallucinations:** The AI's edit tool continues to strip valid syntax (TS generics in #21911) and produce garbled output for certain models (#18031), indicating a need for more robust diff parsing.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-23

## Today's Highlights

The community is actively discussing two critical bugs: auto-compaction failing to trigger before provider overflow (#6879) and Copilot Enterprise compaction returning errors (#6768). Meanwhile, several long-awaited features landed, including native OpenRouter OAuth support (#6927), StepFun China/global providers (#6960), and a new AgentHarness execution tool abstraction (#6916). A fix for non-abortable provider retries (#6980) is also under review, addressing a long-standing reliability pain point.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **#6768 – Compaction using Copilot Enterprise not possible** (open, 9👍)  
   Users on Copilot Enterprise licenses cannot compact context — OpenAI returns a 421 error, Anthropic models also fail. High community demand for a fix.  
   [GitHub](https://github.com/earendil-works/pi/issues/6768)

2. **#6879 – auto-compaction never triggers after context grows past 100%** (open)  
   In a long agentic session, compaction only kicked in after the provider rejected the request at 373k tokens. The user proposes checking after every agentic turn, not just on API overflow.  
   [GitHub](https://github.com/earendil-works/pi/issues/6879)

3. **#6476 – Regression: httpIdleTimeoutMs no longer respected for self-hosted OpenAI-compatible provider** (closed)  
   Upgrading from v0.80.3 to v0.80.6 broke idle timeout configuration for self-hosted vLLM instances, causing timeouts after a few minutes. Downgrade is the current workaround.  
   [GitHub](https://github.com/earendil-works/pi/issues/6476)

4. **#6686 – Pi automatically logs out of GitHub** (closed)  
   A known issue (#2725) persists in v0.80.7 across macOS and Linux. The auto-logout disrupts workflows that depend on persistent GitHub auth.  
   [GitHub](https://github.com/earendil-works/pi/issues/6686)

5. **#6210 – /scoped-models cannot select model ids containing brackets** (open, in progress)  
   Custom model IDs like `custom/bracketed-model[1m]` are not parsed correctly — brackets are likely treated as regex, producing “No models match” warnings.  
   [GitHub](https://github.com/earendil-works/pi/issues/6210)

6. **#6621 – Prevent accidental cache invalidation due to dynamic system prompt** (closed)  
   Users with slow prefill hardware (e.g., AMD Strix Halo) see their prompt cache invalidated every session because the system prompt changes (date, time). Request to freeze the dynamic parts after first session.  
   [GitHub](https://github.com/earendil-works/pi/issues/6621)

7. **#6911 – OpenAI SDK retries sleep full Retry-After (days) and Escape cannot abort** (closed)  
   When `maxRetries > 0`, the SDK sleeps for the entire `Retry-After` header (potentially days) using a plain `setTimeout` that ignores `AbortSignal`. Escape key is powerless.  
   [GitHub](https://github.com/earendil-works/pi/issues/6911)

8. **#5592 – Anthropic streams wait for transport EOF after message_stop** (closed)  
   SSE iterator continues reading after `message_stop` until the HTTP response ends. Proxies that keep the connection open delay session finalization.  
   [GitHub](https://github.com/earendil-works/pi/issues/5592)

9. **#6652 – pi-tui crash log hardcodes ~/.pi/agent/pi-crash.log, ignoring PI_CODING_AGENT_DIR** (closed)  
   Moving the config directory causes crash logs to be written to a new `~/.pi/`. The path should respect the environment variable.  
   [GitHub](https://github.com/earendil-works/pi/issues/6652)

10. **#6940 – OpenRouter cache breakpoint stops before tool results** (closed)  
    With Anthropic models through OpenRouter, the conversation cache breakpoint fails to advance during consecutive tool‑only turns, causing unnecessary uncached re‑computation.  
    [GitHub](https://github.com/earendil-works/pi/issues/6940)

## Key PR Progress

1. **#6216 – feat: Add Amazon Bedrock Mantle OpenAI Responses provider** (open)  
   New provider using the OpenAI Bedrock provider to route through Amazon’s Mantle API. Supersedes an earlier PR.  
   [GitHub](https://github.com/earendil-works/pi/pull/6216)

2. **#6980 – fix(ai): make provider retries abortable** (open)  
   Replaces native SDK retries with a common helper that respects `AbortSignal` and caps `Retry-After` delays. Directly fixes #6911.  
   [GitHub](https://github.com/earendil-works/pi/pull/6980)

3. **#6341 – feat(ai): support constrained sampling** (open, to discuss)  
   Adds an opt‑in `constrainedSampling` config for tools, enabling provider‑side JSON‑schema validation and structured output (e.g., regex‑constrained sampling).  
   [GitHub](https://github.com/earendil-works/pi/pull/6341)

4. **#6927 – Add native OpenRouter OAuth support** (closed)  
   Implements PKCE S256 OAuth flow with a localhost callback, returning a user‑controlled API key compatible with text and image providers.  
   [GitHub](https://github.com/earendil-works/pi/pull/6927)

5. **#6960 – feat(ai): add StepFun providers** (closed)  
   Four native providers for `stepfun`, `stepfun-ai`, `stepfun-step-plan`, and `stepfun-step-plan-ai`, serving China and global users with separate billing endpoints.  
   [GitHub](https://github.com/earendil-works/pi/pull/6960)

6. **#6916 – feat(agent): add AgentHarness execution tools** (closed)  
   Introduces `AgentHarnessTool` that passes an arbitrary app‑specific context (including `ExecutionEnvironment`, session ID, etc.) to tool execution, enabling richer extension interactions.  
   [GitHub](https://github.com/earendil-works/pi/pull/6916)

7. **#6987 – fix(tui): align grapheme widths with terminal cells** (open)  
   Attempts to solve the notoriously hard problem of estimating grapheme display width, improving TUI rendering accuracy.  
   [GitHub](https://github.com/earendil-works/pi/pull/6987)

8. **#6967 – feat(coding-agent): expose session metadata to bash tools** (closed)  
   Enables subprocesses and helper scripts to read session file, provider, model, and reasoning level via environment variables without manual threading.  
   [GitHub](https://github.com/earendil-works/pi/pull/6967)

9. **#6881 – feat(ai): use provider-reported cost when responses include it** (open, in progress)  
   Falls back to catalog‑based cost only when the provider doesn’t return a billed cost. Already supports OpenAI and Vercel AI Gateway cost details.  
   [GitHub](https://github.com/earendil-works/pi/pull/6881)

10. **#6955 – handle openai websocket previous_response_not_found error** (closed)  
    On receiving the error, clears the previous response cache and starts a fresh connection, improving WebSocket reliability.  
    [GitHub](https://github.com/earendil-works/pi/pull/6955)

## Feature Request Trends

- **Context & Cache Management** – Several requests revolve around smarter auto‑compaction: trigger on output token limit (#6993), check after every agentic turn (#6879), and preserve cache across sessions by freezing dynamic system‑prompt parts (#6621).
- **Model Switching UX** – Users want most‑recent‑used (MRU) model cycling (#6982) instead of only alphabetical order, and support for model IDs containing special characters (#6210).
- **Extension & TUI API** – Requests for a structured approval‑request primitive for extensions (#5954), per‑block callbacks for hidden thinking labels (#6988), and exposing session metadata to bash (#6967) were all addressed in recent PRs.
- **Provider Cost Transparency** – Several feature requests and PRs push for using provider‑reported costs in usage logs (#6881) and for OAuth‑authenticated Anthropic billing to correctly show Pro/Max usage instead of metered API (#6979).

## Developer Pain Points

- **Self‑Hosted Unreliability** – The `httpIdleTimeoutMs` regression (#6476) for local vLLM instances erodes trust in self‑hosted setups.
- **Compaction Fragility** – Auto‑compaction either doesn’t trigger (#6879) or fails entirely on Copilot Enterprise (#6768), forcing users to manually manage context limits.
- **Retry & Abort Issues** – OpenAI SDK’s unbounded `Retry‑After` sleeps (#6911) and Anthropic streams that wait for transport EOF (#5592) cause stuck sessions. The open PR #6980 aims to fix the first.
- **Windows & Path Handling** – Dependent extensions show absolute paths in the banner (#6619, fixed in #6964) and crash logs hardcode the config directory (#6652, fixed in #6958).
- **OAuth & Auth Glitches** – GitHub auto‑logout (#6686) persists across versions, and OAuth refresh 502 errors are not retried (#6992), leaving users temporarily locked out.
- **Temp Directory Pollution** – `--no-session` leaves behind temp session directories (#6924) and `Ctrl+G` external editor is slow when `os.tmpdir()` is crowded (#6774, fixed in #6903).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-07-23

## Today’s Highlights

The main-branch **E2E test suite remains unstable**, with two new CI failures (#7559, #7516) and a core test suite red on `main` (#7537) that blocks all open PRs. On the automation front, the **autofix system continues to mature** — several new PRs teach it to automatically rerun infrastructure-died checks, restick stale-base PRs, and retry agent timeouts instead of stranding feedback. A **batch of update-check regressions** has also emerged, with multiple users reporting "registry error" messages linked to npm 12 and mise-based installations.

---

## Releases

+ **[v0.0.0-benchmark-poc.20260722.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.0.0-benchmark-poc.20260722.1)** (2026-07-22) — Temporary prerelease that validates the GitHub Actions → ECS benchmark worker → GitHub result publication pipeline. _This is not a Qwen Code product release._

---

## Hot Issues (10 of 44 active)

+ **[#7284 [CLOSED, P1] bug(core): side-query forces enable_thinking=false, breaking TokenPlan endpoints](https://github.com/QwenLM/qwen-code/issues/7284)** — `runSideQuery` always sends `enable_thinking: false`, causing 400 errors on endpoints that require thinking. Fixed by an upstream follow-up (#7534). _High user impact: blocks any workflow that depends on thinking-enabled backends._

+ **[#7264 [OPEN, P2] Cold-start follow-ups: remaining lazy-loading candidates](https://github.com/QwenLM/qwen-code/issues/7264)** — Esbuild audit measured 17.24 MiB / 2420 modules eagerly imported on every cold start. This issue tracks the remaining lazy-loading candidates identified in that audit. _Directly affects startup time for all users._

+ **[#7306 [OPEN, P2] Harden tool-output budgeting, observability, and artifact lifecycle](https://github.com/QwenLM/qwen-code/issues/7306)** — Phase 1 correctness merges in #7323; follow-ups cover contract hardening and telemetry. _Foundation for reliable tool execution across the platform._

+ **[#7449 [OPEN, P3] proposal(memory): enterprise external-memory integration profile](https://github.com/QwenLM/qwen-code/issues/7449)** — Proposes a provider-neutral profile for connecting Qwen Code to enterprise knowledge stores. _Documents a growing enterprise demand for memory/cache integration._

+ **[#7489 [CLOSED] VS Code Companion: file picker inserts @filename but image is not attached](https://github.com/QwenLM/qwen-code/issues/7489)** — Paperclip/attach icon inserts `@filename` as text instead of attaching the image to the model. _Critical for multimodal workflows._

+ **[#7559 [OPEN, E2E CI failure] Main CI failed on 95fc7ca](https://github.com/QwenLM/qwen-code/issues/7559)** — Second main-branch E2E failure in 24 hours. Auto-labeled `status/ready-for-agent` for automated triage.

+ **[#7543 [OPEN, P2] getNpmCliPath returns mise bash wrapper instead of npm-cli.js](https://github.com/QwenLM/qwen-code/issues/7543)** — Update check breaks under mise because the path resolver finds a bash wrapper script instead of the real npm CLI. _Affects mise users widely._

+ **[#7520 [OPEN, P2] npm 12 incompatibility: update check fails with registry error](https://github.com/QwenLM/qwen-code/issues/7520)** — `fetchGlobalNpmUpdateInfo()` hits a shape mismatch when npm 12 returns an array instead of the expected object. _Blocks updates for Node.js 26 users._

+ **[#7485 [OPEN, P2] TUI: large blank area between last message and input prompt after resume](https://github.com/QwenLM/qwen-code/issues/7485)** — Visual regression in the terminal UI after `qwen resume`. _Degrades the TUI experience for power users._

+ **[#6577 [OPEN, P2] [BUG] Windows: Alt+V cannot paste clipboard screenshot](https://github.com/QwenLM/qwen-code/issues/6577)** — Still open after two weeks; Windows Terminal / PowerShell users cannot use the clipboard-screenshot shortcut. _Long-standing platform pain point._

---

## Key PR Progress (10 of 50 active)

+ **[#7563 [OPEN] fix(autofix): retry an agent timeout instead of advancing past its feedback](https://github.com/QwenLM/qwen-code/pull/7563)** — An agent timeout now retries the feedback round instead of skipping it. Prevents feedback from being permanently stranded when the agent runs out of budget.

+ **[#7562 [OPEN] feat(autofix): auto-rerun a check that died on infrastructure, once](https://github.com/QwenLM/qwen-code/pull/7562)** — Automatically re-runs checks that failed due to runner death or disk-full, guarded against infinite loops. Solves the stranding seen in #7490's web-shell check.

+ **[#7554 [OPEN] feat(autofix): auto-update a PR red only from a stale, since-fixed base](https://github.com/QwenLM/qwen-code/pull/7554)** — Merges current `main` into a PR that is red solely because it used a broken base that has since been fixed. Cuts manual overhead when `main` is unstable.

+ **[#7528 [OPEN] fix(cli): use npm view for update check instead of update-notifier](https://github.com/QwenLM/qwen-code/pull/7528)** — Replaces the broken `update-notifier` path with a direct `npm view` call. Directly addresses #7515, #7543, and #7520. _Most-watched fix by comment count today._

+ **[#7517 [OPEN] feat(core): add Goal v3 state protocol](https://github.com/QwenLM/qwen-code/pull/7517)** — Introduces the versioned Goal v3 state contract as the first slice of #7494. Defines lifecycle state, optimistic-concurrency, migration, and compatibility tests. _Major architectural step for next-gen goal handling._

+ **[#7530 [OPEN] refactor(core): align system prompt caching with Hermes tiers](https://github.com/QwenLM/qwen-code/pull/7530)** — Follows Hermes's abstraction: one builder returns three ordered strings (`stable`, `context`, `volatile`), removing generic per-fragment tiers. _Cleans up prompt-caching internals._

+ **[#7547 [OPEN] fix(core): stringify const-derived enums in toOpenAPI30](https://github.com/QwenLM/qwen-code/pull/7547)** — Fixes a bug where `const`-derived enum values were not stringified, breaking OpenAPI 3.0 schema generation. _Important for SDK integration correctness._

+ **[#7531 [OPEN] fix(core): close force-flag and checkout gaps in the AUTO destructive-git guard](https://github.com/QwenLM/qwen-code/pull/7531)** — Widens regex patterns so `git clean` and `git checkout` are blocked in every spelling. _Security hardening for agent-executed git commands._

+ **[#7561 [OPEN] fix(web-shell): sync background agent status](https://github.com/QwenLM/qwen-code/pull/7561)** — Reconciles detached Agent cards with terminal background-task state using live notifications instead of polling. _Improves Web Shell reliability for multi-agent sessions._

+ **[#7558 [OPEN] perf(cli): Defer ACP telemetry initialization](https://github.com/QwenLM/qwen-code/pull/7558)** — Defers telemetry SDK init until after `initialize` response is written, reducing cold-start latency in ACP children. _Measurable improvement for start-up time._

---

## Feature Request Trends

1. **Performance and cold-start optimization** — Multiple issues and PRs (#7264, #7558) focus on lazy-loading, deferred initialization, and reducing the eager import closure. The codebase is clearly under active performance audit.

2. **Memory and caching integration** — #7449 proposes an enterprise-grade external-memory profile, while #7530 refines system prompt caching. Users are asking for more sophisticated context management.

3. **Git integration depth** — #7471 adds a git mode selector to the Web Shell; #7531 hardens destructive-git guards. The trend is toward richer, safer git workflows inside Qwen Code sessions.

4. **Multi-agent and plan visualization** — #7525 requests a plan-execution DAG view that links Todo nodes to subagent executions. This signals demand for observability into complex multi-agent scenarios.

5. **Enterprise deployment polish** — #7524 tracks disk cleanup for managed npm update artifacts; #7449 addresses enterprise memory. The project is preparing for larger-scale, managed deployments.

---

## Developer Pain Points

1. **Update check fragility** — Four distinct issues (#7515, #7543, #7520, #7555) all report "registry error" on update checks, caused by mise wrappers, npm 12 API changes, and timeout mismatches. This is the single most-reported user-facing bug category this week.

2. **CI instability on `main`** — Two main-branch E2E failures in 24 hours (#7516, #7559), plus a core test suite red on `main` (#7537) that blocks all open PRs. The infrastructure is struggling to keep `main` green.

3. **Release pipeline failures** — Two release workflow failures in the same day (#7549, #7555), one on `quality`, one on `integration_docker`. The release automation needs hardening.

4. **Cross-platform UI/UX gaps** — Issues on Windows (#6577), mobile browsers (#5958), and terminal flickering (#6137) remain open, some for weeks. Platform-specific polish is falling behind core development.

5. **Tool-execution and thinking-mode incompatibility** — #7284 (thinking-mode in side-queries) and #7534 (retry logic for providers requiring thinking) reveal that integration with backend providers often has subtle configuration mismatches that require fallback logic.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-07-23

## Today's Highlights
The v0.9.1 release integration PR (#4675) has been merged onto `main`, bundling the default skill pack, reworked Work chrome, and a unified `/skills` manager. However, two critical stop-ship bugs surfaced today: the TUI exits immediately on a fresh terminal (#4716), and large pasted prompts suffer byte corruption before submission (#4719). Maintainers are actively triaging both before the final v0.9.1 tag.

## Releases
No new releases in the last 24 hours. All activity is focused on the v0.9.1 release candidate.

## Hot Issues (10 selected)

1. **[#2870] EPIC: staged command-boundary refactor** — Core architectural refactor to split command routing into mergeable layers (17 comments, open since June). Community interest remains high as it enables safe delivery of the larger #2791 initiative.  
   https://github.com/Hmbown/CodeWhale/issues/2870

2. **[#4227] feat: help JayBeest map the CodeWhale tsunami** — A workflow to automate dev environment setup and alignment with `main`. Has drawn 12 comments from contributors needing consistent onboarding amidst 10+ PR/day velocity.  
   https://github.com/Hmbown/CodeWhale/issues/4227

3. **[#2889] Work Agent rows: real sub-agent details** — Restored from a deleted issue; proposes structured sub-agent info in the sidebar. Closed with 8 comments, indicating strong community design input.  
   https://github.com/Hmbown/CodeWhale/issues/2889

4. **[#2886] Gherkin acceptance E2E coverage for tool lifecycle** — Closed after 7 comments. The community pushed for a test harness ahead of the command refactor to prevent regressions.  
   https://github.com/Hmbown/CodeWhale/issues/2886

5. **[#4691] Ship model-invoked default CodeWhale skill pack** — Closed with 4 comments; directly enabled the bundled skill pack in v0.9.1 (PR #4695).  
   https://github.com/Hmbown/CodeWhale/issues/4691

6. **[#4687] fail closed on Kimi Code / Moonshot K3 model-ID cross-pairings** — Closed; a correctness bug found during dogfooding that would send wrong model IDs to incompatible endpoints.  
   https://github.com/Hmbown/CodeWhale/issues/4687

7. **[#4716] TUI exits immediately on launch ("[Process completed]")** — **Stop-ship.** Fresh Terminal.app on macOS shows the TUI never stays up. Only 1 comment so far, but marked as critical.  
   https://github.com/Hmbown/CodeWhale/issues/4716

8. **[#4719] Composer: large pasted prompts get byte-corrupted before submission** — New today (2 comments). Paths are truncated and characters dropped before reaching the model; downstream agents receive corrupted input.  
   https://github.com/Hmbown/CodeWhale/issues/4719

9. **[#4085] Cannot read/write files under ~/Library/CloudStorage/Dropbox/** — Open since July 7, 4 comments. Not a sandbox issue; binary has zero entitlements. Affects macOS users with File Provider Dropbox.  
   https://github.com/Hmbown/CodeWhale/issues/4085

10. **[#4713] v0.9.1 security gate: deep scan and dependency alert disposition** — 3 comments. Tracks resolution of 17 Dependabot alerts (7 high, 10 moderate) before tagging. PR #4714 already addresses npm lockfiles.  
    https://github.com/Hmbown/CodeWhale/issues/4713

## Key PR Progress (10 selected)

1. **[#4675] Integrate CodeWhale v0.9.1 runtime and release surface** — **Merged.** Massive integration PR bringing the v0.9.1 runtime simplification, empty-Work fix, final TUI color grammar, and release surface onto `main`.  
   https://github.com/Hmbown/CodeWhale/pull/4675

2. **[#4679] feat(skills): unified /skills manager** — **Merged.** Delivers one inventory, audit, install/import, update, remove, and trust interface across CodeWhale-owned and compatible roots. Closes #4650.  
   https://github.com/Hmbown/CodeWhale/pull/4679

3. **[#4695] feat(skills): default CodeWhale skill pack (bundled v5)** — **Merged.** Ships 18 end-user skills (interview, plan, implement, debug, test, review, security-review, etc.) plus 15 maintenance skills.  
   https://github.com/Hmbown/CodeWhale/pull/4695

4. **[#4711] fix(tui): focus v0.9.1 chrome on todos and agents** — **Merged.** Replaces generic Work surface with active To-dos + Sub-agents bar; adds draggable dividers and theme-native permission rails.  
   https://github.com/Hmbown/CodeWhale/pull/4711

5. **[#4694] fix(kimi): fail closed on K3 model-ID cross-pairings** — **Merged.** Enforces correct model ID per base URL, preventing silent misrouting.  
   https://github.com/Hmbown/CodeWhale/pull/4694

6. **[#4693] fix(tui): Work summary lifecycle, actionable title, and top-area hierarchy** — **Merged.** Recent-only Work summaries now expire after 4s; durable rows remain. Fixes three release blockers.  
   https://github.com/Hmbown/CodeWhale/pull/4693

7. **[#4697] fix(tui): hide empty coordination work before v0.9.1** — **Merged.** Empty coordination snapshots are treated as absent, keeping first-open Work chrome hidden.  
   https://github.com/Hmbown/CodeWhale/pull/4697

8. **[#4696] feat(tui): ship staged /uwu theme** — **Merged.** Ships the uwu theme with aliases `owo` and `kawaii`. Uses soft-classic whale mark (blush `░` + sparkle `✦`).  
   https://github.com/Hmbown/CodeWhale/pull/4696

9. **[#4714] chore(deps): patch npm lockfiles for Dependabot alerts** — **Open.** Applies `npm audit fix` to resolve 17 alerts across feishu-bridge and vscode extension workspaces.  
   https://github.com/Hmbown/CodeWhale/pull/4714

10. **[#4722] fix(tui): show complete edit previews in details** — **Open.** Keeps compact approval cards but renders full `+/-` search/replace previews lazily in Alt+V detail pager.  
    https://github.com/Hmbown/CodeWhale/pull/4722

## Feature Request Trends

The dominant feature direction is **unified skill and tool management** — consolidating command routing (#2870), skill discovery (#4651), and sub-agent lifecycle (#2889) into a single coherent surface. A strong secondary theme is **security and reliability gatekeeping**: Gherkin acceptance coverage (#2886), fail-closed behavior for provider misconfiguration (#4687), and comprehensive dependency scanning (#4713). Several requests target **UX polish** around transcript rhythm (#4676), empty-state composition (#4677), and information density (#4718). There is also growing interest in **platform-compatible file access** (Dropbox on macOS, #4085) and **configurable session tokens** in the header (#4610).

## Developer Pain Points

- **Cross-platform compatibility issues** continue to frustrate: macOS File Provider paths cause read/write failures (#4085), Windows installer overwrites user PATH (#4685), and custom provider configurations trigger launch failures (#4682).
- **Configuration complexity** is a recurring pain point — the settings menu still shows legacy "DeepSeek fallback model" rows even when using other providers (#4717), and provider/model auto-switching feels under-baked and opaque (#4720).
- **UI/UX bugs with high impact**: byte corruption on paste (#4719), the TUI crash on fresh terminal (#4716), and `<turn_meta>` blocks reappearing on session reopen (#4681) all erode developer trust in the release candidate.
- **Information overload** in the transcript — repeated hints ("Option+V to inspect"), stacked reasoning states, and clipped detail previews (#4718, #4701) make the TUI feel noisy during long sessions.
- **Documentation and config audit gaps** remain: the community has flagged stale README content (#4671), legacy assumptions in settings (#4721), and a need for clearer dependency alert disposition (#4713).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*