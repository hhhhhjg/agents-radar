# Lab Research Topics Radar 2026-09-25

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 33 new + 11 seen in the last 14 days | Generated: 2026-09-25 00:12 UTC

---

## Today's Overview

- **LLM Agent 与多智能体 / LLM Agent Engineering**: 10 new papers. Progress centers on live-state conditioning, constraint-driven context engineering, task-adaptive memory, agent-editing world models, deployment-config benchmarks, agent referees, reflective fraud detection, minimalist harnesses, and molecular-design benchmarks.
- **LLM Agent 与多智能体 / Agent Test-Time Scaling and Self-Improvement**: 2 new papers. Planned coordinated reasoning paths target redundant parallel branches, while capability-manifold scaling laws connect agentic harness performance to capability rather than loss alone.
- **LLM Agent 与多智能体 / LLM Agent Societies**: No new papers today.
- **具身智能 / Vision-Language-Action Models**: 10 new papers. Advances include recurrent associative memory, advantage-guided RL post-training, TAMP-assisted fine-tuning, cerebellar residual governance, intervention-adaptive real-world RL, annotation-efficient driving VLAs, asynchronous diffusion for dexterous manipulation, and viewpoint-invariant policies.
- **具身智能 / Embodied Navigation**: 7 new papers. Strongest themes are large-scale semantic-map data, active memory retrieval for zero-shot navigation, and depth-guided spatial representations; several matched items are adjacent perception/IR papers.
- **模型压缩与持续学习 / LLM Pruning and Inference Optimization**: 2 new papers. One reclaims runtime slack for adaptive driving inference; the other studies task-induced geometry in ViT feature spaces, with weaker direct pruning relevance.
- **模型压缩与持续学习 / Multimodal LLM Pruning**: No new papers today; a prior visual-token conditional-removability paper remains relevant.
- **模型压缩与持续学习 / Continual Learning**: 2 new papers. Both are adjacent efficiency/optimization works rather than core continual-learning methods.
- **视觉感知 / Event-Based Vision**: 1 new paper. It predicts ahead to reduce latency in event-based object detection.
- **视觉感知 / 3D Point Cloud Perception**: 1 new paper. SGDet3D++ improves geometry-grounded semantics for 4D radar-camera 3D detection.
- **视觉感知 / 3D Point Cloud Perception and Tracking**: No new papers today.

## Research Areas

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [State-Grounded Conditioning: Wrapping User-Facing LLM Agents Where Direction Depends on Live State](http://arxiv.org/abs/2609.27606v1)
Liu et al., 2026-09-23. Proposes state-grounded conditioning and identifies direction drift for agents depending on live user state. Relevance: core engineering for stateful user-facing agents.

#### [Constraint-Driven Context Engineering: Designing Domain Interfaces for AI Systems](http://arxiv.org/abs/2609.27354v1)
Xu et al., 2026-09-23. Frames domain constraints as context-engineering interfaces. Relevance: context engineering under regulatory and normative agent constraints.

#### [Just-in-Time Memory: Learning to Curate Task-Adaptive Memory for LLM Agents](http://arxiv.org/abs/2609.27334v1)
Zhou et al., 2026-09-23. Learns to curate memory at inference time rather than only at write time. Relevance: long-horizon agent memory and adaptation.

#### [Agent-Editing World Model: Rethinking World Modeling for LLM Agents](http://arxiv.org/abs/2609.28416v1)
Sun et al., 2026-09-23. Models agent edits and tool-result effects instead of reconstructing observations. Relevance: world models for long-horizon LLM agent planning.

#### [FDE-Bench: Evaluating LLM Agents for Deployment Environment Configuration](http://arxiv.org/abs/2609.27571v1)
Ding et al., 2026-09-23. Introduces deployment-configuration tasks across Docker, Compose, and Kubernetes. Relevance: agent evaluation on real deployment workflows.

#### [SR-Fraud: An Outcome-Supervised Reflective LLM Agent Framework for Non-Stationary Payment Fraud Detection](http://arxiv.org/abs/2609.27287v1)
Tan et al., 2026-09-23. Uses reflective outcome supervision for streaming payment fraud detection. Relevance: non-stationary agent deployment.

#### [MolDesignBench: Evaluating LLM-based Agent for Scenario-grounded Molecular Design](http://arxiv.org/abs/2609.27349v1)
Jeong et al., 2026-09-23. Benchmarks multi-constraint molecular design with tool outputs. Relevance: scientific-domain agent evaluation.

#### [Propose, Don't Judge: An Anytime-Valid Referee for LLM Agents That Mine Investment Factors](http://arxiv.org/abs/2609.27051v1)
Qu et al., 2026-09-22. Uses a frozen statistical referee for governed self-evolution of factor-mining agents. Relevance: reliable agent self-evolution and evaluation.

#### [Harness as a Language: A Minimalist Agent Framework With Maximal Expressivity](http://arxiv.org/abs/2609.26891v1)
Li et al., 2026-09-22. Treats the agent harness as a language for workflow expressivity. Relevance: agent framework and orchestration design.

### Agent Test-Time Scaling and Self-Improvement
#### [Planned Test-Time Scaling with Coordinated Reasoning Paths](http://arxiv.org/abs/2609.27374v1)
Wu et al., 2026-09-23. Plans coordinated reasoning paths instead of independent repeated sampling. Relevance: reduces redundancy in test-time scaling.

#### [The Capability Manifold and ML Scaling Laws](http://arxiv.org/abs/2609.27588v1)
Zaidi & Hafeez, 2026-09-23. Relates scaling to agentic downstream capability rather than loss alone. Relevance: scaling and evaluation for agentic harnesses.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Beyond Repeated Sampling: Learning Search Policies for LLM Reasoning](http://arxiv.org/abs/2609.26704v1)
Labiad et al., 2026-09-22. Learns search policies for test-time reasoning. Relevance: directly improves over repeated sampling.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Direct Optimization of Generators for Search in Automated Theorem Proving](http://arxiv.org/abs/2609.25575v1)
Ousherovitch & Tewari, 2026-09-22. Optimizes generators for search in theorem proving. Relevance: test-time search for formal reasoning.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [CliffCompaction: Cost-Efficient Compaction for Long-Horizon Coding Agents](http://arxiv.org/abs/2609.26779v1)
Nguyen et al., 2026-09-22. Autocompacts context to reduce cost under bounded context. Relevance: long-horizon agent self-management.

## 具身智能
### Vision-Language-Action Models
#### [MemBodied: Recurrent Associative Memory for Vision-Language-Action Models](http://arxiv.org/abs/2609.28256v1)
Pala et al., 2026-09-23. Adds recurrent associative memory to VLA policies for episode-level information. Relevance: history-dependent manipulation.

#### [Dissecting Advantage-Guided Post-Training for Vision-Language-Action Policies](http://arxiv.org/abs/2609.28161v1)
Cao et al., 2026-09-23. Analyzes advantage construction and use for post-training VLA policies. Relevance: RL post-training of VLA.

#### [TANDEM: Task and Motion Planning with As-Needed Demonstrations for Efficient Vision-Language-Action Model Fine-tuning](http://arxiv.org/abs/2609.28314v1)
Sahoo et al., 2026-09-23. Uses TAMP to generate as-needed demonstrations for VLA fine-tuning. Relevance: data-efficient VLA fine-tuning.

#### [CereVLA: Cerebellum-Inspired Consequence-Aware Residual Governance for Efficient Vision-Language-Action Execution](http://arxiv.org/abs/2609.27468v1)
Zeng et al., 2026-09-23. Uses consequence-aware residuals to correct action-chunk execution errors. Relevance: efficient VLA execution with feedback.

#### [BEE: Intervention-Adaptive Real-World Reinforcement Learning with Vision-Language-Action Models](http://arxiv.org/abs/2609.27450v1)
Zhao et al., 2026-09-23. Enables intervention-adaptive real-world RL for precision-critical phases. Relevance: real-world RL with VLA models.

#### [Less Language, More Latents: Annotation-Efficient VLAs for Driving](http://arxiv.org/abs/2609.27747v1)
Zakharov et al., 2026-09-23. Uses latent representations to reduce language annotation for driving VLAs. Relevance: annotation-efficient VLA training.

#### [LiMA: Bridging Long-term Imagination to Real-time Dexterous Manipulation via Asynchronous Diffusion](http://arxiv.org/abs/2609.28431v1)
Chen et al., 2026-09-23. Combines long-term imagination with asynchronous diffusion for dexterous control. Relevance: VLA/world-action models for manipulation.

#### [InfiNoVA: Infinite Novel View Augmentation for Viewpoint Invariant Robot Policies](http://arxiv.org/abs/2609.27734v1)
Gottam et al., 2026-09-23. Generates novel views for viewpoint-invariant robot policies. Relevance: VLA robustness to camera viewpoint.

### Embodied Navigation
#### [NaviScale: Generating Large-Scale Semantic Map Datasets for Object Navigation](http://arxiv.org/abs/2609.27218v1)
Lan et al., 2026-09-23. Generates large-scale semantic-map datasets for ObjectNav. Relevance: scalable navigation representation learning.

#### [NavProbe: Evidence-Grounded Reasoning with Active Memory Retrieval for Zero-Shot Navigation](http://arxiv.org/abs/2609.27526v1)
Liu et al., 2026-09-23. Uses evidence-grounded reasoning and active memory retrieval for zero-shot navigation. Relevance: long-horizon navigation memory.

#### [Depth-Guided Contrastive Learning for 2D Representations with 3D Spatial Awareness](http://arxiv.org/abs/2609.28159v1)
Zeng & Vergauwen, 2026-09-23. Adds depth-guided objectives for 3D spatial awareness in 2D representations. Relevance: spatial scene understanding for embodied navigation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [SparseNav: Instruction-conditioned Sparse Semantic Perception for Training-Free Vision-Language Navigation](http://arxiv.org/abs/2609.26408v1)
Chen et al., 2026-09-22. Uses instruction-conditioned sparse semantic perception for training-free VLN. Relevance: efficient vision-language navigation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Deploying Foundation Models for Embodied Navigation](http://arxiv.org/abs/2609.25666v1)
Dorbala & Manocha, 2026-09-22. Tackles training bias and context limits in FM navigation. Relevance: deployment of foundation models for navigation.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [SlackDrive: Reclaiming Runtime Slack for Adaptive Driving Inference](http://arxiv.org/abs/2609.28064v1)
Pei et al., 2026-09-23. Reclaims runtime slack for adaptive driving inference. Relevance: inference optimization for driving world-action models.

### Multimodal LLM Pruning
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [From Token Importance to Conditional Removability: Rethinking Visual Token Pruning in Multimodal Large Language Models](http://arxiv.org/abs/2609.26484v1)
He et al., 2026-09-22. Shows token removability depends on representation depth and deletion set. Relevance: improved visual-token pruning in MLLMs.

### Continual Learning
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [From Experts to Sub-experts: Fine-grained Parameter-Efficient Fine-Tuning for MoE LLMs](http://arxiv.org/abs/2609.25655v1)
Tan et al., 2026-09-22. Explores fine-grained PEFT for MoE LLMs. Relevance: modular parameter-efficient adaptation relevant to continual updates.

## 视觉感知
### Event-Based Vision
#### [Bend the Clock: Predicting Ahead to Beat Latency in Event-Based Object Detection](http://arxiv.org/abs/2609.26919v1)
Sen et al., 2026-09-22. Predicts ahead to reduce latency in event-based object detection. Relevance: low-latency event perception.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [LiFR v2: Completion-Augmented Event Propagation for High-Rate Dense Prediction](http://arxiv.org/abs/2609.25803v2)
Wan et al., 2026-09-22. Uses completion-augmented event propagation for high-rate dense prediction. Relevance: event-based dense perception.

### 3D Point Cloud Perception
#### [SGDet3D++: Geometry-Grounded Semantics for 4D Radar and Camera 3D Object Detection](http://arxiv.org/abs/2609.27671v1)
Bai et al., 2026-09-23. Grounds semantics for 4D radar-camera 3D object detection. Relevance: robust 3D perception.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Leveraging Vision-Based Point Cloud Map Priors for Camera-Based 3D Object Detection and Online Vectorized HD Mapping](http://arxiv.org/abs/2609.26325v1)
Käppeler et al., 2026-09-22. Uses point-cloud map priors for camera-based 3D detection and HD mapping. Relevance: point-cloud priors for 3D perception.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [AT3D-AD: Anomaly Type-Aware 3D Anomaly Detection via Hierarchical Point-Language Alignment](http://arxiv.org/abs/2609.25930v1)
Zeng et al., 2026-09-22. Aligns point clouds and language for anomaly-type-aware 3D detection. Relevance: 3D point cloud perception.

## Cross-Topic Signals

- Memory and state are shifting from static context to live/task-adaptive mechanisms: MemBodied, Just-in-Time Memory, NavProbe, and State-Grounded Conditioning.
- Test-time planning/search is being coordinated rather than parallelized blindly: Planned Test-Time Scaling, Beyond Repeated Sampling, NavProbe, and Agent-Editing World Model.
- Runtime efficiency is addressed through residuals, slack, or pruning: CereVLA, BEE, SlackDrive, LiFR v2, and multimodal token pruning.
- Data and annotation bottlenecks are reduced via synthesis or selection: TANDEM, Less Language More Latents, NaviScale, and InfiNoVA.
- Evaluation is moving toward deployment and capability: FDE-Bench, MolDesignBench, Propose Don't Judge, and Capability Manifold.

## Priority Reading

- **MemBodied** — central for VLA policies that must preserve episode-level memory in history-dependent manipulation.
#### - **Planned Test-Time Scaling with Coordinated Reasoning Paths** — directly targets redundant sampling, a core bottleneck in agent test-time scaling.
- **Just-in-Time Memory** — offers a concrete inference-time memory-curation approach for long-horizon LLM agents.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*