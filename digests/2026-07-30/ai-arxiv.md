# 实验室研究方向 Radar 2026-07-30

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 29 篇新文献 + 9 篇过去14天内已出现 | 生成时间：2026-07-29 22:56 UTC

---

好的，科研情报分析师。以下是根据您提供的论文检索结果生成的研究方向Radar。

---

## 今日总览

*   **LLM Agent 与多智能体 / LLM Agent 工程**：今日该方向有10篇新论文，集中在如何通过工程化手段（如Harness设计、工具检索、技能图构建、记忆压缩与安全控制）提升LLM Agent在复杂、长时任务中的鲁棒性与效率。
*   **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：今日有3篇新论文，探索了通过自博弈、验证器监督和视觉提示工程等不同方式在测试时提升Agent性能或进行自我改进。
*   **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
*   **具身智能 / 视觉-语言-动作模型**：今日有5篇新论文和5篇重复论文，研究方向集中于模型压缩与轻量化（CoTinyVLA）、3D感知增强（SAM3D-Guided）、数据高效学习（HiFi-UMI）、模态自适应融合以及推理加速（Motion-Aware VQ）等关键问题上。
*   **具身智能 / 具身导航**：今日有2篇新论文和2篇重复论文，其中一篇研究了通过图像丰富长尾目标查询的方法，另一篇则关注导航过程中生成的相似性分数数据的隐私保护。
*   **模型压缩与持续学习 / LLM 剪枝与推理优化**：今日有2篇新论文，分别研究了基于语言学规则的提示压缩和用于高效多模态问答的稀疏跨模态路由。
*   **模型压缩与持续学习 / 多模态大模型剪枝**：今日有1篇新论文，提出了用于知识密集型多模态问答的稀疏跨模态路由机制。
*   **模型压缩与持续学习 / 持续学习**：今日有8篇新论文和1篇重复论文，研究范畴从视觉识别、强化学习到语言模型对齐，反映了持续学习范式的广泛应用。
*   **视觉感知 / 事件相机视觉感知**：今日暂无新论文。
*   **视觉感知 / 3D 点云视觉感知**：今日有1篇重复论文，探讨了点云分析中的曲率感知双曲校准。
*   **视觉感知 / 3D 点云感知与跟踪**：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程
#### [Context Assembly as the Controlled Variable: A Control-Theoretic View of Harness Policies for Frozen LLM Agents](http://arxiv.org/abs/2607.25408v1)
*   **作者缩写**: Debjyoti Paul | 发布日期: 2026-07-28
*   **核心贡献**: 提出了一个将LLM Agent的Harness视为控制系统的理论框架，为Harness策略的设计提供了理论基础。
*   **方向关联**: 直接探讨Agent Harness的工程化设计，是LLM Agent工程的核心问题。

#### [A Control System, a Dataset, and a Recipe for Making Frozen LLM Agents Learn a Domain](http://arxiv.org/abs/2607.25415v1)
*   **作者缩写**: Debjyoti Paul | 发布日期: 2026-07-28
*   **核心贡献**: 提出了一个完整的系统、数据集和方法论，使冻结的LLM Agent能够学习特定领域知识，而非微调模型本身。
*   **方向关联**: 聚焦于如何通过工程手段（而非模型更新）让Agent适应新领域，属于典型的工程实践。

#### [Hybrid Analysis for Secure MCP Tool Use in LLM Agents](http://arxiv.org/abs/2607.25297v1)
*   **作者缩写**: Ping He et al. | 发布日期: 2026-07-28
*   **核心贡献**: 针对基于MCP协议的LLM Agent工具调用，提出了一种混合分析方法来检测和防御安全威胁。
*   **方向关联**: 解决了Agent调用外部工具时的安全问题，是Agent工程中安全性的重要探索。

#### [Distributing Security Controls Through Harness Engineering](http://arxiv.org/abs/2607.25890v1)
*   **作者缩写**: William Robert Gore | 发布日期: 2026-07-28
*   **核心贡献**: 提出通过Harness工程将安全控制分布到Agent系统的不同层级，以应对AI编码Agent的安全风险。
*   **方向关联**: 从工程架构角度解决Agent的安全问题，直接相关于Agent的构建与部署。

#### [Tools Are Not Islands: Set-Level Tool Retrieval for LLM Agents via Query-Conditioned Hyperedge Prediction](http://arxiv.org/abs/2607.25718v1)
*   **作者缩写**: Xinyi Hong et al. | 发布日期: 2026-07-28
*   **核心贡献**: 提出将工具检索建模为超边预测问题，旨在检索一组协同工作的工具，而非单个工具。
*   **方向关联**: 针对Agent工具调用流程中的检索环节进行优化，是Agent工程的关键组件。

#### [HiSkill: Empowering LLM Agents with Hierarchical Skill Graphs](http://arxiv.org/abs/2607.25853v1)
*   **作者缩写**: Yu Hao et al. | 发布日期: 2026-07-28
*   **核心贡献**: 提出了层级化技能图来组织和复用Agent的经验，以应对复杂的长时交互任务。
*   **方向关联**: 通过技能图的构建与管理增强Agent在复杂任务中的规划和执行能力。

#### [CAST: Game Solvers as Turn-Level Teachers for LLM Agents](http://arxiv.org/abs/2607.25308v1)
*   **作者缩写**: Yu Wang et al. | 发布日期: 2026-07-28
*   **核心贡献**: 利用博弈求解器在回合级别为LLM Agent提供训练信号，解决了稀疏奖励问题，提升了长期策略学习效果。
*   **方向关联**: 提出了一种新颖的Agent训练方法，可以视为Agent工程中训练流程的改进。

#### [Addressable Recall Compaction for Long Context-Window Control in AI Agents](http://arxiv.org/abs/2607.25066v1)
*   **作者缩写**: Thang Dang et al. | 发布日期: 2026-07-27
*   **核心贡献**: 提出了新的记忆压缩方法，通过“可寻址”方式来保留关键细节，避免压缩导致的信息丢失。
*   **方向关联**: 直接解决LLM Agent在长时任务中的上下文窗口限制问题，核心的工程挑战。

#### [How Affect Propagates among LLM Agents: Emergent Emotional Contagion in Crowd Simulation](http://arxiv.org/abs/2607.25140v1)
*   **作者缩写**: Funda Durupinar | 发布日期: 2026-07-27
*   **核心贡献**: 在多Agent人群模拟中，研究了情感如何在LLM Agent中传播，并发现了类似“情绪传染”的涌现行为。
*   **方向关联**: 属于多Agent系统的行为研究，为设计具有更真实社会行为的Agent工程提供了洞见。

#### [When Do Agent Loops Mistake Stagnation for Progress? Self-Evaluation Bias and Externally Grounded Verification in Long-Running Autonomous LLM Agent Loops](http://arxiv.org/abs/2607.25152v1)
*   **作者缩写**: Hyundoo Park, Byungho Choi | 发布日期: 2026-07-27
*   **核心贡献**: 揭示了长时自主Agent存在的“进步幻觉”问题，即自我评估偏好导致无法识别停滞。
*   **方向关联**: 针对Agent闭环评估的可靠性问题进行分析，对设计鲁棒的Agent架构有重要指导意义。

### Agent 测试时扩展与自我改进
#### [Pictura: Perspective-View Self-Play at Scale for Driving](http://arxiv.org/abs/2607.26005v1)
*   **作者缩写**: Yuan Yin et al. | 发布日期: 2026-07-28
*   **核心贡献**: 提出一种基于透视视角的规模化自博弈训练方法，用于自动驾驶，弥合了模拟训练与现实感知之间的差距。
*   **方向关联**: 通过自博弈（自我改进的一种形式）在测试时/训练时提升驾驶策略的鲁棒性。

#### [Interactive Reward Agent: GUI Task Evaluation via Environment-State Verification](http://arxiv.org/abs/2607.25904v1)
*   **作者缩写**: Chenrui Shi et al. | 发布日期: 2026-07-28
*   **核心贡献**: 提出了一个交互式奖励Agent，通过验证环境状态来判断GUI任务是否完成，可作为测试时扩展或后训练的奖励信号。
*   **方向关联**: 核心是为测试时扩展提供可靠的奖励信号（即验证器），从而实现对Agent表现的即时评估和改进。

#### [Visual prompt engineering for video models](http://arxiv.org/abs/2607.25537v1)
*   **作者缩写**: Robert Geirhos et al. | 发布日期: 2026-07-28
*   **核心贡献**: 系统研究了视觉提示工程对视频模型性能的影响，发现视觉提示是提升模型在多种视觉推理任务中表现的有效方法。
*   **方向关联**: 视觉提示工程是一种无需重新训练、在推理阶段（测试时）提升模型性能的技术。

## 具身智能

### 视觉-语言-动作模型
#### [CoTinyVLA: Chain-of-Thought Distillation for a Sub-Billion-Parameter Vision-Language-Action Model](http://arxiv.org/abs/2607.25487v1)
*   **作者缩写**: Minhyeok Lee et al. | 发布日期: 2026-07-28
*   **核心贡献**: 通过思维链蒸馏，将大模型的推理能力压缩到0.9B参数的小型VLA模型，实现了在嵌入式机器人上的高效部署。
*   **方向关联**: 直接针对VLA模型进行模型压缩和轻量化，解决了资源受限场景下的部署难题。

#### [SAM3D-Guided Object-Centric Representation Alignment for Vision-Language-Action Models](http://arxiv.org/ms/2607.25912v1)
*   **作者缩写**: Zonghe Liu et al. | 发布日期: 2026-07-28
*   **核心贡献**: 利用SAM3D引导的物体中心表征对齐，增强VLA模型在遮挡、姿态变化等复杂环境下的3D物体理解能力。
*   **方向关联**: 旨在提升VLA模型对目标物体的精细3D理解和空间关系推理能力。

#### [HiFi-UMI: Learning Deployable Manipulation Policies from High-Fidelity UMI Data Alone](http://arxiv.org/abs/2607.25895v1)
*   **作者缩写**: Simple AI et al. | 发布日期: 2026-07-28
*   **核心贡献**: 证明了仅使用高保真度的无机器人UMI数据进行训练，即可学习到可直接部署的机器人操作策略，无需真实机器人数据。
*   **方向关联**: 探索从模拟或便携式采集的数据中学习VLA策略，降低了数据获取和迁移成本。

#### [A Causality-aware Infer-diagnose-refine Framework for Test-time Modality Adaptation in VLA Models](http://arxiv.org/abs/2607.25516v1)
*   **作者缩写**: Haoyu Zhang et al. | 发布日期: 2026-07-28
*   **核心贡献**: 提出了一个因果感知的“推理-诊断-修正”框架，用于VLA模型在测试阶段自适应地调整不同模态（视觉、语言、本体）的融合权重。
*   **方向关联**: 针对VLA模型多模态融合的难题，在测试阶段动态优化，提升了模型的鲁棒性。

#### 🔁 **【过去14天内已出现】** [τ: Learning Touch-Augmented Vision-Language-Action Models from Future Visual Supervision](http://arxiv.org/abs/2607.24485v1)
*   **作者缩写**: Ning Cheng et al. | 发布日期: 2026-07-27
*   **核心贡献**: 通过未来视觉信息作为监督信号，学习融合触觉模态的VLA模型，以解决触觉数据稀缺问题。
*   **方向关联**: 探索了如何在VLA模型中引入和利用触觉这一重要的具身模态。

### 具身导航
#### [IMPRINT: Image-Conditioned Query Enrichment for Long-Tail Object Goal Navigation](http://arxiv.org/abs/2607.25106v1)
*   **作者缩写**: Jelin Raphael Akkara et al. | 发布日期: 2026-07-27
*   **核心贡献**: 提出了通过图像条件来丰富文本查询，从而帮助零样本目标导航模型处理长尾、罕见目标，提升了导航的鲁棒性。
*   **方向关联**: 直接解决具身导航中的长尾物体识别与定位问题。

#### [ScoreShield: Differentially Private Release of Similarity Scores](http://arxiv.org/abs/2607.25041v1)
*   **作者缩写**: Behrooz Razeghi, Parsa Rahimi | 发布日期: 2026-07-27
*   **核心贡献**: 提出了在发布由向量嵌入（可用于导航中的场景匹配）产生的相似性分数时，应用差分隐私保护的方法。
*   **方向关联**: 关注具身导航场景下，由导航系统产生的中间数据（如相似度分数）的隐私安全问题。

## 模型压缩与持续学习

### LLM 剪枝与推理优化
#### [Salient Knowledge Pathways: Sparse Cross-Modal Routing for Efficient Knowledge-Intensive Multimodal Question Answering](http://arxiv.org/abs/2607.25422v1)
*   **作者缩写**: Noor Islam S. Mohammad, Uluğ Bayazıt | 发布日期: 2026-07-28
*   **核心贡献**: 提出稀疏跨模态路由机制，为每个查询激活最相关的视觉、文本知识路径，大幅降低了多模态推理的成本。
*   **方向关联**: 通过稀疏激活和路由技术优化了LLM在多模态任务中的推理效率，属于推理优化范畴。

#### [Every Time I Hire a Linguist, Inference Costs Go Down: On Linguistic Rules as Effective Prompt Compressors](http://arxiv.org/abs/2607.25335v1)
*   **作者缩写**: Jianfei Ma et al. | 发布日期: 2026-07-28
*   **核心贡献**: 证明了基于语言学规则的提示压缩（如删除冗余词和语法结构）可以有效降低推理成本，且效果不亚于基于模型的方法。
*   **方向关联**: 直接探索了一种低成本的提示压缩方法，用于降低LLM推理时的计算开销。

### 多模态大模型剪枝
#### [Salient Knowledge Pathways: Sparse Cross-Modal Routing for Efficient Knowledge-Intensive Multimodal Question Answering](http://arxiv.org/abs/2607.25422v1)
*   **作者缩写**: Noor Islam S. Mohammad, Uluğ Bayazıt | 发布日期: 2026-07-28
*   **核心贡献**: (同上) 提出了一种稀疏门控网络，用于动态选择和组合多模态数据中的知识，实现了模型推理的稀疏化。
*   **方向关联**: 该工作为多模态大模型的结构化剪枝（如稀疏化、路由）提供了新思路，旨在提升效率。

### 持续学习
#### [Multi-Scale Structural Features for Continual, Comprehensible Visual Recognition in a Developmental Learning Framework](http://arxiv.org/abs/2607.25531v1)
*   **作者缩写**: Zeki Doruk Erden | 发布日期: 2026-07-28
*   **核心贡献**: 在一个无梯度的发育学习框架中，利用多尺度结构特征实现了持续学习，使模型能逐步构建可解释的知识。
*   **方向关联**: 直接从算法层面探索视觉识别任务中的持续学习范式。

#### [Calibrated Partial Resets: Preventing Policy Collapse in Continual Reinforcement Learning](http://arxiv.org/abs/2607.24996v1)
*   **作者缩写**: Luc McCutcheon et al. | 发布日期: 2026-07-27
*   **核心贡献**: 提出了一种基于校准的部分神经元重置策略，以恢复神经网络在持续强化学习场景中的可塑性，防止策略崩溃。
*   **方向关联**: 解决了持续学习（尤其是持续强化学习）中的灾难性遗忘和塑性损失问题。

#### [How Small Can You Go? A Controlled Study of LoRA Rank, Target Modules, and Quantization Trade-offs for Text-to-SQL on a 60M-Parameter Model](http://arxiv.org/abs/2607.25583v1)
*   **作者缩写**: Mahendra Singh Rathor, Anagheem Azzam | 发布日期: 2026-07-28
*   **核心贡献**: 在小型模型上系统研究了LoRA配置、量化等参数高效微调技术的权衡，为资源受限场景下的模型持续适配提供指导。
*   **方向关联**: 持续学习常涉及对新任务的适应，该工作系统探讨了持续适配小模型的最佳实践。

#### [Towards Robust Reinforcement Learning for Small-Scale Language Model Agents](http://arxiv.org/abs/2607.25091v1)
*   **作者缩写**: Md Rezwanul Haque et al. | 发布日期: 2026-07-27
*   **核心贡献**: 系统研究了小型语言模型（SLM）使用强化学习进行对齐时的失败机制，并提出了提升其鲁棒性的方法。
*   **方向关联**: 探讨了使用RL进行持续学习（对齐）时，模型规模对稳定性的影响。

#### 🔁 **【过去14天内已出现】** [The Physics of Multi-Turn Long-Horizon Planning: From Pre-training to Post-training via Single- and Multi-Teacher On-Policy Agentic Distillation](http://arxiv.org/abs/2607.24720v1)
*   **作者缩写**: Tianyi Men et al. | 发布日期: 2026-07-27
*   **核心贡献**: 通过分析“预训练-后训练”全过程，揭示了模型长程规划能力的习得机制，并提出了多教师蒸馏的后训练方法。
*   **方向关联**: 该工作提出的后训练阶段（持续学习）策略，旨在持续提升Agent的规划能力。

## 跨方向信号

1.  **控制论视角的Agent设计与管理**: 多篇论文（如Paul的工作）将控制理论应用于LLM Agent和Harness的设计，提出将Harness视为一个可控系统，这同时影响了**LLM Agent工程**的架构设计和**测试时扩展**中的稳定性评估。
2.  **测试时扩展（Test-time Scaling）技术的渗透**: 测试时计算不仅局限于传统的自我改进（如自博弈），还体现在**视觉-语言-动作模型**的模态自适应（如A Causality-aware Infer-diagnose-refine Framework）和**具身导航**中的查询优化（如IMPRINT），表明在部署阶段动态优化模型成为趋势。
3.  **数据效率与模型轻量化的双重关注**: 从**VLA模型**（CoTinyVLA, HiFi-UMI）到**LLM剪枝**（提示压缩）和**持续学习**（小型模型Fine-Tuning研究），都体现出在追求性能的同时，对数据获取成本、模型部署成本和推理成本的极致追求。
4.  **安全与隐私成为Agent系统设计的核心组件**: 多篇论文将安全和隐私问题内嵌于Agent系统的工程设计（如MCP工具安全分析、Harness工程安全控制、相似性分数隐私保护），而非作为事后补救措施，这成为**LLM Agent工程**和**具身导航**等方向的新兴议题。

## 优先精读

#### **[CoTinyVLA: Chain-of-Thought Distillation for a Sub-Billion-Parameter Vision-Language-Action Model](http://arxiv.org/abs/2607.25487v1)**：
    *   **理由**: 该工作直接面向VLA模型部署的核心瓶颈——模型过大。它提出通过思维链蒸馏将模型压缩至10亿参数以下，且性能可与大模型媲美，对于推动VLA模型在实体机器人上的实际应用具有里程碑意义，高度契合实验室的具身智能和模型压缩方向。

#### **[Tools Are Not Islands: Set-Level Tool Retrieval for LLM Agents via Query-Conditioned Hyperedge Prediction](http://arxiv.org/abs/2607.25718v1)**：
    *   **理由**: 该工作突破了现有工具检索的“单点”范式，首次提出了“成套”工具检索的概念，更贴近复杂真实任务的执行逻辑。它为提升LLM Agent在复杂任务中的规划与执行能力提供了全新的、有潜力的工程化解决方案，对于**LLM Agent工程**方向具有启发性。

#### **[A Causality-aware Infer-diagnose-refine Framework for Test-time Modality Adaptation in VLA Models](http://arxiv.org/abs/2607.25516v1)**：
    *   **理由**: 这篇工作同时触及了**VLA模型**和**测试时扩展**两个关键方向。它创新地引入因果推断来解决VLA模型在测试阶段的动态模态融合问题，不依赖离线训练数据，直接在实际部署中自适应地提升模型表现，思路巧妙，实用价值高。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*