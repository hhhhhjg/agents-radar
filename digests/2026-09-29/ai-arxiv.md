# 实验室研究方向 Radar 2026-09-29

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 33 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-29 01:23 UTC

---

## 今日总览
- LLM Agent 与多智能体—LLM Agent 工程：11篇新文献，聚焦跨用户记忆、意图漂移、失败修复、身份编排、工具调用安全与行为刻画，强调长时程可靠性与治理。
- LLM Agent 与多智能体—Agent 测试时扩展与自我改进：1篇新文献，CompassPlay 用梯度对齐奖励提升自博弈任务训练价值。
- LLM Agent 与多智能体—LLM Agent Society：今日暂无新论文。
- 具身智能—视觉-语言-动作模型：11篇新文献，覆盖鲁棒性、RL微调、世界模型、因果评估、联邦蒸馏、自进化与历史状态控制。
- 具身智能—具身导航：2篇新文献，涉及零样本语义视听导航与水下BEV占据导航。
- 模型压缩与持续学习—LLM 剪枝与推理优化：1篇新文献，DegreeSpar 面向安全Transformer推理做结构化度稀疏。
- 模型压缩与持续学习—多模态大模型剪枝：今日暂无新论文。
- 模型压缩与持续学习—持续学习：5篇新文献，涵盖自探针梯度、持续学习Agent评估、LoRA合并、经验技能合成与动态低秩稳定。
- 视觉感知—事件相机视觉感知：2篇新文献，含片上SNN训练与参数高效脉冲状态空间接口。
- 视觉感知—3D 点云视觉感知：3篇新文献，涉及点云水印、多视角3D检测查询细化与测地GW距离。
- 视觉感知—3D 点云感知与跟踪：今日暂无新论文。

**分方向情报**

## LLM Agent 与多智能体
### LLM Agent 工程
#### [MemAgent: Learning to Manage Heterogeneous Memory Providers for LLM Agents](http://arxiv.org/abs/2609.32521v1)
Y. Wei et al.｜2026-09-26｜学习管理异构记忆提供者，服务长时程Agent。关联：直接提升LLM Agent记忆工程能力。
#### [Learning from Others, Acting for You: Cross-User Memory Sharing for LLM Agents](http://arxiv.org/abs/2609.32511v1)
J. Hu et al.｜2026-09-26｜跨用户共享记忆并处理偏好冲突。关联：解决多用户Agent经验复用问题。
#### [When Users Change Their Minds: Measuring and Repairing Intent Drift in LLM Agents](http://arxiv.org/abs/2609.32520v1)
Y. Zhang et al.｜2026-09-26｜提出IntentFlux测量并修复意图漂移。关联：针对多轮Agent意图保持。
#### [DAAF: From Failure Localization to Editable System Assets in LLM Agents](http://arxiv.org/abs/2609.32498v1)
X. Yuan et al.｜2026-09-26｜从失败定位转向可编辑系统资产修复。关联：面向已部署Agent的可维护性。
#### ["You're Right, Let Me Fix It": How LLM Agents Damage Correct Work When Falsely Accused](http://arxiv.org/abs/2609.32616v1)
X. Mao et al.｜2026-09-26｜研究Agent因错误指责而破坏正确工作。关联：揭示Agent协作中的谄媚风险。
#### [Trust the Brand, Lose Control: How Identity Hijacks LLM Agent Orchestration](http://arxiv.org/abs/2609.32635v1)
X. Mao et al.｜2026-09-26｜发现身份线索可劫持子Agent编排。关联：影响多Agent调度与安全。
#### [Silent Failures in Agentic Security Evaluation: A Validated Harness for Tool-Call Mediation Under Indirect Prompt Injection](http://arxiv.org/abs/2609.32691v1)
A. Shaw｜2026-09-26｜审计间接提示注入下工具调用中介评估有效性。关联：补足Agent安全评测可信度。
#### [On the Behavioral Traits of LLM Agents](http://arxiv.org/abs/2609.32776v1)
H. Zhao et al.｜2026-09-26｜量化LLM Agent行为特质并指出自报差异。关联：提供Agent行为表征方法。
#### [AgentHabit: Characterizing Distinct Behaviors of Agents on Everyday Tasks](http://arxiv.org/abs/2609.32795v1)
W. Song et al.｜2026-09-26｜刻画日常任务中Agent行为差异。关联：支撑Agent偏好对齐评估。

### Agent 测试时扩展与自我改进
#### [CompassPlay: Rewarding the Proposer for Where It Moves the Solver](http://arxiv.org/abs/2609.32228v1)
S. X. Pu et al.｜2026-09-26｜用梯度对齐奖励proposer提升自博弈训练价值。关联：面向Agent自我改进与测试时训练。

## 具身智能
### 视觉-语言-动作模型
#### [DS-VLA: A Dendritic-inspired Vision-Language-Action Model for Robust Action Control](http://arxiv.org/abs/2609.32253v1)
Y. Lyu et al.｜2026-09-26｜树突启发VLA提升动作短暂损坏下鲁棒控制。关联：直接面向VLA闭环鲁棒性。
#### [Are Vision-Language-Action Models Robust to One-Step Observation Perturbations?](http://arxiv.org/abs/2609.32550v1)
S. Yamabe, J. Sakuma｜2026-09-26｜评估VLA对单步观测扰动的安全性。关联：补足VLA瞬态扰动鲁棒性。
#### [PF-RL: Progress Field Reinforcement Learning via Goal-Conditioned Value Geometry for Vision-Language-Action Models](http://arxiv.org/abs/2609.32634v1)
Y. Qing et al.｜2026-09-26｜用目标条件价值几何建模中间进度。关联：改善VLA长时程RL微调。
#### [Devol-ONE: One Autoregressive Mixture of Transformers to Unify Vision-Language-Action and Latent World Modeling](http://arxiv.org/abs/2609.32193v1)
H. Cai et al.｜2026-09-26｜统一VLA与潜在世界建模。关联：增强VLA场景演化预测。
#### [CausalDriveBench: Evaluating Causal Reasoning in Vision-Language-Action Models for Autonomous Driving](http://arxiv.org/abs/2609.32157v1)
N. Chembu et al.｜2026-09-26｜基于因果层级评估驾驶VLA推理。关联：推动VLA因果可解释评测。
#### [Federated Subspace Guided Vision-Language-Action Policy Distillation for Non-IID Multi-Robot Manipulation](http://arxiv.org/abs/2609.32239v1)
B. Pal et al.｜2026-09-26｜联邦子空间蒸馏VLA策略。关联：面向非IID多机器人操作。
#### [SEES: A Self-Evolving Embodied System via Failure-Guided VLA Policy Adaptation](http://arxiv.org/abs/2609.32698v1)
Z. Li et al.｜2026-09-26｜失败引导VLA策略自适应。关联：实现具身系统自进化。
#### [RecastVLA: From Past Interaction to Future Control with Adaptive Policy States](http://arxiv.org/abs/2609.32155v1)
W. Li et al.｜2026-09-26｜用自适应策略状态保留历史交互。关联：改善顺序操作历史建模。
#### [PlanGuard: A Guardrail for Multi-Step Plan Safety in Embodied Agents](http://arxiv.org/abs/2609.32801v1)
J. Chen et al.｜2026-09-26｜为具身多步计划提供安全护栏。关联：关注VLA/具身执行组合风险。

### 具身导航
#### [RAO-Nav: Probing Omni-Language Models for Zero-shot Semantic Audio-Visual Navigation](http://arxiv.org/abs/2609.32224v1)
Q. Ye et al.｜2026-09-26｜探测全模态语言模型做零样本语义视听导航。关联：拓展具身导航多模态零样本能力。
#### [AquaBEV-Nav: Learned BEV Occupancy for Underwater Navigation and Exploration](http://arxiv.org/abs/2609.32156v1)
T. T. Dong et al.｜2026-09-26｜学习BEV占据用于水下导航探索。关联：面向复杂环境具身导航。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### [DegreeSpar: Structured Degree Sparsity for Efficient Secure Transformer Inference](http://arxiv.org/abs/2609.32204v1)
Y. Cai et al.｜2026-09-26｜结构化度稀疏降低安全推理非线性开销。关联：服务LLM安全推理压缩。

### 持续学习
#### [Continual Learning via Self-Probe Gradients](http://arxiv.org/abs/2609.32771v1)
D. Cho et al.｜2026-09-26｜用自探针梯度扩展保留证据。关联：缓解少样本持续学习遗忘。
#### [When the Merge Coefficient Stops Mattering: Proximity Regularized Merging for Continual LoRA Adaptation](http://arxiv.org/abs/2609.32332v1)
Y. Liu et al.｜2026-09-26｜邻近正则化合并持续LoRA适配器。关联：免回放持续学习新方法。
#### [SCLATE: a Substrate for Continual-Learning Agent Training and Evaluation](http://arxiv.org/abs/2609.32391v1)
Y. Jung et al.｜2026-09-26｜构建持续学习Agent训练评估基底。关联：连接Agent工程与持续学习评测。
#### [ExpVoyager: Direct Experience Navigation for Dynamic Agent Skill Synthesis](http://arxiv.org/abs/2609.32630v1)
K. Seo, D. Lee｜2026-09-26｜从直接经验导航中合成动态Agent技能。关联：推动自进化Agent持续积累能力。
#### [Stabilizing the Dynamic Low-Rank Training](http://arxiv.org/abs/2609.32615v1)
Z. Xu et al.｜2026-09-26｜稳定动态低秩训练。关联：降低训练推理成本并支撑持续适配。

## 视觉感知
### 事件相机视觉感知
#### [RIPE-MambaSpike: Resolution-Independent Spiking-State-Space Interfaces for Parameter-Efficient Event-Based Vision](http://arxiv.org/abs/2609.32537v1)
M. M. Islam et al.｜2026-09-26｜提出分辨率无关脉冲状态空间接口。关联：参数高效事件视觉。
#### [Toward On-Chip Training of Spiking Neural Networks for Dense Event-Based Vision](http://arxiv.org/abs/2609.32405v1)
M. Vaillant et al.｜2026-09-26｜探索密集事件视觉SNN片上训练。关联：缓解BPTT内存瓶颈。

### 3D 点云视觉感知
#### [Geometry-Preserving Blind Watermarking for Raw 3D Point Clouds](http://arxiv.org/abs/2609.32222v1)
R. Zhou et al.｜2026-09-26｜直接在xyz坐标上做盲水印。关联：保护原始点云所有权。
#### [PQR3D: Progressive Query Refinement over Reference-Conditioned Temporal Windows for Multi-View 3D Object Detection](http://arxiv.org/abs/2609.32163v1)
H. Ye et al.｜2026-09-26｜渐进查询细化增强多视角3D检测。关联：提升3D感知时序建模。
#### [Unlocking Geodesic Gromov-Wasserstein Distances for 3D Modeling](http://arxiv.org/abs/2609.32824v1)
K. M. Choromanski et al.｜2026-09-26｜解锁测地Gromov-Wasserstein距离。关联：服务3D建模与几何比较。

## 跨方向信号
- VLA鲁棒与安全成为主线：DS-VLA、单步扰动评估、PlanGuard、CausalDriveBench均强调闭环风险与可解释安全。
- Agent记忆与经验复用升温：MemAgent、跨用户记忆、SCLATE、ExpVoyager共同指向长时程持续适应。
- 自进化与失败驱动改进活跃：SEES、PF-RL、RecastVLA、CompassPlay把失败或历史转为训练信号。
- 参数高效压缩交叉持续学习：DegreeSpar、PRM、动态低秩稳定、RIPE-MambaSpike均降低训练/推理成本。
- 评测基础设施受重视：SCLATE、CausalDriveBench、AgentHabit、Silent Failures推动可信评测。

## 优先精读
1. **MemAgent**：异构记忆管理是LLM Agent长时程与持续改进的基础设施，影响多个Agent子方向。
2. **DS-VLA**：直接处理执行动作短暂损坏，代表VLA鲁棒控制的新架构思路，具身部署价值高。
3. **SCLATE**：面向持续学习Agent的训练评估基底，可能统一Agent工程与持续学习实验范式。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*