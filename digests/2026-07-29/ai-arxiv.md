# 实验室研究方向 Radar 2026-07-29

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 25 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-07-28 22:54 UTC

---

# 研究方向 Radar

## 今日总览

- **LLM Agent 工程**：6篇新论文，集中于记忆系统、安全控制、调度优化与情感调节，推动Agent在复杂场景下的可靠性。
- **Agent 测试时扩展与自我改进**：1篇新论文，提出任务转换方法使奖励信号可验证，拓展LLM自我改进的适用范围。
- **LLM Agent Society**：今日暂无新论文。
- **视觉-语言-动作模型**：8篇新论文，涵盖触觉增强、数据构建、推理加速、物理引导、执行同步及安全评估，VLA正向系统化工程迈进。
- **具身导航**：3篇新论文，涉及社交机器人记忆、恶劣天气下多模态理解基准、以及视觉-语言对齐方法。
- **LLM 剪枝与推理优化**：1篇新论文，面向全模态LLM的查询感知统一token剪枝。
- **多模态大模型剪枝**：2篇新论文，分别面向全模态LLM与病理切片图像的token选择与剪枝。
- **持续学习**：3篇新论文，覆盖测试时自适应、基于LoRA的遗忘抑制、以及多轮长程规划能力提升。
- **事件相机视觉感知**：1篇新论文，提出主动事件立体视觉方法实现超高速深度感知。
- **3D 点云视觉感知**：1篇新论文，利用双曲几何增强高曲率区域特征表达。
- **3D 点云感知与跟踪**：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [SIREN: Towards End-to-End Extreme-Weather Early Warning with Experience-Grounded LLM Agents](http://arxiv.org/abs/2607.24588v1)
Hang Ni et al. | 2026-07-27 | 构建端到端极端天气预警Agent，融合专家经验与多源数据实现自动预警流程。 | 直接展示了LLM Agent在特定领域（气象预警）的工程化应用，包括工具调用与推理链设计。

#### [MemChain: Learning Interpretable Memory Traces for Memory-Augmented LLM Agents](http://arxiv.org/abs/2607.24097v1)
Yiwen Ma et al. | 2026-07-27 | 提出可解释记忆链，通过链式结构存储和推理跨会话信息，提升记忆检索的准确性与可解释性。 | 面向Agent长期记忆这一核心工程瓶颈，提供结构化的记忆增强方案。

#### [Agentic Permissions Policy Algebra for Taint Confinement in LLM Agents](http://arxiv.org/abs/2607.24625v1)
Arseny Kravchenko et al. | 2026-07-27 | 提出权限策略代数方法，在Agent中实现污点隔离，防御提示注入攻击。 | 从安全工程角度增强Agent的行为可控性，属于Agent系统架构关键组件。

##### [Gubernaut: A Deterministic Homeostatic Controller for Affect-Regulated LLM Agents](http://arxiv.org/abs/2607.24339v1)
Dushyant Sharma | 2026-07-27 | 引入稳态情感控制器，使Agent在压力下保持稳定行为，减少谄媚、执着等故障模式。 | 解决Agent工程中的情感鲁棒性问题，提升人机交互的可靠性。

#### [SpecBox: Speculative Sandbox Scheduling for Efficient LLM Agent Serving](http://arxiv.org/abs/2607.23933v1)
Yihui Zhang et al. | 2026-07-27 | 提出推测性沙箱调度策略，优化MCP协议下Agent的sandbox资源利用率与延迟。 | 针对Agent推理时的调度工程问题，提升多Agent部署效率。

#### [MemTX: Transactional Belief Commit for Stateful Agent Memory](http://arxiv.org/abs/2607.23929v1)
Xiaoyang Li et al. | 2026-07-27 | 设计事务性信念提交机制，实现Agent共享记忆的原子性与一致性，防止污染传播。 | 解决多Agent协作中记忆一致性的工程挑战。

### Agent 测试时扩展与自我改进

#### [From RLVR to RLSVR: Task Transformation Induces Self-Verifiable Rewards for Open-Ended LLM Self-Improvement](http://arxiv.org/abs/2607.23802v1)
Qinsi Wang et al. | 2026-07-26 | 提出将开放任务转化为可验证形式，使得LLM能在非代码/数学领域进行自我奖励学习与迭代改进。 | 直接拓展了测试时自我改进方法的适用范围，从封闭领域推广至开放生成任务。

## 具身智能

### 视觉-语言-动作模型

#### [τ: Learning Touch-Augmented Vision-Language-Action Models from Future Visual Supervision](http://arxiv.org/abs/2607.24485v1)
Ning Cheng et al. | 2026-07-27 | 利用未来视觉信号作为监督，将触觉表示高效整合到预训练VLA模型中，缓解触觉数据稀缺问题。 | 为VLA模型增加触觉模态，提升精细操作能力，与动作策略学习直接相关。

#### [Data Pyramid for Embodied Manipulation](http://arxiv.org/abs/2607.24744v1)
Yifan Ye et al. | 2026-07-27 | 构建多级数据金字塔结构，融合不同精细度的观测-动作数据以训练通用操作策略。 | 解决VLA模型训练中数据稀缺与异构性问题，推动数据工程化。

#### [A Motion-Aware Vector Quantization Framework with Centroid Reuse for Efficient VLA Inference](http://arxiv.org/abs/2607.24148v1)
Zhuoran Song et al. | 2026-07-27 | 提出运动感知向量量化与质心复用方法，加速VLA模型在GPU上的推理，减少冗余计算。 | 针对VLA部署的实时性瓶颈，提供推理优化方案。

#### [A Few Words Go a Long Way: Language Guided Robot Policy Synthesis](http://arxiv.org/abs/2607.23784v1)
Daphne Chen et al. | 2026-07-26 | 提出ARCHITECT框架，将机器人策略视为语言引导的因果程序合成，实现可解释、可修正的操作。 | 赋予VLA策略可解释性，用语言作为中间表示指导动作生成。

##### [DeVA: Decoupled Video-Action Model with Physical Guidance for Robot Policy Learning](http://arxiv.org/abs/2607.24159v1)
Mengqi Zhang et al. | 2026-07-27 | 解耦视频与动作流，引入物理先验引导，使VLA模型更好地理解场景演化并执行语言指令。 | 增强VLA对动态物理世界的建模能力，提升泛化性。

#### [FutureRTC: Real-Time Robot Execution with Anticipatory-Conditioned Action Chunking](http://arxiv.org/abs/2607.24008v1)
Hai Jiang et al. | 2026-07-27 | 设计预期条件动作分块机制，解决VLA异步执行中的预测-执行错位与块间不连续问题。 | 直接针对VLA实时部署中的执行工程难题。

##### [MulRobBench: A Decision-Level Benchmark for Safe Multimodal UAV Agents](http://arxiv.org/abs/2607.23870v1)
Belal S. Alsinglawi et al. | 2026-07-26 | 构建多模态无人机Agent决策级基准，评估其在降质观测与模糊指令下的安全性。 | 为VLA在多模态具身Agent（无人机）中的应用提供安全评估标准。

#### [LabRobFail: A Benchmark for Robotic Failure Analysis in Chemical Self-driving Laboratories](http://arxiv.org/abs/2607.23704v1)
Haobo Wang et al. | 2026-07-26 | 建立化学实验自驱动实验室的机器人失败分析基准，包含细粒度故障标注。 | 为VLA模型在科学实验场景下的可靠性评估提供数据与评测。

### 具身导航

##### [Not Forgotten: Implementation of a Personalized Episodic Memory for the Humanoid Robot Head Kim](http://arxiv.org/abs/2607.24190v1)
Steve Aschenbrenner et al. | 2026-07-27 | 在社交机器人中实现轻量级情景记忆模块，使机器人能跨会话保留用户信息。 | 记忆增强直接提升具身导航中的社交交互与长期任务执行能力。

#### [ObsDriveBench: Benchmarking Multimodal Understanding under Adverse Weather with Observability Awareness](http://arxiv.org/abs/2607.23537v1)
Qiao Yan et al. | 2026-07-26 | 构建恶劣天气下多模态理解基准，引入可观测性指标评估VLM在自动驾驶中的表现。 | 为具身导航（自动驾驶）提供鲁棒性评估工具，关注感知退化场景。

#### [DICA: Dual-Indicator Guided Contrastive Alignment in Multimodal Large Language Models](http://arxiv.org/abs/2607.23944v1)
Hao Yang et al. | 2026-07-27 | 提出双指示器引导的对比对齐方法，使MLLM的视觉注意力从全局逐步聚焦到问题相关区域。 | 改进视觉-语言对齐，提升导航中目标定位与场景理解能力。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [Omni-Prune: Query-Aware Unified Token Pruning for Efficient Omnimodal Large Language Models](http://arxiv.org/abs/2607.23445v1)
Yiming Zhong et al. | 2026-07-26 | 提出查询感知的统一token剪枝方法，减少全模态LLM推理时的预填充延迟与显存占用。 | 直接针对LLM推理优化，剪枝策略可复用于多模态场景。

### 多模态大模型剪枝

#### [Omni-Prune: Query-Aware Unified Token Pruning for Efficient Omnimodal Large Language Models](http://arxiv.org/abs/2607.23445v1)
Yiming Zhong et al. | 2026-07-26 | （同上，此方向侧重多模态token剪枝） | 针对音频+视频+文本融合场景的token冗余消除，属于多模态大模型剪枝核心。

#### [PathSelect: Sequential Token Selection for Whole Slide Pathology](http://arxiv.org/abs/2607.23631v1)
Jingzhi Chen et al. | 2026-07-26 | 提出序列化token选择方法，从全切片病理图像中保留关键视觉token，降低VLM计算开销。 | 面向医学图像多模态大模型，剪枝策略保留弱语义信号，避免信息稀释。

### 持续学习

#### [Source-Free Controlled Adaptation of Teachers for Continual Test-Time Adaptation](http://arxiv.org/abs/2607.23735v1)
Anurag Roy et al. | 2026-07-26 | 提出无源域数据的教师-学生框架控制自适应，解决推理时连续域漂移问题。 | 面向持续测试时适应，无需原始训练数据，适合部署后模型更新。

#### [Latent-LoRA: Compact Latent-Space Adapters with Gradient-Free Routing for Continual Learning](http://arxiv.org/abs/2607.23837v1)
Reza Rahimi Azghan et al. | 2026-07-26 | 在潜空间分配紧凑LoRA适配器，并采用无梯度路由选择，避免灾难性遗忘。 | 基于LoRA的持续学习方法，降低内存开销，适用于大模型增量学习。

#### [The Physics of Multi-Turn Long-Horizon Planning: From Pre-training to Post-training via Single- and Multi-Teacher On-Policy Agentic Distillation](http://arxiv.org/abs/2607.24720v1)
Tianyi Men et al. | 2026-07-27 | 通过多教师在线策略蒸馏，系统提升基础模型的多轮长程规划能力，并分析其与持续学习的关系。 | 将持续学习思想（多任务增量）应用于规划能力提升，为Agent终身学习提供范式。

## 视觉感知

### 事件相机视觉感知

#### [Towards Ultrafast Depth Sensing Via Active Event-based Stereo Vision](http://arxiv.org/abs/2607.23684v1)
Jianing Li et al. | 2026-07-26 | 提出主动事件立体视觉范式，利用事件相机实现超高速深度感知，突破帧率限制。 | 直接聚焦事件相机在深度估计中的新应用，适合高速运动场景。

### 3D 点云视觉感知

#### [PointCHR: Point Cloud Analysis via Curvature-Aware Hyperbolic Rectification](http://arxiv.org/abs/2607.24052v1)
Xinxing Yu et al. | 2026-07-27 | 引入双曲空间曲率感知校正，增强点云中高曲率区域的细粒度几何特征表达。 | 改进点云分析中对关键几何结构的感知能力，提升分类/分割性能。

## 跨方向信号

1. **记忆系统成为Agent与导航的共同焦点**：MemChain、MemTX、Not Forgotten分别从LLM Agent记忆一致性、社交机器人记忆持久化角度出发，记忆增强正从单一Agent扩展到多Agent共享及具身交互场景。
2. **推理剪枝与量化加速向多模态与VLA渗透**：Omni-Prune、PathSelect、Motion-Aware VQ等论文将剪枝/量化方法从纯文本LLM推广至全模态LLM和VLA模型，表明效率优化正成为多模态部署的刚需。
3. **持续学习与测试时自适应融合**：Source-Free CTTA、Latent-LoRA等将无源域自适应与LoRA增量结合，而RLVR→RLSVR则把自我改进扩展到开放任务，体现了持续学习与Agent自进化技术的交叉。
4. **安全与鲁棒性评估基准密集涌现**：SIREN（预警安全）、Agentic Permissions（注入防御）、MulRobBench、ObsDriveBench、LabRobFail等从Agent行为安全到环境鲁棒性评估，社区正系统性地构建评测标准。
5. **物理先验与可解释性被引入具身模型**：DeVA引入物理引导、ARCHITECT将策略转化为因果程序、FutureRTC处理异步执行，表明VLA正从“端到端黑箱”向“结构化+可解释”方向演进。

## 优先精读

#### **[From RLVR to RLSVR: Task Transformation Induces Self-Verifiable Rewards for Open-Ended LLM Self-Improvement](http://arxiv.org/abs/2607.23802v1)**
   **理由**：该方法突破了RLVR仅适用于数学/代码的局限，将自我改进能力扩展到任意开放生成任务，对Agent测试时扩展和自我进化具有里程碑意义。

#### **[τ: Learning Touch-Augmented Vision-Language-Action Models from Future Visual Supervision](http://arxiv.org/abs/2607.24485v1)**
   **理由**：首次将触觉模态高效融入VLA预训练，并利用未来视觉信号解决触觉数据稀缺问题，直接提升精细操作能力，是具身智能模态融合的重要进展。

3. **[The Physics of Multi-Turn Long-Horizon Planning: From Pre-training to Post-training via On-Policy Agentic Distillation](http://arxiv.org/abs/2607.24720v1)**  
   **理由**：系统分析了多轮长程计划能力的来源，并提出多教师蒸馏的训练流程，对Agent的终身学习与持续改进有深刻指导意义，同时连接预训练与后训练两个阶段。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*