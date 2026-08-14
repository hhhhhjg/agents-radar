# Lab Research Topics Radar 2026-08-15

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 31 new + 9 seen in the last 14 days | Generated: 2026-08-14 22:16 UTC

---

## Today's Overview

- **LLM Agent Engineering** — 10 new papers advanced self-evolving defenses, unsafe-skill evolution, memory consolidation (LycheeMemory V2, EgoCITE), RLVR credit assignment, skill attribution, capability-sheaf repair, agent steering benchmarks, multi-agent retail governance, and strategic memory.
- **Agent Test-Time Scaling and Self-Improvement** — 2 new papers: reasoning-aware generative retrieval and evolution-strategy search over LLM solutions; 4 previously seen papers remain in the feed.
- **LLM Agent Societies** — No new papers today.
- **Vision-Language-Action Models** — 10 new papers covered adversarial robustness, failure-informed self-evolution, temporal credit assignment, inference acceleration, spatial memory, interpretability, simulators, affordance grounding, and edge-agent cognition.
- **Embodied Navigation** — 6 new papers covered open-vocabulary object navigation, humanoid VLN, proxemic risk, UAV-VLN imagination, long-horizon world modeling, and spatial memory procedures.
- **LLM Pruning and Inference Optimization** — 1 new paper: coverage-driven token pruning for 3D VLMs.
- **Multimodal LLM Pruning** — No new papers today.
- **Continual Learning** — 2 new papers on wavelet activations for plasticity and behavioral reprogramming of open-weight LLMs; 1 repeated replay-bounds paper remains.
- **Event-Based Vision** — No new papers today.
- **3D Point Cloud Perception** — 1 new paper on geometry-grounded unified 3D perception; 2 repeated perception papers also remain.
- **3D Point Cloud Perception and Tracking** — No new papers today.

## Research Areas

## LLM Agent and Multi-Agent

### LLM Agent Engineering

#### [Beyond Handcrafted Security: Towards Self-Evolving Defense for LLM Agents](http://arxiv.org/abs/2608.12977v1)
Authors: J. Ruan et al. | 2026-08-13
Contribution: Proposes self-evolving runtime defenses for LLM agents instead of fixed handcrafted security rules.
Relevance: Directly targets the missing adaptive safety layer in deployed LLM agent execution loops.

#### [Practice Makes Unsafe: Skill Misevolution in Self-Improving LLM Agents](http://arxiv.org/abs/2608.12851v1)
Authors: X. Mao et al. | 2026-08-13
Contribution: Shows self-improving agents can convert unsafe successes into reusable skills, framing this as measurable skill misevolution.
Relevance: Identifies a critical safety failure mode in trajectory-driven agent self-improvement.

#### [Teach the Magnitude, Not the Direction: Verifier-Bounded Credit Assignment for Multi-Turn Multi-step LLM Agents](http://arxiv.org/abs/2608.13179v1)
Authors: Z. Wang et al. | 2026-08-13
Contribution: Introduces verifier-bounded credit assignment that trains magnitude rather than direction of per-turn advantages for RLVR.
Relevance: Improves RL training for multi-turn tool-use agents beyond trajectory-level reward conflation.

#### [SkillShapley: Boundary-Adaptive Shapley Valuation for Skill Step Attribution in LLM Agents](http://arxiv.org/abs/2608.13173v1)
Authors: C. Liu et al. | 2026-08-13
Contribution: Applies boundary-adaptive Shapley values to attribute each step’s contribution in agent skill execution.
Relevance: Provides interpretable step-level credit for procedurally executed agent skills.

#### [LycheeMemory V2: Efficient Long-Term Memory for LLM Agents via Semantic Segment-Level Consolidation](http://arxiv.org/abs/2608.12990v1)
Authors: D. Li et al. | 2026-08-13
Contribution: Proposes semantic segment-level memory consolidation to avoid eager per-interaction LLM memory construction.
Relevance: Addresses the rising cost of long-horizon LLM agent memory management.

#### [EgoCITE: Context-Augmented Indexing and Time-Aware Retrieval for Long-Horizon Egocentric Memory](http://arxiv.org/abs/2608.12627v1)
Authors: L. Zhang, K. Sun | 2026-08-12
Contribution: Improves egocentric memory search through context-augmented caption indexing and temporal retrieval.
Relevance: Strengthens agentic retrieval from long-horizon first-person video/audio streams.

#### [Capability Sheaves for Compositional Agent-Harness Repair: Controlled Quotients and a Real-Repository Stress Test](http://arxiv.org/abs/2608.13228v1)
Authors: S. Batruin | 2026-08-13
Contribution: Models agent-harness component disagreements as capability sheaves and repairs them via controlled quotients.
Relevance: Gives a compositional validation framework for retrieval, routing, state, and verification in agent harnesses.

#### [SteerBench-Work: A Benchmark for Agent Steering at Action Boundaries](http://arxiv.org/abs/2608.12654v1)
Authors: O. Serdar, C. Mertayak | 2026-08-12
Contribution: Introduces an incident-anchored benchmark for proceed-or-hold steering decisions before tool-executing actions.
Relevance: Fills an evaluation gap for pre-commit safety and oversight in long-running agents.

#### [Lines and Ladders: A Context-Aware Multi-Agent Framework for Large-Scale Retail Price Taxonomy](http://arxiv.org/abs/2608.12674v1)
Authors: R. T. Chunduri et al. | 2026-08-13
Contribution: Builds a multi-agent framework for maintaining price consistency and taxonomy across millions of retail items.
Relevance: Demonstrates LLM-agent orchestration in a large-scale enterprise governance setting.

#### [LLMs Are Not Good Strategists, Yet Memory-Enhanced Agency Boosts Reasoning](http://arxiv.org/abs/2608.12626v1)
Authors: Y. Wu, Z. Hu | 2026-08-12
Contribution: Shows memory-enhanced agency reduces strategic drift and improves long-horizon strategic coherence in LLMs.
Relevance: Connects agent memory design to sustained reasoning quality.

### Agent Test-Time Scaling and Self-Improvement

#### [GEM: A Generative Embedding Model Bridging Reasoning and Retrieval](http://arxiv.org/abs/2608.13200v1)
Authors: Z. Shen, C. Macdonald | 2026-08-13
Contribution: Proposes a generative embedding model that uses LLM reasoning to close the gap between complex queries and document retrieval.
Relevance: Expands agent retrieval beyond surface-level matching by leveraging model reasoning.

#### [Beyond the Best Guess: Improving LLM Solution Coverage with Evolution Strategies](http://arxiv.org/abs/2608.12679v1)
Authors: C. F. Hayes et al. | 2026-08-13
Contribution: Uses evolution strategies to search across LLM solution distributions rather than relying on a single best guess.
Relevance: Offers a concrete test-time compute method for discovery and solution-coverage tasks.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Towards Understanding On-Policy Distillation through the Lens of Test-Time Scaling](http://arxiv.org/abs/2608.11829v1)
Authors: X. Ge et al. | 2026-08-12
Contribution: Analyzes whether on-policy distillation truly expands student capabilities beyond the base model using a test-time scaling perspective.
Relevance: Informs when distillation-based self-improvement is genuinely useful.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Claim-Level Reliability Assessment for Efficient Test-Time Reasoning](http://arxiv.org/abs/2608.11994v1)
Authors: S. Xu et al. | 2026-08-12
Contribution: Reallocates test-time compute from extra sampling to targeted claim-level falsification.
Relevance: Provides a training-free efficiency principle for LLM test-time reasoning.

## Embodied Intelligence

### Vision-Language-Action Models

#### [FIRE-VLA: Failure-Informed Self-Evolution for Vision-Language-Action Models in Autonomous Driving](http://arxiv.org/abs/2608.13395v1)
Authors: H. Dou | 2026-08-13
Contribution: Uses failure-informed self-evolution to improve autonomous-driving VLA policies when sampled trajectories are all poor.
Relevance: Directly improves VLA post-training under sparse and low-quality reward feedback.

#### [Temporal GRPO: Beyond Trajectory-Level Credit in Vision-Language-Action Reinforcement Learning](http://arxiv.org/abs/2608.13026v1)
Authors: Y. Zhou et al. | 2026-08-13
Contribution: Extends GRPO to temporal, sub-trajectory-level credit assignment for VLA policies trained from task-success feedback.
Relevance: Improves VLA RL by avoiding uniform advantages over entire rollouts.

#### [FlashDrive: Flash Vision-Language-Action Inference for Autonomous Driving](http://arxiv.org/abs/2608.12932v1)
Authors: Z. Li et al. | 2026-08-13
Contribution: Targets the four-stage structural bottleneck of VLA inference to enable real-time autonomous driving.
Relevance: Addresses the critical deployment-efficiency barrier for VLA models.

#### [UniTexture: Cross-Task Universal Adversarial Textures for Vision-Language-Action Models](http://arxiv.org/abs/2608.13453v1)
Authors: Y. Dai et al. | 2026-08-13
Contribution: Generates universal adversarial textures that mislead VLA policies across tasks.
Relevance: Exposes a security risk specific to VLA-controlled embodied agents.

#### [BrainWAM: Action-Space Coordination of Semantic Priors and Predictive Dynamics for Autonomous Driving](http://arxiv.org/abs/2608.12854v1)
Authors: B. Zhan et al. | 2026-08-13
Contribution: Coordinates VLA semantic priors with world-action model dynamics in action space for driving.
Relevance: Bridges semantic planning and predictive control in autonomous-driving VLAs.

#### [Decoding Task Progress from VLA Representations](http://arxiv.org/abs/2608.13474v1)
Authors: A. Bhardwaj et al. | 2026-08-13
Contribution: Uses mechanistic interpretability to decode task progress signals from internal VLA representations.
Relevance: Provides runtime monitoring and interpretability tools for VLA deployment.

#### [Semantic Radiance Fields as Simulators for Spatial Reasoning in Real-World Scenes](http://arxiv.org/abs/2608.13095v1)
Authors: N. Heider et al. | 2026-08-13
Contribution: Uses semantic radiance fields as geometrically faithful, semantically queryable simulators for embodied spatial reasoning.
Relevance: Offers realistic training/evaluation environments for VLA spatial reasoning.

#### [FUSE: Active Functional Affordance Grounding through Adaptive Semantic-Geometric Evidence Acquisition](http://arxiv.org/abs/2608.12683v1)
Authors: Z. Chen, S. N. Aakur | 2026-08-13
Contribution: Enables embodied agents to actively acquire semantic-geometric evidence for function-based object grounding.
Relevance: Extends VLA interaction from identity recognition to functional affordance reasoning.

#### [Enhancing Virtual Agents through SLMs and Edge-Computing: An Exploratory Evaluation of Think and Memory Processes](http://arxiv.org/abs/2608.13420v1)
Authors: A. Hadjiliasi, L. Nisiotis | 2026-08-13
Contribution: Evaluates small-language-model-based think and memory processes for embodied virtual agents on edge devices.
Relevance: Points toward lightweight VLA/agent cognition for resource-constrained embodied systems.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [HUGIN: Enhancing Vision-Language Planning for Autonomous Logistics Sorting](http://arxiv.org/abs/2608.11692v1)
Authors: X. Sun et al. | 2026-08-12
Contribution: Formulates joint multi-scene understanding and vision-language planning for autonomous logistics sorting.
Relevance: Demonstrates VLA-style planning across spatially disjoint camera views in an embodied industrial task.

### Embodied Navigation

#### [SAP-Nav: Spatial Semantic Representation Meets Active Perception for Hierarchical Open-Vocabulary Object Navigation](http://arxiv.org/abs/2608.12707v1)
Authors: X. Pei et al. | 2026-08-13
Contribution: Combines spatial semantic representation with active perception for hierarchical open-vocabulary object navigation.
Relevance: Addresses scene-, room-, region-, and instance-level instructions under partial observability.

#### [HumanoidVLN: A Physics-Grounded Simulator and Benchmark for Vision-Language Navigation Across Diverse Humanoid Embodiments](http://arxiv.org/abs/2608.12860v1)
Authors: Q.-D. Pham et al. | 2026-08-13
Contribution: Introduces a physics-grounded humanoid VLN benchmark accounting for bipedal constraints and varied morphologies.
Relevance: Moves embodied navigation beyond wheeled-agent assumptions.

#### [AirForesight: Current-to-Future Spatial Map Imagination with Cross-Space Planning Consistency for UAV-VLN](http://arxiv.org/abs/2608.12835v1)
Authors: Y. Liu et al. | 2026-08-13
Contribution: Imagines future spatial maps from sparse multi-view observations for UAV vision-language navigation.
Relevance: Improves 3D motion feasibility in complex outdoor aerial navigation.

#### [Spatial Memory Agent: Experience-Grounded Procedure Memory for Spatial Intelligence](http://arxiv.org/abs/2608.12743v1)
Authors: H. Zhang et al. | 2026-08-13
Contribution: Builds experience-grounded procedure memory to improve spatial reasoning of VLM-based embodied agents.
Relevance: Supplies reusable spatial procedures useful for navigation and robot planning.

#### [AlayaWorld: Interactive Long-Horizon World Modeling - Full Technical Report (v1.1)](http://arxiv.org/abs/2608.13492v1)
Authors: AlayaWorld Team et al. | 2026-08-13
Contribution: Revises how conditioning signals are represented and integrated in a chunk-wise autoregressive interactive world model.
Relevance: Provides a long-horizon world-model backbone for embodied navigation and planning.

#### [Can Vision-Language Models Assess Proxemic Risk from Egocentric Robot Images?](http://arxiv.org/abs/2608.12515v1)
Authors: V. Rudas, D. Kuzmenko | 2026-08-12
Contribution: Evaluates open-source VLMs on proxemic danger estimation from egocentric robot views.
Relevance: Tests whether VLMs can support safe navigation in human-shared environments.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [DreamFly: Causal Memory and Receding-Horizon Diffusion Planning for Aerial Vision-Language Navigation](http://arxiv.org/abs/2608.12308v1)
Authors: Y. Deng, F. Xu | 2026-08-12
Contribution: Integrates causal memory with receding-horizon diffusion planning for aerial VLN under partial observability.
Relevance: Strengthens memory and planning components for aerial embodied navigation.

## Model Compression and Continual Learning

### LLM Pruning and Inference Optimization

#### [CoverPrune: Coverage-Driven Token Pruning for 3D VLMs via Optimal Transport](http://arxiv.org/abs/2608.13226v1)
Authors: P. Ling et al. | 2026-08-13
Contribution: Uses optimal transport to prune visual tokens in 3D VLMs while preserving coverage rather than only diversity.
Relevance: Reduces the massive visual-token bottleneck in 3D VLM inference.

### Continual Learning

#### [Sustaining Plasticity via Learnable Wavelet Activations in Continual Learning](http://arxiv.org/abs/2608.12874v1)
Authors: Z. Zhang et al. | 2026-08-13
Contribution: Introduces learnable wavelet activations to counter spectral bias and plasticity loss in sequential learning.
Relevance: Offers a model-level fix for a core continual-learning failure mode.

#### [Behavioral Reprogramming of Open-Weights Models: Cognitive Plasticity and Alignment Bounds](http://arxiv.org/abs/2608.13069v1)
Authors: L. Malíčková | 2026-08-13
Contribution: Empirically tests whether open-weight LLMs can be behaviorally reprogrammed away from passive sycophantic alignment.
Relevance: Explores alignment and plasticity trade-offs relevant to continual model adaptation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Drift and Dependence: Layer-wise Information-Theoretic Bounds for Replay-Based Continual Learning](http://arxiv.org/abs/2608.11690v1)
Authors: T. Gong et al. | 2026-08-12
Contribution: Derives layer-wise information-theoretic bounds for replay-based continual learning.
Relevance: Formalizes the forgetting/generalization trade-off in a widely used continual learning method.

## Visual Perception

### 3D Point Cloud Perception

#### [Geometry-Grounded Unified 3D Perception for Autonomous Driving](http://arxiv.org/abs/2608.13147v1)
Authors: L. Xu et al. | 2026-08-13
Contribution: Learns a geometry-grounded shared representation for metric 3D structure across synchronized multi-camera streams.
Relevance: Improves camera-based 3D perception without relying on semantic-recognition pretraining.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [STAR: A Spatial-Topology Aware Routing Framework for Generalizable 3D Scene Understanding](http://arxiv.org/abs/2608.11699v1)
Authors: M. Xing et al. | 2026-08-12
Contribution: Adds spatial-topology awareness to Mixture-of-Experts routing for unified 3D scene understanding.
Relevance: Addresses sensor-modality discrepancies in generalizable 3D perception.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Map-Det3D: Metric Feed-Forward 3D Reconstruction Prior for Multi-view 3D Object Detection from Streaming Inputs](http://arxiv.org/abs/2608.12179v1)
Authors: Y.-H. Yang et al. | 2026-08-12
Contribution: Uses a metric feed-forward 3D reconstruction prior to improve monocular multi-view 3D object detection.
Relevance: Provides a geometric prior for 3D detection without depth sensors.

## Cross-Topic Signals

- RL credit assignment is converging across LLM agents and VLA policies: Teach the Magnitude and SkillShapley address agent-step credit, while FIRE-VLA and Temporal GRPO refine rollout-level advantages in embodied RL.
- Memory is a shared substrate across domains: LycheeMemory V2 and EgoCITE for LLM agents, Spatial Memory Agent for embodied spatial reasoning, and DreamFly for aerial navigation memory.
- Safety of self-improving systems spans both symbol-level agents and embodied policies: Beyond Handcrafted Security, Practice Makes Unsafe, and UniTexture all highlight failures amplified by learned reusable behavior.
- Inference efficiency pressure cuts across model families: FlashDrive accelerates VLA driving inference, CoverPrune prunes 3D VLM visual tokens, and SLM edge agents reduce embodied-agent cognitive cost.
- 3D geometry is becoming a common prior for perception and planning: Geometry-Grounded, Map-Det3D, Semantic Radiance Fields, and STAR each use structured 3D representations to improve embodied understanding.

## Priority Reading

#### [Practice Makes Unsafe: Skill Misevolution in Self-Improving LLM Agents](http://arxiv.org/abs/2608.12851v1) — Defines a new, measurable safety failure mode in self-improving agents; essential for anyone building trajectory-based agent learning.
#### [Temporal GRPO: Beyond Trajectory-Level Credit in Vision-Language-Action Reinforcement Learning](http://arxiv.org/abs/2608.13026v1) — Proposes a broadly applicable refinement to VLA RL training that could improve many embodied policy-learning pipelines.
#### [FlashDrive: Flash Vision-Language-Action Inference for Autonomous Driving](http://arxiv.org/abs/2608.12932v1) — Real-time VLA inference is a deployment blocker; this paper directly addresses the structural cost cascade.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*