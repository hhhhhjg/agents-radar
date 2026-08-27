# Lab Research Topics Radar 2026-08-27

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 19 new + 0 seen in the last 14 days | Generated: 2026-08-27 02:47 UTC

---

# Research Topics Radar — 2026-08-27

## 1. Today's Overview

- **LLM Agent 与多智能体 / LLM Agent Engineering** — 3 new papers: Recuris (recursive experiential-working memory for long-horizon harnesses), Beyond Scaling (self-evolving agents with experience-graph memory for hardware kernel optimization), and LifePlanner (geo-spatial planning benchmark with noisy social-media evidence). Progress centers on long-horizon memory, self-evolution, and grounded evaluation.
- **LLM Agent 与多智能体 / Agent Test-Time Scaling and Self-Improvement** — 3 new papers: Prefix Sliding (memory-efficient test-time scaling), Beyond Confidence (retrieval-grounded voting for multi-turn search agents), and ShuttleArena (interpretable self-play in badminton). TTS work is shifting from single-turn reasoning to multi-turn, retrieval-grounded, and interactive settings.
- **LLM Agent 与多智能体 / LLM Agent Societies** — No new papers today.
- **具身智能 / Vision-Language-Action Models** — 3 new papers: MA-VLA (multi-arm collaboration), StreamPI (streaming temporal modeling to overcome single-frame VLAs), and V-Link (recovering lost 3D visual representations in the action expert). Progress targets architectural bottlenecks in VLA manipulation.
- **具身智能 / Embodied Navigation** — 3 new matched papers: an object-counting survey, SAM adaptation for surgical segmentation, and a 4D LiDAR annotation bootstrapping tool. Several are peripheral to navigation and flagged as weak matches.
- **模型压缩与持续学习 / LLM Pruning and Inference Optimization** — 1 new paper: Clearing the Underbrush (AI-enhanced RF interference suppression). Off-target match; deprioritized.
- **模型压缩与持续学习 / Multimodal LLM Pruning** — 2 new papers: Not All Attention Heads and HAP, both showing that head-aware (rather than uniformly averaged) attention scoring improves visual token pruning in VLMs.
- **模型压缩与持续学习 / Continual Learning** — 3 new papers: GAP-Prompt (gated adaptive prompting), Restoring Without Forgetting (CL for image restoration), and Dimensionless Controls (bio-inspired plasticity under alternating tasks).
- **视觉感知 / Event-Based Vision** — No new papers today.
- **视觉感知 / 3D Point Cloud Perception** — 1 new paper: SIREN-Bench (emergency-vehicle interaction benchmark). Tangential match to point cloud perception.
- **视觉感知 / 3D Point Cloud Perception and Tracking** — No new papers today.

## 2. Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [Recuris: Recursive Experiential-Working Memory Evolution for Long-Horizon Agent Harnesses](http://arxiv.org/abs/2608.24876v1)
- Authors: Zhaochen Yu et al. | 2026-08-25
- Contribution: Introduces a recursive experiential-working memory architecture in which working memory tracks task progress and experience is evolved to handle long-horizon agent tasks.
- Relevance: Directly targets long-horizon agent harnesses and recursive self-improvement, a core lab interest.

#### [Beyond Scaling: Self-Evolving LLM Agents for Hardware Kernel Optimization via an Experience-Driven Workflow and Experience Graph Memory](http://arxiv.org/abs/2608.25570v1)
- Authors: Siyuan Chen et al. | 2026-08-26
- Contribution: Proposes self-evolving LLM agents with an experience graph memory to improve hardware kernel optimization beyond just scaling context and execution horizons.
- Relevance: Demonstrates agent self-evolution through structured experience reuse, complementing purely scaling-based agent engineering.

#### [LifePlanner: Evaluating LLM Agents for Geo-spatial Planning with Social Media Data](http://arxiv.org/abs/2608.25039v1)
- Authors: Zhen Dong et al. | 2026-08-25
- Contribution: Presents LifePlanner, a benchmark requiring grounded tool use, noisy evidence retrieval from social media, and multi-constraint reasoning for geo-spatial planning.
- Relevance: Provides an evaluation testbed for tool-using agents under noisy, open-ended signal — useful for assessing agent engineering progress.

### Agent Test-Time Scaling and Self-Improvement

#### [Prefix Sliding for efficient test-time scaling](http://arxiv.org/abs/2608.26070v1)
- Authors: Niklas Muennighoff et al. | 2026-08-26
- Contribution: Finds that most of a long reasoning trace can be discarded and proposes prefix sliding to reduce the memory cost of long-thinking test-time scaling.
- Relevance: Directly attacks the dominant cost of test-time scaling in reasoning agents.

#### [Beyond Confidence: Test-Time Scaling for Multi-Turn Search Agents via Retrieval Grounding](http://arxiv.org/abs/2608.24024v1)
- Authors: Hyunho Kook et al. | 2026-08-25
- Contribution: Extends confidence-based voting to multi-turn search agents by grounding aggregation in retrieved external documents rather than internal token log-probabilities.
- Relevance: Moves test-time scaling from single-turn reasoning to multi-turn retrieval agents, expanding the lab's TTS scope.

#### [ShuttleArena: Interpretable Self-Play in Physics-Based Badminton](http://arxiv.org/abs/2608.25246v1)
- Authors: Peize Ding | 2026-08-26
- Contribution: Presents an interpretable self-play framework for physics-based badminton where shot selection and court recovery are jointly optimized.
- Relevance: Offers a compact self-play testbed for agent self-improvement with interpretable decisions.

### LLM Agent Societies
No new papers today.

## 具身智能

### Vision-Language-Action Models

#### [MA-VLA: Multi-Arm Vision-Language-Action Model for Collaboration and Compositional Generalization](http://arxiv.org/abs/2608.25864v1)
- Authors: Zaibin Zhang et al. | 2026-08-26
- Contribution: Introduces a multi-arm VLA model with explicit mechanisms for assigning and composing arm-level language instructions rather than a single global instruction.
- Relevance: Extends VLA capability to multi-arm collaboration and compositional generalization, a frontier for embodied manipulation.

#### [StreamPI: Streaming Multimodal Temporal Modeling for Vision-Language-Action Models](http://arxiv.org/abs/2608.26067v1)
- Authors: Zhe Liu et al. | 2026-08-26
- Contribution: Proposes streaming temporal modeling that lets VLA models retain past observations, overcoming the single-frame limitation of strong baselines such as pi0.5.
- Relevance: Addresses temporal memory and spatial precision in VLA control, a known bottleneck in current models.

#### [V-Link: Recovering Lost Visual Representations in Action DiT for Vision-Language-Action Models](http://arxiv.org/abs/2608.25308v1)
- Authors: Yehao Lu et al. | 2026-08-26
- Contribution: Identifies a critical limitation where the VLA action expert has limited access to 3D geometric visual representations, and proposes V-Link to recover them.
- Relevance: Points to a specific architectural bottleneck in VLA action experts and offers a targeted fix.

### Embodied Navigation

#### [Object Counting Across Modalities: Taxonomies, Benchmarks, Applications, and Open Challenges](http://arxiv.org/abs/2608.23845v1)
- Authors: Joana Konadu Owusu et al. | 2026-08-24
- Contribution: Surveys open-vocabulary, foundation-model-backed object counting across modalities, with taxonomies, benchmarks, and open challenges.
- Relevance: Matched to embodied navigation as scene-perception support, though the paper itself is a counting survey — treat as tangential.

#### [Hierarchical Prototype-Memory Adaptation of SAM for Surgical Instrument Segmentation](http://arxiv.org/abs/2608.24541v1)
- Authors: Xinning Yao et al. | 2026-08-25
- Contribution: Adapts Segment Anything Model to surgical instrument segmentation via hierarchical prototype-memory prompt learning.
- Relevance: Improves prompt-based adaptation of a segmentation foundation model, supporting embodied scene understanding; tangential to navigation specifically.

#### [Bootstrapping a 4D LiDAR Annotation Tool from Video Foundation Models](http://arxiv.org/abs/2608.25418v1)
- Authors: Jihun Kim et al. | 2026-08-26
- Contribution: Bootstraps 4D LiDAR segmentation annotation by transferring temporally consistent labels from video foundation models, reducing dense annotation cost.
- Relevance: Addresses the data bottleneck for temporally consistent 3D perception, directly relevant to embodied navigation training data.

### LLM Pruning and Inference Optimization

#### [Clearing the Underbrush: AI-Enhanced RF Interference Suppression](http://arxiv.org/abs/2608.24974v1)
- Authors: Rahul Jain et al. | 2026-08-25
- Contribution: Builds on an AI-enabled autoregressive approach to jointly suppress structured RF interference and recover the signal of interest.
- Relevance: Weak match to this topic — the abstract concerns RF signal processing rather than LLM pruning; included because the configured interests flagged it, but deprioritized.

### Multimodal LLM Pruning

#### [Not All Attention Heads Contribute to Critical Visual Token Selection: Head-Aware Pruning Matters More](http://arxiv.org/abs/2608.25332v1)
- Authors: Chaofang Ma et al. | 2026-08-26
- Contribution: Shows that averaging text-to-visual attention across all heads for token scoring is suboptimal and proposes head-aware visual token pruning for VLMs.
- Relevance: Core to multimodal LLM pruning — reduces VLM visual token memory and compute during inference.

#### [HAP: Head-Adaptive Visual Token Pruning via Cross-Modal Alignment](http://arxiv.org/abs/2608.23921v1)
- Authors: Yuanhao Sun et al. | 2026-08-24
- Contribution: Proposes head-adaptive visual token pruning that scores tokens per head using cross-modal alignment rather than uniform head averaging.
- Relevance: Concurrent with the above paper; offers a cross-modal alignment mechanism for the same VLM prefill-cost problem.

### Continual Learning

#### [GAP-Prompt: Gated Adaptive Prompting for Efficient Continual Learning](http://arxiv.org/abs/2608.23782v1)
- Authors: Trung-Anh Dang et al. | 2026-08-24
- Contribution: Introduces gated, sample-adaptive prompting to replace static task-level prompts and mitigate catastrophic forgetting with frozen backbones.
- Relevance: Directly advances efficient prompt-based continual learning.

#### [Restoring Without Forgetting: Continual Learning Across Image Degradations](http://arxiv.org/abs/2608.23799v1)
- Authors: Alif Ashrafee, Bartosz Krawczyk | 2026-08-24
- Contribution: Targets continual learning for all-in-one image restoration networks so they handle new degradations without forgetting previous ones.
- Relevance: Extends continual learning beyond classification into image restoration, an underexplored application area.

#### [Dimensionless Controls of Plasticity Under Alternating Tasks: From Evolutionary Biology to Continual Learning](http://arxiv.org/abs/2608.23889v1)
- Authors: Owen Skriloff | 2026-08-24
- Contribution: Studies a minimal deep-learning analogue of genotype-phenotype plasticity, training alternately on two Boolean label sets to identify dimensionless plasticity controls.
- Relevance: Provides a bio-inspired theoretical perspective on plasticity relevant to continual learning dynamics.

## 视觉感知

### Event-Based Vision
No new papers today.

### 3D Point Cloud Perception

#### [SIREN-Bench: Behavior-Driven Generation and Evaluation of Emergency-Vehicle Interactions](http://arxiv.org/abs/2608.24094v1)
- Authors: Yicheng Zhu et al. | 2026-08-25
- Contribution: Introduces a benchmark for behavior-driven generation and evaluation of emergency-vehicle interactions with control over EMV privileges and civilian responses.
- Relevance: Matched to 3D point cloud perception by the configured interests, but the abstract is behavior/simulation-focused — treat as tangential to point cloud perception.

### 3D Point Cloud Perception and Tracking
No new papers today.

## 3. Cross-Topic Signals

- **Two levels of inference-cost reduction:** Prefix Sliding trims reasoning-trace memory for test-time scaling, while HAP and Not All Attention Heads trim visual-token memory in VLMs — a convergent push toward cheaper long-context inference from both the agent and multimodal sides.
- **Memory architectures are converging across topics:** Recuris (agent working memory), StreamPI (temporal memory for VLA), experience-graph memory (kernel-optimization agents), and prototype-memory (SAM adaptation) all encode structured memory for longer-horizon behavior.
- **Self-improvement without retraining:** Self-evolving kernel agents (Beyond Scaling) and self-play badminton (ShuttleArena) both improve via structured experience reuse or interaction, echoing the lab's self-improvement interest.
- **Head-aware attention attribution as an emerging principle:** Two concurrent VLM pruning papers independently reject uniform head averaging, suggesting that finer-grained attention-head attribution is becoming a shared design pattern across pruning and interpretability.

## 4. Priority Reading

1. **Prefix Sliding** (http://arxiv.org/abs/2608.26070v1) — Likely to become a standard efficiency technique for long-thinking agents; directly actionable for the lab's test-time scaling agenda.
2. **MA-VLA** (http://arxiv.org/abs/2608.25864v1) — A clear step toward multi-arm compositional VLA manipulation, the most frontier-oriented VLA result today.
3. **Not All Attention Heads** (http://arxiv.org/abs/2608.25332v1) — Read together with HAP (http://arxiv.org/abs/2608.23921v1); two independent papers define the emerging head-aware pruning direction in multimodal LLM compression.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*