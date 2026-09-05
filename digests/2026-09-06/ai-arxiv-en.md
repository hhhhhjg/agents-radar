# Lab Research Topics Radar 2026-09-06

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 0 new + 25 seen in the last 14 days | Generated: 2026-09-05 23:29 UTC

---

## 1. Today's Overview

- **LLM Agent Engineering** (LLM Agent 与多智能体): No new papers today. 10 papers seen in the last 14 days; all repeats.
- **Agent Test-Time Scaling and Self-Improvement** (LLM Agent 与多智能体): No new papers today. 3 papers seen in the last 14 days; all repeats, only one strongly on-topic.
- **LLM Agent Societies** (LLM Agent 与多智能体): No new papers today. 0 papers seen in the last 14 days.
- **Vision-Language-Action Models** (具身智能): No new papers today. 9 papers seen in the last 14 days; all repeats.
- **Embodied Navigation** (具身智能): No new papers today. 1 paper seen in the last 14 days; repeat.
- **LLM Pruning and Inference Optimization** (模型压缩与持续学习): No new papers today. 1 paper seen in the last 14 days; repeat.
- **Multimodal LLM Pruning** (模型压缩与持续学习): No new papers today. 0 papers seen in the last 14 days.
- **Continual Learning** (模型压缩与持续学习): No new papers today. 2 papers seen in the last 14 days; all repeats.
- **Event-Based Vision** (视觉感知): No new papers today. 0 papers seen in the last 14 days.
- **3D Point Cloud Perception** (视觉感知): No new papers today. 0 papers seen in the last 14 days.
- **3D Point Cloud Perception and Tracking** (视觉感知): No new papers today. 0 papers seen in the last 14 days.

## 2. Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [SENTINEL-RL: Offloading Topological Reasoning from LLM Agents in the Security Operations Center](http://arxiv.org/abs/2609.04159v1)
- Vallabhaneni et al., 2026-09-03. Offloads topological-reasoning and containment-guarantee computation from SOC LLM agents to a dedicated graph-based engine. Directly applicable to enterprise-grade agent engineering: reducing dependence on finite context windows while adding verifiable reasoning.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Fresh Memory, Stale Plans: Dependency-Scoped Validation for Distributed LLM-Agent Memory](http://arxiv.org/abs/2609.03340v1)
- Chen et al., 2026-09-03. Diagnoses stale-plan execution in distributed LLM-agent teams and proposes dependency-scoped memory validation so plans are invalidated when shared requirements change. Addresses a core consistency failure in multi-agent memory systems.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Speculative Macro Commit for Faster Tool-Using Agents](http://arxiv.org/abs/2609.03236v1)
- Liu et al., 2026-09-03. Introduces a two-tier speculative mechanism that commits macro-actions while tool calls and observations are still in flight. Targets wall-clock latency, a practical bottleneck for tool-using agents.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [TIGPO: Temporal Instance-Graph Policy Optimization for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.03383v1)
- Gan, 2026-09-03. Builds temporal instance graphs that carry transitions across policy updates, improving credit assignment for long-horizon LLM-agent rollouts. Relevant to agent-training methods that reuse experience across iterations.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [A Blind Trust, the Bloody Thrust: When Attacker-Controlled Hook Updates Steer AI Agent Harnesses towards Malicious Behaviors](http://arxiv.org/abs/2609.03884v1)
- Li et al., 2026-09-03. Shows that attacker-controlled lifecycle-hook updates can silently steer agent harnesses to execute malicious commands with host privileges. Highlights a novel attack surface for LLM-agent-harness security.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [KC-Bench: A Dynamic Interactive Benchmark for Evaluating Knowledge Conflicts in LLM Agents](http://arxiv.org/abs/2609.03588v1)
- Lyu et al., 2026-09-03. Provides a controlled multi-turn benchmark measuring how tool-using agents reconcile user instructions, parametric knowledge, and environmental observations. Useful for tracking agent reliability under contradiction.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [What Do CAE Simulation Agents Really Need Beyond a Generic Harness?](http://arxiv.org/abs/2609.03718v1)
- Shi & Zhang, 2026-09-03. Analyzes which solver-setup and file-handling capabilities generic harnesses lack for CAE simulation agents. Guides domain-adapted agent design when porting generic scaffolds to expert workflows.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Speak for Me: Giving LLMs the Situational Awareness to Participate in a Meeting](http://arxiv.org/abs/2609.03923v1)
- Khan et al., 2026-09-03. Adds mechanisms for tracking stances, coverage, and floor so delegated LLM agents know when to speak in meetings. Strongly reduces missed participation opportunities on the AMI corpus.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Environment Evolution for Terminal Agents](http://arxiv.org/abs/2609.04128v1)
- Fan et al., 2026-09-03. Co-evolves terminal environments in difficulty with agent capability so training signals remain useful as frontier models improve. Extends the evolving-environment paradigm to terminal-agent training and self-improvement.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Counterfactual Fairness Audits of Multi-Step Clinical LLM Agents Require a Measured Per-Action Instability Floor](http://arxiv.org/abs/2609.03221v1)
- Bellibaltu et al., 2026-09-02. Shows counterfactual flip rates for clinical LLM agents are uninterpretable without a measured per-action instability floor. Tightens evaluation methodology for multi-step clinical-agent audits.

### Agent Test-Time Scaling and Self-Improvement

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [What Else Needs Fixing? Exploring Cost-Effective Test-Time Compute for Revision Propagation in Artifacts Generated Through Conversation](http://arxiv.org/abs/2609.03254v1)
- Kikuta, 2026-09-03. Models when a user's local change requires propagating revisions to dependent artifact parts and allocates extra test-time compute only where needed. Provides a cost-aware lens on test-time scaling for LLM-driven iterative revision.

## 具身智能

### Vision-Language-Action Models

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [WISE: World-model-guided Imagination Scheduling for Efficient Post-training of Vision-Language-Action Models](http://arxiv.org/abs/2609.03681v1)
- Zhang et al., 2026-09-03. Uses world-model imagination scheduling to evaluate candidate VLA behaviors, reducing reliance on expert demonstrations and real-world exploration during post-training. A strong route to cheaper, safer VLA policy improvement.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [FWBC-VLA: Force-Aware Whole-Body Compensation for Contact-Rich Loco-Manipulation](http://arxiv.org/abs/2609.03889v1)
- Zhang et al., 2026-09-03. Adds force-aware whole-body compensation so VLA-generated actions can be grounded in contact dynamics. Extends VLA models from semantic task generation into closed-loop physical interaction.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [GIFT: Guided Intermediate Feature Training via Action-Oriented Structural Supervision for Robotic Manipulation](http://arxiv.org/abs/2609.04193v1)
- Zheng et al., 2026-09-03. Supervises intermediate VLA features with action-oriented structure to remove control-irrelevant visual redundancy. Improves VLA policies' use of pretrained semantic and dynamic features.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Continuous Actions from Discrete Minds: Latent-Aligned Planning for End-to-End Autonomous Driving](http://arxiv.org/abs/2609.04070v1)
- Yao et al., 2026-09-03. Unifies discrete VLM reasoning and continuous, physics-constrained control via latent-aligned planning in a VLA driving framework. Shows how to bridge VLM discrete reasoning with continuous action spaces.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [MINERVA: How Small Can a Manipulation Policy Be and Still Solve LIBERO?](http://arxiv.org/abs/2609.03715v1)
- Sendai et al., 2026-09-03. Identifies the minimal visuomotor policy capacity that can solve LIBERO, showing compact VLA policies rival billion-parameter models. Informs capacity-versus-cost decisions in VLA deployments.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [R2S-Eval: Robot Evaluation with Real-to-Sim Calibration via Vision-Language Models](http://arxiv.org/abs/2609.03276v1)
- Wang et al., 2026-09-03. Calibrates real-to-sim evaluation using VLMs to reduce labor, instability, and cost of physical robot policy evaluation. Provides a more scalable evaluation layer for VLA policy development.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Toward Unified Robot Learning: Bridging Representation, Vision-Language-Action, and World Models](http://arxiv.org/abs/2609.03927v1)
- Mehta et al., 2026-09-03. Surveys how representation learning, VLA models, and world models can be combined for reliable real-world robot operation. Maps the landscape in which the individual VLA and world-model papers above sit.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Scaling Bimanual Household Manipulation from 1,500 hours of Demonstrations to On-Policy Corrections](http://arxiv.org/abs/2609.03591v1)
- Xu et al., 2026-09-03. Releases 1,500 hours of diverse bimanual household demonstrations and combines them with on-policy corrections for training robust generalist policies. Scales VLA training data in a notoriously data-scarce manipulation setting.

### Embodied Navigation

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Revisiting Topological Graphs for Macro Action based Closed-loop Reinforcement Learning of Vision Language Navigation in Continuous Environment](http://arxiv.org/abs/2609.03906v1)
- Ye et al., 2026-09-03. Reintroduces topological-graph macro actions within closed-loop RL to overcome imitation-learning distribution shift in continuous VLN. Directly relevant to instruction-following embodied navigation agents in continuous environments.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [TAP-Path: Task-Adaptive Structural and Token Pruning for Efficient and Trustworthy Pathology Foundation Models](http://arxiv.org/abs/2609.04071v1)
- Hasan et al., 2026-09-03. Combines task-adaptive structural pruning with token pruning to reduce inference cost of large pathology foundation encoders. Demonstrates efficiency-preserving compression and token-selection techniques beyond the LLM domain.

### Continual Learning

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Neural-Collapse-guided Task-Free Continual Anomaly Detection](http://arxiv.org/abs/2609.03406v1)
- Kong et al., 2026-09-03. Applies neural-collapse geometry to task-free continual anomaly detection under shifting industrial data distributions. Matches the lab's continual-learning interest in task-free, shift-robust adaptation.

## 3. Cross-Topic Signals

- **All 25 candidates were repeats seen in the last 14 days**: there are truly zero new papers across the 11 configured topics on this date, so this is a digestion/re-monitoring day rather than a novel-signal event.
- **Model-based supervision as the efficiency lever in robotics**: WISE evaluates candidate VLA behaviors through imagined futures, while action-conditioned JEPA world models enable planning without pixel reconstruction—both reduce real-world rollouts and may lower VLA post-training costs.
- **Budget-aware compute for agents is emerging as a theme**: Kikuta allocates test-time compute selectively for revision propagation, Speculative Macro Commit overlaps serial tool-observation turns, and MINERVA probes minimal sufficient policy capacity—all argue against spending compute uniformly.
- **Agent-harness reliability is becoming a first-class research problem**: Blind Trust (lifecycle-hook exploitation), Fresh Memory (stale-plan validation), and Counterfactual Fairness (flip-rate instability floors) treat security, memory consistency, and evaluation robustness as infrastructure, not prompting questions.
- **Distribution shift by design vs. by accident**: co-evolving terminal-agent environments and task-free continual anomaly detection both make non-stationarity an explicit design constraint, with potential cross-pollination for the lab's continual-learning and agent-society threads.

## 4. Priority Reading

#### - **[WISE: World-model-guided Imagination Scheduling for Efficient Post-training of Vision-Language-Action Models](http://arxiv.org/abs/2609.03681v1)** — The most concrete VLA improvement in this batch: world-model imagination may enable cheaper, safer VLA post-training than real-world RL or expert demos, which is central to the lab's VLA interest.
#### - **[SENTINEL-RL: Offloading Topological Reasoning from LLM Agents in the Security Operations Center](http://arxiv.org/abs/2609.04159v1)** — A transferable agent-engineering template: move a sub-task outside the LLM context window to gain guarantees and scale beyond context limits; directly useful for enterprise-grade LLM-agent design.
#### - **[What Else Needs Fixing? Exploring Cost-Effective Test-Time Compute for Revision Propagation in Artifacts Generated Through Conversation](http://arxiv.org/abs/2609.03254v1)** — The only candidate squarely on the Agent Test-Time Scaling thread, and it offers a concrete cost model for deciding when and where to spend additional test-time compute.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*