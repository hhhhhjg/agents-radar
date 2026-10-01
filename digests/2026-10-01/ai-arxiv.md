# 实验室研究方向 Radar 2026-10-01

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 47 篇新文献 + 11 篇过去14天内已出现 | 生成时间：2026-10-01 01:00 UTC

---

## 今日总览

- **LLM Agent 与多智能体**
  - **LLM Agent 工程**：10 篇新文献；聚焦技能自进化/检索、harness 测试时组合、审批与信任安全、记忆更新和轨迹多样性。
  - **Agent 测试时扩展与自我改进**：今日暂无新论文。
  - **LLM Agent Society**：今日暂无新论文。
- **具身智能**
  - **视觉-语言-动作模型**：11 篇新文献；覆盖动态操作、语言记忆、对抗鲁棒、组合泛化与相机故障。
  - **具身导航**：11 篇新文献、1 篇过去14天已出现；聚焦证据寻求、在线适应、预测 4D 信念、场景记忆与实时查询。
- **模型压缩与持续学习**
  - **LLM 剪枝与推理优化**：5 篇新文献、4 篇过去14天已出现；音频/视觉 token、世界动作模型稀疏想象与流式推理是重点。
  - **多模态大模型剪枝**：2 篇新文献、6 篇过去14天已出现；文本-视觉显著性、表示动态与 token 参数化继续推进。
  - **持续学习**：10 篇新文献；覆盖联邦回放、CTTA、时序 KG、动力系统、LoRA 梯度分解、语言技能自进化。
- **视觉感知**
  - **事件相机视觉感知**：2 篇新文献、2 篇过去14天已出现；事件深度蒸馏与时间表示盲点受关注。
  - **3D 点云视觉感知**：1 篇新文献、2 篇过去14天已出现；长尾 LiDAR 检测与可解释几何分解。
  - **3D 点云感知与跟踪**：今日暂无新论文。

## LLM Agent 与多智能体

### LLM Agent 工程

#### [Rep2Skill: Representation-Guided Skill Self-Evolution for LLM Agents](http://arxiv.org/abs/2609.39149v1)
Zhang et al. | 09-30 | 表示引导技能自进化，突破纯文本优化；关联：Agent 技能持续积累。

#### [SkillSeek: Revisiting Agent Skill Retrieval at Marketplace Scale](http://arxiv.org/abs/2609.38822v1)
Yang et al. | 09-30 | 面向市场级技能检索；关联：解决 Agent 技能选择瓶颈。

#### [Composing Task-specific Agent Harnesses at Test Time with Reusable Primitives](http://arxiv.org/abs/2609.38912v1)
Kuang et al. | 09-30 | 测试时用可复用原语组合 harness；关联：自适应 Agent 工程。

#### [Can Agents Trust Their Skills? Uncovering Unsafe Chains of Trust in Skill-Based LLM Agents](http://arxiv.org/abs/2609.39065v1)
Wang et al. | 09-30 | 揭示技能安装后的不安全信任链；关联：Agent 技能安全。

#### [Approval Laundering: Systematizing Approval--Execution Binding Failures in AI Coding-Agent Harnesses](http://arxiv.org/abs/2609.38983v1)
Wang | 09-30 | 系统化审批-执行绑定失败；关联：编码 Agent harness 安全边界。

#### [Explicit Trajectory Diversity for RL-Based Post-Training of LLM Agents](http://arxiv.org/abs/2609.38805v1)
Fu et al. | 09-30 | RL 后训练显式优化轨迹多样性；关联：LLM Agent 后训练。

#### [When Context Changes: Understanding Update Failures in LLMs](http://arxiv.org/abs/2609.38866v1)
Guo et al. | 09-30 | 研究上下文变量更新失败 stale binding；关联：Agent 状态更新可靠。

#### [Personalized State-Transition-Aware Memory for Clinical Agents](http://arxiv.org/abs/2609.38490v1)
Haghifam et al. | 09-29 | 临床 Agent 状态转移感知记忆；关联：长期记忆不覆盖历史。

## 具身智能

### 视觉-语言-动作模型

#### [DSDyn-VLA: A Dual-Stream Dynamic Manipulation Framework with Motion Perception, Future Awareness, and Realtime Correction](http://arxiv.org/abs/2609.39198v1)
Li et al. | 09-30 | 双流动态操作 VLA，运动感知/未来意识/实时校正；关联：动态环境 VLA。

#### [Vision-Language-Action Autonomous Driving Agent with Language-based Memory](http://arxiv.org/abs/2609.38641v1)
Yan et al. | 09-29 | 语言记忆增强自动驾驶 VLA；关联：长时 VLA 记忆。

#### [Exploiting Vulnerabilities: Universal Adversarial Attacks on Vision-Language-Action Models in Robotics](http://arxiv.org/abs/2609.39178v1)
Yang et al. | 09-30 | 机器人 VLA 通用对抗攻击；关联：VLA 物理安全。

#### [Correcting WHERE, Preserving HOW: Compositional Generalization for Vision-Language-Action Models via Referential Guidance](http://arxiv.org/abs/2609.38616v1)
Zhang et al. | 09-29 | 指代引导提升 VLA 组合泛化；关联：VLA 泛化。

#### [PRICE the Action Chunks: Physical Relational Credit Assignment for Embodied Reinforcement Learning](http://arxiv.org/abs/2609.38890v1)
Zou et al. | 09-30 | 物理关系信用分配用于 embodied RL；关联：VLA 后训练。

#### [Blackout vs. Freeze: Analyzing Physical Failure Modes of VLAs under Camera Faults](http://arxiv.org/abs/2609.39145v1)
Suh et al. | 09-30 | 分析 VLA 相机故障物理失效模式；关联：VLA 鲁棒性。

### 具身导航

#### [ASENA: Self-evolving Agents for Embodied Navigation](http://arxiv.org/abs/2609.39207v1)
Cheng et al. | 09-30 | 编码 Agent 连接机器人感知/执行/经验；关联：自进化具身导航。

#### [Beyond the Remembered World: Predictive 4D Belief for Persistent Navigation in Evolving Worlds](http://arxiv.org/abs/2609.39166v1)
Gao et al. | 09-30 | 预测 4D 信念用于动态世界持续导航；关联：移动目标导航。

#### [Seek Before You Move: Evidence Seeking for Progress Grounding in Vision-Language Navigation](http://arxiv.org/abs/2609.37353v1)
Wang et al. | 09-29 | 证据寻求用于 VLN 进度 grounding；关联：长程导航推理。

#### [Credit-Guided Policy Improvement for Test-time Adaptive Vision-Language Navigation](http://arxiv.org/abs/2609.37591v1)
Li et al. | 09-29 | 测试时自适应 VLN 信用引导策略改进；关联：在线导航适应。

#### [InsightMap: Structured Spatial Modeling for Embodied Multimodal Reasoning](http://arxiv.org/abs/2609.37187v1)
Zheng & Yin | 09-29 | 结构化空间建模与动作条件预测；关联：具身多模态推理。

#### [Yggdrasil: a Layer-First 3D Scene Graph for Real-Time Querying](http://arxiv.org/abs/2609.38640v1)
Akhavan et al. | 09-29 | 层优先 3D 场景图实时查询；关联：机器人空间记忆。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [Audio Token Attention Is Predictable Before the Language Model Runs](http://arxiv.org/abs/2609.38878v1)
Park et al. | 09-30 | 语言模型运行前预测音频 token 注意力；关联：音频 token 剪枝。

#### [Predictive Geometry of Hidden Trajectories in Transformers](http://arxiv.org/abs/2609.37717v1)
Mudarisov et al. | 09-29 | 研究 Transformer 隐藏轨迹层间 loss-to-go；关联：推理计算优化。

#### [Sparse-WAM: Accelerating World Action Models via Action-Guided Sparse Imagination](http://arxiv.org/abs/2609.38984v1)
Xie et al. | 09-30 | 动作引导稀疏想象加速 world action models；关联：机器人推理加速。

#### [Staircase Policy: Streaming Inference for World-Action Models with Large Action Chunks](http://arxiv.org/abs/2609.36471v1)
Sun et al. | 09-29 | 大动作块 world-action 模型流式推理；关联：降低迭代推理开销。

🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Beyond Selection: Token Parameterization for Extreme Visual Token Compression](http://arxiv.org/abs/2609.35232v2)
Zhong et al. | 09-28 | 极端视觉 token 压缩的参数化；关联：token 压缩与推理优化。

### 多模态大模型剪枝

#### [TReVS: Integrating Textual Relevance and Visual Saliency for Efficient Vision-Language Model Token Pruning](http://arxiv.org/abs/2609.37581v1)
Wang et al. | 09-29 | 文本相关+视觉显著的两阶段 token 剪枝；关联：VLM 推理加速。

#### [Representation Dynamics Reveal Semantic Saliency and Similarity for Visual Token Pruning in MLLMs](http://arxiv.org/abs/2609.36916v2)
Li et al. | 09-29 | 表示动态揭示语义显著与相似；关联：MLLM 视觉 token 剪枝。

🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [SPIDER: Multi-Layer Semantic Token Pruning and Adaptive Sub-Layer Skipping in Multimodal Large Language Models](http://arxiv.org/abs/2609.34977v1)
Chen et al. | 09-28 | 多层语义 token 剪枝与自适应子层跳层；关联：MLLM 数据/计算冗余。

🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [ACPruner: Visual Token Pruning as Biased Attention Coverage Maximization in LVLMs](http://arxiv.org/abs/2609.34558v1)
Li et al. | 09-28 | 偏置注意力覆盖最大化剪枝；关联：LVLM 视觉 token 剪枝。

🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [P4Q: Co-designing Token Pruning and Quantization for Vision-Language Model Acceleration](http://arxiv.org/abs/2609.34867v1)
Jing et al. | 09-28 | 剪枝与量化协同设计；关联：VLM 加速。

🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Just MLPs: Efficient Visual State Reconstruction for Multimodal Language Models](http://arxiv.org/abs/2609.34972v1)
Lei et al. | 09-28 | 轻量 MLP 重建视觉状态；关联：保留剪枝后视觉证据。

### 持续学习

#### [Semantic Projection for Continual Self-Evolution of Language Agents](http://arxiv.org/abs/2609.36626v1)
Liu et al. | 09-29 | 语义投影用于语言 Agent 持续自进化；关联：技能不覆盖旧任务。

#### [ReSCENE: Server-Side Replay for Structural Mitigation of Catastrophic Forgetting in Federated Continual Learning](http://arxiv.org/abs/2609.38833v1)
Kang et al. | 09-30 | 服务器端回放缓解联邦持续遗忘；关联：联邦持续学习。

#### [Not Every Correction Helps: Gain-Guided Continual Test-Time Adaptation](http://arxiv.org/abs/2609.36655v1)
Zhang et al. | 09-29 | 增益引导持续测试时适应；关联：CTTA 可靠校正。

#### [Continual Learning of Dynamical Systems in Recurrent Neural Networks through Recyclable Unit Gating](http://arxiv.org/abs/2609.38356v1)
Hashemi et al. | 09-29 | 可回收单元门控保持动态系统重建；关联：RNN 持续学习。

#### [HiTS-CL: A Continual Learning Framework for Long-Horizon Temporal Knowledge Graph Extrapolation](http://arxiv.org/abs/2609.36559v1)
Liu et al. | 09-29 | 长时时序知识图谱外推持续学习；关联：时序 KG。

#### [Beyond Low-Rank Parameterization: Narrowing the Gap Between LoRA and Full Fine-Tuning via Gradient Decomposition](http://arxiv.org/abs/2609.37027v1)
Ouyang et al. | 09-29 | 梯度分解缩小 LoRA 与全微调差距；关联：持续微调。

## 视觉感知

### 事件相机视觉感知

#### [SFE-VGGT: Source-Free VGGT Distillation for Event-Based Monocular Depth Estimation](http://arxiv.org/abs/2609.36929v1)
Nguyen & Wang | 09-29 | 无源 VGGT 蒸馏用于事件单目深度；关联：事件深度泛化。

#### [Stealth Is a Relation, Not a Property: How Event Representations Create Blind Spots for Timing Attacks in Event-Based Perception](http://arxiv.org/abs/2609.36386v1)
Dipu et al. | 09-28 | 事件时间表示造成定时攻击盲点；关联：事件感知安全。

🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [E-WAVE: Event-based Continuous Optical Flow via Warping-Aligned Visual Encoding](http://arxiv.org/abs/2609.34346v1)
Wu et al. | 09-28 | 事件连续光流经 warping 对齐视觉编码；关联：事件动态感知。

🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [ECHO: Event-Augmented Context with Hindsight and Outlook for Wrist-Only Manipulation](http://arxiv.org/abs/2609.34893v1)
Wang et al. | 09-28 | 事件增强上下文用于腕部操作；关联：事件视觉鲁棒操作。

### 3D 点云视觉感知

#### [GA-EIRFS: A Geometry-Augmented Repeat-Factor Sampling Method for Long-Tailed LiDAR 3D Object Detection](http://arxiv.org/abs/2609.38116v1)
Ahmed et al. | 09-29 | 几何增强重复因子采样用于长尾 LiDAR 检测；关联：3D 点云检测。

🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Superquadric Primitive Decomposition of 3D point clouds via Geometric-Aware Inlier Refinement](http://arxiv.org/abs/2609.35725v1)
Rinaldi et al. | 09-28 | 几何感知内点细化超二次分解；关联：点云可解释几何。

🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [EviSplat: Preserving Multi-View Evidence in 3D Gaussian Splatting for Open-Vocabulary Segmentation](http://arxiv.org/abs/2609.34853v1)
Moon et al. | 09-28 | 3DGS 保留多视角证据开放词汇分割；关联：3D 点云/场景理解。

## 跨方向信号

- Token 压缩正从“剪枝”走向可恢复、参数化与剪枝-量化协同：TReVS、Representation Dynamics、SPIDER、Just MLPs、P4Q、Beyond Selection。
- Agent 技能治理成为新焦点：Rep2Skill、SkillSeek、Trust Skills、Approval Laundering、Composing Harnesses 同时触及能力复用与安全边界。
- 持续学习与 Agent、联邦、测试时适应加速融合：Semantic Projection、ReSCENE、Gain-Guided CTTA、RF-Prompt。
- VLA 与具身导航共同强调记忆、动态预测与故障鲁棒：Language-based Memory、DSDyn-VLA、Beyond 4D Belief、ASENA、Blackout。
- 事件相机与 3D 感知出现交叉：SFE-VGGT、E-WAVE、ECHO、GA-EIRFS、EviSplat 推进鲁棒空间理解。

## 优先精读

#### - [Semantic Projection for Continual Self-Evolution of Language Agents](http://arxiv.org/abs/2609.36626v1)：直接连接持续学习与 LLM Agent 技能演化，适合实验室交叉方向。
#### - [TReVS: Integrating Textual Relevance and Visual Saliency for Efficient Vision-Language Model Token Pruning](http://arxiv.org/abs/2609.37581v1)：多模态 token 剪枝新范式，对 LLM/多模态推理优化有直接价值。
#### - [ASENA: Self-evolving Agents for Embodied Navigation](http://arxiv.org/abs/2609.39207v1)：将 coding agents 接入机器人感知、执行与经验复用，代表 Agent 与具身智能融合。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*