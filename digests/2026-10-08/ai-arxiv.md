# 实验室研究方向 Radar 2026-10-08

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 44 篇新文献 + 11 篇过去14天内已出现 | 生成时间：2026-10-08 01:29 UTC

---

## 今日总览
- **LLM Agent 工程**：10篇新。焦点在不确定度纠偏、长期思考策略、任务结果顾问、技能生命周期、运行时自控、过程评测与可审计。
- **Agent 测试时扩展与自我改进**：2篇新、3篇重复。个性化TTS策略发现、双工模型自博弈轮转；重复关注共形自验证、服务经验自改进、纳什解码。
- **LLM Agent Society**：1篇新。风险厌恶多群体平均场博弈。
- **视觉-语言-动作模型**：10篇新。感知-动作桥接、推理加速认证、预测隐变量、状态幻觉、后门检测、节奏控制、视觉衰减、动作分词等。
- **具身导航**：7篇新、4篇重复（池）。高风险认证重规划、标志导航数据集、物体归属、主动开放词汇建图、UAV世界模型搜索；重复含路线记忆、仿真到现实。
- **LLM 剪枝与推理优化**：3篇新、1篇重复（池）。token-pruning安全、双重要性剪枝、VLA加速认证；重复弹性视觉表示。
- **多模态大模型剪枝**：2篇新、2篇重复（池）。动作一致视觉token剪枝、自适应多模态推理、任务感知剪枝。
- **持续学习**：9篇新、2篇重复。PEFT差异、正交LoRA、测试时适应、边缘LoRA、演化批判、遗忘诊断、表示秩监测。
- **事件相机视觉感知**：2篇新。BNN事件处理、事件光度立体。
- **3D 点云视觉感知**：1篇新、1篇重复。稀疏协同3D检测、开放词汇场景图。
- **3D 点云感知与跟踪**：今日暂无新论文。

## LLM Agent 与多智能体
### LLM Agent 工程
#### [From Uncertainty to Action: Learning to Steer LLM Agents](http://arxiv.org/abs/2610.09115v1)
Li 等，2026-10-06。核心：研究不确定度如何指导纠错时机与机制。关联：Agent 轨迹纠偏工程。
#### [Learning Situation-Conditioned Thinking Policies for Long-Term LLM Agents](http://arxiv.org/abs/2610.09590v1)
Su，2026-10-07。核心：学习情境条件化思考策略，避免历史记忆无限增长。关联：长期Agent记忆与推理策略。
#### [Training Advisors for LLM Agents from Task Outcomes](http://arxiv.org/abs/2610.09858v1)
Polezhaev 等，2026-10-07。核心：从任务结果训练顾问，在执行中提供自然语言反馈。关联：Agent执行期改进。
#### [SkillForge: Co-Evolving Skills and Agents via Dynamic Skill Lifecycles](http://arxiv.org/abs/2610.09832v1)
Ge 等，2026-10-07。核心：动态技能生命周期共演化并淘汰过时技能。关联：记忆增强Agent技能管理。
#### [AgentTime: Can Agents Estimate and Control Their Own Runtime?](http://arxiv.org/abs/2610.09944v1)
Ofengenden 等，2026-10-07。核心：评估Agent估计与控制墙钟运行时的能力。关联：Agent运行时控制。
#### [LiveMACE: Process-Aware Evaluation of LLM Agent Capabilities in Evolving Markets](http://arxiv.org/abs/2610.09872v1)
Zhao 等，2026-10-07。核心：过程感知基准评估演化市场中的Agent能力。关联：动态环境Agent评测。
#### [GeoNatureAgent (GNA): A Framework and Benchmark for Pre-Production Evaluation of Tool-Using Agents on Geospatial and Environmental Tasks](http://arxiv.org/abs/2610.09112v1)
Diaz-Ireland 等，2026-10-06。核心：地理环境工具Agent预生产评估框架。关联：工具使用Agent可靠性。
#### [Correct Answers, Unsupported Findings: Evidence Binding in Forensic Reconstruction of LLM Agent Logs](http://arxiv.org/abs/2610.09581v1)
Yun 等，2026-10-07。核心：Agent日志取证重建中的证据绑定。关联：Agent可审计与证据链。
#### [Decoupling Logic from Persona: Structural Immunity of Edge LLM Agents to Context Pollution](http://arxiv.org/abs/2610.09772v1)
Nakatsu 等，2026-10-07。核心：边缘小模型Agent逻辑与人格解耦以抗上下文污染。关联：边缘Agent鲁棒性。
#### [DUDA-Bench: Benchmarking LLM Agents on Multimodal Data-Driven Urban Diagnosis](http://arxiv.org/abs/2610.09374v1)
Song 等，2026-10-07。核心：多模态城市诊断Agent基准。关联：多模态工具Agent评测。

### Agent 测试时扩展与自我改进
#### [From Pareto to Preference: Personalized Test-Time Scaling via Amortized Agentic Policy Discovery](http://arxiv.org/abs/2610.09684v1)
Wang 等，2026-10-07。核心：通过摊销策略发现实现个性化TTS。关联：TTS效率与偏好平衡。
#### [Coupled but Late: Turn-Taking Between Full-Duplex Speech Models in Unscripted Dialogue](http://arxiv.org/abs/2610.08683v1)
Zhu 等，2026-10-06。核心：分析双工语音模型互相对话的轮转闭环。关联：模型间自博弈协调。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [CLIFT: Conformal Self-Verification for Web Agent Training and Test-Time Scaling](http://arxiv.org/abs/2610.06829v1)
Zhang 等，2026-10-05。核心：共形自验证提供中间监督。关联：测试时自验证与扩展。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [ServeLearnBench: How Well Can Agents Self-Improve from Serving Experience?](http://arxiv.org/abs/2610.07792v1)
Zheng 等，2026-10-06。核心：评估Agent从服务经验自改进。关联：自我改进基准。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Nash Equilibrium Text: A Game-Theoretic Decoding Framework for Text Generation](http://arxiv.org/abs/2610.05817v1)
Jafari 等，2026-10-05。核心：将文本修订建模为纳什均衡解码。关联：测试时迭代修订。

### LLM Agent Society
#### [Beyond Nominal Equilibria: Risk-Averse Multi-Population Mean-Field Games](http://arxiv.org/abs/2610.09244v1)
Jeloka 等，2026-10-07。核心：风险厌恶多群体平均场博弈处理行为不确定性。关联：异构多智能体社会均衡建模。

## 具身智能
### 视觉-语言-动作模型
#### [PAIR: Bridging Perception and Action in Vision-Language-Action Models](http://arxiv.org/abs/2610.09016v1)
Feng 等，2026-10-06。核心：桥接VLA感知表示与动作生成表示。关联：VLA表示瓶颈。
#### [CARE: Certifying Acceleration for Vision-Language-Action Inference](http://arxiv.org/abs/2610.08917v1)
Liu 等，2026-10-06。核心：为VLA推理加速提供认证，覆盖action chunking与视觉token剪枝。关联：VLA高效安全部署。
#### [Juno: Taming Predictive Latents for Vision-Language-Action Models](http://arxiv.org/abs/2610.09940v1)
Zhu 等，2026-10-07。核心：将JEPA预测隐变量用于VLA预训练与策略学习。关联：VLA表示学习。
#### [DIVA: Dual-Space Intent-Aware Visual Attenuation for Vision-Language-Action Policies](http://arxiv.org/abs/2610.09144v1)
Feng 等，2026-10-06。核心：双空间意图感知视觉衰减调节视觉token影响。关联：VLA视觉token调控。
#### [TempoBridge: Language-Guided Tempo Control for Vision-Language-Action Policies](http://arxiv.org/abs/2610.09451v1)
Lee 等，2026-10-07。核心：用冻结VLA表示进行语言引导节奏控制。关联：VLA可控执行速度。
#### [YUBI-STAG: Contact and Semantic-Rich Alignment for VLAs via Automated Video-Language Grounding](http://arxiv.org/abs/2610.09718v1)
Tateno 等，2026-10-07。核心：自动视频-语言grounding实现接触与语义对齐。关联：VLA指令-交互对齐。
#### [RoboPace: Contact-Aware Time-Optimal Retiming for Action-Chunk Policies](http://arxiv.org/abs/2610.09696v1)
Shirasaka 等，2026-10-07。核心：接触感知时间最优重定时action-chunk策略。关联：VLA动作块时序。
#### [Beyond Reconstruction: What Matters in Action Tokenization for Robot Policies?](http://arxiv.org/abs/2610.09170v1)
Chen 等，2026-10-06。核心：审视动作tokenization中重建目标之外的关键因素。关联：VLA动作分词。
#### [Sparse Feature Policy Unlearning Mitigates State Hallucination in Vision-Language-Action Models](http://arxiv.org/abs/2610.09496v1)
Lee 等，2026-10-07。核心：稀疏特征策略遗忘缓解状态幻觉。关联：VLA可靠性。
#### [TMT: Runtime Backdoor Detection for Vision-Language-Action Policies on Unseen Tasks](http://arxiv.org/abs/2610.09462v1)
Zhou 等，2026-10-07。核心：未见任务上VLA策略运行时后门检测。关联：VLA安全。

### 具身导航
#### [Adaptive Risk-Certified Event-Triggered Replanning for Dynamic Navigation](http://arxiv.org/abs/2610.09302v1)
Suganda 等，2026-10-07。核心：风险认证事件触发重规划。关联：动态导航安全。
#### [SiGNgapore - An Interactive Dataset for Sign-based Visual Navigation](http://arxiv.org/abs/2610.09488v1)
Zimmerman 等，2026-10-07。核心：基于标志的视觉导航交互数据集。关联：无地图导航利用人类标志。
#### [COOL: Curiosity-Driven Object Ownership Learning for Personalized Robotic Assistance](http://arxiv.org/abs/2610.09358v1)
Huber 等，2026-10-07。核心：好奇心驱动物体归属学习。关联：个性化语言指令搜索。
#### [ActiveLang: Active Open-Vocabulary 3D Mapping with Semantic-Uncertainty-Guided Exploration](http://arxiv.org/abs/2610.09518v1)
Chen 等，2026-10-07。核心：语义不确定度引导主动开放词汇3D建图。关联：未知环境导航建图。
#### [SearchWorld: Spatial Value-Grounded Imagination for UAV Object Search via World Models](http://arxiv.org/abs/2610.09335v1)
Ji 等，2026-10-07。核心：世界模型空间价值grounding用于UAV物体搜索。关联：部分可观测具身搜索。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [MarvisNav: Making Memory Visible on Route Choices for Zero-Shot Object Navigation](http://arxiv.org/abs/2610.06510v1)
Wang 等，2026-10-05。核心：让记忆可见以影响路线选择。关联：零样本物体导航。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Sim-to-Real Transfer of Vision-Language Navigation in Continuous Environments Using an Ackermann-Steered Mobile Robot](http://arxiv.org/abs/2610.07192v1)
Abeywansa 等，2026-10-05。核心：Ackermann机器人连续环境VLN仿真到现实迁移。关联：VLN实机部署。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### [Understanding and Mitigating Token-Pruning-Induced Vulnerabilities in VLMs](http://arxiv.org/abs/2610.09703v1)
Wang 等，2026-10-07。核心：评估并缓解token pruning对VLM安全性的影响。关联：剪枝安全与推理优化。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [VisionWeave: Weaving Elastic Visual Representations as a Native Capability of MLLMs](http://arxiv.org/abs/2610.07987v1)
Feng 等，2026-10-06。核心：弹性视觉表示减少稠密patch token成本。关联：MLLM推理优化。

### 多模态大模型剪枝
#### [DIPrune: Task-Aware Token Pruning with Dual Importance for Efficient Multimodal Language Models](http://arxiv.org/abs/2610.08341v1)
Yang 等，2026-10-06。核心：双重要性任务感知token剪枝。关联：多模态大模型剪枝。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [VLA-ACL: Action-Consistent Visual Token Pruning for Efficient Vision-Language-Action Models](http://arxiv.org/abs/2610.08133v1)
Du 等，2026-10-06。核心：动作一致视觉token剪枝加速VLA。关联：多模态/VLA token剪枝。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Efficient Multimodal Inference through Adaptive Acquisition and Sequential Fusion](http://arxiv.org/abs/2610.07466v1)
Mohapatra 等，2026-10-05。核心：自适应获取与顺序融合降低多模态编码成本。关联：多模态推理剪枝与早停。

### 持续学习
#### [Are Parameter-Efficient Fine-tuning Methods Really Different?](http://arxiv.org/abs/2610.09122v1)
Li 等，2026-10-06。核心：比较六种PEFT对任务、遗忘和预训练权重变化。关联：PEFT持续学习。
#### [CoDe-LoRA: Mitigating the Orthogonality Dilemma in Continual Learning of LLMs via Knowledge Consolidation and Decoupling](http://arxiv.org/abs/2610.08312v1)
Liu 等，2026-10-06。核心：知识巩固与解耦缓解正交LoRA困境。关联：LLM持续学习。
#### [CIRSeg: Coarse-to-Fine Intensity-Robust Liver Segmentation with Source-Free Continual Test-Time Adaptation](http://arxiv.org/abs/2610.09784v1)
Xu 等，2026-10-07。核心：源自由持续测试时适应用于医学分割。关联：持续TTA。
#### [MemFLoRA: Memory-Floor LoRA for CNN Adaptation at the Edge](http://arxiv.org/abs/2610.08669v1)
Akbulut 等，2026-10-06。核心：内存下限LoRA用于边缘CNN适配。关联：边缘持续学习。
#### [Verify Less, Evolve More: Training Idea-Level Critics for Verification-Efficient ML Evolving Agents](http://arxiv.org/abs/2610.08993v1)
Bai 等，2026-10-06。核心：训练idea级评论家减少验证成本。关联：自演化持续改进。
#### [Catastrophic Forgetting in Sequential Thermal Anti-UAV Detection: The Role of Scale-Conditioned Gradient Imbalance](http://arxiv.org/abs/2610.08315v1)
Nguyen 等，2026-10-06。核心：尺度条件梯度不平衡导致序列检测遗忘。关联：持续学习遗忘分析。
#### [MaRK: Markov-adapted Recurrent Kernels for Dynamic Operator Conditioning in State Space Models](http://arxiv.org/abs/2610.09092v1)
Omer 等，2026-10-06。核心：Markov适应循环核用于SSM动态条件化。关联：序列模型持续适配。
#### [Careful Judge: Safe and Efficient Human-AI Collaborative Decision Making](http://arxiv.org/abs/2610.09043v1)
Zhang 等，2026-10-06。核心：人-AI协作中利用人类判断改进未来AI。关联：人在环持续适配。
#### [When Rank Rises as LLMs Degrade](http://arxiv.org/abs/2610.09647v1)
Wang，2026-10-07。核心：挑战rank下降代表表示退化的假设。关联：持续学习表示诊断。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Dynamic Positional Attention Modulation for Parameter-Efficient Fine-Tuning of Large Language Models](http://arxiv.org/abs/2610.07848v1)
Pan 等，2026-10-06。核心：动态位置注意力调制实现PEFT。关联：持续学习微调。

## 视觉感知
### 事件相机视觉感知
#### [Bringing BNNs to Fast Event Processing](http://arxiv.org/abs/2610.09873v1)
Longour 等，2026-10-07。核心：二值网络用于事件相机高效处理。关联：事件视觉低功耗推理。
#### [PIE-PS: Photometric Stereo from Physical Irradiance Event Streams](http://arxiv.org/abs/2610.08188v1)
Meng 等，2026-10-06。核心：从物理辐照事件流恢复光度立体。关联：事件相机几何/光度感知。

### 3D 点云视觉感知
#### [Sparse2comm: Towards Robust Cooperative 3D Object Detection](http://arxiv.org/abs/2610.08573v1)
Yang 等，2026-10-06。核心：稀疏协同3D物体检测应对带宽与不可靠协作。关联：点云协同感知。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [OpenSplatGraph: From Dense Semantic Maps to Structured Scene Graphs for Open-Vocabulary Robot Perception](http://arxiv.org/abs/2610.07569v1)
Nguyen 等，2026-10-06。核心：从稠密语义图到结构化场景图。关联：开放词汇3D点云/高斯感知。

## 跨方向信号
- VLA与剪枝/推理优化深度融合：CARE、DIPrune、VLA-ACL、VisionWeave均在视觉token选择、动作一致性和安全认证上交叉。
- Agent自改进从结果监督转向过程、证据与运行时控制：CLIFT、LiveMACE、AgentTime、Correct Answers、Caddie等。
- 持续学习与PEFT成为LLM、多模态与边缘统一适配层：PEFT比较、CoDe-LoRA、MemFLoRA、动态位置注意力。
- 具身导航强调不确定度、主动语义建图和世界模型：Adaptive Risk-Certified、ActiveLang、SearchWorld、COOL。
- 事件相机结合二值网络与物理模型；3D协同感知关注稀疏通信与开放词汇场景图。

## 优先精读
1. **CARE**：跨VLA与剪枝/推理优化，认证加速直接影响机器人实时部署。
2. **CoDe-LoRA**：面向LLM持续学习，揭示正交LoRA困境并给出知识巩固与解耦方案。
3. **ActiveLang**：主动开放词汇3D建图结合语义不确定度，代表具身导航从被动建图转向主动探索。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*