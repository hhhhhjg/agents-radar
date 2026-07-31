# Lab Research Topics Radar 2026-08-01

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 21 new + 0 seen in the last 14 days | Generated: 2026-07-31 22:54 UTC

---

## Today's Overview

- **LLM Agent Engineering** — SKIMIX, TAPO, and From Scoring to Acting advance skill-portfolio orchestration, dense transition signals, and capability internalization for LLM agents.
- **Agent Test-Time Scaling and Self-Improvement** — SVR and Looped Transformers improve adaptive test-time compute and recurrent-depth state evolution.
- **LLM Agent Societies** — No new papers today.
- **Vision-Language-Action Models** — RedFlow, RoboBRIDGE, and ACE-Data-0 tackle failure correction, deployment robustness, and data acquisition for VLA agents.
- **Embodied Navigation** — SemAnCorr contributes semantic anchored correspondence for zero-shot embodied skill transfer.
- **LLM Pruning and Inference Optimization** — WIDE and GyRot advance dynamic width pruning and low-bit quantization for LLM inference.
- **Multimodal LLM Pruning** — LAST and Capturing Token Tendencies propose efficient visual token pruning for MLLMs.
- **Continual Learning** — Papers on modality contribution drift and AI-generated image detection address forgetting in multimodal and forensic settings.
- **Event-Based Vision** — ENCORE uses event-assisted motion refinement to improve learned video compression.
- **3D Point Cloud Perception** — MonoVoc and PrintAnything extend 3D understanding to open-vocabulary queries and direct fabrication.
- **3D Point Cloud Perception and Tracking** — Finding Change combines before/after satellite images for text-guided change retrieval.

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [SKIMIX: Multi-Agent Harness-Time Scaling with Skill Mixture for Dynamic Harness Engineering](http://arxiv.org/abs/2607.27994v1)
Luo et al. — 2026-07-30. Proposes multi-agent harness-time scaling where agents with different skill portfolios collaboratively refine skill selection using embedding-based retrieval. Relevance: directly targets dynamic harness and skill-library engineering for LLM agents.

#### [TAPO: Transition-Aware Policy Optimization for LLM Agents](http://arxiv.org/abs/2607.27973v1)
Li et al. — 2026-07-30. Introduces transition-aware policy optimization that exploits dense transition signals in addition to sparse task rewards for RL post-training of LLM agents. Relevance: provides a new supervisory signal for LLM-agent policy optimization.

#### [From Scoring to Acting: Outcome-Verified Comparative Self-Distillation for LLM Agents](http://arxiv.org/abs/2607.27937v1)
Xia et al. — 2026-07-30. Presents outcome-verified comparative self-distillation to internalize LLM-agent capabilities and reduce retrieval dependence at inference. Relevance: addresses capability internalization, a central agent-engineering deployment goal.

### Agent Test-Time Scaling and Self-Improvement

#### [SVR: Self-Verifying Refinement via Joint Verdict-Confidence Reinforcement Learning for Adaptive Test-Time Compute](http://arxiv.org/abs/2607.28457v1)
Chen et al. — 2026-07-30. Introduces an oracle-free multi-turn RL framework that learns self-verifying refinement with joint verdict-confidence judgments for adaptive test-time compute. Relevance: shows how agents can decide when and how much to refine, a core self-improvement capability.

#### [Looped Transformers with Source-Centered State Evolution](http://arxiv.org/abs/2607.27656v1)
Kim et al. — 2026-07-30. Proposes source-centered state evolution to stabilize looped transformer blocks across recurrent depth for train/test-time compute scaling. Relevance: strengthens recurrent-depth compute scaling, relevant to self-improvement and adaptive inference.

### LLM Agent Societies

No new papers today.

## 具身智能

### Vision-Language-Action Models

#### [RedFlow: Redirect Failure into Action-Level Corrections for Flow-matching VLA Policy](http://arxiv.org/abs/2607.27782v1)
Yan et al. — 2026-07-30. Uses failure rollouts to generate action-level corrections for flow-matching VLA policies via offline RL, reducing compounding distribution shift. Relevance: directly improves VLA manipulation policy robustness from deployment failures.

#### [RoboBRIDGE: A Modular Framework for Bridging Policies to Robust Real-World Robotic Agents](http://arxiv.org/abs/2607.27881v1)
Yoon et al. — 2026-07-30. Proposes a modular framework adding failure recovery and long-horizon consistency to turn VLA action predictors into robust real-world robotic agents. Relevance: fills deployment gaps in VLA models, matching embodied-agent engineering.

#### [ACE-Data-0: Human-Centric Ambient Capture as Embodied Data Engine](http://arxiv.org/abs/2607.28625v1)
Cao et al. — 2026-07-30. Provides a human-centric ambient capture data engine with synchronized first-person perception, whole-body motion, manipulation, sound, and touch. Relevance: addresses the embodied data bottleneck for training VLA models.

### Embodied Navigation

#### [SemAnCorr: Semantic Anchored Correspondence for Zero-Shot Manipulation Skill Transfer](http://arxiv.org/abs/2607.28382v1)
Dong et al. — 2026-07-30. Presents semantic anchored correspondence to improve zero-shot manipulation skill transfer across functionally similar objects with different geometry. Relevance: improves embodied skill transfer for robotic agents in novel object/context settings.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [WIDE: Boosting Adaptive LLM Inference via Token-level Dynamic Width Pruning](http://arxiv.org/abs/2607.28418v1)
Hu et al. — 2026-07-30. Proposes token-level dynamic width pruning to adapt LLM computation allocation while retaining hardware-friendly structured pruning. Relevance: gives practical adaptive inference for LLMs without static accuracy loss.

#### [GyRot: Leveraging Hidden Synergy between Rotation and Fine-grained Group Quantization for Low-bit LLM Inference](http://arxiv.org/abs/2607.27694v1)
Kim et al. — 2026-07-30. Leverages the hidden synergy between rotation and fine-grained group quantization for accurate low-bit LLM inference. Relevance: addresses quantization efficiency for LLM deployment, complementing pruning.

### Multimodal LLM Pruning

#### [LAST: The Last Query Token Guides Visual Token Pruning for Edge-Cloud Collaborative MLLM Inference](http://arxiv.org/abs/2607.27952v1)
Yang et al. — 2026-07-30. Guides visual token pruning using the last query token for edge-cloud collaborative MLLM inference. Relevance: reduces cloud-side inference cost for multimodal models with minimal task-specific adaptation.

#### [Capturing Token Tendencies for Training-Free Token Pruning in Multimodal Large Language Models](http://arxiv.org/abs/2607.28341v1)
Ma et al. — 2026-07-30. Captures hierarchical token tendencies for training-free visual token pruning in MLLMs. Relevance: improves pruning without fine-tuning, directly applicable to multimodal LLM inference.

### Continual Learning

#### [Regularizing modality contribution drift in multimodal continual learning](http://arxiv.org/abs/2607.27260v1)
Z. Zhang et al. — 2026-07-29. Regularizes drift in relative modality contributions during multimodal continual learning to mitigate forgetting. Relevance: tackles a neglected cause of catastrophic forgetting in multimodal settings.

#### [DECODE: Tackling Representation and Decision Degradation in Continual AI-Generated Image Detection](http://arxiv.org/abs/2607.27882v1)
Cai et al. — 2026-07-30. Targets representation and decision degradation in continual AI-generated image detection. Relevance: handles a practical continual-learning regime where forensic traces are generator-specific.

## 视觉感知

### Event-Based Vision

#### [ENCORE: Event-Assisted Complementary Motion Refinement for Learned Video Compression](http://arxiv.org/abs/2607.28020v1)
Ye et al. — 2026-07-30. Uses event-assisted complementary motion refinement for learned video compression under fast motion, blur, and low illumination. Relevance: demonstrates event data's value beyond recognition for temporal modeling in video pipelines.

### 3D Point Cloud Perception

#### [MonoVoc: Decoupling Geometry and Semantics for Lightweight Monocular Open-Vocabulary 3D Gaussians](http://arxiv.org/abs/2607.28300v1)
Ardekhani et al. — 2026-07-30. Decouples geometry and semantics for lightweight monocular open-vocabulary 3D Gaussians. Relevance: enables queryable 3D scene understanding without restrictive multiview capture.

#### [PrintAnything: Learning an Intermediate Representation for 3D printing G-code Generation](http://arxiv.org/abs/2607.27729v1)
Hong et al. — 2026-07-30. Learns an intermediate representation to generate G-code directly from point clouds for 3D printing without watertight meshes. Relevance: expands point cloud perception to fabrication tasks, bypassing mesh reconstruction.

### 3D Point Cloud Perception and Tracking

#### [Finding Change in Satellite Archives from Text: How to Combine Before-and-After Images Efficiently](http://arxiv.org/abs/2607.28571v1)
Roy et al. — 2026-07-30. Proposes efficient bi-temporal image combination for text-guided change retrieval in satellite archives. Relevance: supports time-aware visual search and tracking of changes from natural-language queries.

## Cross-Topic Signals

- **Adaptive compute is a connective thread**: SVR allocates test-time compute in agents; WIDE adjusts width per token; LAST and Capturing Token Tendencies prune visual tokens. Input-dependent compute is becoming a core design dimension across agent inference and model compression.
- **Self-distillation bridges agent internalization and continual learning**: From Scoring to Acting internalizes retrieval-based skills, while DECODE and modality-drift regularization preserve prior knowledge. Both address the same tension: updating without losing existing capability.
- **Failure-aware training in embodied systems**: RedFlow converts failures into action-level corrections; RoboBRIDGE adds recovery mechanisms; SemAnCorr anchors semantic correspondences to reduce transfer errors. Explicit failure handling is a common strategy for robust VLA/embodied policy deployment.
- **Reusable central representations**: SKIMIX maintains skill portfolios for agents; MonoVoc decouples geometry and semantics for queryable 3D scenes; PrintAnything learns an intermediate representation for G-code. Central representations are being engineered for reuse across agents and perception.

## Priority Reading

- **SVR** — Directly targets adaptive test-time scaling and self-improvement for agents, a priority research area, with an oracle-free RL method that is likely actionable.
- **LAST** — Connects multimodal LLM pruning with edge-cloud deployment and is relevant to two configured compression topics; query-token-guided pruning may be easily adopted.
- **RedFlow** — Addresses VLA deployment distribution shift via offline RL from failure rollouts, a concrete and practical direction for embodied manipulation research.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*