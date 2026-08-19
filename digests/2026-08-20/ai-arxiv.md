# 实验室研究方向 Radar 2026-08-20

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 26 篇新文献 + 7 篇过去14天内已出现 | 生成时间：2026-08-19 22:18 UTC

---

# 研究方向 Radar

## 今日总览

- **LLM Agent 工程**（LLM Agent 与多智能体）：今日新增 10 篇论文，harness 正成为训练、安全、评估与权限管理的核心抽象。
- **Agent 测试时扩展与自我改进**（LLM Agent 与多智能体）：今日新增 2 篇，分别提出低 GPU 成本的 long-horizon agent 优化方法与在线学习理论框架。
- **LLM Agent Society**（LLM Agent 与多智能体）：今日暂无新论文。
- **视觉-语言-动作模型**（具身智能）：今日新增 8 篇，覆盖立体 VLA 接口、VLA 安全、测试时注意力干预、语义意图保持、驾驶感知增强等。
- **具身导航**（具身智能）：今日新增 2 篇，聚焦 VLN 条件分支诊断与 VLM 高效导航调度。
- **LLM 剪枝与推理优化**（模型压缩与持续学习）：今日暂无新论文。
- **多模态大模型剪枝**（模型压缩与持续学习）：今日暂无新论文。
- **持续学习**（模型压缩与持续学习）：今日新增 4 篇、过去 14 天已出现 4 篇，记忆调度、经验链与结构生长是主线。
- **事件相机视觉感知**（视觉感知）：今日暂无新论文；有 1 篇过去 14 天已出现的重复文献。
- **3D 点云视觉感知**（视觉感知）：今日暂无新论文；有 1 篇过去 14 天已出现的重复文献。
- **3D 点云感知与跟踪**（视觉感知）：今日暂无新论文。

---

## LLM Agent 与多智能体

### LLM Agent 工程

#### [Agent Lightning v1.0: Towards Harnessed Agentic RL](http://arxiv.org/abs/2608.17528v1)
**He et al., 2026-08-18**：提出解耦架构，通过 LLM 端点代理将任意 agent 接入 RL 训练。关联：直接推动 harness-native agentic RL 的工程化。

#### [Task-Aware Harness Provisioning for LLM Agents in Mission-Critical Infrastructure Operations](http://arxiv.org/abs/2608.17433v1)
**Lin et al., 2026-08-18**：按任务动态配置 harness 的信息访问、工具与动作权限，替代固定全量暴露。关联：解决关键基础设施中 agent harness 的权限管理问题。

#### [HarnessRisk: A Lifecycle-Oriented Benchmark for Agent Harness Safety](http://arxiv.org/abs/2608.17597v1)
**Bai et al., 2026-08-18**：提出覆盖 agent harness 全生命周期的安全评测基准。关联：为 harness 安全评估提供系统化工具。

#### [LEGO-RL: Harness-Native Reinforcement Learning for Coding Agents](http://arxiv.org/abs/2608.17393v1)
**Du et al., 2026-08-18**：将编码 agent 的 RL 训练与原生 harness 执行环境对齐，缓解环境不可微问题。关联：弥补 harness 执行与策略梯度训练之间的工程断层。

#### [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](http://arxiv.org/abs/2608.17933v1)
**Jiang et al., 2026-08-18**：构建自进化 LLM agent，自动选择与调整时序变点检测算法。关联：展示 agent 自主工具选择与自我改进的工程范式。

#### [StartupBench: Benchmarking General-Purpose Agents on Market-Validated End-to-End Workflows](http://arxiv.org/abs/2608.17800v1)
**Zhu et al., 2026-08-18**：用市场验证的真实端到端工作流评测通用 agent，替代研究者自选任务。关联：为 agent 工程能力提供更贴近真实需求的基准。

#### [D²ACCI: A Dual-Loop Diagnostic Protocol for Evidence-Preserving Agent Memory](http://arxiv.org/abs/2608.17756v1)
**Liu et al., 2026-08-18**：双循环诊断协议用于定位 agent 持久记忆管线中的多阶段故障。关联：提升 agent 记忆系统的可诊断性与证据可溯性。

#### [Synthesizing Feature Extractors: An Agentic Approach for Algorithm Selection](http://arxiv.org/abs/2608.17170v1)
**Xia et al., 2026-08-17**：用 LLM agent 自动合成问题特征提取器，降低人工设计瓶颈。关联：将 agentic 方法引入求解器选择的自动化流程。

#### [GraphWake: Group Polarization via Memory-Mediated Polarization Cascade in LLM-Agent Communities](http://arxiv.org/abs/2608.17665v1)
**Bu et al., 2026-08-18**：揭示攻击者可通过操纵共享记忆在 LLM agent 社区中引发群体极化级联。关联：为多 agent 社区安全提供记忆层面的攻击面分析。

### Agent 测试时扩展与自我改进

#### [Agentic ESOpt: Fine-Tuning Long-Horizon LLM Agents with Minimal GPU Requirements](http://arxiv.org/abs/2608.17310v1)
**Zheng et al., 2026-08-18**：以轻量优化替代 RL 反向传播，实现长时程 agent 的高效微调。关联：为 agent 自我改进提供低资源消耗的新路径。

#### [The concentration game: Bayesian updating, regret, and information](http://arxiv.org/abs/2608.18061v1)
**Balsubramani, 2026-08-18**：用二人零和博弈统一贝叶斯更新与指数权重遗憾，导出集中不等式的变分形式。关联：为在线决策与测试时学习提供统一理论视角。

---

## 具身智能

### 视觉-语言-动作模型

#### [EATR-Stereo: Embodiment-Aware Routing of Paired Stereo Evidence for Humanoid Vision-Language-Action Control](http://arxiv.org/abs/2608.17453v1)
**Wu et al., 2026-08-18**：面向头戴双目相机的人形 VLA 控制，提出具身感知的双目证据路由接口。关联：直接改进人形 VLA 的立体视觉输入融合。

#### [LIBERO-VIFO: Benchmarking the Capability and Safety of Visual Cue Following in Vision-Language-Action Models](http://arxiv.org/abs/2608.17600v1)
**Qian et al., 2026-08-18**：构建 VLA 模型对授权/未授权视觉线索跟随能力的评测基准。关联：首次将视觉线索安全维度纳入 VLA 评测。

#### [Inference-Time Attention Steering for Vision-Language-Action Driving Models](http://arxiv.org/abs/2608.17095v1)
**Prasad et al., 2026-08-17**：在推理时对视觉注意力施加有界偏置，重定向 VLA 驾驶模型关注安全关键目标。关联：免训练的 VLA 推理时注意力干预。

#### [CompCPZ: Preserving Multi-Modal Intent in Language-Guided Robot Manipulation](http://arxiv.org/abs/2608.17717v1)
**Zhang et al., 2026-08-18**：保持语言指令中的析取多模态意图，避免“几何成功但语义失败”。关联：提升 VLA 语言条件策略的语义对齐能力。

#### [Calibrated Predictive Safety for Heterogeneous Robots: An Action-Conditioned JEPA Framework with Model-Based Safety Shields](http://arxiv.org/abs/2608.17496v1)
**Zhong et al., 2026-08-18**：用动作条件 JEPA 世界模型加模型安全盾，为 VLA 策略提供执行时安全保证。关联：弥补 VLA 策略缺乏执行时保障的短板。

#### [Reuse Before You Retrieve: Diagnosing Headroom and Complementarity for Test-Time Augmentation of Embodied Multimodal Policies](http://arxiv.org/abs/2608.17484v1)
**Jeong & Yoon, 2026-08-18**：诊断 VLA 测试时增强应选择额外采样还是引入外部演示。关联：为 VLA 测试时干预提供决策依据。

#### [HODAgent: Towards On-Demand, Responsive Humanoids for Physical World Human Interaction](http://arxiv.org/abs/2608.17584v1)
**Chen et al., 2026-08-18**：提出人形服务机器人的 System-2 半双工架构（Env-Interactor/Planner/Executor/记忆）。关联：VLA 在物理世界人机交互中的完整系统集成。

#### [Plug-and-Play Traffic Element Awareness for End-to-End Autonomous Driving](http://arxiv.org/abs/2608.18035v1)
**Zhang et al., 2026-08-18**：以即插即用方式为端到端 VLA 驾驶模型引入红绿灯与标志感知。关联：补足 VLA 驾驶模型对静态交通元素的注意力短板。

### 具身导航

#### [If, Then, Otherwise: Diagnosing Conditional Branching in Vision-Language Navigation](http://arxiv.org/abs/2608.17318v1)
**Lee et al., 2026-08-18**：诊断 VLN 智能体对“若条件成立则走 A，否则走 B”的条件分支指令理解。关联：揭示具身导航在复杂状态依赖指令上的推理缺口。

#### [Embodied-Navigator: Point, Think, Memorize, and Align for Efficient Navigation](http://arxiv.org/abs/2608.17512v1)
**Feng et al., 2026-08-18**：提出“指向-思考-记忆-对齐”机制，让 VLM 在贴合 2D 先验的动作空间中高效部署。关联：改进 VLM 具身导航的调度与记忆利用效率。

---

## 模型压缩与持续学习

### 持续学习

#### [When to Review: Spaced Repetition for Continual Pre-Training of Language Models](http://arxiv.org/abs/2608.17530v1)
**Atreya et al., 2026-08-18**：按样本遗忘速度调度间隔重复，替代全局统一重放。关联：为持续预训练提供自适应的复习策略。

#### [Chain-of-Experience for Continual LLM Improvement](http://arxiv.org/abs/2608.18027v1)
**Tu et al., 2026-08-18**：让 LLM 在测试时通过迭代交互积累经验并持续改进。关联：将“经验链”引入 LLM 持续学习范式。

#### [Teach and Grow: An Agent-Centered Architecture for General Robot Learning](http://arxiv.org/abs/2608.17209v1)
**Nie et al., 2026-08-17**：当 VLA 遇到未知对象或本体超出验证覆盖时，由 agent 中心架构生成数据并继续学习。关联：为机器人 VLA 的持续学习提供新架构。

#### [Vision-Language Models for Analog Gauge Reading: An Empirical Study of Specialization, Transfer and Reliability](http://arxiv.org/abs/2608.17723v1)
**Mueez et al., 2026-08-18**：系统评估 VLM 在仪表读数任务上的专化、迁移与可靠性。关联：为持续学习中的任务迁移与可靠性评估提供实证。

#### 🔁 **【过去14天内已出现】** [Task-Anchored Representation Shaping for Pre-Trained Model-Based Continual Learning](http://arxiv.org/abs/2608.16345v1)
**Xu et al., 2026-08-17**：用任务锚定表征塑形增强 PTM 持续学习在全部已学任务上的可靠性。关联：解决预训练模型在持续学习中的任务边界不可靠问题。

#### 🔁 **【过去14天内已出现】** [SoftModel: A Neural Model That Grows Its Own Topology -- Governed Structural Growth for Continual In-Service Learning](http://arxiv.org/abs/2608.16409v1)
**Xie, 2026-08-17**：让神经模型在部署期间通过受控结构增长持续学习。关联：从拓扑演化角度支持终身学习。

#### 🔁 **【过去14天内已出现】** [Self-Routed Tensor Adapters for Parameter-Efficient Universal Visual Adaptation](http://arxiv.org/abs/2608.16384v1)
**Yadav, 2026-08-17**：通过自路由张量适配器实现跨域参数高效视觉适应。关联：避免域适配中知识碎片化的持续学习机制。

#### 🔁 **【过去14天内已出现】** [Domain-Agnostic Neural Topic Modeling with Contextual Token-Level Semantic Graph Representation](http://arxiv.org/abs/2608.16269v1)
**Seo et al., 2026-08-17**：用上下文 token 级语义图表示提升主题模型在专有领域的可解释性。关联：提供领域无关的持续主题建模表征。

---

## 视觉感知

### 事件相机视觉感知

#### 🔁 **【过去14天内已出现】** [FLEET: Token-Based Feature Extraction for Event Camera-based Reinforcement Learning](http://arxiv.org/abs/2608.16523v1)
**Gottwald et al., 2026-08-17**：用 token 化特征提取支持事件相机强化学习。关联：为事件流控制策略提供高效感知表示。

### 3D 点云视觉感知

#### 🔁 **【过去14天内已出现】** [GaussianDWM++: Language-Grounded 3D Gaussian Driving World Model for Unified Scene Understanding, Editing, and Multi-Modal Generation](http://arxiv.org/abs/2608.16234v1)
**Deng et al., 2026-08-17**：提出语言引导的 3D 高斯驾驶世界模型，统一场景理解、编辑与多模态生成。关联：将 3D 高斯/点云表征用于驾驶场景感知与生成。

---

## 跨方向信号

1. **Harness 正成为 Agent 工程与 RL 训练的公共抽象**：多篇论文围绕 harness 的权限、安全、训练对齐展开，预示 agent 系统将更强调“执行环境”的一等公民地位。
2. **测试时/推理时干预新范式**：从注意力偏置、低资源微调到经验链，强调不重训或尽量少重训即可改善模型/策略表现，同时影响 LLM Agent 与 VLA 方向。
3. **安全与可靠性评测向全生命周期延伸**：HarnessRisk、LIBERO-VIFO、JEPA 安全盾共同指向从训练前到执行时的安全保证，跨 Agent 与具身两大赛道。
4. **记忆与持续学习强交叉**：D2ACCI 的 Agent 记忆诊断、When to Review 的间隔重放、Chain-of-Experience 的经验积累，显示显式记忆调度正在统一 Agent 与持续学习的方法论。
5. **3D 世界模型驱动驾驶/导航理解**：GaussianDWM++ 与动作条件 JEPA 将 3D 几何表示与可学习预测模型结合，提升场景理解、安全预测与导航能力。

---

## 优先精读

1. **Agent Lightning v1.0**：提出 harness-native agentic RL 的完整架构思路，是 LLM Agent 工程方向最具系统性的新方法，值得全文精读以评估工程可复制性。
2. **EATR-Stereo**：直接面向人形 VLA 的立体视觉接口难点，融合 embodied 信号路由与预训练表示兼容，对实验室 VLA 方向有硬件落地的借鉴价值。
3. **When to Review**：将间隔重复从认知科学引入持续预训练，方法简洁且可迁移性强，适合作为持续学习方向的算法改进起点。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*