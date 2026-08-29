# 实验室研究方向 Radar 2026-08-29

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 0 篇新文献 + 44 篇过去14天内已出现 | 生成时间：2026-08-29 03:26 UTC

---

# 研究方向 Radar（2026-08-29）

## 今日总览

- **LLM Agent 与多智能体 / LLM Agent 工程**：今日暂无新论文。过去14天已见多条动态，集中在 Agent 数据生成、可审计架构、工具调用安全与任务基准。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：今日暂无新论文。过去14天相关进展围绕推理时前缀管理、弱到强泛化、循环变换器缩放和机器人语言推理。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文；过去14天也无高相关论文。
- **具身智能 / 视觉-语言-动作模型**：今日暂无新论文。过去14天 VLA 论文密集，方向涉及流式时序建模、动作解码加速、多臂协作与失败恢复。
- **具身智能 / 具身导航**：今日暂无新论文。过去14天有实时零样本目标导航、玻璃表面检测、LiDAR 标注与场景重排规划动态。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：今日暂无新论文。过去14天相关方法多与多模态视觉 token 剪枝重叠，本方向不独立单列。
- **模型压缩与持续学习 / 多模态大模型剪枝**：今日暂无新论文。过去14天有视觉 token 剪枝和快速 VLM 推理的统一范式。
- **模型压缩与持续学习 / 持续学习**：今日暂无新论文。过去14天覆盖任务无关持续学习、LoRA 子空间演化、QLoRA 获取-保持权衡等。
- **视觉感知 / 事件相机视觉感知**：今日暂无新论文。过去14天有事件流无监督目标发现和神经形态分类基准数据集。
- **视觉感知 / 3D 点云视觉感知**：今日暂无新论文。过去14天有单阶段 3D 检测任务感知预测方法。
- **视觉感知 / 3D 点云感知与跟踪**：今日暂无新论文；过去14天也无高相关候选。

## LLM Agent 与多智能体

### LLM Agent 工程

#### 🔁 **【过去14天内已出现】** [What Makes Good Agentic Data? An ACE Lens on Data Generation for LLM Agents](http://arxiv.org/abs/2608.27260v1)
Zeng 等 | 2026-08-27 | 提出 ACE 视角，强调 agentic data 需保持环境-任务-交互-成功信号一致性并产出有用经验；直接为 LLM Agent 数据工程提供原则。

#### 🔁 **【过去14天内已出现】** [Persona-Execution Separation: An Architecture Pattern for Evolving LLM Agents under Execution Audit](http://arxiv.org/abs/2608.27427v1)
Xi | 2026-08-27 | 提出人格-执行分离架构，让人设自由演化而执行保持有状态可审计；为受治理组织中的 Agent 提供架构模式。

#### 🔁 **【过去14天内已出现】** [TraceBench: Controlled Evaluation of LLM Agents for Time-Series Root-Cause Attribution](http://arxiv.org/abs/2608.27182v1)
Bendinelli 等 | 2026-08-27 | 构建受控仿真基准，系统评估 LLM agent 在时序异常检测和根因归因上的能力；补齐 Agent 在系统诊断任务上的评测缺口。

#### 🔁 **【过去14天内已出现】** [FaulT-Bench: Towards Benchmarking Network Troubleshooting LLM Agents under Unreliable User Tickets](http://arxiv.org/abs/2608.27021v1)
Tseng 等 | 2026-08-27 | 提出含不可靠工单和“故障不一定存在”的网络排障 Agent 基准；使 Agent 评测更贴近真实运维条件。

#### 🔁 **【过去14天内已出现】** [When Tool Outputs Become Commands: Separating Action Induction from Runtime Authorization in Tool-Augmented LLM Agents](http://arxiv.org/abs/2608.27146v1)
Guo 等 | 2026-08-27 | 区分动作归纳与运行时授权，防止工具输出直接成为命令；为工具增强 Agent 设计权限边界。

#### 🔁 **【过去14天内已出现】** [Safety Does Not Compose: Non-Decaying Loop State for Autonomous LLM Agents](http://arxiv.org/abs/2608.27141v1)
Wu 等 | 2026-08-27 | 指出自主 Agent 循环中安全属性不组合，非衰减循环状态使长期无人看管运行存在风险；为 Agent 长期运行安全提供重要警示。

#### 🔁 **【过去14天内已出现】** [PLCBench: Can Autonomous LLM Agents Turn PLC Access into Sustained Physical Impact?](http://arxiv.org/abs/2608.26882v1)
Zhou 等 | 2026-08-27 | 提出基准测试 LLM agent 能否将 PLC 网络访问转化为持续物理影响；评估 Agent 对工控系统的实际攻击威胁。

#### 🔁 **【过去14天内已出现】** [BekchiAI: Measuring, Observing, and Controlling LLM Agents in One Click](http://arxiv.org/abs/2608.26867v1)
Toruk | 2026-08-27 | 提出一键测量、观察和控制 LLM Agent 的框架；补足 accuracy-only leaderboard 缺少的 agentic 技能评估。

### Agent 测试时扩展与自我改进

#### 🔁 **【过去14天内已出现】** [Prefix Sliding for efficient test-time scaling](http://arxiv.org/abs/2608.26070v1)
Muennighoff 等 | 2026-08-26 | 提出滑动前缀机制管理长推理轨迹，降低测试时扩展的内存与成本；直接优化 test-time scaling 的资源效率。

#### 🔁 **【过去14天内已出现】** [CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes](http://arxiv.org/abs/2608.27455v1)
Wu 等 | 2026-08-27 | 用小模型失败模式作为上下文信号，在推理时实现弱到强泛化且不依赖外部验证；为模型自我改进提供新范式。

#### 🔁 **【过去14天内已出现】** [Dynamical phase selection controls compute scaling in looped transformers](http://arxiv.org/abs/2608.26556v1)
Kim | 2026-08-27 | 发现相同架构与精度的 looped transformer 可因动力学相选择呈现不同推理计算缩放；为测试时计算行为提供动力学解释。

#### 🔁 **【过去14天内已出现】** [$R^3$: Training Robots to Reason in Natural Language via Reinforcement Learning](http://arxiv.org/abs/2608.26053v1)
Wu 等 | 2026-08-26 | 用强化学习训练机器人进行自然语言推理，以增加长程任务的测试时计算；将测试时扩展引入机器人动作生成。

## 具身智能

### 视觉-语言-动作模型

#### 🔁 **【过去14天内已出现】** [StreamPI: Streaming Multimodal Temporal Modeling for Vision-Language-Action Models](http://arxiv.org/abs/2608.26067v1)
Liu 等 | 2026-08-26 | 提出流式多模态时序建模，让 VLA 保留历史观测并建立精确空间感知；补足 VLA 单帧范式的时序短板。

#### 🔁 **【过去14天内已出现】** [FlashVLA: Streaming Action Decoding for Fast and Asynchronous VLA Inference](http://arxiv.org/abs/2608.27384v1)
Li 等 | 2026-08-27 | 提出流式动作解码，缓解 flow-matching VLA 的推理延迟与异步执行不稳；直击 VLA 部署中的推理瓶颈。

#### 🔁 **【过去14天内已出现】** [MA-VLA: Multi-Arm Vision-Language-Action Model for Collaboration and Compositional Generalization](http://arxiv.org/abs/2608.25864v1)
Zhang 等 | 2026-08-26 | 面向多臂协作设计 VLA，显式支持臂级任务分配与组合泛化；把 VLA 从单臂扩展到多臂协作。

#### 🔁 **【过去14天内已出现】** [One Policy, Many Embodiments: Unified Camera-Centric Action Geometry Pre-training for Heterogeneous Embodied Manipulation](http://arxiv.org/abs/2608.26058v1)
小米具身智能团队等 | 2026-08-26 | 统一相机中心动作几何预训练，解决异构形态/相机/动作空间导致的 VLA 缩放困难；为跨形态 VLA 预训练提供统一表征。

#### 🔁 **【过去14天内已出现】** [TacForcing: Streaming Action Generation with Execution-Time Tactile Feedback](http://arxiv.org/abs/2608.25798v1)
Zhou 等 | 2026-08-26 | 在动作块执行期间注入触觉反馈，避免 VLA 触觉条件在长动作块中过期；提升接触丰富操作的在线反馈能力。

#### 🔁 **【过去14天内已出现】** [FLARE: A Failure-Aware Framework for Autonomous Correction and Recovery in Visual-Language Robotic Manipulation](http://arxiv.org/abs/2608.26645v1)
Zhao 等 | 2026-08-27 | 提出失败感知框架，使 VLA 能从失败中自主纠正和恢复；增强 VLA 在长程操作中的鲁棒性。

#### 🔁 **【过去14天内已出现】** [LM-X: Explainable Action Modeling with Progress, Event, and Uncertainty Prediction for Generalist Robot Manipulation](http://arxiv.org/abs/2608.25757v2)
Lou 等 | 2026-08-26 | 让 VLA 同时预测任务进度、事件和不确定性，提升动作建模可解释性；为通用 VLA 提供可解释动作输出。

#### 🔁 **【过去14天内已出现】** [GRAFT: Grounded and Efficient Online Reinforcement Adaptation for Fine-Grained Robot Manipulation](http://arxiv.org/abs/2608.27079v1)
Qiu 等 | 2026-08-27 | 用 grounded 奖励做在线强化学习适配，使 VLA 适应依赖细微视觉线索的细粒度操作；推动 VLA 在线适应到生物医学等高精度任务。

#### 🔁 **【过去14天内已出现】** [TrapVLA: Trapping Vision-Language-Action Models in Configured Failure Modes](http://arxiv.org/abs/2608.26578v1)
Liu 等 | 2026-08-27 | 提出针对 VLA 的后门攻击任务，用文本触发器让 VLA 进入配置好的失败模式；揭示 VLA 安全对齐的脆弱性。

### 具身导航

#### 🔁 **【过去14天内已出现】** [RTNav: Towards Real-Time Zero-Shot Object Navigation](http://arxiv.org/abs/2608.26496v1)
Lee 等 | 2026-08-27 | 面向实时零样本目标导航，降低视觉语言基础模型推理延迟；直接解决具身导航连续运行中的延迟问题。

#### 🔁 **【过去14天内已出现】** [Glass Surface Detection Grounded in 3D Visual Geometry](http://arxiv.org/abs/2608.26752v1)
Lu 等 | 2026-08-27 | 用 3D 视觉几何检测玻璃表面，克服 2D 外观在透明/反射场景中的失效；为导航中的透明障碍物感知提供几何 grounding。

#### 🔁 **【过去14天内已出现】** [Bootstrapping a 4D LiDAR Annotation Tool from Video Foundation Models](http://arxiv.org/abs/2608.25418v1)
Kim 等 | 2026-08-26 | 借助视频基础模型为 4D LiDAR 分割生成时序一致伪标签；缓解导航感知数据稀缺瓶颈。

#### 🔁 **【过去14天内已出现】** [Embodied Scene Rearrangement Planning](http://arxiv.org/abs/2608.27371v1)
Chen 等 | 2026-08-27 | 提出具身场景重排规划任务，agent 仅凭 egocentric 观测和俯视布局完成家具重排；将具身空间智能从导航扩展到场景重排规划。

## 模型压缩与持续学习

### 多模态大模型剪枝

#### 🔁 **【过去14天内已出现】** [Multi-Image Visual Token Pruning in Large Visual Language Models](http://arxiv.org/abs/2608.26806v1)
Zhang 等 | 2026-08-27 | 面向多图输入提出视觉 token 剪枝，缓解 LVLM 计算和上下文限制；直接贡献多模态大模型视觉 token 压缩。

#### 🔁 **【过去14天内已出现】** [PACE: A Unified Condense-and-Extract Paradigm for Fast VLM Inference](http://arxiv.org/abs/2608.27206v1)
Liu 等 | 2026-08-27 | 提出 condense-and-extract 统一范式，在视觉编码器后与 LLM 层间联合剪枝，加速 VLM 推理；同时支持多模态剪枝与推理优化。

### 持续学习

#### 🔁 **【过去14天内已出现】** [Unifying Detection and Adaptation in Task-Free Continual Learning](http://arxiv.org/abs/2608.27070v1)
Han 等 | 2026-08-27 | 将任务边界检测与参数适配统一到 task-free 持续学习中；为 LLM 下游持续学习去除任务边界依赖。

#### 🔁 **【过去14天内已出现】** [Geo-LoRA: Geometry-Aware Subspace Evolution for Low-Rank Adaptation in Continual Learning](http://arxiv.org/abs/2608.26960v1)
Feng | 2026-08-27 | 用几何感知子空间演化约束 LoRA 低秩更新，防止任务更新坍缩到旧方向；解决 rehearsal-free class-incremental LoRA 的几何失控。

#### 🔁 **【过去14天内已出现】** [Parameter Efficient Continual Learning for Sparse Event-Based Transformers](http://arxiv.org/abs/2608.26720v1)
Nagabhushana 等 | 2026-08-27 | 在稀疏事件 Transformer 上做参数高效持续学习，满足严格内存和能量约束；将 CL 方法扩展到事件相机与边缘智能。

#### 🔁 **【过去14天内已出现】** [Continually learning neural-operator surrogate for three-dimensional airborne electromagnetic Bayesian inversion](http://arxiv.org/abs/2608.25932v1)
Chung 等 | 2026-08-26 | 用持续学习训练神经算子代理，加速三维航空电磁贝叶斯反演的海量前向求解；展示持续学习在科学计算代理模型中的应用。

#### 🔁 **【过去14天内已出现】** [Learning New Facts with QLoRA: An Acquisition-Retention Frontier](http://arxiv.org/abs/2608.25677v2)
Zheng 等 | 2026-08-26 | 在受控基准上绘制 QLoRA 的获取-保持前沿，表明适配器容量决定事实学习与旧能力保留的权衡；量化低秩适配在持续知识更新中的能力边界。

## 视觉感知

### 事件相机视觉感知

#### 🔁 **【过去14天内已出现】** [ANTShapes Benchmarking Datasets for Event-Based Neuromorphic Object Classification](http://arxiv.org/abs/2608.27150v1)
Middleton 等 | 2026-08-27 | 提出事件相机神经形态物体分类基准数据集 ANTShapes；为事件相机感知提供标准化评测。

#### 🔁 **【过去14天内已出现】** [Real-time Unsupervised Object Discovery from Asynchronous Event Streams](http://arxiv.org/abs/2608.26644v1)
Shenwai 等 | 2026-08-27 | 提出轻量、免训练的时空聚类框架，从异步事件流实时发现运动物体；实现事件流低延迟目标发现。

### 3D 点云视觉感知

#### 🔁 **【过去14天内已出现】** [TADP: Task-Aware Deformable Prediction for Single-Stage 3D Object Detection](http://arxiv.org/abs/2608.27282v1)
Wang 等 | 2026-08-27 | 提出任务感知可变形预测，让单阶段 3D 检测器不同任务使用不同特征；提升点云单阶段检测的任务自适应能力。

## 跨方向信号

- **测试时扩展正在向右迁移**：从 LLM 推理扩展到机器人语言推理（R^3）和循环变换器（Dynamical phase selection），表明“多花测试时计算”正成为通用智能策略。
- **Agent 安全与可治理性成为工程主线索**：工具输出命令化、长期循环安全、PLCBench、PES 等共同指向从“能力评测”转向“运行时安全与审计”。
- **VLA 系统向流式/异步执行演进**：StreamPI、FlashVLA、TacForcing 都在解决时序建模、推理延迟和触觉反馈过期问题，部署效率是当前 VLA 落地的共同瓶颈。
- **参数高效适配横跨压缩与 CL**：Geo-LoRA、QLoRA、PACE、Multi-Image Visual Token Pruning 都在用低秩或剪枝方式控制更新成本、遗忘和冗余，形成交叉方法簇。
- **非传统感知数据瓶颈凸显**：ANTShapes、Bootstrapping 4D LiDAR、事件流无监督发现显示，事件相机和 LiDAR 正从“感知模型”转向“数据生成与标注”瓶颈。

## 优先精读

#### **Safety Does Not Compose: Non-Decaying Loop State for Autonomous LLM Agents** — 直接挑战 Agent 安全组合性，对长期运行的 LLM Agent 系统设计具有重要警示意义。
#### **FlashVLA: Streaming Action Decoding for Fast and Asynchronous VLA Inference** — 聚焦 VLA 高推理延迟和异步执行稳定性，是 VLA 从仿真走向真实部署的关键瓶颈。
#### **What Makes Good Agentic Data? An ACE Lens on Data Generation for LLM Agents** — Agentic data 是 LLM Agent 能力上限的基础，该文提供的数据一致性视角可指导后续数据工程与研究。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*