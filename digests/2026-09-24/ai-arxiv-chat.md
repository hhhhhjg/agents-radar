# 实验室研究方向 Radar 2026-09-24

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 19 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-24 00:10 UTC

---

## 今日总览
- **LLM Agent 与多智能体 / LLM Agent 工程**：3 篇新文献，聚焦低成本选择性控制、社会关系推理与后训练交付基准。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：3 篇新文献，从重复采样转向采样调度/搜索策略，并关注编码 Agent 上下文压缩成本。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：5 篇新文献，分方向保留 3 篇；覆盖几何变化监督、医疗精准操作与 RL 专家路由，另 2 篇交叉至具身导航与持续学习。
- **具身智能 / 具身导航**：3 篇新文献，涉及指令条件稀疏感知、基础模型部署限制与合作 3D MOT。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：1 篇新文献，偏统一多模态嵌入与共享骨干，非直接剪枝但关涉部署效率。
- **模型压缩与持续学习 / 多模态大模型剪枝**：1 篇新文献，重新思考视觉 token 可移除性条件。
- **模型压缩与持续学习 / 持续学习**：3 篇新文献中 2 篇直接入本方向，聚焦 MoE 子专家 PEFT 与脑启发模块化；1 篇更偏 Agent 长时上下文压缩。
- **视觉感知 / 事件相机视觉感知**：1 篇新文献，事件传播与补全用于高更新率密集预测。
- **视觉感知 / 3D 点云视觉感知**：2 篇新文献，点云地图先验服务相机 3D 检测/HD 地图，点-语言对齐用于 3D 异常检测。
- **视觉感知 / 3D 点云感知与跟踪**：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程
#### [REFLEX with Jev for Efficient Selective Control in LLM Agents](http://arxiv.org/abs/2609.26532v1)
- 作者：T. Wu, W. Y. B. Lim | 发布：2026-09-22 | 核心：用 Jev 作为快速类型化决策层，低置信度时才调用强 LLM。 | 关联：直接服务 Agent 高效选择性控制与成功率平衡。
#### [When LLM Agents Fail to Read the Room: ReAdapt for Relational Social Reasoning](http://arxiv.org/abs/2609.25284v1)
- 作者：J. Lin, X. Li, Y. Liu 等 | 发布：2026-09-21 | 核心：提出 ReAdapt，面向潜在社会关系而非内容显著性的社会推理。 | 关联：补充 Agent 在社会关系场景中的决策适应。
#### [Trains but Doesn't Learn: A Post-Training Delivery Benchmark for LLM Agents as Forward-Deployed Engineers](http://arxiv.org/abs/2609.25237v1)
- 作者：W. Ding, J. Zhan | 发布：2026-09-21 | 核心：构建 LLM Agent 作为前向部署工程师的后训练交付基准。 | 关联：关注预算、审批与可复现约束下的真实交付流程。

### Agent 测试时扩展与自我改进
#### [Hill Sampling for Test-Time Scaling: A Simple and Better Alternative to Repeated Sampling, Evolution, and Training](http://arxiv.org/abs/2609.25510v1)
- 作者：J. Beck, P. V. Ogren, A. Kobren | 发布：2026-09-22 | 核心：提出 Hill Sampling，作为重复采样、进化和测试时训练的简单替代。 | 关联：直接改进 Agent 测试时扩展的采样效率与简单性。
#### [Beyond Repeated Sampling: Learning Search Policies for LLM Reasoning](http://arxiv.org/abs/2609.26704v1)
- 作者：I. Labiad, M. Kowalski, M. Schoenauer 等 | 发布：2026-09-22 | 核心：学习搜索策略以替代朴素重复采样。 | 关联：属于 Agent 自我改进中的测试时搜索策略学习。
#### [CliffCompaction: Cost-Efficient Compaction for Long-Horizon Coding Agents](http://arxiv.org/abs/2609.26779v1)
- 作者：T. Nguyen, E. Cho, B. Chen 等 | 发布：2026-09-22 | 核心：自动压缩长时程编码 Agent 上下文，在有限上下文下降本。 | 关联：提升长时程 Agent 的测试时扩展经济性，交叉持续学习但更偏记忆管理。

### LLM Agent Society
今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型
#### [HABILIS Brain 0: Geometry-Change Supervision for Vision-Language-Action and Residual Flow Recovery](http://arxiv.org/abs/2609.25558v1)
- 作者：J. Pahk, J. Kang, T. Park 等 | 发布：2026-09-22 | 核心：用几何变化监督与残差流恢复增强 VLA，学习跨具身视觉接口。 | 关联：直接面向 VLA 几何监督与跨机器人预训练。
#### [MedVLA: A Hierarchical Vision-Language-Action Framework for Closed-Loop Precision Medical Robot Manipulation](http://arxiv.org/abs/2609.25756v1)
- 作者：J. Xie, C. He, A. Ye 等 | 发布：2026-09-22 | 核心：提出分层 VLA 框架，用于闭环精准医疗机器人操作。 | 关联：将 VLA 推进到安全、可解释、约束严格的医疗操作。
#### [RouteRLT: Learning When and Which RL Specialist Should Control a Vision-Language-Action Policy](http://arxiv.org/abs/2609.26467v1)
- 作者：C. Zhu, J. Hinds, H. Kim 等 | 发布：2026-09-22 | 核心：学习何时及由哪个 RL 专家接管 VLA 策略。 | 关联：针对 VLA 在接触密集高精度阶段的强化学习精调与路由。

### 具身导航
#### [SparseNav: Instruction-conditioned Sparse Semantic Perception for Training-Free Vision-Language Navigation](http://arxiv.org/abs/2609.26408v1)
- 作者：Q. Chen, J. Kang, R. Lin 等 | 发布：2026-09-22 | 核心：提出指令条件稀疏语义感知，实现免训练视觉语言导航。 | 关联：减少超出指令需求的感知成本，直接服务具身导航。
#### [Deploying Foundation Models for Embodied Navigation](http://arxiv.org/abs/2609.25666v1)
- 作者：V. S. Dorbala, D. Manocha | 发布：2026-09-22 | 核心：研究基础模型在具身导航中的训练偏差与上下文长度限制。 | 关联：面向未知环境个性化与长时程导航部署。
#### [CDKF-Track: Cluster-aware Data-Driven Kalman Filtering for Cooperative 3D Multi-Object Tracking](http://arxiv.org/abs/2609.25668v1)
- 作者：M. Damanaki, N. Piperigkos, A. Gkillas 等 | 发布：2026-09-22 | 核心：提出聚类感知数据驱动卡尔曼滤波，用于协作 3D 多目标跟踪。 | 关联：为具身/EdgeAI 感知提供协作定位与可靠识别。

## 模型压缩与持续学习

### LLM 剪枝与推理优化
#### [Ovis-Embedding: Pushing the Frontiers of Universal Omni-Modal Embeddings](http://arxiv.org/abs/2609.25165v1)
- 作者：Ovis-Embedding Team | 发布：2026-09-21 | 核心：提出原生融合文本、图像、视频、音频的 omni-modal embedding 家族，使用共享多模态骨干。 | 关联：与直接剪枝较弱，但共享骨干减少分离模态塔集成开销，关联部署与推理效率。

### 多模态大模型剪枝
#### [From Token Importance to Conditional Removability: Rethinking Visual Token Pruning in Multimodal Large Language Models](http://arxiv.org/abs/2609.26484v1)
- 作者：S. He, Y. Liang, R. He 等 | 发布：2026-09-22 | 核心：表明 token 重要/冗余不足以刻画可移除性，需考虑表示深度与删除集合。 | 关联：直接重思多模态大模型视觉 token 剪枝准则。

### 持续学习
#### [From Experts to Sub-experts: Fine-grained Parameter-Efficient Fine-Tuning for MoE LLMs](http://arxiv.org/abs/2609.25655v1)
- 作者：Z. Tan, C. Liu, Y. Liu 等 | 发布：2026-09-22 | 核心：探索 MoE LLM 的参数高效微调粒度，从专家到子专家。 | 关联：以稀疏模块化适配缓解全参微调成本，服务持续适应。
#### [Brain-Inspired Hierarchical Modularity for General Continual Learning](http://arxiv.org/abs/2609.25146v1)
- 作者：H. Yan, K. Zhou, Q. Cheng 等 | 发布：2026-09-21 | 核心：提出脑启发层次模块化，用于一般持续学习。 | 关联：面向无清晰任务边界与离线任务式训练的持续学习。

## 视觉感知

### 事件相机视觉感知
#### [LiFR v2: Completion-Augmented Event Propagation for High-Rate Dense Prediction](http://arxiv.org/abs/2609.25803v1)
- 作者：T. Wan, X. Wu, Y. Yu 等 | 发布：2026-09-22 | 核心：用补全增强事件传播，融合稀疏事件与密集 RGB 做高更新率密集预测。 | 关联：直接提升事件相机在动态场景中的稠密感知。

### 3D 点云视觉感知
#### [Leveraging Vision-Based Point Cloud Map Priors for Camera-Based 3D Object Detection and Online Vectorized HD Mapping](http://arxiv.org/abs/2609.26325v1)
- 作者：M. Käppeler, R. Mohan, A. Valada | 发布：2026-09-22 | 核心：利用视觉点云地图先验缓解相机 3D 检测与在线 HD 地图的深度歧义。 | 关联：点云先验增强相机 3D 感知的度量几何。
#### [AT3D-AD: Anomaly Type-Aware 3D Anomaly Detection via Hierarchical Point-Language Alignment](http://arxiv.org/abs/2609.25930v1)
- 作者：J. Zeng, H. Lu, C. Gao | 发布：2026-09-22 | 核心：通过层次化点-语言对齐实现异常类型感知的 3D 异常检测。 | 关联：面向工业点云缺陷定位，提升 3D 点云视觉感知细粒度。

### 3D 点云感知与跟踪
今日暂无新论文。

## 跨方向信号
- VLA 与具身导航共同转向基础模型/几何监督的部署约束：HABILIS、MedVLA、Deploying FMs 均处理安全、偏差或长时程问题。
- Agent 测试时扩展从“更多采样”转向“更聪明采样/搜索”：Hill Sampling、Beyond Repeated Sampling；CliffCompaction 显示长时程上下文成本成为瓶颈。
- 参数高效与持续学习融合：MoE 子专家 PEFT、脑启发模块化，均强调有限更新下保持适应。
- 多模态压缩与感知相互靠近：视觉 token 条件可移除性、点云地图先验、点-语言对齐都在减少冗余或补足几何。
- 高更新率与长期部署需求推动事件相机、点云地图先验和协作 3D MOT 结合。

## 优先精读
1. [HABILIS Brain 0](http://arxiv.org/abs/2609.25558v1)：VLA 几何变化监督与跨具身视觉接口，可能影响操作策略预训练范式。
2. [Hill Sampling for Test-Time Scaling](http://arxiv.org/abs/2609.25510v1)：直接挑战重复采样/进化/测试时训练，方法简单，适合作为 Agent 测试时扩展基线。
3. [From Token Importance to Conditional Removability](http://arxiv.org/abs/2609.26484v1)：重新定义视觉 token 可移除性，对多模态大模型剪枝与推理优化有直接方法价值。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*