# Lab Research Topics Radar 2026-09-18

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 38 new + 16 seen in the last 14 days | Generated: 2026-09-17 23:50 UTC

---

## Today's Overview
- **LLM Agent Engineering**: 10 new papers. Progress spans rollback-induced reflection, temporal contracts, co-evolving MoA routing, privacy exposure measurement, collective loss of control, graph-agent provenance, multilingual skill quality, swarm harnesses, and scientific agents.
- **Agent Test-Time Scaling and Self-Improvement**: No new papers today. Repeated work covers recursive scientific self-improvement, SWE-agent unknown unknowns, and finite-step failure in looped transformers.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: 10 new papers. Progress focuses on action tokenization, efficient/decoupled VLA inference, cloud-edge interleaving, recurrent action memory, metric/force-aware manipulation, and lab robot kits.
- **Embodied Navigation**: 7 new papers. Progress includes selective geometry for VLN, grounded reasoning-acting, UAV embodied intelligence, and gigapixel dynamic scene understanding; repeated work adds conformal uncertainty for VLN.
- **LLM Pruning and Inference Optimization**: 3 new papers. Progress includes a calibrated instrument for inference-optimization quality and a Pareto atlas for cost/quality/latency; repeated ECHO advances speculative decoding.
- **Multimodal LLM Pruning**: No new papers today.
- **Continual Learning**: 6 new papers. Progress includes uncertainty-aware open-world intent discovery, multimodal continual leaf counting, diffusion replay for weakly supervised segmentation, and efficient adaptation; repeated CLARE and traversability prediction add scalable class-incremental and uncertainty-aware adaptation.
- **Event-Based Vision**: 1 new paper. Progress: noise-free intrinsic position learning for event-based spike-driven tracking; repeated work covers event pretraining and egocentric hand mesh reconstruction.
- **3D Point Cloud Perception**: 3 new papers. Progress includes frame-wise indoor MLS semantic segmentation benchmark, real-time 4D radar preprocessing, and collaborative perception adaptation; repeated SSC-Priors improves LiDAR scene completion.
- **3D Point Cloud Perception and Tracking**: No new papers today. Repeated SAVTrack and MAETrack focus on reliability-aware aggregation and geometric priors for 3D SOT.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [Rollback the World, Keep the Reflection: Rollback-Induced Reflection for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.18304v1)
Yu et al. (2026-09-16). Contribution: Rollback-induced reflection repairs altered world states, not just context. Relevance: Targets compounding errors in long-horizon agent interaction.

#### [Symbolic Temporal Supervision of LLM Agents Using Contracts](http://arxiv.org/abs/2609.18128v1)
Xiao and Nuzzo (2026-09-16). Contribution: Uses contracts for symbolic temporal supervision of tool-using LLM agents. Relevance: Addresses hallucination and adversarial manipulation in agent workflows.

#### [CERA-MoA: Co-Evolving Routing Mechanisms with Continually Learning LLM Agents](http://arxiv.org/abs/2609.18779v1)
Jiang et al. (2026-09-16). Contribution: Co-evolves Mixture-of-Agents routing with continually learning agents. Relevance: Connects routing with post-training capability shifts.

#### [ASLEval: Measuring Privacy Exposure Displacement in LLM Agent Sessions](http://arxiv.org/abs/2609.18864v1)
G. Wu et al. (2026-09-16). Contribution: Measures privacy exposure displacement across multi-step agent sessions. Relevance: Provides session-level privacy evaluation for tool-using agents.

#### [Collective Loss of Control in LLM Agent Systems: An Epidemic Account of Mutation, Contagion, and Recovery](http://arxiv.org/abs/2609.18460v1)
X. Wu et al. (2026-09-16). Contribution: Models multi-agent loss of control as mutation, contagion, and recovery. Relevance: Explains how local deviations spread in LLM agent systems.

#### [GraphEcho: Structural Redundancy and Evidence Provenance in LLM Graph Agents](http://arxiv.org/abs/2609.17695v1)
Wang et al. (2026-09-15). Contribution: Tests whether graph agents mistake repeated paths for independent evidence. Relevance: Exposes provenance and redundancy failures in agent reasoning.

### Agent Test-Time Scaling and Self-Improvement
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [ScienceBuddy: Recursive-in-Recursive Self-Improvement for Interactive Scientific Agents](http://arxiv.org/abs/2609.17523v1)
Xue et al. (2026-09-15). Contribution: Interactive scientific workspace with recursive-in-recursive self-improvement. Relevance: Demonstrates continual self-improvement in researcher workflows.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Grounding SWE-Agent Decisions in Architecture-0 Design: Navigating Unknown Unknowns through Physical Mapping](http://arxiv.org/abs/2609.17221v1)
Wang and Liu (2026-09-15). Contribution: Studies SWE-agent decisions under unknown unknowns via physical mapping. Relevance: Connects test-time agent behavior to early design uncertainty.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Right Direction, Wrong Step: Geometric Analysis of Finite-Step Failure in Looped Transformers](http://arxiv.org/abs/2609.16665v1)
Guo et al. (2026-09-15). Contribution: Geometrically analyzes finite-step failure in looped transformers. Relevance: Clarifies when extra test-time latent iterations help or hurt.

## 具身智能
### Vision-Language-Action Models
#### [ActionPiece: Rethinking Action Tokenization for Autoregressive Vision-Language-Action Models](http://arxiv.org/abs/2609.18487v1)
Lian et al. (2026-09-16). Contribution: Rethinks action tokenization beyond pointwise reconstruction metrics. Relevance: Affects VLA policy targets and executable command recovery.

#### [${M}^2$Tok: Multi-head Multi-codebook Discrete Action Tokenization for Vision-Language-Action Models](http://arxiv.org/abs/2609.18259v1)
Xu et al. (2026-09-16). Contribution: Multi-head multi-codebook discrete action tokenization for VLA. Relevance: Improves compact action representations for autoregressive policies.

#### [rMuscle: Robotic Muscle Memory for Efficient Vision-Language-Action Model Inference](http://arxiv.org/abs/2609.19104v1)
Zhou et al. (2026-09-16). Contribution: Robotic muscle memory for efficient VLA inference in repetitive factory work. Relevance: Targets inference cost in structured embodied deployments.

#### [Decoupling Vision, Language, and Action for Efficient Multi-Task Robot Policies](http://arxiv.org/abs/2609.18374v1)
Sun et al. (2026-09-16). Contribution: Decouples vision, language, and action for multi-task robot policies. Relevance: Reduces per-control-step VLM backbone cost.

#### [VLA-ULAP: Interleaving Cloud VLA Calls with Ultra-Lightweight Local Action Prediction at the Edge](http://arxiv.org/abs/2609.18663v1)
Cao et al. (2026-09-16). Contribution: Interleaves cloud VLA calls with a 7.4M local action predictor. Relevance: Addresses remote inference latency and onboard power.

### Embodied Navigation
#### [GroundingVLN: Reasoning and Acting with Grounding for Vision-Language Navigation](http://arxiv.org/abs/2609.18581v1)
Li et al. (2026-09-16). Contribution: Connects semantic reasoning with spatial execution via grounding for VLN. Relevance: Directly addresses the reasoning-acting gap in navigation agents.

#### [AdaGeoVLN: Selective Geometry Across Representation Depth and Navigation Time for Vision-Language Navigation](http://arxiv.org/abs/2609.18789v1)
Pham et al. (2026-09-16). Contribution: Selectively uses geometry across representation depth and navigation time. Relevance: Improves spatial understanding in vision-language navigation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [ENCP: Episode-Normalized Conformal Prediction for Vision-and-Language Navigation](http://arxiv.org/abs/2609.17499v1)
Feliren et al. (2026-09-15). Contribution: Episode-normalized conformal prediction for VLN uncertainty. Relevance: Enables safer navigation decisions under ambiguity.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [The Inference Engineering Pareto Atlas: Which Optimizations Dominate the Cost, Quality, and Latency Frontier?](http://arxiv.org/abs/2609.17863v1)
Tumkur et al. (2026-09-15). Contribution: Builds a cost-quality-latency Pareto atlas for LLM inference optimizations. Relevance: Helps compare and combine pruning, quantization, and decoding methods.

#### [A Calibrated Instrument for Measuring How Inference Optimizations Affect Output Quality](http://arxiv.org/abs/2609.18005v1)
Kaplan (2026-09-16). Contribution: Proposes calibrated measurement of inference-optimization effects on output quality. Relevance: Addresses inconsistent quality metrics across optimization tracks.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [ECHO: Early-layer Collaborative Hierarchical Orchestration with Bonus Logits in Speculative Decoding](http://arxiv.org/abs/2609.17241v1)
Ma et al. (2026-09-15). Contribution: Hierarchical dual-loop speculative decoding with early-layer orchestration. Relevance: Improves draft-model-free speculative decoding efficiency.

### Continual Learning
#### [Uncertainty-Aware Continual Learning for Open-World Intent Discovery Under an evolving Label Space](http://arxiv.org/abs/2609.17866v1)
Aida and Simone (2026-09-15). Contribution: Unified uncertainty-aware framework for continual new intent discovery. Relevance: Addresses open-world continual learning with evolving labels.

#### [MCLC-NET: Multimodal Continual Learning for Leaf Counting](http://arxiv.org/abs/2609.18129v1)
Bhatt et al. (2026-09-16). Contribution: Multimodal continual learning for leaf counting using RGB and additional modalities. Relevance: Applies continual learning to multimodal plant phenotyping.

#### [DR.WILSS: Diffusion-Based Replay for Weakly Supervised Continual Semantic Segmentation](http://arxiv.org/abs/2609.18444v1)
Marx et al. (2026-09-16). Contribution: Diffusion-based replay for weakly supervised class-incremental segmentation. Relevance: Reduces catastrophic forgetting under image-level supervision.

## 视觉感知
### Event-Based Vision
#### [Mask IPL: Noise-Free Intrinsic Position Learning via Computation Graph Clipping for Event-Based Spike-Driven Tracking](http://arxiv.org/abs/2609.18716v1)
Shan and Zhang (2026-09-16). Contribution: Noise-free intrinsic position learning for event-based spike-driven tracking. Relevance: Improves SNN event tracking without intrinsic position noise.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Hyper-RED: Scalable Event Pre-training via Semantic Hypergraph Distillation](http://arxiv.org/abs/2609.16811v1)
Wang et al. (2026-09-15). Contribution: Scalable event pretraining via semantic hypergraph distillation. Relevance: Addresses scarce annotated event data.

### 3D Point Cloud Perception
#### [Semantic-ITC: A Frame-wise Indoor Mobile Laser Scanning Dataset and Benchmark for Semantic Segmentation](http://arxiv.org/abs/2609.18493v1)
Wu et al. (2026-09-16). Contribution: Frame-wise indoor mobile laser scanning dataset for semantic segmentation. Relevance: Fills a gap in MLS point cloud semantic labels.

#### [Accuracy- and Real-Time-Aware 4D Radar Preprocessing for Autonomous Driving Perception Systems](http://arxiv.org/abs/2609.18542v1)
Jung et al. (2026-09-16). Contribution: Accuracy- and real-time-aware 4D radar preprocessing for embedded perception. Relevance: Balances robustness and compute for 3D perception.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [SSC-Priors: Exploring Semantic and Visibility Priors to Boost Lidar Semantic Scene Completion](http://arxiv.org/abs/2609.17413v1)
Martyniuk et al. (2026-09-15). Contribution: Uses semantic and visibility priors to boost LiDAR semantic scene completion. Relevance: Improves existing SSC networks without heavy redesign.

### 3D Point Cloud Perception and Tracking
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [SAVTrack: Selective Vote Aggregation for Reliability-Aware Point Cloud Tracking](http://arxiv.org/abs/2609.16662v1)
Zhou et al. (2026-09-15). Contribution: Selective vote aggregation for reliability-aware point cloud tracking. Relevance: Handles uneven point constraints in sparse LiDAR SOT.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [MAETrack: Unleashing the Potential of Pretrained Geometric Priors for 3D Single Object Tracking](http://arxiv.org/abs/2609.16695v1)
Zhou et al. (2026-09-15). Contribution: Uses pretrained geometric priors for 3D single object tracking. Relevance: Improves adaptation of self-supervised 3D encoders to tracking.

## Cross-Topic Signals
- VLA efficiency and LLM inference optimization converge: action tokenization, decoupled VLM backbones, cloud-edge VLA, and speculative decoding all target cost/latency-quality tradeoffs.
- Agent reliability and self-improvement overlap: rollback reflection, symbolic contracts, privacy displacement, SWE-agent unknown unknowns, and recursive scientific self-improvement address error compounding and safe adaptation.
- Uncertainty and continual adaptation recur: open-world intent discovery, CLARE, traversability, ENCP, and CERA-MoA show uncertainty-aware updates across continual learning, navigation, and multi-agent routing.
- Multimodal/3D perception supports embodiment: event tracking, 4D radar, MLS semantic segmentation, and SSC priors supply robust representations for embodied navigation and VLA.
- Evaluation benchmarks are a common thread: GraphEcho, ASLEval, M-SQE, Pareto Atlas, and Calibrated Instrument measure provenance, privacy, skill quality, and inference quality.

## Priority Reading
- **Rollback the World, Keep the Reflection** — directly addresses compounding errors in long-horizon LLM agents via state repair, a central robustness gap.
- **ActionPiece** — action tokenization is foundational for autoregressive VLA, and the paper questions pointwise fidelity metrics versus executable command recoverability.
- **Uncertainty-Aware Continual Learning for Open-World Intent Discovery** — bridges open-world label evolution and continual learning with a probabilistic framework useful for non-stationary agents.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*