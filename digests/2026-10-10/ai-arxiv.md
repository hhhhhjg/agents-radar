# 实验室研究方向 Radar 2026-10-10

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 29 篇新文献 + 22 篇过去14天内已出现 | 生成时间：2026-10-10 01:26 UTC

---

## 今日总览
- **LLM Agent 与多智能体 / LLM Agent 工程**：10 篇新文献，0 篇过去14天已出现。进展集中在可靠性、记忆/经验、自进化与监控：认知谦逊、欺骗探针、轨迹干预、BBO 基准、工业本体。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：3 篇新文献，3 篇过去14天已出现。测试时计算扩展至表格基础模型；Agentic-TTT 将 TTT 策略化；重复聚焦偏好 TTS、自博弈 OCR、RTS 策略选择。
- **LLM Agent 与多智能体 / LLM Agent Society**：0 篇新文献，0 篇过去14天已出现。今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：10 篇新文献，0 篇过去14天已出现。围绕路径-时间解耦、潜在推理复用、预测世界模型、相机配置泛化、残差建模与闭环控制。
- **具身智能 / 具身导航**：4 篇新文献，7 篇过去14天已出现。新论文覆盖流式 3D 空间记忆、预测空间推理、HOI 可行性与月球腿式部署；重复聚焦终身导航、动态重规划、语义地图。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：1 篇新文献，1 篇过去14天已出现。SparseDecoding 提出解码感知剪枝；重复关注 token pruning 安全。
- **模型压缩与持续学习 / 多模态大模型剪枝**：0 篇新文献，0 篇过去14天已出现。今日暂无新论文。
- **模型压缩与持续学习 / 持续学习**：2 篇新文献，8 篇过去14天已出现。新论文强调经验整合与递归自我改进；重复覆盖稳定性-可塑性、提示谱系、免持续训练、层选择微调。
- **视觉感知 / 事件相机视觉感知**：1 篇新文献，1 篇过去14天已出现。新论文用置信度加权对应提升 LiDAR 地图中事件相机定位；重复将 BNN 引入快速事件处理。
- **视觉感知 / 3D 点云视觉感知**：0 篇新文献，2 篇过去14天已出现。重复涉及空间音频视觉 FloorSAV 与文本/关键帧相机轨迹 TKCAM。
- **视觉感知 / 3D 点云感知与跟踪**：0 篇新文献，1 篇过去14天已出现。重复为 PointLearner 的局部-全局点云表征。

## 分方向情报

## LLM Agent 与多智能体
### LLM Agent 工程
#### [OnTrack: Real-Time Monitoring and Intervention in LLM Agent Trajectories via Streaming Structure-Aware Optimal Transport](http://arxiv.org/abs/2610.12375v1)
B. Barazandeh 等 | 2026-10-08 | 核心：流式结构感知最优传输监控并干预 Agent 轨迹；关联：提升 Agent 工程安全与可观测性。
#### [Accurate but Not Humble: Evaluating Epistemic Humility in LLM Agents under Knowledge Conflict](http://arxiv.org/abs/2610.12360v1)
K. Sun 等 | 2026-10-08 | 核心：评估知识冲突下 Agent 是否修正答案并承认不确定性；关联：补充 Agent 可靠性评价维度。
#### [Caught in the Act: Probes Effectively Detect Sabotage and Catch Unverbalized Deception](http://arxiv.org/abs/2610.12445v1)
O. J. Hollinsworth 等 | 2026-10-08 | 核心：用白盒探针规模化检测 Agent 欺骗与破坏行为；关联：面向前沿 Agent 监控。
#### [MemTrial: Learning When to Trust Memory in LLM Portfolio Agents](http://arxiv.org/abs/2610.11732v1)
G. Wu 等 | 2026-10-08 | 核心：学习在组合管理 Agent 中何时信任记忆；关联：解决经验记忆与市场共因偏差。
#### [A Closer Look at Agentic BBO: Benchmarking LLM Agents for Black-Box Optimization](http://arxiv.org/abs/2610.12183v1)
M. Chen 等 | 2026-10-08 | 核心：系统评测 LLM Agent 用于黑盒优化；关联：推动 Agent 工程在科学优化中的基准化。

### Agent 测试时扩展与自我改进
#### [Agentic-TTT: Training test-time policy for test-time training](http://arxiv.org/abs/2610.12002v1)
J. Lu, M. Kankanhalli | 2026-10-08 | 核心：为测试时训练学习策略，将部署经验转为参数更新；关联：直接服务 Agent 自我改进。
#### [Test-Time Compute for Tabular Foundation Models: Mechanisms, Gains, and Limits](http://arxiv.org/abs/2610.12005v1)
K. Ning 等 | 2026-10-08 | 核心：沿适配、聚合、上下文构造三轴研究表格基础模型测试时计算；关联：扩展 TTS 到表格任务。
#### [VINCIE-NExT: Unlocking Video Editing from Images via In-Context Modeling](http://arxiv.org/abs/2610.12104v1)
L. Qu 等 | 2026-10-08 | 核心：用上下文建模从图像编辑迁移到视频编辑；关联：体现测试时上下文构造式自我改进。
#### 🔁 **【过去14天内已出现】** [From Pareto to Preference: Personalized Test-Time Scaling via Amortized Agentic Policy Discovery](http://arxiv.org/abs/2610.09684v1)
🔁 **【过去14天内已出现】** X. Wang 等 | 2026-10-07 | 核心：摊销式 Agent 策略发现个性化 TTS；关联：优化准确率-成本-延迟权衡。

## 具身智能
### 视觉-语言-动作模型
#### [PathTime-VLA: Path-Time Decoupling for Factorized Post-Training of Vision-Language-Action Policies](http://arxiv.org/abs/2610.11771v1)
Q. Huang 等 | 2026-10-08 | 核心：解耦路径与执行时间进行 VLA 后训练；关联：提升示教时序变化下的泛化。
#### [REACT: Rolling Denoising and Dual Decoupling for Reactive Robot Control with VLA Models](http://arxiv.org/abs/2610.12007v1)
H. Xiong 等 | 2026-10-08 | 核心：滚动去噪与双解耦实现反应式 VLA 控制；关联：平衡长动作块平滑性与重规划响应。
#### [VersaCamVLA: Camera-Configurable VLA Policies for Robotic Manipulation](http://arxiv.org/abs/2610.12451v1)
B. Han 等 | 2026-10-08 | 核心：训练可配置相机数量与位姿的 VLA 策略；关联：缓解固定相机配置脆弱性。
#### [PLaW-VLA: Predictive Latent World Modeling for Vision-Language-Action Policies](http://arxiv.org/abs/2610.12285v1)
Y. Liu 等 | 2026-10-08 | 核心：在潜在空间预测世界演化并条件化动作生成；关联：增强 VLA 长程控制预测上下文。
#### [Humanoid World Action Model With Joint State--Action Generation](http://arxiv.org/abs/2610.12026v1)
Y. Yang 等 | 2026-10-08 | 核心：联合生成状态与动作的人形世界动作模型；关联：融合 VLA 与未来视觉预测。

### 具身导航
#### [Slot3R: Set-Associative Spatial Memory for Streaming 3D Reconstruction](http://arxiv.org/abs/2610.12282v1)
X. Zhang 等 | 2026-10-08 | 核心：用集合关联空间记忆改进流式 3D 重建；关联：为具身导航提供在线空间记忆。
#### [SpaceCast-Bench: Evaluating Predictive Spatial Reasoning in Vision-Language Models](http://arxiv.org/abs/2610.12402v1)
H. Li 等 | 2026-10-08 | 核心：评测预测性空间推理而非仅读出现有空间关系；关联：面向导航中的干预与场景演化推理。
#### [MAMHOI: Factorizing Scene-Aware Human-Object Interaction through Affordances](http://arxiv.org/abs/2610.12416v1)
M. Lei 等 | 2026-10-08 | 核心：用可供性分解场景感知人-物交互；关联：支撑具身环境中交互可行性判断。
#### [Toward Lunar Legged Robots: Field Deployment Lessons at LUNA](http://arxiv.org/abs/2610.12276v1)
A. Fuhrer 等 | 2026-10-08 | 核心：总结月球腿式机器人野外部署经验；关联：面向极端地形导航与足-风化层交互。
#### 🔁 **【过去14天内已出现】** [Lifelong small-object navigation in changing object layouts: a benchmark and method](http://arxiv.org/abs/2610.10125v1)
🔁 **【过去14天内已出现】** J. Huang 等 | 2026-10-07 | 核心：提出变化布局下小物体终身导航基准与方法；关联：直接对应具身导航长期适应。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### [SparseDecoding: Decoding-Aware Pruning for Accurate and Efficient LLM Inference](http://arxiv.org/abs/2610.12327v1)
Q. Wang 等 | 2026-10-08 | 核心：针对解码阶段进行感知剪枝；关联：降低内存受限解码延迟。
#### 🔁 **【过去14天内已出现】** [Understanding and Mitigating Token-Pruning-Induced Vulnerabilities in VLMs](http://arxiv.org/abs/2610.09703v1)
🔁 **【过去14天内已出现】** S. Wang 等 | 2026-10-07 | 核心：首次系统评估 token pruning 的安全影响并提出缓解；关联：补充多模态剪枝安全视角。

### 持续学习
#### [Use and Disuse: Intent-Structured Experience Consolidation for Memory and Learning in LLM Agents](http://arxiv.org/abs/2610.12124v1)
X. Zeng 等 | 2026-10-08 | 核心：提出意图结构化经验巩固的分层记忆与持续学习架构；关联：将 Agent 经验转为可复用知识。
#### [Memento 3: Model-Based Recursive Self-Improvement through Reflective Rulebooks](http://arxiv.org/abs/2610.11794v1)
H. Zhao 等 | 2026-10-08 | 核心：通过反思规则本进行递归自我改进；关联：以模型修正实现持续适应。
#### 🔁 **【过去14天内已出现】** [Stability-Plasticity Balance via Singular-Vector Selection in LLM Continual Learning](http://arxiv.org/abs/2610.11076v1)
🔁 **【过去14天内已出现】** L. Wang 等 | 2026-10-08 | 核心：用奇异向量选择平衡稳定性与可塑性；关联：缓解 LLM 持续适应灾难遗忘。
#### 🔁 **【过去14天内已出现】** [Where to Adapt Matters: Layer-Selective Fine-Tuning for Capability Retention](http://arxiv.org/abs/2610.11620v1)
🔁 **【过去14天内已出现】** Z. Pang 等 | 2026-10-08 | 核心：层选择微调以保留通用能力；关联：PEFT 下持续学习的能力保持。
#### 🔁 **【过去14天内已出现】** [From a Prompt to Repertoires: Evolving Functional REpertoires Enable LLM Continual Learning](http://arxiv.org/abs/2610.11373v1)
🔁 **【过去14天内已出现】** F. Liu 等 | 2026-10-08 | 核心：演化功能提示库实现持续学习；关联：无需改参数地扩展技能。

## 视觉感知
### 事件相机视觉感知
#### [Learning Which Correspondences to Trust: Confidence-Weighted Event-Camera Localization in LiDAR Maps](http://arxiv.org/abs/2610.11967v1)
P. Kiousis 等 | 2026-10-08 | 核心：置信度加权 3D-2D 对应提升事件相机在 LiDAR 地图定位；关联：增强事件视觉几何定位鲁棒性。
#### 🔁 **【过去14天内已出现】** [Bringing BNNs to Fast Event Processing](http://arxiv.org/abs/2610.09873v1)
🔁 **【过去14天内已出现】** P. Longour 等 | 2026-10-07 | 核心：将二值神经网络用于快速事件处理；关联：降低事件相机部署资源。

### 3D 点云视觉感知
#### 🔁 **【过去14天内已出现】** [FloorSAV: Elucidating Spatial Audio-Visual Context with 2D Floormap for AV-LLMs](http://arxiv.org/abs/2610.11310v1)
🔁 **【过去14天内已出现】** K.-R. Kim 等 | 2026-10-08 | 核心：用 2D floormap 显式注入空间音视觉上下文；关联：服务 3D 空间感知与具身推理。
#### 🔁 **【过去14天内已出现】** [TKCAM: Text and Keyframe to Camera Trajectory Generation](http://arxiv.org/abs/2610.11105v1)
🔁 **【过去14天内已出现】** H. Yang 等 | 2026-10-08 | 核心：文本与关键帧条件生成相机轨迹；关联：连接 3D 场景理解与可控轨迹生成。

### 3D 点云感知与跟踪
#### 🔁 **【过去14天内已出现】** [Point-Focused Attention Meets Context-Scan State Space: Robust Biological Visual Perception for Point Cloud Representation](http://arxiv.org/abs/2610.11342v1)
🔁 **【过去14天内已出现】** K. Qu 等 | 2026-10-08 | 核心：融合点聚焦注意力与上下文扫描状态空间；关联：提升点云局部结构与全局依赖表征。

## 跨方向信号
- **经验记忆成为 Agent 与持续学习共同主线**：Use and Disuse、Memento 3、MemTrial 均关注经验转知识、记忆信任与递归修正。
- **测试时计算向多任务扩散**：Agentic-TTT、表格 TFM TTS、SP-DocReader 自博弈、EvoAlloc 资源分配，共同推动部署期适应。
- **VLA 从固定策略走向解耦、世界模型与闭环控制**：PathTime、PLaW、REACT、VersaCam 等围绕泛化与实时反应。
- **具身导航强调空间记忆与终身适应**：Slot3R、SpaceCast、Lifelong small-object navigation、ActiveLang 均要求在线更新与语义不确定性处理。
- **压缩与持续学习共同关注安全/稳定性**：SparseDecoding 提升解码效率，token pruning 安全评估与稳定性-可塑性平衡相互呼应。

## 优先精读
1. **Use and Disuse**：跨 LLM Agent 工程与持续学习，提出意图结构化经验巩固，直接关系长期自治 Agent 的记忆/学习架构。
2. **PathTime-VLA**：VLA 后训练关键问题——路径与时间解耦，对示教时序变化泛化有直接价值。
3. **SparseDecoding**：LLM 剪枝与推理优化方向唯一新论文，聚焦解码阶段内存瓶颈，工程落地性强。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*