# 实验室研究方向 Radar 2026-09-04

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 18 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-03 23:44 UTC

---

# 研究方向 Radar

## 今日总览

- **LLM Agent 工程**：3 篇新论文分别聚焦长程任务中的自适应动作分块、个性化记忆中的偏好漂移与记忆投毒区分、工具调用中的可复用原语设计，工程化信号明显。
- **Agent 测试时扩展与自我改进**：3 篇新论文涵盖测试时自改进综述、编码竞赛金牌级推理后训练、扩散式非自回归抽取生成，体现训练期与测试期结合的自我改进趋势。
- **LLM Agent Society**：今日暂无新论文。
- **视觉-语言-动作模型**：新论文集中在 VLA 内部表征可解释性和长程操作中的意图泛化；与具身导航重叠的 LookStep 按任务类型归入导航方向。
- **具身导航**：3 篇新论文覆盖高效 VLN、4D 动态场景查询重写、世界模型预测基准。
- **LLM 剪枝与推理优化**：ShallowStream 提出“浅索引—深回答”机制，降低流式视频理解中的多模态 LLM 推理开销。
- **多模态大模型剪枝**：今日暂无独立新论文；ShallowStream 因更接近推理优化，已归入上一子方向。
- **持续学习**：3 篇新论文围绕 PEFT 变体选择、联邦 LoRA 医学影像适配、训练感知 LoRA 初始化展开。
- **事件相机视觉感知**：今日暂无新论文。
- **3D 点云视觉感知**：3 篇新论文覆盖 4D 雷达目标检测、农业表型 3D 重构、结构缺陷检测。
- **3D 点云感知与跟踪**：今日暂无新论文。

**分方向情报**

## LLM Agent 与多智能体

### LLM Agent 工程

#### [Act More, Decide Less: Skill-Guided Adaptive Action Chunking for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.02042v1)
- Y. Yang et al., 2026-09-02 | 提出技能引导的自适应动作分块，减少长程任务中逐动作决策带来的冗余 LLM 调用。| 为 LLM Agent 的“执行—决策”节奏控制提供直接工程策略。

#### [CAPTURE: Disentangling Preference Drift from Memory Poisoning in Personalized LLM Agents](http://arxiv.org/abs/2609.02265v1)
- S. M. A. Hossain et al., 2026-09-02 | 在个性化 LLM Agent 记忆中区分真实偏好漂移与对抗性记忆投毒。| 提升 Agent 持久记忆在动态用户场景下的安全性与可信度。

#### [Harness Engineering in LLM Tool Use via Agent-Native Reusable Tool Primitives](http://arxiv.org/abs/2609.01736v1)
- H. Jin et al., 2026-09-01 | 提出 Agent 原生可复用工具原语，缓解多步工具调用中的类型不兼容与 schema 脆弱问题。| 强化 LLM Agent 工具链的鲁棒性和复用效率。

### Agent 测试时扩展与自我改进

#### [A Survey on Self-Improving Test-Time Intelligence: Feedback-Driven Adapting, Learning, and Scaling at Inference](http://arxiv.org/abs/2609.01679v1)
- S. Niu et al., 2026-09-01 | 系统综述反馈驱动的测试时适配、测试时学习与推理时扩展。| 为该方向建立统一的概念框架与方法谱系。

#### [DiffIE: Diffusion-based Open Information Extraction](http://arxiv.org/abs/2609.02315v1)
- K. Fedorov & V. Malykh, 2026-09-02 | 用扩散式迭代去噪代替自回归解码实现多三元组开放信息抽取。| 为测试时输出精炼提供非自回归的迭代生成路径。

#### [Post-Training Language Models for Gold-Medal Performance in Coding Competitions](http://arxiv.org/abs/2609.02849v1)
- A. Ficek et al., 2026-09-02 | 结合大规模题目筛选、合成推理轨迹与后训练，使 LLM 达到竞赛级金牌水平。| 展示面向高难推理 Agent 的训练期自我改进与推理期扩展收益。

### LLM Agent Society

今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [Latent Cluster Analysis for Vision-Language-Action Models](http://arxiv.org/abs/2609.02634v1)
- T. Wulff et al., 2026-09-02 | 提出 LAVLA 框架，对 VLA 模型内部表征进行潜在聚类分析。| 直接服务于 VLA 模型的可解释性与内部行为审计。

#### [HINT: Human-Intent Inception for Long-Horizon Robot Manipulation](http://arxiv.org/abs/2609.02653v1)
- M. Mei et al., 2026-09-02 | 提出 HINT，让 VLA 在高层人类意图下根据演化视觉反馈持续完成长程操作。| 提升 VLA 在长时程操作中的意图泛化与闭环自适应能力。

### 具身导航

#### [LookStep: Efficient Vision-Language Navigation with Linguistic Foresight and Event Driven Memory](http://arxiv.org/abs/2609.02350v1)
- K.-Y. Yu et al., 2026-09-02 | 以语言前瞻和事件驱动记忆降低视觉语言导航中的连续决策成本。| 为 MLLM 驱动的具身导航体提供高效记忆与动作预测范式。

#### [Query Rewriting for Complex Object Segmentation in 4D Gaussian Representations](http://arxiv.org/abs/2609.02664v1)
- T.-K. Nguyen et al., 2026-09-02 | 通过查询重写提升 4D 高斯场景中语言引导复杂目标分割的鲁棒性。| 为动态场景中的导航指令理解提供查询侧预处理手段。

#### [AGI Maze Prediction Datasets: A Compact Benchmark for Learning World Dynamics with Transformers](http://arxiv.org/abs/2609.02339v1)
- A. Potapov, 2026-09-02 | 提出轻量迷宫预测基准，检验 Transformer 对行动后果与世界动态的建模能力。| 为导航智能体在行动前进行内部世界模型推演提供测试环境。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [ShallowStream: Index Shallow then Answer Deep for Streaming Video Understanding](http://arxiv.org/abs/2609.02780v1)
- J. Hao et al., 2026-09-02 | 提出流式视频理解中的“浅索引—深回答”策略，按需投入深层 LLM 计算。| 为多模态 LLM 在线推理优化提供可扩展的自适应计算方案。

### 多模态大模型剪枝

今日暂无新论文。

### 持续学习

#### [Choosing a PEFT Variant for Per-Patient Dysarthric ASR: A Single-Speaker Case Study on Two ASR Bases](http://arxiv.org/abs/2609.02735v1)
- B. Muller et al., 2026-09-02 | 在单说话人构音障碍 ASR 适配中比较七种 LoRA 族 PEFT 变体。| 为逐患者持续适配中的 PEFT 选型提供实证参考。

#### [Federated LoRA Adaptation of BiomedCLIP Across Four International Chest X-Ray Cohorts](http://arxiv.org/abs/2609.02101v1)
- S. Poudel et al., 2026-09-02 | 在四个国际胸部 X 射线队列上验证联邦 LoRA 适配 BiomedCLIP 的效果。| 为隐私约束下医学视觉语言模型的跨机构持续适应提供方案。

#### [TaRA: Training-Aware Low-Rank Adaptation Initialization](http://arxiv.org/abs/2609.02639v1)
- T. Kim & E. Park, 2026-09-02 | 提出训练感知的低秩适配初始化，缓解 LoRA 初始化敏感性与低秩瓶颈。| 改进持续学习与参数高效微调中的初始化和稳定性。

## 视觉感知

### 事件相机视觉感知

今日暂无新论文。

### 3D 点云视觉感知

#### [Stereo 4D Radar for 3D Object Detection: Integrating Geometric Alignment and Absolute Velocity Estimation](http://arxiv.org/abs/2609.02560v1)
- S.-H. Song et al., 2026-09-02 | 结合几何对齐与绝对速度估计，提升立体 4D 雷达的 3D 目标检测性能。| 增强恶劣天气下基于雷达点云的 3D 感知能力。

#### [Automated Maize Ear Phenotyping Using 3D Reconstructions](http://arxiv.org/abs/2609.01921v1)
- R. A. Kumar et al., 2026-09-01 | 利用 3D 重构自动量化玉米穗行数、行粒数与籽粒大小。| 将点云视觉应用于高通量农业表型分析。

#### [Integrated Laser Scanning and Image-Based Topology Optimization Techniques for Detection and Quantification of Visible and Subsurface Structural Defects](http://arxiv.org/abs/2609.01808v1)
- M. S. Dizaji & D. Harris, 2026-09-01 | 融合激光扫描与图像拓扑优化，检测并量化表面与亚表面结构缺陷。| 为基础设施检测中的 3D 点云与视觉联合建模提供方法。

### 3D 点云感知与跟踪

今日暂无新论文。

## 跨方向信号

- **“少决策、准计算”趋势**：LLM Agent 的动作分块和流式视频 MLLM 的浅索引深回答，都在推动自适应计算分配。
- **LoRA 成为持续/个性化适配公共底座**：逐患者 ASR、联邦医学影像、初始化改进均围绕 LoRA 展开，显示 PEFT 在隐私与效率约束下的通用性。
- **测试时与训练期自我改进合流**：测试时自改进综述、竞赛后训练和扩散迭代精炼共同指向“部署后继续变强”的范式。
- **语言侧预处理降低下游复杂度**：查询重写和工具原语分别优化场景理解与 Agent 工具调用，提示在入口处先做语义规范化的重要性。
- **表征分析与世界模型反哺具身决策**：VLA 潜在表征聚类与迷宫世界模型基准说明，理解内部状态对可靠动作预测日益关键。

## 优先精读

1. **A Survey on Self-Improving Test-Time Intelligence**：该综述框定了测试时扩展与自我改进的完整问题空间，是理解该快速增长方向的最佳起点。
2. **Act More, Decide Less**：直接挑战 ReAct 式“每步一决策”的默认协议，提出自适应动作分块，对长程 Agent 设计具有较强启发。
3. **LookStep**：将语言前瞻、事件驱动记忆与 MLLM 结合用于视觉语言导航，兼具具身导航和方法效率两个层面价值。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*