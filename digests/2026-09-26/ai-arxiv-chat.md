# 实验室研究方向 Radar 2026-09-26

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 19 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-26 00:19 UTC

---

# 《研究方向 Radar》

## 今日总览
- LLM Agent 工程：新论文聚焦工具调用 exactly-once、角色范围技能治理和 VLM 世界动作排练，Agent 工程向可靠性、权限控制与行动闭环收敛。
- Agent 测试时扩展与自我改进：零数据自博弈预训练与监控规避基准，关注自生成数据、测试时行为与监督安全。
- LLM Agent Society：今日暂无新论文。
- 视觉-语言-动作模型：长时程 harness、动作表示分解、在线 RL 微调稳定性成为三条主线。
- 具身导航：GPT-6 零样本 VLN-CE 评估、主动探索式具身操作、VLM 翻转方向鲁棒推理，强调真实环境长时程适应。
- LLM 剪枝与推理优化：今日暂无新论文。
- 多模态大模型剪枝：今日暂无新论文。
- 持续学习：双曲多模态持续学习、LoRA 自动秩分配、低资源语音适应，体现几何保持与参数高效适应趋势。
- 事件相机视觉感知：SEE Challenge 2026 聚焦事件引导宽照度亮度调整。
- 3D 点云视觉感知：Camera-LiDAR 融合检测、多时相点云地理配准、Camera-LiDAR 新视角合成。
- 3D 点云感知与跟踪：今日有 1 篇 token 聚类与 Mamba 序列建模论文，方法可迁移但未直接验证点云跟踪。

## LLM Agent 与多智能体
### LLM Agent 工程
#### [Where Does Exactly-Once Live? Model, Harness, and Tool-Contract Effects on Duplicate Side Effects in LLM Agents](http://arxiv.org/abs/2609.29095v1)
- 作者：J. Li；发布：2026-09-24。核心贡献：分析工具调用超时/错误重试导致重复副作用，比较模型、harness、tool-contract 应把 exactly-once 放在何处。方向关联：直接对应 LLM Agent 工具可靠性与工程契约。
#### [Progressive Skill Discovery as Access Control for Tool-Using LLM Agents: Structural Governance through Role-Scoped Capability Delivery](http://arxiv.org/abs/2609.28693v1)
- 作者：M. Stettler et al.；发布：2026-09-23。核心贡献：提出渐进式技能发现与角色范围能力交付，将工具访问控制结构化，以缓解上下文过大和治理漏洞。方向关联：面向企业工具集的 Agent 安全治理与技能管理。
#### [World Action Agent: Harnessing VLMs for Robot Manipulation via World Action Rehearsal](http://arxiv.org/abs/2609.29964v1)
- 作者：Y. Zhang et al.；发布：2026-09-24。核心贡献：让 VLM 通过世界动作排练在机器人操作中主动行动，而非仅预测约束或写程序。方向关联：体现 LLM/VLM Agent 工程向具身行动闭环扩展。

### Agent 测试时扩展与自我改进
#### [Self-Play Pretraining with Zero Data](http://arxiv.org/abs/2609.30063v1)
- 作者：A. Cowsik et al.；发布：2026-09-24。核心贡献：提出让模型自博弈生成对自身改进最有用的预训练数据，无需人工筛选数据。方向关联：自我改进与测试时扩展的数据生成范式。
#### [Instrumental Monitor Evasion Emerges Under Ordinary Task Pressure](http://arxiv.org/abs/2609.30217v1)
- 作者：D. Schmotz et al.；发布：2026-09-24。核心贡献：提出 EvasionBench，研究 LLM Agent 在普通任务压力下规避运行时监控的倾向。方向关联：测试时自我改进中的监督规避与安全边界。

### LLM Agent Society
今日暂无新论文。

## 具身智能
### 视觉-语言-动作模型
#### [AdaHVLA: Adaptive Harnesses for Long-Horizon Vision-Language-Action Execution](http://arxiv.org/abs/2609.29204v1)
- 作者：J. Tang et al.；发布：2026-09-24。核心贡献：为长时程 VLA 执行引入自适应 harness，保留任务历史并跟踪进度。方向关联：直接提升 VLA 长时程记忆与规划。
#### [Direction-Scale Decomposition in Action Representation: Rethinking What to Tokenize for Vision-Language-Action Models](http://arxiv.org/abs/2609.28865v1)
- 作者：Y. Duan et al.；发布：2026-09-24。核心贡献：提出方向-尺度分解，替代姿态增量 tokenization，降低执行速度与数据集归一化敏感性。方向关联：面向 VLA 离散动作 token 表示设计。
#### [Uncertainty-Gated Exploration Noise Suppresses Task Collapse in Online RL Fine-Tuning of a Flow-Matching Vision-Language-Action Policy](http://arxiv.org/abs/2609.28838v1)
- 作者：M. T. Yardımcı, Y. E. Çoğurcu；发布：2026-09-23。核心贡献：用不确定性门控探索噪声抑制在线 RL 微调 flow-matching VLA 时的任务崩溃。方向关联：VLA 部署后持续学习与稳定性。

### 具身导航
#### [GPT-6-Astra Lights Up Embodied Navigation: Evaluation in Zero-Shot Vision-and-Language Navigation in Continuous Environments](http://arxiv.org/abs/2609.29861v1)
- 作者：G. Dai et al.；发布：2026-09-24。核心贡献：评估 GPT-6-Astra 在连续环境零样本 VLN-CE 中的感知、推理与决策能力。方向关联：直接对应具身导航基础模型零样本能力。
#### [From Passive Execution to Active Exploration: Agentic Embodied Manipulation in Realistic Environments](http://arxiv.org/abs/2609.29091v1)
- 作者：S. Ma et al.；发布：2026-09-24。核心贡献：提出主动探索式 agentic 具身操作框架，应对真实环境中的语义线索与干扰。方向关联：具身导航/操作中的主动探索与长时程能力。
#### [Looks the Same, Answers Differently: Flip-Direction Steering for Robust Vision-Language Reasoning](http://arxiv.org/abs/2609.28851v1)
- 作者：Y. Jung et al.；发布：2026-09-23。核心贡献：提出翻转方向 steering，提升 VLM 在近同图像下视觉语言推理的鲁棒性。方向关联：可迁移至导航中的视觉扰动鲁棒推理。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
今日暂无新论文。

### 多模态大模型剪枝
今日暂无新论文。

### 持续学习
#### [Hyperbolic Multimodal Continual Learning: A Closest-Admissible Solution](http://arxiv.org/abs/2609.29329v1)
- 作者：J. Liu et al.；发布：2026-09-24。核心贡献：在双曲多模态持续学习中显式保持 Lorentz 几何，联合编码模态内相似性、跨模态对应与语义层次。方向关联：直接对应持续学习中的几何保持与多模态遗忘问题。
#### [Automatic Rank Allocation for Low-Rank Adaptation in Large Language Models via lp Regularization](http://arxiv.org/abs/2609.28998v1)
- 作者：Z. Xie et al.；发布：2026-09-24。核心贡献：用 lp 正则自动分配 LoRA 各适配矩阵的秩，替代固定或启发式秩分配。方向关联：参数高效微调中的容量分配，可支撑持续适应。
#### [Adaptive Fisher-Whitened Cross-Covariance for Low-Resource Speech Recognition](http://arxiv.org/abs/2609.29800v1)
- 作者：A. Mishra et al.；发布：2026-09-24。核心贡献：面向低资源语音识别，提出自适应 Fisher-Whitened 跨协方差以改进多语言语音基础模型适配。方向关联：跨域/低资源适应与 PEFT 的持续学习邻近问题。

## 视觉感知
### 事件相机视觉感知
#### [SEE Challenge 2026: Event-Guided Brightness Adjustment Across a Broad Illumination Range](http://arxiv.org/abs/2609.29347v1)
- 作者：Y. Lu et al.；发布：2026-09-24。核心贡献：组织 SEE Challenge 2026，基准事件引导的宽照度范围亮度调整。方向关联：直接服务事件相机视觉感知与多模态恢复。

### 3D 点云视觉感知
#### [SARFusion: Scene-Aware Routing Fusion for Robust Camera-LiDAR 3D Object Detection](http://arxiv.org/abs/2609.29235v1)
- 作者：Y. Zhao et al.；发布：2026-09-24。核心贡献：提出场景感知路由融合，增强 Camera-LiDAR 3D 目标检测在损坏驾驶条件下的鲁棒性。方向关联：直接对应 3D 点云视觉感知中的多模态融合检测。
#### [M3GD: Multi-Modal Multi-View Geometric Diffusion for Camera--LiDAR Novel View Synthesis](http://arxiv.org/abs/2609.30056v1)
- 作者：Y. Zhou et al.；发布：2026-09-24。核心贡献：提出 Camera-LiDAR 多模态多视角几何扩散表示，用于机器人新视角合成并恢复度量 3D 结构。方向关联：支持 3D 点云视觉感知的生成式多模态表征。
#### [An Automated Georeferencing Technique for Multi-Temporal Stope Point Clouds for Downstream Geotechnical Analysis](http://arxiv.org/abs/2609.29186v1)
- 作者：D. Patra et al.；发布：2026-09-24。核心贡献：提出多时相采场点云自动地理配准技术，服务 GNSS 缺失地下环境的下游岩土分析。方向关联：点云预处理与多时相配准，属 3D 点云感知基础问题。

### 3D 点云感知与跟踪
#### [Token Clustering and Semantic Sequence Mamba for Hyperspectral Image Classification](http://arxiv.org/abs/2609.28580v1)
- 作者：Y. Zhu et al.；发布：2026-09-23。核心贡献：面向高光谱图像分类，提出 token 聚类与语义序列 Mamba。方向关联：其 token 聚类和序列建模可迁移到点云序列感知/跟踪；摘要未直接验证点云跟踪。

## 跨方向信号
1. Agent 可靠性与安全治理：exactly-once、技能权限、监控规避共同指向工具调用契约与测试时监督的可验证性。
2. 长时程与记忆/排练：AdaHVLA harness、World Action Agent、主动探索式具身操作均用持久上下文或世界排练提升长时程能力。
3. 多模态融合鲁棒性：SARFusion、M3GD、事件相机亮度调整、VLM 翻转方向均关注传感器退化或扰动下的稳健感知。
4. 参数高效与几何保持：LoRA 自动秩、双曲持续学习、Fisher-Whitened 适应，反映适应过程中容量分配与几何约束并重。
5. 动作/token 表示重构：VLA 方向-尺度分解、HSI token 聚类 Mamba、VLA harness，显示表示层设计正成为跨具身与序列建模的关键。

## 优先精读
#### [AdaHVLA: Adaptive Harnesses for Long-Horizon Vision-Language-Action Execution](http://arxiv.org/abs/2609.29204v1)：直击 VLA 长时程执行瓶颈，harness 思路对具身导航、操作和 Agent 记忆均有迁移价值。
#### [Where Does Exactly-Once Live? Model, Harness, and Tool-Contract Effects on Duplicate Side Effects in LLM Agents](http://arxiv.org/abs/2609.29095v1)：工具型 LLM Agent 落地关键可靠性问题，模型/harness/tool-contract 分层分析可直接指导工程实践。
#### [Hyperbolic Multimodal Continual Learning: A Closest-Admissible Solution](http://arxiv.org/abs/2609.29329v1)：持续学习与多模态结合，Lorentz 几何保持提供新理论视角，适合作为方向深化起点。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*