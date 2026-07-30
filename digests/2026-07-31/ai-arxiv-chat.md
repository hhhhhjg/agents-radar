# 实验室研究方向 Radar 2026-07-31

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 15 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-07-30 22:59 UTC

---

好的，科研情报分析师。以下是根据您提供的论文列表生成的研究方向 Radar。

---

### 今日总览

- **LLM Agent 与多智能体 / LLM Agent 工程**：今日有3篇新论文，展示了LLM Agent在工具选择、长期记忆组织和复杂任务规划（旅行）方面的工程化探索。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：今日有1篇新论文，提出了一种通过自我对弈进行自动化红队攻击以增强LLM鲁棒性的方法。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：今日有3篇新论文，分别聚焦于VLA模型的实时性、测试时扩展和3D运动学引导，共同指向解决VLA模型部署中的效率与泛化瓶颈。
- **具身智能 / 具身导航**：今日有3篇新论文，覆盖了生物实验室场景的仿真平台、3D场景质量评估和自动驾驶中的深度感知全景分割。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：今日暂无新论文。
- **模型压缩与持续学习 / 多模态大模型剪枝**：今日暂无新论文。
- **模型压缩与持续学习 / 持续学习**：今日有3篇新论文，分别从局部学习架构、博弈论联邦微调和联邦MoE-LoRA的角度探索了模型在持续学习中的遗忘问题与异构性挑战。
- **视觉感知 / 事件相机视觉感知**：今日有1篇新论文，提出了一种生物启发的序列感知脉冲神经网络用于事件相机目标检测。
- **视觉感知 / 3D 点云视觉感知**：今日有1篇新论文，主要关注长尾分布下的3D点云数据集蒸馏方法。
- **视觉感知 / 3D 点云感知与跟踪**：今日暂无新论文。

### 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [Scores Are Not Decisions: Cost-Aware Stopping for Tool Acquisition in LLM Agents](http://arxiv.org/abs/2607.27083v1)
- 作者: Y. Feng et al.
- 发布日期: 2026-07-29
- 核心贡献: 提出了一种成本感知的停止策略，用于LLM Agent在工具获取过程中平衡信息充分性与调用成本。
- 与方向关联: 直接解决了LLM Agent工程中工具选择的核心问题，优化了Agent的决策边界和资源消耗。

#### [Filesystem-Based Memory for LLM Agents: Organization, Evolution, and Sustainability](http://arxiv.org/abs/2607.26637v1)
- 作者: S. Zhou et al.
- 发布日期: 2026-07-29
- 核心贡献: 系统性地研究了基于文件系统的LLM Agent长期记忆组织、演化与可持续性机制。
- 与方向关联: 为LLM Agent提供了一种通用、可持续的长期记忆工程解决方案，不同于以往定制的记忆表示。

#### [TREK: A Travel Reasoning and Evaluation Kit for LLM Agents in Complex Trip Planning](http://arxiv.org/abs/2607.26977v1)
- 作者: J. Qi et al.
- 发布日期: 2026-07-29
- 核心贡献: 发布了一个名为TREK的复杂旅行规划评测集，用于评估LLM Agent在多约束、多工具环境下的推理能力。
- 与方向关联: 为LLM Agent工程的评测提供了一个极具挑战性的基准，涵盖多工具调用与复杂约束满足。

### Agent 测试时扩展与自我改进

#### [GPT-Red: Automated Red Teaming via Self-Play at Scale](http://arxiv.org/abs/2607.26115v1)
- 作者: E. Wallace et al.
- 发布日期: 2026-07-28
- 核心贡献: 提出GPT-Red，一种通过自我对弈（Self-Play）自动训练红队Agent，以发现前沿LLM的新型提示注入攻击。
- 与方向关联: 直接体现Agent的自我改进能力，利用对抗性训练（红队）提升目标模型（GPT-5.6）的鲁棒性。

### LLM Agent Society
今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [TurboVLA: Real-Time Vision-Language-Action Model at 32 Hz on an RTX 4090 with &lt;1 GB VRAM](http://arxiv.org/abs/2607.27205v1)
- 作者: H. Xie et al.
- 发布日期: 2026-07-29
- 核心贡献: 提出TurboVLA，通过非自回归并行动作头等技术，在RTX 4090上实现了32Hz的实时VLA推理，且VRAM占用低于1GB。
- 与方向关联: 显著提升了VLA模型的部署效率，解决了LLM-centric架构计算开销大的核心痛点。

#### [RL$^2$-VLA: Adaptive RL Latent Compositional Steering with Test-Time Scaling for Vision-Language-Action Models](http://arxiv.org/abs/2607.26991v1)
- 作者: D. M. S. Tan et al.
- 发布日期: 2026-07-29
- 核心贡献: 提出RL$^2$-VLA，结合自适应强化学习潜变量组合引导与测试时扩展（Test-Time Scaling）方法，提升VLA模型在领域外任务上的表现。
- 与方向关联: 探索了在测试阶段通过强化学习直接优化VLA模型行为，是Agent测试时扩展思想在机器人领域的应用。

#### [Explicit Kinematic Guidance from Analytic Concepts for Vision-Language-Action Models](http://arxiv.org/abs/2607.26513v1)
- 作者: M. Sun et al.
- 发布日期: 2026-07-29
- 核心贡献: 提出一种显式运动学引导方法，通过将解析概念中的3D结构先验注入VLA模型，增强其对复杂高精度操作的适应性。
- 与方向关联: 通过引入3D先验知识，弥补了当前VLA模型依赖2D输入而缺乏空间感知的缺陷。

### 具身导航

#### [BioVLN: A Simulation Platform for Visual Language Navigation in Biomedical Laboratories](http://arxiv.org/abs/2607.26914v1)
- 作者: Z. Liu et al.
- 发布日期: 2026-07-29
- 核心贡献: 发布了面向生物医学实验室的视觉语言导航（VLN）仿真平台BioVLN，专注于仪器级的精确导航。
- 与方向关联: 为具身导航在高度专业化和结构化的生物实验室环境中提供了新的基准和场景。

#### [SpatialQ: Understanding 3D Gaussian Splatting Scene Quality via Visual-based MLLM](http://arxiv.org/abs/2607.26595v1)
- 作者: J. Su et al.
- 发布日期: 2026-07-29
- 核心贡献: 提出SpatialQ，一种利用多模态大模型（MLLM）从视觉角度理解并评估3D高斯泼溅（3DGS）场景质量的方法。
- 与方向关联: 为具身导航中常用的3D场景表示（3DGS）提供了质量评估手段，有助于提升导航场景构建的可靠性。

#### [DVPSFormer: Efficient Online Depth-aware Video Panoptic Segmentation for Autonomous Driving](http://arxiv.org/abs/2607.26165v1)
- 作者: Y. Yang et al.
- 发布日期: 2026-07-28
- 核心贡献: 提出DVPSFormer，一种高效的在线深度感知视频全景分割模型，可同时估计度量深度、语义和实例轨迹。
- 与方向关联: 为自动驾驶等具身导航任务提供了全面的环境感知基础，统一了深度和语义理解。

## 模型压缩与持续学习

### LLM 剪枝与推理优化
今日暂无新论文。

### 多模态大模型剪枝
今日暂无新论文。

### 持续学习

#### [The Art of Not Forgetting A Local Learning Architecture for Continual Learning](http://arxiv.org/abs/2607.26523v1)
- 作者: A. Atmuri, Y. R. Bhogarajula
- 发布日期: 2026-07-29
- 核心贡献: 提出CMP（认知记忆原语）架构，通过稀疏关系编码、双层竞争记忆和局部更新来模拟大脑的持续学习，无需端到端反向传播。
- 与方向关联: 提出了一种生物启发式的新型持续学习架构，直接从算法层面缓解灾难性遗忘问题。

#### [Post-Training at the Edge of Detectability: A Game-Theoretic Approach to Fine-Tuning](http://arxiv.org/abs/2607.26358v1)
- 作者: K. Harris et al.
- 发布日期: 2026-07-29
- 核心贡献: 从博弈论角度研究后训练微调，旨在保持模型性能的同时，使微调后的模型难以被探测到与原始模型的差异。
- 与方向关联: 为持续学习中的模型更新提供了新的视角，关注如何在目标域学习的同时最小化对过去知识的干扰（不可检测性）。

#### [FedWeave: Rethinking the Unit of Specialization in Heterogeneous Federated MoE-LoRA](http://arxiv.org/abs/2607.26618v1)
- 作者: D. Duan et al.
- 发布日期: 2026-07-29
- 核心贡献: 提出FedWeave，通过重新思考联邦MoE-LoRA中专家的专业化单元，解决异构联邦学习中的跨任务干扰和梯度冲突。
- 与方向关联: 在联邦持续学习场景下，通过优化专家分配策略，有效缓解了数据异构造成的任务遗忘和模型退化问题。

## 视觉感知

### 事件相机视觉感知

#### [Sequence-SOD: Bio-inspired Sequence-aware Spiking ObjectDetection for Event Cameras](http://arxiv.org/abs/2607.26703v1)
- 作者: K. Bendig et al.
- 发布日期: 2026-07-29
- 核心贡献: 提出Sequence-SOD，一种受生物启发的序列感知脉冲神经网络（SNN），用于处理事件相机的稀疏事件流并进行目标检测。
- 与方向关联: 结合SNN与事件相机的仿生优势，为事件相机视觉感知提供了更自然、高效的计算范式。

### 3D 点云视觉感知

#### [Long-Tailed 3D Point Cloud Dataset Distillation](http://arxiv.org/abs/2607.26763v1)
- 作者: J. You et al.
- 发布日期: 2026-07-29
- 核心贡献: 提出一种针对长尾分布问题的3D点云数据集蒸馏方法，在压缩数据的同时保持对少数类的训练效用。
- 与方向关联: 首次将数据集蒸馏技术应用于长尾分布下的3D点云视觉感知，解决了数据分布不均导致的模型偏差。

### 3D 点云感知与跟踪
今日暂无新论文。

### 跨方向信号

1.  **测试时扩展的泛化**：测试时扩展（Test-Time Scaling）与自我改进的思想不仅在LLM Agent领域（GPT-Red）得到应用，也成功迁移至具身智能的VLA模型（RL$^2$-VLA），显示了其在提升模型泛化能力上的普适性。
2.  **效率优先的模型设计**：多个方向的研究都明确将效率作为核心指标。如VLA模型（TurboVLA）追求实时性，LLM Agent工程（Scores Are Not Decisions）追求成本效益，以及事件相机感知（Sequence-SOD）追求计算效率。
3.  **生物启发与认知科学**：持续学习领域（CMP）和事件相机感知（Sequence-SOD）都借鉴了生物（特别是大脑）的工作机制（局部更新、脉冲），以解决传统深度学习方法在效率或遗忘问题上的固有问题。
4.  **领域专有化与仿真平台**：具身导航（BioVLN）和LLM Agent评测（TREK）都强调了构建特定领域（生物实验室、旅行规划）的仿真或评测平台，反映出从通用基准向解决实际垂直领域问题的趋势。

### 优先精读

#### **[TurboVLA: Real-Time Vision-Language-Action Model at 32 Hz on an RTX 4090 with &lt;1 GB VRAM](http://arxiv.org/abs/2607.27205v1)**：理由是该工作直击VLA模型部署的核心痛点——计算开销与实时性，其非自回归架构和高达32Hz的推理速度是显著的工程突破，可能重塑未来VLA模型的设计范式。
#### **[GPT-Red: Automated Red Teaming via Self-Play at Scale](http://arxiv.org/abs/2607.26115v1)**：理由是该工作代表了LLM自我改进的一种前沿实践，通过自动化红队和对抗训练来提升模型鲁棒性。其“自博弈”方法具有通用性，对理解Agent的安全性和能力边界至关重要。
#### **[The Art of Not Forgetting A Local Learning Architecture for Continual Learning](http://arxiv.org/abs/2607.26523v1)**：理由是该工作提出了一个完全不同的、生物启发的持续学习架构（CMP），跳出了“正则化”或“回放”的传统框架。理解这种源自认知记忆原理的方案，可能为攻克灾难性遗忘问题提供全新思路。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*