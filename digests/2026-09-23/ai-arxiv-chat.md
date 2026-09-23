# 实验室研究方向 Radar 2026-09-23

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 20 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-22 23:57 UTC

---

## 今日总览
- **LLM Agent 与多智能体：LLM Agent 工程**：4 篇新文献，RRSI、MCP-GRANITE、ActGov、FLARE 分别推进 harness 自动编辑、MCP 工具粒度测试、动作策略约束与长程奖励监督。
- **LLM Agent 与多智能体：Agent 测试时扩展与自我改进**：1 篇新文献，FLARE 用生成式奖励模型做全生命周期稠密监督。
- **LLM Agent 与多智能体：LLM Agent Society**：今日暂无新论文。
- **具身智能：视觉-语言-动作模型**：5 篇新文献，Bridge3D、FoldQuantVLA、CARE 等推进 3D 感知、低比特推理与纠错执行；Uranus 偏仿真基础设施。
- **具身智能：具身导航**：3 篇新文献，覆盖 USV 河流导航、VLM 策略解释、开放词汇实例导航拓扑图。
- **模型压缩与持续学习：LLM 剪枝与推理优化**：3 篇新文献，SLICEChat 直接对应编码器内 token 剪枝；VPRune 交叉多模态剪枝；Uranus 偏仿真。
- **模型压缩与持续学习：多模态大模型剪枝**：2 篇新文献，VPRune 与 Layer-Aware 分别从 pre-LLM 选择和层感知位置嵌入降低视觉 token 开销。
- **模型压缩与持续学习：持续学习**：3 篇新文献，涉及 Muon 优化器、iSDFT 自蒸馏、预训练骨干选择公平性。
- **视觉感知：事件相机视觉感知**：今日暂无新论文。
- **视觉感知：3D 点云视觉感知**：3 篇新文献，森林点云基础模型、鲁棒多模态 3D 检测、未知尺度补全。
- **视觉感知：3D 点云感知与跟踪**：今日暂无新论文。

## LLM Agent 与多智能体
### LLM Agent 工程
#### [RRSI: Regularized Recursive Self-Improvement of Agent Harnesses](http://arxiv.org/abs/2609.24972v1)
作者：P. Xia 等｜2026-09-21。核心贡献：提出正则化递归自我改进方法，自动提出并选择 agent harness 的组件编辑。关联：直接服务 LLM Agent 工程中的 harness 自动化优化。
#### [MCP-GRANITE Benchmark: GRANularity Interface TEsting for MCP-Based LLM Agents](http://arxiv.org/abs/2609.24161v1)
作者：D. Paschalides 等｜2026-09-21。核心贡献：构建 MCP 工具接口粒度测试基准，评估工具分解对 agent 选择与参数构造的影响。关联：聚焦 LLM Agent 工具接口设计与工程评测。
#### [ActGov: Governing LLM Agent Actions via Policy-Constrained Validation](http://arxiv.org/abs/2609.24446v1)
作者：K. Zhang 等｜2026-09-21。核心贡献：用策略约束验证治理 LLM agent 动作，限制未授权与注入输出影响后续执行。关联：提升 LLM Agent 长程执行安全与动作治理。

### Agent 测试时扩展与自我改进
#### [FLARE: A Full-Lifecycle Dense Supervision Paradigm for Long-Horizon Coding Agents via Generative Reward Model](http://arxiv.org/abs/2609.23808v1)
作者：J. Xu 等｜2026-09-20。核心贡献：基于生成式奖励模型提供全生命周期稠密监督，缓解长程编码 agent 的稀疏奖励与信用分配问题。关联：面向测试时扩展与自我改进的奖励监督范式。

### LLM Agent Society
今日暂无新论文。

## 具身智能
### 视觉-语言-动作模型
#### [Bridge3D: Enabling Vision-Language-Action Models to See and Act in 3D](http://arxiv.org/abs/2609.24525v1)
作者：H. Li 等｜2026-09-21。核心贡献：让 VLA 模型在 3D 空间中进行视觉理解与动作生成。关联：缓解 2D 中心观测对精确空间操作的约束。
#### [CARE: Experience-Guided Atomic Corrective Execution for Vision-Language-Action Policies](http://arxiv.org/abs/2609.24118v1)
作者：J. Xiao 等｜2026-09-21。核心贡献：从执行失败中学习原子纠错动作，提升 VLA 策略偏离名义轨迹后的恢复能力。关联：增强 VLA 策略执行鲁棒性。
#### [FoldQuantVLA: Native Low-Bit Quantization of Vision-Language-Action Models via Consistent Folding](http://arxiv.org/abs/2609.24433v1)
作者：H. T. Ho 等｜2026-09-21。核心贡献：提出后训练量化框架，通过一致折叠实现原生低比特 VLA 推理。关联：降低观察到动作延迟并保持机器人行为。

### 具身导航
#### [A Topological Representation with Object-Path Graphs for Open-Vocabulary Instance Navigation](http://arxiv.org/abs/2609.24189v1)
作者：L. Zheng 等｜2026-09-21。核心贡献：用对象-路径图构建拓扑表示，支持开放词汇实例导航。关联：为具身导航提供结合先验环境知识的表示方法。
#### [What do VLM-Based Vision-Language Navigation Models Rely on: Interpreting and Steering Policy Behavior](http://arxiv.org/abs/2609.24576v1)
作者：D. O. Makowski 等｜2026-09-21。核心贡献：解释并引导基于 VLM 的 VLN 策略行为，分析跨模态信息路由。关联：提升具身导航策略可解释性与可控性。
#### [RiverVLN: Phase-Grounded Temporal Vision--Language Navigation for Unmanned Surface Vehicles](http://arxiv.org/abs/2609.23423v1)
作者：J. Wu 等｜2026-09-20。核心贡献：提出面向无人水面艇的阶段 grounding 时序视觉语言导航。关联：将 VLN 扩展到河流等非室内、非陆地场景。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### [SLICEChat: Progressive In-Encoder Token Pruning for Whole-Slide Pathology Language Models](http://arxiv.org/abs/2609.24894v1)
作者：A. K. Bozkurt 等｜2026-09-21。核心贡献：面向全幻灯片病理语言模型提出编码器内渐进 token 剪枝，缓解千兆像素级输入扩展瓶颈。关联：直接服务 LLM/MLLM 剪枝与推理优化。

### 多模态大模型剪枝
#### [VPRune: Efficient Training-free Pre-LLM Visual Token Pruning](http://arxiv.org/abs/2609.24485v1)
作者：G. Lv 等｜2026-09-21。核心贡献：提出免训练 pre-LLM 视觉 token 剪枝，识别文本引导选择偏差与信息损失等问题。关联：降低大型视觉语言模型推理成本。
#### [Layer-Aware Position Embeddings for Visual Token Pruning in Multimodal Large Language Models](http://arxiv.org/abs/2609.23715v1)
作者：Y. Wang 等｜2026-09-20。核心贡献：设计层感知位置嵌入，改进 MLLM 视觉 token 剪枝中的位置信息重分配。关联：减少多模态大模型视觉 token 计算开销。

### 持续学习
#### [Muon Can Outperform Dedicated Continual Learning Methods](http://arxiv.org/abs/2609.24678v1)
作者：S. G. Sincari 等｜2026-09-21。核心贡献：研究 Muon 优化器在 LoRA 持续学习中的抗遗忘表现，并可优于专用持续学习方法。关联：为持续学习提供优化器视角的新基线。
#### [iSDFT: Information-Proximal Self-Distillation for Continual Learning in LLMs](http://arxiv.org/abs/2609.24646v1)
作者：A. K. Khamis 等｜2026-09-21。核心贡献：用信息近端自蒸馏控制演示信息影响，学习新技能同时减少遗忘。关联：面向 LLM 持续学习的自蒸馏微调。
#### [Perplexity Predicts Protection: Choosing Pretrained Backbones for Worst-Client Fairness in Federated Parameter-Efficient Fine-Tuning](http://arxiv.org/abs/2609.23463v1)
作者：K. Naseer 等｜2026-09-20。核心贡献：研究预训练骨干选择对联邦 LoRA 微调中最差客户端公平性的影响。关联：连接持续学习、参数高效微调与公平性。

## 视觉感知
### 事件相机视觉感知
今日暂无新论文。

### 3D 点云视觉感知
#### [Toward a foundation model for forest point clouds](http://arxiv.org/abs/2609.24787v1)
作者：Y. Yue 等｜2026-09-21。核心贡献：提出森林点云基础模型，统一多任务、多传感器与多森林类型。关联：推动 3D 点云视觉感知的基础模型化。
#### [Towards robust multimodal 3D object detection via visual foundation models](http://arxiv.org/abs/2609.23541v1)
作者：Z. Song 等｜2026-09-20。核心贡献：利用视觉基础模型提升 LiDAR-相机多模态 3D 检测在 OOD 损坏下的鲁棒性。关联：增强自动驾驶 3D 点云视觉感知鲁棒性。
#### [ScaleBlind: Point Cloud Completion under Unknown Scale](http://arxiv.org/abs/2609.23404v1)
作者：S. Wu 等｜2026-09-20。核心贡献：面向未知尺度条件进行点云补全，减少对全局尺度先验的依赖。关联：提升点云补全在实际感知中的适用性。

### 3D 点云感知与跟踪
今日暂无新论文。

## 跨方向信号
- 视觉 token 剪枝与低比特量化成为 VLA/MLLM 推理效率主线：VPRune、Layer-Aware、SLICEChat、FoldQuantVLA。
- Agent 工程从能力扩展转向治理、工具接口与自我改进：RRSI、MCP-GRANITE、ActGov、FLARE。
- 具身导航与 VLA 加速融合 3D/拓扑表示与可解释策略：Bridge3D、Topological、What do VLM、RiverVLN。
- 持续学习与参数高效微调结合，关注优化器、自蒸馏与骨干选择：Muon、iSDFT、Perplexity。
- 3D 点云感知走向鲁棒、跨域、未知尺度与基础模型化：robust multimodal 3D detection、forest foundation、ScaleBlind。

## 优先精读
- **Bridge3D**：VLA 从 2D 观测走向 3D 空间操作，直接影响具身智能空间泛化瓶颈。
- **RRSI**：系统化自动改进 agent harness，是 LLM Agent 工程近期少见的 harness 级优化工作。
- **VPRune**：免训练 pre-LLM 视觉 token 剪枝，同时关联多模态大模型剪枝与 LLM 推理优化。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*