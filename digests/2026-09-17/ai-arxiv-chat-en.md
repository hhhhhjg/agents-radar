# Lab Research Topics Radar 2026-09-17

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 22 new + 0 seen in the last 14 days | Generated: 2026-09-17 00:00 UTC

---

## Today's Overview
- **LLM Agent Engineering**: New work on turn-level density-ratio estimation for agent post-training, universal defenses for tool-integrated agents, and interpretability/steering for social-simulation agents.
- **Agent Test-Time Scaling and Self-Improvement**: Progress on finite-step failure in looped transformers for iterative reasoning, SWE-agent decision grounding under unknown unknowns, and constant swap-regret dynamics for multi-agent equilibrium learning.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: New spatially grounded VLA for wheel loaders, symmetry-aware VLA for manipulation, and dense-to-MoE adaptation for compact VLA policies.
- **Embodied Navigation**: New uncertainty-aware conformal prediction for VLN, plus a neuro-symbolic ego-centric dataset for omni-directional embodied autonomous driving; a surgical-segmentation match is only adjacent.
- **LLM Pruning and Inference Optimization**: One new paper on early-layer collaborative hierarchical orchestration with bonus logits for speculative decoding.
- **Multimodal LLM Pruning**: No new papers today.
- **Continual Learning**: New uncertainty-aware traversability prediction, CLARE sparsity framework for class-incremental learning, and recursive self-improvement for scientific agents.
- **Event-Based Vision**: Two new papers on event-based egocentric 3D hand mesh reconstruction and semantic hypergraph distillation for event pre-training.
- **3D Point Cloud Perception**: New SSC-Priors for lidar semantic scene completion, plus an adjacent visuomotor embodiment-dependence study.
- **3D Point Cloud Perception and Tracking**: Two new papers on selective vote aggregation and pretrained geometric priors for 3D single-object tracking.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [Turn-level Multiscale Density Ratio Estimation for LLM Agents](http://arxiv.org/abs/2609.16760v1)
Z. Zhao, K. Chen, A. Li et al. | 2026-09-15  
Contribution: Proposes turn-level multiscale density ratio estimation for post-training LLM agents. Relevance: Improves multi-step agent post-training and tool-interaction reliability.

#### [Universal Defenses for Tool-Integrated LLM Agents Against Adversarial Attacks](http://arxiv.org/abs/2609.16098v1)
X. Li, Y. Wang | 2026-09-14  
Contribution: Develops universal defenses for tool-integrated LLM agents against direct and indirect prompt injection and adversarial attacks. Relevance: Strengthens LLM agent security and robustness in tool-use settings.

#### [Interpreting and Steering LLM Agents for Social Simulations](http://arxiv.org/abs/2609.16436v1)
J. G. Fan, A. Murugan, S. Krishnan et al. | 2026-09-14  
Contribution: Introduces interpretability and steering methods for LLM agents in social simulations. Relevance: Enables controlled, analyzable LLM agent behavior in social science simulations.

### Agent Test-Time Scaling and Self-Improvement
#### [Right Direction, Wrong Step: Geometric Analysis of Finite-Step Failure in Looped Transformers](http://arxiv.org/abs/2609.16665v1)
Z. Guo, Z. Wu, H. Du et al. | 2026-09-15  
Contribution: Geometrically analyzes finite-step failure in looped transformers for iterative latent reasoning. Relevance: Directly informs test-time scaling and iterative self-improvement in agent reasoning.

#### [Grounding SWE-Agent Decisions in Architecture-0 Design: Navigating Unknown Unknowns through Physical Mapping](http://arxiv.org/abs/2609.17221v1)
Z. Wang, Y. Liu | 2026-09-15  
Contribution: Studies how SWE agents navigate unknown unknowns in early system design via physical mapping. Relevance: Connects agent decision grounding to robust autonomous software engineering self-improvement.

#### [Constant Swap Regret in General-Sum Games via Optimistic Transition Matrices](http://arxiv.org/abs/2609.16751v1)
Tung Mai | 2026-09-15  
Contribution: Provides deterministic uncoupled learning dynamics with constant individual swap regret in general-sum games. Relevance: Offers regret-minimization ideas for multi-agent self-improvement and equilibrium learning.

### LLM Agent Societies
No new papers today.

## 具身智能
### Vision-Language-Action Models
#### [sensVLA: Spatially-Grounded Vision-Language-Action Model for Autonomous Wheel Loader](http://arxiv.org/abs/2609.17021v1)
G. K. Erabati, B. Johannsen, A. Stewart et al. | 2026-09-15  
Contribution: Combines a Qwen3-2B VLM with a trainable transformer action expert for autonomous wheel-loader control. Relevance: Shows VLA integration for heavy embodied machinery with task semantics and 3D geometry.

#### [SAVLA: Symmetry-Aware Vision-Language-Action Models for Robotic Manipulation](http://arxiv.org/abs/2609.16641v1)
J. Li, W. W. Li, F. Wu et al. | 2026-09-15  
Contribution: Introduces symmetry-aware VLA models to improve spatial competence in robotic manipulation. Relevance: Addresses geometric generalization gaps in VLA policies.

#### [Dense to MoE Adaptation for Compact Vision Language Action Policies](http://arxiv.org/abs/2609.16503v1)
M. Niu, S. Chen, Y. Wu et al. | 2026-09-15  
Contribution: Adapts dense VLA policies into mixture-of-experts to reduce LLM-side parameters while preserving performance. Relevance: Bridges VLA deployment with model compression for resource-constrained robots.

### Embodied Navigation
#### [ENCP: Episode-Normalized Conformal Prediction for Vision-and-Language Navigation](http://arxiv.org/abs/2609.17499v1)
V. Feliren, A. T. Asyhari, M. R. U. Saputra | 2026-09-15  
Contribution: Proposes episode-normalized conformal prediction for uncertainty estimation in VLN. Relevance: Supports safer navigation decisions by flagging ambiguous or unreliable predictions.

#### [NeuroSymbEAD: A Large Scale Neuro-Symbolic Caption Dataset for Omni-Directional Embodied Autonomous Driving](http://arxiv.org/abs/2609.16919v1)
M. A. U. Khan, Mohammed Elamine, S. T. Uddin et al. | 2026-09-15  
Contribution: Releases a large-scale neuro-symbolic caption dataset with ego-centric knowledge graphs for omni-directional embodied autonomous driving. Relevance: Supplies structured object, heading, orientation, and distance annotations for embodied navigation.

#### [TEDi: Temporal Memory-Enhanced and Denoising Transformer for Surgical Instrument Segmentation](http://arxiv.org/abs/2609.16797v1)
J. Yuan, W. Mi, T. Zhang et al. | 2026-09-15  
Contribution: Develops a temporal memory-enhanced denoising transformer for surgical instrument segmentation. Relevance: Its temporal memory and denoising design is an adjacent method for robust embodied scene understanding.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [ECHO: Early-layer Collaborative Hierarchical Orchestration with Bonus Logits in Speculative Decoding](http://arxiv.org/abs/2609.17241v1)
Z. Ma, Z. Zhang, Z. Li et al. | 2026-09-15  
Contribution: Proposes early-layer collaborative hierarchical orchestration with bonus logits for speculative decoding. Relevance: Improves LLM inference efficiency by addressing stale drafts and costly verification.

### Multimodal LLM Pruning
No new papers today.

### Continual Learning
#### [CLARE: Scalable Class-Incremental Continual Learning via a Sparsity-Based Framework](http://arxiv.org/abs/2609.17026v1)
Y. Fu, M. Lou, Z. Liao et al. | 2026-09-15  
Contribution: Introduces a sparsity-based framework for scalable class-incremental continual learning. Relevance: Directly addresses catastrophic forgetting and scalability in continual learning.

#### [Continual Learning for Traversability Prediction with Uncertainty-Aware Adaptation](http://arxiv.org/abs/2609.17141v1)
H. Lee, Y. Lee, D. A. Duecker et al. | 2026-09-15  
Contribution: Applies uncertainty-aware adaptation to continual learning for traversability prediction. Relevance: Connects continual learning with safe robot navigation in unstructured environments.

#### [ScienceBuddy: Recursive-in-Recursive Self-Improvement for Interactive Scientific Agents](http://arxiv.org/abs/2609.17523v1)
S. Xue, J. Zhong, Z. Nan et al. | 2026-09-15  
Contribution: Introduces an interactive scientific workspace with recursive-in-recursive self-improvement for scientific agents. Relevance: Demonstrates continual improvement of LLM agents in research workflows.

## 视觉感知
### Event-Based Vision
#### [EventEgoHands++: Event-based Egocentric 3D Hand Mesh Reconstruction with Real Dataset](http://arxiv.org/abs/2609.17189v1)
R. Hara, W. Ikeda, M. Hatano et al. | 2026-09-15  
Contribution: Presents event-based egocentric 3D hand mesh reconstruction with a real dataset. Relevance: Advances event-based vision for low-light and motion-blurred egocentric perception.

#### [Hyper-RED: Scalable Event Pre-training via Semantic Hypergraph Distillation](http://arxiv.org/abs/2609.16811v1)
M. Wang, Z. Tian, W. Bao et al. | 2026-09-15  
Contribution: Scales event pre-training via semantic hypergraph distillation from image models. Relevance: Addresses scarce annotated event data for robust event-based representation learning.

### 3D Point Cloud Perception
#### [SSC-Priors: Exploring Semantic and Visibility Priors to Boost Lidar Semantic Scene Completion](http://arxiv.org/abs/2609.17413v1)
T. Martyniuk, J. Seele, A. Boulch et al. | 2026-09-15  
Contribution: Explores semantic and visibility priors to boost lidar semantic scene completion without complex architecture redesign. Relevance: Directly improves 3D point cloud perception for autonomous driving scenes.

#### [Rethinking Visual Embodiment Dependence in Visuomotor Policies](http://arxiv.org/abs/2609.16815v1)
H. Fang, Y. Lu, C. Wang et al. | 2026-09-15  
Contribution: Studies visual embodiment dependence in visuomotor policies through cue-conflict interventions. Relevance: Adjacent to 3D perception-action coupling by showing how embodiment-specific visual cues influence action prediction.

### 3D Point Cloud Perception and Tracking
#### [SAVTrack: Selective Vote Aggregation for Reliability-Aware Point Cloud Tracking](http://arxiv.org/abs/2609.16662v1)
S. Zhou, L. Tan, Q. Wang et al. | 2026-09-15  
Contribution: Proposes selective vote aggregation for reliability-aware point cloud tracking. Relevance: Improves 3D single-object tracking under sparse and incomplete LiDAR observations.

#### [MAETrack: Unleashing the Potential of Pretrained Geometric Priors for 3D Single Object Tracking](http://arxiv.org/abs/2609.16695v1)
S. Zhou, Q. Wang, L. Tan et al. | 2026-09-15  
Contribution: Exploits pretrained geometric priors for 3D single-object tracking. Relevance: Addresses transferability of self-supervised 3D encoders to point cloud tracking.

## Cross-Topic Signals
- Uncertainty quantification recurs across ENCP for VLN, uncertainty-aware continual traversability, and reliability-aware SAVTrack, all aiming for safer embodied perception and action.
- Parameter-efficient adaptation connects VLA deployment, LLM inference, and continual learning: Dense-to-MoE VLA, ECHO speculative decoding, and CLARE sparsity all reduce computation while preserving performance.
- Geometric and symmetry priors appear in SAVLA, MAETrack, SAVTrack, and SSC-Priors, showing shared interest in spatial structure for generalization.
- Event-based scaling and distilled supervision link EventEgoHands++ and Hyper-RED, addressing scarce annotations and robust low-light egocentric perception.
- Agent reliability and interpretability span LLM Agent Engineering and self-improvement: universal tool-agent defenses, steering social-simulation agents, and turn-level density-ratio estimation support safer agent post-training.

## Priority Reading
#### **ENCP: Episode-Normalized Conformal Prediction for Vision-and-Language Navigation** — read in full for uncertainty-aware VLN, a concrete bridge between embodied navigation and safe decision-making.
#### **Dense to MoE Adaptation for Compact Vision Language Action Policies** — read in full for practical VLA compression, directly relevant to deploying VLA models on resource-constrained robots.
#### **CLARE: Scalable Class-Incremental Continual Learning via a Sparsity-Based Framework** — read in full for a strong continual-learning method that may transfer to compact and continual robot policies.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*