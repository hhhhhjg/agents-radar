# 实验室研究方向 Radar 2026-09-17

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 22 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-17 00:00 UTC

---

## 今日总览
- **LLM Agent 与多智能体下的 LLM Agent 工程**：3 篇新论文，聚焦社会模拟可解释与 steering、工具集成 Agent 对抗防御、turn-level 后训练评估。
- **LLM Agent 与多智能体下的 Agent 测试时扩展与自我改进**：3 篇新论文，涉及 SWE-Agent 早期设计决策、looped Transformer 测试时迭代失败、多智能体博弈学习动力学。
- **LLM Agent 与多智能体下的 LLM Agent Society**：今日暂无新论文。
- **具身智能下的视觉-语言-动作模型**：3 篇新论文，覆盖真实轮式装载机 VLA、对称性感知 VLA、VLA 策略 MoE 压缩。
- **具身智能下的具身导航**：2 篇高相关新论文，聚焦 VLN 不确定性估计与具身自动驾驶场景知识表示。
- **模型压缩与持续学习下的 LLM 剪枝与推理优化**：1 篇新论文，提出分层双环 speculative decoding 推理加速。
- **模型压缩与持续学习下的多模态大模型剪枝**：今日暂无新论文。
- **模型压缩与持续学习下的持续学习**：3 篇新论文，涵盖稀疏类增量学习、不确定性感知地形适应、持续改进科学 Agent。
- **视觉感知下的事件相机视觉感知**：2 篇新论文，涉及事件相机 3D 手部重建与语义超图蒸馏预训练。
- **视觉感知下的 3D 点云视觉感知**：2 篇新论文，涉及 LiDAR 语义场景补全先验与视觉具身依赖分析。
- **视觉感知下的 3D 点云感知与跟踪**：2 篇新论文，均为 LiDAR 3D 单目标跟踪。

## LLM Agent 与多智能体
### LLM Agent 工程
#### [Interpreting and Steering LLM Agents for Social Simulations](http://arxiv.org/abs/2609.16436v1)
作者：J. G. Fan 等；2026-09-14。核心：面向社会模拟解释并 steering LLM Agent，缓解黑箱限制。关联：LLM Agent 可解释性与行为控制工程。
#### [Universal Defenses for Tool-Integrated LLM Agents Against Adversarial Attacks](http://arxiv.org/abs/2609.16098v1)
作者：X. Li, Y. Wang；2026-09-14。核心：为工具集成 LLM Agent 提供通用防御，抵御直接/间接提示注入等攻击。关联：工具使用 Agent 的安全工程。
#### [Turn-level Multiscale Density Ratio Estimation for LLM Agents](http://arxiv.org/abs/2609.16760v1)
作者：Z. Zhao 等；2026-09-15。核心：面向多步思考/工具交互 Agent 后训练，提出 turn-level 多尺度密度比估计。关联：Agent 后训练与决策评估。
### Agent 测试时扩展与自我改进
#### [Right Direction, Wrong Step: Geometric Analysis of Finite-Step Failure in Looped Transformers](http://arxiv.org/abs/2609.16665v1)
作者：Z. Guo 等；2026-09-15。核心：分析 looped Transformer 在测试时迭代 latent reasoning 中额外迭代降低答案支持的原因。关联：测试时扩展与迭代推理失败机制。
#### [Grounding SWE-Agent Decisions in Architecture-0 Design: Navigating Unknown Unknowns through Physical Mapping](http://arxiv.org/abs/2609.17221v1)
作者：Z. Wang, Y. Liu；2026-09-15。核心：研究 SWE-Agent 在早期架构设计 Unknown Unknowns 下的决策 grounding 与 physical mapping。关联：Agent 在不确定任务中的决策与自我改进。
#### [Constant Swap Regret in General-Sum Games via Optimistic Transition Matrices](http://arxiv.org/abs/2609.16751v1)
作者：T. Mai；2026-09-15。核心：给出有限多人一般和博弈中恒定个体 swap regret 的确定性无耦合学习动态。关联：多智能体策略改进的理论工具。
### LLM Agent Society
今日暂无新论文。

## 具身智能
### 视觉-语言-动作模型
#### [sensVLA: Spatially-Grounded Vision-Language-Action Model for Autonomous Wheel Loader](http://arxiv.org/abs/2609.17021v1)
作者：G. K. Erabati 等；2026-09-15。核心：结合 Qwen3-2B VLM 与可训练 transformer action expert，用于轮式装载机自主控制。关联：真实具身任务中的空间 grounding VLA。
#### [SAVLA: Symmetry-Aware Vision-Language-Action Models for Robotic Manipulation](http://arxiv.org/abs/2609.16641v1)
作者：J. Li 等；2026-09-15。核心：利用图像与语言中的几何信息提出对称性感知 VLA，提升空间泛化。关联：VLA 几何与对称性归纳偏置。
#### [Dense to MoE Adaptation for Compact Vision Language Action Policies](http://arxiv.org/abs/2609.16503v1)
作者：M. Niu 等；2026-09-15。核心：通过 dense-to-MoE 适配压缩部署 VLA 策略的 LLM 侧参数，同时保持下游性能。关联：VLA 模型压缩与部署优化。
### 具身导航
#### [ENCP: Episode-Normalized Conformal Prediction for Vision-and-Language Navigation](http://arxiv.org/abs/2609.17499v1)
作者：V. Feliren 等；2026-09-15。核心：为 VLN 模型提出 episode-normalized conformal prediction，估计不确定性以支持更安全导航。关联：具身导航不确定性估计。
#### [NeuroSymbEAD: A Large Scale Neuro-Symbolic Caption Dataset for Omni-Directional Embodied Autonomous Driving](http://arxiv.org/abs/2609.16919v1)
作者：M. A. U. Khan 等；2026-09-15。核心：提出带 ego-centric 知识图谱的神经符号 caption 数据集，标注物体类别、朝向、距离等。关联：具身自动驾驶场景语义与知识表示。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### [ECHO: Early-layer Collaborative Hierarchical Orchestration with Bonus Logits in Speculative Decoding](http://arxiv.org/abs/2609.17241v1)
作者：Z. Ma 等；2026-09-15。核心：提出分层双环 speculative decoding，利用 early-layer 协作与 bonus logits 缓解 stale draft 与验证开销。关联：LLM 推理加速。
### 多模态大模型剪枝
今日暂无新论文。
### 持续学习
#### [CLARE: Scalable Class-Incremental Continual Learning via a Sparsity-Based Framework](http://arxiv.org/abs/2609.17026v1)
作者：Y. Fu 等；2026-09-15。核心：基于稀疏性框架实现可扩展类增量持续学习，平衡新知识学习与旧知识保留。关联：持续学习与类增量学习。
#### [Continual Learning for Traversability Prediction with Uncertainty-Aware Adaptation](http://arxiv.org/abs/2609.17141v1)
作者：H. Lee 等；2026-09-15。核心：面向非结构化环境 traversability 预测，提出不确定性感知的持续学习适应。关联：机器人持续学习与不确定地形。
#### [ScienceBuddy: Recursive-in-Recursive Self-Improvement for Interactive Scientific Agents](http://arxiv.org/abs/2609.17523v1)
作者：S. Xue 等；2026-09-15。核心：构建交互式科研工作区，支持递归中的递归自我改进科学 Agent。关联：持续改进型 Agent 与持续学习交叉。

## 视觉感知
### 事件相机视觉感知
#### [EventEgoHands++: Event-based Egocentric 3D Hand Mesh Reconstruction with Real Dataset](http://arxiv.org/abs/2609.17189v1)
作者：R. Hara 等；2026-09-15。核心：基于事件相机的第一视角 3D 手部网格重建，并引入真实数据集。关联：事件相机视觉感知。
#### [Hyper-RED: Scalable Event Pre-training via Semantic Hypergraph Distillation](http://arxiv.org/abs/2609.16811v1)
作者：M. Wang 等；2026-09-15。核心：通过语义超图蒸馏实现可扩展事件预训练，利用图像模型提供语义监督。关联：事件表示学习与预训练。
### 3D 点云视觉感知
#### [SSC-Priors: Exploring Semantic and Visibility Priors to Boost Lidar Semantic Scene Completion](http://arxiv.org/abs/2609.17413v1)
作者：T. Martyniuk 等；2026-09-15。核心：利用语义与可见性先验提升现有 LiDAR 语义场景补全网络，无需复杂重设计。关联：LiDAR 3D 语义场景补全。
#### [Rethinking Visual Embodiment Dependence in Visuomotor Policies](http://arxiv.org/abs/2609.16815v1)
作者：H. Fang 等；2026-09-15。核心：通过 cue-conflict 干预研究 visuomotor policies 对可见 embodiment 视觉线索的依赖。关联：视觉具身依赖分析，服务 3D/视觉感知下游策略。
### 3D 点云感知与跟踪
#### [SAVTrack: Selective Vote Aggregation for Reliability-Aware Point Cloud Tracking](http://arxiv.org/abs/2609.16662v1)
作者：S. Zhou 等；2026-09-15。核心：提出选择性投票聚合，处理稀疏不完整 LiDAR 点云中不同点对中心约束不均的问题。关联：LiDAR 3D 单目标跟踪。
#### [MAETrack: Unleashing the Potential of Pretrained Geometric Priors for 3D Single Object Tracking](http://arxiv.org/abs/2609.16695v1)
作者：S. Zhou 等；2026-09-15。核心：研究自监督 3D 编码器向 3D SOT 迁移，释放预训练几何先验。关联：3D 点云单目标跟踪。

## 跨方向信号
- 几何与空间先验持续增强：SAVLA、sensVLA、SSC-Priors、MAETrack、SAVTrack 均强调对称性、可见性、3D 几何或预训练先验。
- 可靠性与不确定性成为共性需求：SAVTrack 的选择性投票、ENCP 的 conformal prediction、持续学习中的不确定性感知适应，均服务于高风险感知/导航。
- 压缩与高效推理跨模型类型扩散：Dense-to-MoE 压缩 VLA，ECHO 加速 LLM 解码，CLARE 用稀疏性支撑持续学习。
- Agent 安全、可解释与后训练并行推进：Universal Defenses、Interpreting/Steering、Turn-level Density Ratio、SWE-Agent grounding 共同提升 Agent 可控性。
- 测试时适应与持续改进交汇：Looped Transformer 迭代推理、ScienceBuddy 递归自我改进、CLARE 类增量学习，均关注序列任务中的稳定更新。

## 优先精读
- **SAVTrack**：直接针对 LiDAR 点云 3D 单目标跟踪的稀疏与不完整观测，可靠性感知投票对自动驾驶感知有明确价值。
- **SAVLA**：将对称性/几何归纳偏置引入 VLA，可能缓解示范学习导致的空间泛化不足，对机器人操作有通用意义。
- **CLARE**：以稀疏性框架解决可扩展类增量持续学习，兼顾预训练模型利用与灾难遗忘，适合持续学习方向深入评估。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*