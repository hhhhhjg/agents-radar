# 实验室研究方向 Radar 2026-10-07

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 34 篇新文献 + 1 篇过去14天内已出现 | 生成时间：2026-10-07 01:10 UTC

---

# 研究方向 Radar

## 今日总览
- **LLM Agent 与多智能体：LLM Agent 工程** — 今日暂无新论文。
- **LLM Agent 与多智能体：Agent 测试时扩展与自我改进** — 8篇新文献；聚焦保形自验证、验证器选择、服务经验自我改进、测试时算力预测与解码博弈。
- **LLM Agent 与多智能体：LLM Agent Society** — 今日暂无新论文。
- **具身智能：视觉-语言-动作模型** — 10篇新文献；围绕分层动作生成、视觉扰动适应、affordance头、一步动作生成、sim-to-real与人形家务评测。
- **具身智能：具身导航** — 5篇新文献；涉及零样本物体导航记忆、Ackermann实机VLN、空间轨迹引导与长时空间记忆。
- **模型压缩与持续学习：LLM 剪枝与推理优化** — 1篇新文献；VisionWeave以弹性视觉表示降低MLLM推理成本。
- **模型压缩与持续学习：多模态大模型剪枝** — 2篇新文献、1篇过去14天内已出现；聚焦VLA动作一致token剪枝与自适应多模态融合。
- **模型压缩与持续学习：持续学习** — 10篇新文献；集中在PEFT/LoRA理论、数据选择、KV压缩、自蒸馏漂移与增量应用。
- **视觉感知：事件相机视觉感知** — 今日暂无新论文。
- **视觉感知：3D 点云视觉感知** — 1篇新文献；OpenSplatGraph构建开放词汇结构化场景图。
- **视觉感知：3D 点云感知与跟踪** — 今日暂无新论文。

## LLM Agent 与多智能体
### Agent 测试时扩展与自我改进
#### [CLIFT: Conformal Self-Verification for Web Agent Training and Test-Time Scaling](http://arxiv.org/abs/2610.06829v1)
Zhang et al. | 2026-10-05 | 提出保形自验证，为Web Agent训练与测试时扩展提供密集验证信号。 | 直接对应Agent自验证与测试时扩展。
#### [ServeLearnBench: How Well Can Agents Self-Improve from Serving Experience?](http://arxiv.org/abs/2610.07792v1)
Zheng et al. | 2026-10-06 | 构建基准评估LLM Agent能否从服务经验中自我改进。 | 直接对应Agent自我改进与持续学习交叉。
#### [DiVeR: Decision-Critical Verifier Learning for VLA Test-Time Scaling](http://arxiv.org/abs/2610.04933v1)
Park et al. | 2026-10-04 | 学习决策关键验证器，为VLA动作候选选择提供验证引导扩展。 | 验证器引导的测试时扩展，连接Agent与VLA。
#### [When Does Longer Reasoning Help? Predicting Mathematical Reasoning Through Discovery and Execution](http://arxiv.org/abs/2610.05322v1)
Hasan et al. | 2026-10-04 | 提出Discovery-Execution框架预测数学推理随测试时算力的扩展曲线。 | 聚焦测试时算力扩展可预测性。
#### [Verification Trap: Understanding Test-Time Selection Failures under False Premises in Code Generation](http://arxiv.org/abs/2610.05170v1)
He et al. | 2026-10-04 | 揭示代码生成中测试时选择在错误前提下失效。 | 对测试时选择与验证机制提出风险分析。
#### [Nash Equilibrium Text: A Game-Theoretic Decoding Framework for Text Generation](http://arxiv.org/abs/2610.05817v1)
Jafari et al. | 2026-10-05 | 将文本修订建模为Nash均衡解码。 | 属于测试时文本改进与解码机制。
#### [Reflections and Fragments: Securing LLMs Against Sequential Mosaic Attacks](http://arxiv.org/abs/2610.05346v1)
La Malfa et al. | 2026-10-04 | 用自博弈红队反思提升LLM对抗多轮马赛克攻击的安全。 | 与自博弈、自我改进安全相关。
#### [Loopy: Low-Bit Quantization Framework for Looped Language Models](http://arxiv.org/abs/2610.05265v1)
Li et al. | 2026-10-04 | 为循环语言模型提出低比特量化，降低测试时迭代计算成本。 | 关联循环模型测试时计算与推理优化。

## 具身智能
### 视觉-语言-动作模型
#### [StairVLA: Stage-Aware Hierarchical Action Generation for Vision-Language-Action Models](http://arxiv.org/abs/2610.07756v1)
Yuan et al. | 2026-10-06 | 提出阶段感知分层动作生成，按去噪阶段调整条件关注。 | 直接改进VLA动作头生成。
#### [ESP: Energy-Score Policy for One-Step Multimodal Action Generation](http://arxiv.org/abs/2610.07696v1)
Makabe et al. | 2026-10-06 | 用能量分数策略实现一步多模态动作生成。 | 加速VLA动作生成、替代迭代采样。
#### [Adapting Vision-Language-Action Models to Unknown Visual Disruptions During Execution](http://arxiv.org/abs/2610.07946v1)
Lee et al. | 2026-10-06 | 提出SALT，利用未执行轨迹自监督适应执行中视觉扰动。 | 提升VLA执行鲁棒性。
#### [Wiring Matters: Injection Topology and Initialization of Affordance Heads in Vision-Language-Action Policies](http://arxiv.org/abs/2610.06318v1)
An et al. | 2026-10-05 | 系统研究affordance头注入拓扑与初始化。 | 聚焦VLA辅助监督连接。
#### [SMART: Zero-Shot Sim-to-Real Articulated Object Manipulation via Large-Scale Synthetic Pretraining](http://arxiv.org/abs/2610.07652v1)
Ao et al. | 2026-10-06 | 通过大规模合成预训练实现零样本sim-to-real关节物体操作。 | 具身操作与VLA迁移。
#### [SimForcing: Distilling Simulation Motion Priors into Real-Domain Robot World Models](http://arxiv.org/abs/2610.06598v1)
Wang et al. | 2026-10-05 | 将仿真运动先验蒸馏进真实域机器人世界模型。 | 支撑VLA规划与动作条件世界模型。
#### [BiGym 2.0: Benchmarking Learned and Agent-Developed Policies for Humanoid Household Manipulation](http://arxiv.org/abs/2610.07594v1)
Zhang et al. | 2026-10-06 | 面向Unitree G1的人形家务操作基准。 | 为VLA/人形策略提供评测。
#### [Attacca: Goal-Directed Control under State Continuity for Long-Horizon Embodied Agents](http://arxiv.org/abs/2610.07785v1)
Seo et al. | 2026-10-06 | 面向长时具身智能体的状态连续目标导向控制。 | 关联视觉目标条件策略与VLA长时控制。
#### [Inspect Robots: Evaluating the Capabilities and Safety of Embodied AI](http://arxiv.org/abs/2610.06306v1)
Leet et al. | 2026-10-05 | 提出模块化开放具身AI能力与安全评估框架。 | 对VLA部署安全评测有支撑。

### 具身导航
#### [MarvisNav: Making Memory Visible on Route Choices for Zero-Shot Object Navigation](http://arxiv.org/abs/2610.06510v1)
Wang et al. | 2026-10-05 | 让记忆在路线选择中可见，提升零样本物体导航。 | 直接对应具身导航。
#### [Sim-to-Real Transfer of Vision-Language Navigation in Continuous Environments Using an Ackermann-Steered Mobile Robot](http://arxiv.org/abs/2610.07192v1)
Abeywansa et al. | 2026-10-05 | 在Ackermann转向机器人上实现连续环境VLN的sim-to-real迁移。 | 直接对应实机VLN导航。
#### [StageVLN: Spatial and Trajectory Auxiliary Guidance for Efficient Vision-Language Navigation](http://arxiv.org/abs/2610.05664v1)
Dao et al. | 2026-10-05 | 用空间与轨迹辅助引导提升VLN效率。 | 直接对应VLN表示学习。
#### [Keepsake: Selective Spatial Memory for Long-Horizon Video Generation](http://arxiv.org/abs/2610.06588v1)
Al Radi et al. | 2026-10-05 | 为长时相机控制视频生成提出选择性空间记忆。 | 与具身导航长时空间记忆相关。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### [VisionWeave: Weaving Elastic Visual Representations as a Native Capability of MLLMs](http://arxiv.org/abs/2610.07987v1)
Feng et al. | 2026-10-06 | 为MLLM引入弹性视觉表示，按信息密度动态分配视觉token。 | 直接降低多模态LLM推理开销。

### 多模态大模型剪枝
#### [VLA-ACL: Action-Consistent Visual Token Pruning for Efficient Vision-Language-Action Models](http://arxiv.org/abs/2610.08133v1)
Du et al. | 2026-10-06 | 提出动作一致视觉token剪枝，减少VLA控制步中的长token序列。 | 直接对应多模态/VLA视觉token剪枝。
#### [Efficient Multimodal Inference through Adaptive Acquisition and Sequential Fusion](http://arxiv.org/abs/2610.07466v1)
Mohapatra et al. | 2026-10-05 | 通过自适应采集与序列融合增量选择模态并提前停止。 | 关联多模态推理成本降低。
#### 🔁 **【过去14天内已出现】** [When and What to Prune? Stage-Aware Visual Token Pruning for Efficient VLA](http://arxiv.org/abs/2610.05273v1)
Shi et al. | 2026-10-04 | 阶段感知视觉token剪枝加速VLA推理。 | 与多模态大模型剪枝直接相关，已出现。

### 持续学习
#### [Dynamic Positional Attention Modulation for Parameter-Efficient Fine-Tuning of Large Language Models](http://arxiv.org/abs/2610.07848v1)
Pan et al. | 2026-10-06 | 针对注意力维度/头/层异质性进行动态位置注意力调制。 | 属于持续学习中的PEFT适配。
#### [RoSA: Rotational Sparse Adaptation for Memory-Efficient Fine-Tuning](http://arxiv.org/abs/2610.06243v1)
Lodhi et al. | 2026-10-05 | 提出旋转稀疏适配，逐层选择子集降低微调内存。 | 参数高效持续适配。
#### [Which and When to Admit: Gradient Admission for Data-Centric Small Language Model Finetuning](http://arxiv.org/abs/2610.07553v1)
Cao et al. | 2026-10-06 | 用梯度准入解决LoRA微调中的梯度冲突与静态数据选择。 | 持续学习/微调数据选择。
#### [A Fine-Grained Analysis of the LoRA Fine-Tuning Landscape with Implications for Data Selection](http://arxiv.org/abs/2610.06542v1)
Zhang et al. | 2026-10-05 | 分析LoRA秩选择与优化景观。 | 为持续适配与数据选择提供依据。
#### [The Optimization Landscape of Learning Compacted Context Models](http://arxiv.org/abs/2610.05885v1)
Villeneuve et al. | 2026-10-05 | 将KV上下文压缩视为记忆操作并分析优化景观。 | 持续学习与无限上下文记忆。
#### [A Riemannian Geometry for Low-rank Adaptation](http://arxiv.org/abs/2610.08049v1)
Takeda et al. | 2026-10-06 | 用黎曼几何刻画LoRA低秩参数化等价关系。 | 持续学习/PEFT理论。
#### [Privileged Context as Drift in On-Policy Self-Distillation](http://arxiv.org/abs/2610.07842v1)
Davion et al. | 2026-10-06 | 分析特权上下文设计在在线自蒸馏中的漂移影响。 | 持续学习/自蒸馏。
#### [LiLib: Lifelong Air-to-Ground Path-Loss Prediction on UAVs via a Drift-Triggered Model Library](http://arxiv.org/abs/2610.07111v1)
Tran | 2026-10-05 | 用漂移触发模型库实现UAV空对地路损终身预测。 | 持续学习非平稳环境应用。
#### [AccentCL: Robust Accent Classification with Incremental Expansion](http://arxiv.org/abs/2610.07426v1)
Tseng et al. | 2026-10-05 | 支持新增口音类别的增量扩展与鲁棒分类。 | 持续学习/增量学习。

## 视觉感知
### 3D 点云视觉感知
#### [OpenSplatGraph: From Dense Semantic Maps to Structured Scene Graphs for Open-Vocabulary Robot Perception](http://arxiv.org/abs/2610.07569v1)
Nguyen et al. | 2026-10-06 | 将密集语义3D地图转成结构化场景图。 | 直接对应3D点云开放词汇感知。

## 跨方向信号
- VLA效率集中爆发：视觉token剪枝、一步能量动作生成、阶段感知动作生成共同降低推理/控制成本。
- 测试时扩展从LLM向具身延伸：CLIFT、DiVeR、Verification Trap关注验证器选择、假前提与动作候选筛选。
- PEFT/LoRA持续理论化：动态位置调制、RoSA、LoRA景观、黎曼几何与梯度准入强调秩、子空间与数据选择。
- 长时记忆与非平稳适应融合：KV压缩、Keepsake空间记忆、LiLib漂移模型库均服务持续学习/导航。
- 具身智能更重评测与安全：BiGym 2.0、Inspect Robots、SALT/SMART推动sim-to-real、安全与鲁棒性评估。

## 优先精读
- **CLIFT**：直接解决Web Agent训练弱监督与测试时扩展，保形自验证可迁移到其他Agent验证与自我改进。
- **VLA-ACL**：动作一致视觉token剪枝直击VLA实时部署瓶颈，兼具多模态剪枝与具身推理价值。
- **DiVeR**：将验证器学习用于VLA测试时动作选择，连接Agent测试时扩展与具身智能两条主线。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*