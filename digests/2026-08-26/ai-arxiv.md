# 实验室研究方向 Radar 2026-08-26

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 29 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-08-25 22:19 UTC

---

# 研究方向 Radar

## 1. 今日总览

- **LLM Agent 与多智能体 / LLM Agent 工程**：10 篇新论文，覆盖技能库可靠性（TRACE）、技能记忆边界（When Not to Imitate）、网络配置基准（NetConfArena）、动态本体（Dynamic Ontology）、Agent 分解设计（Right-Sizing）、记忆注入攻击（InjecMEM）、群体对抗预测（Aligned Alone）、终端 Agent 行为学习（Learning Generalizable Behaviors）、轻量仿真（Minimal Local Simulation）与分子科学综述（Molecular LLM Agents）。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：4 篇新论文。Disagree to Explore 提出软件 Agent 路由引导测试时扩展；ParallelWorld 面向具身推理测试时扩展；Prime Agent 提供自改进 RLM harness；Clarify User Expertise 实现对话 Agent 用户能力自适应。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：8 篇新论文，涉及空间 grounding（Pointing-VLA）、意图蒸馏（Act with Intent）、选择性慢路径干预（Think Only When Needed）、记忆统一（UniMem）、双灵巧手鲁棒性（Robust Bimanual VLA）、工业部署（ROS2SmolVLA）、指令遵循基准（InstructMove）与规划约束解耦（Meta-Ctrl）。
- **具身智能 / 具身导航**：3 篇新论文。UAV-VLN 检查可靠性（RACO）、VLM+视觉伺服混合导航（OptiSight）、长时检索经验累积（The Retriever Should Remember）。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：今日暂无新论文（E2S-Pruner 同时匹配该方向，按核心贡献归入多模态大模型剪枝）。
- **模型压缩与持续学习 / 多模态大模型剪枝**：1 篇新论文。E2S-Pruner 提出两阶段证据融合的视觉 token 剪枝。
- **模型压缩与持续学习 / 持续学习**：2 篇新论文。适配器少样本持续学习用于恶意流量识别；无奖励持续适应用于空间机器人。
- **视觉感知 / 事件相机视觉感知**：今日暂无新论文。
- **视觉感知 / 3D 点云视觉感知**：1 篇新论文。BenthicFlow 用流匹配生成可扩展水下 3D 数据。
- **视觉感知 / 3D 点云感知与跟踪**：今日暂无新论文。

## 2. 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [NetConfArena: An Executable Benchmark for LLM Agents in Closed-Loop Network Configuration](http://arxiv.org/abs/2608.23179v1)
Chang Liu et al., 8/24. 构建可执行闭环网络配置基准。为 LLM Agent 网络自动化提供风险可控的评估环境。

#### [TRACE: A Self-Evolving Skill Bank for Consistent, Limit-Aware LLM Agents](http://arxiv.org/abs/2608.22793v1)
Wenhao Wu et al., 8/24. 提出自进化技能库提升一致性与限制感知。增强用户侧 Agent 部署的可靠性。

#### [When Not to Imitate: Boundary-Aware Skill Memory for Reliable Tool-Use LLM Agents](http://arxiv.org/abs/2608.22339v1)
Zihan Lin et al., 8/23. 提出边界感知技能记忆。避免不可靠技能损害工具使用 Agent 的演化。

#### [Toward Effective and Reliable LLM Agents via Dynamic Ontology](http://arxiv.org/abs/2608.22974v1)
Xiaohui Zhang et al., 8/24. 引入动态本体补充隐式语义连接。改善领域任务中 Agent 的证据利用与多步决策。

#### [Right-Sizing LLM-Agent Decomposition in VAT Determination: A Pilot Controlled Sweep](http://arxiv.org/abs/2608.23395v1)
Pedro Santos, 8/24. 对照多窄 Agent 与单强 Agent 的效能差异。为 Agent 分解粒度提供经验依据。

#### [InjecMEM: Memory Injection Attack on LLM Agent Memory Systems](http://arxiv.org/abs/2608.23471v1)
Hanling Tian et al., 8/24. 提出面向 Agent 记忆子系统的注入攻击。揭示记忆作为默认组件的新安全风险。

#### [Aligned Alone, Misaligned Together: Forecasting Adversarial Capture in LLM Agent Populations](http://arxiv.org/abs/2608.22444v1)
Isotta Magistrali et al., 8/23. 预测多 Agent 群体中的对抗性捕获。将 AI 安全评估从单体扩展到交互群体。

#### [Learning Generalizable Behaviors for Terminal Agents](http://arxiv.org/abs/2608.22631v1)
Yihang Yao et al., 8/23. 用强化学习提升终端 Agent 的行为泛化。为终端 Agent 规模化训练提供可行路径。

#### [Minimal Local Simulation Foundations for LLM- and VLM-Driven Agents in 2D and 3D Environments](http://arxiv.org/abs/2608.22833v1)
Ryuki Hyodo, 8/24. 提供 2D/3D 最小本地仿真基础设施。降低 LLM/VLM Agent 仿真研究门槛。

#### [Molecular LLM Agents: From Architectural Design to Scientific Autonomy](http://arxiv.org/abs/2608.23104v1)
Jiatong Li et al., 8/24. 梳理分子科学 LLM Agent 的架构与自主性。将 Agent 能力推广至化学对象感知与推理。

### Agent 测试时扩展与自我改进

#### [Disagree to Explore, Agree to Commit: Routing-Guided Test-Time Scaling for Software Agents](http://arxiv.org/abs/2608.22191v1)
Kang Chen et al., 8/23. 用路由引导分歧/共识策略实现测试时扩展。解决软件 Agent 补丁无规范答案形式下的扩展难题。

#### [ParallelWorld: Test-Time Scaling for Embodied Reasoning](http://arxiv.org/abs/2608.22971v1)
Min Chen et al., 8/24. 以并行世界将具身推理从静态感知转向动态探索。为具身推理带来测试时扩展新范式。

#### [Prime Agent: A Self-Improving RLM Harness](http://arxiv.org/abs/2608.23552v1)
Seth Karten et al., 8/24. 开源基于持久 IPython REPL 的自改进 RLM harness。支撑长时程编码 Agent 评估与自我改进。

#### [Clarify User Expertise: Towards Proactive Conversational Agents Tailoring Responses to User Proficiency](http://arxiv.org/abs/2608.22266v1)
Zhihong Cao et al., 8/23. 提出主动澄清用户专业水平并定制回答。实现对话 Agent 在测试时对用户状态的自适应。

## 具身智能

### 视觉-语言-动作模型

#### [Pointing-VLA: Typed Spatial Grounding Interfaces for Vision-Language-Action Manipulation](http://arxiv.org/abs/2608.23138v1)
Xiwen Chen et al., 8/24. 提出类型化隐状态空间读出接口。增强 VLA 操作中多模态推理与机器人执行的连接。

#### [Act with Intent: Distilling Behavior Intent for Vision-Language-Action Models](http://arxiv.org/abs/2608.23478v1)
Sangoh Lee et al., 8/24. 从演示中蒸馏行为意图作为局部目标监督。提升 VLA 动作解码器的目标一致性。

#### [Think Only When Needed: Prompt-Authority Control for Selective Slow-Path Intervention in Vision-Language-Action Manipulation](http://arxiv.org/abs/2608.23224v1)
Zhiruo Zhou et al., 8/24. 提出提示权限控制以选择性启用检索干预。缓解检索文本对 VLA 策略的负面干预。

#### [UniMem: Unifying Multimodal Memory and Control for Vision-Language-Action Models](http://arxiv.org/abs/2608.22869v1)
Lars Osterberg et al., 8/24. 统一多模态记忆与控制。解决 VLA 在非马尔可夫长期任务中的记忆缺失。

#### [Robust Bimanual Vision-Language-Action Models via Embarrassingly Simple Modality Masking](http://arxiv.org/abs/2608.22419v1)
Dongzhou Cheng et al., 8/23. 用模态掩码增强查询式 VLA 的稳定性。提升双机械臂任务中的执行鲁棒性。

#### [ROS2SmolVLA: Enabling Small Vision-Language-Action Models for Integration into Industrial-Grade Lightweight Robots](http://arxiv.org/abs/2608.23320v1)
Nils Mandischer et al., 8/24. 实现小型 VLA 与 ROS2 集成。推动 VLA 在工业轻型机器人中的落地。

#### [InstructMove: A Text-Indispensable Benchmark for Instruction-Following Manipulation](http://arxiv.org/abs/2608.22990v1)
Mengao Zhao et al., 8/24. 构建指令不可或缺的操作基准。检验 VLA 是否真正遵循语言指令。

#### [Meta-Ctrl: Guaranteed Plan Generation by Decoupling Syntactic and Semantic Constraints](http://arxiv.org/abs/2608.22149v1)
Gwen Yidou-Weng et al., 8/23. 解耦语法与语义约束并保证规划可执行。为 LLM/VLA 操作规划提供形式化约束方法。

### 具身导航

#### [RACO: Reliability-Aware Coarse-Goal Optimization for Inspection-Oriented UAV Vision-Language Navigation](http://arxiv.org/abs/2608.22678v1)
Sen Wang et al., 8/24. 提出可靠性感知粗粒度目标优化。避免 UAV-VLN 在检查任务中误认语义相似干扰物。

#### [OptiSight: Bridging Semantic Reasoning and Geometric Control for Embodied Navigation](http://arxiv.org/abs/2608.23354v1)
Alperen Avan et al., 8/24. 融合 VLM 语义推理与确定性视觉伺服。构建混合式室内具身导航框架。

#### [The Retriever Should Remember: Experience-Amortized Reranking for Long-Term Agent Memory](http://arxiv.org/abs/2608.22767v1)
Qi Feng et al., 8/24. 提出经验摊销重排，让记忆检索器积累经验。可用于具身导航 Agent 的长期经验复用。

## 模型压缩与持续学习

### 多模态大模型剪枝

#### [E2S-Pruner: Progressive Two-Stage Evidence Fusion for Visual Token Pruning in Vision-Language Models](http://arxiv.org/abs/2608.23253v1)
Taoyu Qian et al., 8/24. 提出两阶段证据融合的视觉 token 剪枝。降低 VLM 推理延迟与显存开销。

### 持续学习

#### [Adapter-Based Few-Shot Continual Learning for Malicious Packet Recognition](http://arxiv.org/abs/2608.23536v1)
Kyle Stein et al., 8/24. 用适配器实现少样本持续学习。缓解恶意流量识别中的灾难性遗忘。

#### [Reward-Free Continual Adaptation for Resilient Space Robots](http://arxiv.org/abs/2608.23452v1)
Andrej Orsula et al., 8/24. 提出无奖励持续适应方法。扩展持续强化学习到空间机器人退化适应场景。

## 视觉感知

### 3D 点云视觉感知

#### [BenthicFlow: Generating Extensible Underwater Environments via Flow Matching](http://arxiv.org/abs/2608.23173v1)
Joaquín Figueira et al., 8/24. 用流匹配生成可扩展水下 3D 环境。缓解水下 3D 场景理解的数据稀缺问题。

## 3. 跨方向信号

1. **测试时扩展向具身与软件 Agent 渗透**：Disagree to Explore、ParallelWorld、Prime Agent 共同体现 test-time scaling 正从语言任务扩展到长时程决策与具身推理。
2. **记忆子系统成为 Agent 标配并引入新风险**：UniMem、InjecMEM、The Retriever Should Remember、TRACE 交织形成"记忆构建—检索优化—安全攻击"完整链条。
3. **可靠性约束成为生成式策略落地关键**：Meta-Ctrl、RACO、Think Only When Needed 分别从形式保证、目标优化、提示权限控制角度为 VLA/导航注入可靠性。
4. **资源受限场景驱动高效持续适应**：E2S-Pruner、Adapter-Based CL、Reward-Free Continual Adaptation 共同指向动态环境下的低成本模型更新与推理优化。

## 4. 优先精读

- **Pointing-VLA**（2608.23138）：直接改造 VLA 空间 grounding 接口，可能影响后续 VLA 架构设计。
- **Disagree to Explore**（2608.22191）：首次系统处理软件 Agent 测试时扩展中的路由与共识问题，实操价值高。
- **E2S-Pruner**（2608.23253）：视觉 token 剪枝直接决定 VLM 推理成本，两阶段证据融合具备方法论迁移潜力。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*