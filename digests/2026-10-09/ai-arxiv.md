# 实验室研究方向 Radar 2026-10-09

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 35 篇新文献 + 21 篇过去14天内已出现 | 生成时间：2026-10-09 01:39 UTC

---

## 今日总览
- **LLM Agent 工程**（主方向：LLM Agent 与多智能体）：10篇新文献，聚焦工具调用策略合规、持久记忆治理、闭环软件工程评测、自我进化多智能体 RL、上下文强化学习与生成式 UI。
- **Agent 测试时扩展与自我改进**（主方向：LLM Agent 与多智能体）：2篇新文献，分别关注 OCR 自博弈残差修正、RTS 中 bandit 策略选择；另有3篇过去14天已出现。
- **LLM Agent Society**（主方向：LLM Agent 与多智能体）：今日暂无新论文；1篇过去14天已出现，涉及风险规避多群体平均场博弈。
- **视觉-语言-动作模型**（主方向：具身智能）：10篇新文献，覆盖几何 CoT、腕相机适配、语言敏感性、指令接地、物理动态、技能初始化、捷径去除与视触觉策略。
- **具身导航**（主方向：具身智能）：3篇新文献，涉及小物体终身导航、世界建模、相机轨迹生成；另有7篇过去14天已出现。
- **LLM 剪枝与推理优化**（主方向：模型压缩与持续学习）：今日暂无新论文；4篇过去14天已出现，关注 token 剪枝安全与弹性视觉表示。
- **多模态大模型剪枝**（主方向：模型压缩与持续学习）：今日暂无新论文；3篇过去14天已出现，聚焦 VLA 视觉 token 剪枝与推理加速认证。
- **持续学习**（主方向：模型压缩与持续学习）：8篇新文献，涵盖奇异向量选择、功能库演化、免持续训练、层选择性微调、技能库共演化等。
- **事件相机视觉感知**（主方向：视觉感知）：今日暂无新论文；2篇过去14天已出现，涉及 BNN 事件处理与事件流光度立体。
- **3D 点云视觉感知**（主方向：视觉感知）：2篇新文献，涉及 2D floormap 空间音视上下文与文本/关键帧相机轨迹；1篇过去14天已出现。
- **3D 点云感知与跟踪**（主方向：视觉感知）：1篇新文献，提出点聚焦注意力与上下文扫描状态空间结合的点云表示。

## LLM Agent 与多智能体

### LLM Agent 工程
#### [Safe, Persistent, and Evolving Agent Harness for Understanding Partially Observable Worlds](http://arxiv.org/abs/2610.11552v1)
Gao et al., 2026-10-08。提出安全、持久、可演进的 agent harness；关联部分可观测企业工作流的策略合规与长期工具调用。
#### [NOMOS: Compiling Written Policies into Statically Verified Tool-Call Gates for LLM Agents](http://arxiv.org/abs/2610.11030v1)
Yu et al., 2026-10-08。将书面政策编译为静态验证的 tool-call gates；关联 LLM Agent 工具调用治理。
#### [What to Admit and How to Present: Governing Persistent Memory in LLM Agents](http://arxiv.org/abs/2610.11188v1)
Liu et al., 2026-10-08。区分持久记忆的“准入”与“呈现”治理；关联个性化与跨域泄漏、谄媚风险。
#### [Closed-loop evaluation of LLM agents for embedded software development](http://arxiv.org/abs/2610.11447v1)
García-Carrasco et al., 2026-10-08。面向嵌入式软件构建-测试-修复闭环评测编码代理；关联真实工程反馈下的代理可靠性。
#### [Memory Type Varies: Empowering LLM Agents for Long-Term Memory with Diverse Strategies](http://arxiv.org/abs/2610.11573v1)
Wen et al., 2026-10-08。按记忆类型采用多样策略增强长期记忆；关联检索式记忆的异构处理。
#### [SynCo: Data Synthesis Co-Training for Self-Evolving LLMs via Multi-Agent Reinforcement Learning](http://arxiv.org/abs/2610.11345v1)
Yang et al., 2026-10-08。多智能体 RL 协同数据合成与共同训练；关联训练经验随能力演化。
#### [Do LLMs Learn from Rewards in Context? : Rethinking the role of reward in In-Context Reinforcement Learning](http://arxiv.org/abs/2610.11152v1)
Kwon et al., 2026-10-08。检验上下文强化学习中奖励是否真正起作用；关联推理时经验积累而非参数更新。
#### [When Interfaces Speak: Data-Aware Generative UI Harness for Active Interaction](http://arxiv.org/abs/2610.11123v1)
Li et al., 2026-10-08。提出数据感知生成式 UI harness；关联缓解复杂任务中的文本交互认知过载。

### Agent 测试时扩展与自我改进
#### [SP-DocReader: Difference-Aware Self-Play for Precise Document OCR](http://arxiv.org/abs/2610.11148v1)
Liao et al., 2026-10-08。用差异感知自博弈修正 OCR 残差错误；关联测试时自我改进。
#### [Constrained Command-Conditioned Reinforcement Learning with Bandit Strategy Selection in Real-Time Strategy Games](http://arxiv.org/abs/2610.11663v1)
Leenders et al., 2026-10-08。分离战略指令选择与单位控制，并用 bandit 选择策略；关联测试时策略适应。
#### 🔁 **【过去14天内已出现】** [From Pareto to Preference: Personalized Test-Time Scaling via Amortized Agentic Policy Discovery](http://arxiv.org/abs/2610.09684v1)
🔁 **【过去14天内已出现】** Wang et al., 2026-10-07。个性化测试时扩展与摊销策略发现；关联 TTS 效率与用户偏好。
#### 🔁 **【过去14天内已出现】** [ServeLearnBench: How Well Can Agents Self-Improve from Serving Experience?](http://arxiv.org/abs/2610.07792v1)
🔁 **【过去14天内已出现】** Zheng et al., 2026-10-06。评测 agent 从服务经验自我改进；关联持续学习 harness。
#### 🔁 **【过去14天内已出现】** [Coupled but Late: Turn-Taking Between Full-Duplex Speech Models in Unscripted Dialogue](http://arxiv.org/abs/2610.08683v1)
🔁 **【过去14天内已出现】** Zhu et al., 2026-10-06。分析全双工语音模型彼此对话的轮换时延；关联自博弈与 agent 社会中的时序误差。

### LLM Agent Society
#### 🔁 **【过去14天内已出现】** [Beyond Nominal Equilibria: Risk-Averse Multi-Population Mean-Field Games](http://arxiv.org/abs/2610.09244v1)
🔁 **【过去14天内已出现】** Jeloka et al., 2026-10-07。风险规避多群体平均场博弈；关联大规模异构多智能体社会的均衡建模。

## 具身智能

### 视觉-语言-动作模型
#### [WARP-VLA: Wrist-Camera Adaptation for View-Robust Policy Execution in Vision-Language-Action Models](http://arxiv.org/abs/2610.11508v1)
Lee et al., 2026-10-08。腕相机适配实现视角鲁棒策略执行；关联跨相机配置部署。
#### [Rewiring Semantics, Dynamics, and Control: A Simple yet Effective Action-Centric Tri-Stream Transformer](http://arxiv.org/abs/2610.11416v1)
Luo et al., 2026-10-08。动作中心三流 Transformer 重连语义、动态与控制；关联补足 VLM 物理动态先验。
#### [Experience-Guided Initiation Search for Learned Skills in Skill Composition](http://arxiv.org/abs/2610.11418v1)
Li et al., 2026-10-08。经验引导搜索技能组合的初始化配置；关联冻结 VLA 策略在新环境可靠执行。
#### [OpenViTac: Learning and Benchmarking Visuo-Tactile Policies in a Unified Sim-and-Real Framework](http://arxiv.org/abs/2610.10384v1)
Wu et al., 2026-10-07。统一仿真-真实视触觉策略基准；关联触觉反馈增强 VLA 物理交互。
#### [Explicit Geometric Chain-of-Thought for Vision-Language-Action in Autonomous Driving](http://arxiv.org/abs/2610.10390v1)
Gui et al., 2026-10-07。显式几何 CoT 注入 3D 几何线索；关联驾驶 VLA 的 2D 语义-3D 动作失配。
#### [Rephrase Before You Act: Characterizing and Mitigating Language Sensitivity in Vision-Language-Action Models](http://arxiv.org/abs/2610.10526v1)
Watts et al., 2026-10-07。刻画并缓解 VLA 指令措辞敏感性；关联语言鲁棒性。
#### [Do Vision-Language-Action Models Understand Instructions? A Mechanistic Interpretability Study on Language Grounding](http://arxiv.org/abs/2610.10178v1)
Wulff et al., 2026-10-07。机制可解释性研究 VLA 语言接地；关联动作是否依赖指令。
#### [When Listening Becomes Easier: Scrubbing Visual Cues for Shortcut-Free VLAs](http://arxiv.org/abs/2610.10912v1)
Gerigk et al., 2026-10-07。擦除视觉捷径线索以减少 VLA 虚假相关；关联观点与背景鲁棒。
#### [iAm.md: Robot Skill Self-Assessment through Agentic Introspection for Unknown Open-Vocabulary Domains](http://arxiv.org/abs/2610.10962v1)
Guarino et al., 2026-10-07。通过代理内省进行机器人技能自评估；关联开放词汇具身任务。
#### [Q-Learning with Scalar Adjoint Matching](http://arxiv.org/abs/2610.10437v1)
Dong et al., 2026-10-07。标量伴随匹配 Q 学习微调 flow 策略；关联 VLA/机器人策略 RL 提升。

### 具身导航
#### [Lifelong small-object navigation in changing object layouts: a benchmark and method](http://arxiv.org/abs/2610.10125v1)
Huang et al., 2026-10-07。提出终身小物体导航基准与方法；关联变化布局中长期导航。
#### [IntactWorld: Joint World Modeling with Intact Features](http://arxiv.org/abs/2610.11174v1)
Tan et al., 2026-10-08。完整特征联合世界建模；关联世界模型支持具身导航。
#### 🔁 **【过去14天内已出现】** [Adaptive Risk-Certified Event-Triggered Replanning for Dynamic Navigation](http://arxiv.org/abs/2610.09302v1)
🔁 **【过去14天内已出现】** Suganda et al., 2026-10-07。风险认证事件触发重规划；关联动态导航安全。
#### 🔁 **【过去14天内已出现】** [SiGNgapore - An Interactive Dataset for Sign-based Visual Navigation](http://arxiv.org/abs/2610.09488v2)
🔁 **【过去14天内已出现】** Zimmerman et al., 2026-10-07。基于标志的视觉导航交互数据集；关联利用环境导航标识。
#### 🔁 **【过去14天内已出现】** [ActiveLang: Active Open-Vocabulary 3D Mapping with Semantic-Uncertainty-Guided Exploration](http://arxiv.org/abs/2610.09518v1)
🔁 **【过去14天内已出现】** Chen et al., 2026-10-07。语义不确定性引导的主动开放词汇 3D 建图；关联未知环境导航。
#### 🔁 **【过去14天内已出现】** [SearchWorld: Spatial Value-Grounded Imagination for UAV Object Search via World Models](http://arxiv.org/abs/2610.09335v1)
🔁 **【过去14天内已出现】** Ji et al., 2026-10-07。空间价值接地想象世界模型用于 UAV 物体搜索；关联部分可观测搜索。

## 模型压缩与持续学习

### LLM 剪枝与推理优化
#### 🔁 **【过去14天内已出现】** [Understanding and Mitigating Token-Pruning-Induced Vulnerabilities in VLMs](http://arxiv.org/abs/2610.09703v1)
🔁 **【过去14天内已出现】** Wang et al., 2026-10-07。首次系统评估 token 剪枝对 VLM 安全影响；关联剪枝推理安全风险。
#### 🔁 **【过去14天内已出现】** [VisionWeave: Weaving Elastic Visual Representations as a Native Capability of MLLMs](http://arxiv.org/abs/2610.07987v1)
🔁 **【过去14天内已出现】** Feng et al., 2026-10-06。将弹性视觉表示作为 MLLM 原生能力；关联视觉 token 成本优化。

### 多模态大模型剪枝
#### 🔁 **【过去14天内已出现】** [VLA-ACL: Action-Consistent Visual Token Pruning for Efficient Vision-Language-Action Models](http://arxiv.org/abs/2610.08133v2)
🔁 **【过去14天内已出现】** Du et al., 2026-10-06。动作一致视觉 token 剪枝加速 VLA；关联多模态实时部署。
#### 🔁 **【过去14天内已出现】** [DIPrune: Task-Aware Token Pruning with Dual Importance for Efficient Multimodal Language Models](http://arxiv.org/abs/2610.08341v1)
🔁 **【过去14天内已出现】** Yang et al., 2026-10-06。任务感知双重要性 token 剪枝；关联缓解语义退化。
#### 🔁 **【过去14天内已出现】** [CARE: Certifying Acceleration for Vision-Language-Action Inference](http://arxiv.org/abs/2610.08917v1)
🔁 **【过去14天内已出现】** Liu et al., 2026-10-06。认证 VLA 推理加速；关联加速与安全保证。

### 持续学习
#### [Stability-Plasticity Balance via Singular-Vector Selection in LLM Continual Learning](http://arxiv.org/abs/2610.11076v1)
Wang et al., 2026-10-08。奇异向量选择平衡稳定性-可塑性；关联 LLM 持续学习 PEFT 冲突。
#### [From a Prompt to Repertoires: Evolving Functional REpertoires Enable LLM Continual Learning](http://arxiv.org/abs/2610.11373v1)
Liu et al., 2026-10-08。从提示到功能库演化实现 LLM 持续学习；关联提示操作式持续学习。
#### [Continual Learning without Continual Training](http://arxiv.org/abs/2610.10379v1)
Narayanan et al., 2026-10-07。提出免持续训练的持续学习；关联避免持续优化。
#### [Where to Adapt Matters: Layer-Selective Fine-Tuning for Capability Retention](http://arxiv.org/abs/2610.11620v1)
Pang et al., 2026-10-08。层选择性微调保留通用能力；关联 PEFT 能力保持。
#### [EvoKnow: Continual Knowledge Evolution for AI-Generated Image Detection](http://arxiv.org/abs/2610.11381v1)
Peng et al., 2026-10-08。持续知识演化用于 AI 生成图像检测；关联新生成域持续适应。
#### [UniSkill: Learning Actor-Aligned Skill Proposals for an Evolving Policy](http://arxiv.org/abs/2610.10164v1)
Lu et al., 2026-10-07。学习 actor 对齐技能提议供演化策略；关联技能库与策略共演化。
#### [Tracing the Thoughts of a Coding Agent Playing ARC-AGI-3: Lessons for Continual Learning](http://arxiv.org/abs/2610.11450v1)
Wu et al., 2026-10-08。追踪编码代理 ARC-AGI-3 思考；关联固定模型与工件状态下的持续学习。
#### 🔁 **【过去14天内已出现】** [Are Parameter-Efficient Fine-tuning Methods Really Different?](http://arxiv.org/abs/2610.09122v1)
🔁 **【过去14天内已出现】** Li et al., 2026-10-06。比较六种 PEFT 方法差异；关联任务性能与遗忘。

## 视觉感知

### 事件相机视觉感知
#### 🔁 **【过去14天内已出现】** [Bringing BNNs to Fast Event Processing](http://arxiv.org/abs/2610.09873v1)
🔁 **【过去14天内已出现】** Longour et al., 2026-10-07。BNN 用于快速事件处理；关联资源受限事件视觉。
#### 🔁 **【过去14天内已出现】** [PIE-PS: Photometric Stereo from Physical Irradiance Event Streams](http://arxiv.org/abs/2610.08188v1)
🔁 **【过去14天内已出现】** Meng et al., 2026-10-06。从物理辐照事件流做光度立体；关联事件相机高动态范围。

### 3D 点云视觉感知
#### [FloorSAV: Elucidating Spatial Audio-Visual Context with 2D Floormap for AV-LLMs](http://arxiv.org/abs/2610.11310v1)
Kim et al., 2026-10-08。用 2D floormap 阐明空间音视上下文；关联 AV-LLM 全局几何。
#### [TKCAM: Text and Keyframe to Camera Trajectory Generation](http://arxiv.org/abs/2610.11105v1)
Yang et al., 2026-10-08。文本与关键帧生成相机轨迹；关联 3D 场景理解与可控相机运动。
#### 🔁 **【过去14天内已出现】** [Sparse2comm: Towards Robust Cooperative 3D Object Detection](http://arxiv.org/abs/2610.08573v1)
🔁 **【过去14天内已出现】** Yang et al., 2026-10-06。鲁棒合作 3D 目标检测；关联带宽与丢包下点云协同感知。

### 3D 点云感知与跟踪
#### [Point-Focused Attention Meets Context-Scan State Space: Robust Biological Visual Perception for Point Cloud Representation](http://arxiv.org/abs/2610.11342v1)
Qu et al., 2026-10-08。结合点聚焦注意力与上下文扫描状态空间；关联点云局部-全局表示。

## 跨方向信号
- VLA 正从语义理解转向几何一致性、语言鲁棒性、物理动态与触觉反馈，强调真实部署中的视角与指令变化。
- LLM Agent 工程与 Agent Society 共同关注治理：策略合规、记忆准入/呈现、群体偏袒与风险规避均衡。
- 持续学习与 PEFT 聚焦稳定性-可塑性、层选择、功能库/技能库演化，以降低灾难遗忘。
- 多模态剪枝与推理优化集中解决 token 冗余、安全性和 VLA 实时推理认证。
- 具身导航、世界模型与 3D 空间感知加速融合，主动建图、UAV 搜索和相机轨迹生成成为交叉点。

## 优先精读
#### - [Safe, Persistent, and Evolving Agent Harness for Understanding Partially Observable Worlds](http://arxiv.org/abs/2610.11552v1)：直接面向企业工作流中的策略合规、隐藏副作用和长期任务，是 LLM Agent 工程落地的核心问题。
#### - [WARP-VLA: Wrist-Camera Adaptation for View-Robust Policy Execution in Vision-Language-Action Models](http://arxiv.org/abs/2610.11508v1)：解决跨相机配置部署的 VLA 视角鲁棒性，贴近真实机器人部署痛点。
#### - [Stability-Plasticity Balance via Singular-Vector Selection in LLM Continual Learning](http://arxiv.org/abs/2610.11076v1)：以奇异向量选择处理 LLM 持续微调的稳定性-可塑性矛盾，对模型压缩与持续学习方向有方法启发。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*