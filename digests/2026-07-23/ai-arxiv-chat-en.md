# Lab Research Topics Radar 2026-07-23

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 10 configured topics | 38 new + 0 seen in the last 14 days | Generated: 2026-07-23 13:32 UTC

---

# Research Topics Radar

## Today’s Overview

- **LLM Agent Engineering**: 15 new papers advance agent security (multi-turn attacks, backdoors, credential misuse), debugging toolkits, long-horizon reasoning, code optimization, and market simulations.
- **Agent Test-Time Scaling and Self-Improvement**: No new papers today.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: 8 new papers tackle data-efficient post-training, memory-augmented VLAs, force feedback, temporal logic specifications, and persistent object tokens for humanoid loco-manipulation.
- **Embodied Navigation**: No new papers today.
- **LLM Pruning and Inference Optimization**: 2 new papers cover total variation distance estimation between inference engines and selective neuron loading for on-device LLMs.
- **Multimodal LLM Pruning**: 1 new paper interprets text template tokens as implicit semantic registers in diffusion transformers, enabling targeted pruning.
- **Continual Learning**: 10 new papers span theory (near-orthogonality, LoRA rank allocation), hardware (ECRAM), video-MLLM adaptation, digital twin validation, and PEFT via modified residual connections.
- **Event-Based Vision**: No new papers today.
- **3D Point Cloud Perception**: 4 new papers improve multi-view panoptic segmentation, parameter-efficient tuning for point clouds, collaborative 3D detection, and line-scanning lidar calibration.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [DocOps: A Verifiable Benchmark for Autonomous Agents in Complex Document Operations](http://arxiv.org/abs/2607.19865v1)
Jiang et al. | 2026-07-22 | Introduces a deterministically verifiable benchmark for evaluating agents on document manipulation tasks like editing, formatting, and extraction.  
Relevance: Provides a rigorous evaluation framework for LLM agents in office automation workflows.

#### [AgentDebugX: An Open-Source Toolkit for Failure Observability, Attribution, and Recovery in LLM Agents](http://arxiv.org/abs/2607.18754v1)
Zhu et al. | 2026-07-21 | Offers a detection- attribution-recovery pipeline for agent failures, bridging the gap between surface errors and root causes.  
Relevance: Directly addresses the critical need for debugging in agent deployments.

#### [PerfAgent: Profiler-Guided Iterative Refinement for Repository-Level Code Optimization](http://arxiv.org/abs/2607.19653v1)
Deng et al. | 2026-07-22 | Uses LLM agents with profiling feedback to iteratively optimize codebases while preserving correctness.  
Relevance: Extends agent capabilities to performance optimization beyond bug fixing.

#### [When Shippers Become Algorithms: Candidate Exposure, Information Design, and the Concentration of LLM-Mediated Freight Markets](http://arxiv.org/abs/2607.19967v1)
Ezaki et al. | 2026-07-22 | Simulates LLM-based shipper agents in freight matching, revealing candidate exposure and market concentration risks.  
Relevance: Highlights emergent economic effects when LLM agents automate decision-making.

#### [Adaptive Adversaries: A Multi-Turn, Multi-LLM Benchmark for LLM Agent Security](http://arxiv.org/abs/2607.18063v1)
Jain et al. | 2026-07-20 | Proposes a 21-scenario benchmark where attackers adapt to defender strategies across multiple turns.  
Relevance: Pushes agent security evaluation beyond static attack pools to adaptive threats.

### Agent Test-Time Scaling and Self-Improvement
No new papers today.

### LLM Agent Societies
No new papers today.

## 具身智能

### Vision-Language-Action Models

#### [Closing the Lab-to-Store Gap: A Data-Efficient Post-Training and Experience-Driven Learning VLA Framework for Retail Humanoids](http://arxiv.org/abs/2607.20345v1)
Sala Sisó et al. | 2026-07-22 | Proposes DEED, a data-efficient VLA framework that uses post-training and experience replay to bridge simulation-to-reality gaps for humanoid retail robots.  
Relevance: Addresses a key bottleneck in deploying VLA models in noisy real-world environments.

#### [ReferTrack: Referring Then Tracking for Embodied Visual Tracking](http://arxiv.org/abs/2607.20061v1)
Ye et al. | 2026-07-22 | Decouples target identification and tracking in VLA policies, improving robustness in visually ambiguous scenes.  
Relevance: Enhances embodied visual tracking by reducing reasoning complexity in chain-of-thought.

#### [LENS: LLM-guided Environment Simplification for Planning and Control in Clutter](http://arxiv.org/abs/2607.19633v1)
Liao et al. | 2026-07-22 | Uses an LLM to simplify cluttered scenes by removing irrelevant objects, enabling existing planners to succeed.  
Relevance: Offers a practical method to handle multi-object clutter for real-world manipulation.

#### [Patch Policy: Efficient Embodied Control via Dense Visual Representations](http://arxiv.org/abs/2607.18236v1)
Zhou et al. | 2026-07-20 | Leverages pretrained dense ViT features at patch level for robot policies, preserving spatial detail without full fine-tuning.  
Relevance: Provides a computationally efficient alternative to global-token policies for fine-grained control.

#### [FM-VLA: Force-based Memory for Vision-Language-Action Models in Contact-Rich Manipulation](http://arxiv.org/abs/2607.18231v1)
Li et al. | 2026-07-20 | Augments VLA models with a force memory bank to condition on past haptic feedback during contact-rich tasks.  
Relevance: Addresses the limitation of vision-only memory for tasks requiring tactile awareness.

### Embodied Navigation
No new papers today.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [Total Variation Distance Estimation in Autoregressive Models](http://arxiv.org/abs/2607.19510v1)
Price et al. | 2026-07-21 | Develops methods to estimate total variation distance between two LLM inference engines serving the same weights but different optimizations.  
Relevance: Enables principled comparison of output distributions under pruning and quantization.

#### [SelectInfer: Selective Neuron Loading and Computation for On-Device LLMs](http://arxiv.org/abs/2607.18081v1)
Kabakibo et al. | 2026-07-20 | Loads only task-relevant neurons dynamically to reduce memory and compute for edge LLM inference.  
Relevance: Directly addresses on-device deployment constraints through selective sparsity.

### Multimodal LLM Pruning

#### [Text Template Tokens Are Implicit Semantic Registers in Diffusion Transformers](http://arxiv.org/abs/2607.19139v1)
Li et al. | 2026-07-21 | Identifies text template tokens as semantic registers that aggregate visual information in DiTs, enabling causal pruning of redundant computations.  
Relevance: Opens new pruning opportunities for diffusion transformers by targeting implicit semantic roles.

### Continual Learning

#### [The Blessing of Dimensionality: How Near-Orthogonality in High-Dimensional Spaces Explains Temporal Portability](http://arxiv.org/abs/2607.20301v1)
Woodring et al. | 2026-07-22 | Provides a theoretical explanation for why LoRA fine-tuned models transfer across time steps without forgetting, based on near-orthogonality of updates.  
Relevance: Offers a principled justification for data-free continual adaptation of LLMs.

#### [Statistical Inference for Rank Allocation in Low-Rank Adaptation](http://arxiv.org/abs/2607.20205v1)
Gao & Tan | 2026-07-22 | Proposes a statistical framework to allocate LoRA ranks across layers under a fixed budget, optimizing for downstream performance.  
Relevance: Directly improves parameter efficiency in continual fine-tuning of LLMs.

#### [Leveraging ECRAM for Edge Continual Learning](http://arxiv.org/abs/2607.19661v1)
Tasnim et al. | 2026-07-22 | Demonstrates hardware-software co-design using electrochemical RAM (ECRAM) to enable on-device continual learning with low energy.  
Relevance: Bridges hardware innovation with algorithmic continual learning for edge deployment.

#### [Continual Video-MLLM Adaptation over Evolving Domains](http://arxiv.org/abs/2607.18716v1)
Cheng et al. | 2026-07-21 | Adapts video multimodal LLMs sequentially to new domain distributions while mitigating catastrophic forgetting.  
Relevance: Addresses a practical gap in deploying video understanding models in dynamic environments.

#### [Manifold-Constrained Hyper-Connections for Parameter-Efficient Finetuning](http://arxiv.org/abs/2607.18130v1)
Oldenburg et al. | 2026-07-20 | Generalizes residual connections as a new PEFT approach, learning manifold-constrained hyper-connections to adapt Transformers.  
Relevance: Opens a novel axis for parameter-efficient adaptation beyond weight and activation modification.

## 视觉感知

### Event-Based Vision
No new papers today.

### 3D Point Cloud Perception

#### [Extending a Large View Synthesis Model for Multi-view Panoptic Segmentation](http://arxiv.org/abs/2607.19765v1)
Ryu et al. | 2026-07-22 | Shows that cross-view attention from large view synthesis models generalizes to semantic segmentation without 3D supervision.  
Relevance: Enables multi-view panoptic segmentation by reusing pretrained correspondence.

#### [Point Ladder Tuning: Parameter-Efficient Hierarchical Adaptation for 3D Point Cloud Understanding](http://arxiv.org/abs/2607.19171v1)
Chang et al. | 2026-07-21 | Introduces a hierarchical PEFT method for point cloud backbones that adapts fine-grained tokens at multiple resolutions.  
Relevance: Reduces memory overhead for fine-tuning point cloud models while preserving local detail.

#### [CoGoal3D: Collaborative 3D Object Detection with 3D-Aware Fusion and Refinement](http://arxiv.org/abs/2607.19036v1)
Yang et al. | 2026-07-21 | Proposes a V2X collaborative detection method that fuses 3D features from multiple agents for improved 3D object detection.  
Relevance: Advances multi-agent perception for autonomous driving.

#### [Two-Stage Extrinsic Calibration of a Static Line-Scanning Lidar with a Rotary Platform](http://arxiv.org/abs/2607.18578v1)
Shree et al. | 2026-07-20 | Presents a calibration method for line-scanning lidars on rotating bases, enabling accurate 3D scanning in industrial settings.  
Relevance: Essential for deploying lidar systems that require precise extrinsic parameters.

## Cross-Topic Signals

- **Parameter-Efficient Fine-Tuning (PEFT) bridges Continual Learning and 3D Perception**: Point Ladder Tuning (paper #16) adapts point cloud backbones with minimal parameters, similar to LoRA-based continual learning approaches for LLMs.
- **Agent Security and Continual Learning share pruning as a defense mechanism**: Critical neuron isolation pruning (paper #7) is used against backdoors, while neuron-level pruning also appears in inference optimization (SelectInfer, paper #36).
- **Memory-augmented VLAs (FM‑VLA, paper #32) and Programmatic Memory for LLM agents (PRO‑LONG, paper #4) both address long-horizon reasoning** by maintaining external memory stores, a cross-cutting design pattern.
- **Evaluation benchmarks are proliferating across subfields**: DocOps (document agents), Adaptive Adversaries (security), and the ARC-AGI-like continual learning benchmark in PRO‑LONG all provide rigorous test harnesses that will drive agent improvement.

## Priority Reading

#### **[PRO-LONG: Programmatic Memory Enables Long-Horizon Reasoning](http://arxiv.org/abs/2607.20064v1)** — Directly tackles a core limitation of LLM agents (sustained reasoning) and ties into continual learning benchmarks; likely to influence future agent architectures.
#### **[Statistical Inference for Rank Allocation in Low-Rank Adaptation](http://arxiv.org/abs/2607.20205v1)** — Provides a principled method to allocate LoRA ranks, which is immediately applicable to both continual learning and LLM agent fine-tuning.
#### **[Closing the Loop in Humanoid VLA: Persistent 3D Object Tokens for Verifiable Loco-Manipulation](http://arxiv.org/abs/2607.18016v1)** — Addresses object-state divergence in humanoid robots, a critical unsolved problem for real-world VLA deployment; introduces persistent tokens that could inspire similar ideas in other embodied domains.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*