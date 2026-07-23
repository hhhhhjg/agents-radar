# AI CLI 工具社区动态日报 2026-07-23

> 生成时间: 2026-07-23 04:46 UTC | 覆盖工具: 9 个

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

## 横向对比

好的，作为专注于 AI 开发工具生态的资深技术分析师，我将基于您提供的各工具社区动态，为您呈现一份深入的横向对比分析报告。

---

### AI CLI 工具生态横向对比分析报告 (2026-07-23)

**摘要**: 当前 AI CLI 工具生态正处于“**功能趋同，体验分化**”的快速演进阶段。各工具在核心 Agent 能力（多轮对话、代码编辑、Shell 执行）上已无明显代差，竞争焦点转向**稳定性、成本控制、协作体验与生态扩展性**。社区反馈表明，开发者对“**可预测、可控制、可审计**”的 Agent 行为需求空前强烈，而任何计费、认证或核心功能的回归 Bug 都会迅速引发社区负面情绪。

---

### 1. 生态全景

当前 AI CLI 工具生态呈现三大态势：**第一**，**竞争白热化**，以 Claude Code、OpenAI Codex 和 GitHub Copilot CLI 为代表的头部工具通过高频率发版（日更）和快速响应用户反馈来巩固地位。**第二**，**工程化成熟度成为分水岭**，头部工具社区已从“能否实现功能”转向“功能是否稳定、可控、可观测”，体现在对日志审计、计费透明、MCP 扩展稳定性等细节的密集讨论上。**第三**，**社区生态繁荣但噪音增大**，一方面是 Kimi Code、DeepSeek TUI 等新锐力量通过快速修复和特性增强拓展市场；另一方面，老牌工具（如 Copilot CLI、Pi）面临着因快速迭代导致的稳定性回归问题，社区 Bug 报告和功能请求数量激增。

---

### 2. 各工具活跃度对比

| 工具名称 | 日发版数 | 热点 Issues (精选10条) 平均热度 | 重要 PR 数 (精选10条) | 总活跃度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 1 个正式版 | 高 (最高评论 57, 点赞 25) | 10 | **极高**，社区成熟，问题聚焦于集成与计费 |
| **OpenAI Codex** | 4 个 Alpha 版 | 高 (最高评论 44, 点赞 119) | 10 | **极高**，核心功能需求（如 TUI 定制）获大量社区支持 |
| **GitHub Copilot CLI** | 3 个补丁版 | 中 (最高评论 6, 点赞 33) | 2 | **高**，版本迭代快，但 PR 活跃度相对较低，聚焦于修复 |
| **Gemini CLI** | 3 个 (正式+预览+夜间) | 中 (最高评论 12, 点赞 8) | 10 | **高**，多版本策略表明在快速迭代，安全与 Agent 问题是焦点 |
| **Kimi Code CLI** | 0 | 低 (最高评论 0, 点赞 0) | 3 | **中/低**，社区规模较小，处于快速修复与功能探索期 |
| **OpenCode** | 0 | 高 (最高评论 35, 点赞 185) | 10 | **高**，社区活跃，功能需求 (如自定义系统提示) 获广泛共鸣 |
| **Pi (pi-mono)** | 0 | 中 (最高评论 9, 点赞 9) | 10 | **高**，社区参与度高 (贡献者积极提交 PR)，聚焦于架构与集成 |
| **Qwen Code** | 1 个 Pre-release | 中 (最高评论 5, 点赞 0) | 10 | **高**，CI/CD 自动化极高 (Autofix)，社区问题集中在兼容性上 |
| **DeepSeek TUI (CodeWhale)** | 0 (v0.9.1 在即) | 中 (最高评论 17, 点赞 0) | 10 | **高**，发布前冲刺阶段，社区 Bug 报告集中，属于“爆发前夜” |

*注：活跃度评估综合考虑了发布频率、社区讨论深度（评论/点赞数）、PR 数量与质量。*

---

### 3. 共同关注的功能方向

多个工具的社区反馈集中在以下几个方向：

1.  **模型选择与成本控制透明化**:
    - **Claude Code (#79337)**, **OpenAI Codex (#33685)**, **GitHub Copilot CLI (#4224)**: 用户普遍对默认模型切换（降级）、信用/积分消耗速度、以及子代理调用是否计入计费感到困惑。要求更明确的计费模型和用户控制权。
2.  **TUI/终端用户体验与协作优化**:
    - **Claude Code (#80002, #65330)**, **GitHub Copilot CLI (#4222, #4223)**, **Pi (#6911)**: 桌面端/CLI 的稳定性（渲染卡死、协作模式失效、tmux兼容性）是普遍痛点。用户对 TUI 的可定制化（如状态栏）需求强烈。
3.  **跨平台与多 IDE 兼容性**:
    - **Claude Code (#77966 OAuth)**, **OpenAI Codex (#26764 Windows登录)**, **GitHub Copilot CLI (#3534 WSL2)**, **Qwen Code (#6577 Windows)**: 认证（OAuth 循环）、文件路径（WSL/Linux差异）、剪贴板（WSL2）等平台特定问题，是阻碍开发者顺畅入门的“拦路虎”。
4.  **MCP/插件/扩展生态的稳定性**:
    - **Claude Code (#80365 MCP权限)**, **Gemini CLI (#28410 MCP超时)**: 用户开始期望通过 MCP 或自定义扩展来增强 CLI 能力，但对扩展的发现、安装、权限管理和运行稳定性（如超时）提出了更高要求。
5.  **安全与权限的精细化控制**:
    - **Gemini CLI (#28403 注入修复)**, **Qwen Code (#7531 Git保护)**, **DeepSeek TUI (#4684 边界检查)**: 社区对 Agent 执行危险操作（Shell注入、破坏性Git命令）高度警觉，期望更细粒度的权限模型和“安全网”机制。

---

### 4. 差异化定位分析

| 工具名称 | 核心差异化优势 | 目标用户 | 技术路线与社区文化 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **稳健与生态成熟**。以 `/code-review` 为代表的高级功能与旗舰模型 (Fable 5) 的深度绑定。 | 追求稳定、可靠的企业级开发者 | 相对保守，注重后台子代理等底层优化。社区更关注与 Anthropic 生态的集成和付费体验。 |
| **OpenAI Codex** | **工程化与可观测性**。通过 `rust-v0.146.0` 等系列 Alpha 版和大量服务端 PR (批量API、缓存)，展现了对性能和可伸缩性的极致追求。 | 注重性能、系统集成和自定义的高阶开发者 | 极客风格，社区对 TUI 定制化有极高呼声（119 👍），希望完全掌控工具行为。 |
| **GitHub Copilot CLI** | **IDE 无缝集成**。背靠 VS Code 生态，核心功能是补齐终端场景。但天平的摇摆（功能在 IDE 与 CLI 间）导致其身份略显尴尬。 | 重度 VS Code 用户，希望“随时随地 Copilot”的开发者 | 跟随式创新，主要修补特定场景 (tmux, WSL) 的兼容性问题。社区规模大但功能请求偏细碎。 |
| **Gemini CLI** | **安全与 AGENT 探索**。对 Shell 变量注入、Agent 权限和自动化修复 (Autofix) 的极高关注。同时探索 AST 感知等前沿方向。 | 对代码安全、Agent 行为可靠性和自动化工具有极高要求的开发者 | 开源与协作导向，提交 PR 的贡献者众多。对 Agent 的“诚实性”（如误报成功）有深度讨论。 |
| **Kimi Code CLI** | **简洁与兼容性**。社区规模虽小，但 Bug 类型清晰（第三方 API 兼容、子代理模型选择），聚焦于解决用户的直接痛点。 | 寻求高性价比模型方案（如使用第三方 API）或搭建特定 Agent 工作流的用户。 | 务实，响应快（当日提 Bug 当日修）。社区文化尚在形成中。 |
| **OpenCode** | **开源与本地优先**。高度关注本地模型（自动发现模型 #6231）、自定义系统提示和项目元数据。生态依赖社区贡献。 | 隐私敏感、需要定制化工作流、偏好离线或自托管模型的开源忠实用户。 | 开放、社区驱动。功能需求（如 ACP 后端集成）反映其作为平台而非单纯工具的野心。 |
| **Pi (pi-mono)** | **架构灵活与 Provider 扩展**。通过引入 `AgentHarness` 等抽象层，为构建复杂、上下文感知的 Agent 工具奠定基础。活跃的 Provider 扩展（StepFun, Bedrock）。 | 需要连接多种 LLM 后端的专业用户，或希望构建自有 Agent 工具链的开发者。 | 社区贡献活跃，PR 质量高，聚焦于解决提供者、重试、管道等底层基础设施问题。 |
| **Qwen Code** | **高度自动化的 CI/CD 与文化**。社区大量 PR 围绕“Autofix”、“自动重试”、“CI 稳定性”等，形成一个自我修复的开放生态。 | 关注工具链自身效率和可靠性的开发者。中国开发者友好。 | 极具特色的自驱动社区，许多贡献来自 bot 和自动化流程。问题集中在更新机制、平台兼容性等细节上。 |
| **DeepSeek TUI (CodeWhale)** | **技能系统（Workflow）**。通过内置的 `/skills` 管理器（如 plan、implement、debug），提供开箱即用的端到端开发工作流，定位类似“低代码 Agent”。 | 希望快速启动、按流程工作，不太关心底层模型细节的开发者。 | 发布前冲刺，社区在帮助打磨这个“大一统”的 TUI 体验。问题集中在安装、权限和输入等环节。 |

---

### 5. 社区热度与成熟度

- **成熟度最高 (社区稳定，关注点“挑剔”)**:
    - **Claude Code** 和 **OpenAI Codex** 社区最为成熟。用户已不再满足于基础功能，而是对计费逻辑、模型降级、后台性能等“高端”问题提出质疑。这标志着这些工具已成为其用户工作流中不可或缺、但又敏感的组成部分。

- **快速迭代期 (功能扩展与稳定性并重)**:
    - **GitHub Copilot CLI**, **Gemini CLI**, **Pi**, **Qwen Code**, **OpenCode** 均处于此阶段。它们社区活跃，功能更新频繁（日更或周更），但也因此容易出现回归 Bug 和兼容性问题。社区反馈积极，既能提出尖锐的 Bug，也能贡献高质量的 PR。

- **潜力/爆发期 (社区规模小但增长快)**:
    - **Kimi Code CLI** 和 **DeepSeek TUI (CodeWhale)**。前者立足于解决特定痛点（低成本的第三方 API 使用），后者通过创新的技能系统吸引用户。它们的社区活跃度虽不如头部，但问题集中、反馈直接，是生态中的“鲶鱼”。

---

### 6. 值得关注的趋势信号

1.  **“TUI 回潮”与“胖子终端”的兴起**: TUI（终端界面）不再是简单的输入输出框，而是正在演变为集状态显示、模型切换、协作面板、性能监控于一体的“重型”开发界面。`OpenAI Codex` 可定制状态栏的高票需求，以及各工具优化 TUI 渲染的典型 Bug，都印证了这一点。**对开发者：** 掌握并定制你的 TUI，将极大提升 AI 辅助开发的日常效率。

2.  **从“对话模式”到“工作流/技能模式”**: DeepSeek TUI 的 `skills` 系统、以及各工具对子代理、链式Agent 的关注，预示着 AI CLI 正从“一问一答”的聊天工具，演变为可以编排多步骤、多模型、多工具协同的“开发工作流引擎”。**对开发者：** 未来，定义和复用 “Skill” 或 “Agent Workflow” 的能力，将成为区分 AI 开发效率的关键。

3.  **成本透明化是信任的基石**: 无论是 Claude 的 Max 计划积分问题，还是 Codex 的周限额消耗异常，亦或是 Copilot 的子代理记账缺失，都指向一个核心：**AI 开发工具必须像云计算资源一样，提供清晰、可审计的成本视图**。任何模糊的计费逻辑都会迅速侵蚀用户的信任。**对决策者：** 在选型时，将计费透明度和成本控制能力作为核心 KPI。

4.  **“安全与可控”压倒“能力与速度”**: 社区对 Shell 注入、Git 破坏、权限绕过等安全问题的关注度，已经超过了对模型版本更新的关注。Agent 的“无害化”和“可预测性”正成为最核心的竞争力。**对开发者：** 优先使用提供明确“安全沙箱”和“权限白名单”的工具，并习惯于审计 Agent 的执行计划。

5.  **MCP/插件协议是“Next Big Thing”**: 虽然各工具的 MCP 实现都还处在初期（有 Bug、不稳定），但社区对其的热情表明，**一个开放的、标准化的工具扩展协议**，将是决定一个 AI CLI 能否成为“下一个操作系统”的关键。**对生态参与者：** 关注 Rust/OCaml 社区在 MCP 上的进展，这可能是构建下一代开发工具生态的基础设施。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

好的，作为专注于 Claude Code 生态的技术分析师，以下是基于您提供的数据生成的社区热点报告。

---

### Claude Code Skills 社区热点报告 (数据截止 2026-07-23)

#### 1. 热门 Skills 排行

以下是根据 PR 评论活跃度及关联 Issue 关注度评选出的当前社区最受关注的 Skills：

1.  **document-typography (#514)**
    -   **功能**: 为 AI 生成的文档提供印刷质量控制，解决孤词、寡行、段落中断等排版问题。
    -   **社区热点**: 社区普遍认可 AI 生成文档的排版是痛点，该技能精准定位了用户“不求排版，但求好看”的隐性需求。讨论集中在如何平衡自动化与用户控制权。
    -   **状态**: Open
    -   **链接**: [https://github.com/anthropics/skills/pull/514](https://github.com/anthropics/skills/pull/514)

2.  **ODT skill (#486)**
    -   **功能**: 支持创建、填充、读取和转换 OpenDocument 格式（.odt, .ods），与 LibreOffice 生态深度整合。
    -   **社区热点**: 代表了对办公自动化生态多样性的需求。讨论点在于其技术实现复杂度及与 DOCX 技能的互补性。
    -   **状态**: Open
    -   **链接**: [https://github.com/anthropics/skills/pull/486](https://github.com/anthropics/skills/pull/486)

3.  **testing-patterns (#723)**
    -   **功能**: 提供一套全面的测试方法论指南，涵盖单元测试、React 组件测试、E2E 测试及 TDD 流程。
    -   **社区热点**: 社区对“如何更好地让 Claude 生成测试”有巨大需求。该技能试图建立最佳实践标准，讨论热点在于如何使其足够通用以适配不同项目架构。
    -   **状态**: Open
    -   **链接**: [https://github.com/anthropics/skills/pull/723](https://github.com/anthropics/skills/pull/723)

4.  **pyxel skill (#525)**
    -   **功能**: 为 Pyxel 复古游戏引擎提供 MCP 支持，可互动式地创建像素风格游戏。
    -   **社区热点**: 这是社区创造力驱动技能的典型代表。它展示了 Skills 在非传统开发领域（游戏开发）的巨大潜力，讨论关注其玩法循环的流畅度。
    -   **状态**: Open
    -   **链接**: [https://github.com/anthropics/skills/pull/525](https://github.com/anthropics/skills/pull/525)

5.  **color-expert (#1302)**
    -   **功能**: 一个全面的颜色专家技能，涵盖 ISCC-NBS、Munsell、RAL 等多种颜色命名系统和 OKLCH、OKLAB 等色彩空间选择指南。
    -   **社区热点**: 满足了设计师和前端开发者对精确颜色系统的需求。讨论热点在于如何整合如此庞大的知识库，并确保 Claude 能有效应用，而非仅仅罗列。
    -   **状态**: Open
    -   **链接**: [https://github.com/anthropics/skills/pull/1302](https://github.com/anthropics/skills/pull/1302)

6.  **self-audit (#1367)**
    -   **功能**: 一个元技能，在交付前对 AI 输出进行机械验证（文件存在性）和四维推理质量审计。
    -   **社区热点**: 直接回应了用户对 AI 输出可靠性和幻觉问题的担忧。该技能尝试为输出质量设立一个可验证的“关卡”，讨论热度极高，被视为提升 Agent 可信度的关键一步。
    -   **状态**: Open
    -   **链接**: [https://github.com/anthropics/skills/pull/1367](https://github.com/anthropics/skills/pull/1367)

#### 2. 社区需求趋势

从 Issues 的讨论中，可以提炼出社区最期待的新 Skill 方向：

-   **安全与信任机制**: 社区对**信任边界**和安全模型表现出极高关注。`#492` (Security: Community skills...) 的 43 条评论反映了对官方命名空间下社区技能滥用的深度担忧。这表明社区急需一个 **“安全审计”或“权限管理”相关的 Skill** 或官方安全指南。
-   **组织级协作与共享**: 企业用户希望通过 Skill 实现团队协作的诉求强烈。`#228` (Enable org-wide skill sharing) 指出当前手动分享流程的低效，社区期待官方推出**组织级 Skill 库或分享功能**。
-   **核心工具的稳定性与可靠性**: 大量关于 `skill-creator` 的 Issue (如 `#556`, `#1169`) 直指 `run_eval.py` 在 Windows 下失效，导致优化的**召回率始终为 0%**。这说明社区的核心诉求并非花哨的新功能，而是**确保基础开发生命周期工具链的健壮性和跨平台兼容性**。
-   **高级推理与输出审计**: `#1329` (compact-memory) 和 `#1385` (Reasoning Quality Gate) 的提议表明，社区正在探索如何**提升 Agent 的长期记忆效率**和**输出结果的自我纠错能力**。这预示着 Skills 正从“执行任务”向“保障质量和可靠性”的高级阶段进化。
-   **垂直领域深化**: 除了通用的代码和文档技能，社区也开始提出针对特定行业或技术的技能，如 `#412` (agent-governance) 和 `#181` (SAP RPT-1-OSS predictor)，显示了 Skills 生态向**特定业务场景**细分的趋势。

#### 3. 高潜力待合并 Skills

以下 PR 评论活跃，尚未合并，且功能价值高，预计近期落地可能性较大：

1.  **document-typography (#514)**: 直击用户痛点，功能定义清晰，代码改动纯净。作为提升输出质量的通用技能，合并优先级很高。
    -   **链接**: [https://github.com/anthropics/skills/pull/514](https://github.com/anthropics/skills/pull/514)
2.  **testing-patterns (#723)**: 填补了核心开发流程中“如何测试”的空白。如果该技能能提供一个有效的最佳实践框架，将极大提升 Claude 代码生成的质量。
    -   **链接**: [https://github.com/anthropics/skills/pull/723](https://github.com/anthropics/skills/pull/723)
3.  **pyxel skill (#525)**: 作为游戏开发领域的经典入门技能，具有很强的吸引力和社区贡献基础，有助于吸引更广泛的开发者。
    -   **链接**: [https://github.com/anthropics/skills/pull/525](https://github.com/anthropics/skills/pull/525)
4.  **ODT skill (#486)**: 办公文档处理是刚需，对 ODT 格式的支持能显著扩大 Skill 的用户覆盖面，尤其是在教育、政府等广泛使用开源办公套件的领域。
    -   **链接**: [https://github.com/anthropics/skills/pull/486](https://github.com/anthropics/skills/pull/486)

#### 4. Skills 生态洞察

**当前社区最集中的诉求是：在强烈期望提升 Agent 输出质量与可靠性的同时，迫切需要一个稳定、安全、跨平台的核心工具链，并建立官方背书下的信任体系。**

---

好的，以下是为您准备的 2026-07-23 Claude Code 社区动态日报。

---

# Claude Code 社区动态日报 | 2026-07-23

## 今日速览

- **关键更新**：v2.1.218 发布，核心改进是让 `/code-review` 命令在后台作为子代理运行，不再填满对话窗口，并支持堆叠斜杠命令。
- **社区争议**：Fable 5 模型在 Max 计划中的“积分”调用问题成为今日焦点，引发最多用户讨论，涉及计费与权限逻辑的冲突。
- **桌面/协作模块问题频发**：多个高评论量 Issue 集中在 macOS 桌面应用的协作（Cowork）模式与工具调用上，稳定性仍是用户核心关切。

## 版本发布

### [v2.1.218](https://github.com/anthropics/claude-code/releases/tag/v2.1.218)
- `/code-review` 命令现在作为后台子代理运行，不会再填满用户的对话历史。
- 堆叠的斜杠命令（Stacked slash commands）现在可以正确作为 `/code-review` 的审查目标。
- 增强了屏幕阅读器对文本删除操作（如 `Option+Delete`, `Ctrl+W`, `Cmd+Backspace`）的播报。

## 社区热点 Issues

### 1. Fable 5 模型计费与权限问题（#79337）
- **内容**：Max 计划用户反映，在 Fable 5 成为 Max 计划默认模型的第一天（2026-07-20），系统错误地提示“需要使用积分”，并将会话静默降级为 Opus 4.8。
- **热度**：35 条评论，9 个 👍。
- **重要性**：触及了最新旗舰模型与计费系统的核心集成问题，直接影响 Max 计划用户的体验和信任。社区主要质疑“资源已付费但无法使用”的体验。
- **链接**：[Issue #79337](https://github.com/anthropics/claude-code/issues/79337)

### 2. macOS: 文件系统工具调用失效（#80002）
- **内容**：macOS 版 Claude Desktop 无法将 `tools/call` 调度给首方的文件系统扩展，尽管 `tools/list` 成功。导致文件操作功能完全失效。
- **热度**：57 条评论，25 个 👍。
- **重要性**：这是今日评论数最多、关注度最高的 Issue，直接影响了桌面端用户的核心文件操作功能，属于严重 Bug。该 Issue 已被关闭，可能已有修复方案。
- **链接**：[Issue #80002](https://github.com/anthropics/claude-code/issues/80002)

### 3. Account 订阅被降级（#56897）
- **内容**：用户报告其 Max 订阅在有效期内被降级为免费计划。
- **热度**：9 条评论，3 个 👍。
- **重要性**：涉及付费用户的根本权益，虽然历史较长但仍在更新，说明该问题可能尚未彻底解决或被部分用户复现。
- **链接**：[Issue #56897](https://github.com/anthropics/claude-code/issues/56897)

### 4. 桌面应用协作模式卡死（#65330）
- **内容**：在桌面应用的协作/本地代理模式下，`AskUserQuestion` 功能无法渲染，导致会话卡死直到超时自动拒绝。此问题自 2026-06-03 起为回归 Bug。
- **热度**：8 条评论。
- **重要性**：协作模式是桌面端的重要特性，此 Bug 严重阻碍了用户在协作场景下的正常使用流程，属于功能阻断性问题。
- **链接**：[Issue #65330](https://github.com/anthropics/claude-code/issues/65330)

### 5. 登录 OAuth 循环（#77966）
- **内容**：用户在 Linux 和 IntelliJ 平台登录时，因 `state` 参数在重定向过程中丢失，陷入持续 OAuth 认证循环。
- **热度**：8 条评论，6 个 👍。
- **重要性**：这是一个跨平台的认证问题，严重阻碍了用户首次使用或再次登录的流程，影响面广。6 个赞表明此问题困扰了不少开发者。
- **链接**：[Issue #77966](https://github.com/anthropics/claude-code/issues/77966)

### 6. Ultraplan 会话“传送”失败（#48024）
- **内容**：在 CLI 中使用 `/ultraplan` 功能后，Web 端生成的计划无法“传送”回起始的 CLI 会话。
- **热度**：7 条评论，7 个 👍。
- **重要性**：该功能旨在打通 Web 与 CLI 体验，此项 Bug 破坏了其核心价值，显示一个长期存在的功能断裂点。高赞说明用户对这个功能期待已久。
- **链接**：[Issue #48024](https://github.com/anthropics/claude-code/issues/48024)

### 7. Bash 工具 `spawn E2BIG` 错误（#78253）
- **内容**：在大型 Git 仓库中，Bash 工具因沙箱 profile 文件过大（与文件数成比例）导致 `spawn E2BIG` 错误，无法执行。
- **热度**：5 个 👍。
- **重要性**：对于使用大型代码库的开发者影响巨大，直接导致 Bash 命令无法运行，限制了 Claude Code 在处理复杂项目时的能力。
- **链接**：[Issue #78253](https://github.com/anthropics/claude-code/issues/78253)

### 8. Windows 休眠后 CPU 占用 200%（#80404）
- **内容**：Windows 版 Claude Code 在系统休眠/唤醒后，libuv 事件循环出现饥饿问题，导致 CPU 占用约 200%，并伴随输入延迟。
- **热度**：4 条评论。
- **重要性**：这是一个新提交的、影响 Windows 用户系统性能的严重 Bug，可能导致笔记本降频或风扇狂转，用户体验极差。
- **链接**：[Issue #80404](https://github.com/anthropics/claude-code/issues/80404)

### 9. Cowork 工具权限列表为空（#80365）
- **内容**：部分账户的 Claude Cowork 桌面应用中，`mcp_tools` 权限列表始终为空，导致所有运行时 MCP 工具调用被拒绝。
- **热度**：1 条评论。
- **重要性**：此问题若普遍存在，将完全破坏 Cowork 功能的可扩展性，用户无法使用任何自定义或第三方 MCP 构建的工具。
- **链接**：[Issue #80365](https://github.com/anthropics/claude-code/issues/80365)

### 10. 内联提示被静默抑制（#72495）
- **内容**：当 API 的速率限制状态为 `allowed_warning` 时，内联提示建议（幽灵文本）会被静默关闭，导致用户体验不一致。
- **热度**：1 条评论。
- **重要性**：虽然评论不多，但该问题描述了用户在边缘情况（轻微超限警告）下，一个关键辅助功能的缺失，可能影响用户对自身 API 使用状态的理解。
- **链接**：[Issue #72495](https://github.com/anthropics/claude-code/issues/72495)

## 重要 PR 进展

### 1. [CLOSED] 新增 `/planwith` 命令（#18217）
- **内容**：为插件系统新增了 `/planwith` 命令，允许用户在进入计划模式时直接附带提示词，简化了“先进入、再输入”的两步工作流。
- **意义**：这是一个对用户工作流进行微优化且实用性很强的增强功能，虽然被关闭，但该想法对后续版本有参考价值。
- **链接**：[PR #18217](https://github.com/anthropics/claude-code/pull/18217)

### 2. [OPEN] 移除重复插件条目（#80263）
- **内容**：请求修复一个管理后台 Bug，该 Bug 导致插件提交状态显示为“已发布”但实际并未在目录中生效，并请求清理重复的条目。
- **意义**：关系第三方插件开发者生态的可见性和公平性。
- **链接**：[Issue #80263](https://github.com/anthropics/claude-code/issues/80263)

### 3. [OPEN] 新增账户配置管理插件（#80326）
- **内容**：提出一个实验性的 `account-profiles` 插件，用于管理个人、工作等不同账号的隔离 CLI 环境，方便用户在同一个设备上切换身份。
- **意义**：对于需要频繁切换账号的开发者（如 Freelancer）非常实用，体现了社区对多账户管理需求的自发探索。
- **链接**：[PR #80326](https://github.com/anthropics/claude-code/pull/80326)

### 4. [OPEN] 修复文档链接（#80294 / #80229）
- **内容**：通过 Archive.org 修复了项目 `README.md` 中一个已失效的 NPM 包链接。
- **意义**：维护了项目文档的准确性和开发者入驻流程的流畅性。
- **链接**：[PR #80294](https://github.com/anthropics/claude-code/pull/80294)

### 5. [OPEN] 修复终端滚动 Bug（#80241）
- **内容**：修复了当 AI 输出新内容时，终端控制台自动滚动到历史记录顶部的问题。
- **意义**：这是一个直接影响阅读和交互体验的 Bug，修复后将极大改善用户在使用 TUI 时的跟踪体验。
- **链接**：[PR #80241](https://github.com/anthropics/claude-code/pull/80241)

### 6. [OPEN] 修复自动压缩不触发问题（#80196）
- **内容**：修复自动上下文压缩功能在状态栏显示“100% 上下文已使用”时仍不触发的 Bug。
- **意义**：关系到长会话的稳定性和成本控制，对需要长时间对话的开发任务至关重要。
- **链接**：[PR #80196](https://github.com/anthropics/claude-code/pull/80196)

### 7. [OPEN] 修复立即达到使用限制问题（#80195）
- **内容**：修复了购买了 Max 订阅的用户在会话开始时即刻遭遇使用限制的错误。
- **意义**：这是一个与 #79337 密切相关的严重计费错误，直接影响高端用户的付费体验。此修复尝试解决一个已公开的热点问题。
- **链接**：[PR #80195](https://github.com/anthropics/claude-code/pull/80195)

### 8. [OPEN] 日志未持久化问题（#80434）
- **内容**：报告了在全屏 TUI 模式下，AI 在工具调用之间生成的文本消息未被写入会话 JSONL 日志文件的问题。
- **意义**：对于依赖会话日志进行审计、调试或回顾的用户来说，这是一个关键的信息丢失问题。
- **链接**：[Issue #80434](https://github.com/anthropics/claude-code/issues/80434)

### 9. [OPEN] 工作区权限回归 Bug（#80432）
- **内容**：报告了 `EnterWorktree` 工具即使被明确加入允许列表，仍会间歇性地触发手动权限提示的回归 Bug。
- **意义**：对于配置了严格自动化权限的用户来说，这破坏了其工作流的可靠性与完整性。
- **链接**：[Issue #80432](https://github.com/anthropics/claude-code/issues/80432)

### 10. [CLOSED] GCP 部署指南改进（#80353）
- **内容**：更新了 GCP 网关部署文档，当下载的二进制文件校验和不匹配时，会停止部署流程。
- **意义**：提高了部署的健壮性和安全性，防止用户使用损坏或篡改的可执行文件。
- **链接**：[PR #80353](https://github.com/anthropics/claude-code/pull/80353)

## 功能需求趋势

1.  **协作与桌面体验优化**：用户对桌面应用（Cowork 模式）的稳定性和功能集成有极高要求。近期 Issue 集中在**会话卡死、功能按钮失效、工具调用权限管理**等问题上。这表明用户希望桌面端成为与 CLI 同等强大的开发平台，而非简单的 GUI 包装器。
2.  **模型选择与计费透明度**：Fable 5 的推出引发了社区对“默认模型切换”、“模型降级逻辑”和“积分计算方式”的大量讨论。用户期望**更透明、可控的模型选择和成本管理**，尤其是在 Max 这类高级计划中。
3.  **跨平台一致性**：从 macOS、Windows 到 Linux，再到各种 IDE（VSCode, IntelliJ），用户希望获得**一致且无痛的开箱体验**。平台特有的 Bug（如 Windows 休眠问题、Linux OAuth 问题）是社区持续关注的方向。
4.  **长会话与上下文管理**：围绕上下文压缩不生效、日志丢失、会话恢复异常等问题，开发者对**长会话的健壮性、数据可审计性**提出了更高要求。
5.  **MCP 生态支持完善**：MCP 工具权限列表为空（#80365）等 Bug 的出现，显示出社区对 Custom MCP Server 的接入与使用**要求更高的稳定性和透明性**。

## 开发者关注点

- **稳定性仍是第一要务**：macOS 文件系统调用失效、登录循环、订阅降级、协作模式卡死，这些问题严重影响了日常工作流。开发者希望团队优先解决这些**高频、高影响的核心Bug**。
- **旗舰模型推出伴随阵痛**：Fable 5 的发布显然是一次重大升级，但与计费和权限系统的磨合出现了问题。开发者对“付费升级后反而无法使用”或“被静默降级”的**体验非常敏感**。
- **桌面端协作功能的“差等生”体验**：大量 Issue 指向桌面 Cocowork 功能的半成品化（AskUserQuestion不渲染、MCP白名单为空等）。这说明用户有迫切的协作需求，但产品稳定性尚未达标。
- **安全与权限的平衡**：用户一方面希望有更强大的自动化权限（如 EnterWorktree），另一方面也对文件系统安全问题（如错误地将凭证复制到全局可读目录 #78368）表示**高度警觉**。
- **本地化与无障碍**：虽有零星报告（如日语翻译不自然），但当前社区关注点仍集中在核心功能和稳定性上，对用户体验细节的优化需求尚在其次。

---

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-07-23

## 今日速览
今天发布了 **rust-v0.146.0 的四个连续 alpha 版本**，社区焦点集中在 **macOS SQLite 日志残留**、**周限额消耗异常** 以及 **多智能体模式（multi-agent v2）的模型覆盖失效** 等回归性 Bug 上。PR 方面，多个与服务端性能、MCP 集成和 CI 测试相关的合并已落地，显示出团队在稳定性与可观测性上的持续投入。

---

## 版本发布

### rust-v0.146.0-alpha.1 / .2 / .3 / .4
过去 24 小时内连续发布了四个预发布版本，每次均标注为 `Release 0.146.0-alpha.x`，无详细变更日志。这通常是内部快速迭代的迹象，可能为下个稳定版做准备。

---

## 社区热点 Issues（10 条）

### 1. macOS 上 SQLite 日志持续残留 [#29532](https://github.com/openai/codex/issues/29532)
- 作者：pwukun | 评论：44 | 👍：8
- 关键：升级至 `rust-v0.142.0` 后 `~/.codex/logs_2.sqlite` 中 SQLite 日志仍在大量写入，`#29432` 部分修复了 WebSocket 相关条目，但 `#29457` 依然无效。社区对持久日志导致的磁盘与性能问题高度关注。

### 2. 可定制的状态栏（TUI）[#17827](https://github.com/openai/codex/issues/17827)
- 作者：pkondaurov | 评论：31 | 👍：119
- 关键：呼声最高的功能需求之一。用户希望像 Claude Code 一样在终端底部实时显示 token 用量、模型名、速率限制、Git 分支等信息。已获得 119 个 👍，说明 CLI/TUI 用户对上下文感知 UI 有强烈需求。

### 3. 周限额消耗速度堪比旧版 5 小时限制 [#33685](https://github.com/openai/codex/issues/33685)
- 作者：mikk73 | 评论：20 | 👍：9
- 关键：切换至周限额后，在 GPT-5.5 High 模式下的消耗速度与旧版 5 小时限制几乎一致，正常工作中途就被限制。用户怀疑内部计量逻辑存在 Bug。

### 4. 为阿拉伯语/希伯来语用户添加完整 RTL 支持 [#19504](https://github.com/openai/codex/issues/19504)
- 作者：meshalprogramming-cloud | 评论：20 | 👍：19
- 关键：中文、英文用户之外，RTL 用户无法正确渲染文本（对齐、标点、阅读方向）。该 Issue 已有 19 个 👍，表明国际化需求正在增长。

### 5. OAuth 认证在 issuers 校验阶段失败 [#31573](https://github.com/openai/codex/issues/31573)
- 作者：NiceWaffel | 评论：19 | 👍：45
- 关键：CLI v0.143.0 中 OAuth 流程无法通过 issuer 验证，导致 Free 用户无法完成认证。45 个 👍 表明该问题影响面广。

### 6. 将 VS Code 聊天限定在当前工作区/项目 [#25319](https://github.com/openai/codex/issues/25319)
- 作者：omry | 评论：17 | 👍：47
- 关键：用户希望 Chat 历史与项目绑定，而非全局共享。当前在 VS Code 中切换项目时会看到其他项目的线程，造成混乱。47 个 👍 说明这是 IDE 扩展用户的典型痛点。

### 7. Windows 登录失败：token exchange failed [#26764](https://github.com/openai/codex/issues/26764)
- 作者：liuhongwei56 | 评论：15 | 👍：0
- 关键：Windows 用户频繁遭遇 `https://auth.openai.com/oauth/token` 请求失败，导致无法登录 App。虽然 👍 数为 0，但 15 条评论反映出该问题具有一定复现率。

### 8. VS Code 扩展 WebView 加载失败（ServiceWorker 错误）[#14745](https://github.com/openai/codex/issues/14745)
- 作者：Tuservermu | 评论：13 | 👍：6
- 关键：Windows 10/Server 2016 上扩展 26.x 的 WebView 无法加载，影响核心聊天功能。该 Issue 已持续数月，今日仍有更新。

### 9. 购买 Credits 时自动充值默认开启且无法关闭 [#31987](https://github.com/openai/codex/issues/31987)
- 作者：Keksuccino | 评论：12 | 👍：2
- 关键：Pro x20 用户每次购买 Credits 后自动充值选项都会重新被选中，用户认为这是“侵害性设计”。虽然 👍 不多，但评论活跃。

### 10. Windows 桌面 App 中 WSL 工作空间下的 Browser Use 失败 [#29639](https://github.com/openai/codex/issues/29639)
- 作者：atlantho | 评论：11 | 👍：3
- 关键：当 Agent 配置为 WSL 环境时，Desktop App 自动生成 Windows 版 `node_repl`，但工具调用发送 Linux 路径，导致 sandboxCwd 不匹配。反映了跨平台 sandbox 的兼容性问题。

---

## 重要 PR 进展（10 条）

### 1. 唤醒空闲线程处理队列中 Agent 邮件 [#34852](https://github.com/openai/codex/pull/34852) ✅ 已合并
- **功能**：当有 Agent 工作到达时，即使线程处于持久休眠状态也能被唤醒，避免消息排队后不被处理。提升多 Agent 场景下的响应性。

### 2. 使用批量 API 加载插件应用元数据 [#34851](https://github.com/openai/codex/pull/34851) ✅ 已合并
- **功能**：将插件读取与安装的元数据请求合并为批量（100 个一批），减少网络开销；失败时保留缓存。优化插件市场加载性能。

### 3. 为 Free 计划账户禁用图像生成 [#34850](https://github.com/openai/codex/pull/34850) ✅ 已合并
- **功能**：当用户计划为 Free 时，跳过注册独立的 `image_generation` 工具。避免 Free 用户误用并产生意外费用。

### 4. 缓存远程插件目录（按作用域）[#34849](https://github.com/openai/codex/pull/34849) ✅ 已合并
- **功能**：全局、用户、工作区的远程插件目录按作用域与账户缓存到磁盘（3 小时 TTL），支持后台刷新与预热。显著减少插件列表加载时间。

### 5. 在审核会话中使用 Guardian 模型限制 [#34847](https://github.com/openai/codex/pull/34847) ✅ 已合并
- **功能**：修复了 Guardian 审核时可能错误继承父对话的上下文窗口与自动压缩覆盖的问题，确保审核使用正确的模型限制。

### 6. 允许自定义 Provider 选择加入独立 Web 搜索 [#34846](https://github.com/openai/codex/pull/34846) ✅ 已合并
- **功能**：新增 `supports_standalone_web_search` 开关，自定义 Provider 可启用独立的 `web.run` 工具，扩展搜索能力。

### 7. 在世界状态中追踪多 Agent 模式 [#34845](https://github.com/openai/codex/pull/34845) ✅ 已合并
- **功能**：将多 Agent 模式指令持久化到世界状态中，避免历史变化时重复发出无关设置提示。提升多 Agent 对话的稳定性。

### 8. 为 App Server 添加持久化线程置顶功能 [#34840](https://github.com/openai/codex/pull/34840) ✅ 已合并
- **功能**：新增 `isPinned` 字段，支持 `thread/metadata/update` 置顶/取消置顶线程，并提供按置顶过滤的列表查询。提升用户组织对话的能力。

### 9. 在合入前刷新分析数据，避免进程关闭时丢失 [#34831](https://github.com/openai/codex/pull/34831) ✅ 已合并
- **功能**：在进程内 App Server 关闭前，增加一个有界分析队列冲洗等待，确保已完成回合和接受行事件能够成功发送，防止遥测丢失。

### 10. 在非 Windows Bazel CI 中运行 code-mode 测试 [#34823](https://github.com/openai/codex/pull/34823) ✅ 已合并
- **功能**：移除 Linux/macOS 上的 code-mode 跳过过滤器，完整运行集成测试套件；Windows 仍保留已知失败的测试排除。增强跨平台代码功能质量。

---

## 功能需求趋势
从今日活跃的 Issues 中可以提炼出以下社区最关注的功能方向：

1. **TUI 定制化**：可自定义状态栏（#17827）、输入框固定至底部（#26311）、禁用自动解析（autoResolutionMs）（#34310）等，体现 CLI 用户对高级 UI 控制的渴求。
2. **国际化与无障碍**：RTL 文本支持（#19504）获得持续关注，OpenAI 需正视非英文用户的体验。
3. **IDE 集成深化**：VS Code 聊天限定工作区（#25319）、文件内联 diff 显示（#24513），开发者希望代码审查与对话更紧密融合。
4. **性能与可靠性**：SQLite 日志污染（#29532）、周限额异常（#33685）、Windows 登录失败（#26764）等高频 Bug 都是性能/稳定性的核心诉求。

---

## 开发者关注点
- **痛点优先级**：
  - **macOS 日志膨胀**：`~/.codex/logs_2.sqlite` 持续写入，影响磁盘寿命和系统性能。
  - **限额消耗异常**：周限额的消耗曲线与旧版 5 小时限制几乎一致，用户怀疑是算法 Bug 而非策略调整。
  - **多 Agent v2 模型覆盖失效**：子 Agent 的模型选择无法生效，破坏多模型工作流。
  - **OAuth & 登录稳定性**：Free 用户遭遇 issuer 校验失败，Windows 用户 token exchange 失败，影响入门体验。
- **高频请求**：
  - 状态栏定制（获 119 👍）
  - 会话与项目绑定（获 47 👍）
  - 内联 diff 显示（获 0 👍 但有 3 条评论，属于小众但强烈需求）
  - 禁用自动充值（获 2 👍 但 12 条评论，反映情绪大于点赞数）

---

*本日报由 AI 技术分析工具自动生成，数据来源：github.com/openai/codex。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

## 📅 Gemini CLI 社区动态日报 | 2026-07-23

### 一、今日速览

- **版本更新密集**：昨日同时发布了正式版 `v0.52.0`、预览版 `v0.53.0-preview.0` 以及夜间版 `v0.52.0-nightly`，主要包含凭据验证优化、A2A 协议修复、评估命令新增等改动。
- **Agent 稳定性问题持续受关注**：多个高优先级的 agent 相关 bug（如子代理误报成功、通用代理卡死）在社区引发深度讨论，维护团队已标记为 `need-retesting` 状态。
- **安全与性能修复并行**：PR #28403 修复了 shell 变量注入绕过漏洞（GHSA-wpqr-6v78-jr5g），同时多个 PR 针对 MCP 超时、模型选择器、CJK 渲染等体验问题进行改进。

---

### 二、版本发布

#### 1. v0.52.0（正式版）
**链接**：https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0  
**主要变化**：
- 重构：将临时 CI 配置文件排除在工作区上下文之外（#28216）
- 新增 `caretaker-triage` 模块的基础框架，用于自动化问题分类

#### 2. v0.53.0-preview.0（预览版）
**链接**：https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0-preview.0  
**主要变化**：
- 修复 A2A 协议中取消工具响应分组与角色合并逻辑，防止 400 错误（#28407）
- 实现基于 LLM 的 triage 编排器及容器构建（#28407 相关）

#### 3. v0.52.0-nightly.20260723.g9681621c6（夜间版）
**链接**：https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260723.g9681621c6  
**主要变化**：
- 修复凭据缓存验证顺序，恢复 `GOOGLE_APPLICATION_CREDENTIALS` 回退机制（#28472）
- 新增 `eval coverage report` 命令（#28169）

---

### 三、社区热点 Issues（精选 10 条）

#### 1. #22323 – 子代理达到 MAX_TURNS 后误报为 GOAL 成功
- **链接**：https://github.com/google-gemini/gemini-cli/issues/22323
- **重要性**：子代理在未完成分析时因达到最大轮次而提前返回 `status: "success"`，导致用户无法感知中断。12 条评论，社区高度关注。
- **状态**：`OPEN`，`priority/p1`，标记 `need-retesting`

#### 2. #21409 – 通用代理卡死
- **链接**：https://github.com/google-gemini/gemini-cli/issues/21409
- **重要性**：`gemini-cli` 委托给通用 agent 时永久挂起，简单操作如创建文件夹也会卡住，8 条评论，8 个 👍。
- **状态**：`OPEN`，`priority/p1`，标记 `need-retesting`

#### 3. #24353 – 稳健的组件级评估（EPIC）
- **链接**：https://github.com/google-gemini/gemini-cli/issues/24353
- **重要性**：作为 `behavioral evals` 的后续演进，已产出 76 个测试用例，覆盖 6 个 Gemini 模型，7 条评论。
- **状态**：`OPEN`，`priority/p1`，`aiq/eval_infra`

#### 4. #22745 – 评估 AST 感知的文件读取、搜索和映射（EPIC）
- **链接**：https://github.com/google-gemini/gemini-cli/issues/22745
- **重要性**：探索利用 AST 感知工具减少 token 浪费、改进代码库映射，7 条评论。
- **状态**：`OPEN`，`priority/p2`，`kind/feature`

#### 5. #21968 – Gemini 不主动使用自定义技能和子代理
- **链接**：https://github.com/google-gemini/gemini-cli/issues/21968
- **重要性**：用户反馈即使配置了 gradle/git 等技能，Gemini 也很少自动调用，需要显式指令，6 条评论。
- **状态**：`OPEN`，`priority/p2`，标记 `need-retesting`

#### 6. #26522 – 自动记忆系统无休止重试低信号会话
- **链接**：https://github.com/google-gemini/gemini-cli/issues/26522
- **重要性**：Auto Memory 中低信号会话被反复展示给提取代理，导致资源浪费，5 条评论。
- **状态**：`OPEN`，`priority/p2`，`kind/bug`

#### 7. #25166 – shell 命令执行后卡住，显示“等待输入”
- **链接**：https://github.com/google-gemini/gemini-cli/issues/25166
- **重要性**：简单 CLI 命令执行完成后终端仍显示等待用户输入，影响交互流畅性，4 条评论，3 个 👍。
- **状态**：`OPEN`，`priority/p1`，`effort/medium`

#### 8. #22232 – 浏览器 agent 锁定恢复能力增强
- **链接**：https://github.com/google-gemini/gemini-cli/issues/22232
- **重要性**：浏览器 profile 锁死时 agent 直接失败，社区建议实现自动接管与锁恢复，4 条评论。
- **状态**：`OPEN`，`priority/p3`，`kind/feature`

#### 9. #21983 – 浏览器子代理在 Wayland 下失败
- **链接**：https://github.com/google-gemini/gemini-cli/issues/21983
- **重要性**：Wayland 环境下的兼容性问题，4 条评论，1 个 👍。
- **状态**：`OPEN`，`priority/p1`，`agent/browser`

#### 10. #21000 – 实验用原生文件工具维护任务追踪器
- **链接**：https://github.com/google-gemini/gemini-cli/issues/21000
- **重要性**：探索代替传统 task tracker 的原生文件工具，4 条评论。
- **状态**：`OPEN`，`priority/p3`，`kind/bug`

---

### 四、重要 PR 进展（精选 10 条）

#### 1. #28485 – 修复模型选择器缺少 gemini-3.5-flash
- **链接**：https://github.com/google-gemini/gemini-cli/pull/28485
- **内容**：用户在 v0.51.0 上无法选择 `gemini-3.5-flash`，PR 将其加入模型选择器。
- **影响**：直接解决模型版本兼容问题，社区关注度高。

#### 2. #28513 – 依赖更新：tar 7.5.8 → 7.5.19
- **链接**：https://github.com/google-gemini/gemini-cli/pull/28513
- **内容**：由 Dependabot 自动提交的安全/维护更新。
- **影响**：修复多个 CVE，建议合并。

#### 3. #28309 – 改进 CJK 文本渲染与 __bold__ 语法
- **链接**：https://github.com/google-gemini/gemini-cli/pull/28309
- **内容**：解决 CJK 文字换行错误和粗体语法识别问题。
- **影响**：对东亚用户友好度提升明显。

#### 4. #28410 – 缩短 MCP tools/list 发现超时
- **链接**：https://github.com/google-gemini/gemini-cli/pull/28410
- **内容**：MCP 服务器无响应时可导致 CLI 冻结 10 分钟，PR 设置短超时快速失败。
- **影响**：避免启动卡死，提升健壮性。

#### 5. #28408 – 重构：集中化 payload 密度检测
- **链接**：https://github.com/google-gemini/gemini-cli/pull/28408
- **内容**：将 `ToolGroupMessage` 中的载荷密度检测逻辑迁移到 `mapToDisplay`。
- **影响**：减少 UI 层对后端内部数据的依赖，利于后续维护。

#### 6. #28406 – 修复工具子代理模型配置的 modelIdResolutions
- **链接**：https://github.com/google-gemini/gemini-cli/pull/28406
- **内容**：`web-search` 等工具硬编码了 `gemini-3-flash-preview`，对无预览权限用户导致 400 错误。
- **影响**：修复 API key 用户使用工具时的兼容性问题。

#### 7. #28404 – 覆盖 google-auth-library 版本至 10.9.0
- **链接**：https://github.com/google-gemini/gemini-cli/pull/28404
- **内容**：手动覆盖 genai 依赖中的认证库版本，解决潜在冲突。
- **影响**：提升认证稳定性。

#### 8. #28403 – 修复 shell 变量注入绕过漏洞（GHSA-wpqr-6v78-jr5g）
- **链接**：https://github.com/google-gemini/gemini-cli/pull/28403
- **内容**：`detectBashSubstitution` 和 `detectPowerShellSubstitution` 存在绕过，PR 加固防御。
- **影响**：安全修复，建议优先合并。

#### 9. #28447 – 添加 Windows PowerShell 故障排查文档
- **链接**：https://github.com/google-gemini/gemini-cli/pull/28447
- **内容**：针对 Windows 用户 `gemini` 命令无法执行的问题提供解决方案。
- **影响**：降低 Windows 入门门槛。

#### 10. #28509 – 过滤掉历史中的思考部分（thought parts）
- **链接**：https://github.com/google-gemini/gemini-cli/pull/28509
- **内容**：当 context management 禁用时，从 `getHistoryTurns` 中完全过滤 `thought: true` 部分。
- **影响**：避免重复推理块导致上下文混乱。

---

### 五、功能需求趋势

基于本次 Issues 与 PRs 的分析，社区最关注的功能方向为：

1. **Agent 行为可预测性与可靠性**  
   - 子代理误报成功（#22323）、通用代理卡死（#21409）、不主动使用技能（#21968）等高频问题表明，用户期望 agent 能更诚实地报告状态，并减少意外中断。

2. **MCP 与工具扩展能力**  
   - 多个 PR 涉及 MCP 超时（#28410）、工具模型配置解析（#28406）以及 MCP 工具数量限制（#24246），显示社区正积极扩展 CLI 的工具生态，但对兼容性和稳定性要求高。

3. **内存与自动记忆优化**  
   - #26522、#26523、#26525 等一批 Issue 聚焦 Auto Memory 系统，要求减少无效重试、增加确定性脱敏、隔离无效补丁，体现对长期记忆可靠性的迫切需求。

4. **AST 感知代码分析**  
   - #22745 及其子 Issue 推动使用 AST 感知工具进行文件读取、搜索和代码映射，预期可大幅降低 token 消耗、提升精确度。

5. **终端渲染与多语言支持**  
   - CJK 渲染（#28309）、终端 resize 闪烁（#21924）、外部编辑器退出后显示损坏（#24935）等问题持续被提及，跨语言、高保真交互体验成为刚需。

6. **安全与访问控制**  
   - 变量注入漏洞修复（#28403）、$VAR 绕过（#28418）、agent 权限未授权运行（#22093）等问题说明安全审计和权限管理是社区长期关注点。

---

### 六、开发者关注点

- **高频痛点**：  
  - 通用 agent 挂起（#21409）和 shell 命令卡死（#25166）严重影响日常开发流程，开发者希望引入更明确的超时与失败机制。
  - 模型选择器限制（#28483）导致无法使用最新模型，社区对模型支持速度敏感。
  - Wayland 下浏览器 agent 不可用（#21983）阻碍 Linux 用户使用。

- **可用性改进请求**：  
  - 子代理轨迹应可通过 `/chat share` 分享（#22598），以便调试与复现问题。
  - 代理应避免破坏性行为（#22672），如强制 git 操作或危险 shell 命令。
  - 用户希望 Gemini CLI 更了解自身（#21432），能准确回答自己支持的 flags/hotkeys。

- **生态与工具链**：  
  - MCP 工具发现的超时问题（#28410）和模型 ID 解析失败（#28406）表明快速迭代中兼容性验证不足。
  - 开发者期待更完善的行为评估体系（#24353），以量化 agent 改进效果。

- **Windows 体验**：  
  - PR #28447 专门添加了 Windows PowerShell 故障排查，说明 Windows 用户仍面临基础安装与运行问题。

---

*更多讨论请访问 [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*  
*数据采集时间：2026-07-23 12:00 UTC*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-07-23

---

## 今日速览

- 连续发布三个微补丁版本（1.0.74-1 ~ 1.0.74-3），主要修复已知问题，并新增 Gemini 3.6 Flash 模型支持与首次运行引导溅射页。
- Issue 板块持续升温：PDF 原生阅读需求（#443）获 33 票，WSL2 复制粘贴故障（#3534）、BYOK 认证回归（#4016）引发开发者关注；同时出现多起终端兼容性回归（tmux 内渲染、React 无限渲染循环）。
- 功能需求趋于细化：社区希望增加自定义模型池、子代理信用消耗明细、显式内联代理调用等能力。

---

## 版本发布

**v1.0.74-1 / v1.0.74-2 / v1.0.74-3**（24小时内连续发布）

- **新增**
  - 首次运行时显示引导溅射页，让用户选择是否默认启用沙箱。
  - 添加对 **Gemini 3.6 Flash** 模型的支持。
- **改进**
  - 修复多会话复用场景下，一个会话的打开对话框不再泄露到另一个会话；当切回原会话时，可选的提示列表会重新打开。
  - `$` 交互式 shell 快捷键体验优化。
- **修复**
  - 其他未详尽列出的修复与变更（详见 Release 页面）。

---

## 社区热点 Issues（10 个）

### 1. [#443 – 内置 PDF 阅读支持](https://github.com/github/copilot-cli/issues/443)
- **标签**：`area:tools` ｜ 评论 6 ｜ 👍 33
- **摘要**：Copilot CLI 无法原生读取 PDF，限制了对学术论文、技术文档等场景的辅助。用户需要手动安装 `pdftotext` 等工具。
- **关注点**：呼声极高的功能，社区希望 CLI 能直接解析 PDF 内容并提供给模型上下文，降低使用门槛。

### 2. [#3534 – WSL2 ARM64 下 `/copy` 因 `cmd.exe` 引号问题失败](https://github.com/github/copilot-cli/issues/3534)
- **标签**：`area:input-keyboard`, `area:platform-windows` ｜ 评论 5 ｜ 👍 4
- **摘要**：在 WSL2 (ARM64) 上，`/copy` 命令调用 `clip.exe` 时因引号转义错误返回 code 1，导致剪贴板写入失败。
- **关注点**：影响 ARM64 Windows 用户，是 Windows 平台稳定性关键 bug。

### 3. [#4016 – BYOK 在 `--acp` 模式仍被拒绝认证](https://github.com/github/copilot-cli/issues/4016)
- **标签**：`area:authentication`, `area:non-interactive`, `area:models` ｜ 评论 5 ｜ 👍 4
- **摘要**：即使配置了 `COPILOT_PROVIDER_*`，在 `--acp` 模式下 `session/new` 仍然要求 GitHub 登录（`-32000`）。1.0.61 曾修复过类似问题，但该版本回归。
- **关注点**：企业 BYOK 用户核心痛点，影响自动化与无交互部署场景。

### 4. [#4163 – 子进程僵尸累积](https://github.com/github/copilot-cli/issues/4163)
- **标签**：`area:platform-linux`, `area:tools` ｜ 评论 3 ｜ 👍 2
- **摘要**：copilot CLI 1.0.71 在 Linux 上不回收子进程，每个会话每分钟泄漏约 2 个僵尸进程，长期运行造成资源问题。
- **关注点**：稳定性与资源管理 bug，对长时间使用 CLI 的开发者影响显著。

### 5. [#4206 – 环境页脚卡在“Loading:”](https://github.com/github/copilot-cli/issues/4206)
- **标签**：`area:enterprise`, `area:mcp` ｜ 评论 2 ｜ 👍 2
- **摘要**：macOS 上环境状态页脚永远显示 `◎ Loading: 1 instruction, 40 skills, …`，但实际已加载完成，`/env` 也能正常列出所有内容。
- **关注点**：企业环境 MCP 策略下 UI 状态错误，影响用户对当前环境的感知。

### 6. [#4222 – 主面板冻结回归（React 无限渲染）](https://github.com/github/copilot-cli/issues/4222)
- **标签**：`triage` ｜ 评论 0 ｜ 👍 0
- **摘要**：v1.0.31 曾出现 #2802 的无限 React/Ink 渲染循环，现已回归到 v1.0.72+，在 VS Code 集成终端（原生 Windows）下间歇性导致主面板冻结，无输出。
- **关注点**：严重 UI 回归，已影响多个版本，开发环境常用场景受阻。

### 7. [#4223 – tmux 内 Shell 命令完成检测失败](https://github.com/github/copilot-cli/issues/4223)
- **标签**：`triage` ｜ 评论 0 ｜ 👍 0
- **摘要**：在 tmux 会话中运行 `echo hello` 输出正常，但 CLI 永远显示“still running”，需手动中断。命令执行逻辑与终端复用器冲突。
- **关注点**：tmux 是开发者常用工具，该 bug 影响大量远程/多窗口工作流。

### 8. [#4212 – tmux 内提示框与选中项不可见（暗色重叠）](https://github.com/github/copilot-cli/issues/4212)
- **标签**：`area:theming-accessibility`, `area:terminal-rendering` ｜ 评论 1 ｜ 👍 0
- **摘要**：在 iTerm2 下 tmux 中运行 copilot CLI，提示输入框和选中菜单项为暗色文字与暗色背景，无法阅读。相同配置在纯 iTerm2 中正常。
- **关注点**：终端主题兼容性问题，影响使用 tmux 的开发者视觉体验。

### 9. [#4224 – 子代理 OTel span 缺失计费属性](https://github.com/github/copilot-cli/issues/4224)
- **标签**：`triage` ｜ 评论 0 ｜ 👍 0
- **摘要**：当会话使用 `task` 工具或自定义代理时，子代理模型调用的 OTel span 不包含计费属性（如 `github.copilot.nano_aiu`），导致外部计费系统少计实际 AI 用量。
- **关注点**：企业用户成本核算准确性，影响到预算管理。

### 10. [#4221 – 权限扫描器误将 `git log -L` 参数当作目录路径](https://github.com/github/copilot-cli/issues/4221)
- **标签**：`triage` ｜ 评论 0 ｜ 👍 0
- **摘要**：运行 `git log -L` 且搜索表达式以 `/` 开头时，权限提示框错误地显示合成路径，可能导致误拦截或用户困惑。
- **关注点**：Shell 命令解析的误报问题，影响权限模型的可信度。

---

## 重要 PR 进展（2 个）

### [#4228 – 【已关闭】撤回：错误范围的 #3534 修复](https://github.com/github/copilot-cli/pull/4228)
- **作者**：TheDr1ver ｜ 状态：已关闭
- **内容**：作者提交了针对 #3534（WSL2 ARM64 `/copy` 失败）的修复，但维护者指出该 PR 实际上修改的是**文档**而非私有的剪贴板运行时实现，因此作者主动撤回，源分支已删除。
- **关注点**：表明社区正在积极寻找 WSL2 剪贴板问题的解决方案，但需要正确的代码层面改动。

### [#3163 – 【已开启】ViewSonic 显示器](https://github.com/github/copilot-cli/pull/3163)
- **作者**：tijuks ｜ 状态：开启 ｜ 最后更新：2026-07-22
- **内容**：该 PR 标题和描述显示为“ViewSonic monitor”，似乎是无关的垃圾 PR（提及“initiate GitHub action”）。目前无评论，大概率不会被合并。

（注：由于当日无合并的实质性功能 PR，社区在等待维护者处理上述热门 Issue。）

---

## 功能需求趋势

从所有最近的 Issues 中可以提炼出以下几个社区最关注的功能方向：

1. **原生文档格式支持**（#443）— PDF 阅读需求获得最高票，表明用户期望 CLI 能原生处理更多文档类型，减少外部工具依赖。
2. **自定义模型与计费透明**（#4218, #4224）— 用户希望手动配置 Auto 模式可用的模型池，并希望子代理调用能准确计入 AI 信用消耗，以便进行成本控制。
3. **显式代理调用与链式代理**（#4208, #4209）— 社区希望能在提示中明确指定某个自定义 Agent，并支持 Agent 间的链式调用和上下文传递。
4. **配置化重试与限流**（#4210）— 网络不稳定场景下，用户希望自定义请求错误重试次数。
5. **终端兼容性增强**（#3428, #4222, #4223, #4212）— 多个 Issue 指向终端渲染与 shell 集成问题，包括 OSC 133 序列支持、React 渲染稳定性、tmux 兼容性等。

---

## 开发者关注点（痛点 & 高频需求）

- **Windows 与 tmux 稳定性差**：WSL2 剪贴板、原生 Windows 渲染循环、tmux 内命令完成检测失败和颜色主题问题，是当前开发者最常遇到的障碍。
- **认证与 BYOK 回归**：`--acp` 模式下 BYOK 被拒绝（#4016）再次出现，严重威胁企业用户的自动化部署流程。
- **子进程管理缺陷**：Linux 下僵尸进程累积（#4163）影响长期运行的 CLI 进程。
- **UI 状态不一致**：环境页脚卡在 Loading（#4206）、权限扫描器误报（#4221）等降低了 CLI 的可信度与可用性。
- **模型选择缺乏控制**：Auto 模式使用模型池不可控（#4218），用户希望能在成本和能力之间做权衡。

---

*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli) — 更新于 2026-07-23 UTC。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-07-23

## 今日速览

今日社区主要围绕 **第三方 API 兼容性** 和 **子代理模型选择** 展开。一个影响第三方端点的 prompt_cache_key 参数异常被快速响应，同日提交了修复 PR；同时，有用户提出为子代理独立指定模型的特性请求，反映了社区对灵活成本控制工作流的渴望。此外，两项已有 PR 也在持续完善中，分别涉及字符串替换计数逻辑和后台进程管道阻塞问题。

---

## 版本发布

（过去 24 小时内无新版本发布）

---

## 社区热点 Issues

### 1. #2534 – [Bug] 第三方 API 报错 400：不支持的参数 `prompt_cache_key`
- **作者**: dewrama  
- **状态**: OPEN | **评论**: 0 | 👍 0  
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2534

**为什么重要**：  
用户使用 0.29.0 版本连接 Nvidia nim 模型时，请求中携带了仅 Moonshot 官方 API 支持的 `prompt_cache_key` 参数，导致第三方端点返回 400 错误。该问题直接影响所有使用兼容第三方 API 的开发者，修复优先级高。

**社区反应**：  
尽管暂无直接评论，但该 Issue 在创建后数小时内即被关联的 PR #2535 处理，表明开发团队已迅速跟进。

---

### 2. #2533 – [Feature Request] 子代理可独立选择模型
- **作者**: bob0x-ai  
- **状态**: OPEN | **评论**: 0 | 👍 0  
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2533

**为什么重要**：  
当前子代理强制继承会话默认模型，用户希望为不同子任务分配不同的模型（如低成本模型处理简单任务，高端模型处理复杂推理）。该特性将解锁成本分层多代理工作流，是当前 AI 开发工具差异化的关键方向。

**社区反应**：  
虽然暂无评论，但请求已获得明确描述和正当性论证，预计会吸引更多关注。

---

## 重要 PR 进展

### 1. #2535 – fix(llm): 将 prompt cache key 限定到 Moonshot API
- **作者**: Sanjays2402  
- **状态**: OPEN | 创建: 2026-07-23 | 更新: 2026-07-23  
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2535

**内容**：  
直接修复 #2534。在 LLM 请求构建中，将 `prompt_cache_key` 参数仅附加到 Moonshot 官方 API 的请求上，第三方兼容端点不再携带该参数，从而消除 400 错误。

**评价**：  
当天提 Bug、当天修复，体现了社区对第三方兼容性的重视。合并后预计能稳定大量使用自建或第三方模型的用户。

---

### 2. #2524 – fix(tools): 对 StrReplaceFile 操作次数按实时内容计数
- **作者**: Sreekant13  
- **状态**: OPEN | 创建: 2026-07-20 | 更新: 2026-07-22  
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2524

**内容**：  
修复 `StrReplaceFile` 工具在链式替换时的计数错误。原逻辑基于原始文件内容统计替换次数，导致后续新增的匹配项未被计入。此 PR 改为按实时处理后的内容进行计数，保证报告次数与实际操作一致。

**评价**：  
该修复涉及文件编辑工具的核心正确性，对自动化脚本的可靠性至关重要。虽未在今日更新，但仍在活跃状态。

---

### 3. #2530 – fix(shell): 解决子进程持有管道时 shell 命令阻塞问题
- **作者**: ayaangazali  
- **状态**: OPEN | 创建: 2026-07-21 | 更新: 2026-07-22  
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2530

**内容**：  
修复 #2468。当执行类似 `some_daemon & echo done` 的命令时，后台守护进程持有 stdout/stderr 管道，导致 `_run_shell_command` 在读取 EOF 时超时阻塞。PR 通过在检查退出码前先判断子进程是否已退出，避免等待无关的管道 EOF。

**评价**：  
该问题影响所有需要在 Kimi Code CLI 中启动后台进程的用户（如启动 dev server 等）。修复后能提升 shell 交互的健壮性和响应速度。

---

## 功能需求趋势

从今日有限的 Issue 中可提炼出以下趋势：

- **灵活模型分配**（#2533）：社区不再满足于单一模型，希望按子任务粒度选择不同模型，以平衡成本与性能。这是多代理工具复杂度提升后的自然诉求。
- **第三方 API 兼容性**（#2534）：用户正在将 Kimi Code CLI 与更多非官方 LLM 后端（如 Nvidia nim）集成，官方需持续处理参数差异，避免“仅 Moonshot 可用”的局限性。

---

## 开发者关注点

- **第三方 API 参数透传痛点**：`prompt_cache_key` 这样的 Moonshot 私参被不加判断地发送给所有后端，导致兼容性故障。开发者希望 CLI 能自动识别后端类型，或提供配置选项来控制参数白名单。
- **子代理行为的细粒度控制**：当前子代理完全继承主会话配置，无法为特定子任务选择廉价模型。虽然可通过手动拼装多个 CLI 调用绕开，但原生支持能大幅提升工作流设计效率。
- **后台进程管道处理**：在 shell 中执行后台命令时，管道未正确关闭会导致 CLI 误判命令未完成。修复方案应被尽快合并，以避免开发者在日常使用中遇到无响应。

---

*本次日报基于 GitHub MoonshotAI/kimi-cli 仓库 2026-07-23 UTC 数据生成。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-07-23

## 今日速览
- **opencode‑go 订阅故障**：多个模型返回“Request blocked by upstream provider”引发广泛关注，开发者怀疑网关触发全局拦截。
- **社区功能需求集中爆发**：自定义系统提示（#7101, 123👍）和自动发现模型（#6231, 185👍）成两大明星提案，长期活跃。
- **Brendonovich 批量提交 7 个 API 扩展**：涵盖 session 归档、VCS 分支、命令来源识别等，桌面客户端能力即将大幅升级。

---

## 版本发布
过去 24 小时无正式版本发布。仓库仅上传了 [PR #38252 的验证录像](https://github.com/anomalyco/opencode/tree/pr-38252-videos)，用于内部审核。

---

## 社区热点 Issues（10 条）

### 1. [Feature] 支持自定义系统提示（全局 / 项目 / 目录级）
- **#7101** | 评论 35 | 👍 123 | 状态：已关闭
- 用户要求在全局、项目或自定义目录中配置 system prompt，便于管理不同代码库的上下文。Reddit 讨论中社区呼声极高。
- https://github.com/anomalyco/opencode/issues/7101

### 2. [Feature] 自动发现 OpenAI 兼容提供商的模型列表
- **#6231** | 评论 30 | 👍 185 | 状态：开放
- 当前需手动在 `opencode.json` 中罗列模型，对 LM Studio、Ollama 等本地服务极不友好。社区强烈希望自动扫描可用模型。
- https://github.com/anomalyco/opencode/issues/6231

### 3. [Bug] opencode‑go 订阅所有模型返回“Request blocked by upstream provider”
- **#38218** | 评论 22 | 状态：开放
- 新注册用户登录后任何模型调用均被上游拦截，无法完成一次对话。疑似网关配置变动，开发者正紧急排查。
- https://github.com/anomalyco/opencode/issues/38218

### 4. [Feature] 消息时间线支持“Fork 到新会话”
- **#25582** | 评论 9 | 状态：已关闭
- 希望从任意用户消息分支出新会话，类似 ChatGPT 的 fork 功能。桌面端用户体验重要补充。
- https://github.com/anomalyco/opencode/issues/25582

### 5. [Bug] AI 编辑文件时自动删除 TypeScript 泛型
- **#21911** | 评论 8 | 状态：已关闭
- 使用 edit 工具时所有 `<T>` 泛型被清除，且无法通过后续编辑恢复。用户推测与 `oh-my-opencode` 插件冲突有关。
- https://github.com/anomalyco/opencode/issues/21911

### 6. [Bug] Qwen 系列模型报错“System message must be at the beginning”
- **#16560** / **#20785** / **#20813** | 共 16 条评论
- 多个用户报告 Qwen3.5/3.6 模型在 OpenCode 1.3.x 上因系统消息位置错误而无法工作。影响面广。
- https://github.com/anomalyco/opencode/issues/16560

### 7. [Bug] 桌面端内存暴涨至 3‑4GB
- **#25490** | 评论 4 | 状态：已关闭
- 同时打开多个 workspace/session tab 时，Windows 桌面客户端内存占用飙升，触发 WebView 崩溃。性能回归问题。
- https://github.com/anomalyco/opencode/issues/25490

### 8. [Bug] `--continue` 模式混淆非 git 目录会话
- **#18890** | 评论 4 | 状态：已关闭
- 在不同非 git 目录执行 `oc -c` 时，会错误恢复其他目录的会话，根源是所有非 git 目录共享同一个 ProjectID。
- https://github.com/anomalyco/opencode/issues/18890

### 9. [Feature] 支持 ACP 后端 Agent
- **#28991** | 评论 3 | 👍 1 | 状态：已关闭
- 用户希望 OpenCode 不仅可作为 ACP 服务端，还能原生调用其他 ACP 兼容的 Agent，推动 AI 任务编排。
- https://github.com/anomalyco/opencode/issues/28991

### 10. [Feature] `cp` 工具内置支持
- **#29017** | 评论 5 | 状态：已关闭
- 多个 Agent 幻觉调用 `cp`，用户建议将其加入官方工具套件，避免模型误用。
- https://github.com/anomalyco/opencode/issues/29017

---

## 重要 PR 进展（10 条）

### 1. [fix] 保留 LLM 响应消息阶段信息
- **#38452** | 状态：开放
- 解码 OpenAI Responses 的 `phase`（commentary / final_answer），在历史重放时精确拆分阶段，提升多轮对话一致性。
- https://github.com/anomalyco/opencode/pull/38452

### 2. [fix] 保留 Mistral 推理历史
- **#38453** | 状态：开放
- 将 AI SDK 的 reasoning parts 转为 Mistral 原生 thinking chunks，避免推理与最终输出混淆。
- https://github.com/anomalyco/opencode/pull/38453

### 3. [feat] 保留原始 finish reason
- **#38423** | 状态：开放
- 在所有主流提供商（OpenAI、Anthropic、Gemini 等）中同时保留标准化的 finish reason 和原始值，便于调试和插件处理。
- https://github.com/anomalyco/opencode/pull/38423

### 4. [fix] 默认自定义模型能力
- **#38449** | 状态：已合并
- 当用户完全自定义模型配置时，默认启用工具调用、文本输入输出及图片输入，避免因能力缺失导致功能异常。
- https://github.com/anomalyco/opencode/pull/38449

### 5. [feat] 项目元数据更新
- **#38443** | 状态：开放
- 新增 API 支持更新项目名称和图标，持久化到项目存储，为多项目管理提供基础。
- https://github.com/anomalyco/opencode/pull/38443

### 6. [feat] 暴露 VCS 分支元数据
- **#38442** | 状态：开放
- 在 Git/Mercurial 仓库投影中增加当前分支信息，客户端可据此显示活跃分支状态。
- https://github.com/anomalyco/opencode/pull/38442

### 7. [feat] PTY 连接令牌与 shell 列表
- **#38441** | 状态：开放
- 允许客户端获取可用 shell 列表并申请短期 PTY 连接令牌，为远程终端功能铺路。
- https://github.com/anomalyco/opencode/pull/38441

### 8. [feat] 持久化 session 归档
- **#38440** | 状态：开放
- 新增 archive / unarchive 操作，归档状态记录在会话历史中，便于会话整理与检索。
- https://github.com/anomalyco/opencode/pull/38440

### 9. [fix] 修复 Mistral prompt cache key 序列化
- **#38448** | 状态：已合并
- 升级 `@ai-sdk/mistral` 并修正 prompt cache 键的序列化字段名，确保缓存生效。
- https://github.com/anomalyco/opencode/pull/38448

### 10. [fix] 处理助手消息在失败时的最终状态
- **#38432** | 状态：开放
- 在 provider 调用失败后，将未完成的 assistant message 标记为完成状态，避免 UI 永久 loading。
- https://github.com/anomalyco/opencode/pull/38432

---

## 功能需求趋势
1. **本地模型与自定义提供商**：自动发现模型（#6231）、定制 system prompt（#7101）是最迫切的需求。
2. **会话管理增强**：fork 新会话（#25582）、自动重命名（#29002）、历史 session 列表正确显示（#29060）关注度高。
3. **工具链扩展**：内置 `cp` 工具（#29017）、`/effort` `/goal` 斜杠命令（#29030）、ACP 代理集成（#28991）体现开发者对 Agent 工作流的期待。
4. **插件与可观测性**：暴露 prompt/output 给插件（#22831）、保留响应头元数据（#26091）显示社区希望深度集成和调试。

---

## 开发者关注点
- **opencode‑go 订阅故障**（#38218）是最紧急的阻断问题，影响新用户开箱体验。
- **性能退化**：桌面端内存暴涨（#25490）、编辑器卡顿（#38412）、UI 卡顿（#38412）频繁被抱怨。
- **兼容性裂痕**：Qwen 系列模型报系统消息错误（#16560）、新 UI 设计反人类（#38416）提示 UI/UX 回归。
- **输入体验**：`Cmd+A` 失效（#25637）、`Home/End` 键在侧面板打开时不工作（#29053）影响日常编辑效率。
- **稳定性**：渲染进程崩溃（#28984）、多 workspace 创建孤岛记录（#29057）表明错误处理有待加强。

---

*数据截至 2026-07-23 12:00 UTC，来源：[anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

好的，这是为您生成的 2026-07-23 Pi 社区动态日报。

---

## Pi 社区动态日报 | 2026-07-23

### 📢 今日速览
今日社区核心关注点集中在**Provider稳定性与兼容性**上，特别是OpenRouter的缓存断点问题和Copilot Enterprise用户的压缩失败Bug引发了广泛讨论。同时，社区积极贡献代码，通过多个PR解决了从外部编辑器启动慢到重试机制不可中断等一系列痛点，展现了极高的参与度。

### 🔥 社区热点 Issues

1.  **[Bug] Copilot Enterprise 无法进行上下文压缩 (#6768)**
    *   **重要性：** 影响使用 Copilot Enterprise 许可证的核心用户，导致关键功能（上下文管理）完全失效。
    *   **社区反应：** 获得9个👍，是今日讨论热度最高的问题之一。用户反馈OpenAI和Anthropic模型均会报错。
    *   **链接：** [Issue #6768](https://github.com/earendil-works/pi/issues/6768)

2.  **[Bug] 自动压缩在上下文超过100%后不触发，直到API溢出 (#6879)**
    *   **重要性：** 核心流程Bug。自动压缩是管理长上下文的关键功能，其失效会导致Token浪费和请求失败。
    *   **社区反应：** 用户报告在一次长达2小时的Agent任务中，压缩仅在API拒绝请求后才触发。
    *   **链接：** [Issue #6879](https://github.com/earendil-works/pi/issues/6879)

3.  **[Bug] OpenAI SDK重试机制会完整休眠Retry-After头指定的时间（长达数天），且无法被中止 (#6911)**
    *   **重要性：** 严重的设计缺陷。当遭遇限流（429）时，Pi可能会“假死”数天，因为重试无法被用户中止。
    *   **社区反应：** 用户指出了内部实现的问题：使用了`setTimeout`，忽略了`AbortSignal`。
    *   **链接：** [Issue #6911](https://github.com/earendil-works/pi/issues/6911)

4.  **[Bug] OAuth刷新时返回502错误不会被重试 (#6992)**
    *   **重要性：** 影响OAuth认证用户的登录稳定性。虽然Pi已将502视为可重试错误，但内部实现问题导致该规则未能生效。
    *   **社区反应：** 新提交的Bug，指出了内部合约不匹配的问题。
    *   **链接：** [Issue #6992](https://github.com/earendil-works/pi/issues/6992)

5.  **[Bug] OpenRouter缓存断点停止在工具结果之前 (#6940)**
    *   **重要性：** 影响通过OpenRouter使用Anthropic模型时的成本优化。缓存断点不前进意味着无法有效利用缓存。
    *   **社区反应：** 用户提供了详细的数据来说明问题。
    *   **链接：** [Issue #6940](https://github.com/earendil-works/pi/issues/6940)

6.  **[Bug] scoped-models 无法选择包含括号的模型ID (#6210)**
    *   **重要性：** 阻止用户使用名字中包含特殊字符的自定义模型或本地模型。
    *   **社区反应：** 此问题已存在一段时间，更新状态表明开发人员已标记为“进行中”。
    *   **链接：** [Issue #6210](https://github.com/earendil-works/pi/issues/6210)

7.  **[Bug] Ctrl+G 打开外部编辑器时，若临时目录文件过多会启动缓慢 (#6774)**
    *   **重要性：** 影响开发者日常使用体验。文件写入性能问题显著影响启动速度。
    *   **社区反应：** 贡献者已提交PR (#6903)来解决此问题。
    *   **链接：** [Issue #6774](https://github.com/earendil-works/pi/issues/6774)

8.  **[Bug] 动态系统提示导致意外缓存失效 (#6621)**
    *   **重要性：** 针对本地部署场景（如AMD Strix Halo）的性能优化问题。动态提示会破坏预填充缓存，大幅降低推理速度。
    *   **社区反应：** 用户提出了详细的场景分析和可能的解决方案。
    *   **链接：** [Issue #6621](https://github.com/earendil-works/pi/issues/6621)

9.  **[Bug] Pi 自动登出 GitHub (#6686)**
    *   **重要性：** 长期存在的Bug，影响日常使用体验，导致需要反复登录。
    *   **社区反应：** 用户引用了一个几个月前的旧Issue，表明此问题仍未彻底解决。
    *   **链接：** [Issue #6686](https://github.com/earendil-works/pi/issues/6686)

10. **[包报告] pi-goal-x 扩展存在跨会话干扰 (#6972)**
    *   **重要性：** 报告了潜在的安全或行为异常问题，一个扩展的行为会“泄露”到其他终端会话。
    *   **社区反应：** 标记为“恶意或不安全行为”，需社区关注。
    *   **链接：** [Issue #6972](https://github.com/earendil-works/pi/issues/6972)

### 🚀 重要 PR 进展

1.  **[PR] 使Provider重试可中断 (#6980)**
    *   **内容：** 修复 #6911。用自定义的可中断重试逻辑替换了OpenAI和Anthropic SDK的原生重试机制。
    *   **重要性：** **高**。直接解决了一个可能导致Pi长时间无响应的严重缺陷。
    *   **链接：** [PR #6980](https://github.com/earendil-works/pi/pull/6980)

2.  **[PR] 加速外部编辑器启动 (#6903)**
    *   **内容：** 修复 #6774。将临时文件写入`os.tmpdir()`改为写入私有`mkdtemp`子目录，避免因文件过多导致的性能问题。
    *   **重要性：** **高**。显著改善日常使用体验，提升启动速度。
    *   **链接：** [PR #6903](https://github.com/earendil-works/pi/pull/6903)

3.  **[PR] 支持原生OpenRouter OAuth (#6927)**
    *   **内容：** 为OpenRouter提供商新增原生OAuth支持，使用PKCE流程。
    *   **重要性：** **高**。简化用户认证流程，提升安全性和易用性。
    *   **链接：** [PR #6927](https://github.com/earendil-works/pi/pull/6927)

4.  **[PR] 在bash工具中暴露会话元数据 (#6967)**
    *   **内容：** 允许bash工具执行时访问当前Pi会话的元数据（如会话文件、Provider、模型等）。
    *   **重要性：** **高**。为扩展开发者和高级用户提供了强大的能力，让子进程和脚本能感知上下文。
    *   **链接：** [PR #6967](https://github.com/earendil-works/pi/pull/6967)

5.  **[PR] 使用Provider报告的实际成本 (#6881)**
    *   **内容：** 当API响应中包含计费成本时，优先使用该值，而不是依赖目录费率计算。
    *   **重要性：** **中**。提供更准确的成本显示，尤其对使用Vercel AI Gateway等中间件的用户。
    *   **链接：** [PR #6881](https://github.com/earendil-works/pi/pull/6881)

6.  **[PR] 新增 StepFun 提供商 (#6960)**
    *   **内容：** 为`models.dev`平台新增了四个StepFun API提供商，覆盖中国和全球路由。
    *   **重要性：** **中**。扩展了Pi可用的模型来源，为更多用户提供选择。
    *   **链接：** [PR #6960](https://github.com/earendil-works/pi/pull/6960)

7.  **[PR] 新增 Amazon Bedrock Mantle OpenAI 提供商 (#6216)**
    *   **内容：** 为Amazon Bedrock的Mantle服务新增了基于OpenAI兼容API的Provider。
    *   **重要性：** **中**。为使用AWS Bedrock的用户提供了新的、可能更高效的选择。
    *   **链接：** [PR #6216](https://github.com/earendil-works/pi/pull/6216)

8.  **[PR] 修复 Bedrock Converse 流的自适应思维兼容性 (#6984)**
    *   **内容：** 修复 #6986。使Bedrock提供商能正确处理需要特定格式（`compat.forceAdaptiveThinking`）的Claude模型。
    *   **重要性：** **中**。确保了与特定版本的Claude模型的兼容性。
    *   **链接：** [PR #6984](https://github.com/earendil-works/pi/pull/6984)

9.  **[PR] 添加 `AgentHarness` 执行工具 (#6916)**
    *   **内容：** 引入了一个新的`AgentHarnessTool`抽象，允许在工具执行时传递任意的应用特定上下文。
    *   **重要性：** **高**。这是架构层面的改进，为未来构建更复杂、更具感知能力的Agent工具奠定了基础。
    *   **链接：** [PR #6916](https://github.com/earendil-works/pi/pull/6916)

10. **[PR] 隔离测试环境 (#6965)**
    *   **内容：** 将测试套件运行在显式环境白名单中，隔离home、Git、npm等环境变量，并加强临时目录清理的安全性。
    *   **重要性：** **中**。增强测试的可靠性和安全性，避免测试间相互干扰。
    *   **链接：** [PR #6965](https://github.com/earendil-works/pi/pull/6965)

### 📈 功能需求趋势

社区对Pi的功能需求主要集中在以下方向：

*   **IDE/编辑器集成：** 强烈需求与VS Code等主流编辑器的原生集成，例如`#6985`（VS Code扩展请求）。这表明社区希望Pi能成为开发工作流中无缝的一部分。
*   **性能与基础设施：** 关注点集中在**本地推理 (Local Inference)**（如#6621）、**外部编辑器启动速度**（#6774），以及**测试隔离**（#6965）。用户对Pi自身的运行效率和资源占用非常敏感。
*   **新模型与提供商支持：** 社区持续关注对**Bedrock Mantle** (#6216)、**StepFun** (#6960) 等新兴API提供商的支持，以及对**OpenRouter OAuth** (#6927) 等更便捷认证方式的需求。
*   **用户体验改进：** 出现了对**MRU模型切换** (#6982) 和**CR审核路径**等精细化控制的需求，表明社区已经不满足于基础功能，开始寻求更符合个人习惯的工作流。

### 🔧 开发者关注点

从今日的数据中，开发者关注的核心痛点和需求包括：

1.  **Provider/代理的可靠性：** 这是今日讨论的绝对焦点。重试机制不可中断、OAuth刷新不重试、缓存断点失效等问题，都直接影响了用户体验和成本。开发者在寻求更健壮的底层网络和认证层。
2.  **模型兼容性不佳：** 无论是`Copilot Enterprise`的压缩失败，还是`bedrock-converse-stream`对特定模型的兼容问题，都表明不同Provider和模型间的适配仍需大量工作。特别是针对`adaptive thinking`等新特性的支持。
3.  **插件/扩展系统的完善：** 从扩展包画廊不可见（#6991）到扩展名称路径显示异常（#6619），开发者希望在扩展生态上获得更好的工具支持和一致性体验。
4.  **核心功能的稳定性：** 自动压缩不触发、模型选择器无法处理特殊字符等核心Bug，影响了工具的基础可用性。社区期待这些关乎日常使用的基础功能能保持稳定。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-07-23)

## 今日速览

- **CI 流水线频现故障**：`main` 分支的 E2E 测试及 nightly 发布流程均出现失败，团队已自动创建了跟踪 Issue（#7516、#7559），并有多项修复 PR 在同步推进。
- **冷启动性能优化持续推进**：#7264 关注的 ACP 子进程静态导入降级有了新讨论，同时 `perf(cli)` PR #7558 延迟了遥测初始化以改善启动速度。
- **更新检查机制遭遇大规模回归**：多个 Issue 报告 `qwen update` 及启动时版本检查失败（#7515、#7543、#7520），社区贡献者已提交修复 PR #7528 改用 `npm view`。

## 版本发布

| 版本 | 类型 | 说明 |
|------|------|------|
| v0.0.0-benchmark-poc.20260722.1 | 预发布 | 用于验证 GitHub Actions → ECS 工作节点 → GitHub 结果发布链路的基准测试 POC，非产品发布。 |

> 注意：今日无正式产品发布。

## 社区热点 Issues（10 条）

### 1. `#7516` Main CI 失败：E2E 测试  
- **标签**：`type/bug`, `status/ready-for-agent`, `autofix/skip`  
- **摘要**：`main` 分支 E2E 测试工作流在 commit `d064bd7` 上失败，机器人自动创建此 Issue。  
- **评论数**：5  
- **链接**：[#7516](https://github.com/QwenLM/qwen-code/issues/7516)  
- **关注点**：主 CI 稳定性直接影响所有 PR 合并，需优先排查。

### 2. `#7284` 侧查询强制禁用 thinking 导致 400 错误  
- **标签**：`priority/P1`, `type/bug`, `scope/model-switching`  
- **摘要**：`runSideQuery` 总是发送 `enable_thinking: false`，但某些 DashScope/TokenPlan 端点要求 `true`，导致 400 错误。  
- **评论数**：5  
- **链接**：[#7284](https://github.com/QwenLM/qwen-code/issues/7284)  
- **关注点**：P1 严重性，影响所有依赖侧查询的功能（如网页抓取、分类器），社区已有详细根因分析。

### 3. `#7264` 冷启动优化：剩余惰性加载候选  
- **标签**：`priority/P2`, `type/enhancement`, `scope/core`  
- **摘要**：基于 esbuild 元数据分析，ACP 子进程冷启动时静态导入 17.24 MiB / 2420 个模块，需进一步惰性加载。  
- **评论数**：4（持续更新）  
- **链接**：[#7264](https://github.com/QwenLM/qwen-code/issues/7264)  
- **关注点**：性能核心议题，直接影响首次响应延迟，社区讨论积极。

### 4. `#7306` 强化工具输出预算、可观测性与工件生命周期  
- **标签**：`priority/P2`, `type/enhancement`, `scope/core`  
- **摘要**：Phase 1 已合并（#7323, #7470），当前讨论 Phase 2 的合约细化。  
- **评论数**：4  
- **链接**：[#7306](https://github.com/QwenLM/qwen-code/issues/7306)  
- **关注点**：为 Agent 工具输出引入预算机制，防止资源耗尽，架构影响广。

### 5. `#7449` 提议：企业级外部记忆集成规范  
- **标签**：`priority/P3`, `type/feature-request`, `scope/memory`  
- **摘要**：提出一个供应商中立的**企业外部记忆集成规范**，第一阶段以文档为主，后续逐步添加兼容测试。  
- **评论数**：4  
- **链接**：[#7449](https://github.com/QwenLM/qwen-code/issues/7449)  
- **关注点**：社区对记忆扩展需求强烈，该提案为后续实现奠定接口基础。

### 6. `#7404` 启动后检查更新超时时间太短  
- **标签**：`priority/P3`, `type/bug`, `category/cli`  
- **摘要**：加载较长旧会话时，更新检查几乎必超时，用户体验差。  
- **评论数**：4  
- **链接**：[#7404](https://github.com/QwenLM/qwen-code/issues/7404)  
- **关注点**：中国用户常见痛点，社区提出增大超时阈值或改为后台异步检查。

### 7. `#7489` VS Code 插件：文件选择器插入 @filename 但不发送图片  
- **标签**：`type/bug`, `scope/vscode`  
- **摘要**：点击附件图标选择图片，仅在输入框插入 `@filename`，模型实际未收到图片内容。  
- **评论数**：3  
- **链接**：[#7489](https://github.com/QwenLM/qwen-code/issues/7489)  
- **关注点**：IDE 集成体验 bug，影响多模态使用场景。

### 8. `#6577` Windows 终端 Alt+V 无法粘贴截图  
- **标签**：`priority/P2`, `type/bug`, `scope/windows`  
- **摘要**：Windows PowerShell/Windows Terminal 中按 Alt+V 粘贴截图无反应。  
- **评论数**：3  
- **链接**：[#6577](https://github.com/QwenLM/qwen-code/issues/6577)  
- **关注点**：Windows 平台长期存在的粘贴快捷键问题，社区已提供初步调试信息。

### 9. `#5958` Web Shell 输入编辑器在移动端不可用  
- **标签**：`priority/P2`, `type/bug`, `scope/web-shell`  
- **摘要**：移动浏览器（iOS Safari / Android Chrome）中底部 CodeMirror 输入框无法正常使用。  
- **评论数**：3（近期更新）  
- **链接**：[#5958](https://github.com/QwenLM/qwen-code/issues/5958)  
- **关注点**：移动端适配需求持续增长，该 Issue 已开放近一个月，社区期待修复。

### 10. `#7559` Main CI 再次失败：E2E 测试  
- **标签**：`type/bug`, `status/ready-for-agent`, `autofix/skip`  
- **摘要**：`main` 分支 E2E 测试在 commit `95fc7ca` 上再次失败，与 #7516 类似。  
- **评论数**：2  
- **链接**：[#7559](https://github.com/QwenLM/qwen-code/issues/7559)  
- **关注点**：CI 稳定性连续出现问题，可能涉及测试环境或代码回归。

## 重要 PR 进展（10 条）

### 1. `#7563` fix(autofix): 超时后重试 Agent 反馈，而非跳过  
- **摘要**：Agent 在地址审查中超时后，不再推进 watermark，而是重试该反馈。  
- **链接**：[#7563](https://github.com/QwenLM/qwen-code/pull/7563)  
- **意义**：提升自动修复流程的可靠性，避免因超时导致反馈遗漏。

### 2. `#7548` fix(sdk-python): 校验 max_tool_calls 和 max_subagent_depth 为整数  
- **摘要**：与 max_session_turns 一致，拒绝布尔值和非整数输入。  
- **链接**：[#7548](https://github.com/QwenLM/qwen-code/pull/7548)  
- **意义**：Python SDK 参数类型安全性加固，防止错误输入导致运行时异常。

### 3. `#7560` fix(cli): 从 review 发布内容中移除角色代号和路径  
- **摘要**：继续清除 `/review` 中暴露的内部编码，提升输出可读性。  
- **链接**：[#7560](https://github.com/QwenLM/qwen-code/pull/7560)  
- **意义**：改善代码审查工具的输出质量，便于开发人员理解。

### 4. `#7463` feat(sdk-java): 添加 Daemon 传输支持  
- **摘要**：为 Java SDK 新增线程安全会话管理、独立提示/终端流式传输，版本 0.1.0-alpha。  
- **链接**：[#7463](https://github.com/QwenLM/qwen-code/pull/7463)  
- **意义**：重大功能扩展，使 Java 开发者可原生调用 Agent 服务，生态建设关键一步。

### 5. `#7529` fix(core): 修正 humanReadableCron 名称生成（*/N 步进）  
- **摘要**：当 `*/N` 不实际发生时（如 `*/3` 在只有 2 天的月份），回退为原始表达式。  
- **链接**：[#7529](https://github.com/QwenLM/qwen-code/pull/7529)  
- **意义**：修复 cron 表达式友好化函数中的语义错误，避免误导用户。

### 6. `#7528` Fix(cli): 使用 `npm view` 替代 update-notifier 进行版本检查  
- **摘要**：响应 #7515，改用 `npm view` 命令绕过 registry 兼容性问题。  
- **链接**：[#7528](https://github.com/QwenLM/qwen-code/pull/7528)  
- **意义**：解决近期普遍报告“检查更新失败”的社区热点问题，社区贡献者提交。

### 7. `#7562` feat(autofix): 自动重试因基础设施故障而失败的检查  
- **摘要**：当自托管 runner 宕机或磁盘满导致检查失败时，自动重试一次，防止持卡。  
- **链接**：[#7562](https://github.com/QwenLM/qwen-code/pull/7562)  
- **意义**：增强 CI/CD 弹性，减少人工介入。

### 8. `#7517` feat(core): 添加 Goal v3 状态协议  
- **摘要**：作为 #7494 的第一个独立可审查模块，定义了生命周期状态、乐观并发控制、确定性转换等。  
- **链接**：[#7517](https://github.com/QwenLM/qwen-code/pull/7517)  
- **意义**：推动 Agent 目标管理状态协议版本升级，为后续多 Agent 协作铺垫。

### 9. `#7531` fix(core): 修复 AUTO 破坏性 Git 保护中的漏洞  
- **摘要**：补充对 `git clean` 和 `git checkout` 某些拼写的拦截，确保保护完整。  
- **链接**：[#7531](https://github.com/QwenLM/qwen-code/pull/7531)  
- **意义**：安全防护增强，防止 Agent 意外执行破坏性 Git 操作。

### 10. `#7554` feat(autofix): 自动更新因合并了已修复的 faulty base 而变红的 PR  
- **摘要**：当 PR 仅因之前合并的 `main` 存在 bug 而失败（且 bug 已修复）时，自动 merge 当前 main。  
- **链接**：[#7554](https://github.com/QwenLM/qwen-code/pull/7554)  
- **意义**：进一步自动化 PR 维护流程，减少不必要的人工 rebase。

## 功能需求趋势

从近期 Issue 和 PR 中可看出社区关注的方向：

1. **记忆集成扩展**：企业级外部记忆规范（#7449）表明社区希望接入更持久的上下文存储。  
2. **多平台支持**：Windows 粘贴问题（#6577）、移动端 Web Shell（#5958）、npm 12 兼容性（#7520）反映跨平台适配需求强烈。  
3. **CI/CD 自动化增强**：多个 autofix 相关 PR 转向自动重试、自动更新 base，表明团队在减少手动运维。  
4. **性能与冷启动优化**：冷启动模块惰性加载（#7264）、遥测延迟初始化（#7558）是核心性能焦点。  
5. **安全加固**：环境变量泄露（#6601）、Git 破坏性操作保护（#7531）说明安全审计持续进行。  
6. **VS Code 集成增强**：图片附件功能（#7489）、Git 模式选择器（#7471）表明 IDE 插件功能在加速。  
7. **更新机制可靠性**：多个更新失败的 Issue 推动了改用 `npm view`（#7528）的方案。  
8. **工具输出与预算管理**：#7306 推动工具输出更可观测、可预算，防止资源滥用。

## 开发者关注点

- **更新检查大面积失败**：从 #7515、#7543、#7520 等多个 Issue 看，`qwen update` 和启动时版本检查在多种环境下报错，成为近期最高频痛。  
- **主 CI 不稳定**：E2E 测试连续两日失败（#7516、#7559），且有核心测试套件红在 main 上（#7537），影响所有 PR 的 CI 状态。  
- **IDE 集成细节问题**：图片附件不发送（#7489）、TUI 恢复后有空白区域（#7485）等影响用户日常体验。  
- **冷启动延迟**：虽为已知问题，但社区对 17 MiB 静态导入的开销持续关注，期望更快反馈。  
- **端口占用后的打开错误**：`--open` 使用旧端口（#7500）等问题导致 Web Shell 启动体验打折扣。  
- **日期处理不一致**：`/insight` 工具在 UTC 与本地时间间混淆（#6835），影响 ASCII 热图准确性，需用户主动关注。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 | 2026-07-23

**数据来源**: [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale)（DeepSeek TUI 基于 CodeWhale 项目）

---

## 今日速览

- **v0.9.1 发布在即**：社区已完成技能管理器、Kimi 模型修复、TUI 优化等关键 PR 的合并，目前正进行发布前的安全扫描（#4713）和最后一批 stop-ship 级别 bug 修复（#4716、#4719）。
- **多个阻塞性 bug 被集中报告**：包括 macOS 下 TUI 直接退出、大段粘贴内容损坏、自定义提供商启动失败等，开发者正在紧急处理。
- **技能系统成为社区焦点**：统一 `/skills` 管理器和默认技能包已合并，标志着 CodeWhale 在“模型调用的工作流”能力上对标 Kimi Code、Devin CLI 等竞品。

---

## 社区热点 Issues（10 个）

1. **[#2870] EPIC: staged command-boundary refactor**  
   - 评论：17 | 状态：OPEN  
   - 说明：将命令边界重构拆分为多个可合并的小层，涉及 TUI、文档和 v0.9.2 里程碑，是底层架构调整的核心追踪 issue。  
   - 链接：https://github.com/Hmbown/CodeWhale/issues/2870

2. **[#4227] feat: 🐋 help JayBeest map the CodeWhale tsunami 🌊**  
   - 评论：12 | 状态：OPEN  
   - 说明：一个技能/工作流，帮助贡献者搭建和维护开发环境，尤其适配项目的高迭代速度（每天 10+ PR）。社区参与度高，体现了贡献者工具链需求。  
   - 链接：https://github.com/Hmbown/CodeWhale/issues/4227

3. **[#4085] Cannot read/write files under ~/Library/CloudStorage/Dropbox/ (macOS File Provider)**  
   - 评论：4 | 状态：OPEN  
   - 说明：macOS 12+ 下默认 Dropbox 路径无法读写，非沙箱问题，涉及文件系统权限。影响使用云存储的用户。  
   - 链接：https://github.com/Hmbown/CodeWhale/issues/4085

4. **[#4713] v0.9.1 security gate: deep scan and dependency alert disposition**  
   - 评论：3 | 状态：OPEN  
   - 说明：v0.9.1 发布前的安全审查 gate，当前有 17 个 Dependabot 警报（7 高、10 中），涉及 axios、braces 等 npm 依赖。阻碍发布的检查项。  
   - 链接：https://github.com/Hmbown/CodeWhale/issues/4713

5. **[#4719] Composer: large pasted prompts get byte-corrupted before submission**  
   - 评论：2 | 状态：OPEN  
   - 说明：大段粘贴内容在提交前被截断或字符丢失，导致路径被错误解析。模型错误地表示“候选路径不存在”。严重体验缺陷。  
   - 链接：https://github.com/Hmbown/CodeWhale/issues/4719

6. **[#4716] TUI: codew/codewhale exits immediately on launch ("[Process completed]") in a fresh terminal [stop-ship]**  
   - 评论：1 | 状态：OPEN  
   - 说明：macOS 下全新终端打开 `codew` 立即退出，TUI 无法保持。v0.9.1 候选版本已复现，被标记为 stop-ship。  
   - 链接：https://github.com/Hmbown/CodeWhale/issues/4716

7. **[#4684] danger-full-access does not disable tools-layer workspace boundary check, breaking global skill access**  
   - 评论：2 | 状态：OPEN  
   - 说明：危险模式并未完全禁用工具层（read_file 等）的工作区边界检查，阻止全局技能访问。安全与灵活性的平衡问题。  
   - 链接：https://github.com/Hmbown/CodeWhale/issues/4684

8. **[#4685] CodeWhaleSetup.exe installer overwrites user PATH environment variable on Windows 10**  
   - 评论：1 | 状态：OPEN  
   - 说明：Windows 安装程序覆盖用户 PATH 而非追加，导致已有工具链失效。Windows 用户的重要阻塞问题。  
   - 链接：https://github.com/Hmbown/CodeWhale/issues/4685

9. **[#4682] Setting a custom provider causes launch failure**  
   - 评论：1 | 状态：OPEN  
   - 说明：将模型提供商设为自定义名称后，CodeWhale 无法启动。影响自定义 API 兼容的用户。  
   - 链接：https://github.com/Hmbown/CodeWhale/issues/4682

10. **[#4681] <turn_meta> blocks are displayed when reopening a session**  
    - 评论：1 | 状态：OPEN  
    - 说明：重新打开会话后，每条用户消息下方会显示 `<turn_meta>` 块，正常运行时是隐藏的。回归性 UI bug。  
    - 链接：https://github.com/Hmbown/CodeWhale/issues/4681

---

## 重要 PR 进展（10 个）

1. **[#4679] feat(skills): unified /skills manager with audit and owned mutations**  
   - 状态：CLOSED（已合并）  
   - 说明：交付统一 `/skills` 管理器，支持清单、审计、安装/导入、更新、移除和信任。面向 v0.9.1 的核心功能。  
   - 链接：https://github.com/Hmbown/CodeWhale/pull/4679

2. **[#4695] feat(skills): default CodeWhale skill pack (bundled v5)**  
   - 状态：CLOSED（已合并）  
   - 说明：内置 v0.9.1 默认技能包，包括 interview、plan、implement、debug 等 15 个端到端技能，对标 Claude Code 等工作流。  
   - 链接：https://github.com/Hmbown/CodeWhale/pull/4695

3. **[#4675] Integrate CodeWhale v0.9.1 runtime and release surface**  
   - 状态：CLOSED（已合并）  
   - 说明：v0.9.1 运行时简化、空工作区修复、最终 TUI 颜色语法（模式边缘冷暖色、权限色等）的大集成 PR。  
   - 链接：https://github.com/Hmbown/CodeWhale/pull/4675

4. **[#4694] fix(kimi): fail closed on K3 model-ID cross-pairings**  
   - 状态：CLOSED（已合并）  
   - 说明：修复 Kimi 端点与模型 ID 的两种错误配对（`kimi-k3` vs `k3`），失败时关闭而非静默使用错误模型。  
   - 链接：https://github.com/Hmbown/CodeWhale/pull/4694

5. **[#4711] fix(tui): focus v0.9.1 chrome on todos and agents**  
   - 状态：CLOSED（已合并）  
   - 说明：重构顶部栏，仅显示活跃的待办事项和子代理；使分割线可拖动并持久化边界；主题本地化。  
   - 链接：https://github.com/Hmbown/CodeWhale/pull/4711

6. **[#4693] fix(tui): Work summary lifecycle, actionable title, and top-area hierarchy**  
   - 状态：CLOSED（已合并）  
   - 说明：修复三个 v0.9.1 工作区阻塞问题：最近工作摘要 4 秒过期、标题标准化、返回/取消修复。  
   - 链接：https://github.com/Hmbown/CodeWhale/pull/4693

7. **[#4714] chore(deps): patch npm lockfiles for Dependabot alerts**  
   - 状态：OPEN  
   - 说明：通过 `npm audit fix` 解决 17 个 Dependabot 警报（7 高、10 中），是安全 gate 的手动补充。  
   - 链接：https://github.com/Hmbown/CodeWhale/pull/4714

8. **[#4722] fix(tui): show complete edit previews in details**  
   - 状态：OPEN  
   - 说明：保持 `edit_file` 审批卡紧凑，在 Alt+V 详情分页器中延迟渲染完整的 `-/+` 搜索替换差异，并添加回归测试。  
   - 链接：https://github.com/Hmbown/CodeWhale/pull/4722

9. **[#4610] feat(tui): add configurable session token header**  
   - 状态：OPEN  
   - 说明：引入 `tui.header_items` 配置，支持在 TUI 头部显示累计 token 消耗（输入、缓存命中、输出）。参考 #4520。  
   - 链接：https://github.com/Hmbown/CodeWhale/pull/4610

10. **[#4370] feat: add TelecomJS provider support with configuration and catalog**  
    - 状态：CLOSED（已合并）  
    - 说明：添加江苏电信（TelecomJS）模型提供商支持，修复自定义提供商下模型列表只显示一个模型的问题。  
    - 链接：https://github.com/Hmbown/CodeWhale/pull/4370

---

## 功能需求趋势

从近期 Issue 和 PR 中可以提炼出社区最关注的几个功能方向：

1. **技能系统成熟化**：统一 /skills 管理器、内置技能包、与模型调用的工作流深度绑定（对标 Devin CLI、Claude Code）。
2. **TUI 体验精致化**：工作区生命周期、颜色语义层次、暗/亮主题一致性、可拖动分割栏、信息密度控制。
3. **多模型/提供商支持**：自定义提供商、TelecomJS、Kimi 模型 ID 修复、DeepSeek URL 稳定性。
4. **协作与环境适配**：macOS Dropbox 文件支持、Windows 安装程序 PATH 保护、沙箱边界控制。
5. **安全与依赖管理**：发布前安全门禁、Dependabot 警报处理、权限声明规范化。

---

## 开发者关注点

近期社区反馈中高频出现的痛点：

- **安装与配置问题**：Windows 安装程序覆盖 PATH、macOS 下 TUI 无法启动、自定义提供商配置导致崩溃，成为新用户上车的主要障碍。
- **输入与模型交互缺陷**：大段粘贴内容损坏、`<turn_meta>` 块意外显示、`/provider` 设置后启动失败，直接影响日常使用。
- **文件系统权限争议**：Dropbox 路径不可读写、“danger-full-access”模式并未真正解除工具层限制，需更清晰的边界策略。
- **信息密度控制**：TUI 工作区显示过多协调信息、重复的“Option+V”提示、推理状态堆叠，用户希望更简洁的默认视图。
- **发布节奏**：v0.9.1 多次“即将发布”但反复出现 stop-ship bug，社区期待稳定版本的快速落地。

---

*本日报由 AI 自动生成，数据截止 2026-07-23 02:00 UTC。*

</details>

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*