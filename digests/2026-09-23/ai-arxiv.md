# 实验室研究方向 Radar 2026-09-23

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 42 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-22 23:57 UTC

---

## 今日总览
- LLM Agent 与多智能体—LLM Agent 工程：10篇新文献，聚焦工具接口、行动治理、记忆校准、多智能体安全/合谋、自修改监控与 harness 自改进。
- LLM Agent 与多智能体—Agent 测试时扩展与自我改进：1篇新文献，FLARE 用生成奖励模型做长周期编码 Agent 密集监督。
- LLM Agent 与多智能体—LLM Agent Society：今日暂无新论文。
- 具身智能—视觉-语言-动作模型：12篇新文献，3D VLA、低比特量化、失败纠正、力觉人形、拓扑提示、世界模型蒸馏与鲁棒性基准。
- 具身智能—具身导航：7篇新文献，USV/VLN、策略解释、开放词汇导航、空间音频、UAV 决策与单目深度。
- 模型压缩与持续学习—LLM 剪枝与推理优化：3篇新文献，涉及视觉 token 剪枝与病理 MLLM 编码器内压缩。
- 模型压缩与持续学习—多模态大模型剪枝：2篇新文献，VPRune 与层感知位置嵌入。
- 模型压缩与持续学习—持续学习：10篇新文献，LoRA/CPT/自蒸馏/多阶段 Agent/流式异常。
- 视觉感知—事件相机视觉感知：今日暂无新论文。
- 视觉感知—3D 点云视觉感知：3篇新文献，鲁棒多模态 3D 检测、未知尺度补全、森林点云基础模型。
- 视觉感知—3D 点云感知与跟踪：今日暂无新论文。

## LLM Agent 与多智能体
### LLM Agent 工程
#### [MCP-GRANITE Benchmark: GRANularity Interface TEsting for MCP-Based LLM Agents](http://arxiv.org/abs/2609.24161v1)
Paschalides D. 等｜2026-09-21｜核心：提出 MCP 工具接口粒度测试基准。｜关联：直接指导 Agent 工具分解与选择。
#### [ActGov: Governing LLM Agent Actions via Policy-Constrained Validation](http://arxiv.org/abs/2609.24446v1)
Zhang K. 等｜2026-09-21｜核心：用策略约束验证治理 Agent 外部工具行动。｜关联：提升长周期 Agent 授权与安全执行。
#### [MemCalib: Benchmarking and Optimizing Memory Use in LLM Agents](http://arxiv.org/abs/2609.24259v1)
Cao R. 等｜2026-09-21｜核心：评测并优化 Agent 对上下文记忆的影响权重。｜关联：面向 Agent 记忆校准关键能力。
#### [DUMA-Bench: A Dual-Control Multi-Agent Benchmark for Evaluating LLM Agent Security](http://arxiv.org/abs/2609.24662v1)
Aleksandrov I. 等｜2026-09-21｜核心：提出双控制多 Agent 安全评测基准。｜关联：覆盖交互式多 Agent 安全动态。
#### [APEXA: Execution-Integrity Enforcement for Multi-Agent LLM Automation of Synchrotron Data Reduction](http://arxiv.org/abs/2609.24165v1)
Tripathi P. K. 等｜2026-09-21｜核心：为多 Agent 自动化加入执行完整性约束。｜关联：验证 Agent 在真实科学流水线中的可靠性。
#### [Emergent Collusion in Long-Horizon LLM Agent Interaction](http://arxiv.org/abs/2609.24967v1)
Shi X. 等｜2026-09-21｜核心：研究长周期多 Agent 互动中的合谋涌现。｜关联：揭示 Agent Society 负向协调风险。
#### [Self-Healing Harness for Runtime Oversight of Agent Self-Modification](http://arxiv.org/abs/2609.24130v1)
Tayebati S. 等｜2026-09-21｜核心：对 Agent 自修改进行运行时准入控制。｜关联：面向自我改进 Agent 的安全护栏。
#### [RRSI: Regularized Recursive Self-Improvement of Agent Harnesses](http://arxiv.org/abs/2609.24972v1)
Xia P. 等｜2026-09-21｜核心：正则化递归改进 Agent harness 组件。｜关联：自动化提示、控制流、记忆与工具管理。
#### [Luck Is Not Skill: When Do Paired Rollouts Help Group-Relative RL of LLM Agents?](http://arxiv.org/abs/2609.24144v1)
Sakib N.｜2026-09-21｜核心：分析配对 rollout 对 Agent 群组相对 RL 的增益。｜关联：改进 Agent 训练信号去噪。

### Agent 测试时扩展与自我改进
#### [FLARE: A Full-Lifecycle Dense Supervision Paradigm for Long-Horizon Coding Agents via Generative Reward Model](http://arxiv.org/abs/2609.23808v1)
Xu J. 等｜2026-09-20｜核心：用生成奖励模型为长周期编码 Agent 提供全生命周期密集监督。｜关联：缓解测试时扩展中的稀疏奖励与信用分配危机。

## 具身智能
### 视觉-语言-动作模型
#### [Bridge3D: Enabling Vision-Language-Action Models to See and Act in 3D](http://arxiv.org/abs/2609.24525v1)
Li H. 等｜2026-09-21｜核心：让 VLA 从 2D 观测扩展到 3D 空间感知与动作。｜关联：直接增强精细空间操作。
#### [FoldQuantVLA: Native Low-Bit Quantization of Vision-Language-Action Models via Consistent Folding](http://arxiv.org/abs/2609.24433v1)
Ho H. T. 等｜2026-09-21｜核心：用一致折叠实现 VLA 原生低比特后训练量化。｜关联：降低观测到动作延迟。
#### [CARE: Experience-Guided Atomic Corrective Execution for Vision-Language-Action Policies](http://arxiv.org/abs/2609.24118v1)
Xiao J. 等｜2026-09-21｜核心：从执行失败中学习原子纠正动作。｜关联：提升 VLA 偏离标称轨迹后的恢复能力。
#### [Opt2VLA: Force-Aware Vision-Language-Action for Contact-Rich Humanoid Whole-Body Manipulation](http://arxiv.org/abs/2609.23968v1)
Liu F. 等｜2026-09-21｜核心：为人形全身操作加入力觉感知 VLA。｜关联：面向接触丰富任务的力调节。
#### [Topology-Informed Visual Prompting For Vision Language Action Policies](http://arxiv.org/abs/2609.23944v1)
Wu H. 等｜2026-09-20｜核心：用拓扑信息视觉提示增强 VLA 策略。｜关联：处理复杂障碍几何与部分可观测。
#### [Think Like a World Model, Act Like a VLA: Distilling World-Model Representations into Compact Robot Policies](http://arxiv.org/abs/2609.24682v1)
Dao T. 等｜2026-09-21｜核心：将世界模型表征蒸馏进紧凑 VLA 策略。｜关联：提升 VLA 对世界动态的建模鲁棒性。
#### [LIBERO-VPro: Benchmarking Closed-Loop Visual Robustness of Robotic Foundation Models](http://arxiv.org/abs/2609.24350v1)
Li H. 等｜2026-09-21｜核心：提出闭环视觉鲁棒性基准。｜关联：系统评测 VLA 在视觉扰动下的执行稳定性。
#### [StenoVLA-3D: 3D-Aware Reasoning VLA for Navigation Through Gastrointestinal Stenoses](http://arxiv.org/abs/2609.24187v1)
Tabassum T. 等｜2026-09-21｜核心：面向胃肠狭窄导航的 3D 感知 VLA。｜关联：拓展 VLA 到纹理贫乏医学导航。
#### [Uranus: Building the Next-Generation Simulation Infrastructure for Embodied AI](http://arxiv.org/abs/2609.24815v1)
Qin W. 等｜2026-09-21｜核心：数据驱动关节轨迹条件机器人仿真基础设施。｜关联：支撑 VLA 数据生成、训练与评测。

### 具身导航
#### [RiverVLN: Phase-Grounded Temporal Vision--Language Navigation for Unmanned Surface Vehicles](http://arxiv.org/abs/2609.23423v1)
Wu J. 等｜2026-09-20｜核心：面向无人水面艇的阶段锚定时序 VLN。｜关联：突破室内/陆地 VLN 假设。
#### [What do VLM-Based Vision-Language Navigation Models Rely on: Interpreting and Steering Policy Behavior](http://arxiv.org/abs/2609.24576v1)
Makowski D. O. 等｜2026-09-21｜核心：解释并引导 VLM 导航策略的信息路由。｜关联：提升 VLN 可解释性与可控性。
#### [A Topological Representation with Object-Path Graphs for Open-Vocabulary Instance Navigation](http://arxiv.org/abs/2609.24189v1)
Zheng L. 等｜2026-09-21｜核心：用物体-路径图拓扑表示开放词汇实例导航。｜关联：结合先验环境知识与语言指令。
#### [OmniEcho: Spatial Audio Understanding for Embodied Agents](http://arxiv.org/abs/2609.23407v1)
Liu R. 等｜2026-09-20｜核心：评测并建模具身 Agent 空间音频理解。｜关联：为导航加入声音方向线索。
#### [ME-VLM:A Unified VLM for Embodied Cognition and Agent Coordination](http://arxiv.org/abs/2609.24526v1)
Li Auto Inc.｜2026-09-21｜核心：统一 VLM 支持具身认知与 Agent 协调。｜关联：服务物理环境中的视觉语言导航。
#### [PhysAI-Bench: A Benchmark for LLM-Based Agentic Decision-Making in Autonomous UAV-Centric Physical AI](http://arxiv.org/abs/2609.23695v1)
Ferrag M. A. 等｜2026-09-20｜核心：提出 UAV 自主物理 AI 的 LLM Agent 决策基准。｜关联：覆盖具身导航与行动规划。
#### [CMAMBADEPTH: Self-supervised Monocular Depth Estimation with Channel Mamba and Hybrid Attention](http://arxiv.org/abs/2609.24494v1)
Xiang X. 等｜2026-09-21｜核心：用 Channel Mamba 与混合注意力提升自监督单目深度。｜关联：为导航提供场景深度感知基础。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### [SLICEChat: Progressive In-Encoder Token Pruning for Whole-Slide Pathology Language Models](http://arxiv.org/abs/2609.24894v1)
Bozkurt A. K. 等｜2026-09-21｜核心：在全切片病理语言模型中做编码器内渐进 token 剪枝。｜关联：降低千兆像素病理 MLLM 推理成本。
### 多模态大模型剪枝
#### [VPRune: Efficient Training-free Pre-LLM Visual Token Pruning](http://arxiv.org/abs/2609.24485v1)
Lv G. 等｜2026-09-21｜核心：提出无需训练的 LLM 前视觉 token 剪枝。｜关联：缓解 LVLM 推理成本与性能退化。
#### [Layer-Aware Position Embeddings for Visual Token Pruning in Multimodal Large Language Models](http://arxiv.org/abs/2609.23715v1)
Wang Y. 等｜2026-09-20｜核心：为剪枝后视觉 token 重新设计层感知位置嵌入。｜关联：改善 MLLM 视觉 token 压缩后的位置信息。
### 持续学习
#### [Muon Can Outperform Dedicated Continual Learning Methods](http://arxiv.org/abs/2609.24678v1)
Sincari S. G. 等｜2026-09-21｜核心：发现 Muon 在 LoRA 持续学习中优于专用方法。｜关联：重新审视优化器对遗忘控制的作用。
#### [iSDFT: Information-Proximal Self-Distillation for Continual Learning in LLMs](http://arxiv.org/abs/2609.24646v1)
Khamis A. K. 等｜2026-09-21｜核心：用信息邻近自蒸馏控制演示信息量。｜关联：平衡新技能学习与灾难性遗忘。
#### [Bilinear Optimization Divergence: Diagnosing Factor-Constrained LoRA Continual Learning](http://arxiv.org/abs/2609.23594v1)
Wang Y. 等｜2026-09-20｜核心：用双线性优化散度诊断 LoRA 持续学习。｜关联：解释正交约束实际保护对象。
#### [CE$^4$L: Continual Ego, Exo, and Ego-Exo Learning](http://arxiv.org/abs/2609.23492v1)
Yan H. 等｜2026-09-20｜核心：提出自我/外部视角耦合持续学习设定。｜关联：面向具身视频感知的视角-任务联合漂移。
#### [0.5\%>100\%: Bidirectional Reciprocal Learning for Referring Image Segmentation](http://arxiv.org/abs/2609.24510v1)
Lu X. 等｜2026-09-21｜核心：用双向互学习高效适配视觉基础模型。｜关联：低训练比例下减少持续适配成本。
#### [LoRA-generating hypernetworks for efficient on-device LLM generative personalization](http://arxiv.org/abs/2609.24979v1)
Augenstein S. 等｜2026-09-21｜核心：用超网络生成 LoRA 实现端侧 LLM 个性化。｜关联：持续个性化与参数高效微调结合。
#### [ACLArena: Agent Continue Learning in Multi-stage Post-training](http://arxiv.org/abs/2609.23989v1)
Wang H. 等｜2026-09-21｜核心：提出 Agent 多阶段后训练持续学习评测。｜关联：理解 Agent 能力整合中的遗忘-迁移权衡。
#### [Time-Incremental Continued Pretraining of LLMs: Knowledge Updates Without Catastrophic Forgetting](http://arxiv.org/abs/2609.23916v1)
Öncel F. 等｜2026-09-20｜核心：时间增量持续预训练更新 LLM 知识。｜关联：缓解知识过时且不重训。
#### [Perplexity Predicts Protection: Choosing Pretrained Backbones for Worst-Client Fairness in Federated Parameter-Efficient Fine-Tuning](http://arxiv.org/abs/2609.23463v1)
Naseer K. 等｜2026-09-20｜核心：用困惑度预测联邦 PEFT 最差客户端公平性。｜关联：持续适配中的公平与骨干选择。
#### [Collaborative Streaming Anomaly Detection with Interactive Explanations and Ensemble Consensus](http://arxiv.org/abs/2609.23883v1)
Risca D. 等｜2026-09-20｜核心：结合集成共识与人工解释的流式异常检测。｜关联：面向高速度数据流的持续学习系统。

## 视觉感知
### 3D 点云视觉感知
#### [Towards robust multimodal 3D object detection via visual foundation models](http://arxiv.org/abs/2609.23541v1)
Song Z. 等｜2026-09-20｜核心：用视觉基础模型增强多模态 3D 目标检测鲁棒性。｜关联：提升 LiDAR-相机 OOD 鲁棒感知。
#### [ScaleBlind: Point Cloud Completion under Unknown Scale](http://arxiv.org/abs/2609.23404v1)
Wu S. 等｜2026-09-20｜核心：处理未知尺度下的点云补全。｜关联：减少对全局尺度先验依赖。
#### [Toward a foundation model for forest point clouds](http://arxiv.org/abs/2609.24787v1)
Yue Y. 等｜2026-09-21｜核心：构建森林点云基础模型。｜关联：跨任务、传感器、林型适配 3D 点云。

## 跨方向信号
- VLA 正吸收 3D 感知、世界模型与仿真基础设施，空间操作和鲁棒评测成为共同瓶颈。
- Agent 工程从功能编排转向治理、安全、记忆校准与自修改准入；测试时扩展强调密集奖励和信用分配。
- 压缩重点从纯文本 LLM 扩散到多模态/VLA token 剪枝与低比特推理，延迟与行为保持并重。
- 持续学习与 LoRA、CPT、自蒸馏、多阶段 Agent 训练深度融合，关注遗忘-迁移-公平权衡。
- 具身导航多模态化：语言、视觉、音频、深度与 VLM 解释共同驱动策略行为。

## 优先精读
- [Bridge3D](http://arxiv.org/abs/2609.24525v1)：直击 VLA 的 2D 中心观测瓶颈，将 3D 空间感知与动作结合，影响具身操作主线。
- [FLARE](http://arxiv.org/abs/2609.23808v1)：长周期编码 Agent 的测试时扩展与自我改进样本少但问题关键，密集监督思路可迁移到多智能体。
- [VPRune](http://arxiv.org/abs/2609.24485v1)：训练免费的多模态视觉 token 剪枝，兼顾推理成本与性能退化，对多模态/VLA 部署价值高。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*