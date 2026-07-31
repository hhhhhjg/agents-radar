# Lab Research Topics Radar 2026-08-01

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 35 new + 10 seen in the last 14 days | Generated: 2026-07-31 22:54 UTC

---

## Today's Overview

- **LLM Agent Engineering**: 10 new papers span skill mixture/distillation, transition-aware RL, audit-budget allocation, hardware-design agents, memory-injection defense, reliability memory, and trajectory-graph error diagnosis.
- **Agent Test-Time Scaling and Self-Improvement**: 2 new papers — SVR enables oracle-free adaptive test-time compute; looped transformers improve recurrent-depth extrapolation.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: 10 new papers cover world-model security, embodied data capture, flow-matching failure correction, robust deployment, cross-embodiment transfer, embodied multi-agent credit assignment, egocentric world-action simulation, 3D-QA, manipulation skill transfer, and spatial tool reasoning.
- **Embodied Navigation**: New work on open-vocabulary 3D scene querying for navigation; several overlapping robot-learning papers are listed under VLA to avoid duplicate placement.
- **LLM Pruning and Inference Optimization**: New work on token-level dynamic width pruning and rotation-aware group quantization; multimodal token pruning is listed under Multimodal LLM Pruning.
- **Multimodal LLM Pruning**: 2 new visual-token pruning methods for edge-cloud and training-free MLLM inference.
- **Continual Learning**: 5 new papers on modality drift, continual AI-generated image detection, coreset selection, skill diffusion, and federated fine-tuning defenses; 3 repeated CL-relevant papers.
- **Event-Based Vision**: 1 new event-assisted video compression paper; 1 repeated SNN-based event detection paper.
- **3D Point Cloud Perception**: New point-cloud-to-G-code generation; repeated long-tailed point-cloud distillation; MonoVoc is grouped under Embodied Navigation.
- **3D Point Cloud Perception and Tracking**: 1 new text-query satellite change-ranking method.

---

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [SKIMIX: Multi-Agent Harness-Time Scaling with Skill Mixture for Dynamic Harness Engineering](http://arxiv.org/abs/2607.27994v1)
- Jia Luo et al. (2026-07-30). Multi-agent framework combining skill portfolios via iterative refinement and retrieval. Directly addresses skill selection/maintenance in LLM agent engineering.

#### [TAPO: Transition-Aware Policy Optimization for LLM Agents](http://arxiv.org/abs/2607.27973v1)
- Cong Li et al. (2026-07-30). Uses dense transition supervision alongside sparse task rewards for agent RL. Improves credit assignment in LLM agent post-training.

#### [From Scoring to Acting: Outcome-Verified Comparative Self-Distillation for LLM Agents](http://arxiv.org/abs/2607.27937v1)
- Xu Xia et al. (2026-07-30). Internalizes agent skills via outcome-verified comparative self-distillation. Supports the shift from retrieval-based to internalized agent capabilities.

#### [One Human, $N$ Agents: Audit-Budget Allocation for LLM Agent Fleets under Miscalibrated, Correlated Confidence](http://arxiv.org/abs/2607.28317v1)
- Cesare Zavattari et al. (2026-07-30). Models budgeted human inspection of many agents with miscalibrated confidence. Relevant to oversight and reliability of agent fleets.

#### [SKILL-KD: Contrastive Skill Distillation for LLM Agents](http://arxiv.org/abs/2607.28048v1)
- Qiming Shi et al. (2026-07-30). Contrastively distills skills into weaker student agents. Targets the gap between skill summaries and usable agent behavior.

#### [ARES: Adaptive Reasoning-Effort Steering for PPA- and Cost-Aware RTL Optimization with LLM Agents](http://arxiv.org/abs/2607.27879v1)
- Stef Cuyckens et al. (2026-07-30). Steers reasoning effort for LLM agents optimizing RTL PPA under dollar-cost constraints. Demonstrates cost-aware agent engineering in hardware design.

#### [MIND: Lightweight and Effective Memory Injection Defense for LLM Agents via Intent-Aware Information Bottleneck](http://arxiv.org/abs/2607.28103v1)
- Dongyi Liu et al. (2026-07-30). Defends memory-augmented agents against memory injection attacks. Relevant to secure memory and retrieval in agent pipelines.

#### [Paying for Honesty Without Knowing the Truth: Reputation-Penalty Design for LLM Marketplace Agents](http://arxiv.org/abs/2607.28330v1)
- Mingdai Yang et al. (2026-07-30). Designs reputation penalties to reduce attribute fabrication by LLM merchant agents. Addresses incentive design for honest autonomous agents.

#### [Σ-Mem: An Online Reliability Memory for LLM-based Multi-Agent Systems](http://arxiv.org/abs/2607.27958v1)
- Peilin Feng et al. (2026-07-30). Stores online reliability information about which agents can be trusted. Strengthens long-horizon multi-agent memory and reliability.

#### [Leveraging Trajectory Graphs for Pre-Execution Error Diagnosis in Agentic LLM Systems](http://arxiv.org/abs/2607.27443v1)
- Xu Zheng et al. (2026-07-29). Diagnoses likely agent errors before execution using trajectory graphs. Helps avoid failures in long-horizon interactive tasks.

### Agent Test-Time Scaling and Self-Improvement

#### [SVR: Self-Verifying Refinement via Joint Verdict-Confidence Reinforcement Learning for Adaptive Test-Time Compute](http://arxiv.org/abs/2607.28457v1)
- Hongyu Chen et al. (2026-07-30). Learns oracle-free multi-turn refinement with joint verdict-confidence RL. Directly advances adaptive test-time compute and self-improvement.

#### [Looped Transformers with Source-Centered State Evolution](http://arxiv.org/abs/2607.27656v1)
- Bum Jun Kim et al. (2026-07-30). Stabilizes looped transformer state evolution over recurrent depth. Adds a train/test-time compute axis relevant to scalable reasoning.

---

## 具身智能

### Vision-Language-Action Models

#### [Security of World-Model-Based Embodied AI: A Lifecycle of Threats, Defenses, and Evaluation](http://arxiv.org/abs/2607.28226v1)
- Fazhong Liu et al. (2026-07-30). Surveys threats and defenses across the world-model lifecycle for embodied AI. Highlights a new security boundary for predictive VLA/world-model systems.

#### [ACE-Data-0: Human-Centric Ambient Capture as Embodied Data Engine](http://arxiv.org/abs/2607.28625v1)
- Yukang Cao et al. (2026-07-30). Captures synchronized ego-centric perception, motion, manipulation, sound, and touch. Addresses the data bottleneck for embodied VLA training.

#### [RedFlow: Redirect Failure into Action-Level Corrections for Flow-matching VLA Policy](http://arxiv.org/abs/2607.27782v1)
- Zhengyang Yan et al. (2026-07-30). Uses offline RL to convert deployment failures into action-level corrections. Mitigates compounding errors in flow-matching VLA policies.

#### [RoboBRIDGE: A Modular Framework for Bridging Policies to Robust Real-World Robotic Agents](http://arxiv.org/abs/2607.27881v1)
- Sihyung Yoon et al. (2026-07-30). Adds failure recovery and long-horizon execution to VLA policies. Addresses critical gaps between VLA action prediction and real-world deployment.

#### [Cross-Embodiment Transfer via Behavior-Aligned Representations](http://arxiv.org/abs/2607.27549v1)
- Ajay Sridhar et al. (2026-07-30). Learns behavior-aligned representations for cross-embodiment robot learning. Improves VLA generalization across different robot platforms.

#### [MARS-RA: Rank Aggregation for Credit Assignment via Multimodal Comparisons in Embodied Multi-Agent Cooperation](http://arxiv.org/abs/2607.27967v1)
- Dawei Wang et al. (2026-07-30). Reformulates embodied multi-agent credit assignment as rank aggregation. Useful for VLA-based cooperative agents under delayed feedback.

#### [EgoGenesis: Egocentric World-Action Modeling with Online Anchored Projective Memory and Action-3D RoPE](http://arxiv.org/abs/2607.28243v1)
- Zexuan Yan et al. (2026-07-30). Synthesizes controllable egocentric manipulation videos as a world-action simulator. Supplies scalable synthetic experience for VLA policy learning.

#### [ViewMind3D: Modular View-Aware Inference for Training-Free 3D-QA](http://arxiv.org/abs/2607.28442v1)
- Ping-Kun Chiang et al. (2026-07-30). Enables training-free 3D question answering with view-aware LLM/VLM inference. Supports VLA perception in embodied 3D environments.

#### [SemAnCorr: Semantic Anchored Correspondence for Zero-Shot Manipulation Skill Transfer](http://arxiv.org/abs/2607.28382v1)
- Xiaoxiang Dong et al. (2026-07-30). Transfers manipulation skills across object instances via semantic anchored correspondence. Improves cross-instance generalization for robot manipulation policies.

#### [SpatialCLI: Learning to Reason With Spatial Tools, Then Without Them](http://arxiv.org/abs/2607.27703v1)
- Yang Zhou et al. (2026-07-30). Trains VLMs to use spatial tools, then removes tool dependence. Strengthens embodied spatial decision-making with VLMs.

### Embodied Navigation

#### [MonoVoc: Decoupling Geometry and Semantics for Lightweight Monocular Open-Vocabulary 3D Gaussians](http://arxiv.org/abs/2607.28300v1)
- Pouya Ardekhani et al. (2026-07-30). Decouples geometry and semantics for lightweight open-vocabulary 3D scene understanding. Enables natural-language querying and navigation in reconstructed environments.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [BioVLN: A Simulation Platform for Visual Language Navigation in Biomedical Laboratories](http://arxiv.org/abs/2607.26914v1)**
- Zhe Liu et al. (2026-07-29). Simulates visual-language navigation for biomedical lab robots. Provides a domain-specific VLN benchmark beyond household environments.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [SpatialQ: Understanding 3D Gaussian Splatting Scene Quality via Visual-based MLLM](http://arxiv.org/abs/2607.26595v1)**
- Jingxuan Su et al. (2026-07-29). Uses a visual MLLM to assess 3DGS scene quality. Supports reliable 3D reconstruction quality for navigation and scene understanding.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [VidMap: Exploiting Temporal Structure for Video-Based Structure-from-Motion](http://arxiv.org/abs/2607.27194v1)**
- Zador Pataki et al. (2026-07-29). Recovers metric pose from unconstrained video using temporal structure. Unlocks large-scale video training data for embodied navigation.

---

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [WIDE: Boosting Adaptive LLM Inference via Token-level Dynamic Width Pruning](http://arxiv.org/abs/2607.28418v1)
- Haozhe Hu et al. (2026-07-30). Prunes LLM width dynamically at token level. Improves sparse inference accuracy under aggressive sparsity.

#### [GyRot: Leveraging Hidden Synergy between Rotation and Fine-grained Group Quantization for Low-bit LLM Inference](http://arxiv.org/abs/2607.27694v1)
- Sangjin Kim et al. (2026-07-30). Combines rotation with fine-grained group quantization for low-bit LLMs. Removes accuracy/hardware mismatch in quantized LLM inference.

### Multimodal LLM Pruning

#### [LAST: The Last Query Token Guides Visual Token Pruning for Edge-Cloud Collaborative MLLM Inference](http://arxiv.org/abs/2607.27952v1)
- Feng Yang et al. (2026-07-30). Uses the last query token to prune visual tokens for edge-cloud MLLM inference. Cuts cloud-side inference cost in token-based multimodal pipelines.

#### [Capturing Token Tendencies for Training-Free Token Pruning in Multimodal Large Language Models](http://arxiv.org/abs/2607.28341v1)
- Jie Ma et al. (2026-07-30). Captures token tendencies across MLLM layers for training-free pruning. Avoids irreversible static-pruning errors in MLLM efficiency.

### Continual Learning

#### [Regularizing modality contribution drift in multimodal continual learning](http://arxiv.org/abs/2607.27260v1)
- Zhen Zhang et al. (2026-07-29). Regularizes drifting relative modality contributions in MMCL. Directly targets a neglected forgetting source in multimodal continual learning.

#### [DECODE: Tackling Representation and Decision Degradation in Continual AI-Generated Image Detection](http://arxiv.org/abs/2607.27882v1)
- Zihao Cai et al. (2026-07-30). Detects AI-generated images continually across evolving generative domains. Preserves old forensic traces while adapting to new generators.

#### [First-order Constrained Trilevel Optimization Over Distributed Networks for Robust Coreset Selection](http://arxiv.org/abs/2607.27632v1)
- Yang Jiao et al. (2026-07-30). Solves distributed trilevel optimization for robust coreset selection. Coresets are a central rehearsal/memory tool for continual learning.

#### [Training Skills Like Parameters via Self-Supervised Semantic Diffusion](http://arxiv.org/abs/2607.27557v1)
- Mo Li et al. (2026-07-30). Trains specialized skills through self-supervised semantic diffusion. Offers a post-training route for continually injecting skills without classic SFT.

#### [TriShield: Zero-Utility-Loss Defense Against Privacy Backdoors in Federated Language Model Fine-Tuning via Orthogonal Gradient Projection and Optimizer State Entanglement](http://arxiv.org/abs/2607.27940v1)
- Cheng Wei et al. (2026-07-30). Defends federated fine-tuning against privacy backdoors with orthogonal gradient projection. Aligns with continual-learning stability during PEFT adaptation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [The Art of Not Forgetting A Local Learning Architecture for Continual Learning](http://arxiv.org/abs/2607.26523v1)**
- Ashmith Atmuri et al. (2026-07-29). Proposes a local continual-learning architecture with sparse relational codes and competitive memory. Offers backprop-free continual learning for resource-constrained agents.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [Post-Training at the Edge of Detectability: A Game-Theoretic Approach to Fine-Tuning](http://arxiv.org/abs/2607.26358v1)**
- Keegan Harris et al. (2026-07-29). Formulates KL-regularized RL fine-tuning as a game-theoretic drift constraint problem. Formalizes stability-plasticity trade-offs in model post-training.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [FedWeave: Rethinking the Unit of Specialization in Heterogeneous Federated MoE-LoRA](http://arxiv.org/abs/2607.26618v1)**
- Donghang Duan et al. (2026-07-29). Changes specialization granularity in federated MoE-LoRA. Reduces cross-task interference during federated continual adaptation.

---

## 视觉感知

### Event-Based Vision

#### [ENCORE: Event-Assisted Complementary Motion Refinement for Learned Video Compression](http://arxiv.org/abs/2607.28020v1)
- Shuhan Ye et al. (2026-07-30). Uses event camera data to refine motion in learned video compression. Improves temporal modeling under fast motion and challenging illumination.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [Sequence-SOD: Bio-inspired Sequence-aware Spiking ObjectDetection for Event Cameras](http://arxiv.org/abs/2607.26703v1)**
- Katharina Bendig et al. (2026-07-29). Detects objects from event streams with sequence-aware spiking networks. Combines SNN dynamics with sparse event data for efficient detection.

### 3D Point Cloud Perception

#### [PrintAnything: Learning an Intermediate Representation for 3D printing G-code Generation](http://arxiv.org/abs/2607.27729v1)
- Sangmin Hong et al. (2026-07-30). Generates 3D-printing G-code directly from point clouds via an intermediate representation. Extends point-cloud perception to fabrication without watertight meshes.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [Long-Tailed 3D Point Cloud Dataset Distillation](http://arxiv.org/abs/2607.26763v1)**
- Jiahao You et al. (2026-07-29). Distills long-tailed 3D point cloud datasets into compact synthetic sets. Addresses distributional imbalance in efficient point-cloud training.

### 3D Point Cloud Perception and Tracking

#### [Finding Change in Satellite Archives from Text: How to Combine Before-and-After Images Efficiently](http://arxiv.org/abs/2607.28571v1)
- Simon Roy et al. (2026-07-30). Ranks bi-temporal satellite image pairs by match to natural-language change queries. Enables text-driven temporal/change search relevant to 3D/tracking archives.

---

## Cross-Topic Signals

- Skill internalization and distillation connect agent post-training (#6, #8) with continual skill injection (#28).
- Token/input-adaptive pruning unites LLM efficiency and multimodal inference (#2, #10, #13).
- Adaptive compute allocation appears across test-time scaling (#3), looped transformers (#34), and cost-aware agent design (#9).
- Security/reliability is cross-cutting: memory-injection defense (#12), audit-budget allocation (#7), world-model security (#11), and federated backdoor defense (#21).
- Embodied data generation and deployment realism are converging: ACE-Data (#14) and EgoGenesis (#29) provide training data, while RoboBRIDGE (#20) closes real-world VLA deployment gaps.

## Priority Reading

#### [SVR: Self-Verifying Refinement via Joint Verdict-Confidence Reinforcement Learning for Adaptive Test-Time Compute](http://arxiv.org/abs/2607.28457v1) — Most direct fit for test-time scaling and self-improvement without external verifiers.
#### [RoboBRIDGE: A Modular Framework for Bridging Policies to Robust Real-World Robotic Agents](http://arxiv.org/abs/2607.27881v1) — High practical value for deploying VLA policies with failure recovery and long-horizon robustness.
#### [SKILL-KD: Contrastive Skill Distillation for LLM Agents](http://arxiv.org/abs/2607.28048v1) — Closely tied to the lab's agent skill-internalization and self-improvement interests.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*