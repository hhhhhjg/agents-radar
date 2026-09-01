# Lab Research Topics Radar 2026-09-02

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 19 new + 0 seen in the last 14 days | Generated: 2026-09-01 23:43 UTC

---

## Today's Overview

- **LLM Agent 与多智能体 / LLM Agent Engineering**: Three new papers cover long-horizon agent benchmarking, knowledge-gated verifiable agent tasks, and covert indirect prompt injection in tool-using LLM agents.
- **LLM Agent 与多智能体 / Agent Test-Time Scaling and Self-Improvement**: Three new papers address test-time scaling for plane geometry, multi-solver disagreement rewards for self-evolving reasoning, and self-play driving policies.
- **LLM Agent 与多智能体 / LLM Agent Societies**: No new papers today.
- **具身智能 / Vision-Language-Action Models**: Three new papers advance VLA temporal alignment, one-step action generation, and fine-grained long-horizon VLA evaluation.
- **具身智能 / Embodied Navigation**: Three new papers elicit VLM spatial intelligence, scaffold foundation models for long-horizon navigation, and evaluate VLM geolocalization through embodied navigation.
- **模型压缩与持续学习 / LLM Pruning and Inference Optimization**: No dedicated new paper is listed here; the multimodal visual-token pruning paper is more specifically covered under Multimodal LLM Pruning.
- **模型压缩与持续学习 / Multimodal LLM Pruning**: One new paper proposes geometry correction before diversity-based visual token pruning in LVLMs.
- **模型压缩与持续学习 / Continual Learning**: Three new papers cover continual test-time adaptation for open-vocabulary segmentation, strict online TTA, and task-conditioned adapters for class-incremental learning.
- **视觉感知 / Event-Based Vision**: No new papers today.
- **视觉感知 / 3D Point Cloud Perception**: Three new papers address city-scale point cloud generation, 3DGS semantic segmentation, and composable real-to-sim scene modeling.
- **视觉感知 / 3D Point Cloud Perception and Tracking**: No new papers today.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [E-Commerce Bench: Evaluating LLM Agents on Long-Horizon Autonomous Business Operation](http://arxiv.org/abs/2608.30730v1)
Fan et al. (2026-08-31). Contribution: Introduces a benchmark for LLM agents performing long-horizon autonomous business operations that require exploration, learning, and adaptation over thousands of steps. Relevance: Directly targets long-horizon agent engineering, beyond simple tool-use chaining.

#### [Ignorance or Incompetence? Constructing Knowledge-Gated, Verifiable Tasks for LLM Agents](http://arxiv.org/abs/2608.30322v1)
Tian et al. (2026-08-31). Contribution: Proposes a knowledge-gated task-construction protocol that separates instructions from privileged knowledge artifacts, distinguishing missing knowledge from actual inability. Relevance: Improves controllable, verifiable evaluation of professional LLM agents, a core engineering concern.

#### [Will the User Ever Know? Covert Indirect Prompt Injection on Tool-Using LLM Agents](http://arxiv.org/abs/2608.30362v1)
Lee et al. (2026-08-31). Contribution: Analyzes indirect prompt injection attacks that succeed while remaining unnoticed by the user, moving beyond standard Attack Success Rate metrics. Relevance: Highlights an important security and observability gap in deployed tool-using LLM agents.

### Agent Test-Time Scaling and Self-Improvement

#### [Beyond Uncertainty: Multi-Solver Disagreement Rewards for Self-Evolving Reasoning Curricula](http://arxiv.org/abs/2608.30035v1)
Selvendran et al. (2026-08-30). Contribution: Replaces single-solver sampling uncertainty with multi-solver disagreement as the reward signal for training a Challenger in self-evolving reasoning curricula. Relevance: Directly strengthens self-improvement methodology by addressing a known reward bottleneck in adaptive curriculum generation.

#### [Reactivating Test-Time Scaling for Plane Geometry Problem Solving](http://arxiv.org/abs/2608.30156v1)
Kang et al. (2026-08-31). Contribution: Diagnoses why test-time scaling fails on plane geometry problems and proposes a way to reactivate it for multimodal symbolic reasoning. Relevance: Extends test-time scaling to a multimodal reasoning domain, relevant to the lab's agent scaling interests.

#### [What Emerges and What Breaks in Self-Play Driving](http://arxiv.org/abs/2608.30819v1)
Sisask et al. (2026-08-31). Contribution: Trains Transformer-based driving policies via pure self-play on a real-city HD map, analyzing emergent behavior and failure modes. Relevance: Provides empirical insight into self-improvement and scaling dynamics in autonomous driving agents.

### LLM Agent Societies

No new papers today.

## 具身智能

### Vision-Language-Action Models

#### [Temporal Forcing: 4D Representation Alignment for Vision-Language-Action Models](http://arxiv.org/abs/2608.30643v1)
Ding et al. (2026-08-31). Contribution: Introduces temporal 4D representation alignment for VLA models to handle long-horizon manipulation and observation aliasing between visually similar states. Relevance: Directly addresses a core VLA weakness in temporal modeling and long-horizon control.

#### [DriftingVLA: Native One-Step Vision-Language-Action Generation via Per-Dimension Temporal Drifting](http://arxiv.org/abs/2608.29749v1)
Gao et al. (2026-08-30). Contribution: Presents a native one-step VLA model that generates action chunks through per-dimension temporal drifting, eliminating multi-step refinement. Relevance: Targets action-generation latency, a critical bottleneck for real-time embodied control.

#### [Behavior-Skill: A Fine-Grained Benchmark for Evaluating Vision-Language-Action Policies in Long-Horizon Tasks](http://arxiv.org/abs/2608.30536v1)
Ma et al. (2026-08-31). Contribution: Proposes a benchmark for evaluating constituent skills of VLA policies in long-horizon mobile manipulation, beyond aggregate task-level success. Relevance: Provides better diagnostic tools for VLA weaknesses and intermediate skill failures.

### Embodied Navigation

#### [LightNav-0: Eliciting VLM Spatial Intelligence for Generalist Embodied Navigation](http://arxiv.org/abs/2608.30935v1)
Wang et al. (2026-08-31). Contribution: Leverages pretrained VLM spatial priors to build a generalist embodied navigation policy across tasks, environments, and embodiments. Relevance: Strongly matches embodied navigation interests by converting VLM spatial intelligence into navigation actions.

#### [Scaffolding Foundation Models into Physical-World Agents Pushes the Frontier of Long-Horizon Navigation](http://arxiv.org/abs/2608.30396v1)
Lei et al. (2026-08-31). Contribution: Combines high-level VLM planning with reliable closed-loop control in a scaffolded system for long-horizon physical-world navigation. Relevance: Demonstrates a practical architecture for foundation-model agents in long-horizon embodied tasks.

#### [GeoAgent: Evaluating VLM Geolocalization Through Embodied Navigation](http://arxiv.org/abs/2608.29483v1)
Mukherjee et al. (2026-08-30). Contribution: Evaluates VLM geolocalization through embodied navigation instead of static image-based retrieval. Relevance: Adds an embodied, sequential dimension to VLM evaluation, connecting visual understanding with navigation.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

No new papers today (the LVLM visual-token pruning paper is placed under Multimodal LLM Pruning).

### Multimodal LLM Pruning

#### [Centering before Pruning: Lightweight Geometry Correction for Diversity-Based Visual Token Pruning in LVLMs](http://arxiv.org/abs/2608.30263v1)
Wen et al. (2026-08-31). Contribution: Identifies biased pairwise cosine similarities in raw visual tokens and proposes lightweight geometry correction before diversity-based token pruning in LVLMs. Relevance: Directly reduces multimodal LLM inference cost, a key objective for efficient deployment.

### Continual Learning

#### [One Adapter, Many Tasks: Task-Conditioned Feature Transformations for Continual Learning](http://arxiv.org/abs/2608.31096v1)
Fu et al. (2026-08-31). Contribution: Uses task-conditioned feature transformations on a frozen pretrained backbone for class-incremental learning without accessing earlier training data. Relevance: Aligns with pretrained-model-based continual learning, a central configured interest.

#### [Towards Continual Test-Time Adaptation of Vision-Language Models in Open-Vocabulary Semantic Segmentation](http://arxiv.org/abs/2608.29923v1)
Doloriel et al. (2026-08-30). Contribution: Diagnoses entropy-minimization-driven patch-level class collapse in OVSS under continual distribution shift and proposes an adapted method to preserve vision-language alignment. Relevance: Connects continual learning with robust open-vocabulary vision-language deployment.

#### [Continual Test-Time Adaptation via Entropy Sensitivity-Guidance in Strict Online Setting](http://arxiv.org/abs/2608.29920v1)
Doloriel et al. (2026-08-30). Contribution: Introduces sensitivity-guided erasing adaptation for strict online test-time adaptation with batch size one and no source data access. Relevance: Tackles drift and collapse in online TTA, a difficult practical setting for continual learning.

## 视觉感知

### Event-Based Vision

No new papers today.

### 3D Point Cloud Perception

#### [VCAR: Training-Free 3DGS Segmentation via View Completeness and Axis-Aware Boundary Refinement](http://arxiv.org/abs/2608.30870v1)
Cao et al. (2026-08-31). Contribution: Achieves training-free semantic segmentation in 3D Gaussian Splatting using view completeness and axis-aware boundary refinement. Relevance: Advances 3D scene understanding without expensive per-scene feature distillation.

#### [Lucida: Parse, Generate, and Place for Composable Real-to-Sim Scene Modeling](http://arxiv.org/abs/2608.30821v1)
Qin et al. (2026-08-31). Contribution: Recovers real indoor scenes as complete, editable object assets for robot simulation through parse-generate-place modeling. Relevance: Bridges 3D scene perception and embodied simulation, supporting composable environment reconstruction.

#### [GridFlow: Structured Latent Flow for Seamless City-Scale 3D Point Cloud Generation](http://arxiv.org/abs/2608.29793v1)
Wang et al. (2026-08-30). Contribution: Generates seamless, city-scale 3D point clouds from remote sensing data using structured latent flow. Relevance: Extends point cloud generation to large-scale environments, a complementary capability for 3D perception and simulation.

### 3D Point Cloud Perception and Tracking

No new papers today.

## Cross-Topic Signals

- Test-time adaptation and self-improvement appear across multiple areas: test-time scaling for geometry, multi-solver disagreement rewards, self-play driving, and continual test-time adaptation all revolve around feedback-driven robustness at inference or training time.
- Latency and efficiency are shared bottlenecks: DriftingVLA removes multi-step refinement for one-step VLA action generation, while Centering before Pruning reduces LVLM inference cost through token pruning.
- Spatial and scene priors are increasingly transferable across navigation and 3D perception: LightNav-0 extracts spatial intelligence from VLMs, while VCAR and Lucida provide 3D scene representations that can support embodied simulation and navigation.
- Benchmark design is moving beyond aggregate success metrics: E-Commerce Bench, Behavior-Skill, and Covert IPI each emphasize intermediate skills, long-horizon adaptation, or user-visible failure rather than simple task-level outcomes.

## Priority Reading

#### - **[Beyond Uncertainty: Multi-Solver Disagreement Rewards for Self-Evolving Reasoning Curricula](http://arxiv.org/abs/2608.30035v1)** — Directly addresses a core bottleneck in self-evolving reasoning and is highly transferable to LLM agent self-improvement systems.
#### - **[DriftingVLA: Native One-Step Vision-Language-Action Generation via Per-Dimension Temporal Drifting](http://arxiv.org/abs/2608.29749v1)** — Proposes a concrete latency-reduction method for VLA policies, critical for real-time embodied control.
#### - **[E-Commerce Bench: Evaluating LLM Agents on Long-Horizon Autonomous Business Operation](http://arxiv.org/abs/2608.30730v1)** — A long-horizon, adaptive agent benchmark with thousands of steps, highly relevant to the lab's LLM agent engineering focus.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*