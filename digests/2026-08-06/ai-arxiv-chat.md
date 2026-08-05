# 实验室研究方向 Radar 2026-08-06

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 22 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-08-05 22:53 UTC

---

## 今日总览

- LLM Agent 工程：今日 3 篇，聚焦教学评测、安全诊断和隐私记忆三类 Agent 工程场景。
- Agent 测试时扩展与自我改进：今日 3 篇，涵盖自适应采样、安全文生图测试时扩展、推理模型测试时扩展综述。
- LLM Agent Society：今日 1 篇，研究异构多智能体基于历史信息的元策略委派。
- 视觉-语言-动作模型：今日 3 篇，涉及鲁棒微调、3D 跟踪蒸馏、本体感受状态接入设计。
- 具身导航：今日 2 篇，端到端驾驶未来场景生成与多房间布局估计。
- LLM 剪枝与推理优化：今日 1 篇高相关论文；另有 2 篇视觉 token 剪枝按相关性归入多模态大模型剪枝。
- 多模态大模型剪枝：今日 2 篇，均为视觉/视频 token 剪枝。
- 持续学习：今日 3 篇，相关度中等，涉及 LoRA 专家生成、领域 VLM 适配、动态奖励准则。
- 事件相机视觉感知：今日 1 篇，事件相机与里程计外参标定。
- 3D 点云视觉感知：今日 3 篇，轻量检测、BEV 鲁棒检测、零样本 3D 定位。
- 3D 点云感知与跟踪：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners](http://arxiv.org/abs/2608.03206v1)

- 作者：U. Lee, S. Lee, Y. Jeong et al. | 日期：2026-08-04 | 核心：提出长时程教学 LLM Agent 基准，用模拟学习者评测长期任务能力。 | 关联：为 LLM Agent 工程提供多步交互与长期规划评测场景。

#### [DiagChain: A Diagnostic Benchmark for Evaluating LLM Agents on Evidence-Grounded Attack Chain Reconstruction](http://arxiv.org/abs/2608.03591v1)

- 作者：X. Liu, Y. Han, Z. Zhang et al. | 日期：2026-08-04 | 核心：构建证据化攻击链重建诊断基准，细粒度评估 Agent 过程能力。 | 关联：面向安全分析场景的 LLM Agent 工程评测，强调过程而非仅最终结果。

#### [DP-MemView: A Memory Interface for Attribute-Level Transcript Privacy in Long-Term LLM Agents](http://arxiv.org/abs/2608.03130v1)

- 作者：J. W. Kim, B. Min, K. Edemacu et al. | 日期：2026-08-04 | 核心：提出差分隐私记忆接口，防止长期 LLM Agent 在记忆条件响应中泄露属性。 | 关联：为长期 LLM Agent 记忆系统增加隐私保护的工程化接口。

### Agent 测试时扩展与自我改进

#### [Interpretable Adaptive Sampling for LLM Test-Time Scaling](http://arxiv.org/abs/2608.03961v1)

- 作者：M. Kashaniyan, A. Jannesari | 日期：2026-08-04 | 核心：提出可解释的自适应采样，按问题难度动态分配测试时计算。 | 关联：直接改进 LLM Agent 推理时的测试时扩展策略与可解释性。

#### [Test-Time Scaling in Reasoning LLMs: Inference Regimes, Evaluation, and Reproducibility](http://arxiv.org/abs/2608.04001v1)

- 作者：M. Hariri, W. Chen, N. Shahini et al. | 日期：2026-08-04 | 核心：系统梳理推理 LLM 测试时扩展的推理制度、评估方法与可复现性。 | 关联：为该方向提供分类框架和实验基准。

#### [Test-Time Scaling for Safe Text-Guided Image Generation via Intermediate Clean Estimates](http://arxiv.org/abs/2608.03284v1)

- 作者：J. Sakurai, S. Yan, X. Xu | 日期：2026-08-04 | 核心：通过中间干净估计在测试时引导文生图安全，避免训练式遗忘成本。 | 关联：展示测试时扩展从 LLM 推理迁移到多模态生成的潜力。

### LLM Agent Society

#### [History Matters: Meta-policy Delegation with Heterogeneous Multi-agent Reinforcement Learning](http://arxiv.org/abs/2608.03833v1)

- 作者：Z. Lu, A. R. Mudireddy, S. Alqahtani et al. | 日期：2026-08-04 | 核心：研究异构多智能体基于历史协作信息进行元策略委派。 | 关联：为 LLM Agent 社会中的角色分工与协作提供通用多智能体框架。

## 具身智能

### 视觉-语言-动作模型

#### [Structure-Aware Robust Fine-Tuning: Defending Vision-Language-Action Robots Against Physical Attention Hijacking](http://arxiv.org/abs/2608.03231v1)

- 作者：J. Zhang, D. Yin, R. Yang et al. | 日期：2026-08-04 | 核心：提出结构感知鲁棒微调，防御物理对抗补丁对 VLA 策略的注意力劫持。 | 关联：直接提升 VLA 机器人在物理世界攻击下的动作鲁棒性。

#### [Track4Action: Distilling World-Centric 3D Tracker into Vision-Language-Action Policies](http://arxiv.org/abs/2608.03727v1)

- 作者：C. Wang, X. Wang, B. Lin et al. | 日期：2026-08-04 | 核心：将世界中心 3D 跟踪器蒸馏进 VLA，补充动作标签缺失的 3D 世界变化监督。 | 关联：增强 VLA 对几何、运动、可见性和多帧变化的理解。

#### [How Should Vision-Language-Action Models Use Proprioceptive State?](http://arxiv.org/abs/2608.03052v1)

- 作者：Y. Zhao, Z. Chen, Z. Rao et al. | 日期：2026-08-04 | 核心：系统比较 VLA 本体感受状态的不同接入方式与单/多帧设计。 | 关联：为 VLA 模型的输入接口提供工程化选择依据。

### 具身导航

#### [SUV: Future Scene Understanding as Video Generation for End-to-End Driving](http://arxiv.org/abs/2608.03084v1)

- 作者：Y. Yuan, J. Fu, J. Zhu et al. | 日期：2026-08-04 | 核心：提出 SUV 框架，用视频生成统一端到端驾驶的未来场景理解。 | 关联：为具身导航中的预测与规划提供生成式世界模型。

#### [PolyLayout: Multi-room Manhattan Layout Estimation](http://arxiv.org/abs/2608.03323v1)

- 作者：G. Hanning, S. Liu, R. Pautrat et al. | 日期：2026-08-04 | 核心：从多视图联合估计多房间曼哈顿布局，突破单房间假设。 | 关联：输出结构化布局可用于室内导航和建图先验。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [When Compression Scores Cannot Decide: Information Boundaries for Group-Robust LLM Pruning](http://arxiv.org/abs/2608.02940v1)

- 作者：A. Zhang | 日期：2026-08-03 | 核心：指出高重测信度的压缩分数仍可能选错模型，并用信息边界解释差距。 | 关联：对 LLM 剪枝的离线评分和模型选择方法提出重要警示。

### 多模态大模型剪枝

#### [Adaptive Two-Stage Visual Token Pruning for Efficient Inference in Video-Language Models](http://arxiv.org/abs/2608.03112v1)

- 作者：P. Regmi, Q. Chen, C. Zhang et al. | 日期：2026-08-04 | 核心：提出自适应两阶段视觉 token 剪枝，降低视频语言模型推理延迟。 | 关联：面向多模态大模型的视觉 token 级剪枝与推理优化。

#### [GSTEP: Global Spatio-Temporal Density-Driven Visual Token Pruning for Efficient Video Large Language Models](http://arxiv.org/abs/2608.03083v1)

- 作者：M. Zhang, Q. Zhu, T. Zhang et al. | 日期：2026-08-04 | 核心：提出全局时空密度驱动的 token 剪枝，用于长视频 VideoLLM 去冗余。 | 关联：为多模态大模型剪枝提供长视频场景的密度感知方法。

### 持续学习

#### [MoEGen: Mixture-of-Experts for Instance-Adaptive LoRA Generation](http://arxiv.org/abs/2608.03275v1)

- 作者：Y. Zeng, L. Lu, Z. Li et al. | 日期：2026-08-04 | 核心：用 MoE 生成实例自适应 LoRA，避免为每个专家存储完整 LoRA。 | 关联：为持续多任务适配提供存储可控的高效 PEFT 方案。

#### [OliveGemma: A 3 Billion Visual Language Model for Recognising the Mediterranean & European Diet](http://arxiv.org/abs/2608.03428v1)

- 作者：D. I. Zaridis, T. Tsiokris, V. C. Pezoulas et al. | 日期：2026-08-04 | 核心：发布 3B 视觉语言模型，面向地中海/欧洲饮食的细粒度识别。 | 关联：展示领域专用 VLM 下游持续适配的一种轻量实践。

#### [Reinforcement Learning with Evolving Rubrics as Rewards for Audio Reasoning](http://arxiv.org/abs/2608.02831v1)

- 作者：F. Yu, T. Feng, D. Min et al. | 日期：2026-08-03 | 核心：提出随训练更新的评分规则作为奖励，用于音频推理 RL。 | 关联：动态奖励设计对持续学习中的非平稳目标适应有方法借鉴。

## 视觉感知

### 事件相机视觉感知

#### [PLS-Calib: A Partial Least Squares Framework for Event Camera and Odometry Calibration under Ground Motion Constraints](http://arxiv.org/abs/2608.03296v1)

- 作者：G. Li, X. Li, Y. Wu et al. | 日期：2026-08-04 | 核心：提出偏最小二乘框架，在地面运动约束下标定事件相机与里程计外旋。 | 关联：服务地面机器人事件相机感知系统的标定需求。

### 3D 点云视觉感知

#### [Lightweight 3D Object Detection via Mamba-Based Knowledge Distillation](http://arxiv.org/abs/2608.03490v1)

- 作者：Q. C. Ninh, H. X. Pham, A. T. Nguyen et al. | 日期：2026-08-04 | 核心：用 Mamba 与知识蒸馏实现轻量 LiDAR 3D 目标检测。 | 关联：直接服务车载和机器人点云感知的精度-效率平衡。

#### [TDVR: Joint Text Disambiguation and Viewpoint Reasoning for Zero-Shot 3D Visual Grounding](http://arxiv.org/abs/2608.03763v1)

- 作者：Q. Du, J. Wang, Y. Li et al. | 日期：2026-08-04 | 核心：提出免训练 TDVR，联合文本消歧和视角推理用于零样本 3D 视觉定位。 | 关联：提升点云/3D 场景中语言查询的定位能力。

#### [NCGR: Noise-Conditional Gated Rectification for Camera Extrinsic Perturbations in BEV 3D Object Detection](http://arxiv.org/abs/2608.03895v1)

- 作者：W. Pan, W. Liu, L. Luo et al. | 日期：2026-08-04 | 核心：提出噪声条件门控矫正，修复 BEV 3D 检测中相机外参扰动。 | 关联：增强 3D 感知系统在标定误差下的鲁棒性。

### 3D 点云感知与跟踪

今日暂无新论文。

## 跨方向信号

- 测试时扩展正在跨越 NLP 与多模态：LLM 自适应采样和文生图安全都在用推理期计算换取更可控输出。
- 世界中心监督与生成式预测进入具身方向：Track4Action 的 3D 跟踪蒸馏和 SUV 的视频生成，都试图用视觉预测补足动作训练信号。
- 视觉 token 剪枝与 LLM 压缩关注同一问题：如何在减少推理成本时不丢失关键信息，与 LLM 剪枝分数可靠性研究形成呼应。
- 安全与隐私约束开始渗透 Agent、VLA 和多模态生成：对抗补丁防御、差分隐私记忆、安全文生图均指向部署级鲁棒性。

## 优先精读

#### - [Track4Action: Distilling World-Centric 3D Tracker into Vision-Language-Action Policies](http://arxiv.org/abs/2608.03727v1)：用 3D 跟踪为 VLA 补充动作之外的世界级监督，可能改变 VLA 训练范式。
#### - [Interpretable Adaptive Sampling for LLM Test-Time Scaling](http://arxiv.org/abs/2608.03961v1)：直接解决测试时扩展的固定预算问题，并给出可解释的自适应分配机制。
#### - [When Compression Scores Cannot Decide: Information Boundaries for Group-Robust LLM Pruning](http://arxiv.org/abs/2608.02940v1)：揭示压缩分数与真实性能之间的信息边界，对 LLM 剪枝模型选择有方法学警示。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*