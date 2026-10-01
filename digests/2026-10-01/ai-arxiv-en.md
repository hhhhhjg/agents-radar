# Lab Research Topics Radar 2026-10-01

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 47 new + 11 seen in the last 14 days | Generated: 2026-10-01 01:00 UTC

---

## Today's Overview
- **LLM Agent 与多智能体 / LLM Agent Engineering**: 10 new, 0 seen. Progress on explicit trajectory diversity, test-time harness composition, skill trust/security, representation-guided skill self-evolution, unknown-environment program induction, stale context binding, and marketplace-scale skill retrieval.
- **LLM Agent 与多智能体 / Agent Test-Time Scaling and Self-Improvement**: No new papers today.
- **LLM Agent 与多智能体 / LLM Agent Societies**: No new papers today.
- **具身智能 / Vision-Language-Action Models**: 11 new, 0 seen. Progress on VLA driving memory, adversarial robustness, compositional generalization, action-chunk credit assignment, camera-fault safety, dynamic manipulation, and flow-matching delivery policies.
- **具身智能 / Embodied Navigation**: 11 new, 1 seen. Progress on evidence-seeking VLN, test-time adaptive navigation, self-evolving embodied agents, predictive 4D belief, spatial maps, and constant-size scene memory.
- **模型压缩与持续学习 / LLM Pruning and Inference Optimization**: 5 new, 4 seen. Progress on audio-token attention prediction, sparse/streaming world-action inference, and transformer hidden-trajectory geometry; seen items cover visual token compression.
- **模型压缩与持续学习 / Multimodal LLM Pruning**: 2 new, 6 seen. Progress on representation-dynamics and text–visual saliency for visual token pruning; seen items cover attention coverage, semantic pruning, and visual-state reconstruction.
- **模型压缩与持续学习 / Continual Learning**: 10 new, 0 seen. Progress on federated continual learning, continual test-time adaptation, temporal KG extrapolation, forgery/deepfake adaptation, personalized federated tuning, and language-agent skill self-evolution.
- **视觉感知 / Event-Based Vision**: 2 new, 2 seen. Progress on source-free VGGT distillation for event depth and representation-dependent timing-attack blind spots; seen items cover optical flow and wrist manipulation.
- **视觉感知 / 3D Point Cloud Perception**: 1 new, 2 seen. Progress on geometry-augmented long-tailed LiDAR sampling; seen items cover superquadric decomposition and 3D Gaussian open-vocabulary segmentation.
- **视觉感知 / 3D Point Cloud Perception and Tracking**: No new papers today.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [Explicit Trajectory Diversity for RL-Based Post-Training of LLM Agents](http://arxiv.org/abs/2609.38805v1)
Fu et al. (2026-09-30) — Uses explicit trajectory diversity for RL post-training of LLM agents. Relevance: improves agent reasoning, tool-use, and interaction coverage.
#### [Composing Task-specific Agent Harnesses at Test Time with Reusable Primitives](http://arxiv.org/abs/2609.38912v1)
Kuang et al. (2026-09-30) — Composes task-specific agent harnesses at test time from reusable primitives. Relevance: directly targets adaptive agent harness engineering.
#### [Can Agents Trust Their Skills? Uncovering Unsafe Chains of Trust in Skill-Based LLM Agents](http://arxiv.org/abs/2609.39065v1)
Wang et al. (2026-09-30) — Identifies unsafe trust chains created by installable agent skills. Relevance: security for skill-based LLM agents.
#### [Rep2Skill: Representation-Guided Skill Self-Evolution for LLM Agents](http://arxiv.org/abs/2609.39149v1)
Zhang et al. (2026-09-30) — Uses representation guidance for textual skill self-evolution. Relevance: non-parametric agent improvement without weight updates.
#### [Schema: Discovering Unknown Environments via Agentic Program Induction](http://arxiv.org/abs/2609.39140v1)
Zeng et al. (2026-09-30) — Learns unknown environment rules via agentic program induction. Relevance: compact, executable environment models for agents.
#### [When Context Changes: Understanding Update Failures in LLMs](http://arxiv.org/abs/2609.38866v1)
Guo et al. (2026-09-30) — Studies stale binding when agents must use updated context. Relevance: memory and context-update failure modes.
#### [SkillSeek: Revisiting Agent Skill Retrieval at Marketplace Scale](http://arxiv.org/abs/2609.38822v1)
Yang et al. (2026-09-30) — Revisits skill retrieval over very large agent skill marketplaces. Relevance: selection bottleneck for reusable agent skills.

## 具身智能
### Vision-Language-Action Models
#### [Vision-Language-Action Autonomous Driving Agent with Language-based Memory](http://arxiv.org/abs/2609.38641v1)
Yan et al. (2026-09-29) — Adds language-based memory to a VLA autonomous driving agent. Relevance: long-horizon VLA memory for driving.
#### [Exploiting Vulnerabilities: Universal Adversarial Attacks on Vision-Language-Action Models in Robotics](http://arxiv.org/abs/2609.39178v1)
Yang et al. (2026-09-30) — Demonstrates universal adversarial attacks on robotic VLA models. Relevance: VLA robustness and physical-world security.
#### [Correcting WHERE, Preserving HOW: Compositional Generalization for Vision-Language-Action Models via Referential Guidance](http://arxiv.org/abs/2609.38616v1)
Zhang et al. (2026-09-29) — Uses referential guidance for VLA compositional generalization. Relevance: generalization across objects, destinations, and backgrounds.
#### [PRICE the Action Chunks: Physical Relational Credit Assignment for Embodied Reinforcement Learning](http://arxiv.org/abs/2609.38890v1)
Zou et al. (2026-09-30) — Assigns physical relational credit to action chunks in embodied RL. Relevance: better VLA post-training from outcome signals.
#### [Blackout vs. Freeze: Analyzing Physical Failure Modes of VLAs under Camera Faults](http://arxiv.org/abs/2609.39145v1)
Suh et al. (2026-09-30) — Analyzes VLA failure modes under camera blackout and freezing. Relevance: safety under unreliable visual input.
#### [DSDyn-VLA: A Dual-Stream Dynamic Manipulation Framework with Motion Perception, Future Awareness, and Realtime Correction](http://arxiv.org/abs/2609.39198v1)
Li et al. (2026-09-30) — Adds motion perception, future awareness, and realtime correction for dynamic manipulation. Relevance: VLA in moving-object settings.
#### [Cue the Flow: Steering Flow-Matching Policies for Open-World Delivery Manipulation](http://arxiv.org/abs/2609.38989v1)
Wang et al. (2026-09-30) — Steers flow-matching policies for open-world delivery manipulation. Relevance: language-conditioned manipulation of novel objects.

### Embodied Navigation
#### [Seek Before You Move: Evidence Seeking for Progress Grounding in Vision-Language Navigation](http://arxiv.org/abs/2609.37353v1)
Wang et al. (2026-09-29) — Seeks task-relevant evidence before acting in VLN. Relevance: progress grounding under partial egocentric observations.
#### [Credit-Guided Policy Improvement for Test-time Adaptive Vision-Language Navigation](http://arxiv.org/abs/2609.37591v1)
Li et al. (2026-09-29) — Uses credit-guided policy improvement for test-time adaptive VLN. Relevance: online adaptation to unseen navigation environments.
#### [ASENA: Self-evolving Agents for Embodied Navigation](http://arxiv.org/abs/2609.39207v1)
Cheng et al. (2026-09-30) — Connects coding agents to robot sensing, computation, execution, and persistent experience. Relevance: self-evolving embodied navigation agents.
#### [Beyond the Remembered World: Predictive 4D Belief for Persistent Navigation in Evolving Worlds](http://arxiv.org/abs/2609.39166v1)
Gao et al. (2026-09-30) — Maintains predictive 4D belief for persistent navigation when targets move. Relevance: robust spatial memory for evolving worlds.
#### [InsightMap: Structured Spatial Modeling for Embodied Multimodal Reasoning](http://arxiv.org/abs/2609.37187v1)
Zheng et al. (2026-09-29) — Uses top-down maps as spatial memory and action-conditioned prediction targets. Relevance: structured spatial reasoning for navigation.
#### [Honeycomb: Constant-Size Scene Memory Representation for Video World Models](http://arxiv.org/abs/2609.37690v1)
Shi et al. (2026-09-29) — Introduces constant-size scene memory for video world models. Relevance: persistent scene memory without unbounded storage growth.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [Audio Token Attention Is Predictable Before the Language Model Runs](http://arxiv.org/abs/2609.38878v1)
Park et al. (2026-09-30) — Predicts audio-token attention before the language model runs. Relevance: early token pruning for audio LLMs.
#### [Sparse-WAM: Accelerating World Action Models via Action-Guided Sparse Imagination](http://arxiv.org/abs/2609.38984v1)
Xie et al. (2026-09-30) — Uses action-guided sparse imagination to accelerate world-action models. Relevance: reduces dense future-frame denoising cost.
#### [Staircase Policy: Streaming Inference for World-Action Models with Large Action Chunks](http://arxiv.org/abs/2609.36471v1)
Sun et al. (2026-09-29) — Enables streaming inference for world-action models with large action chunks. Relevance: amortizes future-prediction overhead in robot control.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Beyond Selection: Token Parameterization for Extreme Visual Token Compression](http://arxiv.org/abs/2609.35232v2)
🔁 **[SEEN IN THE LAST 14 DAYS]** Zhong et al. (2026-09-28) — Revisits visual-token compression through token parameterization. Relevance: extreme compression when pruning breaks visual grounding.

### Multimodal LLM Pruning
#### [TReVS: Integrating Textual Relevance and Visual Saliency for Efficient Vision-Language Model Token Pruning](http://arxiv.org/abs/2609.37581v1)
Wang et al. (2026-09-29) — Combines textual relevance and visual saliency for VLM token pruning. Relevance: two-stage visual token pruning.
#### [Representation Dynamics Reveal Semantic Saliency and Similarity for Visual Token Pruning in MLLMs](http://arxiv.org/abs/2609.36916v2)
Li et al. (2026-09-29) — Uses representation dynamics to estimate semantic saliency and similarity. Relevance: representation-aware MLLM token pruning.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [ACPruner: Visual Token Pruning as Biased Attention Coverage Maximization in LVLMs](http://arxiv.org/abs/2609.34558v1)
🔁 **[SEEN IN THE LAST 14 DAYS]** Li et al. (2026-09-28) — Frames visual token pruning as biased attention coverage maximization. Relevance: efficient LVLM inference.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [SPIDER: Multi-Layer Semantic Token Pruning and Adaptive Sub-Layer Skipping in Multimodal Large Language Models](http://arxiv.org/abs/2609.34977v1)
🔁 **[SEEN IN THE LAST 14 DAYS]** Chen et al. (2026-09-28) — Combines multi-layer semantic token pruning with adaptive sub-layer skipping. Relevance: couples data and computation redundancy reduction.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Just MLPs: Efficient Visual State Reconstruction for Multimodal Language Models](http://arxiv.org/abs/2609.34972v1)
🔁 **[SEEN IN THE LAST 14 DAYS]** Lei et al. (2026-09-28) — Reconstructs pruned visual states with MLPs. Relevance: recovers visual evidence after aggressive token pruning.

### Continual Learning
#### [ReSCENE: Server-Side Replay for Structural Mitigation of Catastrophic Forgetting in Federated Continual Learning](http://arxiv.org/abs/2609.38833v1)
Kang et al. (2026-09-30) — Uses server-side replay to mitigate forgetting in federated continual learning. Relevance: anti-forgetting without burdening clients.
#### [Not Every Correction Helps: Gain-Guided Continual Test-Time Adaptation](http://arxiv.org/abs/2609.36655v1)
Zhang et al. (2026-09-29) — Guides continual test-time adaptation by correction gain. Relevance: safer adaptation under changing test distributions.
#### [HiTS-CL: A Continual Learning Framework for Long-Horizon Temporal Knowledge Graph Extrapolation](http://arxiv.org/abs/2609.36559v1)
Liu et al. (2026-09-29) — Frames temporal KG extrapolation as continual learning. Relevance: long-horizon non-stationary knowledge graphs.
#### [Forensic-Aware Continual Adaptation for Image Forgery Localization](http://arxiv.org/abs/2609.38251v1)
Kong et al. (2026-09-29) — Continually adapts image forgery localization to new manipulations. Relevance: forensic models under emerging forgery methods.
#### [FedLAFP: Low-Rank Aggregation Meets Full-Rank Personalization in Federated Fine-Tuning](http://arxiv.org/abs/2609.37033v1)
Yi et al. (2026-09-29) — Combines low-rank aggregation with full-rank personalization. Relevance: personalized federated tuning under heterogeneity.
#### [Semantic Projection for Continual Self-Evolution of Language Agents](http://arxiv.org/abs/2609.36626v1)
Liu et al. (2026-09-29) — Uses semantic projection for continual language-agent skill evolution. Relevance: prevents new task skills from overwriting earlier procedures.

## 视觉感知
### Event-Based Vision
#### [SFE-VGGT: Source-Free VGGT Distillation for Event-Based Monocular Depth Estimation](http://arxiv.org/abs/2609.36929v1)
Nguyen et al. (2026-09-29) — Distills VGGT geometric priors without synchronized RGB-event pairs or depth labels. Relevance: practical event-based monocular depth.
#### [Stealth Is a Relation, Not a Property: How Event Representations Create Blind Spots for Timing Attacks in Event-Based Perception](http://arxiv.org/abs/2609.36386v1)
Dipu et al. (2026-09-28) — Shows timing-attack visibility depends on downstream event representations. Relevance: security and robustness of event-based perception.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [E-WAVE: Event-based Continuous Optical Flow via Warping-Aligned Visual Encoding](http://arxiv.org/abs/2609.34346v1)
🔁 **[SEEN IN THE LAST 14 DAYS]** Wu et al. (2026-09-28) — Estimates temporally dense event-based optical flow via warping-aligned encoding. Relevance: continuous motion capture for VR/AR.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [ECHO: Event-Augmented Context with Hindsight and Outlook for Wrist-Only Manipulation](http://arxiv.org/abs/2609.34893v1)
🔁 **[SEEN IN THE LAST 14 DAYS]** Wang et al. (2026-09-28) — Augments wrist-only manipulation policies with event context. Relevance: manipulation under extreme exposure.

### 3D Point Cloud Perception
#### [GA-EIRFS: A Geometry-Augmented Repeat-Factor Sampling Method for Long-Tailed LiDAR 3D Object Detection](http://arxiv.org/abs/2609.38116v1)
Ahmed et al. (2026-09-29) — Adds geometry-aware repeat-factor sampling for long-tailed LiDAR detection. Relevance: addresses observability, not only class frequency.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Superquadric Primitive Decomposition of 3D point clouds via Geometric-Aware Inlier Refinement](http://arxiv.org/abs/2609.35725v1)
🔁 **[SEEN IN THE LAST 14 DAYS]** Rinaldi et al. (2026-09-28) — Decomposes point clouds into superquadric primitives via geometric-aware refinement. Relevance: interpretable 3D shape abstraction.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [EviSplat: Preserving Multi-View Evidence in 3D Gaussian Splatting for Open-Vocabulary Segmentation](http://arxiv.org/abs/2609.34853v1)
🔁 **[SEEN IN THE LAST 14 DAYS]** Moon et al. (2026-09-28) — Preserves multi-view evidence in 3D Gaussian splatting for open-vocabulary segmentation. Relevance: text-queryable 3D scene understanding.

## Cross-Topic Signals
- **Memory and reusable skills** connect LLM Agent Engineering, Embodied Navigation, and Continual Learning: Rep2Skill, Semantic Projection, ASENA, 4D belief, and Honeycomb all reduce reliance on parameter updates.
- **Test-time adaptation** appears in VLN, continual adaptation, and harness composition; it is adjacent to the currently empty Agent Test-Time Scaling and Self-Improvement topic.
- **Efficiency methods** converge across Multimodal LLM Pruning and LLM Inference Optimization: visual token pruning and sparse/streaming world-action inference both cut repeated token computation.
- **Safety and trust** recur in agent skills, coding harnesses, multi-agent oversight, VLA attacks/camera faults, and event-based timing attacks.
- **Scene representation** links Embodied Navigation and 3D Point Cloud Perception through scene graphs, implicit grids, spatial maps, Gaussian splatting, and constant-size memory.

## Priority Reading
#### **Composing Task-specific Agent Harnesses at Test Time with Reusable Primitives** — directly central to agent harness engineering and test-time composition.
#### **Beyond the Remembered World: Predictive 4D Belief for Persistent Navigation in Evolving Worlds** — key for embodied navigation and VLA memory when targets move while unobserved.
#### **Representation Dynamics Reveal Semantic Saliency and Similarity for Visual Token Pruning in MLLMs** — strong fit for multimodal LLM pruning with representation-level token importance.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*