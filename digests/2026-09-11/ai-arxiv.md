# 实验室研究方向 Radar 2026-09-11

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 24 篇新文献 + 16 篇过去14天内已出现 | 生成时间：2026-09-10 23:37 UTC

---

## 今日总览
- **LLM Agent 与多智能体：LLM Agent 工程**：10 篇新文献。进展集中于企业工具 Agent 基准、harness 自进化、多智能体图推理、部分可观测规划、过程合规与多样性后训练。
- **LLM Agent 与多智能体：Agent 测试时扩展与自我改进**：2 篇新文献，2 篇旧文献。新进展为代码自博弈蒸馏文本 harness、真实结算奖励缩小验证缺口。
- **LLM Agent 与多智能体：LLM Agent Society**：0 篇新文献，0 篇旧文献。今日暂无新论文。
- **具身智能：视觉-语言-动作模型**：8 篇新文献，3 篇旧文献。新进展含频率/时频几何动作建模、后训练数据筛选、物理世界基准、验证器与联邦具身。
- **具身智能：具身导航**：0 篇新文献，9 篇旧文献。今日暂无新论文；存量聚焦长期导航、空中 VLN、空地协同与动态环境。
- **模型压缩与持续学习：LLM 剪枝与推理优化**：1 篇新文献，2 篇旧文献。新文献与多模态剪枝交叉；旧文献覆盖多视图 token 剪枝与历史感知层路由。
- **模型压缩与持续学习：多模态大模型剪枝**：2 篇新文献，0 篇旧文献。进展为样本自适应策略路由、GUI 轨迹缓存下证据有序 token 准入。
- **模型压缩与持续学习：持续学习**：2 篇新文献，2 篇旧文献。新进展为交通枢纽 LLM 策略基准、低资源方言退化评测；旧文献为 PEFT/几何贝叶斯微调。
- **视觉感知：事件相机视觉感知**：0 篇新文献，0 篇旧文献。今日暂无新论文。
- **视觉感知：3D 点云视觉感知**：0 篇新文献，2 篇旧文献。今日暂无新论文；存量涉及球面观测 3D 理解与开放词汇 3D 分割。
- **视觉感知：3D 点云感知与跟踪**：0 篇新文献，0 篇旧文献。今日暂无新论文。

## LLM Agent 与多智能体

### LLM Agent 工程
#### [The Era by Eon Benchmark: A Generated Enterprise Estate with Exact Ground Truth for Benchmarking LLM Agents](http://arxiv.org/abs/2609.09853v1)
B. Gruenbaum 等 | 2026-09-09 | 构建带精确真值的企业工具 Agent 基准。 | 直接评测 LLM Agent 工程的企业工具使用。
#### [RobustSGPO: Search-Space Control for Agent Harness Evolution](http://arxiv.org/abs/2609.09646v1)
Z. Zhao 等 | 2026-09-09 | 通过搜索空间控制改进语义梯度提示优化。 | 面向 Agent harness 自动进化。
#### [Multi-Agent Agentic Graph Learning via Structural Signatures](http://arxiv.org/abs/2609.09565v1)
L. Qu 等 | 2026-09-09 | 用结构签名协调多角色 Agent 图推理。 | 多智能体 LLM Agent 工程。
#### [CityPlanner: A Sandbox Agent for Executable Urban Planning](http://arxiv.org/abs/2609.09578v1)
W. Zhang 等 | 2026-09-09 | 在候选空间中选择可行城市规划动作。 | 面向真实约束的 Agent 规划。
#### [Belief-State Engine: Augmenting LLMs for Principled Planning Under Partial Observability](http://arxiv.org/abs/2609.10036v1)
A. Chattopadhayay 等 | 2026-09-09 | 用信念状态引擎增强部分可观测规划。 | 改进 LLM Agent 不确定性规划。
#### [ContractEval: Query-Conditioned Execution Matching for Procedural Instruction Conformance](http://arxiv.org/abs/2609.09458v1)
P. Singh 等 | 2026-09-08 | 评估 Agent 是否跳过检查、分支或依赖。 | 过程合规型 Agent 工程。
#### [Direct Diversity Optimization for Diverse Successful Trajectories in Preference Post-Training](http://arxiv.org/abs/2609.10052v1)
J. Ko 等 | 2026-09-09 | 优化偏好后训练中的成功策略覆盖。 | 提升 LLM Agent 多分支决策能力。
#### [Retrofitting Code Using LLMs to Support Exceptional Behavior](http://arxiv.org/abs/2609.10397v1)
L. Zhong 等 | 2026-09-09 | 用 LLM 改造异常相关代码。 | Agent 辅助代码工程。
#### [Who Are They to Each Other? Multi-Agent Reasoning for Speaker Relationship Inference](http://arxiv.org/abs/2609.09628v1)
Y. Guan 等 | 2026-09-09 | 多智能体推理说话人关系。 | 多智能体社交语音理解。
#### [RAP: Research Attention Prediction Reveals Target-Conditioned Evidence Acquisition Biases](http://arxiv.org/abs/2609.10092v1)
Y. Wu 等 | 2026-09-09 | 建立研究注意力预测滚动基准。 | 评估研究型 LLM Agent。

### Agent 测试时扩展与自我改进
#### [Building the Harness Automatically: Self-Play in Code Distills a Text Harness for Black-Box Optimization](http://arxiv.org/abs/2609.09468v1)
Y. Wu 等 | 2026-09-08 | 代码自博弈蒸馏文本 harness 用于黑盒优化。 | 测试时自改进与自博弈。
#### [Proof-Carrying Cognition: Closing the Verification Gap with Reality-Settled Reward](http://arxiv.org/abs/2609.09776v1)
E. Reddy M 等 | 2026-09-09 | 提出真实结算奖励缩小验证缺口。 | 测试时验证与自我改进。
#### 🔁 **【过去14天内已出现】** [The Surprising Effectiveness of Approximate Value Iteration in Self-Play](http://arxiv.org/abs/2609.09094v1)
🔁 **【过去14天内已出现】** R. Boige 等 | 2026-09-08 | 用近似值迭代替代 MCTS 降低自博弈开销。 | 自博弈测试时扩展。
#### 🔁 **【过去14天内已出现】** [Difficulty-Adaptive Tree-Structured Policy Optimization for Expanding Reasoning Coverage in RLVR](http://arxiv.org/abs/2609.08650v1)
🔁 **【过去14天内已出现】** Y. Yu 等 | 2026-09-08 | 树结构策略优化扩展 RLVR 推理覆盖。 | 测试时扩展与自我改进。

## 具身智能

### 视觉-语言-动作模型
#### [Frequency-Conditioned Flow Matching for Vision-Language-Action Models](http://arxiv.org/abs/2609.10405v1)
H. Niu 等 | 2026-09-09 | 提出频率条件流匹配，显式建模动作频率分量。 | 改进 VLA 动作生成时间建模。
#### [Time-Frequency Geometric Cross-Attention for Chunked Vision-Language-Action Models](http://arxiv.org/abs/2609.09925v1)
S. Dong 等 | 2026-09-09 | 时频几何交叉注意力建模动作块。 | 提升 VLA 块状动作表示。
#### [RoboDrop: Curating VLA Post-Training Data via Local Gradient Compatibility](http://arxiv.org/abs/2609.10021v1)
R. Xu 等 | 2026-09-09 | 用局部梯度兼容性筛选 VLA 后训练数据。 | 改进 VLA 任务适配数据策展。
#### [FolDeX: A Physical-World Benchmark for Long-Horizon Robotic Manipulation of Deformable Objects](http://arxiv.org/abs/2609.10243v1)
C. Liu 等 | 2026-09-09 | 构建长时程可变形物体操作物理基准。 | 评测 VLA 物理世界长时程操作。
#### [No Free Checker: A Survey of Verifiers for Robot Policies](http://arxiv.org/abs/2609.09250v1)
Y. Wan 等 | 2026-09-08 | 综述机器人策略验证器。 | 为 VLA 评估与训练提供验证工具。
#### [VANTAGE-Bench: Evaluating the Infrastructure AI Gap in Vision-Language Models](http://arxiv.org/abs/2609.09396v1)
Z. P. Bhat 等 | 2026-09-08 | 提出基础设施 AI 视觉语言模型基准。 | 拓展 VLA/VLM 物理部署评测。
#### [Valerant: An Automatic Navigable Game Map Generator via Action-Conditioned World Model Exploration](http://arxiv.org/abs/2609.09418v1)
Y. Qiao 等 | 2026-09-08 | 动作条件世界模型探索生成可导航游戏地图。 | 世界动作模型用于具身行为。
#### [Modality-Decoupled Federated Learning for Privacy-Preserving Embodied Intelligence in 6G](http://arxiv.org/abs/2609.09591v1)
Z. Liu 等 | 2026-09-09 | 6G 下模态解耦联邦学习保护具身智能隐私。 | 面向 VLA 的联邦具身训练。
#### 🔁 **【过去14天内已出现】** [DeCAL: Towards Physically-Grounded Dexterous Vision-Language-Action Models via Contact-Aware Latent Co-Imagination](http://arxiv.org/abs/2609.09119v1)
🔁 **【过去14天内已出现】** Y. Fu 等 | 2026-09-08 | 接触感知潜空间共想象提升灵巧 VLA。 | 对应 VLA 接触丰富操作。

### 具身导航
#### 🔁 **【过去14天内已出现】** [TANGO: Humanoid Navigation in Cluttered Environments with a Whole-Body Vision-Language-Action Model](http://arxiv.org/abs/2609.09158v1)
🔁 **【过去14天内已出现】** A. Li 等 | 2026-09-08 | 全身 VLA 实现杂乱环境人形导航。 | 具身导航与 VLA 结合。
#### 🔁 **【过去14天内已出现】** [EvoNav-Bench: Benchmarking Lifelong Navigation in Evolving Environments](http://arxiv.org/abs/2609.08292v1)
🔁 **【过去14天内已出现】** X. Wang 等 | 2026-09-08 | 终身导航基准。 | 评估演进环境导航。
#### 🔁 **【过去14天内已出现】** [OmniNav: Robust Long-Horizon Target Navigation in Dynamic Environments](http://arxiv.org/abs/2609.08159v1)
🔁 **【过去14天内已出现】** Y. Tang 等 | 2026-09-08 | 动态环境长时程目标导航。 | 具身导航。
#### 🔁 **【过去14天内已出现】** [AirAnchor: Bridging Local and Global Spatial Information for Zero-Shot Aerial Vision-and-Language Navigation](http://arxiv.org/abs/2609.08442v1)
🔁 **【过去14天内已出现】** S. Fan 等 | 2026-09-08 | 零样本空中视觉语言导航。 | 具身导航。
#### 🔁 **【过去14天内已出现】** [Estimating Semantic Ambiguity via Gaussian Context Distributions for VLM-Driven Traversability Analysis](http://arxiv.org/abs/2609.08583v1)
🔁 **【过去14天内已出现】** R. Häuselmann 等 | 2026-09-08 | 高斯上下文分布估计 VLM 语义歧义用于可通行性。 | 导航场景理解。
#### 🔁 **【过去14天内已出现】** [Towards Embodied Air-Ground Cooperative Object Search: Benchmark, Dataset and Agentic Method](http://arxiv.org/abs/2609.08402v1)
🔁 **【过去14天内已出现】** B. Yu 等 | 2026-09-08 | 空地协同目标搜索基准与智能体方法。 | 具身导航。
#### 🔁 **【过去14天内已出现】** [From Coordinates to Candidate Regions: Temporal Change Localization via Region Selection in Remote Sensing Multimodal LLMs](http://arxiv.org/abs/2609.08391v1)
🔁 **【过去14天内已出现】** J. Chung 等 | 2026-09-08 | 遥感多模态 LLM 时序变化定位。 | 导航/遥感场景理解。

## 模型压缩与持续学习

### LLM 剪枝与推理优化
#### 🔁 **【过去14天内已出现】** [CoVeR: Coverage-Based Token Pruning for Multi-View 3D Reasoning in VLMs](http://arxiv.org/abs/2609.08345v1)
🔁 **【过去14天内已出现】** N.-T. Bui 等 | 2026-09-08 | 覆盖度驱动多视图 3D 推理 token 剪枝。 | LLM 推理优化与剪枝。
#### 🔁 **【过去14天内已出现】** [Do Dynamic Routers Need Memory? HeRo: History-Aware Routing for Efficient LLM Inference](http://arxiv.org/abs/2609.08189v1)
🔁 **【过去14天内已出现】** H. Lin 等 | 2026-09-08 | 历史感知动态层路由减少 LLM 推理。 | LLM 剪枝与推理优化。

### 多模态大模型剪枝
#### [Beyond One-Size-Fits-All: Sample-Adaptive Strategy Routing for Vision Token Pruning in MLLMs](http://arxiv.org/abs/2609.10346v1)
H. Liang 等 | 2026-09-09 | 样本自适应策略路由视觉 token 剪枝。 | 多模态大模型剪枝。
#### [TRACE: Trajectory-robust Admission with Evidence Ordering for Efficient GUI Agents](http://arxiv.org/abs/2609.10297v1)
Y. Wang 等 | 2026-09-09 | 轨迹鲁棒证据有序准入用于 GUI Agent 视觉 token 剪枝。 | 多模态大模型剪枝与推理。

### 持续学习
#### [5-Dialects-BN: Unmasking the Impact of Transliteration on Bangla Dialectal LLMs](http://arxiv.org/abs/2609.09964v1)
M. M. Jawad 等 | 2026-09-09 | 研究转写对孟加拉方言 LLM 影响。 | 低资源持续适应压力。
#### [MetroLLM-Bench: Evaluating Language Models as Transit Kiosk Runtimes](http://arxiv.org/abs/2609.10016v1)
R. Hendriks | 2026-09-09 | 交通枢纽 LLM 策略基准。 | 持续学习策略评估。
#### 🔁 **【过去14天内已出现】** [MI-PEFT: Mixture-of-Experts Integrated Parameter-Efficient Fine-Tuning Protein Language Models Improves Acidophilic Proteins Classification](http://arxiv.org/abs/2609.08059v1)
🔁 **【过去14天内已出现】** H. Shen | 2026-09-07 | MoE+PEFT 蛋白质语言模型。 | 持续学习/PEFT。
#### 🔁 **【过去14天内已出现】** [Geometry-Aware Bayesian Parameter-Efficient Fine-Tuning on the Stiefel Manifold via Stein Variational Gradient Descent](http://arxiv.org/abs/2609.08354v1)
🔁 **【过去14天内已出现】** Q.-D. Tran 等 | 2026-09-08 | Stiefel 流形几何贝叶斯 PEFT。 | 持续学习参数高效微调。

## 视觉感知

### 3D 点云视觉感知
#### 🔁 **【过去14天内已出现】** [Spheriverse: 3D Scene Understanding from Spherical Observations in the Wild](http://arxiv.org/abs/2609.09012v1)
🔁 **【过去14天内已出现】** F. Teng 等 | 2026-09-08 | 球面观测 3D 场景理解。 | 3D 点云视觉感知。
#### 🔁 **【过去14天内已出现】** [GoDeep: Annotation-Free Open-Vocabulary 3D Scene Understanding via Language-Space Lifting](http://arxiv.org/abs/2609.09082v1)
🔁 **【过去14天内已出现】** T. Betsas 等 | 2026-09-08 | 开放词汇 3D 语义分割语言空间提升。 | 3D 点云视觉感知。

## 跨方向信号
- VLA 动作生成从时序坐标转向频率、时频几何与动作块结构建模。
- Agent 工程从静态提示转向 harness 自进化、过程合规、可验证基准与自博弈测试时扩展。
- 多模态推理成本推动样本自适应视觉 token 剪枝，剪枝从固定策略转向动态路由与轨迹缓存准入。
- 具身导航继续融合 VLA、VLM、世界模型，焦点在长期导航、空地协同与动态环境。
- 持续学习压力来自低资源方言、参数高效微调与几何/贝叶斯 PEFT，评测与适配并行。

## 优先精读
#### - [Frequency-Conditioned Flow Matching for Vision-Language-Action Models](http://arxiv.org/abs/2609.10405v1)：代表 VLA 动作生成频率建模新方向，可能影响流匹配策略设计。
#### - [Beyond One-Size-Fits-All: Sample-Adaptive Strategy Routing for Vision Token Pruning in MLLMs](http://arxiv.org/abs/2609.10346v1)：样本自适应剪枝，跨多模态剪枝与推理优化，实用性强。
#### - [RobustSGPO: Search-Space Control for Agent Harness Evolution](http://arxiv.org/abs/2609.09646v1)：Agent harness 自动进化核心问题，连接 LLM Agent 工程与自我改进。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*