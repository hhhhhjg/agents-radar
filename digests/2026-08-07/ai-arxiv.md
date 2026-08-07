# 实验室研究方向 Radar 2026-08-07

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 43 篇新文献 + 13 篇过去14天内已出现 | 生成时间：2026-08-07 01:28 UTC

---

# 研究方向 Radar

## 1. 今日总览

- **LLM Agent 与多智能体**
  - **LLM Agent 工程**：新增 10 篇。围绕可进化 harness、环境状态建模、运行时 guardrail、图记忆、技能污染与技能使用审计，Agent 工程正从单任务正确性转向长期运行稳定性。
  - **Agent 测试时扩展与自我改进**：新增 2 篇。测试时自校正与协作式 harness 进化出现，说明“测试时算力”与“自进化”正在合流。
  - **LLM Agent Society**：今日暂无新论文；近期 1 篇多智能体委托研究仍值得跟踪。
- **具身智能**
  - **视觉-语言-动作模型**：新增 10 篇。VLA 从行为克隆式动作生成，转向上下文后训练、语言记忆、指令感知空间对齐、分层后训练和测试时接地检测。
  - **具身导航**：新增 6 篇。新论文聚焦脉冲神经策略、动态模态编排、开放场景语言表示和 VLM 物理提示注入，鲁棒性与安全性信号增强。
- **模型压缩与持续学习**
  - **LLM 剪枝与推理优化**：新增 2 篇。边缘 LLM 推理硬件设计与视觉 token 动态证据构建共同指向推理成本瓶颈。
  - **多模态大模型剪枝**：新增 3 篇。视觉 token 角色分析、3D token 聚类压缩和迭代证据构建，使剪枝从 2D 走向 3D/多模态。
  - **持续学习**：新增 10 篇。主流趋势从简单参数更新扩展到神经调制、拓扑后继、双适配器与科学计算持续学习。
- **视觉感知**
  - **事件相机视觉感知**：新增 2 篇。事件数据开始用于厨房场景数据集与反射去除，应用面拓宽。
  - **3D 点云视觉感知**：新增 4 篇。点云生成、轻量检测、BEV 鲁棒性与零样本 3D 接地均有新进展。
  - **3D 点云感知与跟踪**：今日暂无新论文。

## 2. 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [EvoHarness-RL: Learning Self-Evolving Runtime Harness for Long-Horizon LLM Agents](http://arxiv.org/abs/2608.05446v1)
- X. Ning et al. · 2026-08-05 | 贡献：提出可自进化的运行时 harness，将噪声交互轨迹转化为可复用状态。 | 关联：直指长程 Agent 工程中的状态管理与工具执行基础问题。

#### [State2State: Environment-Derived Mid-Training for LLM Agents](http://arxiv.org/abs/2608.04934v1)
- X. Lei et al. · 2026-08-05 | 贡献：用环境派生状态进行中间训练，降低对外部专家轨迹与人工验证器的依赖。 | 关联：扩展 Agent 训练信号来源，是工程范式的关键创新。

#### [DreamGuard: Efficient Runtime Guardrail for LLM Agents via Risk-Aware World Model](http://arxiv.org/abs/2608.05695v1)
- W. Lin et al. · 2026-08-06 | 贡献：基于风险感知世界模型在动作执行前进行高效 guardrail 检查。 | 关联：提升 Agent 运行时安全，属于工程基础设施方向。

#### [EcoAgent-Bench: Evaluating Economic Decision-Making in Budget-Constrained LLM Agents](http://arxiv.org/abs/2608.05519v1)
- J. Wu et al. · 2026-08-06 | 贡献：提出将资源预算视为任务内决策的 Agent 评测基准。 | 关联：为 Agent 经济性决策提供新的评测维度。

#### [Hierarchical Graph Memory for LLM Agents with Path-level Localization and Rewrite](http://arxiv.org/abs/2608.05095v1)
- X. Yue et al. · 2026-08-05 | 贡献：提出路径级定位与重写的层级图记忆。 | 关联：解决长时 Agent 记忆动态更新与多跳检索问题。

#### [When Self-Evolution Backfires: Pre-Commit Gating against Skill Contamination in LLM Agents](http://arxiv.org/abs/2608.05810v1)
- L. Shang et al. · 2026-08-06 | 贡献：发现自进化技能存在“能力污染”相变，并提出 pre-commit gating。 | 关联：直接约束 Agent 技能库增长策略，防止性能退化。

#### [Skill-Use: Can LLMs Actually Use Skills in Agentic Harnesses?](http://arxiv.org/abs/2608.04828v1)
- J. Han et al. · 2026-08-05 | 贡献：评测 LLM 在 harness 中是否真正按技能文档执行。 | 关联：填补技能质量与任务成功之间的“使用性”缺口。

#### [Learning Globally Reusable Skills for Coding Agents](http://arxiv.org/abs/2608.06153v1)
- C. Yang et al. · 2026-08-06 | 贡献：建模技能间关系，学习全局可复用的编码技能。 | 关联：推动技能进化从局部更新走向全局泛化。

#### [ArtAnno: Annotating Implicit Semantics in Artworks through LLM Agent-Driven Bidirectional Human-AI Augmentation](http://arxiv.org/abs/2608.05026v1)
- X. Gu et al. · 2026-08-05 | 贡献：用 LLM Agent 驱动双向人机增强，标注艺术作品的隐性语义。 | 关联：展示 Agent 工程在专业人机协同场景中的应用。

### Agent 测试时扩展与自我改进

#### [EvolveNet: Collaborative Harness Evolution for Agent Self-Improvement](http://arxiv.org/abs/2608.04968v1)
- J. Nie et al. · 2026-08-05 | 贡献：将 harness 视为可协同进化的程序，在不动模型权重的情况下持续提升 Agent 能力。 | 关联：为自我改进提供不依赖重训的轻量路径。

#### [Refining Over Resampling: Test-Time Self-Correction for LLM Reasoning](http://arxiv.org/abs/2608.05643v1)
- A. Bilal et al. · 2026-08-06 | 贡献：提出用测试时精炼/自校正替代宽采样，避免答案模式重复。 | 关联：改进测试时扩展的收益递减问题。

#### 🔁 **【过去14天内已出现】** [Interpretable Adaptive Sampling for LLM Test-Time Scaling](http://arxiv.org/abs/2608.03961v1)
- M. Kashaniyan et al. · 2026-08-04 | 贡献：提出可解释的自适应采样，避免固定预算浪费。 | 关联：让测试时扩展资源分配更透明高效。

#### 🔁 **【过去14天内已出现】** [Test-Time Scaling in Reasoning LLMs: Inference Regimes, Evaluation, and Reproducibility](http://arxiv.org/abs/2608.04001v1)
- M. Hariri et al. · 2026-08-04 | 贡献：系统梳理测试时扩展的推理模式、评测与可复现性。 | 关联：为测试时扩展研究提供统一框架。

### LLM Agent Society

#### 🔁 **【过去14天内已出现】** [History Matters: Meta-policy Delegation with Heterogeneous Multi-agent Reinforcement Learning](http://arxiv.org/abs/2608.03833v1)
- Z. Lu et al. · 2026-08-04 | 贡献：研究异构多智能体系统考虑历史交互的元策略委托。 | 关联：多智能体社会中基于历史的委托决策机制。

## 具身智能

### 视觉-语言-动作模型

#### [In-Context VLA: Endowing Vision-Language-Action Models with Language via In-Context Post-Training and Agentic Tool Use](http://arxiv.org/abs/2608.05738v1)
- J. Yang et al. · 2026-08-06 | 贡献：将上下文后训练与智能体工具调用结合，使 VLA 获得显式语言推理能力。 | 关联：直接挑战 VLA 行为克隆范式，属子方向核心突破。

#### [BridgeVLA++: A Data-Efficient, Generalizable, and Memory-Augmented Vision-Language-Action Framework for 3D Manipulation](http://arxiv.org/abs/2608.05042v1)
- P. Li et al. · 2026-08-05 | 贡献：构建数据高效、可泛化且带显式记忆的 3D 操作 VLA 框架。 | 关联：同时回应 VLA 数据依赖、分布偏移和缺乏记忆三大痛点。

#### [Explicit Language Memory for Long-Horizon Planning in Vision-Language-Action Models](http://arxiv.org/abs/2608.04765v1)
- H. Xu et al. · 2026-08-05 | 贡献：引入显式语言记忆缓解长时程跨任务组合泛化不足。 | 关联：将语言记忆与 VLA 长时程规划直接绑定。

#### [Mind-VLA: Instruction-Aware Spatial Representation Alignment for Vision-Language-Action Models](http://arxiv.org/abs/2608.04633v1)
- X. Ding et al. · 2026-08-05 | 贡献：提出指令感知的 3D 空间表征对齐，关注目标物几何。 | 关联：修正 VLA 中“全局场景对齐”而忽视指令目标的缺陷。

#### [Beyond Flat Policies: Hierarchical Post-Training for Embodied Agents in Robotic Manipulation](http://arxiv.org/abs/2608.05999v1)
- H. Kong et al. · 2026-08-06 | 贡献：提出分层后训练，显式建模任务推进过程。 | 关联：突破 VLA 扁平策略表达局限。

#### [Mimir: A Neuro-Symbolic Memory System with Dynamic Grounding for Embodied Agents in Interactive Environments](http://arxiv.org/abs/2608.04933v1)
- H. Xu et al. · 2026-08-05 | 贡献：提出带动态接地的神经符号记忆系统。 | 关联：为具身 VLA 提供可解释、可更新的世界记忆接口。

#### [SkillMemo: Expert-guided Skill Memory Framework for Compositional Embodied Manipulation](http://arxiv.org/abs/2608.05970v1)
- C. Wang et al. · 2026-08-06 | 贡献：用专家引导技能记忆支持组合式具身操作。 | 关联：缓解 VLA/DP 依赖大规模轨迹数据的问题。

#### [World-to-Wrist: Task-Conditioned Future Wrist Modeling for Fine-Grained Robot Manipulation](http://arxiv.org/abs/2608.05369v1)
- Y. Pan et al. · 2026-08-05 | 贡献：用任务条件建模未来腕部局部交互，区分主视角与腕部视角。 | 关联：提升 VLA 对精细操作的预测能力。

#### [GUARD: Grounding Uncertainty and Ablation-Based Risk Detection for Diffusion-Based VLAs](http://arxiv.org/abs/2608.04510v1)
- S. Hegde et al. · 2026-08-05 | 贡献：在不修改扩散 VLA 策略的前提下检测“弱接地”动作风险。 | 关联：为 VLA 提供测试时失败检测与安全机制。

#### [Suppression Sticks, Locality Is Fragile: A Closed-Loop Target-and-Control Audit of Task-Vector Negation in VLA Policies](http://arxiv.org/abs/2608.04692v1)
- S. Wang et al. · 2026-08-05 | 贡献：系统审计任务向量减法在闭环 VLA 策略中的行为局部性。 | 关联：提示 VLA 可编辑性与安全审计的脆弱边界。

### 具身导航

#### [SpikingNav: Robust Embodied Navigation with Spiking Neural Policies](http://arxiv.org/abs/2608.05078v1)
- J. Zhang et al. · 2026-08-05 | 贡献：用脉冲神经策略实现低功耗且抗视觉扰动的具身导航。 | 关联：为导航鲁棒性和边缘部署提供新路线。

#### [SmartMage: Dynamic Modality Orchestration for 3D Scene Understanding](http://arxiv.org/abs/2608.05137v1)
- Y. Zhang et al. · 2026-08-05 | 贡献：根据查询动态编排视觉与几何模态。 | 关联：提升具身智能体在复杂 3D 场景中的多模态推理效率。

#### [OutLangSplat: 3D Language Gaussian Splatting for UAV Outdoor Scenes](http://arxiv.org/abs/2608.04560v1)
- X. Yan et al. · 2026-08-05 | 贡献：将 3D 语言高斯溅射扩展到户外无人机场景。 | 关联：拓展开放环境下语言引导的具身场景理解能力。

#### [Hijacking Robots with a Piece of Paper: A Systematic Study of Physical Prompt Injection in VLM-Controlled Robots](http://arxiv.org/abs/2608.05715v1)
- S. Samarakoon et al. · 2026-08-06 | 贡献：系统研究 VLM 机器人面临的物理提示注入攻击。 | 关联：揭示具身导航决策链中的新型安全漏洞。

#### 🔁 **【过去14天内已出现】** [SUV: Future Scene Understanding as Video Generation for End-to-End Driving](http://arxiv.org/abs/2608.03084v1)
- Y. Yuan et al. · 2026-08-04 | 贡献：用视频生成统一端到端驾驶的未来场景预测。 | 关联：为具身导航提供生成式场景理解范式。

#### 🔁 **【过去14天内已出现】** [PolyLayout: Multi-room Manhattan Layout Estimation](http://arxiv.org/abs/2608.03323v1)
- G. Hanning et al. · 2026-08-04 | 贡献：估计多房间曼哈顿布局，提升跨数据集泛化。 | 关联：为室内导航提供结构化布局先验。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [EdgeXpert: An Edge Device for Memory-Efficient LLM Inference with Mixture-of-Experts and Speculative Decoding](http://arxiv.org/abs/2608.05303v1)
- S. Ha et al. · 2026-08-05 | 贡献：面向边缘设备设计 MoE + 投机解码的存储高效 LLM 推理硬件。 | 关联：直击 FFN 层内存访问瓶颈，属 LLM 推理优化。

#### 🔁 **【过去14天内已出现】** [LLM Serving in the Wild: An Empirical Study of Frameworks, Methods, and System Designs](http://arxiv.org/abs/2608.03036v1)
- F. Majidi et al. · 2026-08-04 | 贡献：对 LLM serving 框架、方法与系统设计做实证研究。 | 关联：为推理优化提供部署侧的系统性证据。

### 多模态大模型剪枝

#### [Not All Redundant Tokens Are Alike: Analyzing Visual Token Pruning through Token Roles](http://arxiv.org/abs/2608.04483v1)
- H. Kim et al. · 2026-08-05 | 贡献：用 token 角色解释视觉 token 剪枝决策。 | 关联：为多模态大模型剪枝提供可解释性基础。

#### [HiSC: Hierarchical Spatial Clustering Token Compression for Efficient 3D Scene Understanding](http://arxiv.org/abs/2608.04610v1)
- J. Qu et al. · 2026-08-05 | 贡献：通过层级空间聚类压缩 3D VLM 冗余 token。 | 关联：将 token 压缩从 2D 视觉扩展到 3D 场景。

#### [DIVE: Dynamic Iterative Visual Evidence Construction for Efficient Vision-Language Models](http://arxiv.org/abs/2608.04496v1)
- C. Zhong et al. · 2026-08-05 | 贡献：动态迭代构建视觉证据，避免单次剪枝误删关键 token。 | 关联：改进 VLM 视觉 token 高效推理。

#### 🔁 **【过去14天内已出现】** [Adaptive Two-Stage Visual Token Pruning for Efficient Inference in Video-Language Models](http://arxiv.org/abs/2608.03112v1)
- P. Regmi et al. · 2026-08-04 | 贡献：提出自适应两阶段视频视觉 token 剪枝。 | 关联：面向视频语言模型的推理加速。

#### 🔁 **【过去14天内已出现】** [GSTEP: Global Spatio-Temporal Density-Driven Visual Token Pruning for Efficient Video Large Language Models](http://arxiv.org/abs/2608.03083v1)
- M. Zhang et al. · 2026-08-04 | 贡献：用全局时空密度驱动视频 token 剪枝。 | 关联：降低视频 LLM 的冗余计算。

### 持续学习

#### [Continual Learning in Transition](http://arxiv.org/abs/2608.06216v1)
- Z. Hou et al. · 2026-08-06 | 贡献：系统梳理持续学习新范式的扩展边界。 | 关联：为持续学习提供转型视角的总览。

#### [Continual-Learning Physics-Informed Neural Networks for Parameterized Partial Differential Equations](http://arxiv.org/abs/2608.04778v1)
- X. Chen et al. · 2026-08-05 | 贡献：将持续学习用于参数化 PDE 的 PINN 训练。 | 关联：拓展持续学习到科学计算任务。

#### [NeuMoSync: End-to-End Neuromodulatory Control for Plasticity and Adaptability in Continual Learning](http://arxiv.org/abs/2608.04358v1)
- S. Razavi Rohani et al. · 2026-08-05 | 贡献：用端到端神经调制控制可塑性与适应性。 | 关联：从生物机制出发解决持续学习遗忘。

#### [ATLAS: Adaptive Topological Learning with Abstract Successors for Continual Learning](http://arxiv.org/abs/2608.04334v1)
- R. B. Lawlor et al. · 2026-08-05 | 贡献：用抽象后继者进行自适应拓扑学习，应对环境变化。 | 关联：面向持续 RL 的迁移与鲁棒性问题。

#### [DARAD: Dual Adapters and Ranking-Aware Distillation for Continual Remote Sensing Image-Text Retrieval](http://arxiv.org/abs/2608.06059v1)
- X. Chen et al. · 2026-08-06 | 贡献：用双适配器和排序感知蒸馏解决遥感图文检索的持续学习。 | 关联：将持续学习应用于多模态分布漂移场景。

## 视觉感知

### 事件相机视觉感知

#### [Cooking beyond Frames: A Stereo Event Camera Dataset in the Kitchen](http://arxiv.org/abs/2608.04865v1)
- C. Feng et al. · 2026-08-05 | 贡献：发布厨房场景立体事件相机数据集。 | 关联：拓展事件相机到人类活动与细粒度动作感知。

#### [EvReflection: Event-Driven Micro-Dynamics for Reflection Removal](http://arxiv.org/abs/2608.06184v1)
- J. Wang et al. · 2026-08-06 | 贡献：利用事件信号中的微动态去除反射。 | 关联：展示事件相机在底层视觉任务中的新价值。

#### 🔁 **【过去14天内已出现】** [PLS-Calib: A Partial Least Squares Framework for Event Camera and Odometry Calibration under Ground Motion Constraints](http://arxiv.org/abs/2608.03296v1)
- G. Li et al. · 2026-08-04 | 贡献：提出地面运动约束下事件相机与里程计的外参标定框架。 | 关联：解决事件相机实际部署中的标定瓶颈。

### 3D 点云视觉感知

#### [Hierarchical Flow Matching for 3D Point Cloud Generation](http://arxiv.org/abs/2608.05557v1)
- L. Wang et al. · 2026-08-06 | 贡献：提出层级流匹配，同时建模全局拓扑与局部细节。 | 关联：改进 3D 点云生成的质量与效率。

#### 🔁 **【过去14天内已出现】** [Lightweight 3D Object Detection via Mamba-Based Knowledge Distillation](http://arxiv.org/abs/2608.03490v1)
- Q. C. Ninh et al. · 2026-08-04 | 贡献：用 Mamba 知识蒸馏得到轻量 LiDAR 3D 检测器。 | 关联：兼顾点云检测精度与车载计算约束。

#### 🔁 **【过去14天内已出现】** [NCGR: Noise-Conditional Gated Rectification for Camera Extrinsic Perturbations in BEV 3D Object Detection](http://arxiv.org/abs/2608.03895v1)
- W. Pan et al. · 2026-08-04 | 贡献：针对外参扰动设计噪声条件门控修正。 | 关联：提升 BEV 3D 检测对外参噪声的鲁棒性。

#### 🔁 **【过去14天内已出现】** [TDVR: Joint Text Disambiguation and Viewpoint Reasoning for Zero-Shot 3D Visual Grounding](http://arxiv.org/abs/2608.03763v1)
- Q. Du et al. · 2026-08-04 | 贡献：训练-free 联合消解文本歧义与视角推理。 | 关联：推动零样本 3D 视觉接地与点云语义理解。

## 3. 跨方向信号

- **记忆成为共同基础设施**：LLM Agent 图记忆、VLA 显式语言记忆、具身神经符号记忆同时出现，说明长期状态管理不再是单个方向的附加模块。
- **自进化与测试时决策合流**：harness 进化、自校正、自适应采样与 VLA 接地检测，正被统一为“推理期可扩展”的系统能力。
- **token 压缩从 2D 走向 3D 与多模态**：视觉 token 角色分析、3D 聚类压缩和迭代证据构建，共同推动剪枝技术的跨模态泛化。
- **具身安全与风险检测升温**：物理提示注入、VLA 接地风险、任务向量审计表明，具身系统不仅追求能力，也日益关注可控性和攻击面。

## 4. 优先精读

- **[In-Context VLA](http://arxiv.org/abs/2608.05738v1)**：最可能改变 VLA 训练范式；将语言推理注入行为克隆式策略，与实验室 VLA 方向高度直接相关。
- **[When Self-Evolution Backfires](http://arxiv.org/abs/2608.05810v1)**：揭示自进化“技能污染”相变，对 Agent 自我改进的安全设计与资源阈值判断有重要预警价值。
- **[Not All Redundant Tokens Are Alike](http://arxiv.org/abs/2608.04483v1)**：为视觉 token 剪枝提供角色级解释，支撑多模态大模型剪枝从“删冗余”走向“删哪类、为何删”。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*