# 实验室研究方向 Radar 2026-08-21

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 21 篇新文献 + 17 篇过去14天内已出现 | 生成时间：2026-08-20 22:20 UTC

---

## 今日总览

- **LLM Agent 工程**：新论文聚焦 agent 可审计性、威胁情报语料脚手架、长期竞争决策、人机/智能体协作增益，以及“AI 后训练 AI”的能力边界；过去 14 天已有 harness 安全、自演化 agent、社区极化、harnessed RL 等工作。
- **Agent 测试时扩展与自我改进**：新论文指出真实任务中测试时扩展的瓶颈在于“利用”而非“探索”，并提出自适应可执行环境自博弈；过去 14 天已有低 GPU 的 agent 优化方法与 regret 理论。
- **LLM Agent Society**：今日暂无新论文。
- **视觉-语言-动作模型**：新论文覆盖 VLA 视角标准化、第一人称视频表征、具身交互场景生成、本体部署边界；过去 14 天已有立体 token 路由、视觉线索跟随、安全预测等工作。
- **具身导航**：新论文关注长期场景记忆、驾驶场景统一表示、视障辅助前瞻导航；过去 14 天已有条件分支导航诊断与高效 VLM 导航框架。
- **LLM 剪枝与推理优化**：新论文以子 token 路由提升 VLA 多模态推理效率，可迁移至多模态 LLM 推理优化。
- **多模态大模型剪枝**：今日暂无新论文。
- **持续学习**：新论文提出 harness 状态持续学习、可逆遗忘，并揭示“共观察”作为遗忘与可塑性之外的第三维度；过去 14 天已有间隔重复回放、经验链改进等工作。
- **事件相机视觉感知**：今日暂无新论文。
- **3D 点云视觉感知**：新论文覆盖无参考点云质量评估和语言-4D 对比预训练。
- **3D 点云感知与跟踪**：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [LEDGER: Claim-to-Evidence Trace Graphs for Auditing LLM Agents](http://arxiv.org/abs/2608.18398v1)
作者：D. Kim, H. Miao, S. Liu | 发布：2026-08-19 | 核心：用“声明-证据”追溯图支持长流程 LLM agent 输出的结构化审计。关联：为 agent 工作流提供可核查可观测性。

#### [CTIFoundry: An Agent-Native Corpus Scaffold for Cyber Threat Intelligence](http://arxiv.org/abs/2608.18613v1)
作者：Y. Cheng, C. Li, Q. Cui et al. | 发布：2026-08-19 | 核心：为威胁情报 agent 构建语料脚手架，使多步调查检索更可靠。关联：补齐 agent harness 的语料侧支撑。

#### [FM-Bench: A Benchmark for Long-Horizon Management with Competing Agents](http://arxiv.org/abs/2608.18423v1)
作者：T. Wang, C. Gao, K. Chen et al. | 发布：2026-08-19 | 核心：以足球管理为场景，度量 agent 在长期累积后果与竞争环境中的决策能力。关联：提供长程 agent 工程新基准。

#### [CentaurBench: Benchmarking LLM Capabilities on Augmenting vs. Automating Real-World Work Tasks](http://arxiv.org/abs/2608.18554v1)
作者：P. K. Wongchamcharoen, K. Gulati, M. M. Fong et al. | 发布：2026-08-19 | 核心：区分“增强其他智能体”与“完全自动化”的能力。关联：指导 agent 在协作工作流中的角色配置。

#### [What is Missing from AI Post-Training AI: An Empirical Analysis](http://arxiv.org/abs/2608.19072v1)
作者：J. J. Y. Lim, X. Huang, H. Peng et al. | 发布：2026-08-19 | 核心：区分执行级与迭代级能力，分析 LLM agent 后训练另一 LLM 的缺口。关联：划定 agent 自治训练管线的能力边界。

#### 🔁 **【过去14天内已出现】** [HarnessRisk: A Lifecycle-Oriented Benchmark for Agent Harness Safety](http://arxiv.org/abs/2608.17597v1)
🔁 **【过去14天内已出现】**
作者：Y. Bai, J. Duan, J. Peng et al. | 发布：2026-08-18 | 核心：围绕 agent harness 全生命周期构建安全风险基准。关联：检验工具、权限、状态管理的工程安全性。

#### 🔁 **【过去14天内已出现】** [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](http://arxiv.org/abs/2608.17933v1)
🔁 **【过去14天内已出现】**
作者：L. Jiang, Y. Wei, X. Xi et al. | 发布：2026-08-18 | 核心：自演化 agent 自动选择金融时间序列变点检测算法与参数。关联：展示专业领域 agent 的工具选择与自我迭代。

#### 🔁 **【过去14天内已出现】** [GraphWake: Group Polarization via Memory-Mediated Polarization Cascade in LLM-Agent Communities](http://arxiv.org/abs/2608.17665v1)
🔁 **【过去14天内已出现】**
作者：H. Bu, Z. Chen, L. Zhang et al. | 发布：2026-08-18 | 核心：研究攻击者通过记忆介导级联放大操纵 LLM agent 社区极化。关联：揭示多 agent 社会系统的安全工程风险。

#### 🔁 **【过去14天内已出现】** [Agent Lightning v1.0: Towards Harnessed Agentic RL](http://arxiv.org/abs/2608.17528v1)
🔁 **【过去14天内已出现】**
作者：Z. He, S. Zhang, Z. Zhou et al. | 发布：2026-08-18 | 核心：通过 LLM endpoint 代理把任意 agent 接入 RL 训练。关联：为 agent harness 提供可扩展训练基座。

### Agent 测试时扩展与自我改进

#### [Test-Time Scaling in the Wild: Why Exploitation, Not Exploration, Is the Bottleneck](http://arxiv.org/abs/2608.18931v1)
作者：D. Romano, K. Raj, J. Parker et al. | 发布：2026-08-19 | 核心：真实分布任务中 TTS 瓶颈不是候选探索不足，而是对已有候选的开发不足。关联：直接改变测试时扩展的计算分配策略。

#### [SPADE: Self-Play in Adaptive Synthetic Executable Environments](http://arxiv.org/abs/2608.19197v1)
作者：B. Liu, S. Yu, Y. Jiang et al. | 发布：2026-08-19 | 核心：让语言 agent 在自适应合成可执行环境中自博弈，生成多样化目标并实现持续自我改进。关联：为自我改进提供动态目标分布。

#### 🔁 **【过去14天内已出现】** [Agentic ESOpt: Fine-Tuning Long-Horizon LLM Agents with Minimal GPU Requirements](http://arxiv.org/abs/2608.17310v1)
🔁 **【过去14天内已出现】**
作者：Z. Zheng, R. Chen, Y. Ba et al. | 发布：2026-08-18 | 核心：提出低 GPU 需求的演化策略优化，替代反向传播 RL 以微调长程 agent。关联：降低 agent 自我改进的训练成本。

#### 🔁 **【过去14天内已出现】** [The concentration game: Bayesian updating, regret, and information](http://arxiv.org/abs/2608.18061v1)
🔁 **【过去14天内已出现】**
作者：A. Balsubramani | 发布：2026-08-18 | 核心：用二人零和博弈统一贝叶斯更新与指数权重后悔值。关联：为测试时扩展的置信度与 regret 分析提供理论工具。

## 具身智能

### 视觉-语言-动作模型

#### [GS-VLA: Plug-and-Play Viewpoint Canonicalization for Frozen VLA Policies via Gaussian Splatting](http://arxiv.org/abs/2608.19066v1)
作者：Y. Park, H. Kim | 发布：2026-08-19 | 核心：用 3D Gaussian 新视角合成在推理时标准化观察视角，提升冻结 VLA 的视角鲁棒性。关联：免重训的 VLA 观测空间适配。

#### [Vision-Language Models for Egocentric Video: From Hand-Object Interaction to Embodied AI](http://arxiv.org/abs/2608.18671v1)
作者：M. Zamani, F. Ziaeetabar | 发布：2026-08-19 | 核心：讨论第一人称视频中的注意力、手物交互与目标行为对具身 AI 的价值。关联：为 VLA 提供第一人称视觉表征基础。

#### [Beyond Placement and Articulation: Usage-Driven Code Scenes for Embodied Interaction](http://arxiv.org/abs/2608.18840v1)
作者：Z. Xiao, Z. Ye, J. Hao et al. | 发布：2026-08-19 | 核心：提出“使用方式驱动”的代码化室内场景生成，支持具身交互。关联：为 VLA 策略学习提供可编辑交互场景。

#### [The Embodiment Gap in Robot Foundation Models](http://arxiv.org/abs/2608.18433v1)
作者：Y. Domae, K. Shirai, H. Oh et al. | 发布：2026-08-19 | 核心：指出机器人基础模型即使泛化，仍可能因本体/传感器差异无法部署。关联：界定 VLA 从仿真到实机的部署边界。

#### 🔁 **【过去14天内已出现】** [EATR-Stereo: Embodiment-Aware Token Routing of Paired Stereo Evidence for Humanoid Vision-Language-Action Control](http://arxiv.org/abs/2608.17453v2)
🔁 **【过去14天内已出现】**
作者：S. Wu, R. Zhao, F. Yang et al. | 发布：2026-08-18 | 核心：以具身感知 token 路由融合双目前置立体证据，兼容预训练表征。关联：为类人 VLA 提供立体视觉接口。

#### 🔁 **【过去14天内已出现】** [LIBERO-VIFO: Benchmarking the Capability and Safety of Visual Cue Following in Vision-Language-Action Models](http://arxiv.org/abs/2608.17600v1)
🔁 **【过去14天内已出现】**
作者：Z. Qian, R. Yan, A. J. Wang et al. | 发布：2026-08-18 | 核心：基准化 VLA 遵循授权视觉线索并拒绝非授权线索的能力。关联：VLA 安全与可控性评估。

#### 🔁 **【过去14天内已出现】** [CompCPZ: Preserving Multi-Modal Intent in Language-Guided Robot Manipulation](http://arxiv.org/abs/2608.17717v1)
🔁 **【过去14天内已出现】**
作者：Z. Zhang, A. Hafez, P. Xie et al. | 发布：2026-08-18 | 核心：解决“或”类多意图指令被策略错误收敛到中间态的问题。关联：提升 VLA 语言意图保真度。

#### 🔁 **【过去14天内已出现】** [Calibrated Predictive Safety for Heterogeneous Robots: An Action-Conditioned JEPA Framework with Model-Based Safety Shields](http://arxiv.org/abs/2608.17496v1)
🔁 **【过去14天内已出现】**
作者：K. Zhong, T. Liu, Y. Wang | 发布：2026-08-18 | 核心：用 action-conditioned JEPA 世界模型为异构机器人 VLA 提供校准安全预测。关联：为 VLA 增加执行时安全盾牌。

#### 🔁 **【过去14天内已出现】** [Teach and Grow: An Agent-Centered Architecture for General Robot Learning](http://arxiv.org/abs/2608.17209v1)
🔁 **【过去14天内已出现】**
作者：C. Nie, Z. Liu, H. Wang | 发布：2026-08-17 | 核心：在 VLA 覆盖不足时通过经验教学与增长机制扩展能力边界。关联：面向终身 VLA/世界模型学习。

### 具身导航

#### [LT-Mem: Volatility-Aware Spatio-Temporal Memory for Lifelong Scene Understanding](http://arxiv.org/abs/2608.19059v1)
作者：Y. Lee, H. Ju, G. Kim | 发布：2026-08-19 | 核心：感知场景时空波动性的长期记忆，保持跨访问周期的物体身份。关联：支撑长期机器人导航中的场景更新。

#### [USR-Drive: Unified Driving Scene Representation via Joint Denoising of 3D Gaussians and Boxes](http://arxiv.org/abs/2608.19036v1)
作者：L.-H. Chen, H. Pang, C. Su et al. | 发布：2026-08-19 | 核心：联合去噪 3D Gaussians 与边界框，统一驾驶场景的结构与渲染表示。关联：提升自动驾驶/导航的空间表示学习。

#### [ForeSightGuide: An Anticipatory Framework toward Accurate and Low-Redundancy Guidance for the Visually Impaired](http://arxiv.org/abs/2608.18993v1)
作者：Z. Wang, X. Li, S. Guo et al. | 发布：2026-08-19 | 核心：为视障者构建前瞻导航引导，降低动态场景误报与认知负荷。关联：辅助具身导航的实用化。

#### 🔁 **【过去14天内已出现】** [Embodied-Navigator: Point, Think, Memorize, and Align for Efficient Navigation](http://arxiv.org/abs/2608.17512v1)
🔁 **【过去14天内已出现】**
作者：H. Feng, S. Chen, X. Liu et al. | 发布：2026-08-18 | 核心：通过指向、思考、记忆和对齐使 VLM 适配高效具身导航。关联：直接改进 VLM 导航行为空间。

#### 🔁 **【过去14天内已出现】** [If, Then, Otherwise: Diagnosing Conditional Branching in Vision-Language Navigation](http://arxiv.org/abs/2608.17318v1)
🔁 **【过去14天内已出现】**
作者：S. Lee, N. P. Bhatt, P. Samineni et al. | 发布：2026-08-18 | 核心：诊断视觉语言导航模型在条件分支指令上的缺陷。关联：补足导航指令理解中的状态依赖推理。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [Role-Conditioned Sub-Token Routing for Efficient Vision-Language-Action Policies](http://arxiv.org/abs/2608.18410v1)
作者：W. Jiang, W. Wang | 发布：2026-08-19 | 核心：通过角色化子 token 路由降低 VLA 多模态长序列推理成本。关联：为多模态 LLM/VLA 提供 token 级推理优化。

### 持续学习

#### [Forgetting, plasticity, and co-observation: a third facet of continual learning](http://arxiv.org/abs/2608.18803v1)
作者：T. Hess, A. Jha, G. M. van de Ven et al. | 发布：2026-08-19 | 核心：提出 co-observation 作为灾难性遗忘和可塑性丧失之外的第三维度。关联：重新定义持续学习性能差距来源。

#### [Harness Continual Learning: Continual Adaptation Beyond Model Parameters](http://arxiv.org/abs/2608.19013v1)
作者：B. Kang, J. Gu, J. Lv et al. | 发布：2026-08-19 | 核心：将提示、记忆、工具、技能、路由规则等 harness 内容纳入持续学习状态。关联：连接持续学习与 LLM Agent 工程。

#### [Towards Reversible Forgetting: Managing Obsolete Knowledge in Continual Enterprise AI Agents](http://arxiv.org/abs/2608.18177v1)
作者：N. Sarker Yash, T. Roy, U. Bhattacharjee | 发布：2026-08-18 | 核心：提出可逆遗忘，使企业 agent 主动废弃过期知识并可按需恢复。关联：扩展持续学习中“遗忘”的功能价值。

#### 🔁 **【过去14天内已出现】** [When to Review: Spaced Repetition for Continual Pre-Training of Language Models](http://arxiv.org/abs/2608.17530v1)
🔁 **【过去14天内已出现】**
作者：A. Atreya, D. Batra, Y. K. Mantri et al. | 发布：2026-08-18 | 核心：用间隔重复调度选择回放样本，改善连续预训练中的旧知识保持。关联：为 LLM 持续预训练提供自适应回放。

#### 🔁 **【过去14天内已出现】** [Chain-of-Experience for Continual LLM Improvement](http://arxiv.org/abs/2608.18027v1)
🔁 **【过去14天内已出现】**
作者：H. Tu, Y. Fang, Y. Wang et al. | 发布：2026-08-18 | 核心：研究 LLM 在测试时通过迭代经验交互持续改进的能力。关联：连接持续学习与推理时自我改进。

## 视觉感知

### 3D 点云视觉感知

#### [PCQA-R1: Advancing Generalized 3D Point Cloud Quality Assessment with Reinforcement Learning](http://arxiv.org/abs/2608.18627v1)
作者：K. Ye, Y. Li, S. Wu et al. | 发布：2026-08-19 | 核心：用强化学习提升大模型在无参考点云质量评估上的泛化性。关联：推进 3D 点云感知中的质量度量。

#### [CL4D: Contrastive Language-4D Pretraining for Vision-Language Reasoning in Dynamic Scenes](http://arxiv.org/abs/2608.18734v1)
作者：K. Hewagamage, I. Senavirathne, S. Amarasinghe et al. | 发布：2026-08-19 | 核心：提出语言-4D 对比预训练，对齐动态点云与文本以支持时空推理。关联：增强 3D/4D 点云视觉表征。

## 跨方向信号

- 持续学习正从“模型参数”扩展到“prompt、memory、tool、harness”等 agent 状态，与 LLM Agent 工程明显交汇。
- VLA 部署化趋势并行出现：token 路由、Gaussian 视角标准化、安全世界模型共同指向低成本和可验证执行。
- 测试时扩展的重点从“生成更多候选”转向“更有效地利用已有候选”，影响 agent 自我改进的算法设计。
- 3D/4D 场景理解与导航融合：Gaussian-框联合表示、长期场景记忆、语言-4D 预训练共同推动具身空间智能。

## 优先精读

1. **Test-Time Scaling in the Wild**：挑战“探索不足”的主流假设，指出真实任务 TTS 瓶颈在“利用”，会直接改变测试时扩展的调度与评估方式。
2. **Harness Continual Learning**：把 harness 内容作为持续学习状态，横跨持续学习与 Agent 工程，是 agent 长期适应的新范式。
3. **GS-VLA**：用 3D Gaussian 新视角合成为冻结 VLA 做视角标准化，轻量、免重训且可插拔，代表 VLA 部署优化的重要方向。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*