# OpenClaw 生态日报 2026-07-23

> Issues: 494 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-23 04:46 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 OpenClaw 项目 GitHub 数据，为您生成 2026-07-23 的项目动态日报。

---

# OpenClaw 项目日报 | 2026-07-23

## 1. 今日速览

今日 OpenClaw 项目处于 **高活跃度、高压力** 状态。社区提交与维护者响应非常积极，过去 24 小时内 Issues 和 PR 的更新总数接近 1000 条。然而，Issue 关闭率（约 30%）相对较低，显示出问题积压严重，尤其是大量 P1/P2 级别的 Bug 和功能请求长期未解决。值得关注的是，维护者团队（`steipete`, `giodl73-repo`）正在主导一系列大型重构工作，旨在清理代码重复并解决底层稳定性问题，这暗示项目正从快速迭代期向核心稳定性加固期过渡。当前项目健康度中等偏下，主要挑战在于如何平衡新功能开发与漫长的 Bug 修复周期。

## 2. 版本发布

**无新版本发布。**

## 3. 项目进展

今日无 PR 被合并或关闭，但项目在核心代码结构和基础设施层面取得了**实质性架构推进**。多位核心维护者提交了多个大型重构 PR，旨在显著提升代码质量和长期可维护性：

-   **核心功能重构**：
    -   `#112904` [refactor(agents): deduplicate compaction preparation] (https://github.com/openclaw/openclaw/pull/112904) - 对智能体上下文压缩（Compaction）的关键路径进行了去重和统一，该路径是解决 `#85333` 等性能问题的核心。
    -   `#112900` [refactor(meetings): share Teams and Zoom browser status adapters] (https://github.com/openclaw/openclaw/pull/112900) - 统一了 Teams 和 Zoom 会议插件底层逻辑，减少了代码冗余。
    -   `#112894` [refactor(telegram): consolidate bot test fixtures] (https://github.com/openclaw/openclaw/pull/112894) - 重构了 Telegram Bot 的测试工具，为后续更可靠的测试覆盖打下基础。
-   **数据与配置层增强**：
    -   `#107026` [feat(config): add ordered config layers] (https://github.com/openclaw/openclaw/pull/107026) - 引入了有序的配置层，允许用户/运维人员更灵活地组合默认配置和特定配置，这对企业级部署至关重要。
    -   `#112896` [feat(snapshot): admit restored recovery points] (https://github.com/openclaw/openclaw/pull/112896) - 支持恢复检查点（Recovery Points），增强了灾难恢复和数据迁移能力。
-   **边缘适配器修复**：
    -   `#112905` [fix(openrouter): discover models when HTTP proxy is required] (https://github.com/openclaw/openclaw/pull/112905) - 修复了在企业代理网络环境下 OpenRouter 模型发现失败的问题。

**项目整体向前迈出了关键一步，从“功能堆叠”转向“架构优化和稳定性加固”**。

## 4. 社区热点

今日社区讨论高度集中于**安全性、性能退化和核心功能缺失**，反映出用户对生产级稳定性和安全性的强烈需求。

-   **#75** [Linux/Windows Clawdbot Apps] (https://github.com/openclaw/openclaw/issues/75) - **评论: 115 🏆 | 👍: 80**
    -   **诉求**: 这是社区呼声最高的功能请求，从 2026 年 1 月提出至今，热度持续不减。用户迫切需要跨平台（特别是 Linux 和 Windows）的原生桌面应用支持，以弥补目前仅有 macOS/iOS/Android 的生态短板。这已成为项目扩展多平台用户的**主要障碍**。
-   **#13583** [Pre-response enforcement hooks (hard gates)] (https://github.com/openclaw/openclaw/issues/13583) - **评论: 16 | 👍: 2**
    -   **诉求**: 用户要求为高风险工作流（如金融、安全）提供**强制性的、不可绕过的工具调用前钩子**。现有“软指令”在智能体决策过程中易被忽略，用户需要一种机制从根本上防止智能体在规则未满足时发出响应。
-   **#10659** [Masked Secrets - Prevent Agent from Accessing Raw API Keys] (https://github.com/openclaw/openclaw/issues/10659) - **评论: 15 | 👍: 4**
    -   **诉求**: 与 `#13583` 同属高安全性需求。用户指出，智能体能够直接读取存储的明文 API Key，存在被提示注入攻击窃取的风险。请求引入“脱敏密钥”系统，让智能体只能“用”而不能“看”。

## 5. Bug 与稳定性

今日报告的 Bug 数量多、范围广，以下为按严重程度排列的关键问题：

-   **P0 (紧急)**
    -   **`#108435`** [Bug]: update to openclaw 2026.7.1: gateway fails to start w/ error (https://github.com/openclaw/openclaw/issues/108435) - **严重回归，升级后 Gateway 无法启动**，直接阻塞用户使用。尚无关联的修复 PR。
    -   **`#98674`** [Bug]: cant click on mac app install icon (https://github.com/openclaw/openclaw/issues/98674) - **严重回归，macOS DMG 安装图标不可点击**，影响新用户安装。关联 PR `#112889` 可能与此有关（UI 修复），但并未直接关闭此 Issue。

-   **P1 (高优先级)**
    -   **`#85333`** [Bug]: `openclaw doctor --fix` 4-5x slower (https://github.com/openclaw/openclaw/issues/85333) - **严重影响运维效率的回归问题**，`doctor --fix` 命令性能下降 4-5 倍，导致生产环境维护耗时剧增。已过期，无更新。
    -   **`#91009`** [Codex PreToolUse native hook relay spawns CPU-bound processes] (https://github.com/openclaw/openclaw/issues/91009) - **严重性能问题**，与 Codex 集成时，钩子进程生成会耗尽 CPU 并导致 RPC 调用阻塞。维护者已在 `#112904` 中对相关路径进行重构。
    -   **`#94228`** [Native Anthropic path: replaying historical `thinking` blocks bricks long tool-use threads] (https://github.com/openclaw/openclaw/issues/94228) - **关键功能阻断 Bug**，使用 Anthropic 原生路径时，会话会因无效签名而完全卡死，无法恢复。
    -   **`#108435`** 和 **`#98674`** 如前所述。
    -   **`#90840`** [Bug]: Subagent run completion is delivered to chat user as raw worker output (https://github.com/openclaw/openclaw/issues/90840) - **回归问题**，子智能体的输出错误地发送给了终端用户，而非父智能体，造成信息泄露和工作流混乱。

## 6. 功能请求与路线图信号

除了社区热点的安全需求，以下功能请求也在持续发酵，部分已能看到 PR 跟进，可能被纳入后续版本：

-   **高可能性纳入 (已有关联 PR)**:
    -   **命令/CLI 增强**: `#100960`, `#104158`, `#104159`, `#104160` 等 PR 正在全面改造 CLI 命令管理体系，旨在提供命令清单、检查、离线命令等功能。这回应了许多用户关于**提高 CLI 可发现性和可管理性**的诉求。
    -   **智能体策略与权限**: `#112773` [feat(claws): add portable agent policy settings] (https://github.com/openclaw/openclaw/pull/112773) 正在引入可移植的智能体策略，包括工具白名单、黑名单、文件系统沙箱等，直接呼应了 `#12219` (Skill Permission Manifest) 和 `#10659` (Masked Secrets) 等安全相关请求。

-   **低可能性纳入 (长期积压)**:
    -   **`#38568`** [Feature: Inject context window % into system prompt] (https://github.com/openclaw/openclaw/issues/38568) - 智能体监控自身上下文窗口占用率的需求，有助于自主防止性能下降。但尚未有明确的 PR 跟进。
    -   **`#42651`** 和 **`#42648`** [Memory MVP](https://github.com/openclaw/openclaw/issues/42651) - 社区对记忆系统的需求迫切，期望有一个成熟的写入、管理、查询接口。该功能被标记为 MVP，但长期处于“需要产品决策”状态，进展缓慢。

## 7. 用户反馈摘要

从今日的 Issues 评论中，可以提炼出以下真实用户痛点与使用场景：

-   **核心痛点：升级恐惧症**。大量 `[Bug]: update to ... regression` 标签表明，用户对版本升级感到焦虑。从 `#108435`（升级后 Gateway 无法启动）到 `#98672`（升级后会话频繁中断），每一个新版本的发布都伴随着新回归问题的出现，严重动摇了用户对项目稳定性的信心。
-   **运维负担过重**：
    -   **性能瓶颈**：`#85333` 中用户详细记录了 `doctor --fix` 命令从55秒到229秒的性能退化，这对于需要频繁执行该命令的运维人员是巨大的时间成本。
    -   **配置心智负担**：`#99773` (Hot reload drops models) 和 `#87325` (Azure Foundry 支持) 反映出当前配置系统在处理复杂环境（如热加载、多 provider 代理）时不够健壮，运维人员需要花费大量精力排查这类“幽灵”问题。
-   **生产环境信任危机**：`#39807` (Billing error causing infinite retry) 和 `#91009` (CPU-bound hooks) 等 Bug 直接导致服务不可用或资源耗尽，说明项目在面对生产环境的边界情况时，缺乏有效的限流、熔断和错误处理机制。用户明确表示“这不是 LLM provider 的问题，是 OpenClaw 内部瓶颈”。
-   **对核心维护者的依赖**：从 PR 列表看，大量重要的重构工作（`#112904`, `#112900` 等）由 `steipete` 和 `giodl73-repo` 等个位数核心维护者提交，社区贡献的 PR（如 `#84975`, `#94050`）长期处于 `waiting on author` 或 `needs proof` 状态。这暗示了项目存在**单点故障风险**，并可能成为大型功能推进和 Bug 修复的瓶颈。

## 8. 待处理积压

以下 Issue 和 PR 长期未得到有效响应，已被标记为 `stale` 或长时间无更新，对项目健康度构成潜在风险。提醒维护者重点关注：

-   **高风险 Bug (P1, 已过期)**:
    -   **`#94228`** [Native Anthropic path: ... bricks long tool-use threads] (https://github.com/openclaw/openclaw/issues/94228) - 使用 Anthropic 原生路径的高价值用户会被完全阻塞。已过期，无人和 PR 跟进。
    -   **`#86031`** [Windows gateway ... after Telegram polling stall] (https://github.com/openclaw/openclaw/issues/86031) - Windows 平台 Gateway 稳定性问题，影响整个 Windows 用户群。
    -   **`#43374`** [All LLM API calls time out simultaneously (multi-agent concurrency issue)] (https://github.com/openclaw/openclaw/issues/43374) - 多智能体并发时出现全局锁死，是严重的架构级 Bug。

-   **高价值功能请求 (P2, 长期未决)**:
    -   **`#75`** [Linux/Windows Clawdbot Apps] (https://github.com/openclaw/openclaw/issues/75) - 社区第一呼声，没有之一。
    -   **`#12219`** [Skill Permission Manifest Standard (skill.yaml)] (https://github.com/openclaw/openclaw/issues/12219) - 建立用户对第三方插件信任的基石。

-   **卡住的关键 PR**:
    -   **`#94050`** [fix: strip volatile output from exec result hash ...] (https://github.com/openclaw/openclaw/pull/94050) - 修复了核心 exec 工具的可靠性，但已停滞超过一个月，状态为 `waiting on author`。
    -   **`#84975`** [fix(heartbeat): suppress fallback after route-matched message tool] (https://github.com/openclaw/openclaw/pull/84975) - 修复 Telegram 消息发送逻辑的缺陷，同样因等待作者反馈而停滞。这些 PR 的阻塞，反映了社区贡献者与核心团队之间协作流程上的挑战。

---

## 横向生态对比

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将基于您提供的各项目动态摘要，为您呈现一份横向对比分析报告。

---

### AI 智能体与个人 AI 助手开源生态横向对比分析（2026-07-23）

#### 1. 生态全景

个人 AI 助手开源生态正处于**由“功能堆叠”向“质量巩固”过渡的关键分化期**。头部项目（如 OpenClaw, CoPaw, ZeroClaw）的社区活跃度极高，但普遍面临因快速迭代带来的性能回归、稳定性问题和技术债务压力。与此同时，跨平台桌面支持、企业级安全与权限管理已成为所有项目共同的核心瓶颈，而面向生产环境的可靠性与评测体系（Eval）正成为新的竞争焦点。整体来看，生态正处于“野蛮生长”后的“精耕细作”阶段，对开发者而言，意味着从追求新奇功能转向解决实际落地痛点的机遇期。

#### 2. 各项目活跃度对比

| 项目名称 | 今日 Issues 更新 (新开/活跃) | 今日 PRs 更新 (活跃/总) | 新版本发布 | 总体健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ≈1000 (极高) | 极高 (含大型重构) | 无 | ⚠️ 中等偏低 (高活跃，但高压、高积压) |
| **NanoBot** | 4 | 62 (待合并23) | 无 | ✅ 良好 (高活跃，新功能与修复并进) |
| **Hermes Agent** | 39 (新开/活跃) | 50 (待合并43) | 无 | ✅ 良好 (高活跃，修复响应快，但有积压) |
| **PicoClaw** | 3 (全部活跃) | 4 (待合并2) | 无 | ⚠️ 中等 (活跃度低，但关注点明确) |
| **NanoClaw** | 1 | 3 (全部待合并) | 无 | ⚠️ 中等偏低 (活跃度低，维护响应偏慢) |
| **NullClaw** | 1 (已关闭) | 1 (已合并) | 无 | ✅ 良好 (低活跃但响应迅速，一次关键修复) |
| **IronClaw** | 50 | 50 | 无 | ✅ 良好 (发布前冲刺，架构重构和 Bug 修复并行) |
| **LobsterAI** | 3 (均为stale) | 2 (已合并/关闭) | 无 | ⚠️ 中等 (平稳维护期，积压问题需关注) |
| **Moltis** | 0 | 1 (待合并) | 无 | ⚠️ 偏低 (活动极少，进入静默期) |
| **CoPaw** | 20 (新开/活跃) | 37 (待合并) | **v2.0.0.post4** | ✅ 良好 (高活跃，修复与发布节奏紧凑) |
| **ZeroClaw** | 35 (新开/活跃) | 49 (待合并) | 无 | ✅ 良好 (极高活跃，PR 堆积反映审查瓶颈) |
| **TinyClaw** | 0 | 0 | - | 🟢 停滞 (无活动) |
| **ZeptoClaw** | 0 | 0 | - | 🟢 停滞 (无活动) |

*注：OpenClaw 的数据为“接近1000条更新”，属极其活跃的极端情况。*

#### 3. OpenClaw 在生态中的定位

OpenClaw 无疑是当前生态中的**旗舰级项目**，但也是**负重前行的排头兵**。

- **生态定位**：作为核心参照项目，OpenClaw 拥有最大的社区规模和最全面的功能集。其重构方向（如上下文压缩、有序配置层）代表了行业解决大型 Agent 框架通用问题的思路。
- **优势与差异**：
    - **社区规模**：问题与 PR 更新量级远超其它项目，是生态绝对中心。
    - **技术路线**：正在进行深度的**架构重构**（从功能堆叠转向稳定性加固），如 `deduplicate compaction preparation` 和 `ordered config layers`，旨在解决长期技术债务。
- **与同类相比**：相比于 NanoBot 的轻量和快速迭代，OpenClaw 正承受着“大而全”带来的稳定性阵痛（大量 P0/P1 回归性 Bug）。相较于 ZeroClaw 和 CoPaw，其社区积压问题更严重，核心维护者（`steipete`, `giodl73-repo`）的单点故障风险也更高。**一句话总结：它是生态规模的天花板，也是未来稳定性的晴雨表。**

#### 4. 共同关注的技术方向

当前生态正集中攻克以下共性技术难题：

1.  **跨平台桌面支持**（**OpenClaw #75**, **Hermes Agent #69810, #69846**）：多个项目用户强烈要求 Linux/Windows 原生桌面应用，以摆脱对 Web 或移动端的依赖。
2.  **安全与权限治理**（**OpenClaw #13583, #10659**；**CoPaw #6379, #6357**；**ZeroClaw #5982**；**NanoClaw #3118**）：
    - **强制安全钩子 (Hard Gates)**：用户要求不能绕过的工具调用前审批。
    - **凭证脱敏**：防止 Agent 直接读取或泄露 API Key。
    - **细粒度权限**：从技能级、文件系统沙箱到多租户 RBAC，需求层次丰富。
3.  **稳定性与性能回归**（**OpenClaw #85333, #108435**；**CoPaw #6307, #5218**；**ZeroClaw #5600, #7462**）：几乎所有高活跃项目都面临因功能迭代而引入的性能下降、线程阻塞或致命崩溃问题。**“升级恐惧症”** 已成为普遍现象。
4.  **多渠道集成与适配**（**NanoBot #5028, #5045**；**PicoClaw #3287**；**NullClaw #977**；**IronClaw #6522**；**Hermes Agent #69810**）：从 Telegram、IRC、Discord 到飞书、Slack，各渠道的兼容性细节（长消息、富文本、身份识别、OAuth 配置）仍是持续的投入方向。

#### 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构与理念 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **全能型框架**，覆盖 Agent、会议、Telegram 等全场景 | 追求全面功能的个人开发者与企业 | 正在经历大规模架构重构，从臃肿走向精炼。 |
| **NanoBot** | **轻量级多渠道个人助手**，侧重 WebUI 和快速集成 | 普通用户与个人开发者 | 强调配置灵活、部署简单，对新渠道和新模型支持迅速。 |
| **Hermes Agent** | **桌面与 CLI 优先的开发者工具** | 开发者、技术运维 | 强调命令行生产力、桌面端深度集成，插件体系 (ACP) 完善。 |
| **IronClaw** | **企业级自主 Agent 平台**，侧重部署、管理与扩展 | 企业运维、高级开发者 | 强调产品化 (ProductSurface)、安全治理和发布流程。 |
| **CoPaw** | **兼顾安全与易用性的全能框架** | 对隐私和安全敏感的用户及企业 | 强调治理策略 (Governance) 和权限 UI，快速迭代修复 bug。 |
| **ZeroClaw** | **高度可扩展的 Agent 框架**，侧重 Provider 和 Eval 生态 | 开发者、AI 研究员 | 拥有活跃 Provider 讨论群 (refactor)，并正构建标准化 Eval 体系。 |
| **NanoClaw** | **轻量化跨渠道适配器** | 社区贡献者 | 专注于 Telegram 富文本、WhatsApp 跨路径等细节优化。 |

#### 6. 社区热度与成熟度

- **第一梯队（高速扩张与质量巩固期）**：
    - **CoPaw, ZeroClaw, Hermes Agent**：这些项目保持着极高的 Issue 和 PR 活跃度，同时对新版本发布或重要 Bug 的修复响应迅速。它们正处于从“可用”向“好用”和“可靠”冲刺的关键阶段。其中 CoPaw 的修复-发布闭环最为紧凑。
- **第二梯队（高活跃但存在压力）**：
    - **OpenClaw, IronClaw, NanoBot**：活跃度极高，但 OpenClaw 受困于大量积压和回归问题，IronClaw 处于发布前冲刺的紧张状态，NanoBot 则在新功能合并与 Bug 修复之间保持了较好平衡。
- **第三梯队（稳定维护或低活跃）**：
    - **LobsterAI, PicoClaw, NullClaw, Moltis**：这些项目活跃度偏低或中等，维护节奏平稳，但存在积压问题或进入静默期。其中 NullClaw 对关键问题响应迅速，证明其维护者依然在线。
- **第四梯队（基本停滞）**：
    - **TinyClaw, ZeptoClaw**：24小时内无任何活动，可能已接近项目终点或长期搁置。

#### 7. 值得关注的趋势信号

1.  **从功能堆叠到稳定性优先**：跨项目的性能回归问题（如 OpenClaw, CoPaw）警示，**稳定性将成为下一阶段项目的核心竞争力**。开发者应关注那些在快速迭代中仍能保持较低 Bug 率或对回归问题有快速修复机制的项目。
2.  **企业级能力的平民化**：多租户 RBAC（ZeroClaw）、强制安全钩子（OpenClaw）、细粒度治理策略（CoPaw）等需求同时涌现，表明个人 AI 助手正加速进入**企业办公和敏感业务场景**。对于有 B 端部署需求的开发者，应重点关注此类功能的成熟度。
3.  **Eval 体系的兴起**：ZeroClaw 在一天内提交大量 Eval 相关 PR 是一个强烈信号。**建立标准化的评测体系**，以量化和提升 Agent 在不同任务上的表现，正从幕后走向台前，成为项目健康度和技术深度的新衡量标准。
4.  **渠道碎片化之下的集成商机**：从 Telegram 长消息（PicoClaw）到飞书文件路径（NanoBot），再到 Discord 栈溢出（NullClaw），**跨渠道的一致性、鲁棒性和用户体验细节**成为项目的稳固护城河。对于开发者而言，专注于某一两个渠道的深度优化，远比蜻蜓点水地支持所有渠道更有价值。
5.  **社区 vs. 核心维护者的瓶颈**：大量社区贡献的 PR 长期未合并（如 NanoClaw, ZeroClaw），揭示了 **“贡献者热情高涨，核心团队审查乏力”** 的结构性矛盾。项目能否建立清晰的贡献指南和高效的评审流程，将直接影响其长期生态活力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-07-23）

## 1. 今日速览

过去 24 小时内，NanoBot 项目保持高度活跃：新增/活跃 Issue 4 条，关闭 1 条；PR 总数达 62 条，其中 39 条已合并或关闭，23 条仍在待合并状态。社区讨论集中在多智能体协作演进（#5000）以及多个渠道兼容性 Bug 上。重要合并包括图像生成设置实时应用（#4964）和 xAI Grok OAuth 集成（#5035），项目整体向着多渠道、多智能体协作方向稳步推进。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日共有 **39 条 PR 被合并或关闭**，以下为最值得关注的重要合并：

- **[CLOSED] feat(image): apply generation settings live** (#4964)  
  Re-bin 实现：在前端暴露各提供商的图像模型选择，无需重启网关即可实时应用图像提供商、模型、默认值、凭据和启用状态。显著提升了图像生成的动态配置体验。  
  [链接](https://github.com/HKUDS/nanobot/pull/4964)

- **[CLOSED] feat(providers): add xAI Grok OAuth with capability-gated X Search** (#5035)  
  chengyongru 贡献：为 xAI Grok 订阅添加原生 OAuth 2.0 + PKCE 登录，提供 `grok-4.5` 响应提供商，并仅在 `supportsBackend` 标记为 true 时发送 `x_search`。加强了对新兴模型提供商的支持。  
  [链接](https://github.com/HKUDS/nanobot/pull/5035)

- **[CLOSED] WebUI loses visibility when a late subagent completion starts a system turn** (#4948)  
  已关闭的 Bug 报告，解决了子代理完成时 WebUI 会话可见性丢失的问题，提升了多轮交互的稳定性。  
  [链接](https://github.com/HKUDS/nanobot/issues/4948)

此外，多个修复类 PR 已提交但未合并（见第 5 节），覆盖空响应、Cron 数据加载、Markdown 表格解析、配对认证空值等稳定性改进。

## 4. 社区热点

- **#5000 [enhancement] Proposal: evolve the current subagent system toward multi-agent collaboration**  
  评论数最多（4 条），获得社区持续关注。用户 `bingqilinweimaotai` 提出当前子代理系统本质上仍是背景任务委托，缺乏持久身份和共享任务状态，呼吁向真正的多智能体协作演进。此话题折射出社区对更灵活、更具主动性的智能体架构的强烈需求。  
  [链接](https://github.com/HKUDS/nanobot/issues/5000)

- **#5033 [OPEN] feat(telegram): support multiple bot instances in WebUI**  
  虽未列出评论数，但该 PR 覆盖 Telegram 多 Bot 配置、独立会话、代理设置等，属于渠道增强的重要贡献，预计将在后续讨论中成为热点。  
  [链接](https://github.com/HKUDS/nanobot/pull/5033)

## 5. Bug 与稳定性

按严重程度排列（P1 > P2），所有报告均有对应的修复 PR：

| 严重程度 | Issue / PR | 描述 | 状态 |
|---------|-----------|------|------|
| **P1** | #5041 [OPEN] | Dream 批次无永久差异时不推进游标，导致后续批次永远选取同一批，直至饿死。 | 已报告，尚无修复 PR |
| **P1** | #5040 [OPEN] | MCP 工具 schema 中的 `$ref` 若不以 `#/$defs/` 开头，将直接转发至 Kimi/Moonshot 等严格提供商，导致整个模型不可用。 | 已报告，尚无修复 PR |
| **P1** | #5028 [OPEN] | 飞书上传文件存储于 media 目录，与 workspace 路径隔离导致文件读取失败。 | 已报告，尚无修复 PR |
| **P1** | #5049 [OPEN] fix(agent) | 非流式最终化响应被错误抑制（源自 #2365），导致某些场景下无响应 returned。 | 已提交修复 PR |
| **P1** | #5044 [OPEN] fix(pairing) | `pairing.json` 中 `"telegram": null` 导致 `is_approved` 崩溃。 | 已提交修复 PR |
| **P1** | #5043 [OPEN] fix(cron) | `jobs.json` 中 `runHistory` 包含 null 元素引发 TypeError。 | 已提交修复 PR |
| **P2** | #5046 [OPEN] fix(feishu) | 代码 fence 内的 Markdown 表格被错误转换为飞书卡片表格，破坏 fence。 | 已提交修复 PR |
| **P2** | #5045 [OPEN] fix(slack) | 代码 fence 内的 Markdown 表格在 `_to_mrkdwn` 中被重写为 key/value 行。 | 已提交修复 PR |

总体来看，今日报告的 Bug 集中在 MCP schema 兼容性、Dream 调度、文件路径隔离和渠道适配器细节上，多数已有人提交修复，整体风险可控。

## 6. 功能请求与路线图信号

| 提议 | 类型 | 链接 | 潜在路线图影响 |
|-----|------|------|--------------|
| 多智能体协作演进（#5000） | Enhancement | [链接](https://github.com/HKUDS/nanobot/issues/5000) | 若被接受，将改变子代理架构，影响核心 Agent 设计 |
| 实时显示实际回退模型（#5017，PR） | PR | [链接](https://github.com/HKUDS/nanobot/pull/5017) | 提升 WebUI 透明度，属于用户体验增强 |
| 显式上下文技能加载（#5018，PR） | PR | [链接](https://github.com/HKUDS/nanobot/pull/5018) | 允许直接调用者预加载指定技能，丰富 API 能力 |
| WebUI 会话 SQLite 索引（#5003，PR） | PR | [链接](https://github.com/HKUDS/nanobot/pull/5003) | 显著提升历史浏览性能，有望进入下一版本 |
| Parallel Search MCP 预设（#5047，PR） | PR | [链接](https://github.com/HKUDS/nanobot/pull/5047) | 增强搜索能力，无需 API Key，易于集成 |
| 飞书群聊 context-only 模式（#5009，PR） | PR | [链接](https://github.com/HKUDS/nanobot/pull/5009) | 扩展渠道使用场景，降低群聊噪声 |

社区对多智能体协作的呼声最高，很可能成为下一阶段路线图的重要方向。

## 7. 用户反馈摘要

- **子代理系统局限**：用户 `bingqilinweimaotai` 在 #5000 中详细阐述了当前子代理系统缺乏持久身份、无法共享任务状态，且无法参与动态协作。这反映出中高级用户对 Agent 自主性和多智能体协同的迫切期待。
- **飞书文件路径冲突**：用户 `KuruZaphkiel` 在 #5028 中描述，当开启 workspace 限制后，飞书上传的文件存储在 media 目录下且无法被读取，导致多次反馈“无法读取之前上传的文件”。该问题属于配置与渠道交互的边界案例，影响了飞书深度用户的工作流。
- **MCP schema 兼容性**：用户 `3L1AS` 在 #5040 中报告，部分严格提供商（如 Kimi）因 $ref 格式不符合 `#/$defs/` 前缀而拒绝整个工具 schema，表明跨提供商兼容性仍需完善。
- **Dream 批次饥饿**：用户 `dajiaohuang` 在 #5041 中提供了一个清晰的复现路径：无内存差异的 Dream 批次完成后不推进游标，导致后续批次永远选取同一批。该 Bug 影响长期使用 Dream 功能的用户的记忆训练体验。

## 8. 待处理积压

以下 Issue 或 PR 长期未获得维护者响应或解决冲突，建议优先评估：

| 项目 | 状态 | 创建时间 | 备注 |
|------|------|----------|------|
| #2584 [OPEN] Feature/xiaozhi support | PR | 2026-03-28 | 已标记冲突，支持 ESP32 设备和 WebSocket 网关，长期搁置 |
| #4439 [OPEN] feat(tools): add read-only search_history tool | PR | 2026-06-21 | 为内存回忆新增只读工具，仍存在冲突 |
| #4689 [OPEN] feat(providers): surface OAuth status and expiry warnings | PR | 2026-07-03 | 改进 OAuth 提供商状态可见性，冲突未解决 |
| #4494 [OPEN] feat(webui): PWA support and mobile swipe gesture | PR | 2026-06-24 | 移动端增强，包括 PWA 和手势，仍有冲突 |
| #4446 [OPEN] feat(dingtalk): gate private chats and mention sender | PR | 2026-06-22 | 提升钉钉渠道功能，冲突未更新 |

这些积压项涉及多设备、多渠道、性能等多方面，长期未合并可能影响社区参与感，建议维护者在下一轮迭代中优先评审。

---

*数据来源：HKUDS/nanobot GitHub，采集时间 2026-07-23*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-07-23

---

## 今日速览

过去 24 小时项目状态保持高度活跃：共产生 **50 条 Issue 更新**（新开/活跃 39，已关闭 11）和 **50 条 PR 更新**（待合并 43，已合并/关闭 7），无新版本发布。社区反馈集中爆发，新开 Issue 以 Bug 报告和功能请求各半，其中桌面端、会话管理、凭证池与配置兼容性成为热点。已有关闭的 Issue 反映出项目团队对紧急问题（凭证池误标记、Slack 回复丢失、容器环境变量清理等）响应迅速，但部分早期提出的功能请求（如跨平台会话共享）仍处于悬而未决状态。

---

## 版本发布

无新版本发布。

---

## 项目进展

今日无重要 PR 被合并（已合并/关闭的 7 个 PR 未在展示数据中列出，推测为小修小补）。但从关闭的 Issue 可观察到以下修复已落地：

- **凭证池误标记** (`#43747`)：`openai-codex` 凭证池错误地将健康账号标记为 `usage_limit_reached`，通过 `auth reset` 恢复。已关闭。
- **Slack 回复截断/丢失** (`#19688`)：Slash 命令通过 `response_url` 投递时可能因网络失败导致回复丢失，已关闭。
- **Clarify 过期提示导致会话卡死** (`#56558`)：`clarify.respond` 对过期 prompt 返回 4009 错误，泄漏到客户端并重新激活死 prompt。已关闭。
- **Linux/X11 截屏空白** (`#58026`)：`computer_use capture()` 在 GNOME/X11 下捕获空白桌面，原因在于 `list_windows` 返回全窗口 `z_index=0`。已关闭。
- **桌面端代码块末行无法选中** (`#69168`)：多行代码块末行点击触发展开/折叠而非文本选择。已关闭。

这些修复表明项目在稳定性方面持续推进，特别是针对多平台（桌面、Slack、Linux）的关键 Bug。

---

## 社区热点

今日讨论热度最高的 Issue 及背后的用户诉求：

1. **[#4335] Feature Request: Cross-platform session context sharing (CLI ↔ Telegram)**（9 评论, 👍 2）  
   - 用户强烈希望 Hermes 能统一不同平台（CLI、Telegram、Discord）的会话上下文，目前各平台会话存储隔离，导致跨平台对话断裂。该 Issue 已开放近 4 个月，标签包含 `needs-decision`，社区持续关注进展。  
   - 链接：[#4335](https://github.com/NousResearch/hermes-agent/issues/4335)

2. **[#66875] [Bug]: Latest session does not switch after navigating to Plugins/Artifacts tab and back**（7 评论）  
   - 桌面端在切换标签页后，点击最新会话无效，倒数第二个会话却正常。严重影响日常工作流，触发了较多讨论。  
   - 链接：[#66875](https://github.com/NousResearch/hermes-agent/issues/66875)

3. **[#63679] [Bug]: Desktop app: every assistant message renders twice after recent update**（6 评论）  
   - 近期更新后桌面端每条助理回复渲染两次，用户反馈在 Windows 10 + DeepSeek V4 Pro 环境下复现，用户体验受损严重。  
   - 链接：[#63679](https://github.com/NousResearch/hermes-agent/issues/63679)

4. **[#43747] [Bug]: openai-codex credential pool marks healthy later account as usage_limit_reached**（6 评论, 已关闭）  
   - 凭证池健康账号被误判为配额耗尽，社区讨论热烈，最终通过 `auth reset` 临时恢复。该 Bug 暴露了凭证池状态同步逻辑缺陷。  
   - 链接：[#43747](https://github.com/NousResearch/hermes-agent/issues/43747)

---

## Bug 与稳定性

以下为今日报告的 Bug，按严重程度排列（P1 > P2 > P3），并标注是否存在对应修复 PR。

| 严重度 | Issue | 描述 | 存在 Fix PR? |
|--------|-------|------|--------------|
| **P1** | [#69810](https://github.com/NousResearch/hermes-agent/pull/69810) | 修复 `invalid‑tool` 和 `truncated‑tool` 提前退出时 tool‑result tail 未关闭，导致后续会话错乱。 | 🔧 是（PR #69810） |
| **P2** | [#69709](https://github.com/NousResearch/hermes-agent/issues/69709) | CLI 使用 `--provider <name>` 时，`supports_vision` 重写未被解析，视觉能力丢失。 | ❌ 未提及 |
| **P2** | [#69807](https://github.com/NousResearch/hermes-agent/issues/69807) | 使用 `api_mode: anthropic_messages` 的 custom provider 启动时因缺少 `/models` 端点阻塞 ~40 秒。 | ❌ 未提及 |
| **P2** | [#61764](https://github.com/NousResearch/hermes-agent/issues/61764) | 桌面端在慢速 Windows 启动时因后端探测超时（5 秒）进入无限重启循环。 | 🔧 是（PR #69846） |
| **P2** | [#69738](https://github.com/NousResearch/hermes-agent/issues/69738) | `/reload` 命令删除容器注入的环境变量（docker -e / env_file），破坏容器部署。 | ❌ 未提及 |
| **P2** | [#69737](https://github.com/NousResearch/hermes-agent/issues/69737) | `checkpoints.enabled` 在 one‑shot 会话（hermes -z）中被忽略。 | ❌ 未提及 |
| **P2** | [#69820](https://github.com/NousResearch/hermes-agent/issues/69820) | `execute_code` 可能继承并发请求的 session ID，导致环境污染。 | 🔧 是（PR #69821） |
| **P2** | [#69855](https://github.com/NousResearch/hermes-agent/issues/69855) | NVIDIA/Z‑AI provider 发送了无效的 `ultra` 变体，被后端拒绝（400 Bad Request）。 | ❌ 未提及 |
| **P3** | [#69825](https://github.com/NousResearch/hermes-agent/issues/69825) | 桌面端 `serve` 命令未调用 `register_from_config`，shell hooks 从未触发。 | 🔧 是（PR #69832，未在 PR 列表中出现，但 Issue 提及） |
| **P3** | [#69645](https://github.com/NousResearch/hermes-agent/issues/69645) | 桌面端空闲时因终端/宠物漫游循环调用 `requestAnimationFrame` 持续占用 CPU。 | ❌ 未提及 |
| **P3** | [#69863](https://github.com/NousResearch/hermes-agent/issues/69863) | Profile 分发安装 `mcp.json` 但运行时只读 `config.yaml`，导致 MCP 连接丢失。 | ❌ 未提及 |

**重点关注**：P1 Bug 已有修复 PR，P2 中包含多个影响核心体验的问题（会话切换、启动阻塞、容器部署），建议优先处理。

---

## 功能请求与路线图信号

今日新开功能请求中，以下方向可能被纳入下一版本：

| 功能 | Issue / PR | 描述 | 路线图信号 |
|------|------------|------|-----------|
| **跨平台会话共享** | [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) | CLI ↔ Telegram 等平台会话上下文统一。 | 长期需求，`needs-decision`，已有社区方案讨论。 |
| **桌面端信用警告** | [#69808](https://github.com/NousResearch/hermes-agent/issues/69808) | 桌面端忽略后端发送的信用预警事件。 | 修复仅涉及桌面渲染层，实现难度低。 |
| **多渠道信用通知** | [#69809](https://github.com/NousResearch/hermes-agent/issues/69809) | 信用预警仅发送到当前聊天渠道，需广播到所有 home channel。 | 属于网关层功能增强。 |
| **Ollama 网页搜索** | [#69792](https://github.com/NousResearch/hermes-agent/issues/69792) | 使用 Ollama 内置搜索后端作为 web_search provider。 | 方便已有 Ollama Cloud 用户。 |
| **ACP 工具集支持** | [#45955](https://github.com/NousResearch/hermes-agent/issues/45955) | ACP 适配器硬编码 `enabled_toolsets`，需支持 `--toolsets` 按会话隔离。 | 从 2026‑06‑14 开放至今，影响插件生态。 |
| **WhatsApp 技能绑定** | [#69726](https://github.com/NousResearch/hermes-agent/issues/69726) | 为 WhatsApp 平台添加 `channel_skill_bindings` 支持，自动加载群组技能。 | 类似功能已在 Discord/Slack 实现。 |
| **MCP OAuth 挑战处理** | [#69811](https://github.com/NousResearch/hermes-agent/issues/69811) | 工具结果中包含 OAuth challenge 时重试一次。 | 提升 MCP 安全兼容性。 |
| **桌面端自定义端点 API 兼容模式** | [#69801](https://github.com/NousResearch/hermes-agent/issues/69801) | 桌面设置页缺少 API 兼容模式选项。 | 影响自定义 provider 的易用性。 |

此外，今日开放 PR 中显示团队正在推进以下功能：
- **Voice Server 网关** (#27040，从 5 月 16 日提交，仍开放)：提供通用语音网关，支持外部语音运行时（Pipecat/Livekit）。
- **桌面端 i18n 国际化** (#69819)：15 种语言支持，采用 JSON + TS 混合架构。
- **桌面端忙时输入模式** (#69862)：根据 `display.busy_input_mode` 调整输入框状态。
- **Context 引擎压缩优化** (#69859)：允许自定义压缩信息，避免无意义的 `🔁 Compacting context…` 行。

---

## 用户反馈摘要

从今日评论中提炼的真实用户痛点：

- **跨平台体验割裂**（#4335）：用户同时在 CLI 和 Telegram 使用 Hermes，无法延续对话，被迫手动复制上下文。一位用户表示“就像两个不同的代理”。
- **桌面端更新后渲染回归**（#63679）：用户反映“每次回复都变双份，无法正常阅读”，且该问题影响所有会话，重启无效。
- **凭证池不可靠**（#43747）：一位开发者指出“OpenAI Codex 账号明明还有余额，但 Hermes 标记为超额，导致整个池停止工作”，依靠手动 `auth reset` 恢复。
- **启动时间过长**（#69807）：使用阿里云 Token Plan 等第三方网关的用户抱怨“CLI 启动需要等 40 秒，工作效率大打折扣”。
- **容器环境变量被清除**（#69738）：Docker 部署用户投诉“reload 后所有 `-e` 参数丢失，容器被迫重建”，认为这是不符合预期的破坏性行为。
- **代码块末行无法选中**（#69168）：开发者在报告中吐槽“为了复制一行代码，得先点展开，再移动光标——这简直是反人类设计”。

---

## 待处理积压

以下 Issue / PR 长期未获得维护者响应，或处于 `needs-decision` 状态，建议重点关注：

| 编号 | 类型 | 标题 | 创建时间 | 状态 | 链接 |
|------|------|------|----------|------|------|
| #4335 | Feature | Cross-platform session context sharing | 2026‑03‑31 | OPEN, needs-decision | [链接](https://github.com/NousResearch/hermes-agent/issues/4335) |
| #44845 | Feature | Clarify prompts should be durable ID-addressable decisions | 2026‑06‑12 | OPEN | [链接](https://github.com/NousResearch/hermes-agent/issues/44845) |
| #45955 | Feature | ACP: honor `--toolsets` and add per-session tool scoping | 2026‑06‑14 | OPEN | [链接](https://github.com/NousResearch/hermes-agent/issues/45955) |
| #27040 | PR | feat(gateway): add generic voice_server gateway platform | 2026‑05‑16 | OPEN | [链接](https://github.com/NousResearch/hermes-agent/pull/27040) |
| #69839 | Bug | Unknown provider '9router' — stuck config | 2026‑07‑23 | OPEN, needs-repro | [链接](https://github.com/NousResearch/hermes-agent/issues/69839) |

其中 #4335 和 #45955 分别涉及跨平台统一和 ACP 插件体系，对社区生态影响较大，建议尽早决策。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-07-23)

## 1. 今日速览
过去24小时，PicoClaw 项目保持中等活跃度：共更新 **3 个 Issues**（全部为活跃状态，无关闭）和 **4 个 Pull Requests**（其中 2 个已合并/关闭，2 个仍待处理）。无新版本发布。一个关于 IRC 长消息支持的新功能 Issue 被提出，同时两个陈旧 Issue 在今日得到维护者更新，表明社区关注点逐步向消息通道适配和会话控制转移。依赖安全修复和文档回退两个 PR 已合并，提升了项目基础稳定性。

---

## 2. 版本发布
*（无新版本发布，本部分省略）*

---

## 3. 项目进展
今日合并或关闭的 PR 共计 2 个，均为低风险维护类变更：

- **#3286 (已合并)** — `fix: update Go and x/text for govulncheck`  
  作者：imguoguo  
  更新 Go 版本及 `x/text` 依赖，修复 `govulncheck` 报告的漏洞。属于安全合规补丁，不涉及新功能。  
  [PR #3286 链接](https://github.com/sipeed/picoclaw/pull/3286)

- **#3285 (已关闭)** — `docs: remove picopaw`  
  作者：imguoguo  
  回滚先前引入的“picopaw”文档变更（`reverts #3096`），清理文档内容。  
  [PR #3285 链接](https://github.com/sipeed/picoclaw/pull/3285)

此外，仍有 **2 个 PR 待合并**，其中 #3222（DeltaChat 重构）和 #3163（Bedrock 提示缓存）已处于陈旧状态，尚未收到新的 review。

---

## 4. 社区热点
今日讨论热度集中在以下两条更新：

- **#3287 [Feature] Better support long messages in IRC**  
  作者：superuser-does  
  创建仅一天，尚无评论，但该 Issue 直接关系到 IRC 通道的可用性——用户期望 PicoClaw 能正确识别 IRCv3 协议中被切分的长消息，将其整合为一条完整消息。这是消息通道适配层面的重要需求。  
  [Issue #3287 链接](https://github.com/sipeed/picoclaw/issues/3287)

- **#3258 [BUG] Process Hook before_tool modify not working**  
  作者：Shiniese  
  该 Issue 已存在一周，今日被更新（最后评论来自维护者）。用户报告 `before_tool` 钩子中的 `decision` 字段被丢弃、参数解析异常，怀疑是反序列化缺陷。该 bug 影响插件式工具链的可靠性，已引发至少一次讨论。  
  [Issue #3258 链接](https://github.com/sipeed/picoclaw/issues/3258)

---

## 5. Bug 与稳定性
今日无新增严重 Bug 报告，但以下两个持续存在的缺陷值得关注（按严重程度递减）：

| 严重程度 | Issue | 描述 | 是否已有 Fix PR |
|----------|-------|------|----------------|
| ⚠️ 高 | [#3258](https://github.com/sipeed/picoclaw/issues/3258) | `before_tool` 钩子修改失效：`decision` 字段被丢弃，参数解析错误（反序列化问题） | 否 |
| 🟡 中 | [#3257](https://github.com/sipeed/picoclaw/issues/3257) | Gateway 模式缺乏无状态/无历史会话模式，无法像 CLI 那样通过 `--session` 独立控制会话 | 否 |

其中 #3258 可能影响依赖 Hook 机制的第三方工具，需要优先排查序列化逻辑。两个 Issue 均已陈旧（创建于 7 月 15 日），但今天均有更新，说明维护者已介入。

---

## 6. 功能请求与路线图信号
今日新提出的功能需求 1 个，持续活跃的需求 1 个：

- **#3287** — 为 IRC 通道提供长消息（>512 字节）自动合并支持。  
  背景：IRCv3 协议限制单行 512 字节，客户端自动切分消息，但 PicoClaw 当前将每一切片视为独立消息，导致对话混乱。该需求属于“消息通道增强”，与现有 Gateway 路线图契合。

- **#3257** — 为 Gateway 会话增加无历史（stateless）模式，允许用户通过 session 标识创建独立对话，而不自动复用历史。  
  用户使用 `picocaw gateway` 时无法像 `picocaw agent --session` 那样控制会话上下文，希望获得类似的能力。

目前项目尚未发布版本路线图，但 #3287 和 #3257 均属社区常用场景，有可能被纳入下一个 minor 版本。此外，已停滞的 PR #3163（Bedrock 提示缓存）若被激活，将提升 AWS 用户的使用体验。

---

## 7. 用户反馈摘要
从本日 Issues 评论中可提炼出以下用户痛点：

- **Hook 机制的可靠性**（#3258）：用户在使用 `before_tool` 修改工具调用时，发现 `decision` 字段被静默丢弃，参数被错误解析。该用户特意提供了复现步骤、环境信息（PicoClaw 0.3.1, Go 1.25.11, DeepSeek 模型），表明该问题可稳定复现。用户对钩子功能的期望较高，但当前实现存在反序列化缺陷。
- **Gateway 模式灵活性不足**（#3257）：用户通过 `picoclaw gateway` 部署时，希望获得与 `picoclaw agent` 相同的会话隔离能力。目前 Gateway 依赖 channel/channel 衍生 session key，无法手动指定独立会话，导致难以在对话中隔离不同上下文。用户建议增加 `--session` 参数或允许覆盖 session 键。
- **IRC 长消息行为异常**（#3287）：用户未直接表达不满，但描述了 PicoClaw 当前将 IRC 切分消息视为多条独立消息的问题，影响对话连贯性。

整体来看，社区反馈集中在**消息通道适配**、**会话控制**和**插件 Hook 稳定性**三个方向。

---

## 8. 待处理积压
以下 Issue 或 PR 长期未得到充分响应或合并，需要维护者关注：

| 类型 | 编号 | 标题 | 状态 | 创建时间 | 最后更新 | 瓶颈 |
|------|------|------|------|----------|----------|------|
| PR | [#3163](https://github.com/sipeed/picoclaw/pull/3163) | feat(bedrock): leverage Converse prompt caching via cache points | OPEN / stale | 2026-06-23 | 2026-07-22 | 缺少 reviewer，功能改动较大，涉及 AWS 特定 API |
| PR | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation, documentation -200LOC | OPEN / stale | 2026-07-03 | 2026-07-22 | 待 review，重构可能带来兼容性影响 |
| Issue | [#3258](https://github.com/sipeed/picoclaw/issues/3258) | [BUG] Process Hook before_tool modify not working | OPEN / stale | 2026-07-15 | 2026-07-22 | 明确复现，但尚未有 Fix PR 或 assignee |
| Issue | [#3257](https://github.com/sipeed/picoclaw/issues/3257) | Add stateless/no-history mode for gateway sessions | OPEN / stale | 2026-07-15 | 2026-07-22 | 功能性强，但可能需较大架构支持 |

其中 #3163 和 #3222 已超过两周无人推进，建议维护团队在新迭代中优先安排代码审查。两个 Issue 可考虑打上 `help wanted` 标签以吸引外部贡献者。

---

*本日报基于 sipeed/picoclaw 公开数据自动生成，数据截止时间 2026-07-23 UTC。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-07-23)

---

## 1. 今日速览

过去24小时内，项目共收到1条新Issue，3个Pull Request保持待合并状态，无新版本发布。整体活跃度偏低但社区贡献持续：一个关于安全文档的准确性讨论被提出，三项来自不同贡献者的功能/修复PR处于等待审查阶段。项目维护节奏趋于平稳，但部分PR已开放超过三周，建议加快合入与反馈速度。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

过去24小时无任何PR被合并或关闭。以下3个待合并PR代表了项目当前的主要推进方向：

- **#3070** – Fix WhatsApp sender identity divergence between Baileys and Cloud paths  
  *作者*: QuantumBreakz | *开放*: 2026-07-16 | *更新*: 2026-07-22  
  *链接*: [nanocoai/nanoclaw PR #3070](https://github.com/nanocoai/nanoclaw/pull/3070)  
  *说明*：解决WhatsApp双路径下（Baileys与Cloud）用户ID不一致的问题，属于跨通道兼容性修复，对多网关部署场景至关重要。

- **#3117** – [PR: Skill, follows-guidelines] feat(skill): add-omarchy-statusbar — Waybar status indicator for NanoClaw  
  *作者*: mmneimne | *开放*: 2026-07-22 | *更新*: 2026-07-22  
  *链接*: [nanocoai/nanoclaw PR #3117](https://github.com/nanocoai/nanoclaw/pull/3117)  
  *说明*：新增Waybar（Linux桌面状态栏）快捷状态指示器，属于Utility skill，无需修改核心代码即可提升桌面端用户体验。

- **#2877** – [follows-guidelines] feat(telegram): native rich rendering via Bot API 10.1 sendRichMessage  
  *作者*: robbyczgw-cla | *开放*: 2026-06-28 | *更新*: 2026-07-22  
  *链接*: [nanocoai/nanoclaw PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877)  
  *说明*：利用Telegram Bot API 10.1的`sendRichMessage`实现原生富文本渲染，将显著提升Telegram通道的消息表现力，属于长期需求的落地。

尽管今日无合入动作，以上PR的持续活跃表明社区正在推进跨通道一致性、桌面集成与消息渲染三大方向的改进。

---

## 4. 社区热点

当前唯一的新Issue **#3118** 成为社区焦点：

- **#3118** [OPEN] SECURITY.md overclaims per-group credential isolation  
  *作者*: bradfeld | *创建*: 2026-07-22 | *评论*: 0 | *👍*: 0  
  *链接*: [nanocoai/nanoclaw Issue #3118](https://github.com/nanocoai/nanoclaw/issues/3118)  
  *摘要*：指出`docs/SECURITY.md`中“Per-agent policies”章节声称每个NanoClaw组拥有独立的OneCLI代理身份，但实际自托管OneCLI网关上的OAuth连接是账户级别的，导致安全声明与实际实现不符。  
  **分析**：该Issue反映了用户对安全文档严谨性的高度关注，可能涉及权限模型的设计缺陷。虽然无评论与点赞，但属于可能影响信任度的文档/功能对齐问题，建议维护者尽快评估并更新文档或修复实际行为。

---

## 5. Bug 与稳定性

当日未报告新的功能崩溃、回归或性能问题。唯一Issue **#3118** 属于文档与实际行为不符的“逻辑Bug”，影响安全策略的准确性，但严重程度为中等（非运行时崩溃）。目前尚无对应的修复PR。

---

## 6. 功能请求与路线图信号

从当日的PR与Issue中，可识别出以下路线图信号：

| 功能/方向 | 体现 | 可能纳入版本 |
|-----------|------|------------|
| **桌面端状态集成** | PR #3117 (Waybar skill) 提出在Linux状态栏显示NanoClaw状态 | 下一小版本（v0.x） |
| **Telegram富消息渲染** | PR #2877 基于Bot API 10.1实现原生富文本 | 已等待近一个月，预计下一版本合并 |
| **WhatsApp跨路径一致性** | PR #3070 修复双路径下用户ID不一致 | 高优先级，修复后提升稳定性 |
| **安全模型澄清/修正** | Issue #3118 要求更正凭据隔离文档 | 可能需要在文档更新或代码层面调整 |

三个待合并PR均为社区贡献，若维护者能快速审查，将在下个版本中落地。

---

## 7. 用户反馈摘要

- **用户 bradfeld** 在 Issue #3118 中指出：`SECURITY.md` 关于“每组成员拥有独立OneCLI代理身份”的描述存在误导，实际自托管场景下OAuth连接为账户级。该反馈暗示用户对多租户隔离有实际需求，且已阅读安全文档进行验证，表现出较高的技术深度。  
  *场景*：自托管OneCLI网关下的多组（sales/support）代理权限隔离。  
  *满意度*：对文档准确性不满意，期待澄清或功能改进。

- 其他PR未见评论，无额外用户痛点或使用场景描述。

---

## 8. 待处理积压

以下Issue与PR开放时长较长，且无维护者回复或合并，建议优先关注：

| 编号 | 类型 | 标题 | 开放时长 | 状态 |
|------|------|------|----------|------|
| #3118 | Issue | SECURITY.md overclaims per-group credential isolation | 1天 | 新开，无回复 |
| #3070 | PR | Fix WhatsApp sender identity divergence | 7天 | 待审查 |
| #2877 | PR | feat(telegram): native rich rendering via Bot API 10.1 | 25天 | 待审查（最长） |
| #3117 | PR | feat(skill): add-omarchy-statusbar | 1天 | 待审查 |

**提醒**：PR #2877 已开放超过三周，可能导致贡献者疲劳或代码冲突积累；Issue #3118 涉及安全文档准确性，建议24小时内至少给出初步回应（如确认问题或标为wontfix）。整体来看，项目维护响应速度需要提升以保持社区活跃度。

---

*日报生成时间：2026-07-23 | 数据来源：[NanoClaw GitHub](https://github.com/nanocoai/nanoclaw)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-07-23

## 1. 今日速览
- 项目过去24小时内没有新版本发布，活跃度较低，仅处理了1个已关闭的Issue和1个已合并/关闭的PR。
- 社区焦点集中在Discord网关的严重功能缺陷（Issue #977）上，该问题导致机器人接收一条消息后永久“失聪”。
- 相应的修复PR #978已迅速被合并，解决了因线程栈过小而引发的进程崩溃问题，项目稳定性得到关键提升。
- 整体来看，项目维护者对关键Bug响应及时，但缺乏新功能或版本迭代信号，短期活跃度中等偏低。

## 2. 版本发布
- 今日无新版本发布。

## 3. 项目进展
- **关键修复合并**：PR #978 已关闭并合并。该PR修复了Discord打字指示器线程因栈空间不足（仅512KB）导致进行HTTPS请求时触发栈溢出崩溃的问题。方案是将打字线程迁移至重运行时栈，避免了`std.crypto.tls`内部大块内存拷贝造成的进程终止。这项修复直接影响Discord Bot的稳定运行，是今日最核心的推进。
- 关联的Issue #977（永久“失聪”）虽未直接提及PR #978的修复效果，但结合PR描述（栈溢出导致进程崩溃）与Issue中“机器人保持在线但无法接收事件”的症状，可能栈溢出同样会导致事件分发线程异常（而非仅打字线程）。因此该PR的合并很可能同时解决了#977的根本原因。

## 4. 社区热点
- **#977 [CLOSED] Discord gateway goes permanently deaf after exactly one MESSAGE_CREATE**  
  链接：[Issue #977](https://github.com/nullclaw/nullclaw/issues/977)  
  - 作者Tetraslam报告了高度可复现的致命Bug：任何Discord网关连接仅处理一条MESSAGE_CREATE事件后永久停止分发后续事件，心跳正常但无法接收消息。该问题收到1条评论，影响所有使用Discord Bot的用户。社区强烈关注，因为这是核心功能的严重退化。
  - 诉求：用户迫切需要修复以恢复机器人正常工作。问题已关闭，但未明确标注是否已通过PR #978彻底解决。建议维护者在关闭时补充关联修复信息。

## 5. Bug 与稳定性
- **严重Bug (已修复)**：Discord打字指示器线程栈溢出崩溃  
  - 入口：PR #978  
  - 严重程度：致命（整个进程abort）  
  - 影响范围：所有使用Discord打字功能的实例  
  - 修复状态：已合并，待发布至下一版本。

- **严重Bug (已关闭，原因未明)**：Discord网关永久“失聪”  
  - 入口：Issue #977  
  - 严重程度：致命（机器人完全不可用）  
  - 修复状态：已关闭，但未与PR #978强制关联。建议维护者再次确认该问题是否已通过栈修复根除，或需要额外补丁。

- 暂无其他新增Bug或回归报告。

## 6. 功能请求与路线图信号
- 今日无明确的新功能请求。用户反馈集中在稳定性修复上，未涉及新特性讨论。
- 结合PR #978，项目短期内可能优先优化运行时栈配置策略，或为I/O密集任务提供独立的栈大小配置接口，避免类似问题再次发生。

## 7. 用户反馈摘要
- **用户Tetraslam**（Issue #977）描述了清晰的重现步骤：启动机器人 → 收到第一条消息并成功回复 → 后续所有事件静默丢弃。该用户指出“100%可复现”，表明问题非偶发。没有表达满意度，但提交了详细的诊断信息。
- 由于PR #978也由同一用户提交，推测其既是发现者也是修复者，社区协作效率较高。

## 8. 待处理积压
- 今日无长期未响应的积压Issue或PR。项目维护者对当天提交的问题和PR均在一个工作日内响应并关闭，处理效率良好。建议关注Issue #977的关闭记录中是否补充了关联修复说明，以提高问题跟踪透明度。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 IronClaw 项目 2026-07-23 的 GitHub 数据，现呈上项目动态日报。

---

### IronClaw 项目动态日报 | 2026-07-23

**项目名称:** IronClaw
**数据源:** github.com/nearai/ironclaw
**分析周期:** 2026-07-22 至 2026-07-23

---

### 1. 今日速览

今日 IronClaw 项目处于**高活跃度、发布前冲刺**状态。开发者和社区围绕 **v1-launch-checklist** 和 **Reborn** 架构重构两大主题密集提交，共有 **50 条 Issue 和 50 个 PR** 更新。虽然无新版本发布，但团队通过合并大量大型 PR (如 #6529, #6480) 完成了`ProductSurface` 架构转换的关键里程碑，并修复了多个阻塞性问题（如 Telegram 通道默认启用）。值得注意的是，大量过往工作被归档为“已完成基础” Issue，这表明项目正在进行发布前最后的功能回填和状态确认。社区反馈集中在**部署体验、渠道集成（Telegram）和系统稳定性**上，Bug 修复与功能请求并行。

### 3. 项目进展

今日项目进展显著，尤其在架构重构和关键功能修复上迈出了坚实一步。

- **架构重构 (`ProductSurface` 转换):**
    - 核心开发人员 `ilblackdragon` 今日合并了 **PR #6538** (已关闭)，将 OpenAI 兼容的 API 路由迁移至`ProductSurface`，并合入了 **PR #6529** (已关闭)，将对外的交付偏好目录 (`outbound preferences facade`) 从核心组合逻辑中移出至 `ironclaw_outbound` 模块。这两项合并是清理旧 `ProductWorkflow` 遗留架构、迈向统一产品表面的重要步骤。
    - **PR #6480** (已关闭) 也被合并，将 operator、project、admin、automation 及视图 API 转换至 `ProductSurface`，进一步清除了旧架构的依赖。
    - **PR #6536** (待合并) 继续推进此工作，将渠道入口点路由至 `ProductSurface`。

- **关键功能修复与启用:**
    - **PR #6542** (待合并) 解决了 **Issue #6522** 中关于 Telegram 无法使用的问题。此 PR 将 Telegram 通道主机关联 Webhook/设置的路由从“按配置选择”改为“默认启用”，解决了用户在部署时无法自动设置 Telegram 的问题。
    - **PR #6533** (待合并) 为托管部署添加了容器监督模式 (`container-supervised mode`)，部分修复了 **Issue #6534** 中 Google OAuth 配置在托管部署中无法应用的问题。

- **测试与CI改进:**
    - **PR #6537** (已关闭) 修复了 CI 管道，确保在发布修复分支 (`release-fix-*`) 上也能全量运行 Reborn 测试和 E2E 测试，提升了发布流程的安全性。
    - **PR #6535** (已关闭) 和 **PR #6540** (已关闭) 分别添加了参考模型预言(`reference model oracles`)和测试环境变量遮蔽，增强了测试的确定性和隔离性。

- **文档与回顾:**
    - 维护者 `BenKurrek` 创建并关闭了 **9 个以 "Completed foundation" 开头的 Issue** (#6510-6520 等)。这是一种项目状态管理行为，标记了之前已完成但未被记录的核心基础功能（如 Slack 路由、Telegram 生产镜像、统一扩展运行时等）。这表明项目正在梳理发布前的技术债务。

### 4. 社区热点

今日社区讨论的焦点集中在对**核心稳定性和错误恢复**的长期关注上，以及对新发现的 **v1 发布阻塞性 bug** 的热切讨论。

1.  **[Issue #6284] EPIC: error-recoverability endgame** (4条评论)
    - **链接:** [nearai/ironclaw Issue #6284](https://github.com/nearai/ironclaw/issues/6284)
    - **分析:** 这是今日评论最多的 Issue，讨论了“错误可恢复性”的最终方案。该 Issue 定义了一个严格的合同：任何运行中的错误都必须保证模型能够看到它、理解原因并有执行动作的机会。这表明社区和开发团队正在为最终用户提供**极其稳健的 AI 代理体验**，而非简单的“程序不崩溃”。这反映了社区对代理在复杂环境中自主解决问题能力的高期待。

2.  **[Issue #6105] Extension/channel lifecycle state-machine test** (3条评论)
    - **链接:** [nearai/ironclaw Issue #6105](https://github.com/nearai/ironclaw/issues/6105)
    - **分析:** 这是一个关于扩展/渠道（特别是 Slack）生命周期状态机测试的 Issue。它指出过去几周虽然修复了多个问题，但 QA 仍反复回归，因此提议建立端到端的自动化测试。这揭示了社区对**当前测试覆盖不足**的明确不满，以及对建立更可靠测试基础设施的强烈诉求。该 Issue 被标记为 `reborn`，是 Reborn 架构迭代的关键反馈。

3.  **[Issue #6523] Agent fails to create during onboarding if the testing flag is set** (1条评论)
    - **链接:** [nearai/ironclaw Issue #6523](https://github.com/nearai/ironclaw/issues/6523)
    - **分析:** 这是一个影响新用户入门的 Bug。用户在创建 Agent 时选择“测试构建”标志会导致部署失败。这是一个**高优先级、直接阻塞用户体验**的问题，因此虽然评论不多，但可能是开发团队当务之急的 fix 对象。

### 5. Bug 与稳定性

今日报告的 Bug 主要集中在 **v1 发布前检查清单**和**渠道集成**上，部分已有修复 PR。

| 严重程度 | Issue # | 标题摘要 | 是否有 Fix PR? | 备注 |
| :--- | :--- | :--- | :--- |:--- |
| **P0/阻塞** | #6523 | Agent 创建接口选择“test build”标志时失败 | 无 (未关联) | 新用户入门流程被阻断，优先级极高 [Issue] |
| **P1/高** | #6534 | 托管部署中无法应用 Google OAuth 配置 | **部分修复** (PR #6533) | 阻止生产环境部署Google渠道，已提交容器监督模式修复，但UI配置路径仍未解决 [Issue] [PR] |
| **P1/高** | #6541 | WebUI 持续显示“Reconnecting” | 无 (未关联) | 虽无功能影响，但造成用户困惑，属于稳定性与用户体验Bug [Issue] |
| **P1/高** | #6475 | Telegram `/pair` 命令无法被识别，导致用户困在配对循环中 | 无 (未关联) | 严重阻塞 Telegram 渠道使用，被标记为 `bug_bash_P1` [Issue] |
| **P2/中** | #6478 | 已连接 Telegram 后，Agent 仍要求进行 Slack 授权 | 无 (未关联) | Agent对激活的渠道路由混淆，导致用户体验割裂 [Issue] |
| **P3/低** | #6521 | `ironclaw` CLI 在 staging 环境的 agent 节点上不可用 (已关闭) | 无 (已关闭) | 该问题可能已被解决，但作为已关闭 Issue 记录在案。 |

### 6. 功能请求与路线图信号

今日的功能请求信号强烈指向 **v1 版本的最终用户体验打磨**和**长期愿景的功能基础**。

- **针对性功能请求：**
    - **硬件钱包支持 (Ledger Clear Signing):** **[Issue #6532](https://github.com/nearai/ironclaw/issues/6532)** 提出了一个重要的功能：让代理能够代表用户进行区块链交易，但绝不能在没有用户授权的情况下动用资金。这是一个面向高级用户的核心功能，大概率会被纳入下一个大版本的路线图中。
    - **自动激活网络搜索 (Web Search):** **[PR #6232](https://github.com/nearai/ironclaw/pull/6232)** (待合并) 提议将 `web-access` 和 `web_search` 设置为默认激活的扩展，让代理自动发现并使用真实的网络搜索功能，而无需用户手动启用。这旨在解决代理默认缺少联网搜索能力的问题。
    - **系统提示基准测试模式 (BENCHMARKING_MODE):** **[PR #6539](https://github.com/nearai/ironclaw/pull/6539)** (待合并) 提出为系统提示增加一个“基准测试模式”附加段落，用于在无人值守的评估中，防止模型因要求用户澄清而暂停。这反映了对模型在自动评估场景下行为的精细化控制需求。

- **基础设施与安全：**
    - **管理员管理用户安全基础:** **[PR #6527](https://github.com/nearai/ironclaw/pull/6527)** (待合并) 提出了一个重大的安全基础功能，增加了租户管理员管理的私有内容策略和用户安全基础，为更灵活的企业级部署铺平了道路。
    - **秘密租约与出口代理守护进程:** **[Issue #6472](https://github.com/nearai/ironclaw/issues/6472)** 提出了一个沙箱相关的基础设施功能，旨在通过本地代理进程管理网络出口权限和凭证，增强运行时的安全性。

### 7. 用户反馈摘要

从今日的 Issues 中，可以提炼出以下用户真实反馈和痛点：

- **部署与配置体验是核心痛点:**
    - “On hosted staging, an operator **can** save Google OAuth config from the WebUI, but **that config is never consumed** when an agent actually needs to connect to Gmail.” ([Issue #6534](https://github.com/nearai/ironclaw/issues/6534)) —— 用户在部署环境中配置 Google OAuth 后，配置未生效，导致无法连接 Gmail，说明 **WebUI 配置与后端消费存在脱节**。
    - “When I ssn to my agent on agent-stg.near.ai, the ssh is not available.” ([Issue #6521](https://github.com/nearai/ironclaw/issues/6521)) —— 用户通过 SSH 进入 Agent 节点后无法使用 `ironclaw` 命令，说明**远程管理的工具链缺失**。

- **渠道集成（特别是 Telegram）体验不佳:**
    - “When the user sends `/pair`, the agent treats it as ordinary text rather than a command.” ([Issue #6475](https://github.com/nearai/ironclaw/issues/6475)) —— Telegram 的 `/pair` 命令不被识别，导致配对循环，体验极其**令人沮丧**。
    - “When the agent wants to send a message through Telegram …, it instead triggers an authentication block for Slack.” ([Issue #6478](https://github.com/nearai/ironclaw/issues/6478)) —— 用户的 Agent 已连接 Telegram，却仍被提示授权 Slack，说明**渠道路由逻辑存在缺陷**。

### 8. 待处理积压

以下为长期存在、但今日未有显著更新的重要议题，它们代表了项目的技术债务和用户关心的功能缺位。

1.  **[Issue #3288] Reborn: production/scoped capability lifecycle admin parity** (5月6日创建, 2条评论)
    - **链接:** [nearai/ironclaw Issue #3288](https://github.com/nearai/ironclaw/issues/3288)
    - **分析:** 一个从5月初就开始的史诗级 Issue，涉及将扩展、技能、MCP 等的生命周期管理完全迁移到新的类型化服务中。这是一个大范围的架构重构任务，其持续存在表明这部分工作的复杂性。

2.  **[Issue #2246] Unify extension model: MCP tools as single-tool extensions + provider dedup** (4月10日创建, 1条评论)
    - **链接:** [nearai/ironclaw Issue #2246](https://github.com/nearai/ironclaw/issues/2246)
    - **分析:** 一个根本性的架构问题，即 MCP 服务器和 WASM 扩展在 LLM 面前的呈现方式不一致。虽然未解决，但今日合并的许多 `ProductSurface` PR 正是解决此类问题的铺垫，该 Issue 的实现可能已进入尾声。

3.  **[Issue #1519] Routine notifications lack context in user's chat thread** (3月21日创建, 1条评论)
    - **链接:** [nearai/ironclaw Issue #1519](https://github.com/nearai/ironclaw/issues/1519)
    - **分析:** 一个长期存在的用户体验问题。当代理的例行任务发送通知时，通知被隔离在专门的交谈记录中，而不是用户聊天线程的上下文中，导致用户无法在聊天界面中看到和回复。这是一个影响日常使用流畅性的显著缺陷。

4.  **[Issue #1330] Tool schema discovery: expose message routing and attachment semantics more clearly** (3月18日创建, 1条评论)
    - **链接:** [nearai/ironclaw Issue #1330](https://github.com/nearai/ironclaw/issues/1330)
    - **分析:** 一个关于工具模式（Schema）易用性的 Issue。`message` 工具的参数大纲过于复杂，其运行时行为（如路由和附件路径）依赖于模型不直接知晓的上下文。这导致模型难以正确调用该工具，属于模型层的一个长期“用户”体验问题。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-07-23

---

## 1. 今日速览

过去24小时内，项目保持 **中等活跃度**：共处理3条Issue（均为已存在并被打上`stale`标签的旧问题，今日无新增讨论或关闭操作），合并/关闭2个PR，新开1个PR。无新版本发布。两个已合并PR分别针对Windows安装加固和Cowork导出模态框层级问题，社区侧无明显新讨论热点，但三个搁置已久的Issue（#1263、#1265、#1273）因被自动标记为`stale`而暂未获得维护者回应，整体健康度偏平稳，但需警惕积压问题。

---

## 2. 版本发布

无

---

## 3. 项目进展 — 今日合并/关闭的 PR

- **#2377 [CLOSED] feat: windows update installer hardening** | [链接](https://github.com/netease-youdao/LobsterAI/pull/2377)  
  **作者**: fisherdaddy  
  **内容**: 针对Windows平台的更新安装程序进行了加固（具体细节未展开）。该PR提升Installer在Windows环境下的鲁棒性，属于基础架构稳定性改进。  
  **影响**: 减少Windows用户因安装程序中断导致升级失败或文件损坏的风险。

- **#2376 [CLOSED] fix(cowork): render export modal above sidebar** | [链接](https://github.com/netease-youdao/LobsterAI/pull/2376)  
  **作者**: liuzhq1986  
  **内容**: 通过body portal挂载导出选项模态框，解决与侧边栏的堆叠上下文冲突。属于UI修复，确保Cowork协作场景下导出弹窗正常显示。  
  **影响**: 改善多面板重叠时的用户体验，修复了视觉层覆盖错误。

**小结**：两个PR分别从平台安装可靠性和UI渲染层面推进项目，均为细节优化，无明显架构级变动。项目整体处于**维护和打磨阶段**。

---

## 4. 社区热点

今日无高热度Issue或PR。唯一新开的PR #2378（feat: polish AI skin appearance behavior）暂未有评论或点赞，尚未产生讨论。

需关注的是三个标记为`stale`的长期Issue（#1263、#1265、#1273），它们均在4月2日提出，今日被更新（可能为自动添加`stale`标签），虽然社区无新增评论，但背后诉求仍未解决，可能成为潜在热点。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 概要 | 当前状态 |
|----------|-------|------|----------|
| **严重** | [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) | `sql.js` WASM高频写入导致 `memory access out of bounds` 崩溃，且非原子写入有数据库损坏风险。 | 开放，`stale`，无PR关联 |
| 中 | [#1263](https://github.com/netease-youdao/LobsterAI/issues/1263) | 定时任务UI重复显示两个相同会话，且持续提示API rate limit reached。 | 开放，`stale` |
| 低 | 无新报告 | — | — |

**分析**：  
- #1273 属于 **潜在数据损坏+应用崩溃** 级别问题，高频写作场景（如长时间Cowork）可能触发。当前无修复PR，且已被自动标记为`stale`，风险较高。  
- #1263 虽然表现为UI重复及API限速，但可能暗示后端定时任务调度逻辑或API调用重试机制存在缺陷。  
两个Bug均需维护者优先评估并分配资源。

---

## 6. 功能请求与路线图信号

- **[#1265](https://github.com/netease-youdao/LobsterAI/issues/1265)** — 用户 `neoliuhua` 提出：在多Agent场景下，不同Agent应能绑定不同的IM机器人和模型（如调度Agent用推理型模型，编程Agent用代码型模型）。  
  **信号强度**：中等。该需求直接指向LobsterAI的核心“Agent + IM”能力，并符合当前AI Agent编排的趋势。若项目计划扩展Agent团队协作场景，此功能很可能被纳入后续版本。

- **[新PR #2378](https://github.com/netease-youdao/LobsterAI/pull/2378)** — 作者 `btc69m979y-dotcom` 提交了“polish AI skin appearance behavior”的PR，内容包括：对齐AI皮肤展示、皮肤按最新优先排序、标准主题与AI皮肤互斥等。  
  **路线图信号**：表明项目正在持续打磨 **AI皮肤（AI Skin）** 个性化外观功能，该PR若合并将提升定制化体验。

**对下一版本的预测**：  
- 大概率包含：AI皮肤表现优化（#2378） + Windows安装加固（#2377）。  
- 可能包含：Agent与IM/模型解耦（#1265） 取决于维护者优先级。  
- 数据库稳定性修复（#1273） 具有一定紧迫性，可能以hotfix形式发布。

---

## 7. 用户反馈摘要

基于三条Issue的评论及摘要（均只有一条评论，来自各自作者），提炼如下：

| 用户/Issue | 痛点/场景 | 情绪 |
|------------|-----------|------|
| `guoben919-droid` (#1263) | 定时任务UI重复、API限速错误，怀疑是调度逻辑或session管理问题。 | 困惑、困扰 |
| `neoliuhua` (#1265) | 多Agent场景下无法区分IM机器人及模型，限制了Agent团队协作的灵活性。 | 需求明确，期待增强 |
| `coppynight` (#1273) | 高频Cowork时WASM崩溃且数据库可能损坏，应用无法恢复。 | 明显不满（高严重性） |

**整体印象**：用户对项目功能深度（如Agent绑定自定义模型）有期待，但正在被稳定性问题（数据库崩溃、API限速）所困扰。尤其是#1273若未及时处理，可能导致重度用户流失。

---

## 8. 待处理积压

以下为需维护者关注的重要积压项（按优先级排序）：

1. **[#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) — 严重**  
   `sql.js` WASM内存越界崩溃 & 非原子写入导致数据库损坏。  
   **状态**：`stale`，无PR，已搁置近4个月。建议立即指定人员评估替代方案（如切换至原生SQLite或增加WASM内存管理保护）。

2. **[#1263](https://github.com/netease-youdao/LobsterAI/issues/1263) — 中**  
   定时任务UI重复显示 & API限速未合理处理。  
   **状态**：`stale`，无进展。可能影响所有使用定时任务功能的用户。

3. **[#1265](https://github.com/netease-youdao/LobsterAI/issues/1265) — 低**  
   功能请求：Agent绑定不同IM机器人及模型。  
   **状态**：`stale`，但无技术障碍，可纳入路线图讨论。

4. **[#2378](https://github.com/netease-youdao/LobsterAI/pull/2378) — 新PR**  
   待合并。目前无冲突或评论，需Reviewer尽快审查。若通过可提升AI皮肤体验。

---

**日报总结**：LobsterAI 在2026-07-23处于 **平稳维护期**，有少量功能性改进合并，但三个长期开放的Bug（尤其数据库崩溃）可能暗藏风险。社区功能需求清晰（Agent个性化绑定），维护者应平衡新功能开发与关键稳定性修复。建议下周前对#1273给予明确回应或分配修复资源。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-07-23

## 今日速览
- 过去 24 小时内项目未产生新的或关闭的 Issue，社区问题反馈进入静默期。
- 仅有一项 Pull Request #1162 处于开放待合并状态，项目核心维护活动集中在 Web 前端会话时间显示优化。
- 无新版本发布，代码库活跃度较低，可能与近期功能迭代进入稳定期有关。
- 整体活跃度评价：**偏低**，但提交的 PR 细节完善，说明开发仍在持续推进。

## 版本发布
无新版本发布。

## 项目进展
### 合并/关闭的 Pull Requests
今日无已合并或关闭的 PR。

### 待处理的关键 PR
- **#1162 [OPEN] fix(web): show dates for older sessions**  
  作者：shixi-li | 创建：2026-07-22  
  [链接](https://github.com/moltis-org/moltis/pull/1162)  
  **摘要**：该 PR 改进了会话时间显示逻辑：
  - 保持当天更新的会话使用本地化 `HH:MM` 格式。
  - 对近期前几天的会话显示本地化的“昨天”或星期标签。
  - 对更早的会话显示具体日历日期（必要时包含年份）。
  - 为四种时间区间添加浏览器覆盖，并保留完整的本地化时间信息。  
  **意义**：提升用户对历史会话的可读性，减少歧义，是对 Web 界面用户体验的细致优化。

## 社区热点
今日无高度活跃的 Issue 或 PR 讨论。#1162 评论数显示 `undefined`（可能为 0），社区参与度较低。该 PR 虽为单项贡献，但逻辑清晰，反映了开发者对界面细节的一致改进诉求——即用户希望在不同时间跨度下获得直观、不混淆的时间标签。

## Bug 与稳定性
今日未报告新的 Bug、崩溃或回归问题。无相关修复 PR。

## 功能请求与路线图信号
无新功能请求提交。#1162 本身属于界面优化，不属于新功能范畴，但可视为对现有会话管理功能的完善。目前无迹象表明该功能会被优先纳入下一版本，但其补丁质量较高，有较大概率被合并。

## 用户反馈摘要
今日没有任何 Issue 评论或用户反馈可以提取。活跃度为零，无法获取真实用户痛点的直接表达。

## 待处理积压
- **PR #1162 (fix(web): show dates for older sessions)**  
  状态：开放，无审查者回复，无合并冲突提示。建议维护者尽快安排 Code Review，避免长期积压。该改动影响前端多个时间展示场景，需注意与现有本地化逻辑的兼容性。

---

**项目健康度分析**：当前 Moltis 项目进入低活跃区间，社区参与冷却，但仍有定向的代码贡献在推进。需要关注是否是因为近期功能完备度较高而缺乏新议题，或是存在维护者响应瓶颈。建议通过主动发布 Changelog 或召集贡献者讨论来维持社区热度。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报｜2026-07-23

---

## 1. 今日速览

过去24小时项目保持高活跃度：共处理 **29 条 Issue**（新开/活跃 20，关闭 9）与 **50 个 PR**（待合并 37，已合并/关闭 13），并发布了 **v2.0.0.post4** 补丁版本。社区反馈密集，但部分用户报告了 v2.0 系列的性能回归（固定开销、进程冻结）以及治理策略对官方插件的意外拦截。维护团队快速响应，已提交多个修复 PR（治理审计、权限UI、Windows sandbox、Token 持久化重试等），整体项目健康度良好，但稳定性与兼容性仍是当前关注焦点。

---

## 2. 版本发布

**v2.0.0.post4**（2026-07-22 发布）

**更新内容：**
- 优化 Agent 推理逻辑，减少冗余思考循环（redundant thinking loops）和重复工具调用（duplicate tool invocations）。

**破坏性变更：** 无  
**迁移注意事项：** 建议所有 v2.0.x 用户升级，以改善推理效率；若仍需 v1.x 稳定行为，可暂缓。暂未发现向后兼容问题。

完整变更记录：[v2.0.0.post3 → v2.0.0.post4](https://github.com/agentscope-ai/QwenPaw/compare/v2.0.0.post3...v2.0.0.post4)

---

## 3. 项目进展（今日合并/关闭的重要 PR）

过去 24 小时共有 **13 个 PR 被合并或关闭**，以下是具有代表性的改进：

| PR | 标题 | 描述 |
| --- | --- | --- |
| [#6369](https://github.com/agentscope-ai/QwenPaw/pull/6369) | fix(governance): honor disabled audit logging | 修复审计级别设为 `none` 时仍写入 SQLite 的问题，治理策略现在真正生效。 |
| [#6357](https://github.com/agentscope-ai/QwenPaw/pull/6357) | fix(console): prioritize one-time approval | 将“仅本次”按钮设为权限审批对话框的主要操作，降低用户误点“总是允许”的风险。 |
| [#6367](https://github.com/agentscope-ai/QwenPaw/pull/6367) | test(console): stabilize Gate coverage test | 将 Gate 选择交互的超时从 15 秒延长至 30 秒，解决 V8 覆盖率下的偶发失败。 |
| [#6375](https://github.com/agentscope-ai/QwenPaw/pull/6375) | fix(token-usage): retry token usage persistence | Token 用量持久化增加重试机制，防止临时写入失败导致用量丢失。 |
| [#6298](https://github.com/agentscope-ai/QwenPaw/pull/6298) | pref(sandbox): speed up windows sandbox cleanup | 优化 Windows 沙箱清理性能。 |
| [#6277](https://github.com/agentscope-ai/QwenPaw/pull/6277) | fix(observability): use valid Langfuse trace IDs | 修复 Langfuse 链路追踪 ID 格式问题，提升可观测性。 |

**项目整体推进：** 本周主要聚焦于权限安全、治理策略、性能回退与测试基础设施加固。v2.0 系列在快速迭代中逐步收敛已知问题，社区贡献（尤其是 `patrick-andstar` 提交的首个贡献者 PR）显著增多。

---

## 4. 社区热点（高讨论度 Issues / PRs）

| Issue / PR | 评论数 | 核心诉求 |
| --- | --- | --- |
| [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | 18 | **子 Agent 触发上下文压缩导致进程完全冻结**，只能手动重启。已关闭（推测修复已合入），但用户期待针对此类场景的自动化恢复机制。 |
| [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | 8 | **RemoteProtocolError：peer 主动关闭连接**，用户通过抓包确认是 QwenPaw 端发出 FIN。根因尚不明确，需后端团队排查 HTTP 连接池或超时逻辑。 |
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | 6 | **v2.0 引入约 2 秒固定开销**，每个简单回复（如“今天天气如何”）都比 v1.x 慢，与模型延迟无关。用户明确要求回归。 |
| [#6322](https://github.com/agentscope-ai/QwenPaw/issues/6322) | 8 | **移动网络下平台域名跳转广告页面**，联通正常。疑似运营商劫持，但用户期望应用层增加 HTTPS 或域前置防护。 |
| [#6379](https://github.com/agentscope-ai/QwenPaw/issues/6379) | 2 | **官方插件（GPT Image 2 Tool）被安全护栏拦截**，用户抱怨无法在 Web 界面关闭策略。社区呼吁增加更细粒度的工具级豁免设置。 |

**分析：** 社区强烈关注 **v2.0 性能回归**和 **治理策略过于严格**的问题。前者直接影响日常使用体验，后者阻碍了插件生态的发挥。维护者已提交多个相关修复（#6357、#6369），但仍有 #6314 等核心网络问题待解。

---

## 5. Bug 与稳定性（按严重程度排列）

| 严重程度 | 问题 | 状态 | 对应 PR |
| --- | --- | --- | --- |
| 🔴 严重 | 子 Agent 上下文压缩导致进程无响应（#5218） | 已关闭 | 未知 |
| 🔴 严重 | v2.0 每次回复增加 2 秒固定开销（#6307） | 开放 | 暂无 |
| 🔴 严重 | 进程频繁因新增 loop 功能崩溃（#6376） | 开放，需更多信息 | 暂无 |
| 🟡 中 | tool_call 参数被 markdown 代码块污染导致 JSONDecodeError（#6363） | 开放 | 暂无 |
| 🟡 中 | 上下文注入以 system 角色插入中间位置导致 API 报错（#6358） | 开放 | 暂无 |
| 🟡 中 | Windows PATH 拼接丢失分号，npm 全局工具不可用（#6239） | 开放 | 暂无 |
| 🟡 中 | MiniMax-M3 视觉能力完全无法识别图片（#6362） | 开放 | 已有关联 #5135（关闭） |
| 🟢 低 | 治理审计 `none` 级别仍写入数据库（#6368） | 已关闭 | #6369 合并 |
| 🟢 低 | Console 测试超时（#6366） | 已关闭 | #6367 合并 |
| 🟢 低 | Token 用量持久化无重试（#6374） | 开放 | #6375 合并 |
| 🟢 低 | idle 队列清理误删重建状态（#6372） | 开放 | #6373 开放 |
| 🟢 低 | Docker 更新流程对机械硬盘用户耗时 1.5 小时（#6380） | 开放 | 暂无 |

**总结：** 目前开放了大量与 **v2.0 架构变更**相关的回归 bug，其中 #6307、#6376 对用户体验影响最大。已有 #6363、#6358 等技术细节问题但尚无修复 PR。

---

## 6. 功能请求与路线图信号

| 功能需求 | 对应 Issue | 关联 PR / 开发状态 | 是否可能纳入下一版本 |
| --- | --- | --- | --- |
| **对话中拖拽上传图片/文档** | [#6297](https://github.com/agentscope-ai/QwenPaw/issues/6297) | 无 | 高，基础 UX 改进 |
| **Cron 任务可指定模型** | [#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) | [#6353](https://github.com/agentscope-ai/QwenPaw/pull/6353) 已实现 | ✅ 已合入 |
| **Web 端热更新（不重建容器）** | [#6344](https://github.com/agentscope-ai/QwenPaw/issues/6344) | 无 | 中，需要 Docker 层改动 |
| **Agent 对外暴露 HTTP API** | [#6377](https://github.com/agentscope-ai/QwenPaw/issues/6377) | [#6337](https://github.com/agentscope-ai/QwenPaw/pull/6337) 已实现 AG-UI 协议 | ✅ 已合入（/protocol/agui/chat） |
| **多用户/企业团队支持** | [#6335](https://github.com/agentscope-ai/QwenPaw/issues/6335) | 无 | 中，需账号体系设计 |
| **QwenPaw Creator（视频工作流应用）** | — | [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) 开放 | 中，新应用插件 |
| **安全模型自动发现** | — | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) 开放 | 高（基础设施） |

**路线图信号：** 社区开始向 **企业级能力**（多用户、API 化、热更新）和 **内容生产**（Creator 应用）延伸，维护者已有对应 PR 投入。

---

## 7. 用户反馈摘要（从 Issues 评论提炼）

- **痛点：**  
  - **更新流程痛苦**：机械硬盘用户升级需 1.5 小时（#6380），频繁迭代造成等待。  
  - **官方插件不可用**：安全护栏拦截官方 GPT Image 2 Tool，且无关闭开关（#6379）。  
  - **权限 UI 误导**：“总是允许”按钮过于突出，易误操作授予永久权限（#6354）。  
  - **频道状态 Bug**：删除频道后新建 Agent 仍默认使用已删除频道（#6341）。  
  - **Windows 开发者体验差**：Console 测试脚本不兼容 Windows（#6361）、PATH 不完整（#6239）。

- **使用场景：**  
  - **合同审核**：#6297 的提出者强调拖拽上传文档对合同审核场景至关重要。  
  - **企业部署**：#6335 的提问者希望多用户共用一个 QwenPaw 实例接入内部系统。  
  - **Agent 自动化**：#6377 期望 Agent 能提供 HTTP API 供其他服务调用，实现特定工作流。

- **满意点：**  
  - v2.0.0.post4 对推理循环的优化得到正面反馈（虽未直接体现，但从 Issue 评论中可推断部分用户认可改进方向）。  
  - 社区对治理策略修复（#6369）和权限 UI 改进（#6357）表示期待。

---

## 8. 待处理积压（长期未响应的重点 Issue / PR）

| 编号 | 标题 | 创建时间 | 上次更新 | 备注 |
| --- | --- | --- | --- | --- |
| [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | Windows PATH 丢失分号导致 npm 不可用 | 2026-07-18 | 2026-07-23 | 未分配，影响 Windows 用户工具链 |
| [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) | Windows 桌面自动化（UIA + Tauri） | 2026-06-14 | 2026-07-23 | 大型 PR 持续开放，需代码审查 |
| [#5861](https://github.com/agentscope-ai/QwenPaw/pull/5861) | macOS 桌面版后端 PATH 修复 | 2026-07-08 | 2026-07-23 | 首个贡献者 PR，等待维护者反馈 |
| [#5135](https://github.com/agentscope-ai/QwenPaw/issues/5135) | MiniMax-M3 视觉能力异常（已关闭） | 2026-06-11 | 2026-07-23 | 虽关闭但同类问题 #6362 重现，核心修复未彻底解决 |
| [#6376](https://github.com/agentscope-ai/QwenPaw/issues/6376) | v2.0 loop 功能导致主进程崩溃 | 2026-07-22 | 2026-07-23 | 标记需更多信息，但用户情绪强烈（“发布前不能测试一些么”），建议优先响应 |

**建议维护者：**  
- 对 #6307（v2.0 固定开销）展开性能回归分析，考虑是否因事件循环阻塞或序列化增加导致。  
- 为 #6239 和 #6380 分配责任人，改善 Windows 与 HDD 用户的基础体验。  
- 加速 #5187 和 #5861 的审查，这两个 PR 拓展了 CoPaw 在桌面环境的能力边界。

---

*本日报基于 CoPaw（原 QwenPaw，仓库：github.com/agentscope-ai/QwenPaw）的公开 GitHub 数据生成，数据截止时间 2026-07-23 UTC。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 2026-07-23

## 今日速览

ZeroClaw 在过去 24 小时内保持高度活跃：共处理 50 条 Issue 更新（新开/活跃 35 条，关闭 15 条）以及 50 条 PR 更新（49 条待合并，1 条已合并/关闭）。社区讨论集中在跨平台兼容性、Provider 架构重构以及新兴的 eval 评测体系上，项目在稳定性与功能扩展之间稳步推进。尽管未发布新版本，但 PR 堆积量较大（49 个待合并），显示社区贡献热情与核心维护者审查压力并存。

## 版本发布

无新版本发布。

## 项目进展

今日仅有 1 个 PR 被合并/关闭：

- **[Closed] PR #9271** — docs(book): fix audit policy link in agent guidelines（作者 Audacity88）  
  修复了文档中审计策略链接指向错误的问题，防止 mdBook 产物在 Pages 部署时失败。属于小规模文档修复，对项目主线影响有限。

另有 15 个 Issue 被关闭，主要涉及以下功能修复或决策落地：
- **#6378** [Feature]: Discord Bot respond only in specific Discord channels（已关闭，建议已实现）
- **#5674** [Feature]: Make `classify_channel_reply_intent` configurable（已关闭，功能已合并）
- **#4721** [Bug]: zeroclaw should log to stderr instead of stdout（已关闭）
- **#5628** [Bug]: Daemon service auto-starts on boot（已关闭）
- **#5145** [Feature]: add `send_channel_message` tool（已关闭）
- **#5127** [Feature]: bubblewrap sandbox: configurable writable paths and network access（已关闭）
- **#7673** RFC: Native context compression as a provider pipeline decorator（已关闭，未合并但经评审后关闭）

以上关闭项表明项目在 Discord 频道隔离、日志输出规范、sandbox 可配置性、系统服务冲突等被长期关注的痛点上取得了实质性进展，部分 RFC 虽未直接合并但已完成讨论。

此外，**#8949**（webhook GET + challenge-echo）与 **#6619**（修复全自治 agent 的 tool authorization）等大型 PR 仍在审查中，尚未合并。

## 社区热点

以下 Issue/PR 在今日获得最多评论，反映了社区关注的焦点：

1. **#5600** (12 评论) — [Bug]: preserve Kimi Code reasoning_content across streamed tool-call history  
   **链接**: https://github.com/zeroclaw-labs/zeroclaw/issues/5600  
   **分析**: 核心问题在于 Kimi 提供商的流式响应中缺少 `reasoning_content` 字段，导致工作流阻塞。社区高度关注，已持续 3 个月仍未解决，属于影响面大的 S1 级 bug。用户希望保留推理内容以避免 400 错误。

2. **#5937** (12 评论) — [Feature]: refactor: Unify providers architecture and reqwest client management  
   **链接**: https://github.com/zeroclaw-labs/zeroclaw/issues/5937  
   **分析**: Provider 模块代码重复、参数不一致是长期痛点。该 Feature 提案获得大量讨论，可能成为未来 Provider 重构的纲领性 issue，与 #5287、#5601 等直接相关。

3. **#7462** (12 评论) — [Bug]: 74 test failures on Windows — Unix-only test commands, path semantics, console encoding  
   **链接**: https://github.com/zeroclaw-labs/zeroclaw/issues/7462  
   **分析**: Windows 平台 74 个测试失败，严重阻碍跨平台使用。社区强烈要求 CI 增加 Windows 测试。该 bug 自 6 月 10 日上报以来一直未分配 fix，今日仍活跃讨论。

4. **#5146** (10 评论) — [Feature]: compile deterministic skill steps into capability-scoped WASM  
   **链接**: https://github.com/zeroclaw-labs/zeroclaw/issues/5146  
   **分析**: 将技能推理编译为 WASM 的架构级提案，旨在减少每次对话的 prompt 膨胀。属于长期路线图，讨论热度高，但实现难度大。

5. **#5982** (10 评论) — [Feature]: Per-sender RBAC for multi-tenant agent deployments  
   **链接**: https://github.com/zeroclaw-labs/zeroclaw/issues/5982  
   **分析**: 多租户场景下的访问控制需求强烈，用户希望一个实例服务不同角色。

## Bug 与稳定性

按严重程度排列：

| 严重级别 | Issue ID | 描述 | 状态 | 是否有修复 PR |
|----------|----------|------|------|----------------|
| S1 - workflow blocked | #5600 | Kimi 推理内容缺失导致 400 错误 | OPEN | 无 |
| S1 - workflow blocked | #5808 | 内置工具 schema 导致 context 超预算 3.3 倍 | OPEN | 无 |
| S2 - degraded behavior | #7462 | Windows 74 测试失败 | OPEN | 无 (建议增加 CI) |
| S2 - degraded behavior | #5628 | 服务端口冲突 (已关闭) | CLOSED | 已有修复 |
| S2 - degraded behavior | #5269 | nix 安装路径未文档化 | OPEN | 无 |
| S3 - minor | #5514 | Telegram 媒体组未合并为多模态请求 | OPEN | 无 |
| S3 - minor | #6157 | Nextcloud Talk 使用错误 bot API | OPEN | 有 PR #9181 待合并 |
| 安全类 | #5869 | rumqttc 依赖导致 4 个 RUSTSEC 漏洞 | OPEN (blocked) | 无 (依赖方未更新) |

值得关注：**#5869** 安全漏洞积压已超过 3 个月，依赖 `rumqttc` 锁定旧版 rustls 栈，需推动依赖升级或替换。

## 功能请求与路线图信号

以下功能请求讨论活跃，且可能被纳入近期路线图：

1. **Provider 重构 (#5937, #5287, #5601)** — 统一 Provider 架构、降低 prompt 基数、支持订阅制认证。结合 PR #6619 中对 full-autonomy agent 的修复，表明项目正系统性地优化 Provider 层。

2. **评测 (eval) 体系 (#7065 系列 PR)** — 今日有 8 个与 eval 相关的 PR 涌入（#9248, #9245, #9244, #9225, #9224, #9223, #9222, #9221, #9220, #9219, #9217, #9214），构成一个完整的评测框架：从 sandbox 执行、评委评分、基线比对、JUnit 输出到重复运行统计。这是项目质量保证的重要基础设施，预计会成为下一版本的核心功能之一。

3. **多租户 RBAC (#5982)** 和 **跨渠道 TOTP (#3767)** — 安全与多用户管理需求上升，表明 Zeroclaw 正从单用户工具向企业部署演进。

4. **Skills 安全粒化 (#5775, #4853)** — 逐技能权限隔离、标准化的技能仓库索引，提升生态可扩展性。

## 用户反馈摘要

从 Issues 评论中提取真实用户声音：

- **“当前 `max_context_tokens=32000` 但首轮对话就已超预算 3.3 倍——完全是工具 schema 和系统提示造成的”**（#5808）——用户抱怨默认配置下 LLM 调用成本过高，希望延迟加载工具定义。
- **“在群聊中需要决定是否回复是合理的，但在私聊中助手经常忽略我。”**（#5674，已关闭）——用户对 `classify_channel_reply_intent` 的默认行为不满，要求可配置。该需求已被接受。
- **“ZeroClaw 居然向 stdout 输出日志，让我无法正常使用 `zeroclaw config schema` 管道。”**（#4721，已关闭）——日志重定向导致命令行工具无法解析输出，已修复。
- **“在法国，使用内置浏览器工具时弹出大量 cookie 横幅，影响爬虫效果……”**（#5316 评论中提及）——用户希望增加自动 cookie 横幅处理功能。
- **“部署为系统服务后，手动启动 daemon 会因为端口冲突反复报错。”**（#5628，已关闭）——用户期望更智能的端口管理逻辑，已通过 PR 修复。
- **“我希望在 Telegram 中一次发送多张图片时，AI 能作为一次多模态对话理解，而不是逐张处理。”**（#5514）——用户体验细节反馈，仍在改进中。
- **“Nextcloud Talk 的机器人消息无法成功发送，因为使用了错误的 API 端点。”**（#6157）——目前有 PR #9181 正在审查，尚未合并。

总体而言，用户对 ZeroClaw 的功能广度认可，但在跨平台兼容性、成本控制、安全策略配置等方面表达了明确痛点。

## 待处理积压

以下为长期未响应或状态为 `blocked` 的重要 Issue/PR，提醒维护者关注：

| ID | 标题 | 创建日期 | 最后更新 | 状态 |
|----|------|----------|----------|------|
| #5869 | security: rumqttc v0.25.1 pins rustls-webpki 0.102.x — RUSTSEC advisory cluster | 2026-04-18 | 2026-07-23 | OPEN (blocked) |
| #4853 | install skills from .well-known agent-skills discovery indexes | 2026-03-27 | 2026-07-23 | OPEN (blocked) |
| #3767 | [Feature]: require TOTP for cross-channel approval of critical tools | 2026-03-17 | 2026-07-23 | OPEN (no-stale, 但无实质进展) |
| #5601 | subscription-native provider authentication for Ollama Cloud, Z.AI, Kimi Code, MiniMax | 2026-04-10 | 2026-07-23 | OPEN (no-stale, 跟踪器) |
| #7462 | 74 test failures on Windows | 2026-06-10 | 2026-07-23 | OPEN (无fix PR) |

其中 **#5869** 影响安全合规，**#7462** 影响 Windows 用户采用率，建议优先处理。

</details>

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*