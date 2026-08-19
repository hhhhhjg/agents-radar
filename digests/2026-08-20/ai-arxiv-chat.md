# 实验室研究方向 Radar 2026-08-20

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 13 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-08-19 22:18 UTC

---

## 今日总览

- **LLM Agent 工程（主方向：LLM Agent 与多智能体）**：三篇新论文围绕任务感知式 harness 配置、harness 安全生命周期基准、低 GPU 长期 Agent 优化，显示工程重点正从统一工具接口转向自适应权限、安全审计与高效训练。
- **Agent 测试时扩展与自我改进（主方向：LLM Agent 与多智能体）**：论文提出测试时经验链与在线学习理论框架，指向不重训、通过交互经验持续提升 Agent 的路径。
- **LLM Agent Society（主方向：LLM Agent 与多智能体）**：今日暂无新论文。
- **视觉-语言-动作模型（主方向：具身智能）**：三篇论文分别处理人形 VLA 立体证据融合、视觉线索遵循安全基准、驾驶模型推理时注意力引导，突出预训练表征兼容性与安全可控性。
- **具身导航（主方向：具身智能）**：两篇论文分别诊断条件分支导航、提出 VLM 友好的高效导航范式；另有 legal RAG 检索项相关性不足，未纳入。
- **LLM 剪枝与推理优化（主方向：模型压缩与持续学习）**：今日暂无新论文。
- **多模态大模型剪枝（主方向：模型压缩与持续学习）**：今日暂无新论文。
- **持续学习（主方向：模型压缩与持续学习）**：间隔重复式重放策略针对遗忘速度自适应调度，另有 VLM 仪表读数迁移研究提供部署侧证据。
- **事件相机视觉感知（主方向：视觉感知）**：今日暂无新论文。
- **3D 点云视觉感知（主方向：视觉感知）**：今日暂无新论文。
- **3D 点云感知与跟踪（主方向：视觉感知）**：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [Task-Aware Harness Provisioning for LLM Agents in Mission-Critical Infrastructure Operations](http://arxiv.org/abs/2608.17433v1)
Liangtao Lin 等 | 2026-08-18 | 核心：提出按任务供给 LLM Agent 可访问信息、工具与动作的 harness 配置，避免一刀切权限。关联：直接面向 LLM Agent 工程中的 harness 最小化与任务自适应设计。

#### [HarnessRisk: A Lifecycle-Oriented Benchmark for Agent Harness Safety](http://arxiv.org/abs/2608.17597v1)
Yajing Bai 等 | 2026-08-18 | 核心：构建覆盖工具、扩展、持久状态、权限和外部动作的 Agent harness 安全生命周期基准。关联：为 LLM Agent 工程提供系统化安全评估手段。

#### [Agentic ESOpt: Fine-Tuning Long-Horizon LLM Agents with Minimal GPU Requirements](http://arxiv.org/abs/2608.17310v1)
Zhi Zheng 等 | 2026-08-18 | 核心：用轻量演化优化替代 RL 反向传播，微调长程 LLM Agent，应对分支交互与稀疏奖励。关联：降低 Agent 工程中训练与部署的资源门槛。

### Agent 测试时扩展与自我改进

#### [Chain-of-Experience for Continual LLM Improvement](http://arxiv.org/abs/2608.18027v1)
Haoqin Tu 等 | 2026-08-18 | 核心：研究 LLM 能否在测试时通过迭代交互经验持续改进，提出 Chain-of-Experience 评测范式。关联：直接对应测试时自我改进与“在经验中学习”。

#### [The concentration game: Bayesian updating, regret, and information](http://arxiv.org/abs/2608.18061v1)
Akshay Balsubramani | 2026-08-18 | 核心：以学习者和自然的两方零和博弈统一贝叶斯更新、指数权重遗憾与比较器类变分形式。关联：为 Agent 测试时在线更新与遗憾分析提供理论框架。

### LLM Agent Society

今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [EATR-Stereo: Embodiment-Aware Routing of Paired Stereo Evidence for Humanoid Vision-Language-Action Control](http://arxiv.org/abs/2608.17453v1)
Songwei Wu 等 | 2026-08-18 | 核心：提出体感感知的立体证据路由，在保留预训练 VLA 表征的同时利用双目互补证据。关联：改进人形 VLA 的视觉接口与多视角融合方式。

#### [LIBERO-VIFO: Benchmarking the Capability and Safety of Visual Cue Following in Vision-Language-Action Models](http://arxiv.org/abs/2608.17600v1)
Zhengyan Qian 等 | 2026-08-18 | 核心：构建测试 VLA 模型遵循授权视觉线索并忽略未授权线索的能力与安全基准。关联：补充 VLA 在视觉提示服从性上的评测维度。

#### [Inference-Time Attention Steering for Vision-Language-Action Driving Models](http://arxiv.org/abs/2608.17095v1)
Darshan Nagendra Prasad 等 | 2026-08-17 | 核心：用有界 pre-softmax 注意力偏置，在推理时将 VLA 驾驶模型注意力引向安全关键对象。关联：为 VLA 提供无需重训的推理时行为干预手段。

### 具身导航

#### [If, Then, Otherwise: Diagnosing Conditional Branching in Vision-Language Navigation](http://arxiv.org/abs/2608.17318v1)
Seoyoung Lee 等 | 2026-08-18 | 核心：诊断 VLN 智能体沿条件分支指令（if-then-otherwise）导航的能力。关联：揭示现有具身导航评测对状态依赖指令的覆盖不足。

#### [Embodied-Navigator: Point, Think, Memorize, and Align for Efficient Navigation](http://arxiv.org/abs/2608.17512v1)
Hongyan Feng 等 | 2026-08-18 | 核心：提出“指点-思考-记忆-对齐”的 VLM 导航范式，使动作空间与 2D 预训练先验对齐。关联：提升 VLM 在具身导航中的部署效率与可解释性。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

今日暂无新论文。

### 多模态大模型剪枝

今日暂无新论文。

### 持续学习

#### [When to Review: Spaced Repetition for Continual Pre-Training of Language Models](http://arxiv.org/abs/2608.17530v1)
Alankar Atreya 等 | 2026-08-18 | 核心：将持续预训练建模为自适应间隔重复，按样本遗忘速度选择旧/新数据混合。关联：直接缓解持续学习中的灾难性遗忘。

#### [Vision-Language Models for Analog Gauge Reading: An Empirical Study of Specialization, Transfer and Reliability](http://arxiv.org/abs/2608.17723v1)
Abdul Mueez 等 | 2026-08-18 | 核心：系统评估 VLM 在模拟仪表读数上的领域专业化、迁移与可靠性。关联：为 VLM 在工业持续部署中的迁移与可靠性评估提供证据。

## 视觉感知

### 事件相机视觉感知

今日暂无新论文。

### 3D 点云视觉感知

今日暂无新论文。

### 3D 点云感知与跟踪

今日暂无新论文。

## 跨方向信号

- **安全与授权边界成为评估重点**：LIBERO-VIFO、HarnessRisk、If-Then-Otherwise 均不再只看最终任务成功，而是要求模型识别授权线索、条件分支与权限边界，影响 VLA、Agent 工程和具身导航。
- **推理时干预与测试时学习兴起**：Attention Steering 与 Chain-of-Experience 分别通过注意力偏置和交互经验链改变模型行为，避免重训，呼应 Agent 测试时扩展与自我改进方向。
- **保留预训练表征的轻量适配**：EATR-Stereo 与 Embodied-Navigator 都强调与预训练 VLM 表征兼容，用模块化接口或记忆机制做适配，而非整体重训。
- **资源效率与遗忘感知**：Agentic ESOpt 以低 GPU 微调长程 Agent，When to Review 按遗忘速度调度重放数据，共同关注资源受限条件下的持续改进。

## 优先精读

- **LIBERO-VIFO**：首次系统定义“遵守授权视觉线索/忽略未授权线索”的 VLA 安全能力，直接补足现有机器人学习评测缺口。
- **Agentic ESOpt**：挑战长程 Agent 微调对 RL 反向传播的依赖，以极低 GPU 需求实现优化，对 Agent 工程和自改进均有直接价值。
- **EATR-Stereo**：解决人形 VLA 双目标定与预训练表征兼容的现实问题，“立体证据路由”思想可推广到多模态融合。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*