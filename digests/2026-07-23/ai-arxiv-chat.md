# 实验室研究方向 Radar 2026-07-23

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 10 个研究方向 | 38 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-07-23 13:32 UTC

---

好的，科研情报分析师。这是根据您提供的截至2026-07-23的ArXiv论文数据生成的《研究方向Radar》。

---

### 今日总览

严格按照配置顺序，为每一个研究方向单独列一个要点：

- **LLM Agent 与多智能体 / LLM Agent 工程**：今日新论文数量最多（15篇），集中在Agent安全（提示注入、跨Agent攻击、HPC安全）、基准测试（文档操作、代码优化）、以及Agent调试与部署工具等方面，显示出该领域正向工程成熟度和安全性评估方向快速演进。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：今日暂无新论文。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：今日有8篇新论文，聚焦于VLA模型的实际部署挑战，包括数据高效后训练、长时程操作中的持久化3D表示、力反馈记忆，以及对VLA模型可解释性和结构化控制（如信号时序逻辑）的探索。
- **具身智能 / 具身导航**：今日暂无新论文。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：今日有2篇新论文，一篇关注不同推理引擎的分布一致性评估，另一篇探索用于端侧部署的选择性神经元加载与计算。
- **模型压缩与持续学习 / 多模态大模型剪枝**：今日有1篇新论文，通过因果分析发现Diffusion Transformer中文本模板token扮演了隐式语义寄存器角色，为模型压缩提供了新的理论视角。
- **模型压缩与持续学习 / 持续学习**：今日有10篇新论文，涵盖持续学习的新框架（数字孪生、边缘计算）、新方法（基于流形约束的PEFT、程序记忆）、以及针对特定领域（视频理解、生物特征识别）的持续适应。
- **视觉感知 / 事件相机视觉感知**：今日暂无新论文。
- **视觉感知 / 3D 点云视觉感知**：今日有4篇新论文，涉及激光雷达标定、基于视图合成的全景分割、V2X协同3D检测，以及点云模型参数高效微调。

### 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [DocOps: A Verifiable Benchmark for Autonomous Agents in Complex Document Operations](http://arxiv.org/abs/2607.19865v1)
- Jiang et al., 2026-07-22. 提出了一个确定性可验证的Agent操作文档的基准测试框架。为评估Agent在办公自动化等复杂文档任务中的可靠性提供了标准化平台。

#### [PerfAgent: Profiler-Guided Iterative Refinement for Repository-Level Code Optimization](http://arxiv.org/abs/2607.19653v1)
- Deng et al., 2026-07-22. 构建了由性能剖析器引导的LLM Agent，用于仓库级代码迭代优化。将Agent能力从功能正确性扩展到了非功能性代码优化，提升了Agent工程实用性。

#### [Twin Agent: Context Residual Compression for Privilege Separated Agents](https://arxiv.org/abs/2607.19595v1)
- Hu et al., 2026-07-21. 提出双Agent架构，通过分离特权和未受信上下文来防御提示注入攻击。为构建安全可靠的LLM Agent系统提供了重要的架构范式。

#### [AgentDebugX: An Open-Source Toolkit for Failure Observability, Attribution, and Recovery in LLM Agents](http://arxiv.org/abs/2607.18754v1)
- Zhu et al., 2026-07-21. 发布了一个开源工具包，用于LLM Agent失败的可观测性、归因和恢复。填补了Agent开发中关键的工具链缺失，降低了Agent系统调试与维护的门槛。

#### [Broken Gates: Re-evaluating Web Bot Defenses in the Age of LLM Agents](http://arxiv.org/abs/2607.18659v1)
- Ousat et al., 2026-07-21. 重新评估了现有Web机器人防御机制面对LLM Agent时的有效性。揭示了LLM Agent对现有网络安全威胁模型的颠覆性冲击。

### Agent 测试时扩展与自我改进

今日暂无新论文。

### LLM Agent Society

今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [ReferTrack: Referring Then Tracking for Embodied Visual Tracking](http://arxiv.org/abs/2607.20061v1)
- Ye et al., 2026-07-22. 提出“先指代后跟踪”的具身跟踪框架，优化了VLA模型在目标跟踪任务中的推理效率。使VLA模型能更有效地结合指代理解与视觉跟踪。

#### [FM-VLA: Force-based Memory for Vision-Language-Action Models in Contact-Rich Manipulation](http://arxiv.org/abs/2607.18231v1)
- Li et al., 2026-07-20. 在VLA模型中引入基于力反馈的记忆，用于处理接触丰富的操作任务。将触觉这一多模态信息引入VLA记忆机制，提升了模型在精密操作场景下的表现。

#### [Closing the Loop in Humanoid VLA: Persistent 3D Object Tokens for Verifiable Loco-Manipulation](http://arxiv.org/abs/2607.18016v1)
- Ren et al., 2026-07-20. 通过持久化3D物体Token来解决人形机器人在长时程操作中的物体状态发散问题。显著提升了VLA系统在执行复杂、长时任务时的鲁棒性和可验证性。

#### [STeP: Signal Temporal Logic for Precise Specifications for Action Generation with Vision Language Models](http://arxiv.org/abs/2607.18580v1)
- Torshizi et al., 2026-07-20. 利用信号时序逻辑（STL）为VLA模型的行动生成提供精确、可解释的规范。增强了VLA模型对包含时空、逻辑关系指令的遵循能力和可解释性。

#### [Closing the Lab-to-Store Gap: A Data-Efficient Post-Training and Experience-Driven Learning VLA Framework for Retail Humanoids](http://arxiv.org/abs/2607.20345v1)
- Sisó et al., 2026-07-22. 提出了一种数据高效的后训练和经验驱动学习框架，用于缩小VLA人形机器人在实验室与真实零售场景间的性能差距。直接针对VLA模型从研究到部署的核心问题，即数据效率和环境鲁棒性。

### 具身导航

今日暂无新论文。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [SelectInfer: Selective Neuron Loading and Computation for On-Device LLMs](http://arxiv.org/abs/2607.18081v1)
- Kabakibo et al., 2026-07-20. 提出选择性神经元加载与计算策略，用于在端侧设备部署大模型。提供了一种在内存受限设备上运行LLM的高效且动态的推理优化方法。

#### [Total Variation Distance Estimation in Autoregressive Models](http://arxiv.org/abs/2607.19510v1)
- Price et al., 2026-07-21. 研究了在自回归模型（如LLM）中估计总变差距离的方法，用于比较不同推理引擎的输出分布。为评估和统一不同LLM推理引擎的行为一致性提供了统计学工具。

### 多模态大模型剪枝

#### [Text Template Tokens Are Implicit Semantic Registers in Diffusion Transformers](http://arxiv.org/abs/2607.19139v1)
- Li et al., 2026-07-21. 发现Diffusion Transformer中的文本模板token作为隐式语义寄存器工作。为理解和优化多模态Transformer模型、进而指导剪枝提供了新的内部分析视角。

### 持续学习

#### [The Blessing of Dimensionality: How Near-Orthogonality in High-Dimensional Spaces Explains Temporal Portability](http://arxiv.org/abs/2607.20301v1)
- Woodring et al., 2026-07-22. 理论解释了高维空间中近正交性为何能使LLM微调结果具备时间移植性。为持续学习中如何缓解灾难性遗忘提供了新的理论视角。

#### [A Continual Validation, Updating, and Decision-Making Framework for Self-Adaptive Digital Twins via Robust Model Predictive Control](http://arxiv.org/abs/2607.18164v1)
- Chen et al., 2026-07-20. 为自适应数字孪生提出一个基于鲁棒模型预测控制的持续验证、更新和决策框架。将持续学习应用于工业数字孪生场景，维护模型在动态环境下的保真度。

#### [Continual Video-MLLM Adaptation over Evolving Domains](http://arxiv.org/abs/2607.18716v1)
- Cheng et al., 2026-07-21. 研究视频多模态大模型在持续演进的领域上的适应性。将持续学习问题拓展到视频理解这一重要且充满挑战的多模态领域。

#### [Manifold-Constrained Hyper-Connections for Parameter-Efficient Finetuning](http://arxiv.org/abs/2607.18130v1)
- Oldenburg et al., 2026-07-20. 提出流形约束超连接（mHC），作为对残差连接的新泛化，是一类新的参数高效微调方法。为持续学习中的参数高效微调（PEFT）提供了全新的架构组件。

#### [Statistical Inference for Rank Allocation in Low-Rank Adaptation](http://arxiv.org/abs/2607.20205v1)
- Gao et al., 2026-07-22. 为LoRA中的秩分配问题提供了统计推断方法。为持续学习中的资源分配问题提供了理论基础，有助于优化模型的适应效率。

## 视觉感知

### 事件相机视觉感知

今日暂无新论文。

### 3D 点云视觉感知

#### [Point Ladder Tuning: Parameter-Efficient Hierarchical Adaptation for 3D Point Cloud Understanding](http://arxiv.org/abs/2607.19171v1)
- Chang et al., 2026-07-21. 提出“点云梯调参”方法，用于3D点云模型的高效层次化微调。实现了点云模型的高效参数级适应，同时保留了处理关键细节的高分辨率能力。

#### [Two-Stage Extrinsic Calibration of a Static Line-Scanning Lidar with a Rotary Platform](http://arxiv.org/abs/2607.18578v1)
- Shree et al., 2026-07-20. 提出一种两阶段外参标定方法，用于固定线扫激光雷达与旋转平台的组合系统。解决了特定配置下工业3D感知传感器的精确标定问题。

#### [CoGoal3D: Collaborative 3D Object Detection with 3D-Aware Fusion and Refinement](http://arxiv.org/abs/2607.19036v1)
- Yang et al., 2026-07-21. 提出了一种用于V2X协同3D目标检测的三维感知融合与精炼框架。将协同感知从BEV平面提升到真正的3D空间，提升了自动驾驶等场景下的检测精度。

### 跨方向信号

1. **参数高效微调（PEFT）方法的持续深化与扩散**：今日的论文不仅在持续学习子方向中涌现出如mHC这样的新PEFT架构，也被应用于3D点云理解（Point Ladder Tuning）和多模态大模型剪枝（对DiT内部分析用于剪枝）。PEFT已成为贯穿模型压缩、持续学习和多模态理解等多个方向的核心技术。

2. **Agent安全与鲁棒性成为工程化核心议题**：在LLM Agent工程方向，大量论文聚焦于提示注入防御（Twin Agent）、跨Agent攻击归因、HPC环境安全以及对抗性基准测试。这表明Agent的研究重心正从“能做”向“可靠、安全地做”转移，并与持续学习中的抗遗忘、鲁棒性要求产生共鸣。

3. **具身智能中“记忆”机制的跨模态与持久化**：在视觉-语言-动作（VLA）方向，多个工作强化了“记忆”的概念，不仅限于视觉记忆，还引入了力觉（FM-VLA）和持久化3D物体状态（Closing the Loop）。这与持续学习方向中对长时程知识维护的追求不谋而合，显示出在动态、长时间任务中，记忆与适应性是所有智能体面临的共同挑战。

4. **可解释性与结构化控制成为提升VLA性能的新路径**：STeP和ReferTrack等工作显示，通过引入信号时序逻辑（STL）这样的结构化规范，或将任务分解为明确子步骤（Referring then Tracking），能够有效提升VLA模型在复杂指令下的鲁棒性和可解释性。这为克服VLA模型的“黑箱”特性提供了增量但切实有效的思路。

### 优先精读

#### **AgentDebugX: An Open-Source Toolkit for Failure Observability, Attribution, and Recovery in LLM Agents** (链接: [http://arxiv.org/abs/2607.18754v1](http://arxiv.org/abs/2607.18754v1))
    - **理由**：该论文直击LLM Agent工程化的核心痛点——调试。在Agent系统日益复杂的背景下，一个标准化的开源调试工具对于推动整个领域的快速迭代和可靠性验证至关重要。精读此论文有助于理解当前Agent系统故障模式、根因定位的最佳实践，并可作为实验室工具链建设的参考。

#### **Closing the Loop in Humanoid VLA: Persistent 3D Object Tokens for Verifiable Loco-Manipulation** (链接: [http://arxiv.org/abs/2607.18016v1](http://arxiv.org/abs/2607.18016v1))
    - **理由**：该工作针对具身智能中VLA模型在长时程任务中的“物体状态发散”这一核心挑战，提出了一个优雅且强健的解决方案。通过将持久化的3D物体表征引入闭环，不仅提升了性能，还实现了任务的可验证性。这对于研究高鲁棒性、高自主性VLA系统具有重要参考价值。

#### **The Blessing of Dimensionality: How Near-Orthogonality in High-Dimensional Spaces Explains Temporal Portability** (链接: [http://arxiv.org/abs/2607.20301v1](http://arxiv.org/abs/2607.20301v1))
    - **理由**：这篇论文为持续学习领域的核心难题——灾难性遗忘，提供了一个深刻的理论解释。它从高维几何的角度切入，解释了为何某些微调结果能在一段时间内保持有效性。对于希望从根本上理解和解决对象/环境持续变化场景下模型退化问题的研究人员来说，这是一篇必读的文献。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*