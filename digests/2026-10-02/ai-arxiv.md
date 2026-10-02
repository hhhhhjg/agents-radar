# 实验室研究方向 Radar 2026-10-02

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 14 篇新文献 + 4 篇过去14天内已出现 | 生成时间：2026-10-02 01:14 UTC

---

## 今日总览
- 主方向：LLM Agent 与多智能体；子方向：LLM Agent 工程——今日暂无新论文。
- 主方向：LLM Agent 与多智能体；子方向：Agent 测试时扩展与自我改进——配置命中 10 篇新文献，核心纳入 9 篇；趋势集中在 TTS 预算可信化、序列探索、TTRL 入口态、terminal agent 行动可靠性与 self-play 技能发现。OrbitTAMP 偏任务规划，未纳入核心分方向。
- 主方向：LLM Agent 与多智能体；子方向：LLM Agent Society——今日暂无新论文。
- 主方向：具身智能；子方向：视觉-语言-动作模型——今日暂无新论文。
- 主方向：具身智能；子方向：具身导航——今日暂无新论文。
- 主方向：模型压缩与持续学习；子方向：LLM 剪枝与推理优化——今日暂无新论文。
- 主方向：模型压缩与持续学习；子方向：多模态大模型剪枝——今日暂无新论文；过去 14 天已出现 2 篇。
- 主方向：模型压缩与持续学习；子方向：持续学习——今日暂无新论文。
- 主方向：视觉感知；子方向：事件相机视觉感知——1 篇新文献，聚焦 SNN 低算力 OOD；1 篇过去 14 天已出现，聚焦事件单目深度。
- 主方向：视觉感知；子方向：3D 点云视觉感知——2 篇新文献，聚焦非规则几何架构与异步协同检测；1 篇过去 14 天已出现，聚焦 LiDAR 长尾检测。
- 主方向：视觉感知；子方向：3D 点云感知与跟踪——配置命中 1 篇新文献，但摘要为儿科喘鸣检测，与 3D 点云感知/跟踪无实质关联，按相关性优先不纳入；今日暂无高相关新论文。

## LLM Agent 与多智能体
### Agent 测试时扩展与自我改进
#### [How Much Can Language Models Gain from Test-Time Computation?](http://arxiv.org/abs/2610.01110v1)
Yang 等 | 2026-10-01 | 核心：提出 SELF-POT 基准，将选择成本计入预算，跨域衡量测试时计算收益。 | 关联：为 Agent TTS 的收益-成本评估提供统一标尺。

#### [Sharpen Before You Adapt: Data-Free Entry-State Sharpening for Test-Time Reinforcement Learning](http://arxiv.org/abs/2610.00903v1)
Zhang 等 | 2026-10-01 | 核心：在 TTRL 前对 checkpoint 入口态做无数据锐化，提升自监督信号质量。 | 关联：直接改进测试时强化学习的自我改进效率。

#### [Towards Better Exploration in Sequential Test-Time Scaling](http://arxiv.org/abs/2609.39632v1)
Rance 等 | 2026-09-30 | 核心：针对序列测试时扩展长期停滞，改善探索以持续提升。 | 关联：解决 Agent 推理中 TTS 扩展衰减。

#### [Taming Speculative Search for Test-Time Scaling in LLM Serving](http://arxiv.org/abs/2609.39334v1)
Jeong 等 | 2026-09-30 | 核心：为 LLM 服务中的投机搜索与 TTS 路径探索做系统优化。 | 关联：提升推理服务中 Agent TTS 的吞吐与可行性。

#### [Cheap to Draw, Expensive to Trust: Certifying Test-Time Scaling Curves](http://arxiv.org/abs/2609.40190v1)
Sohail 等 | 2026-09-30 | 核心：质疑仅凭采样-验证 scaling curve 分配预算，提出认证视角。 | 关联：为 Agent 自我改进的选择与验证提供可信度校准。

#### [What Limits Recursive Reasoning Models: Optimization, Architecture and Test-Time Scaling](http://arxiv.org/abs/2609.39967v1)
Shakhvalieva 等 | 2026-09-30 | 核心：分析递归推理模型在优化、架构和 TTS 上的限制。 | 关联：为循环深度与测试时扩展求解器提供机理认识。

#### [Game-Guided Skill Discovery through Self-Play for Playable Agent Control](http://arxiv.org/abs/2609.40137v1)
Rho 等 | 2026-09-30 | 核心：用游戏自博弈发现人类可玩、可复用的运动技能。 | 关联：将 self-play 自我改进扩展到具身 Agent 的技能抽象。

#### [Mid-Harness: Scaling Actions Between Model and Harness for Terminal Agents](http://arxiv.org/abs/2609.39982v1)
Kang 等 | 2026-09-30 | 核心：在模型与执行环境间扩展行动，关注终端 Agent 行动可靠性。 | 关联：把 TTS 从 token 搜索推进到工具与行动执行层。

#### [Scaling Laws for Looped Mixture of Experts](http://arxiv.org/abs/2609.40316v1)
Chen 等 | 2026-09-30 | 核心：联合建模循环 transformer 与 MoE 的 scaling law。 | 关联：为固定参数下增加推理计算深度提供基础 scaling 依据。

## 模型压缩与持续学习
### 多模态大模型剪枝
🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [Representation Dynamics Reveal Semantic Saliency and Similarity for Visual Token Pruning in MLLMs](http://arxiv.org/abs/2609.36916v2)
Li 等 | 2026-09-29 | 核心：分析 MLLM 表示动态，用于视觉 token 剪枝的语义显著性和相似性判断。 | 关联：直接服务 MLLM 推理加速。

🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [TReVS: Integrating Textual Relevance and Visual Saliency for Efficient Vision-Language Model Token Pruning](http://arxiv.org/abs/2609.37581v1)
Wang 等 | 2026-09-29 | 核心：结合文本相关性与视觉显著性做 VLM 两阶段 token 剪枝。 | 关联：降低 VLM 推理成本。

## 视觉感知
### 事件相机视觉感知
#### [Vmem-$\varphi$: Low-Compute Out-of-Distribution Detection in Spiking Neural Networks from Membrane-Potential Statistics](http://arxiv.org/abs/2610.00350v1)
Rana 等 | 2026-09-29 | 核心：用膜电位统计在 SNN 中做低算力 OOD 检测。 | 关联：面向事件相机 SNN 部署的可靠感知。

🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [SFE-VGGT: Source-Free VGGT Distillation for Event-Based Monocular Depth Estimation](http://arxiv.org/abs/2609.36929v1)
Nguyen 等 | 2026-09-29 | 核心：无源 VGGT 蒸馏用于事件单目深度，摆脱 RGB-event 同步或深度标注。 | 关联：缓解事件相机深度估计的部署约束。

### 3D 点云视觉感知
#### [Atomizer-IO: Beyond Pixels, Patches and Grids](http://arxiv.org/abs/2609.40320v1)
Riffaud de Turckheim 等 | 2026-09-30 | 核心：提出超越像素、块与网格的集合式视觉架构，适应几何、通道、时序可变感知数据。 | 关联：提升非规则点云与几何数据建模通用性。

#### [EgoRefine: Ego-Referenced Predictive Alignment and Trajectory-Conditioned Reliability-Aware Fusion for Asynchronous Collaborative Perception](http://arxiv.org/abs/2610.00319v1)
Kong 等 | 2026-09-29 | 核心：面向异步协同感知，做 ego 参考预测对齐与轨迹条件可靠性融合。 | 关联：提升多智能体 3D 检测在延迟下的鲁棒性。

🔁 **【过去14天内已出现】**
#### 🔁 **【过去14天内已出现】** [GA-EIRFS: A Geometry-Augmented Repeat-Factor Sampling Method for Long-Tailed LiDAR 3D Object Detection](http://arxiv.org/abs/2609.38116v1)
Ahmed 等 | 2026-09-29 | 核心：几何增强重复因子采样处理 LiDAR 长尾 3D 检测。 | 关联：从可观测性而非仅类频率改善点云检测。

## 跨方向信号
- TTS 评估从“画 scaling curve”转向“认证曲线、计入选择成本、锐化入口态”，可信度与预算约束成为核心。
- Agent 测试时扩展外溢到行动执行、终端环境与 self-play 技能发现，TTS 与 Agent 工程/自我改进边界变模糊。
- 视觉 token 剪枝持续聚焦 MLLM/VLM 的表示动态和文本-视觉联合显著性，推理优化与多模态理解耦合。
- 3D 感知强调非规则几何、异步协同和长尾可观测性，通用集合架构与可靠性融合成为共同路径。
- 事件相机与 SNN/蒸馏结合，低算力 OOD 和无源深度估计显示部署导向的事件视觉趋势。

## 优先精读
#### - [How Much Can Language Models Gain from Test-Time Computation?](http://arxiv.org/abs/2610.01110v1)：提供跨域 TTC 收益/成本基准 SELF-POT，适合统一评估 Agent TTS。
- [Sharpen Before You Adapt](http://arxiv.org/abs/2610.00903v1)：TTRL 入口态锐化直接改进测试时自我改进，方法可迁移。
- [EgoRefine](http://arxiv.org/abs/2610.00319v1)：异步协同 3D 感知代表点云检测在延迟与可靠性下的新融合思路。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*