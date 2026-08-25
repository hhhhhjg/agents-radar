# Lab Research Topics Radar 2026-08-26

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 16 new + 0 seen in the last 14 days | Generated: 2026-08-25 22:19 UTC

---

# Research Topics Radar

## Today's Overview

- **LLM Agent Engineering** — 3 new papers: NetConfArena (executable closed-loop network configuration benchmark), TRACE (self-evolving skill bank for consistency and limit-awareness), and When Not to Imitate (boundary-aware skill memory). Progress centers on reliability, safety boundaries, and skill reuse for LLM agents.
- **Agent Test-Time Scaling and Self-Improvement** — 3 new papers: Disagree to Explore (routing-guided test-time scaling for software agents), ParallelWorld (test-time scaling for embodied reasoning), and Prime Agent (self-improving RLM harness). Progress extends test-time scaling to non-canonical patch settings and embodied reasoning.
- **LLM Agent Societies** — No new papers today.
- **Vision-Language-Action Models** — 4 new papers in the feed; the strongest matches are Pointing-VLA, Act with Intent, and UniMem. ROS2SmolVLA also targets small-VLA industrial integration but is lower priority.
- **Embodied Navigation** — 4 new papers in the feed; RACO and OptiSight are covered here, while UniMem and BenthicFlow are covered under their best-fitting topics. Progress is in reliability-aware UAV-VLN and hybrid semantic-geometric control.
- **LLM Pruning and Inference Optimization** — 1 new candidate matched, but E2S-Pruner is specifically a multimodal visual-token pruning method, so it is listed under Multimodal LLM Pruning.
- **Multimodal LLM Pruning** — 1 new paper: E2S-Pruner, a progressive two-stage evidence-fusion method for visual token pruning in vision-language models.
- **Continual Learning** — 2 new papers: adapter-based few-shot continual learning for malicious packet recognition and reward-free continual adaptation for space robots.
- **Event-Based Vision** — No new papers today.
- **3D Point Cloud Perception** — 1 new paper: BenthicFlow, which uses flow matching to generate extensible underwater 3D environments.
- **3D Point Cloud Perception and Tracking** — No new papers today.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [NetConfArena: An Executable Benchmark for LLM Agents in Closed-Loop Network Configuration](http://arxiv.org/abs/2608.23179v1)
Chang Liu et al. | 2026-08-24 | Contribution: Introduces an executable benchmark for evaluating LLM agents in realistic, risk-free closed-loop network configuration. Relevance: Directly addresses the need for reliable LLM agent assessment in automation settings.

#### [TRACE: A Self-Evolving Skill Bank for Consistent, Limit-Aware LLM Agents](http://arxiv.org/abs/2608.22793v1)
Wenhao Wu et al. | 2026-08-24 | Contribution: Proposes a self-evolving skill bank that improves consistency and limit-awareness across repeated trials and unsafe requests. Relevance: Targets the reliability gap that limits LLM agent deployment in user-facing products.

#### [When Not to Imitate: Boundary-Aware Skill Memory for Reliable Tool-Use LLM Agents](http://arxiv.org/abs/2608.22339v1)
Zihan Lin et al. | 2026-08-23 | Contribution: Introduces boundary-aware skill memory to prevent negative transfer when extracting skills from successful trajectories. Relevance: Refines skill-memory design for tool-use LLM agents, a core concern in LLM Agent Engineering.

### Agent Test-Time Scaling and Self-Improvement

#### [Disagree to Explore, Agree to Commit: Routing-Guided Test-Time Scaling for Software Agents](http://arxiv.org/abs/2608.22191v1)
Kang Chen et al. | 2026-08-23 | Contribution: Proposes routing-guided test-time scaling that uses disagreement for exploration and agreement for commitment in software-agent patches. Relevance: Addresses correlated candidate actions and non-canonical answers in agent test-time scaling.

#### [ParallelWorld: Test-Time Scaling for Embodied Reasoning](http://arxiv.org/abs/2608.22971v1)
Min Chen et al. | 2026-08-24 | Contribution: Presents a test-time scaling method for embodied reasoning based on dynamic exploration. Relevance: Extends agent test-time scaling from text/software domains to embodied intelligence.

#### [Prime Agent: A Self-Improving RLM Harness](http://arxiv.org/abs/2608.23552v1)
Seth Karten et al. | 2026-08-24 | Contribution: Open-source harness for long-horizon coding-agent workflows, combining a persistent IPython REPL with recursive language-model workflows. Relevance: Provides practical infrastructure for self-improving, long-horizon LLM agents.

### LLM Agent Societies

No new papers today.

## 具身智能

### Vision-Language-Action Models

#### [Pointing-VLA: Typed Spatial Grounding Interfaces for Vision-Language-Action Manipulation](http://arxiv.org/abs/2608.23138v1)
Xiwen Chen et al. | 2026-08-24 | Contribution: Introduces a typed hidden-state spatial readout for VLA models to replace brittle text-coordinate or opaque action-token grounding. Relevance: Directly improves the interface between multimodal reasoning and robot execution in VLA manipulation.

#### [Act with Intent: Distilling Behavior Intent for Vision-Language-Action Models](http://arxiv.org/abs/2608.23478v1)
Sangoh Lee et al. | 2026-08-24 | Contribution: Distills implicit local behavior intent as a training signal for VLA action decoders beyond pure behavior cloning. Relevance: Addresses a key weakness in VLA action decoding by supervising the intent behind demonstrated commands.

#### [UniMem: Unifying Multimodal Memory and Control for Vision-Language-Action Models](http://arxiv.org/abs/2608.22869v1)
Lars Osterberg et al. | 2026-08-24 | Contribution: Unifies multimodal memory and control to help VLA models handle non-Markovian, long-horizon tasks. Relevance: Targets the memory limitation of VLA agents in long-horizon embodied tasks.

### Embodied Navigation

#### [RACO: Reliability-Aware Coarse-Goal Optimization for Inspection-Oriented UAV Vision-Language Navigation](http://arxiv.org/abs/2608.22678v1)
Sen Wang et al. | 2026-08-24 | Contribution: Adds reliability-aware coarse-goal optimization so UAV-VLN agents stop in valid inspection regions and reject visually or semantically similar distractors. Relevance: Directly improves embodied navigation for inspection-oriented UAV deployment.

#### [OptiSight: Bridging Semantic Reasoning and Geometric Control for Embodied Navigation](http://arxiv.org/abs/2608.23354v1)
Alperen Avan et al. | 2026-08-24 | Contribution: Proposes a hybrid framework combining VLM semantic reasoning with deterministic visual servoing in a finite-state Chain-of-Thought architecture. Relevance: Balances semantic understanding and geometric control for indoor embodied navigation.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

No new papers today.

### Multimodal LLM Pruning

#### [E2S-Pruner: Progressive Two-Stage Evidence Fusion for Visual Token Pruning in Vision-Language Models](http://arxiv.org/abs/2608.23253v1)
Taoyu Qian et al. | 2026-08-24 | Contribution: Presents a two-stage evidence-fusion method for pruning visual tokens in vision-language models. Relevance: Reduces inference latency and GPU memory overhead in multimodal LLMs, directly matching Multimodal LLM Pruning.

### Continual Learning

#### [Adapter-Based Few-Shot Continual Learning for Malicious Packet Recognition](http://arxiv.org/abs/2608.23536v1)
Kyle Stein et al. | 2026-08-24 | Contribution: Introduces adapter-based few-shot continual learning to recognize evolving malware variants without catastrophic forgetting. Relevance: Demonstrates continual learning for security classifiers that must adapt to new threats over time.

#### [Reward-Free Continual Adaptation for Resilient Space Robots](http://arxiv.org/abs/2608.23452v1)
Andrej Orsula et al. | 2026-08-24 | Contribution: Proposes reward-free continual adaptation for robot control under hardware degradation. Relevance: Applies continual learning to embodied systems where deployment reward signals are not available.

## 视觉感知

### Event-Based Vision

No new papers today.

### 3D Point Cloud Perception

#### [BenthicFlow: Generating Extensible Underwater Environments via Flow Matching](http://arxiv.org/abs/2608.23173v1)
Joaquín Figueira et al. | 2026-08-24 | Contribution: Uses flow matching to generate extensible underwater 3D environments for scene understanding. Relevance: Addresses 3D data scarcity for underwater point-cloud perception and downstream embodied navigation.

### 3D Point Cloud Perception and Tracking

No new papers today.

## Cross-Topic Signals

- Test-time scaling is moving beyond code generation: Disagree to Explore applies it to software agents, while ParallelWorld applies it to embodied reasoning; both use iterative exploration and commitment rather than simple answer aggregation.
- Reliability and limit-awareness are shared across LLM agents and embodied navigation: TRACE and When Not to Imitate prevent over-commitment to unsafe or unhelpful skills, while RACO prevents false confirmation of visually or semantically similar distractors.
- Memory and adaptation recur across scales: UniMem gives VLAs explicit multimodal memory, TRACE and When Not to Imitate manage skill memory in LLM agents, and the continual-learning papers handle adaptation over time without catastrophic forgetting.
- Compression is a common efficiency driver: E2S-Pruner reduces visual-token overhead in vision-language models, while the small-VLA deployment line in the feed targets lightweight industrial robot integration.
- Generative 3D data bridges perception and navigation: BenthicFlow creates underwater environments that can serve both point-cloud perception and embodied navigation, reducing dependence on expensive field data.

## Priority Reading

- **Pointing-VLA** — Spatial grounding is a core bottleneck for reliable VLA manipulation, and the proposed typed hidden-state readout is a direct alternative to brittle coordinate/token interfaces.
- **Disagree to Explore, Agree to Commit** — It addresses an under-studied aspect of test-time scaling: correlated candidate actions and non-canonical patch outputs, with a routing strategy likely to transfer to other agent domains.
- **ParallelWorld** — It connects test-time scaling to embodied reasoning, a high-priority intersection between the lab’s agent and embodied-intelligence interests.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*