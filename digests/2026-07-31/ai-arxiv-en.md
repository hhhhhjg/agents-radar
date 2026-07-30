# Lab Research Topics Radar 2026-07-31

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 32 new + 10 seen in the last 14 days | Generated: 2026-07-30 22:59 UTC

---

## Today’s Overview

- **LLM Agent Engineering**: 10 new papers – memory (filesystem), cost-aware tool selection, edge reasoning with deferral, travel planning & office‑suite benchmarks, security incident response, interactive agent evolution, cross‑task skill RL, urban data science, PINN algorithm discovery.
- **Agent Test‑Time Scaling and Self‑Improvement**: 1 new (adversarial red‑teaming agent); 3 repeated (driving self‑play, GUI reward verification, visual prompt engineering).
- **LLM Agent Societies**: No new papers today.
- **Vision‑Language‑Action Models**: 10 new – real‑time VLA, test‑time steering, 3D kinematic guidance, agentic embodied control, latent actions, execution‑time verification, world‑state datasets, experience synthesis.
- **Embodied Navigation**: 6 new – biomedical lab simulation, 3DGS quality assessment, depth‑aware panoptic segmentation, video‑based SfM, plus two weaker matches omitted.
- **LLM Pruning and Inference Optimization**: No new papers today; 2 repeated (cross‑modal routing, prompt compression).
- **Multimodal LLM Pruning**: No new papers today; 1 repeated (sparse cross‑modal routing).
- **Continual Learning**: 3 new (sparse relational memory, game‑theoretic fine‑tuning, federated MoE‑LoRA); 5 repeated (developmental learning, LoRA study, video saliency, wireless foundation model, image restoration).
- **Event‑Based Vision**: 1 new (spiking object detection).
- **3D Point Cloud Perception**: 1 new (long‑tailed dataset distillation).
- **3D Point Cloud Perception and Tracking**: No new papers today.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [Scores Are Not Decisions: Cost‑Aware Stopping for Tool Acquisition in LLM Agents](http://arxiv.org/abs/2607.27083v1)
Feng et al. | 2026-07-29 | Proposes a cost‑aware stopping criterion for tool selection to balance informativeness and overhead. Directly addresses a core engineering problem in agent harnesses.

#### [Filesystem‑Based Memory for LLM Agents: Organization, Evolution, and Sustainability](http://arxiv.org/abs/2607.26637v1)
Zhou et al. | 2026-07-29 | Treats the agent’s long‑term memory as a self‑organized filesystem of markdown files. Novel practical approach to persistent, evolvable memory in deployed agents.

#### [TREK: A Travel Reasoning and Evaluation Kit for LLM Agents in Complex Trip Planning](http://arxiv.org/abs/2607.26977v1)
Qi et al. | 2026-07-29 | A benchmark for multi‑constraint travel planning that stresses tool‑use and constraint satisfaction. Provides a realistic stress test for agent planning capabilities.

#### [Think Short, Defer Smart, Act, and Repeat: Calibrated Reasoning and Uncertainty‑Aware Deferral for Edge LLM Agents](http://arxiv.org/abs/2607.26865v1)
Farzaneh & Simeone | 2026-07-29 | Introduces calibrated reasoning with deferral to cloud for edge‑deployed ReAct agents. Directly relevant to resource‑constrained agent deployment.

#### [OmegaUse‑OfficeVal: Benchmarking LLM Agents on Long‑Horizon Office‑Suite Tasks with Economic Grounding](http://arxiv.org/abs/2607.27155v1)
Zhou et al. | 2026-07-29 | A benchmark evaluating LLM agents on office workflows with explicit cost constraints. Provides a realistic economic evaluation framework.

#### [Living‑Harness Is an Interactive‑Agent Evolver](http://arxiv.org/abs/2607.26598v1)
Du et al. | 2026-07-29 | Evolves agent harnesses through post‑episode feedback to prevent recurring failures. Addresses persistent improvement of agent behavior over time.

#### [SecRespond: Benchmarking AI Agents for Real‑World Post‑Compromise Incident Response](http://arxiv.org/abs/2607.26791v1)
Wang et al. | 2026-07-29 | A benchmark for LLM agents in post‑compromise security operations with CLI access. Extends agent evaluation to critical cybersecurity scenarios.

#### [SkillRise: Agentic Reinforcement Learning for Cross‑Task Skill Evolution](http://arxiv.org/abs/2607.26784v1)
Yao et al. | 2026-07-29 | Uses agentic RL to learn reusable skills across related but distinct tasks. Directly relevant to improving agent generalization.

#### [UrbanDS: A Graph‑Guided LLM Multi‑Agent System for Data‑Intensive Urban Tasks](http://arxiv.org/abs/2607.26724v1)
Zhou et al. | 2026-07-29 | A multi‑agent system that uses knowledge graphs to coordinate data discovery and analysis. Connects agent engineering with knowledge‑grounded reasoning.

#### [EvoPINN: Agentic Discovery of Executable Algorithms for Physics‑Informed Neural Networks](http://arxiv.org/abs/2607.26490v1)
Yin et al. | 2026-07-29 | Uses LLM agents to evolve PINN architectures and loss formulations automatically. Demonstrates agent‑driven algorithm design.

### Agent Test‑Time Scaling and Self‑Improvement

#### [GPT‑Red: Automated Red Teaming via Self‑Play at Scale](http://arxiv.org/abs/2607.26115v1)
Wallace et al. | 2026-07-28 | Trains an agent to discover novel prompt‑injection attacks via self‑play, used for adversarial training of GPT‑5.6. Directly applies test‑time scaling for security improvement.

#### 🔁 [SEEN IN THE LAST 14 DAYS] [Pictura: Perspective‑View Self‑Play at Scale for Driving](http://arxiv.org/abs/2607.26005v1)
Yin et al. | 2026-07-28 | Self‑play in simulation with perspective‑view inputs to produce robust driving policies. Relevant to self‑play as a test‑time scaling method.

#### 🔁 [SEEN IN THE LAST 14 DAYS] [Interactive Reward Agent: GUI Task Evaluation via Environment‑State Verification](http://arxiv.org/abs/2607.25904v2)
Shi et al. | 2026-07-28 | Uses environment‑state verification to evaluate GUI agent task completion, providing reward for test‑time scaling. Relevant to self‑improvement via reward signals.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Visual prompt engineering for video models](http://arxiv.org/abs/2607.25537v1)
Geirhos et al. | 2026-07-28 | Explores prompt engineering techniques for video foundation models. Relevant to test‑time adaptation through prompt optimization.

## 具身智能

### Vision‑Language‑Action Models

#### [TurboVLA: Real‑Time Vision‑Language‑Action Model at 32 Hz on an RTX 4090 with <1 GB VRAM](http://arxiv.org/abs/2607.27205v1)
Xie et al. | 2026-07-29 | Achieves 32 Hz inference for VLA by avoiding LLM‑centric token projection. Direct relevance to efficient deployment of VLA models.

#### [RL²‑VLA: Adaptive RL Latent Compositional Steering with Test‑Time Scaling for Vision‑Language‑Action Models](http://arxiv.org/abs/2607.26991v1)
Tan et al. | 2026-07-29 | Applies test‑time steering and scaling to improve VLA performance on out‑of‑domain tasks. Directly connects test‑time scaling to embodied VLA.

#### [Explicit Kinematic Guidance from Analytic Concepts for Vision‑Language‑Action Models](http://arxiv.org/abs/2607.26513v1)
Sun et al. | 2026-07-29 | Injects 3D kinematic priors into VLA models to improve spatial awareness for precise manipulation. Addresses a key limitation of 2D‑only VLA.

#### [Embodied Agents Take Control: Minimal‑Interface Zero‑Shot Agents Rival Industrial‑Scale Policies in Vision‑and‑Language Navigation](http://arxiv.org/abs/2607.26148v1)
Zhou et al. | 2026-07-28 | Shows that general‑purpose LLM agents with minimal interfaces can match specialized policies in VLN. Bridges agent engineering and embodied navigation.

#### [DLAM: Distributional Latent Actions with Temporal Constraints](http://arxiv.org/abs/2607.27138v1)
Tang et al. | 2026-07-29 | Learns latent action models from action‑free video using temporal constraints to improve VLA training. Relevant to data‑efficient VLA.

#### [CheckVLA: Execution‑Time Verification with Action‑Conditioned World Model for Long‑Horizon Mobile Manipulation](http://arxiv.org/abs/2607.26789v1)
Liu et al. | 2026-07-29 | Verifies actions during execution using a world model to prevent deviations in open‑loop VLA policies. Directly improves VLA reliability.

#### [CG‑World: A Large‑Scale World‑State Dataset and Protocol for World Models](http://arxiv.org/abs/2607.26452v1)
Cai et al. | 2026-07-29 | Provides a dataset from industrial graphics capturing full state‑action‑event dynamics. Relevant for training VLA world models.

#### [From Passive Video to Editable Experience: Physically Grounded Experience Synthesis for Embodied Intelligence](http://arxiv.org/abs/2607.26903v1)
Luo | 2026-07-29 | Framework (Pegasus) that bridges human manipulation videos to robot training via physically grounded synthesis. Directly addresses VLA data scarcity.

### Embodied Navigation

#### [BioVLN: A Simulation Platform for Visual Language Navigation in Biomedical Laboratories](http://arxiv.org/abs/2607.26914v1)
Liu et al. | 2026-07-29 | A VLN platform designed for biomedical lab environments with instrument‑centric navigation. Expands embodied navigation to a domain‑specific, targeted use case.

#### [SpatialQ: Understanding 3D Gaussian Splatting Scene Quality via Visual‑based MLLM](http://arxiv.org/abs/2607.26595v1)
Su et al. | 2026-07-29 | Assesses 3DGS scene quality from rendered views, relevant for evaluating reconstructed navigation environments. Supports quality assurance in navigation scene reconstruction.

#### [DVPSFormer: Efficient Online Depth‑aware Video Panoptic Segmentation for Autonomous Driving](http://arxiv.org/abs/2607.26165v1)
Yang et al. | 2026-07-28 | Unifies depth, segmentation, and instance tracking online for autonomous driving. Core perception module for navigation.

#### [VidMap: Exploiting Temporal Structure for Video‑Based Structure‑from‑Motion](http://arxiv.org/abs/2607.27194v1)
Pataki et al. | 2026-07-29 | Recovers metric camera poses from unconstrained video, unlocking large‑scale navigation training data. Directly relevant to training data generation for navigation.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Every Time I Hire a Linguist, Inference Costs Go Down: On Linguistic Rules as Effective Prompt Compressors](http://arxiv.org/abs/2607.25335v2)
Ma et al. | 2026-07-28 | Shows that linguistic rules can compress prompts without costly LM‑based token scoring. Lowers inference cost via lightweight compression.

### Multimodal LLM Pruning

#### 🔁 [SEEN IN THE LAST 14 DAYS] [Salient Knowledge Pathways: Sparse Cross‑Modal Routing for Efficient Knowledge‑Intensive Multimodal Question Answering](http://arxiv.org/abs/2607.25422v1)
Mohammad & Bayazıt | 2026-07-28 | Uses sparse routing to selectively activate cross‑modal fusion only when needed. Reduces cost for multimodal QA by pruning unnecessary computation.

### Continual Learning

#### [The Art of Not Forgetting: A Local Learning Architecture for Continual Learning](http://arxiv.org/abs/2607.26523v1)
Atmuri & Bhogarajula | 2026-07-29 | Introduces CMP, a continual learning architecture using sparse relational codes and local updates without backprop. Novel architecture for forgetting‑free learning.

#### [Post‑Training at the Edge of Detectability: A Game‑Theoretic Approach to Fine‑Tuning](http://arxiv.org/abs/2607.26358v1)
Harris et al. | 2026-07-29 | Formulates RL fine‑tuning as a game between task performance and detectability of drift. Provides a principled trade‑off for continual fine‑tuning.

#### [FedWeave: Rethinking the Unit of Specialization in Heterogeneous Federated MoE‑LoRA](http://arxiv.org/abs/2607.26618v1)
Duan et al. | 2026-07-29 | Uses mixture‑of‑experts and LoRA to handle task heterogeneity in federated continual learning. Directly addresses cross‑task interference.

#### 🔁 [SEEN IN THE LAST 14 DAYS] [Multi‑Scale Structural Features for Continual, Comprehensible Visual Recognition in a Developmental Learning Framework](http://arxiv.org/abs/2607.25531v1)
Erden | 2026-07-28 | Developmental gradient‑free learning framework for continual visual recognition. Relevant to non‑backprop continual learning.

#### 🔁 [SEEN IN THE LAST 14 DAYS] [How Small Can You Go? A Controlled Study of LoRA Rank, Target Modules, and Quantization Trade‑offs for Text‑to‑SQL on a 60M‑Parameter Model](http://arxiv.org/abs/2607.25583v1)
Rathor & Azzam | 2026-07-28 | Systematic study of PEFT and quantization interactions on a small model. Informs efficient continual fine‑tuning under tight budgets.

#### 🔁 [SEEN IN THE LAST 14 DAYS] [RDVSv2: A Large‑scale Benchmark for RGB‑D Video Salient Object Detection](http://arxiv.org/abs/2607.25392v1)
Li et al. | 2026-07-28 | Large‑scale benchmark for RGB‑D video saliency with dense annotations. Provides evaluation platform for continual learning in video perception.

#### 🔁 [SEEN IN THE LAST 14 DAYS] [WALoMA: A Multitask Wireless Foundation Model via Adaptive Low‑Rank Masked Autoencoders](http://arxiv.org/abs/2607.25763v1)
Makin et al. | 2026-07-28 | Multi‑task foundation model for 6G using low‑rank adaptation. Demonstrates continual pretraining across wireless tasks.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [ScaleResfusion: Residual Rectified Flow based on Residual Vector Field](http://arxiv.org/abs/2607.25275v1)
Shi et al. | 2026-07-28 | Diffusion‑based image restoration with residual rectified flow. Relevant to continual adaptation in low‑level vision.

## 视觉感知

### Event‑Based Vision

#### [Sequence‑SOD: Bio‑inspired Sequence‑aware Spiking Object Detection for Event Cameras](http://arxiv.org/abs/2607.26703v1)
Bendig et al. | 2026-07-29 | Proposes a spiking neural network for object detection that leverages temporal structure of event streams. Directly advances event‑based perception with SNNs.

### 3D Point Cloud Perception

#### [Long‑Tailed 3D Point Cloud Dataset Distillation](http://arxiv.org/abs/2607.26763v1)
You et al. | 2026-07-29 | Addresses long‑tail distribution in 3D point cloud dataset distillation to preserve training utility. Relevant to efficient training under realistic data imbalances.

## Cross‑Topic Signals

- **Test‑time scaling and steering** appears both in VLA (RL²‑VLA – paper 2) and in agent self‑improvement (GPT‑Red – paper 13; Pictura – paper 33), indicating a converging interest in dynamic adaptation without full retraining.
- **Memory and continual learning** connect agent engineering (filesystem memory – paper 9) with continual learning architectures (CMP – paper 8), both emphasizing structured, persistent knowledge that evolves over episodes.
- **Cost‑awareness** unifies agent tool acquisition (paper 6), edge deployment (paper 11), and LLM pruning (papers 36, 37), reflecting a practical push for resource‑efficient AI.
- **RL‑based skill evolution** bridges agent engineering (SkillRise – paper 20) and continual learning (game‑theoretic fine‑tuning – paper 19), suggesting a cross‑fertilization of RL techniques for agent improvement and model adaptation.

## Priority Reading

1. **TurboVLA (paper 1)** – Achieves 32 Hz VLA inference on consumer hardware, a critical engineering milestone for real‑time embodied deployment.
2. **GPT‑Red (paper 13)** – Demonstrates test‑time scaling via self‑play for security, a novel application with immediate practical implications for agent robustness.
3. **Filesystem‑Based Memory (paper 9)** – Offers a simple yet scalable memory framework for LLM agents, directly addressing a persistent bottleneck in deployed systems.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*