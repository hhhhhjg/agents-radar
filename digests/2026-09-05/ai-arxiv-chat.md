# 实验室研究方向 Radar 2026-09-05

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 14 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-04 23:38 UTC

---

## 今日总览

- **LLM Agent 与多智能体 / LLM Agent 工程**：今日该方向共有 4 篇候选论文，分方向最多保留 3 篇。核心进展是用图结构策略优化改善长程信用分配、将拓扑推理外置以实现更可靠的 SOC Agent，并通过环境演化维持终端 Agent 的训练信号；另有反事实公平审计论文提示多步临床 Agent 评测需逐动作校准扰动下限。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：今日 3 篇新论文。关注点集中在“以低成本在测试时/自博弈中继续改进”：包括对话产物修订传播的成本控制、表格基础模型的推理时上下文学习、以及让非增量学习器参与自博弈学习。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：今日 3 篇新论文。主要信号是 VLA 与 world model 进一步融合：用世界模型指导后训练、统一表征/动作/世界模型框架、面向动作的中间特征监督。
- **具身智能 / 具身导航**：今日 1 篇新论文。探索拓扑图与宏动作闭环强化学习，尝试解决 VLN-CE 模仿学习分布偏移问题。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：今日 1 篇新论文。呈现任务自适应结构/Token 剪枝降低高开销基础模型推理成本的趋势。
- **模型压缩与持续学习 / 多模态大模型剪枝**：今日 1 篇新论文。将视觉 Token 剪枝重构为覆盖优化问题，训练时可无缝用于 VLM 推理加速。
#### - **模型压缩与持续学习 / 持续学习**：今日方向共 2 篇候选，其中 Environment Evolution for Terminal Agents 更贴近 LLM Agent 工程，已归入上述对应子方向；本处保留 1 篇任务无关持续异常检测论文。
- **视觉感知 / 事件相机视觉感知**：今日暂无新论文。
- **视觉感知 / 3D 点云视觉感知**：今日暂无新论文。
- **视觉感知 / 3D 点云感知与跟踪**：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程
#### [TIGPO: Temporal Instance-Graph Policy Optimization for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.03383v1)
- Jinwei Gan｜2026-09-03
- 核心贡献：提出跨策略更新传递转移轨迹的时序实例图策略优化，改善长程 LLM Agent 的信用分配。
- 关联：直接服务于长程 LLM Agent 的策略训练，是对 Agent 学习信号复用的关键优化。

#### [SENTINEL-RL: Offloading Topological Reasoning from LLM Agents in the Security Operations Center](http://arxiv.org/abs/2609.04159v1)
- Uday Vallabhaneni et al.｜2026-09-03
- 核心贡献：将 SOC 中多主机认证图的拓扑推理从 LLM Agent 卸载到专用 RL 模块，突破上下文窗口限制并提供约束保证。
- 关联：展示了 LLM Agent 工程中“将非语言核心能力外置到专用模块”的可靠架构范式。

#### [Environment Evolution for Terminal Agents](http://arxiv.org/abs/2609.04128v1)
- Zhiyuan Fan et al.｜2026-09-03
- 核心贡献：提出让训练环境与 Agent 能力协同演化，为不断变强的终端 Agent 持续生成有挑战性的可验证任务。
- 关联：为 Agent 自动化课程与环境生成提供了可扩展的工程路径，避免环境随模型变强而过时。

### Agent 测试时扩展与自我改进
#### [What Else Needs Fixing? Exploring Cost-Effective Test-Time Compute for Revision Propagation in Artifacts Generated Through Conversation](http://arxiv.org/abs/2609.03254v1)
- Daisuke Kikuta｜2026-09-03
- 核心贡献：研究对话生成产物修改时如何以低成本测试时计算判断哪些依赖位置需要同步修订。
- 关联：直接对应 Agent 在长期交互中的测试时修订与自我改进成本优化。

#### [Xiaomi-TabLDM: A Tabular Foundation Model Technical Report](http://arxiv.org/abs/2609.03880v1)
- Xiaomi-TabLDM Team et al.｜2026-09-03
- 核心贡献：提出基于结构因果模型合成数据预训练的表格基础模型，无需微调即可通过上下文学习完成分类和回归。
- 关联：展示了测试时上下文学习作为“不更新权重即可扩展任务类型”的低成本范式。

#### [Local Updates, Global Learning (LUGL): Playing Games with non-incremental Learners](http://arxiv.org/abs/2609.03660v1)
- David Milec et al.｜2026-09-03
- 核心贡献：提出局部更新-全局学习策略，使 LightGBM 等非增量学习器也能参与深度 RL 式自博弈。
- 关联：扩展了可自我博弈/自我改进的模型类型，减轻非增量模型在在线非平稳训练中的固有劣势。

### LLM Agent Society
今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型
#### [WISE: World-model-guided Imagination Scheduling for Efficient Post-training of Vision-Language-Action Models](http://arxiv.org/abs/2609.03681v1)
- Chenhao Zhang et al.｜2026-09-03
- 核心贡献：提出由世界模型引导“想象调度”的 VLA 后训练方法，降低对专家示范和真实世界探索的依赖。
- 关联：直接推进 VLA 策略的高效后训练范式，与具身策略学习中的低成本交互趋势高度一致。

#### [Toward Unified Robot Learning: Bridging Representation, Vision-Language-Action, and World Models](http://arxiv.org/abs/2609.03927v1)
- Shaunak A. Mehta et al.｜2026-09-03
- 核心贡献：系统梳理表征学习、VLA 与世界模型之间的关系，提出统一机器人学习框架。
- 关联：为 VLA 方向提供了“感知-行动-后果推理”一体化的顶层设计参考。

#### [GIFT: Guided Intermediate Feature Training via Action-Oriented Structural Supervision for Robotic Manipulation](http://arxiv.org/abs/2609.04193v1)
- Yupeng Zheng et al.｜2026-09-03
- 核心贡献：提出基于动作导向结构监督的中间特征训练，使 VLA 预测目标保留关键物理与任务结构。
- 关联：从中间表征角度改善 VLA 策略的可控性与任务相关性。

### 具身导航
#### [Revisiting Topological Graphs for Macro Action based Closed-loop Reinforcement Learning of Vision Language Navigation in Continuous Environment](http://arxiv.org/abs/2609.03906v1)
- Shuhao Ye et al.｜2026-09-03
- 核心贡献：在连续环境 VLN 中重新引入拓扑图与宏动作，设计闭环 RL 方法以规避模仿学习的分布偏移问题。
- 关联：为具身导航中 VLN-CE 的长程闭环决策提供了新训练思路。

## 模型压缩与持续学习

### LLM 剪枝与推理优化
#### [TAP-Path: Task-Adaptive Structural and Token Pruning for Efficient and Trustworthy Pathology Foundation Models](http://arxiv.org/abs/2609.04071v1)
- Mehedi Hasan et al.｜2026-09-03
- 核心贡献：提出任务自适应结构重构与 Token 剪枝联合压缩框架，降低病理基础模型推理成本并保留可信性。
- 关联：其“按下游任务自适应裁剪”思路可迁移到 LLM/大模型的推理优化。

### 多模态大模型剪枝
#### [Who Speaks for the Pruned? Visual Token Pruning as Coverage Optimization](http://arxiv.org/abs/2609.03158v1)
- Qingchan Zhu et al.｜2026-09-03
- 核心贡献：提出 CoverPruner，将视觉 Token 剪枝建模为覆盖优化问题，避免高冗余 Token 挤占保留名额而丢失少数派证据。
- 关联：为 VLM 多模态大模型的训练无关推理加速提供了新视角。

### 持续学习
#### [Neural-Collapse-guided Task-Free Continual Anomaly Detection](http://arxiv.org/abs/2609.03406v1)
- Xiaotong Kong et al.｜2026-09-03
- 核心贡献：利用神经坍缩几何结构实现任务无关的持续工业视觉异常检测，摆脱任务边界假设。
- 关联：应对制造环境中不可预测数据漂移，属持续学习中“任务无关”方向的高相关进展。

## 视觉感知

### 事件相机视觉感知
今日暂无新论文。

### 3D 点云视觉感知
今日暂无新论文。

### 3D 点云感知与跟踪
今日暂无新论文。

## 跨方向信号

- **世界模型成为具身策略的高效“训练场”**：WISE、GIFT、Unified Robot Learning 均尝试用 world model 或预测式监督减少真实交互/示范成本，体现 VLA 后训练向想象环境迁移的趋势。
- **显式图/拓扑结构作为 Agent 与导航的共同归纳偏置**：TIGPO 用实例图做信用分配，SENTINEL-RL 外置拓扑推理，具身导航论文重新使用拓扑图支持宏动作。图结构正在成为跨越语言 Agent 与具身 Agent 的环境抽象工具。
- **剪枝从“保留有价值 Token”转向“保证证据覆盖与任务适配”**：CoverPruner 与 TAP-Path 均不再只看单 Token 重要性，而考虑压缩对下游任务和全局信息覆盖的影响。
- **“避免全量重训”是多个方向的共同经济动机**：What Else Needs Fixing? 控制测试时计算、Xiaomi-TabLDM 用上下文学习免微调、LUGL 以局部更新替代全局再训练，均指向更便宜的训练/更新协议。

## 优先精读

- **WISE**：将世界模型用于 VLA 后训练的“想象调度”，是降低机器人 RL 真实交互成本的前沿尝试，值得完整阅读以评估其训练效率收益来源。
- **CoverPruner**：提出“覆盖优化”这一反直觉剪枝视角，训练无关且适用范围跨 VLM/多模态推理，实践价值较高。
- **TIGPO**：跨策略更新的图结构信用分配直接解决长程 LLM Agent 训练中“旧经验被丢弃”的问题，对 Agent 自我改进与策略优化有方法论意义。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*