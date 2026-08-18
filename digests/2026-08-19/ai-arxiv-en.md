# Lab Research Topics Radar 2026-08-19

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 28 new + 0 seen in the last 14 days | Generated: 2026-08-18 22:16 UTC

---

## Today's Overview

- LLM Agent 与多智能体 / LLM Agent Engineering: 10 new papers — memory, credit assignment, harness RL, prompt optimization, benchmarks, and agent-skill security all advanced.
- LLM Agent 与多智能体 / Agent Test-Time Scaling and Self-Improvement: No new papers today.
- LLM Agent 与多智能体 / LLM Agent Societies: No new papers today.
- 具身智能 / Vision-Language-Action Models: 10 new papers — from medical ultrasound and humanoid whole-body control to VLA scaling, self-evaluation, and security.
- 具身智能 / Embodied Navigation: 2 new papers — a 3D driving world model and surgical scene graph generation.
- 模型压缩与持续学习 / LLM Pruning and Inference Optimization: No new papers today.
- 模型压缩与持续学习 / Multimodal LLM Pruning: No new papers today.
- 模型压缩与持续学习 / Continual Learning: 6 new papers — layer-adaptive regularization, representation geometry, and structure-growing models.
- 视觉感知 / Event-Based Vision: 1 new paper — token-based event-camera feature extraction for RL.
- 视觉感知 / 3D Point Cloud Perception: 1 new paper — language-grounded 3D Gaussian driving world model.
- 视觉感知 / 3D Point Cloud Perception and Tracking: No new papers today.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [QUMem: Personalized Memory for Query-Conditioned User-State Inference in LLM Agents](http://arxiv.org/abs/2608.16168v1)
Authors: Heng Wang et al. | 2026-08-17 | Proposes query-conditioned memory for inferring user states from long, evolving interaction histories. Relevance: Directly targets memory personalization and user-state inference in LLM agent systems.

#### [HyperSkill: Self-Evolving LLM Agents via Hypergraph-Structured Skill Memory](http://arxiv.org/abs/2608.16114v1)
Authors: Ruiyao Xu et al. | 2026-08-17 | Introduces hypergraph-structured skill memory that self-evolves as agent tasks accumulate. Relevance: Relevant to procedural-knowledge reuse and self-improvement in long-horizon LLM agents.

#### [TRCA: Transition-wise Rubric Credit Assignment for Long-horizon LLM Agents](http://arxiv.org/abs/2608.16156v1)
Authors: Huan Zhang et al. | 2026-08-17 | Presents transition-wise rubric credit assignment for fine-grained reward allocation across multi-step agent interactions. Relevance: Tackles credit assignment, a core bottleneck in optimizing long-horizon LLM agents.

#### [ClawGym II: Exploring Black-Box RL on Agent Harness](http://arxiv.org/abs/2608.16798v1)
Authors: Huatong Song et al. | 2026-08-17 | Explores black-box reinforcement learning through complex agent harnesses for long-horizon tasks. Relevance: Provides a practical path for training harness-mediated LLM agents with RL.

#### [CAPO: Constraint-Aware Prompt Optimization for LLM Agents](http://arxiv.org/abs/2608.16068v1)
Authors: Victor Ye Dong et al. | 2026-08-17 | Optimizes agent prompts under operational constraints such as tool use, safety, and formatting. Relevance: Directly improves prompt-level control for deployed LLM agent pipelines.

#### [From Sequence to Structure: Relational Uncertainty Propagation for LLM Agents](http://arxiv.org/abs/2608.16002v1)
Authors: Zhengzhao Ma et al. | 2026-08-17 | Propagates relational uncertainty over action sequences for more reliable LLM-agent decision making. Relevance: Important for uncertainty-aware planning and trustworthy agent deployment.

#### [AeroCopilotBench: A Two-Tier Benchmark for Evaluating LLM Agents as Aviation Copilots](http://arxiv.org/abs/2608.16349v1)
Authors: Yuchen Yuan et al. | 2026-08-17 | Introduces an interactive virtual cockpit benchmark for testing procedural execution and safety compliance. Relevance: Adds a high-stakes domain benchmark for LLM agent evaluation beyond static knowledge.

#### [HaReCAP: Habitual-action Grounding for Recursive Large Language Model Agents](http://arxiv.org/abs/2608.16447v1)
Authors: Shen Liu et al. | 2026-08-17 | Grounds habitual leaf-level actions in recursive LLM-agent planning for long-horizon embodied tasks. Relevance: Bridges hierarchical planning with executable action grounding in embodied environments.

#### [CompoSkill: Compositional Skill Chain Attacks from Individually Scanner-Passing LLM Agent Skills](http://arxiv.org/abs/2608.16246v1)
Authors: Mingxiao Liu et al. | 2026-08-17 | Shows that individually safe agent skills can compose into unsafe chains. Relevance: Reveals a critical security gap in skill-marketplace safety certification.

#### [When State Becomes an Attack Surface: State-Semantic Injection in LLM-Driven Embodied Agents](http://arxiv.org/abs/2608.16806v1)
Authors: Jiawei Liu et al. | 2026-08-17 | Introduces state-semantic injection attacks against LLM-driven embodied agents. Relevance: Exposes a new attack surface in LLM-agent state perception and control.

## 具身智能

### Vision-Language-Action Models

#### [GigaBrain-0.7: Scaling Embodied Foundation Models to Emergent Capabilities with a Three-System Architecture](http://arxiv.org/abs/2608.15875v1)
Authors: GigaBrain Team et al. | 2026-08-16 | Scales embodied foundation models with a three-system architecture to unlock emergent capabilities. Relevance: High-impact architectural evidence for how system design affects VLA scaling.

#### [NebulaVLA: A Dual-Frequency Vision-Language-Action Model With Guide Action for Robotic Manipulation](http://arxiv.org/abs/2608.16503v1)
Authors: Cong Zhao et al. | 2026-08-17 | Proposes an asynchronous dual-frequency VLA that decouples high-level reasoning from low-level control. Relevance: Directly addresses efficiency-performance trade-offs in real-world VLA deployment.

#### [SparkVLA: Stop-Aware Hierarchical VLA with Adaptive Action Chunking for Long-Horizon Manipulation](http://arxiv.org/abs/2608.16172v1)
Authors: Xunyao Lei et al. | 2026-08-17 | Introduces stop-aware hierarchical VLA with adaptive action-chunk termination decisions. Relevance: Improves re-observation and chunking control in long-horizon VLA manipulation.

#### [HAF: Adapting Generalist VLAs to Humanoid Whole-Body Loco-manipulation via Hierarchical Action Flow and Spectral Latent RL](http://arxiv.org/abs/2608.16837v1)
Authors: Langzhe Gu et al. | 2026-08-17 | Adapts generalist VLAs to high-dimensional humanoid whole-body loco-manipulation. Relevance: Extends VLA applicability beyond tabletop manipulation to humanoid control.

#### [US-VLA: An Ultrasound Vision-Language-Action Model for Embodied Abdominal Scanning](http://arxiv.org/abs/2608.16074v1)
Authors: Cheng Zhang et al. | 2026-08-17 | Presents a VLA model for real-time ultrasound image-acquisition guidance. Relevance: Demonstrates a medical-domain VLA for embodied diagnostic procedures.

#### [Neurosymbolic Embodied Agents](http://arxiv.org/abs/2608.16794v1)
Authors: Mohammad Albinhassan et al. | 2026-08-17 | Combines neural perception and language with symbolic constraints to produce executable embodied plans. Relevance: Strengthens VLA executability and grounding in long-horizon household tasks.

#### [FabriMAE I Trust Myself? Self-Evaluating VLA Action Generation with Markov Attention Entropy](http://arxiv.org/abs/2608.16697v1)
Authors: Aniri et al. | 2026-08-17 | Uses Markov attention entropy for self-evaluation of VLA action-generation reliability. Relevance: Adds useful self-assessment to VLA policies without external supervision.

#### [Exposing the Long-tail in Embodied Urban Navigation via Scalable Learning from In-the-Wild Videos](http://arxiv.org/abs/2608.16476v1)
Authors: Bingyi Xia et al. | 2026-08-17 | Learns point-goal urban navigation policies from in-the-wild videos to cover long-tail safety scenarios. Relevance: Provides a scalable real-world data route for embodied navigation policies.

#### [Security of Foundation-Model-Powered Embodied Agents: Attack Surfaces, Attacks, Defenses, and Evaluation](http://arxiv.org/abs/2608.16843v1)
Authors: Jiawei Liu et al. | 2026-08-17 | Surveys attack surfaces and defenses for foundation-model-powered embodied agents. Relevance: Maps security risks that propagate from digital inputs to physical VLA behavior.

### Embodied Navigation

#### [Sterilizable Scene Graph Generation for Operating Rooms](http://arxiv.org/abs/2608.16469v1)
Authors: Nick Lemke et al. | 2026-08-17 | Generates scene graphs from surgical video with efficient, deployable models. Relevance: Structured surgical-scene understanding supports embodied robot perception and navigation in ORs.

## 模型压缩与持续学习

### Continual Learning

#### [Layers Matter: Why Continual Learning Regularization Should Be Layer-Adaptive](http://arxiv.org/abs/2608.15901v1)
Authors: Brian B. Moser et al. | 2026-08-16 | Argues that CL regularizers should use layer-adaptive curvature instead of per-parameter diagonal Fisher information. Relevance: Challenges a core assumption behind EWC-style parameter-preservation methods.

#### [Task-Anchored Representation Shaping for Pre-Trained Model-Based Continual Learning](http://arxiv.org/abs/2608.16345v1)
Authors: Zhiming Xu et al. | 2026-08-17 | Shapes PTM representations to improve inference reliability across all learned tasks. Relevance: Relevant to lightweight CL adaptation without sacrificing task boundaries.

#### [Geometry of Forgetting: Representation Flux in Continual Learning](http://arxiv.org/abs/2608.15854v1)
Authors: Maksim A. Kazanskii | 2026-08-16 | Analyzes representation-space dynamics, termed representation flux, behind catastrophic forgetting. Relevance: Adds a geometric view of forgetting beyond parameter regularization and replay.

#### [SoftModel: A Neural Model That Grows Its Own Topology -- Governed Structural Growth for Continual In-Service Learning](http://arxiv.org/abs/2608.16409v1)
Authors: Zhoumin Xie | 2026-08-17 | Introduces a model that continually grows its own topology during deployment. Relevance: Proposes total structural plasticity as a lifelong-learning design principle.

#### [Self-Routed Tensor Adapters for Parameter-Efficient Universal Visual Adaptation](http://arxiv.org/abs/2608.16384v1)
Authors: Suraj Yadav | 2026-08-17 | Proposes self-routed tensor adapters for parameter-efficient adaptation across visual domains. Relevance: Relevant to continual adaptation of frozen foundation models without domain-specific fragmentation.

#### [Domain-Agnostic Neural Topic Modeling with Contextual Token-Level Semantic Graph Representation](http://arxiv.org/abs/2608.16269v1)
Authors: Seung-Won Seo et al. | 2026-08-17 | Introduces token-level semantic graphs to keep PLM topic models interpretable on specialized corpora. Relevance: Addresses domain shift in PLM representations, with implications for continual language-model adaptation.

## 视觉感知

### Event-Based Vision

#### [FLEET: Token-Based Feature Extraction for Event Camera-based Reinforcement Learning](http://arxiv.org/abs/2608.16523v1)
Authors: Tristan Gottwald et al. | 2026-08-17 | Proposes token-based feature extraction for event-camera reinforcement learning. Relevance: Advances low-latency event-camera perception for learning control policies.

### 3D Point Cloud Perception

#### [GaussianDWM++: Language-Grounded 3D Gaussian Driving World Model for Unified Scene Understanding, Editing, and Multi-Modal Generation](http://arxiv.org/abs/2608.16234v1)
Authors: Tianchen Deng et al. | 2026-08-17 | Presents a language-grounded 3D Gaussian world model for driving-scene understanding, editing, and generation. Relevance: Connects 3D Gaussian/point-cloud perception with embodied driving-world modeling and language grounding.

## Cross-Topic Signals

- Security spans LLM-agent state, embodied-agent behavior, and skill-marketplace composition: papers on state-semantic injection, compositional skill chains, and embodied-agent security collectively map digital-to-physical attack surfaces.
- VLA papers converge on hierarchical or dual-frequency architectures for long-horizon control: NebulaVLA, SparkVLA, GigaBrain-0.7, and HAF all decompose reasoning and control to improve scalability and smoothness.
- Continual learning and parameter-efficient adaptation share a representation-preservation goal: layer-adaptive regularization, task-anchored shaping, and self-routed adapters all address how to adapt without destroying prior knowledge.
- Memory and self-evolution appear across agent and continual-learning topics: QUMem, HyperSkill, and SoftModel all explore what to store, how to structure it, and how it should evolve.
- Event-based sensing could benefit embodied agents: FLEET’s token-based event-camera features are aimed at low-latency control, a potential input modality for VLA and navigation systems.

## Priority Reading

1. [GigaBrain-0.7](http://arxiv.org/abs/2608.15875v1) — Most architecturally ambitious VLA paper today; directly investigates whether system architecture elicits emergent embodied capabilities.
2. [Layers Matter](http://arxiv.org/abs/2608.15901v1) — A corrective view of EWC-style regularization that is likely to influence practical continual-learning implementations.
3. [ClawGym II](http://arxiv.org/abs/2608.16798v1) — Opens a relatively unexplored direction: black-box RL through agent harnesses for improving long-horizon LLM-agent training.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*