# 实验室研究方向 Radar 2026-09-19

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 22 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-18 23:48 UTC

---

## 今日总览
- 主方向：LLM Agent 与多智能体；子方向：LLM Agent 工程：3 篇新文献，聚焦 harness 规划/释放控制、Agent RL 双轴优化、回归测试回放。
- 主方向：LLM Agent 与多智能体；子方向：Agent 测试时扩展与自我改进：3 篇新文献，关注候选生成策略、自博弈均衡选择、动态状态推理基准。
- 主方向：LLM Agent 与多智能体；子方向：LLM Agent Society：今日暂无新论文。
- 主方向：具身智能；子方向：视觉-语言-动作模型：候选 4 篇，本方向收 3 篇，覆盖人在回路后训练、联邦共识训练、对抗持续效应；Navi-Agent 归入具身导航。
- 主方向：具身智能；子方向：具身导航：3 篇新文献，覆盖无定位单目 VLN-CE、多智能体协作指称高斯、安全负事件理解。
- 主方向：模型压缩与持续学习；子方向：LLM 剪枝与推理优化：今日暂无新论文。
- 主方向：模型压缩与持续学习；子方向：多模态大模型剪枝：1 篇新文献，聚焦查询条件视觉 token 剪枝。
- 主方向：模型压缩与持续学习；子方向：持续学习：3 篇新文献，涉及后处理抗遗忘、点云 PEFT、长时程 Agent 架构。
- 主方向：视觉感知；子方向：事件相机视觉感知：3 篇新文献，涉及事件保持速度不变表示、微小目标运动证据、脉冲状态空间。
- 主方向：视觉感知；子方向：3D 点云视觉感知：3 篇新文献，覆盖开放词汇检测、城市建筑实例分割、PBR 高斯资产。
- 主方向：视觉感知；子方向：3D 点云感知与跟踪：今日暂无新论文。

## LLM Agent 与多智能体
### LLM Agent 工程
#### [How Do Agent Harnesses Create Value? Planning Information and Release Control in Stateful LLM Agents](http://arxiv.org/abs/2609.20474v1)
作者缩写：Y. Zhang, K. Xu, Y. Chen | 发布：2026-09-17。核心：研究 harness 的规划指导、执行组织与完成检查对成功、误接受和成本的影响。关联：直接对应 LLM Agent 工程中的规划信息与释放控制。
#### [Dual-Axis Policy Optimization for LLM Agents: Bayesian Feedback Attribution and Trajectory Mass Normalization](http://arxiv.org/abs/2609.19830v1)
作者缩写：Y. Zhuang 等 | 发布：2026-09-17。核心：将 LLM Agent RL 分为轨迹内反馈归因与轨迹间质量归一化。关联：为 Agent 工程提供细粒度训练优化轴。
#### [Chronicle: Cut-Point Replay for Regression Testing of LLM Agents](http://arxiv.org/abs/2609.20625v1)
作者缩写：T. Chawla, S. Koul | 发布：2026-09-17。核心：用切点回放复现 LLM Agent 失败，服务回归测试。关联：Agent 工程中的可靠性、调试与测试。
### Agent 测试时扩展与自我改进
#### [Sample Count Is Not Enough: Candidate-Generation Strategy Shapes the Energy and Performance of LLM Test-Time Scaling](http://arxiv.org/abs/2609.19499v1)
作者缩写：M. Kashaniyan, A. Jannesari | 发布：2026-09-16。核心：候选生成策略而非样本数 N 决定测试时扩展的能耗与性能。关联：测试时扩展预算与自我改进策略设计。
#### [Steering Equilibrium Selection in Regularized Self-Play via the Reference Policy](http://arxiv.org/abs/2609.19820v1)
作者缩写：L. Leal | 发布：2026-09-17。核心：正则化自博弈中参考策略可操控价值等价均衡选择。关联：自我改进/自博弈稳定性。
#### [PetriBench: Benchmarking LLM Reasoning over Dynamic State Spaces](http://arxiv.org/abs/2609.19883v1)
作者缩写：P. Koussios 等 | 发布：2026-09-17。核心：提出动态状态空间 LLM 推理的可扩展自包含基准。关联：测试时推理与自我改进评测。
### LLM Agent Society
今日暂无新论文。

## 具身智能
### 视觉-语言-动作模型
#### [HIL-UMI: Bringing Human-in-the-Loop Post-Training of Vision-Language-Action Models to Universal Manipulation Interface](http://arxiv.org/abs/2609.20659v1)
作者缩写：Z. Han 等 | 发布：2026-09-17。核心：将人在回路后训练接入 UMI，缓解 SFT 静态示范限制。关联：VLA 部署适配。
#### [Co-VLA: Consensus-based Federated Training for Vision-Language-Action Models](http://arxiv.org/abs/2609.19923v1)
作者缩写：H. Li 等 | 发布：2026-09-17。核心：用共识联邦训练 VLA，应对机器人数据分布式收集。关联：VLA 规模化训练。
#### [Beyond Patch Removal: Persistent Adversarial Effects in Vision-Language-Action Policies](http://arxiv.org/abs/2609.19669v1)
作者缩写：E. Wu 等 | 发布：2026-09-17。核心：状态恢复评估分离对抗 patch 即时破坏与去除后持续状态效应。关联：VLA 策略鲁棒与安全评测。
### 具身导航
#### [Navi-Agent: Unlocalized Monocular Navigation Agent](http://arxiv.org/abs/2609.20388v1)
作者缩写：W. Xie 等 | 发布：2026-09-17。核心：无定位单目导航 Agent，零样本 VLN-CE 不依赖几何定位/坐标表示。关联：长时程具身导航。
#### [CoRef-GS: Cooperative Referring Gaussian Splatting for Multi-Agent Scene Understanding](http://arxiv.org/abs/2609.20586v1)
作者缩写：Z. Zhou 等 | 发布：2026-09-17。核心：多智能体合作指称高斯 splatting，保持跨视角语言指称场景理解。关联：具身导航协作语义地图。
#### [Absence is Presence: Understanding Visual Scene Negative Events Under Safety Cognitive Constraint](http://arxiv.org/abs/2609.19812v1)
作者缩写：Z. Jiang 等 | 发布：2026-09-17。核心：研究视觉场景负事件/缺失信息的安全认知约束。关联：导航安全关键场景中的缺失风险。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
今日暂无新论文。
### 多模态大模型剪枝
#### [QCPruner: Query-Conditioned Population Coverage for Visual Token Pruning](http://arxiv.org/abs/2609.19990v1)
作者缩写：S. He 等 | 发布：2026-09-17。核心：查询条件群体覆盖的免训练视觉 token 剪枝，固定预算下保 query 证据并降冗余。关联：多模态大模型剪枝与推理加速。
### 持续学习
#### [Past, Future, All at Once: Mitigating Stability-Plasticity Dilemma via Post-hoc JANUS Rectification](http://arxiv.org/abs/2609.19985v1)
作者缩写：Z. Zheng 等 | 发布：2026-09-17。核心：后处理 JANUS 校正缓解稳定性-可塑性困境，避免过严子空间正交。关联：持续学习抗灾难遗忘。
#### [GAPrompt++: Multi-Granular Geometry-Aware Point Cloud Prompt for 3D Vision Model](http://arxiv.org/abs/2609.19716v1)
作者缩写：Z. Ai 等 | 发布：2026-09-17。核心：多粒度几何感知点云提示用于 3D 视觉模型 PEFT。关联：持续/高效下游适配。
#### [An Architecture for Long-Horizon Agents: Levels, Ticks and Cascaded Intelligence](http://arxiv.org/abs/2609.19519v1)
作者缩写：E. Nijkamp 等 | 发布：2026-09-17。核心：提出层级、ticks 与级联智能的长时程 Agent 架构。关联：长期运行 Agent 的状态延续与持续适应。

## 视觉感知
### 事件相机视觉感知
#### [An Event Preserving Velocity Invariant Representation for Event Cameras](http://arxiv.org/abs/2609.19973v1)
作者缩写：M. Ikura 等 | 发布：2026-09-17。核心：提出事件保持、速度不变表示，缓解速度变化导致的表征问题。关联：事件相机低延迟感知表示。
#### [PointEvent: Rethinking Event-based Tiny Object Detection via Serialized Motion Evidence Accumulation](http://arxiv.org/abs/2609.20066v1)
作者缩写：Z. Wu 等 | 发布：2026-09-17。核心：序列化运动证据累积用于事件微小目标检测。关联：事件相机 UAV 微小目标检测。
#### [REACT: A Fully Spiking State-Space Model for Real-Time Event-Driven Temporal Perception](http://arxiv.org/abs/2609.19204v1)
作者缩写：G. Keime 等 | 发布：2026-09-16。核心：全脉冲状态空间模型实现实时事件驱动时间感知。关联：事件流连续时间机器人感知。
### 3D 点云视觉感知
#### [Open-vocabulary 3D object detection with promptable segmentation](http://arxiv.org/abs/2609.19358v1)
作者缩写：Ö. F. Deniz, M. T. Koçyiğit | 发布：2026-09-16。核心：免训练开放词汇 3D 目标检测，结合可提示分割。关联：点云开放词汇感知。
#### [Instance Segmentation and Fine-grained Classification for Urban Buildings with Adaptive Region Dividing and Spatially-Supervised Contrastive Learning](http://arxiv.org/abs/2609.19631v1)
作者缩写：W. Zhang 等 | 发布：2026-09-17。核心：自适应区域划分与空间监督对比学习用于城市建筑实例分割与分类。关联：大规模点云城市理解。
#### [GS-PI: An Optimization-Decoupled Appearance Decomposition Approach for Generating PBR Gaussian Assets](http://arxiv.org/abs/2609.19907v1)
作者缩写：J. Xu 等 | 发布：2026-09-17。核心：优化解耦外观分解生成 PBR 高斯资产。关联：3D/高斯场景逆渲染与资产。
### 3D 点云感知与跟踪
今日暂无新论文。

## 跨方向信号
- Agent 工程与测试时扩展共同转向“执行可靠性 + 训练/推理策略”：harness、回放、候选生成、自博弈评测形成闭环。
- VLA/具身导航强调部署适配与安全：人在回路、联邦、无定位、协作指称、对抗持续效应、负事件。
- 参数高效、持续学习与长时程 Agent 汇合：PEFT、后处理校正、状态延续。
- 事件相机与 3D 点云感知强调表示、开放词汇与实时效率，减少对固定类别和密集表示的依赖。
- 多模态剪枝通过 query 条件覆盖提升推理效率，与 Agent/VLA 的长上下文视觉计算需求相关。

## 优先精读
1. HIL-UMI：直击 VLA 部署后训练瓶颈，人在回路与 UMI 结合，工程落地性强。
2. Navi-Agent：面向零样本 VLN-CE 的无定位单目导航 Agent，具身导航长时程关键问题。
3. Past, Future, All at Once：持续学习稳定性-可塑性问题，后处理校正思路通用，适合迁移到多任务适配。


---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*