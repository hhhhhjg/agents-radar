# 实验室研究方向 Radar 2026-09-05

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 27 篇新文献 + 13 篇过去14天内已出现 | 生成时间：2026-09-04 23:38 UTC

---

# 研究方向 Radar：2026-09-05

## 今日总览

- **LLM Agent 工程**：今日有 10 篇新论文，集中在工具型 Agent 运行效率、记忆一致性、策略优化、生命周期安全、知识冲突评测与场景化工程基座，方向正从“能否完成任务”转向“能否被可靠、安全地长期运行”。
- **Agent 测试时扩展与自我改进**：今日有 3 篇新论文，覆盖对话修订传播中的低成本测试时计算、非增量学习器自博弈、以及表格上下文学习；与 Agent 测试时自我优化直接相关。
- **LLM Agent Society**：今日暂无新论文。
- **视觉-语言-动作模型**：今日有 10 篇新论文，清晰的子趋势是紧凑模型容量重估、多模态解纠缠、世界模型引导后训练、大规模双人操作数据与接触力感知。
- **具身导航**：今日有 1 篇新论文，针对 VLN-CE 的宏观动作与拓扑图闭环强化学习；过去 14 天中已有 LookStep、MS-MEM 等相关工作。
- **LLM 剪枝与推理优化**：今日新论文以 TAP-Path 和 CoverPruner 为代表，将推理压缩从权重剪枝进一步推向任务自适应、数据自适应的结构化与 token 稀疏化。
- **多模态大模型剪枝**：CoverPruner 用覆盖优化重新定义视觉 token 取舍，是值得关注的 training-free 剪枝进路；ShallowStream 继续补充流式视频中的“先浅索引、后深回答”思路。
- **持续学习**：今日新论文包括 task-free 持续异常检测与环境-智能体共同演化；旧文献强调多 Agent 技能与模型参数的持续优化。
- **事件相机视觉感知**：今日暂无新论文。
- **3D 点云视觉感知**：今日暂无新论文；但过去 14 天内已有 Stereo 4D Radar 一篇。
- **3D 点云感知与跟踪**：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [Speculative Macro Commit for Faster Tool-Using Agents](http://arxiv.org/abs/2609.03236v1)
Zeyu Liu et al. | 2026-09-03 | 核心：通过两阶段“推测性宏提交”减少工具型 Agent 在动作-观察串行回合中的等待开销。 | 关联：直接提升 tool-use Agent 的端到端工程效率。

#### [TIGPO: Temporal Instance-Graph Policy Optimization for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.03383v1)
Jinwei Gan | 2026-09-03 | 核心：跨策略更新构建时序实例图，改善长程任务的信用分配。 | 关联：为长程 LLM Agent 策略优化提供图基学习方法。

#### [Fresh Memory, Stale Plans: Dependency-Scoped Validation for Distributed LLM-Agent Memory](http://arxiv.org/abs/2609.03340v1)
Evan Chen et al. | 2026-09-03 | 核心：提出面向依赖范围的校验，解决分布式 Agent 读到的记忆已更新但计划仍过期的问题。 | 关联：针对多 Agent 共享记忆与规划一致性的工程缺口。

#### [A Blind Trust, the Bloody Thrust: When Attacker-Controlled Hook Updates Steer AI Agent Harnesses towards Malicious Behaviors](http://arxiv.org/abs/2609.03884v1)
Pengxun Li et al. | 2026-09-03 | 核心：识别 Agent harness 生命周期钩子可被攻击者利用并劫持宿主行为的攻击面。 | 关联：指出了 Agent 工程化部署中未被充分重视的安全问题。

#### [KC-Bench: A Dynamic Interactive Benchmark for Evaluating Knowledge Conflicts in LLM Agents](http://arxiv.org/abs/2609.03588v1)
Yaxing Lyu et al. | 2026-09-03 | 核心：构建多轮动态交互基准，测查 Agent 在工具观测、参数知识与用户指令冲突时的表现。 | 关联：为 Agent 评测与知识冲突决策提供标准化工具。

#### [SENTINEL-RL: Offloading Topological Reasoning from LLM Agents in the Security Operations Center](http://arxiv.org/abs/2609.04159v1)
Uday Vallabhaneni et al. | 2026-09-03 | 核心：将安全运营中心的拓扑推理从 LLM Agent 卸载到专用模块，缓解上下文窗口限制。 | 关联：展示 Agent 工程中“该由 LLM 做什么、不该由 LLM 做什么”的职责切分思路。

#### [What Do CAE Simulation Agents Really Need Beyond a Generic Harness?](http://arxiv.org/abs/2609.03718v1)
Jiasheng Shi et al. | 2026-09-03 | 核心：分析 CAE 仿真场景下通用 Agent 框架的缺口。 | 关联：为领域专用 Agent harness 的工程设计提供经验证据。

### Agent 测试时扩展与自我改进

#### [What Else Needs Fixing? Exploring Cost-Effective Test-Time Compute for Revision Propagation in Artifacts Generated Through Conversation](http://arxiv.org/abs/2609.03254v1)
Daisuke Kikuta | 2026-09-03 | 核心：探索如何在对话生成产物的修订传播中用更低成本决定“还需要修什么”。 | 关联：为 Agent 在多轮交互中的测试时扩展提供成本控制方法。

#### [Local Updates, Global Learning (LUGL): Playing Games with non-incremental Learners](http://arxiv.org/abs/2609.03660v1)
David Milec et al. | 2026-09-03 | 核心：通过局部子集更新使 LightGBM 等非增量学习器可用于自博弈 RL。 | 关联：扩展了非神经网络模型在在线自博弈与持续策略更新中的可用性。

#### [Xiaomi-TabLDM: A Tabular Foundation Model Technical Report](http://arxiv.org/abs/2609.03880v1)
Xiaomi-TabLDM Team et al. | 2026-09-03 | 核心：基于结构因果模型合成数据训练表格大模型，通过上下文学习完成分类与回归。 | 关联：体现测试时上下文适应在表格任务中的潜力。

#### 🔁 **【过去14天内已出现】** [Post-Training Language Models for Gold-Medal Performance in Coding Competitions](http://arxiv.org/abs/2609.02849v1)
Aleksander Ficek et al. | 2026-09-02 | 核心：通过大规模题目策展与合成推理轨迹后训练，使模型达到竞赛级编程水平。 | 关联：可作为代码类 Agent 测试时自我改进的端到端参考。

## 具身智能

### 视觉-语言-动作模型

#### [MINERVA: How Small Can a Manipulation Policy Be and Still Solve LIBERO?](http://arxiv.org/abs/2609.03715v1)
Kohei Sendai et al. | 2026-09-03 | 核心：用极小 visuomotor 策略重新评估 LIBERO 基准的容量需求。 | 关联：直接质疑 VLA“越大越好”的默认假设，指向紧凑策略设计。

#### [Sensing Which Modality Matters: Evidence-Gated Regularization for Robust VLA Policies](http://arxiv.org/abs/2609.03142v1)
Yue Yang et al. | 2026-09-03 | 核心：提出证据门控正则化以缓解 VLA 中的模态纠缠。 | 关联：针对多模态 VLA 在真实遮挡与干扰下的鲁棒性核心问题。

#### [WISE: World-model-guided Imagination Scheduling for Efficient Post-training of Vision-Language-Action Models](http://arxiv.org/abs/2609.03681v1)
Chenhao Zhang et al. | 2026-09-03 | 核心：用世界模型想象调度减少 VLA 后训练对昂贵真实交互的依赖。 | 关联：为 VLA 高效后训练提供新的世界模型辅助范式。

#### [Scaling Bimanual Household Manipulation from 1,500 hours of Demonstrations to On-Policy Corrections](http://arxiv.org/abs/2609.03591v1)
Jiafeng Xu et al. | 2026-09-03 | 核心：发布 1500 小时双人操作演示数据，并引入在线策略纠正。 | 关联：解决 VLA 规模化中最关键的数据稀缺瓶颈。

#### [FWBC-VLA: Force-Aware Whole-Body Compensation for Contact-Rich Loco-Manipulation](http://arxiv.org/abs/2609.03889v1)
Yutian Zhang et al. | 2026-09-03 | 核心：在 VLA 中引入力感知与全身补偿，处理接触丰富操作。 | 关联：将 VLA 从纯语义动作扩展到物理交互控制。

#### [Continuous Actions from Discrete Minds: Latent-Aligned Planning for End-to-End Autonomous Driving](http://arxiv.org/abs/2609.04070v1)
Ruoyu Yao et al. | 2026-09-03 | 核心：用潜空间对齐规划连接离散 VLM 推理与连续驾驶动作。 | 关联：为 VLA 在自动驾驶中的“离散-连续”鸿沟提供统一框架。

#### [R2S-Eval: Robot Evaluation with Real-to-Sim Calibration via Vision-Language Models](http://arxiv.org/abs/2609.03276v1)
Yidi Wang et al. | 2026-09-03 | 核心：用 VLM 校准真实到仿真差距，降低机器人策略评估成本。 | 关联：关注 VLA 策略在真实部署前的评测可靠性。

### 具身导航

#### [Revisiting Topological Graphs for Macro Action based Closed-loop Reinforcement Learning of Vision Language Navigation in Continuous Environment](http://arxiv.org/abs/2609.03906v1)
Shuhao Ye et al. | 2026-09-03 | 核心：在 VLN-CE 中用拓扑图宏观动作配合闭环 RL，缓解模仿学习的分布偏移。 | 关联：直接改进连续环境下视觉语言导航的闭环决策。

#### 🔁 **【过去14天内已出现】** [LookStep: Efficient Vision-Language Navigation with Linguistic Foresight and Event Driven Memory](http://arxiv.org/abs/2609.02350v1)
Kun-Yang Yu et al. | 2026-09-02 | 核心：结合语言前瞻与事件驱动记忆提升 VLN 效率。 | 关联：为多模态 VLN Agent 提供更轻量的记忆与决策机制。

#### 🔁 **【过去14天内已出现】** [MS-MEM: Multi-Skill Manipulation-Enhanced Mapping via Uncertainty- and Disturbance-Aware Action Selection](http://arxiv.org/abs/2609.02493v1)
Yitian Shi et al. | 2026-09-02 | 核心：通过不确定性感知动作选择增强受限空间建图。 | 关联：面向服务机器人在高遮挡环境中的具身导航与操作耦合问题。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [TAP-Path: Task-Adaptive Structural and Token Pruning for Efficient and Trustworthy Pathology Foundation Models](http://arxiv.org/abs/2609.04071v1)
Mehedi Hasan et al. | 2026-09-03 | 核心：对病理基础模型同时做任务自适应结构化剪枝与 token 剪枝。 | 关联：展示大模型推理压缩中“结构+token”联合优化的可行性。

### 多模态大模型剪枝

#### [Who Speaks for the Pruned? Visual Token Pruning as Coverage Optimization](http://arxiv.org/abs/2609.03158v1)
Qingchan Zhu et al. | 2026-09-02 | 核心：把视觉 token 剪枝视为覆盖优化，保留被剪证据的近距离代表。 | 关联：为 VLM 推理压缩提供 training-free 且保持证据多样性的新方法。

#### 🔁 **【过去14天内已出现】** [ShallowStream: Index Shallow then Answer Deep for Streaming Video Understanding](http://arxiv.org/abs/2609.02780v1)
Jitai Hao et al. | 2026-09-02 | 核心：对连续视频流先做浅层索引、再让深层模型回答问题。 | 关联：为流式视频多模态大模型的推理成本控制提供分层 token 管理思路。

### 持续学习

#### [Neural-Collapse-guided Task-Free Continual Anomaly Detection](http://arxiv.org/abs/2609.03406v1)
Xiaotong Kong et al. | 2026-09-03 | 核心：用神经坍缩引导无任务边界持续异常检测。 | 关联：解决工业视觉在分布漂移下无法预设任务边界的持续学习难题。

#### [Environment Evolution for Terminal Agents](http://arxiv.org/abs/2609.04128v1)
Zhiyuan Fan et al. | 2026-09-03 | 核心：通过持续进化合成更有挑战的环境，维持终端 Agent 的学习信号。 | 关联：体现环境与智能体共同演化的持续学习视角。

#### 🔁 **【过去14天内已出现】** [MASkills: Continual Skills Optimization for Multi-Agent LLM Systems](http://arxiv.org/abs/2609.02094v1)
Huaiyuan Yao et al. | 2026-09-02 | 核心：面向多 Agent LLM 系统做技能的持续优化与复用。 | 关联：将持续学习从单模型参数扩展到多 Agent 技能层。

## 视觉感知

### 3D 点云视觉感知

#### 🔁 **【过去14天内已出现】** [Stereo 4D Radar for 3D Object Detection: Integrating Geometric Alignment and Absolute Velocity Estimation](http://arxiv.org/abs/2609.02560v1)
Seung-Hyun Song et al. | 2026-09-02 | 核心：结合几何对齐与绝对速度估计，改进立体 4D 雷达的 3D 检测。 | 关联：提升自动驾驶点云感知在恶劣天气下的目标检测能力。

## 跨方向信号

- **世界模型成为低代价训练信号源**：WISE、JEPA World Models、Environment Evolution 都在用预测性环境或合成环境替代昂贵真实监督，影响 VLA 与 Agent 后训练。
- **从权重剪枝走向运行时决策剪枝**：CoverPruner、ShallowStream、SMC 共同表明，剪枝/跳过/提前提交等运行时决策正在替代静态权重压缩，成为多模态与 Agent 推理优化新焦点。
- **Agent 安全与评测从“任务完成”转向“可靠性归因”**：KC-Bench、Counterfactual Fairness Audits、Blind Trust 分别从知识冲突、公平性、攻击面三个方向重新定义 Agent 质量。
- **多 Agent/持续学习/记忆三者逐步融合**：Fresh Memory、MASkills、Environment Evolution 都在处理“系统持续运行中记忆与技能如何更新”的同一类问题。

## 优先精读

#### - [MINERVA: How Small Can a Manipulation Policy Be and Still Solve LIBERO?](http://arxiv.org/abs/2609.03715v1)：直接挑战 VLA 参数量与基准能力之间的关系，对高效 VLA 设计有重要参考价值。
#### - [WISE: World-model-guided Imagination Scheduling for Efficient Post-training of Vision-Language-Action Models](http://arxiv.org/abs/2609.03681v1)：代表 VLA 后训练从真实交互转向世界模型想象的主流趋势，值得完整跟踪。
#### - [A Blind Trust, the Bloody Thrust: When Attacker-Controlled Hook Updates Steer AI Agent Harnesses towards Malicious Behaviors](http://arxiv.org/abs/2609.03884v1)：揭示 Agent harness 生命周期钩子的真实攻击面，对生产级 Agent 工程安全具有警示意义。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*