# 实验室研究方向 Radar 2026-08-19

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 28 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-08-18 22:16 UTC

---

## 今日总览

- **LLM Agent 与多智能体 / LLM Agent 工程**：今日新论文集中在记忆/技能系统（QUMem、HyperSkill、HaReCAP）、长程任务信用分配（TRCA）、不确定性传播（From Sequence to Structure）、安全攻击（CompoSkill、When State Becomes an Attack Surface）、黑盒 RL（ClawGym II）、提示优化（CAPO）以及航空副驾驶评估（AeroCopilotBench）。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：今日暂无新论文。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
#### - **具身智能 / 视觉-语言-动作模型**：今日新论文集中在 VLA 架构效率（NebulaVLA、SparkVLA）、基础模型扩展（GigaBrain-0.7）、人形整身操作适配（HAF）、VLA 自评估（FabriMAE）、超声应用（US-VLA）、神经符号规划（Neurosymbolic Embodied Agents）与具身安全综述（Security of Foundation-Model-Powered Embodied Agents）。
#### - **具身智能 / 具身导航**：今日新论文集中在城市导航长尾场景的野外视频学习（Exposing the Long-tail in Embodied Urban Navigation）与手术室场景图生成（Sterilizable Scene Graph Generation for Operating Rooms）。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：今日暂无新论文。
- **模型压缩与持续学习 / 多模态大模型剪枝**：今日暂无新论文。
- **模型压缩与持续学习 / 持续学习**：今日新论文集中于层自适应正则化（Layers Matter）、遗忘的表示几何（Geometry of Forgetting）、预训练模型表征塑造（Task-Anchored Representation Shaping）、结构生长（SoftModel）、参数高效视觉适配（Self-Routed Tensor Adapters）与领域无关主题建模（Domain-Agnostic Neural Topic Modeling）。
- **视觉感知 / 事件相机视觉感知**：今日新论文提出 FLEET，用 token 化特征提取支持事件相机强化学习。
- **视觉感知 / 3D 点云视觉感知**：今日新论文 GaussianDWM++ 融合 3D 高斯表示与语言，实现驾驶场景统一理解、编辑与生成。
- **视觉感知 / 3D 点云感知与跟踪**：今日暂无新论文。

## LLM Agent 与多智能体

### LLM Agent 工程

#### [CompoSkill: Compositional Skill Chain Attacks from Individually Scanner-Passing LLM Agent Skills](http://arxiv.org/abs/2608.16246v1)
M. Liu et al.｜2026-08-17｜贡献：证明单个通过安全扫描的 agent 技能组合后可能形成攻击链。｜关联：揭示 LLM agent 技能市场“逐包安全”假设在组合场景下的漏洞。

#### [QUMem: Personalized Memory for Query-Conditioned User-State Inference in LLM Agents](http://arxiv.org/abs/2608.16168v1)
H. Wang et al.｜2026-08-17｜贡献：提出查询条件用户状态推断的记忆系统，处理长交互历史中的偏好漂移与冲突。｜关联：为 LLM agent 外部记忆增加用户状态建模与个性化能力。

#### [TRCA: Transition-wise Rubric Credit Assignment for Long-horizon LLM Agents](http://arxiv.org/abs/2608.16156v1)
H. Zhang et al.｜2026-08-17｜贡献：提出过渡级评分信用分配，解决长程 agent 稀疏终端奖励下的细粒度归因问题。｜关联：改善 LLM agent 长程多步交互的训练信号质量。

#### [From Sequence to Structure: Relational Uncertainty Propagation for LLM Agents](http://arxiv.org/abs/2608.16002v1)
Z. Ma et al.｜2026-08-17｜贡献：提出关系不确定性传播，将 token/步骤级局部信号扩展为结构化长程不确定度。｜关联：提升 LLM agent 在复杂交互环境中的可靠性评估。

#### [HyperSkill: Self-Evolving LLM Agents via Hypergraph-Structured Skill Memory](http://arxiv.org/abs/2608.16114v1)
R. Xu et al.｜2026-08-17｜贡献：用超图结构组织技能记忆，支持程序性知识存储、检索与自我进化。｜关联：强化 LLM agent 跨任务技能复用与演化机制。

#### [ClawGym II: Exploring Black-Box RL on Agent Harness](http://arxiv.org/abs/2608.16798v1)
H. Song et al.｜2026-08-17｜贡献：在 agent harness 上探索黑盒强化学习，为长程任务训练提出可扩展方案。｜关联：将 RL 训练引入 LLM agent 的 harness 集成场景。

#### [HaReCAP: Habitual-action Grounding for Recursive Large Language Model Agents](http://arxiv.org/abs/2608.16447v1)
S. Liu et al.｜2026-08-17｜贡献：引入习惯化动作基元，将递归规划中的叶子级子目标落地为可执行动作。｜关联：提升 LLM agent 在长程具身任务中的动作落地稳定性。

#### [When State Becomes an Attack Surface: State-Semantic Injection in LLM-Driven Embodied Agents](http://arxiv.org/abs/2608.16806v1)
J. Liu et al.｜2026-08-17｜贡献：揭示状态语义注入可成为 LLM 驱动具身 agent 的攻击面。｜关联：从状态语义视角补充 LLM agent 工程中的安全威胁建模。

#### [AeroCopilotBench: A Two-Tier Benchmark for Evaluating LLM Agents as Aviation Copilots in an Interactive Virtual Cockpit Environment](http://arxiv.org/abs/2608.16349v1)
Y. Yuan et al.｜2026-08-17｜贡献：构建交互式虚拟座舱中的航空副驾驶 LLM agent 两级基准。｜关联：为高风险航空场景中的 LLM agent 程序执行与安全合规评估提供基础。

#### [CAPO: Constraint-Aware Prompt Optimization for LLM Agents](http://arxiv.org/abs/2608.16068v1)
V. Y. Dong et al.｜2026-08-17｜贡献：提出约束感知提示优化，在工具使用、简洁性与安全策略约束下优化系统提示。｜关联：把部署约束显式纳入 LLM agent prompt 工程。

## 具身智能

### 视觉-语言-动作模型

#### [GigaBrain-0.7: Scaling Embodied Foundation Models to Emergent Capabilities with a Three-System Architecture](http://arxiv.org/abs/2608.15875v1)
GigaBrain Team et al.｜2026-08-16｜贡献：提出三系统架构扩展 VLA 基础模型，验证规模化可带来涌现能力。｜关联：直接推动视觉-语言-动作模型向更大规模与更强泛化演进。

#### [NebulaVLA: A Dual-Frequency Vision-Language-Action Model With Guide Action for Robotic Manipulation](http://arxiv.org/abs/2608.16503v1)
C. Zhao et al.｜2026-08-17｜贡献：提出异步双频 VLA 架构，解耦高层语义推理与低层动作执行。｜关联：在效率-性能权衡和跨具身泛化上改进 VLA 架构设计。

#### [SparkVLA: Stop-Aware Hierarchical VLA with Adaptive Action Chunking for Long-Horizon Manipulation](http://arxiv.org/abs/2608.16172v1)
X. Lei et al.｜2026-08-17｜贡献：提出停止感知的分层 VLA，自适应决定子任务终止点与动作块长度。｜关联：优化 VLA 在长程操作中的分层接口决策。

#### [HAF: Adapting Generalist VLAs to Humanoid Whole-Body Loco-manipulation via Hierarchical Action Flow and Spectral Latent RL](http://arxiv.org/abs/2608.16837v1)
L. Gu et al.｜2026-08-17｜贡献：用分层动作流与谱潜变量 RL 将通用 VLA 适配到人形整身移动操作。｜关联：弥合通用 VLA 与人形机器人高维动作控制的鸿沟。

#### [FabriMAE I Trust Myself? Self-Evaluating VLA Action Generation with Markov Attention Entropy](http://arxiv.org/abs/2608.16697v1)
Aniri et al.｜2026-08-17｜贡献：提出基于马尔可夫注意力熵的 VLA 自评估方法，无需外部监督判断动作可靠性。｜关联：为 VLA 提供内部不确定性估计与自我校验机制。

#### [US-VLA: An Ultrasound Vision-Language-Action Model for Embodied Abdomina](http://arxiv.org/abs/2608.16074v1)
C. Zhang et al.｜2026-08-17｜贡献：提出超声 VLA 模型，为具身腹部超声扫描提供实时标准图像采集指导。｜关联：将 VLA 成功扩展到医疗超声这一高价值具身任务场景。

#### [Neurosymbolic Embodied Agents](http://arxiv.org/abs/2608.16794v1)
M. Albinhassan et al.｜2026-08-17｜贡献：提出神经符号具身 agent，将长程家务任务分解为视觉探索与可执行动作并保证可执行性。｜关联：为 VLA/具身 agent 规划引入符号约束，提升落地可靠性。

#### [Security of Foundation-Model-Powered Embodied Agents: Attack Surfaces, Attacks, Defenses, and Evaluation](http://arxiv.org/abs/2608.16843v1)
J. Liu et al.｜2026-08-17｜贡献：系统整理基础模型驱动具身 agent 的攻击面、攻击、防御与评估框架。｜关联：为 VLA 及具身 agent 的安全部署提供全景式威胁建模。

### 具身导航

#### [Exposing the Long-tail in Embodied Urban Navigation via Scalable Learning from In-the-Wild Videos](http://arxiv.org/abs/2608.16476v1)
B. Xia et al.｜2026-08-17｜贡献：提出从野外视频可扩展学习点目标城市导航策略，覆盖长尾安全关键场景。｜关联：以低成本数据驱动方式扩展具身导航的策略覆盖范围。

#### [Sterilizable Scene Graph Generation for Operating Rooms](http://arxiv.org/abs/2608.16469v1)
N. Lemke et al.｜2026-08-17｜贡献：面向手术视频的轻量化场景图生成，建模对象与语义关系并适合部署。｜关联：为手术室具身智能提供结构化场景理解与导航/操作基础。

## 模型压缩与持续学习

### 持续学习

#### [Geometry of Forgetting: Representation Flux in Continual Learning](http://arxiv.org/abs/2608.15854v1)
M. A. Kazanskii｜2026-08-16｜贡献：从表征空间“表示流”角度刻画灾难性遗忘的动态过程。｜关联：为持续学习提供新的遗忘度量与表征几何解释。

#### [Layers Matter: Why Continual Learning Regularization Should Be Layer-Adaptive](http://arxiv.org/abs/2608.15901v1)
B. B. Moser et al.｜2026-08-16｜贡献：论证层自适应正则化优于逐层/逐参数对角线 Fisher 的欠拟合问题。｜关联：改进 EWC 类持续学习正则化的层间异质性建模。

#### [Task-Anchored Representation Shaping for Pre-Trained Model-Based Continual Learning](http://arxiv.org/abs/2608.16345v1)
Z. Xu et al.｜2026-08-17｜贡献：提出任务锚定表征塑造，在 PTM 持续学习中兼顾任务适应与可靠推断。｜关联：强化预训练模型在持续学习中的稳定表征与多任务推理。

#### [SoftModel: A Neural Model That Grows Its Own Topology -- Governed Structural Growth for Continual In-Service Learning](http://arxiv.org/abs/2608.16409v1)
Z. Xie｜2026-08-17｜贡献：提出可自主生长拓扑的神经模型，将结构作为持续在役学习的学习自由度。｜关联：把网络结构增长引入持续学习范式，突破固定拓扑限制。

#### [Self-Routed Tensor Adapters for Parameter-Efficient Universal Visual Adaptation](http://arxiv.org/abs/2608.16384v1)
S. Yadav｜2026-08-17｜贡献：提出自路由张量适配器，在冻结视觉基础模型上实现通用且避免知识碎片化的适应。｜关联：为持续/通用视觉适应提供参数高效且不遗忘的适配方案。

#### [Domain-Agnostic Neural Topic Modeling with Contextual Token-Level Semantic Graph Representation](http://arxiv.org/abs/2608.16269v1)
S.-W. Seo et al.｜2026-08-17｜贡献：用上下文 token 级语义图优化嵌入空间几何，提升领域自适应主题建模可解释性。｜关联：其表示几何优化思路可服务于持续学习中的多领域表征稳定。

## 视觉感知

### 事件相机视觉感知

#### [FLEET: Token-Based Feature Extraction for Event Camera-based Reinforcement Learning](http://arxiv.org/abs/2608.16523v1)
T. Gottwald et al.｜2026-08-17｜贡献：提出基于 token 的特征提取方法，支持事件相机强化学习控制策略。｜关联：为事件相机稀疏异步数据流提供适合 RL 学习的低延迟特征表示。

### 3D 点云视觉感知

#### [GaussianDWM++: Language-Grounded 3D Gaussian Driving World Model for Unified Scene Understanding, Editing, and Multi-Modal Generation](http://arxiv.org/abs/2608.16234v1)
T. Deng et al.｜2026-08-17｜贡献：提出语言接地的 3D 高斯驾驶世界模型，统一场景理解、4D 编辑与多模态生成。｜关联：将 3D 高斯表示用于驾驶场景结构化感知与具身环境理解。

## 跨方向信号

- **安全从数字攻击延伸到物理行为**：CompoSkill、When State Becomes an Attack Surface 与具身安全综述共同表明，LLM agent、VLA 与具身 agents 面临跨层组合式安全威胁。
- **记忆/技能系统走向结构化与可演进**：QUMem、HyperSkill、HaReCAP 分别从用户状态、超图技能与习惯化动作切入，推动 LLM agent 在长程任务中复用和演化经验。
- **VLA 架构呈现分层/异步趋势**：NebulaVLA、SparkVLA、HAF、GigaBrain-0.7 共同关注高频动作控制与低频语义推理的解耦，以及跨具身适配。
- **持续学习从参数约束转向几何与结构视角**：Layers Matter、Geometry of Forgetting、SoftModel 代表从层曲率、表示流到拓扑生长的路径扩展。
- **3D 表示与语言/世界模型融合**：GaussianDWM++ 同时影响 3D 视觉感知、具身导航与多模态生成，显示 3D 高斯表示作为统一场景底座的潜力。

## 优先精读

- **GigaBrain-0.7**：VLA 基础模型三系统架构与规模化涌现能力，对未来具身基础模型设计具有方向性参考价值。
- **Security of Foundation-Model-Powered Embodied Agents**：系统覆盖攻击面、攻击、防御与评估，对 LLM agent 工程和 VLA 安全部署均有直接指导意义。
- **GaussianDWM++**：语言接地的 3D 高斯驾驶世界模型，跨越 3D 点云感知、具身导航与多模态生成，是代表性跨方向工作。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*