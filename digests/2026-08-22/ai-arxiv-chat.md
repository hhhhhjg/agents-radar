# 实验室研究方向 Radar 2026-08-22

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 12 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-08-21 22:17 UTC

---

# 研究方向 Radar

## 今日总览

- **LLM Agent 与多智能体 / LLM Agent 工程**：今日 3 篇新论文。分别聚焦技能选择的最优化（Optimal Skill Selection）、策略合规的全流程引导（PolicyGuide）以及跨任务技能迁移的可靠性（Break It Down, Pass It On）。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：今日 1 篇新论文。研究了推理模型如何学习自适应分配测试时计算资源（Learning When to Think）。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：今日 3 篇新论文。涉及 VLA 智能体的分支安全对齐（SafeBranch）、VLA 策略的高效探索微调（EXIMO），以及规划导向端到端自动驾驶的综述（Planning-Oriented End-to-End Autonomous Driving）。
- **具身智能 / 具身导航**：今日暂无新论文。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：今日 1 篇新论文。提出通过聚类与 token 去噪加速 VLM 推理（Clustering and Token Denoising）。
- **模型压缩与持续学习 / 多模态大模型剪枝**：今日暂无新论文。
- **模型压缩与持续学习 / 持续学习**：今日 3 篇新论文。涵盖文化遗产场景的联邦持续学习、智能合约漏洞检测中的频率感知持续学习，以及神经模型的半球冗余与专门化持续学习。
- **视觉感知 / 事件相机视觉感知**：今日暂无新论文。
- **视觉感知 / 3D 点云视觉感知**：今日 1 篇新论文，提出开放词汇 3D 目标检测的新框架（Open-Vocabulary 3D Object Detection）。
- **视觉感知 / 3D 点云感知与跟踪**：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [Optimal Skill Selection for LLM Agents with Provable Bicriteria Guarantees](http://arxiv.org/abs/2608.19993v1)
- Yu Chen et al. | 2026-08-20
- 核心贡献：提出了具有可证明双准则保证的最优技能选择方法，在受限上下文窗口中联合优化任务性能与 token 成本。
- 方向关联：直接解决 LLM Agent 技能选择这一工程核心问题，为 Agent 能力配置提供理论保障。

#### [PolicyGuide: From Guarding One Action to Guiding the Whole Workflow for Policy-Compliant LLM Agents](http://arxiv.org/abs/2608.19861v1)
- Seongjae Kang et al. | 2026-08-20
- 核心贡献：将 LLM Agent 的策略合规从单动作拦截扩展为对整个工作流的主动引导，覆盖遗漏的程序性要求。
- 方向关联：面向客服等实际 Agent 工程场景，提出全流程策略合规的框架性方法。

#### [Break It Down, Pass It On: Cross-Task Skill Transfer in LLM Agents](http://arxiv.org/abs/2608.20274v1)
- Yiyang Feng et al. | 2026-08-20
- 核心贡献：系统分析了 Agent 技能跨任务迁移何时可靠，并指出不迁移反而可能损害性能的条件。
- 方向关联：为 LLM Agent 工程中的技能复用与经验累积提供可靠性边界认知。

### Agent 测试时扩展与自我改进

#### [Learning When to Think: Adaptive Reasoning for Test-Time Compute Allocation](http://arxiv.org/abs/2608.20256v1)
- Gijs Kassenaar et al. | 2026-08-20
- 核心贡献：研究了推理语言模型能否学习按问题难度自适应分配测试时计算预算，避免简单问题过计算、难题欠计算。
- 方向关联：直接推动 Agent 测试时扩展从固定预算向自适应分配演进。

### LLM Agent Society

今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [SafeBranch: Branch-Pair Safety Alignment for Embodied Agents](http://arxiv.org/abs/2608.19729v1)
- Hyunse Lee et al. | 2026-08-20
- 核心贡献：提出分支对安全对齐方法，让基于 VLM 的具身智能体在任务执行中同时满足安全约束与任务目标。
- 方向关联：面向 VLA 模型的安全对齐训练，弥补任务成功与安全执行之间的目标差异。

#### [EXIMO: VLM Guided Exploration of VLA Policies](http://arxiv.org/abs/2608.19891v1)
- Bhavya Sukhija et al. | 2026-08-20
- 核心贡献：利用 VLM 引导 VLA 策略的高效探索与微调，降低新任务策略学习所需的遥操作数据量。
- 方向关联：为 VLA 模型的快速适配与新任务学习提供新的探索范式。

#### [Planning-Oriented End-to-End Autonomous Driving: Architectures, Evaluation, and Emerging Paradigms](http://arxiv.org/abs/2608.20111v1)
- Yanchen Guan et al. | 2026-08-20
- 核心贡献：系统综述了端到端自动驾驶从行为克隆向规划导向系统演进的架构、评估与新兴范式。
- 方向关联：梳理 VLA 模型在自动驾驶中的规划导向设计趋势，是该方向的重要参考框架。

### 具身导航

今日暂无新论文。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [Clustering and Token Denoising for Faster and More Robust VLMs](http://arxiv.org/abs/2608.19285v1)
- Baptiste Rossigneux et al. | 2026-08-19
- 核心贡献：通过聚类与 token 去噪减少 VLM 视觉 token 数量，同时提升推理速度与鲁棒性。
- 方向关联：面向 VLM 边缘部署的 token 级推理优化，属于 LLM 推理压缩的延伸方向。

### 多模态大模型剪枝

今日暂无新论文。

### 持续学习

#### [An Inclusive and Lightweight Approach to Federated Continual Learning for Cultural Heritage](http://arxiv.org/abs/2608.20038v1)
- Ioannis Theologitis et al. | 2026-08-20
- 核心贡献：面向文化遗产分布式数据的联邦持续学习框架，兼顾数据隐私与不断演化的数据分布。
- 方向关联：将持续学习与联邦学习结合，解决真实场景中非独立同分布且持续增长的数据问题。

#### [Frequency-Aware Continual Learning for Smart Contract Vulnerability Detection with Large Language Models](http://arxiv.org/abs/2608.19680v1)
- Tenghui Huang et al. | 2026-08-20
- 核心贡献：提出频率感知的持续学习框架，让 LLM 在新漏洞类别上参数高效适配同时缓解灾难性遗忘。
- 方向关联：面向顺序到达任务的持续学习设计，验证了持续学习在 LLM 安全检测场景的有效性。

#### [In Two Minds about Lifelong Learning: Exploring Hemispheric Redundancy and Specialisation in Neural Models](http://arxiv.org/abs/2608.19514v1)
- Benjamin Smith et al. | 2026-08-20
- 核心贡献：借鉴大脑半球冗余与专门化机制，探索神经模型在持续学习中兼顾保持与适应性的新架构思路。
- 方向关联：从生物启发的角度为持续学习提供缓解稳定性-可塑性困境的新视角。

## 视觉感知

### 事件相机视觉感知

今日暂无新论文。

### 3D 点云视觉感知

#### [Open-Vocabulary 3D Object Detection with Co-Distillation Discovery and Dual Guidance Robust Training](http://arxiv.org/abs/2608.19973v1)
- Shangbo Yuan et al. | 2026-08-20
- 核心贡献：提出基于共蒸馏发现与双引导鲁棒训练的开放词汇 3D 目标检测框架，实现在 3D 场景中检测未见对象。
- 方向关联：直接推进 3D 点云感知从封闭类别集走向开放词汇识别。

### 3D 点云感知与跟踪

今日暂无新论文。

## 跨方向信号

- **自适应计算分配成为共通趋势**：LLM 推理侧学习“何时思考”，VLM 推理侧则通过 token 聚类去噪减少计算，二者共同指向按需计算分配。
- **安全与合规对齐从单点动作走向全过程**：SafeBranch 针对具身智能体的分支安全对齐，PolicyGuide 将策略合规从单动作扩展至全工作流，安全对齐正在从“拦截”走向“引导”。
- **持续学习与垂直领域深度耦合**：文化遗产联邦学习、智能合约漏洞检测等应用场景将持续学习与联邦学习、LLM 参数高效适配结合，体现出持续学习在真实分布式环境中的应用价值。
- **基础模型作为跨任务知识源**：EXIMO 用 VLM 引导 VLA 探索，Open-Vocabulary 3D 检测用基础模型发现新对象，基础模型正成为多模态智能体获取新知识的中介。

## 优先精读

#### - **Learning When to Think: Adaptive Reasoning for Test-Time Compute Allocation**：直接研究测试时计算的自适应分配，对 Agent 推理效率、成本控制与自我改进均有广泛启示，是当前测试时扩展方向的前沿问题。
#### - **EXIMO: VLM Guided Exploration of VLA Policies**：为 VLA 策略的新任务学习提供了高效的探索微调范式，涉及具身智能、持续学习与基础模型协同多个交叉议题。
#### - **Open-Vocabulary 3D Object Detection with Co-Distillation Discovery and Dual Guidance Robust Training**：代表了 3D 感知从封闭集向开放词汇演进的重要方向，且其共蒸馏与双引导训练思路对多模态感知任务具有通用参考价值。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*