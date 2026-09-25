# Lab Research Topics Radar 2026-09-25

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 17 new + 0 seen in the last 14 days | Generated: 2026-09-25 00:12 UTC

---

## Today's Overview
- **LLM Agent Engineering** — Four new papers advance state-grounded conditioning, constraint-driven context/domain interfaces, just-in-time task-adaptive memory, and agentic scaling/capability characterization.
- **Agent Test-Time Scaling and Self-Improvement** — Two new papers cover coordinated reasoning-path planning for parallel test-time scaling and a capability-manifold view of scaling laws for agentic harnesses.
- **LLM Agent Societies** — No new papers today.
- **Vision-Language-Action Models** — Three new papers cover recurrent associative episode memory, advantage-guided post-training, and TAMP-assisted demonstration-efficient fine-tuning.
- **Embodied Navigation** — New work includes large-scale semantic-map data, active-memory evidence-grounded zero-shot navigation, VLM metric scene understanding for manipulation, and radar-camera 3D perception as a cross-match.
- **LLM Pruning and Inference Optimization** — Two new papers target adaptive runtime-slack reclamation for driving inference and task-induced Riemannian geometry for ViT feature spaces.
- **Multimodal LLM Pruning** — No new papers today.
- **Continual Learning** — Two new papers cover microscaling convolution quantization and Riemannian optimization for structured low-parametric orthogonal matrices.
- **Event-Based Vision** — One new paper predicts ahead to offset latency in event-based object detection.
- **3D Point Cloud Perception** — One new paper presents SGDet3D++ for geometry-grounded 4D radar-camera 3D object detection.
- **3D Point Cloud Perception and Tracking** — No new papers today.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [State-Grounded Conditioning: Wrapping User-Facing LLM Agents Where Direction Depends on Live State](http://arxiv.org/abs/2609.27606v1)
Qi Liu et al. | 2026-09-23. Introduces State-Grounded Conditioning and identifies “direction drift” in user-facing agents conditioned on live state. It directly addresses LLM-agent engineering for state-dependent task direction and response alignment.

#### [Just-in-Time Memory: Learning to Curate Task-Adaptive Memory for LLM Agents](http://arxiv.org/abs/2609.27334v1)
Yefan Zhou et al. | 2026-09-23. Proposes just-in-time memory curation that adapts retrieved experience to the current task instead of using fixed write-time artifacts. This is core agent-memory engineering for improving LLM agents through task-adaptive reuse of past trajectories.

#### [Constraint-Driven Context Engineering: Designing Domain Interfaces for AI Systems](http://arxiv.org/abs/2609.27354v1)
Xiwei Xu et al. | 2026-09-23. Frames domain interfaces and context engineering around technical, regulatory, institutional, and normative constraints. It provides design guidance for LLM-agent context engineering in constrained real-world domains.

### Agent Test-Time Scaling and Self-Improvement
#### [Planned Test-Time Scaling with Coordinated Reasoning Paths](http://arxiv.org/abs/2609.27374v1)
Xueqing Wu et al. | 2026-09-23. Plans coordinated reasoning paths to reduce redundancy from independent parallel samples in test-time scaling. It directly targets inference-time scaling and self-improvement for challenging reasoning.

#### [The Capability Manifold and ML Scaling Laws](http://arxiv.org/abs/2609.27588v1)
Syed Ali Raza Zaidi et al. | 2026-09-23. Argues loss alone is insufficient for agentic deployment and proposes a capability-manifold view of ML scaling laws. It connects scaling-law analysis to agentic harnesses and test-time capability evaluation.

### LLM Agent Societies
No new papers today.

## 具身智能
### Vision-Language-Action Models
#### [MemBodied: Recurrent Associative Memory for Vision-Language-Action Models](http://arxiv.org/abs/2609.28256v1)
Tej Deep Pala et al. | 2026-09-23. Introduces recurrent associative memory to preserve episode-level information for VLA robot control. It directly improves VLA policies in history-dependent manipulation tasks.

#### [Dissecting Advantage-Guided Post-Training for Vision-Language-Action Policies](http://arxiv.org/abs/2609.28161v1)
Jiahang Cao et al. | 2026-09-23. Analyzes coupled choices in advantage-guided RL post-training for VLA policies under limited robot data. It provides post-training methodology for VLA policy improvement.

#### [TANDEM: Task and Motion Planning with As-Needed Demonstrations for Efficient Vision-Language-Action Model Fine-tuning](http://arxiv.org/abs/2609.28314v1)
Samrat Sahoo et al. | 2026-09-23. Uses task and motion planning to generate as-needed demonstrations for efficient VLA fine-tuning. It reduces teleoperation data burden for VLA model fine-tuning.

### Embodied Navigation
#### [NaviScale: Generating Large-Scale Semantic Map Datasets for Object Navigation](http://arxiv.org/abs/2609.27218v1)
Chuanlin Lan et al. | 2026-09-23. Generates large-scale semantic-map datasets for object navigation to improve generalization to unseen environments. It directly supports semantic-map-based ObjectNav and embodied navigation training.

#### [NavProbe: Evidence-Grounded Reasoning with Active Memory Retrieval for Zero-Shot Navigation](http://arxiv.org/abs/2609.27526v1)
Jingyang Liu et al. | 2026-09-23. Presents a hierarchical zero-shot navigation agent with evidence-grounded reasoning and active memory retrieval. It addresses long-horizon navigation by revising objectives as evidence accumulates.

#### [VLMs Can Describe, But Not Measure: Object-Centric Scene Understanding for Robotic Manipulation](http://arxiv.org/abs/2609.28184v1)
Enrico Saccon et al. | 2026-09-23. Proposes a VLM-driven modular perception pipeline for object-centric scene understanding in robotic manipulation. It bridges semantic VLM understanding with metric information needed for embodied navigation and manipulation.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [SlackDrive: Reclaiming Runtime Slack for Adaptive Driving Inference](http://arxiv.org/abs/2609.28064v1)
Xiaohuan Pei et al. | 2026-09-23. Reclaims runtime slack for adaptive driving inference to balance world-action model cost and real-time vehicle control. It directly targets inference optimization for large driving/action models under latency constraints.

#### [Task-Induced Riemannian Metrics for Vision Transformer Feature Spaces](http://arxiv.org/abs/2609.27988v1)
Andrew Bond et al. | 2026-09-23. Learns task-induced Riemannian metrics for ViT feature spaces instead of assuming Euclidean or cosine geometry. It is cross-matched to inference optimization and informs task-aware feature-space operations, though it is not LLM pruning.

### Multimodal LLM Pruning
No new papers today.

### Continual Learning
#### [MicroQonv: Reshaping Convolution Tensors for Efficient Microscaling in Training and Inference](http://arxiv.org/abs/2609.28358v1)
Romain Facq et al. | 2026-09-23. Reshapes convolution tensors for efficient microscaling quantization in training and inference. It is cross-matched to continual learning through efficient training/inference, but it does not directly address continual-learning mechanisms.

#### [Riemannian Structure and Optimization for a Class of Low-Parametric Orthogonal Matrices](http://arxiv.org/abs/2609.27982v1)
Ali Aliev et al. | 2026-09-23. Develops Riemannian structure and optimization for block-diagonal/permutation-structured low-parametric orthogonal matrices. It is cross-matched to continual learning via efficient structured deep-learning architectures, but is not a direct continual-learning method.

## 视觉感知
### Event-Based Vision
#### [Bend the Clock: Predicting Ahead to Beat Latency in Event-Based Object Detection](http://arxiv.org/abs/2609.26919v1)
Biswadeep Sen et al. | 2026-09-22. Predicts ahead to offset computational latency in event-based object detection for high-speed robotics. It directly addresses low-latency event-camera perception for robotic decisions.

### 3D Point Cloud Perception
#### [SGDet3D++: Geometry-Grounded Semantics for 4D Radar and Camera 3D Object Detection](http://arxiv.org/abs/2609.27671v1)
Xiaokai Bai et al. | 2026-09-23. Introduces geometry-grounded semantics for 4D radar-camera 3D object detection, making evidence support for object hypotheses explicit. It directly advances 3D point cloud and radar-camera perception for embodied systems.

### 3D Point Cloud Perception and Tracking
No new papers today.

## Cross-Topic Signals
- **Agent memory is a shared axis:** MemBodied, Just-in-Time Memory, and NavProbe all curate or retrieve past experience for VLA control, LLM agents, and navigation.
- **Test-time compute and latency optimization converge:** Planned Test-Time Scaling, Capability Manifold, SlackDrive, and Bend the Clock all address inference-time decisions under compute or latency budgets.
- **Geometry and metric grounding recur:** VLMs Can Describe, But Not Measure, SGDet3D++, and Task-Induced Riemannian Metrics all augment semantic representations with task-relevant geometry.
- **State- and constraint-aware interfaces:** State-Grounded Conditioning and Constraint-Driven Context Engineering both engineer agent behavior around live state and domain constraints.
- **Efficient structured/quantized computation appears across compression topics:** MicroQonv, Riemannian low-parametric matrices, and SlackDrive explore compression or optimization, though current mappings to continual learning and LLM pruning are indirect.

## Priority Reading
#### **[MemBodied: Recurrent Associative Memory for Vision-Language-Action Models](http://arxiv.org/abs/2609.28256v1)** — Directly injects recurrent associative episode memory into VLA, a concrete mechanism for history-dependent manipulation and a bridge to agent-memory work.
#### **[Planned Test-Time Scaling with Coordinated Reasoning Paths](http://arxiv.org/abs/2609.27374v1)** — Exact test-time scaling method likely reusable for agent self-improvement and reasoning-budget allocation.
#### **[Just-in-Time Memory: Learning to Curate Task-Adaptive Memory for LLM Agents](http://arxiv.org/abs/2609.27334v1)** — Task-adaptive memory curation is central to LLM agent engineering and echoes NavProbe and MemBodied across topics.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*