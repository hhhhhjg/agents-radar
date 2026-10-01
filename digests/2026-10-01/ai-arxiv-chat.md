# 实验室研究方向 Radar 2026-10-01

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 19 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-10-01 01:00 UTC

---

## 今日总览

- **LLM Agent 与多智能体：LLM Agent 工程**：3 篇新文献，聚焦测试时 harness 组合、技能信任链安全、RL 后训练轨迹多样性。
- **LLM Agent 与多智能体：Agent 测试时扩展与自我改进**：今日暂无新论文。
- **LLM Agent 与多智能体：LLM Agent Society**：今日暂无新论文。
- **具身智能：视觉-语言-动作模型**：4 篇相关新文献，覆盖语言记忆驾驶、机器人对抗攻击、组合泛化与自进化导航交叉。
- **具身智能：具身导航**：4 篇相关新文献，涉及 VLN 证据寻求、TTA-VLN、ASENA 及 VLA 驾驶记忆交叉。
- **模型压缩与持续学习：LLM 剪枝与推理优化**：3 篇相关新文献，关注音频 token 运行前预判、Transformer 隐藏轨迹几何、VLM token 剪枝交叉。
- **模型压缩与持续学习：多模态大模型剪枝**：2 篇新文献，均关注视觉 token 剪枝依据。
- **模型压缩与持续学习：持续学习**：3 篇新文献，扩展到联邦持续学习、CTTA、时序知识图谱。
- **视觉感知：事件相机视觉感知**：2 篇新文献，涉及无源蒸馏深度估计与事件表示安全盲点。
- **视觉感知：3D 点云视觉感知**：1 篇新文献，聚焦长尾 LiDAR 3D 检测采样。
- **视觉感知：3D 点云感知与跟踪**：今日暂无新论文。

## LLM Agent 与多智能体

### LLM Agent 工程

#### [Composing Task-specific Agent Harnesses at Test Time with Reusable Primitives](http://arxiv.org/abs/2609.38912v1)
- P. Kuang et al.；2026-09-30。核心：测试时用可复用原语组合任务特定 agent harness。关联：直接优化 LLM Agent 工程中的 harness 机制组合。
#### [Can Agents Trust Their Skills? Uncovering Unsafe Chains of Trust in Skill-Based LLM Agents](http://arxiv.org/abs/2609.39065v1)
- Y. Wang et al.；2026-09-30。核心：揭示可安装技能自动调用形成不安全信任链。关联：面向 LLM Agent 技能治理与权限安全。
#### [Explicit Trajectory Diversity for RL-Based Post-Training of LLM Agents](http://arxiv.org/abs/2609.38805v1)
- H. Fu et al.；2026-09-30。核心：提出显式轨迹多样性用于 Agent RL 后训练。关联：提升 LLM Agent 后训练中的探索与多解能力。

### Agent 测试时扩展与自我改进

今日暂无新论文

### LLM Agent Society

今日暂无新论文

## 具身智能

### 视觉-语言-动作模型

#### [Vision-Language-Action Autonomous Driving Agent with Language-based Memory](http://arxiv.org/abs/2609.38641v1)
- K. Yan et al.；2026-09-29。核心：为 VLA 自动驾驶引入语言化记忆以突破有限帧限制。关联：扩展 VLA 时序记忆与可解释驾驶。
#### [Exploiting Vulnerabilities: Universal Adversarial Attacks on Vision-Language-Action Models in Robotics](http://arxiv.org/abs/2609.39178v1)
- S. Yang et al.；2026-09-30。核心：研究机器人 VLA 的通用对抗攻击。关联：面向 VLA 物理交互安全性评估。
#### [Correcting WHERE, Preserving HOW: Compositional Generalization for Vision-Language-Action Models via Referential Guidance](http://arxiv.org/abs/2609.38616v1)
- Y. Zhang et al.；2026-09-29。核心：用指称引导纠正 VLA 组合泛化偏差。关联：提升 VLA 跨物体、目的地和背景的泛化。

### 具身导航

#### [ASENA: Self-evolving Agents for Embodied Navigation](http://arxiv.org/abs/2609.39207v1)
- A.-C. Cheng et al.；2026-09-30。核心：连接编码 Agent 与机器人感知、执行和持久经验，支持修复失败与技能复用。关联：直接面向具身导航自进化 Agent。
#### [Seek Before You Move: Evidence Seeking for Progress Grounding in Vision-Language Navigation](http://arxiv.org/abs/2609.37353v1)
- Z. Wang et al.；2026-09-29。核心：导航前主动寻求证据以 grounding 任务进度。关联：改善 VLN 在证据不足时的可靠性。
#### [Credit-Guided Policy Improvement for Test-time Adaptive Vision-Language Navigation](http://arxiv.org/abs/2609.37591v1)
- Y. Li et al.；2026-09-29。核心：用 credit 引导策略改进缓解 TTA-VLN 动作偏好偏移。关联：服务视觉语言导航测试时自适应。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [Audio Token Attention Is Predictable Before the Language Model Runs](http://arxiv.org/abs/2609.38878v1)
- K. Park et al.；2026-09-30。核心：发现音频 token 注意力可在语言模型运行前预测。关联：服务音频大模型预填充剪枝与推理优化。
#### [Predictive Geometry of Hidden Trajectories in Transformers](http://arxiv.org/abs/2609.37717v1)
- T. Mudarisov et al.；2026-09-29。核心：用逐层 loss-to-go 刻画隐藏轨迹约束。关联：为 Transformer 内部表征与推理优化提供理论视角。

### 多模态大模型剪枝

#### [TReVS: Integrating Textual Relevance and Visual Saliency for Efficient Vision-Language Model Token Pruning](http://arxiv.org/abs/2609.37581v1)
- J. Wang et al.；2026-09-29。核心：融合文本相关性与视觉显著性进行 VLM token 剪枝。关联：直接降低多模态大模型视觉 token 推理成本。
#### [Representation Dynamics Reveal Semantic Saliency and Similarity for Visual Token Pruning in MLLMs](http://arxiv.org/abs/2609.36916v2)
- W. Li et al.；2026-09-29。核心：用表示变化估计语义显著性与相似性。关联：从表征动力学改进 MLLM 视觉 token 剪枝。

### 持续学习

#### [ReSCENE: Server-Side Replay for Structural Mitigation of Catastrophic Forgetting in Federated Continual Learning](http://arxiv.org/abs/2609.38833v1)
- S. Kang et al.；2026-09-30。核心：提出服务器端回放，结构性缓解联邦持续学习遗忘。关联：直接处理新任务学习与旧知识保持冲突。
#### [Not Every Correction Helps: Gain-Guided Continual Test-Time Adaptation](http://arxiv.org/abs/2609.36655v1)
- Y. Zhang et al.；2026-09-29。核心：提出增益引导 CTTA，区分有益与无益修正。关联：提升持续测试时自适应的可靠性。
#### [HiTS-CL: A Continual Learning Framework for Long-Horizon Temporal Knowledge Graph Extrapolation](http://arxiv.org/abs/2609.36559v1)
- Y. Liu et al.；2026-09-29。核心：将长时程 TKGR 建模为持续学习。关联：把持续学习扩展到时序知识图谱外推。

## 视觉感知

### 事件相机视觉感知

#### [SFE-VGGT: Source-Free VGGT Distillation for Event-Based Monocular Depth Estimation](http://arxiv.org/abs/2609.36929v1)
- T. D. Nguyen, A. L. Wang；2026-09-29。核心：无需 RGB-事件同步或深度标注，用无源 VGGT 蒸馏做事件单目深度。关联：提升事件深度感知可部署性。
#### [Stealth Is a Relation, Not a Property: How Event Representations Create Blind Spots for Timing Attacks in Event-Based Perception](http://arxiv.org/abs/2609.36386v1)
- S. A. Dipu et al.；2026-09-28。核心：指出事件流可见性取决于下游时间处理。关联：揭示事件相机感知的表示相关安全盲点。

### 3D 点云视觉感知

#### [GA-EIRFS: A Geometry-Augmented Repeat-Factor Sampling Method for Long-Tailed LiDAR 3D Object Detection](http://arxiv.org/abs/2609.38116v1)
- T. Ahmed et al.；2026-09-29。核心：以几何证据增强重复因子采样处理长尾 LiDAR 检测。关联：直接改进 3D 点云长尾目标感知。

### 3D 点云感知与跟踪

今日暂无新论文

## 跨方向信号

- LLM Agent 工程正从静态 harness 转向测试时可组合原语，并同步出现技能信任链安全治理。
- 具身智能中 VLA 与导航加速融合：语言记忆、测试时自适应、自进化经验复用成为共性。
- 模型压缩/推理优化向“运行前预判”和表征动力学发展，剪枝依据从注意力扩展到文本相关性与表示变化。
- 持续学习扩展到联邦、CTTA、时序知识图谱，强调结构解耦、修正增益与长时程外推。
- 视觉感知更关注表示相关盲点与可观测性，如事件表示安全、LiDAR 长尾几何采样。

## 优先精读

#### **Composing Task-specific Agent Harnesses at Test Time with Reusable Primitives**：直接提出 Agent harness 测试时组合范式，对 Agent 工程框架设计价值高。
#### **ASENA: Self-evolving Agents for Embodied Navigation**：系统连接编码 Agent 与机器人经验复用，覆盖具身导航与自我改进交叉。
#### **TReVS: Integrating Textual Relevance and Visual Saliency for Efficient Vision-Language Model Token Pruning**：融合文本与视觉信号，直接服务多模态大模型推理降本。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*