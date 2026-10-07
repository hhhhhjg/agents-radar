# Lab Research Topics Radar 2026-10-07

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 15 new + 0 seen in the last 14 days | Generated: 2026-10-07 01:10 UTC

---

## Today's Overview
- LLM Agent Engineering: No new papers today.
- Agent Test-Time Scaling and Self-Improvement: Three new works: CLIFT applies conformal self-verification to web-agent training and test-time scaling; DiVeR learns decision-critical verifiers for VLA test-time scaling; Verification Trap diagnoses verifier-selection failures under false premises in code generation.
- LLM Agent Societies: No new papers today.
- Vision-Language-Action Models: Three new VLA papers: StairVLA introduces stage-aware hierarchical action generation; VLA-ACL proposes action-consistent visual token pruning; SALT adapts VLA policies to unknown visual disruptions via leftover trajectories.
- Embodied Navigation: Three new navigation papers: MarvisNav makes memory visible for zero-shot object navigation; Sim-to-Real transfers VLN in continuous environments to an Ackermann-steered robot; StageVLN adds spatial and trajectory auxiliary guidance for efficient VLN.
- LLM Pruning and Inference Optimization: One new work: VisionWeave makes elastic visual representations a native MLLM capability to reduce dense patch-token cost.
- Multimodal LLM Pruning: Two matched advances: VLA-ACL’s action-consistent visual token pruning (cross-listed under VLA) and Efficient Multimodal Inference’s adaptive acquisition and sequential fusion.
- Continual Learning: Three new PEFT/adaptation works: Dynamic Positional Attention Modulation, RoSA, and Gradient Admission target heterogeneous attention, layer-wise sparse adaptation, and gradient-aware data admission.
- Event-Based Vision: No new papers today.
- 3D Point Cloud Perception: One new work: OpenSplatGraph converts dense semantic maps into structured scene graphs for open-vocabulary robot perception.
- 3D Point Cloud Perception and Tracking: No new papers today.

## LLM Agent 与多智能体
### LLM Agent Engineering
No new papers today.

### Agent Test-Time Scaling and Self-Improvement
#### [CLIFT: Conformal Self-Verification for Web Agent Training and Test-Time Scaling](http://arxiv.org/abs/2610.06829v1)
Zhang, Dai, Prabhu et al. | 2026-10-05. Contribution: Proposes conformal self-verification to provide a cheaper, calibrated signal for web-agent RL and test-time scaling. Relevance: Directly targets agent test-time scaling and self-improvement by improving verifier-guided selection/training.

#### [DiVeR: Decision-Critical Verifier Learning for VLA Test-Time Scaling](http://arxiv.org/abs/2610.04933v1)
Park, Kim, Tian et al. | 2026-10-04. Contribution: Learns decision-critical verifiers to select among sampled VLA action candidates under data constraints. Relevance: Connects verifier-guided test-time scaling to embodied control policies.

#### [Verification Trap: Understanding Test-Time Selection Failures under False Premises in Code Generation](http://arxiv.org/abs/2610.05170v1)
He, Wang, Meng et al. | 2026-10-04. Contribution: Shows that verifier-visible evidence can fail to correct generator false premises during test-time selection. Relevance: Important failure analysis for test-time compute and self-verification pipelines.

### LLM Agent Societies
No new papers today.

## 具身智能
### Vision-Language-Action Models
#### [StairVLA: Stage-Aware Hierarchical Action Generation for Vision-Language-Action Models](http://arxiv.org/abs/2610.07756v1)
Yuan, Qi, Pu et al. | 2026-10-06. Contribution: Introduces stage-aware hierarchical action generation for diffusion/flow-matching VLA action heads. Relevance: Core VLA action-generation improvement.

#### [VLA-ACL: Action-Consistent Visual Token Pruning for Efficient Vision-Language-Action Models](http://arxiv.org/abs/2610.08133v1)
Du, Yue, Zhang et al. | 2026-10-06. Contribution: Prunes visual tokens in an action-consistent way to reduce VLA inference cost. Relevance: Bridges VLA efficiency with multimodal token pruning.

#### [Adapting Vision-Language-Action Models to Unknown Visual Disruptions During Execution](http://arxiv.org/abs/2610.07946v1)
Lee, Seo, Jang et al. | 2026-10-06. Contribution: Uses unexecuted trajectory portions for self-supervised adaptation to unknown visual disruptions. Relevance: Improves VLA robustness during execution without disruption labels.

### Embodied Navigation
#### [MarvisNav: Making Memory Visible on Route Choices for Zero-Shot Object Navigation](http://arxiv.org/abs/2610.06510v1)
Wang, Chan, Zeng et al. | 2026-10-05. Contribution: Makes place-associated memory visible for route choices in zero-shot object navigation. Relevance: Directly advances memory-guided embodied navigation.

#### [StageVLN: Spatial and Trajectory Auxiliary Guidance for Efficient Vision-Language Navigation](http://arxiv.org/abs/2610.05664v1)
Dao, Pham, Vinh et al. | 2026-10-05. Contribution: Adds spatial and trajectory auxiliary guidance to preserve scene geometry and orientation in VLN policies. Relevance: Core VLN representation/efficiency improvement.

#### [Sim-to-Real Transfer of Vision-Language Navigation in Continuous Environments Using an Ackermann-Steered Mobile Robot](http://arxiv.org/abs/2610.07192v1)
Abeywansa, Gunasekara, De Silva et al. | 2026-10-05. Contribution: Demonstrates sim-to-real transfer of continuous-environment VLN on an Ackermann-steered robot without navigation graphs/360 views/perfect localization. Relevance: Practical embodied navigation deployment.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [VisionWeave: Weaving Elastic Visual Representations as a Native Capability of MLLMs](http://arxiv.org/abs/2610.07987v1)
Feng, Yang, Chen et al. | 2026-10-06. Contribution: Enables elastic visual representations to reduce dense fixed-size patch tokens in MLLMs. Relevance: Inference optimization via adaptive visual token allocation.

### Multimodal LLM Pruning
#### [Efficient Multimodal Inference through Adaptive Acquisition and Sequential Fusion](http://arxiv.org/abs/2610.07466v1)
Mohapatra, Yang, Sui et al. | 2026-10-05. Contribution: Uses incrementally fused evidence to decide which modality to encode next and when to stop. Relevance: Reduces multimodal inference cost via adaptive acquisition/pruning.

### Continual Learning
#### [Dynamic Positional Attention Modulation for Parameter-Efficient Fine-Tuning of Large Language Models](http://arxiv.org/abs/2610.07848v1)
Pan, Wang, Yu. | 2026-10-06. Contribution: Modulates positional attention dynamically to account for heterogeneous attention structure in PEFT. Relevance: Supports efficient sequential adaptation/continual fine-tuning.

#### [Which and When to Admit: Gradient Admission for Data-Centric Small Language Model Finetuning](http://arxiv.org/abs/2610.07553v1)
Cao, Liu, Liu et al. | 2026-10-06. Contribution: Introduces gradient admission to address conflicting gradients, static data selection, and subspace saturation in LoRA finetuning. Relevance: Relevant to continual learning under heterogeneous instruction data.

#### [RoSA: Rotational Sparse Adaptation for Memory-Efficient Fine-Tuning](http://arxiv.org/abs/2610.06243v1)
Lodhi, Zhou, Burkholz. | 2026-10-05. Contribution: Narrows adaptation to subsets of layers at a time while freezing lower layers. Relevance: Memory-efficient PEFT that can support continual adaptation.

## 视觉感知
### Event-Based Vision
No new papers today.

### 3D Point Cloud Perception
#### [OpenSplatGraph: From Dense Semantic Maps to Structured Scene Graphs for Open-Vocabulary Robot Perception](http://arxiv.org/abs/2610.07569v1)
Nguyen, Nguyen, Fookes et al. | 2026-10-06. Contribution: Converts dense 3D Gaussian Splatting semantic maps into structured open-vocabulary scene graphs. Relevance: Advances 3D point-cloud/map perception for robot scene understanding.

### 3D Point Cloud Perception and Tracking
No new papers today.

## Cross-Topic Signals
- Verifier-guided test-time scaling spans web agents, VLA control, and code generation; the shared risk is verifier reliability/calibration, as CLIFT, DiVeR, and Verification Trap show.
- Visual-token economy connects VLA models, multimodal LLM pruning, and LLM inference optimization: VLA-ACL, Efficient Multimodal Inference, and VisionWeave all adapt what visual evidence to encode.
- Memory and spatial structure bridge embodied navigation and 3D perception: MarvisNav and StageVLN use explicit spatial/trajectory context, while OpenSplatGraph builds structured scene graphs from semantic maps.
- Adaptation under distribution shift links VLA robustness, sim-to-real navigation, and continual/PEFT methods that regulate gradients, layers, or attention.
- Data-centric and parameter-efficient fine-tuning ideas share the question of which parameters or data to update, relevant to ongoing adaptation.

## Priority Reading
- [VLA-ACL](http://arxiv.org/abs/2610.08133v1) — Cross-cuts VLA and multimodal LLM pruning; action-consistent token selection is directly useful for real-time VLA deployment.
- [CLIFT](http://arxiv.org/abs/2610.06829v1) — Core agent test-time scaling/self-improvement paper; conformal self-verification addresses expensive or sparse supervision in web agents.
- [OpenSplatGraph](http://arxiv.org/abs/2610.07569v1) — Connects embodied navigation and 3D point-cloud perception by turning dense semantic maps into structured scene graphs for open-vocabulary robot perception.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*