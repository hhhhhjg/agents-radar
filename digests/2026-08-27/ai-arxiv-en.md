# Lab Research Topics Radar 2026-08-27

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 42 new + 8 seen in the last 14 days | Generated: 2026-08-27 02:47 UTC

---

# Research Topics Radar (2026-08-27)

## Today's Overview
- **LLM Agent Engineering** — 11 new papers. Main progress in long-horizon memory (Recuris), harness evolution (JIT-Agent, Beyond Scaling), tool-call control (Tunable Tool-Call Rates), orchestration/credit assignment (ProgRouter, IAPO), and agent skill accumulation (SkillForge).
- **Agent Test-Time Scaling and Self-Improvement** — 6 new papers. Progress on efficient long-thought decoding (Prefix Sliding), retrieval-grounded voting (Beyond Confidence), a unified recursion view of test-time reasoning, and robotic reasoning via RL (R³).
- **LLM Agent Societies** — No new papers today.
- **Vision-Language-Action Models** — 10 new papers. Progress on multi-arm VLA, streaming temporal modeling, geometry-aware spatial reasoning, gripper awareness, heterogeneous embodiment pretraining, and execution-time tactile feedback.
- **Embodied Navigation** — 3 new papers. Strongest concrete contribution is a 4D LiDAR annotation bootstrapping tool; other new matches are tangential perception adaptation/survey papers.
- **LLM Pruning and Inference Optimization** — 1 new paper, but it is a weak match (RF interference suppression); no strong LLM-pruning contribution today.
- **Multimodal LLM Pruning** — 2 new papers. Both address head-aware visual token pruning to reduce VLM prefill/inference cost.
- **Continual Learning** — 9 new papers. Advances in prompt-based gating, evolving semantic concept shift, image-restoration forgetting, QLoRA acquisition-retention tradeoffs, and plasticity controls.
- **Event-Based Vision** — No new papers today.
- **3D Point Cloud Perception** — 1 new paper. Emergency-vehicle interaction benchmark; one repeated generative 3D underwater data paper also fits.
- **3D Point Cloud Perception and Tracking** — No new papers today.

---

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [Recuris: Recursive Experiential-Working Memory Evolution for Long-Horizon Agent Harnesses](http://arxiv.org/abs/2608.24876v1)
Yu et al. (2026-08-25). Introduces a recursive Experiential-Working Memory architecture that tracks task progress and evolves experience for long-horizon agent harnesses. Directly targets a central LLM-agent problem: growing histories obscuring task state and skill invocation.

#### [JIT-Agent: Scaling Harness Intelligence via Just-in-Time Harness Evolution](http://arxiv.org/abs/2608.25593v1)
Zhang et al. (2026-08-26). Proposes just-in-time evolution of agent harness components such as memory, planning, and tool orchestration. Highly relevant because harness design can dominate foundation-model capability.

#### [Beyond Scaling: Self-Evolving LLM Agents for Hardware Kernel Optimization via an Experience-Driven Workflow and Experience Graph Memory](http://arxiv.org/abs/2608.25570v1)
Chen et al. (2026-08-26). Uses self-evolving LLM agents with experience graph memory to optimize hardware kernels across repeated compile-test-profile cycles. Relevant to self-improving agent workflows with reusable cross-task experience.

#### [Tunable Tool-Call Rates in LLM Agents via Representation Steering](http://arxiv.org/abs/2608.25198v1)
Chen et al. (2026-08-25). Steers latent representations to adjust how often an LLM agent calls tools. Important for controllable tool-use behavior and costly false-positive/negative tool decisions.

#### [ProgRouter: Online Progress-Guided Orchestration for Multi-Agent LLM Workflows under Quality-Cost Tradeoffs](http://arxiv.org/abs/2608.25992v1)
Li et al. (2026-08-26). Routes work among specialized LLM agents online using estimated task progress. Relevant to cost-aware multi-agent orchestration.

#### [IAPO: Influence-Aware Policy Optimization for Credit Assignment in Multi-Turn Service Agents](http://arxiv.org/abs/2608.24588v2)
Ren et al. (2026-08-25). Assigns credit in multi-turn service-agent RL by estimating influence of actions on future utility. Relevant for training long-horizon tool- and user-interactive agents.

#### [EviDx: Evidence-Aware Active Diagnosis with Scaffolded LLM Agents](http://arxiv.org/abs/2608.24570v1)
Zeng et al. (2026-08-25). Frames clinical diagnosis as active evidence-seeking with LLM agents that update hypotheses and decide when evidence is sufficient. Relevant to evidence-driven agent design beyond medical QA.

#### [SkillForge: Evolving Verifiable Skills for Reinforcement Learning Agents](http://arxiv.org/abs/2608.24747v1)
Yang et al. (2026-08-25). Evolves verifiable skills so RL-trained LLM agents can accumulate reusable knowledge across episodes. Relevant to skill-based self-improvement in agentic systems.

#### [LifePlanner: Evaluating LLM Agents for Geo-spatial Planning with Social Media Data](http://arxiv.org/abs/2608.25039v1)
Dong et al. (2026-08-25). New benchmark for geo-spatial planning with noisy social signals, tool use, and multi-constraint reasoning. Relevant for evaluating grounded, open-ended LLM agent capabilities.

#### [Belief Cascades Drive Persuasion in LLM Agent Networks](http://arxiv.org/abs/2608.25152v1)
Qiu et al. (2026-08-25). Controlled testbed showing how goal-directed persuaders shift stances in networked LLM agents. Relevant to multi-agent information-flow dynamics and agent-engineering safety.

### Agent Test-Time Scaling and Self-Improvement

#### [Prefix Sliding for efficient test-time scaling](http://arxiv.org/abs/2608.26070v1)
Muennighoff et al. (2026-08-26). Cuts memory cost of long reasoning traces by sliding a prefix window instead of keeping all tokens in full attention. Directly improves feasibility of test-time scaling for long-horizon tasks.

#### [Beyond Confidence: Test-Time Scaling for Multi-Turn Search Agents via Retrieval Grounding](http://arxiv.org/abs/2608.24024v1)
Kook et al. (2026-08-25). Extends confidence-based voting to multi-turn search agents by conditioning on retrieved evidence. Relevant for scaling multi-turn agent inference more reliably.

#### [Recursive Agentic Reasoning](http://arxiv.org/abs/2608.23956v1)
Zhang et al. (2026-08-25). Unifies iterative refinement, decomposition, and repeated sampling as recursion operators over an agent state. Relevant for understanding and comparing test-time scaling methods.

#### [R³: Training Robots to Reason in Natural Language via Reinforcement Learning](http://arxiv.org/abs/2608.26053v1)
Wu et al. (2026-08-26). Trains robot policies to reason in language with RL, allowing more test-time compute for long-horizon manipulation. Bridges test-time scaling and embodied control.

#### [ShuttleArena: Interpretable Self-Play in Physics-Based Badminton](http://arxiv.org/abs/2608.25246v1)
Ding (2026-08-26). Self-play environment where shot selection and recovery positions are jointly learned in physics-based badminton. Relevant to self-improvement through multi-agent game dynamics.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [ParallelWorld: Test-Time Scaling for Embodied Reasoning](http://arxiv.org/abs/2608.22971v1)
Chen et al. (2026-08-24). Applies test-time scaling to embodied reasoning via dynamic exploration. Strong cross-domain fit between agent scaling and embodied intelligence.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Prime Agent: A Self-Improving RLM Harness](http://arxiv.org/abs/2608.23552v1)
Karten et al. (2026-08-24). Open-source self-improving harness for long-horizon evaluation and coding-agent workflows. Relevant to harness-level agency and recursive self-improvement.

---

## 具身智能

### Vision-Language-Action Models

#### [MA-VLA: Multi-Arm Vision-Language-Action Model for Collaboration and Compositional Generalization](http://arxiv.org/abs/2608.25864v1)
Zhang et al. (2026-08-26). Adds explicit arm-assignment and compositional mechanisms for multi-arm collaboration in VLA manipulation. Directly extends VLA capability to a core multi-arm setting.

#### [StreamPI: Streaming Multimodal Temporal Modeling for Vision-Language-Action Models](http://arxiv.org/abs/2608.26067v1)
Liu et al. (2026-08-26). Gives VLA models streaming temporal modeling instead of single-frame operation. Addresses a key limitation of current VLA architectures for precise spatial perception.

#### [V-Link: Recovering Lost Visual Representations in Action DiT for Vision-Language-Action Models](http://arxiv.org/abs/2608.25308v1)
Lu et al. (2026-08-26). Identifies limited 3D-geometry access in the VLA action expert and proposes recovery of lost visual representations. Important architectural diagnosis for VLA policy learning.

#### [GaussVLA: Geometry-Aware Spatial Reasoning for Vision-Language-Action Model](http://arxiv.org/abs/2608.24959v1)
Sarowar et al. (2026-08-25). Replaces flat 2D patch tokens and depth scalars with geometry-aware spatial reasoning. Relevant for improving 3D generalization in VLA policies.

#### [Gripper-aware Vision Language Action Models](http://arxiv.org/abs/2608.24603v1)
Zhang et al. (2026-08-25). Makes VLAs explicitly aware of gripper state instead of assuming gripper invariance. Relevant for real-world grasping and manipulation robustness.

#### [One Policy, Many Embodiments: Unified Camera-Centric Action Geometry Pre-training for Heterogeneous Embodied Manipulation](http://arxiv.org/abs/2608.26058v1)
Xiaomi Embodied Intelligence Team et al. (2026-08-26). Pretrains a unified camera-centric action-geometry representation across heterogeneous robots and cameras. Relevant for scaling generalist VLA across embodiments.

#### [LM-X: Explainable Action Modeling with Progress, Event, and Uncertainty Prediction for Generalist Robot Manipulation](http://arxiv.org/abs/2608.25757v1)
Lou et al. (2026-08-26). Adds progress, event, and uncertainty prediction to VLA action outputs for long-horizon behavior. Relevant for interpretable and more controllable robot manipulation.

#### [TacForcing: Streaming Action Generation with Execution-Time Tactile Feedback](http://arxiv.org/abs/2608.25798v1)
Zhou et al. (2026-08-26). Updates VLA action chunks during execution with tactile feedback rather than stale pre-execution observations. Relevant for contact-rich manipulation.

#### [PonderPounce: A Pretrained MLLM as an Episode Context Engine for Robot Control](http://arxiv.org/abs/2608.24115v1)
Choi et al. (2026-08-25). Uses a pretrained MLLM as episodic context memory for robot control. Relevant to combining long visual history and in-context inference with VLA-style control.

#### [A Taxonomy of Construction Task Activities for Robot Workers](http://arxiv.org/abs/2608.25395v1)
Sakib et al. (2026-08-26). Provides an occupation-grounded taxonomy of construction activities for VLA-enabled robot workers. Relevant to domain-scoping generalist VLA deployment.

### Embodied Navigation

#### [Bootstrapping a 4D LiDAR Annotation Tool from Video Foundation Models](http://arxiv.org/abs/2608.25418v1)
Kim et al. (2026-08-26). Uses video foundation models to bootstrap temporally consistent 4D LiDAR annotations. Relevant for scalable perception data needed for embodied navigation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [OptiSight: Bridging Semantic Reasoning and Geometric Control for Embodied Navigation](http://arxiv.org/abs/2608.23354v1)
Avan & Sanchez-Riera (2026-08-24). Combines VLM reasoning with deterministic visual servoing in a finite-state CoT architecture for indoor navigation. Strong fit to semantic+geometric embodied navigation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [UniMem: Unifying Multimodal Memory and Control for Vision-Language-Action Models](http://arxiv.org/abs/2608.22869v1)
Osterberg et al. (2026-08-24). Unifies multimodal memory and control for VLA models on non-Markovian long-horizon tasks. Relevant for embodied agents that must remember past observations across navigation/manipulation episodes.

---

## 模型压缩与持续学习

### Multimodal LLM Pruning

#### [HAP: Head-Adaptive Visual Token Pruning via Cross-Modal Alignment](http://arxiv.org/abs/2608.23921v1)
Sun et al. (2026-08-24). Prunes visual tokens per attention head using cross-modal alignment rather than uniform head averaging. Relevant for reducing VLM prefill cost while preserving head-specific visual information.

#### [Not All Attention Heads Contribute to Critical Visual Token Selection: Head-Aware Pruning Matters More](http://arxiv.org/abs/2608.25332v1)
Ma et al. (2026-08-26). Shows that head-aware scoring is critical for visual token pruning in VLMs. Relevant for designing better VLM token-pruning strategies.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [E2S-Pruner: Progressive Two-Stage Evidence Fusion for Visual Token Pruning in Vision-Language Models](http://arxiv.org/abs/2608.23253v1)
Qian et al. (2026-08-24). Progressively fuses evidence across attention heads and layers for visual token pruning. Relevant to efficient VLM inference and multimodal compression.

### Continual Learning

#### [GAP-Prompt: Gated Adaptive Prompting for Efficient Continual Learning](http://arxiv.org/abs/2608.23782v1)
Dang et al. (2026-08-24). Uses gated adaptive prompts with frozen backbones to reduce catastrophic forgetting. Directly relevant to prompt-based continual learning.

#### [Continual Visual Learning under Evolving Semantic Concept Shift](http://arxiv.org/abs/2608.23903v1)
Lamaakal et al. (2026-08-24). Studies continual learning when semantic labels/taxonomies themselves evolve over time. Relevant for long-lived visual systems with changing task definitions.

#### [Restoring Without Forgetting: Continual Learning Across Image Degradations](http://arxiv.org/abs/2608.23799v1)
Ashrafee & Krawczyk (2026-08-24). Extends continual learning to all-in-one image restoration across sequentially arriving degradations. Relevant for open-world image restoration.

#### [Learning New Facts with QLoRA: An Acquisition-Retention Frontier](http://arxiv.org/abs/2608.25677v1)
Zheng et al. (2026-08-26). Shows that QLoRA adapter capacity defines an acquisition-retention tradeoff when learning new facts. Relevant for continual knowledge updating in LLMs.

#### [Dimensionless Controls of Plasticity Under Alternating Tasks: From Evolutionary Biology to Continual Learning](http://arxiv.org/abs/2608.23889v1)
Skriloff (2026-08-24). Analyzes minimal deep-learning controls of plasticity under alternating tasks. Relevant for principled continual-learning design.

#### [Continually learning neural-operator surrogate for three-dimensional airborne electromagnetic Bayesian inversion](http://arxiv.org/abs/2608.25932v1)
Chung et al. (2026-08-26). Uses continual learning to train neural-operator surrogates for expensive 3D geophysical Bayesian inversion. Relevant for continual adaptation of learned surrogates in scientific ML.

#### [CrossMambaTuning: Synergistic Spatial and Cross-Layer Adaptation for Machine Vision Compression](http://arxiv.org/abs/2608.25568v1)
Xiong et al. (2026-08-26). Proposes efficient adaptation of pretrained learned image compression models to downstream vision tasks. Relevant to deployment-efficiency and reducing retraining overhead.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Adapter-Based Few-Shot Continual Learning for Malicious Packet Recognition](http://arxiv.org/abs/2608.23536v1)
Stein et al. (2026-08-24). Uses adapters for few-shot continual learning in malicious packet recognition. Relevant to continual security-domain adaptation with limited new samples.

---

## 视觉感知

### 3D Point Cloud Perception

#### [SIREN-Bench: Behavior-Driven Generation and Evaluation of Emergency-Vehicle Interactions](http://arxiv.org/abs/2608.24094v1)
Zhu et al. (2026-08-25). Generates and evaluates safety-critical emergency-vehicle traffic interactions with behavior-level control. Relevant to 3D/point-cloud perception in autonomous driving contexts.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [BenthicFlow: Generating Extensible Underwater Environments via Flow Matching](http://arxiv.org/abs/2608.23173v1)
Figueira et al. (2026-08-24). Generates extensible underwater 3D environments with flow matching. Relevant for addressing scarce 3D point-cloud/scene data in underwater perception.

---

## Cross-Topic Signals
- **Memory and context management** connects agent engineering and embodied VLA work: Recuris, JIT-Agent, IAPO, UniMem, and PonderPounce all treat memory as an evolvable/structured component rather than a static context window.
#### - **Test-time scaling is moving from language-only to embodied settings**: Prefix Sliding, Recursive Agentic Reasoning, R³, and ParallelWorld share the pattern of spending more inference-time compute on hard decisions.
- **Token efficiency and continual adaptation converge on deployment cost**: head-aware visual pruning (HAP, E2S-Pruner) and adapter/QLoRA-based continual learning both target reduced retraining and inference overhead.
- **Geometry/3D awareness is a shared bottleneck** across VLA manipulation, embodied navigation, and point-cloud perception: GaussVLA, V-Link, SIREN-Bench, and BenthicFlow all address 3D structure or data scarcity.

## Priority Reading
- **JIT-Agent** — Argues that harness design can dominate foundation-model capability; directly actionable for building self-improving agent systems.
- **Prefix Sliding** — Offers a simple, broadly applicable way to make long reasoning traces affordable; highly relevant to any test-time scaling pipeline.
- **V-Link** — Identifies a concrete visual-information bottleneck in VLA action experts and proposes a targeted fix; valuable for embodied manipulation research.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*