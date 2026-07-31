# 实验室研究方向 Radar 2026-08-01

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 21 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-07-31 22:54 UTC

---

# 研究方向 Radar（2026-08-01）

## 今日总览

- **LLM Agent 与多智能体 / LLM Agent 工程**：3篇新文献，体现多智能体技能编排（SKIMIX）、状态转移感知RL训练（TAPO）与能力内化自蒸馏（From Scoring to Acting）三条推进路径。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：2篇新文献，分别从无外部反馈的自我验证RL（SVR）和循环Transformer状态演化（Looped Transformers）扩展测试时计算。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：3篇高相关新文献，聚焦VLA策略失败纠正（RedFlow）、真实部署框架（RoboBRIDGE）与以人为中心的数据引擎（ACE-Data-0）。
- **具身智能 / 具身导航**：2篇高相关新文献，开放词汇3D场景理解（MonoVoc）与操作技能零样本迁移（SemAnCorr）共同支撑具身agent环境交互。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：2篇新文献，token级动态宽度剪枝（WIDE）与旋转+细粒度量化协同（GyRot）提升低比特推理效率。
- **模型压缩与持续学习 / 多模态大模型剪枝**：2篇新文献，LAST利用查询token信号、Capturing Token Tendencies利用token倾向改进视觉token剪枝。
- **模型压缩与持续学习 / 持续学习**：3篇新文献，覆盖多模态模态贡献漂移正则、AIGC检测增量学习、联邦微调中的正交梯度投影防御。
- **视觉感知 / 事件相机视觉感知**：1篇新文献，事件辅助运动细化用于学习型视频压缩（ENCORE）。
- **视觉感知 / 3D 点云视觉感知**：1篇新文献，点云直接驱动3D打印的中间表示学习（PrintAnything）。
- **视觉感知 / 3D 点云感知与跟踪**：1篇新文献，自然语言描述检索双时相卫星图像变化。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [SKIMIX: Multi-Agent Harness-Time Scaling with Skill Mixture for Dynamic Harness Engineering](http://arxiv.org/abs/2607.27994v1)
**Jia Luo 等（2026-07-30）**：提出多智能体技能混合框架，通过迭代精化在协作中动态选择与组合技能库；将Agent技能编排从静态流水线推向harness-time的多智能体动态工程。

#### [TAPO: Transition-Aware Policy Optimization for LLM Agents](http://arxiv.org/abs/2607.27973v1)
**Cong Li 等（2026-07-30）**：利用环境中固有的状态转移信息作为密集监督，设计面向LLM Agent的策略优化方法；为Agent工程的RL后训练提供超越稀疏任务奖励的新信号来源。

#### [From Scoring to Acting: Outcome-Verified Comparative Self-Distillation for LLM Agents](http://arxiv.org/abs/2607.27937v1)
**Xu Xia 等（2026-07-30）**：提出结果验证的比较自蒸馏，将外部评分转化为agent内部化技能，减少推理时检索依赖；服务于Agent技能内化与推理效率提升。

### Agent 测试时扩展与自我改进

#### [SVR: Self-Verifying Refinement via Joint Verdict-Confidence Reinforcement Learning for Adaptive Test-Time Compute](http://arxiv.org/abs/2607.28457v1)
**Hongyu Chen 等（2026-07-30）**：提出无外部反馈的多轮RL框架，联合学习验证判断与置信度，自适应分配测试时计算；是Agent测试时扩展中“自我验证+动态计算”的直接尝试。

#### [Looped Transformers with Source-Centered State Evolution](http://arxiv.org/abs/2607.27656v1)
**Bum Jun Kim 等（2026-07-30）**：通过源中心状态演化改进循环Transformer，使固定参数下有效深度可扩展；为测试时计算扩展提供新的模型结构支撑。

### LLM Agent Society

今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [RedFlow: Redirect Failure into Action-Level Corrections for Flow-matching VLA Policy](http://arxiv.org/abs/2607.27782v1)
**Zhengyang Yan 等（2026-07-30）**：将离线RL与flow-matching VLA结合，把部署失败转为动作级纠正信号；直接针对VLA策略分布偏移导致的复合误差。

#### [RoboBRIDGE: A Modular Framework for Bridging Policies to Robust Real-World Robotic Agents](http://arxiv.org/abs/2607.27881v1)
**Sihyung Yoon 等（2026-07-30）**：提出模块化框架补充VLA模型的失败恢复和长时程执行一致性；解决VLA从动作预测器到完整机器人agent的部署鸿沟。

#### [ACE-Data-0: Human-Centric Ambient Capture as Embodied Data Engine](http://arxiv.org/abs/2607.28625v1)
**Yukang Cao 等（2026-07-30）**：构建同步采集第一人称感知、全身运动、操作、声音和触觉的数据引擎；为VLA训练提供多模态时间同步的具身数据。

### 具身导航

#### [MonoVoc: Decoupling Geometry and Semantics for Lightweight Monocular Open-Vocabulary 3D Gaussians](http://arxiv.org/abs/2607.28300v1)
**Pouya Ardekhani 等（2026-07-30）**：解耦几何与语义，以单目输入构建轻量开放词汇3D高斯场景；为agent提供自然语言查询和导航所需的3D场景理解。

#### [SemAnCorr: Semantic Anchored Correspondence for Zero-Shot Manipulation Skill Transfer](http://arxiv.org/abs/2607.28382v1)
**Xiaoxiang Dong 等（2026-07-30）**：以语义锚定对应改进最近邻特征匹配，实现零样本操作技能跨几何实例迁移；支撑具身agent在异构对象间复用操作技能。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [WIDE: Boosting Adaptive LLM Inference via Token-level Dynamic Width Pruning](http://arxiv.org/abs/2607.28418v1)
**Haozhe Hu 等（2026-07-30）**：提出token级动态宽度剪枝，按输入token自适应裁剪网络宽度；在高稀疏度下兼顾硬件效率与精度，推动LLM自适应推理。

#### [GyRot: Leveraging Hidden Synergy between Rotation and Fine-grained Group Quantization for Low-bit LLM Inference](http://arxiv.org/abs/2607.27694v1)
**Sangjin Kim 等（2026-07-30）**：揭示旋转与细粒度分组量化之间的协同效应，设计低bit LLM推理方案；为LLM压缩中的量化与旋转联合优化提供新思路。

### 多模态大模型剪枝

#### [LAST: The Last Query Token Guides Visual Token Pruning for Edge-Cloud Collaborative MLLM Inference](http://arxiv.org/abs/2607.27952v1)
**Feng Yang 等（2026-07-30）**：利用最后一个查询token引导视觉token剪枝，降低云侧MLLM推理成本；在边缘-云协同场景中实现视觉token高效筛选。

#### [Capturing Token Tendencies for Training-Free Token Pruning in Multimodal Large Language Models](http://arxiv.org/abs/2607.28341v1)
**Jie Ma 等（2026-07-30）**：捕捉视觉token在MLLM层次处理中的倾向，以免训练方式做更可靠的token剪枝；改进静态启发式不可逆过滤的缺陷。

### 持续学习

#### [Regularizing modality contribution drift in multimodal continual learning](http://arxiv.org/abs/2607.27260v1)
**Zhen Zhang 等（2026-07-29）**：提出针对模态贡献漂移的正则化方法，缓解多模态持续学习遗忘；关注MMCL中交叉模态表示对齐之外的关键因素。

#### [DECODE: Tackling Representation and Decision Degradation in Continual AI-Generated Image Detection](http://arxiv.org/abs/2607.27882v1)
**Zihao Cai 等（2026-07-30）**：同时抑制特征表示退化与决策退化，使AIGC检测器持续适应新兴生成域；将持续学习应用在生成式伪造取证场景。

#### [TriShield: Zero-Utility-Loss Defense Against Privacy Backdoors in Federated Language Model Fine-Tuning via Orthogonal Gradient Projection and Optimizer State Entanglement](http://arxiv.org/abs/2607.27940v1)
**Cheng Wei（2026-07-30）**：结合正交梯度投影与优化器状态纠缠，在联邦LLM微调中抵御隐私后门且不损失效用；展示持续学习中正交投影思想向联邦安全的延展。

## 视觉感知

### 事件相机视觉感知

#### [ENCORE: Event-Assisted Complementary Motion Refinement for Learned Video Compression](http://arxiv.org/abs/2607.28020v1)
**Shuhan Ye 等（2026-07-30）**：用事件相机信息辅助修正视频压缩中的运动估计，增强快速运动/模糊/弱纹理鲁棒性；体现事件相机在感知-编码联合任务中的互补价值。

### 3D 点云视觉感知

#### [PrintAnything: Learning an Intermediate Representation for 3D printing G-code Generation](http://arxiv.org/abs/2607.27729v1)
**Sangmin Hong 等（2026-07-30）**：学习点云到3D打印G-code的中间表示，使点云可直接用于制造；拓展了点云在几何感知与数字制造连接中的应用。

### 3D 点云感知与跟踪

#### [Finding Change in Satellite Archives from Text: How to Combine Before-and-After Images Efficiently](http://arxiv.org/abs/2607.28571v1)
**Simon Roy 等（2026-07-30）**：提出根据自然语言描述对双时相卫星图像对进行变化检索与排序；为大规模地理空间感知提供了文本驱动的变化发现范式。

## 跨方向信号

- 自适应/按需计算成为Agent与模型压缩的共同主线：SKIMIX的harness-time scaling、SVR的自适应测试时计算、WIDE的动态宽度、LAST的token剪枝均体现“根据输入难度分配计算”。
- 压缩决策从静态结构转向token级与层次级感知：WIDE、LAST、Capturing Token Tendencies、GyRot都以细粒度信号决定保留/量化粒度。
- VLA研究从单点模型走向全栈智能体闭环：RedFlow纠错、RoboBRIDGE部署、ACE-Data-0数据、SemAnCorr技能迁移共同补全数据-策略-系统-迁移链路。
- 持续学习机制跨场景复用：TriShield的正交梯度投影、MMCL的模态贡献正则、DECODE的表示+决策双重约束，展示了通用防遗忘技术在不同领域的迁移。
- 3D场景理解开始直接服务交互与制造：MonoVoc连接自然语言与3D空间，PrintAnything连接点云与物理制造，卫星影像文本检索则连接地理变化与语义查询。

## 优先精读

1. **SKIMIX**：首次将技能库动态编排提升到多智能体harness-time尺度，对LLM Agent工程系统设计有方向性启发。
2. **RedFlow**：针对VLA部署中最棘手的分布偏移与复合误差，提供“失败即训练信号”的实用解决路径，对具身智能落地价值高。
3. **WIDE**：token级动态宽度剪枝是LLM高效推理的重要新思路，与多模态剪枝、自适应计算多个方向形成交叉，值得深入分析。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*