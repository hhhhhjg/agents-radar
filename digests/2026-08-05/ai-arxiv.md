# 实验室研究方向 Radar 2026-08-05

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 44 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-08-04 22:57 UTC

---

## 今日总览

- **LLM Agent 工程**：今日 10 篇新论文，集中在记忆仲裁、harness 自动演化、失败实时检测与技能组合等工程能力增强，Agent 工程正从“设计提示”走向“闭环自改进”。
- **Agent 测试时扩展与自我改进**：今日 6 篇，测试时潜在推理优化与自博弈数据生成并进，并出现一项关于对抗自博弈的受控负面结果。
- **LLM Agent Society**：今日暂无新论文。
- **视觉-语言-动作模型**：今日 9 篇高相关论文，主攻长程操作、指令泛化、位置盲区与接触丰富任务失败分析，VLA 正从“单步策略”迈向“结构化长程策略”。
- **具身导航**：今日 4 篇，覆盖空中 VLN、内镜导航与手术场景 MLLM，导航感知朝着目标导向与空间可追溯方向演进。
- **LLM 剪枝与推理优化**：今日 1 篇，聚焦具身 Agent 重规划延迟的预算化分配，开启 Agent 级推理成本控制。
- **多模态大模型剪枝**：今日 2 篇，视觉 token 剪枝向证据感知动态预算与可微信息节流演进。
- **持续学习**：今日 10 篇，从医学影像域增量、AIGC 检测到 PEFT 安全与联邦微调，持续学习与参数高效微调深度交叉。
- **事件相机视觉感知**：今日 1 篇，提出体素引导的全局事件排序归因方法。
- **3D 点云视觉感知**：今日匹配 1 篇但相关性弱（PromptPath 为上下文学习工作），暂不列入高相关情报。
- **3D 点云感知与跟踪**：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

#### [MemArbiter: Decision-Time Memory Arbitration for Long-Horizon LLM Agents](http://arxiv.org/abs/2608.02113v1)
J. Dong et al. | 2026-08-03 | 提出决策时记忆仲裁机制，按当前决策需求对跨步信息进行结构化筛选与排序。 | 直接强化长程 Agent 的“记忆-决策”工程链路。

#### [Harness-R1: Learning to Edit Executable Runtime Harnesses from Agent Failure Trajectories](http://arxiv.org/abs/2608.02276v1)
S. Shao et al. | 2026-08-03 | 从失败轨迹学习编辑运行时 harness，使上下文构建、工具中介与动作验证随部署数据持续改进。 | 代表 Agent harness 闭环自改进的新范式。

#### [HarnessCompass: Guiding Automatic Harness Evolution toward Generalizable and Effective Agent Harnesses](http://arxiv.org/abs/2608.01918v1)
L. Zhang et al. | 2026-08-03 | 提出自动 harness 演化的导航方法，在可泛化性约束下迭代改进 harness。 | 为 Agent harness 自动化设计提供系统性方法论。

#### [SkillTrace: Traversing a Query-Skill Graph for Composable LLM Agents](http://arxiv.org/abs/2608.02356v1)
Y. Yao et al. | 2026-08-03 | 通过查询-技能图遍历识别完整且可执行的技能组合。 | 解决 Agent 技能组合的可组合性与完备性问题。

#### [FRAMES: Guarded and Dual-Objective Skill Evolution for Agents in Policy-Governed Enterprise Workflows](http://arxiv.org/abs/2608.01772v1)
X. Wang et al. | 2026-08-03 | 在策略约束的企业工作流中实现受保护的双目标技能演化。 | 面向企业级 Agent 的技能改进与合规性平衡。

#### [Real-Time Detection and Repair of LLM Agent Failures](http://arxiv.org/abs/2608.02464v1)
S. Dubey | 2026-08-03 | 仅依赖步骤遥测实现低成本的 Agent 失败实时检测与修复。 | 提升 Agent 运行鲁棒性的轻量级工程方案。

#### [From Profiling to Synthesis: Benchmarking Implicit Behavioral Alignment in Personalized LLM Agents](http://arxiv.org/abs/2608.02171v1)
J. Song et al. | 2026-08-03 | 提出隐式行为对齐基准，考察个性化 Agent 的动态行为一致性。 | 为个性化 Agent 评测提供新范式。

#### [ParEvalLayer: When Partial LLM-Agent Evaluations Support a Decision](http://arxiv.org/abs/2608.02444v1)
W. Huang, B. Shen | 2026-08-03 | 建模部分评测结果与完整评测结论的一致性条件。 | 为 Agent 早停评测与低成本评估提供判断依据。

#### [Beyond Solution-Centric Search: Adaptive Inquiry and Knowledge Revision for Autonomous ML Engineering](http://arxiv.org/abs/2608.02143v1)
S. Fu et al. | 2026-08-03 | 自适应查询与知识修订驱动长周期自主 ML 工程。 | 拓展 Agent 在科研决策场景下的自主搜索能力。

#### [Cooperative Coevolution for Resource-Constrained Agentic LLM Post-Training](http://arxiv.org/abs/2608.02391v1)
Z. Wang et al. | 2026-08-03 | 用合作协同进化实现免反向传播的内存高效 Agent 后训练。 | 为资源受限环境下的 Agent 训练提供新路线。

## LLM Agent 与多智能体

#### [GradCuit: Credit-Assigned Gradient Flow Enables Robust and Interpretable Test-Time Latent Reasoning](http://arxiv.org/abs/2608.02585v1)
Z. Yu et al. | 2026-08-03 | 通过信用分配梯度流优化测试时离散潜在状态，兼顾稳健性与可解释性。 | 代表测试时扩展的新技术路径。

#### [It's the Decoding Format, Not the Perturbation: Auditing Consistency-Based Selection for Vision-Language Test-Time Scaling](http://arxiv.org/abs/2608.01207v1)
P. Zheng, H. Kurban | 2026-08-02 | 揭示 VLM 测试时扩展中解码格式而非输入扰动决定选择方法的有效性。 | 修正 VLM 测试时扩展的设计重点。

#### [CoEvoKG: Co-Evolving Knowledge Graphs with Self-Evolving Search Agents](http://arxiv.org/abs/2608.01904v1)
Z. Li et al. | 2026-08-03 | 将知识图谱作为可验证任务源与搜索经验沉淀库，与自进化 Agent 协同演化。 | 为自我改进 Agent 提供结构化知识反馈。

#### [SearchMaster: Grounded and Regulated Self-Play for Search Agents](http://arxiv.org/abs/2608.01822v1)
W. Tan et al. | 2026-08-03 | 通过受控自博弈生成高质量多跳搜索轨迹，训练搜索 Agent。 | 自博弈数据生成提升搜索 Agent 训练效率。

#### [Does the Competitive Component of Adversarial Self-Play Improve Legal Reasoning? A Controlled Negative Result](http://arxiv.org/abs/2608.01559v1)
M.S. Kim | 2026-08-03 | 对照实验发现对抗自博弈中的竞争组件并未提升法律推理性能。 | 为自博弈方法提供关键受控负面证据。

#### [Language Equality has a Price: A Systematic Investigation of Multi-turn LLM Performance for EU-24+](http://arxiv.org/abs/2608.01395v1)
S. Hakimov et al. | 2026-08-02 | 在 30 种语言的自我对弈对话游戏中评估多轮 LLM 表现。 | 多语言自我对弈作为测试时扩展的系统评测场景。

## 具身智能

#### [ChainVLA: Chaining Vision-Language-Action Queries through a Unified Execution State for Long-Horizon Manipulation](http://arxiv.org/abs/2608.02326v1)
Y. Huang et al. | 2026-08-03 | 用统一执行状态链接 VLA 查询，使长程操作保持执行记忆连续性。 | 解决长程操作中动作块重规划的时序断裂问题。

#### [Grounded Semantic Re-Binding for Robust Instruction Generalization in Vision-Language-Action Models](http://arxiv.org/abs/2608.02497v1)
Z. Yin, Z. Zhang | 2026-08-03 | 通过语义重绑定修复 VLA 对指令改写敏感的架构性缺陷。 | 提升 VLA 指令泛化的轻量级方法。

#### [Look Where It Matters: Adaptive Visual Refinement for Vision-Language-Action Models](http://arxiv.org/abs/2608.02197v1)
J. Cui et al. | 2026-08-03 | 自适应视觉细化修正 VLA 视觉编码器的注意力伪影。 | 改善 VLA 对空间精确操作所需的视觉表征可靠性。

#### [Hermite Curves as Trajectory Priors for Vision-Language-Action Models](http://arxiv.org/abs/2608.01265v1)
Q. Lv et al. | 2026-08-02 | 以 Hermite 曲线作为动作块轨迹先验，减少锯齿运动与边界不连续。 | 改进 VLA 动作解码的结构化程度。

#### [Multi-View Unified Camera Fields: Geometry-Shaped Action-Facing Representations for RGB-Only Multi-Camera VLA Policies](http://arxiv.org/abs/2608.01826v1)
J. Yang et al. | 2026-08-03 | 构造几何形状的相机场统一表示，融合多视角 RGB 观测。 | 增强多相机 VLA 对遮挡接触任务的感知。

#### [DreamTrajectory: Trajectory-Guided Action Generation with World Model Alignment for Mobile Manipulation](http://arxiv.org/abs/2608.01381v1)
Z. Yang et al. | 2026-08-02 | 轨迹引导动作生成并与世界模型对齐，适配移动操作的大动作空间。 | 将世界模型先验引入 VLA 策略。

#### [Uncovering and Mitigating Positional Blind Spots in Vision-Language-Action Models](http://arxiv.org/abs/2608.01573v1)
D. An et al. | 2026-08-03 | 揭示 VLA 在工作空间不同位置上的性能非均匀性并提出缓解策略。 | 为 VLA 评测增加空间均匀性维度。

#### [Demystifying When and Why VLAs Fail in Contact-Rich Tasks and How to Fix Them](http://arxiv.org/abs/2608.01402v1)
C. Parés-Morlans et al. | 2026-08-02 | 系统分析 VLA 在接触丰富任务中的失败模式与修复方法。 | 为 VLA 接触推理提供归因与改进依据。

#### [Weights or Skills? A Survey of Robot-Learning Techniques: from Action-Predicting Weights to Robots that Write their Own Skills](http://arxiv.org/abs/2608.01851v1)
G. Jena et al. | 2026-08-03 | 综述 VLA 权重路线与自主技能编写路线的分野与融合趋势。 | 为 VLA 研究方向提供宏观坐标系。

## 具身智能

#### [FreqNav: Stage-Wise Frequency Routing for Object-Oriented Aerial Vision-Language Navigation](http://arxiv.org/abs/2608.00970v1)
Y. Tang et al. | 2026-08-02 | 分阶段频率路由机制适配空中 VLN 中动态变化的感知优先级。 | 面向目标导向的空中视觉语言导航。

#### [EndoWAM: A Grounded World-Action Model for Generalizable Endoscopic Navigation](http://arxiv.org/abs/2608.01221v1)
J. Lin et al. | 2026-08-02 | 将世界模型与动作策略结合，提升内镜导航在组织变形下的泛化性。 | 为体内具身导航提供世界模型基础。

#### [Slot2Text: Object-Centric Visual Tokenization for Efficient and Spatially Traceable Surgical MLLMs](http://arxiv.org/abs/2608.01473v1)
G. Liao et al. | 2026-08-02 | 以目标中心 token 化替代密集视觉 token，提升手术 MLLM 效率与空间可追溯性。 | 为手术/内镜场景导航理解提供稀疏化视觉方案。

#### [Linear Multi-Timescale Retention as a Memory-Efficient Vision-Language Bridge](http://arxiv.org/abs/2608.01614v1)
A. Yeafi et al. | 2026-08-03 | 用线性多尺度保留机制替代 Softmax 注意力，降低高分辨率视觉输入的显存占用。 | 为视觉导航模型提供高效的视觉-语言桥接。

## 模型压缩与持续学习

#### [When Replanning Becomes the Bottleneck: Budgeted Replanning for Embodied Agents](http://arxiv.org/abs/2608.01428v1)
S. Liu et al. | 2026-08-02 | 提出预算化重规划机制，限制具身 Agent 累积上下文的 LLM 重规划延迟。 | 将推理优化从模型层扩展到 Agent 重规划层。

## 模型压缩与持续学习

#### [ET-Prune: Evidence-Aware Dynamic Budgeting for Visual Token Pruning in Text-Rich MLLMs](http://arxiv.org/abs/2608.01979v1)
Z. Ding et al. | 2026-08-03 | 根据文本丰富输入中的关键证据动态分配视觉 token 剪枝预算。 | 面向 MLLM 的视觉 token 动态剪枝。

#### [DiffPrune: differentiable information throttling for token pruning in vision-language models](http://arxiv.org/abs/2608.01985v1)
L. He et al. | 2026-08-03 | 以可微信息节流替代 Gumbel-Softmax 实现视觉 token 剪枝。 | 提供更稳定的 VLM token 剪枝训练方式。

## 模型压缩与持续学习

#### [UCBound-Net: Uncertainty-Guided Boundary-Aware Continual Learning for Domain-Incremental Ultrasound Segmentation](http://arxiv.org/abs/2608.01518v1)
M.A. Rahman | 2026-08-02 | 不确定性引导的边界感知持续学习，缓解超声分割的域增量灾难性遗忘。 | 直接面向域增量医学影像持续学习。

#### [SphereVideo: Prototype-anchored Hyperspherical Boundary for Continual AI-generated Video Detection](http://arxiv.org/abs/2608.01334v1)
F. Li et al. | 2026-08-02 | 用原型锚定超球边界实现持续 AIGC 视频检测器的更新。 | 持续学习应对生成模型不断演进的新场景。

#### [Plasticity of Growing and Elastic Neural Networks in Online Continual Learning](http://arxiv.org/abs/2608.01475v1)
J.M. Kong, R.S. Sutton | 2026-08-02 | 分析生长与弹性网络结构在在线持续学习中的塑性表现。 | 为在线持续学习的网络结构设计提供理论视角。

#### [Two-Stage Bengali Sentiment Classification: Domain Adaptation Through Continual Learning and Parameter-Efficient Fine-Tuning](http://arxiv.org/abs/2608.01471v1)
M.S. Rahman et al. | 2026-08-02 | 两阶段框架结合持续预训练与 PEFT 实现孟加拉语领域适配。 | 持续学习与 PEFT 结合用于低资源语言领域迁移。

#### [Learning What to Remember: Test-Time Training via Context Distillation](http://arxiv.org/abs/2608.01672v1)
Z. Wang et al. | 2026-08-03 | 通过上下文蒸馏在测试时学习哪些信息应被保留。 | 测试时训练与记忆选择结合的新范式。

#### [SPECTRA: Band-Routed Embedding and Stage-Wise LoRA for Cross-Sensor Fine-Tuning of Geospatial Foundation Models](http://arxiv.org/abs/2608.01751v1)
X. Li et al. | 2026-08-03 | 波段路由嵌入与分阶段 LoRA 实现跨传感器地理空间模型微调。 | 跨域适应中的参数高效持续学习方案。

#### [FedChronos: Federated Fine-Tuning of Time-Series Foundation Models for Privacy-Preserving Commodity Price Forecasting](http://arxiv.org/abs/2608.01290v1)
A. Sharma et al. | 2026-08-02 | 联邦微调时间序列基础模型，适配数据不可集中的机构场景。 | 联邦学习与持续适应结合的时序预测。

#### [EulerLoRA: Rank-Driven Jump Dynamics for Calibrated Parameter-Efficient Fine-Tuning](http://arxiv.org/abs/2608.01142v1)
S. Anumasa, D. Liu | 2026-08-02 | 随机扩展 LoRA 生成多预测轨迹，支持不确定性估计。 | 为 PEFT/持续学习提供校准的不确定性信号。

#### [Z-PEFT: Zero-shot Backdoor Detection in Parameter-Efficient Fine-Tuning via Canonical Spectral Signatures](http://arxiv.org/abs/2608.02271v1)
N. Pitzalis et al. | 2026-08-03 | 用规范谱特征实现 PEFT 模型零样本后门检测。 | 保障持续学习等下游任务中 PEFT 模型安全性。

#### [MineGrad: Gradient Inversion Attacks on LoRA Fine-Tuning](http://arxiv.org/abs/2608.01521v1)
H.U. Sami et al. | 2026-08-02 | 针对联邦 LoRA 微调提出梯度反演攻击方法。 | 暴露 PEFT 联邦场景中的隐私风险。

## 视觉感知

#### [VGER: Voxel-Guided Global Event Ranking for Event Cloud Attribution](http://arxiv.org/abs/2608.01470v1)
Y. Jiang et al. | 2026-08-02 | 体素引导的全局事件排序，实现事件云归因与关键事件识别。 | 为事件相机感知提供可解释归因新方法。

## 跨方向信号

- **PEFT/LoRA 成为跨方向基础设施**：从持续学习、联邦微调到后门检测与梯度反演攻击，低秩适配全面渗透模型适应与安全研究。
- **推理成本从“静态剪枝”走向“动态预算”**：ET-Prune、DiffPrune、When Replanning 按需分配计算，影响多模态模型与具身 Agent 的部署效率。
- **自博弈与自进化从训练信号走向系统闭环**：SearchMaster、CoEvoKG、Harness-R1、FRAMES 共同体现“从交互轨迹中提取改进信号”的范式。
- **测试时优化从 LLM 扩展到多模态与具身策略**：GradCuit、Learning What to Remember、DreamTrajectory 在测试时优化与世界模型对齐方向形成汇聚。

## 优先精读

- **ChainVLA**：以统一执行状态解决长程操作中动作块重规划的时序断裂，对 VLA 架构从“单步执行”向“连贯长程”演进具有直接启示。
- **Harness-R1**：首次系统地从失败轨迹学习编辑运行时 harness，是 Agent 工程自动化方向的代表性工作，建议与 HarnessCompass 对照阅读。
- **GradCuit**：将信用分配梯度引入测试时潜在推理，在稳健性和可解释性上同时取得进展，代表测试时扩展的全新技术路线。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*