# 实验室研究方向 Radar 2026-07-24

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 10 个研究方向 | 12 篇新文献 + 27 篇过去14天内已出现 | 生成时间：2026-07-23 22:51 UTC

---

好的，科研情报分析师。以下是基于您提供的2026-07-24定向检索数据生成的《研究方向雷达》。

---

### 今日总览

- **LLM Agent 与多智能体 / LLM Agent 工程**：今日暂无新论文。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**：出现2篇新文献，探索了无需外部标签的自我进化机制（Audio-Zero）以及替代显式推理链的潜在推理扩展方法（SLPO），旨在提升模型在特定任务上的测试时性能和计算效率。
- **LLM Agent 与多智能体 / LLM Agent Society**：今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**：今日暂无新论文。
- **具身智能 / 具身导航**：出现10篇新文献，是该周期内进展最密集的方向。涵盖了从室内外连续导航、跨体态导航到基于VLM的无人机导航、驾驶场景理解和遥感理解等多个细分领域，体现了具身导航从仿真到真实、从单一到多场景融合的技术演进。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**：今日暂无新论文。
- **模型压缩与持续学习 / 多模态大模型剪枝**：今日暂无新论文。
- **模型压缩与持续学习 / 持续学习**：今日暂无新论文。
- **视觉感知 / 事件相机视觉感知**：今日暂无新论文。
- **视觉感知 / 3D 点云视觉感知**：今日暂无新论文。

---

### 分方向情报

## 具身智能

### 具身导航

#### [NavVerse: Benchmarking Indoor-to-Outdoor Embodied Navigation in Continuous Robot Simulation](http://arxiv.org/abs/2607.19695v1)
**作者**: Junzhe Wu et al. | **发布日期**: 2026-07-22
**核心贡献**: 提出首个室内外连续导航的统一基准与仿真环境，填补了该领域的评估空白。
**方向关联**: 直接定位于具身导航中室内外场景无缝衔接的挑战性任务。

#### [EA-Nav: Learning Safe Visual Navigation Policies with Embodiment Awareness](http://arxiv.org/abs/2607.19880v1)
**作者**: Jialu Zhang et al. | **发布日期**: 2026-07-22
**核心贡献**: 提出一种体态感知的导航策略，使不同形态的智能体能从相同视觉观测中推导出不同的、安全的行动。
**方向关联**: 解决了跨体态具身导航中的核心歧义性问题，提升了策略的泛化性和安全性。

#### [No Training, Better Flights: Test-Time Scaled VLMs for UAV Navigation](http://arxiv.org/abs/2607.19288v1)
**作者**: Feinan Cheng et al. | **发布日期**: 2026-07-21
**核心贡献**: 将测试时扩展技术应用于无人机视觉语言导航，通过多步推理提升模型在复杂场景下的表现，无需重新训练。
**方向关联**: 为具身导航领域中的无人机应用提供了低成本、高性能的新范式。

#### [D3VL: Understanding Driving Scenes from 3D Time Series Data and Video with Language Models](http://arxiv.org/abs/2607.19528v1)
**作者**: Heesang Han et al. | **发布日期**: 2026-07-21
**核心贡献**: 构建了融合3D时间序列数据与视频的多模态大模型，用于增强自动驾驶场景理解。
**方向关联**: 聚焦于驾驶这一具身导航的关键场景，利用3D感知优势提升自动驾驶系统的理解能力。

#### [Multimodal Large Language Models for Remote Sensing Image Understanding: Domain-Specific or General-Purpose?](http://arxiv.org/abs/2607.20284v1)
**作者**: Qiwei Ma et al. | **发布日期**: 2026-07-22
**核心贡献**: 系统性地比较了通用与专用多模态大模型在遥感图像理解任务上的能力边界。
**方向关联**: 为导航系统中的环境感知提供了遥感领域的模型选型与评估指导。

#### [Cognitive Dual-Process Planning for Autonomous Driving with Structured Scene Knowledge and Verifiable Reasoning-Action Consistency](http://arxiv.org/abs/2607.19194v2)
**作者**: Zhongyao Yang et al. | **发布日期**: 2026-07-21
**核心贡献**: 提出融合结构场景知识与可验证推理-行动一致性的认知双过程规划框架，用于自动驾驶。
**方向关联**: 通过引入认知科学中的双过程理论，提升了自动驾驶导航规划的可解释性和鲁棒性。

#### [IGGT4D: Streaming 4D Instance-Grounded Geometry Transformer](http://arxiv.org/abs/2607.19228v1)
**作者**: Zhengyu Zou et al. | **发布日期**: 2026-07-21
**核心贡献**: 提出一个流式4D实例级几何Transformer，能够从视频流中感知物体的运动、出现和消失。
**方向关联**: 为具身智能体提供了动态、流式的4D场景理解能力，是导航中环境感知的关键技术。

#### [OffNadirLoc: Benchmark and Framework for Challenging UAV-to-Satellite Geo-Localization under Large Off-Nadir Views](http://arxiv.org/abs/2607.19951v1)
**作者**: Qian Qiao et al. | **发布日期**: 2026-07-22
**核心贡献**: 建立了针对大离轴视角下UAV-卫星地理定位的基准与框架。
**方向关联**: 解决了无人机在极端视角下的导航定位难题，拓展了跨视角定位技术的适用范围。

#### [EGRNet: A Lightweight Semantic Segmentation Network with Edge-Gated Refinement and Adversarial Sensing](http://arxiv.org/als/2607.19617v1)
**作者**: Bareera Qaseem et al. | **发布日期**: 2026-07-21
**核心贡献**: 提出一种轻量级语义分割网络，通过边缘门控优化提升自动驾驶场景理解效率。
**方向关联**: 为计算资源受限的具身导航平台提供了高性能的环境感知解决方案。

#### [ZeroSplat: Generalized Referring Segmentation in 3D Gaussian Splatting](http://arxiv.org/abs/2607.18801v1)
**作者**: Jiayu Ding et al. | **发布日期**: 2026-07-21
**核心贡献**: 提出通用的零样本指代分割方法，能在3D高斯泼溅场景中根据模糊的自然语言指令分割多目标。
**方向关联**: 增强了具身智能体在导航中与复杂、模糊人类指令交互的能力。

## LLM Agent 与多智能体

### Agent 测试时扩展与自我改进

#### [Audio-Zero: Label-Free Self-Evolution for Fine-Grained Audio Reasoning](http://arxiv.org/abs/2607.20166v1)
**作者**: Siqian Tong et al. | **发布日期**: 2026-07-22
**核心贡献**: 提出一种无需外部标签的模型自我进化方法，显著提升了大型音频语言模型在细粒度音频推理上的能力。
**方向关联**: 探索了Agent在特定模态（音频）上的自我改进新路径，无需昂贵的人工标注。

#### [SLPO: Scaling Latent Reasoning via a Surrogate Policy](http://arxiv.org/abs/2607.19691v1)
**作者**: Runyang You et al. | **发布日期**: 2026-07-22
**核心贡献**: 提出通过代理策略来扩展语言模型在隐空间中的推理能力，避免了显式思维链的高计算成本。
**方向关联**: 属于测试时扩展的前沿探索，旨在通过更高效的隐式推理实现模型的性能提升。

---

### 跨方向信号

1.  **测试时扩展与自我改进的泛化**：从显式思维链（如SLPO）到无需标签的自我进化（如Audio-Zero），提升模型测试时计算效率与泛化能力的方法正迅速渗透到Agent和导航等多个领域。
2.  **3D表示与具身导航的深度融合**：大量新工作（如IGGT4D, ZeroSplat）将3D高斯泼洒和4D场景理解技术应用于导航中的感知和指令跟随，推动了环境表征与下游任务的深度绑定。
3.  **认知架构与规划的结合**：无论是自主驾驶中的“双过程规划”（Cognitive Dual-Process Planning），还是利用测试时扩展进行“多步推理”，将高阶认知科学理论或策略融入Agent规划流程，正成为提升复杂任务解决能力的重要趋势。
4.  **轻量化与高效部署**：面向具身智能体，对模型进行轻量化设计（如EGRNet）或采用无需训练的测试时优化策略（如No Training, Better Flights），反映了在资源受限边缘设备上部署复杂AI算法的迫切需求。

---

### 优先精读

#### **NavVerse: Benchmarking Indoor-to-Outdoor Embodied Navigation in Continuous Robot Simulation**
    - **理由**：该工作为具身导航领域填补了一个关键的评估空白——室内外连续导航。其提出的基准和仿真环境将对后续研究产生深远影响，强烈建议精读以了解当前研究的边界。
#### **EA-Nav: Learning Safe Visual Navigation Policies with Embodiment Awareness**
    - **理由**：跨体态导航是具身智能的终极目标之一。该论文系统地解决了体态差异带来的感知歧义问题，其“体态感知”的设计思想具有很高的启发性，值得深入研读其方法论。
#### **SLPO: Scaling Latent Reasoning via a Surrogate Policy**
    - **理由**：作为测试时扩展方向的前沿工作，SLPO提出的隐空间推理扩展方法试图在保持性能的同时解决显式推理的效率和成本问题。这可能是未来Agent提升能力的重要技术路径，需要重点关注其技术细节和潜在影响。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*