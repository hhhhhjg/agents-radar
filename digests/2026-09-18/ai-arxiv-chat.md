# 实验室研究方向 Radar 2026-09-18

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 19 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-17 23:50 UTC

---

## 今日总览

- **LLM Agent 工程**：今日 3 篇新文献，聚焦长程任务回滚反思、符号时序监督与具身代理编排。
- **Agent 测试时扩展与自我改进**：今日暂无新论文。
- **LLM Agent Society**：今日暂无新论文。
- **视觉-语言-动作模型**：今日检索到 4 篇相关新文献，其中 3 篇直接聚焦 VLA 动作 tokenization 与推理效率，1 篇跨入 LLM Agent 工程。
- **具身导航**：今日检索到 3 篇相关新文献，其中 2 篇直接聚焦 VLN，1 篇为交通场景理解，关联度较低。
- **LLM 剪枝与推理优化**：今日检索到 3 篇相关新文献，其中 2 篇直接讨论推理优化评估，1 篇为表格基础模型技术报告，关联度较低。
- **多模态大模型剪枝**：今日暂无新论文。
- **持续学习**：今日 3 篇新文献，覆盖多模态持续学习、开放世界意图发现与点云 PEFT 适应。
- **事件相机视觉感知**：今日 1 篇新文献，聚焦脉冲神经网络事件跟踪中的位置学习。
- **3D 点云视觉感知**：今日 3 篇新文献，覆盖室内 MLS 语义分割、4D 雷达预处理与协同感知适应。
- **3D 点云感知与跟踪**：今日暂无新论文。

## LLM Agent 与多智能体

### LLM Agent 工程

#### [Rollback the World, Keep the Reflection: Rollback-Induced Reflection for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.18304v1)
Yi Yu et al. | 2026-09-16 | 提出回滚诱导反思，修复长程交互中错误动作导致的上下文与状态偏差。关联：直接提升 LLM Agent 长程任务可靠性。

#### [Symbolic Temporal Supervision of LLM Agents Using Contracts](http://arxiv.org/abs/2609.18128v1)
Yifeng Xiao, Pierluigi Nuzzo | 2026-09-16 | 利用契约对工具调用 Agent 施加符号时序监督，抑制幻觉与对抗操纵。关联：为 LLM Agent 工程提供形式化安全约束。

#### [AeroWeaver: An Embodied-Agent Harness for Weaving Aerial Skills into Distributed, Adaptive Swarm Execution](http://arxiv.org/abs/2609.18520v1)
Jiabin Lou et al. | 2026-09-16 | 构建具身代理框架，将空中技能编织为分布式自适应集群执行。关联：体现 LLM Agent 工程向多智能体具身协同延伸。

### Agent 测试时扩展与自我改进

今日暂无新论文。

### LLM Agent Society

今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [ActionPiece: Rethinking Action Tokenization for Autoregressive Vision-Language-Action Models](http://arxiv.org/abs/2609.18487v1)
Shijie Lian et al. | 2026-09-16 | 重新审视自回归 VLA 的动作 tokenization，指出点式重构指标的局限。关联：直接改进 VLA 策略训练目标与执行命令恢复。

#### [${M}^2$Tok: Multi-head Multi-codebook Discrete Action Tokenization for Vision-Language-Action Models](http://arxiv.org/abs/2609.18259v1)
Chunpu Xu et al. | 2026-09-16 | 提出多头多码本离散动作 tokenization，将连续动作映射为紧凑离散 token。关联：提升 VLA 自回归建模中动作表示的有效性。

#### [rMuscle: Robotic Muscle Memory for Efficient Vision-Language-Action Model Inference](http://arxiv.org/abs/2609.19104v1)
Kaijun Zhou et al. | 2026-09-16 | 引入机器人肌肉记忆机制，加速 VLA 模型推理。关联：面向 VLA 部署的推理效率优化。

### 具身导航

#### [GroundingVLN: Reasoning and Acting with Grounding for Vision-Language Navigation](http://arxiv.org/abs/2609.18581v1)
Kailing Li et al. | 2026-09-16 | 通过显式 grounding 连接语义推理与空间执行。关联：缓解 VLN 中推理与动作脱节的核心问题。

#### [AdaGeoVLN: Selective Geometry Across Representation Depth and Navigation Time for Vision-Language Navigation](http://arxiv.org/abs/2609.18789v1)
Quan-Dung Pham et al. | 2026-09-16 | 选择性利用几何基础模型的中层表示与历史信息。关联：提升 VLN 策略的空间理解与时间保持能力。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [A Calibrated Instrument for Measuring How Inference Optimizations Affect Output Quality](http://arxiv.org/abs/2609.18005v1)
Jerry Kaplan | 2026-09-16 | 提出校准测量工具，评估量化、早退、投机解码等推理优化对输出质量的影响。关联：为 LLM 剪枝与推理优化提供统一质量度量。

#### [The Inference Engineering Pareto Atlas: Which Optimizations Dominate the Cost, Quality, and Latency Frontier?](http://arxiv.org/abs/2609.17863v1)
Srikanta Datta Tumkur et al. | 2026-09-15 | 构建成本、质量与延迟的 Pareto 图谱，比较不同推理优化组合。关联：指导 LLM 推理优化在部署约束下的选择。

### 多模态大模型剪枝

今日暂无新论文。

### 持续学习

#### [MCLC-NET: Multimodal Continual Learning for Leaf Counting](http://arxiv.org/abs/2609.18129v1)
Ruchi Bhatt et al. | 2026-09-16 | 面向叶片计数提出多模态持续学习网络，融合 RGB 与深度等模态。关联：推动持续学习在真实多模态场景中的鲁棒性。

#### [Uncertainty-Aware Continual Learning for Open-World Intent Discovery Under an evolving Label Space](http://arxiv.org/abs/2609.17866v1)
Pisante Aida, Formentin Simone | 2026-09-15 | 提出不确定性感知概率框架，处理开放世界中新意图不断演化的标签空间。关联：解决持续学习中标签空间动态扩展问题。

#### [Position Anchor Tuning: Towards Efficient Adaptation of Pre-Trained Point Cloud Transformers](http://arxiv.org/abs/2609.18056v1)
Zheng Liu et al. | 2026-09-16 | 提出位置锚定调优，在参数高效前提下适配预训练点云 Transformer。关联：以 PEFT 思路支持持续学习中的高效任务适配。

## 视觉感知

### 事件相机视觉感知

#### [Mask IPL: Noise-Free Intrinsic Position Learning via Computation Graph Clipping for Event-Based Spike-Driven Tracking](http://arxiv.org/abs/2609.18716v1)
Yimeng Shan, Malu Zhang | 2026-09-16 | 通过计算图裁剪实现无噪声内在位置学习，用于事件相机脉冲跟踪。关联：提升事件驱动跟踪中的位置信息获取质量。

### 3D 点云视觉感知

#### [Semantic-ITC: A Frame-wise Indoor Mobile Laser Scanning Dataset and Benchmark for Semantic Segmentation](http://arxiv.org/abs/2609.18493v1)
Haiyang Wu et al. | 2026-09-16 | 发布逐帧室内移动激光扫描语义分割数据集与基准。关联：填补室内 MLS 帧级语义标注空白。

#### [Accuracy- and Real-Time-Aware 4D Radar Preprocessing for Autonomous Driving Perception Systems](http://arxiv.org/abs/2609.18542v1)
Woo-Jin Jung et al. | 2026-09-16 | 面向嵌入式环境提出兼顾精度与实时性的 4D 雷达预处理。关联：增强恶劣天气下 3D 感知的鲁棒性与部署效率。

#### [Learning from Distributed Eyes: Leveraging Collaborative Perception for Automated Model Adaptation](http://arxiv.org/abs/2609.18511v1)
Yanan Ma et al. | 2026-09-16 | 利用多车协同感知数据进行无监督模型自适应。关联：缓解 3D 点云感知在域偏移下的泛化退化。

### 3D 点云感知与跟踪

今日暂无新论文。

## 跨方向信号

1. **VLA 动作表示成为焦点**：ActionPiece 与 M²Tok 同时探索离散动作 tokenization，影响自回归策略训练与执行保真度。
2. **持续学习向多模态与开放世界扩展**：MCLC-NET、Uncertainty-Aware 分别处理模态异质与标签动态演化，推动持续学习落地。
3. **推理优化评估走向系统化**：Calibrated Instrument 与 Pareto Atlas 强调质量-成本-延迟联合测量，跨模型压缩与部署方向。
4. **LLM Agent 可靠性双路径**：Rollback 通过回滚反思修复状态，Symbolic Temporal Supervision 通过形式契约约束行为。
5. **具身导航与点云感知共享几何/grounding需求**：AdaGeoVLN、GroundingVLN 与 Semantic-ITC 均强调空间表示与语义对齐。

## 优先精读

1. **Rollback the World, Keep the Reflection**：长程 LLM Agent 错误复合是核心瓶颈，回滚反思提供可复用的状态修复范式。
2. **ActionPiece: Rethinking Action Tokenization**：VLA 动作 tokenization 直接决定自回归策略上限，该文重新审视评价指标与设计原则。
#### **A Calibrated Instrument for Measuring How Inference Optimizations Affect Output Quality**：推理优化缺乏统一质量标尺，该工具可跨量化、早退、投机解码比较，适合精读方法论。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*