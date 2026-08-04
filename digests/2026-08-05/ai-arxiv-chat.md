# 实验室研究方向 Radar 2026-08-05

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 20 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-08-04 22:57 UTC

---

## 今日总览

**LLM Agent 与多智能体**
- **LLM Agent 工程**：3 篇新论文分别推进长程 Agent 的记忆仲裁、个性化隐式行为对齐、运行期失败检测与修复。
- **Agent 测试时扩展与自我改进**：3 篇新论文覆盖 VLM 测试时扩展选择机制审计、搜索 Agent 自博弈训练、法律推理对抗自博弈的受控负结果。
- **LLM Agent Society**：今日暂无新论文。

**具身智能**
- **视觉-语言-动作模型**：新论文聚焦长程操作执行状态链接、指令泛化鲁棒性、工作空间位置盲区三个问题。
- **具身导航**：新论文包括空中目标导向 VLN、内窥镜导航世界-动作模型，以及面向导航效率的视觉语言桥接优化。

**模型压缩与持续学习**
- **LLM 剪枝与推理优化**：新论文将具身 Agent 的重规划视为受限资源，提出预算化重规划以控制长程上下文造成的延迟。
- **多模态大模型剪枝**：新论文分别提出证据感知动态 token 预算和可微信息门控 token 剪枝。
- **持续学习**：新论文覆盖领域自适应持续预训练、PEFT 后门检测、超声分割中的不确定性引导持续学习。

**视觉感知**
- **事件相机视觉感知**：新论文提出体素引导的全局事件排序，用于事件云归因。
- **3D 点云视觉感知**：新论文提出提示自适应计算路径，可作为点云任务中上下文学习的迁移参考。
- **3D 点云感知与跟踪**：今日暂无新论文。

---

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [MemArbiter: Decision-Time Memory Arbitration for Long-Horizon LLM Agents](http://arxiv.org/abs/2608.02113v1)
Dong 等，2026-08-03。核心贡献：在决策时刻对记忆进行仲裁，解决长程任务中“信息可访问但不可用”的问题。关联：直接提升 LLM Agent 长程任务中的跨步信息利用能力。

#### [From Profiling to Synthesis: Benchmarking Implicit Behavioral Alignment in Personalized LLM Agents](http://arxiv.org/abs/2608.02171v1)
Song 等，2026-08-03。核心贡献：提出从画像走向综合评测的隐式行为对齐基准，评估个性化 Agent 的动态一致性。关联：为 LLM Agent 个性化与用户行为对齐提供评测方法。

#### [Real-Time Detection and Repair of LLM Agent Failures](http://arxiv.org/abs/2608.02464v1)
Dubey，2026-08-03。核心贡献：利用步骤遥测实时检测循环、工具错误、目标漂移等 Agent 失败并修复。关联：为 LLM Agent 工程提供轻量级运行时监控与容错机制。

### Agent 测试时扩展与自我改进

#### [It's the Decoding Format, Not the Perturbation: Auditing Consistency-Based Selection for Vision-Language Test-Time Scaling](http://arxiv.org/abs/2608.01207v1)
Zheng 等，2026-08-02。核心贡献：发现 VLM 测试时扩展中，多数投票优于一致性选择的原因更可能来自解码格式而非输入扰动。关联：直接审计视觉语言模型测试时扩展的选择机制。

#### [SearchMaster: Grounded and Regulated Self-Play for Search Agents](http://arxiv.org/abs/2608.01822v1)
Tan 等，2026-08-03。核心贡献：提出受控自博弈流程，自动生成高质量多跳搜索任务与工具使用轨迹。关联：为搜索 Agent 的自我改进提供可扩展训练数据生成范式。

#### [Does the Competitive Component of Adversarial Self-Play Improve Legal Reasoning? A Controlled Negative Result](http://arxiv.org/abs/2608.01559v1)
Kim，2026-08-03。核心贡献：在可控实验中报告对抗自博弈的“生存奖励”未能提升法律推理能力。关联：为 Agent 自博弈类自我改进方法提供重要的负结果约束。

### LLM Agent Society

今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [ChainVLA: Chaining Vision-Language-Action Queries through a Unified Execution State for Long-Horizon Manipulation](http://arxiv.org/abs/2608.02326v1)
Huang 等，2026-08-03。核心贡献：用统一执行状态链接动作块，使 VLA 模型在长程操作中保持早期动作上下文。关联：直接改进 VLA 在长时程机械臂操作中的连续决策。

#### [Grounded Semantic Re-Binding for Robust Instruction Generalization in Vision-Language-Action Models](http://arxiv.org/abs/2608.02497v1)
Yin 等，2026-08-03。核心贡献：提出语义再绑定机制，缓解 VLA 对改写指令的脆弱性。关联：从架构层面提升 VLA 指令泛化鲁棒性，减少数据缩放依赖。

#### [Uncovering and Mitigating Positional Blind Spots in Vision-Language-Action Models](http://arxiv.org/abs/2608.01573v1)
An 等，2026-08-03。核心贡献：发现 VLA 模型在工作空间不同位置存在性能盲区并提出缓解方法。关联：揭示 VLA 评测中聚合成功率掩盖的空间不均匀性问题。

### 具身导航

#### [FreqNav: Stage-Wise Frequency Routing for Object-Oriented Aerial Vision-Language Navigation](http://arxiv.org/abs/2608.00970v1)
Tang 等，2026-08-02。核心贡献：提出分阶段频率路由，使空中 VLN 在探索与着陆阶段动态调整感知优先级。关联：直接服务目标导向的空中具身导航。

#### [EndoWAM: A Grounded World-Action Model for Generalizable Endoscopic Navigation](http://arxiv.org/abs/2608.01221v1)
Lin 等，2026-08-02。核心贡献：构建内窥镜场景中的世界-动作模型，利用环境状态预测提升导航泛化。关联：面向临床内窥镜导航的具身决策建模。

#### [Linear Multi-Timescale Retention as a Memory-Efficient Vision-Language Bridge](http://arxiv.org/abs/2608.01614v1)
Yeafi 等，2026-08-03。核心贡献：用线性多时间尺度保留替代 Softmax 注意力，降低视觉语言桥接的 O(N²) 记忆复杂度。关联：摘要未明确导航实验，但可为具身导航中的高效视觉语言感知提供基础模块。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [When Replanning Becomes the Bottleneck: Budgeted Replanning for Embodied Agents](http://arxiv.org/abs/2608.01428v1)
Liu 等，2026-08-02。核心贡献：把 LLM 重规划调用视为随上下文增长而变贵的资源，提出预算化重规划。关联：属于 LLM 推理优化的系统级策略，直接削减具身 Agent 长程重规划开销。

### 多模态大模型剪枝

#### [ET-Prune: Evidence-Aware Dynamic Budgeting for Visual Token Pruning in Text-Rich MLLMs](http://arxiv.org/abs/2608.01979v1)
Ding 等，2026-08-03。核心贡献：针对文本密集多模态输入，按问题相关证据动态分配视觉 token 剪枝预算。关联：直接提升 MLLM 在 OCR 等场景下的视觉 token 剪枝效率。

#### [DiffPrune: differentiable information throttling for token pruning in vision-language models](http://arxiv.org/abs/2608.01985v1)
He 等，2026-08-03。核心贡献：提出可微信息门控替代 Gumbel-Softmax，改进 VLM 视觉 token 剪枝的离散选择训练。关联：优化多模态大模型中 token 剪枝的可学习性与训练稳定性。

### 持续学习

#### [UCBound-Net: Uncertainty-Guided Boundary-Aware Continual Learning for Domain-Incremental Ultrasound Segmentation](http://arxiv.org/abs/2608.01518v1)
M.A. Rahman，2026-08-02。核心贡献：提出不确定性引导的边界感知持续学习，缓解超声图像领域增量分割中的灾难性遗忘。关联：直接对应医学影像持续学习中的领域漂移问题。

#### [Two-Stage Bengali Sentiment Classification: Domain Adaptation Through Continual Learning and Parameter-Efficient Fine-Tuning](http://arxiv.org/abs/2608.01471v1)
M.S. Rahman 等，2026-08-02。核心贡献：用领域自适应持续预训练加 PEFT 构建两阶段孟加拉语情感分类框架。关联：展示持续学习与参数高效微调在低资源语言任务上的结合。

#### [Z-PEFT: Zero-shot Backdoor Detection in Parameter-Efficient Fine-Tuning via Canonical Spectral Signatures](http://arxiv.org/abs/2608.02271v1)
Pitzalis 等，2026-08-03。核心贡献：提出基于典型谱特征的零样本后门检测方法，识别 PEFT 模型中的恶意触发器。关联：为 PEFT 复用和持续学习流程提供安全审计手段。

## 视觉感知

### 事件相机视觉感知

#### [VGER: Voxel-Guided Global Event Ranking for Event Cloud Attribution](http://arxiv.org/abs/2608.01470v1)
Jiang 等，2026-08-02。核心贡献：提出体素引导的全局事件排序方法，用于事件云归因和关键事件识别。关联：直接推进事件相机异步稀疏数据的归因解释能力。

### 3D 点云视觉感知

#### [PromptPath: Prompt-Adaptive Computational Pathways for In-Context Learning](http://arxiv.org/abs/2608.02129v1)
Zhang 等，2026-08-03。核心贡献：提出提示自适应的计算路径，改善少样本上下文学习中的任务适配深度。关联：该文为通用视觉 ICL 方法，未明确限定点云；其机制可为 3D 点云感知的跨任务上下文学习提供参考。

### 3D 点云感知与跟踪

今日暂无新论文。

---

## 跨方向信号

- **长程状态管理成为共同瓶颈**：LLM Agent 的 MemArbiter、VLA 的 ChainVLA、具身预算化重规划，分别从记忆仲裁、执行状态、重规划预算回应同一问题。
- **动态资源分配正在替代固定预算**：ET-Prune 按证据动态剪枝、FreqNav 分阶段频率路由、Budgeted Replanning 限制重规划，都表明系统开始按需分配计算。
- **自我改进需要受控流程与负结果审计**：SearchMaster 强调 grounded/regulated 自博弈，而对抗自博弈法律推理论文报告负结果，提示自我改进评估需更严格。
- **多模态效率优化走向互补路径**：Linear Multi-Timescale Retention 以线性注意力替代 Softmax，视觉 token 剪枝则直接剔除冗余 token，二者共同构成多模态推理优化方向的两个支点。

---

## 优先精读

- **ChainVLA**：直接挑战 VLA 长程操作中“每次查询都从头重规划”的局限，对具身智能核心方向有较高启发价值。
- **MemArbiter**：决策时记忆仲裁切中长程 LLM Agent 的“记得住但用不上”问题，适合作为 Agent 工程设计参考。
- **ET-Prune**：面向文本密集 MLLM 的证据感知动态剪枝，兼具多模态大模型压缩与推理优化双重价值。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*