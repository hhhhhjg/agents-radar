# 实验室研究方向 Radar 2026-08-13

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 19 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-08-12 22:34 UTC

---

# 研究方向 Radar

## 1. 今日总览

- **LLM Agent 与多智能体 / LLM Agent 工程**：3篇新论文，聚焦安全harness演化、技能型Agent强化学习与可执行红队评测。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：3篇新论文，免验证器共识选择与检索增强推理轨迹是主要进展。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：3篇新论文，覆盖可执行CoT、KV缓存重用与物理对抗攻击。
- **具身智能 / 具身导航**：2篇新论文（另2篇已按最相关方向归入VLA/3D点云），聚焦零样本目标导航与VLM空间思维链。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：1篇新论文，提出任务寄存器实现跨任务token剪枝迁移。
- **模型压缩与持续学习 / 多模态大模型剪枝**：1篇新论文，跨模态残差引导改进VLM视觉token剪枝。
- **模型压缩与持续学习 / 持续学习**：3篇新论文，涉及联邦LoRA异构秩聚合、Whisper医学领域适配与Agent记忆“灾难性记住”。
- **视觉感知 / 事件相机视觉感知**：2篇新论文，分别重新定义事件特征为运动线索、用事件引导DiT帧插值。
- **视觉感知 / 3D 点云视觉感知**：1篇新论文，用多视图关系蒸馏增强VLM空间几何表征。
- **视觉感知 / 3D 点云感知与跟踪**：今日暂无新论文。

## 2. 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [SHE: Trajectory-driven Safety Harness Evolution for LLM Agents](http://arxiv.org/abs/2608.09885v1)
Qu 等 | 2026-08-10 | 让Agent安全harness随运行轨迹演化，动态调整上下文、工具与权限控制。关联：将harness视为可演化系统组件，属Agent工程核心。

#### [Bidirectional Context Self-Distillation for Reinforcement Learning of Skill-Based LLM Agents](http://arxiv.org/abs/2608.09555v1)
Pan 等 | 2026-08-10 | 用双向上下文自蒸馏提升技能型LLM Agent将外部语言技能转化为动作的策略学习。关联：优化Agent技能利用与策略训练效率。

#### [REDAgentBench: Executable Red Teaming and Faithful Measurement of LLM Agent Systems](http://arxiv.org/abs/2608.10669v1)
Chen 等 | 2026-08-11 | 在可执行工具环境中对LLM Agent系统做红队攻击与忠实安全度量。关联：为Agent系统提供更贴近真实执行的工程评测手段。

### Agent 测试时扩展与自我改进

#### [Consilience for Verifier-Free Test-Time Scaling](http://arxiv.org/abs/2608.09898v1)
Kong 等 | 2026-08-10 | 提出免验证器测试时扩展的共识选择框架，替代编译器与价值函数。关联：为Agent测试时扩展提供通用免验证器范式。

#### [ThinkRetrieve: Retrieval-Augmented Reasoning Traces for Test-Time Scaling](http://arxiv.org/abs/2608.10928v1)
Singh 等 | 2026-08-11 | 用检索增强生成推理轨迹，缓解长链推理的收益递减。关联：改进大型推理模型测试时扩展的质量与稳定性。

#### [Test-Time Scaling for CAD Generation via Verifier-Free Consensus Selection](http://arxiv.org/abs/2608.09706v1)
Haag 等 | 2026-08-10 | 无真值验证器条件下，用多候选共识选择提升文本生成CAD程序的测试时扩展。关联：将免验证器TTS落地到CAD生成领域。

### LLM Agent Society

今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [XCoT-VLA: Executable Chain-of-Thought for Vision-Language-Action Driving](http://arxiv.org/abs/2608.10976v1)
XPeng FMT | 2026-08-11 | 提出可执行CoT替代开放文本推理，兼顾VLA驾驶的语义推理与实时控制。关联：直接改进VLA模型“推理-动作”链路。

#### [Neural Introspection Gating for Adaptive KV-Cache Reuse in Vision-Language-Action Models](http://arxiv.org/abs/2608.10824v1)
Wu 等 | 2026-08-11 | 用内省门控自适应重用相邻帧视觉token的KV缓存。关联：降低VLA实时控制中自回归解码的视觉计算量。

#### [Hidden in Plain Sight: Diffusion-Based Unrestricted Robotic Attacks on Vision-Language-Action Models](http://arxiv.org/abs/2608.10393v1)
Han 等 | 2026-08-11 | 用扩散模型生成不受限物理对抗样本攻击VLA机器人。关联：揭示VLA在真实操控任务中的对抗鲁棒性风险。

### 具身导航

#### [AECNav: Active Evidence Consolidation for Efficient Zero-Shot Open-Vocabulary Object Navigation](http://arxiv.org/abs/2608.10817v1)
Liu 等 | 2026-08-11 | 用主动证据整合减少零样本开放词汇目标导航中的冗余探索。关联：提升具身导航的零样本效率与准确性。

#### [Chain of Spatial Thoughts: Modality-Agnostic Spatial Grounding for Vision Language Models](http://arxiv.org/abs/2608.10278v1)
Schofield 等 | 2026-08-10 | 提出模态无关的空间思维链以增强VLM的空间grounding。关联：为具身导航等空间任务提供VLM基础能力增强。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [Putting Registers to Work: Task Registers for Token Pruning in Vision Transformers](http://arxiv.org/abs/2608.10989v1)
Cao 等 | 2026-08-11 | 用任务寄存器实现跨分类/分割/检测的token剪枝策略迁移。关联：探索视觉token剪枝的跨任务可迁移性，服务推理优化。

### 多模态大模型剪枝

#### [When Vision Becomes Text: Visual Token Pruning via Cross-Modal Residual Guidance in VLMs](http://arxiv.org/abs/2608.10489v1)
Ou 等 | 2026-08-11 | 用跨模态残差引导替代相似度引导完成VLM视觉token剪枝。关联：为多模态大模型剪枝提供新的压缩准则。

### 持续学习

#### [SeFoRA: Sketch-Aggregated Federated Low-Rank Adaptation with Heterogeneous Client Ranks](http://arxiv.org/abs/2608.10144v1)
Xia 等 | 2026-08-10 | 用sketch聚合解决客户端LoRA秩异构的联邦参数高效微调。关联：面向联邦持续适配场景解决异构秩聚合难题。

#### [myMediWhisper: Construction of Burmese Medical Speech Corpus and Whisper Fine-Tuning for Clinical Dialogue ASR](http://arxiv.org/abs/2608.11036v1)
Thu 等 | 2026-08-11 | 构建28小时缅甸语医学语料并微调Whisper以提升临床ASR。关联：预训练语音模型向低资源医学领域的持续适配。

#### [Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding](http://arxiv.org/abs/2608.11095v1)
Chakrabarti | 2026-08-11 | 将Agent编码中指令文件无限增长归因于“灾难性记住”与不完美回忆。关联：从记忆/遗忘失衡视角启发Agent系统的持续学习设计。

## 视觉感知

### 事件相机视觉感知

#### [Static in Frames, Dynamic in Events: Rethinking Features in Event Cameras as Motion Cues](http://arxiv.org/abs/2608.11075v1)
Araghi 等 | 2026-08-11 | 将事件相机特征重新定义为运动线索，并结合静态帧信息服务下游任务。关联：为事件相机感知提供新的特征表示思路。

#### [Bridging Event Streams and DiT: Event-Guided Video Frame Interpolation](http://arxiv.org/abs/2608.10479v1)
Lin 等 | 2026-08-11 | 用事件流引导DiT视频帧插值，改善大时间间隔与复杂运动下的插值质量。关联：推动事件相机感知与扩散生成模型的结合。

### 3D 点云视觉感知

#### [Multi-View Relational Distillation for Spatial Reasoning with Vision-Language Models](http://arxiv.org/abs/2608.10864v1)
Nguyen 等 | 2026-08-11 | 用多视图关系蒸馏强化VLM的空间几何表征，缓解几何脆弱性。关联：多视图几何蒸馏直接增强空间推理，支撑3D/点云感知基础。

### 3D 点云感知与跟踪

今日暂无新论文。

## 3. 跨方向信号

1. 视觉token压缩与缓存复用成为跨模态推理优化的公共主题：VLA的KV缓存重用（论文3）、VLM视觉token剪枝（论文5）、ViT任务寄存器（论文7）可相互借鉴。
2. 免验证器测试时扩展（VF-TTS）正在形成方法论家族：共识选择（论文9、11）与检索增强推理轨迹（论文12）共同降低对编译器/价值函数的依赖。
3. 空间几何grounding是连接VLA、具身导航与3D点云的关键瓶颈：空间思维链（论文17）与多视图关系蒸馏（论文18）从表征层增强VLM空间推理。
4. 安全与鲁棒性研究从模型权重扩展到系统与物理层：LLM Agent的harness演化（论文4）与可执行红队（论文10），以及VLA的物理世界攻击（论文2）。
5. “记忆-遗忘”平衡贯穿模型与Agent系统：CLAUDE.md无序增长（论文19）、联邦PEFT（论文16）、Whisper领域适配（论文15）均指向更可控的适应与保存机制。

## 4. 优先精读

1. **[XCoT-VLA](http://arxiv.org/abs/2608.10976v1)**：提出可执行CoT新范式，直接解决VLA实时控制与开放文本推理的冲突，是VLA推理链路的重要演进，并对具身导航有辐射价值。
2. **[Consilience](http://arxiv.org/abs/2608.09898v1)**：系统化免验证器测试时扩展方法，对Agent测试时扩展与自我改进方向具有方法论普适价值。
3. **[Multi-View Relational Distillation](http://arxiv.org/abs/2608.10864v1)**：一项工作同时牵动VLA、具身导航、3D点云感知三个方向，空间几何蒸馏方法可迁移性强，值得完整精读。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*