# Lab Research Topics Radar 2026-09-05

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 27 new + 13 seen in the last 14 days | Generated: 2026-09-04 23:38 UTC

---

## Today's Overview

- **LLM Agent 与多智能体 / LLM Agent Engineering**: Ten new papers cover graph-based long-horizon credit assignment, SOC security agents, fairness audits, lifecycle-hook attacks, distributed-memory staleness, knowledge-conflict benchmarks, CAE simulation agents, environment co-evolution for terminal agents, speculative tool execution, and meeting delegation.
- **LLM Agent 与多智能体 / Agent Test-Time Scaling and Self-Improvement**: Three new papers explore cost-effective revision propagation, in-context tabular foundation models, and non-incremental learners in self-play; one previously seen post-training pipeline remains relevant.
- **LLM Agent 与多智能体 / LLM Agent Societies**: No new papers today.
- **具身智能 / Vision-Language-Action Models**: Ten new papers advance world-model-guided post-training, unified robot learning, intermediate-feature supervision, robust multimodal sensing, autonomous-driving planning, compact LIBERO policies, bimanual manipulation data, real-to-sim evaluation, force-aware loco-manipulation, and JEPA-based planning.
- **具身智能 / Embodied Navigation**: One new paper revisits topological macro actions for closed-loop VLN-CE; repeated work on linguistic-foresight VLN, maze world dynamics, and manipulation-enhanced mapping remains relevant.
- **模型压缩与持续学习 / LLM Pruning and Inference Optimization**: TAP-Path contributes structured/token pruning for a pathology foundation model; the stronger visual-token and streaming-video pruning work is captured under multimodal pruning.
- **模型压缩与持续学习 / Multimodal LLM Pruning**: CoverPruner reframes visual token pruning as coverage optimization; ShallowStream targets streaming-video multimodal inference.
- **模型压缩与持续学习 / Continual Learning**: One new task-free continual anomaly-detection method; repeated agent-skill optimization papers remain relevant.
- **视觉感知 / Event-Based Vision**: No new papers today.
- **视觉感知 / 3D Point Cloud Perception**: No new papers today; one previously seen 4D radar point-cloud paper is included below.
- **视觉感知 / 3D Point Cloud Perception and Tracking**: No new papers today.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [TIGPO: Temporal Instance-Graph Policy Optimization for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.03383v1)
Gan (2026-09-03). Organizes rollouts into temporal instance-graphs to improve credit assignment and preserve transitions across policy updates. Relevant to long-horizon LLM-agent policy optimization.

#### [SENTINEL-RL: Offloading Topological Reasoning from LLM Agents in the Security Operations Center](http://arxiv.org/abs/2609.04159v1)
Vallabhaneni et al. (2026-09-03). Offloads topological reasoning in SOC agents to constrain containment decisions despite limited context windows. Relevant to reliable enterprise LLM agents under hard safety constraints.

#### [Fresh Memory, Stale Plans: Dependency-Scoped Validation for Distributed LLM-Agent Memory](http://arxiv.org/abs/2609.03340v1)
Chen et al. (2026-09-03). Adds dependency-scoped validation to distributed LLM-agent memory to prevent stale-plan execution when new facts arrive. Relevant to memory consistency in distributed agent teams.

#### [A Blind Trust, the Bloody Thrust: When Attacker-Controlled Hook Updates Steer AI Agent Harnesses towards Malicious Behaviors](http://arxiv.org/abs/2609.03884v1)
Li et al. (2026-09-03). Shows that lifecycle hooks in agent harnesses run host-privileged commands the LLM never observes, enabling malicious steering. Relevant to securing agent execution infrastructure.

#### [Speculative Macro Commit for Faster Tool-Using Agents](http://arxiv.org/abs/2609.03236v1)
Liu et al. (2026-09-03). Reduces serial action–observation latency by speculatively committing macro sequences in two-tier tool-using agents. Relevant to wall-clock efficiency of tool agents.

#### [Environment Evolution for Terminal Agents](http://arxiv.org/abs/2609.04128v1)
Fan et al. (2026-09-03). Iteratively evolves terminal-agent environments so frontier models continue to receive challenging learning signals. Relevant to scalable agent training and environment generation.

#### [KC-Bench: A Dynamic Interactive Benchmark for Evaluating Knowledge Conflicts in LLM Agents](http://arxiv.org/abs/2609.03588v1)
Lyu et al. (2026-09-03). Multi-turn benchmark measuring how agents reconcile user instructions, parametric knowledge, and dynamic observations. Relevant to knowledge-conflict robustness in tool-using agents.

#### [Speak for Me: Giving LLMs the Situational Awareness to Participate in a Meeting](http://arxiv.org/abs/2609.03923v1)
Khan et al. (2026-09-03). Provides delegates with explicit stance, coverage, and floor tracking for meeting participation. Relevant to LLM delegation and situated communication.

#### [What Do CAE Simulation Agents Really Need Beyond a Generic Harness?](http://arxiv.org/abs/2609.03718v1)
Shi & Zhang (2026-09-03). Identifies missing domain-specific capabilities for LLM agents that set up OpenFOAM/FEniCS/COMSOL simulations. Relevant to domain-grounded agent engineering.

#### [Counterfactual Fairness Audits of Multi-Step Clinical LLM Agents Require a Measured Per-Action Instability Floor](http://arxiv.org/abs/2609.03221v1)
Bellibaltu et al. (2026-09-02). Shows counterfactual flip rates are uninterpretable without a per-action instability floor. Relevant to fair and trustworthy clinical agent auditing.

### Agent Test-Time Scaling and Self-Improvement

#### [What Else Needs Fixing? Exploring Cost-Effective Test-Time Compute for Revision Propagation in Artifacts Generated Through Conversation](http://arxiv.org/abs/2609.03254v1)
Kikuta (2026-09-03). Allocates test-time compute to propagate local user revisions across dependent artifact content. Relevant to LLM-agent generation–revision loops.

#### [Xiaomi-TabLDM: A Tabular Foundation Model Technical Report](http://arxiv.org/abs/2609.03880v1)
Xiaomi-TabLDM Team et al. (2026-09-03). Pretrains a tabular foundation model on synthetic structural-causal-model data for in-context classification and regression. Relevance: in-context/test-time adaptation may transfer to agent tool use despite the non-agent domain.

#### [Local Updates, Global Learning (LUGL): Playing Games with non-incremental Learners](http://arxiv.org/abs/2609.03660v1)
Milec et al. (2026-09-03). Enables non-incremental learners such as LightGBM to participate in RL self-play through local-update/global-learning schemes. Relevant to alternative self-improvement update rules for agents.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Post-Training Language Models for Gold-Medal Performance in Coding Competitions](http://arxiv.org/abs/2609.02849v1)
Ficek et al. (2026-09-02). Builds an end-to-end problem-curation, synthetic-traces, and post-training pipeline for competitive programming. Relevant to LLM self-improvement through targeted post-training.

## 具身智能

### Vision-Language-Action Models

#### [WISE: World-model-guided Imagination Scheduling for Efficient Post-training of Vision-Language-Action Models](http://arxiv.org/abs/2609.03681v1)
Zhang et al. (2026-09-03). Uses world-model imagination scheduling to evaluate candidate VLA behaviors and reduce costly real-world exploration. Relevant to VLA post-training efficiency.

#### [Toward Unified Robot Learning: Bridging Representation, Vision-Language-Action, and World Models](http://arxiv.org/abs/2609.03927v1)
Mehta et al. (2026-09-03). Discusses how perception, VLA policies, and world models should be combined for real-world robot reliability. Relevant to framing VLA and world-model research.

#### [GIFT: Guided Intermediate Feature Training via Action-Oriented Structural Supervision for Robotic Manipulation](http://arxiv.org/abs/2609.04193v1)
Zheng et al. (2026-09-03). Adds action-oriented structural supervision to intermediate VLA features to suppress control-irrelevant visual redundancy. Relevant to VLA representation learning.

#### [Sensing Which Modality Matters: Evidence-Gated Regularization for Robust VLA Policies](http://arxiv.org/abs/2609.03142v1)
Yang et al. (2026-09-02). Regularizes away spurious inter-sensor correlations so VLA policies rely on task-relevant evidence under occlusion. Relevant to robust multimodal VLA policies.

#### [Continuous Actions from Discrete Minds: Latent-Aligned Planning for End-to-End Autonomous Driving](http://arxiv.org/abs/2609.04070v1)
Yao et al. (2026-09-03). Latent-aligned planning bridges discrete VLM reasoning and continuous, physics-constrained driving actions. Relevant to autonomous-driving VLA frameworks.

#### [MINERVA: How Small Can a Manipulation Policy Be and Still Solve LIBERO?](http://arxiv.org/abs/2609.03715v1)
Sendai et al. (2026-09-03). Probes the minimal compact visuomotor architecture that still solves LIBERO manipulation tasks. Relevant to VLA model-size and inference cost.

#### [Scaling Bimanual Household Manipulation from 1,500 hours of Demonstrations to On-Policy Corrections](http://arxiv.org/abs/2609.03591v1)
Xu et al. (2026-09-03). Releases 1,500 hours of bimanual household demonstrations and trains generalist policies with on-policy corrections. Relevant to data scaling for generalist VLA manipulation.

#### [R2S-Eval: Robot Evaluation with Real-to-Sim Calibration via Vision-Language Models](http://arxiv.org/abs/2609.03276v1)
Wang et al. (2026-09-03). Calibrates real-to-sim robot evaluation with VLMs to reduce costly physical manipulation testing. Relevant to scalable VLA evaluation.

#### [FWBC-VLA: Force-Aware Whole-Body Compensation for Contact-Rich Loco-Manipulation](http://arxiv.org/abs/2609.03889v1)
Zhang et al. (2026-09-03). Adds force-aware whole-body compensation to VLA-generated actions for contact-rich loco-manipulation. Relevant to physical-interaction grounding of VLA policies.

#### [Toward Physically Grounded JEPA World Models for Goal-Conditioned Robotic Planning](http://arxiv.org/abs/2609.03565v1)
Liu et al. (2026-09-03). Learns action-conditioned JEPA world models whose representations are grounded for control without reconstructing pixels. Relevant to planning and world-model components in VLA pipelines.

### Embodied Navigation

#### [Revisiting Topological Graphs for Macro Action based Closed-loop Reinforcement Learning of Vision Language Navigation in Continuous Environment](http://arxiv.org/abs/2609.03906v1)
Ye et al. (2026-09-03). Combines topological-graph macro actions with closed-loop RL to overcome imitation-learning distribution shift in VLN-CE. Relevant to instruction-guided navigation in continuous environments.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [LookStep: Efficient Vision-Language Navigation with Linguistic Foresight and Event Driven Memory](http://arxiv.org/abs/2609.02350v1)
Yu et al. (2026-09-02). Uses linguistic foresight and event-driven memory to avoid short-sighted next-step supervision in VLN. Relevant to navigation-agent memory and sample efficiency.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [AGI Maze Prediction Datasets: A Compact Benchmark for Learning World Dynamics with Transformers](http://arxiv.org/abs/2609.02339v1)
Potapov (2026-09-02). Provides a lightweight maze-prediction benchmark for testing world-dynamics learning in transformers. Relevant to world-model capability behind embodied navigation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [MS-MEM: Multi-Skill Manipulation-Enhanced Mapping via Uncertainty- and Disturbance-Aware Action Selection](http://arxiv.org/abs/2609.02493v1)
Shi et al. (2026-09-02). Uses manipulation-enhanced mapping with uncertainty-aware action selection in confined, cluttered spaces. Relevant to embodied mapping and scene understanding for service robots.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [TAP-Path: Task-Adaptive Structural and Token Pruning for Efficient and Trustworthy Pathology Foundation Models](http://arxiv.org/abs/2609.04071v1)
Hasan et al. (2026-09-03). Restructures a pretrained Virchow pathology encoder through task-adaptive structural and token pruning. Relevant to compressing large foundation models while retaining task trustworthiness.

### Multimodal LLM Pruning

#### [Who Speaks for the Pruned? Visual Token Pruning as Coverage Optimization](http://arxiv.org/abs/2609.03158v1)
Zhu et al. (2026-09-02). Treats visual token pruning for VLMs as coverage optimization rather than score-based retention alone. Relevant to efficient multimodal LLM/VLM inference.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [ShallowStream: Index Shallow then Answer Deep for Streaming Video Understanding](http://arxiv.org/abs/2609.02780v1)
Hao et al. (2026-09-02). Uses an index-shallow/answer-deep scheme to reduce streaming-video token load for multimodal LLMs. Relevant to efficient continuous visual understanding.

### Continual Learning

#### [Neural-Collapse-guided Task-Free Continual Anomaly Detection](http://arxiv.org/abs/2609.03406v1)
Kong et al. (2026-09-03). Uses neural-collapse structure to guide task-free continual anomaly detection under unpredictable distribution shifts. Relevant to continual industrial visual inspection without task boundaries.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [MASkills: Continual Skills Optimization for Multi-Agent LLM Systems](http://arxiv.org/abs/2609.02094v1)
Yao et al. (2026-09-02). Optimizes reusable skills from interaction experience rather than accumulating raw memory for multi-agent LLM systems. Relevant to continual skill-level learning.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [DMRL: Document-Mediated Reinforcement Learning for Skill Optimization in Advertising Recommendation](http://arxiv.org/abs/2609.02170v1)
Zhang et al. (2026-09-02). Uses document-mediated RL to continuously optimize LLM/agent skills in advertising recommendation. Relevant to continuously updated decision policies and skill refinement.

## 视觉感知

### 3D Point Cloud Perception

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Stereo 4D Radar for 3D Object Detection: Integrating Geometric Alignment and Absolute Velocity Estimation](http://arxiv.org/abs/2609.02560v1)
Song et al. (2026-09-02). Integrates stereo 4D radar with geometric alignment and Doppler-based absolute velocity for 3D detection under clutter. Relevant to point-cloud perception in adverse weather and dense scenes.

## Cross-Topic Signals

- **World models as a shared substrate**: WISE, JEPA world models, unified robot learning, and AGI Maze all treat imagined or predicted future states as a planning/training signal across VLA and embodied navigation.
- **Long-context compression across modalities**: Visual token pruning (CoverPruner), streaming-video inference (ShallowStream), agent memory scoping (Fresh Memory), and SOC context offloading (SENTINEL-RL) all respond to limited context/token budgets.
- **From weight updates to skill/memory updates**: MASkills, DMRL, and Fresh Memory converge on treating skills, documents, and validated plans as persistent artifacts that agents continually refine.
- **Reducing real-world interaction cost**: World-model imagination, environment co-evolution, and real-to-sim calibration (R2S-Eval) are complementary strategies for scaling robot/agent learning without expensive physical rollouts.

## Priority Reading

- **WISE** — Directly addresses a central lab need: lowering VLA post-training cost by evaluating actions in imagined futures instead of expensive real-world rollouts.
- **Fresh Memory, Stale Plans** — Provides a dependency-scoped consistency primitive that is immediately reusable in any distributed LLM-agent memory system.
- **A Blind Trust, the Bloody Thrust** — Exposes a practical security vulnerability in agent harness lifecycle hooks; this should be reviewed before deploying agent infrastructure with host-level commands.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*