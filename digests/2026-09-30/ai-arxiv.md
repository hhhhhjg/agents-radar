# 实验室研究方向 Radar 2026-09-30

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 62 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-30 00:57 UTC

---

## 今日总览
- **LLM Agent 与多智能体 / LLM Agent 工程**：10 篇新文，聚焦隐私记忆、token 消耗预测、工具调用偏差与分发安全、状态回滚、信用分配与自演化安全。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：10 篇新文，覆盖 looped transformer、latent TTS、预算验证、MCTS、多智能体辩论与 TTA。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：11 篇新文，集中在失败驱动学习、视觉中断鲁棒、动作 tokenization、可拒绝决策与持续自改进。
- **具身智能 / 具身导航**：10 篇新文，涉及往返/终身/空中 VLN、边缘量化、物体导航与城市语义建图。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：5 篇新文，含半结构化剪枝、QLoRA 量化与视觉 token 压缩。
- **模型压缩与持续学习 / 多模态大模型剪枝**：6 篇新文，聚焦视觉 token 剪枝、剪枝+量化、语义覆盖与 MLP 重建。
- **模型压缩与持续学习 / 持续学习**：10 篇新文，含 LoRA 子空间保护、回放、学习动态、harness TTA 与联邦专家组装。
- **视觉感知 / 事件相机视觉感知**：3 篇新文，含事件光流、事件增强操作与视频任务统一。
- **视觉感知 / 3D 点云视觉感知**：4 篇新文，含超二次分解、场景状态构建、FMCW LiDAR 数据集与 3DGS 分割。
- **视觉感知 / 3D 点云感知与跟踪**：1 篇新文，SSM 用于绝对尺度 3D 点跟踪。

## LLM Agent 与多智能体
### LLM Agent 工程
#### [EP-Mem: Elastic Privacy Memory for Social Relationship-Aware LLM Agents](http://arxiv.org/abs/2609.35233v1)
Sun et al. | 09-28 | 社会关系感知的弹性隐私记忆。| 直接服务 agent 记忆与隐私边界工程。
#### [TokenCast: Forecasting Token Consumption During LLM Agent Execution](http://arxiv.org/abs/2609.35760v1)
Ouyang et al. | 09-28 | 预测 agent 执行中的 token 消耗。| 面向 agent 成本可预测性与运行监控。
#### [Action-Space Shaping for LLM Agents: Measuring and Mitigating Tool-Schema Bias](http://arxiv.org/abs/2609.34971v1)
Liu et al. | 09-28 | 度量并缓解工具 schema 偏差。| 工具调用接口设计直接影响 agent 行为。
#### [Planarian: Managing Agent State with Statepoints](http://arxiv.org/abs/2609.35366v1)
Guo et al. | 09-28 | 用 statepoints 管理 agent 跨环境状态。| 解决 agent 状态回滚、复现与恢复。
#### [SEABench: Benchmarking Endogenous Misalignment In Self-Evolving Agents](http://arxiv.org/abs/2609.35596v1)
Das et al. | 09-28 | 评测自演化 agent 的内生 misalignment。| 为 agent 自我修改与安全工程提供基准。

### Agent 测试时扩展与自我改进
#### [Improving Test-Time Scaling with Adaptive Looped Transformers](http://arxiv.org/abs/2609.35748v1)
You et al. | 09-28 | 自适应循环 transformer 改善测试时扩展。| 探索参数复用下的推理时计算扩展。
#### [Token-Disentangled Latent Test-Time Scaling for Vision-Language Reasoning](http://arxiv.org/abs/2609.35228v1)
Ma et al. | 09-28 | 按 token 角色分离 latent TTS 更新。| 面向多模态推理的细粒度测试时改进。
#### [Test-Time Scaling via Budgeted Multi-Attribute Verification](http://arxiv.org/abs/2609.34322v1)
Xue et al. | 09-28 | 预算约束下多属性验证候选答案。| 将 TTS 建模为预算分配与验证选择。
#### [HyperMCTS: Hypergraph-Augmented MCTS for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.33920v1)
Xiao et al. | 09-27 | 超图增强 MCTS 用于长时 agent。| 以搜索形式扩展 agent 测试时规划。
#### [Beyond Solo and Consistency: Vindicating Multi-Agent Debate via Conditional Progressive Pruning](http://arxiv.org/abs/2609.33974v1)
Ye et al. | 09-27 | 条件渐进剪枝改进多智能体辩论。| 多智能体辩论作为 TTS 方法的效率优化。

## 具身智能
### 视觉-语言-动作模型
#### [RefineDrive: Reliable Failure-Guided Learning for Vision-Language-Action Driving](http://arxiv.org/abs/2609.35078v1)
Sun et al. | 09-28 | 可靠失败引导的 VLA 驾驶学习。| 将失败样本转化为 VLA 改进信号。
#### [Learning to Act under Visual Interruptions with Vision-Language-Action Models](http://arxiv.org/abs/2609.35003v1)
Jiang et al. | 09-28 | 相机中断下继续执行动作。| 提升 VLA 在视觉缺失时的鲁棒性。
#### [Rethinking Causal Action Tokenization with Conditional Annealing in Flow Matching](http://arxiv.org/abs/2609.35469v1)
Zhang et al. | 09-28 | 因果动作 tokenizer CATok。| 改善 VLA 动作表示与自回归骨干对齐。
#### [Do Not Cut When Uncertain: Rejectable and Calibrated Decision Heads for VLA Policies in Robotic Harvesting](http://arxiv.org/abs/2609.35039v1)
Zhang | 09-28 | 可拒绝且校准的 VLA 决策头。| 让 VLA 能表达“不确定/不应行动”。
#### [F4R: Failure-Driven Recognition, Reconstruction, Refinement, and Redeployment for Continual Robot Self-Improvement](http://arxiv.org/abs/2609.35575v1)
Yu et al. | 09-28 | 失败驱动的机器人持续自改进。| 连接 VLA 部署后的失败修复与再部署。

### 具身导航
#### [NavHarness: Towards Lifelong Embodied Navigation](http://arxiv.org/abs/2609.34276v1)
Zhao et al. | 09-28 | 面向终身具身导航的 harness。| 强调跨任务地图与搜索记录演化。
#### [Reliability-Aware Sparse Route Memory for Round-Trip Vision-Language Navigation](http://arxiv.org/abs/2609.34163v1)
Long et al. | 09-28 | 往返 VLN 的可靠稀疏路线记忆。| 处理方向可观测性、偏航恢复与终止稳定性。
#### [ForeFly: A Dual-Horizon World Action Model for Aerial Vision-Language Navigation](http://arxiv.org/abs/2609.33581v1)
Wang et al. | 09-27 | 双 horizon 空中 VLN 世界动作模型。| 面向 UAV 长轨迹指令跟随。
#### [EdgeVLN: Runtime-Aware Deployment Ready Quantized Vision Language Navigation Model](http://arxiv.org/abs/2609.35570v1)
Jonna et al. | 09-28 | 运行时感知量化 VLN 边缘部署。| 将 VLN 压缩到内存、延迟、能耗预算内。
#### [SOR-Nav: Search or Relocate? Context-Gated Exploration and Cross-Region Relocation for Object Navigation](http://arxiv.org/abs/2609.34707v1)
Ji et al. | 09-28 | 上下文门控探索与跨区域重定位。| 改进部分可观测下的物体导航。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### [Optimizing the Phi-2 Small Language Model for Real-time Chatbot Applications Using PEFT with QLoRA Quantization](http://arxiv.org/abs/2609.33927v1)
Nguyen et al. | 09-27 | QLoRA 量化微调 Phi-2。| 小模型实时部署的压缩与适配。
#### [GroupMask: Layer-Adaptive Group-wise Sparsity for Semi-Structured LLM Pruning](http://arxiv.org/abs/2609.33977v1)
Li et al. | 09-27 | 层自适应组稀疏半结构化剪枝。| 突破统一 N:M 稀疏率限制。
#### [SPIDER: Multi-Layer Semantic Token Pruning and Adaptive Sub-Layer Skipping in Multimodal Large Language Models](http://arxiv.org/abs/2609.34977v1)
Chen et al. | 09-28 | 多层语义 token 剪枝与子层跳过。| 同时处理数据冗余与计算冗余。

### 多模态大模型剪枝
#### [ACPruner: Visual Token Pruning as Biased Attention Coverage Maximization in LVLMs](http://arxiv.org/abs/2609.34558v1)
Li et al. | 09-28 | 以偏置注意力覆盖最大化做视觉 token 剪枝。| 重新审视重要性与多样性剪枝。
#### [P4Q: Co-designing Token Pruning and Quantization for Vision-Language Model Acceleration](http://arxiv.org/abs/2609.34867v1)
Jing et al. | 09-28 | 联合设计 token 剪枝与量化。| 从两个维度降低 VLM 推理开销。
#### [Just MLPs: Efficient Visual State Reconstruction for Multimodal Language Models](http://arxiv.org/abs/2609.34972v1)
Lei et al. | 09-28 | 用 MLP 重建被剪视觉状态。| 避免永久丢弃后续层有用视觉证据。
#### [MiCo: Mutual Information Coverage Optimization through Semantic Erasure Modeling for Efficient MLLM Inference](http://arxiv.org/abs/2609.34330v1)
Wang et al. | 09-28 | 语义擦除建模下的互信息覆盖优化。| 减少 MLLM 视觉 token 计算成本。

### 持续学习
#### [SPACE-LoRA: Allocating Activation-Subspace Protection for Continual Learning](http://arxiv.org/abs/2609.34453v1)
Yoo et al. | 09-28 | 激活子空间保护用于 LoRA 持续学习。| 缓解连续任务中的灾难性遗忘。
#### [Reliable Replay through Spatial Coherence in Online Continual Learning](http://arxiv.org/abs/2609.33725v1)
Sun et al. | 09-27 | 基于空间一致性的可靠回放。| 改进在线持续学习的经验回放优先级。
#### [Learning Dynamics of Continual Learning: A Unified View of Data Attribution, Forgetting, and Plasticity Loss](http://arxiv.org/abs/2609.33620v1)
Ren et al. | 09-27 | 统一数据归因、遗忘与可塑性损失。| 理解持续更新中的学习动态。
#### [Harness Learning Enables Generalizable Test-Time Adaptation](http://arxiv.org/abs/2609.35738v1)
Zhang et al. | 09-28 | 通过 harness 学习实现可泛化 TTA。| 将 agent 程序与模型共同适配。
#### [RoboFL: Federated Expert Assembly for World Action Models](http://arxiv.org/abs/2609.34968v1)
Zhang et al. | 09-28 | 联邦专家组装世界动作模型。| 在异构任务中持续适配共享基础模型。

## 视觉感知
### 事件相机视觉感知
#### [E-WAVE: Event-based Continuous Optical Flow via Warping-Aligned Visual Encoding](http://arxiv.org/abs/2609.34346v1)
Wu et al. | 09-28 | 事件连续光流与 warping 对齐编码。| 面向 VR/AR 高时间密度运动感知。
#### [ECHO: Event-Augmented Context with Hindsight and Outlook for Wrist-Only Manipulation](http://arxiv.org/abs/2609.34893v1)
Wang et al. | 09-28 | 事件增强上下文用于腕部操作。| 解决极端曝光下 RGB 操作退化。
#### [Video, Ergo Genero: Unifying Video Tasks via Spatiotemporal Analogy](http://arxiv.org/abs/2609.33935v1)
Kao et al. | 09-27 | 用时空类比统一视频任务。| 间接启发事件视频任务的无训练适配。

### 3D 点云视觉感知
#### [Superquadric Primitive Decomposition of 3D point clouds via Geometric-Aware Inlier Refinement](http://arxiv.org/abs/2609.35725v1)
Rinaldi et al. | 09-28 | 几何感知内点优化的超二次分解。| 提升 3D 点云可解释基元表示。
#### [SceneScaffold: Active Scene-State Construction for Unified 3D Scene Understanding](http://arxiv.org/abs/2609.33518v1)
Li et al. | 09-27 | 主动场景状态构建统一 3D 理解。| 缓解 3D-LMM 视觉瓶颈的同质压缩。
#### [AevaScenes: An FMCW LiDAR Dataset and Benchmark for Long-Range Perception](http://arxiv.org/abs/2609.33230v1)
Narasimhan et al. | 09-27 | FMCW LiDAR 长距感知数据集。| 提供径向多普勒速度新运动线索。
#### [EviSplat: Preserving Multi-View Evidence in 3D Gaussian Splatting for Open-Vocabulary Segmentation](http://arxiv.org/abs/2609.34853v1)
Moon et al. | 09-28 | 保留多视角证据的 3DGS 开放词表分割。| 改进 3D 场景语言落地与分割。

### 3D 点云感知与跟踪
#### [3D Point Tracking with State Space Models](http://arxiv.org/abs/2609.34035v1)
Ogawa et al. | 09-27 | 用状态空间模型做绝对尺度 3D 点跟踪。| 面向重建、导航与自动驾驶的米制跟踪。

## 跨方向信号
- **测试时扩展外溢**：looped transformer、MCTS、预算验证和多智能体辩论正从 LLM 推理扩展到 agent 规划与具身决策。
- **视觉 token 压缩成为部署核心**：剪枝、量化、子层跳过与状态重建在多模态/VLM 中协同出现，目标是实际推理加速。
- **Agent 工程转向状态、工具与安全**：隐私记忆、statepoints、tool-schema bias、自演化 misalignment 表明工程重点从能力转向可控与可恢复。
- **失败驱动自改进贯穿具身与持续学习**：VLA、导航、持续机器人和 TTA 都在利用失败、回放或 harness 更新提升长期可靠性。

## 优先精读
#### **NavHarness: Towards Lifelong Embodied Navigation**：直接面向终身具身导航中的地图与搜索记录演化，连接 agent memory、导航与持续适应。
#### **SPACE-LoRA: Allocating Activation-Subspace Protection for Continual Learning**：给出 LoRA 持续学习中的子空间保护思路，对模型压缩与持续学习交叉方向通用性强。
#### **P4Q: Co-designing Token Pruning and Quantization for Vision-Language Model Acceleration**：联合剪枝与量化，代表多模态部署优化的系统级趋势，实用价值高。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*