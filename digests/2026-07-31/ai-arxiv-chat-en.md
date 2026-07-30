# Lab Research Topics Radar 2026-07-31

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 15 new + 0 seen in the last 14 days | Generated: 2026-07-30 22:59 UTC

---

## Today's Overview

- **LLM Agent Engineering** — Three new papers advance tool acquisition, long-term memory organization, and complex task evaluation for LLM agents.
- **Agent Test-Time Scaling and Self-Improvement** — One new paper introduces an automated red‑teaming agent that uses self‑play to discover prompt injection attacks, directly improving frontier LLM robustness.
- **LLM Agent Societies** — No new papers today.
- **Vision-Language-Action Models** — Three new papers tackle real‑time VLA deployment, test‑time scaling via latent compositional steering, and explicit 3D kinematic guidance for better spatial reasoning.
- **Embodied Navigation** — Three new papers cover a simulation platform for biomedical labs, 3DGS scene quality assessment for navigation, and depth‑aware video panoptic segmentation for autonomous driving.
- **LLM Pruning and Inference Optimization** — No new papers today.
- **Multimodal LLM Pruning** — No new papers today.
- **Continual Learning** — Three new papers propose architectures for forgetting‑free learning, game‑theoretic RL fine‑tuning, and heterogeneous federated MoE‑LoRA.
- **Event‑Based Vision** — One new paper presents bio‑inspired sequence‑aware spiking object detection for event cameras.
- **3D Point Cloud Perception** — One new paper addresses long‑tailed data distribution in point cloud dataset distillation.
- **3D Point Cloud Perception and Tracking** — No new papers today.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [Scores Are Not Decisions: Cost-Aware Stopping for Tool Acquisition in LLM Agents](http://arxiv.org/abs/2607.27083v1)
Yicheng Feng et al. | 2026-07-29 | Proposes a cost‑aware stopping criterion for tool acquisition in LLM agents, balancing task sufficiency against overhead. | Directly addresses a core engineering challenge – efficient tool selection – and introduces a decision‑theoretic framework applicable to general agent harnesses.

#### [Filesystem-Based Memory for LLM Agents: Organization, Evolution, and Sustainability](http://arxiv.org/abs/2607.26637v1)
Sizhe Zhou et al. | 2026-07-29 | Analyzes filesystem‑based long‑term memory for deployed LLM agents, showing how directory trees of markdown files enable sustainable self‑organization. | Provides a practical, scalable memory paradigm that aligns with the lab’s interest in agent engineering and long‑term autonomous operation.

#### [TREK: A Travel Reasoning and Evaluation Kit for LLM Agents in Complex Trip Planning](http://arxiv.org/abs/2607.26977v1)
Jinhu Qi et al. | 2026-07-29 | Introduces a benchmark and evaluation framework for tool‑using LLM agents in multi‑constraint travel planning. | Offers a rigorous test bed for agent tool use and multi‑objective reasoning, relevant to evaluating and improving agent decision‑making.

### Agent Test-Time Scaling and Self-Improvement

#### [GPT-Red: Automated Red Teaming via Self-Play at Scale](http://arxiv.org/abs/2607.26115v1)
Eric Wallace et al. | 2026-07-28 | Trains an automated red‑teaming agent through self‑play to discover novel prompt injection attacks, then uses those attacks to adversarially train GPT‑5.6. | A direct instance of test‑time scaling and self‑improvement – the agent improves its own attack generation while the target model improves its robustness, highly relevant to the sub‑direction.

### LLM Agent Societies

No new papers today.

## 具身智能

### Vision-Language-Action Models

#### [TurboVLA: Real-Time Vision-Language-Action Model at 32 Hz on an RTX 4090 with <1 GB VRAM](http://arxiv.org/abs/2607.27205v1)
Hengyi Xie et al. | 2026-07-29 | Designs a lightweight VLA architecture that achieves 32 Hz inference on consumer hardware by projecting visual tokens directly into a compact action space. | Addresses real‑time deployment constraints for VLA models, a critical bottleneck for practical robotics.

#### [RL$^2$-VLA: Adaptive RL Latent Compositional Steering with Test-Time Scaling for Vision-Language-Action Models](http://arxiv.org/abs/2607.26991v1)
Derek Ming Siang Tan et al. | 2026-07-29 | Introduces a test‑time steering mechanism for VLA models that uses RL to compose latent skills, improving performance on out‑of‑domain tasks without retraining. | Directly combines test‑time scaling with VLA, a high‑impact method for improving generalization in embodied tasks.

#### [Explicit Kinematic Guidance from Analytic Concepts for Vision-Language-Action Models](http://arxiv.org/abs/2607.26513v1)
Mingyang Sun et al. | 2026-07-29 | Incorporates explicit 3D kinematic reasoning (object poses, joint constraints) into VLA models, moving beyond pure 2D input. | Enhances spatial awareness and precision in manipulation, a key limitation of current VLA approaches.

### Embodied Navigation

#### [BioVLN: A Simulation Platform for Visual Language Navigation in Biomedical Laboratories](http://arxiv.org/abs/2607.26914v1)
Zhe Liu et al. | 2026-07-29 | Builds a simulation platform where laboratory robots navigate to instruments using language instructions and visual input. | Provides a domain‑specific navigation benchmark with instrument‑centric goals, expanding embodied navigation beyond household settings.

#### [SpatialQ: Understanding 3D Gaussian Splatting Scene Quality via Visual-based MLLM](http://arxiv.org/abs/2607.26595v1)
Jingxuan Su et al. | 2026-07-29 | Proposes a multimodal LLM to assess the perceptual quality of 3DGS reconstructions used in navigation. | Quality assessment of 3D scene representations is increasingly important for reliable navigation; this paper offers a novel evaluation method.

#### [DVPSFormer: Efficient Online Depth-aware Video Panoptic Segmentation for Autonomous Driving](http://arxiv.org/abs/2607.26165v1)
Yung-Hsu Yang et al. | 2026-07-28 | Develops an efficient online framework for depth‑aware video panoptic segmentation, unifying metric depth, semantics, and instance trajectories. | Directly supports safe autonomous navigation by providing a holistic environmental understanding in real time.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

No new papers today.

### Multimodal LLM Pruning

No new papers today.

### Continual Learning

#### [The Art of Not Forgetting A Local Learning Architecture for Continual Learning](http://arxiv.org/abs/2607.26523v1)
Ashmith Atmuri et al. | 2026-07-29 | Introduces CMP, a continual‑learning architecture that uses sparse relational codes and local updates to avoid catastrophic forgetting. | Provides a biologically‑plausible, backprop‑free approach to lifelong learning, relevant to maintaining model performance over sequential tasks.

#### [Post-Training at the Edge of Detectability: A Game-Theoretic Approach to Fine-Tuning](http://arxiv.org/abs/2607.26358v1)
Keegan Harris et al. | 2026-07-29 | Formulates RL fine‑tuning as a game between a model and a detector, optimizing performance while limiting detectable drift from the reference policy. | Offers a principled way to balance task improvement and policy retention, directly applicable to continual learning of LLMs.

#### [FedWeave: Rethinking the Unit of Specialization in Heterogeneous Federated MoE-LoRA](http://arxiv.org/abs/2607.26618v1)
Donghang Duan et al. | 2026-07-29 | Proposes a federated MoE‑LoRA framework that redefines specialization units to mitigate cross‑task interference during aggregation. | Addresses continual learning in a federated setting, critical for adapting LLMs to decentralized, heterogeneous data streams.

## 视觉感知

### Event-Based Vision

#### [Sequence-SOD: Bio-inspired Sequence-aware Spiking Object Detection for Event Cameras](http://arxiv.org/abs/2607.26703v1)
Katharina Bendig et al. | 2026-07-29 | Designs a spiking neural network for object detection that leverages temporal sequences from event cameras, achieving high efficiency. | Advances event‑based perception with bio‑plausible SNNs, directly relevant to the lab’s event‑based vision interest.

### 3D Point Cloud Perception

#### [Long-Tailed 3D Point Cloud Dataset Distillation](http://arxiv.org/abs/2607.26763v1)
Jiahao You et al. | 2026-07-29 | Extends point cloud dataset distillation to handle long‑tailed class distributions, preserving utility for rare classes. | Addresses a practical data imbalance problem in 3D perception, improving training efficiency and model performance on tail classes.

### 3D Point Cloud Perception and Tracking

No new papers today.

## Cross-Topic Signals

1. **Test‑time scaling bridges VLA and agent self‑improvement**: RL$^2$-VLA applies test‑time scaling to VLA models, while GPT‑Red uses self‑play (a form of test‑time scaling) for attack generation. Both papers suggest a convergent interest in adapting model behavior at inference without retraining.
2. **Memory organization for agents and continual learning**: The filesystem‑based memory architecture for LLM agents (Paper 8) shares design goals with continual learning architectures like CMP (Paper 7) – both aim to store and evolve knowledge over time, though in different contexts.
3. **Cost‑awareness across tool acquisition and federated learning**: The cost‑aware stopping in tool acquisition (Paper 6) and the game‑theoretic fine‑tuning (Paper 12) both introduce explicit trade‑offs between performance and resource/regulatory costs, indicating a trend toward more economically‑grounded agent design.
4. **3D scene understanding from navigation to VLA**: Explicit 3D kinematic guidance (Paper 3) and 3DGS quality assessment (Paper 13) both aim to enrich the spatial reasoning capabilities of embodied agents, linking VLA and navigation research.

## Priority Reading

#### **RL$^2$-VLA: Adaptive RL Latent Compositional Steering with Test-Time Scaling for Vision-Language-Action Models** — Combines two high‑priority lab themes (test‑time scaling and VLA) in a single framework, with strong potential for improving generalization in manipulation tasks.
#### **GPT-Red: Automated Red Teaming via Self-Play at Scale** — A concrete demonstration of agent self‑improvement through adversarial training, directly applicable to the lab’s agent test‑time scaling sub‑direction and yielding practical security insights.
#### **Filesystem-Based Memory for LLM Agents: Organization, Evolution, and Sustainability** — Provides a lightweight, deployable memory solution that is immediately usable in agent systems, addressing a key engineering bottleneck in long‑running agents.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*