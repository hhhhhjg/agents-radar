# Lab Research Topics Radar 2026-09-16

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 25 new + 0 seen in the last 14 days | Generated: 2026-09-15 23:53 UTC

---

# Research Topics Radar — 2026-09-16

## Today's Overview
- **LLM Agent Engineering** — 10 new papers, with progress on oversight/enforcement gaps, tenant isolation for tool use, long-horizon memory risk, prompt-injection auditing, team coordination, skill routing, and multi-agent related-work generation.
- **Agent Test-Time Scaling and Self-Improvement** — 3 new papers: Elo-per-token analysis of agent test-time strategies, streaming test-time compute under information slack, and a critical review of resource-allocation evidence.
- **LLM Agent Societies** — No new papers today.
- **Vision-Language-Action Models** — 5 new papers, including paired compound-robustness evaluation, counterfactual attribution, grounded reasoning-to-action, and open-world motion-language.
- **Embodied Navigation** — 3 new papers: a training-free agent harness, a global spatiotemporal latent world model, and VLM-guided object-level costmap correction.
- **LLM Pruning and Inference Optimization** — 3 new papers, led by question-guided VLM token pruning for privacy and attribution-compression trade-offs in RAG; edge early-exit inference is adjacent.
- **Multimodal LLM Pruning** — No new papers today.
- **Continual Learning** — 3 new papers: federated value-based device scheduling and pre-PEFT probing for VLM layer selection; one test-time agent paper also cross-signals.
- **Event-Based Vision** — No new papers today.
- **3D Point Cloud Perception** — 1 new paper: lightweight multimodal UAV localization with LiDAR.
- **3D Point Cloud Perception and Tracking** — No new papers today.

## LLM Agent 与多智能体

### LLM Agent Engineering
#### [Why LLM Agents Collapse Without Oversight: The Enforcement Gap as the Mechanism Behind Emergence World Failures](http://arxiv.org/abs/2609.15293v1)
Y. Wang | 2026-09-14 — Contribution: Identifies the enforcement gap as the mechanism behind unsupervised multi-agent simulation failures. Relevance: Core LLM-agent safety and engineering diagnosis.

#### [The Stochastic Deputy: Structural Tenant Isolation for Tool-Using LLM Agents](http://arxiv.org/abs/2609.14780v1)
M. S. A. Baig et al. | 2026-09-13 — Contribution: Formalizes the stochastic deputy problem and proposes structural tenant isolation for tool-using LLM agents. Relevance: Security engineering for multi-tenant tool invocation.

#### [MemRiskBench: Trace-Aware Risk-Preserving Evaluation for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.14976v1)
J. Jiang et al. | 2026-09-14 — Contribution: Introduces a trace-aware benchmark for long-horizon LLM-agent memory risks. Relevance: Evaluates stale, conflicting, leaked, and revoked memory failures.

#### [ActGuard: Pre-execution Action Auditing against Indirect Prompt Injection in LLM Agents](http://arxiv.org/abs/2609.14987v1)
B. Wang et al. | 2026-09-14 — Contribution: Proposes pre-execution action auditing against indirect prompt injection. Relevance: Defense for tool-invoking agents before harmful actions execute.

#### [Loop-Back Authority in LLM Agent Teams: A Paired Experiment on Flat and Hierarchical Coordination](http://arxiv.org/abs/2609.14767v1)
B. Agachan et al. | 2026-09-13 — Contribution: Runs a paired experiment on flat versus hierarchical coordination with loop-back authority. Relevance: Informs multi-agent LLM team design and review workflows.

#### [Stellar Colosseum: A Many-Agent Harness for Long-Horizon Research in Mathematics and Theoretical Computer Science](http://arxiv.org/abs/2609.15983v1)
H. Lin et al. | 2026-09-14 — Contribution: Builds a model-agnostic many-agent harness for allocating inference across long-horizon research problems. Relevance: Scales agent teams for uncertain, interdependent research decisions.

#### [The Router Within: Eliciting Native Skill Routing from a Frozen LLM](http://arxiv.org/abs/2609.15982v1)
R. Chen et al. | 2026-09-14 — Contribution: Elicits native skill routing from a frozen LLM without preloading all skill metadata. Relevance: Improves agent skill selection and context efficiency.

#### [Assembling the CREW: A Collaborative Multi-agent Reinforcement Learning Framework for Automated Related Work Generation](http://arxiv.org/abs/2609.15721v1)
H.-D. Dang et al. | 2026-09-14 — Contribution: Presents a collaborative multi-agent RL framework for related-work generation. Relevance: Shows adaptive multi-agent LLM workflows beyond predefined pipelines.

### Agent Test-Time Scaling and Self-Improvement
#### [When Agents Slow Down: Understanding LLM Agents' Test-Time Strategies via Elo-per-token Analysis](http://arxiv.org/abs/2609.15309v1)
K. Liu et al. | 2026-09-14 — Contribution: Uses Elo-per-token to analyze adaptive test-time strategies in LLM agents. Relevance: Measures how agent performance scales with additional test-time compute.

#### [Beyond Depth and Width: The Information-Slack Dilemma in Streaming Test-Time Compute](http://arxiv.org/abs/2609.14995v1)
X. Zhang | 2026-09-14 — Contribution: Formalizes the information-slack dilemma when evidence arrives in different orders. Relevance: Clarifies early computation versus waiting in streaming test-time reasoning.

#### [When does a scaling result justify a different allocation? A critical review of resource-allocation evidence for AI systems](http://arxiv.org/abs/2609.14500v1)
S. M. Emadi | 2026-09-13 — Contribution: Reviews when scaling evidence justifies different resource allocations. Relevance: Sets evidence standards for test-time and system-level scaling decisions.

## 具身智能

### Vision-Language-Action Models
#### [Beyond Single-Axis Testing: Paired Evaluation of Compound Robustness in Vision-Language-Action Policies](http://arxiv.org/abs/2609.15940v1)
H. Sawada, S. Kasahara | 2026-09-14 — Contribution: Proposes paired evaluation of compound robustness in VLA policies. Relevance: Exposes simultaneous distribution shifts relevant to real-world VLA deployment.

#### [IMPACT-VLA: Interaction-aware Multimodal Propagation Attribution via Counterfactual Trajectories for Vision-Language-Action Policies](http://arxiv.org/abs/2609.15005v1)
J. Kim, S. Park | 2026-09-14 — Contribution: Attributes VLA task success to modality and interaction stages via counterfactual trajectories. Relevance: Improves interpretability of multimodal contributions in VLA execution.

#### [GRAVA: Grounded Reasoning-to-Action Representation and Learning for Autonomous Driving](http://arxiv.org/abs/2609.15169v1)
X. Liu et al. | 2026-09-14 — Contribution: Grounds reasoning-to-action representations for autonomous driving VLA models. Relevance: Links intermediate reasoning to executable driving behavior.

#### [Open-UniMo: Towards Unified Motion-Language Understanding and Generation in the Open World](http://arxiv.org/abs/2609.14615v1)
G. Wang et al. | 2026-09-13 — Contribution: Unifies motion-language understanding and generation in open-world settings. Relevance: Provides motion-language foundations for embodied VLA systems.

### Embodied Navigation
#### [HarnessVLN: Unifying Training-Free Embodied Navigation through an Agent Harness](http://arxiv.org/abs/2609.15195v1)
Y. Chen et al. | 2026-09-14 — Contribution: Unifies training-free embodied navigation through an agent harness. Relevance: Improves MLLM-based navigation generalization without training.

#### [GLAM: Training a latent world model over global spatiotemporal memory for active exploration and navigation](http://arxiv.org/abs/2609.14561v1)
I-T. Ieong et al. | 2026-09-13 — Contribution: Trains a goal-conditioned latent world model over global spatiotemporal memory. Relevance: Supports active exploration and semantic navigation from partial observations.

#### [NavPatch: Evidence-Guided Object-Level Costmap Correction with Vision-Language Models](http://arxiv.org/abs/2609.14543v1)
S. Sun et al. | 2026-09-13 — Contribution: Uses VLMs for evidence-guided object-level costmap correction. Relevance: Aligns geometric maps with navigation-affecting object semantics.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization
#### [Don't Send What You Don't Need: Question-Guided Token Pruning as a Privacy Defense for Vision-Language Models](http://arxiv.org/abs/2609.15671v1)
M. K. Syfullah, A. A. Khalil | 2026-09-14 — Contribution: Applies question-guided token pruning for privacy defense in VLM VQA under split/federated settings. Relevance: Reduces transmitted visual tokens while limiting sensitive information exposure.

#### [The Attribution-Compression Frontier in Retrieval-Augmented Generation](http://arxiv.org/abs/2609.14245v1)
D. Mody | 2026-09-13 — Contribution: Measures citation attribution across RAG compression methods and budgets. Relevance: Characterizes the trade-off between context compression and attribution quality.

### Continual Learning
#### [Sylvas: Synergistic Learning Value based Device Scheduling in Federated Continual Learning](http://arxiv.org/abs/2609.15763v1)
Y. Sun et al. | 2026-09-14 — Contribution: Proposes synergistic learning-value device scheduling for federated continual learning. Relevance: Addresses non-stationary distributed data streams in IoT settings.

#### [Pre-PEFT Probing: Weight Statistics and Perturbation Robustness for Layer Selection in VLM Vision Encoders](http://arxiv.org/abs/2609.15229v1)
Q. Xia et al. | 2026-09-14 — Contribution: Probes weight statistics and perturbation robustness for PEFT layer selection in VLM vision encoders. Relevance: Enables stable adaptation with fewer trainable parameters.

## 视觉感知

### 3D Point Cloud Perception
#### [PRI-Net: A Lightweight Multimodal Framework for 3D UAV Localization](http://arxiv.org/abs/2609.14469v1)
Z. Chen et al. | 2026-09-13 — Contribution: Proposes a lightweight multimodal framework for 3D UAV localization under sparse LiDAR. Relevance: Advances point-cloud-based localization for edge-constrained UAV systems.

## Cross-Topic Signals
- **Agent safety/engineering as enforceable boundaries:** oversight, tenant isolation, memory-risk evaluation, prompt-injection auditing, and coordination experiments all treat LLM agents as stateful tool users needing structural constraints.
- **Test-time compute allocation is a shared design axis:** Elo-per-token analysis, streaming information slack, skill routing, and many-agent research harnesses all study where and when to spend inference.
- **Evidence-aware compression and correction:** VLM token pruning, RAG attribution-compression, VLA attribution, and navigation costmap correction all select or correct evidence before downstream action.
- **Continual/federated adaptation meets multimodal models:** FCL scheduling and pre-PEFT probing both target stable adaptation under distribution shift with limited updates.
- **Evaluation is shifting from aggregate scores to risk-, budget-, and perturbation-aware diagnostics:** MemRiskBench, paired VLA robustness, and the attribution-compression frontier exemplify this.

## Priority Reading
1. **Why LLM Agents Collapse Without Oversight** — Provides a concrete mechanism for unsupervised multi-agent failure, directly useful for agent oversight and enforcement design.
2. **When Agents Slow Down** — Offers an Elo-per-token method to analyze test-time strategies, stopping, revision, and tool use, central to agent test-time scaling.
3. **GLAM** — Combines global spatiotemporal memory, latent world modeling, and navigation, bridging embodied navigation and VLA-style action planning.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*