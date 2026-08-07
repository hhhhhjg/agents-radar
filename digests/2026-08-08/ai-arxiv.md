# 实验室研究方向 Radar 2026-08-08

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 2 篇新文献 + 40 篇过去14天内已出现 | 生成时间：2026-08-07 22:29 UTC

---

## 今日总览

- **LLM Agent 与多智能体 / LLM Agent 工程**：今日有新论文 AV-AIVAT，提出更省成本的 Agent 评估停止方法。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：今日暂无新论文。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：今日有新论文 DyPES-VLA，探索跨本体操控的共享动力学先验与本体特定控制。
- **具身智能 / 具身导航**：今日暂无新论文。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：今日暂无新论文。
- **模型压缩与持续学习 / 多模态大模型剪枝**：今日暂无新论文。
- **模型压缩与持续学习 / 持续学习**：今日暂无新论文。
- **视觉感知 / 事件相机视觉感知**：今日暂无新论文。
- **视觉感知 / 3D 点云视觉感知**：今日暂无新论文。
- **视觉感知 / 3D 点云感知与跟踪**：今日暂无新论文。

## LLM Agent 与多智能体

### LLM Agent 工程

#### [AV-AIVAT: 74x Cheaper Agent Evaluation with Certified Anytime-Valid Stopping in Imperfect-Information Games](http://arxiv.org/abs/2608.06362v1)
B. Li 等 | 2026-08-06 | 贡献：用 anytime-valid 停止规则提前判定 Agent 强弱，降低评估成本。关联：直接服务 LLM Agent 评估工程。

#### 🔁 **【过去14天内已出现】** [EvoHarness-RL: Learning Self-Evolving Runtime Harness for Long-Horizon LLM Agents](http://arxiv.org/abs/2608.05446v1)
X. Ning 等 | 2026-08-05 | 贡献：让运行时 harness 在长时程任务中自演化，以维护状态、调用工具和验证结果。关联：优化 LLM Agent 外部执行框架。

#### 🔁 **【过去14天内已出现】** [EvolveNet: Collaborative Harness Evolution for Agent Self-Improvement](http://arxiv.org/abs/2608.04968v1)
J. Nie 等 | 2026-08-05 | 贡献：协作演化 harness 以提升 Agent 能力。关联：属于 Agent 工程中的 harness 设计与自我改进。

#### 🔁 **【过去14天内已出现】** [DreamGuard: Efficient Runtime Guardrail for LLM Agents via Risk-Aware World Model](http://arxiv.org/abs/2608.05695v1)
W. Lin 等 | 2026-08-06 | 贡献：基于风险感知世界模型的运行时护栏，避免不安全工具调用。关联：LLM Agent 工程中的安全防护层。

#### 🔁 **【过去14天内已出现】** [Hierarchical Graph Memory for LLM Agents with Path-level Localization and Rewrite](http://arxiv.org/abs/2608.05095v1)
X. Yue 等 | 2026-08-05 | 贡献：层级图记忆支持路径级定位与重写。关联：提升 LLM Agent 长期记忆更新效率。

#### 🔁 **【过去14天内已出现】** [State2State: Environment-Derived Mid-Training for LLM Agents](http://arxiv.org/abs/2608.04934v1)
X. Lei 等 | 2026-08-05 | 贡献：从环境派生状态进行 mid-training。关联：为 LLM Agent 提供无需外部任务标注的训练策略。

#### 🔁 **【过去14天内已出现】** [Learning Globally Reusable Skills for Coding Agents](http://arxiv.org/abs/2608.06153v1)
C. Yang 等 | 2026-08-06 | 贡献：学习全局可复用编码技能，缓解局部技能过拟合。关联：面向 Coding Agent 的技能库工程。

#### 🔁 **【过去14天内已出现】** [EcoAgent-Bench: Evaluating Economic Decision-Making in Budget-Constrained LLM Agents](http://arxiv.org/abs/2608.05519v1)
J. Wu 等 | 2026-08-06 | 贡献：把资源使用本身纳入预算约束的 Agent 评估。关联：补充 LLM Agent 经济决策评测工具。

#### 🔁 **【过去14天内已出现】** [ArtAnno: Annotating Implicit Semantics in Artworks through LLM Agent-Driven Bidirectional Human-AI Augmentation](http://arxiv.org/abs/2608.05026v1)
X. Gu 等 | 2026-08-05 | 贡献：LLM Agent 驱动的人机双向增强标注隐式语义。关联：示范 LLM Agent 在专业标注流程中的工程应用。

### Agent 测试时扩展与自我改进

#### 🔁 **【过去14天内已出现】** [Refining Over Resampling: Test-Time Self-Correction for LLM Reasoning](http://arxiv.org/abs/2608.05643v1)
A. Bilal 等 | 2026-08-06 | 贡献：用测试时自校正替代扩大采样，减少重复采样收益递减。关联：直接作用于 LLM 推理的测试时扩展。

#### 🔁 **【过去14天内已出现】** [When Self-Evolution Backfires: Pre-Commit Gating against Skill Contamination in LLM Agents](http://arxiv.org/abs/2608.05810v1)
L. Shang 等 | 2026-08-06 | 贡献：发现技能池超过临界规模后自我进化会退化，并提出 pre-commit gating。关联：约束 Agent 自我改进的非单调风险。

## 具身智能

### 视觉-语言-动作模型

#### [DyPES-VLA: Learning Shared Dynamics Priors and Embodiment-Specific Control for Cross-Embodiment Manipulation](http://arxiv.org/abs/2608.06374v1)
J. Li 等 | 2026-08-06 | 贡献：跨本体操控中分离共享动力学先验与本体特定控制。关联：直接推进 VLA 跨本体泛化。

#### 🔁 **【过去14天内已出现】** [In-Context VLA: Endowing Vision-Language-Action Models with Language via In-Context Post-Training and Agentic Tool Use](http://arxiv.org/abs/2608.05738v1)
J. Yang 等 | 2026-08-06 | 贡献：用上下文后训练与工具使用增强 VLA 的语言推理。关联：提出 VLA 后训练新范式。

#### 🔁 **【过去14天内已出现】** [Mind-VLA: Instruction-Aware Spatial Representation Alignment for Vision-Language-Action Models](http://arxiv.org/abs/2608.04633v1)
X. Ding 等 | 2026-08-05 | 贡献：按指令关注目标物体进行空间表征对齐。关联：改善 VLA 的指令-空间一致性。

#### 🔁 **【过去14天内已出现】** [BridgeVLA++: A Data-Efficient, Generalizable, and Memory-Augmented Vision-Language-Action Framework for 3D Manipulation](http://arxiv.org/abs/2608.05042v1)
P. Li 等 | 2026-08-05 | 贡献：数据高效、可泛化、带记忆增强的 3D VLA 框架。关联：增强 VLA 记忆与分布外泛化。

#### 🔁 **【过去14天内已出现】** [Beyond Flat Policies: Hierarchical Post-Training for Embodied Agents in Robotic Manipulation](http://arxiv.org/abs/2608.05999v1)
H. Kong 等 | 2026-08-06 | 贡献：用层级后训练显式建模任务进度。关联：将 VLA 从 flat policy 扩展为层级策略。

#### 🔁 **【过去14天内已出现】** [Explicit Language Memory for Long-Horizon Planning in Vision-Language-Action Models](http://arxiv.org/abs/2608.04765v1)
H. Xu 等 | 2026-08-05 | 贡献：为长时程 VLA 规划引入显式语言记忆。关联：缓解稀疏示范下的组合泛化问题。

#### 🔁 **【过去14天内已出现】** [World-to-Wrist: Task-Conditioned Future Wrist Modeling for Fine-Grained Robot Manipulation](http://arxiv.org/abs/2608.05369v1)
Y. Pan 等 | 2026-08-05 | 贡献：在全局任务上下文中建模未来腕部交互。关联：增强 VLA 的腕部精细操控能力。

#### 🔁 **【过去14天内已出现】** [SkillMemo: Expert-guided Skill Memory Framework for Compositional Embodied Manipulation](http://arxiv.org/abs/2608.05970v1)
C. Wang 等 | 2026-08-06 | 贡献：专家引导的技能记忆用于组合式操控。关联：补充 VLA 的技能复用能力。

#### 🔁 **【过去14天内已出现】** [Mimir: A Neuro-Symbolic Memory System with Dynamic Grounding for Embodied Agents in Interactive Environments](http://arxiv.org/abs/2608.04933v1)
H. Xu 等 | 2026-08-05 | 贡献：神经符号记忆系统支持交互环境中的动态接地。关联：为 VLA 具身 Agent 提供显式世界事实接口。

#### 🔁 **【过去14天内已出现】** [Suppression Sticks, Locality Is Fragile: A Closed-Loop Target-and-Control Audit of Task-Vector Negation in VLA Policies](http://arxiv.org/abs/2608.04692v1)
S. Wang 等 | 2026-08-05 | 贡献：审计多任务 VLA 中任务向量减法的行为局部性。关联：理解 VLA 策略修改的安全边界。

### 具身导航

#### 🔁 **【过去14天内已出现】** [SpikingNav: Robust Embodied Navigation with Spiking Neural Policies](http://arxiv.org/abs/2608.05078v1)
J. Zhang 等 | 2026-08-05 | 贡献：用脉冲神经策略提升具身导航鲁棒性。关联：直接对应具身导航的脉冲计算路径。

#### 🔁 **【过去14天内已出现】** [Hijacking Robots with a Piece of Paper: A Systematic Study of Physical Prompt Injection in VLM-Controlled Robots](http://arxiv.org/abs/2608.05715v1)
S. M. B. P. Samarakoon 等 | 2026-08-06 | 贡献：系统研究 VLM 控制机器人中的物理 prompt injection 攻击。关联：揭示具身机器人系统的新型物理攻击面。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### 🔁 **【过去14天内已出现】** [EdgeXpert: An Edge Device for Memory-Efficient LLM Inference with Mixture-of-Experts and Speculative Decoding](http://arxiv.org/abs/2608.05303v1)
S. Ha 等 | 2026-08-05 | 贡献：面向边缘 LLM 推理的 MoE 与推测解码设备。关联：缓解 FFN 外部内存访问带来的推理瓶颈。

### 多模态大模型剪枝

#### 🔁 **【过去14天内已出现】** [Not All Redundant Tokens Are Alike: Analyzing Visual Token Pruning through Token Roles](http://arxiv.org/abs/2608.04483v1)
H. Kim 等 | 2026-08-05 | 贡献：分析视觉 token 剪枝决策与 token 角色的关系。关联：为多模态大模型视觉 token 剪枝提供审计视角。

#### 🔁 **【过去14天内已出现】** [DIVE: Dynamic Iterative Visual Evidence Construction for Efficient Vision-Language Models](http://arxiv.org/abs/2608.04496v1)
C. Zhong 等 | 2026-08-05 | 贡献：动态迭代构建视觉证据以加速 VLM 推理。关联：多模态大模型视觉 token 剪枝与推理优化。

#### 🔁 **【过去14天内已出现】** [HiSC: Hierarchical Spatial Clustering Token Compression for Efficient 3D Scene Understanding](http://arxiv.org/abs/2608.04610v1)
J. Qu 等 | 2026-08-05 | 贡献：层级空间聚类 token 压缩加速 3D 场景理解。关联：将多模态 token 压缩方法扩展至 3D VLM。

### 持续学习

#### 🔁 **【过去14天内已出现】** [Continual Learning in Transition](http://arxiv.org/abs/2608.06216v1)
Z. Hou 等 | 2026-08-06 | 贡献：梳理新兴范式如何重塑持续学习范围。关联：为持续学习提供新框架视角。

#### 🔁 **【过去14天内已出现】** [NeuMoSync: End-to-End Neuromodulatory Control for Plasticity and Adaptability in Continual Learning](http://arxiv.org/abs/2608.04358v1)
S. R. Razavi Rohani 等 | 2026-08-05 | 贡献：端到端神经调制控制可塑性与适应性。关联：用脑启发的神经机制改进持续学习。

#### 🔁 **【过去14天内已出现】** [Continual-Learning Physics-Informed Neural Networks for Parameterized Partial Differential Equations](http://arxiv.org/abs/2608.04778v1)
X. Chen 等 | 2026-08-05 | 贡献：面向参数化 PDE 的持续学习 PINN。关联：将持续学习引入物理信息神经求解器。

#### 🔁 **【过去14天内已出现】** [ATLAS: Adaptive Topological Learning with Abstract Successors for Continual Learning](http://arxiv.org/abs/2608.04334v1)
R. B. Lawlor 等 | 2026-08-05 | 贡献：用抽象后继的拓扑学习提升 RL 对环境的适应性。关联：持续学习框架下的强化学习稳定性方法。

#### 🔁 **【过去14天内已出现】** [DARAD: Dual Adapters and Ranking-Aware Distillation for Continual Remote Sensing Image-Text Retrieval](http://arxiv.org/abs/2608.06059v1)
X. Chen 等 | 2026-08-06 | 贡献：双适配器与排序感知蒸馏用于持续遥感图文检索。关联：持续学习在多模态检索中的应用。

## 视觉感知

### 事件相机视觉感知

#### 🔁 **【过去14天内已出现】** [EvReflection: Event-Driven Micro-Dynamics for Reflection Removal](http://arxiv.org/abs/2608.06184v1)
J. Wang 等 | 2026-08-06 | 贡献：利用事件信号微动态去除反射。关联：事件相机用于图像恢复任务。

#### 🔁 **【过去14天内已出现】** [Cooking beyond Frames: A Stereo Event Camera Dataset in the Kitchen](http://arxiv.org/abs/2608.04865v1)
C. Feng 等 | 2026-08-05 | 贡献：提供厨房场景立体事件相机数据集。关联：扩展事件相机感知到人-物交互场景。

### 3D 点云视觉感知

#### 🔁 **【过去14天内已出现】** [Hierarchical Flow Matching for 3D Point Cloud Generation](http://arxiv.org/abs/2608.05557v1)
L. Wang 等 | 2026-08-06 | 贡献：层级流匹配生成高质量 3D 点云。关联：面向 3D 点云生成与表示学习。

#### 🔁 **【过去14天内已出现】** [OutLangSplat: 3D Language Gaussian Splatting for UAV Outdoor Scenes](http://arxiv.org/abs/2608.04560v1)
X. Yan 等 | 2026-08-05 | 贡献：将 3D 语言高斯泼溅扩展至 UAV 室外场景。关联：3D 点云/语言特征融合的场景理解。

#### 🔁 **【过去14天内已出现】** [SmartMage: Dynamic Modality Orchestration for 3D Scene Understanding](http://arxiv.org/abs/2608.05137v1)
Y. Zhang 等 | 2026-08-05 | 贡献：动态编排多模态信息完成 3D 场景理解。关联：结合几何与视觉线索的 3D 场景感知。

## 跨方向信号

- Agent 能力越来越依赖“外部 harness”而非单纯模型权重：EvoHarness-RL、EvolveNet、DreamGuard 均强调状态维护、工具调用与安全检查的工程化。
- 自我改进需要受控设计：Refining Over Resampling 与 When Self-Evolution Backfires 说明无约束采样或技能积累会收益递减甚至恶化。
- VLA 与多模态模型同时走向显式记忆和 token 效率：VLA 记忆、3D token 压缩、视觉 token 剪枝共同指向长时程任务的推理成本瓶颈。
- 评估与安全成本被显性化：AV-AIVAT 降低评估成本，EcoAgent-Bench 关注预算，Hijacking Robots 暴露物理世界 prompt injection 攻击。

## 优先精读

- [AV-AIVAT](http://arxiv.org/abs/2608.06362v1)：新方法直接改变 Agent 评估成本结构，且具备统计保证，值得完整读。
- [DyPES-VLA](http://arxiv.org/abs/2608.06374v1)：新工作针对跨本体 VLA 关键难题，代表前沿探索方向。
- [When Self-Evolution Backfires](http://arxiv.org/abs/2608.05810v1)：揭示自我进化非单调性并提出门控机制，对 Agent 自我改进设计有重要警示。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*