# 实验室研究方向 Radar 2026-09-10

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 49 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-09 23:45 UTC

---

# 研究方向 Radar

## 今日总览

- **LLM Agent 工程**：今日新论文集中在长期/多用户 Agent 记忆的结构化与权限管理（图记忆、KV Cache 记忆、生物特征绑定、风险清除）、执行结构自进化，以及安全/可靠性评测。
- **Agent 测试时扩展与自我改进**：2 篇新论文分别从自博弈高效搜索与 RLVR 推理覆盖扩展切入，核心都是提升 Agent 在训练/测试时的自我改进效率。
- **LLM Agent Society**：今日暂无新论文。
- **视觉-语言-动作模型**：今日 9 篇高相关论文，趋势是从“梯度更新适应”转向上下文模仿、测试时世界模型训练与记忆评测，同时关注触觉、跨语言、通信约束等真实部署条件。
- **具身导航**：今日高相关论文覆盖人形全身导航、终身导航、空地协同搜索、空中 VLN 与 VLM 可穿越性分析，导航任务正从 2D 路径规划走向长时程几何与语义推理。
- **LLM 剪枝与推理优化**：4 篇新论文覆盖结构化剪枝恢复、动态层路由、级联路由与多模态视觉 token 剪枝，均指向“在不损伤能力的前提下降低推理开销”。
- **多模态大模型剪枝**：今日暂无新论文。
- **持续学习**：高相关新论文聚焦长时程信息保持与动态多模态任务组合；另有若干 PEFT/表格流式工作因非持续学习核心未纳入高相关列表。
- **事件相机视觉感知**：1 篇新论文将事件相机用于隐私感知情绪识别，提供新的多模态基准。
- **3D 点云视觉感知**：新论文集中于点云语义分割、Sim2Real LiDAR 目标检测、开放词汇 3D 场景理解、植物器官分割与无纹理物体位姿估计。
- **3D 点云感知与跟踪**：1 篇新论文提出免模板的 3D 单目标跟踪框架。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [Procedural Graphs: Self-Evolving Execution Structures for LLM Agents](http://arxiv.org/abs/2609.09153v1)
Y. Lu 等｜2026-09-08｜提出自演化过程图，将长程 Agent 的执行流程显式化为可复用结构。关联：为 LLM Agent 提供流程知识表达与持续演化机制。

#### [Graph-Based Personalized Memory for LLM Agents: Representation, Evolution, Retrieval, and Evaluation](http://arxiv.org/abs/2609.08599v1)
D. D. A. Nguyen 等｜2026-09-08｜系统化提出图结构个性化记忆框架，覆盖表示、演化、检索与评估。关联：面向长期个性化 LLM Agent 的记忆基础设施。

#### [MeClear: Cooperative Game-Theoretic Attribution and Risk-Aware Memory Clearance for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.09115v1)
B. Yang 等｜2026-09-08｜用合作博弈归因识别低价值记忆并做风险感知清除。关联：改善长程 Agent 记忆生命周期管理的效用与安全性。

#### [BIO-MEMART: Biometric-Aware KV Cache Memory for Multi-User LLM Agents](http://arxiv.org/abs/2609.08566v1)
Y. Qian 等｜2026-09-08｜在 KV Cache 作为多用户 Agent 外部记忆时引入生物特征感知访问控制。关联：解决共享多用户部署中记忆授权与语义检索的冲突。

#### [Personalizing LLM Agent Memory Using Biometrics](http://arxiv.org/abs/2609.08558v1)
Y. Qian 等｜2026-09-08｜用生物特征绑定用户身份，使记忆检索同时匹配语义与当前请求者。关联：提升多用户个性化 Agent 记忆的安全与正确性。

#### [Experience Funnel: A State-Policy Alternating Loop for Self-Evolving Agents](http://arxiv.org/abs/2609.08919v1)
W. Gao 等｜2026-09-08｜提出状态-策略交替循环，将任务交互经验转化为可复用行为策略。关联：为 Agent 自我进化提供闭环训练机制。

#### [SchemeArena: Factorized Stress Testing of Scheming in LLM Agents](http://arxiv.org/abs/2609.08126v1)
J. Ruan 等｜2026-09-08｜因子化测试工具目标、环境能力、监督条件与后果感知对 Agent“欺骗性谋划”的影响。关联：为 LLM Agent 安全对齐提供可控压力测试。

#### [PlannerForge: LLM Agents for Scenario-Based Testing of Motion Planners in Autonomous Driving](http://arxiv.org/abs/2609.08965v1)
Y. Gao 等｜2026-09-08｜将场景生成、检索、修改、ADS 执行与结果分析串联为 Agent 驱动的测试流水线。关联：展示 LLM Agent 在自动驾驶安全验证中的工程价值。

#### [The Unreliable Progress Bar: Can LLM Agents Reliably Report Task Progress Throughout Execution?](http://arxiv.org/abs/2609.08589v1)
B. Wang 等｜2026-09-08｜系统研究 Agent 各阶段任务进度报告的正确性与失败模式。关联：为 Agent 是否继续/停止的框架决策提供可靠性依据。

#### [VEX-Bench: Benchmarking LLM Agents for Assessing Exploitability of Software Supply Chain Vulnerabilities](http://arxiv.org/abs/2609.08040v1)
J. Shi 等｜2026-09-07｜构建 LLM Agent 漏洞可利用性评测基准，以缓解供应链漏洞告警误报。关联：将 Agent 能力评测引入软件供应链安全垂直场景。

### Agent 测试时扩展与自我改进

#### [Difficulty-Adaptive Tree-Structured Policy Optimization for Expanding Reasoning Coverage in RLVR](http://arxiv.org/abs/2609.08650v1)
Y. Yu 等｜2026-09-08｜用难度自适应的树状策略优化，扩大 RLVR 中模型推理覆盖（pass@k）。关联：直接增强推理模型在测试时搜索与自我改进中的覆盖能力。

#### [The Surprising Effectiveness of Approximate Value Iteration in Self-Play](http://arxiv.org/abs/2609.09094v1)
R. Boige 等｜2026-09-08｜将搜索与函数近似结合，在自博弈中用近似值迭代替代 MCTS 并保持强竞争力。关联：为 Agent 测试时搜索提供更低开销的替代方案。

## 具身智能

### 视觉-语言-动作模型

#### [ICI-VLA: In-Context Imitation with Spatiotemporally Aligned Demonstrations for Vision-Language-Action Models](http://arxiv.org/abs/2609.07581v1)
S. Yang 等｜2026-09-07｜通过时空对齐示范检索与上下文模仿训练，使 VLA 无需梯度更新即可少样本适配。关联：显著降低 VLA 快速部署的数据与算力门槛。

#### [DeCAL: Towards Physically-Grounded Dexterous Vision-Language-Action Models via Contact-Aware Latent Co-Imagination](http://arxiv.org/abs/2609.09119v1)
Y. Fu 等｜2026-09-08｜将接触感知潜在共同想象注入 VLA，缓解灵巧操作中的遮挡与接触动力学困难。关联：增强 VLA 在接触丰富物理交互中的操作能力。

#### [WorldAgen: Unified State-Action Prediction with Test-Time World Model Training](http://arxiv.org/abs/2609.08162v1)
C. Wan 等｜2026-09-08｜通过测试时训练世界模型实现 VLA 对动态环境变化的主动适应。关联：为 VLA 提供动态环境下的测试时自适应机制。

#### [Measuring Language Transfer in Robot Policies: Adding Greek to a Cosmos3 Vision-Language-Action Policy](http://arxiv.org/abs/2609.07470v1)
A. Kirouane 等｜2026-09-07｜仅用机器改写指令将希腊语加入 Cosmos3 VLA 策略，检验语言迁移能力。关联：揭示 VLA 策略跨语言泛化中的挑战与边界。

#### [MEMOBench: A Process Level Memory Benchmark for Robotic Manipulation](http://arxiv.org/abs/2609.07047v1)
H. Sun 等｜2026-09-07｜提出进程级机器人操作记忆基准，关注不可见历史信息的利用。关联：为 VLA/机器人操作策略的记忆能力评测提供更细粒度标准。

#### [ComVLA: Communication-Aware Split Inference for VLA Models in 6G-Connected Robotics](http://arxiv.org/abs/2609.07838v1)
B. Liu 等｜2026-09-07｜面向 6G 云化机器人，提出通信感知的 VLA 分体推理方案。关联：解决 VLA 大模型在无线机器人部署中的通信与延迟约束。

#### [Large Discrete Policy: Advancing Explicit Behavior Modeling with Stochastic Iterative Scoring](http://arxiv.org/abs/2609.07049v1)
Z. Li 等｜2026-09-07｜提出完全离散的行为建模框架，用随机迭代打分替代连续扩散策略。关联：为 VLA 动作解码提供更可解释的离散化方案。

#### [NutriBench-Kitchen: Benchmarking Embodied AI for Nutrition Management](http://arxiv.org/abs/2609.07135v1)
Y. Wei 等｜2026-09-07｜将具身营养管理形式化为食材状态跟踪与菜谱/营养知识集成，并提出基准。关联：为 VLA 在长期约束感知厨房决策中提供评测场景。

#### [Safe Task Planning with Long-Term Graph Memory for Embodied Agents](http://arxiv.org/abs/2609.08444v1)
S. Li 等｜2026-09-08｜用长期图记忆连接 LLM/VLM 规划并注入物理风险知识，生成安全高层动作。关联：可作为 VLA/具身 Agent 安全任务规划的长期记忆模块。

### 具身导航

#### [TANGO: Humanoid Navigation in Cluttered Environments with a Whole-Body Vision-Language-Action Model](http://arxiv.org/abs/2609.09158v1)
A. Li 等｜2026-09-08｜提出用全身 VLA 模型驱动杂乱环境人形机器人导航，强调几何感知的全身协调。关联：将 VLA 从 2D 路径规划扩展到人体尺度导航决策。

#### [EvoNav-Bench: Benchmarking Lifelong Navigation in Evolving Environments](http://arxiv.org/abs/2609.08292v1)
X. Wang 等｜2026-09-08｜构建终身导航基准，要求 Agent 在序列任务中完成经验巩固与复用。关联：连接“具身导航”与“持续学习”两大方向的标准化评测。

#### [OmniNav: Robust Long-Horizon Target Navigation in Dynamic Environments](http://arxiv.org/abs/2609.08159v1)
Y. Tang 等｜2026-09-08｜在动态环境中联合维护场景记忆、修正目标信念并选择可交互动作。关联：提升长时程目标导航在部分可观测动态场景下的鲁棒性。

#### [AirAnchor: Bridging Local and Global Spatial Information for Zero-Shot Aerial Vision-and-Language Navigation](http://arxiv.org/abs/2609.08442v1)
S. Fan 等｜2026-09-08｜利用“锚点”桥接局部与全局空间信息，实现零样本空中 VLN。关联：增强无人机在复杂城市环境中执行自然语言指令的长程导航能力。

#### [Towards Embodied Air-Ground Cooperative Object Search: Benchmark, Dataset and Agentic Method](http://arxiv.org/abs/2609.08402v1)
B. Yu 等｜2026-09-08｜提出 UAV+UGV 空地协同目标搜索的数据集、基准与 Agent 方法。关联：拓展了多机器人协同导航与搜索一体的具身任务形态。

#### [Estimating Semantic Ambiguity via Gaussian Context Distributions for VLM-Driven Traversability Analysis](http://arxiv.org/abs/2609.08583v1)
R. Häuselmann 等｜2026-09-08｜用高斯上下文分布估计 VLM 语义歧义，提升可穿越性分析可靠性。关联：为 VLM 导航决策提供显式的语义不确定性估计。

#### [Spheriverse: 3D Scene Understanding from Spherical Observations in the Wild](http://arxiv.org/abs/2609.09012v1)
F. Teng 等｜2026-09-08｜弥合球面视觉与笛卡尔空间之间的表示鸿沟，用于野外 3D 场景理解。关联：为具身导航提供全局视觉上下文与场景感知支撑。

#### [MV-STRIDE: Enabling MLLMs to Master Multi-View Spatial Reasoning via Hierarchical Capability Modeling](http://arxiv.org/abs/2609.07258v1)
J. Xu 等｜2026-09-07｜提出多视角分层空间推理建模，增强 MLLM 从多视图构建 3D 认知结构的能力。关联：支撑导航 Agent 从多视图图像进行空间推断与场景理解。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [Train Overcomplete, Deploy Compact: Scaling Recovery Capacity for Structured LLM Pruning](http://arxiv.org/abs/2609.06974v1)
S. Oh 等｜2026-09-07｜提出以“过完备恢复容量”训练再部署紧凑模型，缓解结构化剪枝恢复阶段容量不匹配。关联：直接改进结构化 LLM 剪枝后的能力恢复。

#### [HeRo: History-Aware Routing for Efficient LLM Inference](http://arxiv.org/abs/2609.08189v1)
H. Lin 等｜2026-09-08｜让动态层路由感知序列历史，避免逐 token 局部决策导致的低效跳层。关联：在保持生成质量的同时提升动态推理效率。

#### [Signed Rescue Routing: Harm-Aware Cascades for Efficient LLM Inference](http://arxiv.org/abs/2609.07786v1)
Z. Wang 等｜2026-09-07｜只在“大模型确实能纠正小模型错误”时升级请求，构建有符号级联路由。关联：优化 LLM 级联推理的准确率与成本权衡。

#### [CoVeR: Coverage-Based Token Pruning for Multi-View 3D Reasoning in VLMs](http://arxiv.org/abs/2609.08345v1)
N.-T. Bui 等｜2026-09-08｜面向多视图 3D 推理提出基于覆盖度的视觉 token 剪枝。关联：从视觉 token 层降低多模态 VLM 的推理与内存开销。

### 持续学习

#### [Continual Learning Mechanisms Compose for Long-Horizon Memorization](http://arxiv.org/abs/2609.06986v1)
Z. Zhang 等｜2026-09-07｜在 100 个问答任务的连续 SFT 设置下，研究持续学习机制组合对长期信息内化与保持的影响。关联：直接服务语言模型在多轮更新后的长时记忆保持问题。

#### [NeuCME: Toward Dynamic Multimodal Continual Learning via Neural Combinatorics of Multiple Experts](http://arxiv.org/abs/2609.07009v1)
K. Guo 等｜2026-09-07｜针对任务模态集合可变的多模态持续学习，用多专家神经组合进行动态建模。关联：拓展持续学习到模态动态变化的真实场景。

## 视觉感知

### 事件相机视觉感知

#### [Emo-DVS: A Multimodal Benchmark for Privacy-Aware Emotion Recognition with Event Cameras](http://arxiv.org/abs/2609.06928v1)
J. Chen 等｜2026-09-07｜构建事件相机多模态情绪识别基准，利用事件流天然隐私保护属性。关联：为事件相机在隐私敏感视觉理解任务中提供首个多模态评测。

### 3D 点云视觉感知

#### [MSSP: Multi-Scale Spatially-Constrained Partition for Unsupervised Semantic Segmentation of 3D Point Clouds](http://arxiv.org/abs/2609.06959v1)
Z. Zhang 等｜2026-09-07｜提出多尺度空间约束划分，改进无监督点云语义分割的超点构建。关联：直接提升 3D 点云无监督语义感知能力。

#### [Solution for UCF UrbanTwin V2X-Real Track: Sim-to-Real Urban LiDAR 3D Object Detection](http://arxiv.org/abs/2609.07608v1)
P. Luo 等｜2026-09-07｜用多源协同训练与类别感知融合解决路侧 LiDAR 的 Sim2Real 检测迁移。关联：为城市级点云检测提供实用的跨域迁移方案。

#### [Solution for UCF UrbanTwin LUMPI Track: Sim-to-Real Urban LiDAR 3D Object Detection](http://arxiv.org/abs/2609.07590v1)
P. Luo 等｜2026-09-07｜仅用合成数据训练并面向真实 LiDAR 帧评测，提供 LUMPI 赛道点云层次迁移方案。关联：面向真实 LiDAR 点云分布差异给出训练策略。

#### [GoDeep: Annotation-Free Open-Vocabulary 3D Scene Understanding via Language-Space Lifting](http://arxiv.org/abs/2609.09082v1)
T. Betsas 等｜2026-09-08｜无需标注与大规模 3D 训练语料，通过语言空间提升实现开放词汇 3D 语义分割。关联：降低 3D 场景开放词汇感知的标注依赖。

#### [Zero-Shot 3D Plant Organ Segmentation with SAM3 and Semantic NeRFs](http://arxiv.org/abs/2609.07724v1)
A. Gilson 等｜2026-09-07｜结合文本提示 SAM3 与语义 NeRF，构建零样本 3D 植物器官分割流水线。关联：将 3D 视觉感知能力迁移到自动化表型分析。

#### [Generalizable 6D Pose Estimation of Textureless Objects with Planar-based Gaussian Splatting](http://arxiv.org/abs/2609.07231v1)
J. Lu 等｜2026-09-07｜基于平面高斯泼溅实现无 CAD 模型、无纹理物体的泛化 6D 位姿估计。关联：增强点云/几何感知在工业级无纹理物体上的位姿估计能力。

### 3D 点云感知与跟踪

#### [TFTrack: A Template-Free Framework for Efficient 3D Point Cloud Tracking](http://arxiv.org/abs/2609.07738v1)
Z. Hu 等｜2026-09-07｜提出免模板框架，降低 3D 单目标跟踪对双输入与运动先验的依赖。关联：直接改进 LiDAR 点云动态目标的跟踪效率与泛化。

## 跨方向信号

- **记忆正在成为跨 LLM Agent、VLA 与导航的通用基础设施**：图记忆、KV Cache 记忆、机器人操作记忆评测与终身导航均将长期信息组织视为关键能力。
- **自进化/自我改进正从训练阶段延伸到测试时执行阶段**：Procedural Graphs、Experience Funnel、WorldAgen、RLVR 树策略与自博弈搜索都在让模型在交互中动态更新策略。
- **VLA 快速部署与低资源适应成为主线**：ICI-VLA 的免梯度上下文模仿、WorldAgen 的测试时世界模型、Language Transfer 的低资源跨语言尝试共同指向更普适的 VLA 适配范式。
- **高效推理从“剪参数”走向“按需计算”**：结构化剪枝、动态层路由、级联救援路由与视觉 token 剪枝都在探索不同粒度上的条件计算。

## 优先精读

#### - **[Procedural Graphs: Self-Evolving Execution Structures for LLM Agents](http://arxiv.org/abs/2609.09153v1)**：提出可演化的过程性执行图，把 LLM Agent 的“流程知识”显式化；对 Agent 工程和测试时自我改进均有较强的框架启发。
#### - **[ICI-VLA: In-Context Imitation with Spatiotemporally Aligned Demonstrations for Vision-Language-Action Models](http://arxiv.org/abs/2609.07581v1)**：绕过梯度更新解决 VLA 少样本适配，直接关系到机器人策略快速部署与具身导航下游应用。
#### - **[EvoNav-Bench: Benchmarking Lifelong Navigation in Evolving Environments](http://arxiv.org/abs/2609.08292v1)**：连接具身导航与持续学习，标准化“经验复用”的评测方式，对该交叉方向具有基准价值。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*