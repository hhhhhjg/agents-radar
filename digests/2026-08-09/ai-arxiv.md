# 实验室研究方向 Radar 2026-08-09

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 0 篇新文献 + 23 篇过去14天内已出现 | 生成时间：2026-08-08 22:22 UTC

---

## 今日总览

- **LLM Agent 与多智能体 / LLM Agent 工程**：今日暂无新论文；过去14天文献集中在运行时 harness、风险护栏、技能库管理与资源感知评估等工程化主题。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：今日暂无新论文；过去14天文献提出测试时细化自校正优于扩大采样的低成本推理扩展路径。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：今日暂无新论文；过去14天文献围绕 VLA 后训练、跨具身泛化、技能记忆与空间评测展开。
- **具身智能 / 具身导航**：今日暂无新论文；过去14天文献揭示 VLM 控制机器人面临物理提示注入攻击的新安全挑战。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：今日暂无新论文。
- **模型压缩与持续学习 / 多模态大模型剪枝**：今日暂无新论文。
- **模型压缩与持续学习 / 持续学习**：今日暂无新论文；过去14天文献从范式综述与遥感图文检索应用两个层面推进持续学习。
- **视觉感知 / 事件相机视觉感知**：今日暂无新论文；过去14天文献将事件信号引入反射去除，形成动态微视觉新范式。
- **视觉感知 / 3D 点云视觉感知**：今日暂无新论文；过去14天文献提出分层流匹配以更高效率生成高质量 3D 点云。
- **视觉感知 / 3D 点云感知与跟踪**：今日暂无新论文。

## LLM Agent 与多智能体

### LLM Agent 工程

#### 🔁 **【过去14天内已出现】** [EvoHarness-RL: Learning Self-Evolving Runtime Harness for Long-Horizon LLM Agents](http://arxiv.org/abs/2608.05446v1)
🔁 **【过去14天内已出现】** X. Ning | 2026-08-05 | 核心：用强化学习训练自进化运行时 harness，同时解决状态形成与运行时分派。关联：直接增强长时程 LLM Agent 的外部执行支撑能力。

#### 🔁 **【过去14天内已出现】** [DreamGuard: Efficient Runtime Guardrail for LLM Agents via Risk-Aware World Model](http://arxiv.org/abs/2608.05695v1)
🔁 **【过去14天内已出现】** W. Lin | 2026-08-06 | 核心：用风险感知世界模型在动作执行前评估风险，实现高效运行时护栏。关联：为 LLM Agent 工具调用与真实系统交互提供安全防护层。

#### 🔁 **【过去14天内已出现】** [EnvACE: Internalizing Environment Dynamics via World Rehearsal for Agentic Reinforcement Learning](http://arxiv.org/abs/2608.06197v1)
🔁 **【过去14天内已出现】** Z. Xu | 2026-08-06 | 核心：通过世界排练让 agent 内化环境动力学，减少对真实或合成环境的依赖。关联：为长时程工具型 Agent 的强化学习训练提供低成本替代方案。

#### 🔁 **【过去14天内已出现】** [When Self-Evolution Backfires: Pre-Commit Gating against Skill Contamination in LLM Agents](http://arxiv.org/abs/2608.05810v1)
🔁 **【过去14天内已出现】** L. Shang | 2026-08-06 | 核心：发现技能库规模过大会引发能力污染，提出 pre-commit gating 缓解。关联：揭示自我进化 Agent 技能管理的非单调性并给出干预策略。

#### 🔁 **【过去14天内已出现】** [Learning Globally Reusable Skills for Coding Agents](http://arxiv.org/abs/2608.06153v1)
🔁 **【过去14天内已出现】** C. Yang | 2026-08-06 | 核心：将技能进化从局部更新扩展为全局技能关系建模，提升可复用性。关联：为编码 Agent 的自动化技能演化提供全局化方法。

#### 🔁 **【过去14天内已出现】** [SkillZip: Contract-Preserving Graph Compression for Scalable Agent Skill Libraries](http://arxiv.org/abs/2608.05604v1)
🔁 **【过去14天内已出现】** X. Tan | 2026-08-06 | 核心：用契约保持的图压缩在有限上下文预算下暴露最小充分技能集。关联：解决大规模 LLM Agent 技能库的上下文压缩与扩展瓶颈。

#### 🔁 **【过去14天内已出现】** [Causal Episodic Memory for Feedback-Driven Agent Repair](http://arxiv.org/abs/2608.05906v1)
🔁 **【过去14天内已出现】** K. N. H. Vo | 2026-08-06 | 核心：用因果情节记忆让 Text-to-SQL agent 无需参数更新即可复用修复经验。关联：为 LLM Agent 提供跨情节的反馈驱动修复机制。

#### 🔁 **【过去14天内已出现】** [SkillTV-Bench: Benchmarking How Well Judges Perform on Skill-Augmented Agentic Execution](http://arxiv.org/abs/2608.05573v1)
🔁 **【过去14天内已出现】** Z. Han | 2026-08-06 | 核心：评测 judge 模型对技能增强式 Agent 完整执行的验证能力。关联：为技能型 Agent 的程序化验证与评估提供基准。

#### 🔁 **【过去14天内已出现】** [EcoAgent-Bench: Evaluating Economic Decision-Making in Budget-Constrained LLM Agents](http://arxiv.org/abs/2608.05519v1)
🔁 **【过去14天内已出现】** J. Wu | 2026-08-06 | 核心：在预算约束下评估 Agent 的资源-收益权衡决策。关联：将资源使用纳入 Agent 评估指标体系，贴近真实部署成本。

#### 🔁 **【过去14天内已出现】** [AV-AIVAT: 74x Cheaper Agent Evaluation with Certified Anytime-Valid Stopping in Imperfect-Information Games](http://arxiv.org/abs/2608.06362v1)
🔁 **【过去14天内已出现】** B. Li | 2026-08-06 | 核心：用随时有效停止规则显著降低 Agent 对比评估所需对局数。关联：为高成本环境中 LLM Agent 的能力评估提供统计保证。

### Agent 测试时扩展与自我改进

#### 🔁 **【过去14天内已出现】** [Refining Over Resampling: Test-Time Self-Correction for LLM Reasoning](http://arxiv.org/abs/2608.05643v1)
🔁 **【过去14天内已出现】** A. Bilal | 2026-08-06 | 核心：证明测试时生成新理由并修正旧答案比单纯扩大采样更有效。关联：为 LLM 推理的测试时扩展提供低成本的自我改进方向。

## 具身智能

### 视觉-语言-动作模型

#### 🔁 **【过去14天内已出现】** [In-Context VLA: Endowing Vision-Language-Action Models with Language via In-Context Post-Training and Agentic Tool Use](http://arxiv.org/abs/2608.05738v1)
🔁 **【过去14天内已出现】** J. Yang | 2026-08-06 | 核心：通过上下文后训练与 agentic 工具使用为 VLA 注入显式语言推理。关联：直接针对 VLA 行为克隆局限提出新训练范式。

#### 🔁 **【过去14天内已出现】** [Beyond Flat Policies: Hierarchical Post-Training for Embodied Agents in Robotic Manipulation](http://arxiv.org/abs/2608.05999v1)
🔁 **【过去14天内已出现】** H. Kong | 2026-08-06 | 核心：用分层后训练显式建模任务进度，克服扁平策略局限。关联：为 VLA 后训练引入层次化任务结构。

#### 🔁 **【过去14天内已出现】** [DyPES-VLA: Learning Shared Dynamics Priors and Embodiment-Specific Control for Cross-Embodiment Manipulation](http://arxiv.org/abs/2608.06374v1)
🔁 **【过去14天内已出现】** J. Li | 2026-08-06 | 核心：解耦共享动力学先验与具身特定控制，实现跨具身泛化。关联：解决异构机器人 VLA 的策略泛化问题。

#### 🔁 **【过去14天内已出现】** [SkillMemo: Expert-guided Skill Memory Framework for Compositional Embodied Manipulation](http://arxiv.org/abs/2608.05970v1)
🔁 **【过去14天内已出现】** C. Wang | 2026-08-06 | 核心：用专家引导技能记忆缓解具身轨迹数据稀缺。关联：提升 VLA/扩散策略在组合操作任务上的数据效率。

#### 🔁 **【过去14天内已出现】** [GST-Bench: Can VLMs Develop Global Spatial Awareness from Video?](http://arxiv.org/abs/2608.05747v1)
🔁 **【过去14天内已出现】** Q. Zhang | 2026-08-06 | 核心：从长时程视频评测 VLM 的全局空间意识。关联：为 VLA 与具身智能体的空间智能提供评测基准。

#### 🔁 **【过去14天内已出现】** [iARCS: Iterative Agentic RL for Controllable 3D Scene Generation](http://arxiv.org/abs/2608.06161v1)
🔁 **【过去14天内已出现】** S. Adhikari | 2026-08-06 | 核心：用迭代 agentic RL 生成满足功能约束的 3D 场景。关联：为下游 VLA/具身策略训练提供可控合成数据来源。

#### 🔁 **【过去14天内已出现】** [IcFuzz: Fuzzing Isaac Sim with Semantic Stage Guidance and Multi-level Mutation](http://arxiv.org/abs/2608.06088v1)
🔁 **【过去14天内已出现】** Z. Chen | 2026-08-06 | 核心：用语义阶段引导与多级变异对 Isaac Sim 进行模糊测试。关联：保障 VLA 训练与评估所依赖仿真环境的可靠性。

### 具身导航

#### 🔁 **【过去14天内已出现】** [Hijacking Robots with a Piece of Paper: A Systematic Study of Physical Prompt Injection in VLM-Controlled Robots](http://arxiv.org/abs/2608.05715v1)
🔁 **【过去14天内已出现】** S. M. B. P. Samarakoon | 2026-08-06 | 核心：用纸质物理提示注入劫持 VLM 控制机器人的行为。关联：暴露 VLM 规划器在具身导航等任务中的物理世界攻击面。

## 模型压缩与持续学习

### 持续学习

#### 🔁 **【过去14天内已出现】** [Continual Learning in Transition](http://arxiv.org/abs/2608.06216v1)
🔁 **【过去14天内已出现】** Z. Hou | 2026-08-06 | 核心：综述持续学习从参数中心机制向推理时适应、环境驱动等新范式过渡。关联：为持续学习方向提供范式级框架与前沿问题梳理。

#### 🔁 **【过去14天内已出现】** [DARAD: Dual Adapters and Ranking-Aware Distillation for Continual Remote Sensing Image-Text Retrieval](http://arxiv.org/abs/2608.06059v1)
🔁 **【过去14天内已出现】** X. Chen | 2026-08-06 | 核心：用双适配器与排序感知蒸馏缓解遥感分布漂移下的跨模态遗忘。关联：将持续学习能力落地到遥感图文检索任务。

## 视觉感知

### 事件相机视觉感知

#### 🔁 **【过去14天内已出现】** [EvReflection: Event-Driven Micro-Dynamics for Reflection Removal](http://arxiv.org/abs/2608.06184v1)
🔁 **【过去14天内已出现】** J. Wang | 2026-08-06 | 核心：利用事件信号建模反射/透射层微动态，消除反射残差。关联：为事件相机在底层视觉任务中的应用提供新思路。

### 3D 点云视觉感知

#### 🔁 **【过去14天内已出现】** [Hierarchical Flow Matching for 3D Point Cloud Generation](http://arxiv.org/abs/2608.05557v1)
🔁 **【过去14天内已出现】** L. Wang | 2026-08-06 | 核心：用分层流匹配以更低采样成本捕捉全局拓扑与局部几何细节。关联：提升 3D 点云生成效率与质量，可服务点云感知数据增强。

## 跨方向信号

1. **技能生命周期管理成为跨 Agent 与具身的共性趋势**：LLM Agent 侧关注技能提取、全局复用、压缩与评测（SkillZip、Learning Globally Reusable Skills、When Self-Evolution Backfires、SkillTV-Bench），具身侧则出现 SkillMemo 技能记忆框架，两个方向在技能持久化问题上形成呼应。
2. **显式结构化设计替代端到端黑盒**：LLM Agent 工程中的 EvoHarness-RL、EnvACE，与 VLA 侧的 Beyond Flat Policies、DyPES-VLA 均把环境动力学、任务进度、具身差异等结构显式建模，反映“解耦+结构化”的方法论扩散。
3. **推理时/运行时治理成为新战场**：Refining Over Resampling 将计算投入从训练转向测试时自校正；DreamGuard 在运行时拦截风险动作；AV-AIVAT 为评估阶段提供随时有效停止，三者共同表明 Agent 的收益正从训练期后移到推理期。
4. **仿真与合成数据基础设施是具身与感知的共同瓶颈**：IcFuzz 测试仿真器可靠性，iARCS 生成功能可控 3D 场景，Hierarchical Flow Matching 高效生成点云，合成数据的质量、可控性与可用性正在被提升至核心研究议程。

## 优先精读

1. **In-Context VLA**：该文直接挑战 VLA 行为克隆范式，将语言推理、后训练与工具使用结合，是具身智能最活跃方向上的代表性进展，值得完整阅读。
2. **EvoHarness-RL**：长时程 Agent 的运行时支撑是工程落地关键，自进化 harness 结合 RL 具有明确创新性，对 Agent 工程化有直接参考价值。
3. **When Self-Evolution Backfires**：首次指出技能库过大会引发“能力污染”相变，对技能库设计与自我进化机制具有警示意义，牵动 LLM Agent 工程与具身技能记忆两个方向。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*