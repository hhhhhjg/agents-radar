# 实验室研究方向 Radar 2026-08-01

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 35 篇新文献 + 10 篇过去14天内已出现 | 生成时间：2026-07-31 22:54 UTC

---

## 今日总览

- **LLM Agent 与多智能体 / LLM Agent 工程**：今日 10 篇新论文，集中体现“能力内化”与“可靠性工程”：技能混合/蒸馏、策略优化、多智能体记忆与审计、安全防御和垂直领域应用均有突破。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：今日 2 篇新论文，分别提出无外部验证的自适应测试时计算，以及可扩展循环深度的测试时计算轴。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：今日多篇新论文，覆盖 VLA 策略纠错、真实机器人部署、跨具身迁移、空间推理、数据引擎/模拟器及安全。
- **具身智能 / 具身导航**：今日新论文聚焦零样本操作技能迁移；近期文献在生物医学实验室导航与视频 SfM 建图方向延续进展。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：今日 2 篇新论文，分别从动态宽度剪枝与旋转+细粒度分组量化优化 LLM 推理。
- **模型压缩与持续学习 / 多模态大模型剪枝**：今日 2 篇新论文，聚焦训练免视觉 token 剪枝与边缘-云协同 MLLM 推理。
- **模型压缩与持续学习 / 持续学习**：今日 5 篇新论文与 3 篇相关近期文献，涉及模态贡献漂移正则化、AI 生成图像检测、技能式参数训练、鲁棒 coreset 选择与联邦微调防御。
- **视觉感知 / 事件相机视觉感知**：今日 1 篇新论文，事件辅助视频压缩；另有 1 篇脉冲检测近期文献。
- **视觉感知 / 3D 点云视觉感知**：今日 2 篇新论文，分别面向 3D 打印 G-code 生成与单目开放词汇 3D 场景理解；另有 1 篇点云蒸馏近期文献。
- **视觉感知 / 3D 点云感知与跟踪**：今日 1 篇新论文，利用文本检索双时相卫星影像变化，为时序地理空间感知提供跨模态查询思路。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [SKIMIX: Multi-Agent Harness-Time Scaling with Skill Mixture for Dynamic Harness Engineering](http://arxiv.org/abs/2607.27994v1)
J. Luo 等 | 2026-07-30 | 提出多智能体技能混合框架 SKIMIX，协同组合技能库。 | 为 LLM Agent 技能编排提供工程期扩展范式。

#### [TAPO: Transition-Aware Policy Optimization for LLM Agents](http://arxiv.org/abs/2607.27973v1)
C. Li 等 | 2026-07-30 | 在 RL 中引入状态转移感知的密集监督信号。 | 直接提升 LLM Agent 强化学习后训练效率。

#### [From Scoring to Acting: Outcome-Verified Comparative Self-Distillation for LLM Agents](http://arxiv.org/abs/2607.27937v1)
X. Xia 等 | 2026-07-30 | 用结果验证的对比自蒸馏将评分能力转化为动作。 | 推动 LLM Agent 从外部检索转向能力内化。

#### [SKILL-KD: Contrastive Skill Distillation for LLM Agents](http://arxiv.org/abs/2607.28048v1)
Q. Shi 等 | 2026-07-30 | 通过对比式技能蒸馏让学生智能体内化可执行技能。 | 缓解弱学生 Agent 从经验摘要中获取技能的不匹配。

#### [Σ-Mem: An Online Reliability Memory for LLM-based Multi-Agent Systems](http://arxiv.org/abs/2607.27958v1)
P. Feng 等 | 2026-07-30 | 在线建模各智能体的可信条件，构建可靠性记忆。 | 增强多智能体长期协作中的信任建模。

#### [MIND: Lightweight and Effective Memory Injection Defense for LLM Agents via Intent-Aware Information Bottleneck](http://arxiv.org/abs/2607.28103v1)
D. Liu 等 | 2026-07-30 | 用意图感知信息瓶颈过滤注入记忆。 | 为 LLM Agent 记忆安全提供轻量防御。

#### [Leveraging Trajectory Graphs for Pre-Execution Error Diagnosis in Agentic LLM Systems](http://arxiv.org/abs/2607.27443v1)
X. Zheng 等 | 2026-07-29 | 利用轨迹图在执行前预判长程交互错误。 | 提升 Agent 在具身等复杂任务中的可诊断性。

#### [ARES: Adaptive Reasoning-Effort Steering for PPA- and Cost-Aware RTL Optimization with LLM Agents](http://arxiv.org/abs/2607.27879v1)
S. Cuyckens 等 | 2026-07-30 | 自适应调节推理开销以优化 RTL 设计 PPA。 | 展示 LLM Agent 在芯片设计中的成本感知工程实践。

#### [Paying for Honesty Without Knowing the Truth: Reputation-Penalty Design for LLM Marketplace Agents](http://arxiv.org/abs/2607.28330v1)
M. Yang 等 | 2026-07-30 | 设计声誉惩罚机制约束市场智能体不虚构商品属性。 | 为 LLM Agent 市场诚实性激励提供博弈论方案。

#### [One Human, $N$ Agents: Audit-Budget Allocation for LLM Agent Fleets under Miscalibrated, Correlated Confidence](http://arxiv.org/abs/2607.28317v1)
C. Zavattari 等 | 2026-07-30 | 在预算受限下分配人工审计额度，应对误校准置信度。 | 为大规模 LLM Agent 可靠性审计提供预算优化。

### Agent 测试时扩展与自我改进

#### [SVR: Self-Verifying Refinement via Joint Verdict-Confidence Reinforcement Learning for Adaptive Test-Time Compute](http://arxiv.org/abs/2607.28457v1)
H. Chen 等 | 2026-07-30 | 提出无外部验证的多轮 RL，让模型自适应分配测试时计算。 | 直接契合 Agent 测试时扩展与自我改进。

#### [Looped Transformers with Source-Centered State Evolution](http://arxiv.org/abs/2607.27656v1)
B.J. Kim 等 | 2026-07-30 | 通过共享循环块复用获得可扩展递归深度。 | 为固定参数下扩展推理深度提供基础架构。

## 具身智能

### 视觉-语言-动作模型

#### [RedFlow: Redirect Failure into Action-Level Corrections for Flow-matching VLA Policy](http://arxiv.org/abs/2607.27782v1)
Z. Yan 等 | 2026-07-30 | 用离线 RL 将失败轨迹转化为动作级修正。 | 缓解流匹配 VLA 策略的分布偏移与复合误差。

#### [RoboBRIDGE: A Modular Framework for Bridging Policies to Robust Real-World Robotic Agents](http://arxiv.org/abs/2607.27881v1)
S. Yoon 等 | 2026-07-30 | 模块化桥接 VLA 策略与真实机器人智能体。 | 补齐 VLA 部署中的故障恢复与长程执行缺口。

#### [Cross-Embodiment Transfer via Behavior-Aligned Representations](http://arxiv.org/abs/2607.27549v1)
A. Sridhar 等 | 2026-07-30 | 用行为对齐表示促进跨机器人形态迁移。 | 提升 VLA 在不同具身平台上的泛化。

#### [SpatialCLI: Learning to Reason With Spatial Tools, Then Without Them](http://arxiv.org/abs/2607.27703v1)
Y. Zhou 等 | 2026-07-30 | 先借空间工具推理，再逐步摆脱工具。 | 增强 VLM 在具身智能体中的空间推理可靠性。

#### [EgoGenesis: Egocentric World-Action Modeling with Online Anchored Projective Memory and Action-3D RoPE](http://arxiv.org/abs/2607.28243v1)
Z. Yan 等 | 2026-07-30 | 构建第一人称世界-动作模拟器合成操纵视频。 | 为 VLA 提供低成本高质量训练数据源。

#### [ACE-Data-0: Human-Centric Ambient Capture as Embodied Data Engine](http://arxiv.org/abs/2607.28625v1)
Y. Cao 等 | 2026-07-30 | 以人为中心的环境采集生成多模态同步具身数据。 | 缓解 VLA 模型多模态数据瓶颈。

#### [ViewMind3D: Modular View-Aware Inference for Training-Free 3D-QA](http://arxiv.org/abs/2607.28442v1)
P.-K. Chiang 等 | 2026-07-30 | 免训练的模块化视图感知推理用于 3D 问答。 | 为具身智能提供无需 3D 微调的场景问答。

#### [Security of World-Model-Based Embodied AI: A Lifecycle of Threats, Defenses, and Evaluation](http://arxiv.org/abs/2607.28226v1)
F. Liu 等 | 2026-07-30 | 系统梳理世界模型具身智能的安全威胁与防御。 | 为 VLA/世界模型驱动系统建立安全边界。

#### [MARS-RA: Rank Aggregation for Credit Assignment via Multimodal Comparisons in Embodied Multi-Agent Cooperation](http://arxiv.org/abs/2607.27967v1)
D. Wang 等 | 2026-07-30 | 用多模态比较排序聚合解决多智能体信用分配。 | 将多模态感知融入具身多智能体协作奖励归因。

### 具身导航

#### [SemAnCorr: Semantic Anchored Correspondence for Zero-Shot Manipulation Skill Transfer](http://arxiv.org/abs/2607.28382v1)
X. Dong 等 | 2026-07-30 | 用语义锚定对应实现跨几何差异的零样本技能迁移。 | 为具身智能体技能泛化提供语义级对应机制。

#### 🔁 **【过去14天内已出现】** [BioVLN: A Simulation Platform for Visual Language Navigation in Biomedical Laboratories](http://arxiv.org/abs/2607.26914v1)
Z. Liu 等 | 2026-07-29 | 构建生物医学实验室视觉语言导航仿真平台。 | 将具身导航推向生命科学专业场景。

#### 🔁 **【过去14天内已出现】** [VidMap: Exploiting Temporal Structure for Video-Based Structure-from-Motion](http://arxiv.org/abs/2607.27194v1)
Z. Pataki 等 | 2026-07-29 | 利用视频时序结构提升 SfM 相机标定与位姿恢复。 | 为导航训练数据的大规模建图提供高效方法。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [WIDE: Boosting Adaptive LLM Inference via Token-level Dynamic Width Pruning](http://arxiv.org/abs/2607.28418v1)
H. Hu 等 | 2026-07-30 | 在 token 级动态调整网络宽度。 | 为 LLM 推理提供输入自适应的动态剪枝方案。

#### [GyRot: Leveraging Hidden Synergy between Rotation and Fine-grained Group Quantization for Low-bit LLM Inference](http://arxiv.org/abs/2607.27694v1)
S. Kim 等 | 2026-07-30 | 联合旋转与细粒度分组量化实现低比特推理。 | 优化 LLM 低比特推理的精度与硬件开销平衡。

### 多模态大模型剪枝

#### [Capturing Token Tendencies for Training-Free Token Pruning in Multimodal Large Language Models](http://arxiv.org/abs/2607.28341v1)
J. Ma 等 | 2026-07-30 | 捕捉视觉 token 层级倾向实现训练免剪枝。 | 为 MLLM 提供不依赖训练的高效视觉 token 剪枝。

#### [LAST: The Last Query Token Guides Visual Token Pruning for Edge-Cloud Collaborative MLLM Inference](http://arxiv.org/abs/2607.27952v1)
F. Yang 等 | 2026-07-30 | 用末尾查询 token 引导视觉 token 剪枝。 | 降低多模态大模型在边缘-云协同下的推理成本。

### 持续学习

#### [Regularizing modality contribution drift in multimodal continual learning](http://arxiv.org/abs/2607.27260v1)
Z. Zhang 等 | 2026-07-29 | 正则化多模态持续学习中的模态贡献漂移。 | 为 MMCL 防遗忘补充模态贡献维度。

#### [DECODE: Tackling Representation and Decision Degradation in Continual AI-Generated Image Detection](http://arxiv.org/abs/2607.27882v1)
Z. Cai 等 | 2026-07-30 | 应对生成域演化下 AI 生成图像检测的退化。 | 将持续学习用于生成式取证新任务。

#### [Training Skills Like Parameters via Self-Supervised Semantic Diffusion](http://arxiv.org/abs/2607.27557v1)
M. Li 等 | 2026-07-30 | 用自监督语义扩散像训练参数一样训练技能。 | 为特殊领域技能持续累积提供参数化范式。

#### [First-order Constrained Trilevel Optimization Over Distributed Networks for Robust Coreset Selection](http://arxiv.org/abs/2607.27632v1)
Y. Jiao 等 | 2026-07-30 | 用一阶约束三层优化选择分布式鲁棒核心集。 | 为持续学习中的高效数据选择提供分布式优化。

#### [TriShield: Zero-Utility-Loss Defense Against Privacy Backdoors in Federated Language Model Fine-Tuning via Orthogonal Gradient Projection and Optimizer State Entanglement](http://arxiv.org/abs/2607.27940v1)
C. Wei | 2026-07-30 | 用正交梯度投影等防御联邦微调隐私后门。 | 其正交投影思想可迁移至缓解灾难性遗忘。

#### 🔁 **【过去14天内已出现】** [The Art of Not Forgetting A Local Learning Architecture for Continual Learning](http://arxiv.org/abs/2607.26523v1)
A. Atmuri 等 | 2026-07-29 | 提出 CMP 局部学习架构实现不遗忘。 | 是持续学习架构层面的直接尝试。

#### 🔁 **【过去14天内已出现】** [Post-Training at the Edge of Detectability: A Game-Theoretic Approach to Fine-Tuning](http://arxiv.org/abs/2607.26358v1)
K. Harris 等 | 2026-07-29 | 用博弈论约束 RL 微调漂移。 | 为持续微调中的漂移控制提供新框架。

#### 🔁 **【过去14天内已出现】** [FedWeave: Rethinking the Unit of Specialization in Heterogeneous Federated MoE-LoRA](http://arxiv.org/abs/2607.26618v1)
D. Duan 等 | 2026-07-29 | 以专家层为专用化单元降低联邦 MoE-LoRA 跨任务干扰。 | 其模块化专业区隔对持续学习任务隔离有借鉴意义。

## 视觉感知

### 事件相机视觉感知

#### [ENCORE: Event-Assisted Complementary Motion Refinement for Learned Video Compression](http://arxiv.org/abs/2607.28020v1)
S. Ye 等 | 2026-07-30 | 用事件相机补全运动信息以提升视频压缩时间建模。 | 展示事件数据在视频感知处理中的独特价值。

#### 🔁 **【过去14天内已出现】** [Sequence-SOD: Bio-inspired Sequence-aware Spiking ObjectDetection for Event Cameras](http://arxiv.org/abs/2607.26703v1)
K. Bendig 等 | 2026-07-29 | 用序列感知脉冲神经网络做事件相机目标检测。 | 推进事件相机与 SNN 结合的低功耗动态感知。

### 3D 点云视觉感知

#### [MonoVoc: Decoupling Geometry and Semantics for Lightweight Monocular Open-Vocabulary 3D Gaussians](http://arxiv.org/abs/2607.28300v1)
P. Ardekhani 等 | 2026-07-30 | 用单目图像解耦几何与语义，构建开放词汇 3D 场景。 | 为 3D 高斯/点云场景提供开放语义感知路径。

#### [PrintAnything: Learning an Intermediate Representation for 3D printing G-code Generation](http://arxiv.org/abs/2607.27729v1)
S. Hong 等 | 2026-07-30 | 从点云直接学习中间表示并生成 3D 打印 G-code。 | 扩展点云作为 3D 表示的下游制造应用。

#### 🔁 **【过去14天内已出现】** [Long-Tailed 3D Point Cloud Dataset Distillation](http://arxiv.org/abs/2607.26763v1)
J. You 等 | 2026-07-29 | 针对长尾分布点云数据集进行蒸馏。 | 解决 3D 点云数据压缩与类别不平衡联合挑战。

### 3D 点云感知与跟踪

#### [Finding Change in Satellite Archives from Text: How to Combine Before-and-After Images Efficiently](http://arxiv.org/abs/2607.28571v1)
S. Roy 等 | 2026-07-30 | 从自然语言查询双时相卫星影像对并按变化排序。 | 为地理空间时序变化感知提供跨模态检索新思路。

## 跨方向信号

1. **能力内生化**：SKILL-KD、From Scoring to Acting、SpatialCLI 共同推动技能从外部检索/工具调用转向参数内化。
2. **自适应计算分配**：SVR、WIDE、LAST、ARES、Looped Transformers 将测试时计算、动态剪枝与推理开销控制贯穿 Agent 与推理优化。
3. **可信多智能体治理**：Σ-Mem、MIND、One Human N Agents、Paying for Honesty 将可靠性、安全与审计纳入 Agent 系统设计。
4. **具身数据引擎化**：ACE-Data-0、EgoGenesis、RoboBRIDGE 以环境采集、可控仿真与工程桥接缓解 VLA 数据与部署瓶颈。
5. **防遗忘与对齐技术融合**：持续学习中的正则化/正交投影与 RL 微调漂移约束（TriShield、Post-Training、DECODE）相互借鉴。

## 优先精读

1. **SVR**：无外部验证的自适应测试时 RL，代表 Agent 自我改进的新范式。
2. **SKILL-KD**：对比式技能蒸馏直接解决弱学生 Agent 的能力内化问题。
3. **RoboBRIDGE**：连接 VLA 策略到真实机器人 Agent，填补部署与工程落地关键缺口。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*