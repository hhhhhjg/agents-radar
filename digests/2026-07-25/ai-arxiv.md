# 实验室研究方向 Radar 2026-07-25

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 24 篇新文献 + 16 篇过去14天内已出现 | 生成时间：2026-07-24 22:56 UTC

---

好的，科研情报分析师为您呈上今日的研究方向雷达。

---

### 研究方向 Radar (2026-07-25)

#### 1. 今日总览

- **LLM Agent 与多智能体 / LLM Agent 工程**：该方向今日热度极高，涌现了8篇新工作，研究重点从框架构建转向了深层次的能力与可靠性问题。核心议题包括：如何通过强化学习 (PATS) 或归因反馈 (AttriMem) 构建更有效的智能体学习策略；如何审计智能体决策过程中的证据溯源 (Auditing)；以及如何解决密集奖励在长程任务中的崩溃问题 (Dark Room)。此外，还出现了面向特定场景的智能体平台 (HiMe) 和评估基准 (Tencent WorkBuddy Bench)。
#### - **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：该方向有1篇新工作，提出了一个新颖的“定位-修复”范式 (Test-Time Scaling via Error Localization)，旨在通过在 token 级别的错误定位来提升推理时扩展的效率，而不是简单地进行采样或回合制修正。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：该方向有3篇新论文，呈现出从基础模型 (VoLN) 到大规模数据引擎 (AXIS) 的多元化发展。新工作关注于提升VLA模型在长程任务中的规划能力、通过混合世界建模增强鲁棒性，以及通过社区驱动的方式规模化数据采集。
- **具身智能 / 具身导航**：今日有4篇新论文，主要集中在解决真实世界导航的复杂性问题。包括跨楼层、动态障碍物场景下的零样本物体导航 (ZONDA)；使用纯视觉进行长程导航 (VoLN)；以及通过帧间线索进行密集预测 (Unified Video Dense Prediction) 来增强场景理解。可微分渲染 (Scene Parameter Saliency) 也被提出作为一种新的导航可解释性工具。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：该方向有1篇新论文，揭示了生产级语言模型的一个重要安全风险。研究表明，仅通过 token 生成时间这一侧信道，就能窃取模型的架构和推理优化细节 (Leaky Language Models)，这为推理优化和安全防护提出了新的挑战。
- **模型压缩与持续学习 / 多模态大模型剪枝**：该方向有1篇综述性质的新论文，系统性分析了多模态边缘智能中，模型压缩、MoE路由和量化技术之间的相互影响 (Beyond Independent Optimization)，为边缘侧多模态推理的优化提供了全局视角。
- **模型压缩与持续学习 / 持续学习**：该方向有4篇新论文，研究热点集中在参数高效微调 (PEFT) 的内部机理。新工作深入探讨了LoRA适配器在非IID场景下的频谱不稳定问题 (Three-Pronged Spectral Control)、其真正的信息容量与记忆风险 (How Many Bits Can an Adapter Write?)，并提出了选择性微调策略以保留基础模型生成能力 (Source-Prior-Driven Selective Adaptation)。同时，在强化学习领域，提出了一种自适应多视界方法 (Adaptive Multi-Horizon RL)。
- **视觉感知 / 事件相机视觉感知**：今日暂无新论文。
- **视觉感知 / 3D 点云视觉感知**：今日有3篇新论文。其中一篇解释了为何简单的基线模型在点云分割中能抗衡复杂的类别不平衡处理方法 (Loss Landscape Topology)，为算法选择提供了理论依据。另一篇提出了路边3D检测中对相机外参扰动的区域感知补偿方法 (RECO)，提高了系统的实际部署鲁棒性。此外，还有一篇用神经ODE学习形状连续变形的新方法 (ODeform)。
- **视觉感知 / 3D 点云感知与跟踪**：今日暂无新论文。

#### 2. 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [PATS: Policy-Aware Training Scaffolding for Agentic Reinforcement Learning](http://arxiv.org/abs/2607.21419v1)
Yipeng Shi et al. | 2026-07-23
核心贡献：提出一种策略感知的训练脚手架，通过提供最优的“脚手架策略”来引导智能体探索，解决弱策略在长程强化学习中重复失败的问题。
关联：为训练更鲁棒的LLM智能体提供了一种新的强化学习训练框架。

#### [Auditing Provenance Sensitivity in LLM Agent Action Selection](http://arxiv.org/abs/2607.20827v1)
Junchi Liao | 2026-07-23
核心贡献：提出一种审计方法，用于检测LLM智能体在行动选择时，其决策是否受到来自无关来源但证据相关的信息影响。
关联：直接针对LLM智能体决策的可审计性和可靠性提出了核心技术和评估指标。

#### [The Dark Room in the Reward Channel: Dense Prediction Rewards Collapse GRPO-Trained LLM Agents -- and What Actually Works](http://arxiv.org/abs/2607.21273v1)
Yu Wang | 2026-07-23
核心贡献：揭示在GRPO框架下，使用密集预测奖励（如预测下一观测）进行训练会导致策略崩溃。
关联：对当前LLM智能体强化学习中广泛使用的奖励设计思路提出了警示，并指明了正确方向。

#### [AttriMem: Attribution-Guided Process Feedback for Agent Memory Learning](http://arxiv.org/abs/2607.21106v1)
Qinfeng Li et al. | 2026-07-23
核心贡献：提出AttriMem，通过归因引导的过程反馈来学习信息提取、存储和更新的记忆策略，而非依赖启发式规则。
关联：解决了LLM智能体核心能力——记忆构建，从人工规则升级为数据驱动学习，具有普遍意义。

#### [Demonstrating GenDB: Instance-Optimized and Customized Query Processing Code Generation via LLM Agents](http://arxiv.org/abs/2607.20630v1)
Jiale Lao, Immanuel Trummer | 2026-07-22
核心贡献：展示了一个利用LLM Agent为数据库查询生成实例优化、高度定制化代码的系统GenDB。
关联：是一个LLM Agent在系统工程领域应用的典型案例，展示了其在代码生成和优化方面的工程能力。

#### [HiMe: Real-Time Self-Hosted Personal Agent Platform for Health Insights with Wearable Devices](http://arxiv.org/abs/2607.21019v1)
Wei Liu et al. | 2026-07-23
核心贡献：介绍了一个基于可穿戴设备的自托管、实时个人健康智能体平台。
关联：展示了LLM Agent在个人健康领域的具体应用实例，解决了隐私、个性化和实时性等实际问题。

#### [Tencent WorkBuddy Bench: A Multi-Domain Coding-Agent Benchmark with Contamination-Resistant Task Construction](http://arxiv.org/abs/2607.20911v1)
Tencent WorkBuddy Bench Team et al. | 2026-07-23
核心贡献：发布了多领域编码智能体评测基准，并重点介绍了其抗数据污染的构建方法。
关联：为编码智能体提供了新的、更可靠的评估基准，对推动该子领域发展有重要作用。

#### [GRADRAG: Cross-Component Prompt Adaptation for Coordinated Multi-Agent RAG](http://arxiv.org/abs/2607.21324v1)
Paolo Pedinotti, Enrico Santus | 2026-07-23
核心贡献：提出一个跨组件的提示词自适应框架，用于协调多智能体RAG系统中不同环节的优化。
关联：将RAG优化的视角从孤立组件提升到系统级协调优化，是RAG系统工程的重要进展。

### Agent 测试时扩展与自我改进

#### [Test-Time Scaling via Error Localization](http://arxiv.org/abs/2607.21453v1)
Rajiv Shailesh Chitale et al. | 2026-07-23
核心贡献：提出通过精确的错误定位来指导推理时计算资源的分配，而不是无差别地增加采样或对话轮次。
关联：为测试时扩展提供了更高效的路径，将该子方向的重点从“扩展计算量”转向“扩展计算效率”。

#### 🔁 **【过去14天内已出现】** #### [SLPO: Scaling Latent Reasoning via a Surrogate Policy](http://arxiv.org/abs/2607.19691v1)
Runyang You et al. | 2026-07-22
核心贡献：提出通过一个代理策略来学习无token的潜在推理，从而在避免高昂解码成本的同时实现推理时扩展。
关联：提供了一个不同于显式CoT的、以计算效率为目标的推理时扩展新范式。

## 具身智能

### 视觉-语言-动作模型

#### [VoLN: Vision-Only Long-Horizon Navigation---Paradigm, Benchmark, and Method](http://arxiv.org/abs/2607.21400v1)
Jiabin Lou et al. | 2026-07-23
核心贡献：提出了一个纯视觉的长程导航范式，并发布了对应的基准和方法，解决在无GPS环境下仅依赖视觉传感器进行长程VLN的挑战。
关联：直接推动了VLA模型在长距离、无定位信号的实际导航任务中的应用能力。

#### [HyWorldVLA: A Vision-Language-Action Model with Hybrid World Modeling for Autonomous Driving](http://arxiv.org/abs/2607.20988v1)
Quanfu Yu et al. | 2026-07-23
核心贡献：提出混合世界建模策略，结合像素级和潜在级世界模型，用于增强端到端自动驾驶VLA模型在噪声场景下的鲁棒性。
关联：探索了VLA模型与世界模型结合的新方法，解决了纯像素预测鲁棒性差的问题，是VLA模型在自动驾驶应用中的重要改进。

#### [AXIS: A Growable Community-Driven Data Engine for Scalable Robot Manipulation](http://arxiv.org/abs/2607.21588v1)
Mengfei Zhao et al. | 2026-07-23
核心贡献：提出了一个可成长、社区驱动的数据引擎，用于规模化采集机器人操作的高质量演示数据。
关联：为VLA模型的预训练/微调解决了数据瓶颈问题，改变了高质量数据采集的范式。

### 具身导航

#### [ZONDA: Zero-shot Object Navigation with Dynamic Avoidance in Multi-floor Environments](http://arxiv.org/abs/2607.21025v1)
Shaomin Liang et al. | 2026-07-23
核心贡献：提出零样本物体导航方法，能够应对跨楼层和动态行人等复杂真实世界环境。
关联：解决了现有导航方法在真实部署中面临的两大关键挑战：跨楼层拓扑和动态障碍物。

#### [VoLN: Vision-Only Long-Horizon Navigation---Paradigm, Benchmark, and Method](http://arxiv.org/abs/2607.21400v1)
Jiabin Lou et al. | 2026-07-23
核心贡献：提出了纯视觉长程导航的新范式，在没有显式空间先验的情况下，依靠视觉观测进行导航决策。
关联：为依赖有限传感（如仅有摄像头）的导航任务提供了新的解决方案。

#### [Unified Video Dense Prediction from Disjoint Data](http://arxiv.org/abs/2607.21592v1)
Yihong Sun et al. | 2026-07-23
核心贡献：提出一个从碎片化、不相交的数据中训练统一视频密集预测模型的方法，同时预测几何、外观和语义。
关联：能输出更丰富的场景理解信息，对导航任务的规划与避障有直接帮助。

#### [Scene Parameter Saliency via Differentiable Light Transport](http://arxiv.org/abs/2607.21562v1)
Linas Beresna, Eugene Fiume | 2026-07-23
核心贡献：提出可微渲染器可用于生成场景参数的显著性图，以了解哪些场景参数对网络输出最敏感。
关联：为具身导航中的“场景可解释性”提供了新工具，有助于理解智能体是如何根据场景特征进行决策的。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [Leaky Language Models: Stealing Architecture and Inference Optimizations via Per-Token Timing](http://arxiv.org/abs/2607.20723v1)
Sadegh Majidi et al. | 2026-07-22
核心贡献：首次展示仅通过观察 token 生成的时间序列（侧信道攻击），即可推断出生产语言模型的架构、部署和推理优化细节。
关联：为LLM推理优化指出了新的安全挑战，即优化手段本身可能成为信息泄露的载体。

### 多模态大模型剪枝

#### [Beyond Independent Optimization: Compression, MoE Routing, and Quantization Interactions in Multimodal Edge Intelligence](http://arxiv.org/abs/2607.20981v1)
Jay Gor et al. | 2026-07-23
核心贡献：综述了在多模态边缘智能场景下，模型压缩、MoE路由和量化技术之间的复杂相互作用。
关联：为多模态大模型在边缘设备上的剪枝与优化提供了系统性的全局视野，指出不能孤立地看待各优化技术。

### 持续学习

#### [How Many Bits Can an Adapter Write? Measuring the Capacity and Memorization of Parameter-Efficient Fine-Tuning](http://arxiv.org/abs/2607.21351v1)
Kaizhen Tan et al. | 2026-07-23
核心贡献：通过压缩分析，直接量化了LoRA适配器的信息容量和数据记忆风险，揭示其并非纯粹的“技能”载体。
关联：对持续学习中“以LoRA存储新知识是否安全”这一核心假设提出了质疑和量化验证。

#### [Three-Pronged Spectral Control for Federated Parameter Efficient Fine Tuning](http://arxiv.org/abs/2607.20914v1)
Shiva Raj Pokhrel et al. | 2026-07-23
核心贡献：提出一种三管齐下的频谱控制方法，解决联邦PEFT中因数据非IID导致的客户端局部LoRA奇异性问题。
关联：推动了异构数据下持续学习与联邦学习的结合，解决了分布式持续学习中的关键难题。

#### [Source-Prior-Driven Selective Adaptation for Efficient Diffusion Model Finetuning](http://arxiv.org/abs/2607.20913v1)
Yi Xiong et al. | 2026-07-23
核心贡献：提出一种源先验驱动的选择性微调策略，在微调扩散模型时，只更新与目标域最相关的部分参数，以保持预训练模型的生成能力。
关联：为扩散模型的持续学习提供了一种高效的、且能避免灾难性遗忘的新方法。

#### [Adaptive Multi-Horizon Reinforcement Learning](http://arxiv.org/abs/2607.20656v1)
Manoosh Samiei et al. | 2026-07-22
核心贡献：提出一种自适应多视界的强化学习方法，允许智能体根据状态动态权衡短期和长期回报，而不是使用固定折扣因子。
关联：提供了一种新的强化学习范式，对涉及持续学习和适应的智能体决策问题有潜在启发。

## 视觉感知

### 3D 点云视觉感知

#### [Loss Landscape Topology Reveals Why Simple Baselines are Competitive at 3D Point Cloud Segmentation Under Class Imbalance](http://arxiv.org/abs/2607.21089v1)
Antonis Savva et al. | 2026-07-23
核心贡献：通过分析损失景观拓扑结构，解释了在3D点云语义分割中，面对严重的类别不平衡时，简单基线方法反而能与复杂的专用方法匹敌的原因。
关联：为3D点云感知中的类别不平衡问题提供了理论洞见，有助于研究者选择更简单有效的基线。

#### [RECO: Region-Aware Compensation for Extrinsic Perturbations in Roadside 3D Detection](http://arxiv.org/abs/2607.20947v1)
Junsheng Du et al. | 2026-07-23
核心贡献：提出一种区域感知补偿方法，用于解决路边3D检测中因相机外参微小扰动（如振动）导致的性能下降问题。
关联：提升了3D点云感知模型在真实部署场景（如智能交通）中的鲁棒性和实用性。

#### [ODeform: Learning Continuous 4D Motion for Shape Deformation with Neural ODEs](http://arxiv.org/abs/2607.20670v1)
Yordanka Velikova et al. | 2026-07-22
核心贡献：利用神经ODE学习物体变形的连续4D运动表示，突破了离散时间步的限制。
关联：为动态3D点云场景中的形变建模提供了新颖且连续的表示方法。

#### 3. 跨方向信号

1.  **强化学习成为Agent能力升级的核心引擎**：无论是LLM智能体的训练（PATS）、自身改进（SLPO），还是测试时行为优化（The Dark Room），强化学习（尤其是GRPO）范式正被广泛应用于解决长程任务和可靠性等核心问题。这表明，从“预训练+提示”到“交互中学习”是Agent技术发展的关键趋势。
2.  **参数高效微调（PEFT）的深度机理研究成为热点**：多篇新工作（How Many Bits、Three-Pronged Spectral Control、Source-Prior-Driven）不再仅仅追求PEFT方法的效率，而是开始系统性地研究其信息容量、记忆风险、频谱特性及对基础模型能力的影响。这反映了社区对该工具理解的深化，从“如何使用”进入到“如何安全、高效地使用”。
3.  **从静态测试到动态、真实场景的评估与基准**：出现了大量针对动态环境（ZONDA）、多楼层（ZONDA）、多领域（Tencent WorkBuddy Bench）、跨域（Closing the Lab-to-Store Gap）的真实场景基准和平台。同时，对模型鲁棒性的评估也超越了传统的精度指标，开始关注外参扰动（RECO）、噪声场景（HyWorldVLA）等实际部署问题。
4.  **可解释性与安全性议题在Agent领域凸显**：对LLM Agent决策的溯源审计（Auditing）、对模型信息的侧信道窃取（Leaky Language Models）、以及对PEFT方法记忆风险的量化（How Many Bits）等工作的出现，标志着该领域开始严肃关注Agent的安全性和可解释性，从追求性能转向追求可信赖。

#### 4. 优先精读

1.  **The Dark Room in the Reward Channel: Dense Prediction Rewards Collapse GRPO-Trained LLM Agents**
    - **理由**：该论文发现了一个反直觉且对当前研究非常重要的现象：在基于GRPO的LLM Agent训练中，流行且看似合理的“密集预测奖励”设计会导致训练崩溃。这一发现可能动摇当前许多Agent训练工作的基础假设，对于任何从事Agent RL训练的研究者而言，都必须阅读以规避类似陷阱。
#### **How Many Bits Can an Adapter Write? Measuring the Capacity and Memorization of Parameter-Efficient Fine-Tuning**
    - **理由**：该工作对PEFT（特别是LoRA）的本质提出了深刻质疑。如果LoRA并非只是存储“技能”，而可能记忆了大量训练数据，那么其在端侧部署、联邦学习以及持续学习中的安全性、隐私性和能力边界将需要被重新审视。这项工作提供了量化实验证据，是理解PEFT能力上限和风险的关键读物。
#### **Leaky Language Models: Stealing Architecture and Inference Optimizations via Per-Token Timing**
    - **理由**：从一个新的安全视角——侧信道攻击——审视了生产级LLM的推理服务。该工作证明了仅通过token生成时间即可推断模型架构和优化细节，这为推理优化服务（包括剪枝、量化等）的部署带来了新的安全风险。对于从事LLM推理优化和模型安全的研究人员，此文具有警示和指导意义。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*