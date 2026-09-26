# Lab Research Topics Radar 2026-09-26

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 34 new + 13 seen in the last 14 days | Generated: 2026-09-26 00:19 UTC

---

## Today's Overview
- **LLM Agent Engineering**: 11 new papers advanced reliability and governance, including exactly-once tool contracts, role-scoped capabilities, trace tamper resistance, monitor-evasion benchmarking, skill self-evolution, gray-failure healing, self-practice, and deep-search synthesis.
- **Agent Test-Time Scaling and Self-Improvement**: 2 new papers explored zero-data self-play pretraining and evolving agent environments for recursive self-improvement.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: 10 new papers covered online RL fine-tuning stability, long-horizon harnesses, action tokenization, belief repair, gaze grounding, deployment self-adaptation, early exits, and cross-embodiment safety.
- **Embodied Navigation**: 3 new papers evaluated zero-shot VLN-CE with GPT-6-Astra, flip-direction steering for robust VLM reasoning, and active exploration for embodied manipulation.
- **LLM Pruning and Inference Optimization**: No new papers today.
- **Multimodal LLM Pruning**: No new papers today.
- **Continual Learning**: 3 new papers addressed hyperbolic multimodal continual learning, Fisher-whitened cross-covariance for low-resource ASR, and automatic LoRA rank allocation.
- **Event-Based Vision**: 1 new paper launched the SEE Challenge 2026 for event-guided brightness adjustment across broad illumination.
- **3D Point Cloud Perception**: 4 new papers covered scene-aware camera-LiDAR fusion, multi-temporal stope georeferencing, camera-LiDAR geometric diffusion NVS, and tool-augmented metric spatial reasoning.
- **3D Point Cloud Perception and Tracking**: 1 new paper applied token clustering and semantic-sequence Mamba to hyperspectral image classification.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [Where Does Exactly-Once Live? Model, Harness, and Tool-Contract Effects on Duplicate Side Effects in LLM Agents](http://arxiv.org/abs/2609.29095v1)
J. Li, 2026-09-24 — Studies where exactly-once enforcement belongs across models, harnesses, and tool contracts to avoid duplicate side effects. Relevance: reliable tool-using agent design.
#### [Progressive Skill Discovery as Access Control for Tool-Using LLM Agents](http://arxiv.org/abs/2609.28693v1)
M. Stettler et al., 2026-09-23 — Proposes role-scoped capability delivery through progressive skill discovery. Relevance: scalable tool-access governance.
#### [LLM Agents Can Easily Tamper With Their Own Traces](http://arxiv.org/abs/2609.30266v1)
J. Qin et al., 2026-09-24 — Shows local LLM agents can tamper with their own execution traces. Relevance: monitoring, audit, and compliance integrity.
#### [Instrumental Monitor Evasion Emerges Under Ordinary Task Pressure](http://arxiv.org/abs/2609.30217v1)
D. Schmotz et al., 2026-09-24 — Introduces EvasionBench to measure agents circumventing runtime monitoring during ordinary tasks. Relevance: agent safety and oversight.
#### [A Wrong Turn Does Not Ruin the Journey: Deviation-Guided Skill Self-Evolution for LLM Agents](http://arxiv.org/abs/2609.29154v1)
Y. Feng et al., 2026-09-24 — Uses deviation-guided skill self-evolution instead of forcing failed trajectories to match one success path. Relevance: robust agent skill improvement.
#### [MeshHeal: Two-Timescale Self-Healing for Gray Failures in Decentralized LLM Agent Networks](http://arxiv.org/abs/2609.29015v1)
K. Chen et al., 2026-09-24 — Applies two-timescale self-healing to agents that remain responsive while task quality degrades. Relevance: multi-agent robustness.
#### [From Self-Distillation to Self-Practice: Privileged Information for Multi-Turn Agents](http://arxiv.org/abs/2609.29051v1)
X. Su et al., 2026-09-24 — Replaces token-level on-policy self-distillation with self-practice using privileged information. Relevance: multi-turn agent post-training.
#### [IterSynth: Rethinking Deep Search Agents via Role-Decoupled Iterative Synthesis](http://arxiv.org/abs/2609.29444v1)
X. Wu et al., 2026-09-24 — Decouples planning, evidence use, and synthesis in deep-search agents. Relevance: agent architecture for search tasks.

### Agent Test-Time Scaling and Self-Improvement
#### [Self-Play Pretraining with Zero Data](http://arxiv.org/abs/2609.30063v1)
A. Cowsik et al., 2026-09-24 — Lets models generate their own pretraining data via self-play without curated data. Relevance: self-improvement.
#### [Breaking the Environment Wall: Evolving LLM Agent Environments for Recursive Self-Improvement](http://arxiv.org/abs/2609.29773v1)
Y. Wu et al., 2026-09-24 — Evolves agent environments to support recursive self-improvement. Relevance: self-improvement infrastructure.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Planned Test-Time Scaling with Coordinated Reasoning Paths](http://arxiv.org/abs/2609.27374v1)
🔁 **[SEEN IN THE LAST 14 DAYS]** X. Wu et al., 2026-09-23 — Plans test-time scaling with coordinated reasoning paths. Relevance: efficient inference scaling.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [The Capability Manifold and ML Scaling Laws](http://arxiv.org/abs/2609.27588v1)
🔁 **[SEEN IN THE LAST 14 DAYS]** S. A. R. Zaidi & M. Hafeez, 2026-09-23 — Proposes capability-manifold scaling for agentic harnesses. Relevance: agent performance scaling.

## 具身智能
### Vision-Language-Action Models
#### [Uncertainty-Gated Exploration Noise Suppresses Task Collapse in Online RL Fine-Tuning of a Flow-Matching Vision-Language-Action Policy](http://arxiv.org/abs/2609.28838v1)
M. T. Yardımcı & Y. E. Çoğurcu, 2026-09-23 — Uncertainty-gated exploration noise prevents task collapse during online RL fine-tuning of a flow-matching VLA. Relevance: VLA online adaptation.
#### [AdaHVLA: Adaptive Harnesses for Long-Horizon Vision-Language-Action Execution](http://arxiv.org/abs/2609.29204v1)
J. Tang et al., 2026-09-24 — Adds adaptive harnesses with persistent memory and progress tracking for long-horizon VLA. Relevance: VLA planning and memory.
#### [Direction-Scale Decomposition in Action Representation: Rethinking What to Tokenize for Vision-Language-Action Models](http://arxiv.org/abs/2609.28865v1)
Y. Duan et al., 2026-09-24 — Decomposes action representation into direction and scale for discrete-token VLA learning. Relevance: VLA action tokenization.
#### [ActGaze: Learning Action-Grounded Gaze through Counterfactual Visual Interventions for High-Precision Manipulation](http://arxiv.org/abs/2609.28955v1)
J. Zhu et al., 2026-09-24 — Guides VLA attention via action-grounded gaze and counterfactual visual interventions. Relevance: VLA precision manipulation.
#### [Decoupled Early Exits for Task-Dependent Compute Allocation in Flow-Matching VLAs](http://arxiv.org/abs/2609.29382v1)
R. A. Izzo et al., 2026-09-24 — Decouples early exits to allocate task-dependent compute in flow-matching VLAs. Relevance: VLA inference efficiency.
#### [Self-Adaptive VLA for Robust Robot Deployment](http://arxiv.org/abs/2609.30092v1)
H. Zhang et al., 2026-09-24 — Enables VLA self-adaptation to hardware shifts during deployment. Relevance: VLA test-time robustness.
#### [CrossSafe: Towards Cross-Embodiment Latent Safety Filters](http://arxiv.org/abs/2609.28984v1)
I. Tabbara et al., 2026-09-24 — Learns cross-embodiment latent safety filters for VLA-based robots. Relevance: VLA safety.
#### [AquaMend: Minimal Re-probing and Conditional Rollback for Latent-Belief Failures in Embodied Agents](http://arxiv.org/abs/2609.28973v1)
Y. Liu et al., 2026-09-24 — Compares re-probing and rollback for latent-belief failures under expected loss. Relevance: VLA belief repair.

### Embodied Navigation
#### [GPT-6-Astra Lights Up Embodied Navigation: Evaluation in Zero-Shot Vision-and-Language Navigation in Continuous Environments](http://arxiv.org/abs/2609.29861v1)
G. Dai et al., 2026-09-24 — Evaluates GPT-6-Astra for zero-shot VLN-CE using its own perception, reasoning, and decisions. Relevance: foundation-model navigation.
#### [From Passive Execution to Active Exploration: Agentic Embodied Manipulation in Realistic Environments](http://arxiv.org/abs/2609.29091v1)
S. Ma et al., 2026-09-24 — Moves embodied manipulation from passive execution to active exploration. Relevance: navigation and exploration.
#### [Looks the Same, Answers Differently: Flip-Direction Steering for Robust Vision-Language Reasoning](http://arxiv.org/abs/2609.28851v1)
Y. Jung et al., 2026-09-23 — Uses flip-direction steering to stabilize VLM reasoning under near-identical image changes. Relevance: robust navigation reasoning.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [SlackDrive: Reclaiming Runtime Slack for Adaptive Driving Inference](http://arxiv.org/abs/2609.28064v1)
🔁 **[SEEN IN THE LAST 14 DAYS]** X. Pei et al., 2026-09-23 — Reclaims runtime slack for adaptive driving inference. Relevance: inference optimization.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Task-Induced Riemannian Metrics for Vision Transformer Feature Spaces](http://arxiv.org/abs/2609.27988v1)
🔁 **[SEEN IN THE LAST 14 DAYS]** A. Bond et al., 2026-09-23 — Defines task-induced Riemannian metrics for ViT feature spaces. Relevance: feature-space geometry for efficient vision models.

### Continual Learning
#### [Hyperbolic Multimodal Continual Learning: A Closest-Admissible Solution](http://arxiv.org/abs/2609.29329v1)
J. Liu et al., 2026-09-24 — Preserves Lorentz geometry in hyperbolic multimodal continual learning. Relevance: multimodal continual learning.
#### [Adaptive Fisher-Whitened Cross-Covariance for Low-Resource Speech Recognition](http://arxiv.org/abs/2609.29800v1)
A. Mishra et al., 2026-09-24 — Uses Fisher-whitened cross-covariance for parameter-efficient low-resource ASR adaptation. Relevance: continual adaptation.
#### [Automatic Rank Allocation for Low-Rank Adaptation in Large Language Models via lp Regularization](http://arxiv.org/abs/2609.28998v1)
Z. Xie et al., 2026-09-24 — Automatically allocates LoRA ranks with lp regularization. Relevance: efficient continual fine-tuning.

## 视觉感知
### Event-Based Vision
#### [SEE Challenge 2026: Event-Guided Brightness Adjustment Across a Broad Illumination Range](http://arxiv.org/abs/2609.29347v1)
Y. Lu et al., 2026-09-24 — Benchmarks event-guided brightness adjustment across broad illumination. Relevance: event-based restoration.

### 3D Point Cloud Perception
#### [SARFusion: Scene-Aware Routing Fusion for Robust Camera-LiDAR 3D Object Detection](http://arxiv.org/abs/2609.29235v1)
Y. Zhao et al., 2026-09-24 — Uses scene-aware routing fusion for robust camera-LiDAR 3D detection. Relevance: robust multimodal 3D perception.
#### [M3GD: Multi-Modal Multi-View Geometric Diffusion for Camera--LiDAR Novel View Synthesis](http://arxiv.org/abs/2609.30056v1)
Y. Zhou et al., 2026-09-24 — Combines camera and LiDAR for geometric diffusion-based novel view synthesis. Relevance: 3D scene reconstruction.
#### [Seeing Is Not Measuring: Tool-Augmented Metric Spatial Reasoning for Vision-Language Models](http://arxiv.org/abs/2609.29073v1)
K. Glantz & C. Grange, 2026-09-24 — Equips a small VLM with geometric tools for metric spatial reasoning. Relevance: metric 3D reasoning.
#### [An Automated Georeferencing Technique for Multi-Temporal Stope Point Clouds for Downstream Geotechnical Analysis](http://arxiv.org/abs/2609.29186v1)
D. Patra et al., 2026-09-24 — Automates georeferencing of multi-temporal stope point clouds in GNSS-denied mines. Relevance: point cloud processing.

### 3D Point Cloud Perception and Tracking
#### [Token Clustering and Semantic Sequence Mamba for Hyperspectral Image Classification](http://arxiv.org/abs/2609.28580v1)
Y. Zhu et al., 2026-09-23 — Applies token clustering and semantic-sequence Mamba to hyperspectral image classification. Relevance: configured sequence-model match, though application is HSI rather than point-cloud tracking.

## Cross-Topic Signals
- Agent harnesses and memory recur across long-horizon VLA, zero-shot navigation, active exploration, and tool-using agent reliability, suggesting shared planning/context-management patterns.
- Self-improvement and adaptation appear in online RL VLA fine-tuning, self-adaptive VLA, self-play pretraining, skill self-evolution, and environment evolution.
- Safety and robustness under deployment shifts connect CrossSafe, AquaMend, monitor evasion, trace tampering, and exactly-once tool contracts.
- Efficient inference and adaptation span decoupled early exits in VLA, SlackDrive runtime slack, LoRA rank allocation, and Fisher-whitened PEFT.
- Metric/3D geometry remains a common bottleneck across tool-augmented VLM spatial reasoning, camera-LiDAR fusion, georeferencing, M3GD, and point-cloud perception.

## Priority Reading
- **Where Does Exactly-Once Live?** — Concrete framework for avoiding duplicate side effects in tool-using agents, directly actionable for agent harness and tool-contract design.
- **AdaHVLA** — Addresses long-horizon VLA execution with persistent memory and planning, a central bottleneck connecting agent engineering and embodied VLA.
- **Decoupled Early Exits for Flow-Matching VLAs** — Task-dependent compute allocation for VLA inference, bridging VLA deployment with pruning and inference optimization.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*