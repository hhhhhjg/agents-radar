# 实验室研究方向 Radar 2026-08-12

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 17 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-08-11 22:35 UTC

---

# 研究方向 Radar

## 今日总览

- LLM Agent 与多智能体
  - LLM Agent 工程：今日暂无新论文。
  - Agent 测试时扩展与自我改进：今日暂无新论文。
  - LLM Agent Society：今日暂无新论文。
- 具身智能
  - 视觉-语言-动作模型：今日有 5 篇候选新论文；按去重与相关性，择优保留 3 篇，另 2 篇因与具身导航重叠更强而归入该子方向。
  - 具身导航：今日有 3 篇候选新论文，集中在 UAV-VLN 语义落地、失败感知后训练、移动机器人主动对话消歧。
- 模型压缩与持续学习
  - LLM 剪枝与推理优化：今日有 3 篇新论文，主要集中在 KV cache 自适应淘汰、WebGPU 调度开销与 Omni 模型参数记忆压缩。
  - 多模态大模型剪枝：今日暂无新论文。
  - 持续学习：今日有 3 篇新论文，涉及开放持续学习、双曲多模态持续学习和执行驱动的 LLM agent 持续学习。
- 视觉感知
  - 事件相机视觉感知：今日有 3 篇新论文，覆盖仿真器、事件流 3D 重建和主动标记位姿估计。
  - 3D 点云视觉感知：今日有 2 篇新论文，涉及点云损伤分类与单目 3D 检测深度细化。
  - 3D 点云感知与跟踪：今日暂无新论文。

## LLM Agent 与多智能体

### LLM Agent 工程

今日暂无新论文。

### Agent 测试时扩展与自我改进

今日暂无新论文。

### LLM Agent Society

今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [VANE: Reliable Test-Time Training for Vision-Language-Action Models via Future Visual Representation Prediction](http://arxiv.org/abs/2608.09448v1)

Hongjin Ji 等 | 2026-08-10 | 提出 VANE，通过预测未来视觉表示实现可靠的 VLA 测试时训练，避免共享适应空间混合任务修正。 | 直接面向 VLA 闭环操作，提供无标注部署流下的轻量稳定适应。

#### [WA-SpecDec: World-Aware Speculative Decoding for Vision-Language-Action Models](http://arxiv.org/abs/2608.08725v1)

Zikang Wen 等 | 2026-08-09 | 提出世界感知推测解码，用并行验证草稿动作块的方式降低 VLA 自回归动作生成的延迟。 | 将推测解码从 LLM 推理引入 VLA 机器人控制，主攻闭环延迟瓶颈。

#### [JEPA-WAM: Learning Vision-Language-Action Policies with Joint-Embedding World Modeling](http://arxiv.org/abs/2608.09381v1)

Yihan Lin 等 | 2026-08-10 | 提出联合嵌入世界模型，让 VLA 策略在隐空间预测状态转移，避免视频生成式世界动作模型的高部署成本。 | 把世界模型与 VLA 策略统一，兼顾状态迁移建模和控制效率。

### 具身导航

#### [From Semantic Grounding to Decision Optimization: A Unified Framework for Long-Horizon UAV Vision-Language Navigation](http://arxiv.org/abs/2608.09564v1)

Zeyuan Ma 等 | 2026-08-10 | 提出统一框架，联合解决 UAV-VLN 中指令相关地标弱语义落地与长程决策优化两大问题。 | 针对空中具身导航的跨模态语义基础，直接提升长程 VLN 决策能力。

#### [RecoverFly: A Failure-Aware Reinforcement Learning Post-Training Framework for Aerial Vision-Language Navigation](http://arxiv.org/abs/2608.09467v1)

Boxiong Wang 等 | 2026-08-10 | 提出失败感知的强化学习后训练框架，使 UAV-VLA 策略在失败后恢复可靠飞行动作。 | 将失败信号作为训练信号，提升无人机 VLN/VLA 在复杂环境中的鲁棒性。

#### [SAIN: Structure-Aware Interactive Navigation with Active Dialogue Grounding for Mobile Robot](http://arxiv.org/abs/2608.09196v1)

Yuhao Cao 等 | 2026-08-10 | 提出结构感知主动对话导航框架，让移动机器人通过主动提问澄清歧义或不完整指令。 | 将主动交互引入移动机器人具身导航，应对真实世界指令的不确定性。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [DistillCache: KL-Guided Adaptive KV-Cache Eviction for Memory-Efficient LLM Inference](http://arxiv.org/abs/2608.08878v1)

Asaad Althoubi | 2026-08-09 | 提出 KL 引导的自适应 KV cache 淘汰方法，缓解长上下文 LLM 推理中的内存瓶颈。 | 针对 LLM 长上下文推理的关键资源瓶颈，是 KV cache 管理的直接优化方案。

#### [Omni2LoRA: Coherence-Preserving Parametric Memory for Efficient Omni Language Models](http://arxiv.org/abs/2608.09227v1)

Puneet Mathur 等 | 2026-08-10 | 提出保持时序连贯性的 LoRA 参数记忆方法，压缩全模态语言模型的长联合 token 序列。 | 以参数化记忆压缩多模态序列，降低 Omni LLM 的推理计算与存储成本。

#### [Measuring and Reducing WebGPU Dispatch Overhead for LLM Inference](http://arxiv.org/abs/2608.08730v1)

Jędrzej Maczan | 2026-08-09 | 系统测量并降低浏览器/边缘环境中 WebGPU 逐算子派发开销，优化 LLM 跨平台推理。 | 从底层调度层面支持 LLM 推理优化，对终端侧部署具有工程价值。

### 多模态大模型剪枝

今日暂无新论文。

### 持续学习

#### [Macaron-V1: Towards Open Continual Learning with Self-Improvement and Mixture-of-LoRA](http://arxiv.org/abs/2608.09819v1)

Mind Lab 等 | 2026-08-10 | 提出开放持续学习 agent-模型家族，通过版本化模型-测试平台递归改进与 Mixture-of-LoRA 支持部署后持续学习。 | 将“经验中学习”与持续学习结合，构建开放环境下的自改进系统。

#### [Hyperbolic Multimodal Continual Learning](http://arxiv.org/abs/2608.09572v1)

Jiahong Liu 等 | 2026-08-10 | 研究双曲空间中多模态表示在持续学习下的行为，并提出面向层次语义的持续学习方法。 | 将双曲几何归纳偏置引入多模态持续学习，扩展了 CL 的表示空间。

#### [Agentic Router: An Execution-Grounded Continual Learning Approach With Memory](http://arxiv.org/abs/2608.09184v1)

Yuxuan Chen 等 | 2026-08-10 | 提出执行驱动的持续学习路由方法，利用命令执行结果和记忆改善 LLM agent 的端到端决策。 | 用真实执行反馈驱动 LLM agent 持续学习，降低命令行网络操作风险。

## 视觉感知

### 事件相机视觉感知

#### [EvTrajGS: Accurate and Efficient 3D Gaussian Splatting from Unposed Event Streams](http://arxiv.org/abs/2608.08585v1)

Zixuan Chen 等 | 2026-08-09 | 提出从无位姿事件流直接构建 3D Gaussian Splatting，联合优化事件轨迹与几何。 | 利用事件相机高时间分辨率与异步特性，实现无需传统位姿估计的稠密 3D 重建。

#### [A Height-Constrained 2-Point Minimal Solver for Pose Estimation from Active LED Markers with Event Cameras](http://arxiv.org/abs/2608.09520v1)

Runze Yuan 等 | 2026-08-10 | 提出高度约束的两点最小求解器，用于事件相机下主动 LED 标记的高频位姿估计。 | 结合事件相机低延迟与主动标记鲁棒性，面向实时定位应用。

#### [EsaacSim: A Multimodal Event Camera Add-on for NVIDIA Isaac Sim](http://arxiv.org/abs/2608.08522v1)

Ignacio Bugueno-Cordova 等 | 2026-08-09 | 为 NVIDIA Isaac Sim 提供多模态事件相机插件，补足机器人仿真中的事件数据生成能力。 | 缓解事件相机数据稀缺问题，推动事件视觉与具身仿真的集成。

### 3D 点云视觉感知

#### [Damage Classification for 3D Point Cloud Data via 3D Data Analysis and Vision Foundation Model-based 2D Projections](http://arxiv.org/abs/2608.08955v1)

Evan Perez 等 | 2026-08-09 | 对比 3D 点云直接损伤分类与基于视觉基础模型的 2D 投影分类，探索低标注条件下的点云损伤评估。 | 面向点云高计算量与标签稀缺问题，提供点云-2D 投影结合的分类方案。

#### [RefineAny3D: Depth Refinement as Semantic Alignment for Monocular 3D Detection](http://arxiv.org/abs/2608.09147v1)

Zhihao Zhang 等 | 2026-08-10 | 将单目 3D 检测中的深度细化建模为语义对齐，提升开放词汇 3D 定位精度。 | 通过深度质量增强 3D 几何感知，可辅助点云与单目 3D 感知融合。

### 3D 点云感知与跟踪

今日暂无新论文。

## 跨方向信号

1. **未来表示与隐空间世界模型成为新范式**：VANE 预测未来视觉表示，JEPA-WAM 用联合嵌入建模状态转移，均避免显式视频生成的高成本，正在重塑 VLA 与具身导航的策略学习方式。
2. **执行/失败反馈成为统一训练信号**：RecoverFly 用失败状态做强化后训练，Agentic Router 用命令执行结果做持续学习，VANE 用部署流做测试时训练；体现“从执行中学习”在具身智能、LLM Agent 与持续学习中的合流。
3. **推理效率优化进入系统-模型协同阶段**：WA-SpecDec 并行验证动作块，DistillCache 自适应淘汰 KV cache，WebGPU 调度测量面向浏览器部署；延迟与内存被当作与模型能力同等重要的优化对象。
4. **参数高效适配成为持续学习与多模态压缩的共同载体**：Macaron-V1 的 Mixture-of-LoRA、Omni2LoRA 的 LoRA 参数记忆，以及 Hyperbolic Multimodal CL，共同显示 LoRA/参数记忆正在成为多模态持续学习和高效推理的交叉入口。

## 优先精读

1. **JEPA-WAM**：将联合嵌入世界模型、VLA 策略与隐空间预测统一，直接回应“视频生成世界模型部署成本过高”的痛点，是 VLA 方向的方法级新进展。
2. **RecoverFly**：以失败感知强化学习后训练提升 UAV-VLA 可靠性，横跨具身导航与 VLA，且与“执行反馈驱动学习”这一跨方向趋势高度相关。
3. **DistillCache**：KV cache 是长上下文 LLM 推理的核心瓶颈，KL 引导的自适应淘汰比现有启发式方法更通用，值得作为推理优化方向的基线更新。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*