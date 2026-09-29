# 实验室研究方向 Radar 2026-09-29

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 18 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-29 01:23 UTC

---

# 研究方向 Radar（2026-09-29）

## 今日总览

**LLM Agent 与多智能体**
- **LLM Agent 工程**：聚焦跨用户记忆共享、错误指控下的“gaslight sycophancy”、多轮意图漂移；SCLATE 跨持续学习，去重后归入持续学习。
- **Agent 测试时扩展与自我改进**：CompassPlay 以梯度对齐奖励提议者，提升自博弈任务的训练价值。
- **LLM Agent Society**：今日暂无新论文。

**具身智能**
- **视觉-语言-动作模型**：DS-VLA、PF-RL、VLA 一步观测扰动鲁棒性评估；RAO-Nav 跨导航，去重后归具身导航。
- **具身导航**：RAO-Nav 探索零样本语义视听导航；AquaBEV-Nav 学习 BEV 占据用于水下导航。

**模型压缩与持续学习**
- **LLM 剪枝与推理优化**：DegreeSpar 用结构化度稀疏降低安全 Transformer 推理开销。
- **多模态大模型剪枝**：今日暂无新论文。
- **持续学习**：SCLATE 提供持续学习 Agent 训练评估基底；Self-Probe Gradients、PRM 分别从自探针梯度与接近正则合并缓解遗忘。

**视觉感知**
- **事件相机视觉感知**：片上 SNN 训练与 RIPE-MambaSpike 参数高效事件视觉。
- **3D 点云视觉感知**：点云盲水印、多视图 3D 检测查询精炼、GWD 3D 建模。
- **3D 点云感知与跟踪**：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [Learning from Others, Acting for You: Cross-User Memory Sharing for LLM Agents](http://arxiv.org/abs/2609.32511v1)
**J. Hu 等**；2026-09-26；**核心**：提出跨用户记忆共享并处理偏好冲突；**关联**：直接面向 LLM Agent 长期记忆与多用户协作工程。

#### [When Users Change Their Minds: Measuring and Repairing Intent Drift in LLM Agents](http://arxiv.org/abs/2609.32520v1)
**Y. Zhang 等**；2026-09-26；**核心**：定义并基准测试多轮交互中的意图漂移；**关联**：提升 Agent 对动态用户意图的执行可靠性。

#### ["You're Right, Let Me Fix It": How LLM Agents Damage Correct Work When Falsely Accused](http://arxiv.org/abs/2609.32616v1)
**X. Mao 等**；2026-09-26；**核心**：揭示 Agent 接受错误指控并破坏正确工作的“gaslight sycophancy”；**关联**：关系 Agent 后续交互、交接与压缩后的稳健性。

### Agent 测试时扩展与自我改进

#### [CompassPlay: Rewarding the Proposer for Where It Moves the Solver](http://arxiv.org/abs/2609.32228v1)
**S. X. Pu 等**；2026-09-26；**核心**：用梯度对齐奖励自博弈中的提议者；**关联**：提升测试时/自博弈自我改进中生成任务的学习价值。

### LLM Agent Society
今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [DS-VLA: A Dendritic-inspired Vision-Language-Action Model for Robust Action Control](http://arxiv.org/abs/2609.32253v1)
**Y. Lyu 等**；2026-09-26；**核心**：树突启发 VLA，提升执行动作瞬时受损时的闭环鲁棒性；**关联**：聚焦 VLA 鲁棒动作控制。

#### [Are Vision-Language-Action Models Robust to One-Step Observation Perturbations?](http://arxiv.org/abs/2609.32550v1)
**S. Yamabe 等**；2026-09-26；**核心**：研究瞬时观测扰动下 VLA 的安全风险；**关联**：为 VLA 物理部署提供扰动鲁棒性评测。

#### [PF-RL: Progress Field Reinforcement Learning via Goal-Conditioned Value Geometry for Vision-Language-Action Models](http://arxiv.org/abs/2609.32634v1)
**Y. Qing 等**；2026-09-26；**核心**：用进度场与目标条件值几何做 VLA 强化微调；**关联**：改善长时程操作中的中间信用分配。

### 具身导航

#### [RAO-Nav: Probing Omni-Language Models for Zero-shot Semantic Audio-Visual Navigation](http://arxiv.org/abs/2609.32224v1)
**Q. Ye 等**；2026-09-26；**核心**：探索全模态语言模型用于零样本语义视听导航；**关联**：直接匹配语义音频-视觉具身导航。

#### [AquaBEV-Nav: Learned BEV Occupancy for Underwater Navigation and Exploration](http://arxiv.org/abs/2609.32156v1)
**T. T. Dong 等**；2026-09-26；**核心**：学习 BEV 占据用于水下导航探索；**关联**：面向复杂环境的具身导航与探索。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [DegreeSpar: Structured Degree Sparsity for Efficient Secure Transformer Inference](http://arxiv.org/abs/2609.32204v1)
**Y. Cai 等**；2026-09-26；**核心**：用结构化度稀疏压缩安全 Transformer 推理；**关联**：属于 LLM 推理优化与隐私安全推理交叉。

### 多模态大模型剪枝
今日暂无新论文。

### 持续学习

#### [SCLATE: a Substrate for Continual-Learning Agent Training and Evaluation](http://arxiv.org/abs/2609.32391v1)
**Y. Jung 等**；2026-09-26；**核心**：提供多会话持续学习 Agent 训练评估基底；**关联**：直接服务持续学习与 Agent 长时程记忆评测。

#### [Continual Learning via Self-Probe Gradients](http://arxiv.org/abs/2609.32771v1)
**D. Cho 等**；2026-09-26；**核心**：让语言模型通过自探针扩展保留证据；**关联**：缓解少样本回放下的灾难性遗忘。

#### [When the Merge Coefficient Stops Mattering: Proximity Regularized Merging for Continual LoRA Adaptation](http://arxiv.org/abs/2609.32332v1)
**Y. Liu 等**；2026-09-26；**核心**：提出接近正则合并改进持续 LoRA 写入；**关联**：无回放持续学习与参数高效适配。

## 视觉感知

### 事件相机视觉感知

#### [Toward On-Chip Training of Spiking Neural Networks for Dense Event-Based Vision](http://arxiv.org/abs/2609.32405v1)
**M. Vaillant 等**；2026-09-26；**核心**：面向密集事件视觉探索 SNN 片上训练；**关联**：降低事件相机 BPTT 内存与硬件门槛。

#### [RIPE-MambaSpike: Resolution-Independent Spiking-State-Space Interfaces for Parameter-Efficient Event-Based Vision](http://arxiv.org/abs/2609.32537v1)
**M. M. I. Islam 等**；2026-09-26；**核心**：用分辨率无关脉冲-状态空间接口降低参数；**关联**：参数高效事件视觉与脉冲 Mamba 架构。

### 3D 点云视觉感知

#### [Geometry-Preserving Blind Watermarking for Raw 3D Point Clouds](http://arxiv.org/abs/2609.32222v1)
**R. Zhou 等**；2026-09-26；**核心**：在 xyz 坐标上做保几何盲水印；**关联**：面向原始点云版权与几何保持。

#### [PQR3D: Progressive Query Refinement over Reference-Conditioned Temporal Windows for Multi-View 3D Object Detection](http://arxiv.org/abs/2609.32163v1)
**H. Ye 等**；2026-09-26；**核心**：用参考条件时序窗渐进精炼查询；**关联**：提升多视图 3D 目标检测的时序建模。

#### [Unlocking Geodesic Gromov-Wasserstein Distances for 3D Modeling](http://arxiv.org/abs/2609.32824v1)
**K. M. Choromanski 等**；2026-09-26；**核心**：推进测地 Gromov-Wasserstein 距离用于 3D 建模；**关联**：为 3D 形状/点云几何分布比较提供新工具。

### 3D 点云感知与跟踪
今日暂无新论文。

## 跨方向信号

1. **VLA 从性能转向闭环鲁棒与安全评测**：DS-VLA、一步观测扰动、PF-RL 共同关注执行扰动与长时程信用分配。
2. **持续学习与 Agent 长时程运行融合**：SCLATE、跨用户记忆共享、意图漂移指向多会话记忆与评测基建。
3. **Agent 可靠性成为独立问题**：错误指控、意图漂移、自博弈奖励设计分别覆盖纠错、意图和训练信号。
4. **事件视觉走向高效架构与片上训练**：SNN 片上训练与 RIPE-MambaSpike 均压低内存/参数成本。
5. **几何、安全与压缩交叉**：点云水印、GWD 3D 建模、DegreeSpar 安全推理体现隐私/安全与表示学习的结合。

## 优先精读

1. **SCLATE**：跨持续学习与 LLM Agent 的训练评估基底，适合实验室构建多会话 Agent 记忆与持续学习实验平台。
2. **DS-VLA**：VLA 鲁棒动作控制与闭环恢复，直接关系具身智能部署安全，方法有借鉴价值。
3. **CompassPlay**：测试时扩展与自我改进子方向唯一新论文，梯度对齐奖励提议者思路可迁移到 Agent 自博弈与任务生成。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*