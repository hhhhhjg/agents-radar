# 实验室研究方向 Radar 2026-09-24

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 33 篇新文献 + 13 篇过去14天内已出现 | 生成时间：2026-09-24 00:10 UTC

---

## 今日总览
- **LLM Agent 与多智能体**
  - **LLM Agent 工程**：10 篇新文献，主线是 harness/runtime 控制、任务状态、多智能体协调与可靠性审计。
  - **Agent 测试时扩展与自我改进**：4 篇新文献，聚焦替代重复采样的搜索策略、生成器优化与长上下文压缩。
  - **LLM Agent Society**：今日暂无新论文。
- **具身智能**
  - **视觉-语言-动作模型**：11 篇新文献、1 篇过去14天已出现；几何监督、安全回滚、RL 专家路由和动作 token 化并行推进。
  - **具身导航**：3 篇新文献、4 篇过去14天已出现；稀疏语义感知、基础模型部署和协作跟踪值得关注。
- **模型压缩与持续学习**
  - **LLM 剪枝与推理优化**：1 篇新文献、3 篇过去14天已出现；omni-modal embedding 与 token 压缩仍活跃。
  - **多模态大模型剪枝**：1 篇新文献、1 篇过去14天已出现；条件可移除性成为新判据。
  - **持续学习**：3 篇新文献、5 篇过去14天已出现；模块化、MoE PEFT 与 agent 持续学习交织。
- **视觉感知**
  - **事件相机视觉感知**：1 篇新文献，事件补全与传播用于高速密集预测。
  - **3D 点云视觉感知**：2 篇新文献、1 篇过去14天已出现；地图先验与点云异常检测/基础模型。
  - **3D 点云感知与跟踪**：今日暂无新论文。

## LLM Agent 与多智能体
### LLM Agent 工程
#### [REFLEX with Jev for Efficient Selective Control in LLM Agents](http://arxiv.org/abs/2609.26532v1)
T. Wu 等｜2026-09-22｜核心：用 Jev 作快速类型化决策层，低置信再调强 LLM。关联：优化 agent harness 的决策成本/成功率权衡。
#### [Grow the Harness, Not the Context: From Strategy-Free Scaffolds to Reusable Specialist Agents](http://arxiv.org/abs/2609.26760v1)
L. Li 等｜2026-09-22｜核心：把重复控制决策沉淀为可复用可执行代码。关联：提升多任务 agent harness 的可扩展性。
#### [FIRE: Failure-Informed Runtime Engineering for Reliable Language-Model Agents](http://arxiv.org/abs/2609.26048v1)
N. Agarwal 等｜2026-09-22｜核心：在历史失败状态施加运行时指令与动作拒绝。关联：不改权重即可提升 agent 稳定性。
#### [Agensh: Scaling Organizational Intelligence to 1,024 Agents](http://arxiv.org/abs/2609.26781v1)
Z. Zhan 等｜2026-09-22｜核心：面向 1,024 agents 的组织级多智能体扩展。关联：挑战中心编排器的协调瓶颈。
#### [How Strongly Should Task State Influence an LLM Agent?](http://arxiv.org/abs/2609.25686v1)
C. Zhang 等｜2026-09-22｜核心：比较 prompt 文本状态与强制状态模块。关联：长程任务状态建模的工程取舍。
#### [Passes Alone, Fails Together: Benchmarking Semantic Coordination in Parallel LLM-Agent Development](http://arxiv.org/abs/2609.25396v1)
H. Xia 等｜2026-09-21｜核心：提出 stale 基准，测并行 coding agents 合并失败。关联：暴露多智能体语义协调风险。

### Agent 测试时扩展与自我改进
#### [Hill Sampling for Test-Time Scaling: A Simple and Better Alternative to Repeated Sampling, Evolution, and Training](http://arxiv.org/abs/2609.25510v1)
J. Beck 等｜2026-09-22｜核心：提出 Hill Sampling 替代重复采样/进化/测试时训练。关联：简化测试时扩展并提升可验证任务求解。
#### [Beyond Repeated Sampling: Learning Search Policies for LLM Reasoning](http://arxiv.org/abs/2609.26704v1)
I. Labiad 等｜2026-09-22｜核心：学习搜索策略而非独立重复采样。关联：让测试时计算更有方向性。
#### [Direct Optimization of Generators for Search in Automated Theorem Proving](http://arxiv.org/abs/2609.25575v1)
A. Ousherovitch 等｜2026-09-22｜核心：直接优化生成器以适配树搜索。关联：改进 LLM 在 ATP 搜索中的部署方式。
#### [CliffCompaction: Cost-Efficient Compaction for Long-Horizon Coding Agents](http://arxiv.org/abs/2609.26779v1)
T. Nguyen 等｜2026-09-22｜核心：自动压缩跨会话上下文，成本最高降 50%。关联：支撑长程 agent 自我改进与持续运行。

## 具身智能
### 视觉-语言-动作模型
#### [HABILIS Brain 0: Geometry-Change Supervision for Vision-Language-Action and Residual Flow Recovery](http://arxiv.org/abs/2609.25558v1)
J. Pahk 等｜2026-09-22｜核心：用几何变化监督与残差流恢复学习具身无关视觉接口。关联：增强 VLA 操作泛化。
#### [SafeLoop: Risk-Aware Rollback for Vision-Language-Action Manipulation](http://arxiv.org/abs/2609.26313v1)
Z. Lou 等｜2026-09-22｜核心：长程 VLA 操作的风险感知回滚。关联：降低碰撞/掉物等不可逆失败。
#### [RouteRLT: Learning When and Which RL Specialist Should Control a Vision-Language-Action Policy](http://arxiv.org/abs/2609.26467v1)
C. Zhu 等｜2026-09-22｜核心：学习何时调用哪个 RL 专家控制 VLA。关联：弥补 VLA 在精密工业操作中的不足。
#### [Beyond Reconstruction Error: Analytical and Data-Driven Action Tokenization for Autoregressive Vision-Language-Action Models](http://arxiv.org/abs/2609.25820v1)
Y. Yang 等｜2026-09-22｜核心：比较解析式与数据驱动动作 token 化对闭环控制的影响。关联：重新审视 VLA 动作表示评价标准。
#### [MachEmbodied-U0: Unified Understanding and Generation Model for Embodied Intelligence](http://arxiv.org/abs/2609.25627v1)
H. Wen 等｜2026-09-22｜核心：统一理解与生成，显式建模场景动态和动作。关联：补足 VLA 对场景演化建模的不足。
#### [RoboFollow: Unveiling the Instruction Following Mirage in Embodied Agents](http://arxiv.org/abs/2609.25636v1)
C. Guo 等｜2026-09-22｜核心：揭示低场景熵下指令遵循成功率虚高。关联：提醒 VLA 评测需控制语言冗余。
#### [MedVLA: A Hierarchical Vision-Language-Action Framework for Closed-Loop Precision Medical Robot Manipulation](http://arxiv.org/abs/2609.25756v1)
J. Xie 等｜2026-09-22｜核心：面向精密医疗的分层 VLA 闭环框架。关联：强调安全、可解释与执行约束。

### 具身导航
#### [SparseNav: Instruction-conditioned Sparse Semantic Perception for Training-Free Vision-Language Navigation](http://arxiv.org/abs/2609.26408v1)
Q. Chen 等｜2026-09-22｜核心：按指令稀疏获取语义，免训练 VLN。关联：降低导航感知与标注成本。
#### [Deploying Foundation Models for Embodied Navigation](http://arxiv.org/abs/2609.25666v1)
V. S. Dorbala 等｜2026-09-22｜核心：解决 FM 训练偏差与上下文长度限制。关联：提升长程导航个性化与成功率。
#### [CDKF-Track: Cluster-aware Data-Driven Kalman Filtering for Cooperative 3D Multi-Object Tracking](http://arxiv.org/abs/2609.25668v1)
M. Damanaki 等｜2026-09-22｜核心：聚类感知数据驱动 Kalman 用于协作 3D MOT。关联：支撑边缘具身导航感知。
#### 🔁 **【过去14天内已出现】** [What do VLM-Based Vision-Language Navigation Models Rely on: Interpreting and Steering Policy Behavior](http://arxiv.org/abs/2609.24576v1)
D. O. Makowski 等｜2026-09-21｜核心：解释并引导 VLN 策略行为。关联：提升 VLM 导航可解释性。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### [Ovis-Embedding: Pushing the Frontiers of Universal Omni-Modal Embeddings](http://arxiv.org/abs/2609.25165v1)
Ovis-Embedding Team｜2026-09-21｜核心：共享多模态骨干编码文本/图/视频/音频。关联：减少多塔推理开销，但非经典剪枝。
#### 🔁 **【过去14天内已出现】** [SLICEChat: Progressive In-Encoder Token Pruning for Whole-Slide Pathology Language Models](http://arxiv.org/abs/2609.24894v1)
A. K. Bozkurt 等｜2026-09-21｜核心：编码器内渐进 token pruning 处理 gigapixel WSI。关联：病理 MLLM 推理优化。

### 多模态大模型剪枝
#### [From Token Importance to Conditional Removability: Rethinking Visual Token Pruning in Multimodal Large Language Models](http://arxiv.org/abs/2609.26484v1)
S. He 等｜2026-09-22｜核心：提出可移除性受表示深度和删除集条件影响。关联：改进 MLLM 视觉 token 剪枝判据。
#### 🔁 **【过去14天内已出现】** [VPRune: Efficient Training-free Pre-LLM Visual Token Pruning](http://arxiv.org/abs/2609.24485v2)
G. Lv 等｜2026-09-21｜核心：训练无关的前置视觉 token 剪枝，分析文本引导偏差。关联：降低 LVLM 推理成本。

### 持续学习
#### [From Experts to Sub-experts: Fine-grained Parameter-Efficient Fine-Tuning for MoE LLMs](http://arxiv.org/abs/2609.25655v1)
Z. Tan 等｜2026-09-22｜核心：在 MoE 子专家粒度做 PEFT。关联：模块化适配有利于持续学习。
#### [Brain-Inspired Hierarchical Modularity for General Continual Learning](http://arxiv.org/abs/2609.25146v1)
H. Yan 等｜2026-09-21｜核心：类脑层级模块化用于通用持续学习。关联：应对无任务边界连续经验。
#### 🔁 **【过去14天内已出现】** [Muon Can Outperform Dedicated Continual Learning Methods](http://arxiv.org/abs/2609.24678v1)
S. G. Sincari 等｜2026-09-21｜核心：Muon 更新分布影响 LoRA 持续学习遗忘。关联：优化器与持续学习交叉。
#### 🔁 **【过去14天内已出现】** [iSDFT: Information-Proximal Self-Distillation for Continual Learning in LLMs](http://arxiv.org/abs/2609.24646v1)
A. K. Khamis 等｜2026-09-21｜核心：信息近端自蒸馏，可控演示信息量。关联：减少 LLM 持续学习遗忘。
#### 🔁 **【过去14天内已出现】** [ACLArena: Agent Continue Learning in Multi-stage Post-training](http://arxiv.org/abs/2609.23989v1)
H. Wang 等｜2026-09-21｜核心：多阶段后训练下的 Agent 持续学习基准。关联：连接 agent 能力集成与持续学习。

## 视觉感知
### 事件相机视觉感知
#### [LiFR v2: Completion-Augmented Event Propagation for High-Rate Dense Prediction](http://arxiv.org/abs/2609.25803v1)
T. Wan 等｜2026-09-22｜核心：事件补全增强传播，用于高帧率密集预测。关联：缓解事件稀疏与 RGB 低帧率矛盾。

### 3D 点云视觉感知
#### [Leveraging Vision-Based Point Cloud Map Priors for Camera-Based 3D Object Detection and Online Vectorized HD Mapping](http://arxiv.org/abs/2609.26325v1)
M. Käppeler 等｜2026-09-22｜核心：利用点云地图先验提升相机 3D 检测与在线 HD 制图。关联：缓解单目深度歧义。
#### [AT3D-AD: Anomaly Type-Aware 3D Anomaly Detection via Hierarchical Point-Language Alignment](http://arxiv.org/abs/2609.25930v1)
J. Zeng 等｜2026-09-22｜核心：异常类型感知与层级点-语言对齐。关联：提升 3D 点云缺陷定位。
#### 🔁 **【过去14天内已出现】** [Toward a foundation model for forest point clouds](http://arxiv.org/abs/2609.24787v1)
Y. Yue 等｜2026-09-21｜核心：面向森林点云的基础模型，跨任务/传感器/林型适应。关联：点云基础模型方向。

## 跨方向信号
- Agent 工程从“换模型”转向“加控制层”：REFLEX、FIRE、Grow the Harness、CliffCompaction 均强调 harness/runtime 策略。
- 测试时扩展从重复采样转向策略化搜索与验证：Hill Sampling、Beyond Repeated Sampling、Direct Optimization 共享该趋势。
- VLA 可靠性成为主线：SafeLoop、RouteRLT、HABILIS、RoboFollow 分别处理风险、专家路由、几何监督和评测幻觉。
- 压缩与持续学习交叉加深：条件可移除性、MoE 子专家 PEFT、模块化持续学习、LoRA 优化器共同指向细粒度适配。
- 具身导航与 VLA 共享基础模型/地图先验：SparseNav、Deploying FMs、点云地图先验、CDKF-Track 均强调感知-规划耦合。

## 优先精读
- [Hill Sampling for Test-Time Scaling](http://arxiv.org/abs/2609.25510v1)：直接挑战重复采样、进化和测试时训练，可能成为 Agent 自我改进的新基线。
- [HABILIS Brain 0](http://arxiv.org/abs/2609.25558v1)：以几何变化监督和残差流恢复提升 VLA 泛化，具身视觉接口思路清晰。
- [From Token Importance to Conditional Removability](http://arxiv.org/abs/2609.26484v1)：重新定义多模态 token 可移除性，对 MLLM 剪枝与推理优化有直接方法价值。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*