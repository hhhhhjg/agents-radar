# Lab Research Topics Radar 2026-07-29

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 25 new + 0 seen in the last 14 days | Generated: 2026-07-28 22:54 UTC

---

## Today's Overview

- **LLM Agent Engineering**: 6 new papers covering memory architectures (MemChain, MemTX), safety (Agentic Permissions, Gubernaut), scheduling (SpecBox), and domain-specific agents (SIREN). Progress on interpretable memory, deterministic affect regulation, and secure IFC.
- **Agent Test-Time Scaling and Self-Improvement**: 1 new paper (From RLVR to RLSVR) proposing task transformation to generate verifiable rewards for open-ended LLM self-improvement.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: 8 new papers spanning touch-augmented VLA (τ), data pyramid for embodied manipulation, motion-aware VQ inference, language-guided policy decomposition, video-action decoupling, anticipatory action chunking, UAV benchmark, and robotic failure analysis. Broad progress in data, efficiency, and evaluation.
- **Embodied Navigation**: 3 new papers on episodic memory for social robots (Not Forgotten), adverse-weather multimodal benchmark (ObsDriveBench), and contrastive alignment for MLLMs (DICA).
- **LLM Pruning and Inference Optimization**: No new papers today (the matched paper is placed under Multimodal LLM Pruning).
- **Multimodal LLM Pruning**: 2 new papers on omnimodal token pruning (Omni-Prune) and whole-slide pathology token selection (PathSelect).
- **Continual Learning**: 3 new papers on source-free teacher adaptation (Source-Free Controlled Adaptation), latent-space LoRA routing (Latent-LoRA), and multi-turn long-horizon planning via agentic distillation (Physics of Multi-Turn).
- **Event-Based Vision**: 1 new paper on active event-based stereo for ultrafast depth sensing.
- **3D Point Cloud Perception**: 1 new paper on curvature-aware hyperbolic rectification (PointCHR).
- **3D Point Cloud Perception and Tracking**: No new papers today.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [SIREN: Towards End-to-End Extreme-Weather Early Warning with Experience-Grounded LLM Agents](http://arxiv.org/abs/2607.24588v1)
Authors: Hang Ni et al. | Published: 2026-07-27 | Contribution: Proposes an LLM-agent framework for extreme-weather early warning that integrates experience-grounded reasoning and tool use to replace expert-centric workflows. | Relevance: Directly applies LLM agents to a high-impact, complex domain, demonstrating agentic pipeline design.

#### [MemChain: Learning Interpretable Memory Traces for Memory-Augmented LLM Agents](http://arxiv.org/abs/2607.24097v1)
Authors: Yiwen Ma et al. | Published: 2026-07-27 | Contribution: Introduces a memory-augmented agent that learns interpretable chain-of-memory traces instead of treating retrieved memories as black-box evidence. | Relevance: Addresses a core challenge in agent memory—interpretability and conflict resolution—relevant to long-horizon reasoning.

#### [Agentic Permissions Policy Algebra for Taint Confinement in LLM Agents](http://arxiv.org/abs/2607.24625v1)
Authors: Arseny Kravchenko et al. | Published: 2026-07-27 | Contribution: Presents a formal algebra for composing and enforcing permissions policies with dynamic information flow control, bounding taint spread in LLM agents. | Relevance: Critical for safe deployment of autonomous agents handling mixed-confidentiality data; addresses prompt injection risks.

#### [Gubernaut: A Deterministic Homeostatic Controller for Affect-Regulated LLM Agents, Validated Across Independent Model Families](http://arxiv.org/abs/2607.24339v1)
Authors: Dushyant Sharma | Published: 2026-07-27 | Contribution: Designs a homeostatic controller that modulates LLM agent behavior based on affect states, reducing reactive failures like sycophancy and escalation. | Relevance: Novel approach to propensity-level safety in agents, validated across multiple model families.

#### [SpecBox: Speculative Sandbox Scheduling for Efficient LLM Agent Serving](http://arxiv.org/abs/2607.23933v1)
Authors: Yihui Zhang et al. | Published: 2026-07-27 | Contribution: Proposes a speculative scheduling system that overlaps sandbox execution with agent reasoning to reduce tail latency and memory overhead. | Relevance: Addresses practical serving efficiency for LLM agents relying on Model Context Protocol sandboxes.

#### [MemTX: Transactional Belief Commit for Stateful Agent Memory](http://arxiv.org/abs/2607.23929v1)
Authors: Xiaoyang Li et al. | Published: 2026-07-27 | Contribution: Introduces a transactional memory model where agent writes are committed only after consistency checks, preventing polluted data from propagating. | Relevance: Strengthens reliability of shared memory in multi-agent or tool-using systems, preventing cascading errors.

### Agent Test-Time Scaling and Self-Improvement

#### [From RLVR to RLSVR: Task Transformation Induces Self-Verifiable Rewards for Open-Ended LLM Self-Improvement](http://arxiv.org/abs/2607.23802v1)
Authors: Qinsi Wang et al. | Published: 2026-07-26 | Contribution: Transforms open-ended tasks into self-verifiable tasks by rewriting the instruction, enabling RL with verifiable rewards for domains beyond math/code. | Relevance: Extends test-time self-improvement to broader tasks, a key capability for agent autonomy.

### LLM Agent Societies

No new papers today.

## 具身智能

### Vision-Language-Action Models

#### [τ: Learning Touch-Augmented Vision-Language-Action Models from Future Visual Supervision](http://arxiv.org/abs/2607.24485v1)
Authors: Ning Cheng et al. | Published: 2026-07-27 | Contribution: Enhances VLA models with tactile representation learned from future visual cues, reducing reliance on scarce tactile demonstrations. | Relevance: Adds a crucial sensory modality to VLA, improving manipulation in contact-rich tasks.

#### [Data Pyramid for Embodied Manipulation](http://arxiv.org/abs/2607.24744v1)
Authors: Yifan Ye et al. | Published: 2026-07-27 | Contribution: Introduces a multi-source data pyramid that combines observation-action couplings from varying levels of fidelity for embodied agent training. | Relevance: Addresses data scarcity in embodied AI by leveraging heterogeneous data sources, directly applicable to VLA model training.

#### [A Motion-Aware Vector Quantization Framework with Centroid Reuse for Efficient VLA Inference](http://arxiv.org/abs/2607.24148v1)
Authors: Zhuoran Song et al. | Published: 2026-07-27 | Contribution: Compresses VLA model activations via motion-aware vector quantization and centroid reuse, reducing GPU inference latency. | Relevance: Critical for real-time deployment of VLA models on resource-constrained robotic platforms.

#### [A Few Words Go a Long Way: Language Guided Robot Policy Synthesis](http://arxiv.org/abs/2607.23784v1)
Authors: Daphne Chen et al. | Published: 2026-07-26 | Contribution: Proposes ARCHITECT, a framework that decomposes VLA policies into interpretable language-guided sub-policies for easy correction. | Relevance: Addresses the black-box nature of VLA models, enabling human-in-the-loop adaptation and failure recovery.

#### [DeVA: Decoupled Video-Action Model with physical guidance for robot policy learning](http://arxiv.org/abs/2607.24159v1)
Authors: Mengqi Zhang et al. | Published: 2026-07-27 | Contribution: Decouples video prediction and action prediction in VLA models and injects physical priors to improve dynamic scene understanding. | Relevance: Enhances VLA models’ ability to anticipate scene evolution, crucial for long-horizon manipulation.

#### [FutureRTC: Real-Time Robot Execution with Anticipatory-Conditioned Action Chunking](http://arxiv.org/abs/2607.24008v1)
Authors: Hai Jiang et al. | Published: 2026-07-27 | Contribution: Introduces an anticipatory conditioning mechanism for action chunking that reduces inter-chunk discontinuities in asynchronous VLA execution. | Relevance: Solves a practical deployment issue in real-time robot control with VLA policies.

#### [MulRobBench: A Decision-Level Benchmark for Safe and Security-Policy-Compliant Multimodal UAV Agents](http://arxiv.org/abs/2607.23870v1)
Authors: Belal S. Alsinglawi et al. | Published: 2026-07-26 | Contribution: Creates a benchmark for UAV agents that tests perception, navigation, and compliance with safety policies under degraded conditions. | Relevance: Extends VLA evaluation to safety-critical UAV operations, emphasizing policy compliance.

#### [LabRobFail: A Benchmark for Robotic Failure Analysis in Chemical Self-driving Laboratories](http://arxiv.org/abs/2607.23704v1)
Authors: Haobo Wang et al. | Published: 2026-07-26 | Contribution: Introduces a benchmark for analyzing robotic failures in chemistry labs, providing fine-grained failure annotations and evaluation metrics. | Relevance: Enables systematic failure analysis for embodied agents in irreversible scientific settings, informing robust VLA design.

### Embodied Navigation

#### [Not Forgotten: Implementation and Evaluation of a Personalized Episodic Memory for the Humanoid Robot Head Kim](http://arxiv.org/abs/2607.24190v1)
Authors: Steve Aschenbrenner et al. | Published: 2026-07-27 | Contribution: Implements a lightweight episodic memory module for a social robot to retain person-specific information across sessions. | Relevance: Embodies memory in navigation-adjacent social interaction, enhancing long-term human-robot engagement.

#### [ObsDriveBench: Benchmarking Multimodal Understanding under Adverse Weather with Observability Awareness](http://arxiv.org/abs/2607.23537v1)
Authors: Qiao Yan et al. | Published: 2026-07-26 | Contribution: Proposes a benchmark for evaluating vision-language models on driving scenes under real adverse weather, with observability-aware metrics. | Relevance: Directly tests navigation-related perception and reasoning under challenging environmental conditions.

#### [DICA: Dual-Indicator Guided Contrastive Alignment in Multimodal Large Language Models](http://arxiv.org/abs/2607.23944v1)
Authors: Hao Yang et al. | Published: 2026-07-27 | Contribution: Develops a dual-indicator contrastive alignment mechanism that mimics coarse-to-fine visual attention in MLLMs. | Relevance: Improves visual grounding in MLLMs, which is fundamental for embodied navigation tasks.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

No new papers today.

### Multimodal LLM Pruning

#### [Omni-Prune: Query-Aware Unified Token Pruning for Efficient Omnimodal Large Language Models](http://arxiv.org/abs/2607.23445v1)
Authors: Yiming Zhong et al. | Published: 2026-07-26 | Contribution: Proposes a query-aware token pruning method for omnimodal LLMs that reduces audio-video token length, cutting prefill latency and GPU memory. | Relevance: Directly addresses inference efficiency in multimodal LLMs that process synchronized audio and video.

#### [PathSelect: Sequential Token Selection for Whole Slide Pathology](http://arxiv.org/abs/2607.23631v1)
Authors: Jingzhi Chen et al. | Published: 2026-07-26 | Contribution: Introduces a sequential token selection policy for gigapixel pathology images, preserving weak signals while reducing sequence length for VLMs. | Relevance: Shows how selective token pruning can improve VLM efficiency in domain-specific multimodal applications.

### Continual Learning

#### [Source-Free Controlled Adaptation of Teachers for Continual Test-Time Adaptation](http://arxiv.org/abs/2607.23735v1)
Authors: Anurag Roy et al. | Published: 2026-07-26 | Contribution: Proposes a teacher-student method for continual test-time adaptation without needing source data, controlling knowledge transfer to avoid catastrophic forgetting. | Relevance: Advances continual learning in deployed models that face domain shifts during inference.

#### [Latent-LoRA: Compact Latent-Space Adapters with Gradient-Free Routing for Continual Learning](http://arxiv.org/abs/2607.23837v1)
Authors: Reza Rahimi Azghan et al. | Published: 2026-07-26 | Contribution: Learns compact latent-space LoRA adapters per task with gradient-free routing to prevent catastrophic forgetting in LLMs. | Relevance: Efficient continual learning method that avoids task-id assumptions, suitable for LLM agents that accumulate skills.

#### [The Physics of Multi-Turn Long-Horizon Planning: From Pre-training to Post-training via Single- and Multi-Teacher On-Policy Agentic Distillation](http://arxiv.org/abs/2607.24720v1)
Authors: Tianyi Men et al. | Published: 2026-07-27 | Contribution: Analyzes how planning ability emerges in foundation models and proposes on-policy distillation from single/multiple teachers to improve multi-turn planning. | Relevance: Bridges continual learning with agent planning, showing how sequential skill acquisition can be structured.

## 视觉感知

### Event-Based Vision

#### [Towards Ultrafast Depth Sensing Via Active Event-based Stereo Vision](http://arxiv.org/abs/2607.23684v1)
Authors: Jianing Li et al. | Published: 2026-07-26 | Contribution: Proposes active event-based stereo vision for ultrafast depth sensing, overcoming frame-rate limitations of conventional systems. | Relevance: Advances event-based sensing for real-time 3D perception, applicable to high-speed navigation and manipulation.

### 3D Point Cloud Perception

#### [PointCHR: Point Cloud Analysis via Curvature-Aware Hyperbolic Rectification](http://arxiv.org/abs/2607.24052v1)
Authors: Xinxing Yu et al. | Published: 2026-07-27 | Contribution: Introduces hyperbolic embeddings to better capture high-curvature regions in point clouds, improving fine-grained geometric feature learning. | Relevance: Enhances 3D point cloud perception by addressing sparsity in critical geometric areas, useful for object recognition.

### 3D Point Cloud Perception and Tracking

No new papers today.

## Cross-Topic Signals

- **Memory and State Management**: Papers like MemChain, MemTX, and Not Forgotten all tackle persistent memory for agents (LLM or robotic), using transactional or structured memory to improve reliability and long-term interaction.
- **Test-Time Adaptation and Self-Improvement**: Source-Free Controlled Adaptation (continual learning) and From RLVR to RLSVR (agent self-improvement) both address model adjustment at inference time, with techniques that could complement each other (e.g., using self-verifiable rewards to guide adaptation).
- **Token Efficiency Across Modalities**: Omni-Prune (multimodal pruning) and PathSelect (pathology token selection) both develop query-aware or sequential token reduction methods, while Motion-Aware VQ (VLA inference) compresses activations—a convergence on efficiency for large models.
- **Safety and Alignment in Agents**: Agentic Permissions and Gubernaut present two distinct safety mechanisms (information flow control vs. affect regulation), highlighting a growing focus on agentic risk mitigation.
- **Benchmarking for Real-World Deployment**: ObsDriveBench, MulRobBench, and LabRobFail all create evaluation sets that stress-test embodied agents under adverse conditions (weather, safety policies, chemical failures), pointing to a shift from academic benchmarks to operational readiness.

## Priority Reading

#### **MemTX: Transactional Belief Commit for Stateful Agent Memory** – directly addresses a critical vulnerability in multi-agent and tool-using systems: how to prevent polluted or stale data from corrupting downstream decisions. The transactional approach is novel and practically important.
#### **From RLVR to RLSVR: Task Transformation Induces Self-Verifiable Rewards for Open-Ended LLM Self-Improvement** – offers a pathway to scale reinforcement-learning-based self-improvement beyond math and code, which is a key bottleneck for autonomous agents operating in open-ended domains.
#### **τ: Learning Touch-Augmented Vision-Language-Action Models from Future Visual Supervision** – integrates tactile sensing into VLA models without requiring large tactile datasets, which has high potential to improve dexterous manipulation in robotics.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*