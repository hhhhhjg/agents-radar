# 实验室研究方向 Radar 2026-08-28

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 19 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-08-28 05:54 UTC

---

# 研究方向 Radar

## 今日总览

- **LLM Agent 工程**：3 篇新论文，分别聚焦智能体数据质量评估（ACE 视角）、时间序列根因归因的受控评测（TraceBench）、以及人格与执行分离的架构模式（PES）。
- **Agent 测试时扩展与自我改进**：2 篇新论文，分别提出推理时弱到强泛化框架（CritICL）和循环 Transformer 中动力学相选择对计算扩展的影响。
- **LLM Agent Society**：今日暂无新论文。
- **视觉-语言-动作模型**：4 篇匹配论文，核心 3 篇为后门攻击（TrapVLA）、失败修正（FLARE）与流式解码（FlashVLA），另 1 篇（ESRP）与具身导航重叠。
- **具身导航**：3 篇新论文，覆盖实时零样本导航（RTNav）、场景重排规划（ESRP）和基于 3D 几何的玻璃表面检测。
- **LLM 剪枝与推理优化**：1 篇新论文，提出 VLM 统一 condense-and-extract 快速推理范式（PACE）。
- **多模态大模型剪枝**：2 篇匹配论文，主论文为多图像视觉 token 剪枝（Multi-Image），另与 LLM 剪枝共享 PACE。
- **持续学习**：3 篇新论文，涵盖参数高效 CL、无任务边界统一检测与适配、主权 AI 场景的前沿模型持续学习。
- **事件相机视觉感知**：3 篇匹配论文，除已归入持续学习的 1 篇外，另有事件分类基准与无监督实时物体发现各 1 篇。
- **3D 点云视觉感知**：1 篇新论文，提出任务感知可变形预测用于单阶段 3D 目标检测（TADP）。
- **3D 点云感知与跟踪**：今日暂无新论文。

## 分方向情报

### LLM Agent 工程

#### [What Makes Good Agentic Data? An ACE Lens on Data Generation for LLM Agents](http://arxiv.org/abs/2608.27260v1)
Xingshan Zeng et al. | 2026-08-27
核心贡献：提出 ACE 视角，强调智能体数据生成需保持环境、任务、交互与成功信号的一致性。
方向关联：为 LLM 智能体交互数据的生成与筛选提供统一质量框架。

#### [TraceBench: Controlled Evaluation of LLM Agents for Time-Series Root-Cause Attribution](http://arxiv.org/abs/2608.27182v1)
Tommaso Bendinelli et al. | 2026-08-27
核心贡献：构建基于仿真的受控评测框架，系统评估 LLM 智能体在时间序列根因归因上的表现。
方向关联：为诊断类智能体提供标准化、可复现的测试基准。

#### [Persona-Execution Separation: An Architecture Pattern for Evolving LLM Agents under Execution Audit](http://arxiv.org/abs/2608.27427v1)
Yisen Xi | 2026-08-27
核心贡献：提出人格层与执行层分离的 LLM 智能体架构模式，兼顾自由演化与可审计执行。
方向关联：为受治理组织中的 Agent 工程提供可追溯的架构参考。

### Agent 测试时扩展与自我改进

#### [CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes](http://arxiv.org/abs/2608.27455v1)
Yufan Wu et al. | 2026-08-27
核心贡献：利用小模型的失败模式作为批判信号，在推理时实现弱到强泛化提升。
方向关联：为 Agent 推理时自我改进开辟了不依赖外部验证器的路径。

#### [Dynamical phase selection controls compute scaling in looped transformers](http://arxiv.org/abs/2608.26556v1)
Gunn Kim | 2026-08-27
核心贡献：揭示循环 Transformer 存在不同推理动力学相，相选择决定计算扩展的规模效率。
方向关联：从动力学视角解释测试时扩展的算力分配规律。

### LLM Agent Society

今日暂无新论文。

### 视觉-语言-动作模型

#### [TrapVLA: Trapping Vision-Language-Action Models in Configured Failure Modes](http://arxiv.org/abs/2608.26578v1)
Jun-Hui Liu et al. | 2026-08-27
核心贡献：首创“配置失败陷阱”后门攻击，通过隐蔽文本触发器诱导 VLA 进入指定失败模式。
方向关联：直接揭示 VLA 在安全敏感场景中面临的新型威胁模型。

#### [FLARE: A Failure-Aware Framework for Autonomous Correction and Recovery in Visual-Language Robotic Manipulation](http://arxiv.org/abs/2608.26645v1)
Ganlong Zhao et al. | 2026-08-27
核心贡献：提出失败感知框架，使 VLA 能在操作失败后自主校正并恢复执行。
方向关联：提升 VLA 在长时程、复杂操作任务中的鲁棒性。

#### [FlashVLA: Streaming Action Decoding for Fast and Asynchronous VLA Inference](http://arxiv.org/abs/2608.27384v1)
Zekai Li et al. | 2026-08-27
核心贡献：提出流式动作解码机制，支持快速异步的 VLA 推理。
方向关联：有效缓解流匹配 VLA 在真实机器人部署中的延迟瓶颈。

### 具身导航

#### [RTNav: Towards Real-Time Zero-Shot Object Navigation](http://arxiv.org/abs/2608.26496v1)
Easop Lee et al. | 2026-08-27
核心贡献：面向实时零样本目标导航，缓解视觉语言基础模型推理延迟的影响。
方向关联：直接提升具身智能体在未知环境持续导航中的响应速度。

#### [Embodied Scene Rearrangement Planning](http://arxiv.org/abs/2608.27371v1)
Canzhi Chen et al. | 2026-08-27
核心贡献：提出仅凭自我中心观测与顶层目标布局进行家具重排的具身任务。
方向关联：将具身导航能力扩展到场景重排规划，强调空间理解与动作生成。

#### [Glass Surface Detection Grounded in 3D Visual Geometry](http://arxiv.org/abs/2608.26752v1)
Yiwei Lu et al. | 2026-08-27
核心贡献：结合 3D 视觉几何进行玻璃表面检测，克服透明与反光带来的几何歧义。
方向关联：为具身导航提供透明障碍物的几何感知能力。

### LLM 剪枝与推理优化

#### [PACE: A Unified Condense-and-Extract Paradigm for Fast VLM Inference](http://arxiv.org/abs/2608.27206v1)
Junjie Liu et al. | 2026-08-27
核心贡献：提出统一的 condense-and-extract 范式，在压缩视觉 token 后再提取信息以加速 VLM 推理。
方向关联：为 LLM/VLM 推理优化提供跨层 token 高效管理方案。

### 多模态大模型剪枝

#### [Multi-Image Visual Token Pruning in Large Visual Language Models](http://arxiv.org/abs/2608.26806v1)
Rongyang Zhang et al. | 2026-08-27
核心贡献：面向多图像 LVLM 输入设计视觉 token 剪枝策略，缓解多图序列的计算与上下文压力。
方向关联：为多模态大模型在多图像场景下的高效推理提供剪枝支持。

注：同方向匹配的另一篇 PACE 已归入 LLM 剪枝与推理优化方向，此处不重复列出。

### 持续学习

#### [Parameter Efficient Continual Learning for Sparse Event-Based Transformers](http://arxiv.org/abs/2608.26720v1)
Vaishnavi Nagabhushana et al. | 2026-08-27
核心贡献：面向稀疏事件 Transformer 提出参数高效持续学习方法，兼顾存储与能量约束。
方向关联：为事件相机驱动的边缘智能体提供资源受限下的持续适应方案。

#### [Unifying Detection and Adaptation in Task-Free Continual Learning](http://arxiv.org/abs/2608.27070v1)
Dezheng Han et al. | 2026-08-27
核心贡献：在无任务边界持续学习中统一概念检测与参数适配，摆脱对显式任务边界的依赖。
方向关联：为 LLM 在开放数据流下的持续学习提供无需任务先验的解决方案。

#### [Thomson: Continual Learning of Frontier Models for SovereignAI](http://arxiv.org/abs/2608.27147v1)
Shengzhuang Chen et al. | 2026-08-27
核心贡献：面向主权 AI 场景提出前沿模型的持续学习方案，推动模型能力的自主演进。
方向关联：拓展持续学习在主权化、大规模模型部署中的应用边界。

### 事件相机视觉感知

#### [ANTShapes Benchmarking Datasets for Event-Based Neuromorphic Object Classification](http://arxiv.org/abs/2608.27150v1)
M. Middleton et al. | 2026-08-27
核心贡献：发布事件神经形态目标分类基准数据集 ANTShapes。
方向关联：为事件相机的目标分类研究提供标准化评测资源。

#### [Real-time Unsupervised Object Discovery from Asynchronous Event Streams](http://arxiv.org/abs/2608.26644v1)
Pratham G. Shenwai et al. | 2026-08-27
核心贡献：提出基于时空聚类的无训练实时物体发现框架。
方向关联：充分利用事件流稀疏异步特性实现低延迟视觉感知。

注：另一匹配论文（Parameter Efficient CL）已归入持续学习方向，此处不重复列出。

### 3D 点云视觉感知

#### [TADP: Task-Aware Deformable Prediction for Single-Stage 3D Object Detection](http://arxiv.org/abs/2608.27282v1)
Su Wang et al. | 2026-08-27
核心贡献：提出任务感知可变形预测方法，为单阶段 3D 检测器的不同任务分别适配特征投影空间。
方向关联：提升点云单阶段检测器的多任务特征表达能力。

### 3D 点云感知与跟踪

今日暂无新论文。

## 跨方向信号

1. **推理延迟成为跨领域首要瓶颈**：从具身导航（RTNav）、VLA（FlashVLA）到 VLM 推理（PACE），均以流式化或 token 压缩应对实时性挑战。
2. **失败建模与安全性开始对齐**：TrapVLA 的攻击与 FLARE 的失败恢复共同表明，VLA 部署须把“失败模式”作为一等公民处理，而非仅优化理想轨迹。
3. **持续学习走向无边界与资源受限场景**：任务无关检测与参数高效 CL 的结合，反映从云端大模型到边缘智能体的普适适应性需求。
4. **测试时计算从“策略”走向“相变解释”**：CritICL 与循环 Transformer 相选择都关注迭代推理如何产生能力跃升，为测试时扩展提供新的理论视角。
5. **3D 几何感知成为空间任务的公共底座**：玻璃检测（几何引导）与 TADP（任务感知变形）都强调几何结构而非纯外观，为导航、操作与检测提供互补支撑。

## 优先精读

1. **FlashVLA**——直接解决 VLA 部署中最棘手的延迟瓶颈，流式动作解码思想具备高工程迁移价值。
2. **TrapVLA**——首个针对 VLA 的可配置失败模式后门攻击，为安全部署提出全新威胁模型，值得深入防御研究。
3. **TraceBench**——为 LLM 智能体提供难得的时间序列推理受控评测体系，其方法论可迁移至其他 Agent 任务评测。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*