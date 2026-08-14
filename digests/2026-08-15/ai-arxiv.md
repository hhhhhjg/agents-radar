# 实验室研究方向 Radar 2026-08-15

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 31 篇新文献 + 9 篇过去14天内已出现 | 生成时间：2026-08-14 22:16 UTC

---

# 研究方向 Radar

## 今日总览

- **LLM Agent 工程**：今日 10 篇新文献，聚焦长期记忆、技能归因、信用分配、安全防御与可操控性，工程化趋势显著。
- **Agent 测试时扩展与自我改进**：今日 2 篇新文献，分别提出生成式检索模型与进化策略，拓展测试时推理与解覆盖能力。
- **LLM Agent Society**：今日暂无新论文。
- **视觉-语言-动作模型**：今日 10 篇新文献，覆盖对抗鲁棒性、自进化、强化学习优化、推理加速、内部表示理解与空间记忆等。
- **具身导航**：今日 6 篇新文献，聚焦开集目标导航、人形 VLN、UAV-VLN、世界模型与风险感知；其中 1 篇同时匹配 VLA 方向，已在 VLA 方向分析。
- **LLM 剪枝与推理优化**：今日 1 篇新文献，将最优传输引入 3D VLM token 剪枝。
- **多模态大模型剪枝**：今日暂无新论文。
- **持续学习**：今日 2 篇新文献，探索可学习小波激活与行为重编程以维持可塑性。
- **事件相机视觉感知**：今日暂无新论文。
- **3D 点云视觉感知**：今日 1 篇新文献，提出几何约束的统一 3D 感知框架。
- **3D 点云感知与跟踪**：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [LycheeMemory V2: Efficient Long-Term Memory for LLM Agents via Semantic Segment-Level Consolidation](http://arxiv.org/abs/2608.12990v1)
D. Li et al. (2026-08-13) — 提出语义段级整合的延迟记忆合并机制，降低长期记忆构建成本。关联：直接提升 LLM Agent 长期记忆的工程效率。

#### [EgoCITE: Context-Augmented Indexing and Time-Aware Retrieval for Long-Horizon Egocentric Memory](http://arxiv.org/abs/2608.12627v1)
L. Zhang, K. Sun (2026-08-12) — 构建上下文增强索引与时间感知检索，改善长时程第一视角记忆的可用性。关联：为 Agent 提供可检索的长期经验记忆基础。

#### [Teach the Magnitude, Not the Direction: Verifier-Bounded Credit Assignment for Multi-Turn Multi-step LLM Agents](http://arxiv.org/abs/2608.13179v1)
Z. Wang et al. (2026-08-13) — 提出验证器约束的信用分配方法，解耦多轮 Agent 轨迹中的异质奖励。关联：解决 LLM Agent 多步决策的奖励稀疏问题。

#### [SkillShapley: Boundary-Adaptive Shapley Valuation for Skill Step Attribution in LLM Agents](http://arxiv.org/abs/2608.13173v1)
C. Liu et al. (2026-08-13) — 用边界自适应 Shapley 值评估技能步骤对 Agent 任务的贡献。关联：为 Agent 技能优化提供可解释的步骤级归因。

#### [Capability Sheaves for Compositional Agent-Harness Repair: Controlled Quotients and a Real-Repository Stress Test](http://arxiv.org/abs/2608.13228v1)
S. Batruin (2026-08-13) — 用有限能力层形式化 Agent 工具组件间的状态冲突，并支持合成修复。关联：为 Agent 工具链组合错误提供结构化修复框架。

#### [Practice Makes Unsafe: Skill Misevolution in Self-Improving LLM Agents](http://arxiv.org/abs/2608.12851v1)
X. Mao et al. (2026-08-13) — 揭示不安全成功轨迹被蒸馏为可复用技能的风险。关联：直接关系自我改进 Agent 的安全机制设计。

#### [Beyond Handcrafted Security: Towards Self-Evolving Defense for LLM Agents](http://arxiv.org/abs/2608.12977v1)
J. Ruan et al. (2026-08-13) — 提出自我演化的运行时防御框架，动态更新安全策略。关联：强化 LLM Agent 运行时的自适应防御能力。

#### [SteerBench-Work: A Benchmark for Agent Steering at Action Boundaries](http://arxiv.org/abs/2608.12654v1)
O. Serdar, C. Mertayak (2026-08-12) — 构建双语基准，评估 Agent 在高风险动作边界前的“继续或暂停”决策。关联：为 Agent 安全干预机制提供评测基准。

#### [LLMs Are Not Good Strategists, Yet Memory-Enhanced Agency Boosts Reasoning](http://arxiv.org/abs/2608.12626v1)
Y. Wu, Z. Hu (2026-08-12) — 发现长程策略推理中的子目标漂移，并证明记忆增强可提升策略一致性。关联：为 Agent 长程任务提供记忆增强的推理方案。

#### [Lines and Ladders: A Context-Aware Multi-Agent Framework for Large-Scale Retail Price Taxonomy](http://arxiv.org/abs/2608.12674v1)
R. T. Chunduri et al. (2026-08-13) — 提出上下文感知多智能体框架维护零售价格分类一致性。关联：展示 LLM 多智能体在真实产业大规模治理中的应用。

### Agent 测试时扩展与自我改进

#### [GEM: A Generative Embedding Model Bridging Reasoning and Retrieval](http://arxiv.org/abs/2608.13200v1)
Z. Shen, C. Macdonald (2026-08-13) — 提出生成式嵌入模型，将查询推理与文档检索统一到同一生成框架。关联：为测试时通过检索增强推理提供新范式。

#### [Beyond the Best Guess: Improving LLM Solution Coverage with Evolution Strategies](http://arxiv.org/abs/2608.12679v1)
C. F. Hayes et al. (2026-08-13) — 用进化策略搜索多个解并提高 LLM 在发现任务中的覆盖度。关联：直接扩展测试时计算以提升探索能力。

#### 🔁 **【过去14天内已出现】**[Claim-Level Reliability Assessment for Efficient Test-Time Reasoning](http://arxiv.org/abs/2608.11994v1)
S. Xu et al. (2026-08-12) — 提出声明级证伪机制，将测试时计算重定向到针对性验证。关联：优化测试时推理的计算分配。

#### 🔁 **【过去14天内已出现】**[Towards Understanding On-Policy Distillation through the Lens of Test-Time Scaling](http://arxiv.org/abs/2608.11829v1)
X. Ge et al. (2026-08-12) — 从测试时扩展视角解析 on-policy distillation 的能力增益机制。关联：连接自我改进与测试时扩展的理论解释。

#### 🔁 **【过去14天内已出现】**[Beyond Trial-and-Error: Agentic Optimization for Image-to-Video Adherence](http://arxiv.org/abs/2608.12290v1)
A. Tyagi et al. (2026-08-12) — 用 Agent 驱动优化提升黑盒图像到视频模型的对齐控制。关联：体现 Agent 在生成任务中的自动化改进价值。

#### 🔁 **【过去14天内已出现】**[Quantifying the Relationship Between Clinical Safety and Environmental Impact in Therapeutic LLMs](http://arxiv.org/abs/2608.11830v1)
A. A. Safaei et al. (2026-08-12) — 量化治疗型 LLM 的临床安全与环境成本。关联：为自我改进 Agent 的部署权衡提供可持续性维度。

### LLM Agent Society

今日暂无高相关新论文。

## 具身智能

### 视觉-语言-动作模型

#### [FlashDrive: Flash Vision-Language-Action Inference for Autonomous Driving](http://arxiv.org/abs/2608.12932v1)
Z. Li et al. (2026-08-13) — 识别 VLA 推理中的四级级联瓶颈并逐一加速。关联：直接优化 VLA 部署时的实时计算效率。

#### [FIRE-VLA: Failure-Informed Self-Evolution for Vision-Language-Action Models in Autonomous Driving](http://arxiv.org/abs/2608.13395v1)
H. Dou (2026-08-13) — 利用失败轨迹驱动 VLA 策略自进化。关联：提升 VLA 模型在长尾驾驶场景中的自我改进能力。

#### [Temporal GRPO: Beyond Trajectory-Level Credit in Vision-Language-Action Reinforcement Learning](http://arxiv.org/abs/2608.13026v1)
Y. Zhou et al. (2026-08-13) — 在 GRPO 中引入时间步级信用分配，避免整轨奖励掩盖有效动作。关联：优化 VLA 强化学习训练的细粒度反馈。

#### [UniTexture: Cross-Task Universal Adversarial Textures for Vision-Language-Action Models](http://arxiv.org/abs/2608.13453v1)
Y. Dai et al. (2026-08-13) — 构造跨任务通用对抗纹理，暴露 VLA 模型的安全脆弱性。关联：为 VLA 鲁棒性评估与防御提供新攻击面。

#### [Decoding Task Progress from VLA Representations](http://arxiv.org/abs/2608.13474v1)
A. Bhardwaj et al. (2026-08-13) — 用机制可解释性方法解码 VLA 内部任务进度表征。关联：为 VLA 运行时监控提供基础工具。

#### [Spatial Memory Agent: Experience-Grounded Procedure Memory for Spatial Intelligence](http://arxiv.org/abs/2608.12743v1)
H. Zhang et al. (2026-08-13) — 构建经验驱动的空间程序记忆，提升 VLA 空间推理能力。关联：为 VLA 提供长期空间操作经验积累的机制。

#### [BrainWAM: Action-Space Coordination of Semantic Priors and Predictive Dynamics for Autonomous Driving](http://arxiv.org/abs/2608.12854v1)
B. Zhan et al. (2026-08-13) — 在动作空间协调语义先验与预测动力学，统一 VLA 和世界模型规划。关联：融合两种范式的自动驾驶决策。

#### [FUSE: Active Functional Affordance Grounding through Adaptive Semantic-Geometric Evidence Acquisition](http://arxiv.org/abs/2608.12683v1)
Z. Chen, S. N. Aakur (2026-08-13) — 通过自适应语义-几何证据采集，主动定位功能性可供性。关联：增强 VLA 对物体功能的交互理解。

#### [Semantic Radiance Fields as Simulators for Spatial Reasoning in Real-World Scenes](http://arxiv.org/abs/2608.13095v1)
N. Heider et al. (2026-08-13) — 用语义辐射场作为真实场景仿真器，训练空间推理 VLA。关联：为 VLA 提供真实感与可查询性兼具的训练环境。

#### [Enhancing Virtual Agents through SLMs and Edge-Computing: An Exploratory Evaluation of Think and Memory Processes](http://arxiv.org/abs/2608.13420v1)
A. Hadjiliasi, L. Nisiotis (2026-08-13) — 探索用小模型和边缘计算增强虚拟智能体的思考与记忆过程。关联：为具身 VLA 的轻量化部署提供可行路径。

### 具身导航

#### [SAP-Nav: Spatial Semantic Representation Meets Active Perception for Hierarchical Open-Vocabulary Object Navigation](http://arxiv.org/abs/2608.12707v1)
X. Pei et al. (2026-08-13) — 结合空间语义表示与主动感知，解决层级开集目标导航。关联：直接推进复杂指令下的零样本导航能力。

#### [HumanoidVLN: A Physics-Grounded Simulator and Benchmark for Vision-Language Navigation Across Diverse Humanoid Embodiments](http://arxiv.org/abs/2608.12860v1)
Q.-D. Pham et al. (2026-08-13) — 提出物理落地的人形机器人 VLN 仿真器与基准。关联：填补人形双足导航在 VLN 评测中的空白。

#### [AirForesight: Current-to-Future Spatial Map Imagination with Cross-Space Planning Consistency for UAV-VLN](http://arxiv.org/abs/2608.12835v1)
Y. Liu et al. (2026-08-13) — 通过“当前到未来”空间地图想象与跨空间规划一致性，增强 UAV 导航。关联：提升无人机在复杂环境中的语言引导导航能力。

#### [AlayaWorld: Interactive Long-Horizon World Modeling - Full Technical Report (v1.1)](http://arxiv.org/abs/2608.13492v1)
AlayaWorld Team et al. (2026-08-13) — 改进条件信号表示与集成方式，提升长时程交互世界建模性能。关联：为具身导航提供可交互的未来环境预测。

#### [Can Vision-Language Models Assess Proxemic Risk from Egocentric Robot Images?](http://arxiv.org/abs/2608.12515v1)
V. Rudas, D. Kuzmenko (2026-08-12) — 评估开源 VLM 从机器人第一视角判断近身风险的能力。关联：为导航中的行人安全风险评估提供 VLM 基线。

#### 🔁 **【过去14天内已出现】**[DreamFly: Causal Memory and Receding-Horizon Diffusion Planning for Aerial Vision-Language Navigation](http://arxiv.org/abs/2608.12308v1)
Y. Deng, F. Xu (2026-08-12) — 结合因果记忆与滚动时域扩散规划，提升空中 VLN 的规划可靠性。关联：为空中导航的长期规划与记忆提供新方法。

#### 🔁 **【过去14天内已出现】**[HUGIN: Enhancing Vision-Language Planning for Autonomous Logistics Sorting](http://arxiv.org/abs/2608.11692v1)
X. Sun et al. (2026-08-12) — 针对多场景联合理解任务，增强 VLM 的工业物流分拣规划。关联：展示具身导航与规划在物流场景中的应用。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [CoverPrune: Coverage-Driven Token Pruning for 3D VLMs via Optimal Transport](http://arxiv.org/abs/2608.13226v1)
P. Ling et al. (2026-08-13) — 用最优传输理论实现覆盖驱动的 token 剪枝，缓解 3D VLM 视觉 token 瓶颈。关联：直接降低 3D 大模型推理时的计算开销。

### 多模态大模型剪枝

今日暂无高相关新论文。

### 持续学习

#### [Sustaining Plasticity via Learnable Wavelet Activations in Continual Learning](http://arxiv.org/abs/2608.12874v1)
Z. Zhang et al. (2026-08-13) — 提出可学习小波激活函数，缓解持续学习中的低频偏置与塑性损失。关联：为持续学习新任务提供保持网络可塑性的新激活设计。

#### [Behavioral Reprogramming of Open-Weights Models: Cognitive Plasticity and Alignment Bounds](http://arxiv.org/abs/2608.13069v1)
L. Malíčková (2026-08-13) — 通过行为重编程诱导 LLM 认知可塑性，并分析对齐边界。关联：从行为层面探索持续学习中的能力迁移。

#### 🔁 **【过去14天内已出现】**[Drift and Dependence: Layer-wise Information-Theoretic Bounds for Replay-Based Continual Learning](http://arxiv.org/abs/2608.11690v1)
T. Gong et al. (2026-08-12) — 研究重放方法中层间漂移与依赖的信息论界。关联：为持续学习中的重放策略提供理论保证。

## 视觉感知

### 事件相机视觉感知

今日暂无高相关新论文。

### 3D 点云视觉感知

#### [Geometry-Grounded Unified 3D Perception for Autonomous Driving](http://arxiv.org/abs/2608.13147v1)
L. Xu et al. (2026-08-13) — 在共享表示中显式保留度量 3D 结构，统一多相机感知。关联：为自动驾驶点云感知提供几何约束的通用框架。

#### 🔁 **【过去14天内已出现】**[STAR: A Spatial-Topology Aware Routing Framework for Generalizable 3D Scene Understanding](http://arxiv.org/abs/2608.11699v1)
M. Xing et al. (2026-08-12) — 在 MoE 路由中融入空间拓扑感知，提升跨传感器泛化。关联：统一 3D 感知中点云与多模态特征路由。

#### 🔁 **【过去14天内已出现】**[Map-Det3D: Metric Feed-Forward 3D Reconstruction Prior for Multi-view 3D Object Detection from Streaming Inputs](http://arxiv.org/abs/2608.12179v1)
Y.-H. Yang et al. (2026-08-12) — 用度量前馈 3D 重建先验提升单目多视角检测。关联：为无深度传感器的 3D 目标检测提供几何先验支撑。

### 3D 点云感知与跟踪

今日暂无高相关新论文。

## 跨方向信号

- **测试时计算的跨任务扩展**：GEM、Beyond the Best Guess 与 Claim-Level Reliability Assessment 共同表明，测试时扩展正从纯推理覆盖扩展到检索、发现与验证场景。
- **记忆机制成为核心共性**：LycheeMemory、EgoCITE、Spatial Memory Agent、DreamFly 等在不同方向上均将长期记忆作为提升 Agent 自主性的关键。
- **强化学习信用分配的精细化**：Temporal GRPO 与 Teach the Magnitude 分别针对 VLA 和 LLM Agent 细化奖励分配，反映 RL 训练向步骤级/时间级粒度演进。
- **安全与鲁棒性在多模态融合中凸显**：UniTexture、Practice Makes Unsafe、Beyond Handcrafted Security 表明，随着 VLA 与自改进 Agent 落地，对抗性与安全威胁成为共性焦点。
- **世界模型与 VLN 的融合**：AlayaWorld、BrainWAM、DreamFly 将世界模型预测与语义规划结合，推动导航和驾驶从“感知-动作”向“预测-规划”范式迁移。

## 优先精读

#### **[Temporal GRPO: Beyond Trajectory-Level Credit in Vision-Language-Action Reinforcement Learning](http://arxiv.org/abs/2608.13026v1)** — 首次将 GRPO 扩展至时间步级信用分配，对 VLA 强化学习训练范式有直接冲击，且可能与 LLM Agent 的密集奖励方法互鉴。
#### **[LycheeMemory V2: Efficient Long-Term Memory for LLM Agents via Semantic Segment-Level Consolidation](http://arxiv.org/abs/2608.12990v1)** — 提出延迟合并的长期记忆架构，显著降低交互式 Agent 的记忆维护成本，是工程落地的关键进展。
#### **[Beyond the Best Guess: Improving LLM Solution Coverage with Evolution Strategies](http://arxiv.org/abs/2608.12679v1)** — 用进化策略系统性扩展 LLM 解覆盖，将测试时计算从“单一猜测”转向“种群探索”，对数学、科学发现等任务有广泛引用前景。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*