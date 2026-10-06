# 实验室研究方向 Radar 2026-10-06

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 23 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-10-06 02:01 UTC

---

## 今日总览
- 主方向：LLM Agent 与多智能体；子方向：LLM Agent 工程：10 篇新文献。核心信号是 agent harness 的评估、优化与自改进，以及长期记忆失效、状态修复、失败预测。
- 主方向：LLM Agent 与多智能体；子方向：Agent 测试时扩展与自我改进：今日暂无新论文。
- 主方向：LLM Agent 与多智能体；子方向：LLM Agent Society：今日暂无新论文。
- 主方向：具身智能；子方向：视觉-语言-动作模型：今日暂无新论文。
- 主方向：具身智能；子方向：具身导航：今日暂无新论文。
- 主方向：模型压缩与持续学习；子方向：LLM 剪枝与推理优化：今日暂无新论文。
- 主方向：模型压缩与持续学习；子方向：多模态大模型剪枝：1 篇新文献。关注面向 VLA 的阶段感知视觉 token 剪枝。
- 主方向：模型压缩与持续学习；子方向：持续学习：10 篇新文献。LoRA 持续适配、任务向量、自蒸馏、联邦站点接入、图增量学习并进。
- 主方向：视觉感知；子方向：事件相机视觉感知：1 篇新文献。事件传感器用于异步跟踪、光通信与 3D 运动捕捉。
- 主方向：视觉感知；子方向：3D 点云视觉感知：1 篇新文献。选择性时空聚合提升 3D 占用与场景流预测。
- 主方向：视觉感知；子方向：3D 点云感知与跟踪：今日暂无新论文。

## LLM Agent 与多智能体
### LLM Agent 工程
#### [MESH-Harness: Self-Improving Agent Harnesses via Bandit-Guided Compositional Evolution](http://arxiv.org/abs/2610.05300v1)
Z. Shang 等，10-04。核心：将 harness 模块化，用 bandit 引导组合演化，在固定模型和有限评估预算下改进 harness。关联：直接对应 LLM Agent 工程中的运行时框架优化。

#### [Causal Improvement Graph for Agentic Harness Optimization](http://arxiv.org/abs/2610.05039v1)
J. Zhang 等，10-04。核心：提出因果改进图，用于 agentic harness 的迭代提案—评估优化。关联：把 harness 优化形式化为可追踪的因果改进过程。

#### [Harness-Search: Guiding Long-Horizon Search through Multi-Agent Coordination](http://arxiv.org/abs/2610.05382v1)
S. Wang 等，10-04。核心：用多智能体协调引导长程搜索，缓解长交互历史下单 agent harness 的负担。关联：面向 LLM Agent 工程中的长程搜索与多智能体协作。

#### [MedicalHarness: A Controlled Evaluation of LLMs and Agent Harnesses on Medical Tasks](http://arxiv.org/abs/2610.05778v1)
Z. Wang 等，10-05。核心：在医疗任务上控制评估 LLM 与 agent harness 的组合效应。关联：强调 agent 分数是模型—harness 配对属性，属工程评估关键问题。

#### [StateWise: Diagnosing and Repairing Persistent Operational State Before Agent Actions](http://arxiv.org/abs/2610.05241v1)
Y. Peng 等，10-04。核心：在 agent 行动前诊断并修复持久操作状态，处理环境或需求变化导致的失效记录。关联：提升 LLM Agent 工程中的状态可靠性与行动前校验。

#### [PACMI: Provenance-Aware Cascading Memory Invalidation for Long-Term LLM Agents](http://arxiv.org/abs/2610.05732v1)
Y. Wang 等，10-05。核心：为长期记忆提供来源感知的级联失效机制，处理过时但语义仍相关的记忆。关联：对应 LLM Agent 工程中的长时记忆时效管理。

#### [Look Before You Leap: Thermodynamic Arbitration of Parametric and Non-Parametric Knowledge in LLM Agents via Self-Regulating Memory Architectures](http://arxiv.org/abs/2610.05223v1)
A. Das 等，10-04。核心：用自调节记忆架构仲裁参数知识与外部非参数知识。关联：关联 LLM Agent 工程中的记忆架构与知识调用。

#### [ASCENT: Online Test-Time Training of Long-Horizon Agents via Self-Distillation of Verified Experience](http://arxiv.org/abs/2610.05303v1)
H. Lu 等，10-04。核心：用已验证经验自蒸馏，在线测试时训练长程 agent。关联：为 LLM Agent 工程引入在线适应与经验复用机制。

#### [Disentangling Task Difficulty from Run-Level Failure in Agent Failure Prediction](http://arxiv.org/abs/2610.05572v1)
M. EsfandyariDoulabi 等，10-04。核心：区分任务难度与运行级失败，改进 agent 失败预测。关联：服务 LLM Agent 工程中的执行干预与可靠性评估。

#### [LifeLong Digital Twin: A Unified Modeling Paradigm and Agent Harness for Event-Driven Lifelong Health State Trajectories](http://arxiv.org/abs/2610.05566v1)
J. Jiang 等，10-04。核心：提出事件驱动终身健康轨迹建模范式与 agent harness。关联：展示 LLM Agent 工程在垂直终身状态建模中的应用。

## 模型压缩与持续学习
### 多模态大模型剪枝
#### [When and What to Prune? Stage-Aware Visual Token Pruning for Efficient VLA](http://arxiv.org/abs/2610.05273v1)
T. Shi 等，10-04。核心：提出阶段感知视觉 token 剪枝，决定何时与剪哪些 token，以加速 VLA 推理。关联：直接匹配多模态大模型剪枝与高效 VLA 方向。

### 持续学习
#### [PaLoRA: Paced Low-Rank Adaptation for Continual Learning](http://arxiv.org/abs/2610.04226v1)
Y. Li 等，10-03。核心：为 LoRA 持续学习引入有节奏的低秩适配，替代固定小学习率启发式。关联：LoRA 与持续学习结合的核心方法。

#### [Off-Policy Merging Beats On-Policy Self-Distillation for Continual Learning](http://arxiv.org/abs/2610.05872v1)
C. H. Wu 等，10-05。核心：发现离策略合并优于在策略自蒸馏，用于持续学习。关联：挑战 on-policy 必需论，直接影响持续后训练策略。

#### [Gated Target Propagation for Compositional Generalization in Continual Learning](http://arxiv.org/abs/2610.04649v1)
A. M. Njupoun 等，10-03。核心：用门控目标传播促进持续学习中的组合泛化与知识重组。关联：关注持续学习中的前向知识复用。

#### [When the Cross-Silo Federation Goes Offline: Continual Learning for Site Onboarding with Limited Unlabeled Data](http://arxiv.org/abs/2610.05598v1)
A. Eslaminia 等，10-04。核心：面向跨孤岛联邦离线场景，用有限无标签数据持续接入新站点。关联：联邦持续学习与站点接入。

#### [Learning without Overwriting: A Theory of Self-Distillation and Supervised Fine-Tuning in Continual Reasoning](http://arxiv.org/abs/2610.05200v1)
S. Uemura 等，10-04。核心：理论分析自蒸馏与 SFT 在持续推理中如何避免覆盖旧知识。关联：持续推理中的遗忘机制理论。

#### [Task Vector Descent: Learning from Non-IID Batches](http://arxiv.org/abs/2610.05402v1)
A. Baumann 等，10-04。核心：提出任务向量下降，从非 IID 批次中持续学习。关联：面向语言模型训练中的不均匀分布持续学习。

#### [MAGIC: Topology-Aware Analytic Graph Few-Shot Class-Incremental Learning](http://arxiv.org/abs/2610.04963v1)
J. Chen 等，10-04。核心：用拓扑感知分析图做图少样本类增量学习。关联：持续学习在图结构数据上的增量识别。

#### [Adaptive Utilization of Low-Rank Adaptation via Conditioned Gating](http://arxiv.org/abs/2610.05800v1)
G. Yang 等，10-05。核心：用条件门控自适应利用 LoRA 子空间。关联：参数高效适配与持续学习中的低秩更新优化。

#### [VIGIL: Verifier-Informed Gated Improvement Loop for Spreadsheet Question Answering](http://arxiv.org/abs/2610.04287v1)
K. Li 等，10-03。核心：面向表格问答的持续 harness 学习，用验证器信息门控改进。关联：持续学习在 agent harness 与延迟反馈场景中的落地。

#### [Automatic Speech Recognition for Low-Resource Sinhala: A Critical Review of Methods, Challenges, and Future Directions](http://arxiv.org/abs/2610.05681v1)
C. Dinuwan 等，10-05。核心：综述低资源僧伽罗语 ASR 的方法、挑战与方向。关联：为持续学习中的低资源领域适应提供背景。

## 视觉感知
### 事件相机视觉感知
#### [Asynchronous Tracking, Optical Communication and 3D Motion Capture using Event-based Sensors](http://arxiv.org/abs/2610.04342v1)
Z. Wang 等，10-03。核心：用事件传感器实现异步跟踪、光通信与 3D 运动捕捉。关联：事件相机视觉感知在机器人协同与运动捕捉中的应用。

### 3D 点云视觉感知
#### [SelectOccFlow: Selective Spatiotemporal Aggregation for 3D Occupancy and Scene Flow Prediction](http://arxiv.org/abs/2610.04356v1)
Y. Wang 等，10-03。核心：提出选择性时空聚合，提升 3D 占用与场景流预测。关联：面向自动驾驶的 3D 点云/占用感知与运动建模。

## 跨方向信号
- Agent harness 正成为独立优化对象：MESH-Harness、Causal Improvement Graph、Harness-Search、MedicalHarness、VIGIL 均把运行时或评估框架与模型权重分离。
- 持续学习与参数高效适配加速融合：PaLoRA、Adaptive LoRA Gating、Task Vector Descent、Off-Policy Merging 围绕遗忘、低秩更新和任务向量展开。
- 记忆与状态时效性成为 agent 可靠性焦点：PACMI、StateWise、Look Before You Leap 处理过时记忆、失效状态与知识仲裁。
- 自蒸馏、离策略合并与在线测试时训练形成持续改进路线：ASCENT、Off-Policy Merging、Learning without Overwriting 共同挑战“必须 on-policy”的旧假设。
- 多模态/VLA 推理效率与时空感知协同：Stage-Aware token 剪枝、SelectOccFlow、事件相机运动捕捉均强调选择性时空聚合与高效感知。

## 优先精读
- [MESH-Harness](http://arxiv.org/abs/2610.05300v1)：把 agent harness 作为可组合、可演化对象，固定模型下优化运行时，代表 LLM Agent 工程的核心转向。
#### - [Off-Policy Merging Beats On-Policy Self-Distillation for Continual Learning](http://arxiv.org/abs/2610.05872v1)：直接挑战持续学习与后训练中的 on-policy 传统认知，方法结论具有跨 LLM 训练与持续学习影响。
#### - [When and What to Prune? Stage-Aware Visual Token Pruning for Efficient VLA](http://arxiv.org/abs/2610.05273v1)：该子方向唯一新文献，连接多模态剪枝、VLA 推理加速与具身智能效率。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*