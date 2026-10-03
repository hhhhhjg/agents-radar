# 实验室研究方向 Radar 2026-10-03

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 47 篇新文献 + 12 篇过去14天内已出现 | 生成时间：2026-10-03 00:52 UTC

---

## 今日总览
- LLM Agent 与多智能体 — LLM Agent 工程：10 篇新文献，聚焦工具权限、长时程记忆/信念、失败归因与本地小模型 harness。
- LLM Agent 与多智能体 — Agent 测试时扩展与自我改进：3 篇新文献，覆盖架构多样性采样、权重更新分布预测、Lean 技能进化；7 篇过去14天内已出现。
- LLM Agent 与多智能体 — LLM Agent Society：今日暂无新论文。
- 具身智能 — 视觉-语言-动作模型：10 篇新文献，动作分块、预测对齐、安全、随机 token 化、世界-动作模型与 RL 适配活跃；1 篇过去已出现。
- 具身智能 — 具身导航：9 篇新文献，VLN 自适应目标、导航世界模型、社会导航、3D 关系与驾驶可靠性并进；1 篇过去已出现。
- 模型压缩与持续学习 — LLM 剪枝与推理优化：5 篇新文献，MoE 专家剪枝、量化推理、激活稀疏、CLIP token 剪枝、并行 grounding。
- 模型压缩与持续学习 — 多模态大模型剪枝：今日暂无新论文。
- 模型压缩与持续学习 — 持续学习：10 篇新文献，LoRA 合并、双曲原型、神经进化 RL、联邦 VLM、后门净化等。
- 视觉感知 — 事件相机视觉感知：今日暂无新论文。
- 视觉感知 — 3D 点云视觉感知：1 篇新文献；1 篇过去14天内已出现。
- 视觉感知 — 3D 点云感知与跟踪：今日暂无新论文；过去标记 1 篇与点云跟踪弱相关，不纳入分方向。

## LLM Agent 与多智能体
### LLM Agent 工程
#### [PACE: Provenance-Aware Capability Enforcement for Tool-Using LLM Agents](http://arxiv.org/abs/2610.01349v1)
F. Li 等 · 2026-10-01 · 核心：面向工具调用代理的来源感知权限强制。关联：直接提升 LLM Agent 工具链安全与可控性。
#### [OverAct: Measuring and Mitigating Proactive Over-Authorization in LLM Tool-Calling Agents](http://arxiv.org/abs/2610.01508v1)
T. Zhang 等 · 2026-10-01 · 核心：度量并缓解工具调用代理的主动越权检索。关联：LLM Agent 工程中的权限边界问题。
#### [DeFA: Dependency-Guided Failure Attribution for LLM Agents](http://arxiv.org/abs/2610.01256v1)
B. Deng 等 · 2026-10-01 · 核心：依赖引导的代理失败归因。关联：提升多步执行的可诊断性。
#### [Mem++: Non-Destructive Memory for Long-Term Organizational LLM Agents](http://arxiv.org/abs/2610.02002v1)
A. Yehia 等 · 2026-10-01 · 核心：面向长期组织代理的非破坏性版本化记忆。关联：长时程记忆设计。
#### [Beyond Memory: Harnessing Long-Horizon Agents with Explicit Belief States](http://arxiv.org/abs/2610.01415v1)
Y. Luo 等 · 2026-10-01 · 核心：用显式信念状态维护世界理解。关联：长时程代理状态组织。
#### [Mingbird: A Local-First Agent Harness Enabling Small Open Models to Complete Real Tasks](http://arxiv.org/abs/2610.02001v1)
H. Wang 等 · 2026-10-01 · 核心：本地优先 harness 提升 2-9B 小模型真实任务完成率。关联：轻量 LLM Agent 工程。

### Agent 测试时扩展与自我改进
#### [Architectural Sampling: Test-Time Scaling via Computational Diversity in Frozen Vision-Language Models](http://arxiv.org/abs/2610.01687v1)
A. Singh 等 · 2026-10-01 · 核心：训练-free、通过计算路径多样性进行测试时扩展。关联：测试时扩展新维度。
#### [Learning to Predict Distributions over Weight Updates for Test-Time Adaptation](http://arxiv.org/abs/2610.01934v1)
A. A. Khan 等 · 2026-10-01 · 核心：仅用查询预测权重更新分布以做测试时适配。关联：测试时自我改进。
#### [SkillEvoLean: Mutation-enhanced skill evolution for Lean provers](http://arxiv.org/abs/2610.01799v1)
K. Zhou 等 · 2026-10-01 · 核心：突变增强的技能进化用于 Lean 证明代理。关联：无参数更新的自我改进。
#### 🔁 **【过去14天内已出现】** [Towards Better Exploration in Sequential Test-Time Scaling](http://arxiv.org/abs/2609.39632v1)
🔁 **【过去14天内已出现】** J. Rance 等 · 2026-09-30 · 核心：改善顺序测试时扩展的探索。关联：TTS 长时程探索。
#### 🔁 **【过去14天内已出现】** [How Much Can Language Models Gain from Test-Time Computation?](http://arxiv.org/abs/2610.01110v1)
🔁 **【过去14天内已出现】** B. Yang 等 · 2026-10-01 · 核心：基准评估测试时计算增益与选择成本。关联：TTS 预算评估。

## 具身智能
### 视觉-语言-动作模型
#### [ATI-VLA: Action-Centric Predictive Vision-Language-Action Models via Actionable Alignment Then Adaptive Injection](http://arxiv.org/abs/2610.01741v1)
Y. Zhu 等 · 2026-10-01 · 核心：先可操作对齐再自适应注入的预测式 VLA。关联：提升预测式 VLA 的动作 grounding。
#### [TOAST: Stochastic Robot Action Tokenization for Autoregressive Vision-Language-Action Models](http://arxiv.org/abs/2610.00899v1)
K. Shirai 等 · 2026-10-01 · 核心：面向自回归 VLA 的随机动作 token 化。关联：动作表示与生成。
#### [NarrativeFlow: Flow-Based Vision-Language-Action Model Using Robot Velocity Fields](http://arxiv.org/abs/2610.00981v1)
S. Kobayashi 等 · 2026-10-01 · 核心：用机器人速度场作 embodiment-agnostic 表示。关联：跨平台语言条件操作。
#### [UniWAM: Unified World-Action Model](http://arxiv.org/abs/2610.02054v1)
J. Chen 等 · 2026-10-01 · 核心：统一世界建模与动作监督。关联：VLA 与世界模型融合。
#### [Divide-and-Remember: Recursive Action-Relevant Memory for Long-Horizon VLA Policies](http://arxiv.org/abs/2610.00982v1)
X. Yu 等 · 2026-10-01 · 核心：面向长时程 VLA 的递归动作相关记忆。关联：历史依赖操作。
#### 🔁 **【过去14天内已出现】** [Game-Guided Skill Discovery through Self-Play for Playable Agent Control](http://arxiv.org/abs/2609.40137v1)
🔁 **【过去14天内已出现】** S. Rho 等 · 2026-09-30 · 核心：自博弈发现可玩技能。关联：VLA/具身控制的技能抽象。

### 具身导航
#### [NavHarness: Adaptive Goals for Agentic Vision-Language Navigation](http://arxiv.org/abs/2609.39915v1)
H. Shi 等 · 2026-09-30 · 核心：为智能体 VLN 提供自适应目标。关联：视觉语言导航。
#### [DiffWAM: A Fast and Efficient Navigation World Action Model](http://arxiv.org/abs/2609.39763v1)
M. Zhu 等 · 2026-09-30 · 核心：快速导航世界-动作模型。关联：导航决策与未来视觉预测。
#### [STARS: From Spatiotemporal Dynamics to Social Representations in Human-Robot Interaction](http://arxiv.org/abs/2609.40245v2)
N. Tsoi 等 · 2026-09-30 · 核心：社会合规导航的时空-社会表征。关联：人机交互导航。
#### [LOCI: Spatial Linear Memory for Streaming World Models](http://arxiv.org/abs/2609.40222v1)
J. Xia 等 · 2026-09-30 · 核心：流式世界模型的线性空间记忆。关联：导航中的长期空间检索。
#### 🔁 **【过去14天内已出现】** [ASENA: Self-evolving Agents for Embodied Navigation](http://arxiv.org/abs/2609.39207v1)
🔁 **【过去14天内已出现】** A.-C. Cheng 等 · 2026-09-30 · 核心：自进化编码代理连接机器人传感与经验。关联：具身导航自我改进。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### [MoRA: MoE Pruning via Router Bias Learning and Expert Approximation](http://arxiv.org/abs/2610.00367v1)
Y. Sun 等 · 2026-09-30 · 核心：路由偏置学习与专家近似做 MoE 剪枝。关联：专家压缩与内存降低。
#### [RATIO: Reasoning Analysis and Token-level Inference Optimization for Quantized Reasoning Models](http://arxiv.org/abs/2609.39801v1)
C. Bao 等 · 2026-09-30 · 核心：量化推理模型的 token 级推理优化。关联：量化与推理解码优化。
#### [TopK-Guided: Adaptive, Budget-Aware Activation Sparsity for Efficient LLM Inference](http://arxiv.org/abs/2610.01763v1)
M. Agarwalla 等 · 2026-10-01 · 核心：预算感知的自适应激活稀疏。关联：LLM 推理加速。
#### [GroundAnything: Reconciling Parallel Decoding with Precise Visual Grounding at Flash Speed](http://arxiv.org/abs/2609.39600v1)
Q. Yu 等 · 2026-09-30 · 核心：并行解码实现快速视觉 grounding。关联：多模态推理优化。
#### 🔁 **【过去14天内已出现】** [Sparse-WAM: Accelerating World Action Models via Action-Guided Sparse Imagination](http://arxiv.org/abs/2609.38984v1)
🔁 **【过去14天内已出现】** X. Xie 等 · 2026-09-30 · 核心：动作引导稀疏想象加速世界-动作模型。关联：VLA/世界模型推理压缩。

### 持续学习
#### [ChainLoRA: Geometry-Preserving Task Vector Merging for Continual Learning in LLMs](http://arxiv.org/abs/2610.00431v1)
H. Yin 等 · 2026-09-30 · 核心：保持几何的任务向量合并，replay-free 持续学习。关联：LLM 持续 PEFT。
#### [Hyperbolic Prototype Routing for Rehearsal-Free Class-Incremental Learning](http://arxiv.org/abs/2609.39550v1)
H. Zhao 等 · 2026-09-30 · 核心：双曲原型路由缓解类增量遗忘。关联：无回放 CIL。
#### [Continual Reinforcement Learning with Neuroevolution](http://arxiv.org/abs/2610.01583v1)
E. Nisioti 等 · 2026-10-01 · 核心：神经进化平衡 RL 适应与遗忘。关联：持续 RL。
#### [Dynamic LoRA-Experts and Prototype-Ensemble Matching for Class-Incremental Learning](http://arxiv.org/abs/2609.39839v1)
H. Zhao 等 · 2026-09-30 · 核心：动态 LoRA 专家与原型集成匹配。关联：类增量 PEFT。
#### [Efficient Task Adaptation in Large Language Models: A Survey of Weight-Based, Prompt-Based, and Embedding-Based Adaptations](http://arxiv.org/abs/2610.00928v1)
J. Park 等 · 2026-10-01 · 核心：系统综述三类高效任务适配。关联：持续学习与 PEFT 全景。

## 视觉感知
### 3D 点云视觉感知
#### [GenCOPE: Syn2Real Generalized Category-Level Object Pose Estimation for Robotic Picking](http://arxiv.org/abs/2610.01758v1)
J. Liu 等 · 2026-10-01 · 核心：合成到真实泛化的类别级物体位姿估计。关联：机器人 3D 场景理解与点云感知。
#### 🔁 **【过去14天内已出现】** [Atomizer-IO: Beyond Pixels, Patches and Grids](http://arxiv.org/abs/2609.40320v1)
🔁 **【过去14天内已出现】** H. R. de Turckheim 等 · 2026-09-30 · 核心：面向非规则传感数据的集合式视觉架构。关联：点云/非网格视觉表征。

## 跨方向信号
1. Agent 安全与可审计并进：PACE、OverAct、Chaining Skills、Action Settlement 共同把权限、来源、技能链和结算顺序推向工程核心。
2. 长时程状态显式化：Mem++、Beyond Memory、Mimir、DeFA 从记忆、信念、物理约束和依赖归因提升长时程可靠性。
3. VLA 与世界-动作模型融合：UniWAM、NarrativeFlow、ATI-VLA、DiffWAM 显示“预测未来”正与动作生成统一。
4. PEFT/持续学习与压缩交叉：ChainLoRA、Dynamic LoRA、Hyperbolic、MoRA、RATIO 共享低秩、专家、量化与路由思路。
5. 测试时扩展转向多样性与可验证性：Architectural Sampling、SkillEvoLean、TTS 曲线认证从采样量转向路径多样和可信预算。

## 优先精读
1. [PACE](http://arxiv.org/abs/2610.01349v1)：工具调用代理安全是落地关键，来源感知权限强制提供可操作框架。
2. [UniWAM](http://arxiv.org/abs/2610.02054v1)：统一世界建模与动作监督，可能影响 VLA 与世界模型下一阶段设计。
3. [ChainLoRA](http://arxiv.org/abs/2610.00431v1)：replay-free 几何保持任务向量合并，对持续 PEFT 与压缩部署都有直接启发。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*