# 实验室研究方向 Radar 2026-09-04

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 31 篇新文献 + 16 篇过去14天内已出现 | 生成时间：2026-09-03 23:44 UTC

---

# 研究方向 Radar（2026-09-04）

## 今日总览

- LLM Agent 与多智能体 / LLM Agent 工程：长程 Agent 从“逐步决策”转向“技能化动作块、工具原语和记忆安全”，工程化主线清晰。
- LLM Agent 与多智能体 / Agent 测试时扩展与自我改进：出现测试时智能综述及代码竞赛级自我改进路线，自我进化仍是热点。
- LLM Agent 与多智能体 / LLM Agent Society：今日暂无新论文。
- 具身智能 / 视觉-语言-动作模型：新论文集中在 VLA 内部表征分析、跨本体迁移和长程操作意图跟随。
- 具身智能 / 具身导航：浮现“语言前瞻 + 事件驱动记忆”以及“不确定性/扰动感知主动建图”两类方法。
- 模型压缩与持续学习 / LLM 剪枝与推理优化：多模态长视频推理出现“浅索引—深回答”的降本路线。
- 模型压缩与持续学习 / 多模态大模型剪枝：今日无新文献；过去14天内已有 3 篇视觉 token 剪枝工作。
- 模型压缩与持续学习 / 持续学习：LoRA/PEFT 初始化与适配仍是重点，同时出现多智能体技能持续优化。
- 视觉感知 / 事件相机视觉感知：今日无新论文；有 1 篇过去14天内已出现的事件 UAV 预测工作。
- 视觉感知 / 3D 点云视觉感知：新论文覆盖 4D 雷达三维检测、农业表型与结构缺陷检测。
- 视觉感知 / 3D 点云感知与跟踪：今日暂无新论文。

## LLM Agent 与多智能体

### LLM Agent 工程

#### [Act More, Decide Less: Skill-Guided Adaptive Action Chunking for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.02042v1)
作者：Yang 等；09-02。核心：用技能引导的自适应动作块减少长程任务中每轮 LLM 决策开销。关联：直接改进长程 Agent 执行效率。

#### [Harness Engineering in LLM Tool Use via Agent-Native Reusable Tool Primitives](http://arxiv.org/abs/2609.01736v1)
作者：Jin 等；09-01。核心：提出 Agent 原生可复用工具原语，缓解多步工具调用中 API schema 与输出类型不兼容。关联：面向工具型 Agent 的 Harness 工程。

#### [CAPTURE: Disentangling Preference Drift from Memory Poisoning in Personalized LLM Agents](http://arxiv.org/abs/2609.02265v1)
作者：Hossain 等；09-02。核心：区分个性化 Agent 的真实偏好漂移与记忆投毒/临时上下文干扰。关联：解决长时记忆 Agent 的安全与个性化冲突。

#### [SkillGLoW: Procedural-Family Skill Consolidation for Self-Improving Agents on Long-Horizon Task Streams](http://arxiv.org/abs/2609.02217v1)
作者：Yan 等；09-02。核心：在长任务流上按程序族整合文本技能，避免全局文档或扁平技能池失效。关联：提升 Agent 技能库可维护性。

#### [Git4Data: Database-Native Version Control for AI Agents](http://arxiv.org/abs/2609.02106v1)
作者：Gou 等；09-02。核心：让 Agent 对关系数据多候选状态进行数据库原生版本控制。关联：为数据探索型 Agent 提供可审计工程基座。

#### [Agent Memory Is a Surface for Endogenous Authorization Laundering](http://arxiv.org/abs/2609.01836v1)
作者：Cerruti 等；09-01。核心：持久记忆若错误表征授权状态，可使 Agent 自身记录产生“授权清洗”。关联：揭示 Agent 记忆层的新安全面。

#### [Belief-Calibrated Optimization: An Explicit World Model for Agentic Optimization](http://arxiv.org/abs/2609.01861v1)
作者：Chen 等；09-01。核心：为自动优化 Agent 建立显式世界模型，减少盲目编辑和重复试错。关联：改进 LLM Agent 脚手架的自优化闭环。

### Agent 测试时扩展与自我改进

#### [A Survey on Self-Improving Test-Time Intelligence: Feedback-Driven Adapting, Learning, and Scaling at Inference](http://arxiv.org/abs/2609.01679v1)
作者：Niu 等；09-01。核心：系统梳理推理期反馈驱动的适应、学习与扩展。关联：为测试时扩展研究提供统一框架。

#### [Post-Training Language Models for Gold-Medal Performance in Coding Competitions](http://arxiv.org/abs/2609.02849v1)
作者：Ficek 等；09-02。核心：用题目策展、合成推理轨迹等构建竞赛级代码模型。关联：代表“训练后/自我改进”提升推理上限的路线。

#### 🔁 **【过去14天内已出现】** [DiagEvo: Diagnosis-Guided Self-Evolution via Hierarchical Error Memory](http://arxiv.org/abs/2609.00768v1)
作者：Wei 等；09-01。核心：用分层错误记忆提供诊断信号，引导模型自我进化。关联：与 Agent 自我改进方向直接相关。

## 具身智能

### 视觉-语言-动作模型

#### [Latent Cluster Analysis for Vision-Language-Action Models](http://arxiv.org/abs/2609.02634v1)
作者：Wulff 等；09-02。核心：提出 VLA 潜在聚类分析框架，解释机器人行为背后的内部表征。关联：针对 VLA 可解释性。

#### [HINT: Human-Intent Inception for Long-Horizon Robot Manipulation](http://arxiv.org/abs/2609.02653v1)
作者：Mei 等；09-02。核心：由简单人类意图“植入”并随视觉变化持续调整的操纵策略。关联：降低长程操纵对复杂指令的依赖。

#### [ZETA: A Controlled Study of Zero-Shot Cross-Embodiment VLA Transfer for Tabletop Manipulation](http://arxiv.org/abs/2609.02546v1)
作者：Yan 等；09-02。核心：构建受控实验，研究跨本体零样本 VLA 迁移。关联：填补 VLA 跨本体泛化评测空白。

#### [Towards Zero-Shot Transfer Across Embodiments For Driving VLAs](http://arxiv.org/abs/2609.02341v1)
作者：Azevedo 等；09-02。核心：探索驾驶 VLA 跨本体微调与零样本迁移。关联：把 VLA 跨本体能力扩展到自动驾驶。

#### 🔁 **【过去14天内已出现】** [EmbodiedSkills: A Unified Framework for Orchestrating, Training, and Deploying VLA Agents](http://arxiv.org/abs/2609.01281v1)
作者：Wang 等；09-01。核心：统一 VLA 长程任务中的感知、规划、执行与恢复框架。关联：面向 VLA Agent 系统工程。

#### 🔁 **【过去14天内已出现】** [Knowing When to Stop: Adaptive Action Chunking via Internal Cross-Attention Dynamics in VLAs](http://arxiv.org/abs/2609.00908v1)
作者：Xu 等；09-01。核心：用内部交叉注意力动态自适应决定何时终止动作块。关联：改进 VLA 动作分块精度与效率。

### 具身导航

#### [LookStep: Efficient Vision-Language Navigation with Linguistic Foresight and Event Driven Memory](http://arxiv.org/abs/2609.02350v1)
作者：Yu 等；09-02。核心：在 VLN 中引入语言前瞻与事件驱动记忆，替代逐下一步预测。关联：提升具身导航的指令跟随效率。

#### [MS-MEM: Multi-Skill Manipulation-Enhanced Mapping via Uncertainty- and Disturbance-Aware Action Selection](http://arxiv.org/abs/2609.02493v1)
作者：Shi 等；09-02。核心：以不确定性/扰动感知主动选择动作，在货架等受限空间建图。关联：面向服务机器人的主动导航与场景理解。

#### 🔁 **【过去14天内已出现】** [DSG: Dynamic 3D Scene Graph Construction for Embodied Agents in Changing Indoor Environments](http://arxiv.org/abs/2609.00619v1)
作者：Liao 等；09-01。核心：在室内物体位置变化时动态更新 3D 场景图。关联：为具身导航提供时效性环境表征。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [ShallowStream: Index Shallow then Answer Deep for Streaming Video Understanding](http://arxiv.org/abs/2609.02780v1)
作者：Hao 等；09-02。核心：先做浅层索引、再对关键片段深推理，降低连续视频 MLLM 理解成本。关联：面向长视频 MLLM 推理优化。

### 多模态大模型剪枝

#### 🔁 **【过去14天内已出现】** [S$^2$Prune: Spatially Structured Visual Token Pruning for Multimodal Large Language Models](http://arxiv.org/abs/2609.01224v1)
作者：Jia 等；09-01。核心：提出空间结构化的视觉 token 剪枝，避免传统重要性/冗余准则的空间偏置。关联：针对 MLLM 输入序列压缩。

#### 🔁 **【过去14天内已出现】** [SinkPruner: Sink-Free Visual Token Pruning for Multimodal Large Language Models](http://arxiv.org/abs/2609.01004v1)
作者：Li 等；09-01。核心：去除注意力 sink 干扰后做视觉 token 剪枝。关联：提升 MLLM token 剪枝稳定性。

#### 🔁 **【过去14天内已出现】** [From Saliency to Discriminability: Rank-Preserving Visual Token Pruning for VLM Rerankers](http://arxiv.org/abs/2609.00667v1)
作者：Liu 等；09-01。核心：面向 VLM 重排序保留排序判别性，而非仅依赖注意力显著性。关联：扩展到检索重排序场景的视觉 token 剪枝。

### 持续学习

#### [MASkills: Continual Skills Optimization for Multi-Agent LLM Systems](http://arxiv.org/abs/2609.02094v1)
作者：Yao 等；09-02。核心：将多智能体系统交互经验持续沉淀为可调用技能。关联：接近“技能级持续学习”范式。

#### [TaRA: Training-Aware Low-Rank Adaptation Initialization](http://arxiv.org/abs/2609.02639v1)
作者：Kim 等；09-02。核心：提出训练感知的 LoRA 初始化，缓解低秩瓶颈影响。关联：为持续适配提供更稳的 PEFT 起点。

#### [Choosing a PEFT Variant for Per-Patient Dysarthric ASR: A Single-Speaker Case Study on Two ASR Bases](http://arxiv.org/abs/2609.02735v1)
作者：Muller 等；09-02。核心：在单说话人构音障碍 ASR 上比较 LoRA 族 PEFT 变体。关联：面向新说话人的持续适配选择问题。

#### 🔁 **【过去14天内已出现】** [Frozen Cores Need Task Signal: Fisher-Whitened Cross-Covariance for Low-Resource LLM Adaptation](http://arxiv.org/abs/2609.00762v1)
作者：Ye 等；09-01。核心：在极低参数量预算下用 Fisher 白化交叉协方差定位可训练系数。关联：约束预算下的持续/迁移适配。

## 视觉感知

### 事件相机视觉感知

#### 🔁 **【过去14天内已出现】** [Residual Kalman Dynamics for Event-Based UAV Forecasting](http://arxiv.org/abs/2609.00839v1)
作者：Nyblom 等；09-01。核心：用残差模型修正卡尔曼预测，提升事件相机 UAV 框预测。关联：事件视觉与动态目标预测结合。

### 3D 点云视觉感知

#### [Stereo 4D Radar for 3D Object Detection: Integrating Geometric Alignment and Absolute Velocity Estimation](http://arxiv.org/abs/2609.02560v1)
作者：Song 等；09-02。核心：用双目 4D 雷达做几何对齐与绝对速度估计，改善 3D 目标检测。关联：面向雷达点云的 3D 感知。

#### [Automated Maize Ear Phenotyping Using 3D Reconstructions](http://arxiv.org/abs/2609.01921v1)
作者：Kumar 等；09-01。核心：利用 3D 重建自动测量玉米穗行数、粒数等性状。关联：点云/三维视觉在农业表型中的应用。

#### [Integrated Laser Scanning and Image-Based Topology Optimization Techniques for Detection and Quantification of Visible and Subsurface Structural Defects](http://arxiv.org/abs/2609.01808v1)
作者：Shafiei Dizaji 等；09-01。核心：融合激光扫描与图像拓扑优化，量化表面与次表面结构缺陷。关联：激光点云与视觉联合检测。

## 跨方向信号

- “技能化”持续增强：从 LLM Agent 动作块、工具原语到 VLA 行为库，模型不再直接执行原始动作，而是复用模块化技能。
- 记忆成为核心设计对象：Agent 记忆既用于个性化与安全，也被视为授权攻击面；场景图记忆则服务具身导航。
- PEFT/LoRA 成为持续适配的共同底座：初始化、冻结核、单说话人/跨机构适配等都在低参数量约束下展开。
- 跨本体/跨设置泛化同时出现在 VLA、导航与多模态推理中，零样本迁移与受控评测开始被重视。

## 优先精读

#### [A Survey on Self-Improving Test-Time Intelligence: Feedback-Driven Adapting, Learning, and Scaling at Inference](http://arxiv.org/abs/2609.01679v1)：首次以系统综述串联测试时适应、学习与扩展，适合作为子方向切入框架。
#### [ZETA: A Controlled Study of Zero-Shot Cross-Embodiment VLA Transfer for Tabletop Manipulation](http://arxiv.org/abs/2609.02546v1)：为 VLA 跨本体泛化提供受控实验方法，直接服务具身智能核心问题。
#### [CAPTURE: Disentangling Preference Drift from Memory Poisoning in Personalized LLM Agents](http://arxiv.org/abs/2609.02265v1)：提出“偏好漂移 vs 记忆投毒”的判别问题，对长时记忆 Agent 安全研究有增量价值。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*