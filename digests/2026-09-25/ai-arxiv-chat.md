# 实验室研究方向 Radar 2026-09-25

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 17 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-25 00:12 UTC

---

## 今日总览

按配置顺序：

- **LLM Agent 工程（LLM Agent 与多智能体）**：4 篇新文献，0 篇过去14天已出现。进展集中在实时状态条件化、领域约束上下文工程、任务自适应记忆与 agentic 能力扩展规律。
- **Agent 测试时扩展与自我改进**：2 篇新文献，0 篇过去14天已出现。关注协调并行推理路径、减少冗余采样，以及用能力流形刻画扩展收益。
- **LLM Agent Society**：今日暂无新论文。
- **视觉-语言-动作模型**：3 篇新文献，0 篇过去14天已出现。覆盖 episode 级记忆、优势引导后训练、TAMP 示范微调。
- **具身导航**：4 篇新文献，0 篇过去14天已出现。语义地图数据生成、主动记忆零样本导航、VLM 度量感知、4D 雷达视觉 3D 检测等构成主线。
- **LLM 剪枝与推理优化**：2 篇新文献，0 篇过去14天已出现。运行时 slack 回收加速驾驶推理，ViT 任务诱导几何度量。
- **多模态大模型剪枝**：今日暂无新论文。
- **持续学习**：2 篇新文献，0 篇过去14天已出现。微缩放卷积张量重塑与低参正交矩阵黎曼优化。
- **事件相机视觉感知**：1 篇新文献，0 篇过去14天已出现。用预测未来抵消事件检测延迟。
- **3D 点云视觉感知**：1 篇新文献，0 篇过去14天已出现。4D 雷达与相机几何接地语义 3D 检测。
- **3D 点云感知与跟踪**：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [State-Grounded Conditioning: Wrapping User-Facing LLM Agents Where Direction Depends on Live State](http://arxiv.org/abs/2609.27606v1)
Q. Liu, X. Yuan, Y. Ruan 等 | 2026-09-23 | 提出 SGC，面向依赖实时用户状态的 LLM Agent，识别“方向漂移”失败。 | 关联：直接针对 Agent 工程中实时状态、会话历史与动态库存的条件化设计。

#### [Just-in-Time Memory: Learning to Curate Task-Adaptive Memory for LLM Agents](http://arxiv.org/abs/2609.27334v1)
Y. Zhou, Y. Li, Z. L. Liu 等 | 2026-09-23 | 提出即时记忆，主张在任务时动态策划记忆而非写入时固化。 | 关联：面向 LLM Agent 记忆工程，提升跨任务复用与自适应检索能力。

#### [Constraint-Driven Context Engineering: Designing Domain Interfaces for AI Systems](http://arxiv.org/abs/2609.27354v1)
X. Xu, C. Wang, M. Yang 等 | 2026-09-23 | 从行业部署中总结约束驱动上下文工程，用于设计领域 AI 接口。 | 关联：为 Agent 工程提供技术、监管、制度与规范约束下的上下文接口范式。

### Agent 测试时扩展与自我改进

#### [Planned Test-Time Scaling with Coordinated Reasoning Paths](http://arxiv.org/abs/2609.27374v1)
X. Wu, L. Bai, H. Bansal 等 | 2026-09-23 | 提出协调推理路径的规划式测试时扩展，减少独立重复采样。 | 关联：直接改进并行分支推理效率，是 Agent 测试时扩展核心方法。

#### [The Capability Manifold and ML Scaling Laws](http://arxiv.org/abs/2609.27588v1)
S. A. R. Zaidi, M. Hafeez | 2026-09-23 | 提出能力流形视角，指出仅用 loss 不足以刻画 agentic harness 下游能力。 | 关联：为测试时扩展与自我改进提供超越损失的能力评估与扩展规律框架。

### LLM Agent Society

今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [MemBodied: Recurrent Associative Memory for Vision-Language-Action Models](http://arxiv.org/abs/2609.28256v1)
T. D. Pala, N. Majumder, B. Goh 等 | 2026-09-23 | 为 VLA 引入循环联想记忆，保留 episode 级信息。 | 关联：直接解决历史依赖操作中 VLA 仅依赖当前观测的局限。

#### [Dissecting Advantage-Guided Post-Training for Vision-Language-Action Policies](http://arxiv.org/abs/2609.28161v1)
J. Cao, H. Zhao, H. Lai 等 | 2026-09-23 | 系统拆解优势引导强化学习后训练 VLA 的关键耦合选择。 | 关联：面向有限机器人数据下的 VLA 策略后训练与性能校准。

#### [TANDEM: Task and Motion Planning with As-Needed Demonstrations for Efficient Vision-Language-Action Model Fine-tuning](http://arxiv.org/abs/2609.28314v1)
S. Sahoo, L. Ji, T. Silver 等 | 2026-09-23 | 用任务与运动规划按需生成示范，减少人类遥操作数据。 | 关联：提升 VLA 微调数据采集效率，连接 TAMP 与机器人基础模型。

### 具身导航

#### [NaviScale: Generating Large-Scale Semantic Map Datasets for Object Navigation](http://arxiv.org/abs/2609.27218v1)
C. Lan, Y. Zheng, W. Liu 等 | 2026-09-23 | 提出 NaviScale，生成大规模语义地图数据用于 ObjectNav。 | 关联：直接缓解具身导航中跨环境语义地图标注数据稀缺问题。

#### [NavProbe: Evidence-Grounded Reasoning with Active Memory Retrieval for Zero-Shot Navigation](http://arxiv.org/abs/2609.27526v1)
J. Liu, S. Yao, J. Gu 等 | 2026-09-23 | 提出分层零样本导航 Agent，用主动记忆检索进行证据接地推理。 | 关联：面向长程导航中目标修订与视觉历史压缩的核心矛盾。

#### [VLMs Can Describe, But Not Measure: Object-Centric Scene Understanding for Robotic Manipulation](http://arxiv.org/abs/2609.28184v1)
E. Saccon, T. Faraci, I. De La Ossa Zarzuelo 等 | 2026-09-23 | 指出 VLM 语义强但几何估计弱，提出对象中心模块化感知。 | 关联：其语义与度量分离思路可服务导航感知前端，但实验聚焦机器人操作。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [SlackDrive: Reclaiming Runtime Slack for Adaptive Driving Inference](http://arxiv.org/abs/2609.28064v1)
X. Pei, H. Zhou, Y. Ban 等 | 2026-09-23 | 回收运行时 slack，自适应加速驾驶 world-action 模型推理。 | 关联：直接面向多模态推理实时延迟，属于推理优化与动态计算分配。

#### [Task-Induced Riemannian Metrics for Vision Transformer Feature Spaces](http://arxiv.org/abs/2609.27988v1)
A. Bond, E. E. Özlü, T. Çimen 等 | 2026-09-23 | 为 ViT 特征空间引入任务诱导黎曼度量，替代默认欧氏或余弦距离。 | 关联：任务敏感几何可影响 ViT 推理、相似度判断及后续压缩操作。

### 多模态大模型剪枝

今日暂无新论文。

### 持续学习

#### [MicroQonv: Reshaping Convolution Tensors for Efficient Microscaling in Training and Inference](http://arxiv.org/abs/2609.28358v1)
R. Facq, S. Ben Ali, O. Sentieys | 2026-09-23 | 重塑卷积张量，以高效应用微缩放量化于训练和推理。 | 关联：为持续学习部署中的低比特训练与推理提供压缩效率基础。

#### [Riemannian Structure and Optimization for a Class of Low-Parametric Orthogonal Matrices](http://arxiv.org/abs/2609.27982v1)
A. Aliev, M. Rakhuba | 2026-09-23 | 研究块对角因子与固定置换交错形成的低参正交矩阵及其黎曼优化。 | 关联：其结构化矩阵优化可为持续学习中的参数约束与高效更新提供工具。

## 视觉感知

### 事件相机视觉感知

#### [Bend the Clock: Predicting Ahead to Beat Latency in Event-Based Object Detection](http://arxiv.org/abs/2609.26919v1)
B. Sen, B. R. Cottereau, N. Cuperlier 等 | 2026-09-22 | 通过预测未来抵消事件相机目标检测的计算延迟。 | 关联：直接针对事件相机低延迟检测中预测陈旧问题。

### 3D 点云视觉感知

#### [SGDet3D++: Geometry-Grounded Semantics for 4D Radar and Camera 3D Object Detection](http://arxiv.org/abs/2609.27671v1)
X. Bai, Z. Fan, L. Zheng 等 | 2026-09-23 | 提出几何接地语义，用于 4D 雷达与相机 3D 目标检测。 | 关联：直接提升雷达—相机融合的 3D 空间证据对齐与目标假设支撑。

### 3D 点云感知与跟踪

今日暂无新论文。

## 跨方向信号

- **记忆管理成为跨方向主线**：MemBodied、Just-in-Time Memory、NavProbe、State-Grounded Conditioning 均从静态记忆转向 episode 级、实时或任务自适应记忆。
- **测试时与后训练计算更精细化**：Planned Test-Time Scaling、Dissecting Advantage-Guided Post-Training、SlackDrive 分别优化并行推理、优势后训练与运行时 slack。
- **语义与几何度量融合加速**：VLMs Can Describe, But Not Measure、SGDet3D++、Task-Induced Riemannian Metrics 共同强调语义之外还需任务敏感几何与度量。
- **数据与示范效率持续升温**：TANDEM、NaviScale、Just-in-Time Memory 关注按需示范、合成数据与记忆复用，降低机器人/Agent 数据瓶颈。
- **低延迟实时推理成为共性约束**：Bend the Clock 与 SlackDrive 分别从事件感知和驾驶推理切入，强调预测与动态计算分配。

## 优先精读

#### [MemBodied: Recurrent Associative Memory for Vision-Language-Action Models](http://arxiv.org/abs/2609.28256v1)：VLA 历史依赖操作的关键补丁，且记忆机制可迁移至 LLM Agent 与导航。
#### [Planned Test-Time Scaling with Coordinated Reasoning Paths](http://arxiv.org/abs/2609.27374v1)：测试时扩展的代表性改进，直接关系 Agent 自我改进与推理效率。
#### [Just-in-Time Memory: Learning to Curate Task-Adaptive Memory for LLM Agents](http://arxiv.org/abs/2609.27334v1)：任务自适应记忆管理通用性强，对 LLM Agent 工程和具身导航均有参考价值。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*