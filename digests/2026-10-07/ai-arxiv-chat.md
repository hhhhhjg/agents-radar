# 实验室研究方向 Radar 2026-10-07

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 15 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-10-07 01:10 UTC

---

## 今日总览
- LLM Agent 工程（LLM Agent 与多智能体）：今日暂无新论文。
- Agent 测试时扩展与自我改进（LLM Agent 与多智能体）：3 篇新文献，聚焦可校准自验证、VLA 决策关键验证器、以及假前提下的测试时选择失败。
- LLM Agent Society（LLM Agent 与多智能体）：今日暂无新论文。
- 视觉-语言-动作模型（具身智能）：3 篇新文献，涵盖阶段感知分层动作生成、执行时视觉扰动自监督适应；VLA-ACL 因视觉 token 剪枝归入多模态剪枝，但同属 VLA 效率方向。
- 具身导航（具身智能）：4 篇新文献，含跨方向 OpenSplatGraph；重点为记忆可见路线选择、空间/轨迹辅助 VLN、Ackermann 机器人 sim-to-real。
- LLM 剪枝与推理优化（模型压缩与持续学习）：1 篇新文献，VisionWeave 将弹性视觉表示作为 MLLM 原生能力，降低密集 patch token 成本。
- 多模态大模型剪枝（模型压缩与持续学习）：2 篇新文献，VLA-ACL 做动作一致视觉 token 剪枝，Efficient Multimodal Inference 做自适应获取与序列融合。
- 持续学习（模型压缩与持续学习）：3 篇新文献，围绕层稀疏适应、梯度准入数据选择、动态位置注意力调制等 PEFT 策略。
- 事件相机视觉感知（视觉感知）：今日暂无新论文。
- 3D 点云视觉感知（视觉感知）：1 篇新文献，OpenSplatGraph 从密集语义图构建结构化场景图，服务开放词汇机器人感知。
- 3D 点云感知与跟踪（视觉感知）：今日暂无新论文。

## LLM Agent 与多智能体
### LLM Agent 工程
今日暂无新论文。
### Agent 测试时扩展与自我改进
#### [CLIFT: Conformal Self-Verification for Web Agent Training and Test-Time Scaling](http://arxiv.org/abs/2610.06829v1)
- 作者：Y. Zhang, Y. Dai, V. Prabhu 等；发布：2026-10-05。核心贡献：提出 conformal 自验证，为 web agent 训练与测试时扩展提供可校准验证信号。关联：直接服务 Agent 测试时扩展中的验证器与自我改进。
#### [DiVeR: Decision-Critical Verifier Learning for VLA Test-Time Scaling](http://arxiv.org/abs/2610.04933v1)
- 作者：S. Park, H. Kim, S. Tian 等；发布：2026-10-04。核心贡献：学习决策关键验证器，用于 VLA 测试时扩展中采样并选择动作候选。关联：连接 Agent 测试时扩展与具身 VLA 的动作选择。
#### [Verification Trap: Understanding Test-Time Selection Failures under False Premises in Code Generation](http://arxiv.org/abs/2610.05170v1)
- 作者：F. He, H. Wang, L. Meng 等；发布：2026-10-04。核心贡献：揭示代码生成中测试时选择在假前提下的失败，挑战验证器独立于生成器提供校正信号的假设。关联：为 Agent 测试时选择机制提供风险视角。
### LLM Agent Society
今日暂无新论文。

## 具身智能
### 视觉-语言-动作模型
#### [StairVLA: Stage-Aware Hierarchical Action Generation for Vision-Language-Action Models](http://arxiv.org/abs/2610.07756v1)
- 作者：S. Yuan, X. Qi, Y. Pu 等；发布：2026-10-06。核心贡献：针对扩散/流匹配动作头统一处理去噪轨迹的问题，提出阶段感知分层动作生成。关联：推进 VLA 动作头设计与生成质量。
#### [Adapting Vision-Language-Action Models to Unknown Visual Disruptions During Execution](http://arxiv.org/abs/2610.07946v1)
- 作者：A. Lee, J. Seo, Y. Jang 等；发布：2026-10-06。核心贡献：提出 SALT，利用未执行轨迹进行自监督适应，应对执行时未知视觉扰动。关联：提升 VLA 执行鲁棒性与在线适应能力。
### 具身导航
#### [MarvisNav: Making Memory Visible on Route Choices for Zero-Shot Object Navigation](http://arxiv.org/abs/2610.06510v1)
- 作者：J. Wang, C. P. Chan, W. Zeng 等；发布：2026-10-05。核心贡献：让记忆在路线选择中可见，将目标相关性与已探索区域纳入空间上下文。关联：改进零样本物体导航的记忆与探索决策。
#### [StageVLN: Spatial and Trajectory Auxiliary Guidance for Efficient Vision-Language Navigation](http://arxiv.org/abs/2610.05664v1)
- 作者：A. Dao, Q.-D. Pham, L. D. Vinh 等；发布：2026-10-05。核心贡献：为高效 VLN 引入空间与轨迹辅助引导，约束中间表示保留几何和方向信息。关联：提升具身导航策略的空间理解效率。
#### [Sim-to-Real Transfer of Vision-Language Navigation in Continuous Environments Using an Ackermann-Steered Mobile Robot](http://arxiv.org/abs/2610.07192v1)
- 作者：C. Abeywansa, S. Gunasekara, D. De Silva 等；发布：2026-10-05。核心贡献：研究 Ackermann 转向移动机器人在连续环境中的 VLN sim-to-real 迁移。关联：面向具身导航真实部署与定位挑战。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### [VisionWeave: Weaving Elastic Visual Representations as a Native Capability of MLLMs](http://arxiv.org/abs/2610.07987v1)
- 作者：Y. Feng, Q. Yang, R. Chen 等；发布：2026-10-06。核心贡献：提出弹性视觉表示，将自适应 patch token 压缩作为 MLLM 原生能力。关联：降低密集视觉 token 成本，服务 LLM 剪枝与推理优化。
### 多模态大模型剪枝
#### [VLA-ACL: Action-Consistent Visual Token Pruning for Efficient Vision-Language-Action Models](http://arxiv.org/abs/2610.08133v1)
- 作者：O. Du, Y. Yue, J. Zhang 等；发布：2026-10-06。核心贡献：提出动作一致视觉 token 剪枝，降低 VLA 每控制步的长 token 计算成本。关联：直接对应多模态大模型剪枝与 VLA 实时部署。
#### [Efficient Multimodal Inference through Adaptive Acquisition and Sequential Fusion](http://arxiv.org/abs/2610.07466v1)
- 作者：P. Mohapatra, H. Yang, Y. Sui 等；发布：2026-10-05。核心贡献：通过自适应获取与序列融合，按需编码模态并决定何时停止。关联：从推理路径层面减少多模态大模型计算。
### 持续学习
#### [RoSA: Rotational Sparse Adaptation for Memory-Efficient Fine-Tuning](http://arxiv.org/abs/2610.06243v1)
- 作者：M. A. Lodhi, C. Zhou, R. Burkholz；发布：2026-10-05。核心贡献：提出旋转稀疏适应，一次仅适配部分层并冻结低层，降低微调内存。关联：面向持续/参数高效适配中的稳定层选择。
#### [Which and When to Admit: Gradient Admission for Data-Centric Small Language Model Finetuning](http://arxiv.org/abs/2610.07553v1)
- 作者：H. Cao, Y. Liu, K. Liu 等；发布：2026-10-06。核心贡献：提出梯度准入，缓解 LoRA 微调中的梯度冲突、静态数据选择和子空间饱和。关联：改进持续学习中的数据选择与适应动态。
#### [Dynamic Positional Attention Modulation for Parameter-Efficient Fine-Tuning of Large Language Models](http://arxiv.org/abs/2610.07848v1)
- 作者：D. Pan, J. Wang, X. Yu；发布：2026-10-06。核心贡献：针对注意力维度、头和层的结构化异质性，提出动态位置注意力调制 PEFT。关联：为持续学习中的参数高效适配提供更细粒度策略。

## 视觉感知
### 事件相机视觉感知
今日暂无新论文。
### 3D 点云视觉感知
#### [OpenSplatGraph: From Dense Semantic Maps to Structured Scene Graphs for Open-Vocabulary Robot Perception](http://arxiv.org/abs/2610.07569v1)
- 作者：B. L. Nguyen, K. Nguyen, C. Fookes 等；发布：2026-10-06。核心贡献：从密集语义图构建结构化场景图，用于开放词汇机器人感知。关联：服务 3D 语义建图、点云场景理解与机器人感知。
### 3D 点云感知与跟踪
今日暂无新论文。

## 跨方向信号
- 测试时扩展瓶颈转向验证器可靠性：CLIFT 强调可校准自验证，DiVeR 学决策关键验证器，Verification Trap 揭示假前提选择失败。
- 视觉输入按需计算与压缩成为共识：VLA-ACL、VisionWeave、Efficient Multimodal Inference 分别从 token 剪枝、弹性表示、自适应融合降低多模态推理成本。
- PEFT 从静态低秩更新转向结构化动态适配：RoSA、Gradient Admission、Dynamic Positional Attention 关注层选择、数据准入与注意力异质性。
- 具身导航与 3D 感知融合记忆、几何和真实部署：MarvisNav、StageVLN、Sim-to-Real、OpenSplatGraph 共同强化空间记忆与结构化环境表示。
- VLA 鲁棒性与效率并行：StairVLA 改动作生成，SALT 应对视觉扰动，VLA-ACL 剪枝，DiVeR 做测试时验证，形成具身智能与 Agent TTS 交叉。

## 优先精读
- [CLIFT](http://arxiv.org/abs/2610.06829v1)：直接定义 web agent 训练与测试时扩展的自验证/校准框架，对 Agent 自我改进的验证器设计有方法论价值。
- [VLA-ACL](http://arxiv.org/abs/2610.08133v1)：动作一致视觉 token 剪枝同时触及 VLA 实时部署与多模态大模型剪枝，工程落地价值高。
- [DiVeR](http://arxiv.org/abs/2610.04933v1)：将决策关键验证器学习用于 VLA 测试时扩展，横跨 Agent 测试时扩展与具身智能，方法可迁移性强。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*