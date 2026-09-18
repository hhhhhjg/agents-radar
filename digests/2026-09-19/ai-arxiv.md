# 实验室研究方向 Radar 2026-09-19

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 38 篇新文献 + 14 篇过去14天内已出现 | 生成时间：2026-09-18 23:48 UTC

---

# 研究方向 Radar

## 今日总览
- LLM Agent 工程：10 篇新文献，聚焦 harness 规划/释放控制、RL 反馈归因、回归回放、工具幻觉、Web 搜索、长时自我改进、过度声称与数据选择；1 篇重复。
- Agent 测试时扩展与自我改进：3 篇新文献，涉及候选生成策略、能耗、正则自博弈均衡与动态状态空间推理基准。
- LLM Agent Society：今日暂无新论文。
- 视觉-语言-动作模型：11 篇新文献，覆盖人机回环后训练、联邦训练、对抗持续效应、剪枝恢复、扩散加速、自适应 action chunking、测试时引导与高自由度后训练。
- 具身导航：5 篇新文献、5 篇重复，集中多智能体语义地图、无定位单目 VLN、安全负事件、开放词汇 3D 分割与 4D 雷达。
- LLM 剪枝与推理优化：今日暂无新论文；1 篇重复文献提出推理优化质量校准仪器。
- 多模态大模型剪枝：1 篇新文献，QCPruner 做查询条件视觉 token 剪枝。
- 持续学习：4 篇新文献、4 篇重复，涵盖后处理校正、长时 Agent、PEFT 与持续分割。
- 事件相机视觉感知：3 篇新文献、1 篇重复，聚焦速度不变表示、运动证据积累与全脉冲状态空间模型。
- 3D 点云视觉感知：3 篇新文献、3 篇重复，开放词汇检测、城市建筑实例分割、PBR Gaussian 资产与语义分割基准。
- 3D 点云感知与跟踪：今日暂无新论文。

## LLM Agent 与多智能体
### LLM Agent 工程
#### [How Do Agent Harnesses Create Value? Planning Information and Release Control in Stateful LLM Agents](http://arxiv.org/abs/2609.20474v1)
Zhang et al. | 2026-09-17 | 核心：研究 harness 中固定/动态计划与释放控制对成功率、错误接受和成本的影响。关联：直接面向 LLM Agent 工程架构。
#### [Dual-Axis Policy Optimization for LLM Agents: Bayesian Feedback Attribution and Trajectory Mass Normalization](http://arxiv.org/abs/2609.19830v1)
Zhuang et al. | 2026-09-17 | 核心：将 Agent RL 拆为轨迹内反馈归因与轨迹间质量归一化。关联：优化 Agent 训练与反馈利用。
#### [Chronicle: Cut-Point Replay for Regression Testing of LLM Agents](http://arxiv.org/abs/2609.20625v1)
Chawla & Koul | 2026-09-17 | 核心：用切点回放实现不可复现 LLM Agent 运行的回归测试。关联：Agent 测试与调试基础设施。
#### [Closed-World Resolution Against Tool Hallucination in LLM Agents](http://arxiv.org/abs/2609.19425v1)
Iyer | 2026-09-16 | 核心：闭世界解析抑制调用不存在工具与非法参数。关联：提升工具调用可靠性。
#### [SoL-Pi: Recursively Scaling Auto-Research Loops for Efficient Agent Harness](http://arxiv.org/abs/2609.20519v1)
Liu et al. | 2026-09-17 | 核心：递归扩展自动研究循环以提升 Agent harness 的 token 效率。关联：Agent 长期自主探索与工程效率。
#### [Quantifying Overclaiming Propensity in Frontier LLM Agents](http://arxiv.org/abs/2609.20812v1)
Smyth et al. | 2026-09-17 | 核心：量化前沿编码 Agent 过度声称任务完成的倾向。关联：自主 Agent 可信度评估。

### Agent 测试时扩展与自我改进
#### [Sample Count Is Not Enough: Candidate-Generation Strategy Shapes the Energy and Performance of LLM Test-Time Scaling](http://arxiv.org/abs/2609.19499v1)
Kashaniyan & Jannesari | 2026-09-16 | 核心：候选生成策略而非仅 N 决定测试时扩展的能耗与性能。关联：测试时扩展效率评估。
#### [Steering Equilibrium Selection in Regularized Self-Play via the Reference Policy](http://arxiv.org/abs/2609.19820v1)
Leal | 2026-09-17 | 核心：用参考策略引导正则自博弈的均衡选择。关联：自我改进与自博弈稳定性。
#### [PetriBench: Benchmarking LLM Reasoning over Dynamic State Spaces](http://arxiv.org/abs/2609.19883v1)
Koussios et al. | 2026-09-17 | 核心：提出动态状态空间推理基准 PetriBench。关联：测试时推理能力评测。

## 具身智能
### 视觉-语言-动作模型
#### [HIL-UMI: Bringing Human-in-the-Loop Post-Training of Vision-Language-Action Models to Universal Manipulation Interface](http://arxiv.org/abs/2609.20659v1)
Han et al. | 2026-09-17 | 核心：将人在回路后训练引入 UMI，突破静态示范限制。关联：VLA 部署适配。
#### [Co-VLA: Consensus-based Federated Training for Vision-Language-Action Models](http://arxiv.org/abs/2609.19923v1)
Li et al. | 2026-09-17 | 核心：面向 VLA 的共识联邦训练，利用分布式机器人数据。关联：分布式 VLA 训练。
#### [Beyond Patch Removal: Persistent Adversarial Effects in Vision-Language-Action Policies](http://arxiv.org/abs/2609.19669v1)
Wu et al. | 2026-09-17 | 核心：区分对抗补丁即时与移除后的持续状态效应。关联：VLA 鲁棒性评估。
#### [Recovering Aggressively Pruned Vision-Language-Action Models with Offline Hidden-State Distillation](http://arxiv.org/abs/2609.19579v1)
Kim et al. | 2026-09-17 | 核心：离线隐藏状态蒸馏恢复剪枝 VLA。关联：VLA 压缩与恢复。
#### [FASA: Feedback-Aware Sampling Adaptation for Efficient Diffusion-Based VLA Models](http://arxiv.org/abs/2609.19475v1)
Han et al. | 2026-09-16 | 核心：反馈感知采样适配加速扩散 VLA。关联：VLA 实时推理。
#### [GeoAAC: Geometry-Based Adaptive Action Chunking from Denoising Trajectories in VLA Policies](http://arxiv.org/abs/2609.20776v1)
Chen et al. | 2026-09-17 | 核心：从去噪轨迹几何自适应生成 action chunk。关联：VLA 动作生成与闭环控制。
#### [TraceFlow: Guiding Frozen Flow-Matching Robot Policies with Success and Failure Traces](http://arxiv.org/abs/2609.20646v1)
Zhang et al. | 2026-09-17 | 核心：用成功/失败轨迹引导冻结 flow-matching VLA。关联：VLA 测试时引导。

### 具身导航
#### [Navi-Agent: Unlocalized Monocular Navigation Agent](http://arxiv.org/abs/2609.20388v1)
Xie et al. | 2026-09-17 | 核心：无需定位的单目导航 Agent 执行 VLN-CE。关联：零样本连续环境导航。
#### [CoRef-GS: Cooperative Referring Gaussian Splatting for Multi-Agent Scene Understanding](http://arxiv.org/abs/2609.20586v1)
Zhou et al. | 2026-09-17 | 核心：多智能体协作 referring Gaussian splatting。关联：具身导航多机语义建图。
#### [SenseFuse: Label-Free Fusion of Image and Shape Encoders for Open-Vocabulary 3D Instance Segmentation](http://arxiv.org/abs/2609.20475v1)
Han et al. | 2026-09-17 | 核心：无标签融合图像与形状编码器做开放词汇 3D 实例分割。关联：机器人导航场景理解。
#### [Absence is Presence: Understanding Visual Scene Negative Events Under Safety Cognitive Constraint](http://arxiv.org/abs/2609.19812v1)
Jiang et al. | 2026-09-17 | 核心：描述视觉场景中应存在但缺失的关键信息。关联：安全关键导航场景理解。
#### [4D Radar Perception Algorithms for Autonomous Driving: A Review](http://arxiv.org/abs/2609.19216v1)
Wu et al. | 2026-09-16 | 核心：综述 4D 毫米波雷达感知算法。关联：导航与自动驾驶感知。
#### 🔁 **【过去14天内已出现】** [AdaGeoVLN: Selective Geometry Across Representation Depth and Navigation Time for Vision-Language Navigation](http://arxiv.org/abs/2609.18789v1)
🔁 **【过去14天内已出现】** Pham et al. | 2026-09-16 | 核心：选择性使用几何基础模型层级特征。关联：VLN 空间理解。
#### 🔁 **【过去14天内已出现】** [GroundingVLN: Reasoning and Acting with Grounding for Vision-Language Navigation](http://arxiv.org/abs/2609.18581v1)
🔁 **【过去14天内已出现】** Li et al. | 2026-09-16 | 核心：结合推理与 grounding 执行 VLN。关联：语义推理到空间执行。
#### 🔁 **【过去14天内已出现】** [UAVs Meet Embodied Intelligence: Bridging Human Intents and Flying Dynamics Via Harnessing Physical-Digital AI Agents](http://arxiv.org/abs/2609.18326v1)
🔁 **【过去14天内已出现】** Tian et al. | 2026-09-16 | 核心：物理-数字 AI Agent 桥接人类意图与飞行动态。关联：空中具身导航。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### 🔁 **【过去14天内已出现】** [A Calibrated Instrument for Measuring How Inference Optimizations Affect Output Quality](http://arxiv.org/abs/2609.18005v1)
🔁 **【过去14天内已出现】** Kaplan | 2026-09-16 | 核心：提出校准仪器测量推理优化对输出质量影响。关联：LLM 推理优化评估。

### 多模态大模型剪枝
#### [QCPruner: Query-Conditioned Population Coverage for Visual Token Pruning](http://arxiv.org/abs/2609.19990v1)
He et al. | 2026-09-17 | 核心：查询条件群体覆盖的无训练视觉 token 剪枝。关联：多模态 LLM 推理降本。

### 持续学习
#### [Past, Future, All at Once: Mitigating Stability-Plasticity Dilemma via Post-hoc JANUS Rectification](http://arxiv.org/abs/2609.19985v1)
Zheng et al. | 2026-09-17 | 核心：后处理 JANUS 校正缓解稳定性-可塑性困境。关联：持续学习抗遗忘。
#### [An Architecture for Long-Horizon Agents: Levels, Ticks and Cascaded Intelligence](http://arxiv.org/abs/2609.19519v1)
Nijkamp et al. | 2026-09-17 | 核心：提出长时 Agent 的层级、tick 与级联智能架构。关联：持续运行智能体。
#### [GAPrompt++: Multi-Granular Geometry-Aware Point Cloud Prompt for 3D Vision Model](http://arxiv.org/abs/2609.19716v1)
Ai et al. | 2026-09-17 | 核心：多粒度几何感知点云 prompt 做高效适配。关联：PEFT 与持续适应。
#### 🔁 **【过去14天内已出现】** [CERA-MoA: Co-Evolving Routing Mechanisms with Continually Learning LLM Agents](http://arxiv.org/abs/2609.18779v1)
🔁 **【过去14天内已出现】** Jiang et al. | 2026-09-16 | 核心：MoA 路由与持续学习 LLM Agent 协同演化。关联：持续学习路由机制。
#### 🔁 **【过去14天内已出现】** [DR.WILSS: Diffusion-Based Replay for Weakly Supervised Continual Semantic Segmentation](http://arxiv.org/abs/2609.18444v1)
🔁 **【过去14天内已出现】** Marx et al. | 2026-09-16 | 核心：扩散回放缓解弱监督持续语义分割遗忘。关联：持续分割。

## 视觉感知
### 事件相机视觉感知
#### [An Event Preserving Velocity Invariant Representation for Event Cameras](http://arxiv.org/abs/2609.19973v1)
Ikura et al. | 2026-09-17 | 核心：提出事件保持的速度不变表示。关联：事件相机表征。
#### [PointEvent: Rethinking Event-based Tiny Object Detection via Serialized Motion Evidence Accumulation](http://arxiv.org/abs/2609.20066v1)
Wu et al. | 2026-09-17 | 核心：序列化运动证据积累做事件微小目标检测。关联：事件相机目标检测。
#### [REACT: A Fully Spiking State-Space Model for Real-Time Event-Driven Temporal Perception](http://arxiv.org/abs/2609.19204v1)
Keime et al. | 2026-09-16 | 核心：全脉冲状态空间模型实现实时事件驱动感知。关联：事件相机时序感知。
#### 🔁 **【过去14天内已出现】** [Mask IPL: Noise-Free Intrinsic Position Learning via Computation Graph Clipping for Event-Based Spike-Driven Tracking](http://arxiv.org/abs/2609.18716v1)
🔁 **【过去14天内已出现】** Shan & Zhang | 2026-09-16 | 核心：无噪声内在位置学习用于事件脉冲跟踪。关联：事件相机跟踪。

### 3D 点云视觉感知
#### [Open-vocabulary 3D object detection with promptable segmentation](http://arxiv.org/abs/2609.19358v1)
Deniz & Koçyiğit | 2026-09-16 | 核心：免训练开放词汇 3D 目标检测结合可提示分割。关联：3D 点云开放词汇感知。
#### [Instance Segmentation and Fine-grained Classification for Urban Buildings with Adaptive Region Dividing and Spatially-Supervised Contrastive Learning](http://arxiv.org/abs/2609.19631v1)
Zhang et al. | 2026-09-17 | 核心：自适应区域划分与空间监督对比学习做城市建筑实例分割。关联：大规模点云理解。
#### [GS-PI: An Optimization-Decoupled Appearance Decomposition Approach for Generating PBR Gaussian Assets](http://arxiv.org/abs/2609.19907v1)
Xu et al. | 2026-09-17 | 核心：优化解耦外观分解生成 PBR Gaussian 资产。关联：3D 表示与点云视觉。
#### 🔁 **【过去14天内已出现】** [Semantic-ITC: A Frame-wise Indoor Mobile Laser Scanning Dataset and Benchmark for Semantic Segmentation](http://arxiv.org/abs/2609.18493v1)
🔁 **【过去14天内已出现】** Wu et al. | 2026-09-16 | 核心：发布室内 MLS 逐帧语义分割数据集。关联：点云语义分割基准。
#### 🔁 **【过去14天内已出现】** [Accuracy- and Real-Time-Aware 4D Radar Preprocessing for Autonomous Driving Perception Systems](http://arxiv.org/abs/2609.18542v1)
🔁 **【过去14天内已出现】** Jung et al. | 2026-09-16 | 核心：面向精度与实时的 4D 雷达预处理。关联：3D/4D 感知系统。

## 跨方向信号
- VLA 正从模型能力转向部署工程：后训练、联邦、鲁棒性、剪枝恢复与推理加速并行。
- LLM Agent 工程重心转向可靠性基础设施：harness 控制、回归回放、工具闭世界、过度声称量化。
- 持续学习与 PEFT、回放、后处理校正结合，覆盖 LLM Agent、点云与语义分割。
- 3D/4D 感知向开放词汇、协同感知、事件/雷达融合演进，服务具身导航。
- 测试时扩展不再唯采样数 N，候选生成策略、能耗与自博弈均衡成为新变量。

## 优先精读
- [HIL-UMI](http://arxiv.org/abs/2609.20659v1)：直面 VLA 部署适配瓶颈，人机回环后训练具工程落地价值。
- [Dual-Axis Policy Optimization](http://arxiv.org/abs/2609.19830v1)：把 Agent RL 的轨迹内/间优化解耦，影响 LLM Agent 训练与反馈利用。
- [QCPruner](http://arxiv.org/abs/2609.19990v1)：多模态大模型剪枝唯一新文献，查询条件覆盖思路对推理降本直接。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*