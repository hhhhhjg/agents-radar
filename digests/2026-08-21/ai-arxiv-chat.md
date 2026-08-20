# 实验室研究方向 Radar 2026-08-21

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 15 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-08-20 22:20 UTC

---

# 研究方向 Radar

## 1. 今日总览
- **LLM Agent 工程**：3篇新论文聚焦代理审计、威胁情报语料与长时程竞争基准，工程重点从单次任务转向可审计、可持续的运行环境。
- **Agent 测试时扩展与自我改进**：2篇新论文分别指出测试时扩展的真实瓶颈在“利用”环节，并提出自博弈式可执行环境生成以支撑持续自我改进。
- **LLM Agent Society**：今日暂无新论文。
- **视觉-语言-动作模型**：2篇新论文覆盖第一视角VLM综述与对比语言-4D预训练，为该方向补充感知与表示学习层面的进展。
- **具身导航**：3篇新论文分别涉及长期场景记忆、统一驾驶场景表示与视障预测式引导。
- **LLM 剪枝与推理优化**：1篇新论文提出角色条件子令牌路由，在子令牌层级降低VLA策略推理开销。
- **多模态大模型剪枝**：今日暂无新论文。
- **持续学习**：3篇新论文推动持续学习从参数中心扩展到“harness”状态，并引入“共观察”与“可逆遗忘”概念。
- **事件相机视觉感知**：今日暂无新论文。
- **3D 点云视觉感知**：1篇新论文将强化学习引入无参考点云质量评估，提升泛化能力。
- **3D 点云感知与跟踪**：今日暂无新论文。

## 2. 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程
#### [LEDGER: Claim-to-Evidence Trace Graphs for Auditing LLM Agents](http://arxiv.org/abs/2608.18398v1)
- 作者/日期：Daehong Kim 等，2026-08-19
- 核心贡献：提出“主张-证据”追踪图用于审计LLM代理的长时程工作流。
- 方向关联：为代理输出提供可审计的工程化表示。

#### [CTIFoundry: An Agent-Native Corpus Scaffold for Cyber Threat Intelligence](http://arxiv.org/abs/2608.18613v1)
- 作者/日期：Yutong Cheng 等，2026-08-19
- 核心贡献：构建面向代理的威胁情报语料脚手架，使多步调查代理可消费报告。
- 方向关联：补充了代理工程中常被忽略的“语料侧”基础设施。

#### [FM-Bench: A Benchmark for Long-Horizon Management with Competing Agents](http://arxiv.org/abs/2608.18423v1)
- 作者/日期：Tianyou Wang 等，2026-08-19
- 核心贡献：提出足球管理基准，衡量代理在长时程竞争环境中的决策能力。
- 方向关联：为代理工程提供动态、对抗性的长期评估基准。

### Agent 测试时扩展与自我改进
#### [Test-Time Scaling in the Wild: Why Exploitation, Not Exploration, Is the Bottleneck](http://arxiv.org/abs/2608.18931v1)
- 作者/日期：Davide Romano 等，2026-08-19
- 核心贡献：发现真实任务中测试时扩展的主要瓶颈是“利用”已有候选而非“探索”更多候选。
- 方向关联：重新定位测试时扩展在开放场景下的优化方向。

#### [SPADE: Self-Play in Adaptive Synthetic Executable Environments](http://arxiv.org/abs/2608.19197v1)
- 作者/日期：Bo Liu 等，2026-08-19
- 核心贡献：通过自适应生成可执行环境进行自博弈，为代理持续提供新目标。
- 方向关联：为代理自我改进提供不受固定分布限制的训练环境池。

### LLM Agent Society
今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型
#### [Vision-Language Models for Egocentric Video: From Hand-Object Interaction to Embodied AI](http://arxiv.org/abs/2608.18671v1)
- 作者/日期：Mohammad Zamani 等，2026-08-19
- 核心贡献：综述第一视角视频中VLM从手物交互到具身AI的研究进展。
- 方向关联：为VLA模型提供第一视角场景理解与交互基础。

#### [CL4D: Contrastive Language-4D Pretraining for Vision-Language Reasoning in Dynamic Scenes](http://arxiv.org/abs/2608.18734v1)
- 作者/日期：Kumal Hewagamage 等，2026-08-19
- 核心贡献：提出对比语言-4D预训练，对齐语言与动态3D场景。
- 方向关联：为VLA模型在动态环境中的视觉-语言推理提供可迁移表示。

### 具身导航
#### [LT-Mem: Volatility-Aware Spatio-Temporal Memory for Lifelong Scene Understanding](http://arxiv.org/abs/2608.19059v1)
- 作者/日期：Yumin Lee 等，2026-08-19
- 核心贡献：提出波动性感知的空时记忆机制，支持长期场景理解。
- 方向关联：提升机器人在持续变化环境中的跨会话导航一致性。

#### [USR-Drive: Unified Driving Scene Representation via Joint Denoising of 3D Gaussians and Boxes](http://arxiv.org/abs/2608.19036v1)
- 作者/日期：Li-Heng Chen 等，2026-08-19
- 核心贡献：通过联合去噪3D高斯与3D框学习统一驾驶场景表示。
- 方向关联：为自动驾驶导航提供结构化且可渲染的3D场景表示。

#### [ForeSightGuide: An Anticipatory Framework toward Accurate and Low-Redundancy Guidance for the Visually Impaired](http://arxiv.org/abs/2608.18993v1)
- 作者/日期：Zhiyuan Wang 等，2026-08-19
- 核心贡献：提出预期式框架，为视障者提供准确且低冗余的导航引导。
- 方向关联：将具身导航技术落地于移动辅助与盲人出行场景。

## 模型压缩与持续学习

### LLM 剪枝与推理优化
#### [Role-Conditioned Sub-Token Routing for Efficient Vision-Language-Action Policies](http://arxiv.org/abs/2608.18410v1)
- 作者/日期：Wei Jiang 等，2026-08-19
- 核心贡献：提出角色条件子令牌路由，在子令牌层级降低VLA策略推理开销。
- 方向关联：将精确到子令牌的路由机制引入多模态动作模型推理优化。

### 多模态大模型剪枝
今日暂无新论文。

### 持续学习
#### [Harness Continual Learning: Continual Adaptation Beyond Model Parameters](http://arxiv.org/abs/2608.19013v1)
- 作者/日期：Borui Kang 等，2026-08-19
- 核心贡献：提出将提示、记忆、工具等“harness”作为持续学习状态的新框架。
- 方向关联：将持续学习从模型参数扩展到代理的工程化配置。

#### [Forgetting, plasticity, and co-observation: a third facet of continual learning](http://arxiv.org/abs/2608.18803v1)
- 作者/日期：Timm Hess 等，2026-08-19
- 核心贡献：提出“共观察”作为灾难性遗忘与塑性丧失之外的第三维度。
- 方向关联：补充了持续学习的基础理论框架。

#### [Towards Reversible Forgetting: Managing Obsolete Knowledge in Continual Enterprise AI Agents](http://arxiv.org/abs/2608.18177v1)
- 作者/日期：Nilutpaul Sarker Yash 等，2026-08-18
- 核心贡献：提出“可逆遗忘”以管理企业AI代理中的过时知识。
- 方向关联：将持续学习目标从知识保留扩展到可控遗忘。

## 视觉感知

### 事件相机视觉感知
今日暂无新论文。

### 3D 点云视觉感知
#### [PCQA-R1: Advancing Generalized 3D Point Cloud Quality Assessment with Reinforcement Learning](http://arxiv.org/abs/2608.18627v1)
- 作者/日期：Kangning Ye 等，2026-08-19
- 核心贡献：引入强化学习提升无参考点云质量评估的泛化能力。
- 方向关联：直接服务3D点云视觉感知中的质量评价任务。

### 3D 点云感知与跟踪
今日暂无新论文。

## 3. 跨方向信号
- 外部状态（提示、记忆、工具、语料）正成为模型长期适应的新载体，贯穿持续学习与LLM Agent工程。
- 测试时扩展与子令牌级推理优化共同指向“按需分配计算”的范式。
- 4D/时空建模向VLA、点云感知和具身导航同步渗透，动态场景理解成为交叉核心。
- 强化学习与自博弈从传统决策领域延伸到感知质量评估与训练环境生成。
- 面向长期运行的代理，可审计性与可遗忘性正在成为必要能力。

## 4. 优先精读
#### **Role-Conditioned Sub-Token Routing for Efficient Vision-Language-Action Policies** — 将推理优化推进到子令牌粒度，对VLA部署有直接价值。
#### **Forgetting, plasticity, and co-observation: a third facet of continual learning** — 挑战持续学习“两难”范式，可能重塑后续研究方向。
#### **Test-Time Scaling in the Wild: Why Exploitation, Not Exploration, Is the Bottleneck** — 为测试时扩展在真实场景中的改进提供了关键实证依据。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*