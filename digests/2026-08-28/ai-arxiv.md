# 实验室研究方向 Radar 2026-08-28

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 35 篇新文献 + 12 篇过去14天内已出现 | 生成时间：2026-08-28 05:54 UTC

---

## 今日总览

- **LLM Agent 工程**：今日新论文集中于 Agent 数据生成、运行时架构、安全与评测基准，体现从“能做任务”向“可控、可测、可审计”转型。
- **Agent 测试时扩展与自我改进**：新论文覆盖推理时弱到强泛化与循环 Transformer 计算相变；重复文献聚焦长思维链 KV 缓存优化与机器人语言推理。
- **LLM Agent Society**：今日暂无新论文。
- **视觉-语言-动作模型**：今日新论文聚焦低延迟异步解码、失败纠正、在线适配、长程执行历史建模，并出现后门安全与轻量策略探索，VLA 工程化趋势明显。
- **具身导航**：今日新论文覆盖实时零样本目标导航、玻璃表面 3D 几何检测、具身场景重排任务，构成“感知—导航—规划”链路。
- **LLM 剪枝与推理优化**：今日无高相关新论文；唯一新文献 PACE 已归入多模态大模型剪枝，另有 1 篇弱相关重复文献。
- **多模态大模型剪枝**：今日新论文继续围绕视觉 token 剪枝与“压缩-提取”范式，以降低 VLM 推理开销为核心目标。
- **持续学习**：今日新论文以 LoRA/参数高效适配为主线，兼顾任务无关检测-适配与主权 AI 持续学习；重复文献涉及 QLoRA 容量权衡与代理模型持续学习。
- **事件相机视觉感知**：今日 3 篇新论文，覆盖事件流持续学习、神经形态分类数据集、实时无监督目标发现。
- **3D 点云视觉感知**：今日 1 篇新论文，提出任务感知形变预测改进单阶段 3D 目标检测。
- **3D 点云感知与跟踪**：今日暂无新论文。

## LLM Agent 与多智能体

### LLM Agent 工程

#### [What Makes Good Agentic Data? An ACE Lens on Data Generation for LLM Agents](http://arxiv.org/abs/2608.27260v1)
Zeng et al., 2026-08-27. 提出 ACE 准则，强调环境-任务-交互-成功信号一致性。为 Agent 数据工程提供评判框架。

#### [Persona-Execution Separation: An Architecture Pattern for Evolving LLM Agents under Execution Audit](http://arxiv.org/abs/2608.27427v1)
Xi, 2026-08-27. 提出人格与执行分离的 PES 架构。为可审计 Agent 提供演化与追溯兼得的方案。

#### [BekchiAI: Measuring, Observing, and Controlling LLM Agents in One Click](http://arxiv.org/abs/2608.26867v1)
Toruk, 2026-08-27. 一键测量、观察和控制 Agent 技能。补足 Agent 工程的可观测性与可控性缺口。

#### [TraceBench: Controlled Evaluation of LLM Agents for Time-Series Root-Cause Attribution](http://arxiv.org/abs/2608.27182v1)
Bendinelli et al., 2026-08-27. 构建受控时间序列根因归因基准。为诊断类 Agent 提供标准化评测。

#### [FaulT-Bench: Towards Benchmarking Network Troubleshooting LLM Agents under Unreliable User Tickets](http://arxiv.org/abs/2608.27021v1)
Tseng et al., 2026-08-27. 发布 200 个含不可靠工单的网络故障场景。更贴近真实网络运维 Agent 评测。

#### [PLCBench: Can Autonomous LLM Agents Turn PLC Access into Sustained Physical Impact?](http://arxiv.org/abs/2608.26882v1)
Zhou et al., 2026-08-27. 评估 Agent 将 PLC 访问转为持续物理影响的能力。刻画工控场景的物理攻击风险。

#### [When Tool Outputs Become Commands: Separating Action Induction from Runtime Authorization in Tool-Augmented LLM Agents](http://arxiv.org/abs/2608.27146v1)
Guo et al., 2026-08-27. 提出工具输出“命令化”问题与授权分离原则。为工具调用安全提供设计参考。

#### [Safety Does Not Compose: Non-Decaying Loop State for Autonomous LLM Agents](http://arxiv.org/abs/2608.27141v1)
Wu et al., 2026-08-27. 指出自主循环 Agent 的安全机制不随迭代组合保持。揭示长期运行安全构成性风险。

#### [Calibrated Enough to Know, Not Calibrated to Act: Fabricated Evidence Makes LLM Agents Commit to the Unknowable](http://arxiv.org/abs/2608.27167v1)
Aggarwal, 2026-08-27. 实证表明伪造证据使 Agent 对不可知问题更易做出方向性承诺。警告证据幻觉对决策的误导。

#### [DSA: Evidence-Aware LLM-Agent Orchestration for Multi-Market Stock Research](http://arxiv.org/abs/2608.26990v1)
Zhu et al., 2026-08-27. 提出证据感知编排，先汇集异质证据再生成报告。为金融 Agent 提供证据链可控流程。

### Agent 测试时扩展与自我改进

#### [CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes](http://arxiv.org/abs/2608.27455v1)
Wu et al., 2026-08-27. 用小模型失败模式实现推理时弱到强泛化。免外部验证的自我改进新思路。

#### [Dynamical phase selection controls compute scaling in looped transformers](http://arxiv.org/abs/2608.26556v1)
Kim, 2026-08-27. 循环 Transformer 相同精度下呈现不同推理动力学。为测试时计算规模提供物理视角。

#### 🔁 **【过去14天内已出现】** [Prefix Sliding for efficient test-time scaling](http://arxiv.org/abs/2608.26070v1)
Muennighoff et al., 2026-08-26. 滑动前缀降低长思维链 KV 缓存。提升测试时扩展效率。

🔁 **【过去14天内已出现】** [R^3: Training Robots to Reason in Natural Language via Reinforcement Learning](http://arxiv.org/abs/2608.26053v1)
Wu et al., 2026-08-26. 用强化学习训练机器人操作前进行语言推理。将测试时扩展引入机器人决策。

## 具身智能

### 视觉-语言-动作模型

#### [FlashVLA: Streaming Action Decoding for Fast and Asynchronous VLA Inference](http://arxiv.org/abs/2608.27384v1)
Li et al., 2026-08-27. 提出流式动作解码，降低 flow-matching VLA 推理延迟。直击 VLA 实时部署瓶颈。

#### [TrapVLA: Trapping Vision-Language-Action Models in Configured Failure Modes](http://arxiv.org/abs/2608.26578v1)
Liu et al., 2026-08-27. 首次提出针对 VLA 的可配置失败陷阱后门攻击。暴露 VLA 安全新风险面。

#### [FLARE: A Failure-Aware Framework for Autonomous Correction and Recovery in Visual-Language Robotic Manipulation](http://arxiv.org/abs/2608.26645v1)
Zhao et al., 2026-08-27. 使 VLA 在操作中自主纠正与恢复。弥补 VLA 依赖“完美轨迹”训练的脆弱性。

#### [TemporalFlow-VLA: Learning Physically Grounded Execution History for Long-Horizon Robot Manipulation](http://arxiv.org/abs/2608.26821v1)
Yang et al., 2026-08-27. 建模物理执行历史以区分相似视觉状态。改善 VLA 长程操作表现。

#### [GRAFT: Grounded and Efficient Online Reinforcement Adaptation for Fine-Grained Robot Manipulation](http://arxiv.org/abs/2608.27079v1)
Qiu et al., 2026-08-27. 在线强化适配 VLA 至细粒度生物医学任务。提升高精度任务的适配效率。

#### [PredVLA: A Sub-Million-Parameter Predictive-Coding Policy for Robot Manipulation](http://arxiv.org/abs/2608.26673v1)
Sawada et al., 2026-08-27. 亚百万参数预测编码策略。挑战 VLA 对模型规模的依赖。

#### [Decoupling Planning and Control for Instructable Agents](http://arxiv.org/abs/2608.26788v1)
Tang et al., 2026-08-27. 解耦高层规划与低层控制。为 VLA 系统提供模块化工程路径。

#### [4DSynth: Controllable Procedural World Synthesis for Dynamic Embodied Simulation](http://arxiv.org/abs/2608.26947v1)
Qi et al., 2026-08-27. 生成动态可交互 4D 仿真世界。为 VLA 训练提供规模化仿真数据源。

### 具身导航

#### [RTNav: Towards Real-Time Zero-Shot Object Navigation](http://arxiv.org/abs/2608.26496v1)
Lee et al., 2026-08-27. 优化视觉-语言模型推理延迟，支持实时零样本目标导航。直接解决导航连续运行的时延问题。

#### [Glass Surface Detection Grounded in 3D Visual Geometry](http://arxiv.org/abs/2608.26752v1)
Lu et al., 2026-08-27. 利用 3D 几何线索检测玻璃表面。增强导航中透明障碍感知。

#### [Embodied Scene Rearrangement Planning](http://arxiv.org/abs/2608.27371v1)
Chen et al., 2026-08-27. 提出第一人称观测下的家具重排规划任务。扩展具身导航/规划任务边界。

#### 🔁 **【过去14天内已出现】** [Bootstrapping a 4D LiDAR Annotation Tool from Video Foundation Models](http://arxiv.org/abs/2608.25418v1)
Kim et al., 2026-08-26. 用视频基础模型生成 4D LiDAR 时间一致标签。缓解导航感知标注瓶颈。

## 模型压缩与持续学习

### 多模态大模型剪枝

#### [Multi-Image Visual Token Pruning in Large Visual Language Models](http://arxiv.org/abs/2608.26806v1)
Zhang et al., 2026-08-27. 面向多图序列的视觉 token 剪枝。缓解 LVLM 多图场景上下文压力。

#### [PACE: A Unified Condense-and-Extract Paradigm for Fast VLM Inference](http://arxiv.org/abs/2608.27206v1)
Liu et al., 2026-08-27. 统一“压缩-提取”范式，覆盖视觉编码器前后 token。为 VLM 推理加速提供系统化框架。

#### 🔁 **【过去14天内已出现】** [Not All Attention Heads Contribute to Critical Visual Token Selection: Head-Aware Pruning Matters More](http://arxiv.org/abs/2608.25332v1)
Ma et al., 2026-08-26. 发现仅部分注意力头决定关键视觉 token。提出头感知剪枝提升精度。

### 持续学习

#### [Geo-LoRA: Geometry-Aware Subspace Evolution for Low-Rank Adaptation in Continual Learning](http://arxiv.org/abs/2608.26960v1)
Feng, 2026-08-27. 几何感知子空间演化控制 LoRA 更新方向。解决 CIL 中 LoRA 子空间坍缩问题。

#### [Unifying Detection and Adaptation in Task-Free Continual Learning](http://arxiv.org/abs/2608.27070v1)
Han et al., 2026-08-27. 统一任务边界检测与适配。摆脱 LLM 持续学习对显式任务边界的依赖。

#### [Fine-Tuning of Transformer models with Frames](http://arxiv.org/abs/2608.26430v1)
Adepu et al., 2026-08-26. 用“帧”组织可训练参数，降低 LoRA 类方法内存开销。为持续微调提供更省内存参数化。

#### [FAN-LoRA: A Fourier-Adaptive Nonlinear Low-Rank Adaptor for Medical Foundation Model Domain Adaptation](http://arxiv.org/abs/2608.26531v1)
Liu et al., 2026-08-27. 傅里叶自适应非线性 LoRA，改善 SAM 医学域迁移。将低秩适配用于跨域持续学习。

#### [Thomson: Continual Learning of Frontier Models for SovereignAI](http://arxiv.org/abs/2608.27147v1)
Chen et al., 2026-08-27. 面向主权 AI 的前沿模型持续学习框架。探索治理视角下模型主权与持续更新。

#### 🔁 **【过去14天内已出现】** [Learning New Facts with QLoRA: An Acquisition-Retention Frontier](http://arxiv.org/abs/2608.25677v2)
Zheng et al., 2026-08-26. 揭示 QLoRA 获取-保持能力由适配器容量决定。刻画参数高效持续学习的容量边界。

#### 🔁 **【过去14天内已出现】** [Continually learning neural-operator surrogate for three-dimensional airborne electromagnetic Bayesian inversion](http://arxiv.org/abs/2608.25932v1)
Chung et al., 2026-08-26. 持续学习神经算子代理加速贝叶斯反演。展示持续学习在地球物理大计算中的价值。

#### 🔁 **【过去14天内已出现】** [CrossMambaTuning: Synergistic Spatial and Cross-Layer Adaptation for Machine Vision Compression](http://arxiv.org/abs/2608.25568v1)
Xiong et al., 2026-08-26. 跨层协同适配预训练压缩模型到视觉任务。以持续适配降低部署成本。

## 视觉感知

### 事件相机视觉感知

#### [Real-time Unsupervised Object Discovery from Asynchronous Event Streams](http://arxiv.org/abs/2608.26644v1)
Shenwai et al., 2026-08-27. 免训练时空聚类发现运动目标。为事件相机提供实时无监督感知。

#### [ANTShapes Benchmarking Datasets for Event-Based Neuromorphic Object Classification](http://arxiv.org/abs/2608.27150v1)
Middleton et al., 2026-08-27. 发布事件相机神经形态分类数据集。为事件流分类提供标准化评测。

#### [Parameter Efficient Continual Learning for Sparse Event-Based Transformers](http://arxiv.org/abs/2608.26720v1)
Nagabhushana et al., 2026-08-27. 面向事件 Transformer 的参数高效持续学习。连接事件感知与持续学习两大方向。

### 3D 点云视觉感知

#### [TADP: Task-Aware Deformable Prediction for Single-Stage 3D Object Detection](http://arxiv.org/abs/2608.27282v1)
Wang et al., 2026-08-27. 任务感知形变预测，为不同检测子任务生成自适应特征。缓解单阶段 3D 检测的多任务特征冲突。

## 跨方向信号

1. **视觉 token 剪枝成为多模态高效推理主线**：Multi-Image Visual Token Pruning 与 PACE 等不再只做后编码剪枝，而是统一“压缩-提取”流程。
2. **LLM Agent 研究集中转向安全与可控工程**：工具输出命令化、循环状态安全、PLCBench 物理影响等共同指向自主性增强后的审计与授权需求。
3. **VLA 从模型走向系统**：FlashVLA、FLARE、GRAFT 分别从延迟、失败恢复、在线适配切入，推动 VLA 面向动态环境落地。
4. **持续学习与 PEFT/LoRA 深度耦合**：Geo-LoRA、FAN-LoRA、QLoRA 等均在低秩适配器的几何控制与容量权衡上做文章。
5. **测试时扩展向 Agent 与机器人决策渗透**：CritICL、Prefix Sliding、R^3 显示“更多测试时计算”正从纯语言推理扩展到跨模态动作决策。

## 优先精读

1. **PACE** — 提出统一的 condense-and-extract 范式，连接视觉 token 剪枝与 VLM 推理优化两个方向，工程价值与普适性最强。
2. **What Makes Good Agentic Data?** — 给出 Agent 数据生成的原则性框架（ACE lens），对 LLM Agent 数据工程与评测设计有直接指导意义。
3. **FlashVLA** — 直接针对 VLA 部署中的流式动作解码与异步执行瓶颈，是 VLA 走向实时机器人应用的关键工程问题。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*