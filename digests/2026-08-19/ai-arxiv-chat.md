# 实验室研究方向 Radar 2026-08-19

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 12 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-08-18 22:16 UTC

---

## 今日总览

- LLM Agent 与多智能体 / LLM Agent 工程：新论文集中在 Agent 安全攻击面、长程信用分配、个性化记忆与航空副驾驶评测。
- LLM Agent 与多智能体 / Agent 测试时扩展与自我改进：今日暂无新论文。
- LLM Agent 与多智能体 / LLM Agent Society：今日暂无新论文。
- 具身智能 / 视觉-语言-动作模型：新论文体现为异步双频 VLA 架构与医疗超声 VLA 应用。
- 具身智能 / 具身导航：新论文体现为手术室结构化场景理解。
- 模型压缩与持续学习 / LLM 剪枝与推理优化：今日暂无新论文。
- 模型压缩与持续学习 / 多模态大模型剪枝：今日暂无新论文。
- 模型压缩与持续学习 / 持续学习：新论文体现为表示几何、层自适应正则化与预训练模型持续学习。
- 视觉感知 / 事件相机视觉感知：新论文体现为面向强化学习的事件相机 token 化特征提取。
- 视觉感知 / 3D 点云视觉感知：新论文体现为语言-3D 高斯驾驶世界模型。
- 视觉感知 / 3D 点云感知与跟踪：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [When State Becomes an Attack Surface: State-Semantic Injection in LLM-Driven Embodied Agents](http://arxiv.org/abs/2608.16806v1)

Liu et al. | 2026-08-17 | 核心：揭示 LLM 驱动的具身智能体存在状态语义注入攻击面。 | 关联：为 LLM Agent 工程提供新的安全威胁与鲁棒性视角。

#### [TRCA: Transition-wise Rubric Credit Assignment for Long-horizon LLM Agents](http://arxiv.org/abs/2608.16156v1)

Zhang, H. et al. | 2026-08-17 | 核心：提出基于转换级 rubric 的信用分配方法，改善长程 LLM Agent 的细粒度优化。 | 关联：提升长程多步交互中 LLM Agent 的优化与监督效率。

#### [QUMem: Personalized Memory for Query-Conditioned User-State Inference in LLM Agents](http://arxiv.org/abs/2608.16168v1)

Wang et al. | 2026-08-17 | 核心：面向查询条件用户状态推断，构建个性化外部记忆。 | 关联：增强 LLM Agent 在长历史交互中的记忆与个性化能力。

#### [AeroCopilotBench: A Two-Tier Benchmark for Evaluating LLM Agents as Aviation Copilots in an Interactive Virtual Cockpit Environment](http://arxiv.org/abs/2608.16349v1)

Yuan et al. | 2026-08-17 | 核心：提出双层交互式虚拟座舱基准，评测 LLM Agent 的航空程序执行与安全合规。 | 关联：为 LLM Agent 工程提供高安全关键任务的交互式评测方法。

### Agent 测试时扩展与自我改进

今日暂无新论文。

### LLM Agent Society

今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [NebulaVLA: A Dual-Frequency Vision-Language-Action Model With Guide Action for Robotic Manipulation](http://arxiv.org/abs/2608.16503v1)

Zhao, C. et al. | 2026-08-17 | 核心：提出异步双频 VLA 架构，解耦高层语义推理与低层动作执行，缓解效率-性能矛盾。 | 关联：直接针对 VLA 部署中的跨本体泛化与执行平滑性瓶颈。

#### [US-VLA: An Ultrasound Vision-Language-Action Model for Embodied Abdomina](http://arxiv.org/abs/2608.16074v1)

Zhang, C. et al. | 2026-08-17 | 核心：提出面向超声扫查的 VLA 模型，支持标准化图像采集并降低操作者依赖。 | 关联：将 VLA 扩展到医疗超声这一具身感知-操作任务。

### 具身导航

#### [Sterilizable Scene Graph Generation for Operating Rooms](http://arxiv.org/abs/2608.16469v1)

Lemke et al. | 2026-08-17 | 核心：提出面向手术室的场景图生成方法，以轻量模型建模物体与语义关系。 | 关联：为手术场景中的具身系统提供结构化环境理解输入。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

今日暂无新论文。

### 多模态大模型剪枝

今日暂无新论文。

### 持续学习

#### [Task-Anchored Representation Shaping for Pre-Trained Model-Based Continual Learning](http://arxiv.org/abs/2608.16345v1)

Xu, Z. et al. | 2026-08-17 | 核心：提出任务锚定表示塑形，提升预训练模型在持续学习中对已学任务的可靠推断。 | 关联：改善基于预训练模型的持续学习任务边界与泛化问题。

#### [Layers Matter: Why Continual Learning Regularization Should Be Layer-Adaptive](http://arxiv.org/abs/2608.15901v1)

Moser, B. B. et al. | 2026-08-16 | 核心：论证逐层 Fisher 信息作为曲率摘要不足，持续学习正则化应层自适应。 | 关联：改进 EWC 等持续学习正则化方法。

#### [Geometry of Forgetting: Representation Flux in Continual Learning](http://arxiv.org/abs/2608.15854v1)

Kazanskii, M. A. | 2026-08-16 | 核心：从表示空间中的“表示流”角度分析灾难性遗忘的几何机制。 | 关联：为持续学习提供表示动力学层面的诊断与解释。

## 视觉感知

### 事件相机视觉感知

#### [FLEET: Token-Based Feature Extraction for Event Camera-based Reinforcement Learning](http://arxiv.org/abs/2608.16523v1)

Gottwald et al. | 2026-08-17 | 核心：提出基于 token 的事件相机特征提取方法，支持强化学习策略学习。 | 关联：推进事件相机在低延迟具身控制策略中的感知应用。

### 3D 点云视觉感知

#### [GaussianDWM++: Language-Grounded 3D Gaussian Driving World Model for Unified Scene Understanding, Editing, and Multi-Modal Generation](http://arxiv.org/abs/2608.16234v1)

Deng, T. et al. | 2026-08-17 | 核心：提出语言-3D 高斯驾驶世界模型，统一场景理解、编辑与多模态生成。 | 关联：以 3D 结构化表示改进常见点云表示的感知局限。

### 3D 点云感知与跟踪

今日暂无新论文。

## 跨方向信号

- 感知结构从原始信号转向 token/3D 结构化表示：事件相机 FLEET、3D 高斯 GaussianDWM++ 和 NebulaVLA 均体现这一趋势。
- LLM Agent 研究重心从“能力”转向“可靠性”：状态注入攻击、长程信用分配、交互式安全评测共同指向安全可控 Agent 工程。
- 持续学习正从参数正则化走向表示几何与层自适应：Layers Matter、Geometry of Forgetting 与 Task-Anchored 形成互补。
- 具身场景理解趋于语言-视觉-动作统一：US-VLA、场景图生成与 GaussianDWM++ 都服务于“可操作的结构化场景表示”。

## 优先精读

- [NebulaVLA](http://arxiv.org/abs/2608.16503v1)：直接解决 VLA 部署中的效率、泛化和平滑性问题，对具身智能工程最具启发性。
- [When State Becomes an Attack Surface](http://arxiv.org/abs/2608.16806v1)：揭示 LLM 驱动具身 Agent 的新安全攻击面，是 Agent 安全与 VLA 鲁棒性的交叉问题。
- [GaussianDWM++](http://arxiv.org/abs/2608.16234v1)：整合 3D 场景理解、语言控制与多模态生成，桥接 3D 感知和驾驶/导航场景。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*