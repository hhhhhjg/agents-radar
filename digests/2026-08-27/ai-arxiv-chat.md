# 实验室研究方向 Radar 2026-08-27

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 19 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-08-27 02:47 UTC

---

## 今日总览
- **LLM Agent 与多智能体 / LLM Agent 工程**：3 篇新论文。今日进展集中在长程任务工作记忆、经验图记忆驱动的自进化 Agent，以及地理空间规划评测基准。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：3 篇新论文。测试时扩展正从单轮推理走向多轮检索、从全量 attention 走向滑动前缀压缩，并出现物理对抗类自我对弈。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：3 篇新论文。VLA 模型正在向多臂协作、流式时序建模和 3D 视觉信息恢复三个方向扩展。
- **具身智能 / 具身导航**：3 篇新论文。进展包括 4D LiDAR 标注自举、手术场景分割中的 SAM 适应，以及跨模态目标计数。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：1 篇新论文。AI 增强射频干扰抑制，与经典 LLM 剪枝关联较弱。
- **模型压缩与持续学习 / 多模态大模型剪枝**：2 篇新论文。均强调按注意力头差异进行视觉 token 剪枝，以降低 VLM 预填充成本。
- **模型压缩与持续学习 / 持续学习**：3 篇新论文。涉及门控自适应提示、图像退化下的无遗忘恢复，以及交替任务可塑性理论。
- **视觉感知 / 事件相机视觉感知**：今日暂无新论文。
- **视觉感知 / 3D 点云视觉感知**：1 篇新论文。提出紧急车辆交互的行为级生成与评测基准。
- **视觉感知 / 3D 点云感知与跟踪**：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [Beyond Scaling: Self-Evolving LLM Agents for Hardware Kernel Optimization via an Experience-Driven Workflow and Experience Graph Memory](http://arxiv.org/abs/2608.25570v1)
Siyuan Chen 等 | 2026-08-26
核心贡献：提出经验驱动工作流与经验图记忆，使 LLM Agent 在硬件内核优化中不依赖规模持续自进化。
方向关联：为 LLM Agent 工程提供可积累、可检索的结构化经验记忆范式。

#### [Recursive Experiential-Working Memory Evolution for Long-Horizon Agent Harnesses](http://arxiv.org/abs/2608.24876v1)
Zhaochen Yu 等 | 2026-08-25
核心贡献：提出递归经验-工作记忆架构 Recuris，解决长时程任务中的状态跟踪与技能调用错位问题。
方向关联：直接面向长时程 Agent 的记忆与任务进度管理。

#### [LifePlanner: Evaluating LLM Agents for Geo-spatial Planning with Social Media Data](http://arxiv.org/abs/2608.25039v1)
Zhen Dong 等 | 2026-08-25
核心贡献：构建融合社交媒体噪声信号的地理空间规划评测基准，用于检验 Agent 真实多约束推理能力。
方向关联：为 LLM Agent 工程提供高生态效度评测方案。

### Agent 测试时扩展与自我改进

#### [Beyond Confidence: Test-Time Scaling for Multi-Turn Search Agents via Retrieval Grounding](http://arxiv.org/abs/2608.24024v1)
Hyunho Kook 等 | 2026-08-25
核心贡献：在并行 rollouts 聚合中引入检索接地，超越传统置信度投票，改善多轮搜索 Agent 的测试时扩展。
方向关联：直接针对 Agent 场景的测试时扩展策略。

#### [Prefix Sliding for efficient test-time scaling](http://arxiv.org/abs/2608.26070v1)
Niklas Muennighoff 等 | 2026-08-26
核心贡献：提出前缀滑动方法，压缩长推理链中的 KV 记忆，从而降低测试时扩展成本。
方向关联：为长思维链测试时扩展提供高效记忆机制。

#### [ShuttleArena: Interpretable Self-Play in Physics-Based Badminton](http://arxiv.org/abs/2608.25246v1)
Peize Ding | 2026-08-26
核心贡献：在物理羽毛球环境中实现可解释的自博弈，让 Agent 联合优化击球与回位。
方向关联：体现测试时扩展与自我对弈在物理交互决策中的应用。

### LLM Agent Society
今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [MA-VLA: Multi-Arm Vision-Language-Action Model for Collaboration and Compositional Generalization](http://arxiv.org/abs/2608.25864v1)
Zaibin Zhang 等 | 2026-08-26
核心贡献：提出多臂 VLA 模型，显式分配单臂指令并支持协作动作的组合泛化。
方向关联：将 VLA 从单臂操作推进到多臂协作场景。

#### [StreamPI: Streaming Multimodal Temporal Modeling for Vision-Language-Action Models](http://arxiv.org/abs/2608.26067v1)
Zhe Liu 等 | 2026-08-26
核心贡献：提出流式多模态时序建模，打破 pi0.5 等模型的单帧感知限制。
方向关联：提升 VLA 对历史观测与动态空间关系的建模能力。

#### [V-Link: Recovering Lost Visual Representations in Action DiT for Vision-Language-Action Models](http://arxiv.org/abs/2608.25308v1)
Yehao Lu 等 | 2026-08-26
核心贡献：揭示动作专家对 3D 几何视觉表示访问受限的问题，并提出 V-Link 恢复视觉信息流。
方向关联：优化 VLA 中视觉表示到动作生成头的传递链路。

### 具身导航

#### [Bootstrapping a 4D LiDAR Annotation Tool from Video Foundation Models](http://arxiv.org/abs/2608.25418v1)
Jihun Kim 等 | 2026-08-26
核心贡献：利用视频基础模型自动生成时空一致的 4D LiDAR 序列标注，显著降低人工成本。
方向关联：缓解具身导航中点云时序标注的数据瓶颈。

#### [Hierarchical Prototype-Memory Adaptation of SAM for Surgical Instrument Segmentation](http://arxiv.org/abs/2608.24541v1)
Xinning Yao 等 | 2026-08-25
核心贡献：通过层级原型记忆将 SAM 适应到手术器械分割任务。
方向关联：为具身导航与手术场景理解提供适应基础模型的分割能力。

#### [Object Counting Across Modalities: Taxonomies, Benchmarks, Applications, and Open Challenges](http://arxiv.org/abs/2608.23845v1)
Joana Konadu Owusu 等 | 2026-08-24
核心贡献：系统综述从类特定密度回归到开放词汇基础模型的目标计数方法。
方向关联：为具身导航中的实例定位与多模态目标计数提供方法学参考。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [Clearing the Underbrush: AI-Enhanced RF Interference Suppression](http://arxiv.org/abs/2608.24974v1)
Rahul Jain 等 | 2026-08-25
核心贡献：基于自编码器在信号与干扰混合域中联合抑制结构化射频干扰。
方向关联：作为推理侧优化方法，与 LLM 剪枝/推理加速的直接关联较弱，但提供在线自适应压缩的思路。

### 多模态大模型剪枝

#### [Not All Attention Heads Contribute to Critical Visual Token Selection: Head-Aware Pruning Matters More](http://arxiv.org/abs/2608.25332v1)
Chaofang Ma 等 | 2026-08-26
核心贡献：发现关键视觉 token 选择由少数注意力头决定，据此提出 head-aware token 剪枝。
方向关联：为 VLM 视觉 token 压缩提供细粒度注意力头级依据。

#### [HAP: Head-Adaptive Visual Token Pruning via Cross-Modal Alignment](http://arxiv.org/abs/2608.23921v1)
Yuanhao Sun 等 | 2026-08-24
核心贡献：提出跨模态对齐下的头部自适应视觉 token 剪枝，避免均匀聚合 attention 带来的误差。
方向关联：直接提升高分辨率 VLM 图像输入的 prefill 效率。

### 持续学习

#### [GAP-Prompt: Gated Adaptive Prompting for Efficient Continual Learning](http://arxiv.org/abs/2608.23782v1)
Trung-Anh Dang 等 | 2026-08-24
核心贡献：以门控自适应提示替代静态任务级提示，缓解顺序任务中的灾难性遗忘。
方向关联：是预训练模型 + 提示的持续学习路径上的直接进展。

#### [Restoring Without Forgetting: Continual Learning Across Image Degradations](http://arxiv.org/abs/2608.23799v1)
Alif Ashrafee 等 | 2026-08-24
核心贡献：将持续学习引入多退化图像恢复，在新增退化类型时不遗忘旧退化。
方向关联：扩展持续学习到图像恢复闭环。

#### [Dimensionless Controls of Plasticity Under Alternating Tasks: From Evolutionary Biology to Continual Learning](http://arxiv.org/abs/2608.23889v1)
Owen Skriloff | 2026-08-24
核心贡献：从进化生物学借用量纲分析，研究交替训练中的可塑性控制。
方向关联：为持续学习提供任务交替与可塑性调节的理论框架。

## 视觉感知

### 事件相机视觉感知
今日暂无新论文。

### 3D 点云视觉感知

#### [SIREN-Bench: Behavior-Driven Generation and Evaluation of Emergency-Vehicle Interactions](http://arxiv.org/abs/2608.24094v1)
Yicheng Zhu 等 | 2026-08-25
核心贡献：通过行为级控制紧急车辆特权与民用车响应，生成并评测安全关键交互场景。
方向关联：为自动驾驶/3D 场景理解提供动态交互级评测基准。

### 3D 点云感知与跟踪
今日暂无新论文。

## 跨方向信号
1. **测试时扩展与记忆管理深度耦合**：论文 4 以前缀滑动压缩长推理 KV，论文 13 以检索接地改进多轮搜索聚合，均指向“先管记忆、再扩计算”。
2. **Agent 自我改进转向结构化经验复用**：论文 7、8 分别通过工作记忆和经验图记忆替代单纯扩展上下文，强调跨任务积累。
3. **视觉 token 剪枝进入“注意力头感知”阶段**：论文 11、14 共同说明各注意力头对关键视觉 token 的贡献不均，剪枝需逐头建模。
4. **持续学习与信号/图像退化场景融合**：论文 10 处理图像退化累积，论文 17 处理射频干扰抑制，体现持续适应与干扰抑制的交叉。
5. **VLA 模型架构呈组合式升级**：论文 1、2、3 分别补齐多臂、时序、3D 视觉三条短板，推动具身操作泛化。

## 优先精读
#### **[Prefix Sliding for efficient test-time scaling](http://arxiv.org/abs/2608.26070v1)**：系统性地将长推理链记忆压缩为滑动前缀，是测试时扩展方向的高性价比创新，适用面广。
#### **[Beyond Confidence: Test-Time Scaling for Multi-Turn Search Agents via Retrieval Grounding](http://arxiv.org/abs/2608.24024v1)**：直接解决多轮搜索 Agent 在测试时扩展中的聚合信号失真问题，对情报检索类 Agent 最实用。
3. **[Beyond Scaling: Self-Evolving LLM Agents for Hardware Kernel Optimization](http://arxiv.org/abs/2608.25570v1)**：展示了经验图记忆 + 自进化工作流如何让 Agent 突破规模限制，是 LLM Agent 工程化的代表性范式。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*