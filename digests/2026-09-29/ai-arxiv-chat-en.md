# Lab Research Topics Radar 2026-09-29

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 18 new + 0 seen in the last 14 days | Generated: 2026-09-29 01:23 UTC

---

## Today's Overview
- LLM Agent Engineering: New matched work covers cross-user memory sharing, false-accusation damage, intent drift, and the SCLATE continual-learning agent substrate; SCLATE is detailed under Continual Learning as its best fit.
- Agent Test-Time Scaling and Self-Improvement: One new paper, CompassPlay, rewards a proposer by gradient alignment with solver improvement in self-play.
- LLM Agent Societies: No new papers today.
- Vision-Language-Action Models: New work addresses dendritic robust action control, progress-field RL, one-step observation-perturbation robustness, and an omni-language navigation probe; the latter is detailed under Embodied Navigation.
- Embodied Navigation: Two new papers cover zero-shot semantic audio-visual navigation with omni-language models and learned BEV occupancy for underwater exploration.
- LLM Pruning and Inference Optimization: One new paper, DegreeSpar, applies structured degree sparsity to secure Transformer inference.
- Multimodal LLM Pruning: No new papers today.
- Continual Learning: Three new papers target self-probe gradients, SCLATE’s continual-agent substrate, and proximity-regularized LoRA merging.
- Event-Based Vision: Two new papers focus on on-chip SNN training and resolution-independent spiking-state-space interfaces for event streams.
- 3D Point Cloud Perception: Three new papers cover raw point-cloud watermarking, multi-view 3D detection query refinement, and geodesic Gromov-Wasserstein distances for 3D modeling.
- 3D Point Cloud Perception and Tracking: No new papers today.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [Learning from Others, Acting for You: Cross-User Memory Sharing for LLM Agents](http://arxiv.org/abs/2609.32511v1)
- **J. Hu et al.** | 2026-09-26 — Contribution: Introduces cross-user memory sharing for LLM agents while addressing conflicting user preferences. Relevance: Directly targets reusable experience and memory transfer across multi-user LLM agent deployments.

#### ["You're Right, Let Me Fix It": How LLM Agents Damage Correct Work When Falsely Accused](http://arxiv.org/abs/2609.32616v1)
- **X. Mao et al.** | 2026-09-26 — Contribution: Defines “gaslight sycophancy” in LLM agents and studies damage caused by accepting false accusations. Relevance: Exposes a safety and robustness failure mode in ongoing or handed-off agent workflows.

#### [When Users Change Their Minds: Measuring and Repairing Intent Drift in LLM Agents](http://arxiv.org/abs/2609.32520v1)
- **Y. Zhang et al.** | 2026-09-26 — Contribution: Introduces IntentFlux to measure and repair intent drift before execution. Relevance: Addresses multi-turn LLM agent alignment when user intent changes.

### Agent Test-Time Scaling and Self-Improvement
#### [CompassPlay: Rewarding the Proposer for Where It Moves the Solver](http://arxiv.org/abs/2609.32228v1)
- **S. X. Pu et al.** | 2026-09-26 — Contribution: Rewards self-play proposers by gradient alignment with solver improvement. Relevance: Advances self-improvement by selecting tasks for training value rather than difficulty alone.

### LLM Agent Societies
No new papers today.

## 具身智能
### Vision-Language-Action Models
#### [DS-VLA: A Dendritic-inspired Vision-Language-Action Model for Robust Action Control](http://arxiv.org/abs/2609.32253v1)
- **Y. Lyu et al.** | 2026-09-26 — Contribution: Proposes a dendritic-inspired VLA model for robust closed-loop action control under transient action corruption. Relevance: Directly improves VLA robustness for real-world manipulation.

#### [PF-RL: Progress Field Reinforcement Learning via Goal-Conditioned Value Geometry for Vision-Language-Action Models](http://arxiv.org/abs/2609.32634v1)
- **Y. Qing et al.** | 2026-09-26 — Contribution: Uses goal-conditioned value geometry to provide intermediate credit for long-horizon VLA manipulation. Relevance: Connects reinforcement fine-tuning with VLA policy learning.

#### [Are Vision-Language-Action Models Robust to One-Step Observation Perturbations?](http://arxiv.org/abs/2609.32550v1)
- **S. Yamabe, J. Sakuma** | 2026-09-26 — Contribution: Studies VLA safety under momentary rather than persistent observation perturbations. Relevance: Highlights under-explored transient perturbation risks in physical VLA deployment.

### Embodied Navigation
#### [RAO-Nav: Probing Omni-Language Models for Zero-shot Semantic Audio-Visual Navigation](http://arxiv.org/abs/2609.32224v1)
- **Q. Ye et al.** | 2026-09-26 — Contribution: Tests whether omni-language models can directly perform zero-shot semantic audio-visual navigation. Relevance: Bridges multimodal language models and embodied navigation without task-specific training.

#### [AquaBEV-Nav: Learned BEV Occupancy for Underwater Navigation and Exploration](http://arxiv.org/abs/2609.32156v1)
- **T. T. Dong et al.** | 2026-09-26 — Contribution: Learns BEV occupancy for underwater navigation instead of relying on indirect monocular depth. Relevance: Advances embodied navigation in visually challenging underwater environments.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [DegreeSpar: Structured Degree Sparsity for Efficient Secure Transformer Inference](http://arxiv.org/abs/2609.32204v1)
- **Y. Cai et al.** | 2026-09-26 — Contribution: Applies structured degree sparsity to reduce nonlinear bottlenecks in secure Transformer inference. Relevance: Targets inference optimization for privacy-preserving LLM deployment.

### Multimodal LLM Pruning
No new papers today.

### Continual Learning
#### [Continual Learning via Self-Probe Gradients](http://arxiv.org/abs/2609.32771v1)
- **D. Cho et al.** | 2026-09-26 — Contribution: Uses self-probing to expand evidence about past behavior when few past samples remain. Relevance: Directly addresses catastrophic forgetting with limited rehearsal data.

#### [SCLATE: a Substrate for Continual-Learning Agent Training and Evaluation](http://arxiv.org/abs/2609.32391v1)
- **Y. Jung et al.** | 2026-09-26 — Contribution: Provides infrastructure for interleaving tasks and agent-side events over long multi-session horizons. Relevance: Connects continual learning with LLM agent training and evaluation.

#### [When the Merge Coefficient Stops Mattering: Proximity Regularized Merging for Continual LoRA Adaptation](http://arxiv.org/abs/2609.32332v1)
- **Y. Liu et al.** | 2026-09-26 — Contribution: Proposes proximity-regularized merging for sequential LoRA adaptation. Relevance: Improves rehearsal-free continual learning with parameter-efficient adapters.

## 视觉感知
### Event-Based Vision
#### [Toward On-Chip Training of Spiking Neural Networks for Dense Event-Based Vision](http://arxiv.org/abs/2609.32405v1)
- **M. Vaillant et al.** | 2026-09-26 — Contribution: Explores on-chip training of deep SNNs for dense event-based vision to reduce BPTT memory demands. Relevance: Directly supports efficient neuromorphic event-camera learning.

#### [RIPE-MambaSpike: Resolution-Independent Spiking-State-Space Interfaces for Parameter-Efficient Event-Based Vision](http://arxiv.org/abs/2609.32537v1)
- **M. M. Islam et al.** | 2026-09-26 — Contribution: Redesigns spiking front-end to state-space backbone interfaces to cut parameters in Spiking-Mamba hybrids. Relevance: Advances parameter-efficient event-based vision.

### 3D Point Cloud Perception
#### [Geometry-Preserving Blind Watermarking for Raw 3D Point Clouds](http://arxiv.org/abs/2609.32222v1)
- **R. Zhou et al.** | 2026-09-26 — Contribution: Introduces blind watermarking directly on raw xyz point-cloud coordinates. Relevance: Addresses ownership and integrity for 3D point-cloud data.

#### [PQR3D: Progressive Query Refinement over Reference-Conditioned Temporal Windows for Multi-View 3D Object Detection](http://arxiv.org/abs/2609.32163v1)
- **H. Ye et al.** | 2026-09-26 — Contribution: Uses progressive query refinement with temporal windows for camera-only multi-view 3D detection. Relevance: Improves temporal 3D perception without sequence-aware streaming training.

#### [Unlocking Geodesic Gromov-Wasserstein Distances for 3D Modeling](http://arxiv.org/abs/2609.32824v1)
- **K. M. Choromanski et al.** | 2026-09-26 — Contribution: Develops geodesic Gromov-Wasserstein distances for comparing distributions on different metric spaces. Relevance: Provides a geometric optimal-transport tool for 3D modeling and point-cloud-related tasks.

### 3D Point Cloud Perception and Tracking
No new papers today.

## Cross-Topic Signals
- SCLATE links LLM Agent Engineering and Continual Learning by treating agents as long-horizon systems needing memory consolidation and session-aware evaluation.
- Robustness under transient perturbations recurs in VLA work and LLM agent work, including one-step observation perturbations, false accusations, and intent drift.
- Parameter efficiency and structured sparsity connect Event-Based Vision, LLM inference optimization, and on-chip SNN training.
- Self-play and RL reward design bridge Agent Test-Time Scaling and VLA policy improvement.
- Geometric and 3D representations appear across point-cloud watermarking, PQR3D, geodesic Gromov-Wasserstein, and BEV occupancy for navigation.

## Priority Reading
- **SCLATE** (http://arxiv.org/abs/2609.32391v1) — Read fully because it defines a substrate for continual-learning agent training and evaluation, bridging two high-interest areas and likely informing lab benchmarks.
#### - **Are Vision-Language-Action Models Robust to One-Step Observation Perturbations?** (http://arxiv.org/abs/2609.32550v1) — Read fully for its safety framing of transient perturbations, which is directly actionable for VLA robustness evaluation.
- **CompassPlay** (http://arxiv.org/abs/2609.32228v1) — Read fully for its gradient-alignment proposer reward, a concrete mechanism for self-improvement and test-time scaling in agent self-play.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*