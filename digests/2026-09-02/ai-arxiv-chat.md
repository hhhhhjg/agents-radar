# 实验室研究方向 Radar 2026-09-02

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 19 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-01 23:43 UTC

---

# 研究方向 Radar（2026-09-02）

## 1. 今日总览
- **LLM Agent 与多智能体 / LLM Agent 工程**：3 篇新论文，涉及长期电商运营评测、间接提示注入安全、知识门控任务构建。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：3 篇新论文，覆盖平面几何测试时扩展、自博弈驾驶、多求解器分歧奖励的自我进化课程。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：3 篇新论文，提出时间强制 4D 表示对齐、单步 VLA 生成、长程任务细粒度评测基准。
- **具身智能 / 具身导航**：3 篇新论文，涉及 VLM 空间智能提取、地理定位导航评测、基础模型脚手架长程导航。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：今日暂无新论文。
- **模型压缩与持续学习 / 多模态大模型剪枝**：1 篇新论文，提出基于中心化几何校正的 LVLM 视觉 token 剪枝。
- **模型压缩与持续学习 / 持续学习**：3 篇新论文，覆盖持续测试时适应、严格在线 TTA、任务条件特征变换的类增量学习。
- **视觉感知 / 事件相机视觉感知**：今日暂无新论文。
- **视觉感知 / 3D 点云视觉感知**：3 篇新论文，包括城市尺度点云生成、3DGS 分割、组合场景建模。
- **视觉感知 / 3D 点云感知与跟踪**：今日暂无新论文。

## 2. 分方向情报

## LLM Agent 与多智能体
### LLM Agent 工程
#### [E-Commerce Bench: Evaluating LLM Agents on Long-Horizon Autonomous Business Operation](http://arxiv.org/abs/2608.30730v1)
作者缩写: Wei Fan et al. | 发布: 2026-08-31 | 一句话核心贡献: 提出面向长期自主电商运营的 LLM Agent 评测基准，强调动态环境与长程依赖。 | 与该方向关联: 直接用于评估和工程化 LLM Agent 的长期决策能力。

#### [Will the User Ever Know? Covert Indirect Prompt Injection on Tool-Using LLM Agents](http://arxiv.org/abs/2608.30362v1)
作者缩写: Yunseok Lee et al. | 发布: 2026-08-31 | 一句话核心贡献: 定义并评测隐蔽间接提示注入，关注用户在最终响应中能否察觉攻击。 | 与该方向关联: 为工具型 LLM Agent 工程提供安全评测与防御视角。

#### [Ignorance or Incompetence? Constructing Knowledge-Gated, Verifiable Tasks for LLM Agents](http://arxiv.org/abs/2608.30322v1)
作者缩写: Hanlin Tian et al. | 发布: 2026-08-31 | 一句话核心贡献: 提出知识门控任务构建协议，分离任务指令与专业惯例知识以精确诊断 Agent 失败原因。 | 与该方向关联: 为 LLM Agent 任务设计与评测提供可控构建方法。

### Agent 测试时扩展与自我改进
#### [Reactivating Test-Time Scaling for Plane Geometry Problem Solving](http://arxiv.org/abs/2608.30156v1)
作者缩写: Xiaoqiang Kang et al. | 发布: 2026-08-31 | 一句话核心贡献: 重新激活测试时缩放来解决平面几何问题，克服多步符号推理中的失败。 | 与该方向关联: 直接展示测试时扩展在多模态数学推理任务中的应用。

#### [Beyond Uncertainty: Multi-Solver Disagreement Rewards for Self-Evolving Reasoning Curricula](http://arxiv.org/abs/2608.30035v1)
作者缩写: Vinoth Selvendran et al. | 发布: 2026-08-30 | 一句话核心贡献: 用多求解器分歧奖励替代单一采样不确定性，驱动挑战者生成暴露求解器弱点的课程。 | 与该方向关联: 为自我改进型推理框架提供更稳健的奖励信号。

#### [What Emerges and What Breaks in Self-Play Driving](http://arxiv.org/abs/2608.30819v1)
作者缩写: Laur Sisask et al. | 发布: 2026-08-31 | 一句话核心贡献: 在自博弈训练中扩展到 Transformer 和真实城市高精地图，分析涌现行为与失败模式。 | 与该方向关联: 自博弈是 Agent 自我改进的重要范式，该研究为驾驶策略提供实证。

### LLM Agent Society
今日暂无新论文。

## 具身智能
### 视觉-语言-动作模型
#### [Temporal Forcing: 4D Representation Alignment for Vision-Language-Action Models](http://arxiv.org/abs/2608.30643v1)
作者缩写: Xingyu Ding et al. | 发布: 2026-08-31 | 一句话核心贡献: 通过时间强制实现 4D 表示对齐，缓解长程操作中的视觉状态别名问题。 | 与该方向关联: 直接改进 VLA 模型的时间建模与长程操控能力。

#### [DriftingVLA: Native One-Step Vision-Language-Action Generation via Per-Dimension Temporal Drifting](http://arxiv.org/abs/2608.29749v1)
作者缩写: Yuxuan Gao et al. | 发布: 2026-08-30 | 一句话核心贡献: 提出原生单步 VLA 生成方法，避免流式模型多步细化带来的在线控制延迟。 | 与该方向关联: 提升 VLA 动作生成的实时性，是模型效率与架构的重要进展。

#### [Behavior-Skill: A Fine-Grained Benchmark for Evaluating Vision-Language-Action Policies in Long-Horizon Tasks](http://arxiv.org/abs/2608.30536v1)
作者缩写: Chunyun Ma et al. | 发布: 2026-08-31 | 一句话核心贡献: 提出细粒度技能级评测基准，弥补整体任务级指标对中间技能失败不敏感的缺陷。 | 与该方向关联: 为 VLA 策略的长程移动操作提供细粒度评估工具。

### 具身导航
#### [LightNav-0: Eliciting VLM Spatial Intelligence for Generalist Embodied Navigation](http://arxiv.org/abs/2608.30935v1)
作者缩写: Shaoan Wang et al. | 发布: 2026-08-31 | 一句话核心贡献: 利用 VLM 已有的空间先验实现通用具身导航，无需额外训练。 | 与该方向关联: 直接为具身导航提供基于 VLM 的零样本/轻量解决方案。

#### [Scaffolding Foundation Models into Physical-World Agents Pushes the Frontier of Long-Horizon Navigation](http://arxiv.org/abs/2608.30396v1)
作者缩写: Zixing Lei et al. | 发布: 2026-08-31 | 一句话核心贡献: 以基础模型为脚手架，将 VLM 高层规划与闭环低层控制结合，推进长程物理世界导航。 | 与该方向关联: 为长程导航提供混合架构范式，融合多种基础模型能力。

#### [GeoAgent: Evaluating VLM Geolocalization Through Embodied Navigation](http://arxiv.org/abs/2608.29483v1)
作者缩写: Arka Mukherjee et al. | 发布: 2026-08-30 | 一句话核心贡献: 通过具身导航评测 VLM 的地理定位能力，突破静态图像检索局限。 | 与该方向关联: 为具身导航与 VLM 地理空间理解提供动态评测基准。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
今日暂无新论文。

### 多模态大模型剪枝
#### [Centering before Pruning: Lightweight Geometry Correction for Diversity-Based Visual Token Pruning in LVLMs](http://arxiv.org/abs/2608.30263v1)
作者缩写: Shunjie Wen et al. | 发布: 2026-08-31 | 一句话核心贡献: 发现原始视觉 token 相似度偏差，提出中心化几何校正来提升多样性剪枝效果。 | 与该方向关联: 直接优化 LVLM 视觉 token 剪枝，降低推理成本。

### 持续学习
#### [One Adapter, Many Tasks: Task-Conditioned Feature Transformations for Continual Learning](http://arxiv.org/abs/2608.31096v1)
作者缩写: Yunxiang Fu et al. | 发布: 2026-08-31 | 一句话核心贡献: 为类增量学习提出任务条件特征变换，使用单一适配器适应多个新任务。 | 与该方向关联: 为持续学习提供参数高效的适配器方法。

#### [Towards Continual Test-Time Adaptation of Vision-Language Models in Open-Vocabulary Semantic Segmentation](http://arxiv.org/abs/2608.29923v1)
作者缩写: Chandler Timm C. Doloriel et al. | 发布: 2026-08-30 | 一句话核心贡献: 诊断 OVSS 在持续测试时分布偏移中的脆弱性，并指出熵最小化导致 patch 级类别坍缩。 | 与该方向关联: 研究持续测试时适应在开放词汇分割中的失败模式。

#### [Continual Test-Time Adaptation via Entropy Sensitivity-Guidance in Strict Online Setting](http://arxiv.org/abs/2608.29920v1)
作者缩写: Chandler Timm C. Doloriel et al. | 发布: 2026-08-30 | 一句话核心贡献: 提出敏感度引导擦除适应（SEGA），在严格在线 TTA 中抑制漂移与坍缩。 | 与该方向关联: 给出严格在线持续测试时适应的新方法。

## 视觉感知
### 事件相机视觉感知
今日暂无新论文。

### 3D 点云视觉感知
#### [GridFlow: Structured Latent Flow for Seamless City-Scale 3D Point Cloud Generation](http://arxiv.org/abs/2608.29793v1)
作者缩写: Xinyu Wang et al. | 发布: 2026-08-30 | 一句话核心贡献: 提出结构化潜在流模型，支持无缝的城市级 3D 点云生成。 | 与该方向关联: 扩展点云生成到大规模城市场景，推动高保真 3D 感知。

#### [VCAR: Training-Free 3DGS Segmentation via View Completeness and Axis-Aware Boundary Refinement](http://arxiv.org/abs/2608.30870v1)
作者缩写: Kun Cao et al. | 发布: 2026-08-31 | 一句话核心贡献: 提出无需训练的 3DGS 分割方法，通过视角完整性和轴向边界细化改善边界模糊。 | 与该方向关联: 为 3D 场景理解提供高效分割方案，属于点云/3D 视觉感知延伸。

#### [Lucida: Parse, Generate, and Place for Composable Real-to-Sim Scene Modeling](http://arxiv.org/abs/2608.30821v1)
作者缩写: Minghan Qin et al. | 发布: 2026-08-31 | 一句话核心贡献: 将真实室内场景解析为可编辑、可单独操控的对象资产，用于仿真场景建模。 | 与该方向关联: 结合 3D 点云与场景解析，支撑具身仿真与 3D 感知。

### 3D 点云感知与跟踪
今日暂无新论文。

## 3. 跨方向信号
- **测试时扩展与持续适应成为通用鲁棒性手段**：从平面几何推理（论文 8）到开放词汇分割的持续 TTA（论文 9/11），均强调在部署阶段动态调整模型。
- **VLM 作为空间智能底座渗透到多个具身任务**：论文 3 与论文 5 直接利用 VLM 的视觉-语言先验完成导航和地理定位，VLA 工作（论文 1/2）也依赖视觉-语言联合表示。
- **长程任务与数千步交互成为评测和训练的共同挑战**：E-Commerce Bench（论文 12）、长期导航（论文 7）和 VLA 细粒度评测（论文 4）均关注长期依赖和中间步骤失败。
- **自我演进与自博弈机制突破人工数据依赖**：多求解器分歧奖励（论文 18）和自博弈驾驶（论文 15）都在无人工标注条件下持续生成难例和改进策略。
- **视觉 token 剪枝中的几何校正与 3D 场景中的结构化表示呼应**：论文 10 强调相似度几何中心化，论文 6/17/19 则利用结构化/边界信息提升 3D 模型质量，共同体现几何先验在高效感知中的价值。

## 4. 优先精读
#### - **DriftingVLA: Native One-Step Vision-Language-Action Generation via Per-Dimension Temporal Drifting**（论文 2）：直击 VLA 在线控制延迟问题，单步生成动作 chunk 可能大幅提升机器人实时响应能力，是模型架构和动作表征的重要创新。
#### - **Scaffolding Foundation Models into Physical-World Agents Pushes the Frontier of Long-Horizon Navigation**（论文 7）：把 VLM 高层推理与低层闭环控制结合成混合系统，为长程物理世界 Agent 提供了可参考的工程范式，同时综合了多篇相关方向的思路。
#### - **Centering before Pruning: Lightweight Geometry Correction for Diversity-Based Visual Token Pruning in LVLMs**（论文 10）：提出了一个轻量但有效的视觉 token 剪枝修正方法，对多模态大模型推理成本优化有直接价值，且几何观点可迁移至其他高效感知任务。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*