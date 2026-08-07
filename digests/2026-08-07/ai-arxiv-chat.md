# 实验室研究方向 Radar 2026-08-07

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 20 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-08-07 01:28 UTC

---

## 今日总览

- LLM Agent 与多智能体 / LLM Agent 工程：3 篇新论文；聚焦可学习/进化的运行时 harness、环境派生状态训练与风险感知 guardrail。
- LLM Agent 与多智能体 / Agent 测试时扩展与自我改进：2 篇新论文；从“扩大采样”转向 harness 协同进化和测试时自校正。
- LLM Agent 与多智能体 / LLM Agent Society：今日暂无新论文。
- 具身智能 / 视觉-语言-动作模型：3 篇新论文；集中为 VLA 注入语言推理、显式记忆与 agentic tool use。
- 具身智能 / 具身导航：1 篇新论文；SpikingNav 用脉冲神经策略增强鲁棒性与效率。
- 模型压缩与持续学习 / LLM 剪枝与推理优化：1 篇新论文；EdgeXpert 面向边缘 LLM 的 MoE 与投机解码联合加速。
- 模型压缩与持续学习 / 多模态大模型剪枝：3 篇新论文；覆盖视觉 token 的角色分析、空间聚类压缩与动态证据构建。
- 模型压缩与持续学习 / 持续学习：2 篇新论文；CL 范式扩展与 PINN 持续学习并行推进。
- 视觉感知 / 事件相机视觉感知：2 篇新论文；事件信号用于反射去除与厨房动态场景数据集。
- 视觉感知 / 3D 点云视觉感知：2 篇新论文；从点云生成与多模态场景理解两个角度推进 3D 建模。
- 视觉感知 / 3D 点云感知与跟踪：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [EvoHarness-RL: Learning Self-Evolving Runtime Harness for Long-Horizon LLM Agents](http://arxiv.org/abs/2608.05446v1)

作者: X. Ning, D. Fu, T. Wei et al. | 发布: 2026-08-05

核心贡献：提出用强化学习训练长程 Agent 的运行时 harness，使其能从噪声交互轨迹中形成状态并持续进化。

方向关联：直接解决 LLM Agent 工程中的状态维护、工具调用与执行支持问题。

#### [State2State: Environment-Derived Mid-Training for LLM Agents](http://arxiv.org/abs/2608.04934v1)

作者: X. Lei, Y. Zhu, C. Li et al. | 发布: 2026-08-05

核心贡献：提出从环境派生状态转移进行中间训练，降低对专家轨迹和人工验证器的依赖。

方向关联：为 LLM Agent 训练提供一种不依赖外部任务标注的工程化路径。

#### [DreamGuard: Efficient Runtime Guardrail for LLM Agents via Risk-Aware World Model](http://arxiv.org/abs/2608.05695v1)

作者: W. Lin, C. Yu, X. Lin et al. | 发布: 2026-08-06

核心贡献：用风险感知世界模型在动作执行前进行高效安全检查，防止不可逆后果。

方向关联：是 LLM Agent 运行时安全与 guardrail 工程的关键组件。

### Agent 测试时扩展与自我改进

#### [EvolveNet: Collaborative Harness Evolution for Agent Self-Improvement](http://arxiv.org/abs/2608.04968v1)

作者: J. Nie, Y. Zhang, Q. Cai et al. | 发布: 2026-08-05

核心贡献：提出多个 harness 协同进化，使 Agent 在不更新模型权重的情况下持续自我改进。

方向关联：核心是测试时/部署后的 Agent 自我改进机制。

#### [Refining Over Resampling: Test-Time Self-Correction for LLM Reasoning](http://arxiv.org/abs/2608.05643v1)

作者: A. Bilal, M. A. Mohsin, M. Umer et al. | 发布: 2026-08-06

核心贡献：针对重复采样收益递减，提出对已有 rollout 进行测试时自校正而非盲目扩大采样。

方向关联：直接研究测试时扩展的新范式，与推理自我改进高度相关。

### LLM Agent Society

今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [In-Context VLA: Endowing Vision-Language-Action Models with Language via In-Context Post-Training and Agentic Tool Use](http://arxiv.org/abs/2608.05738v1)

作者: J. Yang, W. Huang, J. Zhang et al. | 发布: 2026-08-06

核心贡献：通过上下文后训练和 Agent 工具使用，为 VLA 模型注入显式语言推理能力。

方向关联：直接针对 VLA 行为克隆范式的静态监督瓶颈进行改进。

#### [BridgeVLA++: A Data-Efficient, Generalizable, and Memory-Augmented Vision-Language-Action Framework for 3D Manipulation](http://arxiv.org/abs/2608.05042v1)

作者: P. Li, Y. Zhu, Y. Chen et al. | 发布: 2026-08-05

核心贡献：提出数据高效、泛化更强且带显式记忆增强的 3D 操作 VLA 框架。

方向关联：为 VLA 提供记忆与泛化增强，面向 3D 机器人操作。

#### [Explicit Language Memory for Long-Horizon Planning in Vision-Language-Action Models](http://arxiv.org/abs/2608.04765v1)

作者: H. Xu, J. Li, Z. Ye | 发布: 2026-08-05

核心贡献：为 VLA 增加显式语言记忆，提升长程任务的组合泛化能力。

方向关联：解决 VLA 在长期规划中的记忆与跨任务组合瓶颈。

### 具身导航

#### [SpikingNav: Robust Embodied Navigation with Spiking Neural Policies](http://arxiv.org/abs/2608.05078v1)

作者: J. Zhang, S. Shen, D. Wu et al. | 发布: 2026-08-05

核心贡献：用脉冲神经策略执行具身导航，降低计算成本并提升对视觉扰动的鲁棒性。

方向关联：直接面向具身导航的决策策略设计。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [EdgeXpert: An Edge Device for Memory-Efficient LLM Inference with Mixture-of-Experts and Speculative Decoding](http://arxiv.org/abs/2608.05303v1)

作者: S. Ha, H. Seo, Y. Jo et al. | 发布: 2026-08-05

核心贡献：面向边缘设备设计 MoE 与投机解码联合加速方案，减少 FFN 层外部内存访问。

方向关联：属于 LLM 边缘推理优化与高效解码方向。

### 多模态大模型剪枝

#### [Not All Redundant Tokens Are Alike: Analyzing Visual Token Pruning through Token Roles](http://arxiv.org/abs/2608.04483v1)

作者: H. Kim, S. Lim, Y. Choi et al. | 发布: 2026-08-05

核心贡献：分析被剪视觉 token 的不同角色，揭示剪枝决策与下游性能的关系。

方向关联：为 VLM 视觉 token 剪枝提供角色感知依据。

#### [HiSC: Hierarchical Spatial Clustering Token Compression for Efficient 3D Scene Understanding](http://arxiv.org/abs/2608.04610v1)

作者: J. Qu, Y. Liang, Y. Fu | 发布: 2026-08-05

核心贡献：用分层空间聚类压缩 3D VLM 的视觉 token，减少重复与无信息区域。

方向关联：将 token 压缩引入 3D 多模态大模型的推理加速。

#### [DIVE: Dynamic Iterative Visual Evidence Construction for Efficient Vision-Language Models](http://arxiv.org/abs/2608.04496v1)

作者: C. Zhong, X. An, Z. Wang et al. | 发布: 2026-08-05

核心贡献：动态迭代构建视觉证据，而非单次剪枝，从而提升 VLM 推理效率。

方向关联：属于 VLM 推理中的 token 级动态优化。

### 持续学习

#### [Continual Learning in Transition](http://arxiv.org/abs/2608.06216v1)

作者: Z. Hou, D. Zhang, T. Feng et al. | 发布: 2026-08-06

核心贡献：梳理经典持续学习向训练策略、架构设计与外部环境等新范式的转变。

方向关联：为持续学习方向提供整体框架性参照。

#### [Continual-Learning Physics-Informed Neural Networks for Parameterized Partial Differential Equations](http://arxiv.org/abs/2608.04778v1)

作者: X. Chen, X. Hu, L. Chen et al. | 发布: 2026-08-05

核心贡献：提出面向参数化 PDE 的 PINN 持续学习方案，缓解灾难性遗忘。

方向关联：将持续学习方法拓展到科学计算与 PINN 领域。

## 视觉感知

### 事件相机视觉感知

#### [EvReflection: Event-Driven Micro-Dynamics for Reflection Removal](http://arxiv.org/abs/2608.06184v1)

作者: J. Wang, D. Kai, H. Zhu et al. | 发布: 2026-08-06

核心贡献：利用事件信号中的微动态消除反射，缓解静态图像反射/透射层歧义。

方向关联：展示事件相机在底层视觉任务中的新应用。

#### [Cooking beyond Frames: A Stereo Event Camera Dataset in the Kitchen](http://arxiv.org/abs/2608.04865v1)

作者: C. Feng, H. Araghi, L. Zheng et al. | 发布: 2026-08-05

核心贡献：发布厨房场景立体事件相机数据集，覆盖人类活动与动态对象。

方向关联：扩展事件相机数据生态，推动动态场景感知研究。

### 3D 点云视觉感知

#### [Hierarchical Flow Matching for 3D Point Cloud Generation](http://arxiv.org/abs/2608.05557v1)

作者: L. Wang, Q. Zhang, Y. Su et al. | 发布: 2026-08-06

核心贡献：提出分层流匹配生成高质量 3D 点云，避免昂贵 ODE 求解与多步扩散采样。

方向关联：为 3D 点云感知与建模提供高质量几何生成先验。

#### [SmartMage: Dynamic Modality Orchestration for 3D Scene Understanding](http://arxiv.org/abs/2608.05137v1)

作者: Y. Zhang, Y. Jian, Y. Xu et al. | 发布: 2026-08-05

核心贡献：根据查询动态编排多模态输入以理解 3D 场景，降低无关模态干扰。

方向关联：为 3D 点云/场景感知提供模态级动态选择机制。

### 3D 点云感知与跟踪

今日暂无新论文。

## 跨方向信号

- 运行时 harness 正在成为 Agent 能力的一部分：EvoHarness-RL 和 EvolveNet 将 harness 作为可学习/可进化对象，State2State 从环境派生训练信号，推动 Agent 工程与自我改进融合。
- 显式记忆与状态复用跨越 VLA 和 LLM Agent：BridgeVLA++、Explicit Language Memory 为 VLA 增加语言记忆，EvoHarness 与 State2State 为长程 Agent 维护可复用状态。
- 视觉 token 效率从“单次剪枝”走向“结构化/迭代构建”：Not All Redundant Tokens 分析 token 角色，HiSC 以空间聚类压缩，DIVE 动态迭代构建证据，使多模态推理优化更精细。
- 测试时扩展的重心从“更多采样”转向“更聪明地修正”：Refining Over Resampling 直接校正已有 rollout，EvolveNet 协同演化 harness，减少重复采样的边际成本。

## 优先精读

- [In-Context VLA](http://arxiv.org/abs/2608.05738v1)：把 Agent 工具使用与上下文后训练引入 VLA，直击行为克隆的静态监督瓶颈，是 VLA 路线的重要升级信号。
#### - [Continual Learning in Transition](http://arxiv.org/abs/2608.06216v1)：对 CL 的边界与未来范式做系统梳理，适合作为持续学习后续选题的框架性参考。
- [EvoHarness-RL](http://arxiv.org/abs/2608.05446v1)：将运行时 harness 作为强化学习对象，解决长程 Agent 的状态形成与执行支持问题，工程落地价值高。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*