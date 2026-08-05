# 实验室研究方向 Radar 2026-08-06

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 37 篇新文献 + 15 篇过去14天内已出现 | 生成时间：2026-08-05 22:53 UTC

---

# 研究方向 Radar

## 今日总览

1. **LLM Agent 工程**：10 篇新文献。焦点集中在长期记忆（隐私、轻量化、统一验证）与能力评测（教学、技能演化、攻击链重建），另有输入模态扰动与决策智能体研究。
2. **Agent 测试时扩展与自我改进**：3 篇新文献。从固定推理预算转向可解释自适应采样，并出现对 TTS 推理范式的系统综述；测试时计算也开始用于生成模型安全。
3. **LLM Agent Society**：1 篇新文献。异构多智能体协作中引入历史感知的元策略委托机制。
4. **视觉-语言-动作模型**：8 篇新文献。覆盖本体感受接线、3D 跟踪蒸馏、进度价值函数、自适应执行步长、对抗攻击与鲁棒微调、物理 AI 部署等。
5. **具身导航**：2 篇新文献。端到端驾驶用视频生成统一未来场景预测；多房间布局估计改善室内场景理解。
6. **LLM 剪枝与推理优化**：新文献聚焦 RoPE 感知注意力窗口、压缩统计可靠性分析与 Serving 系统实证；其中 2 篇视觉 token 剪枝论文按相关性归入多模态剪枝方向。
7. **多模态大模型剪枝**：2 篇新文献，均为面向视频 MLLM 的自适应视觉 token 剪枝，强调全局时空密度与两阶段裁剪。
8. **持续学习**：3 篇新文献，涉及 MoE 式实例自适应 LoRA 生成、饮食领域 VLM 微调、音频推理中演化式评分奖励。
9. **事件相机视觉感知**：1 篇新文献，面向地面约束机器人的事件相机-里程计外参标定。
10. **3D 点云视觉感知**：4 篇新文献，涵盖轻量 LiDAR 检测蒸馏、zero-shot 3D 视觉定位、手术点云配准测试时适应、BEV 检测外参鲁棒性。
11. **3D 点云感知与跟踪**：今日暂无新论文。

## LLM Agent 与多智能体

### LLM Agent 工程

#### [DP-MemView: A Memory Interface for Attribute-Level Transcript Privacy in Long-Term LLM Agents](http://arxiv.org/abs/2608.03130v1)
J. W. Kim et al. | 2026-08-04 | 提出差分隐私记忆接口，实现属性级对话隐私保护；关联：为长期记忆 Agent 提供隐私保护机制。

#### [LeanMem: Simple and Efficient Long-Term Memory for LLM Agents](http://arxiv.org/abs/2608.03463v1)
Y. Liao et al. | 2026-08-04 | 轻量长期记忆系统，降低 token 消耗并有效利用远期历史；关联：解决 Agent 记忆效率与可扩展性问题。

#### [Verifiable Memory: Learning Unified Memory Management with Local and Global Verifiers for Large Language Model Agents](http://arxiv.org/abs/2608.03137v1)
X. Sun et al. | 2026-08-04 | 用局部/全局验证器统一学习长短期记忆管理策略；关联：增强 Agent 记忆的可验证性与有界控制。

#### [ContinualSkillBench: Can LLM Agents Truly Evolve Their Capabilities?](http://arxiv.org/abs/2608.03874v1)
T. Guan et al. | 2026-08-04 | 新基准评估 Agent 技能库能否真正演化出新技能；关联：为 Agent 持续自我改进提供评测工具。

#### [EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners](http://arxiv.org/abs/2608.03206v1)
U. Lee et al. | 2026-08-04 | 构建带模拟学习者的长程教学 Agent 基准；关联：扩展 LLM Agent 工程到教育场景。

### Agent 测试时扩展与自我改进

#### [Test-Time Scaling in Reasoning LLMs: Inference Regimes, Evaluation, and Reproducibility](http://arxiv.org/abs/2608.04001v1)
M. Hariri et al. | 2026-08-04 | 系统梳理测试时扩展的推理范式、评估方法与可复现性；关联：为该方向研究提供全局框架参考。

#### [Interpretable Adaptive Sampling for LLM Test-Time Scaling](http://arxiv.org/abs/2608.03961v1)
M. Kashaniyan et al. | 2026-08-04 | 可解释自适应采样，按提示难度分配推理预算；关联：克服固定预算 TTS 的低效与不可解释性。

#### [Test-Time Scaling for Safe Text-Guided Image Generation via Intermediate Clean Estimates](http://arxiv.org/abs/2608.03284v1)
J. Sakurai et al. | 2026-08-04 | 用中间干净估计在测试时提升文生图安全合规性；关联：将 TTS 思想引入生成模型安全对齐。

#### 🔁 **【过去14天内已出现】** [GradCuit: Credit-Assigned Gradient Flow Enables Robust and Interpretable Test-Time Latent Reasoning](http://arxiv.org/abs/2608.02585v1)
Z. Yu et al. | 2026-08-03 | 信用分配梯度流实现可解释的测试时潜在推理；关联：为测试时扩展提供优化型推理路径。

#### 🔁 **【过去14天内已出现】** [CoEvoKG: Co-Evolving Knowledge Graphs with Self-Evolving Search Agents](http://arxiv.org/abs/2608.01904v1)
Z. Li et al. | 2026-08-03 | 知识图谱与自进化搜索 Agent 协同演化，保留搜索中获取的知识；关联：自我改进 Agent 的持续学习新范式。

### LLM Agent Society

#### [History Matters: Meta-policy Delegation with Heterogeneous Multi-agent Reinforcement Learning](http://arxiv.org/abs/2608.03833v1)
Z. Lu et al. | 2026-08-04 | 异构多智能体系统中基于历史信息的元策略委托；关联：为社会性 Agent 协作提供可扩展委托决策方法。

## 具身智能

### 视觉-语言-动作模型

#### [How Should Vision-Language-Action Models Use Proprioceptive State?](http://arxiv.org/abs/2608.03052v1)
Y. Zhao et al. | 2026-08-04 | 系统比较本体感受状态的不同接入方式与帧数影响；关联：为 VLA 架构的本体感受融合提供设计指引。

#### [Track4Action: Distilling World-Centric 3D Tracker into Vision-Language-Action Policies](http://arxiv.org/abs/2608.03727v1)
C. Wang et al. | 2026-08-04 | 将 3D 跟踪器蒸馏进 VLA，以动作引起 3D 变化作为监督；关联：增强 VLA 对世界动态的理解。

#### [ValueFormer: A Causal Transformer Value Function with Stage-Aware Labels for Semi-Autonomous Vision-Language-Action Policies](http://arxiv.org/abs/2608.02958v1)
I. Sa et al. | 2026-08-03 | 带阶段标签的因果值函数为 VLA 提供任务进度感知；关联：弥补行为克隆缺乏进度信号的问题。

#### [Continue or Replan? Bernoulli-Continuation Policy Learning for Adaptive Horizon Execution](http://arxiv.org/abs/2608.03483v1)
W. Xu et al. | 2026-08-04 | 学习伯努利继续/重规划策略，自适应执行步长；关联：改进 VLA 固定 chunk 重规划的僵化机制。

#### [Structure-Aware Robust Fine-Tuning: Defending Vision-Language-Action Robots Against Physical Attention Hijacking](http://arxiv.org/abs/2608.03231v1)
J. Zhang et al. | 2026-08-04 | 提出结构感知鲁棒微调，防御物理补丁对 VLA 的注意力劫持；关联：直接提升 VLA 物理世界鲁棒性。

#### [DRIFT: Derailing Denoising Trajectories of Flow-Matching VLAs with Adversarial Patch Attack](http://arxiv.org/abs/2608.03207v1)
H. Tae et al. | 2026-08-04 | 用对抗补丁攻击 flow-matching VLA，揭示其鲁棒性为假象；关联：警示 VLA 安全评估不能只看表面。

#### 🔁 **【过去14天内已出现】** [ChainVLA: Chaining Vision-Language-Action Queries through a Unified Execution State for Long-Horizon Manipulation](http://arxiv.org/abs/2608.02326v2)
Y. Huang et al. | 2026-08-03 | 用统一执行状态链接 VLA 查询，支持长时操作；关联：为 VLA 长期任务提供状态记忆架构。

### 具身导航

#### [SUV: Future Scene Understanding as Video Generation for End-to-End Driving](http://arxiv.org/abs/2608.03084v1)
Y. Yuan et al. | 2026-08-04 | 将未来场景理解统一为视频生成任务用于端到端驾驶；关联：生成式世界模型驱动导航决策。

#### [PolyLayout: Multi-room Manhattan Layout Estimation](http://arxiv.org/abs/2608.03323v1)
G. Hanning et al. | 2026-08-04 | 从多视图图像估计多房间 Manhattan 布局，泛化性强；关联：为室内导航提供场景结构先验。

#### 🔁 **【过去14天内已出现】** [Linear Multi-Timescale Retention as a Memory-Efficient Vision-Language Bridge](http://arxiv.org/abs/2608.01614v1)
A. Yeafi et al. | 2026-08-03 | 用线性多尺度 retention 替代 softmax 注意力作为视觉-语言桥；关联：为导航 VLM 提供线性复杂度视觉编码。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [ATFlash: Per-RoPE-Wavelength Attention Windows for Compute/Memory-Efficient LLM Inference](http://arxiv.org/abs/2608.02947v1)
S. Hayashi et al. | 2026-08-03 | 按 RoPE 波长设置注意力窗口，剪枝远距离查询-键对；关联：实现计算/内存高效的 LLM 推理。

#### [When Compression Scores Cannot Decide: Information Boundaries for Group-Robust LLM Pruning](http://arxiv.org/abs/2608.02940v1)
A. Zhang | 2026-08-03 | 刻画压缩统计量无法区分候选模型的信息边界；关联：为 LLM 剪枝候选选择提供可靠性分析。

#### [LLM Serving in the Wild: An Empirical Study of Frameworks, Methods, and System Designs](http://arxiv.org/abs/2608.03036v1)
F. Majidi et al. | 2026-08-04 | 对 LLM 服务框架、方法与系统设计的实证研究；关联：为推理优化提供工程决策依据。

### 多模态大模型剪枝

#### [Adaptive Two-Stage Visual Token Pruning for Efficient Inference in Video-Language Models](http://arxiv.org/abs/2608.03112v1)
P. Regmi et al. | 2026-08-04 | 两阶段自适应视觉 token 剪枝降低视频语言模型推理延迟；关联：直接提升多模态推理效率。

#### [GSTEP: Global Spatio-Temporal Density-Driven Visual Token Pruning for Efficient Video Large Language Models](http://arxiv.org/abs/2608.03083v1)
M. Zhang et al. | 2026-08-04 | 全局时空密度驱动的视觉 token 剪枝策略；关联：缓解 VideoLLM 长视频冗余 token 开销。

#### 🔁 **【过去14天内已出现】** [ET-Prune: Evidence-Aware Dynamic Budgeting for Visual Token Pruning in Text-Rich MLLMs](http://arxiv.org/abs/2608.01979v1)
Z. Ding et al. | 2026-08-03 | 证据感知动态预算，为文本密集任务保留关键视觉 token；关联：解决 OCR 场景下固定剪枝比失配问题。

### 持续学习

#### [MoEGen: Mixture-of-Experts for Instance-Adaptive LoRA Generation](http://arxiv.org/abs/2608.03275v1)
Y. Zeng et al. | 2026-08-04 | MoE 生成实例自适应 LoRA，避免专家存储线性增长；关联：为持续学习中的参数高效扩展提供新思路。

#### [OliveGemma: A 3 Billion Visual Language Model for Recognising the Mediterranean & European Diet](http://arxiv.org/abs/2608.03428v1)
D. I. Zaridis et al. | 2026-08-04 | 3B VLM 用于地中海/欧洲饮食细粒度识别；关联：展示领域 VLM 微调与持续适配实践。

#### 🔁 **【过去14天内已出现】** [Z-PEFT: Zero-shot Backdoor Detection in Parameter-Efficient Fine-Tuning via Canonical Spectral Signatures](http://arxiv.org/abs/2608.02271v1)
N. Pitzalis et al. | 2026-08-03 | 用谱特征零样本检测 PEFT 模型中的后门；关联：保障持续学习/微调流程安全。

#### 🔁 **【过去14天内已出现】** [Learning What to Remember: Test-Time Training via Context Distillation](http://arxiv.org/abs/2608.01672v1)
Z. Wang et al. | 2026-08-03 | 通过上下文蒸馏进行测试时训练，只保存未来相关信息；关联：将持续学习与记忆选择结合。

## 视觉感知

### 事件相机视觉感知

#### [PLS-Calib: A Partial Least Squares Framework for Event Camera and Odometry Calibration under Ground Motion Constraints](http://arxiv.org/abs/2608.03296v1)
G. Li et al. | 2026-08-04 | 部分最小二乘框架，地面运动约束下标定事件相机与里程计外参；关联：提升地面机器人事件相机感知精度。

### 3D 点云视觉感知

#### [Lightweight 3D Object Detection via Mamba-Based Knowledge Distillation](http://arxiv.org/abs/2608.03490v1)
Q. C. Ninh et al. | 2026-08-04 | 基于 Mamba 的知识蒸馏实现轻量 LiDAR 3D 检测；关联：平衡点云检测精度与计算效率。

#### [TDVR: Joint Text Disambiguation and Viewpoint Reasoning for Zero-Shot 3D Visual Grounding](http://arxiv.org/abs/2608.03763v1)
Q. Du et al. | 2026-08-04 | 联合文本消歧与视角推理改进 zero-shot 3D 视觉定位；关联：解决弱文本描述和视角不足下的定位问题。

#### [Test Time Adaptation Methods for Point Cloud Registration in Laparoscopic Surgery](http://arxiv.org/abs/2608.02883v1)
N. Bodelot et al. | 2026-08-03 | 为腹腔镜手术点云配准设计测试时适应方法；关联：解决真实手术数据的域偏移问题。

#### [NCGR: Noise-Conditional Gated Rectification for Camera Extrinsic Perturbations in BEV 3D Object Detection](http://arxiv.org/abs/2608.03895v1)
W. Pan et al. | 2026-08-04 | 噪声条件门控校正外参扰动下的 BEV 3D 检测；关联：增强 3D 检测对相机外参噪声的鲁棒性。

## 跨方向信号

1. **测试时计算成为跨域共性趋势**：从 LLM 推理扩展至 Agent 自我改进、生成模型安全与 3D 感知（12, 8, 10, 26）。
2. **记忆机制在 Agent 与 VLA 中同步深化**：长期记忆管理、隐私保护与统一执行状态互相借鉴（16, 21, 27, 38）。
3. **视觉 token 剪枝成为多模态推理优化的主路径**：从静态比例走向两阶段、时空密度、证据感知等自适应策略（5, 6, 41）。
4. **VLA 安全对抗研究集中爆发**：物理补丁攻击、鲁棒微调与伪鲁棒性揭示并行推进（1, 31）。
5. **世界模型与生成预测融入具身决策**：视频生成、3D 跟踪与世界中心表征共同增强 agents 对物理世界的预测能力（2, 20, 34）。

## 优先精读

#### - **[Test-Time Scaling in Reasoning LLMs: Inference Regimes, Evaluation, and Reproducibility](http://arxiv.org/abs/2608.04001v1)**：对 TTS 推理范式、评估与可复现性进行系统综述，适合建立该方向的全局认知，支撑后续实验设计。
#### - **[How Should Vision-Language-Action Models Use Proprioceptive State?](http://arxiv.org/abs/2608.03052v1)**：首次系统对比 VLA 中本体感受状态的不同接入方式，直接影响 VLA 架构选择与训练策略。
#### - **[DRIFT: Derailing Denoising Trajectories of Flow-Matching VLAs with Adversarial Patch Attack](http://arxiv.org/abs/2608.03207v1)**：揭示 flow-matching VLA 对物理对抗样本的鲁棒性假象，对机器人安全部署具有重要警示意义。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*