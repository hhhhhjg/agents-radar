# 实验室研究方向 Radar 2026-08-27

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 42 篇新文献 + 8 篇过去14天内已出现 | 生成时间：2026-08-27 02:47 UTC

---

## 今日总览

1. **LLM Agent 工程**：今日新论文密集，覆盖记忆架构、工具调用决策、多智能体编排、诊断/规划应用、技能复用与自演化 workflow，说明 Agent 工程正从“单点能力”走向“系统化生命周期管理”。
2. **Agent 测试时扩展与自我改进**：出现高效前缀滑动、检索 grounded 聚合、递归算子统一框架等新方法，并向具身/机器人推理渗透；两条重复文献（ParallelWorld、Prime Agent）继续支撑该方向。
3. **LLM Agent Society**：今日暂无新论文。
4. **视觉-语言-动作模型**：新论文聚焦多臂协作、时序建模、3D 几何感知、夹爪感知、异构 embodiment、可解释动作建模与触觉执行反馈；重复文献 UniMem 继续关注多模态记忆。
5. **具身导航**：新方向高相关论文较少，1 篇跨模态目标计数综述进入视野；重复文献 OptiSight 仍是最直接的导航框架。
6. **LLM 剪枝与推理优化**：SHIFT-LLM 提出无训练深度剪枝后分布校正，是该方向今日唯一高相关新论文。
7. **多模态大模型剪枝**：两篇新论文均聚焦“头感知”剪枝，与重复文献 E2S-Pruner 形成明确趋势。
8. **持续学习**：新论文覆盖提示门控、语义漂移、图像恢复、QLoRA 获取-保留、科学计算代理等，持续学习正在与 PEFT 和具体应用场景深度融合。
9. **事件相机视觉感知**：今日暂无新论文。
10. **3D 点云视觉感知**：今日无新增高相关论文；重复文献 BenthicFlow 继续跟踪。
11. **3D 点云感知与跟踪**：今日出现 1 篇高相关新论文，用视频基础模型引导 4D LiDAR 标注，缓解点云时序标注瓶颈。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [Recursive Experiential-Working Memory Evolution for Long-Horizon Agent Harnesses](http://arxiv.org/abs/2608.24876v1)
Zhaochen Yu et al. | 2026-08-25 | 提出递归经验-工作记忆架构，用工作记忆跟踪任务进度并递归演进。关联：直接解决长时程 agent 的记忆失配与技能调用错位。

#### [Beyond Scaling: Self-Evolving LLM Agents for Hardware Kernel Optimization via an Experience-Driven Workflow and Experience Graph Memory](http://arxiv.org/abs/2608.25570v1)
Siyuan Chen et al. | 2026-08-26 | 用经验图记忆支撑自演化 agent，自动化硬件内核优化。关联：将经验积累纳入 agent 自进化闭环。

#### [Tunable Tool-Call Rates in LLM Agents via Representation Steering](http://arxiv.org/abs/2608.25198v1)
Yuqi Chen et al. | 2026-08-25 | 通过表征引导调节工具调用率。关联：直接改进 agent 工具调用决策的可靠性与成本。

#### [EviDx: Evidence-Aware Active Diagnosis with Scaffolded LLM Agents](http://arxiv.org/abs/2608.24570v1)
Lihang Zeng et al. | 2026-08-25 | 将临床诊断建模为证据采集-假设更新的主动过程。关联：展示 LLM agent 在开放医学诊断中的应用框架。

#### [SkillForge: Evolving Verifiable Skills for Reinforcement Learning Agents](http://arxiv.org/abs/2608.24747v1)
Shidong Yang et al. | 2026-08-25 | 演化可验证技能库，使 RL agent 跨 episode 积累复用知识。关联：补齐 RL 训练 agent 缺乏跨回合可复用能力的短板。

#### [ProgRouter: Online Progress-Guided Orchestration for Multi-Agent LLM Workflows under Quality-Cost Tradeoffs](http://arxiv.org/abs/2608.25992v1)
Somgyuan Li et al. | 2026-08-26 | 在线进度引导的多智能体工作流编排。关联：在质量与成本之间动态分配多 agent 资源。

#### [JIT-Agent: Scaling Harness Intelligence via Just-in-Time Harness Evolution](http://arxiv.org/abs/2608.25593v1)
Guibin Zhang et al. | 2026-08-26 | 即时进化 agent 的 harness，自动设计记忆、规划与工具编排。关联：将 harness 设计本身自动化，提升 agent 能力上限。

#### [IAPO: Influence-Aware Policy Optimization for Credit Assignment in Multi-Turn Service Agents](http://arxiv.org/abs/2608.24588v2)
Bo Ren et al. | 2026-08-25 | 影响感知策略优化解决多轮服务 agent 的信用分配。关联：改进长时程多轮交互 agent 的强化学习训练。

#### [LifePlanner: Evaluating LLM Agents for Geo-spatial Planning with Social Media Data](http://arxiv.org/abs/2608.25039v1)
Zhen Dong et al. | 2026-08-25 | 用社交媒体数据构建地理空间规划测试床。关联：为 LLM agent 提供带开放社会信号的真实规划评估环境。

#### [Belief Cascades Drive Persuasion in LLM Agent Networks](http://arxiv.org/abs/2608.25152v1)
Haoyi Qiu et al. | 2026-08-25 | 受控实验揭示多 agent 网络中信念级联如何驱动说服。关联：刻画 agent 网络中的观点传播与信息影响机制。

### Agent 测试时扩展与自我改进

#### [Prefix Sliding for efficient test-time scaling](http://arxiv.org/abs/2608.26070v1)
Niklas Muennighoff et al. | 2026-08-26 | 前缀滑动显著降低长推理链的显存与计算成本。关联：使测试时扩展在长思考任务上更高效。

#### [Beyond Confidence: Test-Time Scaling for Multi-Turn Search Agents via Retrieval Grounding](http://arxiv.org/abs/2608.24024v1)
Hyunho Kook et al. | 2026-08-25 | 将测试时扩展从单轮推理推广到多轮搜索 agent，并以检索依据 grounding 聚合。关联：扩展 test-time scaling 到工具型 agent 场景。

#### [Recursive Agentic Reasoning](http://arxiv.org/abs/2608.23956v1)
Shengxin Zhang et al. | 2026-08-25 | 把迭代细化、分解、重复采样统一为递归算子。关联：为测试时推理方法提供统一比较与组合框架。

#### [ShuttleArena: Interpretable Self-Play in Physics-Based Badminton](http://arxiv.org/abs/2608.25246v1)
Peize Ding | 2026-08-26 | 构建物理羽毛球可解释自对弈环境。关联：以自博弈方式提升 agent 的物理决策与策略改进能力。

#### [R³: Training Robots to Reason in Natural Language via Reinforcement Learning](http://arxiv.org/abs/2608.26053v1)
Lehong Wu et al. | 2026-08-26 | 用 RL 训练机器人在自然语言中推理，增加可扩展测试时计算。关联：将测试时扩展机制引入机器人操作 agent。

#### 🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [ParallelWorld: Test-Time Scaling for Embodied Reasoning](http://arxiv.org/abs/2608.22971v1)
Min Chen et al. | 2026-08-24 | 面向具身推理的并行世界测试时扩展。关联：把 test-time scaling 引入具身智能体。

#### 🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Prime Agent: A Self-Improving RLM Harness](http://arxiv.org/abs/2608.23552v1)
Seth Karten et al. | 2026-08-24 | 开源自改进 RLM harness，支持长时程编码 agent 工作流。关联：为自我改进 agent 提供可复用工程框架。

## 具身智能

### 视觉-语言-动作模型

#### [MA-VLA: Multi-Arm Vision-Language-Action Model for Collaboration and Compositional Generalization](http://arxiv.org/abs/2608.25864v1)
Zaibin Zhang et al. | 2026-08-26 | 提出多臂 VLA，支持臂级指令分配与组合泛化。关联：将 VLA 从单臂推广到多臂协作操作。

#### [StreamPI: Streaming Multimodal Temporal Modeling for Vision-Language-Action Models](http://arxiv.org/abs/2608.26067v1)
Zhe Liu et al. | 2026-08-26 | 用流式多模态时序建模取代单帧范式。关联：提升 VLA 对历史观察与空间感知的利用。

#### [V-Link: Recovering Lost Visual Representations in Action DiT for Vision-Language-Action Models](http://arxiv.org/abs/2608.25308v1)
Yehao Lu et al. | 2026-08-26 | 恢复动作 DiT 中丢失的 3D 视觉表示。关联：增强 VLA 动作专家对 3D 几何信息的访问。

#### [GaussVLA: Geometry-Aware Spatial Reasoning for Vision-Language-Action Model](http://arxiv.org/abs/2608.24959v1)
Md Selim Sarowar et al. | 2026-08-25 | 以 3D 高斯表示替代 2D patch，注入几何结构先验。关联：提升 VLA 策略的空间推理与几何鲁棒性。

#### [Gripper-aware Vision Language Action Models](http://arxiv.org/abs/2608.24603v1)
Hanyi Zhang et al. | 2026-08-25 | 让 VLA 显式建模夹爪状态，打破 gripper invariance 假设。关联：提升通用抓取与操作策略的适应性。

#### [One Policy, Many Embodiments: Unified Camera-Centric Action Geometry Pre-training for Heterogeneous Embodied Manipulation](http://arxiv.org/abs/2608.26058v1)
Xiaomi Embodied Intelligence Team et al. | 2026-08-26 | 以相机为中心的动作几何预训练统一异构 embodiment。关联：缓解 VLA 跨形态迁移的动作空间不一致。

#### [LM-X: Explainable Action Modeling with Progress, Event, and Uncertainty Prediction for Generalist Robot Manipulation](http://arxiv.org/abs/2608.25757v1)
Jin Lou et al. | 2026-08-26 | 额外预测任务进度、中间事件与不确定性。关联：为 VLA 提供可解释的长时程行为建模。

#### [TacForcing: Streaming Action Generation with Execution-Time Tactile Feedback](http://arxiv.org/abs/2608.25798v1)
Jianbo Zhou et al. | 2026-08-26 | 在动作块执行期间注入触觉反馈，生成流式动作。关联：解决 chunk-based VLA 中触觉信息过期问题。

#### [PonderPounce: A Pretrained MLLM as an Episode Context Engine for Robot Control](http://arxiv.org/abs/2608.24115v1)
Suhwan Choi et al. | 2026-08-25 | 用预训练 MLLM 作为情景上下文引擎，利用长视觉历史。关联：释放 VLA 对预训练多模态上下文记忆的利用。

#### 🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [UniMem: Unifying Multimodal Memory and Control for Vision-Language-Action Models](http://arxiv.org/abs/2608.22869v1)
Lars Osterberg et al. | 2026-08-24 | 统一多模态记忆与控制以处理非马尔可夫任务。关联：为 VLA 模型补充长期记忆机制。

### 具身导航

#### [Object Counting Across Modalities: Taxonomies, Benchmarks, Applications, and Open Challenges](http://arxiv.org/abs/2608.23845v1)
Joana Konadu Owusu et al. | 2026-08-24 | 系统综述跨模态开放词汇目标计数。关联：为目标识别与计数组件在具身导航中的应用提供基础。

#### 🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [OptiSight: Bridging Semantic Reasoning and Geometric Control for Embodied Navigation](http://arxiv.org/abs/2608.23354v1)
Alperen Avan et al. | 2026-08-24 | 将 VLM 语义推理与视觉伺服结合，通过有限状态 CoT 实现室内导航。关联：直接面向具身导航的混合控制框架。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [SHIFT-LLM: Distribution Shift Correction in Depth-Pruned LLMs](http://arxiv.org/abs/2608.25068v1)
Ali Bahri et al. | 2026-08-25 | 提出无训练的后剪枝校正框架，修复深度剪枝导致的隐藏状态分布偏移。关联：以低开销恢复深度剪枝 LLM 的推理精度。

### 多模态大模型剪枝

#### [HAP: Head-Adaptive Visual Token Pruning via Cross-Modal Alignment](http://arxiv.org/abs/2608.23921v1)
Yuanhao Sun et al. | 2026-08-24 | 按头自适应地做视觉 token 剪枝，引入跨模态对齐评分。关联：解决 VLM 中注意力头异质性导致的剪枝误差。

#### [Not All Attention Heads Contribute to Critical Visual Token Selection: Head-Aware Pruning Matters More](http://arxiv.org/abs/2608.25332v1)
Chaofang Ma et al. | 2026-08-26 | 实证发现部分注意力头对关键 token 选择贡献更强，提出头感知剪枝。关联：改进 VLM 视觉 token 剪枝的选择准确性。

#### 🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [E2S-Pruner: Progressive Two-Stage Evidence Fusion for Visual Token Pruning in Vision-Language Models](http://arxiv.org/abs/2608.23253v1)
Taoyu Qian et al. | 2026-08-24 | 两阶段证据融合的渐进式视觉 token 剪枝。关联：降低 VLM 推理延迟与显存占用。

### 持续学习

#### [GAP-Prompt: Gated Adaptive Prompting for Efficient Continual Learning](http://arxiv.org/abs/2608.23782v1)
Trung-Anh Dang et al. | 2026-08-24 | 用门控自适应提示替代静态任务级提示。关联：提升提示式持续学习的任务适配效率。

#### [Restoring Without Forgetting: Continual Learning Across Image Degradations](http://arxiv.org/abs/2608.23799v1)
Alif Ashrafee et al. | 2026-08-24 | 面向多种图像退化的持续学习，避免新退化覆盖旧退化。关联：将持续学习引入闭环图像恢复场景。

#### [Continual Visual Learning under Evolving Semantic Concept Shift](http://arxiv.org/abs/2608.23903v1)
Ismail Lamaakal et al. | 2026-08-24 | 处理语义概念定义本身演变的视觉持续学习。关联：拓展持续学习到概念漂移的开放视觉系统。

#### [Continually learning neural-operator surrogate for three-dimensional airborne electromagnetic Bayesian inversion](http://arxiv.org/abs/2608.25932v1)
Jaehong Chung et al. | 2026-08-26 | 用持续学习训练神经算子代理加速三维地球物理反演。关联：展示持续学习在科学计算中的规模化应用。

#### [CrossMambaTuning: Synergistic Spatial and Cross-Layer Adaptation for Machine Vision Compression](http://arxiv.org/abs/2608.25568v1)
Haobo Xiong et al. | 2026-08-26 | 通过协同空间与跨层适配微调预训练图像压缩模型。关联：为预训练模型的下游视觉任务迁移提供持续适配方案。

#### [Learning New Facts with QLoRA: An Acquisition-Retention Frontier](http://arxiv.org/abs/2608.25677v1)
Estelle Zheng et al. | 2026-08-26 | 系统刻画 QLoRA 适配器容量对知识获取与保留的权衡。关联：揭示 PEFT 在持续学习中的记忆保持边界。

#### [Dimensionless Controls of Plasticity Under Alternating Tasks: From Evolutionary Biology to Continual Learning](http://arxiv.org/abs/2608.23889v1)
Owen Skriloff | 2026-08-24 | 从进化生物学的维度分析可塑性控制并类比到持续学习。关联：为交替任务下的灾难性遗忘提供理论启示。

#### 🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Adapter-Based Few-Shot Continual Learning for Malicious Packet Recognition](http://arxiv.org/abs/2608.23536v1)
Kyle Stein et al. | 2026-08-24 | 基于适配器的少样本持续学习用于恶意流量识别。关联：持续学习在网络安全的增量威胁适配应用。

## 视觉感知

### 3D 点云视觉感知

#### 🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [BenthicFlow: Generating Extensible Underwater Environments via Flow Matching](http://arxiv.org/abs/2608.23173v1)
Joaquín Figueira et al. | 2026-08-24 | 用流匹配生成可扩展的水下 3D 场景。关联：为水下点云/场景理解提供数据增强与域泛化新途径。

### 3D 点云感知与跟踪

#### [Bootstrapping a 4D LiDAR Annotation Tool from Video Foundation Models](http://arxiv.org/abs/2608.25418v1)
Jihun Kim et al. | 2026-08-26 | 用视频基础模型引导 4D LiDAR 标注，减少时序点云标注成本。关联：直接缓解点云序列分割与跟踪任务的数据瓶颈。

## 跨方向信号

1. **测试时扩展到具身智能渗透**：R³、ParallelWorld 与 PonderPounce 共同表明“test-time scaling + 具身推理”正在成为 VLA 与机器人 Agent 的新增强路径。
2. **记忆成为 Agent 与 VLA 的共同瓶颈**：Recuris、PonderPounce、UniMem 以及“The Retriever Should Remember”等同时指向长期/情景记忆的结构化设计。
3. **视觉 token 剪枝走向“头感知”**：HAP、Not All Attention Heads、E2S-Pruner 一致放弃了全局注意力平均，转向按头/跨模态敏感度剪枝。
4. **持续学习与 PEFT 深度融合**：QLoRA、GAP-Prompt、Adapter-Based CL 均以“适配器/提示容量”为轴，讨论获取-保持权衡。
5. **生成式基础模型缓解具身数据稀缺**：BenthicFlow 生成水下环境、4D LiDAR 标注工具借用视频基础模型，均体现“用生成/基础模型造数据”的通用范式。

## 优先精读

#### **[Recursive Agentic Reasoning](http://arxiv.org/abs/2608.23956v1)**：为迭代细化、分解、重采样等测试时推理方法提供统一递归框架，对 Agent 测试时扩展研究具有方法论级别的指导价值。
2. **[UniMem](http://arxiv.org/abs/2608.22869v1)**（重复文献）：综合视觉、语言、记忆与控制，连接 VLA 与具身导航两个方向，是记忆主题的核心交叉参考。
3. **[SHIFT-LLM](http://arxiv.org/abs/2608.25068v1)**：无需训练即可校正深度剪枝带来的分布偏移，对 LLM 推理优化与剪枝方向兼具实际意义和低成本优势。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*