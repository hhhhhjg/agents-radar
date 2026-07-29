# 实验室研究方向 Radar 2026-07-30

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 16 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-07-29 22:56 UTC

---

好的，这是根据您提供的论文列表生成的《研究方向 Radar》。

---

### 研究方向 Radar (2026-07-30)

#### 1. 今日总览

- **LLM Agent 与多智能体 / LLM Agent 工程**: 今日收录3篇新论文。研究前沿在于将控制理论系统性地应用于冻结LLM Agent的设计，并关注其安全性。出现了关于“Harness”系统（提示、工具、记忆等模块的集成）的正式化描述和领域学习方法，以及针对MCP工具使用的静态-动态混合安全分析方法。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**: 今日收录3篇新论文。进展体现在三个不同领域：利用自博弈大规模生成驾驶策略、为GUI Agent评估提供可验证的环境状态奖励信号，以及探索通过视觉提示工程来提升视频基础模型的推理能力。
- **LLM Agent 与多智能体 / LLM Agent Society**: 今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**: 今日收录4篇新论文。核心趋势是VLA模型向更小、更3D、更实用化方向发展。出现了0.9B参数的轻量级模型、通过SAM3D增强物体级3D理解的方案，以及仅凭高保真无机器人数据进行操作策略学习的路径。
- **具身智能 / 具身导航**: 今日收录2篇新论文。研究聚焦于提升零样本物体导航在长尾物体上的能力，通过图像条件查询增强语义地图。另一篇论文虽主要讨论差分隐私，但其技术可应用于导航系统中的相似度匹配场景，确保数据安全。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**: 今日收录2篇新论文。探索了两种创新的推理优化路径：一种是跨模态问答中的稀疏路由，旨在同时压缩视觉、检索和融合开销；另一种是回归基础，利用语言学规则进行低成本、模型无关的提示压缩。
- **模型压缩与持续学习 / 多模态大模型剪枝**: 今日收录1篇新论文。该论文提出的稀疏跨模态路由方法，本质上是一种动态的、针对知识密集型多模态问答的结构性剪枝或条件计算策略。
- **模型压缩与持续学习 / 持续学习**: 今日收录3篇新论文。研究方向分化明显：一面是探索无梯度的、离散拓扑学习的可解释持续学习框架；另一面是针对强化学习中的策略崩溃问题，提出校准部分重置神经元的方法；还有一项工作是系统研究极小型模型（60M）上LoRA微调与量化的权衡。
- **视觉感知 / 事件相机视觉感知**: 今日暂无新论文。
- **视觉感知 / 3D 点云视觉感知**: 今日暂无新论文。
- **视觉感知 / 3D 点云感知与跟踪**: 今日暂无新论文。

#### 2. 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [Context Assembly as the Controlled Variable: A Control-Theoretic View of Harness Policies for Frozen LLM Agents](http://arxiv.org/abs/2607.25408v1)
作者: D. Paul | 发布日期: 2026-07-28
核心贡献: 提出将LLM Agent的“Harness”系统（上下文组装）视为一个控制问题，并定义了“受控变量”。
方向关联: 为冻结LLM Agent的工程化设计提供了控制理论的形式化视角和稳定性保障。

#### [A Control System, a Dataset, and a Recipe for Making Frozen LLM Agents Learn a Domain](http://arxiv.org/abs/2607.25415v1)
作者: D. Paul | 发布日期: 2026-07-28
核心贡献: 提出了一个包含控制系统、数据集和配方（Recipe）的完整方案，用于使冻结的LLM Agent学习特定领域知识。
方向关联: 直接解决了如何系统化、工程化地让LLM Agent适应新领域的核心工程问题。

#### [Hybrid Analysis for Secure MCP Tool Use in LLM Agents](http://arxiv.org/abs/2607.25297v1)
作者: P. He et al. | 发布日期: 2026-07-28
核心贡献: 针对MCP协议，提出了一种结合静态和动态分析的混合安全分析方法。
方向关联: 提供了确保LLM Agent在外部工具使用（MCP标准）中安全性的工程化手段。

### Agent 测试时扩展与自我改进

#### [Pictura: Perspective-View Self-Play at Scale for Driving](http://arxiv.org/abs/2607.26005v1)
作者: Y. Yin et al. | 发布日期: 2026-07-28
核心贡献: 大规模地使用基于视觉（透视视图）而非特权向量信息的自博弈来训练鲁棒的驾驶策略。
方向关联: 通过大规模仿真自博弈，实现了Agent在测试时的性能扩展与自我改进。

#### [Interactive Reward Agent: GUI Task Evaluation via Environment-State Verification](http://arxiv.org/abs/2607.25904v1)
作者: C. Shi et al. | 发布日期: 2026-07-28
核心贡献: 提出了一个交互式奖励Agent，通过验证环境状态来判断GUI Agent是否成功完成任务。
方向关联: 提供了可用于测试时扩展（搜索）和后期训练（强化学习）的自动化奖励信号，提升了Agent的自我改进能力。

#### [Visual prompt engineering for video models](http://arxiv.org/abs/2607.25537v1)
作者: R. Geirhos et al. | 发布日期: 2026-07-28
核心贡献: 系统和全面地研究了针对视频基础模型的视觉提示工程方法，并展示了其有效性。
方向关联: 提示工程是一种无需微调的测试时扩展技术，可即插即用地提升视频Agent在推理和视觉任务上的表现。

### LLM Agent Society

今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [CoTinyVLA: Chain-of-Thought Distillation for a Sub-Billion-Parameter Vision-Language-Action Model](http://arxiv.org/abs/2607.25487v1)
作者: M. Lee et al. | 发布日期: 2026-07-28
核心贡献: 通过思维链蒸馏，训练出一个仅0.9B参数的VLA模型，在保持性能的同时大幅降低了内存需求。
方向关联: 直接应对VLA模型在机器人嵌入式设备上部署的工程挑战，推动了轻量化VLA的发展。

#### [SAM3D-Guided Object-Centric Representation Alignment for Vision-Language-Action Models](http://arxiv.org/abs/2607.25912v1)
作者: Z. Liu et al. | 发布日期: 2026-07-28
核心贡献: 使用SAM3D引导VLA模型学习以物体为中心的3D表征，提升在遮挡、尺度变化等情况下的操作能力。
方向关联: 为VLA模型注入了精细的3D空间理解能力，弥补了其依赖2D视觉-语言后端的不足。

#### [HiFi-UMI: Learning Deployable Manipulation Policies from High-Fidelity UMI Data Alone](http://arxiv.org/abs/2607.25895v1)
作者: S. AI et al. | 发布日期: 2026-07-28
核心贡献: 证明仅使用高保真、可扩展的无机器人UMI数据，无需真实机器人数据，即可学习到可直接部署的操作策略。
方向关联: 为VLA模型提供了一条更具扩展性的低成本数据获取与策略学习路径。

### 具身导航

#### [IMPRINT: Image-Conditioned Query Enrichment for Long-Tail Object Goal Navigation](http://arxiv.org/abs/2607.25106v1)
作者: J. R. Akkara et al. | 发布日期: 2026-07-27
核心贡献: 提出使用参考图像而非纯文本查询来丰富语义地图，从而提升在长尾物体上的零样本目标导航能力。
方向关联: 直接改进了基于语义地图的零样本目标导航方法，解决了文本查询在精细类别识别上的局限性。

#### [ScoreShield: Differentially Private Release of Similarity Scores](http://arxiv.org/abs/2607.25041v1)
作者: B. Razeghi et al. | 发布日期: 2026-07-27
核心贡献: 提出了一种保护差分隐私的方法，用于安全地发布向量间的相似度分数。
方向关联: 在导航和VLA系统中，物体特征匹配常依赖相似度计算，该方法可为这些系统提供数据隐私保护。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [Salient Knowledge Pathways: Sparse Cross-Modal Routing for Efficient Knowledge-Intensive Multimodal Question Answering](http://arxiv.org/abs/2607.25422v1)
作者: N. I. S. Mohammad et al. | 发布日期: 2026-07-28
核心贡献: 提出了一个稀疏跨模态路由网络，为每个查询动态选择最相关的视觉和知识信息，避免全量计算。
方向关联: 实现了一种动态剪枝/条件计算的推理优化，大幅降低了多模态问答中视觉token和检索的开销。

#### [Every Time I Hire a Linguist, Inference Costs Go Down: On Linguistic Rules as Effective Prompt Compressors](http://arxiv.org/abs/2607.25335v1)
作者: J. Ma et al. | 发布日期: 2026-07-28
核心贡献: 证明了基于语言学规则的提示压缩方法（如删除修饰语）可以媲美甚至优于需要模型计算成本的深度学习方法。
方向关联: 提出了一种低成本、模型无关的推理优化路径，为提示压缩提供了崭新思路。

### 多模态大模型剪枝

#### [Salient Knowledge Pathways: Sparse Cross-Modal Routing for Efficient Knowledge-Intensive Multimodal Question Answering](http://arxiv.org/abs/2607.25422v1)
作者: N. I. S. Mohammad et al. | 发布日期: 2026-07-28
核心贡献: 设计了跨模态稀疏路由，动态激活模型子网络，避免不必要的计算。
方向关联: 该方法本质上是一种针对多模态模型的结构性剪枝或条件计算，减少了无效的跨模态融合开销。

### 持续学习

#### [Multi-Scale Structural Features for Continual, Comprehensible Visual Recognition in a Developmental Learning Framework](http://arxiv.org/abs/2607.25531v1)
作者: Z. D. Erden | 发布日期: 2026-07-28
核心贡献: 采用无梯度、可解释的离散拓扑学习框架，实现持续视觉识别。
方向关联: 提出了一种不同于神经网络范式的持续学习新框架，强调结构化和可解释性。

#### [Calibrated Partial Resets: Preventing Policy Collapse in Continual Reinforcement Learning](http://arxiv.org/abs/2607.24996v1)
作者: L. McCutcheon et al. | 发布日期: 2026-07-28
核心贡献: 提出“校准部分重置”神经元的方法，在不丢失已学知识的情况下恢复网络可塑性，防止策略崩溃。
方向关联: 解决了持续强化学习中网络可塑性损失的难题，直接提升了Agent在非平稳环境中的持续学习能力。

#### [How Small Can You Go? A Controlled Study of LoRA Rank, Target Modules, and Quantization Trade-offs for Text-to-SQL on a 60M-Parameter Model](http://arxiv.org/abs/2607.25583v1)
作者: M. S. Rathor et al. | 发布日期: 2026-07-28
核心贡献: 在60M参数的超小模型上系统研究了LoRA微调与量化之间的相互作用和权衡。
方向关联: 探讨了参数高效持续学习（微调）方法在极致资源受限场景下的表现，为持续学习提供了工程实践指导。

## 视觉感知

### 事件相机视觉感知

今日暂无新论文。

### 3D 点云视觉感知

今日暂无新论文。

### 3D 点云感知与跟踪

今日暂无新论文。

#### 3. 跨方向信号

- **轻量化与环境适应**: 从 `CoTinyVLA` (VLA) 到 `LoRA + Quantization on a 60M model` (持续学习)，再到 `Linguistic Rules as Compressors` (剪枝优化)，不同方向的研究都强烈追求极致的计算效率和模型压缩，呈现出明显的“小模型、大能力”趋势。
- **3D理解与空间智能**: `SAM3D-Guided VLA` (VLA) 和 `IMPRINT` (具身导航) 均强调超越2D平面，向3D空间和以物体为中心的精细理解迈进，这是提升具身Agent在复杂物理世界中操作和导航能力的关键。
- **冻结模型的工程化与控制**: `A Control System... for Frozen LLM Agents` 和 `Context Assembly as Controlled Variable` 将LLM Agent的“Harness”设计提升到系统控制理论的高度，预示着LLM Agent将从“提示工程”走向“系统控制工程”。
- **测试时计算的多样化应用**: 从用于训练的`Self-Play` (Agent自我改进) 到用于评估的`GUI Reward Agent` (Agent自我改进)，再到即插即用的`Visual Prompt Engineering` (Agent自我改进)，测试时计算的概念正在从训练策略扩展到评估和推理等多个环节。
- **稀疏与路由**: `Salient Knowledge Pathways` (剪枝优化) 的核心思想是“只为必要的信息付费”，这种稀疏计算/MoE的思想正在被应用于跨模态问答，以解决高昂的计算成本问题。

#### 4. 优先精读

#### **`CoTinyVLA: Chain-of-Thought Distillation for a Sub-Billion-Parameter Vision-Language-Action Model`**: 该工作挑战了VLA模型必须“大而全”的定论，并创造了新的精度-效率帕累托前沿。其通过思维链蒸馏实现性能保持的方法，对于推动VLA模型在真实机器人平台上的落地至关重要，也为其他领域的模型小型化提供了参考。
#### **`Context Assembly as the Controlled Variable: A Control-Theoretic View of Harness Policies for Frozen LLM Agents`**: 该论文为混乱的LLM Agent“组装”（Prompt + Tools + Memory）领域带来了严谨的理论视角。阅读此文有助于理解Agent行为的稳定性和可控性，可能从根本上改变未来Agent系统的设计语言。
#### **`Salient Knowledge Pathways: Sparse Cross-Modal Routing for Efficient Knowledge-Intensive Multimodal Question Answering`**: 该工作极具启发性，它同时影响了“剪枝与推理优化”和“多模态大模型剪枝”两个方向。其动态稀疏路由的思想是解决多模态大模型推理效率瓶颈的极有前景的方案，值得深入研读其技术细节。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*