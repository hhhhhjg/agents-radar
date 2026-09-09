# Lab Research Topics Radar 2026-09-10

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 49 new + 0 seen in the last 14 days | Generated: 2026-09-09 23:45 UTC

---

## Today's Overview

- **LLM Agent Engineering** (10 new): Agent memory is the dominant theme—graph-based personalized memory, biometric identity-aware KV-cache access, and risk-aware memory clearance—alongside explicit execution structures (Procedural Graphs), self-evolving agents (Experience Funnel), and agent evaluation for scheming, task-progress reporting, and security/autonomous-driving task generation.
- **Agent Test-Time Scaling and Self-Improvement** (2 new): One paper expands reasoning coverage in RLVR via difficulty-adaptive tree-structured policy optimization; another shows approximate value iteration can provide efficient search+approximation in self-play.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models** (11 new): Progress clusters on rapid few-shot adaptation (ICI-VLA), test-time world-model adaptation (WorldAgen), contact/tactile-aware dexterous VLA (DeCAL), discrete behavior modeling (Large Discrete Policy), robotic memory evaluation (MEMOBench), plus split inference and multilingual-transfer work.
- **Embodied Navigation** (10 new): Highlights include whole-body humanoid VLA navigation (TANGO), lifelong navigation benchmarking (EvoNav-Bench), robust long-horizon target navigation (OmniNav), aerial/air-ground visual-language navigation, and VLM traversability under semantic ambiguity.
- **LLM Pruning and Inference Optimization** (4 new): New approaches train-then-prune with overcomplete recovery, make dynamic routers history-aware (HeRo), make LLM cascades harm-aware, and prune redundant visual tokens for multi-view VLM reasoning (CoVeR).
- **Multimodal LLM Pruning**: No new papers today.
- **Continual Learning** (7 new): Work on long-horizon memorization shows that CL mechanisms compose; other papers address dynamic multimodal continual learning, geometry-aware Bayesian PEFT, on-device edge tuning, and streaming tabular inference under data streams.
- **Event-Based Vision** (1 new): Emo-DVS introduces a multimodal privacy-aware emotion recognition benchmark using event cameras rather than RGB.
- **3D Point Cloud Perception** (8 new): New work spans unsupervised semantic segmentation (MSSP), annotation-free open-vocabulary segmentation (GoDeep), zero-shot plant organ segmentation, sim-to-real urban LiDAR detection solutions, spherical 3D scene understanding, and generalizable 6D pose estimation.
- **3D Point Cloud Perception and Tracking** (1 new): TFTrack removes the Siamese dual-input design for template-free 3D single-object tracking from LiDAR.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [Procedural Graphs](http://arxiv.org/abs/2609.09153v1)
Y. Lu et al. | 2026-09-08 | Contribution: Replaces implicit action histories with self-evolving procedural execution graphs that encode reusable task structure. Relevance: Directly advances long-horizon LLM-agent planning and procedural-knowledge reuse.

#### [Graph-Based Personalized Memory for LLM Agents](http://arxiv.org/abs/2609.08599v1)
D. D. A. Nguyen et al. | 2026-09-08 | Contribution: Frames personalized memory as evolving graph representations with dedicated retrieval and evaluation. Relevance: Strong fit for agent memory/personalization research, a core lab direction.

#### [BIO-MEMART: Biometric-Aware KV Cache Memory for Multi-User LLM Agents](http://arxiv.org/abs/2609.08566v1)
Y. Qian et al. | 2026-09-08 | Contribution: Adds biometric access control to reusable KV-cache memory blocks in shared multi-user agent deployment. Relevance: Bridges agent memory and security/privacy in LLM-agent serving.

#### [Experience Funnel: A State-Policy Alternating Loop for Self-Evolving Agents](http://arxiv.org/abs/2609.08919v1)
W. Gao et al. | 2026-09-08 | Contribution: Distills abundant interaction experience into reusable policies through a state-policy alternating loop. Relevance: Directly addresses self-evolution and experience consolidation for LLM agents.

#### [SchemeArena: Factorized Stress Testing of Scheming in LLM Agents](http://arxiv.org/abs/2609.08126v1)
J. Ruan et al. | 2026-09-08 | Contribution: Factorizes how goals, environment affordances, oversight, and consequences combine to produce scheming in LLM agents. Relevance: Provides a needed evaluation lens for agent-alignment safety.

### Agent Test-Time Scaling and Self-Improvement

#### [Difficulty-Adaptive Tree-Structured Policy Optimization for Expanding Reasoning Coverage in RLVR](http://arxiv.org/abs/2609.08650v1)
Y. Yu et al. | 2026-09-08 | Contribution: Uses difficulty-adaptive tree-structured exploration to expand pass@k reasoning coverage in verifiable-reward RL. Relevance: Targets exactly the test-time/self-improvement scaling problem for reasoning agents.

#### [The Surprising Effectiveness of Approximate Value Iteration in Self-Play](http://arxiv.org/abs/2609.09094v1)
R. Boige et al. | 2026-09-08 | Contribution: Shows approximate value iteration can outperform or match popular MCTS-based self-play at lower computational cost. Relevance: Offers a cheaper test-time-scaling alternative for self-improving game-playing agents.

## 具身智能

### Vision-Language-Action Models

#### [DeCAL: Towards Physically-Grounded Dexterous Vision-Language-Action Models via Contact-Aware Latent Co-Imagination](http://arxiv.org/abs/2609.09119v1)
Y. Fu et al. | 2026-09-08 | Contribution: Injects contact/tactile awareness through latent co-imagination to overcome occlusion and contact dynamics in dexterous VLA manipulation. Relevance: Addresses a core weakness of current VLA models in contact-rich real-world tasks.

#### [ICI-VLA: In-Context Imitation with Spatiotemporally Aligned Demonstrations for Vision-Language-Action Models](http://arxiv.org/abs/2609.07581v1)
S. Yang et al. | 2026-09-07 | Contribution: Enables gradient-free few-shot VLA adaptation by retrieving spatiotemporally aligned demonstrations into context. Relevance: Promising for rapid robot-policy deployment when task data or compute is limited.

#### [WorldAgen: Unified State-Action Prediction with Test-Time World Model Training](http://arxiv.org/abs/2609.08162v1)
C. Wan et al. | 2026-09-08 | Contribution: Actively trains a world model at test time to adapt VLA state-action prediction to shifting environment dynamics. Relevance: Connects VLA research to agent self-improvement and test-time adaptation.

#### [Large Discrete Policy: Advancing Explicit Behavior Modeling with Stochastic Iterative Scoring](http://arxiv.org/abs/2609.07049v1)
Z. Li et al. | 2026-09-07 | Contribution: Selects discrete actions via stochastic iterative scoring, offering a fully discrete, interpretable alternative to continuous generative policies. Relevance: New behavior-policy formulation useful for explicit and controllable VLA action selection.

#### [MEMOBench: A Process Level Memory Benchmark for Robotic Manipulation](http://arxiv.org/abs/2609.07047v1)
H. Sun et al. | 2026-09-07 | Contribution: Proposes process-level memory evaluation where robot manipulation must act on information no longer visible. Relevance: Exposes a missing evaluation axis for memory in VLA policies.

### Embodied Navigation

#### [TANGO: Humanoid Navigation in Cluttered Environments with a Whole-Body Vision-Language-Action Model](http://arxiv.org/abs/2609.09158v1)
A. Li et al. | 2026-09-08 | Contribution: Treats humanoid navigation as continuous whole-body, geometry-aware adaptation rather than 2D path planning. Relevance: Exemplifies VLA-based navigation in embodied humanoid platforms.

#### [EvoNav-Bench: Benchmarking Lifelong Navigation in Evolving Environments](http://arxiv.org/abs/2609.08292v1)
X. Wang et al. | 2026-09-08 | Contribution: Formalizes lifelong navigation as a sequence of subtasks requiring experience reuse in the same evolving environment. Relevance: Provides a benchmark for navigation + memory + continual learning, a key multi-interest intersection.

#### [OmniNav: Robust Long-Horizon Target Navigation in Dynamic Environments](http://arxiv.org/abs/2609.08159v1)
Y. Tang et al. | 2026-09-08 | Contribution: Couples scene-memory maintenance, target-belief revision, and interaction-feasible action selection for long-horizon navigation. Relevance: Directly tackles sustained embodied navigation under partial observability.

#### [Towards Embodied Air-Ground Cooperative Object Search: Benchmark, Dataset and Agentic Method](http://arxiv.org/abs/2609.08402v1)
B. Yu et al. | 2026-09-08 | Contribution: Introduces a collaborative UAV-UGV target-search task with multi-view reference verification and new benchmark/dataset. Relevance: Opens a multi-robot navigation/search direction closely tied to embodied agentic methods.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [Train Overcomplete, Deploy Compact: Scaling Recovery Capacity for Structured LLM Pruning](http://arxiv.org/abs/2609.06974v1)
S. Oh et al. | 2026-09-07 | Contribution: Trains an overcomplete recovery network to close the mismatch in structured LLM pruning and deploys a compact model. Relevance: Directly targets memory/latency/energy savings from structured pruning with better recovery.

#### [Do Dynamic Routers Need Memory? HeRo: History-Aware Routing for Efficient LLM Inference](http://arxiv.org/abs/2609.08189v1)
H. Lin et al. | 2026-09-08 | Contribution: Conditions per-token layer skipping on historical routing decisions instead of only the current hidden state. Relevance: Improves dynamic layer routing for efficient LLM inference.

#### [Signed Rescue Routing: Harm-Aware Cascades for Efficient LLM Inference](http://arxiv.org/abs/2609.07786v1)
Z. Wang et al. | 2026-09-07 | Contribution: Routes to the large model only when escalation is actually useful, not merely when the small model is uncertain. Relevance: Refines a practical inference-optimization lever: LLM cascades.

#### [CoVeR: Coverage-Based Token Pruning for Multi-View 3D Reasoning in VLMs](http://arxiv.org/abs/2609.08345v1)
N.-T. Bui et al. | 2026-09-08 | Contribution: Prunes redundant visual tokens by coverage across views in 2D VLMs performing 3D reasoning. Relevance: Extends inference-optimization/token-pruning ideas to multimodal 3D perception.

### Continual Learning

#### [Continual Learning Mechanisms Compose for Long-Horizon Memorization](http://arxiv.org/abs/2609.06986v1)
Z. Zhang et al. | 2026-09-07 | Contribution: Studies retention of 100 sequentially learned query-answer tasks and shows CL mechanisms compose for long-horizon memorization. Relevance: Directly targets the interplay of continual updates and forgetting in language models.

#### [NeuCME: Toward Dynamic Multimodal Continual Learning via Neural Combinatorics of Multiple Experts](http://arxiv.org/abs/2609.07009v1)
K. Guo et al. | 2026-09-07 | Contribution: Handles multimodal continual learning when the set of modalities per task is predefined dynamically. Relevance: Relevant for continual learning in real multimodal/embodied settings with variable sensors.

#### [Geometry-Aware Bayesian Parameter-Efficient Fine-Tuning on the Stiefel Manifold via Stein Variational Gradient Descent](http://arxiv.org/abs/2609.08354v1)
Q.-D. Tran et al. | 2026-09-08 | Contribution: Introduces a geometric, Bayesian low-rank PEFT method over the Stiefel manifold. Relevance: Provides parameter-efficient adaptation machinery useful in continual-update and lifelong-model settings.

## 视觉感知

### Event-Based Vision

#### [Emo-DVS: A Multimodal Benchmark for Privacy-Aware Emotion Recognition with Event Cameras](http://arxiv.org/abs/2609.06928v1)
J. Chen et al. | 2026-09-07 | Contribution: Provides an event-camera benchmark for emotion recognition that avoids RGB privacy exposure. Relevance: Expands event-based vision beyond navigation/detection into human-behavior understanding.

### 3D Point Cloud Perception

#### [MSSP: Multi-Scale Spatially-Constrained Partition for Unsupervised Semantic Segmentation of 3D Point Clouds](http://arxiv.org/abs/2609.06959v1)
Z. Zhang et al. | 2026-09-07 | Contribution: Proposes multi-scale spatially constrained partitions to replace fixed-granularity superpoint spectral analysis. Relevance: Advances label-free semantic segmentation for point-cloud perception.

#### [GoDeep: Annotation-Free Open-Vocabulary 3D Scene Understanding via Language-Space Lifting](http://arxiv.org/abs/2609.09082v1)
T. Betsas et al. | 2026-09-08 | Contribution: Lifts language-space CLIP features into 3D for annotation-free open-vocabulary semantic segmentation. Relevance: Removes annotation and dedicated 3D-corpus requirements from open-vocabulary 3D perception.

#### [Solution for UCF UrbanTwin LUMPI Track: Sim-to-Real Urban LiDAR 3D Object Detection](http://arxiv.org/abs/2609.07590v1)
P. Luo et al. | 2026-09-07 | Contribution: Trains only on synthetic data and adapts to real roadside LiDAR frames, correcting point-cloud and pedestrian-scale gaps. Relevance: Directly addresses sim-to-real generalization in LiDAR-based 3D perception.

#### [Zero-Shot 3D Plant Organ Segmentation with SAM3 and Semantic NeRFs](http://arxiv.org/abs/2609.07724v1)
A. Gilson et al. | 2026-09-07 | Contribution: Combines text-prompted SAM3 with semantic NeRFs for annotation-free 3D plant organ segmentation. Relevance: Shows zero-shot segmentation transfer in a specialized 3D application domain.

#### [Generalizable 6D Pose Estimation of Textureless Objects with Planar-based Gaussian Splatting](http://arxiv.org/abs/2609.07231v1)
J. Lu et al. | 2026-09-07 | Contribution: Handles textureless-object pose estimation without object-specific CAD models using planar Gaussian splatting. Relevance: Broadens generalizable 3D object perception to low-texture industrial/robot scenes.

### 3D Point Cloud Perception and Tracking

#### [TFTrack: A Template-Free Framework for Efficient 3D Point Cloud Tracking](http://arxiv.org/abs/2609.07738v1)
Z. Hu et al. | 2026-09-07 | Contribution: Removes costly Siamese dual-input/motion designs for template-free LiDAR-based single-object tracking. Relevance: Reframes 3D SOT toward more efficient single-stream tracking in sparse point clouds.

## Cross-Topic Signals

- **Memory is becoming a shared abstraction** across LLM-agent memory (graph memory, biometric-protected KV-cache memory) and embodied systems (robotic manipulation memory, lifelong navigation benchmarks).
- **Self-improvement/test-time adaptation recurs across scales**: WorldAgen trains a world model at VLA test time; Experience Funnel distills agent experience into policies; difficulty-adaptive tree policies and approximate value iteration push self-play/reasoning improvement.
- **Efficiency ideas transfer between LLM inference and robotics**: routing/cascading/pruning for LLMs parallel coverage-based token pruning and split-inference VLA deployment for on-robot latency constraints.
- **Annotation-free and simulation-to-real strategies are converging**: unsupervised/open-vocabulary 3D segmentation, sim-to-real LiDAR detection solutions, and in-context few-shot VLA adaptation all reduce dependence on expensive labeled data.

## Priority Reading

1. [WorldAgen](http://arxiv.org/abs/2609.08162v1) — The clearest bridge between test-time self-improvement and VLA models: it actively trains a world model at deployment time to handle shifting dynamics.
2. [ICI-VLA](http://arxiv.org/abs/2609.07581v1) — A gradient-free few-shot VLA adaptation mechanism that could unblock rapid robot-policy deployment; highly relevant to agent engineering and embodied manipulation interests.
3. [EvoNav-Bench](http://arxiv.org/abs/2609.08292v1) — An evaluation framework for lifelong navigation that ties together agent memory, continual learning, and embodied navigation in evolving environments.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*