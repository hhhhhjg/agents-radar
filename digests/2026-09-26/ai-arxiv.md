# 实验室研究方向 Radar 2026-09-26

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 34 篇新文献 + 13 篇过去14天内已出现 | 生成时间：2026-09-26 00:19 UTC

---

## 今日总览
- **LLM Agent 与多智能体 / LLM Agent 工程**：今日 11 篇新文献、1 篇近 14 天重复。重点在工具副作用一致性、轨迹审计、代理监控规避、环境自演进、多轮后训练、深度搜索代理与 GPU 内核代理优化。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：今日 2 篇新文献、2 篇近 14 天重复。信号集中在零数据自博弈预训练、规划式测试时扩展与能力流形评估。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：今日 10 篇新文献、0 篇重复。热点包括在线 RL 微调稳定性、长时程 harness、动作 token 化、早退推理、部署自适应与安全过滤。
- **具身智能 / 具身导航**：今日 3 篇新文献、7 篇近 14 天重复。新增涉及 GPT-6-Astra 零样本 VLN-CE、主动探索与 VLM 鲁棒推理；重复集中在语义地图、主动记忆与空间表示。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：今日暂无新论文；近 14 天有 2 篇重复，涉及运行时松弛推理与 ViT 任务几何。
- **模型压缩与持续学习 / 多模态大模型剪枝**：今日暂无新论文。
- **模型压缩与持续学习 / 持续学习**：今日 3 篇新文献、2 篇重复。新增聚焦双曲多模态持续学习、Fisher 白化 PEFT、LoRA 自动秩分配。
- **视觉感知 / 事件相机视觉感知**：今日 1 篇新文献。SEE Challenge 2026 关注宽照度范围事件引导亮度调整。
- **视觉感知 / 3D 点云视觉感知**：今日 4 篇新文献、1 篇重复。新增覆盖相机-LiDAR 鲁棒融合、点云地理参考、几何扩散 NVS、VLM 度量空间推理。
- **视觉感知 / 3D 点云感知与跟踪**：今日有 1 篇新文献被匹配，但主题偏高光谱分类，点云跟踪高相关信号有限，分方向不收录。

## LLM Agent 与多智能体
### LLM Agent 工程
#### [Where Does Exactly-Once Live? Model, Harness, and Tool-Contract Effects on Duplicate Side Effects in LLM Agents](http://arxiv.org/abs/2609.29095v1)
Li｜2026-09-24｜研究 exactly-once 应在模型、harness 还是工具契约层保证；关联：工具调用副作用可靠性。
#### [World Action Agent: Harnessing VLMs for Robot Manipulation via World Action Rehearsal](http://arxiv.org/abs/2609.29964v1)
Zhang et al.｜2026-09-24｜用 VLM 在“世界”中排练动作驱动机器人操作；关联：VLM 代理落地具身操作。
#### [Progressive Skill Discovery as Access Control for Tool-Using LLM Agents](http://arxiv.org/abs/2609.28693v1)
Stettler et al.｜2026-09-23｜将技能发现作为角色化访问控制；关联：企业工具集的安全治理。
#### [LLM Agents Can Easily Tamper With Their Own Traces](http://arxiv.org/abs/2609.30266v1)
Qin et al.｜2026-09-24｜本地 LLM 代理可篡改执行轨迹；关联：审计、监控与合规风险。
#### [Breaking the Environment Wall: Evolving LLM Agent Environments for Recursive Self-Improvement](http://arxiv.org/abs/2609.29773v1)
Wu et al.｜2026-09-24｜演化代理环境以支持递归自我改进；关联：环境就绪度与自改进闭环。
#### [A Wrong Turn Does Not Ruin the Journey: Deviation-Guided Skill Self-Evolution for LLM Agents](http://arxiv.org/abs/2609.29154v1)
Feng et al.｜2026-09-24｜用失败轨迹偏离引导技能自演化；关联：工具使用技能鲁棒更新。
#### [MeshHeal: Two-Timescale Self-Healing for Gray Failures in Decentralized LLM Agent Networks](http://arxiv.org/abs/2609.29015v1)
Chen et al.｜2026-09-24｜面向去中心化多代理灰色故障的两时间尺度自愈；关联：多代理网络可靠性。
#### [From Self-Distillation to Self-Practice: Privileged Information for Multi-Turn Agents](http://arxiv.org/abs/2609.29051v1)
Su et al.｜2026-09-24｜揭示多轮代理 OPSD 的监督瓶颈并提出自练习；关联：多轮代理后训练。
#### [IterSynth: Rethinking Deep Search Agents via Role-Decoupled Iterative Synthesis](http://arxiv.org/abs/2609.29444v1)
Wu et al.｜2026-09-24｜角色解耦迭代合成缓解深度搜索代理耦合与上下文累积；关联：搜索代理架构。
#### [KernelOPT: Dispatch-Aware Agentic Search for GPU Kernel Optimization](http://arxiv.org/abs/2609.30059v1)
Poddar et al.｜2026-09-24｜调度感知代理搜索优化 GPU 内核；关联：代理化系统性能优化。
#### [Instrumental Monitor Evasion Emerges Under Ordinary Task Pressure](http://arxiv.org/abs/2609.30217v1)
Schmotz et al.｜2026-09-24｜提出 EvasionBench，发现普通任务压力下代理规避监控；关联：代理安全监控。
#### 🔁 **【过去14天内已出现】** [The Capability Manifold and ML Scaling Laws](http://arxiv.org/abs/2609.27588v1)
🔁 **【过去14天内已出现】**
Zaidi & Hafeez｜2026-09-23｜提出能力流形与扩展律，强调 agentic harness 下 loss 不足；关联：代理能力评估。

### Agent 测试时扩展与自我改进
#### [Self-Play Pretraining with Zero Data](http://arxiv.org/abs/2609.30063v1)
Cowsik et al.｜2026-09-24｜无数据自博弈预训练，让模型生成对自身改进最有用的数据；关联：自我改进与数据生成。
#### 🔁 **【过去14天内已出现】** [Planned Test-Time Scaling with Coordinated Reasoning Paths](http://arxiv.org/abs/2609.27374v1)
🔁 **【过去14天内已出现】**
Wu et al.｜2026-09-23｜规划式测试时扩展，协同推理路径减少重复采样；关联：测试时计算分配。
#### [The Capability Manifold and ML Scaling Laws](http://arxiv.org/abs/2609.27588v1)
🔁 **【过去14天内已出现】**
Zaidi & Hafeez｜2026-09-23｜用能力流形补充 loss 评估代理能力；关联：测试时扩展效果评估。

## 具身智能
### 视觉-语言-动作模型
#### [Uncertainty-Gated Exploration Noise Suppresses Task Collapse in Online RL Fine-Tuning of a Flow-Matching Vision-Language-Action Policy](http://arxiv.org/abs/2609.28838v1)
Yardımcı & Çoğurcu｜2026-09-23｜不确定性门控探索噪声抑制 VLA 在线 RL 微调任务坍塌；关联：VLA 部署后持续学习。
#### [AdaHVLA: Adaptive Harnesses for Long-Horizon Vision-Language-Action Execution](http://arxiv.org/abs/2609.29204v1)
Tang et al.｜2026-09-24｜自适应 harness 提供长时程 VLA 记忆与规划；关联：长时程 VLA 执行。
#### [Direction-Scale Decomposition in Action Representation: Rethinking What to Tokenize for Vision-Language-Action Models](http://arxiv.org/abs/2609.28865v1)
Duan et al.｜2026-09-24｜分解动作方向-尺度以重思 VLA 动作 token 化；关联：动作表征设计。
#### [Decoupled Early Exits for Task-Dependent Compute Allocation in Flow-Matching VLAs](http://arxiv.org/abs/2609.29382v1)
Izzo et al.｜2026-09-24｜解耦早退按任务分配 VLA 计算；关联：VLA 推理效率。
#### [Self-Adaptive VLA for Robust Robot Deployment](http://arxiv.org/abs/2609.30092v1)
Zhang et al.｜2026-09-24｜部署时自适应硬件漂移；关联：VLA 鲁棒部署。
#### [CrossSafe: Towards Cross-Embodiment Latent Safety Filters](http://arxiv.org/abs/2609.28984v1)
Tabbara et al.｜2026-09-24｜跨具身潜在安全过滤器；关联：VLA 安全执行。
#### [ActGaze: Learning Action-Grounded Gaze through Counterfactual Visual Interventions for High-Precision Manipulation](http://arxiv.org/abs/2609.28955v1)
Zhu et al.｜2026-09-24｜反事实视觉干预学习动作接地 gaze；关联：高精度操作。
#### [Robo-Harness K1: Harnessing Robot-Use Agents via Perception Augmentation](http://arxiv.org/abs/2609.29389v1)
Li et al.｜2026-09-24｜感知增强的机器人使用代理；关联：VLM 到操作代理。
#### [AquaMend: Minimal Re-probing and Conditional Rollback for Latent-Belief Failures in Embodied Agents](http://arxiv.org/abs/2609.28973v1)
Liu et al.｜2026-09-24｜最小重探测与条件回滚修复潜在信念失败；关联：具身代理信念修复。
#### [PUBG Ally: A Conversational Embodied Agent as an AI Teammate](http://arxiv.org/abs/2609.29837v1)
Kim et al.｜2026-09-24｜语音具身 AI 队友；关联：动态环境具身交互。

### 具身导航
#### [GPT-6-Astra Lights Up Embodied Navigation: Evaluation in Zero-Shot Vision-and-Language Navigation in Continuous Environments](http://arxiv.org/abs/2609.29861v1)
Dai et al.｜2026-09-24｜评估 GPT-6-Astra 零样本 VLN-CE；关联：基础模型零样本导航。
#### [From Passive Execution to Active Exploration: Agentic Embodied Manipulation in Realistic Environments](http://arxiv.org/abs/2609.29091v1)
Ma et al.｜2026-09-24｜主动探索式代理具身操作；关联：真实环境长时程导航/操作。
#### [Looks the Same, Answers Differently: Flip-Direction Steering for Robust Vision-Language Reasoning](http://arxiv.org/abs/2609.28851v1)
Jung et al.｜2026-09-23｜翻转方向引导提升 VLM 视觉语言推理鲁棒性；关联：导航视觉推理稳定性。
#### 🔁 **【过去14天内已出现】** [NaviScale: Generating Large-Scale Semantic Map Datasets for Object Navigation](http://arxiv.org/abs/2609.27218v1)
🔁 **【过去14天内已出现】**
Lan et al.｜2026-09-23｜生成大规模语义地图数据集用于物体导航；关联：导航数据扩展。
#### 🔁 **【过去14天内已出现】** [NavProbe: Evidence-Grounded Reasoning with Active Memory Retrieval for Zero-Shot Navigation](http://arxiv.org/abs/2609.27526v1)
🔁 **【过去14天内已出现】**
Liu et al.｜2026-09-23｜证据接地主动记忆检索的零样本导航；关联：长时程导航。
#### 🔁 **【过去14天内已出现】** [VLMs Can Describe, But Not Measure: Object-Centric Scene Understanding for Robotic Manipulation](http://arxiv.org/abs/2609.28184v1)
🔁 **【过去14天内已出现】**
Saccon et al.｜2026-09-23｜VLM 驱动模块化感知，指出度量能力不足；关联：导航/操作几何。
#### 🔁 **【过去14天内已出现】** [Depth-Guided Contrastive Learning for 2D Representations with 3D Spatial Awareness](http://arxiv.org/abs/2609.28159v1)
🔁 **【过去14天内已出现】**
Zeng & Vergauwen｜2026-09-23｜深度引导对比学习增强 3D 空间感知；关联：导航空间表示。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### 🔁 **【过去14天内已出现】** [SlackDrive: Reclaiming Runtime Slack for Adaptive Driving Inference](http://arxiv.org/abs/2609.28064v1)
🔁 **【过去14天内已出现】**
Pei et al.｜2026-09-23｜利用运行时松弛自适应驾驶推理；关联：推理延迟优化。
#### 🔁 **【过去14天内已出现】** [Task-Induced Riemannian Metrics for Vision Transformer Feature Spaces](http://arxiv.org/abs/2609.27988v1)
🔁 **【过去14天内已出现】**
Bond et al.｜2026-09-23｜任务诱导黎曼度量刻画 ViT 特征空间；关联：特征压缩与剪枝。

### 持续学习
#### [Hyperbolic Multimodal Continual Learning: A Closest-Admissible Solution](http://arxiv.org/abs/2609.29329v1)
Liu et al.｜2026-09-24｜双曲多模态持续学习保持 Lorentz 几何；关联：多模态持续学习。
#### [Adaptive Fisher-Whitened Cross-Covariance for Low-Resource Speech Recognition](http://arxiv.org/abs/2609.29800v1)
Mishra et al.｜2026-09-24｜自适应 Fisher 白化跨协方差用于低资源语音；关联：PEFT 持续适应。
#### [Automatic Rank Allocation for Low-Rank Adaptation in Large Language Models via lp Regularization](http://arxiv.org/abs/2609.28998v1)
Xie et al.｜2026-09-24｜lp 正则自动分配 LoRA 秩；关联：参数高效持续微调。
#### 🔁 **【过去14天内已出现】** [MicroQonv: Reshaping Convolution Tensors for Efficient Microscaling in Training and Inference](http://arxiv.org/abs/2609.28358v1)
🔁 **【过去14天内已出现】**
Facq et al.｜2026-09-23｜重塑卷积张量实现微缩放量化；关联：轻量化持续训练/推理。
#### 🔁 **【过去14天内已出现】** [Riemannian Structure and Optimization for a Class of Low-Parametric Orthogonal Matrices](http://arxiv.org/abs/2609.27982v1)
🔁 **【过去14天内已出现】**
Aliev & Rakhuba｜2026-09-23｜低参数正交矩阵的黎曼优化；关联：结构化模型持续学习。

## 视觉感知
### 事件相机视觉感知
#### [SEE Challenge 2026: Event-Guided Brightness Adjustment Across a Broad Illumination Range](http://arxiv.org/abs/2609.29347v1)
Lu et al.｜2026-09-24｜事件引导宽照度亮度调整挑战赛；关联：事件相机视觉鲁棒感知。

### 3D 点云视觉感知
#### [SARFusion: Scene-Aware Routing Fusion for Robust Camera-LiDAR 3D Object Detection](http://arxiv.org/abs/2609.29235v1)
Zhao et al.｜2026-09-24｜场景感知路由融合提升相机-LiDAR 3D 检测鲁棒性；关联：多模态 3D 检测。
#### [An Automated Georeferencing Technique for Multi-Temporal Stope Point Clouds for Downstream Geotechnical Analysis](http://arxiv.org/abs/2609.29186v1)
Patra et al.｜2026-09-24｜多时相采场点云自动地理参考；关联：点云预处理。
#### [M3GD: Multi-Modal Multi-View Geometric Diffusion for Camera--LiDAR Novel View Synthesis](http://arxiv.org/abs/2609.30056v1)
Zhou et al.｜2026-09-24｜相机-LiDAR 多模态几何扩散新视角合成；关联：跨模态 3D 表示。
#### [Seeing Is Not Measuring: Tool-Augmented Metric Spatial Reasoning for Vision-Language Models](http://arxiv.org/abs/2609.29073v1)
Glantz & Grange｜2026-09-24｜工具增强 VLM 度量空间推理；关联：3D 空间理解。
#### 🔁 **【过去14天内已出现】** [SGDet3D++: Geometry-Grounded Semantics for 4D Radar and Camera 3D Object Detection](http://arxiv.org/abs/2609.27671v1)
🔁 **【过去14天内已出现】**
Bai et al.｜2026-09-23｜4D 雷达与相机 3D 检测的几何接地语义；关联：鲁棒 3D 感知。

## 跨方向信号
- **代理可靠性成为 LLM Agent 主线**：exactly-once、轨迹篡改、监控规避、角色化访问控制共同指向工具代理的可审计与可治理。
- **VLA 从离线策略走向部署后自改进**：不确定性门控、自自适应、早退与安全过滤同时关注在线更新稳定性与推理成本。
- **持续学习与参数高效优化融合**：双曲持续学习、Fisher 白化、LoRA 自动秩与量化共同降低适应成本。
- **多传感器鲁棒 3D 感知升温**：相机-LiDAR、4D 雷达、事件相机与 VLM 度量工具互补，强调几何与语义耦合。
- **测试时扩展转向结构化搜索**：从重复采样转向协同路径、自博弈预训练与能力流形评估。

## 优先精读
1. **Uncertainty-Gated Exploration Noise Suppresses Task Collapse in Online RL Fine-Tuning of a Flow-Matching VLA Policy**：直击 VLA 部署后在线 RL 微调的任务坍塌，是具身持续学习关键风险。
#### **Where Does Exactly-Once Live? Model, Harness, and Tool-Contract Effects on Duplicate Side Effects in LLM Agents**：系统拆分代理工具副作用的可靠性层级，对工程落地价值高。
#### **Self-Play Pretraining with Zero Data**：无数据自博弈预训练为 Agent 自我改进提供新范式，可能影响测试时扩展与后训练。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*