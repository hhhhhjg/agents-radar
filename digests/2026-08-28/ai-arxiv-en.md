# Lab Research Topics Radar 2026-08-28

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 35 new + 12 seen in the last 14 days | Generated: 2026-08-28 05:54 UTC

---

# Research Topics Radar — 2026-08-28

## Today's Overview

- **LLM Agent 与多智能体 / LLM Agent Engineering**: 10 new papers on agentic data quality, tool-authorization, safety, benchmarking, and domain orchestration.
- **LLM Agent 与多智能体 / Agent Test-Time Scaling and Self-Improvement**: 2 new papers (CritICL, Dynamical phase selection) plus 4 seen; progress on inference-time self-improvement and compute-scaling dynamics.
- **LLM Agent 与多智能体 / LLM Agent Societies**: No new papers today.
- **具身智能 / Vision-Language-Action Models**: 10 new papers covering VLA backdoors, failure recovery, streaming action decoding, online adaptation, long-horizon execution, and small-scale policies.
- **具身智能 / Embodied Navigation**: 3 new papers on real-time zero-shot navigation, glass-surface detection, and embodied scene rearrangement planning.
- **模型压缩与持续学习 / LLM Pruning and Inference Optimization**: 1 new matched paper (PACE) on fast VLM inference; profiled under Multimodal LLM Pruning as the best-fitting topic.
- **模型压缩与持续学习 / Multimodal LLM Pruning**: 2 new papers on multi-image visual token pruning and PACE, plus 1 repeated head-aware pruning paper.
- **模型压缩与持续学习 / Continual Learning**: 6 new papers spanning task-free CL, LoRA geometry, sparse event transformers, frontier-model CL, and low-rank adaptation.
- **视觉感知 / Event-Based Vision**: 3 new papers on neuromorphic classification benchmarks, unsupervised object discovery, and continual learning for event transformers.
- **视觉感知 / 3D Point Cloud Perception**: 1 new paper on task-aware deformable prediction in single-stage 3D object detection.
- **视觉感知 / 3D Point Cloud Perception and Tracking**: No new papers today.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [What Makes Good Agentic Data? An ACE Lens on Data Generation for LLM Agents](http://arxiv.org/abs/2608.27260v1)
Xingshan Zeng et al. · 2026-08-27. Proposes an ACE-style lens for judging agentic data quality, emphasizing consistency across environments, tasks, interactions, and success signals. Relevance: guides data-generation decisions for training and evaluating LLM agents.

#### [Safety Does Not Compose: Non-Decaying Loop State for Autonomous LLM Agents](http://arxiv.org/abs/2608.27141v1)
Chenhao Wu et al. · 2026-08-27. Shows that per-step agent safeguards fail to compose in autonomous loops because state persists and does not decay. Relevance: highlights the need for persistent-state safety mechanisms in long-running agents.

#### [When Tool Outputs Become Commands: Separating Action Induction from Runtime Authorization in Tool-Augmented LLM Agents](http://arxiv.org/abs/2608.27146v1)
Xiaokun Guo et al. · 2026-08-27. Argues that tool outputs can act as commands and proposes separating action induction from runtime authorization. Relevance: directly informs secure tool-augmented agent architecture.

#### [PLCBench: Can Autonomous LLM Agents Turn PLC Access into Sustained Physical Impact?](http://arxiv.org/abs/2608.26882v1)
Yitian Zhou et al. · 2026-08-27. Benchmarks whether autonomous LLM agents can convert network-reachable PLCs into sustained adverse physical effects. Relevance: a security-critical evaluation for agents controlling industrial infrastructure.

#### [Persona-Execution Separation: An Architecture Pattern for Evolving LLM Agents under Execution Audit](http://arxiv.org/abs/2608.27427v1)
Yisen Xi · 2026-08-27. Presents an architecture that separates evolvable persona from audited, stateful execution in governed organizations. Relevance: useful pattern for deploying auditable and updateable agents.

#### [BekchiAI: Measuring, Observing, and Controlling LLM Agents in One Click](http://arxiv.org/abs/2608.26867v1)
Mesut Toruk · 2026-08-27. Introduces a platform for measuring, observing, and controlling agentic skills beyond accuracy-only leaderboards. Relevance: supports operational observability and control for agent engineering.

#### [TraceBench: Controlled Evaluation of LLM Agents for Time-Series Root-Cause Attribution](http://arxiv.org/abs/2608.27182v1)
Tommaso Bendinelli et al. · 2026-08-27. Provides a simulation-based benchmark for controlled evaluation of LLM agents on time-series root-cause attribution. Relevance: important for assessing agent reliability in monitoring and diagnosis.

#### [FaulT-Bench: Towards Benchmarking Network Troubleshooting LLM Agents under Unreliable User Tickets](http://arxiv.org/abs/2608.27021v1)
Kuan-Hao Tseng et al. · 2026-08-27. Builds a 200-scenario benchmark covering unreliable tickets and absent-fault cases for network troubleshooting agents. Relevance: more realistic evaluation for agent-based fault diagnosis.

#### [DSA: Evidence-Aware LLM-Agent Orchestration for Multi-Market Stock Research](http://arxiv.org/abs/2608.26990v1)
Linsen Zhu, Yi Shi · 2026-08-27. Presents an evidence-aware orchestration framework for multi-market stock research with LLM agents. Relevance: concrete example of domain-specific agent orchestration with evidence control.

#### [Calibrated Enough to Know, Not Calibrated to Act: Fabricated Evidence Makes LLM Agents Commit to the Unknowable](http://arxiv.org/abs/2608.27167v1)
Pranav Aggarwal · 2026-08-27. Shows that fabricated professional-looking evidence makes LLM agents commit to directional calls on unknowable questions. Relevance: alerts agent pipelines to evidence-induced overconfidence.

### Agent Test-Time Scaling and Self-Improvement

#### [CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes](http://arxiv.org/abs/2608.27455v1)
Yufan Wu et al. · 2026-08-27. Introduces an inference-time framework that uses small-model failure modes as critiques without external verifiers. Relevance: strengthens test-time self-improvement for LLM reasoning.

#### [Dynamical phase selection controls compute scaling in looped transformers](http://arxiv.org/abs/2608.26556v1)
Gunn Kim · 2026-08-27. Shows that looped transformers with identical architecture and accuracy can exhibit different inference dynamics, with phase selection controlling compute scaling. Relevance: explains and potentially tunes compute scaling in iterative inference.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Prefix Sliding for efficient test-time scaling](http://arxiv.org/abs/2608.26070v1)
Niklas Muennighoff et al. · 2026-08-26. Uses sliding prefix attention to reduce the memory cost of long reasoning traces during test-time scaling. Relevance: directly addresses efficiency of extended inference-time computation.

#### 🔁 [SEEN IN THE LAST 14 DAYS] [R^3: Training Robots to Reason in Natural Language via Reinforcement Learning](http://arxiv.org/abs/2608.26053v1)
Lehong Wu et al. · 2026-08-26. Trains robots to reason in natural language via RL, enabling more test-time compute for long-horizon manipulation. Relevance: connects test-time reasoning to robotic action selection.

## 具身智能

### Vision-Language-Action Models

#### [TrapVLA: Trapping Vision-Language-Action Models in Configured Failure Modes](http://arxiv.org/abs/2608.26578v1)
Jun-Hui Liu et al. · 2026-08-27. Introduces a backdoor attack that uses stealthy textual triggers to activate configured failure modes in VLA models. Relevance: highlights a new security risk for VLA-based embodied systems.

#### [FlashVLA: Streaming Action Decoding for Fast and Asynchronous VLA Inference](http://arxiv.org/abs/2608.27384v1)
Zekai Li et al. · 2026-08-27. Proposes streaming action decoding to reduce latency and stabilize asynchronous execution in flow-matching VLAs. Relevance: directly targets the inference-latency bottleneck for real-world VLA deployment.

#### [FLARE: A Failure-Aware Framework for Autonomous Correction and Recovery in Visual-Language Robotic Manipulation](http://arxiv.org/abs/2608.26645v1)
Ganlong Zhao et al. · 2026-08-27. Adds failure-aware correction and recovery to VLAs trained on failure-free demonstrations. Relevance: improves VLA robustness in long-horizon manipulation.

#### [GRAFT: Grounded and Efficient Online Reinforcement Adaptation for Fine-Grained Robot Manipulation](http://arxiv.org/abs/2608.27079v1)
Yibo Qiu et al. · 2026-08-27. Presents grounded online RL adaptation for VLA policies in fine-grained, view-dependent biomedical tasks. Relevance: supports efficient online adaptation of pretrained VLAs.

#### [TemporalFlow-VLA: Learning Physically Grounded Execution History for Long-Horizon Robot Manipulation](http://arxiv.org/abs/2608.26821v1)
Jiarui Yang et al. · 2026-08-27. Learns physically grounded execution history to distinguish visually similar states in multi-stage manipulation. Relevance: improves temporal modeling in VLA policies.

#### [PredVLA: A Sub-Million-Parameter Predictive-Coding Policy for Robot Manipulation](http://arxiv.org/abs/2608.26673v1)
Hiroki Sawada, Shunichi Kasahara · 2026-08-27. Shows a sub-million-parameter predictive-coding policy can remain competitive with much larger VLAs. Relevance: challenges the assumption that VLA scale is necessary for language-conditioned control.

#### [Decoupling Planning and Control for Instructable Agents](http://arxiv.org/abs/2608.26788v1)
Zineng Tang et al. · 2026-08-27. Decouples instruction-tuned VLM planning from low-latency world-model control in instructable agents. Relevance: bridges high-level plans and reliable action execution.

#### [4DSynth: Controllable Procedural World Synthesis for Dynamic Embodied Simulation](http://arxiv.org/abs/2608.26947v1)
Zehao Qi et al. · 2026-08-27. Combines procedural scene generation with 4D visual dynamics for controllable embodied simulation. Relevance: provides training/simulation data for dynamic VLA and embodied-agent learning.

### Embodied Navigation

#### [RTNav: Towards Real-Time Zero-Shot Object Navigation](http://arxiv.org/abs/2608.26496v1)
Easop Lee et al. · 2026-08-27. Tackles inference latency in zero-shot object navigation using vision-language foundation models. Relevance: addresses a key deployment constraint for foundation-model navigation agents.

#### [Glass Surface Detection Grounded in 3D Visual Geometry](http://arxiv.org/abs/2608.26752v1)
Yiwei Lu et al. · 2026-08-27. Grounds glass-surface detection in 3D geometry to handle ambiguous, transparent scenes. Relevance: improves obstacle perception for embodied navigation.

#### [Embodied Scene Rearrangement Planning](http://arxiv.org/abs/2608.27371v1)
Canzhi Chen et al. · 2026-08-27. Introduces a task requiring furniture rearrangement from egocentric observations and a top-down target layout. Relevance: extends embodied planning benchmark toward rearrangement and navigation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Bootstrapping a 4D LiDAR Annotation Tool from Video Foundation Models](http://arxiv.org/abs/2608.25418v1)
Jihun Kim et al. · 2026-08-26. Uses video foundation models to bootstrap temporally consistent 4D LiDAR segmentation labels. Relevance: reduces annotation cost for embodied perception datasets used in navigation.

## 模型压缩与持续学习

### Multimodal LLM Pruning

#### [Multi-Image Visual Token Pruning in Large Visual Language Models](http://arxiv.org/abs/2608.26806v1)
Rongyang Zhang et al. · 2026-08-27. Proposes visual token pruning specifically for multiple input images in LVLMs. Relevance: directly reduces context and compute overhead for multi-image multimodal reasoning.

#### [PACE: A Unified Condense-and-Extract Paradigm for Fast VLM Inference](http://arxiv.org/abs/2608.27206v1)
Junjie Liu et al. · 2026-08-27. Introduces a condense-and-extract paradigm that prunes visual tokens across vision-encoder and LLM stages. Relevance: unifies visual-token pruning for faster VLM inference.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Not All Attention Heads Contribute to Critical Visual Token Selection: Head-Aware Pruning Matters More](http://arxiv.org/abs/2608.25332v1)
Chaofang Ma et al. · 2026-08-26. Shows attention heads differ in their contribution to critical visual-token selection and proposes head-aware pruning. Relevance: informs more targeted visual-token pruning in VLMs.

### Continual Learning

#### [Unifying Detection and Adaptation in Task-Free Continual Learning](http://arxiv.org/abs/2608.27070v1)
Dezheng Han et al. · 2026-08-27. Unifies drift detection and adaptation for task-free continual learning of LLMs without explicit task boundaries. Relevance: directly addresses a core CL bottleneck for LLM deployment.

#### [Geo-LoRA: Geometry-Aware Subspace Evolution for Low-Rank Adaptation in Continual Learning](http://arxiv.org/abs/2608.26960v1)
Yibo Feng · 2026-08-27. Adds geometric control to LoRA subspace evolution in rehearsal-free class-incremental learning. Relevance: mitigates collapse of task-specific updates in LoRA-based CL.

#### [Parameter Efficient Continual Learning for Sparse Event-Based Transformers](http://arxiv.org/abs/2608.26720v1)
Vaishnavi Nagabhushana et al. · 2026-08-27. Applies parameter-efficient continual learning to sparse event-based transformers under memory and energy constraints. Relevance: connects CL and event-based perception for edge robotics.

#### [Thomson: Continual Learning of Frontier Models for SovereignAI](http://arxiv.org/abs/2608.27147v1)
Shengzhuang Chen et al. · 2026-08-27. Explores continual learning of frontier models so broader stakeholders can sustain sovereign AI capabilities. Relevance: frames CL as a vehicle for distributing frontier-model ownership.

#### [Fine-Tuning of Transformer models with Frames](http://arxiv.org/abs/2608.26430v1)
Harshavardhan Adepu et al. · 2026-08-26. Introduces a PEFT method using frames that reduces memory scaling compared with standard LoRA. Relevance: improves parameter-efficient adaptation costs for large transformers.

#### [FAN-LoRA: A Fourier-Adaptive Nonlinear Low-Rank Adaptor for Medical Foundation Model Domain Adaptation](http://arxiv.org/abs/2608.26531v1)
Ziquan Liu et al. · 2026-08-27. Proposes a Fourier-adaptive nonlinear LoRA variant for adapting vision foundation models to medical imaging. Relevance: extends low-rank adaptation to challenging domain shifts.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Learning New Facts with QLoRA: An Acquisition-Retention Frontier](http://arxiv.org/abs/2608.25677v2)
Estelle Zheng et al. · 2026-08-26. Characterizes the acquisition-retention trade-off in QLoRA factual learning. Relevance: clarifies adapter-capacity effects in parameter-efficient continual learning.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Continually learning neural-operator surrogate for three-dimensional airborne electromagnetic Bayesian inversion](http://arxiv.org/abs/2608.25932v1)
Jaehong Chung et al. · 2026-08-26. Applies continual learning to neural-operator surrogates for expensive 3D Bayesian inversion. Relevance: demonstrates CL for scientific surrogate modeling with non-stationary data.

## 视觉感知

### Event-Based Vision

#### [ANTShapes Benchmarking Datasets for Event-Based Neuromorphic Object Classification](http://arxiv.org/abs/2608.27150v1)
M. Middleton et al. · 2026-08-27. Introduces benchmarking datasets for event-based neuromorphic object classification. Relevance: provides standardized evaluation for event-camera perception.

#### [Real-time Unsupervised Object Discovery from Asynchronous Event Streams](http://arxiv.org/abs/2608.26644v1)
Pratham G. Shenwai et al. · 2026-08-27. Proposes a lightweight, training-free framework for discovering moving objects from event streams. Relevance: supports latency-critical robotic perception without supervision.

### 3D Point Cloud Perception

#### [TADP: Task-Aware Deformable Prediction for Single-Stage 3D Object Detection](http://arxiv.org/abs/2608.27282v1)
Su Wang et al. · 2026-08-27. Introduces task-aware deformable prediction to avoid forcing single-stage 3D detectors to share one feature space across tasks. Relevance: improves point-cloud-based 3D detection through task-specific predictions.

## Cross-Topic Signals

- **Safety and security cut across agents, tools, and VLAs**: TrapVLA, PLCBench, “Tool Outputs Become Commands,” and “Safety Does Not Compose” all highlight that untrusted context can hijack autonomous decision-making.
- **Latency is a shared bottleneck**: FlashVLA, RTNav, PACE, and multi-image token pruning all address inference speed and token overhead in multimodal and embodied systems.
- **Low-rank adapters unify continual learning and domain adaptation**: Geo-LoRA, FAN-LoRA, QLoRA, and event-based PEFT-CL share a common strategy for retaining old knowledge while acquiring new skills.
- **Controlled benchmarking is expanding across agent evaluation and security**: TraceBench, FaulT-Bench, PLCBench, and BekchiAI focus on measuring agent capability under realistic, partially unreliable conditions.
- **Inference-time compute is being made cheaper and more targeted**: CritICL and Prefix Sliding reduce the overhead of test-time scaling, while the looped-transformer result explains compute-scaling behavior.

## Priority Reading

#### - [FlashVLA: Streaming Action Decoding for Fast and Asynchronous VLA Inference](http://arxiv.org/abs/2608.27384v1) — Directly addresses the primary deployment bottleneck for VLA models: inference latency.
#### - [TrapVLA: Trapping Vision-Language-Action Models in Configured Failure Modes](http://arxiv.org/abs/2608.26578v1) — Reveals a new realistic attack surface for VLAs that the lab should track for safe embodied deployment.
#### - [Geo-LoRA: Geometry-Aware Subspace Evolution for Low-Rank Adaptation in Continual Learning](http://arxiv.org/abs/2608.26960v1) — Directly tackles the geometric collapse problem in LoRA-based continual learning, a key issue for the lab’s CL and PEFT agenda.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*