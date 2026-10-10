# 实验室研究方向 Radar 2026-10-10

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 16 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-10-10 01:26 UTC

---

## 今日总览
- LLM Agent 工程：今日 5 篇命中，聚焦 Agent 黑箱优化基准、知识冲突下的认知谦逊、工业本体注入与记忆持续学习；高相关优先展示 3 篇。
- Agent 测试时扩展与自我改进：今日 3 篇命中，核心是测试时计算机制与 TTT 策略学习；另 1 篇视频编辑 in-context 建模关联较弱，未列入分方向。
- LLM Agent Society：今日暂无新论文。
- 视觉-语言-动作模型：今日 3 篇，围绕路径-时间解耦、潜在推理流复用、预测潜在世界模型。
- 具身导航：今日 3 篇，覆盖流式 3D 空间记忆、预测性空间推理基准、场景可供性交互。
- LLM 剪枝与推理优化：今日 1 篇，面向解码阶段的剪枝。
- 多模态大模型剪枝：今日暂无新论文。
- 持续学习：今日 2 篇，经验巩固记忆与反思规则本递归自我改进。
- 事件相机视觉感知：今日 1 篇，置信度加权事件相机-LiDAR 地图定位。
- 3D 点云视觉感知：今日暂无新论文。
- 3D 点云感知与跟踪：今日暂无新论文。

## LLM Agent 与多智能体
### LLM Agent 工程
#### [A Closer Look at Agentic BBO: Benchmarking LLM Agents for Black-Box Optimization](http://arxiv.org/abs/2610.12183v1)
M. Chen, R.-X. Tan, K. Xue et al. | 2026-10-08。核心贡献：系统基准评测 LLM Agent 在昂贵黑箱优化中的工具、语义与反馈决策。关联：直接面向 LLM Agent 工程的任务评测与决策流程。
#### [Accurate but Not Humble: Evaluating Epistemic Humility in LLM Agents under Knowledge Conflict](http://arxiv.org/abs/2610.12360v1)
K. Sun, B. J. Gutierrez, H. Liu et al. | 2026-10-08。核心贡献：提出知识冲突下 Agent 认知谦逊评测。关联：补充 Agent 工程中的可靠性与自我校准评测。
#### [Narrow and Deep: An Ontology Tower as the Knowledge of an LLM Agent for an Industrial Equipment System](http://arxiv.org/abs/2610.11768v1)
Y. Joo, S.-i. Kim | 2026-10-08。核心贡献：为工业设备系统设计窄而深的本体塔作为 Agent 知识层。关联：展示领域本体注入对工业 Agent 工程的价值。

### Agent 测试时扩展与自我改进
#### [Agentic-TTT: Training test-time policy for test-time training](http://arxiv.org/abs/2610.12002v1)
J. Lu, M. Kankanhalli | 2026-10-08。核心贡献：训练测试时策略以决定和执行 TTT 参数更新。关联：直接属于 Agent 测试时训练与自我改进机制。
#### [Test-Time Compute for Tabular Foundation Models: Mechanisms, Gains, and Limits](http://arxiv.org/abs/2610.12005v1)
K. Ning, M. Biloš, J. T. Wilson et al. | 2026-10-08。核心贡献：沿适配、聚合、上下文构造三轴研究表格基础模型测试时计算。关联：为测试时扩展提供机制与边界分析，可迁移至 Agent 自我改进。

### LLM Agent Society
今日暂无新论文。

## 具身智能
### 视觉-语言-动作模型
#### [PathTime-VLA: Path-Time Decoupling for Factorized Post-Training of Vision-Language-Action Policies](http://arxiv.org/abs/2610.11771v1)
Q. Huang, Y. Yang, Z. Zou et al. | 2026-10-08。核心贡献：解耦路径与时间，因子化后训练 VLA 策略。关联：直接解决 VLA 遥操作适配中的几何引导与执行节奏耦合。
#### [Recompose and Refine Latent Reasoning Flows for Vision-Language-Action Models](http://arxiv.org/abs/2610.12090v1)
H. Shi, S. Zhao, Z. Zhang et al. | 2026-10-08。核心贡献：重组并精炼 VLA 潜在推理流，复用成功推理。关联：提升 VLA 内部状态推理与连续动作生成。
#### [PLaW-VLA: Predictive Latent World Modeling for Vision-Language-Action Policies](http://arxiv.org/abs/2610.12285v1)
Y. Liu, H. Guo, T. Huang et al. | 2026-10-08。核心贡献：用任务相关潜在世界模型为 VLA 提供预测上下文。关联：增强 VLA 长时程控制。

### 具身导航
#### [Slot3R: Set-Associative Spatial Memory for Streaming 3D Reconstruction](http://arxiv.org/abs/2610.12282v1)
X. Zhang, Y. Yang, K. Xu et al. | 2026-10-08。核心贡献：集合关联空间记忆，在线流式 3D 重建中按空间位置组织历史。关联：为具身导航提供持久空间记忆与在线场景重建。
#### [SpaceCast-Bench: Evaluating Predictive Spatial Reasoning in Vision-Language Models](http://arxiv.org/abs/2610.12402v1)
H. Li, J. Su, D. Li et al. | 2026-10-08。核心贡献：评测 VLM 的预测性空间推理而非仅空间感知。关联：为具身导航中的前瞻场景推演提供基准。
#### [MAMHOI: Factorizing Scene-Aware Human-Object Interaction through Affordances](http://arxiv.org/abs/2610.12416v1)
M. Lei, Y. Sung, T.-J. Cham | 2026-10-08。核心贡献：通过可供性分解场景感知人-物交互生成。关联：支撑具身导航中的交互可行性与场景可供性理解。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### [SparseDecoding: Decoding-Aware Pruning for Accurate and Efficient LLM Inference](http://arxiv.org/abs/2610.12327v1)
Q. Wang, X. Niu, M. Su et al. | 2026-10-08。核心贡献：面向解码阶段的剪枝，缓解 LLM 推理内存瓶颈。关联：直接对应 LLM 剪枝与推理优化。

### 多模态大模型剪枝
今日暂无新论文。

### 持续学习
#### [Use and Disuse: Intent-Structured Experience Consolidation for Memory and Learning in LLM Agents](http://arxiv.org/abs/2610.12124v1)
X. Zeng, B. Liu, X. Wang et al. | 2026-10-08。核心贡献：提出 Hippocam 层级记忆与持续学习架构，按意图巩固经验。关联：将 Agent 连续经验转为可复用知识，属于持续学习。
#### [Memento 3: Model-Based Recursive Self-Improvement through Reflective Rulebooks](http://arxiv.org/abs/2610.11794v1)
H. Zhao, Z. Yu, Z. He et al. | 2026-10-08。核心贡献：通过反思规则本进行模型式递归自我改进。关联：面向陌生环境中持续修正世界模型与自我改进。

## 视觉感知
### 事件相机视觉感知
#### [Learning Which Correspondences to Trust: Confidence-Weighted Event-Camera Localization in LiDAR Maps](http://arxiv.org/abs/2610.11967v1)
P. Kiousis, K. Chen, J. Zhang et al. | 2026-10-08。核心贡献：置信度加权事件相机与 LiDAR 地图对应关系，提升定位鲁棒性。关联：直接属事件相机视觉感知与定位。

### 3D 点云视觉感知
今日暂无新论文。

### 3D 点云感知与跟踪
今日暂无新论文。

## 跨方向信号
- VLA 从固定间隔动作生成转向路径-时间解耦、潜在推理流复用和预测性潜在世界模型，世界模型与内部推理成为长时程控制核心。
- Agent 记忆与持续学习融合：Hippocam、Memento 3 将经验巩固、反思规则本用于长期自治，与测试时扩展/自我改进相邻。
- 测试时计算研究扩展到表格基础模型与 TTT 策略学习，强调机制、收益与边界，而非单一刷榜。
- 效率优化聚焦解码阶段与结构稀疏：SparseDecoding 等解码感知剪枝继续针对 LLM 推理内存瓶颈。
- 空间智能与具身导航共享“预测性空间推理 + 空间记忆”：Slot3R、SpaceCast-Bench 等强调在线历史组织与干预后场景推演。

## 优先精读
- Agentic-TTT：直接提出训练测试时策略，把部署经验转成参数更新，是 Agent 测试时扩展与自我改进的核心机制。
- PLaW-VLA：明确建模任务相关潜在未来并条件化动作生成，代表 VLA 与潜在世界模型结合的关键路线。
- SparseDecoding：唯一 LLM 剪枝/推理优化新文献，面向解码实际瓶颈，对模型压缩方向有直接工程价值。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*