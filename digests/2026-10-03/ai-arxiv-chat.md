# 实验室研究方向 Radar 2026-10-03

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 19 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-10-03 00:52 UTC

---

# 研究方向 Radar

# 今日总览
- LLM Agent 与多智能体—LLM Agent 工程：3 篇新文献，聚焦长时程物理控制、视频时间定位 harness、工具使用安全。
- LLM Agent 与多智能体—Agent 测试时扩展与自我改进：3 篇，架构采样、输入查询驱动权重更新预测、Lean 技能演化。
- LLM Agent 与多智能体—LLM Agent Society：今日暂无新论文。
- 具身智能—视觉-语言-动作模型：3 篇，动作分块、预测式动作对齐、全身与附属几何安全。
- 具身智能—具身导航：配置命中 4 篇，本雷达将 GenCOPE 归入 3D 点云视觉感知；导航侧 3 篇聚焦自适应 VLN、导航世界动作模型、社交合规。
- 模型压缩与持续学习—LLM 剪枝与推理优化：3 篇，MoE 专家剪枝、量化推理优化、激活稀疏。
- 模型压缩与持续学习—多模态大模型剪枝：今日暂无新论文。
- 模型压缩与持续学习—持续学习：3 篇，任务导向秩适配、任务向量合并、6-DoF 抓取持续学习。
- 视觉感知—事件相机视觉感知：今日暂无新论文。
- 视觉感知—3D 点云视觉感知：1 篇，Syn2Real 类别级物体位姿估计。
- 视觉感知—3D 点云感知与跟踪：今日暂无新论文。

# 分方向情报

## LLM Agent 与多智能体
### LLM Agent 工程
#### [Mimir: Physics-Grounded LLM Agents for Long-Horizon Irrigation Control](http://arxiv.org/abs/2610.02038v1)
作者缩写：Y. Liu 等 | 发布：2026-10-01 | 核心：构建物理接地的长时程灌溉控制 LLM Agent，应对动作改变未来状态、错误累积。 | 关联：LLM Agent 工程的长时程闭环控制。

#### [PACE: Provenance-Aware Capability Enforcement for Tool-Using LLM Agents](http://arxiv.org/abs/2610.01349v1)
作者缩写：F. Li 等 | 发布：2026-10-01 | 核心：提出来源感知能力执行，约束工具元数据、检索、记忆和可复用技能导致的副作用。 | 关联：工具使用 Agent 的安全与能力治理。

#### [VideoEvolve: Evolving Agent Harnesses for Video Temporal Grounding](http://arxiv.org/abs/2610.01766v1)
作者缩写：B. Luo 等 | 发布：2026-10-01 | 核心：通过演化 agent harness 改进冻结视频-语言模型的视频时间定位。 | 关联：Agent harness 自动优化与视频任务工程。

### Agent 测试时扩展与自我改进
#### [Architectural Sampling: Test-Time Scaling via Computational Diversity in Frozen Vision-Language Models](http://arxiv.org/abs/2610.01687v1)
作者缩写：A. Singh 等 | 发布：2026-10-01 | 核心：提出免训练架构采样，通过不同计算路径生成候选，实现测试时扩展。 | 关联：测试时扩展，突破温度采样同路径限制。

#### [Learning to Predict Distributions over Weight Updates for Test-Time Adaptation](http://arxiv.org/abs/2610.01934v1)
作者缩写：A. A. Khan 等 | 发布：2026-10-01 | 核心：研究仅凭输入查询预测 LLM 权重更新分布以进行运行时适应。 | 关联：测试时自适应与超网络式自我改进。

#### [SkillEvoLean: Mutation-enhanced skill evolution for Lean provers](http://arxiv.org/abs/2610.01799v1)
作者缩写：K. Zhou 等 | 发布：2026-10-01 | 核心：用变异增强技能演化提升 Lean 证明器，无需更新模型参数。 | 关联：面向形式化推理的 Agent 自我改进。

### LLM Agent Society
今日暂无新论文。

## 具身智能
### 视觉-语言-动作模型
#### [ATI-VLA: Action-Centric Predictive Vision-Language-Action Models via Actionable Alignment Then Adaptive Injection](http://arxiv.org/abs/2610.01741v1)
作者缩写：Y. Zhu 等 | 发布：2026-10-01 | 核心：提出动作中心预测式 VLA，通过可操作对齐再自适应注入，改善弱于直接动作预测的问题。 | 关联：VLA 架构与训练信号优化。

#### [ChunkVLA-AM: Parallel Action Chunking for Vision-Language-Action Robot Control in Additive Manufacturing](http://arxiv.org/abs/2610.01856v1)
作者缩写：Z. Liu 等 | 发布：2026-10-01 | 核心：面向增材制造，提出并行动作分块 VLA 机器人控制，缓解跨本体适配成本。 | 关联：VLA 制造场景部署与动作分块。

#### [WBAG: A Whole-Body and Attached-Geometry Safety Framework for Vision-Language-Action Manipulation](http://arxiv.org/abs/2610.01083v1)
作者缩写：S. Zhen 等 | 发布：2026-10-01 | 核心：提出全身与附属几何安全框架，降低 VLA 操作中机器人、物体与环境碰撞风险。 | 关联：VLA 真实世界部署安全。

### 具身导航
#### [NavHarness: Adaptive Goals for Agentic Vision-Language Navigation](http://arxiv.org/abs/2609.39915v1)
作者缩写：H. Shi 等 | 发布：2026-09-30 | 核心：为 agentic VLN 引入自适应目标，使执行与预期路线一致。 | 关联：视觉-语言导航与具身 agent。

#### [DiffWAM: A Fast and Efficient Navigation World Action Model](http://arxiv.org/abs/2609.39763v1)
作者缩写：M. Zhu 等 | 发布：2026-09-30 | 核心：利用未来视觉预测中的隐含运动，构建快速高效导航世界动作模型。 | 关联：具身导航的世界模型与动作生成。

#### [STARS: From Spatiotemporal Dynamics to Social Representations in Human-Robot Interaction](http://arxiv.org/abs/2609.40245v2)
作者缩写：N. Tsoi 等 | 发布：2026-09-30 | 核心：从时空动态学习社会表征，支持人机交互中的社交合规导航。 | 关联：动态人类环境中的具身导航。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### [MoRA: MoE Pruning via Router Bias Learning and Expert Approximation](http://arxiv.org/abs/2610.00367v1)
作者缩写：Y. Sun 等 | 发布：2026-09-30 | 核心：通过路由器偏置学习和专家近似进行 MoE 结构化专家剪枝，降低内存。 | 关联：LLM/MoE 剪枝。

#### [TopK-Guided: Adaptive, Budget-Aware Activation Sparsity for Efficient LLM Inference](http://arxiv.org/abs/2610.01763v1)
作者缩写：M. Agarwalla, C.-J. Lin | 发布：2026-10-01 | 核心：提出 TopK 引导、预算感知的自适应激活稀疏，加速 LLM 推理。 | 关联：LLM 推理优化与激活稀疏。

#### [RATIO: Reasoning Analysis and Token-level Inference Optimization for Quantized Reasoning Models](http://arxiv.org/abs/2609.39801v1)
作者缩写：C. Bao 等 | 发布：2026-09-30 | 核心：分析量化推理模型的性能退化与过度思考，并提出 token 级推理优化。 | 关联：量化推理模型的推理优化。

### 多模态大模型剪枝
今日暂无新论文。

### 持续学习
#### [Task-Oriented Rank Adaptation for Continual Learning in Text Classification](http://arxiv.org/abs/2610.01702v1)
作者缩写：R. S. Lopez 等 | 发布：2026-10-01 | 核心：面向文本分类持续学习，提出任务导向秩适配，缓解灾难遗忘与负迁移。 | 关联：持续学习与 PEFT/LoRA。

#### [ChainLoRA: Geometry-Preserving Task Vector Merging for Continual Learning in LLMs](http://arxiv.org/abs/2610.00431v1)
作者缩写：H. Yin 等 | 发布：2026-09-30 | 核心：提出无回放持续任务向量合并框架，平衡旧知识保留、新任务适配与参数预算。 | 关联：LLM 持续参数高效微调。

#### [Continual Learning for 6-DoF Grasp Synthesis via Experience and Demonstrations](http://arxiv.org/abs/2610.01301v1)
作者缩写：G. Schiavi 等 | 发布：2026-10-01 | 核心：通过经验与演示进行 6-DoF 抓取合成持续学习，应对未见物体。 | 关联：机器人持续学习。

## 视觉感知
### 事件相机视觉感知
今日暂无新论文。

### 3D 点云视觉感知
#### [GenCOPE: Syn2Real Generalized Category-Level Object Pose Estimation for Robotic Picking](http://arxiv.org/abs/2610.01758v1)
作者缩写：J. Liu 等 | 发布：2026-10-01 | 核心：提出 Syn2Real 泛化类别级物体位姿估计，用于机器人抓取。 | 关联：3D 点云视觉感知与机器人 3D 场景理解。

### 3D 点云感知与跟踪
今日暂无新论文。

# 跨方向信号
- Agent 工程向长时程、物理闭环与安全治理发展：Mimir 强调误差累积，PACE 关注工具副作用与来源可信。
- 测试时扩展/适应从同路径采样转向计算多样性、权重更新分布预测和技能演化。
- VLA 部署约束成为焦点：动作分块、预测式动作对齐、全身安全均面向真实机器人落地。
- 持续学习与参数高效微调深度融合：LoRA/任务向量/秩适配被用于抗遗忘和负迁移。
- LLM 效率方向呈现 MoE 剪枝、量化推理优化、激活稀疏多元并行，均强调预算或自适应。

# 优先精读
1. [Architectural Sampling](http://arxiv.org/abs/2610.01687v1)：免训练测试时扩展，计算多样性思路可能迁移到 Agent 候选生成。
2. [ATI-VLA](http://arxiv.org/abs/2610.01741v1)：直面预测式 VLA 弱于直接动作预测的关键矛盾，对 VLA 架构有参考。
3. [PACE](http://arxiv.org/abs/2610.01349v1)：工具使用 Agent 安全治理，来源感知与能力执行对工程落地重要。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*