# Lab Research Topics Radar 2026-10-06

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 23 new + 0 seen in the last 14 days | Generated: 2026-10-06 02:01 UTC

---

**Today's Overview**
- **LLM Agent Engineering**: 10 new papers; themes include agent-harness evaluation, self-improving harness optimization, long-horizon multi-agent search, memory invalidation, operational state repair, test-time training, and failure prediction.
- **Agent Test-Time Scaling and Self-Improvement**: No new papers today.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: No new papers today.
- **Embodied Navigation**: No new papers today.
- **LLM Pruning and Inference Optimization**: No new papers today.
- **Multimodal LLM Pruning**: 1 new paper on stage-aware visual token pruning for efficient VLA inference.
- **Continual Learning**: 10 new papers; advances include LoRA pacing/gating, off-policy merging, target propagation, federated onboarding, self-distillation theory, task-vector descent, graph FSCIL, and continual harness learning.
- **Event-Based Vision**: 1 new paper on asynchronous tracking, optical communication, and 3D motion capture with event-based sensors.
- **3D Point Cloud Perception**: 1 new paper on selective spatiotemporal aggregation for 3D occupancy and scene flow prediction.
- **3D Point Cloud Perception and Tracking**: No new papers today.

**Research Areas**

## LLM Agent 与多智能体
### LLM Agent Engineering

#### [MESH-Harness: Self-Improving Agent Harnesses via Bandit-Guided Compositional Evolution](http://arxiv.org/abs/2610.05300v1)
- Authors: Z. Shang et al. | Published: 2026-10-04 | Contribution: Organizes agent harnesses into functional modules and improves them with bandit-guided compositional evolution under a fixed model. | Relevance: Directly advances automated LLM agent harness engineering without weight updates.

#### [MedicalHarness: A Controlled Evaluation of LLMs and Agent Harnesses on Medical Tasks](http://arxiv.org/abs/2610.05778v1)
- Authors: Z. Wang et al. | Published: 2026-10-05 | Contribution: Evaluates LLM performance as a property of model-harness pairs on medical tasks. | Relevance: Provides controlled evidence that harness design materially affects agent evaluation.

#### [Causal Improvement Graph for Agentic Harness Optimization](http://arxiv.org/abs/2610.05039v1)
- Authors: J. Zhang et al. | Published: 2026-10-04 | Contribution: Builds a causal improvement graph to guide iterative proposal-evaluation optimization of agentic harnesses. | Relevance: Core method for automated harness optimization.

#### [Harness-Search: Guiding Long-Horizon Search through Multi-Agent Coordination](http://arxiv.org/abs/2610.05382v1)
- Authors: S. Wang et al. | Published: 2026-10-04 | Contribution: Uses multi-agent coordination in agent harnesses to handle growing interaction histories in long-horizon search. | Relevance: Connects harness engineering with multi-agent coordination for search agents.

#### [PACMI: Provenance-Aware Cascading Memory Invalidation for Long-Term LLM Agents](http://arxiv.org/abs/2610.05732v1)
- Authors: Y. Wang et al. | Published: 2026-10-05 | Contribution: Introduces provenance-aware cascading memory invalidation for outdated memories in long-term LLM agents. | Relevance: Addresses a key failure mode in persistent agent memory.

#### [StateWise: Diagnosing and Repairing Persistent Operational State Before Agent Actions](http://arxiv.org/abs/2610.05241v1)
- Authors: Y. Peng et al. | Published: 2026-10-04 | Contribution: Diagnoses and repairs persistent operational records before agents act when environment or requirements change. | Relevance: Improves reliability of stateful LLM agents that reuse stored records.

#### [Look Before You Leap: Thermodynamic Arbitration of Parametric and Non-Parametric Knowledge in LLM Agents via Self-Regulating Memory Architectures](http://arxiv.org/abs/2610.05223v1)
- Authors: A. Das & I. Roy | Published: 2026-10-04 | Contribution: Proposes a self-regulating memory architecture to arbitrate between parametric and non-parametric knowledge in LLM agents. | Relevance: Relevant to memory-centric agent architecture and knowledge conflict.

#### [ASCENT: Online Test-Time Training of Long-Horizon Agents via Self-Distillation of Verified Experience](http://arxiv.org/abs/2610.05303v1)
- Authors: H. Lu & D. Gong | Published: 2026-10-04 | Contribution: Enables online test-time training for long-horizon agents by self-distilling verified experience. | Relevance: Bridges LLM agent engineering with test-time adaptation and self-improvement.

#### [Disentangling Task Difficulty from Run-Level Failure in Agent Failure Prediction](http://arxiv.org/abs/2610.05572v1)
- Authors: M. EsfandyariDoulabi et al. | Published: 2026-10-04 | Contribution: Separates task difficulty from run-level failure when training agent failure predictors. | Relevance: Supports intervention and monitoring in deployed LLM agents.

#### [LifeLong Digital Twin: A Unified Modeling Paradigm and Agent Harness for Event-Driven Lifelong Health State Trajectories](http://arxiv.org/abs/2610.05566v1)
- Authors: J. Jiang et al. | Published: 2026-10-04 | Contribution: Presents a unified modeling paradigm and agent harness for event-driven lifelong health state trajectories. | Relevance: Shows an application of agent harnesses to lifelong, event-driven health modeling.

## 模型压缩与持续学习
### Multimodal LLM Pruning

#### [When and What to Prune? Stage-Aware Visual Token Pruning for Efficient VLA](http://arxiv.org/abs/2610.05273v1)
- Authors: T. Shi et al. | Published: 2026-10-04 | Contribution: Proposes stage-aware visual token pruning for efficient vision-language-action inference. | Relevance: Fits multimodal LLM pruning and accelerates VLA inference.

### Continual Learning

#### [Off-Policy Merging Beats On-Policy Self-Distillation for Continual Learning](http://arxiv.org/abs/2610.05872v1)
- Authors: C. H. Wu et al. | Published: 2026-10-05 | Contribution: Finds off-policy merging outperforms on-policy self-distillation for continual learning on post-trained models. | Relevance: Challenges conventional on-policy requirements for continual learning.

#### [Task Vector Descent: Learning from Non-IID Batches](http://arxiv.org/abs/2610.05402v1)
- Authors: A. Baumann et al. | Published: 2026-10-04 | Contribution: Proposes task vector descent for continual learning from uneven, non-IID batches. | Relevance: Directly targets forgetting under distribution shift over time.

#### [Learning without Overwriting: A Theory of Self-Distillation and Supervised Fine-Tuning in Continual Reasoning](http://arxiv.org/abs/2610.05200v1)
- Authors: S. Uemura & T. Suzuki | Published: 2026-10-04 | Contribution: Provides theory for on-policy self-distillation and SFT in continual reasoning preservation. | Relevance: Analyzes why self-distillation can reduce catastrophic forgetting in LLMs.

#### [PaLoRA: Paced Low-Rank Adaptation for Continual Learning](http://arxiv.org/abs/2610.04226v1)
- Authors: Y. Li et al. | Published: 2026-10-03 | Contribution: Introduces paced low-rank adaptation with theoretically guided gradient scaling for continual learning. | Relevance: Improves LoRA-based continual learning beyond fixed small-learning-rate heuristics.

#### [Gated Target Propagation for Compositional Generalization in Continual Learning](http://arxiv.org/abs/2610.04649v1)
- Authors: A. M. Njupoun et al. | Published: 2026-10-03 | Contribution: Uses gated target propagation to reuse and recombine prior knowledge for novel task compositions. | Relevance: Extends continual learning toward compositional generalization.

#### [Adaptive Utilization of Low-Rank Adaptation via Conditioned Gating](http://arxiv.org/abs/2610.05800v1)
- Authors: G. Yang et al. | Published: 2026-10-05 | Contribution: Conditions LoRA gates to adapt low-rank updates per token rather than sharing one update. | Relevance: Relevant to parameter-efficient continual adaptation via LoRA.

#### [MAGIC: Topology-Aware Analytic Graph Few-Shot Class-Incremental Learning](http://arxiv.org/abs/2610.04963v1)
- Authors: J. Chen et al. | Published: 2026-10-04 | Contribution: Combines topology-aware and analytic graph learning for few-shot class-incremental node classification. | Relevance: Addresses catastrophic forgetting in graph continual learning.

#### [When the Cross-Silo Federation Goes Offline: Continual Learning for Site Onboarding with Limited Unlabeled Data](http://arxiv.org/abs/2610.05598v1)
- Authors: A. Eslaminia et al. | Published: 2026-10-04 | Contribution: Studies continual learning for site onboarding in cross-silo federated settings with limited unlabeled data. | Relevance: Connects continual learning with federated, data-scarce deployment.

#### [VIGIL: Verifier-Informed Gated Improvement Loop for Spreadsheet Question Answering](http://arxiv.org/abs/2610.04287v1)
- Authors: K. Li et al. | Published: 2026-10-03 | Contribution: Adds a verifier-informed gated improvement loop for continual harness learning in spreadsheet QA. | Relevance: Shows continual improvement of agent harness behavior from delayed feedback.

## 视觉感知
### Event-Based Vision

#### [Asynchronous Tracking, Optical Communication and 3D Motion Capture using Event-based Sensors](http://arxiv.org/abs/2610.04342v1)
- Authors: Z. Wang et al. | Published: 2026-10-03 | Contribution: Uses event-based sensors for asynchronous tracking, optical communication, and 3D motion capture in cooperative robots. | Relevance: Core event-based vision for robotics and communication.

### 3D Point Cloud Perception

#### [SelectOccFlow: Selective Spatiotemporal Aggregation for 3D Occupancy and Scene Flow Prediction](http://arxiv.org/abs/2610.04356v1)
- Authors: Y. Wang et al. | Published: 2026-10-03 | Contribution: Selectively aggregates spatiotemporal features for camera-based 3D occupancy and scene flow prediction. | Relevance: Directly targets 3D scene perception for autonomous driving.

**Cross-Topic Signals**
- Agent harnesses are a shared abstraction across MedicalHarness, MESH-Harness, Harness-Search, Causal Improvement Graph, and VIGIL: they optimize or evaluate the runtime around a fixed LLM.
- Memory and state reliability connect PACMI, StateWise, Look Before You Leap, and VIGIL, which handle outdated memories, operational state repair, and delayed feedback.
- Continual learning methods increasingly target post-trained LLMs and parameter-efficient modules: off-policy merging, self-distillation theory, task-vector descent, PaLoRA, and conditioned LoRA.
- Efficiency/pruning connects to embodied/VLA work: stage-aware visual token pruning is designed for VLA inference, while event-based sensing and selective 3D aggregation support robot/autonomous perception.
- Test-time adaptation appears in ASCENT and continual reasoning/self-distillation, linking LLM agent self-improvement with continual learning.

**Priority Reading**
- **MESH-Harness** (http://arxiv.org/abs/2610.05300v1): most directly addresses self-improving agent harnesses under fixed weights, a core LLM Agent Engineering problem.
#### - **When and What to Prune? Stage-Aware Visual Token Pruning for Efficient VLA** (http://arxiv.org/abs/2610.05273v1): the only new Multimodal LLM Pruning paper and bridges pruning with VLA inference.
#### - **Off-Policy Merging Beats On-Policy Self-Distillation for Continual Learning** (http://arxiv.org/abs/2610.05872v1): challenges a central assumption for continual learning on post-trained models and could reshape continual fine-tuning practice.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*