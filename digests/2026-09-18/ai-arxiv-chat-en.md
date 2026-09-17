# Lab Research Topics Radar 2026-09-18

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 19 new + 0 seen in the last 14 days | Generated: 2026-09-17 23:50 UTC

---

## Today's Overview
- **LLM Agent Engineering**: 3 new papers advance long-horizon reliability via rollback-induced reflection and symbolic temporal contracts, plus an embodied UAV-swarm harness.
- **Agent Test-Time Scaling and Self-Improvement**: No new papers today.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: 4 matched new papers focus on efficient VLA inference and action tokenization; the cross-listed AeroWeaver is placed under LLM Agent Engineering.
- **Embodied Navigation**: 3 new papers improve geometry-aware VLN, grounded reasoning-acting, and sim-to-real traffic scene understanding.
- **LLM Pruning and Inference Optimization**: 3 matched new papers propose calibrated quality measurement and Pareto mapping of inference optimizations; one tabular foundation-model report is peripheral.
- **Multimodal LLM Pruning**: No new papers today.
- **Continual Learning**: 3 new papers cover multimodal continual learning, uncertainty-aware open-world intent discovery, and efficient PEFT for point cloud transformers.
- **Event-Based Vision**: 1 new paper presents noise-free intrinsic position learning for event-based spike-driven tracking.
- **3D Point Cloud Perception**: 3 new papers contribute an indoor MLS semantic segmentation benchmark, real-time 4D radar preprocessing, and collaborative perception for model adaptation.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [Rollback the World, Keep the Reflection: Rollback-Induced Reflection for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.18304v1)
Yu et al., 2026-09-16. Contribution: Proposes rollback-induced reflection to repair altered environment states and prevent compounding errors in long-horizon LLM agents. Relevance: Directly targets robust multi-step agent interaction and reflection.

#### [Symbolic Temporal Supervision of LLM Agents Using Contracts](http://arxiv.org/abs/2609.18128v1)
Xiao & Nuzzo, 2026-09-16. Contribution: Uses symbolic temporal contracts to supervise tool-using LLM agents against hallucinations, instability, and adversarial manipulation. Relevance: Core LLM-agent engineering for safe, temporally constrained tool orchestration.

#### [AeroWeaver: An Embodied-Agent Harness for Weaving Aerial Skills into Distributed, Adaptive Swarm Execution](http://arxiv.org/abs/2609.18520v1)
Lou et al., 2026-09-16. Contribution: Introduces an embodied-agent harness for coordinating UAV swarms through local perception, exchange, and adaptive execution. Relevance: Connects embodied agent engineering to distributed multi-agent swarm control.

### Agent Test-Time Scaling and Self-Improvement
No new papers today.

### LLM Agent Societies
No new papers today.

## 具身智能
### Vision-Language-Action Models
#### [rMuscle: Robotic Muscle Memory for Efficient Vision-Language-Action Model Inference](http://arxiv.org/abs/2609.19104v1)
Zhou et al., 2026-09-16. Contribution: Exploits robotic muscle memory to make VLA model inference more efficient for repetitive factory work. Relevance: Core VLA inference optimization for embodied robotic policies.

#### [ActionPiece: Rethinking Action Tokenization for Autoregressive Vision-Language-Action Models](http://arxiv.org/abs/2609.18487v1)
Lian et al., 2026-09-16. Contribution: Reconsiders action tokenization and its fidelity beyond pointwise reconstruction metrics for autoregressive VLA models. Relevance: Addresses a central bottleneck in VLA policy training and execution.

#### [${M}^2$Tok: Multi-head Multi-codebook Discrete Action Tokenization for Vision-Language-Action Models](http://arxiv.org/abs/2609.18259v1)
Xu et al., 2026-09-16. Contribution: Proposes multi-head multi-codebook discrete action tokenization for autoregressive VLA processing. Relevance: Directly improves how continuous actions become compact tokens for VLA models.

### Embodied Navigation
#### [AdaGeoVLN: Selective Geometry Across Representation Depth and Navigation Time for Vision-Language Navigation](http://arxiv.org/abs/2609.18789v1)
Pham et al., 2026-09-16. Contribution: Selectively uses geometry foundation model features across depth and time for vision-language navigation. Relevance: Core embodied navigation method for aligning language, vision, and spatial history.

#### [GroundingVLN: Reasoning and Acting with Grounding for Vision-Language Navigation](http://arxiv.org/abs/2609.18581v1)
Li et al., 2026-09-16. Contribution: Connects semantic reasoning to spatial execution via grounding for VLN agents. Relevance: Addresses the reasoning-acting gap in embodied navigation.

#### [Sim-to-Real Traffic Scene Understanding by Decoupling Semantics from Caption Generation with V-JEPA](http://arxiv.org/abs/2609.18562v1)
Bui et al., 2026-09-16. Contribution: Decouples semantics from caption generation using V-JEPA for sim-to-real traffic VQA and event description. Relevance: Matched to embodied navigation via autonomous-driving scene understanding, though it is less directly about navigation policies.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [A Calibrated Instrument for Measuring How Inference Optimizations Affect Output Quality](http://arxiv.org/abs/2609.18005v1)
Kaplan, 2026-09-16. Contribution: Proposes a calibrated instrument to measure output-quality effects of LLM inference optimizations such as quantization, early exit, and speculative decoding. Relevance: Directly addresses evaluation rigor for inference optimization.

#### [The Inference Engineering Pareto Atlas: Which Optimizations Dominate the Cost, Quality, and Latency Frontier?](http://arxiv.org/abs/2609.17863v1)
Tumkur et al., 2026-09-15. Contribution: Builds a Pareto atlas of LLM inference optimizations across cost, quality, and latency constraints. Relevance: Helps compare and combine optimization configurations for deployment.

#### [TabPFN-3.5: Technical Report](http://arxiv.org/abs/2609.17895v1)
Jäger et al., 2026-09-15. Contribution: Reports a new tabular foundation model that improves standard tabular prediction. Relevance: Peripheral to LLM pruning/inference optimization; included only because it matched the configured topic.

### Multimodal LLM Pruning
No new papers today.

### Continual Learning
#### [MCLC-NET: Multimodal Continual Learning for Leaf Counting](http://arxiv.org/abs/2609.18129v1)
Bhatt et al., 2026-09-16. Contribution: Applies multimodal continual learning to leaf counting using RGB plus additional modalities. Relevance: Demonstrates continual learning under real-world multimodal domain challenges.

#### [Uncertainty-Aware Continual Learning for Open-World Intent Discovery Under an evolving Label Space](http://arxiv.org/abs/2609.17866v1)
Pisante & Formentin, 2026-09-15. Contribution: Proposes an uncertainty-aware probabilistic framework for continual new intent discovery under evolving labels. Relevance: Core continual-learning method for open-world, non-stationary label spaces.

#### [Position Anchor Tuning: Towards Efficient Adaptation of Pre-Trained Point Cloud Transformers](http://arxiv.org/abs/2609.18056v1)
Liu et al., 2026-09-16. Contribution: Introduces parameter-efficient fine-tuning with position anchors for pre-trained point cloud transformers while considering inference efficiency. Relevance: Connects continual adaptation and PEFT with efficient downstream point-cloud model reuse.

## 视觉感知
### Event-Based Vision
#### [Mask IPL: Noise-Free Intrinsic Position Learning via Computation Graph Clipping for Event-Based Spike-Driven Tracking](http://arxiv.org/abs/2609.18716v1)
Shan & Zhang, 2026-09-16. Contribution: Presents noise-free intrinsic position learning with computation graph clipping for event-based spike-driven tracking. Relevance: Directly advances event-camera tracking with spiking neural networks.

### 3D Point Cloud Perception
#### [Semantic-ITC: A Frame-wise Indoor Mobile Laser Scanning Dataset and Benchmark for Semantic Segmentation](http://arxiv.org/abs/2609.18493v1)
Wu et al., 2026-09-16. Contribution: Introduces a frame-wise indoor mobile laser scanning dataset and benchmark for point cloud semantic segmentation. Relevance: Core 3D point cloud perception resource for indoor MLS segmentation.

#### [Accuracy- and Real-Time-Aware 4D Radar Preprocessing for Autonomous Driving Perception Systems](http://arxiv.org/abs/2609.18542v1)
Jung et al., 2026-09-16. Contribution: Develops accuracy- and real-time-aware 4D radar preprocessing for embedded autonomous-driving perception. Relevance: Addresses efficient point-cloud-like perception under hardware constraints.

#### [Learning from Distributed Eyes: Leveraging Collaborative Perception for Automated Model Adaptation](http://arxiv.org/abs/2609.18511v1)
Ma et al., 2026-09-16. Contribution: Uses collaborative perception across distributed vehicles for unsupervised model adaptation to new environments. Relevance: Connects 3D perception with multi-agent collaborative adaptation under domain shift.

### 3D Point Cloud Perception and Tracking
No new papers today.

## Cross-Topic Signals
- VLA action tokenization and LLM inference optimization both trade off discrete representational fidelity against autoregressive inference cost.
- Long-horizon agent rollback/reflection and symbolic temporal contracts provide state repair and runtime constraint checks that could support continual learning under evolving tasks.
- Geometry foundation features for VLN and 4D-radar/collaborative point cloud perception share spatial representation challenges under domain shift and compute limits.
- Parameter-efficient point-cloud adaptation and inference Pareto/quality calibration both aim to balance model adaptation, latency, and output quality.
- AeroWeaver’s UAV swarm coordination and collaborative perception across vehicles both exploit distributed sensing/action for robust collective autonomy.

## Priority Reading
#### - [Rollback the World, Keep the Reflection: Rollback-Induced Reflection for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.18304v1): Directly addresses compounding errors and state repair in long-horizon LLM agents.
#### - [rMuscle: Robotic Muscle Memory for Efficient Vision-Language-Action Model Inference](http://arxiv.org/abs/2609.19104v1): Bridges VLA models and inference optimization for practical repetitive embodied tasks.
#### - [The Inference Engineering Pareto Atlas: Which Optimizations Dominate the Cost, Quality, and Latency Frontier?](http://arxiv.org/abs/2609.17863v1): Provides a practical framework for comparing cost, quality, and latency trade-offs across inference optimizations.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*