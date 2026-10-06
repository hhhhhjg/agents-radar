# 实验室研究方向 Radar 2026-10-06

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 9 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-10-06 02:01 UTC

---

# 研究方向 Radar（截至 2026-10-06）

# 今日总览
- 主方向：LLM Agent 与多智能体；子方向：LLM Agent 工程：3 篇新文献，聚焦 agent harness 受控评估、长期记忆失效、事件驱动终身健康轨迹。
- 主方向：LLM Agent 与多智能体；子方向：Agent 测试时扩展与自我改进：今日暂无新论文。
- 主方向：LLM Agent 与多智能体；子方向：LLM Agent Society：今日暂无新论文。
- 主方向：具身智能；子方向：视觉-语言-动作模型：今日暂无新论文；相关 VLA 视觉 token 剪枝见多模态大模型剪枝。
- 主方向：具身智能；子方向：具身导航：今日暂无新论文。
- 主方向：模型压缩与持续学习；子方向：LLM 剪枝与推理优化：今日暂无新论文。
- 主方向：模型压缩与持续学习；子方向：多模态大模型剪枝：1 篇新文献，面向 VLA 的阶段感知视觉 token 剪枝。
- 主方向：模型压缩与持续学习；子方向：持续学习：3 篇新文献，涉及 Paced LoRA、off-policy merging、gated target propagation。
- 主方向：视觉感知；子方向：事件相机视觉感知：1 篇新文献，事件传感器用于异步跟踪、光通信与 3D 动捕。
- 主方向：视觉感知；子方向：3D 点云视觉感知：1 篇新文献，选择性时空聚合用于 3D 占据与场景流预测。
- 主方向：视觉感知；子方向：3D 点云感知与跟踪：今日暂无新论文。

# 分方向情报

## LLM Agent 与多智能体
### LLM Agent 工程
#### [MedicalHarness: A Controlled Evaluation of LLMs and Agent Harnesses on Medical Tasks](http://arxiv.org/abs/2610.05778v1)
- 作者：Z. Wang 等；发布：2026-10-05
- 核心贡献：对 LLM 与 agent harness 在医疗任务上进行受控评估，指出分数是模型与 harness 配对的属性。
- 方向关联：直接支撑 LLM Agent 工程中的 harness 选型、评估协议与可复现性。

#### [PACMI: Provenance-Aware Cascading Memory Invalidation for Long-Term LLM Agents](http://arxiv.org/abs/2610.05732v1)
- 作者：Y. Wang 等；发布：2026-10-05
- 核心贡献：提出溯源感知的级联记忆失效，处理长期 LLM Agent 中过期但仍语义相关的记忆。
- 方向关联：面向 Agent 长期记忆生命周期管理，属于 LLM Agent 工程基础设施。

#### [LifeLong Digital Twin: A Unified Modeling Paradigm and Agent Harness for Event-Driven Lifelong Health State Trajectories](http://arxiv.org/abs/2610.05566v1)
- 作者：J. Jiang 等；发布：2026-10-04
- 核心贡献：提出统一建模范式与 agent harness，用于事件驱动的终身健康状态轨迹。
- 方向关联：展示 agent harness 向长期、事件驱动领域扩展的工程路径。

### Agent 测试时扩展与自我改进
今日暂无新论文。

### LLM Agent Society
今日暂无新论文。

## 具身智能
### 视觉-语言-动作模型
今日暂无新论文。

### 具身导航
今日暂无新论文。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
今日暂无新论文。

### 多模态大模型剪枝
#### [When and What to Prune? Stage-Aware Visual Token Pruning for Efficient VLA](http://arxiv.org/abs/2610.05273v1)
- 作者：T. Shi 等；发布：2026-10-04
- 核心贡献：提出阶段感知视觉 token 剪枝，判断何时剪与剪哪些 token，以加速 VLA 推理。
- 方向关联：多模态大模型剪枝，直接针对 VLA 中视觉 token 过多的效率瓶颈。

### 持续学习
#### [Off-Policy Merging Beats On-Policy Self-Distillation for Continual Learning](http://arxiv.org/abs/2610.05872v1)
- 作者：C. H. Wu 等；发布：2026-10-05
- 核心贡献：展示 off-policy merging 在持续学习中优于 on-policy self-distillation，挑战 on-policy 训练为前提的常规。
- 方向关联：为后训练模型持续学习与自蒸馏路线提供反直觉训练策略证据。

#### [PaLoRA: Paced Low-Rank Adaptation for Continual Learning](http://arxiv.org/abs/2610.04226v1)
- 作者：Y. Li 等；发布：2026-10-03
- 核心贡献：针对固定小学习率启发式缺乏理论指导，提出 Paced Low-Rank Adaptation 以节奏化方式限制梯度缩放。
- 方向关联：持续学习与参数高效微调交叉，适合 LLM 持续适配场景。

#### [Gated Target Propagation for Compositional Generalization in Continual Learning](http://arxiv.org/abs/2610.04649v1)
- 作者：A. M. Njupoun 等；发布：2026-10-03
- 核心贡献：提出 Gated Target Propagation，使持续学习器能复用并重组旧知识以快速解决新任务组合。
- 方向关联：将持续学习从防遗忘扩展到组合泛化与知识重用。

## 视觉感知
### 事件相机视觉感知
#### [Asynchronous Tracking, Optical Communication and 3D Motion Capture using Event-based Sensors](http://arxiv.org/abs/2610.04342v1)
- 作者：Z. Wang 等；发布：2026-10-03
- 核心贡献：利用事件传感器实现异步跟踪、光通信与 3D 动捕，缓解无线通信在定位与时钟同步上的限制。
- 方向关联：事件相机视觉感知在机器人协同、通信与运动捕捉中的集成应用。

### 3D 点云视觉感知
#### [SelectOccFlow: Selective Spatiotemporal Aggregation for 3D Occupancy and Scene Flow Prediction](http://arxiv.org/abs/2610.04356v1)
- 作者：Y. Wang 等；发布：2026-10-03
- 核心贡献：提出 SelectOccFlow，通过选择性时空聚合缓解语义不兼容特征与历史错位导致的不可靠聚合。
- 方向关联：面向 3D 占据与场景流预测的时空感知鲁棒性。

### 3D 点云感知与跟踪
今日暂无新论文。

# 跨方向信号
- Agent harness 正成为 LLM Agent 工程的核心对象，医疗评估与健康轨迹建模均强调模型与环境回路、长期记忆的管理。
- 长期记忆研究从“存储与检索”转向“失效与溯源”，PACMI 与 LifeLong Digital Twin 共同指向事件驱动下的记忆生命周期。
- 持续学习出现多路线并进：训练策略反思、参数高效适配、知识重组与组合泛化。
- 选择性聚合成为效率与鲁棒性的共性方法，从 VLA 视觉 token 剪枝延伸到 3D 占据与场景流预测。
- 事件相机感知与机器人协同结合，可能反哺具身导航、多机器人通信与动态场景理解。

# 优先精读
- [MedicalHarness](http://arxiv.org/abs/2610.05778v1)：直接定义并评估 agent harness，对 LLM Agent 工程的可复现性与高风险场景评估有方法价值。
- [When and What to Prune?](http://arxiv.org/abs/2610.05273v1)：跨多模态剪枝与 VLA 效率，阶段感知剪枝对具身推理加速有直接参考价值。
#### - [Off-Policy Merging Beats On-Policy Self-Distillation for Continual Learning](http://arxiv.org/abs/2610.05872v1)：挑战持续学习中的 on-policy 常规，对后训练模型持续学习路线有战略参考意义。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*