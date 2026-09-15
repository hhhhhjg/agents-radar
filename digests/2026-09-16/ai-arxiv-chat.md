# 实验室研究方向 Radar 2026-09-16

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 17 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-15 23:53 UTC

---

## 今日总览
- **LLM Agent 工程**：今日有新进展，聚焦无监督多智能体崩溃机制与工具使用型 Agent 的多租户隔离；去重后本方向核心 2 篇。
- **Agent 测试时扩展与自我改进**：新进展明确，围绕自适应测试时计算、流式信息松弛与资源分配审查，3 篇。
- **LLM Agent Society**：今日暂无新论文。
- **视觉-语言-动作模型**：新进展集中于复合鲁棒性评测、交互归因与驾驶 VLA 落地；去重后本方向 3 篇。
- **具身导航**：新进展涵盖免训练 Agent Harness、全局时空世界模型与 VLM 代价地图校正，3 篇。
- **LLM 剪枝与推理优化**：新进展覆盖 VLM token 剪枝隐私、边缘 early-exit、RAG 上下文压缩归因，3 篇。
- **多模态大模型剪枝**：今日暂无新论文。
- **持续学习**：新进展为联邦持续学习设备调度与 PEFT 层选择；去重后本方向 2 篇。
- **事件相机视觉感知**：今日暂无新论文。
- **3D 点云视觉感知**：新进展为无人机 3D 定位轻量多模态框架，1 篇。
- **3D 点云感知与跟踪**：今日暂无新论文。

## LLM Agent 与多智能体
### LLM Agent 工程
#### [Why LLM Agents Collapse Without Oversight: The Enforcement Gap as the Mechanism Behind Emergence World Failures](http://arxiv.org/abs/2609.15293v1)
- 作者缩写：Y. Wang；发布：2026-09-14。
- 核心贡献与关联：识别无监督多智能体模拟中“执行缺口”导致 Agent 崩溃的机制；直接关系 LLM Agent 工程的安全与监督设计。

#### [The Stochastic Deputy: Structural Tenant Isolation for Tool-Using LLM Agents](http://arxiv.org/abs/2609.14780v1)
- 作者缩写：M. S. A. Baig, S. A. Gillani, A. Ali 等；发布：2026-09-13。
- 核心贡献与关联：形式化工具型 LLM Agent 将资源选择委托给随机过程带来的多租户隔离风险；面向工具调用 Agent 的权限与隔离工程。

### Agent 测试时扩展与自我改进
#### [When Agents Slow Down: Understanding LLM Agents' Test-Time Strategies via Elo-per-token Analysis](http://arxiv.org/abs/2609.15309v1)
- 作者缩写：K. Liu, Q. Mang, B. Peng 等；发布：2026-09-14。
- 核心贡献与关联：提出 Elo-per-token 分析，研究开放任务中 Agent 随测试时计算变化的策略与扩展；直接对应 Agent 测试时扩展评测。

#### [Beyond Depth and Width: The Information-Slack Dilemma in Streaming Test-Time Compute](http://arxiv.org/abs/2609.14995v1)
- 作者缩写：X. Zhang；发布：2026-09-14。
- 核心贡献与关联：提出“信息松弛困境”，分析流式证据顺序下测试时计算分配；关联 Agent 在动态信息流中的推理调度与自我改进。

#### [When does a scaling result justify a different allocation? A critical review of resource-allocation evidence for AI systems](http://arxiv.org/abs/2609.14500v1)
- 作者缩写：S. M. Emadi；发布：2026-09-13。
- 核心贡献与关联：批判性审查 AI 系统资源分配证据，强调更高预算分数不自动证明新分配合理；为 Agent 测试时资源扩展提供评估框架。

### LLM Agent Society
今日暂无新论文。

## 具身智能
### 视觉-语言-动作模型
#### [Beyond Single-Axis Testing: Paired Evaluation of Compound Robustness in Vision-Language-Action Policies](http://arxiv.org/abs/2609.15940v1)
- 作者缩写：H. Sawada, S. Kasahara；发布：2026-09-14。
- 核心贡献与关联：提出成对评估 VLA 策略在多扰动同时发生下的复合鲁棒性；直接服务 VLA 部署可靠性评测。

#### [IMPACT-VLA: Interaction-aware Multimodal Propagation Attribution via Counterfactual Trajectories for Vision-Language-Action Policies](http://arxiv.org/abs/2609.15005v1)
- 作者缩写：J. Kim, S. Park；发布：2026-09-14。
- 核心贡献与关联：用反事实轨迹归因 VLA 中各模态在不同执行阶段的贡献；增强 VLA 可解释性与交互分析。

#### [GRAVA: Grounded Reasoning-to-Action Representation and Learning for Autonomous Driving](http://arxiv.org/abs/2609.15169v1)
- 作者缩写：X. Liu, H. Li, J. Leng 等；发布：2026-09-14。
- 核心贡献与关联：提出 grounding 推理到动作的驾驶 VLA 框架，强化物理场景证据与可执行行为连接；面向自动驾驶 VLA 落地。

### 具身导航
#### [HarnessVLN: Unifying Training-Free Embodied Navigation through an Agent Harness](http://arxiv.org/abs/2609.15195v1)
- 作者缩写：Y. Chen, L. Che, Z. Huang 等；发布：2026-09-14。
- 核心贡献与关联：通过 Agent Harness 统一免训练具身导航，缓解泛化挑战；直接对应具身导航的免训练统一框架。

#### [GLAM: Training a latent world model over global spatiotemporal memory for active exploration and navigation](http://arxiv.org/abs/2609.14561v1)
- 作者缩写：I-T. Ieong, R. Feng, Z. Lu 等；发布：2026-09-13。
- 核心贡献与关联：训练全局时空记忆上的潜在世界模型，支撑主动探索与语义导航；关联具身导航中的记忆预测与规划。

#### [NavPatch: Evidence-Guided Object-Level Costmap Correction with Vision-Language Models](http://arxiv.org/abs/2609.14543v1)
- 作者缩写：S. Sun, X. Tao, H. Wang 等；发布：2026-09-13。
- 核心贡献与关联：用 VLM 进行证据引导的物体级代价地图修正；提升导航中障碍表示与实际影响的一致性。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### [Don't Send What You Don't Need: Question-Guided Token Pruning as a Privacy Defense for Vision-Language Models](http://arxiv.org/abs/2609.15671v1)
- 作者缩写：M. K. Syfullah, A. A. Khalil；发布：2026-09-14。
- 核心贡献与关联：提出问题引导 token 剪枝，在 VQA 分割学习中减少视觉 token 传输以保护隐私；关联 VLM 剪枝与推理优化。

#### [Proportional-Fair Resource Allocation and Dual-Threshold Early-Exit Inference for Secure Cooperative Multi-Layer Edge Intelligence](http://arxiv.org/abs/2609.15847v1)
- 作者缩写：T. T. Vu, J. Le, T. N. Nguyen 等；发布：2026-09-14。
- 核心贡献与关联：提出 FREDI，在协作边缘智能中结合公平资源分配与双阈值 early-exit 推理；面向边缘推理优化。

#### [The Attribution-Compression Frontier in Retrieval-Augmented Generation](http://arxiv.org/abs/2609.14245v1)
- 作者缩写：D. Mody；发布：2026-09-13。
- 核心贡献与关联：测量 RAG 中压缩方法与预算对引用归因的影响；补充上下文压缩与推理质量权衡。

### 多模态大模型剪枝
今日暂无新论文。

### 持续学习
#### [Sylvas: Synergistic Learning Value based Device Scheduling in Federated Continual Learning](http://arxiv.org/abs/2609.15763v1)
- 作者缩写：Y. Sun, Y. Bai, T. Chen 等；发布：2026-09-14。
- 核心贡献与关联：提出基于协同学习价值的设备调度，用于联邦持续学习；直接处理非平稳分布式数据流。

#### [Pre-PEFT Probing: Weight Statistics and Perturbation Robustness for Layer Selection in VLM Vision Encoders](http://arxiv.org/abs/2609.15229v1)
- 作者缩写：Q. Xia, J. Bao, S. Cheng 等；发布：2026-09-14。
- 核心贡献与关联：用预微调探测的权重统计与扰动鲁棒性选择 PEFT 层；关联持续适配中的参数高效层选择。

## 视觉感知
### 事件相机视觉感知
今日暂无新论文。

### 3D 点云视觉感知
#### [PRI-Net: A Lightweight Multimodal Framework for 3D UAV Localization](http://arxiv.org/abs/2609.14469v1)
- 作者缩写：Z. Chen, J. Lu, Z. Ye 等；发布：2026-09-13。
- 核心贡献与关联：提出轻量多模态框架，应对稀疏 LiDAR、模态不平衡与边缘传输冗余；直接面向 3D 点云视觉感知与 UAV 定位。

### 3D 点云感知与跟踪
今日暂无新论文。

## 跨方向信号
- 测试时计算成为 LLM Agent 核心变量：自适应停止、流式信息松弛与资源分配审查共同指向“何时继续算”的工程问题。
- VLA 研究从单轴鲁棒性转向复合扰动、归因与 grounding：评测、可解释性和驾驶落地同步推进。
- 压缩技术外溢到隐私与归因：VLM token 剪枝、RAG 上下文压缩、边缘 early-exit 均强调效率之外的信任与安全。
- 多模态边缘部署持续升温：PRI-Net、FREDI 与 token 剪枝都关注受限链路、稀疏传感器和资源分配。
- 持续学习与参数高效适配结合：联邦持续学习调度与 PEFT 层选择都在解决非平稳环境下的稳定适配。

## 优先精读
#### - [When Agents Slow Down: Understanding LLM Agents' Test-Time Strategies via Elo-per-token Analysis](http://arxiv.org/abs/2609.15309v1)：为 Agent 测试时扩展提供可量化分析视角，连接 LLM Agent 工程、测试时扩展与持续学习。
#### - [Beyond Single-Axis Testing: Paired Evaluation of Compound Robustness in Vision-Language-Action Policies](http://arxiv.org/abs/2609.15940v1)：VLA 真实部署常遇多扰动叠加，该文直接补足复合鲁棒性评测缺口。
#### - [Don't Send What You Don't Need: Question-Guided Token Pruning as a Privacy Defense for Vision-Language Models](http://arxiv.org/abs/2609.15671v1)：把 token 剪枝从效率问题推进到隐私防御，方法可迁移到多模态压缩与边缘推理。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*