# 实验室研究方向 Radar 2026-09-25

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 33 篇新文献 + 11 篇过去14天内已出现 | 生成时间：2026-09-25 00:12 UTC

---

# 今日总览
- LLM Agent 与多智能体 / LLM Agent 工程：10 新，0 过去。今日进展集中在记忆策展、世界模型、状态接地、约束上下文与部署/领域 benchmark。
- LLM Agent 与多智能体 / Agent 测试时扩展与自我改进：2 新，3 过去。今日进展为协调推理路径、能力流形与扩展规律，替代朴素重复采样。
- LLM Agent 与多智能体 / LLM Agent Society：0 新，0 过去。今日暂无新论文。
- 具身智能 / 视觉-语言-动作模型：10 新，1 过去。今日进展包括 VLA 记忆、优势后训练、TAMP 示范、残差治理、真实 RL、标注效率与视角不变性。
- 具身智能 / 具身导航：7 新，3 过去。今日进展为大规模语义地图、主动记忆检索、几何感知补足与基础模型部署。
- 模型压缩与持续学习 / LLM 剪枝与推理优化：2 新，0 过去。今日进展为运行时 slack 回收与 ViT 任务几何。
- 模型压缩与持续学习 / 多模态大模型剪枝：0 新，1 过去。今日暂无新论文；过去聚焦视觉 token 条件可移除性。
- 模型压缩与持续学习 / 持续学习：2 新，2 过去。今日进展为量化张量重整形与结构化矩阵优化。
- 视觉感知 / 事件相机视觉感知：1 新，1 过去。今日进展为预测未来以抵消事件检测延迟。
- 视觉感知 / 3D 点云视觉感知：1 新，2 过去。今日进展为 4D 雷达-相机几何接地语义检测。
- 视觉感知 / 3D 点云感知与跟踪：0 新，0 过去。今日暂无新论文。

# 分方向情报
## LLM Agent 与多智能体
### LLM Agent 工程
#### [Just-in-Time Memory: Learning to Curate Task-Adaptive Memory for LLM Agents](http://arxiv.org/abs/2609.27334v1)
Zhou 等，09-23：任务自适应记忆策展；关联：LLM agent 长期记忆。
#### [Agent-Editing World Model: Rethinking World Modeling for LLM Agents](http://arxiv.org/abs/2609.28416v1)
Sun 等，09-23：为 LLM agent 重思世界模型；关联：环境建模与规划。
#### [State-Grounded Conditioning: Wrapping User-Facing LLM Agents Where Direction Depends on Live State](http://arxiv.org/abs/2609.27606v1)
Liu 等，09-23：实时状态接地，抑制 direction drift；关联：用户态 agent 工程。
#### [Harness as a Language: A Minimalist Agent Framework With Maximal Expressivity](http://arxiv.org/abs/2609.26891v1)
Li 等，09-22：语言化最小 agent harness；关联：agent 编排框架。
#### [Constraint-Driven Context Engineering: Designing Domain Interfaces for AI Systems](http://arxiv.org/abs/2609.27354v1)
Xu 等，09-23：约束驱动上下文工程；关联：合规领域 agent。
#### [FDE-Bench: Evaluating LLM Agents for Deployment Environment Configuration](http://arxiv.org/abs/2609.27571v1)
Ding 等，09-23：部署环境配置 agent 评测；关联：运维 agent benchmark。
#### [MolDesignBench: Evaluating LLM-based Agent for Scenario-grounded Molecular Design](http://arxiv.org/abs/2609.27349v1)
Jeong 等，09-23：场景分子设计 agent 评测；关联：领域 agent 评估。
#### [Propose, Don't Judge: An Anytime-Valid Referee for LLM Agents That Mine Investment Factors](http://arxiv.org/abs/2609.27051v1)
Qu 等，09-22：anytime-valid referee 治理因子挖掘 agent；关联：自我进化边界。
#### [SR-Fraud: An Outcome-Supervised Reflective LLM Agent Framework for Non-Stationary Payment Fraud Detection](http://arxiv.org/abs/2609.27287v1)
Tan 等，09-23：反思式 LLM agent 做支付欺诈；关联：非平稳流式决策。

### Agent 测试时扩展与自我改进
#### [Planned Test-Time Scaling with Coordinated Reasoning Paths](http://arxiv.org/abs/2609.27374v1)
Wu 等，09-23：协调推理路径减少冗余；关联：测试时扩展。
#### [The Capability Manifold and ML Scaling Laws](http://arxiv.org/abs/2609.27588v1)
Zaidi & Hafeez，09-23：以能力流形刻画 agentic harness 下游性能；关联：扩展规律。
#### 🔁 **【过去14天内已出现】** [Beyond Repeated Sampling: Learning Search Policies for LLM Reasoning](http://arxiv.org/abs/2609.26704v1)
🔁 **【过去14天内已出现】** Labiad 等，09-22：学习搜索策略；关联：替代重复采样。
#### 🔁 **【过去14天内已出现】** [Direct Optimization of Generators for Search in Automated Theorem Proving](http://arxiv.org/abs/2609.25575v1)
🔁 **【过去14天内已出现】** Ousherovitch & Tewari，09-22：优化搜索生成器；关联：定理证明测试时搜索。
#### 🔁 **【过去14天内已出现】** [CliffCompaction: Cost-Efficient Compaction for Long-Horizon Coding Agents](http://arxiv.org/abs/2609.26779v1)
🔁 **【过去14天内已出现】** Nguyen 等，09-22：长程编码 agent 自动压缩；关联：降本自我改进。

## 具身智能
### 视觉-语言-动作模型
#### [MemBodied: Recurrent Associative Memory for Vision-Language-Action Models](http://arxiv.org/abs/2609.28256v1)
Pala 等，09-23：递归联想记忆；关联：历史依赖操作。
#### [Dissecting Advantage-Guided Post-Training for Vision-Language-Action Policies](http://arxiv.org/abs/2609.28161v1)
Cao 等，09-23：优势引导后训练分解；关联：VLA 强化后训练。
#### [TANDEM: Task and Motion Planning with As-Needed Demonstrations for Efficient Vision-Language-Action Model Fine-tuning](http://arxiv.org/abs/2609.28314v1)
Sahoo 等，09-23：TAMP 按需示范；关联：VLA 微调数据效率。
#### [CereVLA: Cerebellum-Inspired Consequence-Aware Residual Governance for Efficient Vision-Language-Action Execution](http://arxiv.org/abs/2609.27468v1)
Zeng 等，09-23：小脑启发残差治理；关联：动作块纠偏。
#### [BEE: Intervention-Adaptive Real-World Reinforcement Learning with Vision-Language-Action Models](http://arxiv.org/abs/2609.27450v1)
Zhao 等，09-23：干预自适应真实 RL；关联：精度关键阶段。
#### [Less Language, More Latents: Annotation-Efficient VLAs for Driving](http://arxiv.org/abs/2609.27747v1)
Zakharov 等，09-23：减少语言标注；关联：驾驶 VLA 标注效率。
#### [LiMA: Bridging Long-term Imagination to Real-time Dexterous Manipulation via Asynchronous Diffusion](http://arxiv.org/abs/2609.28431v1)
Chen 等，09-23：异步扩散长期想象；关联：灵巧操作。
#### [InfiNoVA: Infinite Novel View Augmentation for Viewpoint Invariant Robot Policies](http://arxiv.org/abs/2609.27734v1)
Gottam 等，09-23：无限新视角增强；关联：视角不变 VLA。

### 具身导航
#### [NaviScale: Generating Large-Scale Semantic Map Datasets for Object Navigation](http://arxiv.org/abs/2609.27218v1)
Lan 等，09-23：大规模语义地图数据集；关联：ObjectNav。
#### [NavProbe: Evidence-Grounded Reasoning with Active Memory Retrieval for Zero-Shot Navigation](http://arxiv.org/abs/2609.27526v1)
Liu 等，09-23：主动记忆检索零样本导航；关联：长程导航。
#### [VLMs Can Describe, But Not Measure: Object-Centric Scene Understanding for Robotic Manipulation](http://arxiv.org/abs/2609.28184v1)
Saccon 等，09-23：VLM 模块化感知补几何度量；关联：具身感知。
#### [Depth-Guided Contrastive Learning for 2D Representations with 3D Spatial Awareness](http://arxiv.org/abs/2609.28159v1)
Zeng & Vergauwen，09-23：深度引导对比学习；关联：3D 空间表征。
#### 🔁 **【过去14天内已出现】** [SparseNav: Instruction-conditioned Sparse Semantic Perception for Training-Free Vision-Language Navigation](http://arxiv.org/abs/2609.26408v1)
🔁 **【过去14天内已出现】** Chen 等，09-22：指令条件稀疏语义；关联：training-free VLN。
#### 🔁 **【过去14天内已出现】** [CDKF-Track: Cluster-aware Data-Driven Kalman Filtering for Cooperative 3D Multi-Object Tracking](http://arxiv.org/abs/2609.25668v1)
🔁 **【过去14天内已出现】** Damanaki 等，09-22：聚类 Kalman 协同 3D MOT；关联：导航感知。
#### 🔁 **【过去14天内已出现】** [Deploying Foundation Models for Embodied Navigation](http://arxiv.org/abs/2609.25666v1)
🔁 **【过去14天内已出现】** Dorbala & Manocha，09-22：基础模型导航部署偏差/长上下文；关联：具身导航。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### [SlackDrive: Reclaiming Runtime Slack for Adaptive Driving Inference](http://arxiv.org/abs/2609.28064v1)
Pei 等，09-23：运行时 slack 自适应驾驶推理；关联：推理加速。
#### [Task-Induced Riemannian Metrics for Vision Transformer Feature Spaces](http://arxiv.org/abs/2609.27988v1)
Bond 等，09-23：ViT 特征任务几何；关联：剪枝/选择度量。

### 多模态大模型剪枝
#### 🔁 **【过去14天内已出现】** [From Token Importance to Conditional Removability: Rethinking Visual Token Pruning in Multimodal Large Language Models](http://arxiv.org/abs/2609.26484v1)
🔁 **【过去14天内已出现】** He 等，09-22：条件可移除性重思视觉 token 剪枝；关联：多模态剪枝。

### 持续学习
#### [MicroQonv: Reshaping Convolution Tensors for Efficient Microscaling in Training and Inference](http://arxiv.org/abs/2609.28358v1)
Facq 等，09-23：卷积张量重整形显微缩放；关联：高效训练/推理。
#### 🔁 **【过去14天内已出现】** [From Experts to Sub-experts: Fine-grained Parameter-Efficient Fine-Tuning for MoE LLMs](http://arxiv.org/abs/2609.25655v1)
🔁 **【过去14天内已出现】** Tan 等，09-22：MoE 细粒度 PEFT；关联：持续适配。

## 视觉感知
### 事件相机视觉感知
#### [Bend the Clock: Predicting Ahead to Beat Latency in Event-Based Object Detection](http://arxiv.org/abs/2609.26919v1)
Sen 等，09-22：预测未来抵消事件检测延迟；关联：低延迟感知。
#### 🔁 **【过去14天内已出现】** [LiFR v2: Completion-Augmented Event Propagation for High-Rate Dense Prediction](http://arxiv.org/abs/2609.25803v2)
🔁 **【过去14天内已出现】** Wan 等，09-22：补全增强事件传播；关联：高帧率密集预测。

### 3D 点云视觉感知
#### [SGDet3D++: Geometry-Grounded Semantics for 4D Radar and Camera 3D Object Detection](http://arxiv.org/abs/2609.27671v1)
Bai 等，09-23：4D 雷达-相机几何接地语义；关联：3D 检测。
#### 🔁 **【过去14天内已出现】** [Leveraging Vision-Based Point Cloud Map Priors for Camera-Based 3D Object Detection and Online Vectorized HD Mapping](http://arxiv.org/abs/2609.26325v1)
🔁 **【过去14天内已出现】** Käppeler 等，09-22：点云地图先验辅助相机 3D 检测/HD 地图。
#### 🔁 **【过去14天内已出现】** [AT3D-AD: Anomaly Type-Aware 3D Anomaly Detection via Hierarchical Point-Language Alignment](http://arxiv.org/abs/2609.25930v1)
🔁 **【过去14天内已出现】** Zeng 等，09-22：层级点-语言对齐 3D 异常检测。

# 跨方向信号
- VLA、导航与 3D 感知加速融合：记忆、几何度量、视角不变性和 4D 雷达语义共同补足空间理解。
- LLM agent 工程从 prompt 转向状态、记忆、约束与世界模型，强调运行时治理。
- 测试时扩展从独立重复采样转向协调路径、搜索策略与压缩降本。
- 压缩与持续学习交叉：运行时 slack、量化张量重整形、MoE PEFT 共同服务高效适配。
- 多模态剪枝强调 conditional removability；事件/点云感知强调低延迟与几何接地。

# 优先精读
#### - [Planned Test-Time Scaling with Coordinated Reasoning Paths](http://arxiv.org/abs/2609.27374v1)：协调路径替代重复采样，可能迁移到多 agent 推理与搜索。
#### - [MemBodied: Recurrent Associative Memory for Vision-Language-Action Models](http://arxiv.org/abs/2609.28256v1)：直击 VLA 历史依赖操作与记忆瓶颈。
#### - [Just-in-Time Memory: Learning to Curate Task-Adaptive Memory for LLM Agents](http://arxiv.org/abs/2609.27334v1)：从写时记忆转向运行时策展，影响 agent 记忆架构。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*