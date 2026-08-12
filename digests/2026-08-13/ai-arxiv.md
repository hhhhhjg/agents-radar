# 实验室研究方向 Radar 2026-08-13

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 37 篇新文献 + 10 篇过去14天内已出现 | 生成时间：2026-08-12 22:34 UTC

---

### 今日总览

- **LLM Agent 与多智能体 / LLM Agent 工程**：10 篇新文献，1 篇重复。今日进展集中在 Agent 运行时安全、可演化 harness、技能供应链后门、行为安全基准与模型路由。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：6 篇新文献。无验证器测试时扩展、检索增强推理轨迹、输入侧 TTA 与树搜索成为主要增长点。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：10 篇新文献，2 篇重复。VLA 研究向可执行 CoT、对抗安全、KV 缓存复用、失败记忆、社会交互预期等方向快速拓展。
- **具身智能 / 具身导航**：7 篇新文献，3 篇重复。开放词汇目标导航、空间思维链、层次化 3DGS 语义理解是主要信号。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：1 篇新文献，1 篇重复。跨任务可迁移的 token 剪枝策略为主要进展。
- **模型压缩与持续学习 / 多模态大模型剪枝**：1 篇新文献。跨模态残差引导的视觉 token 剪枝可显著降低 VLM 推理开销。
- **模型压缩与持续学习 / 持续学习**：3 篇新文献，3 篇重复。Agent 记忆增长与持续学习出现明显融合趋势。
- **视觉感知 / 事件相机视觉感知**：2 篇新文献，1 篇重复。事件特征被重新解释为运动线索，事件引导扩散模型插值也值得关注。
- **视觉感知 / 3D 点云视觉感知**：1 篇新文献，2 篇重复。多视图关系蒸馏改善 VLM 几何空间表征，并惠及点云下游任务。
- **视觉感知 / 3D 点云感知与跟踪**：今日暂无新论文。

### 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [SHE: Trajectory-driven Safety Harness Evolution for LLM Agents](http://arxiv.org/abs/2608.09885v1)
Qu 等 | 2026-08-10 | 用轨迹驱动方式使 Agent 安全 harness 随运行经验演化 | 关联：将安全机制从静态部署变为可进化系统。

#### [Bidirectional Context Self-Distillation for Reinforcement Learning of Skill-Based LLM Agents](http://arxiv.org/abs/2608.09555v1)
Pan 等 | 2026-08-10 | 用双向上下文自蒸馏强化学习，让策略更好利用外部语言技能 | 关联：提升技能型 Agent 的策略学习效率。

#### [REDAgentBench: Executable Red Teaming and Faithful Measurement of LLM Agent Systems](http://arxiv.org/abs/2608.10669v1)
Chen 等 | 2026-08-11 | 提供可执行红队基准，忠实度量 Agent 环境交互中的安全违规 | 关联：Agent 安全评估从问答转向执行轨迹。

#### [ElasticBack: Stealthy Conditional Backdoor in LLM-Agent Skills via Coupled Trigger-Rule Optimization](http://arxiv.org/abs/2608.09577v1)
Sui 等 | 2026-08-10 | 在 Agent 技能中植入条件触发后门，攻击技能供应链 | 关联：揭示 Agent 技能分发的新安全风险。

#### [The Politician, the Liar, and the Obedient Worker: Emerging Behavior of LLM Agents in Hierarchical Games](http://arxiv.org/abs/2608.09574v1)
Seyedin 等 | 2026-08-10 | 层级博弈中发现 Agent 出现搭便车、欺骗与盲目服从等治理失败 | 关联：刻画多 Agent 组织中的新兴社会行为。

#### [Capability Is Not Propensity: Measuring Pressure-Robust Cooperative Behavior in Civic LLM Agents](http://arxiv.org/abs/2608.09485v1)
Shah 等 | 2026-08-10 | 将能力与倾向分离，度量压力下合作的鲁棒性 | 关联：为协作型 Agent 提供行为鲁棒性评估框架。

#### [SBCO: Self-Supervised, Verifier-Grounded Harness Optimization For Planning Agents](http://arxiv.org/abs/2608.10157v1)
Kulkarni 等 | 2026-08-10 | 自监督且验证器接地的 harness 优化，支持规划 Agent 持续自改进 | 关联：减少 Agent 自改进对人工标注的依赖。

#### [MERA: Model Evolution and Routing with Skill Adaptation for Agentic Systems at Scale](http://arxiv.org/abs/2608.10333v1)
Yao 等 | 2026-08-11 | 在任务内部按调用难度路由模型，并用技能自适应实现模型演化 | 关联：大规模 Agent 调用的成本与质量平衡。

#### [ActBench: Self-Evolving Benchmark of Behavioral Safety in Cowork Agents](http://arxiv.org/abs/2608.09476v1)
Yao 等 | 2026-08-10 | 从执行轨迹而非最终回复评估 Agent 的行为安全风险 | 关联：与 SHE、REDAgentBench 共同构成行为安全评估链。

#### [MAP-Graph: Provenance-Aware Shared Memory for Multi-Agent Workflows](http://arxiv.org/abs/2608.10509v1)
Wang 等 | 2026-08-11 | 为多 Agent 共享内存加入数据溯源，阻断私有或被投毒信息的派生传播 | 关联：解决 Agent 协作中的信息治理与安全边界。

#### 🔁 **【过去14天内已出现】** [Agentic Router: An Execution-Grounded Continual Learning Approach With Memory](http://arxiv.org/abs/2608.09184v1)
Chen 等 | 2026-08-10 | 用执行结果驱动持续学习，为命令行生成选择更安全命令 | 关联：Agent 工程中的执行记忆与路由优化。

### Agent 测试时扩展与自我改进

#### [Test-Time Scaling for CAD Generation via Verifier-Free Consensus Selection](http://arxiv.org/abs/2608.09706v1)
Haag 等 | 2026-08-10 | 在无真值验证器条件下，用多头共识挑选最优 CAD 生成样本 | 关联：将测试时扩展扩展到不可验证生成任务。

#### [Consilience for Verifier-Free Test-Time Scaling](http://arxiv.org/abs/2608.09898v1)
Kong 等 | 2026-08-10 | 系统研究无验证器 TTS 中一致性问题，提出通用增强方法 | 关联：为 Agent 在无奖励信号场景下提供自评机制。

#### [ThinkRetrieve: Retrieval-Augmented Reasoning Traces for Test-Time Scaling](http://arxiv.org/abs/2608.10928v1)
Singh 等 | 2026-08-11 | 用检索增强推理轨迹缓解长链推理收益递减 | 关联：通过外部记忆提升测试时扩展上限。

#### [Test-Time Augmentation for LLMs: When Input Diversity Beats Output Diversity at Matched Compute](http://arxiv.org/abs/2608.09351v1)
Kozodoi 等 | 2026-08-10 | 在相同算力下比较输入多样性与输出多样性，输入增强效果更优 | 关联：重新分配 TTS 算力可提升准确率-成本比。

#### [Social Gym and SPaRTan: Benchmarking and Improving LLM Social Reasoning via Multi-Agent Game Tournaments](http://arxiv.org/abs/2608.09128v1)
He 等 | 2026-08-10 | 用博弈锦标赛生成对抗性社交场景并提升 Agent 社会推理 | 关联：把 TTS 思路用于社会技能训练与评测。

#### [Idea Search: Guiding Tree Search with Ideas to Explore Diverse Scientific Methods](http://arxiv.org/abs/2608.08958v1)
Wang 等 | 2026-08-09 | 用“思想”指导树搜索，避免科学方法搜索陷入局部最优 | 关联：树搜索式 TTS 提升科学编码探索多样性。

## 具身智能

### 视觉-语言-动作模型

#### [XCoT-VLA: Executable Chain-of-Thought for Vision-Language-Action Driving](http://arxiv.org/abs/2608.10976v1)
XPeng 等 | 2026-08-11 | 用可执行 CoT 替代冗长自然语言 CoT，提升 VLA 驾驶实时性 | 关联：VLA 推理链从“可读”向“可执行”转变。

#### [Hidden in Plain Sight: Diffusion-Based Unrestricted Robotic Attacks on Vision-Language-Action Models](http://arxiv.org/abs/2608.10393v1)
Han 等 | 2026-08-11 | 用扩散生成无约束对抗样本，攻击 VLA 操作策略 | 关联：弥补 VLA 物理世界对抗鲁棒性空白。

#### [Neural Introspection Gating for Adaptive KV-Cache Reuse in Vision-Language-Action Models](http://arxiv.org/abs/2608.10824v1)
Wu 等 | 2026-08-11 | 基于视觉 token 变化量自适应复用 KV 缓存，降低 VLA 控制计算 | 关联：VLA 推理优化的直接工程方案。

#### [Lost in Reconstruction: Aligning Action Representations with Language in Vision-Language-Action Models](http://arxiv.org/abs/2608.10484v1)
Li 等 | 2026-08-11 | 指出 L1/L2 动作重建损失不等价于语义对齐，提出语言-动作表征对齐 | 关联：改进 VLA 动作表示的语义一致性。

#### [Embodied Multimodal Grounding for Open-Vocabulary Mobile Manipulation via Semantic 3D Gaussian Splatting](http://arxiv.org/abs/2608.10756v1)
Ou 等 | 2026-08-11 | 用语义 3DGS 做语言-视觉-动作对齐，实现开放词汇移动操作 | 关联：VLA 与 3D 场景表征结合落地移动操作。

#### [DriveVLA-M0: Failure-Aware Memory Augmentation for Autonomous Driving](http://arxiv.org/abs/2608.10413v1)
Xing 等 | 2026-08-11 | 利用历史失败记忆增强 VLA 自动驾驶，适应分布偏移 | 关联：VLA 长时记忆与持续适应。

#### [Toward the Cognitive--Physical Limits of Embodied Intelligence through a World-Model-Centric Autonomous Racing Agent](http://arxiv.org/abs/2608.10618v1)
Shan 等 | 2026-08-11 | 以世界模型为中心的竞速 Agent，探索具身智能认知-物理极限 | 关联：VLA 在极限动态控制中的能力边界。

#### [HUI360: A 360° Egocentric Dataset and Baselines for Human-Robot Interaction Anticipation](http://arxiv.org/abs/2608.11051v1)
Lorenzo-Louis 等 | 2026-08-11 | 构建 360° 自我中心数据集，预测人机交互意图 | 关联：为 VLA 提供社交感知与意图预测输入。

#### [ComBodied Agents: a New Paradigm of Human-Centric Agentic AI](http://arxiv.org/abs/2608.10915v1)
Ding 等 | 2026-08-11 | 提出“软件+具身”双形态 Agent，理解人的遗忘、困惑等主观状态 | 关联：将 VLA 扩展到人类中心长期照护场景。

#### 🔁 **【过去14天内已出现】** [RecoverFly: A Failure-Aware Reinforcement Learning Post-Training Framework for Aerial Vision-Language Navigation](http://arxiv.org/abs/2608.09467v1)
Wang 等 | 2026-08-10 | 失败感知的 RL 后训练优化无人机 VLA 动作策略 | 关联：VLA 策略的强化学习后训练与失败利用。

### 具身导航

#### [AECNav: Active Evidence Consolidation for Efficient Zero-Shot Open-Vocabulary Object Navigation](http://arxiv.org/abs/2608.10817v1)
Liu 等 | 2026-08-11 | 主动整合证据以减少开放词汇目标导航的冗余探索 | 关联：提升零样本导航的准确率与延迟。

#### [Chain of Spatial Thoughts: Modality-Agnostic Spatial Grounding for Vision Language Models](http://arxiv.org/abs/2608.10278v1)
Schofield 等 | 2026-08-10 | 用模态无关的空间思维链增强 VLM 空间定位能力 | 关联：为导航 Agent 提供更强的空间推理基座。

#### [CausalSplat: Towards Comprehensive Hierarchical Reasoning in 3D Gaussian Splatting](http://arxiv.org/abs/2608.11150v1)
Ding 等 | 2026-08-11 | 在 3DGS 上做分层因果推理，解析隐含空间意图与常识约束 | 关联：开放词汇 3D 场景理解支撑具身导航。

#### [LEGO: Leveled Language Gaussian Splatting](http://arxiv.org/abs/2608.10057v1)
Peng 等 | 2026-08-10 | 建模“花盆→花束→花蕾”等语义层级，实现细粒度开放词汇场景理解 | 关联：丰富导航环境的语义层次。

#### 🔁 **【过去14天内已出现】** [From Semantic Grounding to Decision Optimization: A Unified Framework for Long-Horizon UAV Vision-Language Navigation](http://arxiv.org/abs/2608.09564v1)
Ma 等 | 2026-08-10 | 统一框架解决长程无人机视觉语言导航的语义接地与决策优化 | 关联：航拍域长期导航任务。

#### 🔁 **【过去14天内已出现】** [SAIN: Structure-Aware Interactive Navigation with Active Dialogue Grounding for Mobile Robot](http://arxiv.org/abs/2608.09196v1)
Cao 等 | 2026-08-10 | 结构感知主动对话导航，解决指令歧义与信息不足 | 关联：移动机器人在真实环境中的交互式导航。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [Putting Registers to Work: Task Registers for Token Pruning in Vision Transformers](http://arxiv.org/abs/2608.10989v1)
Cao 等 | 2026-08-11 | 用 task registers 选择可跨任务迁移的 token 剪枝策略 | 关联：让剪枝策略在不同视觉任务间复用。

#### 🔁 **【过去14天内已出现】** [Omni2LoRA: Coherence-Preserving Parametric Memory for Efficient Omni Language Models](http://arxiv.org/abs/2608.09227v1)
Mathur 等 | 2026-08-10 | 保持模态一致性的参数化记忆，压缩全模态长 token 序列 | 关联：多模态 LLM 推理成本优化。

### 多模态大模型剪枝

#### [When Vision Becomes Text: Visual Token Pruning via Cross-Modal Residual Guidance in VLMs](http://arxiv.org/abs/2608.10489v1)
Ou 等 | 2026-08-11 | 用跨模态残差引导视觉 token 剪枝，去除文本-视觉冗余 | 关联：直接降低 VLM 推理成本。

### 持续学习

#### [myMediWhisper: Construction of Burmese Medical Speech Corpus and Whisper Fine-Tuning for Clinical Dialogue ASR](http://arxiv.org/abs/2608.11036v1)
Thu 等 | 2026-08-11 | 构建 28 小时缅甸语医疗语音语料并微调 Whisper | 关联：低资源领域 ASR 的持续微调实践。

#### [SeFoRA: Sketch-Aggregated Federated Low-Rank Adaptation with Heterogeneous Client Ranks](http://arxiv.org/abs/2608.10144v1)
Xia 等 | 2026-08-10 | 用草图聚合联邦 LoRA，支持异构秩客户端协作微调 | 关联：联邦场景下的参数高效持续学习。

#### [Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding](http://arxiv.org/abs/2608.11095v1)
Chakrabarti | 2026-08-11 | 将 Agent 编码仓库中指令文件无限膨胀归因于“灾难性记住” | 关联：Agent 记忆与持续学习中的遗忘-累积矛盾。

#### 🔁 **【过去14天内已出现】** [Macaron-V1: Towards Open Continual Learning with Self-Improvement and Mixture-of-LoRA](http://arxiv.org/abs/2608.09819v1)
Mind Lab 等 | 2026-08-10 | 用 Mixture-of-LoRA 与自改进实现部署后持续学习 | 关联：开放环境下的具身持续学习系统。

#### 🔁 **【过去14天内已出现】** [Hyperbolic Multimodal Continual Learning](http://arxiv.org/abs/2608.09572v1)
Liu 等 | 2026-08-10 | 在双曲空间中建模多模态层次结构并用于持续学习 | 关联：多模态持续学习的几何方法。

## 视觉感知

### 事件相机视觉感知

#### [Static in Frames, Dynamic in Events: Rethinking Features in Event Cameras as Motion Cues](http://arxiv.org/abs/2608.11075v1)
Araghi 等 | 2026-08-11 | 将事件相机特征重新定义为运动线索，而非静态快照特征 | 关联：为事件视觉提供新的特征学习视角。

#### [Bridging Event Streams and DiT: Event-Guided Video Frame Interpolation](http://arxiv.org/abs/2608.10479v1)
Lin 等 | 2026-08-11 | 用事件流引导扩散模型做视频帧插值，缓解大间隔运动模糊 | 关联：事件相机与生成式帧插值结合。

#### 🔁 **【过去14天内已出现】** [A Height-Constrained 2-Point Minimal Solver for Pose Estimation from Active LED Markers with Event Cameras](http://arxiv.org/abs/2608.09520v1)
Yuan 等 | 2026-08-10 | 提出高度约束的 2 点最小求解器，用于事件相机主动标记定位 | 关联：事件相机低延迟实时定位。

### 3D 点云视觉感知

#### [Multi-View Relational Distillation for Spatial Reasoning with Vision-Language Models](http://arxiv.org/abs/2608.10864v1)
Nguyen 等 | 2026-08-11 | 用多视图关系蒸馏强化 VLM 几何空间表征 | 关联：为 3D 点云与空间推理任务提供更强 VLM 底座。

#### 🔁 **【过去14天内已出现】** [Damage Classification for 3D Point Cloud Data via 3D Data Analysis and Vision Foundation Model-based 2D Projections](http://arxiv.org/abs/2608.08955v1)
Perez 等 | 2026-08-09 | 对比纯 3D 点云与 2D 投影的细粒度损伤分类性能 | 关联：点云损伤评估的两类技术路线比较。

#### 🔁 **【过去14天内已出现】** [RefineAny3D: Depth Refinement as Semantic Alignment for Monocular 3D Detection](http://arxiv.org/abs/2608.09147v1)
Zhang 等 | 2026-08-10 | 将深度细化建模为语义对齐，提升单目 3D 检测 | 关联：单目几何与点云感知的衔接。

### 跨方向信号

- **Agent 安全从“模型权重”转向“执行层”**：SHE、REDAgentBench、ActBench、ElasticBack 等 6 篇论文同日出现，标志 harness、轨迹、技能供应链成为安全攻防主战场。
- **无验证器测试时扩展成为通用范式**：Consilience、CAD Consensus、Idea Search 均尝试在无外部奖励条件下用一致性/树搜索替代验证器，具备向 VLA 和机器人策略迁移的潜力。
- **Token/KV 级推理优化跨方向渗透**：VLA KV 缓存复用、VLM 视觉 token 剪枝、ViT 跨任务剪枝、Omni2LoRA 共同指向“用更少计算维持更优语义”。
- **持续学习与 Agent 记忆合流**：CLAUDE.md 的灾难性记住、Macaron-V1 体验学习、Agentic Router 执行记忆、MAP-Graph 溯源共享内存，显示上下文管理正成为持续学习新载体。

### 优先精读

- **SHE**：首次将 Agent harness 作为可演化安全对象，与 REDAgentBench、ActBench 形成完整安全评估-进化闭环，是 Agent 工程方向最应跟进的系统。
- **Consilience**：系统解决无验证器测试时扩展的一致性问题，可在缺乏奖励信号的 Agent 任务中直接迁移，方法论价值高。
- **XCoT-VLA**：用可执行 CoT 替代开放自然语言 CoT，直击 VLA 实时控制延迟痛点，是连接思维链与具身执行的关键一步。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*