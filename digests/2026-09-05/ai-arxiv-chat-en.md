# Lab Research Topics Radar 2026-09-05

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 14 new + 0 seen in the last 14 days | Generated: 2026-09-04 23:38 UTC

---

## Today's Overview

- **LLM Agent 与多智能体 / LLM Agent Engineering**: New papers address long-horizon credit assignment via temporal instance graphs, reliability of LLM agents in security operations, and generation of progressively harder terminal-agent environments.
- **LLM Agent 与多智能体 / Agent Test-Time Scaling and Self-Improvement**: New papers explore cost-effective test-time compute for artifact revision and a local-update method that lets non-incremental learners participate in self-play RL.
- **LLM Agent 与多智能体 / LLM Agent Societies**: No new papers today.
- **具身智能 / Vision-Language-Action Models**: New papers connect VLA post-training with world-model imagination scheduling, guided intermediate-feature supervision, and unified robot-learning perspectives.
- **具身智能 / Embodied Navigation**: One new paper proposes macro-action topological graph RL for closed-loop VLN in continuous environments.
- **模型压缩与持续学习 / LLM Pruning and Inference Optimization**: One new paper applies task-adaptive structural and token pruning to pathology foundation models.
- **模型压缩与持续学习 / Multimodal LLM Pruning**: One new paper reframes visual token pruning for VLMs as coverage optimization.
- **模型压缩与持续学习 / Continual Learning**: One new paper uses neural-collapse guidance for task-free continual anomaly detection.
- **视觉感知 / Event-Based Vision**: No new papers today.
- **视觉感知 / 3D Point Cloud Perception**: No new papers today.
- **视觉感知 / 3D Point Cloud Perception and Tracking**: No new papers today.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [TIGPO: Temporal Instance-Graph Policy Optimization for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.03383v1)

*Gan, 2026-09-03.* Proposes temporal instance-graph policy optimization that carries state-transition structure across policy updates to improve credit assignment for long-horizon LLM agents. Relevance: directly targets a core LLM-agent engineering problem—stable learning from long rollouts without discarding earlier-policy transitions.

#### [SENTINEL-RL: Offloading Topological Reasoning from LLM Agents in the Security Operations Center](http://arxiv.org/abs/2609.04159v1)

*Vallabhaneni, Cagwin, Wild, 2026-09-03.* Introduces an RL-based approach that offloads graph/topological reasoning from LLM agents and constrains free-form generation for reliable security-operation-center containment actions. Relevance: addresses two practical LLM-agent failure modes—finite context over large enterprise graphs and unverifiable free-form outputs.

#### [Environment Evolution for Terminal Agents](http://arxiv.org/abs/2609.04128v1)

*Fan, Yu, Cai et al., 2026-09-03.* Proposes iteratively evolving task environments so terminal agents continue to face challenging, verifiable learning signals as frontier-model capability grows. Relevance: important for LLM-agent training pipelines that depend on scalable, non-saturating interactive environments.

### Agent Test-Time Scaling and Self-Improvement

#### [What Else Needs Fixing? Exploring Cost-Effective Test-Time Compute for Revision Propagation in Artifacts Generated Through Conversation](http://arxiv.org/abs/2609.03254v1)

*Kikuta, 2026-09-03.* Explores cost-effective allocation of test-time compute so LLMs can propagate requested local revisions across dependent parts of conversationally generated artifacts. Relevance: connects test-time compute scaling to LLM-agent revision quality and self-correction in interactive generation tasks.

#### [Local Updates, Global Learning (LUGL): Playing Games with non-incremental Learners](http://arxiv.org/abs/2609.03660v1)

*Milec, Samothrakis, Fairbank et al., 2026-09-03.* Proposes local-update/global-learning training that enables non-incremental learners such as gradient-boosted trees to be used in online self-play RL settings. Relevance: broadens the learner toolbox for self-improving agents under non-stationary training distributions.

### LLM Agent Societies

No new papers today.

## 具身智能

### Vision-Language-Action Models

#### [WISE: World-model-guided Imagination Scheduling for Efficient Post-training of Vision-Language-Action Models](http://arxiv.org/abs/2609.03681v1)

*Zhang, Zhao, Cheng et al., 2026-09-03.* Uses world-model imagination scheduling to evaluate candidate VLA behaviors, reducing reliance on costly expert demonstrations or real-world exploration during post-training. Relevance: offers a direct route from VLA action learning to model-based imagination and cheaper embodied-agent policy improvement.

#### [GIFT: Guided Intermediate Feature Training via Action-Oriented Structural Supervision for Robotic Manipulation](http://arxiv.org/abs/2609.04193v1)

*Zheng, Li, Gu et al., 2026-09-03.* Proposes action-oriented structural supervision on intermediate visual features to remove control-irrelevant visual redundancy in robot manipulation policies. Relevance: provides a representation-level fix for VLA policies that inherit rich but not task-aligned visual features from pretraining.

#### [Toward Unified Robot Learning: Bridging Representation, Vision-Language-Action, and World Models](http://arxiv.org/abs/2609.03927v1)

*Mehta, Hazarika, Zhang et al., 2026-09-03.* Surveys and connects representation learning, VLA models, and world models for more unified real-world robot learning. Relevance: frames the VLA/world-model relationship that also motivates efficient post-training and action-oriented supervision in the other VLA papers.

### Embodied Navigation

#### [Revisiting Topological Graphs for Macro Action based Closed-loop Reinforcement Learning of Vision Language Navigation in Continuous Environment](http://arxiv.org/abs/2609.03906v1)

*Ye, Mao, Cui et al., 2026-09-03.* Extends topological-graph macro actions into closed-loop RL for VLN-CE, reducing distribution shift and expert-in-the-loop costs seen in imitation-learning pipelines. Relevance: directly targets embodied navigation in continuous, unseen environments with language-guided agents.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [TAP-Path: Task-Adaptive Structural and Token Pruning for Efficient and Trustworthy Pathology Foundation Models](http://arxiv.org/abs/2609.04071v1)

*Hasan, Yeafi, Islam, 2026-09-03.* Proposes task-adaptive structural and token pruning to compress large pretrained pathology image encoders while preserving trustworthy transfer representations. Relevance: relevant to pruning/inference optimization for large foundation models, although the target encoder is vision-based rather than an LLM.

### Multimodal LLM Pruning

#### [Who Speaks for the Pruned? Visual Token Pruning as Coverage Optimization](http://arxiv.org/abs/2609.03158v1)

*Zhu, You, Jiang et al., 2026-09-02.* Frames visual token pruning in VLMs as coverage optimization, retaining representative tokens for discarded evidence instead of only high-scoring redundant tokens. Relevance: provides a training-free inference-optimization method directly applicable to multimodal LLM/VLM token budgets.

### Continual Learning

#### [Neural-Collapse-guided Task-Free Continual Anomaly Detection](http://arxiv.org/abs/2609.03406v1)

*Kong, Song, Zhou et al., 2026-09-03.* Uses neural-collapse structure to guide task-free continual anomaly detection under unpredictable distribution shifts in industrial visual inspection. Relevance: advances continual-learning methods in a practical setting where task boundaries are unavailable.

## 视觉感知

### Event-Based Vision

No new papers today.

### 3D Point Cloud Perception

No new papers today.

### 3D Point Cloud Perception and Tracking

No new papers today.

## Cross-Topic Signals

- **Topological and temporal graphs as agent scaffolds**: TIGPO’s temporal instance graphs, SENTINEL-RL’s offloaded topological reasoning, and the VLN-CE paper’s topological macro actions all use explicit graph structure to reduce long-horizon or large-state-space reasoning burden for learned agents.

- **Synthetic/imagination-based experience as a substitute for costly interaction**: WISE uses world-model imagination for VLA post-training, GIFT uses predictive/action-oriented visual supervision, and Environment Evolution generates increasingly hard interactive tasks. All three reduce dependence on real-world demonstration or exploration.

- **Pruning increasingly defined by coverage and task adaptivity**: CoverPruner treats visual token pruning as evidence coverage rather than token scoring, while TAP-Path adapts structural and token pruning to a downstream task. This points toward compression methods that preserve decision-relevant information rather than only high-confidence tokens.

- **Test-time or rollout-level computation is being made more selective**: Kikuta’s paper explores which revisions actually need more test-time compute, and TIGPO improves credit assignment across rollout transitions. Both suggest that inference/training compute should be allocated where dependencies or long-range credit matter most.

## Priority Reading

#### - [WISE: World-model-guided Imagination Scheduling for Efficient Post-training of Vision-Language-Action Models](http://arxiv.org/abs/2609.03681v1) — Closest match to reducing VLA post-training cost through world-model simulation; highly relevant to embodied-agent efficiency.
#### - [TIGPO: Temporal Instance-Graph Policy Optimization for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.03383v1) — Offers a reusable temporal-graph mechanism for long-horizon LLM-agent credit assignment, a bottleneck in agent RL and self-improvement.
#### - [Who Speaks for the Pruned? Visual Token Pruning as Coverage Optimization](http://arxiv.org/abs/2609.03158v1) — A training-free, coverage-based pruning idea that could transfer beyond VLMs to multimodal LLM inference optimization.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*