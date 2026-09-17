# 实验室研究方向 Radar 2026-09-17

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 35 篇新文献 + 9 篇过去14天内已出现 | 生成时间：2026-09-17 00:00 UTC

---

## 今日总览
- LLM Agent 工程：新增7篇，聚焦工具集成代理防御、长时程安全、RL工具使用与自涌现架构。
- Agent 测试时扩展与自我改进：新增3篇，涉及SWE代理未知未知、循环Transformer与博弈动态。
- LLM Agent Society：今日暂无新论文。
- 视觉-语言-动作模型：新增10篇，工业装载机、对称性、MoE压缩、工程平台、世界模型与动态操作。
- 具身导航：新增4篇，VLN共形预测、驾驶辅助Agent、手术分割等；近14天1篇。
- LLM 剪枝与推理优化：新增1篇，投机解码；近14天2篇。
- 多模态大模型剪枝：今日暂无新论文。
- 持续学习：新增4篇，类增量、不确定适应、科研代理自改进；近14天3篇。
- 事件相机视觉感知：新增2篇，事件手部网格与超图蒸馏预训练。
- 3D 点云视觉感知：新增3篇，LiDAR SSC、神经符号Caption、视觉体现依赖。
- 3D 点云感知与跟踪：新增2篇，SAVTrack与MAETrack。

## LLM Agent 与多智能体
### LLM Agent 工程
#### [Universal Defenses for Tool-Integrated LLM Agents Against Adversarial Attacks](http://arxiv.org/abs/2609.16098v1)
X. Li, Y. Wang｜09-14｜通用防御工具集成代理对抗攻击；关联：直接覆盖提示注入与工具攻击。
#### [BLINDSPOT: A Benchmark for Safety and Refusal Calibration in Long-Horizon Tool-Using Agents](http://arxiv.org/abs/2609.16305v1)
S. Asif 等｜09-14｜长时程工具代理安全与拒绝校准基准；关联：代理安全评测。
#### [Turn-level Multiscale Density Ratio Estimation for LLM Agents](http://arxiv.org/abs/2609.16760v1)
Z. Zhao 等｜09-15｜回合级多尺度密度比估计用于代理后训练；关联：多步工具任务策略优化。
#### [Spurious Tool Use: When RL Agents Learn the Wrong Reason to Act](http://arxiv.org/abs/2609.16268v1)
Y. Yang 等｜09-14｜揭示RL工具使用策略放大虚假相关；关联：工具调用可靠性。
#### [Self-Emergence Agent Architecture: Behavior-Inertia HMM, Reflexive Metacognition, and Social-Contrastive Self-Modeling](http://arxiv.org/abs/2609.17331v1)
X. Liu｜09-15｜行为惯性HMM与反思元认知；关联：缓解人格漂移。
#### [Interpreting and Steering LLM Agents for Social Simulations](http://arxiv.org/abs/2609.16436v1)
J.G. Fan 等｜09-14｜解释与引导LLM代理社会模拟；关联：可控社会仿真代理。
#### [Agentic Search Spaces for Tabular Machine Learning](http://arxiv.org/abs/2609.16309v1)
R. Sergazinov 等｜09-14｜代理设计表格ML超参搜索空间；关联：LLM代理工程化。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Why LLM Agents Collapse Without Oversight: The Enforcement Gap as the Mechanism Behind Emergence World Failures](http://arxiv.org/abs/2609.15293v1)
Y. Wang｜09-14｜执行缺口致无监督多智能体失败；关联：多智能体治理。
🔁 **【过去14天内已出现】**
#### [ActGuard: Pre-execution Action Auditing Against Indirect Prompt Injection in LLM Agents](http://arxiv.org/abs/2609.14987v1)
B. Wang 等｜09-14｜执行前动作审计防间接提示注入；关联：工具代理安全。

### Agent 测试时扩展与自我改进
#### [Grounding SWE-Agent Decisions in Architecture-0 Design: Navigating Unknown Unknowns through Physical Mapping](http://arxiv.org/abs/2609.17221v1)
Z. Wang, Y. Liu｜09-15｜物理映射导航未知未知的SWE代理设计；关联：测试时决策与自我改进。
#### [Right Direction, Wrong Step: Geometric Analysis of Finite-Step Failure in Looped Transformers](http://arxiv.org/abs/2609.16665v1)
Z. Guo 等｜09-15｜几何分析循环Transformer有限步失败；关联：测试时扩展机制。
#### [Constant Swap Regret in General-Sum Games via Optimistic Transition Matrices](http://arxiv.org/abs/2609.16751v1)
T. Mai｜09-15｜乐观转移矩阵实现常数swap regret；关联：多智能体学习动态。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [When Agents Slow Down: Understanding LLM Agents' Test-Time Strategies via Elo-per-token Analysis](http://arxiv.org/abs/2609.15309v1)
K. Liu 等｜09-14｜Elo-per-token分析代理测试时策略；关联：直接测试时扩展。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Intelligence Under Time Constraints: Rethinking Test-Time Compute](http://arxiv.org/abs/2609.14995v2)
X. Zhang｜09-14｜流式交互中何时开始计算；关联：测试时计算调度。

## 具身智能
### 视觉-语言-动作模型
#### [sensVLA: Spatially-Grounded Vision-Language-Action Model for Autonomous Wheel Loader](http://arxiv.org/abs/2609.17021v1)
G.K. Erabati 等｜09-15｜Qwen3-2B VLM+可训练动作专家用于轮式装载机；关联：工业VLA落地。
#### [SAVLA: Symmetry-Aware Vision-Language-Action Models for Robotic Manipulation](http://arxiv.org/abs/2609.16641v1)
J. Li 等｜09-15｜对称感知VLA提升操作几何泛化；关联：几何先验融入VLA。
#### [Dense to MoE Adaptation for Compact Vision Language Action Policies](http://arxiv.org/abs/2609.16503v1)
M. Niu 等｜09-15｜稠密到MoE适配压缩VLA策略；关联：资源受限部署。
#### [TEMPO: Learning Temporal Context for Dynamic Robot Manipulation](http://arxiv.org/abs/2609.16864v1)
Z. Feng 等｜09-15｜学习时序上下文用于动态操作；关联：解决单帧VLA动态失败。
#### [Intrinsic Robot Rewarding: Reusing VLA Representations for Autonomous Evaluation and Policy Improvement](http://arxiv.org/abs/2609.17115v1)
T. Schaffer 等｜09-15｜复用VLA表征做自主评估与策略改进；关联：VLA自我改进。
#### [FluxVLA Engine: A One-Stop VLA Engineering Platform for Embodied Intelligence](http://arxiv.org/abs/2609.17210v1)
Y. Li 等｜09-15｜一站式VLA工程平台；关联：统一数据/训练/评估栈。
#### [World Models for Embodied Intelligence: From Plausible to Controllable to Actionable](http://arxiv.org/abs/2609.16697v1)
N. Yao 等｜09-15｜从可信到可控可行动世界模型；关联：VLA决策世界模型。
#### [SWIM: Vision-Language-Grounded Soft Whole-Body Interactive Manipulation](http://arxiv.org/abs/2609.17035v1)
T. Liu 等｜09-15｜视觉语言grounding软体全身操作；关联：语言到全身驱动。
#### [The Robot Data Factory](http://arxiv.org/abs/2609.16705v1)
S. Haddadin 等｜09-15｜提出机器人经验是Physical AI核心资源；关联：数据基础设施。
#### [XRoboToolKit-T: Teleoperation with High Stability and Precision with Tactile Sensing for Contact-rich Manipulation](http://arxiv.org/abs/2609.16437v1)
X. Dengxiong 等｜09-14｜触觉遥操作稳定采集接触丰富数据；关联：数据采集。

### 具身导航
#### [ENCP: Episode-Normalized Conformal Prediction for Vision-and-Language Navigation](http://arxiv.org/abs/2609.17499v1)
V. Feliren 等｜09-15｜回合归一化共形预测用于VLN不确定性；关联：安全导航决策。
#### [DriveMCP: An Agentic AI framework for Advanced Driver Assistance System](http://arxiv.org/abs/2609.17247v1)
F. Nadiri 等｜09-15｜模块化可审计驾驶辅助Agent；关联：感知-合规-仲裁导航。
#### [TEDi: Temporal Memory-Enhanced and Denoising Transformer for Surgical Instrument Segmentation](http://arxiv.org/abs/2609.16797v1)
J. Yuan 等｜09-15｜时序记忆去噪Transformer用于手术器械分割；关联：具身导航场景理解。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [HarnessVLN: Unifying Training-Free Embodied Navigation through an Agent Harness](http://arxiv.org/abs/2609.15195v1)
Y. Chen 等｜09-14｜Agent Harness统一免训练具身导航；关联：直接具身导航。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### [ECHO: Early-layer Collaborative Hierarchical Orchestration with Bonus Logits in Speculative Decoding](http://arxiv.org/abs/2609.17241v1)
Z. Ma 等｜09-15｜早层协作分层编排+bonus logits投机解码；关联：提升LLM推理效率。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Don't Send What You Don't Need: Question-Guided Token Pruning as a Privacy Defense for Vision-Language Models](http://arxiv.org/abs/2609.15671v1)
M.K. Syfullah, A.A. Khalil｜09-14｜问题引导token剪枝作为VLM隐私防御；关联：剪枝与推理。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Proportional-Fair Resource Allocation and Dual-Threshold Early-Exit Inference for Secure Cooperative Multi-Layer Edge Intelligence](http://arxiv.org/abs/2609.15847v1)
T.T. Vu 等｜09-14｜边缘双阈值早退推理与资源分配；关联：推理优化。

### 持续学习
#### [Continual Learning for Traversability Prediction with Uncertainty-Aware Adaptation](http://arxiv.org/abs/2609.17141v1)
H. Lee 等｜09-15｜不确定感知适应持续学习地形可通过性；关联：非平稳机器人持续学习。
#### [CLARE: Scalable Class-Incremental Continual Learning via a Sparsity-Based Framework](http://arxiv.org/abs/2609.17026v1)
Y. Fu 等｜09-15｜稀疏框架可扩展类增量持续学习；关联：类增量防遗忘。
#### [ScienceBuddy: Recursive-in-Recursive Self-Improvement for Interactive Scientific Agents](http://arxiv.org/abs/2609.17523v1)
S. Xue 等｜09-15｜递归自改进交互科研代理；关联：持续学习与自我改进。
#### [Implementing a White-Box Undetectable Backdoor for Random Fourier Features](http://arxiv.org/abs/2609.16403v1)
M. Collins 等｜09-14｜RFF白盒不可检测后门；关联：持续学习安全性。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Sylvas: Synergistic Learning Value based Device Scheduling in Federated Continual Learning](http://arxiv.org/abs/2609.15763v1)
Y. Sun 等｜09-14｜联邦持续学习设备调度；关联：FCL。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Pre-PEFT Probing: Weight Statistics and Perturbation Robustness for Layer Selection in VLM Vision Encoders](http://arxiv.org/abs/2609.15229v1)
Q. Xia 等｜09-14｜PEFT层选择探测；关联：持续/参数高效适配。

## 视觉感知
### 事件相机视觉感知
#### [EventEgoHands++: Event-based Egocentric 3D Hand Mesh Reconstruction with Real Dataset](http://arxiv.org/abs/2609.17189v1)
R. Hara 等｜09-15｜事件相机第一视角3D手网格与真实数据集；关联：低光/运动模糊感知。
#### [Hyper-RED: Scalable Event Pre-training via Semantic Hypergraph Distillation](http://arxiv.org/abs/2609.16811v1)
M. Wang 等｜09-15｜语义超图蒸馏事件预训练；关联：事件表示规模化。

### 3D 点云视觉感知
#### [SSC-Priors: Exploring Semantic and Visibility Priors to Boost Lidar Semantic Scene Completion](http://arxiv.org/abs/2609.17413v1)
T. Martyniuk 等｜09-15｜语义与可见性先验提升LiDAR语义场景补全；关联：点云场景理解。
#### [NeuroSymbEAD: A Large Scale Neuro-Symbolic Caption Dataset for Omni-Directional Embodied Autonomous Driving](http://arxiv.org/abs/2609.16919v1)
M.A.U. Khan 等｜09-15｜神经符号Caption数据集含自车知识图；关联：点云/AD多模态标注。
#### [Rethinking Visual Embodiment Dependence in Visuomotor Policies](http://arxiv.org/abs/2609.16815v1)
H. Fang 等｜09-15｜研究视觉体现依赖对视觉运动策略影响；关联：具身策略视觉偏差。

### 3D 点云感知与跟踪
#### [SAVTrack: Selective Vote Aggregation for Reliability-Aware Point Cloud Tracking](http://arxiv.org/abs/2609.16662v1)
S. Zhou 等｜09-15｜选择性投票聚合提升点云跟踪可靠性；关联：解决点云SOT中心投票噪声。
#### [MAETrack: Unleashing the Potential of Pretrained Geometric Priors for 3D Single Object Tracking](http://arxiv.org/abs/2609.16695v1)
S. Zhou 等｜09-15｜释放预训练几何先验用于3D SOT；关联：预训练迁移点云跟踪。

## 跨方向信号
- 3D预训练/几何先验正同时进入点云跟踪、场景补全与自动驾驶数据构建。
- VLA研究转向工程化：数据工厂、工程平台、MoE压缩与表征复用并进。
- Agent安全与可靠性成为主线：工具注入防御、执行前审计、长时程安全校准。
- 持续学习与资源受限推理交叉：FCL调度、PEFT层选择、token剪枝、早退/投机解码。
- 事件相机与多模态数据集规模化：Hyper-RED、EventEgoHands++、NeuroSymbEAD。

## 优先精读
#### [Universal Defenses for Tool-Integrated LLM Agents Against Adversarial Attacks](http://arxiv.org/abs/2609.16098v1)：系统覆盖工具代理对抗攻击，适合部署前安全设计。
2. [MAETrack](http://arxiv.org/abs/2609.16695v1)：预训练几何先验迁移到3D SOT，方法可迁移至点云感知其他任务。
3. [FluxVLA Engine](http://arxiv.org/abs/2609.17210v1)：VLA工程平台，直接影响数据、训练、评估与复现管线。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*