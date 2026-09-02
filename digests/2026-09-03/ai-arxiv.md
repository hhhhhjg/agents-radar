# 实验室研究方向 Radar 2026-09-03

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 32 篇新文献 + 17 篇过去14天内已出现 | 生成时间：2026-09-02 23:46 UTC

---

# 研究方向 Radar

## 今日总览
- **LLM Agent 与多智能体 — LLM Agent 工程**：新论文集中在 agent harness 可演化性、组件生命周期推理、上下文组装/压缩、路由与递归 agent 风险治理。
- **LLM Agent 与多智能体 — Agent 测试时扩展与自我改进**：新论文从诊断引导自我进化和 outcome-only RL 两条路线推进；测试时树搜索仍以重复文献为主。
- **LLM Agent 与多智能体 — LLM Agent Society**：今日暂无新论文。
- **具身智能 — 视觉-语言-动作模型**：新论文覆盖 VLA 全栈，包括统一编排框架、无人机/驾驶闭环、动作分块、技能库抽象、世界模型与行为记忆。
- **具身智能 — 具身导航**：名义新候选多为弱相关；实质高相关新论文为动态 3D 场景图用于室内导航地图更新。
- **模型压缩与持续学习 — LLM 剪枝与推理优化**：今日无独立的纯 LLM 剪枝新论文；SinkPruner 等属于 MLLM 视觉 token 剪枝，已归入多模态大模型剪枝方向。
- **模型压缩与持续学习 — 多模态大模型剪枝**：剪枝依据从重要性/冗余转向空间结构约束、去除 sink token、保持重排判别性。
- **模型压缩与持续学习 — 持续学习**：今日新论文以低资源/低通信 PEFT 为主，未出现灾难遗忘算法层面的突破。
- **视觉感知 — 事件相机视觉感知**：新增 1 篇事件相机无人机轨迹预测，使用物理 Kalman 先验 + 残差学习。
- **视觉感知 — 3D 点云视觉感知**：今日无直接新论文；重复文献覆盖 3DGS 分割、点云视频自监督与真实场景可编辑资产建模。
- **视觉感知 — 3D 点云感知与跟踪**：今日暂无新论文。

以下为分方向情报。

## LLM Agent 与多智能体

### LLM Agent 工程

#### [HarnessDev: Can LLMs Create and Evolve Their Own Agent Harness?](http://arxiv.org/abs/2609.01437v1)
Wu et al., 2026-09-01 | 贡献：让模型在权重不变时自行创建并演化 agent harness。关联：把 harness 视为 agent 工程中可被 LLM 改进的一等对象。

#### [CordisBench: Can Language Models Reason About Component Lifecycles in Dynamic Agent Harnesses?](http://arxiv.org/abs/2609.01600v1)
Sileo & Kachler, 2026-09-01 | 贡献：提出 1200 题基准，测试组件依赖与清理的生命周期推理。关联：刻画动态 agent harness 带来的新推理负担。

#### [Spawn Freely, Act Sparingly: Progressive Risk Vesting for Recursive LLM-Agent Trees](http://arxiv.org/abs/2609.01035v1)
Wang, 2026-09-01 | 贡献：区分沙箱生成与能力激活，提出递归 agent 树的风险渐进授予机制。关联：直接服务递归 LLM agent 的权限与安全工程。

#### [ContextPipe: Database-Inspired Context Assembly for Long-Horizon Agents](http://arxiv.org/abs/2609.00749v1)
Xu et al., 2026-09-01 | 贡献：将长程 agent 的上下文组装与压缩整理为数据库式运行时组件。关联：解决 agent 在生产环境中的上下文预算与缓存问题。

#### [MemoryWalker: Stop Training Agents on Contexts They Never Saw](http://arxiv.org/abs/2609.00865v1)
Zinco J et al., 2026-09-01 | 贡献：指出训练时压缩使 agent 学习目标成为树而非序列，线性化会引入条件偏差。关联：连接 agent 推理压缩与训练一致性。

#### [TRIAGE: Three-level Routing and Intelligent Agent Guidance for Efficient Execution](http://arxiv.org/abs/2609.01428v1)
Wei, 2026-09-01 | 贡献：提出三级路由与智能体引导，避免 ReAct 式循环从零开始重复推理。关联：降低工具型 LLM agent 的推理开销。

#### [When Guardrails Look Effective: Construct Validity Failures in LLM Agent Commerce Evaluation](http://arxiv.org/abs/2609.01519v1)
Zhu & Chang, 2026-09-01 | 贡献：审计 LLM-agent 市场模拟评价，发现经济指标可能不支撑所声称行为。关联：提醒 agent 评估设计需检验构念效度。

#### [Reinforcement Learning Enhanced LLM Agents for Complex Vehicle Routing Problems](http://arxiv.org/abs/2609.00859v1)
Chen et al., 2026-09-01 | 贡献：用 RL 增强 LLM agent 求解复杂车辆路径问题，降低对专家建模的依赖。关联：展示 LLM agent 工程与组合优化的结合路径。

#### [GlossoGen: Emergent Language in Complex Multi-Agent LLM Interactions](http://arxiv.org/abs/2609.01491v1)
Stengel-Eskin et al., 2026-09-01 | 贡献：构建多 LLM-agent 交互平台，研究涌现语言演化与可监测性。关联：为多智能体交互的演化监测提供工程基础设施。

### Agent 测试时扩展与自我改进

#### [DiagEvo: Diagnosis-Guided Self-Evolution via Hierarchical Error Memory](http://arxiv.org/abs/2609.00768v1)
Wei et al., 2026-09-01 | 贡献：用分层错误记忆指导问题生成，规避无引导 self-play 的性能停滞。关联：直接改进 LLM 自我进化路线。

#### [Explore More, Drift Less: Outcome-Only Reinforcement Learning Can Suffice for Long-Horizon Interactive Agents](http://arxiv.org/abs/2609.01245v1)
Pu et al., 2026-09-01 | 贡献：证明 outcome-only RL 配合探索控制可减少长程交互 agent 漂移。关联：为 agent 自改进提供无需稠密奖励的训练信号。

#### [Compile, Don't Memorize: A Context Compilation Architecture (CCA) for In-Context Learning](http://arxiv.org/abs/2609.00759v1)
Qi et al., 2026-09-01 | 贡献：提出推理期上下文编译架构，提升长且新颖上下文上的 ICL 准确率。关联：属于测试时计算与上下文工程的交叉进展。

#### 🔁 **【过去14天内已出现】** [Reactivating Test-Time Scaling for Plane Geometry Problem Solving](http://arxiv.org/abs/2608.30156v1)
Kang et al., 2026-08-31 | 贡献：发现通用 TTS 在平面几何多模态推理中失效并提出重新激活。关联：为 TTS 在多模态几何任务上的适用性提供重要边界。

#### 🔁 **【过去14天内已出现】** [When LLM Meets Tree Search: A Systematic View of Inference as Search in Large Language Models](http://arxiv.org/abs/2608.30395v1)
Wei et al., 2026-08-31 | 贡献：将 TTS 系统化视为在部分推理状态空间上的搜索。关联：提供测试时扩展的统一分析框架。

#### 🔁 **【过去14天内已出现】** [What Emerges and What Breaks in Self-Play Driving](http://arxiv.org/abs/2608.30819v1)
Sisask et al., 2026-08-31 | 贡献：用 Transformer 在真实城市地图上做 self-play 驾驶训练并观察涌现与崩溃。关联：self-play 用于具身 agent 自我改进的代表性重复文献。

## 具身智能

### 视觉-语言-动作模型

#### [EmbodiedSkills: A Unified Framework for Orchestrating, Training, and Deploying VLA Agents](http://arxiv.org/abs/2609.01281v1)
Wang et al., 2026-09-01 | 贡献：统一 VLA 的编排、训练、部署，覆盖长程任务中感知-规划-执行-校验-恢复。关联：针对 VLA 长程任务全链路工程化。

#### [Qwen-Drive-1.0: An Initial Step towards a Vision-Language Foundation Model for Autonomous Driving](http://arxiv.org/abs/2609.00111v1)
Zhou et al., 2026-08-31 | 贡献：保留 VLM 架构，统一 3D 感知、视觉问答与运动规划。关联：端到端驾驶 VLA 基础模型。

#### [REFACTOR-VLA: Unsupervised Library Learning of Typed Motor Programs](http://arxiv.org/abs/2609.01215v1)
Shaik & Venkataraman, 2026-09-01 | 贡献：从 VLA 轨迹中无监督构建带类型的可复用 motor program 库。关联：用技能库抽象缓解 monolithic VLA 的长程退化。

#### [Knowing When to Stop: Adaptive Action Chunking via Internal Cross-Attention Dynamics in VLAs](http://arxiv.org/abs/2609.00908v1)
Xu et al., 2026-09-01 | 贡献：用内部跨注意力动态决定动作分块何时停止或重规划。关联：解决 VLA 固定执行窗口的效率-精度权衡。

#### [Evaluating Multimodal LLMs as Generalist Vision-Language-Action Agents for Drone Control: Commanding, Approaching, Tracking and Searching](http://arxiv.org/abs/2609.01404v1)
Park et al., 2026-09-01 | 贡献：将 MLLM 直接放入无人机控制环，用 prompt 声明全部动作空间。关联：检验 MLLM 作为通用 VLA 智能体的边界。

#### [Towards Generalizable Visually Grounded Exploration of Household Devices](http://arxiv.org/abs/2609.00845v1)
Zheng et al., 2026-09-01 | 贡献：用 VLM 视觉接地探索减少家用设备操作对人类演示数据的依赖。关联：拓展 VLA/VLM 到家庭设备具身操作。

#### [IMPACT: Attention Is the Interaction Map for Scalable Interaction-Aware World Model Training](http://arxiv.org/abs/2609.00161v1)
Tang et al., 2026-08-31 | 贡献：将注意力作为物理交互图，训练可扩展的 interaction-aware 世界模型。关联：为 VLA/world model 提供物理可解释的交互建模。

#### [HitMem: Hierarchical Temporal 3D Memory with Multi-Modal Context-Aware Retrieval for Dynamic Environments](http://arxiv.org/abs/2609.00950v1)
Tang et al., 2026-09-01 | 贡献：构建层级时态 3D 记忆和支持多模态上下文检索，面向动态环境长程任务。关联：为 VLA agent 提供动态场景中的长程行为记忆。

#### 🔁 **【过去14天内已出现】** [Temporal Forcing: 4D Representation Alignment for Vision-Language-Action Models](http://arxiv.org/abs/2608.30643v1)
Ding et al., 2026-08-31 | 贡献：用 4D 表示对齐为 VLA 注入时间信息。关联：缓解 VLA 在长程操作中的观测别名问题。

### 具身导航

#### [DSG: Dynamic 3D Scene Graph Construction for Embodied Agents in Changing Indoor Environments](http://arxiv.org/abs/2609.00619v1)
Liao et al., 2026-09-01 | 贡献：动态更新 3D 场景图，解决物体位移导致地图与当前场景不一致。关联：为室内导航/长期任务提供可持续一致的环境表示。

#### 🔁 **【过去14天内已出现】** [LightNav-0: Eliciting VLM Spatial Intelligence for Generalist Embodied Navigation](http://arxiv.org/abs/2608.30935v1)
Wang et al., 2026-08-31 | 贡献：抽取 VLM 的空间先验用于通用具身导航。关联：直接探索 VLM 到导航策略的通义迁移。

#### 🔁 **【过去14天内已出现】** [Scaffolding Foundation Models into Physical-World Agents Pushes the Frontier of Long-Horizon Navigation](http://arxiv.org/abs/2608.30396v1)
Lei et al., 2026-08-31 | 贡献：将 VLM 的高层推理与闭环行为组合为长程物理世界 agent。关联：代表基础模型做长程导航脚手架的关键重复工作。

## 模型压缩与持续学习

### 多模态大模型剪枝

#### [S$^2$Prune: Spatially Structured Visual Token Pruning for Multimodal Large Language Models](http://arxiv.org/abs/2609.01224v1)
Jia et al., 2026-09-01 | 贡献：提出空间结构约束的视觉 token 剪枝，修正重要性/冗余度准则造成的空间偏移。关联：改进 MLLM 视觉 token 剪枝的空间稳定性。

#### [SinkPruner: Sink-Free Visual Token Pruning for Multimodal Large Language Models](http://arxiv.org/abs/2609.01004v1)
Li et al., 2026-09-01 | 贡献：提出无 sink token 依赖的 MLLM 视觉 token 剪枝方法。关联：减少长视觉序列上的 MLLM 推理开销。

#### [From Saliency to Discriminability: Rank-Preserving Visual Token Pruning for VLM Rerankers](http://arxiv.org/abs/2609.00667v1)
Liu et al., 2026-09-01 | 贡献：指出注意力显著性排序与 VLM reranker 判别目标错位，提出保序视觉 token 剪枝。关联：服务多候选重排场景下的 VLM 高效推理。

#### 🔁 **【过去14天内已出现】** [Centering before Pruning: Lightweight Geometry Correction for Diversity-Based Visual Token Pruning in LVLMs](http://arxiv.org/abs/2608.30263v1)
Wen et al., 2026-08-31 | 贡献：提出在多样性剪枝前先做视觉 token 几何中心校正。关联：修正 LVLM token 余弦相似度的系统性失真。

### 持续学习

#### [Frozen Cores Need Task Signal: Fisher-Whitened Cross-Covariance for Low-Resource LLM Adaptation](http://arxiv.org/abs/2609.00762v1)
Ye et al., 2026-09-01 | 贡献：在冻结主干上依据任务信号选择有效适配参数位置。关联：为持续学习中的低资源 LLM 适配提供参数选址方法。

#### [RW-LoRA: Communication-Efficient Decentralized LoRA Fine-Tuning via Random Walks](http://arxiv.org/abs/2609.00078v1)
Chen et al., 2026-08-31 | 贡献：用随机游走实现去中心化 LoRA 微调，降低通信开销。关联：适合分散式设备上的持续适配与 LLM 更新。

#### 🔁 **【过去14天内已出现】** [One Adapter, Many Tasks: Task-Conditioned Feature Transformations for Continual Learning](http://arxiv.org/abs/2608.31096v1)
Fu et al., 2026-08-31 | 贡献：用单一 adapter 和任务条件特征变换做类别增量学习。关联：当前持续学习高相关重复文献中与灾难遗忘最直接的工作。

#### 🔁 **【过去14天内已出现】** [Reading the News: Adapting Large Language Models to Swedish Journalism Through Continued Pre-Training](http://arxiv.org/abs/2608.30609v1)
Borggren et al., 2026-08-31 | 贡献：对瑞典语新闻领域做继续预训练实现 LLM 领域特化。关联：属于领域持续预训练/知识更新的重复工作。

## 视觉感知

### 事件相机视觉感知

#### [Residual Kalman Dynamics for Event-Based UAV Forecasting](http://arxiv.org/abs/2609.00839v1)
Nyblom et al., 2026-09-01 | 贡献：用常速度 Kalman 作为物理基线，训练残差模型预测事件相机无人机轨迹。关联：推进事件相机数据上的短中期运动预测。

### 3D 点云视觉感知

#### 🔁 **【过去14天内已出现】** [VCAR: Training-Free 3DGS Segmentation via View Completeness and Axis-Aware Boundary Refinement](http://arxiv.org/abs/2608.30870v1)
Cao et al., 2026-08-31 | 贡献：提出无训练的 3DGS 分割方法，优化视角完整性和轴向边界。关联：改进 3D 场景感知中的边界质量。

#### 🔁 **【过去14天内已出现】** [MoSaiC: Motion-Saliency Complementary Masked Modeling for Point Cloud Video Understanding](http://arxiv.org/abs/2608.30279v1)
Wang et al., 2026-08-31 | 贡献：用运动与显著性互补掩码建模，做点云视频自监督表示学习。关联：直接服务 3D 动态场景理解。

#### 🔁 **【过去14天内已出现】** [Lucida: Parse, Generate, and Place for Composable Real-to-Sim Scene Modeling](http://arxiv.org/abs/2608.30821v1)
Qin et al., 2026-08-31 | 贡献：把真实室内场景解析为可编辑物体资产并生成仿真布局。关联：为具身仿真提供高质量的 3D 场景表示。

## 跨方向信号
- Token/上下文稀疏化成为共同工程主线：多模态视觉 token 剪枝与 agent 上下文压缩/路由均在降低长序列推理成本。
- Agent 动态执行结构上升为研究对象：harness 生命周期、递归树权限、动态 3D 场景图都强调“运行时结构需要被系统建模”。
- 自我改进与测试时计算正在融合：RL 后训练、自博弈与树搜索共同构成 LLM agent 的持续演化工具箱。
- VLA 走向可复用抽象：动作分块、技能库和无监督 motor program 学习共同对抗长程任务退化。
- 评估效度被反复质疑：从 agent 市场模拟的构念效度到 harness 生命周期基准，都提示需要更严格的任务真实性检验。

## 优先精读
1. **EmbodiedSkills**：同时涉及 VLA 编排、训练、部署与长程任务恢复，是理解 VLA agent 工程化全貌的高密度论文。
2. **HarnessDev**：提出 agent harness 可被 LLM 自主演化，可能改变 agent 评估和工程范式。
3. **DiagEvo**：在 self-play 自我进化中引入诊断与分层错误记忆，是 LLM agent 自我改进路线的重要新尝试。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*