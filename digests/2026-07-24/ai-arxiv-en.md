# Lab Research Topics Radar 2026-07-24

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 10 configured topics | 12 new + 27 seen in the last 14 days | Generated: 2026-07-23 22:51 UTC

---

## Today's Overview

- **LLM Agent Engineering**: No new papers today. 10 papers seen in the last 14 days remain in the backlog.
- **Agent Test-Time Scaling and Self-Improvement**: Two new papers propose label‑free self-evolution for audio reasoning (Audio‑Zero) and scaling latent reasoning via a surrogate policy (SLPO), marking progress in reducing computational cost while improving inference‑time reasoning.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: No new papers today. 5 papers from the last 14 days.
- **Embodied Navigation**: 10 new papers appear, covering benchmarks (NavVerse), cross‑embodiment safety (EA‑Nav), test‑time‑scaled VLMs for UAV navigation, driving‑scene understanding (D3VL), remote sensing MLLMs, 3D referring segmentation, cognitive planning, streaming 4D geometry, lightweight semantic segmentation, and UAV‑to‑satellite geo‑localisation. Strong activity in indoor‑to‑outdoor and multi‑modal navigation.
- **LLM Pruning and Inference Optimization**: No new papers today. 1 paper previously seen.
- **Multimodal LLM Pruning**: No new papers today. 1 paper previously seen.
- **Continual Learning**: No new papers today. 8 papers from the last 14 days.
- **Event‑Based Vision**: No new papers today.
- **3D Point Cloud Perception**: No new papers today. 4 papers previously seen.

---

## Research Areas

## LLM Agent 与多智能体

### Agent Test-Time Scaling and Self-Improvement

#### [Audio-Zero: Label-Free Self-Evolution for Fine-Grained Audio Reasoning](http://arxiv.org/abs/2607.20166v1)
Siqian Tong et al. | 2026-07-22  
Introduces a self‑evolution framework that improves fine‑grained audio reasoning without expensive external labels.  
Relevance – Directly tackles test‑time scaling and self‑improvement for audio‑language models, a novel domain for the topic.

#### [SLPO: Scaling Latent Reasoning via a Surrogate Policy](http://arxiv.org/abs/2607.19691v1)
Runyang You et al. | 2026-07-22  
Proposes a surrogate‑policy approach to scale latent reasoning without generating intermediate language tokens, reducing computational cost.  
Relevance – Offers a new method for test‑time scaling that avoids the token‑by‑token decoding bottleneck, highly relevant to agent self‑improvement.

### LLM Agent Engineering

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] – [AgentDebugX: An Open-Source Toolkit for Failure Observability, Attribution, and Recovery in LLM Agents](http://arxiv.org/abs/2607.18754v1)
Kunlun Zhu et al. | 2026-07-21  
Toolkit that helps debug LLM agent failures by tracing root causes and suggesting recovery steps.  
Relevance – Directly addresses engineering challenges in agent debugging and reliability.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] – [Guardrails as Scapegoats: Auditing Unfaithful Safety Refusals in Tool-Augmented LLM Agents](http://arxiv.org/abs/2607.19449v1)
Aarushi Singh | 2026-07-21  
Audits silent infrastructure failures (empty/null payloads) in tool‑augmented agents, often missed by existing evaluation frameworks.  
Relevance – Crucial for safe deployment of tool‑using agents.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] – [Cross-Agent Campaign Attribution: Linking Asynchronous Attacks Across LLM Agents](http://arxiv.org/abs/2607.18826v1)
SangJin Park et al. | 2026-07-21  
Formalises cross‑agent attack attribution, linking sessions distributed across independent agents.  
Relevance – Security engineering for multi‑agent systems.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] – [Broken Gates: Re-evaluating Web Bot Defenses in the Age of LLM Agents](http://arxiv.org/abs/2607.18659v1)
Behzad Ousat et al. | 2026-07-21  
Analyses how LLM‑based browser agents bypass traditional web bot defences.  
Relevance – Highlights new security threats in agent engineering.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] – [Twin Agent: Context Residual Compression for Privilege Separated Agents](http://arxiv.org/abs/2607.19595v1)
Zhanhao Hu et al. | 2026-07-21  
Proposes a context compression method for privilege‑separated agent architectures to defend against prompt injection.  
Relevance – Engineering technique for secure agent design.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] – [PerfAgent: Profiler-Guided Iterative Refinement for Repository-Level Code Optimization](http://arxiv.org/abs/2607.19653v1)
Ryan Deng et al. | 2026-07-22  
LLM agent that performs repository‑level code optimization guided by profiler feedback.  
Relevance – Applies agent engineering to code optimisation tasks.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] – [PRO-LONG: Programmatic Memory Enables Long-Horizon Reasoning](http://arxiv.org/abs/2607.20064v1)
Alexis Fox et al. | 2026-07-22  
Uses programmatic memory to improve long‑horizon reasoning and continual learning in LLM agents.  
Relevance – Directly relevant to agent memory and reasoning engineering.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] – [The Story Shapes the Agent: Narrative Priors in LLM Behavior](http://arxiv.org/abs/2607.18566v1)
Yixuan Wang et al. | 2026-07-20  
Shows that narrative framing of a task can override assigned personas in LLM agents.  
Relevance – Important for understanding agent behaviour tuning.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] – [When Shippers Become Algorithms: Candidate Exposure, Information Design, and the Concentration of LLM-Mediated Freight Markets](http://arxiv.org/abs/2607.19967v1)
Takahiro Ezaki et al. | 2026-07-22  
Simulates LLM‑based shipper agents in freight markets, analysing market concentration effects.  
Relevance – Applies agent engineering to economic simulation.

## 具身智能

### Embodied Navigation

#### [NavVerse: Benchmarking Indoor-to-Outdoor Embodied Navigation in Continuous Robot Simulation](http://arxiv.org/abs/2607.19695v1)
Junzhe Wu et al. | 2026-07-22  
Benchmark for continuous indoor‑to‑outdoor robot navigation, addressing the gap between separate indoor/outdoor evaluations.  
Relevance – High‑impact benchmark directly aligned with embodied navigation research.

#### [EA-Nav: Learning Safe Visual Navigation Policies with Embodiment Awareness](http://arxiv.org/abs/2607.19880v1)
Jialu Zhang et al. | 2026-07-22  
Learns embodiment‑aware navigation policies that disambiguate actions from visual observations across different robot morphologies.  
Relevance – Addresses cross‑embodiment navigation, a key challenge in safe embodied navigation.

#### [No Training, Better Flights: Test-Time Scaled VLMs for UAV Navigation](http://arxiv.org/abs/2607.19288v1)
Feinan Cheng et al. | 2026-07-21  
Applies test‑time scaling to VLMs for UAV navigation without additional training, improving inference reliability.  
Relevance – Novel method combining test‑time scaling with embodied navigation; strong connection to agent test‑time scaling.

#### [D3VL: Understanding Driving Scenes from 3D Time Series Data and Video with Language Models](http://arxiv.org/abs/2607.19528v1)
Heesang Han et al. | 2026-07-21  
Extends MLLMs to understand 3D time‑series data (LiDAR) for autonomous driving.  
Relevance – Advances navigation by fusing 3D sensor data with language models.

#### [Multimodal Large Language Models for Remote Sensing Image Understanding: Domain-Specific or General-Purpose?](http://arxiv.org/abs/2607.20284v1)
Qiwei Ma et al. | 2026-07-22  
Systematic study of MLLM capabilities for remote sensing scene understanding, relevant to aerial navigation.  
Relevance – Provides insights for using MLLMs in UAV/remote‑sensing navigation tasks.

#### [ZeroSplat: Generalized Referring Segmentation in 3D Gaussian Splatting](http://arxiv.org/abs/2607.18801v1)
Jiayu Ding et al. | 2026-07-21  
Extends referring segmentation in 3DGS to multi‑target queries, enabling ambiguous language understanding.  
Relevance – Improves scene understanding for navigation agents that need to follow complex instructions.

#### [Cognitive Dual-Process Planning for Autonomous Driving with Structured Scene Knowledge and Verifiable Reasoning-Action Consistency](http://arxiv.org/abs/2607.19194v2)
Zhongyao Yang et al. | 2026-07-21  
Proposes a dual‑process planning framework for autonomous driving that ensures reasoning‑action consistency.  
Relevance – Directly applicable to decision making in embodied navigation.

#### [IGGT4D: Streaming 4D Instance-Grounded Geometry Transformer](http://arxiv.org/abs/2607.19228v1)
Zhengyu Zou et al. | 2026-07-21  
Streaming 4D reconstruction that tracks objects over time from video, supporting spatial intelligence.  
Relevance – Enables agents to understand dynamic scenes during navigation.

#### [EGRNet: A Lightweight Semantic Segmentation Network with Edge-Gated Refinement and Adversarial Sensing](http://arxiv.org/abs/2607.19617v1)
Bareera Qaseem et al. | 2026-07-21  
Lightweight semantic segmentation network for urban scene understanding.  
Relevance – Could be integrated into on‑device navigation pipelines for efficient perception.

#### [OffNadirLoc: Benchmark and Framework for Challenging UAV-to-Satellite Geo-Localization under Large Off-Nadir Views](http://arxiv.org/abs/2607.19951v1)
Qian Qiao et al. | 2026-07-22  
Benchmark and method for UAV‑to‑satellite geo‑localisation under extreme perspective distortion.  
Relevance – Supports UAV navigation where GPS is unavailable.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] – [Total Variation Distance Estimation in Autoregressive Models](http://arxiv.org/abs/2607.19510v1)
Eric Price et al. | 2026-07-21  
Estimation method to quantify distributional differences between LLM inference engines due to implementation choices.  
Relevance – Important for evaluating inference optimisation techniques like batching, quantization.

### Multimodal LLM Pruning

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] – [Text Template Tokens Are Implicit Semantic Registers in Diffusion Transformers](http://arxiv.org/abs/2607.19139v1)
Maohua Li et al. | 2026-07-21  
Causal interpretability framework revealing that template tokens act as semantic registers in DiTs.  
Relevance – Could inform pruning strategies by identifying redundant computation in multimodal transformers.

### Continual Learning

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] – [Point Ladder Tuning: Parameter-Efficient Hierarchical Adaptation for 3D Point Cloud Understanding](http://arxiv.org/abs/2607.19171v1)
Junlin Chang et al. | 2026-07-21  
Hierarchical fine‑tuning method that adapts pre‑trained point‑cloud models without updating all parameters.  
Relevance – Parameter‑efficient continual learning applicable to 3D perception.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] – [Leveraging ECRAM for Edge Continual Learning](http://arxiv.org/abs/2607.19661v1)
Nabila Tasnim et al. | 2026-07-22  
Hardware‑aware continual learning using ECRAM devices for edge deployment.  
Relevance – Addresses practical continual learning on resource‑constrained platforms.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] – [Continual Video-MLLM Adaptation over Evolving Domains](http://arxiv.org/abs/2607.18716v1)
Rui Cheng et al. | 2026-07-21  
Adapts video MLLMs to sequentially evolving domains without forgetting.  
Relevance – Directly studies continual learning in video understanding models.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] – [Code Division Modulation Layers Against Forgetting and Inference in Continual Gait Identification](http://arxiv.org/abs/2607.19122v1)
Simone Milani | 2026-07-21  
Proposes modulation layers to prevent forgetting and protect privacy in continual biometric identification.  
Relevance – Novel continual learning technique with security considerations.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] – [Statistical Inference for Rank Allocation in Low-Rank Adaptation](http://arxiv.org/abs/2607.20205v1)
Yihang Gao et al. | 2026-07-22  
Statistical method to optimally allocate LoRA ranks across layers under a fixed parameter budget.  
Relevance – Enables better parameter‑efficient continual learning.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] – [Defense Against LLM Backdoors using Critical Neuron Isolation Pruning](http://arxiv.org/abs/2607.19894v1)
Yuxi Li et al. | 2026-07-22  
Prunes critical neurons to defend against backdoor attacks without retraining.  
Relevance – Combines continual learning (pruning) with security.

## 视觉感知

### 3D Point Cloud Perception

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] – [CoGoal3D: Collaborative 3D Object Detection with 3D-Aware Fusion and Refinement](http://arxiv.org/abs/2607.19036v1)
Zhihao Yang et al. | 2026-07-21  
3D‑aware fusion method for V2X collaborative object detection.  
Relevance – Advances 3D perception for multi‑agent systems.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] – [Two-Stage Extrinsic Calibration of a Static Line-Scanning Lidar with a Rotary Platform](http://arxiv.org/abs/2607.18578v1)
Vikram Shree et al. | 2026-07-20  
Calibration method for line‑scanning LiDAR on rotating platforms.  
Relevance – Enables accurate 3D perception in industrial scanning applications.

---

## Cross-Topic Signals

- **Test‑Time Scaling Bridges Agent Reasoning and Embodied Navigation**: Paper “No Training, Better Flights” applies test‑time scaling to VLMs for UAV navigation, while SLPO and Audio‑Zero explore scaling for reasoning agents—indicating a convergent trend toward inference‑time adaptation across domains.
- **Self‑Improvement in Low‑Resource Settings**: Audio‑Zero’s label‑free self‑evolution and SLPO’s surrogate policy both minimise dependence on expensive labels or token‑level decoding, pointing to a common methodology for agent self‑improvement with limited supervision.
#### - **Continual Learning Meets Security**: “Defense Against LLM Backdoors using Critical Neuron Isolation Pruning” explicitly merges pruning (a continual learning technique) with backdoor defence, while “Code Division Modulation Layers” adds privacy to continual learning—a dual‑use pattern.
- **Embodied Navigation Exploits Foundation Models**: Several new papers (NavVerse, EA‑Nav, D3VL) repurpose large pre‑trained models (VLMs, MLLMs) for navigation, showing a shift from training from scratch to leveraging general‑purpose models for embodied tasks.

## Priority Reading

#### **SLPO: Scaling Latent Reasoning via a Surrogate Policy** – Introduces a cost‑effective way to scale test‑time reasoning without generating explicit tokens, potentially transformative for agent self‑improvement and inference efficiency.
2. **NavVerse: Benchmarking Indoor-to-Outdoor Embodied Navigation** – Fills a critical gap in continuous indoor‑to‑outdoor navigation evaluation; essential for understanding real‑world deployment challenges.
#### **Cross-Agent Campaign Attribution: Linking Asynchronous Attacks Across LLM Agents** – Addresses a pressing security gap in multi‑agent systems; foundational for building robust agent deployment infrastructure.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*