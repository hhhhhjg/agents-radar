# Lab Research Topics Radar 2026-07-23

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 10 configured topics | 38 new + 0 seen in the last 14 days | Generated: 2026-07-23 13:32 UTC

---

**Research Topics Radar**  
Generated on 2026-07-23 from 38 new papers matched to the lab’s configured interests.

---

## 1. Today’s Overview
- **LLM Agent 与多智能体 / LLM Agent Engineering**: 15 new papers – advances in agent security (guardrails, backdoors), debugging toolkits, code optimization, freight market simulation, group travel planning, and HPC workflows.  
- **LLM Agent 与多智能体 / Agent Test-Time Scaling and Self-Improvement**: 0 new papers today.  
- **LLM Agent 与多智能体 / LLM Agent Societies**: 0 new papers today.  
- **具身智能 / Vision-Language-Action Models**: 8 new papers – retail humanoid VLA, referential tracking, clutter‑reduction, efficient dense‑feature policies, force‑based memory, and humanoid loco‑manipulation.  
- **具身智能 / Embodied Navigation**: 0 new papers today.  
- **模型压缩与持续学习 / LLM Pruning and Inference Optimization**: 2 new papers – TV‑distance estimation for inference engines and selective neuron loading for on‑device LLMs.  
- **模型压缩与持续学习 / Multimodal LLM Pruning**: 1 new paper – causal interpretability framework for diffusion transformers (text‑to‑image).  
- **模型压缩与持续学习 / Continual Learning**: 10 new papers – PEFT rank allocation, programmatic memory for long‑horizon tasks, backdoor defense via critical neuron pruning, edge continual learning, point‑cloud adaptation, video‑MLLM domain adaptation, and robust digital twins.  
- **视觉感知 / Event-Based Vision**: 0 new papers today.  
- **视觉感知 / 3D Point Cloud Perception**: 4 new papers – multi‑view panoptic segmentation, collaborative 3D detection, PEFT for point clouds, and line‑scanning lidar calibration.

---

## 2. Research Areas

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [PRO-LONG: Programmatic Memory Enables Long-Horizon Reasoning](http://arxiv.org/abs/2607.20064v1)
Authors: Fox et al. | Published: 2026-07-22 | Contribution: Introduces programmatic memory that decouples episodic knowledge from parametric weights, enabling LLM agents to solve long‑horizon tasks on continual learning benchmarks (ARC‑AGI‑3).  
Relevance: Directly addresses a core agent limitation – sustained reasoning – and ties into continual learning via its benchmark.

#### [DocOps: A Verifiable Benchmark for Autonomous Agents in Complex Document Operations](http://arxiv.org/abs/2607.19865v1)
Authors: Jiang et al. | Published: 2026-07-22 | Contribution: Proposes a deterministically verifiable evaluation framework for agents performing multi‑step document manipulation tasks.  
Relevance: Fills a gap in evaluating real‑world document workflows, a key capability for office‑automation agents.

#### [PerfAgent: Profiler-Guided Iterative Refinement for Repository-Level Code Optimization](http://arxiv.org/abs/2607.19653v1)
Authors: Deng et al. | Published: 2026-07-22 | Contribution: A profiler‑driven LLM agent that iteratively optimizes repository‑level code while preserving correctness.  
Relevance: Showcases closed‑loop agent refinement for software engineering, a high‑impact use case.

#### [Twin Agent: Context Residual Compression for Privilege Separated Agents](http://arxiv.org/abs/2607.19595v1)
Authors: Hu et al. | Published: 2026-07-21 | Contribution: Separates untrusted observations from privileged execution by compressing contextual residuals, mitigating prompt injection attacks.  
Relevance: Novel security architecture for LLM agents, directly relevant to safe deployment.

#### [The Story Shapes the Agent: Narrative Priors in LLM Behavior](http://arxiv.org/abs/2607.18566v1)
Authors: Wang et al. | Published: 2026-07-20 | Contribution: Uses structural isomorphism in text‑based games to demonstrate that narrative framing, not persona, dominates agent behavior.  
Relevance: Challenges common agent‑steering practices, informing prompt engineering strategies.

### Agent Test-Time Scaling and Self-Improvement
*No new papers today.*

### LLM Agent Societies
*No new papers today.*

## 具身智能
### Vision-Language-Action Models
#### [Closing the Lab-to-Store Gap: A Data-Efficient Post-Training and Experience-Driven Learning VLA Framework for Retail Humanoids](http://arxiv.org/abs/2607.20345v1)
Authors: Sala Sisó et al. | Published: 2026-07-22 | Contribution: Presents DEED, a data‑efficient post‑training and experience‑driven framework that adapts VLA humanoids to retail environments with minimal real‑world data.  
Relevance: Bridges the benchmark–deployment gap for humanoid VLA, highly relevant to embodied commerce.

#### [ReferTrack: Referring Then Tracking for Embodied Visual Tracking](http://arxiv.org/abs/2607.20061v1)
Authors: Ye et al. | Published: 2026-07-22 | Contribution: Decouples target identification from trajectory planning in VLA policies, improving robustness in continuous visual tracking.  
Relevance: Advances a core capability for mobile agents – long‑term target following.

#### [LENS: LLM-guided Environment Simplification for Planning and Control in Clutter](http://arxiv.org/abs/2607.19633v1)
Authors: Liao et al. | Published: 2026-07-22 | Contribution: Uses an LLM to simplify cluttered scenes into sub‑problems, then solves each with classical or learned planners.  
Relevance: Hybrid LLM‑classical approach for manipulation in clutter, practical for real‑world robotics.

#### [Patch Policy: Efficient Embodied Control via Dense Visual Representations](http://arxiv.org/abs/2607.18236v1)
Authors: Zhou et al. | Published: 2026-07-20 | Contribution: Leverages pretrained dense ViT patch features directly for robot control, improving spatial granularity without full image reconstruction.  
Relevance: Offers an efficient alternative to global‑token policies, promising for real‑time control.

#### [FM-VLA: Force-based Memory for Vision-Language-Action Models in Contact-Rich Manipulation](http://arxiv.org/abs/2607.18231v1)
Authors: Li et al. | Published: 2026-07-20 | Contribution: Augments VLA models with force‑based memory to handle contact‑rich tasks where vision alone fails.  
Relevance: Addresses a critical sensor modality gap in manipulation, enabling more robust interaction.

### Embodied Navigation
*No new papers today.*

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [Total Variation Distance Estimation in Autoregressive Models](http://arxiv.org/abs/2607.19510v1)
Authors: Price et al. | Published: 2026-07-21 | Contribution: Provides algorithms to estimate the total variation distance between different inference engine outputs serving the same LLM weights.  
Relevance: Essential for validating consistency across quantization, batching, and custom kernels.

#### [SelectInfer: Selective Neuron Loading and Computation for On-Device LLMs](http://arxiv.org/abs/2607.18081v1)
Authors: Kabakibo et al. | Published: 2026-07-20 | Contribution: Introduces dynamic neuron‑level loading and computation to reduce memory and latency for on‑device LLM inference.  
Relevance: Directly addresses practical deployment constraints on edge devices.

### Multimodal LLM Pruning
#### [Text Template Tokens Are Implicit Semantic Registers in Diffusion Transformers](http://arxiv.org/abs/2607.19139v1)
Authors: Li et al. | Published: 2026-07-21 | Contribution: Reveals that text template tokens act as semantic registers in DiTs, and uses attention decomposition for targeted interventions.  
Relevance: Opens new avenues for pruning or compressing multimodal transformer components via interpretability.

### Continual Learning
#### [Statistical Inference for Rank Allocation in Low-Rank Adaptation](http://arxiv.org/abs/2607.20205v1)
Authors: Gao et al. | Published: 2026-07-22 | Contribution: Develops a statistical inference method to optimally allocate rank budgets across LoRA modules under fixed parameter constraints.  
Relevance: Directly improves parameter‑efficient continual fine‑tuning by principled rank assignment.

#### [Leveraging ECRAM for Edge Continual Learning](http://arxiv.org/abs/2607.19661v1)
Authors: Tasnim et al. | Published: 2026-07-22 | Contribution: Proposes using emerging ECRAM devices to enable energy‑efficient continual learning on edge platforms.  
Relevance: Hardware‑software co‑design for deploying continual learning in resource‑limited settings.

#### [Continual Video-MLLM Adaptation over Evolving Domains](http://arxiv.org/abs/2607.18716v1)
Authors: Cheng et al. | Published: 2026-07-21 | Contribution: Adapts video MLLMs to sequentially arriving domains without catastrophic forgetting, using replay and regularization.  
Relevance: Extends continual learning to video understanding, a practical need for deployed vision models.

#### [A Continual Validation, Updating, and Decision-Making Framework for Self-Adaptive Digital Twins via Robust Model Predictive Control](http://arxiv.org/abs/2607.18164v1)  
Authors: Chen et al. | Published: 2026-07-20 | Contribution: Combines continual learning with robust MPC to maintain surrogate model fidelity under concept drift in digital twins.  
Relevance: Industrial application of continual learning for manufacturing, demonstrating real‑world impact.

#### [Manifold-Constrained Hyper-Connections for Parameter-Efficient Finetuning](http://arxiv.org/abs/2607.18130v1)
Authors: Oldenburg et al. | Published: 2026-07-20 | Contribution: Generalizes residual connections into manifold‑constrained hyper‑connections as a new PEFT method.  
Relevance: Novel architectural PEFT technique that could complement existing continual learning methods.

## 视觉感知
### Event-Based Vision
*No new papers today.*

### 3D Point Cloud Perception
#### [Extending a Large View Synthesis Model for Multi-view Panoptic Segmentation](http://arxiv.org/abs/2607.19765v1)
Authors: Ryu et al. | Published: 2026-07-22 | Contribution: Shows that cross‑view attention in view‑synthesis models generalizes to panoptic segmentation without explicit 3D representations.  
Relevance: Enables 3D scene understanding from multi‑view RGB only, bypassing need for depth or point clouds.

#### [Point Ladder Tuning: Parameter-Efficient Hierarchical Adaptation for 3D Point Cloud Understanding](http://arxiv.org/abs/2607.19171v1)
Authors: Chang et al. | Published: 2026-07-21 | Contribution: Introduces hierarchical PEFT for point‑cloud backbones that preserves fine‑grained features lost during aggressive tokenization.  
Relevance: Directly addresses the efficiency–accuracy trade‑off in adapting pretrained point‑cloud models.

#### [CoGoal3D: Collaborative 3D Object Detection with 3D-Aware Fusion and Refinement](http://arxiv.org/abs/2607.19036v1)
Authors: Yang et al. | Published: 2026-07-21 | Contribution: Proposes a V2X collaborative 3D detection framework with 3D‑aware feature fusion and refinement.  
Relevance: Advances multi‑agent 3D perception for autonomous driving, leveraging cross‑vehicle collaboration.

#### [Two-Stage Extrinsic Calibration of a Static Line-Scanning Lidar with a Rotary Platform](http://arxiv.org/abs/2607.18578v1)
Authors: Shree et al. | Published: 2026-07-20 | Contribution: Develops a calibration pipeline for line‑scanning lidars on rotating platforms, enabling full 3D perception with low‑cost hardware.  
Relevance: Practical calibration method for industrial 3D scanning and inspection systems.

---

## 3. Cross-Topic Signals
- **Programmatic memory (PRO-LONG) bridges LLM agents and continual learning**: The same paper appears in both topics, highlighting how external memory can solve long‑horizon agent tasks while also preventing catastrophic forgetting.  
- **Parameter‑efficient fine‑tuning (PEFT) is a common thread across point‑cloud adaptation, continual learning, and pruning**: Papers on point‑cloud backbones (Point Ladder Tuning), LoRA rank allocation, and hyper‑connections all aim to reduce parameter updates, unifying model compression and lifelong adaptation.  
- **Security and robustness span agent engineering and continual learning**: Backdoor defense via critical neuron pruning and the Twin Agent architecture for prompt injection both use model‑level techniques relevant to safe continual deployment.  
- **VLA models increasingly incorporate memory and force feedback**: FM‑VLA and PRO‑LONG both add external memory (force or programmatic) to overcome Markovian limitations, a trend applicable to both embodied and text‑based agents.

---

## 4. Priority Reading
#### **PRO-LONG: Programmatic Memory Enables Long-Horizon Reasoning** – Directly combines LLM agent engineering with continual learning, and its use of ARC‑AGI‑3 as a benchmark is highly relevant to current lab interests in both areas.
#### **Twin Agent: Context Residual Compression for Privilege Separated Agents** – Presents a principled security architecture for LLM agents that could be adopted in the lab’s agent deployment pipeline.
#### **Patch Policy: Efficient Embodied Control via Dense Visual Representations** – Offers a practical method to improve VLA policy efficiency and spatial awareness, directly useful for the lab’s embodied robotics work.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*