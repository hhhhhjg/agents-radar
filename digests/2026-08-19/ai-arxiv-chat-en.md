# Lab Research Topics Radar 2026-08-19

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 12 new + 0 seen in the last 14 days | Generated: 2026-08-18 22:16 UTC

---

## Today's Overview

- **LLM Agent Engineering**: Four new LLM-agent papers arrived; the three featured here cover query-conditioned memory, transition-wise credit assignment, and an aviation-copilot benchmark.
- **Agent Test-Time Scaling and Self-Improvement**: No new papers today.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: Three new papers: two VLA architecture papers plus a state-injection security study for LLM-driven embodied agents.
- **Embodied Navigation**: Two new papers: a language-grounded 3D Gaussian driving world model and surgical scene graph generation for structured OR understanding.
- **LLM Pruning and Inference Optimization**: No new papers today.
- **Multimodal LLM Pruning**: No new papers today.
- **Continual Learning**: Three new papers, each attacking forgetting from a different angle: pre-trained-model representation shaping, layer-adaptive regularization, and representation-space dynamics.
- **Event-Based Vision**: One new paper on token-based feature extraction for event-camera reinforcement learning.
- **3D Point Cloud Perception**: GaussianDWM++ has 3D/point-cloud implications but is best classified as a driving world model under Embodied Navigation; no separate point-cloud-only paper is listed below.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## Main Direction

### LLM Agent Engineering

#### [QUMem: Personalized Memory for Query-Conditioned User-State Inference in LLM Agents](http://arxiv.org/abs/2608.16168v1)
Wang et al. | 2026-08-17 | Contribution: Introduces query-conditioned user-state inference with personalized external memory to handle distributed, changing, and possibly conflicting user evidence. | Relevance: Directly addresses LLM-agent memory and personalization, a core engineering concern for long-horizon interaction.

#### [TRCA: Transition-wise Rubric Credit Assignment for Long-horizon LLM Agents](http://arxiv.org/abs/2608.16156v1)
Zhang et al. | 2026-08-17 | Contribution: Proposes transition-wise rubric credit assignment to improve fine-grained credit assignment in long-horizon LLM-agent optimization. | Relevance: Targets a central LLM-agent training bottleneck: sparse terminal rewards in multi-step tasks.

#### [AeroCopilotBench: A Two-Tier Benchmark for Evaluating LLM Agents as Aviation Copilots in an Interactive Virtual Cockpit Environment](http://arxiv.org/abs/2608.16349v1)
Yuan et al. | 2026-08-17 | Contribution: Presents a two-tier benchmark for systematically testing LLM agents as aviation copilots in an interactive virtual cockpit. | Relevance: Provides an interactive, safety-oriented evaluation paradigm for task-executing LLM agents.

### Agent Test-Time Scaling and Self-Improvement

No new papers today.

### LLM Agent Societies

No new papers today.

## Main Direction

### Vision-Language-Action Models

#### [US-VLA: An Ultrasound Vision-Language-Action Model for Embodied Abdomina](http://arxiv.org/abs/2608.16074v1)
Zhang et al. | 2026-08-17 | Contribution: Presents US-VLA, an ultrasound vision-language-action model for embodied abdominal scanning with real-time acquisition guidance. | Relevance: Directly extends VLA methods to robot-assisted ultrasound, matching the lab’s embodied VLA interest.

#### [NebulaVLA: A Dual-Frequency Vision-Language-Action Model With Guide Action for Robotic Manipulation](http://arxiv.org/abs/2608.16503v1)
Zhao et al. | 2026-08-17 | Contribution: Proposes an asynchronous dual-frequency VLA architecture that decouples high-level semantic reasoning from low-level control for smoother robotic manipulation. | Relevance: Addresses practical VLA deployment issues such as efficiency, cross-embodiment generalization, and execution smoothness.

#### [When State Becomes an Attack Surface: State-Semantic Injection in LLM-Driven Embodied Agents](http://arxiv.org/abs/2608.16806v1)
Liu et al. | 2026-08-17 | Contribution: Identifies state-semantic injection attacks against LLM-driven embodied agents, where manipulated semantic state can affect agent behavior. | Relevance: Highlights a security risk in VLA-style state representations shared by embodied LLM agents.

### Embodied Navigation

#### [GaussianDWM++: Language-Grounded 3D Gaussian Driving World Model for Unified Scene Understanding, Editing, and Multi-Modal Generation](http://arxiv.org/abs/2608.16234v1)
Deng et al. | 2026-08-17 | Contribution: Introduces a language-grounded 3D Gaussian driving world model for unified scene understanding, editing, and multi-modal generation. | Relevance: Provides a 3D world-model backbone relevant to embodied driving/navigation and scene reasoning.

#### [Sterilizable Scene Graph Generation for Operating Rooms](http://arxiv.org/abs/2608.16469v1)
Lemke et al. | 2026-08-17 | Contribution: Develops scene graph generation from surgical video using models suitable for constrained deployment. | Relevance: Supports structured OR scene understanding that can enable downstream embodied/surgical robotics tasks.

## Main Direction

### LLM Pruning and Inference Optimization

No new papers today.

### Multimodal LLM Pruning

No new papers today.

### Continual Learning

#### [Task-Anchored Representation Shaping for Pre-Trained Model-Based Continual Learning](http://arxiv.org/abs/2608.16345v1)
Xu et al. | 2026-08-17 | Contribution: Proposes task-anchored representation shaping to improve reliable inference across tasks in pre-trained-model continual learning. | Relevance: Relevant to lightweight adaptation of pre-trained models without harming previously learned tasks.

#### [Layers Matter: Why Continual Learning Regularization Should Be Layer-Adaptive](http://arxiv.org/abs/2608.15901v1)
Moser et al. | 2026-08-16 | Contribution: Argues that continual-learning regularization should be layer-adaptive instead of relying on per-parameter diagonal Fisher information. | Relevance: Offers a methodological correction to EWC-style regularizers commonly used in continual learning.

#### [Geometry of Forgetting: Representation Flux in Continual Learning](http://arxiv.org/abs/2608.15854v1)
Kazanskii | 2026-08-16 | Contribution: Analyzes representation-space dynamics during forgetting and introduces representation flux as a lens on catastrophic forgetting. | Relevance: Adds a representation-level perspective on forgetting beyond parameter regularization and replay.

## Main Direction

### Event-Based Vision

#### [FLEET: Token-Based Feature Extraction for Event Camera-based Reinforcement Learning](http://arxiv.org/abs/2608.16523v1)
Gottwald et al. | 2026-08-17 | Contribution: Introduces token-based feature extraction for event-camera reinforcement learning, exploiting sparse asynchronous event streams. | Relevance: Advances event-based perception for low-latency control policies, a key lab interest.

### 3D Point Cloud Perception

No new papers today (GaussianDWM++ is covered under Embodied Navigation).

### 3D Point Cloud Perception and Tracking

No new papers today.

## Cross-Topic Signals

- The **state-semantic injection** paper connects LLM-agent security to VLA safety: semantic state representations are a shared attack surface for embodied LLM agents.
- The **continual learning** papers converge on representation-space and layer-adaptive methods, which are also relevant for keeping VLA and LLM agents updated without catastrophic forgetting.
- **FLEET** and **NebulaVLA** both target low-latency control from sparse or asynchronous inputs, suggesting a broader trend toward event-driven and frequency-decoupled agent policies.
- **GaussianDWM++** bridges embodied navigation and 3D scene representation, pointing to shared 3D/language scaffolds that could also benefit VLAs.

## Priority Reading

- **NebulaVLA**: Directly tackles efficiency, cross-embodiment generalization, and execution smoothness — practical bottlenecks for real-world VLA deployment.
- **TRCA**: Offers a concrete route to fine-grained credit assignment in long-horizon LLM agents, a key barrier to effective agent optimization.
- **Layers Matter**: Provides a potentially widely applicable correction to continual-learning regularization, relevant beyond a single benchmark or domain.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*