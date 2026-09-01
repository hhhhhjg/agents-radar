# 实验室研究方向 Radar 2026-09-02

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 45 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-01 23:43 UTC

---

## 今日总览

- LLM Agent 与多智能体 / LLM Agent 工程：今日新论文聚焦长程 Agent 评估、工具安全、技能压缩与系统化架构。
- LLM Agent 与多智能体 / Agent 测试时扩展与自我改进：今日新论文将推理时扩展统一为搜索，并扩展到几何推理与自演化课程。
- LLM Agent 与多智能体 / LLM Agent Society：今日有 1 篇新论文，关注多智能体社交博弈中的联合言语与非言语欺骗。
- 具身智能 / 视觉-语言-动作模型：今日新论文集中在 VLA 单步生成、4D 时间对齐、物理常识与闭环记忆。
- 具身智能 / 具身导航：今日新论文利用 VLM 空间智能与基础模型脚手架提升通用及长程导航。
- 模型压缩与持续学习 / LLM 剪枝与推理优化：今日暂无新论文。
- 模型压缩与持续学习 / 多模态大模型剪枝：今日新论文针对 LVLM 视觉 token 剪枝提出几何校正。
- 模型压缩与持续学习 / 持续学习：今日新论文覆盖持续测试时适应、类增量学习和任务条件变换。
- 视觉感知 / 事件相机视觉感知：今日暂无新论文。
- 视觉感知 / 3D 点云视觉感知：今日新论文涉及城市场景点云生成与点云视频自监督。
- 视觉感知 / 3D 点云感知与跟踪：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [ATLAS: Dual-Horizon Diagnostic Evaluation for Industrial Tool-Use Agents](http://arxiv.org/abs/2608.30685v1)
Chen等 · 08-31 · 双时间尺度诊断工具型 Agent 能力，属 Agent 评测工程。

#### [CAST: Critique-Aware Supervision for Training Reliable Long-Horizon Tool-Calling Agents](http://arxiv.org/abs/2608.30147v1)
Saeidi等 · 08-31 · 用 critique 监督拦截不可逆错误，提升长程工具调用可靠性。

#### [Covert Indirect Prompt Injection on Tool-Using LLM Agents](http://arxiv.org/abs/2608.30362v1)
Lee等 · 08-31 · 揭示用户不可见的隐蔽间接提示注入威胁，属 Agent 安全工程。

#### [SkillZip Pro: Execution-Aware Dynamic Compression of Progressively Loaded Skills for Self-Evolving Agents](http://arxiv.org/abs/2608.30785v1)
Bai等 · 08-31 · 按执行路径压缩技能目录，降低自演化 Agent 部署成本。

### Agent 测试时扩展与自我改进

#### [When LLM Meets Tree Search: A Systematic View of Inference as Search in Large Language Models](http://arxiv.org/abs/2608.30395v1)
Wei等 · 08-31 · 将 LLM 测试时扩展系统化为推理状态上的搜索。

#### [Reactivating Test-Time Scaling for Plane Geometry Problem Solving](http://arxiv.org/abs/2608.30156v1)
Kang等 · 08-31 · 恢复平面几何解题中的 TTS，结合视觉感知与多步符号推理。

#### [Beyond Uncertainty: Multi-Solver Disagreement Rewards for Self-Evolving Reasoning Curricula](http://arxiv.org/abs/2608.30035v1)
Selvendran等 · 08-30 · 用多求解器分歧奖励改进自演化推理课程。

### LLM Agent Society

#### [Lies We Can See: Joint Verbal and Non-Verbal Deception by VLM Agents in Embodied Social Interactions](http://arxiv.org/abs/2608.30428v1)
Ahn等 · 08-31 · 研究 VLM Agent 在具身社交博弈中的言语与非言语联合欺骗。

## 具身智能

### 视觉-语言-动作模型

#### [DriftingVLA: Native One-Step Vision-Language-Action Generation via Per-Dimension Temporal Drifting](http://arxiv.org/abs/2608.29749v1)
Gao等 · 08-30 · 原生单步 VLA 生成动作块，降低在线控制延迟。

#### [Temporal Forcing: 4D Representation Alignment for Vision-Language-Action Models](http://arxiv.org/abs/2608.30643v1)
Ding等 · 08-31 · 用 4D 表示对齐为 VLA 补充时间线索，缓解长程操作视觉别名。

#### [CometVLA: Co-Training on an Embodied Data Pyramid towards Physical Understanding](http://arxiv.org/abs/2608.30289v1)
Wan等 · 08-31 · 具身数据金字塔共训练，增强 VLA 物理常识。

#### [PAVE: Predictive Alignment and Value-Guided Evolution for World-Action Policies](http://arxiv.org/abs/2608.30378v1)
Zhao等 · 08-31 · 预测对齐与价值引导演化，改进 VLA 世界-动作策略。

#### [AGM: Achievement-Grounded Memory for Closed-Loop Agents with Frozen VLA Policies](http://arxiv.org/abs/2608.29537v1)
Gao等 · 08-30 · 给冻结 VLA 策略外挂成就记忆，实现闭环继续/重试/终止。

### 具身导航

#### [LightNav-0: Eliciting VLM Spatial Intelligence for Generalist Embodied Navigation](http://arxiv.org/abs/2608.30935v1)
Wang等 · 08-31 · 激发 VLM 空间智能完成通用具身导航，无需额外训练。

#### [Scaffolding Foundation Models into Physical-World Agents Pushes the Frontier of Long-Horizon Navigation](http://arxiv.org/abs/2608.30396v1)
Lei等 · 08-31 · 将基础模型组装为物理世界 Agent，推进长程导航能力。

#### [GeoAgent: Evaluating VLM Geolocalization Through Embodied Navigation](http://arxiv.org/abs/2608.29483v1)
Mukherjee等 · 08-30 · 把 VLM 地理定位评测放进具身导航过程。

## 模型压缩与持续学习

### 多模态大模型剪枝

#### [Centering before Pruning: Lightweight Geometry Correction for Diversity-Based Visual Token Pruning in LVLMs](http://arxiv.org/abs/2608.30263v1)
Wen等 · 08-31 · 对 LVLM 视觉 token 多样性剪枝做几何校正，提升剪枝质量。

### 持续学习

#### [Towards Continual Test-Time Adaptation of Vision-Language Models in Open-Vocabulary Semantic Segmentation](http://arxiv.org/abs/2608.29923v1)
Doloriel等 · 08-30 · 揭示开放词汇分割在持续测试时适应中的 patch 级类坍缩问题。

#### [Continual Test-Time Adaptation via Entropy Sensitivity-Guidance in Strict Online Setting](http://arxiv.org/abs/2608.29920v1)
Doloriel等 · 08-30 · 熵敏感性引导擦除，稳定严格在线 TTA。

#### [One Adapter, Many Tasks: Task-Conditioned Feature Transformations for Continual Learning](http://arxiv.org/abs/2608.31096v1)
Fu等 · 08-31 · 任务条件特征变换实现免旧数据的类增量学习。

## 视觉感知

### 3D 点云视觉感知

#### [GridFlow: Structured Latent Flow for Seamless City-Scale 3D Point Cloud Generation](http://arxiv.org/abs/2608.29793v1)
Wang等 · 08-30 · 结构化潜流生成无缝城市场景点云。

#### [Motion-Saliency Complementary Masked Modeling for Point Cloud Video Understanding](http://arxiv.org/abs/2608.30279v1)
Wang等 · 08-31 · 运动-显著性互补掩码自监督点云视频表示。

## 跨方向信号

- 测试时/推理侧优化正从 LLM 搜索扩展到 VLA 单步生成，延迟与质量的权衡成为共同主线。
- 时间与记忆成为闭环智能的关键：4D 对齐、成就记忆、技能执行感知压缩均强调状态跟踪。
- 评测从聚合成功率走向细粒度诊断与知识门控：ATLAS、Behavior-Skill、Ignorance/Incompetence 等体现该趋势。
- 自我演化/自我改进范式在多领域落地：自演化课程、自博弈驾驶、具身经验演化彼此呼应。
- 持续学习与测试时适应在视觉-语言模型上深度融合：开放词汇分割与严格在线 TTA 形成新研究点。

## 优先精读

- [DriftingVLA](http://arxiv.org/abs/2608.29749v1)：单步 VLA 直击在线控制延迟，可能重塑 VLA 部署方式。
- [When LLM Meets Tree Search](http://arxiv.org/abs/2608.30395v1)：为测试时扩展提供统一搜索视角，指导 Agent TTS 方向。
- [Temporal Forcing](http://arxiv.org/abs/2608.30643v1)：4D 表示对齐是 VLA 解决长程操作与视觉别名的重要尝试。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*