# 实验室研究方向 Radar 2026-08-14

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 27 篇新文献 + 12 篇过去14天内已出现 | 生成时间：2026-08-13 22:34 UTC

---

## 今日总览

- **LLM Agent 与多智能体 / LLM Agent 工程**：新增 10 篇，聚焦 Agent 技能引发的失败与安全风险（技能劫持、后门、提示注入）、工具故障下的恢复决策，以及推理控制路径与成本优化。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：新增 5 篇，核心趋势是把测试时算力从“更多采样”转向定向验证、蒸馏分析与智能体自适应优化，并开始量化安全扩展的环境代价。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：新增 7 篇，呈现 VLA 架构向单一自回归决策流演进、上下文示范提升泛化，以及对初始位姿鲁棒性和数据生成效率的关注。
- **具身智能 / 具身导航**：新增 1 篇，在航拍视觉语言导航中引入因果记忆与滚动时域扩散规划。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：新增 1 篇，将词表大小视为部署场景下的成本优化参数。
- **模型压缩与持续学习 / 多模态大模型剪枝**：今日暂无新论文。
- **模型压缩与持续学习 / 持续学习**：新增 1 篇，以层间信息论刻画重放式持续学习的泛化界。
- **视觉感知 / 事件相机视觉感知**：今日暂无新论文。
- **视觉感知 / 3D 点云视觉感知**：新增 2 篇，分别以拓扑感知路由统一多传感器 3D 理解、以度量前馈重建先验增强单目 3D 检测。
- **视觉感知 / 3D 点云感知与跟踪**：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [Beyond Single-Turn Confidence: Trajectory-Adapted Uncertainty Quantification for LLM Agents](http://arxiv.org/abs/2608.11552v1)
D. Bouchard 等 | 2026-08-12 | 将不确定性量化从单轮输出扩展到含澄清与工具调用的交互轨迹。 | 为 LLM Agent 提供轨迹级可靠性评估方法。

#### [Agent Skills Can Be Harmful: An Empirical Study of Skill-Induced Failures in LLM Agents](http://arxiv.org/abs/2608.11888v1)
G. Dong 等 | 2026-08-12 | 系统化实证分析技能引发的 Agent 失败模式，发现部分技能反而降低任务成功率。 | 为 Agent 技能工程提供失败机理与风险边界。

#### [Retry, Switch, or Abstain? Learning Strategy-Aware Tool-Use Policies via Controlled Error Injection](http://arxiv.org/abs/2608.11977v1)
C. Chen 等 | 2026-08-12 | 通过可控错误注入学习在工具瞬时/持续/静默故障下选择重试、切换或放弃。 | 提升 Agent 工具调用的故障鲁棒性。

#### [ToolHazard: Scaling Adversarial Environments for Security Evaluation and Alignment of LLM-based Agents](http://arxiv.org/abs/2608.11878v1)
Y. Mou 等 | 2026-08-12 | 构建可扩展对抗环境，用于外部工具状态下的间接提示注入安全评估。 | 为 Agent 工具安全提供规模化基准与对齐平台。

#### [Backdoor Decontamination Dynamics in LLM Agents](http://arxiv.org/abs/2608.11295v1)
G. Huang 等 | 2026-08-11 | 在未知触发条件下，研究安装已知触发器以清除未知后门的动态过程。 | 为 Agent 微调供应链后门提供清除策略。

#### [Convergent Detour Hijacking: Task-Preserving Resource Amplification in Skill-Based LLM Agents](http://arxiv.org/abs/2608.12273v1)
J. Liu 等 | 2026-08-12 | 揭示第三方技能可先建立良性信任，再劫持后续任务以放大资源消耗。 | 刻画了技能型 Agent 的新型任务保留攻击。

#### [Better, Faster, Stronger: Programmatic Skill Learning Best Reduces Agent Cost](http://arxiv.org/abs/2608.11338v1)
Z. Huang 等 | 2026-08-11 | 比较程序化与自然语言技能学习的成本收益，证明程序化技能更省成本。 | 为 Agent 技能获取提供成本效益结论。

#### [Ready Cohorts: Bounding GPU Opportunity and Avoiding Host Round Trips in LLM-Agent Control](http://arxiv.org/abs/2608.12123v1)
J. L. Chen | 2026-08-12 | 提出 GPU 侧就绪批次机制，避免 Agent 控制路径中的主机往返延迟。 | 优化 Agent 服务中模型-工具调用的控制平面效率。

#### [Learning to Persuade Exposes How Easily LLMs Abandon Correct Beliefs](http://arxiv.org/abs/2608.11624v1)
N. B. Bozdag 等 | 2026-08-12 | 发现说服性对话训练后 LLM 更容易放弃正确信念。 | 为 Agent 多轮交互中的信念鲁棒性提供安全警报。

#### [From Numbers to Judgment: Specialist LLM Agents and Reinforcement Learning for European Listed Real Estate](http://arxiv.org/abs/2608.11381v1)
P. Taghavi 等 | 2026-08-11 | 将上市房地产分析映射为 8 个专家 Agent 并用强化学习增强。 | 展示领域专用多 Agent 编排在专业金融判断中的价值。

### Agent 测试时扩展与自我改进

#### [Claim-Level Reliability Assessment for Efficient Test-Time Reasoning](http://arxiv.org/abs/2608.11994v1)
S. Xu 等 | 2026-08-12 | 提出基于 claim 级证伪的测试时扩展，将算力从额外采样重分配到定向验证。 | 直接贡献于 Agent 测试时计算的高效分配。

#### [Towards Understanding On-Policy Distillation through the Lens of Test-Time Scaling](http://arxiv.org/abs/2608.11829v1)
X. Ge 等 | 2026-08-12 | 以测试时缩放视角分析 on-policy 蒸馏，质疑学生模型超越基础模型的认知。 | 为测试时扩展与蒸馏的关系提供新解释。

#### [Self-Evolving Embodied Agents via Skill-Harness Evolution](http://arxiv.org/abs/2608.11350v1)
P. Wang 等 | 2026-08-11 | 通过技能-支架演化让具身 Agent 无需微调即可适应新任务与环境。 | 体现具身 Agent 运行期自我改进的测试时适应范式。

#### [Beyond Trial-and-Error: Agentic Optimization for Image-to-Video Adherence](http://arxiv.org/abs/2608.12290v1)
A. Tyagi 等 | 2026-08-12 | 用 agentic 优化循环对黑盒图像转视频模型自动调优提示与超参数。 | 将测试时智能体优化应用于多模态生成工作流。

#### [Quantifying the Relationship Between Clinical Safety and Environmental Impact in Therapeutic LLMs](http://arxiv.org/abs/2608.11830v1)
A. A. Safaei 等 | 2026-08-12 | 结合临床安全评分与生命周期能耗，发现安全导向部署伴随更高环境成本。 | 警示安全扩展在测试时需权衡环境开销。

#### 🔁 **【过去14天内已出现】** [ThinkRetrieve: Retrieval-Augmented Reasoning Traces for Test-Time Scaling](http://arxiv.org/abs/2608.10928v1)
V. Singh 等 | 2026-08-11 | 用检索增强推理轨迹缓解长思维链测试时扩展的收益递减。 | 为测试时扩展引入外部知识检索维度。

## 具身智能

### 视觉-语言-动作模型

#### [G0.5: One Autoregressive Stream for Robot Reasoning and Action](http://arxiv.org/abs/2608.11739v1)
Y. Liu 等 | 2026-08-12 | 提出单一自回归 Transformer 解码器同时输出推理与动作，替代 VLM+Flow Matching 范式。 | 直接变革 VLA 模型架构。

#### [StellaVLA: In-Context Structured Demonstration for Generalizable Vision-Language-Action Models](http://arxiv.org/abs/2608.11671v1)
S. Xu 等 | 2026-08-12 | 用上下文结构示范让 VLA 模型少样本适应 OOD 场景，无需微调。 | 增强 VLA 跨场景泛化能力。

#### [Policy-Induced Hand Priors in Humanoid Dual-Arm Manipulation: Diagnosing and Mitigating Initial-Pose Dependence](http://arxiv.org/abs/2608.11769v1)
C. Jung 等 | 2026-08-12 | 诊断人形双臂 VLA 策略对初始位姿的依赖并提出缓解方法。 | 提升 VLA 对本体状态变化的鲁棒性。

#### [HUGIN: Enhancing Vision-Language Planning for Autonomous Logistics Sorting](http://arxiv.org/abs/2608.11692v1)
X. Sun 等 | 2026-08-12 | 将物流分拣建模为联合多场景理解，用 VLA 增强跨相机任务规划。 | 将 VLA 规划扩展到工业多视角场景。

#### [Language-Structured Relational Q-Learning for Threat-Aware Control in Safety-Critical Driving](http://arxiv.org/abs/2608.11498v1)
A. Humnabadkar 等 | 2026-08-11 | 用语言结构化关系描述驱动威胁感知的驾驶控制策略学习。 | 为 VLA 中的语言-动作映射提供关系型 Q 学习路径。

#### [HandEdit: A Unified Benchmark for Egocentric Human-to-Robot Dexterous Hand Image Editing](http://arxiv.org/abs/2608.12122v1)
Z. Yang 等 | 2026-08-12 | 构建第一视角人手到机器手图像编辑基准，降低遥操作数据采集成本。 | 为灵巧手 VLA 提供可扩展训练数据。

#### [D3D-GEN: Robot-Aware Domain-Grounded Interactive 3D World Generation for Social Robotics](http://arxiv.org/abs/2608.11876v1)
A. D. Do 等 | 2026-08-12 | 结合域智能体与检索生成机器人可仿真的 3D 交互世界。 | 为 VLA 训练与验证提供域锚定仿真环境。

### 具身导航

#### [DreamFly: Causal Memory and Receding-Horizon Diffusion Planning for Aerial Vision-Language Navigation](http://arxiv.org/abs/2608.12308v1)
Y. Deng 等 | 2026-08-12 | 提出因果记忆与滚动时域扩散规划用于航拍视觉语言导航。 | 面向部分可观测的空中 VLN 增强长期规划。

#### 🔁 **【过去14天内已出现】** [AECNav: Active Evidence Consolidation for Efficient Zero-Shot Open-Vocabulary Object Navigation](http://arxiv.org/abs/2608.10817v1)
G. Liu 等 | 2026-08-11 | 通过主动证据整合减少冗余探索，实现高效零样本开放词汇导航。 | 直接提升 ZSON 任务效率。

#### 🔁 **【过去14天内已出现】** [XCoT-VLA: Executable Chain-of-Thought for Vision-Language-Action Driving](http://arxiv.org/abs/2608.10976v1)
XPeng FMT | 2026-08-11 | 用可执行链式思维替代冗长自然语言 CoT，优化 VLA 驾驶实时控制。 | 将 VLA 推理用于驾驶导航并压缩开销。

#### 🔁 **【过去14天内已出现】** [Multi-View Relational Distillation for Spatial Reasoning with Vision-Language Models](http://arxiv.org/abs/2608.10864v1)
K. T. Nguyen 等 | 2026-08-11 | 用多视角关系蒸馏矫正 VLM 视觉空间表征。 | 为具身导航提供几何稳健的空间推理基础。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [Lifecycle-Optimal Tokenization: Vocabulary Size as a Deployment-Regime-Dependent Infrastructure Parameter](http://arxiv.org/abs/2608.11361v1)
R. Mittal 等 | 2026-08-11 | 将词表大小建模为部署环境依赖的基础设施参数，给出成本最优设计。 | 为 LLM 推理部署提供词表层成本优化。

#### 🔁 **【过去14天内已出现】** [Putting Registers to Work: Task Registers for Token Pruning in Vision Transformers](http://arxiv.org/abs/2608.10989v1)
H. Cao 等 | 2026-08-11 | 提出任务寄存器实现 ViT token 剪枝策略的跨任务迁移。 | 为视觉 Transformer 剪枝提供可迁移策略。

### 多模态大模型剪枝

#### 🔁 **【过去14天内已出现】** [When Vision Becomes Text: Visual Token Pruning via Cross-Modal Residual Guidance in VLMs](http://arxiv.org/abs/2608.10489v1)
C. Ou 等 | 2026-08-11 | 用跨模态残差引导视觉 token 剪枝，缓解 VLM 视觉冗余。 | 直接降低多模态大模型推理成本。

### 持续学习

#### [Drift and Dependence: Layer-wise Information-Theoretic Bounds for Replay-Based Continual Learning](http://arxiv.org/abs/2608.11690v1)
T. Gong 等 | 2026-08-12 | 建立重放式持续学习的层间信息论泛化界。 | 为持续学习重放策略提供理论指导。

#### 🔁 **【过去14天内已出现】** [Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding](http://arxiv.org/abs/2608.11095v1)
K. Chakrabarti | 2026-08-11 | 指出 Agent 编码 README 无限增长源于“灾难性记忆”。 | 为持续运行 Agent 的记忆管理提供新失效模式。

## 视觉感知

### 事件相机视觉感知

#### 🔁 **【过去14天内已出现】** [Static in Frames, Dynamic in Events: Rethinking Features in Event Cameras as Motion Cues](http://arxiv.org/abs/2608.11075v1)
H. Araghi 等 | 2026-08-11 | 主张事件相机特征应被理解为运动线索而非静态强度快照。 | 为事件视觉感知提供特征表示新视角。

#### 🔁 **【过去14天内已出现】** [Bridging Event Streams and DiT: Event-Guided Video Frame Interpolation](http://arxiv.org/abs/2608.10479v2)
G. Lin 等 | 2026-08-11 | 用事件流引导 DiT 视频插帧，解决大间隔与复杂运动模糊。 | 将事件相机优势引入视频插帧任务。

### 3D 点云视觉感知

#### [STAR: A Spatial-Topology Aware Routing Framework for Generalizable 3D Scene Understanding](http://arxiv.org/abs/2608.11699v1)
M. Xing 等 | 2026-08-12 | 提出空间-拓扑感知路由，用 MoE 弥合多传感器 3D 场景理解的域差异。 | 提升 3D 场景理解跨传感器泛化。

#### [Map-Det3D: Metric Feed-Forward 3D Reconstruction Prior for Multi-view 3D Object Detection from Streaming Inputs](http://arxiv.org/abs/2608.12179v1)
Y.-H. Yang 等 | 2026-08-12 | 用度量前馈 3D 重建先验增强多视角单目 3D 检测。 | 为具身 3D 检测提供无深度传感器路径。

#### 🔁 **【过去14天内已出现】** [CausalSplat: Towards Comprehensive Hierarchical Reasoning in 3D Gaussian Splatting](http://arxiv.org/abs/2608.11150v2)
J. Ding 等 | 2026-08-11 | 在 3DGS 中引入层次因果推理，理解隐含意图与空间约束。 | 将 3D 场景表示推进到具身交互语义层。

## 跨方向信号

- **测试时经济性**：CLR、Ready Cohorts、XCoT-VLA 与 ThinkRetrieve 共同把“算力如何分配”提升为跨 LLM Agent、VLA 与剪枝优化的核心设计变量。
- **轨迹级安全视角**：Beyond Single-Turn、ToolHazard、Convergent Detour 与 Agent Skills 均从单点输出转向交互轨迹层面的安全与可靠性分析。
- **技能/上下文复用双刃剑**：StellaVLA、Better Faster Stronger 与 Convergent Detour 显示，技能与上下文示范既是轻量适应手段，也引入新攻击面。
- **结构先验注入替代数据依赖**：Map-Det3D、STAR、Multi-View 与 DreamFly 都用几何/拓扑/因果先验降低对传感器和微调数据的依赖。
- **记忆与遗忘边界**：Drift and Dependence 与 CLAUDE.md 分别从理论和实证角度揭示持续学习与 Agent 长期记忆中的存储-遗忘张力。

## 优先精读

- **G0.5**：提出单一自回归流 VLA，可能取代“VLM+动作头”主流范式，对决策一致性和推理延迟影响深远。
- **Claim-Level Reliability Assessment**：直接改变测试时算力分配原则，训练无关、可操作性强，可迁移至多种 Agent 推理链路。
- **Agent Skills Can Be Harmful**：系统化揭示“技能”这一流行扩展机制的反面风险，对 Agent 工程与安全对齐有直接指导价值。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*