# 实验室研究方向 Radar 2026-08-22

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 24 篇新文献 + 12 篇过去14天内已出现 | 生成时间：2026-08-21 22:17 UTC

---

# 研究方向 Radar

## 今日总览

- **LLM Agent 与多智能体 — LLM Agent 工程**：今日 10 篇新论文，聚焦技能选择与迁移、策略合规、记忆澄清、工具缓存、信用分配等工程化问题。
- **LLM Agent 与多智能体 — Agent 测试时扩展与自我改进**：今日 1 篇新论文，关注自适应测试时计算分配；另有 2 篇过去 14 天内已出现的相关文献。
- **LLM Agent 与多智能体 — LLM Agent Society**：今日暂无新论文。
- **具身智能 — 视觉-语言-动作模型**：今日 7 篇新论文，集中在 VLA 安全、高效微调、持续技能学习、驾驶规划与手部动作数据。
- **具身智能 — 具身导航**：今日暂无新论文；过去 14 天内已有场景记忆、驾驶表示、视障导航等重复文献。
- **模型压缩与持续学习 — LLM 剪枝与推理优化**：今日 1 篇新论文，面向 VLM 视觉 token 聚类与去噪加速。
- **模型压缩与持续学习 — 多模态大模型剪枝**：今日暂无新论文。
- **模型压缩与持续学习 — 持续学习**：今日 4 篇新论文，覆盖联邦持续学习、LLM 适配、类脑机制等；另有 2 篇过去 14 天内已出现的文献。
- **视觉感知 — 事件相机视觉感知**：今日暂无新论文。
- **视觉感知 — 3D 点云视觉感知**：今日 1 篇新论文，关于开放词汇 3D 检测；另有 2 篇过去 14 天内已出现的文献。
- **视觉感知 — 3D 点云感知与跟踪**：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [PolicyGuide: From Guarding One Action to Guiding the Whole Workflow for Policy-Compliant LLM Agents](http://arxiv.org/abs/2608.19861v1)
S. Kang et al. ｜ 2026-08-20 ｜ 核心贡献：将策略合规从单动作守卫扩展为全工作流引导。 ｜ 关联：客服 LLM Agent 的策略执行与流程控制。

#### [Optimal Skill Selection for LLM Agents with Provable Bicriteria Guarantees](http://arxiv.org/abs/2608.19993v1)
Y. Chen et al. ｜ 2026-08-20 ｜ 核心贡献：在有界上下文中为技能选择提供可证明双目标保证。 ｜ 关联：技能装载与选择是 LLM Agent 工程的核心环节。

#### [Break It Down, Pass It On: Cross-Task Skill Transfer in LLM Agents](http://arxiv.org/abs/2608.20274v1)
Y. Feng et al. ｜ 2026-08-20 ｜ 核心贡献：分析 Agent 归纳技能跨任务迁移的可靠条件，减少负迁移。 ｜ 关联：决定 Agent 经验复用的安全性。

#### [ReCache: Efficient KV Cache Reuse and Compression for Tool-Augmented LLM Agents](http://arxiv.org/abs/2608.19662v1)
Y. Fang et al. ｜ 2026-08-20 ｜ 核心贡献：独立缓存工具与 skill schema 的 KV 状态并压缩复用。 ｜ 关联：提升工具型 Agent 的推理效率。

#### [Credit Without Ground Truth: Auditing Step-Level Credit Assignment in LLM Agents Against Executed Replay](http://arxiv.org/abs/2608.19760v1)
H. Zhang ｜ 2026-08-20 ｜ 核心贡献：用执行回放作为因果基准，审计 Agent 步骤级信用信号。 ｜ 关联：为 Agent 训练中的信用分配提供审计方法。

#### [Remember, Verify, or Ask? Cross-Family Evaluation of Memory Commitment in LLM Agents](http://arxiv.org/abs/2608.19564v1)
B. Li et al. ｜ 2026-08-20 ｜ 核心贡献：提出记忆-澄清边界，判断交互信息应持久化、核验还是询问用户。 ｜ 关联：Agent 持久记忆的可靠更新机制。

#### [ReguSim: Evaluating LLM Agent Rule Grounding in Financial Compliance](http://arxiv.org/abs/2608.19974v1)
Y. Luo et al. ｜ 2026-08-20 ｜ 核心贡献：构造金融合规环境，分离规则引用、可执行约束与监督证据。 ｜ 关联：金融 Agent 的规则落地与行为合规。

#### [MileGPO: Milestone Inference with Local Evidence for Graph-Based Policy Optimization of Long-Horizon LLM Agents](http://arxiv.org/abs/2608.19803v1)
B. Qian et al. ｜ 2026-08-20 ｜ 核心贡献：用里程碑推断和局部证据改进长程 Agent 的稀疏奖励信用分配。 ｜ 关联：长程任务强化学习是 Agent 工程难题。

#### [AI4AI-Bench: Benchmarking LLM Agents in Algorithmic Design for Recursive Self-Improvement](http://arxiv.org/abs/2608.20318v1)
Y. Chi et al. ｜ 2026-08-20 ｜ 核心贡献：提出递归自我改进基准，让 Agent 改进训练算法本身。 ｜ 关联：Agent 自改进能力评测。

#### [Mitigating Identity Essentialism in LLM Agents with Longitudinal Life Trajectories](http://arxiv.org/abs/2608.19621v1)
H. Wang et al. ｜ 2026-08-20 ｜ 核心贡献：用纵向生活轨迹构造 Agent，缓解身份本质主义并提升社会模拟多样性。 ｜ 关联：Agent 个体建模与社会模拟工程。

### Agent 测试时扩展与自我改进

#### [Learning When to Think: Adaptive Reasoning for Test-Time Compute Allocation](http://arxiv.org/abs/2608.20256v1)
G. Kassenaar et al. ｜ 2026-08-20 ｜ 核心贡献：让推理模型学习自适应分配自身测试时计算预算。 ｜ 关联：直接研究测试时扩展中的自适应计算分配。

#### 🔁 **【过去14天内已出现】** [Test-Time Scaling in the Wild: Why Exploitation, Not Exploration, Is the Bottleneck](http://arxiv.org/abs/2608.18931v1)
🔁 **【过去14天内已出现】** ｜ D. Romano et al. ｜ 2026-08-19 ｜ 核心贡献：指出真实世界任务中 TTS 的主要瓶颈是利用而非探索。 ｜ 关联：为测试时扩展的适用范围提供实证边界。

#### 🔁 **【过去14天内已出现】** [SPADE: Self-Play in Adaptive Synthetic Executable Environments](http://arxiv.org/abs/2608.19197v1)
🔁 **【过去14天内已出现】** ｜ B. Liu et al. ｜ 2026-08-19 ｜ 核心贡献：用自适应合成可执行环境中的自博弈持续生成新目标。 ｜ 关联：属于 Agent 自我改进与自博弈训练环境。

## 具身智能

### 视觉-语言-动作模型

#### [EXIMO: VLM Guided Exploration of VLA Policies](http://arxiv.org/abs/2608.19891v1)
B. Sukhija et al. ｜ 2026-08-20 ｜ 核心贡献：用 VLM 引导探索在线微调 VLA 策略，快速学习新任务。 ｜ 关联：面向 VLA 的高效少样本/在线微调。

#### [OrthoSkillVLA: Continual Skill Learning via Gradient-Informed Skill Subspace Adaptation](http://arxiv.org/abs/2608.19589v1)
J. Wang et al. ｜ 2026-08-20 ｜ 核心贡献：用梯度信息子空间适配实现 VLA 持续技能学习并缓解灾难性遗忘。 ｜ 关联：VLA 与持续学习的交叉方向。

#### [Fine-Tuning VLAs with Self-Demonstrated Generative Control for Multi-Task Manipulation](http://arxiv.org/abs/2608.19490v1)
P. Garg et al. ｜ 2026-08-19 ｜ 核心贡献：用自演示生成控制信号微调 VLA，适配新机器人硬件。 ｜ 关联：VLA 跨本体部署与微调。

#### [SafeBranch: Branch-Pair Safety Alignment for Embodied Agents](http://arxiv.org/abs/2608.19729v1)
H. Lee et al. ｜ 2026-08-20 ｜ 核心贡献：通过分支对安全对齐训练具身 Agent，在保证任务成功的同时满足安全约束。 ｜ 关联：VLA 具身 Agent 的安全对齐。

#### [Planning-Oriented End-to-End Autonomous Driving: Architectures, Evaluation, and Emerging Paradigms](http://arxiv.org/abs/2608.20111v1)
Y. Guan et al. ｜ 2026-08-20 ｜ 核心贡献：综述端到端自动驾驶从行为克隆到规划导向架构的演进。 ｜ 关联：VLA 在驾驶规划与具身决策中的应用。

#### [DreamHand: Repurposing Video Diffusion Models for Occlusion-Robust Egocentric 3D Hand Motion Recovery](http://arxiv.org/abs/2608.20308v1)
Y. Liu et al. ｜ 2026-08-20 ｜ 核心贡献：复用视频扩散模型从遮挡第一视角视频恢复 3D 手部轨迹。 ｜ 关联：为 VLA 提供可扩展的具身操纵数据。

#### [Learning the Right Abstraction: Neural Reduced Dynamics for Complex Robot Control](http://arxiv.org/abs/2608.19375v1)
H. Zhang et al. ｜ 2026-08-19 ｜ 核心贡献：用数据驱动降阶动力学仿真加速机器人强化学习。 ｜ 关联：可为 VLA 策略训练提供低成本仿真抽象。

#### 🔁 **【过去14天内已出现】** [Role-Conditioned Sub-Token Routing for Efficient Vision-Language-Action Policies](http://arxiv.org/abs/2608.18410v1)
🔁 **【过去14天内已出现】** ｜ W. Jiang et al. ｜ 2026-08-19 ｜ 核心贡献：按角色对子 token 进行路由，避免激进剪枝丢失完整表示。 ｜ 关联：直接降低 VLA 长多模态序列推理开销。

#### 🔁 **【过去14天内已出现】** [Vision-Language Models for Egocentric Video: From Hand-Object Interaction to Embodied AI](http://arxiv.org/abs/2608.18671v1)
🔁 **【过去14天内已出现】** ｜ M. Zamani et al. ｜ 2026-08-19 ｜ 核心贡献：综述第一视角视频中的手物交互、VLM 与具身 AI 的关联。 ｜ 关联：为 VLA 提供第一视角数据理解基础。

### 具身导航

#### 🔁 **【过去14天内已出现】** [ForeSightGuide: An Anticipatory Framework toward Accurate and Low-Redundancy Guidance for the Visually Impaired](http://arxiv.org/abs/2608.18993v1)
🔁 **【过去14天内已出现】** ｜ Z. Wang et al. ｜ 2026-08-19 ｜ 核心贡献：面向视障导航提出低冗余前瞻性引导，抑制 VLM 误报。 ｜ 关联：具身导航与辅助移动智能体。

#### 🔁 **【过去14天内已出现】** [LT-Mem: Volatility-Aware Spatio-Temporal Memory for Lifelong Scene Understanding](http://arxiv.org/abs/2608.19059v1)
🔁 **【过去14天内已出现】** ｜ Y. Lee et al. ｜ 2026-08-19 ｜ 核心贡献：用波动性感知时空记忆保持跨会话物体身份一致。 ｜ 关联：长期导航中的场景理解与记忆维护。

#### 🔁 **【过去14天内已出现】** [USR-Drive: Unified Driving Scene Representation via Joint Denoising of 3D Gaussians and Boxes](http://arxiv.org/abs/2608.19036v1)
🔁 **【过去14天内已出现】** ｜ L.-H. Chen et al. ｜ 2026-08-19 ｜ 核心贡献：联合去噪 3D 高斯与 3D 框，统一驾驶场景表示。 ｜ 关联：自动驾驶与具身导航的场景表示。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [Clustering and Token Denoising for Faster and More Robust VLMs](http://arxiv.org/abs/2608.19285v1)
B. Rossigneux et al. ｜ 2026-08-19 ｜ 核心贡献：用聚类与 token 去噪减少 VLM 视觉 token 数量，加速边缘部署。 ｜ 关联：VLM/LLM 推理优化与 token 级压缩。

### 持续学习

#### [Frequency-Aware Continual Learning for Smart Contract Vulnerability Detection with Large Language Models](http://arxiv.org/abs/2608.19680v1)
T. Huang et al. ｜ 2026-08-20 ｜ 核心贡献：面向顺序到达的漏洞类别，用频率感知参数高效适配避免全量重训。 ｜ 关联：LLM 在垂直任务中的持续学习。

#### [An Inclusive and Lightweight Approach to Federated Continual Learning for Cultural Heritage](http://arxiv.org/abs/2608.20038v1)
I. Theologitis et al. ｜ 2026-08-20 ｜ 核心贡献：为分布式文化遗产数据提出轻量联邦持续学习方案。 ｜ 关联：分布式场景下的持续学习与数据隐私。

#### [In Two Minds about Lifelong Learning: Exploring Hemispheric Redundancy and Specialisation in Neural Models](http://arxiv.org/abs/2608.19514v1)
B. Smith et al. ｜ 2026-08-20 ｜ 核心贡献：借鉴大脑半球冗余与特化机制，探索神经模型终身学习。 ｜ 关联：持续学习与灾难性遗忘的类脑结构方案。

#### [Towards general embodied intelligence: integrating large language models, knowledge bases, and reasoning capabilities to build the next generation of AI agents](http://arxiv.org/abs/2608.19794v1)
F. Yuan et al. ｜ 2026-08-20 ｜ 核心贡献：综述 LLM、知识库与推理能力融合的通用具身智能体演进路线。 ｜ 关联：系统匹配至持续学习，为智能体持续演化提供宏观框架背景。

#### 🔁 **【过去14天内已出现】** [Harness Continual Learning: Continual Adaptation Beyond Model Parameters](http://arxiv.org/abs/2608.19013v1)
🔁 **【过去14天内已出现】** ｜ B. Kang et al. ｜ 2026-08-19 ｜ 核心贡献：将持续学习从模型参数扩展到 prompt、记忆、工具、技能与路由规则。 ｜ 关联：连接持续学习与 LLM Agent 的非参数状态。

#### 🔁 **【过去14天内已出现】** [Forgetting, plasticity, and co-observation: a third facet of continual learning](http://arxiv.org/abs/2608.18803v1)
🔁 **【过去14天内已出现】** ｜ T. Hess et al. ｜ 2026-08-19 ｜ 核心贡献：提出“共观测”缺失是除遗忘和塑性丧失之外的第三个持续学习障碍。 ｜ 关联：深化持续学习理论解释。

## 视觉感知

### 3D 点云视觉感知

#### [Open-Vocabulary 3D Object Detection with Co-Distillation Discovery and Dual Guidance Robust Training](http://arxiv.org/abs/2608.19973v1)
S. Yuan et al. ｜ 2026-08-20 ｜ 核心贡献：用共蒸馏发现未见物体，并引入双引导鲁棒训练实现开放词汇 3D 检测。 ｜ 关联：开放词汇 3D 感知前沿。

#### 🔁 **【过去14天内已出现】** [PCQA-R1: Advancing Generalized 3D Point Cloud Quality Assessment with Reinforcement Learning](http://arxiv.org/abs/2608.18627v1)
🔁 **【过去14天内已出现】** ｜ K. Ye et al. ｜ 2026-08-19 ｜ 核心贡献：将强化学习引入无参考点云质量评估，提升跨域泛化。 ｜ 关联：3D 点云视觉质量感知。

#### 🔁 **【过去14天内已出现】** [CL4D: Contrastive Language-4D Pretraining for Vision-Language Reasoning in Dynamic Scenes](http://arxiv.org/abs/2608.18734v1)
🔁 **【过去14天内已出现】** ｜ K. Hewagamage et al. ｜ 2026-08-19 ｜ 核心贡献：提出语言-4D 对比预训练，使表示同时具备时间建模与几何深度。 ｜ 关联：动态点云/4D 场景的语言对齐视觉感知。

## 跨方向信号

- **工作流级合规与安全**：PolicyGuide、SafeBranch、ReguSim 共同把安全/合规从“单点动作”推向“全过程引导”。
- **测试时计算的自适应分配**：Learning When to Think 与 Test-Time Scaling in the Wild 都指向“何时投入算力”比“固定增加算力”更关键。
- **技能与经验成为可复用对象**：Optimal Skill Selection、ReCache、Cross-Task Skill Transfer、Harness Continual Learning 将技能/工具/记忆视为可缓存、可迁移的一等状态。
- **持续学习从参数扩展到多模态状态**：Frequency-Aware CL、OrthoSkillVLA、LT-Mem 显示持续适配已不限于权重，而是延伸到适配器、技能子空间和空间记忆。
- **具身表示趋向 4D/动态统一**：CL4D、DreamHand、Planning-Oriented E2E Driving 共同指向时间、几何与语言对齐的动态场景表示。

## 优先精读

- **PolicyGuide**：代表“工作流级合规”这一 Agent 工程新方向，对安全落地有强参考价值。
- **Learning When to Think**：直接讨论测试时计算的自适应分配，是推理成本与能力扩展的关键问题。
- **EXIMO**：解决 VLA“在线学习新任务”的高效微调难题，与具身策略部署高度相关。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*