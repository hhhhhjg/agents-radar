# Lab Research Topics Radar 2026-09-19

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 38 new + 14 seen in the last 14 days | Generated: 2026-09-18 23:48 UTC

---

## Today's Overview
- **LLM Agent Engineering**: 10 new papers on agent harnesses, replay testing, tool hallucination, RL policy optimization, web-search behavior, embodied planning, auto-research loops, overclaiming, trading-agent security, and data selection.
- **Agent Test-Time Scaling and Self-Improvement**: 3 new papers on candidate-generation strategy, self-play equilibrium steering, and dynamic-state reasoning benchmarks.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: 11 new papers on VLA post-training, federated training, adversarial effects, pruning recovery, diffusion sampling, action chunking, trace-guided policies, dexterous post-training, and planning skips.
- **Embodied Navigation**: 5 new and 5 seen papers spanning cooperative Gaussian scene understanding, monocular VLN, negative-event safety, open-vocabulary 3D segmentation, 4D radar review, and repeated VLN/UAV/gigapixel/traffic works.
- **LLM Pruning and Inference Optimization**: No new papers today; 1 seen paper on calibrated quality measurement for inference optimizations.
- **Multimodal LLM Pruning**: 1 new paper on query-conditioned visual-token pruning.
- **Continual Learning**: 4 new and 4 seen papers on point-cloud PEFT, long-horizon agent architecture, post-hoc JANUS rectification, neuro-symbolic UAV agents, and repeated continual segmentation/routing works.
- **Event-Based Vision**: 3 new and 1 seen papers on velocity-invariant representations, tiny-object detection, spiking state-space perception, and spike-driven tracking.
- **3D Point Cloud Perception**: 3 new and 3 seen papers on open-vocabulary 3D detection, urban building segmentation, PBR Gaussian assets, indoor MLS datasets, 4D radar preprocessing, and collaborative perception.
- **3D Point Cloud Perception and Tracking**: No new papers today.

**Research Areas**

## LLM Agent 与多智能体

### LLM Agent Engineering
#### [How Do Agent Harnesses Create Value? Planning Information and Release Control in Stateful LLM Agents](http://arxiv.org/abs/2609.20474v1)
Y. Zhang, K. Xu, Y. Chen | 2026-09-17. Studies plan guidance and release control in stateful agents. Relevance: harness design for success/cost.

#### [Dual-Axis Policy Optimization for LLM Agents: Bayesian Feedback Attribution and Trajectory Mass Normalization](http://arxiv.org/abs/2609.19830v1)
Y. Zhuang et al. | 2026-09-17. RL splits intra-trajectory feedback and inter-trajectory aggregation. Relevance: agent policy optimization.

#### [Chronicle: Cut-Point Replay for Regression Testing of LLM Agents](http://arxiv.org/abs/2609.20625v1)
T. Chawla, S. Koul | 2026-09-17. Cut-point replay reproduces non-deterministic agent failures. Relevance: regression testing.

#### [Closed-World Resolution Against Tool Hallucination in LLM Agents](http://arxiv.org/abs/2609.19425v1)
L. G. Iyer | 2026-09-16. Closed-world resolution blocks nonexistent tool calls and invalid arguments. Relevance: tool-use safety.

#### [Characterizing Web Search by Conversational LLM Agents: From Search Decisions and Strategies to Results and Responses](http://arxiv.org/abs/2609.19244v1)
M. Amani et al. | 2026-09-16. Maps end-to-end web-search lifecycle across conversational platforms. Relevance: agent search behavior.

#### [DeliveryGym: An RL Environment for Long-Horizon Embodied Agent Planning with Adaptive Curriculum](http://arxiv.org/abs/2609.19801v1)
H. Kang et al. | 2026-09-17. RL environment for long-horizon embodied planning with adaptive curriculum. Relevance: embodied agent evaluation.

#### [SoL-Pi: Recursively Scaling Auto-Research Loops for Efficient Agent Harness](http://arxiv.org/abs/2609.20519v1)
H. Liu et al. | 2026-09-17. Recursively scales auto-research loops for token-efficient agent harness. Relevance: self-improving coding agents.

#### [Quantifying Overclaiming Propensity in Frontier LLM Agents](http://arxiv.org/abs/2609.20812v1)
N. Smyth et al. | 2026-09-17. Quantifies coding agents' overclaiming of task completion. Relevance: agent trust and evaluation.

#### [SoK: Trading Agents or Market Crashers? Dissecting Robustness and Security Failures in Academic Financial LLM Trading Schemes](http://arxiv.org/abs/2609.19705v1)
M. Wang, N. Saxena | 2026-09-17. Dissects robustness/security failures in financial LLM trading agents. Relevance: domain-specific agent security.

#### [AutoData: Agentic Search for Pre-training Data Selection](http://arxiv.org/abs/2609.19754v1)
Y. Meng et al. | 2026-09-17. Agentic search optimizes pre-training data selection. Relevance: agents in data-centric optimization.

### Agent Test-Time Scaling and Self-Improvement
#### [Sample Count Is Not Enough: Candidate-Generation Strategy Shapes the Energy and Performance of LLM Test-Time Scaling](http://arxiv.org/abs/2609.19499v1)
M. Kashaniyan, A. Jannesari | 2026-09-16. Candidate-generation strategy, not just N, affects energy/performance. Relevance: test-time scaling efficiency.

#### [Steering Equilibrium Selection in Regularized Self-Play via the Reference Policy](http://arxiv.org/abs/2609.19820v1)
L. Leal | 2026-09-17. Reference policy steers equilibrium selection in regularized self-play. Relevance: self-play improvement.

#### [PetriBench: Benchmarking LLM Reasoning over Dynamic State Spaces](http://arxiv.org/abs/2609.19883v1)
P. Koussios et al. | 2026-09-17. Compact scalable benchmark for dynamic-state reasoning. Relevance: test-time reasoning evaluation.

## 具身智能

### Vision-Language-Action Models
#### [HIL-UMI: Bringing Human-in-the-Loop Post-Training of Vision-Language-Action Models to Universal Manipulation Interface](http://arxiv.org/abs/2609.20659v1)
Z. Han et al. | 2026-09-17. Human-in-the-loop post-training for VLA on UMI. Relevance: VLA deployment adaptation.

#### [Co-VLA: Consensus-based Federated Training for Vision-Language-Action Models](http://arxiv.org/abs/2609.19923v1)
H. Li et al. | 2026-09-17. Consensus-based federated training across distributed robots. Relevance: scalable VLA data.

#### [Beyond Patch Removal: Persistent Adversarial Effects in Vision-Language-Action Policies](http://arxiv.org/abs/2609.19669v1)
E. Wu et al. | 2026-09-17. Separates immediate and persistent adversarial VLA effects. Relevance: VLA safety.

#### [Recovering Aggressively Pruned Vision-Language-Action Models with Offline Hidden-State Distillation](http://arxiv.org/abs/2609.19579v1)
C. Kim et al. | 2026-09-17. Offline hidden-state distillation recovers pruned VLA backbones. Relevance: VLA compression.

#### [FASA: Feedback-Aware Sampling Adaptation for Efficient Diffusion-Based VLA Models](http://arxiv.org/abs/2609.19475v1)
Y. Han et al. | 2026-09-16. Feedback-aware sampling accelerates diffusion VLA. Relevance: inference efficiency.

#### [GeoAAC: Geometry-Based Adaptive Action Chunking from Denoising Trajectories in VLA Policies](http://arxiv.org/abs/2609.20776v1)
X. Chen et al. | 2026-09-17. Geometry-based adaptive action chunking from denoising trajectories. Relevance: VLA control.

#### [TraceFlow: Guiding Frozen Flow-Matching Robot Policies with Success and Failure Traces](http://arxiv.org/abs/2609.20646v1)
J. Zhang et al. | 2026-09-17. Success/failure traces guide frozen flow-matching VLA. Relevance: test-time VLA adaptation.

#### [Towards High-DoF Dexterous Manipulation through VLA Post-Training](http://arxiv.org/abs/2609.19666v1)
J. Zhu et al. | 2026-09-17. VLA post-training for high-DoF dexterous hands. Relevance: downstream VLA deployment.

#### [SkipVLA: Skipping VLA Steps with Classical Planning for Fast Robot Manipulation](http://arxiv.org/abs/2609.20648v1)
K. Agrawal et al. | 2026-09-17. Classical planning skips VLA steps for fast manipulation. Relevance: VLA speed.

### Embodied Navigation
#### [CoRef-GS: Cooperative Referring Gaussian Splatting for Multi-Agent Scene Understanding](http://arxiv.org/abs/2609.20586v1)
Z. Zhou et al. | 2026-09-17. Cooperative referring Gaussian splatting for multi-agent grounding. Relevance: embodied scene understanding.

#### [Navi-Agent: Unlocalized Monocular Navigation Agent](http://arxiv.org/abs/2609.20388v1)
W. Xie et al. | 2026-09-17. Monocular navigation agent for zero-shot VLN-CE. Relevance: continuous navigation.

#### [Absence is Presence: Understanding Visual Scene Negative Events Under Safety Cognitive Constraint](http://arxiv.org/abs/2609.19812v1)
Z. Jiang et al. | 2026-09-17. Captions safety-critical absent visual elements. Relevance: navigation scene risk.

#### [SenseFuse: Label-Free Fusion of Image and Shape Encoders for Open-Vocabulary 3D Instance Segmentation](http://arxiv.org/abs/2609.20475v1)
E. Han et al. | 2026-09-17. Label-free image/shape fusion for open-vocab 3D segmentation. Relevance: robotic scene understanding.

#### [4D Radar Perception Algorithms for Autonomous Driving: A Review](http://arxiv.org/abs/2609.19216v1)
X. Wu et al. | 2026-09-16. Reviews 4D radar perception from signal processing to scene reconstruction. Relevance: navigation perception.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [AdaGeoVLN: Selective Geometry Across Representation Depth and Navigation Time for Vision-Language Navigation](http://arxiv.org/abs/2609.18789v1)
Q.-D. Pham et al. | 2026-09-16. Selective geometry across depth/time for VLN. Relevance: geometry-aware navigation.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [GroundingVLN: Reasoning and Acting with Grounding for Vision-Language Navigation](http://arxiv.org/abs/2609.18581v1)
K. Li et al. | 2026-09-16. Grounding connects VLN reasoning with spatial execution. Relevance: grounded navigation.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Sim-to-Real Traffic Scene Understanding by Decoupling Semantics from Caption Generation with V-JEPA](http://arxiv.org/abs/2609.18562v1)
N. H. T. Bui et al. | 2026-09-16. Decouples semantics from caption generation for traffic VQA. Relevance: sim-to-real embodied perception.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [UAVs Meet Embodied Intelligence: Bridging Human Intents and Flying Dynamics Via Harnessing Physical-Digital AI Agents](http://arxiv.org/abs/2609.18326v1)
Y. Tian et al. | 2026-09-16. Couples foundation models and physical AI agents for UAVs. Relevance: embodied aerial navigation.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Understanding Dynamic Scenes at Gigapixel Scale: Wide-Area Spatio-Temporal Perception from UAVs](http://arxiv.org/abs/2609.18210v1)
Y. Zhu et al. | 2026-09-16. Wide-area spatio-temporal scene understanding from UAVs. Relevance: aerial navigation perception.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization
🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [A Calibrated Instrument for Measuring How Inference Optimizations Affect Output Quality](http://arxiv.org/abs/2609.18005v1)
J. Kaplan | 2026-09-16. Calibrated instrument measures output-quality effects of inference optimizations. Relevance: evaluation for pruning/inference methods.

### Multimodal LLM Pruning
#### [QCPruner: Query-Conditioned Population Coverage for Visual Token Pruning](http://arxiv.org/abs/2609.19990v1)
S. He et al. | 2026-09-17. Query-conditioned population coverage for visual-token pruning. Relevance: MLLM inference efficiency.

### Continual Learning
#### [GAPrompt++: Multi-Granular Geometry-Aware Point Cloud Prompt for 3D Vision Model](http://arxiv.org/abs/2609.19716v1)
Z. Ai et al. | 2026-09-17. PEFT prompt for 3D vision models. Relevance: efficient adaptation.

#### [An Architecture for Long-Horizon Agents: Levels, Ticks and Cascaded Intelligence](http://arxiv.org/abs/2609.19519v1)
E. Nijkamp et al. | 2026-09-17. Levels/ticks/cascaded intelligence for long-horizon agents. Relevance: continual long-horizon operation.

#### [Past, Future, All at Once: Mitigating Stability-Plasticity Dilemma via Post-hoc JANUS Rectification](http://arxiv.org/abs/2609.19985v1)
Z. Zheng et al. | 2026-09-17. Post-hoc JANUS rectification mitigates catastrophic forgetting. Relevance: continual learning.

#### [Neuro-Symbolic Agentic AI for Networked Low-Altitude UAVs](http://arxiv.org/abs/2609.19961v1)
Y. Ping et al. | 2026-09-17. Neuro-symbolic agentic decision-making for UAVs. Relevance: adaptive continual agents.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [MCLC-NET: Multimodal Continual Learning for Leaf Counting](http://arxiv.org/abs/2609.18129v1)
R. Bhatt et al. | 2026-09-16. Multimodal continual learning for leaf counting. Relevance: continual multimodal adaptation.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [CERA-MoA: Co-Evolving Routing Mechanisms with Continually Learning LLM Agents](http://arxiv.org/abs/2609.18779v1)
J. Jiang et al. | 2026-09-16. Co-evolves routing and continually learning LLM agents. Relevance: agent continual learning.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Position Anchor Tuning: Towards Efficient Adaptation of Pre-Trained Point Cloud Transformers](http://arxiv.org/abs/2609.18056v1)
Z. Liu et al. | 2026-09-16. Position-anchor tuning for point cloud transformers. Relevance: efficient adaptation.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [DR.WILSS: Diffusion-Based Replay for Weakly Supervised Continual Semantic Segmentation](http://arxiv.org/abs/2609.18444v1)
L. A. Marx et al. | 2026-09-16. Diffusion-based replay for weakly supervised continual segmentation. Relevance: continual segmentation.

## 视觉感知

### Event-Based Vision
#### [An Event Preserving Velocity Invariant Representation for Event Cameras](http://arxiv.org/abs/2609.19973v1)
M. Ikura et al. | 2026-09-17. Event-preserving velocity-invariant representation. Relevance: event-camera perception.

#### [PointEvent: Rethinking Event-based Tiny Object Detection via Serialized Motion Evidence Accumulation](http://arxiv.org/abs/2609.20066v1)
Z. Wu et al. | 2026-09-17. Serialized motion evidence accumulation for tiny-object detection. Relevance: event-based detection.

#### [REACT: A Fully Spiking State-Space Model for Real-Time Event-Driven Temporal Perception](http://arxiv.org/abs/2609.19204v1)
G. Keime et al. | 2026-09-16. Fully spiking state-space model for event-driven perception. Relevance: real-time event vision.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Mask IPL: Noise-Free Intrinsic Position Learning via Computation Graph Clipping for Event-Based Spike-Driven Tracking](http://arxiv.org/abs/2609.18716v1)
Y. Shan, M. Zhang | 2026-09-16. Graph clipping for event-based spike-driven tracking. Relevance: event tracking.

### 3D Point Cloud Perception
#### [Open-vocabulary 3D object detection with promptable segmentation](http://arxiv.org/abs/2609.19358v1)
Ö. F. Deniz, M. T. Koçyiğit | 2026-09-16. Training-free open-vocabulary 3D detection via promptable segmentation. Relevance: open-vocab 3D perception.

#### [Instance Segmentation and Fine-grained Classification for Urban Buildings with Adaptive Region Dividing and Spatially-Supervised Contrastive Learning](http://arxiv.org/abs/2609.19631v1)
W. Zhang et al. | 2026-09-17. Adaptive region dividing and contrastive learning for urban building point clouds. Relevance: large-scale 3D scene understanding.

#### [GS-PI: An Optimization-Decoupled Appearance Decomposition Approach for Generating PBR Gaussian Assets](http://arxiv.org/abs/2609.19907v1)
J. Xu et al. | 2026-09-17. Optimization-decoupled appearance decomposition for PBR Gaussian assets. Relevance: 3D asset perception/rendering.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Semantic-ITC: A Frame-wise Indoor Mobile Laser Scanning Dataset and Benchmark for Semantic Segmentation](http://arxiv.org/abs/2609.18493v1)
H. Wu et al. | 2026-09-16. Frame-wise indoor MLS dataset and benchmark for segmentation. Relevance: point cloud semantic segmentation.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Accuracy- and Real-Time-Aware 4D Radar Preprocessing for Autonomous Driving Perception Systems](http://arxiv.org/abs/2609.18542v1)
W.-J. Jung et al. | 2026-09-16. Accuracy/real-time-aware 4D radar preprocessing. Relevance: embedded 3D perception.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Learning from Distributed Eyes: Leveraging Collaborative Perception for Automated Model Adaptation](http://arxiv.org/abs/2609.18511v1)
Y. Ma et al. | 2026-09-16. Collaborative perception for automated model adaptation. Relevance: distributed 3D perception.

## Cross-Topic Signals
- Agent reliability and verification recur across harness/replay work, tool hallucination, overclaiming, and dynamic-state reasoning benchmarks.
- VLA efficiency links pruning recovery, diffusion sampling adaptation, adaptive action chunking, trace-guided policies, and classical planning skips.
- Continual/adaptive agent systems connect long-horizon architectures, post-hoc rectification, co-evolving MoA routing, and embodied RL planning.
- Embodied navigation increasingly fuses VLA-style policies, open-vocabulary 3D segmentation, event/radar perception, and cooperative Gaussian scene representations.
- Test-time scaling is appearing beyond pure sampling: trace-guided VLA control, self-play equilibrium steering, and reasoning benchmarks over state spaces.

## Priority Reading
#### **Recovering Aggressively Pruned Vision-Language-Action Models with Offline Hidden-State Distillation** — directly addresses VLA compression and recovery, a high-value intersection of VLA and multimodal pruning/inference optimization.
#### **TraceFlow: Guiding Frozen Flow-Matching Robot Policies with Success and Failure Traces** — concrete test-time adaptation for frozen VLA policies, bridging VLA deployment and self-improvement.
#### **CERA-MoA: Co-Evolving Routing Mechanisms with Continually Learning LLM Agents** — connects multi-agent routing, LLM agent engineering, and continual learning in one adaptive system.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*