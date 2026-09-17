# Lab Research Topics Radar 2026-09-17

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 35 new + 9 seen in the last 14 days | Generated: 2026-09-17 00:00 UTC

---

## Today's Overview
- **LLM Agent Engineering**: 7 new papers cover tool-use defenses, long-horizon safety calibration, spurious tool-use RL, turn-level density-ratio post-training, social-simulation steering, tabular HPO agents, and self-emergence architectures.
- **Agent Test-Time Scaling and Self-Improvement**: 3 new papers study SWE-agent unknown-unknown navigation, finite-step failure in looped transformers, and constant swap regret in general-sum games.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: 10 new papers span wheel-loader VLA, symmetry-aware manipulation, compact MoE VLA, temporal manipulation, intrinsic rewarding, soft whole-body control, VLA engineering platforms, world models, robot data/experience, and tactile teleoperation.
- **Embodied Navigation**: 4 new papers address VLN conformal uncertainty, surgical scene temporal segmentation, agentic ADAS, and cross-listed embodied autonomous-driving caption data.
- **LLM Pruning and Inference Optimization**: 1 new paper proposes hierarchical speculative decoding; repeated work covers VLM token pruning and edge early-exit inference.
- **Multimodal LLM Pruning**: No new papers today.
- **Continual Learning**: 4 new papers cover uncertainty-aware traversability, sparsity-based class-incremental learning, recursive self-improvement for scientific agents, and RFF backdoors.
- **Event-Based Vision**: 2 new papers on event-based egocentric 3D hand mesh reconstruction and semantic hypergraph distillation pretraining.
- **3D Point Cloud Perception**: 3 new papers on lidar SSC priors, neuro-symbolic driving caption data, and visual embodiment dependence in visuomotor policies.
- **3D Point Cloud Perception and Tracking**: 2 new papers on reliability-aware vote aggregation and pretrained geometric priors for 3D SOT.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [Universal Defenses for Tool-Integrated LLM Agents Against Adversarial Attacks](http://arxiv.org/abs/2609.16098v1)
X. Li and Y. Wang; 2026-09-14. Contribution: Defenses for tool-integrated agents against prompt injection and adversarial attacks. Relevance: Core tool-use agent security.
#### [BLINDSPOT: A Benchmark for Safety and Refusal Calibration in Long-Horizon Tool-Using Agents](http://arxiv.org/abs/2609.16305v1)
S. Asif et al.; 2026-09-14. Contribution: Safety/refusal benchmark for long-horizon tool-using agents. Relevance: Evaluates multi-turn agent safety.
#### [Spurious Tool Use: When RL Agents Learn the Wrong Reason to Act](http://arxiv.org/abs/2609.16268v1)
Y. Yang et al.; 2026-09-14. Contribution: Identifies spurious tool-use policies learned by RL. Relevance: Improves reliability of learned tool-use agents.
#### [Turn-level Multiscale Density Ratio Estimation for LLM Agents](http://arxiv.org/abs/2609.16760v1)
Z. Zhao et al.; 2026-09-15. Contribution: Density-ratio estimation for multi-step LLM agent post-training. Relevance: Turn-level credit for agentic learning.
#### [Interpreting and Steering LLM Agents for Social Simulations](http://arxiv.org/abs/2609.16436v1)
J. G. Fan et al.; 2026-09-14. Contribution: Interprets and steers LLM agents in social simulations. Relevance: Agent interpretability and control.
#### [Agentic Search Spaces for Tabular Machine Learning](http://arxiv.org/abs/2609.16309v1)
R. Sergazinov et al.; 2026-09-14. Contribution: LLM agents design HPO search spaces for tabular ML. Relevance: Applied agentic ML automation.
#### [Self-Emergence Agent Architecture: Behavior-Inertia HMM, Reflexive Metacognition, and Social-Contrastive Self-Modeling](http://arxiv.org/abs/2609.17331v1)
X. Liu; 2026-09-15. Contribution: Architecture for personality drift, reflection, and self-other boundaries. Relevance: Agent self-modeling.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Why LLM Agents Collapse Without Oversight: The Enforcement Gap as the Mechanism Behind Emergence World Failures](http://arxiv.org/abs/2609.15293v1)
Y. Wang; 2026-09-14. Contribution: Explains unsupervised multi-agent collapse via enforcement gap. Relevance: Multi-agent oversight.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [ActGuard: Pre-execution Action Auditing Against Indirect Prompt Injection in LLM Agents](http://arxiv.org/abs/2609.14987v1)
B. Wang et al.; 2026-09-14. Contribution: Pre-execution action auditing against indirect prompt injection. Relevance: Agent tool-use security.

### Agent Test-Time Scaling and Self-Improvement
#### [Grounding SWE-Agent Decisions in Architecture-0 Design: Navigating Unknown Unknowns through Physical Mapping](http://arxiv.org/abs/2609.17221v1)
Z. Wang and Y. Liu; 2026-09-15. Contribution: Studies SWE-agents navigating unknown unknowns in early design. Relevance: Agent decision-making under uncertainty.
#### [Right Direction, Wrong Step: Geometric Analysis of Finite-Step Failure in Looped Transformers](http://arxiv.org/abs/2609.16665v1)
Z. Guo et al.; 2026-09-15. Contribution: Geometric analysis of iterative latent reasoning failures. Relevance: Informs test-time scaling with looped transformers.
#### [Constant Swap Regret in General-Sum Games via Optimistic Transition Matrices](http://arxiv.org/abs/2609.16751v1)
T. Mai; 2026-09-15. Contribution: Deterministic uncoupled dynamics with constant individual swap regret. Relevance: Multi-agent self-improvement dynamics.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [When Agents Slow Down: Understanding LLM Agents' Test-Time Strategies via Elo-per-token Analysis](http://arxiv.org/abs/2609.15309v1)
K. Liu et al.; 2026-09-14. Contribution: Elo-per-token analysis of agent test-time strategies. Relevance: Measures adaptive test-time compute.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Intelligence Under Time Constraints: Rethinking Test-Time Compute](http://arxiv.org/abs/2609.14995v2)
X. Zhang; 2026-09-14. Contribution: Studies when to start computation under streaming constraints. Relevance: Test-time compute scheduling.

## 具身智能
### Vision-Language-Action Models
#### [sensVLA: Spatially-Grounded Vision-Language-Action Model for Autonomous Wheel Loader](http://arxiv.org/abs/2609.17021v1)
G. K. Erabati et al.; 2026-09-15. Contribution: Qwen3-2B VLM plus trainable action expert for wheel-loader control. Relevance: Real-world VLA with geometry/proprioception.
#### [SAVLA: Symmetry-Aware Vision-Language-Action Models for Robotic Manipulation](http://arxiv.org/abs/2609.16641v1)
J. Li et al.; 2026-09-15. Contribution: Symmetry-aware VLA to improve spatial competence. Relevance: Core VLA generalization.
#### [Dense to MoE Adaptation for Compact Vision Language Action Policies](http://arxiv.org/abs/2609.16503v1)
M. Niu et al.; 2026-09-15. Contribution: Reduces LLM-side parameters via MoE adaptation. Relevance: Compact VLA deployment.
#### [TEMPO: Learning Temporal Context for Dynamic Robot Manipulation](http://arxiv.org/abs/2609.16864v1)
Z. Feng et al.; 2026-09-15. Contribution: Adds temporal context to VLA for dynamic manipulation. Relevance: Addresses single-observation VLA limits.
#### [Intrinsic Robot Rewarding: Reusing VLA Representations for Autonomous Evaluation and Policy Improvement](http://arxiv.org/abs/2609.17115v1)
T. Schaffer et al.; 2026-09-15. Contribution: Reuses VLA representations for robot reward and policy improvement. Relevance: VLA-based self-evaluation.
#### [SWIM: Vision-Language-Grounded Soft Whole-Body Interactive Manipulation](http://arxiv.org/abs/2609.17035v1)
T. Liu et al.; 2026-09-15. Contribution: Maps RGB and language to whole-body soft robot actuation. Relevance: VLA for soft manipulation.
#### [FluxVLA Engine: A One-Stop VLA Engineering Platform for Embodied Intelligence](http://arxiv.org/abs/2609.17210v1)
Y. Li et al.; 2026-09-15. Contribution: Engineering platform for VLA/WAM/offline RL workflows. Relevance: Embodied policy infrastructure.
#### [World Models for Embodied Intelligence: From Plausible to Controllable to Actionable](http://arxiv.org/abs/2609.16697v1)
N. Yao et al.; 2026-09-15. Contribution: Reviews world models for control and action. Relevance: World models for embodied VLA.
#### [The Robot Data Factory](http://arxiv.org/abs/2609.16705v1)
S. Haddadin et al.; 2026-09-15. Contribution: Argues robot experience is the core Physical AI resource. Relevance: Data/experience infrastructure.
#### [XRoboToolKit-T: Teleoperation with High Stability and Precision with Tactile Sensing for Contact-rich Manipulation](http://arxiv.org/abs/2609.16437v1)
X. Dengxiong et al.; 2026-09-14. Contribution: Tactile teleoperation for contact-rich manipulation data. Relevance: VLA data collection.

### Embodied Navigation
#### [ENCP: Episode-Normalized Conformal Prediction for Vision-and-Language Navigation](http://arxiv.org/abs/2609.17499v1)
V. Feliren et al.; 2026-09-15. Contribution: Conformal uncertainty estimation for VLN. Relevance: Safer navigation decisions.
#### [DriveMCP: An Agentic AI framework for Advanced Driver Assistance System](http://arxiv.org/abs/2609.17247v1)
F. Nadiri et al.; 2026-09-15. Contribution: Modular agentic ADAS integrating perception, compliance, and safety. Relevance: Embodied driving/navigation.
#### [TEDi: Temporal Memory-Enhanced and Denoising Transformer for Surgical Instrument Segmentation](http://arxiv.org/abs/2609.16797v1)
J. Yuan et al.; 2026-09-15. Contribution: Temporal memory and denoising transformer for surgical instrument segmentation. Relevance: Embodied scene understanding.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [HarnessVLN: Unifying Training-Free Embodied Navigation through an Agent Harness](http://arxiv.org/abs/2609.15195v1)
Y. Chen et al.; 2026-09-14. Contribution: Training-free embodied navigation via an agent harness. Relevance: Unifies VLN and object-goal navigation.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [ECHO: Early-layer Collaborative Hierarchical Orchestration with Bonus Logits in Speculative Decoding](http://arxiv.org/abs/2609.17241v1)
Z. Ma et al.; 2026-09-15. Contribution: Hierarchical dual-loop speculative decoding. Relevance: LLM inference speedup.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Don't Send What You Don't Need: Question-Guided Token Pruning as a Privacy Defense for Vision-Language Models](http://arxiv.org/abs/2609.15671v1)
M. K. Syfullah and A. A. Khalil; 2026-09-14. Contribution: Question-guided token pruning for privacy in VLMs. Relevance: Token pruning and inference optimization.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Proportional-Fair Resource Allocation and Dual-Threshold Early-Exit Inference for Secure Cooperative Multi-Layer Edge Intelligence](http://arxiv.org/abs/2609.15847v1)
T. T. Vu et al.; 2026-09-14. Contribution: Fair resource allocation and dual-threshold early-exit inference. Relevance: Edge inference optimization.

### Continual Learning
#### [Continual Learning for Traversability Prediction with Uncertainty-Aware Adaptation](http://arxiv.org/abs/2609.17141v1)
H. Lee et al.; 2026-09-15. Contribution: Uncertainty-aware continual learning for traversability prediction. Relevance: Continual learning in robotics.
#### [CLARE: Scalable Class-Incremental Continual Learning via a Sparsity-Based Framework](http://arxiv.org/abs/2609.17026v1)
Y. Fu et al.; 2026-09-15. Contribution: Sparsity-based class-incremental continual learning. Relevance: Scalable continual learning.
#### [ScienceBuddy: Recursive-in-Recursive Self-Improvement for Interactive Scientific Agents](http://arxiv.org/abs/2609.17523v1)
S. Xue et al.; 2026-09-15. Contribution: Interactive workspace with continually improving scientific agents. Relevance: Self-improvement/continual agents.
#### [Implementing a White-Box Undetectable Backdoor for Random Fourier Features](http://arxiv.org/abs/2609.16403v1)
M. Collins et al.; 2026-09-14. Contribution: White-box undetectable backdoor for RFF. Relevance: Security in continual/online learning.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Sylvas: Synergistic Learning Value based Device Scheduling in Federated Continual Learning](http://arxiv.org/abs/2609.15763v1)
Y. Sun et al.; 2026-09-14. Contribution: Value-based device scheduling in federated continual learning. Relevance: Federated continual learning.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Pre-PEFT Probing: Weight Statistics and Perturbation Robustness for Layer Selection in VLM Vision Encoders](http://arxiv.org/abs/2609.15229v1)
Q. Xia et al.; 2026-09-14. Contribution: Pre-PEFT probing for VLM layer selection. Relevance: Parameter-efficient adaptation.

## 视觉感知
### Event-Based Vision
#### [EventEgoHands++: Event-based Egocentric 3D Hand Mesh Reconstruction with Real Dataset](http://arxiv.org/abs/2609.17189v1)
R. Hara et al.; 2026-09-15. Contribution: Event-based egocentric 3D hand mesh reconstruction with real dataset. Relevance: Event vision for hand perception.
#### [Hyper-RED: Scalable Event Pre-training via Semantic Hypergraph Distillation](http://arxiv.org/abs/2609.16811v1)
M. Wang et al.; 2026-09-15. Contribution: Semantic hypergraph distillation for scalable event pretraining. Relevance: Event representation learning.

### 3D Point Cloud Perception
#### [SSC-Priors: Exploring Semantic and Visibility Priors to Boost Lidar Semantic Scene Completion](http://arxiv.org/abs/2609.17413v1)
T. Martyniuk et al.; 2026-09-15. Contribution: Semantic and visibility priors for lidar semantic scene completion. Relevance: 3D point cloud scene perception.
#### [NeuroSymbEAD: A Large Scale Neuro-Symbolic Caption Dataset for Omni-Directional Embodied Autonomous Driving](http://arxiv.org/abs/2609.16919v1)
M. A. U. Khan et al.; 2026-09-15. Contribution: Neuro-symbolic caption dataset with ego-centric KG for driving. Relevance: 3D perception and embodied driving data.
#### [Rethinking Visual Embodiment Dependence in Visuomotor Policies](http://arxiv.org/abs/2609.16815v1)
H. Fang et al.; 2026-09-15. Contribution: Studies visual embodiment dependence via cue-conflict interventions. Relevance: Visuomotor policy perception.

### 3D Point Cloud Perception and Tracking
#### [SAVTrack: Selective Vote Aggregation for Reliability-Aware Point Cloud Tracking](http://arxiv.org/abs/2609.16662v1)
S. Zhou et al.; 2026-09-15. Contribution: Selective vote aggregation for reliability-aware point cloud tracking. Relevance: 3D SOT under sparse observations.
#### [MAETrack: Unleashing the Potential of Pretrained Geometric Priors for 3D Single Object Tracking](http://arxiv.org/abs/2609.16695v1)
S. Zhou et al.; 2026-09-15. Contribution: Uses pretrained geometric priors for 3D single object tracking. Relevance: 3D SOT representation learning.

## Cross-Topic Signals
- Tool-use agent safety and robustness span **LLM Agent Engineering** and **Agent Test-Time Scaling**: defenses, pre-execution auditing, long-horizon refusal, and spurious tool-use analysis.
- VLA and embodied perception increasingly share data/experience infrastructure: **Robot Data Factory**, **FluxVLA**, **NeuroSymbEAD**, **XRoboToolKit-T**, and world models.
- Test-time scaling and inference optimization converge on compute scheduling: looped transformers, Elo-per-token agent analysis, speculative decoding, and early-exit inference.
- Continual learning and compact adaptation overlap through sparsity, MoE adaptation, probing for layer selection, and uncertainty-aware robot adaptation.
- 3D perception connects to navigation and tracking via lidar SSC, point-cloud SOT, and embodied driving caption datasets.

## Priority Reading
#### [sensVLA: Spatially-Grounded Vision-Language-Action Model for Autonomous Wheel Loader](http://arxiv.org/abs/2609.17021v1)
Concrete real-world VLA integration with Qwen3-2B and an action expert for wheel-loader control; useful for embodied deployment lessons.
#### [Interpreting and Steering LLM Agents for Social Simulations](http://arxiv.org/abs/2609.16436v1)
Addresses interpretability and steering of LLM agents, directly relevant to agent engineering and future agent societies.
#### [ECHO: Early-layer Collaborative Hierarchical Orchestration with Bonus Logits in Speculative Decoding](http://arxiv.org/abs/2609.17241v1)
The only new inference-optimization paper; hierarchical speculative decoding may offer practical LLM serving speedups.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*