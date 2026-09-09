# Lab Research Topics Radar 2026-09-10

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 20 new + 0 seen in the last 14 days | Generated: 2026-09-09 23:45 UTC

---

# Research Topics Radar — 2026-09-10

**1. Today's Overview**
- **LLM Agent Engineering** (LLM Agent 与多智能体): Agent memory and security dominate: graph-based personal memory (representation/evolution/retrieval), biometric-aware KV-cache memory for multi-user agents, and a benchmark for supply-chain exploitability assessment.
- **Agent Test-Time Scaling and Self-Improvement** (LLM Agent 与多智能体): Two RL-focused papers explore broader performance: difficulty-adaptive tree training for RLVR and approximate value iteration as a cheaper self-play alternative to MCTS.
- **LLM Agent Societies** (LLM Agent 与多智能体): No new papers today.
- **Vision-Language-Action Models** (具身智能): Dexterous VLA gains tactile grounding, in-context few-shot imitation without gradient updates, and non-English language transfer for an open VLA policy.
- **Embodied Navigation** (具身智能): Long-horizon/lifelong navigation advances — dynamic-scene target navigation, an evolving-environment benchmark, and spherical 3D scene understanding for embodied settings.
- **LLM Pruning and Inference Optimization** (模型压缩与持续学习): Advances in pruning/inference acceleration: overcomplete recovery training for structured pruning, history-aware dynamic layer routing, and coverage-based visual token pruning.
- **Multimodal LLM Pruning** (模型压缩与持续学习): No new papers today.
- **Continual Learning** (模型压缩与持续学习): Long-horizon memorization under sequential SFT and dynamic-modality multimodal continual learning both progressed; a third matched PEFT/protein-LM paper is off-topic and omitted here.
- **Event-Based Vision** (视觉感知): A new multimodal benchmark brings privacy-aware emotion recognition to event cameras.
- **3D Point Cloud Perception** (视觉感知): Unsupervised semantic segmentation gets a multi-scale spatially-constrained partitioning method.
- **3D Point Cloud Perception and Tracking** (视觉感知): Template-free single-object tracking emerges as an efficiency alternative to Siamese 3D trackers.

**2. Research Areas**

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [Graph-Based Personalized Memory for LLM Agents: Representation, Evolution, Retrieval, and Evaluation](http://arxiv.org/abs/2609.08599v1)
Authors: D. D. A. Nguyen et al. · Published: 2026-09-08
Contribution: Proposes a graph-based memory framework spanning representation, evolution, retrieval, and evaluation for long-term personalized LLM agents.
Relevance: Supplies the core architectural ingredients for agent memory, the strongest signal among today's agent papers.

#### [BIO-MEMART: Biometric-Aware KV Cache Memory for Multi-User LLM Agents](http://arxiv.org/abs/2609.08566v1)
Authors: Y. Qian et al. · Published: 2026-09-08
Contribution: Introduces biometric-aware access control for reusable KV-cache blocks in shared multi-user LLM agent deployments.
Relevance: Treats the KV cache as an external agent-memory substrate and addresses a practical access-control gap.

#### [VEX-Bench: Benchmarking LLM Agents for Assessing Exploitability of Software Supply Chain Vulnerabilities](http://arxiv.org/abs/2609.08040v1)
Authors: J. Shi et al. · Published: 2026-09-07
Contribution: Benchmarks whether LLM agents can determine whether vulnerable dependencies are actually exploitable, going beyond Dependabot-style coarse alerts.
Relevance: Provides an agent benchmark centered on security reasoning and decision-making rather than generic QA.

### Agent Test-Time Scaling and Self-Improvement

#### [Difficulty-Adaptive Tree-Structured Policy Optimization for Expanding Reasoning Coverage in RLVR](http://arxiv.org/abs/2609.08650v1)
Authors: Y. Yu et al. · Published: 2026-09-08
Contribution: Applies difficulty-adaptive, tree-structured policy optimization to RLVR so training expands pass@k reasoning coverage instead of only single-sample accuracy.
Relevance: Directly addresses self-improvement of LLM reasoners by broadening exploration during verifiable-reward RL.

#### [The Surprising Effectiveness of Approximate Value Iteration in Self-Play](http://arxiv.org/abs/2609.09094v1)
Authors: R. Boige et al. · Published: 2026-09-08
Contribution: Shows approximate value iteration can rival MCTS-based self-play while avoiding much of MCTS's search overhead.
Relevance: Offers a cheaper self-play improvement mechanism for agent test-time planning and search loops.

### LLM Agent Societies
No new papers today.

## 具身智能

### Vision-Language-Action Models

#### [DeCAL: Towards Physically-Grounded Dexterous Vision-Language-Action Models via Contact-Aware Latent Co-Imagination](http://arxiv.org/abs/2609.09119v1)
Authors: Y. Fu et al. · Published: 2026-09-08
Contribution: Integrates tactile sensing with contact-aware latent co-imagination to physically ground VLA policies in contact-rich dexterous manipulation.
Relevance: Tackles occlusion and contact dynamics that current VLA models handle poorly on real manipulation hardware.

#### [ICI-VLA: In-Context Imitation with Spatiotemporally Aligned Demonstrations for Vision-Language-Action Models](http://arxiv.org/abs/2609.07581v1)
Authors: S. Yang et al. · Published: 2026-09-07
Contribution: Builds a retrieval-based in-context imitation framework that adapts a text-action VLA policy with few demonstrations and no task-specific gradient updates.
Relevance: Reduces deployment cost of VLA policies for new manipulation settings, a practical bottleneck for embodied agents.

#### [Measuring Language Transfer in Robot Policies: Adding Greek to a Cosmos3 Vision-Language-Action Policy](http://arxiv.org/abs/2609.07470v1)
Authors: A. Kirouane et al. · Published: 2026-09-07
Contribution: Adds Greek instructions to an open VLA stack using only machine-rephrased instructions, with no architecture changes, and measures cross-lingual transfer.
Relevance: Highlights the non-English instruction-following gap in embodied VLA foundation models.

### Embodied Navigation

#### [OmniNav: Robust Long-Horizon Target Navigation in Dynamic Environments](http://arxiv.org/abs/2609.08159v1)
Authors: Y. Tang et al. · Published: 2026-09-08
Contribution: Jointly addresses the three capabilities needed for long-horizon target navigation: scene memory, target-belief revision, and interaction-feasible action selection.
Relevance: Directly relevant to robust embodied navigation under partial observability and changing scenes.

#### [EvoNav-Bench: Benchmarking Lifelong Navigation in Evolving Environments](http://arxiv.org/abs/2609.08292v1)
Authors: X. Wang et al. · Published: 2026-09-08
Contribution: Introduces a lifelong navigation benchmark where agents must consolidate and reuse earlier experience instead of solving each subtask from scratch.
Relevance: Provides a much-needed evaluation protocol for long-horizon embodied agents with persistent memory.

#### [Spheriverse: 3D Scene Understanding from Spherical Observations in the Wild](http://arxiv.org/abs/2609.09012v1)
Authors: F. Teng et al. · Published: 2026-09-08
Contribution: Tackles the angular-to-Cartesian representation gap for 3D scene understanding from spherical observations.
Relevance: Global spherical context can serve as a perceptual front-end for embodied navigation in open environments.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [Train Overcomplete, Deploy Compact: Scaling Recovery Capacity for Structured LLM Pruning](http://arxiv.org/abs/2609.06974v1)
Authors: S. Oh et al. · Published: 2026-09-07
Contribution: Trains overcomplete recovery capacity to fix the mismatch between the recovery stage and the final pruned architecture.
Relevance: Addresses a core post-pruning weakness in structured LLM compression.

#### [Do Dynamic Routers Need Memory? HeRo: History-Aware Routing for Efficient LLM Inference](http://arxiv.org/abs/2609.08189v1)
Authors: H. Lin et al. · Published: 2026-09-08
Contribution: Adds sequence/history context to dynamic layer routing so token-level skip decisions are no longer purely local.
Relevance: Reduces LLM inference cost while fixing a known blind spot in token-wise dynamic routers.

#### [CoVeR: Coverage-Based Token Pruning for Multi-View 3D Reasoning in VLMs](http://arxiv.org/abs/2609.08345v1)
Authors: N.-T. Bui et al. · Published: 2026-09-08
Contribution: Prunes redundant visual tokens from multi-view 3D inputs based on scene coverage rather than importance alone.
Relevance: A token-pruning technique for multimodal/3D LLM inference, with clear crossover to embodied VLA efficiency.

### Multimodal LLM Pruning
No new papers today.

### Continual Learning

#### [Continual Learning Mechanisms Compose for Long-Horizon Memorization](http://arxiv.org/abs/2609.06986v1)
Authors: Z. Zhang et al. · Published: 2026-09-07
Contribution: Introduces the long-horizon memorization setting — 100 sequential Q&A tasks learned via continual SFT — and studies how continual-learning mechanisms compose.
Relevance: Directly probes whether language models can retain information through many subsequent updates.

#### [NeuCME: Toward Dynamic Multimodal Continual Learning via Neural Combinatorics of Multiple Experts](http://arxiv.org/abs/2609.07009v1)
Authors: K. Guo et al. · Published: 2026-09-07
Contribution: Uses combinatorics over multiple experts to handle continual learning when the modality set per task changes over time.
Relevance: Extends continual learning to the dynamic, mixed-modality settings common in real agent deployments.

## 视觉感知

### Event-Based Vision

#### [Emo-DVS: A Multimodal Benchmark for Privacy-Aware Emotion Recognition with Event Cameras](http://arxiv.org/abs/2609.06928v1)
Authors: J. Chen et al. · Published: 2026-09-07
Contribution: Introduces a multimodal event-camera benchmark for emotion recognition that sidesteps the privacy risks of RGB cameras.
Relevance: Expands event-based vision into privacy-sensitive affective sensing, a new application direction for the field.

### 3D Point Cloud Perception

#### [MSSP: Multi-Scale Spatially-Constrained Partition for Unsupervised Semantic Segmentation of 3D Point Clouds](http://arxiv.org/abs/2609.06959v1)
Authors: Z. Zhang et al. · Published: 2026-09-07
Contribution: Proposes multi-scale spatially-constrained partitioning for label-free semantic segmentation of 3D point clouds.
Relevance: Reduces the annotation bottleneck in point cloud semantic segmentation, a core 3D perception capability.

### 3D Point Cloud Perception and Tracking

#### [TFTrack: A Template-Free Framework for Efficient 3D Point Cloud Tracking](http://arxiv.org/abs/2609.07738v1)
Authors: Z. Hu et al. · Published: 2026-09-07
Contribution: Removes Siamese dual-input and motion-prior designs for template-free 3D single-object tracking in LiDAR point clouds.
Relevance: Directly targets efficient 3D point cloud tracking for robotic perception and navigation.

**3. Cross-Topic Signals**
- Memory is emerging as the shared bottleneck across agent engineering, navigation, and continual learning: graph memory and KV-cache memory for LLM agents, scene memory for navigation, and experience consolidation in lifelong navigation and long-horizon memorization.
- Selective computation is converging across LLM and embodied stacks: HeRo skips layers, CoVeR prunes visual tokens, and both suggest coverage/history-aware criteria that could also make VLA policies cheaper at deployment time.
- Exploration-driven improvement connects self-play and RLVR: difficulty-adaptive tree training and approximate value iteration both emphasize broader search/coverage rather than optimizing a single answer.
- Gradient-free and modular adaptation recurs across VLA and continual learning: ICI-VLA's in-context imitation and NeuCME's expert combinatorics both avoid monolithic retraining for new tasks.

**4. Priority Reading**
#### - [ICI-VLA: In-Context Imitation with Spatiotemporally Aligned Demonstrations for Vision-Language-Action Models](http://arxiv.org/abs/2609.07581v1) — The most practical route to fast VLA deployment; its demonstration-retrieval and alignment ideas can inform in-context adaptation beyond robotics.
#### - [Graph-Based Personalized Memory for LLM Agents: Representation, Evolution, Retrieval, and Evaluation](http://arxiv.org/abs/2609.08599v1) — Anchors the day's strongest agent-memory cluster and is immediately reusable for long-term agent personalization design.
#### - [Difficulty-Adaptive Tree-Structured Policy Optimization for Expanding Reasoning Coverage in RLVR](http://arxiv.org/abs/2609.08650v1) — Gives a concrete algorithmic recipe for improving reasoning coverage in RLVR, not just single-sample accuracy, for LLM reasoning agents.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*