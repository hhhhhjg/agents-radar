# 实验室研究方向 Radar 2026-08-15

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 15 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-08-14 22:16 UTC

---

# 研究方向 Radar（截至 2026-08-15）

## 今日总览
- **LLM Agent 与多智能体：LLM Agent 工程**：3 篇新论文，聚焦长期记忆高效管理、运行时自进化安全防御与组合式 harness 修复，反映 Agent 工程正从单点模块优化走向系统级协同。
- **LLM Agent 与多智能体：Agent 测试时扩展与自我改进**：2 篇新论文，分别从进化策略扩大解覆盖和生成式检索增强推理两个角度扩展测试时计算的使用方式。
- **LLM Agent 与多智能体：LLM Agent Society**：今日暂无新论文。
- **具身智能：视觉-语言-动作模型**：3 篇高相关新论文，覆盖 VLA 对抗安全、自动驾驶失败感知自我进化与时间级 GRPO 后训练。
- **具身智能：具身导航**：3 篇新论文，覆盖开放词汇分层导航、类人形态 VLN 基准、空间记忆程序化表示。
- **模型压缩与持续学习：LLM 剪枝与推理优化**：1 篇新论文，针对 3D VLM 的覆盖驱动 token 剪枝。
- **模型压缩与持续学习：多模态大模型剪枝**：今日暂无新论文。
- **模型压缩与持续学习：持续学习**：2 篇新论文，分别从可学习小波激活维持可塑性、开放权重模型行为重新编程两个角度探索持续适应能力。
- **视觉感知：事件相机视觉感知**：今日暂无新论文。
- **视觉感知：3D 点云视觉感知**：1 篇新论文，提出几何约束的统一 3D 感知表示。
- **视觉感知：3D 点云感知与跟踪**：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程
#### [LycheeMemory V2: Efficient Long-Term Memory for LLM Agents via Semantic Segment-Level Consolidation](http://arxiv.org/abs/2608.12990v1)
Li et al. | 发布: 2026-08-13 | 提出语义段落级整合，避免每轮交互都调用 LLM 进行记忆抽取，显著降低长期记忆构建成本。 | 面向 LLM Agent 的长期记忆管理，属于 Agent 工程中的记忆基础设施优化。

#### [Beyond Handcrafted Security: Towards Self-Evolving Defense for LLM Agents](http://arxiv.org/abs/2608.12977v1)
Ruan et al. | 发布: 2026-08-13 | 提出运行时自进化防御框架，让安全机制在 Agent 执行循环中持续更新。 | 将安全防御从人工规则转向自进化，是 LLM Agent 工程中系统级防护的重要进展。

#### [Capability Sheaves for Compositional Agent-Harness Repair: Controlled Quotients and a Real-Repository Stress Test](http://arxiv.org/abs/2608.13228v1)
Batruin | 发布: 2026-08-13 | 用有限能力层建模 Agent harness 组件间状态不一致，并给出组合修复方法。 | 为组合式 Agent 工程提供形式化建模与修复工具，直指多组件协同的系统性失效问题。

### Agent 测试时扩展与自我改进
#### [Beyond the Best Guess: Improving LLM Solution Coverage with Evolution Strategies](http://arxiv.org/abs/2608.12679v1)
Hayes et al. | 发布: 2026-08-13 | 用进化策略在测试时扩展 LLM 的解覆盖范围，突破单次采样的“最佳猜测”。 | 直接体现测试时计算扩展与自我改进，适用于数学、科学等发现型任务。

#### [GEM: A Generative Embedding Model Bridging Reasoning and Retrieval](http://arxiv.org/abs/2608.13200v1)
Shen, Macdonald | 发布: 2026-08-13 | 将生成式推理与密集检索统一在同一嵌入模型中，提升复杂信息需求下的检索效果。 | 为 Agent 测试时扩展提供“生成式检索”新接口，可增强推理与检索的协同。

### LLM Agent Society
今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型
#### [Temporal GRPO: Beyond Trajectory-Level Credit in Vision-Language-Action Reinforcement Learning](http://arxiv.org/abs/2608.13026v1)
Zhou et al. | 发布: 2026-08-13 | 提出时间级 GRPO，将轨迹级优势分解到动作时间步，解决稀疏奖励下的信用分配问题。 | 直接改进 VLA 后训练的强化学习目标，是策略优化层面的核心方法进展。

#### [FIRE-VLA: Failure-Informed Self-Evolution for Vision-Language-Action Models in Autonomous Driving](http://arxiv.org/abs/2608.13395v1)
Dou | 发布: 2026-08-13 | 利用失败轨迹信息引导 VLA 自我进化，弥补 GRPO 在整组轨迹均差时缺乏学习信号的问题。 | 针对自动驾驶 VLA 的自我改进机制，与后训练强化学习紧密结合。

#### [UniTexture: Cross-Task Universal Adversarial Textures for Vision-Language-Action Models](http://arxiv.org/abs/2608.13453v1)
Dai et al. | 发布: 2026-08-13 | 生成跨任务通用的对抗纹理，可干扰 VLA 模型在操控任务中的行为。 | 揭示 VLA 模型在物理世界中的对抗脆弱性，为安全评测提供新工具。

### 具身导航
#### [SAP-Nav: Spatial Semantic Representation Meets Active Perception for Hierarchical Open-Vocabulary Object Navigation](http://arxiv.org/abs/2608.12707v1)
Pei et al. | 发布: 2026-08-13 | 提出空间语义表示与主动感知结合的层次化开放词汇目标导航框架。 | 面向场景/房间/区域/实例多粒度指令，是开放词汇导航中的任务级突破。

#### [HumanoidVLN: A Physics-Grounded Simulator and Benchmark for Vision-Language Navigation Across Diverse Humanoid Embodiments](http://arxiv.org/abs/2608.12860v1)
Pham et al. | 发布: 2026-08-13 | 构建物理仿真器与基准，模拟双足运动约束和不同人形形态对 VLN 的影响。 | 将具身导航评测从轮式扩展至人形平台，填补物理约束缺失的空白。

#### [Spatial Memory Agent: Experience-Grounded Procedure Memory for Spatial Intelligence](http://arxiv.org/abs/2608.12743v1)
Zhang et al. | 发布: 2026-08-13 | 通过经验构建程序记忆，提升 VLM 智能体的空间推理能力。 | 为导航与具身规划提供可复用记忆模块，连接空间智能与长期经验利用。

## 模型压缩与持续学习

### LLM 剪枝与推理优化
#### [CoverPrune: Coverage-Driven Token Pruning for 3D VLMs via Optimal Transport](http://arxiv.org/abs/2608.13226v1)
Ling et al. | 发布: 2026-08-13 | 用最优传输实现覆盖驱动的 3D VLM token 剪枝，在保留覆盖度的同时削减视觉 token 数量。 | 针对 3D VLM 推理瓶颈，将剪枝目标从多样性提升为可证明的覆盖优化。

### 多模态大模型剪枝
今日暂无新论文。

### 持续学习
#### [Sustaining Plasticity via Learnable Wavelet Activations in Continual Learning](http://arxiv.org/abs/2608.12874v1)
Zhang et al. | 发布: 2026-08-13 | 提出可学习小波激活函数，缓解持续学习中固定激活函数的低频谱偏置带来的可塑性损失。 | 从激活函数设计入手解决持续学习的可塑性维持问题，方法可迁移至多种持续学习场景。

#### [Behavioral Reprogramming of Open-Weights Models: Cognitive Plasticity and Alignment Bounds](http://arxiv.org/abs/2608.13069v1)
Malíčková | 发布: 2026-08-13 | 实证评估开放权重 LLM 在被“行为重新编程”后的认知可塑性与对齐边界。 | 将模型持续适应与对齐约束放在同一框架下讨论，为持续学习中的行为层更新提供视角。

## 视觉感知

### 事件相机视觉感知
今日暂无新论文。

### 3D 点云视觉感知
#### [Geometry-Grounded Unified 3D Perception for Autonomous Driving](http://arxiv.org/abs/2608.13147v1)
Xu et al. | 发布: 2026-08-13 | 提出保留度量 3D 结构的统一多相机感知表示，并贯穿主干网络与下游任务。 | 为自动驾驶 3D 感知提供几何约束的统一表示，缓解图像主干语义预训练与 3D 结构错配问题。

### 3D 点云感知与跟踪
今日暂无新论文。

## 跨方向信号
- **自我进化成为跨领域共同范式**：LLM Agent 运行时防御（Beyond Handcrafted Security）、VLA 自我进化（FIRE-VLA）与测试时解覆盖扩展（Beyond the Best Guess）都从静态设计转向系统在运行/训练中自我更新。
- **测试时/训练时信用分配趋于细粒度**：Temporal GRPO 将轨迹级奖励拆到时间步，Beyond the Best Guess 将测试时计算扩展到解覆盖，二者共同指向更精细地利用计算资源。
- **记忆系统向长期化、程序化发展**：LycheeMemory V2 在语言 Agent 中做语义段落级整合，Spatial Memory Agent 在具身智能中做经验程序记忆，表明记忆正成为 Agent 与具身系统的公共基础设施。
- **对抗安全同时延伸至 VLA 与 LLM Agent**：UniTexture 针对 VLA 的物理对抗纹理，Beyond Handcrafted Security 针对 LLM Agent 的运行时防御，安全研究正从纯语言或纯视觉走向视觉-语言-动作闭环。
- **3D 感知同时推进效率与结构**：CoverPrune 从 token 剪枝降低 3D VLM 推理成本，Geometry-Grounded Unified 3D Perception 从几何约束统一 3D 表示，二者分别从效率与结构推动 3D 感知实用化。

## 优先精读
- **Temporal GRPO**：直接提升 VLA 强化学习后训练的信用分配精度，对具身智能策略学习具有方法论价值，且可与 FIRE-VLA 的失败感知机制互补。
- **SAP-Nav**：在分层开放词汇导航中融合“空间语义表示+主动感知”，是具身导航中少见的语义结构建模与感知策略联合设计工作。
- **CoverPrune**：从最优传输视角重新定义 3D VLM token 剪枝的覆盖目标，为多模态大模型推理优化提供了可借鉴的新框架。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*