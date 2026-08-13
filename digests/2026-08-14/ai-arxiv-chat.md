# 实验室研究方向 Radar 2026-08-14

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 14 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-08-13 22:34 UTC

---

# 研究方向 Radar

## 今日总览

- LLM Agent 与多智能体 / LLM Agent 工程：今日 3 篇新论文，聚焦 LLM agent 的轨迹级不确定性量化、后门净化与第三方技能劫持风险。
- LLM Agent 与多智能体 / Agent 测试时扩展与自我改进：今日 3 篇新论文，显示测试时扩展正从“增加采样”转向“定向验证”，并延伸到具身智能体的自我进化。
- LLM Agent 与多智能体 / LLM Agent Society：今日暂无新论文。
- 具身智能 / 视觉-语言-动作模型：今日候选 6 篇，去重后高相关 3 篇，突出上下文结构化示范、单流自回归决策和视觉语言规划。
- 具身智能 / 具身导航：今日候选 3 篇，去重后直接相关 1 篇，聚焦空中视觉语言导航；另外两篇归入 3D 点云感知与 VLA。
- 模型压缩与持续学习 / LLM 剪枝与推理优化：今日 1 篇新论文，将词表大小视为部署阶段相关的推理成本参数。
- 模型压缩与持续学习 / 多模态大模型剪枝：今日暂无新论文。
- 模型压缩与持续学习 / 持续学习：今日 1 篇新论文，从层间信息论视角分析重放式持续学习。
- 视觉感知 / 事件相机视觉感知：今日暂无新论文。
- 视觉感知 / 3D 点云视觉感知：今日 2 篇新论文，分别面向跨模态 3D 场景理解和单目 3D 检测。
- 视觉感知 / 3D 点云感知与跟踪：今日暂无新论文。

## LLM Agent 与多智能体

### LLM Agent 工程

#### [Beyond Single-Turn Confidence: Trajectory-Adapted Uncertainty Quantification for LLM Agents](http://arxiv.org/abs/2608.11552v1)

- 作者缩写：D. Bouchard, M. S. Chauhan
- 发布日期：2026-08-12
- 核心贡献：将 LLM agent 的不确定性量化从单轮答案扩展到整条交互轨迹。
- 方向关联：为 agent 工程提供更贴合真实部署的轨迹级置信度评估方法。

#### [Convergent Detour Hijacking: Task-Preserving Resource Amplification in Skill-Based LLM Agents](http://arxiv.org/abs/2608.12273v1)

- 作者缩写：J. Liu, R. Li, W. Tang et al.
- 发布日期：2026-08-12
- 核心贡献：发现第三方技能可在不破坏任务目标的前提下劫持 agent 路径并放大资源消耗。
- 方向关联：揭示 skill-based LLM agent 工程中的新型供应链安全风险。

#### [Backdoor Decontamination Dynamics in LLM Agents](http://arxiv.org/abs/2608.11295v1)

- 作者缩写：G. Huang, A. Puri, L. Boisvert et al.
- 发布日期：2026-08-11
- 核心贡献：分析在未知触发器条件下安装已知后门以清除未知后门的动态过程。
- 方向关联：为 LLM agent 部署提供后门净化与防御策略。

### Agent 测试时扩展与自我改进

#### [Towards Understanding On-Policy Distillation through the Lens of Test-Time Scaling](http://arxiv.org/abs/2608.11829v1)

- 作者缩写：X. Ge, Z. Zhang, Y. Huang et al.
- 发布日期：2026-08-12
- 核心贡献：从测试时扩展视角重新审视 on-policy distillation，挑战“蒸馏强教师后能力必然提升”的假设。
- 方向关联：直接关联测试时扩展与 LLM 推理自我改进机制。

#### [Claim-Level Reliability Assessment for Efficient Test-Time Reasoning](http://arxiv.org/abs/2608.11994v1)

- 作者缩写：S. Xu, W. Wang, S. Liu et al.
- 发布日期：2026-08-12
- 核心贡献：提出 claim-level falsification，将测试时算力从额外采样转向针对性子验证。
- 方向关联：为 agent 测试时扩展提供更高效的算力分配原则。

#### [Self-Evolving Embodied Agents via Skill-Harness Evolution](http://arxiv.org/abs/2608.11350v1)

- 作者缩写：P. Wang, Z. Ma, Y. Chang et al.
- 发布日期：2026-08-11
- 核心贡献：通过进化技能、上下文、动作接口和执行 harness 实现具身智能体自我改进。
- 方向关联：将“自我改进”从权重更新扩展到 agent 完整装备层。

### LLM Agent Society

今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [StellaVLA: In-Context Structured Demonstration for Generalizable Vision-Language-Action Models](http://arxiv.org/abs/2608.11671v1)

- 作者缩写：S. Xu, Y. Wang, Z. Wang et al.
- 发布日期：2026-08-12
- 核心贡献：用上下文结构化示范提升 VLA 模型在场景、视角和物体分布变化下的泛化能力。
- 方向关联：直接改进 VLA 模型的少样本与分布外适应能力。

#### [G0.5: One Autoregressive Stream for Robot Reasoning and Action](http://arxiv.org/abs/2608.11739v1)

- 作者缩写：Y. Liu, Z. Dong, B. Ye et al.
- 发布日期：2026-08-12
- 核心贡献：提出单一自回归 Transformer 流同时输出机器人推理与动作，替代“VLM + flow-matching action expert”范式。
- 方向关联：为 VLA 架构提供统一的“决策者”式新范式。

#### [HUGIN: Enhancing Vision-Language Planning for Autonomous Logistics Sorting](http://arxiv.org/abs/2608.11692v1)

- 作者缩写：X. Sun, C. Zhou, K. Liu et al.
- 发布日期：2026-08-12
- 核心贡献：将自主物流分拣建模为多场景联合理解任务，用开放世界视觉理解与任务规划求解。
- 方向关联：展示视觉语言规划在具身工业场景中的新任务建模方式。

### 具身导航

#### [DreamFly: Causal Memory and Receding-Horizon Diffusion Planning for Aerial Vision-Language Navigation](http://arxiv.org/abs/2608.12308v1)

- 作者缩写：Y. Deng, F. Xu
- 发布日期：2026-08-12
- 核心贡献：面向空中视觉语言导航提出因果记忆与滚动时域扩散规划，解决局部可观测下的目标判定。
- 方向关联：直接落在具身导航任务，并探索 VLA 模型在空域导航中的适配。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [Lifecycle-Optimal Tokenization: Vocabulary Size as a Deployment-Regime-Dependent Infrastructure Parameter](http://arxiv.org/abs/2608.11361v1)

- 作者缩写：R. Mittal, A. Gubrani, S. Kakollu
- 发布日期：2026-08-11
- 核心贡献：证明词表大小的成本最优值取决于部署/服务场景，而非训练时应固定的常量。
- 方向关联：将 tokenizer 词表设计纳入 LLM 推理优化与部署权衡。

### 多模态大模型剪枝

今日暂无新论文。

### 持续学习

#### [Drift and Dependence: Layer-wise Information-Theoretic Bounds for Replay-Based Continual Learning](http://arxiv.org/abs/2608.11690v1)

- 作者缩写：T. Gong, Z. Zhang, W. Wen et al.
- 发布日期：2026-08-12
- 核心贡献：给出重放式持续学习的层间信息论泛化界，刻画表示漂移与任务依赖之间的耦合。
- 方向关联：为持续学习中的重放策略提供理论分析依据。

## 视觉感知

### 事件相机视觉感知

今日暂无新论文。

### 3D 点云视觉感知

#### [STAR: A Spatial-Topology Aware Routing Framework for Generalizable 3D Scene Understanding](http://arxiv.org/abs/2608.11699v1)

- 作者缩写：M. Xing, X. Wang, Y. Shi
- 发布日期：2026-08-12
- 核心贡献：提出空间-拓扑感知的 MoE 路由，缓解跨传感器模态下的 3D 场景理解拓扑差异。
- 方向关联：面向多域 3D 点云/场景理解，是点云感知泛化的重要探索。

#### [Map-Det3D: Metric Feed-Forward 3D Reconstruction Prior for Multi-view 3D Object Detection from Streaming Inputs](http://arxiv.org/abs/2608.12179v1)

- 作者缩写：Y.-H. Yang, L. Piccinelli, S. Rota Bulò et al.
- 发布日期：2026-08-12
- 核心贡献：用前馈度量 3D 重建先验替代深度传感器，支持从流式多视角输入进行单目 3D 检测。
- 方向关联：为具身智能提供不依赖深度传感器的 3D 检测能力。

### 3D 点云感知与跟踪

今日暂无新论文。

## 跨方向信号

- 测试时扩展正从 LLM 推理迁移到 agent 与具身系统，形成“采样验证 + 自我进化”的通用方法论趋势。
- VLA 架构从“VLM 仅作上下文编码器”转向统一自回归决策流和上下文示范，同时扩散到空中导航与工业分拣规划。
- LLM agent 的安全与可靠性成为部署刚需，轨迹级不确定性、后门净化和技能劫持被同时纳入 agent 工程视野。
- 3D 感知通过路由先验和重建先验提升跨域、无传感器泛化，为具身导航与操作提供更稳健的视觉基础。

## 优先精读

- **StellaVLA**：面向 VLA 分布外泛化，用上下文示范避免微调成本，对 VLA 和具身导航均有直接影响。
- **G0.5**：单流自回归 VLA 直接挑战当前主流两段式架构，值得作为架构演进的候选方向完整评估。
- **Beyond Single-Turn Confidence**：轨迹级不确定性量化是 LLM agent 可靠部署的关键基础设施，且可与测试时扩展、安全监控联动。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*