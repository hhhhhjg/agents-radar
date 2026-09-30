# Lab Research Topics Radar 2026-09-30

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 26 new + 0 seen in the last 14 days | Generated: 2026-09-30 00:57 UTC

---

## Today's Overview
- **LLM Agent 与多智能体 — LLM Agent Engineering**: Three new papers: privacy-aware social memory (EP-Mem), token-consumption forecasting during agent execution (TokenCast), and a personalized tool-calling planning benchmark (PDEU-Bench).
- **LLM Agent 与多智能体 — Agent Test-Time Scaling and Self-Improvement**: Three new papers cover adaptive looped transformers, token-disentangled latent scaling for vision-language reasoning, and limits of test-time scaling/training in stance prediction.
- **LLM Agent 与多智能体 — LLM Agent Societies**: No new papers today.
- **具身智能 — Vision-Language-Action Models**: Three new papers: failure-guided VLA driving, VLA robustness under visual interruptions, and an active visual reasoning benchmark for embodied agents.
- **具身智能 — Embodied Navigation**: Three strong papers: round-trip VLN route memory, lifelong embodied navigation, and aerial VLN with dual-horizon world-action modeling.
- **模型压缩与持续学习 — LLM Pruning and Inference Optimization**: Two strongest papers: SPIDER (multimodal token pruning + sub-layer skipping) and GroupMask (layer-adaptive semi-structured LLM sparsity); a further visual-token pruning paper is placed under Multimodal LLM Pruning.
- **模型压缩与持续学习 — Multimodal LLM Pruning**: Two new papers: ACPruner (attention-coverage visual token pruning) and text-aware visual token pruning principles.
- **模型压缩与持续学习 — Continual Learning**: Three flagged; two strongly aligned: SPACE-LoRA (activation-subspace protection) and Reliable Replay (spatial-coherence replay).
- **视觉感知 — Event-Based Vision**: Three flagged; two strong event-vision papers: E-WAVE (event continuous optical flow) and ECHO (event-augmented wrist-only manipulation).
- **视觉感知 — 3D Point Cloud Perception**: Three new papers: superquadric primitive decomposition, 3D Gaussian splatting evidence for open-vocabulary segmentation, and active scene-state construction for 3D scene understanding.
- **视觉感知 — 3D Point Cloud Perception and Tracking**: One new paper: state-space models for metric 3D point tracking.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [EP-Mem: Elastic Privacy Memory for Social Relationship-Aware LLM Agents](http://arxiv.org/abs/2609.35233v1)
F. Sun et al.; 2026-09-28. Contribution: Proposes elastic privacy memory for LLM agents acting in human-agent-human communication to respect social relationship-dependent disclosure boundaries. Relevance: Directly addresses memory and privacy engineering for social LLM-agent deployments.

#### [TokenCast: Forecasting Token Consumption During LLM Agent Execution](http://arxiv.org/abs/2609.35760v1)
C. Ouyang et al.; 2026-09-28. Contribution: Forecasts token consumption during LLM-agent execution, motivated by order-of-magnitude run-to-run variation. Relevance: Supports cost-aware agent execution and inference planning.

#### [PDEU-Bench: Benchmarking the Personalized Planning Lifecycle of Tool-Calling LLM Agents](http://arxiv.org/abs/2609.34930v1)
H. Lai et al.; 2026-09-28. Contribution: Introduces a benchmark for personalized planning across multi-step, tool-calling LLM-agent interactions. Relevance: Provides evaluation infrastructure for sustained, goal-directed agent planning.

### Agent Test-Time Scaling and Self-Improvement
#### [Improving Test-Time Scaling with Adaptive Looped Transformers](http://arxiv.org/abs/2609.35748v1)
Y. You et al.; 2026-09-28. Contribution: Studies whether looping improves test-time scaling and proposes adaptive looped transformers. Relevance: Core method for test-time scaling via adaptive latent computation.

#### [Token-Disentangled Latent Test-Time Scaling for Vision-Language Reasoning](http://arxiv.org/abs/2609.35228v1)
H.-X. Ma et al.; 2026-09-28. Contribution: Disentangles token roles in latent test-time scaling for vision-language reasoning instead of applying one scalar reward to all editable tokens. Relevance: Advances self-improvement/test-time scaling for multimodal reasoning.

#### [Where Do Test-Time Scaling and Training Fall Short in Individual Stance Prediction?](http://arxiv.org/abs/2609.33155v1)
Y. Zhao et al.; 2026-09-27. Contribution: Evaluates test-time scaling and post-training for individual stance prediction, finding limits in this task. Relevance: Provides evidence on where test-time scaling does and does not transfer.

### LLM Agent Societies
No new papers today.

## 具身智能
### Vision-Language-Action Models
#### [RefineDrive: Reliable Failure-Guided Learning for Vision-Language-Action Driving](http://arxiv.org/abs/2609.35078v1)
Z. Sun et al.; 2026-09-28. Contribution: Proposes failure-guided learning for VLA driving using reliable diagnoses, matched correction targets, and fine-grained rewards. Relevance: Improves VLA learning from failures in autonomous driving.

#### [Learning to Act under Visual Interruptions with Vision-Language-Action Models](http://arxiv.org/abs/2609.35003v1)
M. Jiang et al.; 2026-09-28. Contribution: Studies VLA robotic manipulation when camera streams are interrupted and policies must continue acting. Relevance: Addresses robustness of VLA policies under degraded visual input.

#### [JRDB-AVR: An Active Visual Reasoning Benchmark for Embodied Agents in Real-World Environments](http://arxiv.org/abs/2609.35032v1)
Z. Cai et al.; 2026-09-28. Contribution: Introduces an active visual reasoning benchmark where evidence is distributed across time, viewpoints, and interacting objects. Relevance: Evaluates embodied agents’ active perception and reasoning beyond static VLA settings.

### Embodied Navigation
#### [Reliability-Aware Sparse Route Memory for Round-Trip Vision-Language Navigation](http://arxiv.org/abs/2609.34163v1)
B. Long et al.; 2026-09-28. Contribution: Diagnoses round-trip VLN failures and proposes reliability-aware sparse route memory. Relevance: Directly targets return navigation and route memory in embodied navigation.

#### [NavHarness: Towards Lifelong Embodied Navigation](http://arxiv.org/abs/2609.34276v1)
X. Zhao et al.; 2026-09-28. Contribution: Addresses lifelong embodied navigation with evolving maps and earlier search records that may conflict with new observations. Relevance: Advances long-term navigation memory and consistency.

#### [ForeFly: A Dual-Horizon World Action Model for Aerial Vision-Language Navigation](http://arxiv.org/abs/2609.33581v1)
K. Wang et al.; 2026-09-27. Contribution: Proposes a dual-horizon world action model for aerial VLN in complex 3D environments. Relevance: Extends VLN to UAVs with multi-horizon future cues.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [SPIDER: Multi-Layer Semantic Token Pruning and Adaptive Sub-Layer Skipping in Multimodal Large Language Models](http://arxiv.org/abs/2609.34977v1)
T. Chen et al.; 2026-09-28. Contribution: Combines multi-layer semantic token pruning with adaptive sub-layer skipping to address data and computational redundancy in MLLMs. Relevance: Directly targets LLM/MLLM inference optimization through pruning and layer skipping.

#### [GroupMask: Layer-Adaptive Group-wise Sparsity for Semi-Structured LLM Pruning](http://arxiv.org/abs/2609.33977v1)
Z. Li et al.; 2026-09-27. Contribution: Introduces layer-adaptive group-wise sparsity to improve semi-structured LLM pruning beyond fixed N:M ratios per layer. Relevance: Core LLM pruning method for regular sparse compression.

### Multimodal LLM Pruning
#### [ACPruner: Visual Token Pruning as Biased Attention Coverage Maximization in LVLMs](http://arxiv.org/abs/2609.34558v1)
X. Li et al.; 2026-09-28. Contribution: Recasts visual token pruning as biased attention coverage maximization in LVLMs. Relevance: Directly improves multimodal LLM efficiency by selecting visual tokens under attention.

#### [When Text Matters: Design Principles for Visual Token Pruning in Vision-Language Model](http://arxiv.org/abs/2609.34861v1)
M. Kang et al.; 2026-09-28. Contribution: Studies how text should inform visual-token pruning design in VLMs. Relevance: Provides text-aware principles for preserving essential visual information in multimodal pruning.

### Continual Learning
#### [SPACE-LoRA: Allocating Activation-Subspace Protection for Continual Learning](http://arxiv.org/abs/2609.34453v1)
S. Yoo et al.; 2026-09-28. Contribution: Protects activation subspaces to reduce interference when sequentially learning tasks with LoRA. Relevance: Directly addresses catastrophic forgetting in continual learning with parameter-efficient adaptation.

#### [Reliable Replay through Spatial Coherence in Online Continual Learning](http://arxiv.org/abs/2609.33725v1)
H. Sun et al.; 2026-09-27. Contribution: Uses spatial coherence to prioritize replay memories in online continual learning. Relevance: Improves experience replay by accounting for related-memory responses rather than isolated losses.

## 视觉感知
### Event-Based Vision
#### [E-WAVE: Event-based Continuous Optical Flow via Warping-Aligned Visual Encoding](http://arxiv.org/abs/2609.34346v1)
J. Wu et al.; 2026-09-28. Contribution: Estimates continuous event-based optical flow via warping-aligned visual encoding. Relevance: Core event-vision method for temporally dense motion perception.

#### [ECHO: Event-Augmented Context with Hindsight and Outlook for Wrist-Only Manipulation](http://arxiv.org/abs/2609.34893v1)
X. Wang et al.; 2026-09-28. Contribution: Uses event cameras with hindsight and outlook context for wrist-only manipulation under extreme exposure. Relevance: Applies event-based vision to robust embodied manipulation.

### 3D Point Cloud Perception
#### [Superquadric Primitive Decomposition of 3D point clouds via Geometric-Aware Inlier Refinement](http://arxiv.org/abs/2609.35725v1)
A. Rinaldi et al.; 2026-09-28. Contribution: Decomposes 3D point clouds into superquadric primitives using geometric-aware inlier refinement. Relevance: Directly advances interpretable 3D point-cloud shape representation.

#### [EviSplat: Preserving Multi-View Evidence in 3D Gaussian Splatting for Open-Vocabulary Segmentation](http://arxiv.org/abs/2609.34853v1)
S. Moon et al.; 2026-09-28. Contribution: Preserves multi-view evidence in 3D Gaussian Splatting for open-vocabulary 3D segmentation. Relevance: Supports language-grounded 3D scene perception from multi-view observations.

#### [SceneScaffold: Active Scene-State Construction for Unified 3D Scene Understanding](http://arxiv.org/abs/2609.33518v1)
X. Li et al.; 2026-09-27. Contribution: Builds active scene-state representations to improve unified 3D scene understanding by 3D-LMMs. Relevance: Addresses visual bottlenecks in 3D point-cloud/scene understanding.

### 3D Point Cloud Perception and Tracking
#### [3D Point Tracking with State Space Models](http://arxiv.org/abs/2609.34035v1)
M. Ogawa et al.; 2026-09-27. Contribution: Uses state space models to track any point in dynamic scenes in metric 3D. Relevance: Directly targets 3D point tracking for reconstruction, navigation, and driving.

## Cross-Topic Signals
- Test-time scaling is expanding from text to multimodal latent reasoning and adaptive looped computation, while agent cost forecasting (TokenCast) highlights practical execution constraints.
- Pruning and inference optimization converge across LLM and multimodal settings: SPIDER, ACPruner, and When Text Matters all use token importance, coverage, or skipping, with text-aware criteria becoming important.
- Continual-learning mechanisms—LoRA subspace protection and coherent replay—can inform lifelong embodied navigation (NavHarness) and efficient adaptation.
- Embodied navigation and VLA robustness share partial-observability themes: round-trip route memory, visual interruptions, and active visual reasoning benchmarks.
- Event-based vision and 3D perception/tracking both aim at robust dynamic-scene sensing: event optical flow, event-augmented manipulation, and metric 3D point tracking.

## Priority Reading
- **SPIDER** — read in full because it jointly tackles multimodal token pruning and adaptive sub-layer skipping, central to LLM inference optimization and multimodal compression.
- **NavHarness** — read in full because it targets lifelong embodied navigation with evolving maps and conflicting search records, bridging navigation memory and continual adaptation.
- **Token-Disentangled Latent Test-Time Scaling** — read in full because it advances test-time scaling/self-improvement for vision-language reasoning by treating editable latent tokens differently.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*