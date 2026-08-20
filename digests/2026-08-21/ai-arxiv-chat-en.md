# Lab Research Topics Radar 2026-08-21

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 15 new + 0 seen in the last 14 days | Generated: 2026-08-20 22:20 UTC

---

# Research Topics Radar

## Today's Overview

- **LLM Agent 与多智能体 / LLM Agent Engineering**: 3 new papers — LEDGER audits agent workflows with claim-to-evidence trace graphs, CTIFoundry builds agent-native cyber-threat-intelligence corpora, and FM-Bench tests long-horizon management under competing agents.
- **LLM Agent 与多智能体 / Agent Test-Time Scaling and Self-Improvement**: 2 new papers — one diagnoses exploitation vs. exploration in test-time scaling, the other introduces self-play in adaptive executable environments.
- **LLM Agent 与多智能体 / LLM Agent Societies**: No new papers today.
- **具身智能 / Vision-Language-Action Models**: 2 VLA-specific papers — sub-token routing for efficient VLA policies and egocentric video for embodied AI; the overlapping CL4D 4D-representation paper is filed under 3D Point Cloud Perception.
- **具身智能 / Embodied Navigation**: 3 new papers — lifelong spatio-temporal memory, unified driving scene representation, and anticipatory guidance for visually impaired users.
- **模型压缩与持续学习 / LLM Pruning and Inference Optimization**: No new papers today after de-duplication; the matched VLA token-routing efficiency paper is listed under Vision-Language-Action Models.
- **模型压缩与持续学习 / Multimodal LLM Pruning**: No new papers today.
- **模型压缩与持续学习 / Continual Learning**: 3 new papers — harness-level continual adaptation, co-observation as a third continual-learning facet, and reversible forgetting for enterprise agents.
- **视觉感知 / Event-Based Vision**: No new papers today.
- **视觉感知 / 3D Point Cloud Perception**: 2 new papers — RL-based no-reference point cloud quality assessment and contrastive language-4D pretraining.
- **视觉感知 / 3D Point Cloud Perception and Tracking**: No new papers today.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [LEDGER: Claim-to-Evidence Trace Graphs for Auditing LLM Agents](http://arxiv.org/abs/2608.18398v1)
Daehong Kim et al. | 2026-08-19 | Proposes claim-to-evidence trace graphs to make long-horizon LLM-agent workflows auditable. | Directly addresses the verification bottleneck that emerges when agents produce complex outputs faster than humans can review.

#### [CTIFoundry: An Agent-Native Corpus Scaffold for Cyber Threat Intelligence](http://arxiv.org/abs/2608.18613v1)
Yutong Cheng et al. | 2026-08-19 | Introduces an agent-native corpus scaffold for cyber threat intelligence to support multi-step investigative queries. | Shows that corpus design is now a first-class problem in LLM agent engineering, alongside planning and tool protocols.

#### [FM-Bench: A Benchmark for Long-Horizon Management with Competing Agents](http://arxiv.org/abs/2608.18423v1)
Tianyou Wang et al. | 2026-08-19 | Benchmarks LLM agents on long-horizon management tasks with cumulative consequences and competing agents. | Provides a much-needed evaluation setting for agent decision-making beyond bounded, single-shot tasks.

### Agent Test-Time Scaling and Self-Improvement

#### [Test-Time Scaling in the Wild: Why Exploitation, Not Exploration, Is the Bottleneck](http://arxiv.org/abs/2608.18931v1)
Davide Romano et al. | 2026-08-19 | Finds that real-world test-time scaling is bottlenecked by exploitation of existing candidates rather than exploration of new ones. | Directly challenges common TTS assumptions and helps guide where additional inference compute should be spent.

#### [SPADE: Self-Play in Adaptive Synthetic Executable Environments](http://arxiv.org/abs/2608.19197v1)
Bo Liu et al. | 2026-08-19 | Introduces self-play over adaptive synthetic executable environments to generate diverse goals for continuous agent improvement. | Provides a concrete mechanism for expanding the goal distribution in language-agent self-improvement.

### LLM Agent Societies

No new papers today.

## 具身智能

### Vision-Language-Action Models

#### [Role-Conditioned Sub-Token Routing for Efficient Vision-Language-Action Policies](http://arxiv.org/abs/2608.18410v1)
Wei Jiang et al. | 2026-08-19 | Proposes role-conditioned sub-token routing to reduce VLA inference cost without brittle visual-token pruning. | Targets the core inference-efficiency bottleneck in VLA deployment while preserving token-level information.

#### [Vision-Language Models for Egocentric Video: From Hand-Object Interaction to Embodied AI](http://arxiv.org/abs/2608.18671v1)
Mohammad Zamani et al. | 2026-08-19 | Surveys egocentric video understanding and its role in hand-object interaction and embodied AI. | Relevant to VLA because egocentric perception is a key sensory modality for learning goal-directed agent behavior.

### Embodied Navigation

#### [USR-Drive: Unified Driving Scene Representation via Joint Denoising of 3D Gaussians and Boxes](http://arxiv.org/abs/2608.19036v1)
Li-Heng Chen et al. | 2026-08-19 | Learns a unified driving scene representation by jointly denoising 3D Gaussians and object-centric boxes. | Relevant to embodied navigation and autonomous driving because it bridges structured object perception and renderable scene geometry.

#### [LT-Mem: Volatility-Aware Spatio-Temporal Memory for Lifelong Scene Understanding](http://arxiv.org/abs/2608.19059v1)
Yumin Lee et al. | 2026-08-19 | Proposes volatility-aware spatio-temporal memory for persistent object-level understanding across repeated robot visits. | Directly improves navigation in evolving environments by maintaining consistent cross-session semantic maps.

#### [ForeSightGuide: An Anticipatory Framework toward Accurate and Low-Redundancy Guidance for the Visually Impaired](http://arxiv.org/abs/2608.18993v1)
Zhiyuan Wang et al. | 2026-08-19 | Introduces anticipatory VLM-based guidance to reduce false positives and cognitive overload for visually impaired navigation. | Relevant to embodied navigation assistance because it emphasizes low-redundancy, scene-aware guidance.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

No new papers today; the matched VLA sub-token-routing paper is listed under Vision-Language-Action Models.

### Multimodal LLM Pruning

No new papers today.

### Continual Learning

#### [Harness Continual Learning: Continual Adaptation Beyond Model Parameters](http://arxiv.org/abs/2608.19013v1)
Borui Kang et al. | 2026-08-19 | Treats prompts, memories, tools, skills, and routing rules as a “harness” state for continual adaptation. | Expands continual learning from parameter-centric methods to the broader agent-state perspective, directly relevant to long-lived LLM agents.

#### [Forgetting, plasticity, and co-observation: a third facet of continual learning](http://arxiv.org/abs/2608.18803v1)
Timm Hess et al. | 2026-08-19 | Identifies co-observation as a third explanatory facet of continual-learning performance beyond forgetting and plasticity. | Refines understanding of why sequential training still lags, with implications for better continual-learning algorithms.

#### [Towards Reversible Forgetting: Managing Obsolete Knowledge in Continual Enterprise AI Agents](http://arxiv.org/abs/2608.18177v1)
Nilutpaul Sarker Yash et al. | 2026-08-18 | Argues that enterprise agents need reversible forgetting to manage obsolete knowledge in non-stationary environments. | Directly applies continual learning to real-world agent settings where knowledge expiration is as important as retention.

## 视觉感知

### Event-Based Vision

No new papers today.

### 3D Point Cloud Perception

#### [PCQA-R1: Advancing Generalized 3D Point Cloud Quality Assessment with Reinforcement Learning](http://arxiv.org/abs/2608.18627v1)
Kangning Ye et al. | 2026-08-19 | Uses reinforcement learning to train a no-reference 3D point cloud quality assessment model with large multimodal models. | Directly targets 3D point cloud perception and quality evaluation, an important practical task for captured 3D data.

#### [CL4D: Contrastive Language-4D Pretraining for Vision-Language Reasoning in Dynamic Scenes](http://arxiv.org/abs/2608.18734v1)
Kumal Hewagamage et al. | 2026-08-19 | Introduces contrastive language-4D pretraining for vision-language reasoning over temporal 3D scenes. | Relevant to 3D point cloud perception by adding temporal modeling to geometric scene understanding for embodied agents.

### 3D Point Cloud Perception and Tracking

No new papers today.

## Cross-Topic Signals

- Continual learning is expanding beyond model parameters to agent-level state — prompts, tools, memories, and routing rules — bridging continual learning and LLM agent engineering.
- Test-time scaling and VLA token-efficiency methods both attack inference-time compute, but from opposite directions: adding search/computation vs. reducing token computation.
- Agent auditing and evaluation are becoming infrastructure problems: LEDGER provides trace graphs, CTIFoundry provides grounded corpora, and FM-Bench provides long-horizon benchmarks.
- Memory and forgetting recur across continual learning and embodied navigation: from reversible forgetting in enterprise agents to spatio-temporal memory for lifelong robot scene understanding.
- Self-play environment generation and 4D contrastive pretraining both aim to provide agents with richer, more diverse situated experience.

## Priority Reading

- **Test-Time Scaling in the Wild** — important empirical evidence on where test-time compute actually helps, with direct implications for agent scaling strategy.
#### - **Role-Conditioned Sub-Token Routing for Efficient Vision-Language-Action Policies** — practical efficiency method for VLA deployment, relevant across embodied AI and inference optimization.
#### - **SPADE: Self-Play in Adaptive Synthetic Executable Environments** — a promising route to continuous self-improvement through adaptive goal generation for language agents.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*