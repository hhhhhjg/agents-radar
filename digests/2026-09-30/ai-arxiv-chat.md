# 实验室研究方向 Radar 2026-09-30

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 26 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-30 00:57 UTC

---

# 研究方向 Radar（2026-09-30）

## 今日总览
- **LLM Agent 工程**（LLM Agent 与多智能体）：EP-Mem、TokenCast、PDEU-Bench 分别关注隐私记忆、token 消耗预测与个性化工具调用规划评测。
- **Agent 测试时扩展与自我改进**（LLM Agent 与多智能体）：自适应循环 Transformer、多模态 token 解耦 TTS、立场预测效果边界，测试时扩展继续向多模态与评估细化。
- **LLM Agent Society**（LLM Agent 与多智能体）：今日暂无新论文。
- **视觉-语言-动作模型**（具身智能）：RefineDrive、视觉中断鲁棒 VLA、JRDB-AVR，聚焦失败学习、观测缺失与主动视觉推理基准。
- **具身导航**（具身智能）：往返 VLN 可靠性、终身具身导航、空中 VLN 双时间视野世界模型，强调长程与持续导航。
- **LLM 剪枝与推理优化**（模型压缩与持续学习）：GroupMask 做层自适应 N:M 稀疏；Phi-2 用 QLoRA 量化微调，面向推理部署。
- **多模态大模型剪枝**（模型压缩与持续学习）：ACPruner、SPIDER、文本重要性设计原则，视觉 token 剪枝兼顾覆盖、多样性与文本引导。
- **持续学习**（模型压缩与持续学习）：SPACE-LoRA 保护激活子空间，可靠回放利用空间一致性，聚焦 LoRA 抗遗忘与在线适配。
- **事件相机视觉感知**（视觉感知）：E-WAVE 做事件连续光流，ECHO 将事件增强用于腕部操作，强相关进展集中在事件驱动动态感知。
- **3D 点云视觉感知**（视觉感知）：超二次曲面基元分解、SceneScaffold 主动场景状态、EviSplat 开放词汇 3D 分割。
- **3D 点云感知与跟踪**（视觉感知）：状态空间模型实现绝对尺度 3D 点跟踪。

## LLM Agent 与多智能体
### LLM Agent 工程
#### [EP-Mem: Elastic Privacy Memory for Social Relationship-Aware LLM Agents](http://arxiv.org/abs/2609.35233v1)
- 作者缩写：Sun et al.；发布日期：2026-09-28
- 核心贡献：提出社交关系感知的弹性隐私记忆，约束 LLM agent 信息泄露边界。
- 方向关联：直接服务 LLM Agent 工程中的记忆管理与隐私设计。

#### [TokenCast: Forecasting Token Consumption During LLM Agent Execution](http://arxiv.org/abs/2609.35760v1)
- 作者缩写：Ouyang et al.；发布日期：2026-09-28
- 核心贡献：预测 LLM agent 执行过程中的 token 消耗波动。
- 方向关联：支持 Agent 工程中的成本估算与执行调度。

#### [PDEU-Bench: Benchmarking the Personalized Planning Lifecycle of Tool-Calling LLM Agents](http://arxiv.org/abs/2609.34930v1)
- 作者缩写：Lai et al.；发布日期：2026-09-28
- 核心贡献：构建工具调用 LLM agent 的个性化规划生命周期基准。
- 方向关联：面向 Agent 工程中的个性化任务规划与评测。

### Agent 测试时扩展与自我改进
#### [Improving Test-Time Scaling with Adaptive Looped Transformers](http://arxiv.org/abs/2609.35748v1)
- 作者缩写：You et al.；发布日期：2026-09-28
- 核心贡献：用自适应循环 Transformer 改善测试时扩展。
- 方向关联：直接研究 Agent/LLM 测试时计算与推理扩展机制。

#### [Token-Disentangled Latent Test-Time Scaling for Vision-Language Reasoning](http://arxiv.org/abs/2609.35228v1)
- 作者缩写：Ma et al.；发布日期：2026-09-28
- 核心贡献：对可编辑 latent token 解耦更新，提升视觉语言推理的测试时扩展。
- 方向关联：将测试时扩展从文本推进到多模态推理场景。

#### [Where Do Test-Time Scaling and Training Fall Short in Individual Stance Prediction?](http://arxiv.org/abs/2609.33155v1)
- 作者缩写：Zhao et al.；发布日期：2026-09-27
- 核心贡献：评估测试时扩展与后训练在个体立场预测中的局限。
- 方向关联：揭示自我改进与测试时扩展的效果边界。

### LLM Agent Society
今日暂无新论文。

## 具身智能
### 视觉-语言-动作模型
#### [RefineDrive: Reliable Failure-Guided Learning for Vision-Language-Action Driving](http://arxiv.org/abs/2609.35078v1)
- 作者缩写：Sun et al.；发布日期：2026-09-28
- 核心贡献：利用失败引导学习提升 VLA 自动驾驶策略可靠性。
- 方向关联：面向 VLA 模型从失败中校正与闭环改进。

#### [Learning to Act under Visual Interruptions with Vision-Language-Action Models](http://arxiv.org/abs/2609.35003v1)
- 作者缩写：Jiang et al.；发布日期：2026-09-28
- 核心贡献：研究相机流中断时 VLA 策略如何持续行动。
- 方向关联：关注 VLA 在视觉观测缺失下的鲁棒性。

#### [JRDB-AVR: An Active Visual Reasoning Benchmark for Embodied Agents in Real-World Environments](http://arxiv.org/abs/2609.35032v1)
- 作者缩写：Cai et al.；发布日期：2026-09-28
- 核心贡献：提出真实环境具身 agent 主动视觉推理基准。
- 方向关联：为 VLA/具身视觉推理提供评测支撑。

### 具身导航
#### [Reliability-Aware Sparse Route Memory for Round-Trip Vision-Language Navigation](http://arxiv.org/abs/2609.34163v1)
- 作者缩写：Long et al.；发布日期：2026-09-28
- 核心贡献：提出可靠性感知稀疏路由记忆，解决连续往返 VLN。
- 方向关联：直接面向具身导航中的往返与偏差恢复。

#### [NavHarness: Towards Lifelong Embodied Navigation](http://arxiv.org/abs/2609.34276v1)
- 作者缩写：Zhao et al.；发布日期：2026-09-28
- 核心贡献：利用演化地图与历史搜索记录支持终身具身导航。
- 方向关联：面向持续导航中的地图更新与经验复用。

#### [ForeFly: A Dual-Horizon World Action Model for Aerial Vision-Language Navigation](http://arxiv.org/abs/2609.33581v1)
- 作者缩写：Wang et al.；发布日期：2026-09-27
- 核心贡献：提出双时间视野世界动作模型用于空中 VLN。
- 方向关联：推进空中视觉语言导航的长程指令跟随。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### [GroupMask: Layer-Adaptive Group-wise Sparsity for Semi-Structured LLM Pruning](http://arxiv.org/abs/2609.33977v1)
- 作者缩写：Li et al.；发布日期：2026-09-27
- 核心贡献：提出层自适应分组稀疏的半结构化 LLM 剪枝。
- 方向关联：直接服务 LLM 剪枝与压缩。

#### [Optimizing the Phi-2 Small Language Model for Real-time Chatbot Applications Using Parameter-Efficient Fine-Tuning (PEFT) with QLoRA Quantization](http://arxiv.org/abs/2609.33927v1)
- 作者缩写：Nguyen et al.；发布日期：2026-09-27
- 核心贡献：用 PEFT+QLoRA 4-bit 量化优化 Phi-2 实时聊天应用。
- 方向关联：面向 LLM 量化与推理部署优化。

### 多模态大模型剪枝
#### [ACPruner: Visual Token Pruning as Biased Attention Coverage Maximization in LVLMs](http://arxiv.org/abs/2609.34558v1)
- 作者缩写：Li et al.；发布日期：2026-09-28
- 核心贡献：将视觉 token 剪枝建模为偏置注意力覆盖最大化。
- 方向关联：直接针对 LVLM 视觉 token 剪枝。

#### [SPIDER: Multi-Layer Semantic Token Pruning and Adaptive Sub-Layer Skipping in Multimodal Large Language Models](http://arxiv.org/abs/2609.34977v1)
- 作者缩写：Chen et al.；发布日期：2026-09-28
- 核心贡献：联合多层语义 token 剪枝与自适应子层跳过。
- 方向关联：同时处理多模态 LLM 的数据与计算冗余。

#### [When Text Matters: Design Principles for Visual Token Pruning in Vision-Language Model](http://arxiv.org/abs/2609.34861v1)
- 作者缩写：Kang et al.；发布日期：2026-09-28
- 核心贡献：提出文本重要性驱动的视觉 token 剪枝设计原则。
- 方向关联：提升 VLM 剪枝时关键视觉信息保留能力。

### 持续学习
#### [SPACE-LoRA: Allocating Activation-Subspace Protection for Continual Learning](http://arxiv.org/abs/2609.34453v1)
- 作者缩写：Yoo et al.；发布日期：2026-09-28
- 核心贡献：为持续学习分配激活子空间以保护 LoRA 更新。
- 方向关联：直接缓解 LoRA 顺序学习中的灾难性遗忘。

#### [Reliable Replay through Spatial Coherence in Online Continual Learning](http://arxiv.org/abs/2609.33725v1)
- 作者缩写：Sun et al.；发布日期：2026-09-27
- 核心贡献：基于空间一致性改进在线持续学习的经验回放。
- 方向关联：面向有限记忆下的可靠回放与抗遗忘。

## 视觉感知
### 事件相机视觉感知
#### [E-WAVE: Event-based Continuous Optical Flow via Warping-Aligned Visual Encoding](http://arxiv.org/abs/2609.34346v1)
- 作者缩写：Wu et al.；发布日期：2026-09-28
- 核心贡献：用事件相机实现连续光流估计。
- 方向关联：直接服务事件相机动态视觉感知。

#### [ECHO: Event-Augmented Context with Hindsight and Outlook for Wrist-Only Manipulation](http://arxiv.org/abs/2609.34893v1)
- 作者缩写：Wang et al.；发布日期：2026-09-28
- 核心贡献：用事件增强上下文与前后向信息支持腕部操作。
- 方向关联：将事件相机用于高动态范围操作感知。

### 3D 点云视觉感知
#### [Superquadric Primitive Decomposition of 3D point clouds via Geometric-Aware Inlier Refinement](http://arxiv.org/abs/2609.35725v1)
- 作者缩写：Rinaldi et al.；发布日期：2026-09-28
- 核心贡献：通过几何感知内点细化将 3D 点云分解为超二次曲面基元。
- 方向关联：直接面向 3D 点云可解释几何感知。

#### [EviSplat: Preserving Multi-View Evidence in 3D Gaussian Splatting for Open-Vocabulary Segmentation](http://arxiv.org/abs/2609.34853v1)
- 作者缩写：Moon et al.；发布日期：2026-09-28
- 核心贡献：在 3D Gaussian Splatting 中保留多视角证据以支持开放词汇分割。
- 方向关联：服务 3D 场景与点云开放词汇感知。

#### [SceneScaffold: Active Scene-State Construction for Unified 3D Scene Understanding](http://arxiv.org/abs/2609.33518v1)
- 作者缩写：Li et al.；发布日期：2026-09-27
- 核心贡献：主动构建场景状态以统一 3D 场景理解。
- 方向关联：缓解 3D-LMM 视觉瓶颈并增强点云场景理解。

### 3D 点云感知与跟踪
#### [3D Point Tracking with State Space Models](http://arxiv.org/abs/2609.34035v1)
- 作者缩写：Ogawa et al.；发布日期：2026-09-27
- 核心贡献：用状态空间模型实现绝对尺度 3D 点跟踪。
- 方向关联：直接对应动态 3D 点云感知与跟踪。

## 跨方向信号
- **压缩与高效适配共振**：QLoRA、LoRA 子空间保护、GroupMask、视觉 token 剪枝共同指向训练/推理成本压缩。
- **测试时扩展向多模态迁移**：循环 Transformer、latent token 解耦 TTS 正从文本推理扩展到视觉语言与 Agent 场景。
- **可靠性与失败驱动学习升温**：VLA 失败引导、视觉中断、往返导航、在线回放都在处理真实部署中的错误与遗忘。
- **3D/视觉 token 瓶颈成为共性**：多模态剪枝、SceneScaffold、EviSplat 均在处理多视角证据压缩与关键信息保留。
- **事件相机走向动态操作与光流**：E-WAVE、ECHO 显示事件视觉正与操作策略、连续运动感知结合。

## 优先精读
- [SPACE-LoRA](http://arxiv.org/abs/2609.34453v1)：持续学习与 LoRA 结合，直接针对顺序任务遗忘，方法通用性强。
#### - [Improving Test-Time Scaling with Adaptive Looped Transformers](http://arxiv.org/abs/2609.35748v1)：测试时扩展核心机制论文，可能影响 Agent 推理与自我改进路线。
- [RefineDrive](http://arxiv.org/abs/2609.35078v1)：VLA 失败引导学习，面向自动驾驶可靠性，兼具闭环改进与部署价值。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*