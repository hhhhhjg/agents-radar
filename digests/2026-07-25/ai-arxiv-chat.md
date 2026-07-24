# 实验室研究方向 Radar 2026-07-25

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 17 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-07-24 22:56 UTC

---

## 今日总览

- **LLM Agent 与多智能体 / LLM Agent 工程**：今日出现3篇新论文，分别聚焦LLM Agent在数据库查询代码生成、密集奖励训练崩溃问题、以及动作选择中证据溯源审计方面的进展。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：今日出现1篇新论文，提出基于错误定位的测试时扩展方法，通过Token级信用分配提升推理性能。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：今日出现2篇新论文，分别面向自动驾驶混合世界建模VLA和社区驱动的机器人操作数据引擎。
- **具身智能 / 具身导航**：今日出现3篇新论文，覆盖纯视觉长程导航、多楼层零样本目标导航、以及基于可微渲染的场景参数显著性方法。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：今日出现1篇新论文，揭示通过Token级生成时序泄漏模型架构和推理优化信息的攻击方法。
- **模型压缩与持续学习 / 多模态大模型剪枝**：今日出现1篇新论文，综述了压缩、MoE路由与量化在多模态边缘智能中的相互作用。
- **模型压缩与持续学习 / 持续学习**：今日出现3篇新论文，涉及联邦PEFT频谱控制、LoRA适配器记忆容量测量、以及扩散模型选择性微调。
- **视觉感知 / 事件相机视觉感知**：今日暂无新论文。
- **视觉感知 / 3D 点云视觉感知**：今日出现3篇新论文，涵盖类别不平衡下3D点云分割损失景观拓扑分析、路侧3D检测外参扰动补偿、以及基于神经ODE的连续4D形状变形。
- **视觉感知 / 3D 点云感知与跟踪**：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体
### LLM Agent 工程
#### [Demonstrating GenDB: Instance-Optimized and Customized Query Processing Code Generation via LLM Agents](http://arxiv.org/abs/2607.20630v1)
Jiale Lao et al. | 2026-07-22 | 提出用LLM Agent为数据库查询生成实例优化的定制化代码，替代传统查询引擎。 | 直接展示LLM Agent在代码生成工程中的应用，降低系统扩展成本。

#### [The Dark Room in the Reward Channel: Dense Prediction Rewards Collapse GRPO-Trained LLM Agents -- and What Actually Works](http://arxiv.org/abs/2607.21273v1)
Yu Wang | 2026-07-23 | 发现基于GRPO的密集每步预测奖励会导致策略崩溃，并揭示有效替代方案。 | 深入分析LLM Agent强化学习训练中的奖励设计缺陷，指导Agent工程实践。

#### [Auditing Provenance Sensitivity in LLM Agent Action Selection](http://arxiv.org/abs/2607.20827v1)
Junchi Liao | 2026-07-23 | 提出审计框架，检测LLM Agent动作选择中是否依赖未经授权的上下文证据。 | 增强Agent决策的可审计性与安全性，属于Agent工程中的信任与合规方向。

### Agent 测试时扩展与自我改进
#### [Test-Time Scaling via Error Localization](http://arxiv.org/abs/2607.21453v1)
Rajiv Shailesh Chitale et al. | 2026-07-23 | 提出基于Token级错误定位的测试时扩展方法，优于独立采样和顺序迭代。 | 直接贡献于Agent测试时计算扩展策略，通过细粒度信用分配提升自我改进效果。

### LLM Agent Society
今日暂无新论文。

## 具身智能
### 视觉-语言-动作模型
#### [HyWorldVLA: A Vision-Language-Action Model with Hybrid World Modeling for Autonomous Driving](http://arxiv.org/abs/2607.20988v1)
Quanfu Yu et al. | 2026-07-23 | 提出混合世界建模的VLA模型，融合像素级与潜在级未来预测以增强鲁棒性。 | 将VLA与自动驾驶世界模型结合，提升端到端驾驶的时空推理与鲁棒性。

#### [AXIS: A Growable Community-Driven Data Engine for Scalable Robot Manipulation](http://arxiv.org/abs/2607.21588v1)
Mengfei Zhao et al. | 2026-07-23 | 构建社区驱动的数据引擎，通过众包可扩展地收集机器人操作演示数据。 | 为VLA模型提供多样化高质量训练数据，降低数据收集门槛。

### 具身导航
#### [VoLN: Vision-Only Long-Horizon Navigation---Paradigm, Benchmark, and Method](http://arxiv.org/abs/2607.21400v1)
Jiabin Lou et al. | 2026-07-23 | 提出纯视觉长程导航范式，消除对GPS/传感器明确空间先验的依赖。 | 解决具身导航中GPS受限环境下的自主指令跟随问题，强化视觉推理能力。

#### [ZONDA: Zero-shot Object Navigation with Dynamic Avoidance in Multi-floor Environments](http://arxiv.org/abs/2607.21025v1)
Shaomin Liang et al. | 2026-07-23 | 提出零样本多楼层目标导航方法，处理跨楼层拓扑和动态行人。 | 突破静态单楼层限制，提升具身导航在真实复杂环境中的部署能力。

#### [Scene Parameter Saliency via Differentiable Light Transport](http://arxiv.org/abs/2607.21562v1)
Linas Beresna et al. | 2026-07-23 | 利用可微渲染器生成场景参数显著性图，用于模型可解释性。 | 为具身导航中环境参数对决策的影响提供新分析工具。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### [Leaky Language Models: Stealing Architecture and Inference Optimizations via Per-Token Timing](http://arxiv.org/abs/2607.20723v1)
Sadegh Majidi et al. | 2026-07-22 | 首次证明仅通过Token生成时序可推断专有模型架构和部署信息。 | 揭示推理优化中的安全漏洞，对剪枝与加速部署方案提出反窃取需求。

### 多模态大模型剪枝
#### [Beyond Independent Optimization: Compression, MoE Routing, and Quantization Interactions in Multimodal Edge Intelligence](http://arxiv.org/abs/2607.20981v1)
Jay Gor et al. | 2026-07-23 | 综述压缩、MoE路由与量化在多模态边缘智能中的联合优化策略。 | 系统梳理多模态大模型剪枝与其他技术间的相互作用，指导高效边缘部署。

### 持续学习
#### [Three-Pronged Spectral Control for Federated Parameter Efficient Fine Tuning](http://arxiv.org/abs/2607.20914v1)
Shiva Raj Pokhrel et al. | 2026-07-23 | 提出三管齐下的频谱控制方法，缓解联邦PEFT（LoRA）中非IID客户端的频谱失配。 | 解决持续学习场景下联邦微调中的客户端异构性问题，增强模型泛化能力。

#### [How Many Bits Can an Adapter Write? Measuring the Capacity and Memorization of Parameter-Efficient Fine-Tuning](http://arxiv.org/abs/2607.21351v1)
Kaizhen Tan et al. | 2026-07-23 | 通过压缩分析直接测量LoRA适配器的记忆容量（以比特计），验证其是否纯粹存储技能。 | 揭示参数高效微调中适配器的记忆特性，影响持续学习中对灾难性遗忘的理解。

#### [Source-Prior-Driven Selective Adaptation for Efficient Diffusion Model Finetuning](http://arxiv.org/abs/2607.20913v1)
Yi Xiong et al. | 2026-07-23 | 提出源先验引导的选择性微调，在保持预训练能力的同时优化目标域生成。 | 为持续学习中的领域适配提供权衡方法，避免灾难性遗忘。

## 视觉感知
### 事件相机视觉感知
今日暂无新论文。

### 3D 点云视觉感知
#### [Loss Landscape Topology Reveals Why Simple Baselines are Competitive at 3D Point Cloud Segmentation Under Class Imbalance](http://arxiv.org/abs/2607.21089v1)
Antonis Savva et al. | 2026-07-23 | 通过损失景观拓扑分析，解释为何简单基线在3D点云类别不平衡分割中具有竞争力。 | 揭示3D分割任务中不平衡处理的结构性原因，为点云感知提供理论指导。

#### [RECO: Region-Aware Compensation for Extrinsic Perturbations in Roadside 3D Detection](http://arxiv.org/abs/2607.20947v1)
Junsheng Du et al. | 2026-07-23 | 提出区域感知补偿方法，应对路侧3D检测中相机外参微小扰动。 | 提升路侧点云感知在实际部署中的鲁棒性，直接关系3D检测应用。

#### [ODeform: Learning Continuous 4D Motion for Shape Deformation with Neural ODEs](http://arxiv.org/abs/2607.20670v1)
Yordanka Velikova et al. | 2026-07-22 | 利用神经ODE学习连续4D运动，实现任意时间步的形状变形建模。 | 为3D点云时序变形（如动态物体感知）提供连续建模方法。

### 3D 点云感知与跟踪
今日暂无新论文。

## 跨方向信号

1. **测试时扩展与错误定位的结合**：论文6（Error Localization）提出的Token级信用分配方法不仅适用于LLM推理，其思路可推广至Agent自我改进和多步决策场景，与LLM Agent工程和持续学习均有交叉。
2. **参数高效微调的记忆与安全分析**：论文11（LoRA记忆容量测量）和论文7（时序泄漏攻击）分别从内部存储和外部泄露两个角度揭示微调模型的安全风险，影响持续学习、剪枝优化和多模态大模型部署。
3. **混合世界建模与具身导航**：论文1（HyWorldVLA）的混合世界建模（像素级+潜在级）与论文3（VoLN）的纯视觉导航都强调鲁棒的不确定性处理，二者在消减传感器依赖和提升泛化性上有共同趋势。
4. **联邦与协作学习中的异构性控制**：论文4（频谱控制联邦PEFT）和论文12（选择性微调）均关注非IID数据或源/目标域差异下的持续学习，方法可迁移至多智能体Agent协作中的知识共享。
5. **可微渲染用于可解释性**：论文17（场景参数显著性）将可微渲染应用于导航场景参数分析，这一思路也可用于3D点云感知中理解和修正模型对场景特征的依赖。

## 优先精读

#### **《Test-Time Scaling via Error Localization》**（论文6）—— 提出了一种新颖的测试时扩展策略，通过错误定位实现Token级信用分配，显著优于独立采样和顺序迭代，对Agent自我改进和推理优化具有直接指导意义，且方法简洁可迁移。
#### **《The Dark Room in the Reward Channel: Dense Prediction Rewards Collapse GRPO-Trained LLM Agents -- and What Actually Works》**（论文9）—— 深入揭示了GRPO下密集预测奖励导致策略崩溃这一反直觉现象，并给出有效替代方案，对LLM Agent工程中的强化学习设计至关重要，避免研发走弯路。
#### **《How Many Bits Can an Adapter Write? Measuring the Capacity and Memorization of Parameter-Efficient Fine-Tuning》**（论文11）—— 首次以比特为单位量化LoRA适配器的记忆容量，挑战了“适配器仅存储技能”的普遍假设，对持续学习中的灾难性遗忘分析、模型安全以及剪枝策略均有深远影响。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*