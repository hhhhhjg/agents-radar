# 实验室研究方向 Radar 2026-09-16

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 25 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-15 23:53 UTC

---

# 研究方向 Radar（2026-09-16）

## 今日总览
- 主方向 LLM Agent 与多智能体，子方向 LLM Agent 工程：配置内 10 篇新文献，去重后 9 篇归入本方向；重点在工具调用安全、长时程记忆风险、多智能体协调与技能路由。
- 主方向 LLM Agent 与多智能体，子方向 Agent 测试时扩展与自我改进：3 篇新文献；聚焦 Elo-per-token 测试时策略、流式测试时计算、资源分配证据审查。
- 主方向 LLM Agent 与多智能体，子方向 LLM Agent Society：今日暂无新论文。
- 主方向 具身智能，子方向 视觉-语言-动作模型：配置内 5 篇新文献，去重后 4 篇归入本方向；关注复合鲁棒性、跨模态归因、自动驾驶 grounded reasoning、开放世界运动-语言统一。
- 主方向 具身智能，子方向 具身导航：3 篇新文献；覆盖免训练 agent harness、全局时空记忆世界模型、VLM 引导 costmap 修正。
- 主方向 模型压缩与持续学习，子方向 LLM 剪枝与推理优化：3 篇新文献；涉及 VLM token 剪枝隐私、RAG 压缩-归因、边缘 early-exit。
- 主方向 模型压缩与持续学习，子方向 多模态大模型剪枝：今日暂无新论文。
- 主方向 模型压缩与持续学习，子方向 持续学习：配置内 3 篇新文献，去重后 2 篇归入本方向；1 篇测试时策略论文归入测试时扩展。
- 主方向 视觉感知，子方向 事件相机视觉感知：今日暂无新论文。
- 主方向 视觉感知，子方向 3D 点云视觉感知：1 篇新文献；聚焦 UAV 轻量多模态 3D 定位。
- 主方向 视觉感知，子方向 3D 点云感知与跟踪：今日暂无新论文。

## LLM Agent 与多智能体

### LLM Agent 工程
#### [ActGuard: Pre-execution Action Auditing against Indirect Prompt Injection in LLM Agents](http://arxiv.org/abs/2609.14987v1)
B. Wang, X. Gu, W. Wang 等 | 2026-09-14 | 提出执行前动作审计以防御工具输出引发的间接提示注入。 | 直接服务于工具调用 LLM Agent 的安全工程。

#### [The Stochastic Deputy: Structural Tenant Isolation for Tool-Using LLM Agents](http://arxiv.org/abs/2609.14780v1)
M. S. A. Baig, S. A. Gillani, A. Ali 等 | 2026-09-13 | 形式化“随机代理”问题并研究工具使用 Agent 的租户隔离。 | 面向多租户工具调用的 Agent 权限与隔离工程。

#### [MemRiskBench: Trace-Aware Risk-Preserving Evaluation for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.14976v1)
J. Jiang, D. Yuan, W. Li | 2026-09-14 | 提出长时程 Agent 记忆风险的轨迹感知评估。 | 关联跨会话记忆、陈旧事实与约束衰减等工程风险。

#### [Why LLM Agents Collapse Without Oversight: The Enforcement Gap as the Mechanism Behind Emergence World Failures](http://arxiv.org/abs/2609.15293v1)
Y. Wang | 2026-09-14 | 识别无监督多智能体模拟中 Agent 崩溃的“执行缺口”机制。 | 对多智能体治理与无外部攻击者下的失败分析有直接价值。

#### [Loop-Back Authority in LLM Agent Teams: A Paired Experiment on Flat and Hierarchical Coordination](http://arxiv.org/abs/2609.14767v1)
B. Agachan, M. van Duijn, A. Zohrehvand | 2026-09-13 | 配对实验比较扁平与层次化多 Agent 协调中的回退权威。 | 关联 LLM Agent 团队编排与管理者-工作者模式。

#### [The Router Within: Eliciting Native Skill Routing from a Frozen LLM](http://arxiv.org/abs/2609.15982v1)
R. Chen, X. Wang, Y. Chen 等 | 2026-09-14 | 从冻结 LLM 中诱导原生技能路由。 | 面向 Agent 技能库选择与路由工程。

#### [Stellar Colosseum: A Many-Agent Harness for Long-Horizon Research in Mathematics and Theoretical Computer Science](http://arxiv.org/abs/2609.15983v1)
H. Lin, D. P. Woodruff, Y. Deng 等 | 2026-09-14 | 提出模型无关的多 Agent harness，用于数学与理论计算机科学长时程研究。 | 关联长时程多智能体推理与推理资源分配。

#### [Assembling the CREW: A Collaborative Multi-agent Reinforcement Learning Framework for Automated Related Work Generation](http://arxiv.org/abs/2609.15721v1)
H.-D. Dang, B.-Y. Pham, B. Nguyen 等 | 2026-09-14 | 用协作式多 Agent 强化学习框架自动生成 Related Work。 | 关联多智能体协作与预定义工作流替代。

#### [MUSE: A Theory-Harnessed Story Engine for Vibe Narrativizing](http://arxiv.org/abs/2609.15188v1)
J. Ma, X. Yang, D. Wang 等 | 2026-09-14 | 提出理论约束的故事引擎以支持叙事生成中的规划、起草与修订。 | 关联 LLM Agent 在长文本生成中的决策编排。

### Agent 测试时扩展与自我改进
#### [When Agents Slow Down: Understanding LLM Agents' Test-Time Strategies via Elo-per-token Analysis](http://arxiv.org/abs/2609.15309v1)
K. Liu, Q. Mang, B. Peng 等 | 2026-09-14 | 用 Elo-per-token 分析 LLM Agent 的测试时策略。 | 直接衡量测试时扩展与自我改进的效率。

#### [Beyond Depth and Width: The Information-Slack Dilemma in Streaming Test-Time Compute](http://arxiv.org/abs/2609.14995v1)
X. Zhang | 2026-09-14 | 提出流式测试时计算中的信息-松弛困境。 | 为测试时计算顺序与等待策略提供理论视角。

#### [When does a scaling result justify a different allocation? A critical review of resource-allocation evidence for AI systems](http://arxiv.org/abs/2609.14500v1)
S. M. Emadi | 2026-09-13 | 综述 AI 系统资源分配证据何时支持重新分配。 | 关联测试时扩展与预算分配决策。

## 具身智能

### 视觉-语言-动作模型
#### [Beyond Single-Axis Testing: Paired Evaluation of Compound Robustness in Vision-Language-Action Policies](http://arxiv.org/abs/2609.15940v1)
H. Sawada, S. Kasahara | 2026-09-14 | 提出配对评估 VLA 复合鲁棒性，超越单轴扰动测试。 | 直接面向 VLA 策略部署鲁棒性。

#### [IMPACT-VLA: Interaction-aware Multimodal Propagation Attribution via Counterfactual Trajectories for Vision-Language-Action Policies](http://arxiv.org/abs/2609.15005v1)
J. Kim, S. Park | 2026-09-14 | 用反事实轨迹做交互感知多模态传播归因。 | 提升 VLA 可解释性与阶段贡献诊断。

#### [GRAVA: Grounded Reasoning-to-Action Representation and Learning for Autonomous Driving](http://arxiv.org/abs/2609.15169v1)
X. Liu, H. Li, J. Leng 等 | 2026-09-14 | 提出 GRAVA，统一 grounded reasoning 与可执行行为。 | 面向自动驾驶 VLA 的推理落地。

#### [Open-UniMo: Towards Unified Motion-Language Understanding and Generation in the Open World](http://arxiv.org/abs/2609.14615v1)
G. Wang, K. Liu, G. Song 等 | 2026-09-13 | 统一开放世界运动-语言理解与生成。 | 为具身运动-语言模型提供基础。

### 具身导航
#### [HarnessVLN: Unifying Training-Free Embodied Navigation through an Agent Harness](http://arxiv.org/abs/2609.15195v1)
Y. Chen, L. Che, Z. Huang 等 | 2026-09-14 | 提出 agent harness 统一免训练具身导航。 | 解决 MLLM 导航泛化与训练依赖。

#### [GLAM: Training a latent world model over global spatiotemporal memory for active exploration and navigation](http://arxiv.org/abs/2609.14561v1)
I.-T. Ieong, R. Feng, Z. Lu 等 | 2026-09-13 | 构建全局时空记忆潜在世界模型用于主动探索与导航。 | 直接服务具身导航的记忆-预测-规划。

#### [NavPatch: Evidence-Guided Object-Level Costmap Correction with Vision-Language Models](http://arxiv.org/abs/2609.14543v1)
S. Sun, X. Tao, H. Wang 等 | 2026-09-13 | 用 VLM 证据引导物体级 costmap 修正。 | 改善导航避障与路径规划。

## 模型压缩与持续学习

### LLM 剪枝与推理优化
#### [Don't Send What You Don't Need: Question-Guided Token Pruning as a Privacy Defense for Vision-Language Models](http://arxiv.org/abs/2609.15671v1)
M. K. Syfullah, A. A. Khalil | 2026-09-14 | 问题引导 token 剪枝以兼顾隐私与传输压缩。 | 关联 VLM/LLM 推理 token 剪枝。

#### [The Attribution-Compression Frontier in Retrieval-Augmented Generation](http://arxiv.org/abs/2609.14245v1)
D. Mody | 2026-09-13 | 测量 RAG 压缩方法/预算下的引用归因边界。 | 关联上下文压缩与推理优化评估。

#### [Proportional-Fair Resource Allocation and Dual-Threshold Early-Exit Inference for Secure Cooperative Multi-Layer Edge Intelligence](http://arxiv.org/abs/2609.15847v1)
T. T. Vu, J. Le, T. N. Nguyen 等 | 2026-09-14 | 提出边缘协同双阈值 early-exit 推理与公平资源分配。 | 面向边缘推理优化与早退计算。

### 持续学习
#### [Sylvas: Synergistic Learning Value based Device Scheduling in Federated Continual Learning](http://arxiv.org/abs/2609.15763v1)
Y. Sun, Y. Bai, T. Chen 等 | 2026-09-14 | 基于协同学习价值进行联邦持续学习设备调度。 | 直接关联持续学习与联邦非平稳数据。

#### [Pre-PEFT Probing: Weight Statistics and Perturbation Robustness for Layer Selection in VLM Vision Encoders](http://arxiv.org/abs/2609.15229v1)
Q. Xia, J. Bao, S. Cheng 等 | 2026-09-14 | 预微调探测权重统计与扰动鲁棒性以选 PEFT 层。 | 关联 VLM 高效适配与持续学习式层选择。

## 视觉感知

### 3D 点云视觉感知
#### [PRI-Net: A Lightweight Multimodal Framework for 3D UAV Localization](http://arxiv.org/abs/2609.14469v1)
Z. Chen, J. Lu, Z. Ye 等 | 2026-09-13 | 提出轻量多模态 3D UAV 定位框架 PRI-Net。 | 面向稀疏 LiDAR 的 3D 点云视觉感知。

## 跨方向信号
- Agent 安全与可审计化：工具调用、租户隔离、间接提示注入、记忆风险共同推动执行前审计与结构化隔离。
- 测试时计算与预算评估：Elo-per-token、信息-松弛、资源分配综述共同影响 Agent 自我改进与推理优化。
- 多智能体协调与团队结构：回退权威、长时程研究 harness、协作式 RL 显示层次/扁平编排仍是核心变量。
- 具身智能融合：VLA 鲁棒性/归因与导航中的世界模型、VLM costmap、agent harness 正在共享多模态规划栈。
- 压缩与推理优化外延：token 剪枝、RAG 上下文压缩、边缘 early-exit 同时关注质量、归因、隐私和带宽。

## 优先精读
1. **ActGuard**：工具调用安全是 LLM Agent 工程落地的前置条件，执行前审计思路可直接转化为防护模块。
2. **When Agents Slow Down**：提供测试时策略的效率度量，连接 Agent 工程、测试时扩展与自我改进。
3. **GLAM**：把全局时空记忆、潜在世界模型和主动导航结合，对具身导航与 VLA 规划均有启发。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*