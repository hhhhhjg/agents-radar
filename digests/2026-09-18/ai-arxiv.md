# 实验室研究方向 Radar 2026-09-18

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 38 篇新文献 + 16 篇过去14天内已出现 | 生成时间：2026-09-17 23:50 UTC

---

## 今日总览

**LLM Agent 与多智能体**
- **LLM Agent 工程**：10篇新文献，聚焦长程纠错、符号时序监督、隐私暴露测量、多智能体失控与技能质量；无过去14天已出现。
- **Agent 测试时扩展与自我改进**：今日暂无新论文；过去14天已出现3篇，涉SWE-Agent未知未知、Looped Transformer测试时扩展、博弈学习动力学。
- **LLM Agent Society**：今日暂无新论文；过去14天无。

**具身智能**
- **视觉-语言-动作模型**：10篇新文献，集中在动作tokenization、VLA推理加速、云边协同、力觉/度量操作与自动驾驶。
- **具身导航**：7篇新文献，3篇过去14天已出现；几何选择性、grounding、UAV与动态场景理解较活跃。

**模型压缩与持续学习**
- **LLM 剪枝与推理优化**：3篇新文献，1篇过去；关注推理优化质量测量与成本-质量-延迟前沿。
- **多模态大模型剪枝**：今日暂无新论文；过去14天无。
- **持续学习**：6篇新文献，3篇过去；开放世界意图、弱监督分割、参数高效适配与可扩展类增量。

**视觉感知**
- **事件相机视觉感知**：1篇新文献，2篇过去；SNN跟踪、3D手部网格、事件预训练。
- **3D 点云视觉感知**：3篇新文献，3篇过去；室内MLS分割、4D radar预处理、协同感知适配。
- **3D 点云感知与跟踪**：今日暂无新论文；过去14天已出现2篇，均聚焦LiDAR单目标跟踪。

## LLM Agent 与多智能体

### LLM Agent 工程
#### [Rollback the World, Keep the Reflection: Rollback-Induced Reflection for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.18304v1) — Yu Y. 等；09-16；用回滚诱导反思修复长程错误累积；直接服务LLM Agent可靠性。
#### [Symbolic Temporal Supervision of LLM Agents Using Contracts](http://arxiv.org/abs/2609.18128v1) — Xiao Y. 等；09-16；以契约对工具型LLM Agent做符号时序监督；面向幻觉与对抗操纵约束。
#### [CERA-MoA: Co-Evolving Routing Mechanisms with Continually Learning LLM Agents](http://arxiv.org/abs/2609.18779v1) — Jiang J. 等；09-16；路由与Agent微调协同演化；提升MoA对能力变化的适配。
#### [ASLEval: Measuring Privacy Exposure Displacement in LLM Agent Sessions](http://arxiv.org/abs/2609.18864v1) — Wu G. 等；09-16；测量多步会话中隐私暴露位移；补充工具型Agent隐私评测。
#### [Collective Loss of Control in LLM Agent Systems: An Epidemic Account of Mutation, Contagion, and Recovery](http://arxiv.org/abs/2609.18460v1) — Wu X. 等；09-16；用流行病模型解释多智能体集体失控；关注传播与恢复。
#### [Hypothesis-Driven Autonomous Materials Synthesis with Multimodal LLM Agents](http://arxiv.org/abs/2609.18598v1) — Takahara I. 等；09-16；多模态LLM Agent驱动自主材料合成；体现科学实验闭环决策。
#### [Recursive Reasoning or Statistical Extrapolation? In-Context Learning in Multi-Agent Interdependent Decision-Making](http://arxiv.org/abs/2609.18591v1) — Liu Y. 等；09-16；区分ICL是递归推理还是统计外推；深化多Agent决策理解。
#### [GraphEcho: Structural Redundancy and Evidence Provenance in LLM Graph Agents](http://arxiv.org/abs/2609.17695v1) — Wang S. 等；09-15；测试图Agent是否误把重复路径当独立证据；关系Agent证据溯源。
#### [M-SQE: Multilingual Skill Quality Estimation for Enhancing Language Equality in Agentic Skill Use](http://arxiv.org/abs/2609.18445v1) — Liu Y. 等；09-16；评估多语言Agent技能质量；提升技能库语言公平性。
#### [AeroWeaver: An Embodied-Agent Harness for Weaving Aerial Skills into Distributed, Adaptive Swarm Execution](http://arxiv.org/abs/2609.18520v1) — Lou J. 等；09-16；面向UAV集群的具身Agent执行框架；连接LLM Agent与分布式协同。

### Agent 测试时扩展与自我改进
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Grounding SWE-Agent Decisions in Architecture-0 Design: Navigating Unknown Unknowns through Physical Mapping](http://arxiv.org/abs/2609.17221v1) — Wang Z. 等；09-15；用物理映射应对架构设计未知未知；关联SWE-Agent自我改进。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Right Direction, Wrong Step: Geometric Analysis of Finite-Step Failure in Looped Transformers](http://arxiv.org/abs/2609.16665v1) — Guo Z. 等；09-15；几何分析循环Transformer有限步失败；关联测试时迭代推理。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Constant Swap Regret in General-Sum Games via Optimistic Transition Matrices](http://arxiv.org/abs/2609.16751v1) — Mai T.；09-15；一般和博弈中常数swap regret动态；关联多Agent学习扩展。

## 具身智能

### 视觉-语言-动作模型
#### [ActionPiece: Rethinking Action Tokenization for Autoregressive Vision-Language-Action Models](http://arxiv.org/abs/2609.18487v1) — Lian S. 等；09-16；重思自回归VLA动作tokenization；影响策略训练与执行命令恢复。
#### [rMuscle: Robotic Muscle Memory for Efficient Vision-Language-Action Model Inference](http://arxiv.org/abs/2609.19104v1) — Zhou K. 等；09-16；机器人肌肉记忆缓存降低VLA推理开销；面向工厂重复任务高效部署。
#### [${M}^2$Tok: Multi-head Multi-codebook Discrete Action Tokenization for Vision-Language-Action Models](http://arxiv.org/abs/2609.18259v1) — Xu C. 等；09-16；多头多码本离散动作tokenization；提升VLA连续动作压缩表示。
#### [VLA-ULAP: Interleaving Cloud VLA Calls with Ultra-Lightweight Local Action Prediction at the Edge](http://arxiv.org/abs/2609.18663v1) — Cao D. 等；09-16；云VLA调用与轻量本地预测交错；解决端侧时延与功耗。
#### [Decoupling Vision, Language, and Action for Efficient Multi-Task Robot Policies](http://arxiv.org/abs/2609.18374v1) — Sun X. 等；09-16；解耦视觉、语言与动作模块；降低每控制步VLM主干开销。
#### [FIVE-VLA: Fast and EffectIVE Autonomous Driving with Recurrent Action Memory](http://arxiv.org/abs/2609.18623v1) — Oksuz K. 等；09-16；循环动作记忆提升自动驾驶VLA效率；缓解参数与高分辨率图像瓶颈。
#### [ForceDelta-VLA: Distilling Force-Conditioned Action Corrections for Contact-Rich Manipulation](http://arxiv.org/abs/2609.18242v1) — Dong J. 等；09-16；蒸馏力条件动作修正；增强接触丰富操作VLA。
#### [Acting in Meters: Learning Metric Interactions for Precise Robotic Manipulation](http://arxiv.org/abs/2609.18243v1) — Wang L. 等；09-16；学习米制交互关系；提升VLA精确操作空间反馈。
#### [WetRobo: A Reproducible Robot Kit for Coding Agents in Biological Laboratories](http://arxiv.org/abs/2609.18435v1) — Oikawa Y. 等；09-16；面向生物实验室的可复现机器人套件；降低VLA策略部署门槛。

### 具身导航
#### [AdaGeoVLN: Selective Geometry Across Representation Depth and Navigation Time for Vision-Language Navigation](http://arxiv.org/abs/2609.18789v1) — Pham Q.-D. 等；09-16；按表示深度与导航时间选择几何特征；提升VLN空间理解。
#### [GroundingVLN: Reasoning and Acting with Grounding for Vision-Language Navigation](http://arxiv.org/abs/2609.18581v1) — Li K. 等；09-16；用grounding连接语义推理与空间执行；缓解VLN中间推理不显式问题。
#### [UAVs Meet Embodied Intelligence: Bridging Human Intents and Flying Dynamics Via Harnessing Physical-Digital AI Agents](http://arxiv.org/abs/2609.18326v1) — Tian Y. 等；09-16；连接人类意图与飞行动力学；推进UAV具身导航。
#### [Understanding Dynamic Scenes at Gigapixel Scale: Wide-Area Spatio-Temporal Perception from UAVs](http://arxiv.org/abs/2609.18210v1) — Zhu Y. 等；09-16；UAV十亿像素广域时空场景理解；服务动态导航感知。
#### [NormLift: From Lifted Features To Semantic Reliability In 3D Gaussian Splatting](http://arxiv.org/abs/2609.18898v1) — Zang Y. 等；09-16；分析2D语义提升到3D高斯可靠性；关联开放词汇场景理解。
#### [Sim-to-Real Traffic Scene Understanding by Decoupling Semantics from Caption Generation with V-JEPA](http://arxiv.org/abs/2609.18562v1) — Bui N.H.T. 等；09-16；解耦语义理解与描述生成；提升交通场景跨域理解。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [ENCP: Episode-Normalized Conformal Prediction for Vision-and-Language Navigation](http://arxiv.org/abs/2609.17499v1) — Feliren V. 等；09-15；VLN不确定性估计的回合归一化共形预测；提升安全导航决策。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [NeuroSymbEAD: A Large Scale Neuro-Symbolic Caption Dataset for Omni-Directional Embodied Autonomous Driving](http://arxiv.org/abs/2609.16919v1) — Khan M.A.U. 等；09-15；神经符号全向具身自动驾驶描述数据集；服务导航场景理解。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [TEDi: Temporal Memory-Enhanced and Denoising Transformer for Surgical Instrument Segmentation](http://arxiv.org/abs/2609.16797v1) — Yuan J. 等；09-15；时序记忆与去噪Transformer用于手术器械分割；关联导航场景理解。

## 模型压缩与持续学习

### LLM 剪枝与推理优化
#### [A Calibrated Instrument for Measuring How Inference Optimizations Affect Output Quality](http://arxiv.org/abs/2609.18005v1) — Kaplan J.；09-16；提出推理优化对输出质量影响的校准测量；服务量化/早退/投机解码评估。
#### [The Inference Engineering Pareto Atlas: Which Optimizations Dominate the Cost, Quality, and Latency Frontier?](http://arxiv.org/abs/2609.17863v1) — Tumkur S.D. 等；09-15；构建成本-质量-延迟帕累托图谱；比较组合LLM推理优化。
#### [TabPFN-3.5: Technical Report](http://arxiv.org/abs/2609.17895v1) — Jäger B. 等；09-15；新旗舰表格基础模型；与推理优化间接相关，提供基础模型效率参照。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [ECHO: Early-layer Collaborative Hierarchical Orchestration with Bonus Logits in Speculative Decoding](http://arxiv.org/abs/2609.17241v1) — Ma Z. 等；09-15；早层协同分层编排与bonus logits投机解码；优化LLM推理。

### 持续学习
#### [Uncertainty-Aware Continual Learning for Open-World Intent Discovery Under an evolving Label Space](http://arxiv.org/abs/2609.17866v1) — Aida P. 等；09-15；开放世界意图发现的不确定性持续学习；应对标签空间演化。
#### [DR.WILSS: Diffusion-Based Replay for Weakly Supervised Continual Semantic Segmentation](http://arxiv.org/abs/2609.18444v1) — Marx L.A. 等；09-16；扩散重放用于弱监督类增量分割；缓解灾难性遗忘。
#### [MCLC-NET: Multimodal Continual Learning for Leaf Counting](http://arxiv.org/abs/2609.18129v1) — Bhatt R. 等；09-16；多模态持续学习用于叶片计数；展示持续学习在多模态农业感知。
#### [Position Anchor Tuning: Towards Efficient Adaptation of Pre-Trained Point Cloud Transformers](http://arxiv.org/abs/2609.18056v1) — Liu Z. 等；09-16；位置锚定调优适配点云Transformer；兼顾参数效率与推理效率。
#### [The Unbearable Weight: Scaling Models and Methods for UAV Audio Classification](http://arxiv.org/abs/2609.17884v1) — Berg A.P. 等；09-15；UAV音频分类的模型/方法扩展；关联有限数据持续适配。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Continual Learning for Traversability Prediction with Uncertainty-Aware Adaptation](http://arxiv.org/abs/2609.17141v1) — Lee H. 等；09-15；不确定性感知持续学习用于可通行性预测；服务非结构化导航。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [CLARE: Scalable Class-Incremental Continual Learning via a Sparsity-Based Framework](http://arxiv.org/abs/2609.17026v1) — Fu Y. 等；09-15；稀疏框架实现可扩展类增量持续学习；平衡新知识与旧知识。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [ScienceBuddy: Recursive-in-Recursive Self-Improvement for Interactive Scientific Agents](http://arxiv.org/abs/2609.17523v1) — Xue S. 等；09-15；交互科研Agent递归自我改进；连接持续学习与科学工作流。

## 视觉感知

### 事件相机视觉感知
#### [Mask IPL: Noise-Free Intrinsic Position Learning via Computation Graph Clipping for Event-Based Spike-Driven Tracking](http://arxiv.org/abs/2609.18716v1) — Shan Y. 等；09-16；计算图裁剪实现无噪声内在位置学习；服务事件SNN跟踪。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [EventEgoHands++: Event-based Egocentric 3D Hand Mesh Reconstruction with Real Dataset](http://arxiv.org/abs/2609.17189v1) — Hara R. 等；09-15；事件相机第一视角3D手网格重建；扩展事件视觉人手感知。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Hyper-RED: Scalable Event Pre-training via Semantic Hypergraph Distillation](http://arxiv.org/abs/2609.16811v1) — Wang M. 等；09-15；语义超图蒸馏可扩展事件预训练；缓解事件数据稀缺。

### 3D 点云视觉感知
#### [Semantic-ITC: A Frame-wise Indoor Mobile Laser Scanning Dataset and Benchmark for Semantic Segmentation](http://arxiv.org/abs/2609.18493v1) — Wu H. 等；09-16；首个逐帧室内MLS语义分割数据集；补齐室内点云基准。
#### [Accuracy- and Real-Time-Aware 4D Radar Preprocessing for Autonomous Driving Perception Systems](http://arxiv.org/abs/2609.18542v1) — Jung W.-J. 等；09-16；面向精度与实时性的4D radar预处理；提升恶劣天气点云感知。
#### [Learning from Distributed Eyes: Leveraging Collaborative Perception for Automated Model Adaptation](http://arxiv.org/abs/2609.18511v1) — Ma Y. 等；09-16；协同感知用于自动模型适配；缓解自动驾驶域偏移。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [SSC-Priors: Exploring Semantic and Visibility Priors to Boost Lidar Semantic Scene Completion](http://arxiv.org/abs/2609.17413v1) — Martyniuk T. 等；09-15；语义与可见性先验提升LiDAR语义场景补全；轻量增强现有网络。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Rethinking Visual Embodiment Dependence in Visuomotor Policies](http://arxiv.org/abs/2609.16815v1) — Fang H. 等；09-15；研究视觉具身依赖对动作预测影响；关联3D视觉与具身策略。

### 3D 点云感知与跟踪
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [SAVTrack: Selective Vote Aggregation for Reliability-Aware Point Cloud Tracking](http://arxiv.org/abs/2609.16662v1) — Zhou S. 等；09-15；选择性投票聚合提升LiDAR单目标跟踪可靠性；应对稀疏不完整观测。
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [MAETrack: Unleashing the Potential of Pretrained Geometric Priors for 3D Single Object Tracking](http://arxiv.org/abs/2609.16695v1) — Zhou S. 等；09-15；利用预训练几何先验改进3D单目标跟踪；探索MAE迁移。

## 跨方向信号
- LLM Agent 可靠性从单步评测转向长程状态修复、符号时序监督、隐私暴露与集体失控传播。
- VLA 热点集中在动作tokenization、缓存/云边协同、模块解耦与力觉/度量操作，推理效率仍是主线。
- 持续学习与PEFT、稀疏化、扩散重放结合，强调预训练模型下抗遗忘和可扩展增量。
- 3D/事件/导航感知强调稀疏、动态、协同与鲁棒预处理，服务自动驾驶、UAV和跟踪。
- 评测与测量方法增多：ASLEval、GraphEcho、Calibrated Instrument、Pareto Atlas、Semantic-ITC。

## 优先精读
1. **Rollback the World, Keep the Reflection**：直接处理长程LLM Agent错误累积与状态修复，是Agent工程可靠性核心问题。
2. **ActionPiece**：动作tokenization决定自回归VLA训练目标与执行恢复，是VLA基础且可迁移方向。
3. **CERA-MoA**：同时连接LLM Agent工程与持续学习，协同演化路由和Agent能力，跨方向启发强。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*