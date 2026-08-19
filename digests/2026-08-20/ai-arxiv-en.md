# Lab Research Topics Radar 2026-08-20

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 26 new + 7 seen in the last 14 days | Generated: 2026-08-19 22:18 UTC

---

# Research Topics Radar — 2026-08-20

**1. Today's Overview**
- **LLM Agent Engineering** — Heavy new batch dominated by the agent harness: task-aware harness provisioning, the HarnessRisk safety benchmark, harness-native RL (LEGO-RL, Agent Lightning v1.0), plus a self-evolving financial agent, a community-polarization attack, StartupBench, a memory-diagnostic protocol, and agentic feature-extractor synthesis.
- **Agent Test-Time Scaling and Self-Improvement** — Two new papers: Agentic ESOpt for minimal-GPU fine-tuning of long-horizon agents, and a theoretical game linking Bayesian updating with exponential-weights regret.
- **LLM Agent Societies** — No new papers today.
- **Vision-Language-Action Models** — Strong batch: stereo-evidence routing for humanoid VLA, the LIBERO-VIFO cue-following benchmark, inference-time attention steering, multi-modal intent preservation, a JEPA safety-shield framework, test-time augmentation guidance, HODAgent for humanoid service, and traffic-element awareness for driving.
- **Embodied Navigation** — Two relevant new papers (Embodied-Navigator; conditional-branching VLN diagnosis) plus one previously seen surgical scene-graph paper.
- **LLM Pruning and Inference Optimization** — No new papers today.
- **Multimodal LLM Pruning** — No new papers today.
- **Continual Learning** — Four new papers (Teach and Grow; spaced-repetition pre-training; Chain-of-Experience; analog-gauge VLM study) plus previously seen representation-shaping, structural-growth, and adapters work.
- **Event-Based Vision** — No new papers today (FLEET remains from the last 14 days).
- **3D Point Cloud Perception** — No new papers today (GaussianDWM++ remains from the last 14 days).
- **3D Point Cloud Perception and Tracking** — No new papers today.

**2. Research Areas**

## LLM Agents & Multi-Agent (LLM Agent 与多智能体)

### LLM Agent Engineering

#### [Task-Aware Harness Provisioning for LLM Agents in Mission-Critical Infrastructure Operations](http://arxiv.org/abs/2608.17433v1)
Lin et al. | 2026-08-18 | Proposes per-task provisioning of harness access (information, tools, actions) for LLM agents in mission-critical infrastructure. | Directly targets harness design, the central substrate of LLM agent engineering.

#### [HarnessRisk: A Lifecycle-Oriented Benchmark for Agent Harness Safety](http://arxiv.org/abs/2608.17597v1)
Bai et al. | 2026-08-18 | Introduces a lifecycle-oriented benchmark for agent harness safety spanning tools, extensions, persistent state, permissions, and external actions. | Offers a unified safety evaluation for the harness layer.

#### [LEGO-RL: Harness-Native Reinforcement Learning for Coding Agents](http://arxiv.org/abs/2608.17393v1)
Du et al. | 2026-08-18 | Makes coding-agent harness execution native to policy-gradient RL by resolving environment/training misalignment. | Core work on harness-native RL for tool-using coding agents.

#### [Agent Lightning v1.0: Towards Harnessed Agentic RL](http://arxiv.org/abs/2608.17528v1)
He et al. | 2026-08-18 | Extends a disaggregated architecture connecting arbitrary agents to RL training via an LLM endpoint proxy, with harness as a first-class component. | Advances the harnessed-agentic-RL architectural pattern.

#### [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](http://arxiv.org/abs/2608.17933v1)
Jiang et al. | 2026-08-18 | Self-evolving LLM agent that adapts change-point algorithms across non-stationary financial assets and market regimes. | Demonstrates agentic automation of expert-driven analytical workflows.

#### [GraphWake: Group Polarization via Memory-Mediated Polarization Cascade in LLM-Agent Communities](http://arxiv.org/abs/2608.17665v1)
Bu et al. | 2026-08-18 | Shows memory-mediated polarization cascades can induce group polarization in LLM-agent communities. | Highlights a new attack surface for deployed multi-agent systems.

#### [StartupBench: Benchmarking General-Purpose Agents on Market-Validated End-to-End Workflows](http://arxiv.org/abs/2608.17800v1)
Zhu et al. | 2026-08-18 | Benchmarks general-purpose agents on market-validated, end-to-end startup workflows. | Grounds agent capability measurement in real user demand rather than researcher-selected tasks.

#### [D$^2$ACCI: A Dual-Loop Diagnostic Protocol for Evidence-Preserving Agent Memory](http://arxiv.org/abs/2608.17756v1)
Liu et al. | 2026-08-18 | Dual-loop diagnostic protocol localizing failures across the agent-memory pipeline (ingestion, retrieval, filtering, generation). | Targets persistent-memory reliability, a key agent-engineering component.

#### [Synthesizing Feature Extractors: An Agentic Approach for Algorithm Selection](http://arxiv.org/abs/2608.17170v1)
Xia et al. | 2026-08-17 | Uses LLM agents to synthesize feature extractors for constraint-satisfaction algorithm selection. | Shows agentic automation applied to a classical feature-engineering bottleneck.

### Agent Test-Time Scaling and Self-Improvement

#### [Agentic ESOpt: Fine-Tuning Long-Horizon LLM Agents with Minimal GPU Requirements](http://arxiv.org/abs/2608.17310v1)
Zheng et al. | 2026-08-18 | Proposes a lightweight, backprop-free optimization alternative to RL for long-horizon agentic reasoning with branching interactions and sparse rewards. | Directly addresses compute-efficient self-improvement for long-horizon agents.

#### [The concentration game: Bayesian updating, regret, and information](http://arxiv.org/abs/2608.18061v1)
Balsubramani | 2026-08-18 | Unifies Bayesian updating and exponential-weights regret through a two-player zero-sum game and a variational concentration form. | Provides regret-theoretic foundations for online learning and agent self-improvement dynamics.

## Embodied Intelligence (具身智能)

### Vision-Language-Action Models

#### [EATR-Stereo: Embodiment-Aware Routing of Paired Stereo Evidence for Humanoid Vision-Language-Action Control](http://arxiv.org/abs/2608.17453v1)
Wu et al. | 2026-08-18 | Embodiment-aware routing of paired stereo evidence for head-mounted cameras, preserving pretrained-interface compatibility. | Tackles complementary-view fusion for long-horizon humanoid VLA control.

#### [LIBERO-VIFO: Benchmarking the Capability and Safety of Visual Cue Following in Vision-Language-Action Models](http://arxiv.org/abs/2608.17600v1)
Qian et al. | 2026-08-18 | Benchmarks whether VLA models follow authorized visual cues while disregarding unauthorized ones. | Jointly evaluates capability and safety of cue-guided VLA policies.

#### [CompCPZ: Preserving Multi-Modal Intent in Language-Guided Robot Manipulation](http://arxiv.org/abs/2608.17717v1)
Zhang et al. | 2026-08-18 | Preserves multi-modal intent so disjunctive manipulation instructions do not collapse into geometric compromise. | Fixes a structural semantic failure in language-conditioned robot policies.

#### [Calibrated Predictive Safety for Heterogeneous Robots: An Action-Conditioned JEPA Framework with Model-Based Safety Shields](http://arxiv.org/abs/2608.17496v1)
Zhong et al. | 2026-08-18 | Pairs an action-conditioned JEPA world model with model-based safety shields to provide execution-time guarantees for VLA policies. | Closes the no-guarantees gap in VLA policy deployment.

#### [Inference-Time Attention Steering for Vision-Language-Action Driving Models](http://arxiv.org/abs/2608.17095v1)
Prasad et al. | 2026-08-17 | Steers attention toward safety-critical actors via bounded additive pre-softmax bias at inference, without retraining. | Enables post-hoc redirection in VLA driving models.

#### [Reuse Before You Retrieve: Diagnosing Headroom and Complementarity for Test-Time Augmentation of Embodied Multimodal Policies](http://arxiv.org/abs/2608.17484v1)
Jeong & Yoon | 2026-08-18 | Diagnoses when frozen VLA policies benefit from extra sampling versus external demonstrations at test time. | Provides decision guidance for test-time augmentation of deployed policies.

#### [HODAgent: Towards On-Demand, Responsive Humanoids for Physical World Human Interaction](http://arxiv.org/abs/2608.17584v1)
Chen et al. | 2026-08-18 | Semi-duplex System-2 embodied agent for humanoid service integrating Env-Interactor, Planner, Executor, and hierarchical memory. | Combines VLA-style reasoning with responsive execution and outcome verification.

#### [Plug-and-Play Traffic Element Awareness for End-to-End Autonomous Driving](http://arxiv.org/abs/2608.18035v1)
Zhang et al. | 2026-08-18 | Adds plug-and-play traffic light and sign awareness to end-to-end driving models. | Extends VLA driving perception beyond dynamic participants to static traffic elements.

### Embodied Navigation

#### [Embodied-Navigator: Point, Think, Memorize, and Align for Efficient Navigation](http://arxiv.org/abs/2608.17512v1)
Feng et al. | 2026-08-18 | Point-think-memorize-align framework that keeps VLMs in 2D-aligned action spaces for navigation. | Improves VLM-based embodied navigation efficiency and alignment with pretraining priors.

#### [If, Then, Otherwise: Diagnosing Conditional Branching in Vision-Language Navigation](http://arxiv.org/abs/2608.17318v1)
Lee et al. | 2026-08-18 | Diagnoses VLN agents on instructions that branch based on observed environmental state. | Adds a realistic conditional-branching evaluation dimension for navigation agents.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Sterilizable Scene Graph Generation for Operating Rooms](http://arxiv.org/abs/2608.16469v1)
Lemke et al. | 2026-08-17 | Efficient surgical-video scene graph generation for holistic OR understanding. | Matched to embodied navigation; structured scene perception for embodied systems in clinical settings.

## Model Compression & Continual Learning (模型压缩与持续学习)

### Continual Learning

#### [Teach and Grow: An Agent-Centered Architecture for General Robot Learning](http://arxiv.org/abs/2608.17209v1)
Nie et al. | 2026-08-17 | Agent-centered architecture for general robot learning that expands beyond validated VLA coverage. | Frames robot skill acquisition as continual learning layered on VLA/world-action models.

#### [When to Review: Spaced Repetition for Continual Pre-Training of Language Models](http://arxiv.org/abs/2608.17530v1)
Atreya et al. | 2026-08-18 | Schedules example review according to per-example forgetting during continual pre-training. | Directly mitigates catastrophic forgetting in LLM continual pre-training.

#### [Chain-of-Experience for Continual LLM Improvement](http://arxiv.org/abs/2608.18027v1)
Tu et al. | 2026-08-18 | Studies how LLMs improve through iterative experience at inference time. | Connects continual learning with inference-time self-improvement.

#### [Vision-Language Models for Analog Gauge Reading: An Empirical Study of Specialization, Transfer and Reliability](http://arxiv.org/abs/2608.17723v1)
Mueez et al. | 2026-08-18 | Empirical evaluation of VLM specialization, transfer, and reliability for industrial gauge reading. | Informs cross-domain transfer decisions in continual visual deployment.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Task-Anchored Representation Shaping for Pre-Trained Model-Based Continual Learning](http://arxiv.org/abs/2608.16345v1)
Xu et al. | 2026-08-17 | Task-anchored representation shaping for PTM-based continual learning with reliable inference over all tasks. | Tackles task-boundary artifacts that undermine multi-task inference.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [SoftModel: A Neural Model That Grows Its Own Topology -- Governed Structural Growth for Continual In-Service Learning](http://arxiv.org/abs/2608.16409v1)
Xie | 2026-08-17 | Neural model that grows its own topology for continual in-service learning under total plasticity. | Proposes structural growth beyond the train-then-deploy paradigm.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Self-Routed Tensor Adapters for Parameter-Efficient Universal Visual Adaptation](http://arxiv.org/abs/2608.16384v1)
Yadav | 2026-08-17 | Parameter-efficient adapters that route across heterogeneous domains without domain-specific fragmentation. | Reduces representational fragmentation in universal/continual visual adaptation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Domain-Agnostic Neural Topic Modeling with Contextual Token-Level Semantic Graph Representation](http://arxiv.org/abs/2608.16269v1)
Seo et al. | 2026-08-17 | Contextual token-level semantic graphs keep PLM topic models interpretable on specialized corpora. | Relevant to continual learning via domain-shift robustness of pre-trained models on new corpora.

## Visual Perception (视觉感知)

### Event-Based Vision

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [FLEET: Token-Based Feature Extraction for Event Camera-based Reinforcement Learning](http://arxiv.org/abs/2608.16523v1)
Gottwald et al. | 2026-08-17 | Token-based feature extraction enabling event-camera reinforcement learning. | Directly on-topic advance for event-based vision in control policies.

### 3D Point Cloud Perception

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [GaussianDWM++: Language-Grounded 3D Gaussian Driving World Model for Unified Scene Understanding, Editing, and Multi-Modal Generation](http://arxiv.org/abs/2608.16234v1)
Deng et al. | 2026-08-17 | Language-grounded 3D Gaussian driving world model for unified scene understanding, editing, and generation. | Advances 3D Gaussian/point-cloud scene perception with language grounding.

**3. Cross-Topic Signals**
- **Harness as a first-class abstraction**: Task-Aware Harness Provisioning, HarnessRisk, LEGO-RL, and Agent Lightning v1.0 all treat the harness (tools, context, permissions, execution) as the central object of design, for both safety and RL training.
- **Inference-time intervention over retraining**: Inference-Time Attention Steering, Reuse Before You Retrieve, Agentic ESOpt, and Chain-of-Experience all improve deployed agents/policies without full retraining.
- **Safety as a converging evaluation concern**: HarnessRisk, LIBERO-VIFO (authorized vs. unauthorized cues), Calibrated Predictive Safety, and GraphWake signal cross-domain attention to safety of agentic and embodied systems.
- **Continual learning moves into deployed agents**: Teach and Grow, When to Review, and Chain-of-Experience extend continual learning from static benchmarks to interactive, deployed robot/LLM agents.

**4. Priority Reading**
- **[HarnessRisk](http://arxiv.org/abs/2608.17597v1)** — The harness is becoming the dominant abstraction in agent engineering and safety; this lifecycle benchmark best maps the new risk surface.
- **[Teach and Grow](http://arxiv.org/abs/2608.17209v1)** — Bridges VLA and continual learning with an agent-centered architecture; likely to shape how the lab's embodied and continual-learning threads combine.
- **[Calibrated Predictive Safety](http://arxiv.org/abs/2608.17496v1)** — Directly addresses the execution-time guarantee gap of VLA policies with a JEPA-based safety shield, highly relevant to deploying VLA models outside the lab.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*