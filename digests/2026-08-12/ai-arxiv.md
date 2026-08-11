# 实验室研究方向 Radar 2026-08-12

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 31 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-08-11 22:35 UTC

---

## 今日总览

- **LLM Agent 与多智能体 / LLM Agent 工程**：今日暂无新论文。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：今日暂无新论文。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：今日新增 6 篇有效论文，焦点集中在世界模型、测试时训练与推理延迟优化，VLA 正从“大模型直接映射”走向“预测性潜变量 + 轻量适应”。
- **具身智能 / 具身导航**：今日新增 9 篇有效论文，UAV-VLN、交互式导航和场景理解形成三条主线，航空场景成为明显增长点。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：今日新增 3 篇有效论文，涉及 KV-Cache 淘汰、WebGPU 调度开销与 Omni 模型参数记忆压缩。
- **模型压缩与持续学习 / 多模态大模型剪枝**：今日暂无新论文。
- **模型压缩与持续学习 / 持续学习**：今日新增 4 篇有效论文，开放持续学习、多模态持续学习和持续 RL 均有体现。
- **视觉感知 / 事件相机视觉感知**：今日新增 3 篇有效论文，覆盖事件相机仿真、位姿估计与 3D 重建，仿真到真实闭环趋势明显。
- **视觉感知 / 3D 点云视觉感知**：今日新增 2 篇有效论文，涉及点云损伤分类与单目 3D 检测深度精炼。
- **视觉感知 / 3D 点云感知与跟踪**：今日暂无新论文。

## 分方向情报

## 具身智能

### 视觉-语言-动作模型

#### [World Tokens: Enhancing Embodied Policies with Training-Time World Modeling](http://arxiv.org/abs/2608.09730v1)
- Q. Tang et al. | 2026-08-10 | 提出将未来视觉表征作为“world tokens”在训练时注入 VLA，增强策略对场景演化的隐式建模 | 直接改进 VLA 训练范式，使其在闭环控制中更好预测物理动态

#### [JEPA-WAM: Learning Vision-Language-Action Policies with Joint-Embedding World Modeling](http://arxiv.org/abs/2608.09381v1)
- Y. Lin et al. | 2026-08-10 | 用联合嵌入预测替代显式视频生成，构建轻量世界模型支撑 VLA 策略 | 为 VLA 提供低部署成本的世界建模方案，缓解传统 WAM 的推理压力

#### [VANE: Reliable Test-Time Training for Vision-Language-Action Models via Future Visual Representation Prediction](http://arxiv.org/abs/2608.09448v1)
- H. Ji et al. | 2026-08-10 | 通过未来视觉表征预测对 VLA 进行测试时训练，解决闭环操作中在线适应不可靠的问题 | 为 VLA 提供轻量且稳定的部署期适应机制

#### [WA-SpecDec: World-Aware Speculative Decoding for Vision-Language-Action Models](http://arxiv.org/abs/2608.08725v1)
- Z. Wen et al. | 2026-08-09 | 将世界感知引入推测解码，并行验证动作 token 块，降低 VLA 自回归生成延迟 | 直接面向 VLA 实时控制瓶颈，提升闭环响应速度

#### [SLIM-0.5B: Learning Action-Grounded Predictive Latents for Robot Manipulation](http://arxiv.org/abs/2608.09771v1)
- J. Wang et al. | 2026-08-10 | 学习动作接地的预测潜变量，用紧凑表征完成机器人操作而不过度依赖大 VLM | 探索 VLA 的高效小模型路线，降低计算开销

#### [From Recovery to Drop-off: How Action Post-training Reduces a VLM's Late-Layer Depth Decodability](http://arxiv.org/abs/2608.08904v1)
- A. Hackett et al. | 2026-08-09 | 探测 VLA 动作后训练对 VLM 各层深度解码能力的影响，发现后层深度可解码性显著下降 | 从表征角度理解 VLA 后训练如何改变感知-行动耦合

### 具身导航

#### [From Semantic Grounding to Decision Optimization: A Unified Framework for Long-Horizon UAV Vision-Language Navigation](http://arxiv.org/abs/2608.09564v1)
- Z. Ma et al. | 2026-08-10 | 提出统一 UAV-VLN 框架，同时优化语义接地、路径记忆与决策优化 | 为无人机长程视觉语言导航提供端到端方案

#### [RecoverFly: A Failure-Aware Reinforcement Learning Post-Training Framework for Aerial Vision-Language Navigation](http://arxiv.org/abs/2608.09467v1)
- B. Wang et al. | 2026-08-10 | 在 UAV-VLN 策略上增加故障感知强化学习后训练，提升复杂环境下的飞行可靠性 | 强化 UAV-VLA 策略的失败恢复能力，是航空 VLN 的关键补强

#### [SAIN: Structure-Aware Interactive Navigation with Active Dialogue Grounding for Mobile Robot](http://arxiv.org/abs/2608.09196v1)
- Y. Cao et al. | 2026-08-10 | 通过主动提问解决不完整指令，结合结构感知完成移动机器人交互导航 | 将主动对话引入视觉语言导航，提升真实场景指令鲁棒性

#### [Goal-oriented Navigation Instruction Generation with Tour Video Priors](http://arxiv.org/abs/2608.08596v1)
- F. Li et al. | 2026-08-09 | 利用旅游视频先验生成目标导向的分步导航指令 | 为 VLN 提供更自然的指令生成手段，降低数据收集成本

#### [360CityArena: A Realistic Virtual Urban Navigation Benchmark for Embodied Agents](http://arxiv.org/abs/2608.08814v1)
- K. Watanabe et al. | 2026-08-09 | 基于 360 度视频构建真实感城市导航基准，评估智能体城市探索能力 | 填补户外具身导航基准在真实感与复杂度上的缺口

#### [GRASP: Granularity-Aware Region Alignment and Semantic Prototype Learning for Fine-Grained Cross-Modal Understanding in Drone Views](http://arxiv.org/abs/2608.09270v1)
- J. Cui et al. | 2026-08-10 | 针对无人机广视角与俯视视角，做粒度感知区域对齐与语义原型学习 | 提升航空 VLN 中的细粒度跨模态理解能力

#### [RayLift: Lifting Complementary Ray-Wise Evidence with 3D Geometry Priors for Semantic Scene Completion](http://arxiv.org/abs/2608.08476v1)
- M. Wang et al. | 2026-08-09 | 用 3D 几何先验融合射线级语义证据，完成相机语义场景补全 | 为导航智能体提供更稳健的 3D 场景理解表示

#### [OccAnyScene: Towards Unified Indoor-Outdoor 3D Occupancy Prediction](http://arxiv.org/abs/2608.08696v1)
- J. Liu et al. | 2026-08-09 | 提出跨场景 3D 语义占用预测任务，统一室内外占用协议 | 推动导航感知模型从固定场景走向通用场景理解

#### [DH-VLM: Dual-Horizon Cooperative Latent Reasoning for Autonomous Driving](http://arxiv.org/abs/2608.09333v1)
- Z. Song et al. | 2026-08-10 | 提出双视野协同潜推理，让自动驾驶车辆在感知受限下做长程规划 | 将 VLM 推理与具身导航结合，缓解单车感知和算力瓶颈

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [DistillCache: KL-Guided Adaptive KV-Cache Eviction for Memory-Efficient LLM Inference](http://arxiv.org/abs/2608.08878v1)
- A. Althoubi | 2026-08-09 | 用 KL 散度指导自适应 KV-Cache 淘汰，缓解长上下文推理显存压力 | 直接改善 LLM 长序列推理的显存效率

#### [Omni2LoRA: Coherence-Preserving Parametric Memory for Efficient Omni Language Models](http://arxiv.org/abs/2608.09227v1)
- P. Mathur et al. | 2026-08-10 | 用参数化记忆实现 Omni 模型长序列压缩，保持跨模态时间连贯性 | 为多模态 LLM 推理提供轻量化 token 压缩方案

#### [Measuring and Reducing WebGPU Dispatch Overhead for LLM Inference](http://arxiv.org/abs/2608.08730v1)
- J. Maczan | 2026-08-09 | 系统测量 WebGPU 算子调度开销并提出优化方法 | 面向浏览器端 LLM 推理，提升边缘部署性价比

### 持续学习

#### [Macaron-V1: Towards Open Continual Learning with Self-Improvement and Mixture-of-LoRA](http://arxiv.org/abs/2608.09819v1)
- Mind Lab et al. | 2026-08-10 | 将持续学习与自我改进结合，通过版本化模型-框架对和 LoRA 混合实现部署后适应 | 代表持续学习向“智能体终身学习”演进的体系级工作

#### [Hyperbolic Multimodal Continual Learning](http://arxiv.org/abs/2608.09572v1)
- J. Liu et al. | 2026-08-10 | 研究双曲空间中的多模态表征在持续学习中的稳定性与可塑性 | 为多模态持续学习提供新的几何表征视角

#### [Agentic Router: An Execution-Grounded Continual Learning Approach With Memory](http://arxiv.org/abs/2608.09184v1)
- Y. Chen et al. | 2026-08-10 | 利用命令行执行结果作为反馈，让 LLM Agent 在真实操作中持续学习 | 将持续学习落到 Agent 执行闭环，提升运维智能体可靠性

#### [Catastrophic Forgetting in Continual Reinforcement Learning](http://arxiv.org/abs/2608.08673v1)
- E. Graham | 2026-08-09 | 系统研究任务相似性与强化学习灾难性遗忘之间的关系 | 为持续 RL 的算法设计提供任务序列层面的实证依据

## 视觉感知

### 事件相机视觉感知

#### [EvTrajGS: Accurate and Efficient 3D Gaussian Splatting from Unposed Event Streams](http://arxiv.org/abs/2608.08585v1)
- Z. Chen et al. | 2026-08-09 | 无需位姿估计，直接从事件流完成高精度 3D 高斯泼溅重建 | 将事件相机优势扩展到高质量稠密重建领域

#### [A Height-Constrained 2-Point Minimal Solver for Pose Estimation from Active LED Markers with Event Cameras](http://arxiv.org/abs/2608.09520v1)
- R. Yuan et al. | 2026-08-10 | 提出高度约束的 2 点最小解算器，用于事件相机下 LED 标记位姿估计 | 提升主动标记定位的实时性与鲁棒性

#### [EsaacSim: A Multimodal Event Camera Add-on for NVIDIA Isaac Sim](http://arxiv.org/abs/2608.08522v1)
- I. Bugueno-Cordova et al. | 2026-08-09 | 为 NVIDIA Isaac Sim 开发事件相机多模态插件 | 降低事件相机机器人算法的仿真验证门槛

### 3D 点云视觉感知

#### [Damage Classification for 3D Point Cloud Data via 3D Data Analysis and Vision Foundation Model-based 2D Projections](http://arxiv.org/abs/2608.08955v1)
- E. Perez et al. | 2026-08-09 | 对比 3D 直接分析与视觉基础模型 2D 投影两种点云损伤分类路径 | 为点云细粒度分类提供低标注成本方案

#### [RefineAny3D: Depth Refinement as Semantic Alignment for Monocular 3D Detection](http://arxiv.org/abs/2608.09147v1)
- Z. Zhang et al. | 2026-08-10 | 将深度细化建模为语义对齐过程，提升单目 3D 检测的几何精度 | 连接深度基础模型与点云感知，增强 3D 场景理解能力

## 跨方向信号

1. **世界模型正在成为 VLA 的轻量化组件**：World Tokens、JEPA-WAM、VANE 共同指向用未来表征预测替代显式视频生成，在降低部署成本的同时增强策略对动态场景的建模。
2. **推理效率优化向机器人策略渗透**：WA-SpecDec、DistillCache、Omni2LoRA 显示 KV-Cache、推测解码和参数记忆等大模型加速技术正被引入 VLA/多模态长序列控制流程。
3. **无人机视觉-语言导航集中爆发**：多篇 UAV-VLN 工作（UAV-VLN 框架、RecoverFly、GRASP）将 VLN 扩展到航空场景，语义接地、失败恢复和跨模态对齐成为关键问题。
4. **事件相机进入“仿真-定位-重建”全链路**：EsaacSim 补上仿真工具链，与 LED 标记位姿求解、事件流 3D 重建形成完整闭环。
5. **持续学习与智能体部署深度耦合**：Macaron-V1、Agentic Router、持续 RL 研究共同说明持续学习正从分类评测走向 Agent 执行经验与真实环境适应。

## 优先精读

1. **VANE**：首次将未来视觉表征预测引入 VLA 测试时训练，直接解决闭环操作中的可靠性难题，对 VLA 部署范式有重要参考。
2. **WA-SpecDec**：面向 VLA 的延迟瓶颈，用世界感知推测解码显著减少自回归生成开销，工程价值高且方法新颖。
3. **Macaron-V1**：将自我改进与 Mixture-of-LoRA 结合形成开放持续学习框架，是“持续学习×LLM Agent”交叉方向的系统级代表工作。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*