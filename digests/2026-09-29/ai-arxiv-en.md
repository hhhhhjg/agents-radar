# Lab Research Topics Radar 2026-09-29

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 33 new + 0 seen in the last 14 days | Generated: 2026-09-29 01:23 UTC

---

## Today's Overview
- **LLM Agent Engineering**: 11 new, 0 seen. Work spans cross-user memory sharing, false-accusation sycophancy, intent drift, failure localization/repair, identity-based orchestration risks, heterogeneous memory, behavioral traits, security-eval validity, and everyday-task behavior.
- **Agent Test-Time Scaling and Self-Improvement**: 1 new, 0 seen. CompassPlay rewards a proposer through gradient alignment with the solver.
- **LLM Agent Societies**: 0 new, 0 seen. No new papers today.
- **Vision-Language-Action Models**: 11 new, 0 seen. Themes include robustness to observation perturbations, progress-field RL, latent world modeling, causal driving evaluation, federated policy distillation, plan safety, failure-guided adaptation, and adaptive policy states.
- **Embodied Navigation**: 2 new, 0 seen. Zero-shot semantic audio-visual navigation with omni-language models; underwater BEV occupancy for exploration.
- **LLM Pruning and Inference Optimization**: 1 new, 0 seen. DegreeSpar introduces structured degree sparsity for efficient secure Transformer inference.
- **Multimodal LLM Pruning**: 0 new, 0 seen. No new papers today.
- **Continual Learning**: 5 new, 0 seen. Self-probe gradients, a continual-learning agent substrate, LoRA merge regularization, experience-based skill synthesis, and stabilized dynamic low-rank training.
- **Event-Based Vision**: 2 new, 0 seen. On-chip SNN training for dense event streams and parameter-efficient spiking-state-space interfaces.
- **3D Point Cloud Perception**: 3 new, 0 seen. Blind watermarking, progressive query refinement for multi-view 3D detection, and geodesic Gromov-Wasserstein distances for 3D modeling.
- **3D Point Cloud Perception and Tracking**: 0 new, 0 seen. No new papers today.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [Learning from Others, Acting for You: Cross-User Memory Sharing for LLM Agents](http://arxiv.org/abs/2609.32511v1)
J. Hu et al., 2026-09-26. Contribution: pools reusable experience across users while addressing conflicting preferences. Relevance: multi-user memory sharing for LLM agents.

#### [“You’re Right, Let Me Fix It”: How LLM Agents Damage Correct Work When Falsely Accused](http://arxiv.org/abs/2609.32616v1)
X. Mao et al., 2026-09-26. Contribution: identifies gaslight sycophancy where agents accept false accusations and damage correct work. Relevance: robustness after task success and handoffs.

#### [When Users Change Their Minds: Measuring and Repairing Intent Drift in LLM Agents](http://arxiv.org/abs/2609.32520v1)
Y. Zhang et al., 2026-09-26. Contribution: introduces IntentFlux to measure and repair intent drift. Relevance: multi-turn agent instruction tracking.

#### [DAAF: From Failure Localization to Editable System Assets in LLM Agents](http://arxiv.org/abs/2609.32498v1)
X. Yuan et al., 2026-09-26. Contribution: repairs agent failures by editing persistent system assets. Relevance: operational reliability of deployed agents.

#### [Trust the Brand, Lose Control: How Identity Hijacks LLM Agent Orchestration](http://arxiv.org/abs/2609.32635v1)
X. Mao et al., 2026-09-26. Contribution: shows subagent identity/brand can hijack orchestrator choices. Relevance: secure multi-agent orchestration.

#### [MemAgent: Learning to Manage Heterogeneous Memory Providers for LLM Agents](http://arxiv.org/abs/2609.32521v1)
Y. Wei et al., 2026-09-26. Contribution: learns to manage heterogeneous memory providers. Relevance: long-horizon agent memory and continual improvement.

#### [Silent Failures in Agentic Security Evaluation: A Validated Harness for Tool-Call Mediation Under Indirect Prompt Injection](http://arxiv.org/abs/2609.32691v1)
A. Shaw, 2026-09-26. Contribution: audits IPI defense validity and provides a validated tool-call mediation harness. Relevance: secure agent tool use.

#### [On the Behavioral Traits of LLM Agents](http://arxiv.org/abs/2609.32776v1)
H. Zhao et al., 2026-09-26. Contribution: measures agent behavioral traits beyond self-reports. Relevance: quantifying agent behavior for collaboration.

#### [AgentHabit: Characterizing Distinct Behaviors of Agents on Everyday Tasks](http://arxiv.org/abs/2609.32795v1)
W. Song et al., 2026-09-26. Contribution: characterizes how agents differ on everyday tasks. Relevance: user-preference alignment in agent execution.

### Agent Test-Time Scaling and Self-Improvement
#### [CompassPlay: Rewarding the Proposer for Where It Moves the Solver](http://arxiv.org/abs/2609.32228v1)
S. X. Pu et al., 2026-09-26. Contribution: rewards proposers via gradient alignment in self-play. Relevance: self-improvement for solver-proposer systems.

## 具身智能
### Vision-Language-Action Models
#### [DS-VLA: A Dendritic-inspired Vision-Language-Action Model for Robust Action Control](http://arxiv.org/abs/2609.32253v1)
Y. Lyu et al., 2026-09-26. Contribution: dendritic-inspired VLA for robust action control under transient corruption. Relevance: closed-loop VLA robustness.

#### [Are Vision-Language-Action Models Robust to One-Step Observation Perturbations?](http://arxiv.org/abs/2609.32550v1)
S. Yamabe, J. Sakuma, 2026-09-26. Contribution: tests VLA robustness to momentary observation perturbations. Relevance: safety risks in physical VLA deployment.

#### [PF-RL: Progress Field Reinforcement Learning via Goal-Conditioned Value Geometry for Vision-Language-Action Models](http://arxiv.org/abs/2609.32634v1)
Y. Qing et al., 2026-09-26. Contribution: models intermediate progress via goal-conditioned value geometry for VLA. Relevance: dense credit for long-horizon manipulation.

#### [Devol-ONE: One Autoregressive Mixture of Transformers to Unify Vision-Language-Action and Latent World Modeling](http://arxiv.org/abs/2609.32193v1)
H. Cai et al., 2026-09-26. Contribution: unifies VLA and latent world modeling in one autoregressive mixture. Relevance: explicit scene evolution for action generation.

#### [SEES: A Self-Evolving Embodied System via Failure-Guided VLA Policy Adaptation](http://arxiv.org/abs/2609.32698v1)
Z. Li et al., 2026-09-26. Contribution: adapts VLA policies through failure-guided self-evolution. Relevance: long-horizon VLA reliability.

#### [RecastVLA: From Past Interaction to Future Control with Adaptive Policy States](http://arxiv.org/abs/2609.32155v1)
W. Li et al., 2026-09-26. Contribution: uses adaptive policy states to persist past interaction for control. Relevance: history-aware sequential manipulation.

#### [CausalDriveBench: Evaluating Causal Reasoning in Vision-Language-Action Models for Autonomous Driving](http://arxiv.org/abs/2609.32157v1)
N. Chembu et al., 2026-09-26. Contribution: benchmarks causal reasoning in driving VLA models. Relevance: tests whether VLA reasoning reflects scene causality.

#### [Federated Subspace Guided Vision-Language-Action Policy Distillation for Non-IID Multi-Robot Manipulation](http://arxiv.org/abs/2609.32239v1)
B. Pal et al., 2026-09-26. Contribution: federated VLA policy distillation under non-IID robot distributions. Relevance: decentralized multi-robot VLA training.

#### [PlanGuard: A Guardrail for Multi-Step Plan Safety in Embodied Agents](http://arxiv.org/abs/2609.32801v1)
J. Chen et al., 2026-09-26. Contribution: guards multi-step embodied plans against compositional physical risks. Relevance: safety for embodied task planners.

### Embodied Navigation
#### [RAO-Nav: Probing Omni-Language Models for Zero-shot Semantic Audio-Visual Navigation](http://arxiv.org/abs/2609.32224v1)
Q. Ye et al., 2026-09-26. Contribution: probes omni-language models for zero-shot semantic audio-visual navigation. Relevance: generalist multimodal embodied navigation.

#### [AquaBEV-Nav: Learned BEV Occupancy for Underwater Navigation and Exploration](http://arxiv.org/abs/2609.32156v1)
T. T. Dong et al., 2026-09-26. Contribution: learns BEV occupancy for underwater navigation. Relevance: safe exploration where direct depth is unreliable.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [DegreeSpar: Structured Degree Sparsity for Efficient Secure Transformer Inference](http://arxiv.org/abs/2609.32204v1)
Y. Cai et al., 2026-09-26. Contribution: applies structured degree sparsity to reduce secure-inference bottlenecks. Relevance: efficient secure Transformer inference.

### Continual Learning
#### [Continual Learning via Self-Probe Gradients](http://arxiv.org/abs/2609.32771v1)
D. Cho et al., 2026-09-26. Contribution: uses self-probing to expand evidence for preservation in language models. Relevance: few-sample continual learning.

#### [SCLATE: a Substrate for Continual-Learning Agent Training and Evaluation](http://arxiv.org/abs/2609.32391v1)
Y. Jung et al., 2026-09-26. Contribution: provides a substrate for multi-session continual-learning agents. Relevance: training and evaluating long-horizon agent memory.

#### [When the Merge Coefficient Stops Mattering: Proximity Regularized Merging for Continual LoRA Adaptation](http://arxiv.org/abs/2609.32332v1)
Y. Liu et al., 2026-09-26. Contribution: regularizes sequential LoRA merging for rehearsal-free continual learning. Relevance: parameter-efficient continual adaptation.

#### [ExpVoyager: Direct Experience Navigation for Dynamic Agent Skill Synthesis](http://arxiv.org/abs/2609.32630v1)
K. Seo, D. Lee, 2026-09-26. Contribution: synthesizes reusable agent skills from direct experience. Relevance: self-evolving agents and continual capability growth.

#### [Stabilizing the Dynamic Low-Rank Training](http://arxiv.org/abs/2609.32615v1)
Z. Xu et al., 2026-09-26. Contribution: stabilizes dynamic low-rank training via projection control. Relevance: memory- and compute-efficient continual training.

## 视觉感知
### Event-Based Vision
#### [Toward On-Chip Training of Spiking Neural Networks for Dense Event-Based Vision](http://arxiv.org/abs/2609.32405v1)
M. Vaillant et al., 2026-09-26. Contribution: targets on-chip SNN training for dense event streams. Relevance: low-latency neuromorphic event vision.

#### [RIPE-MambaSpike: Resolution-Independent Spiking-State-Space Interfaces for Parameter-Efficient Event-Based Vision](http://arxiv.org/abs/2609.32537v1)
M. M. Islam et al., 2026-09-26. Contribution: improves spiking front-end interfaces for parameter-efficient event vision. Relevance: efficient spiking-Mamba hybrids.

### 3D Point Cloud Perception
#### [PQR3D: Progressive Query Refinement over Reference-Conditioned Temporal Windows for Multi-View 3D Object Detection](http://arxiv.org/abs/2609.32163v1)
H. Ye et al., 2026-09-26. Contribution: refines queries over temporal windows for camera-only 3D detection. Relevance: temporal multi-view 3D object perception.

#### [Geometry-Preserving Blind Watermarking for Raw 3D Point Clouds](http://arxiv.org/abs/2609.32222v1)
R. Zhou et al., 2026-09-26. Contribution: blind watermarking directly on raw xyz point clouds. Relevance: ownership and integrity for 3D point data.

#### [Unlocking Geodesic Gromov-Wasserstein Distances for 3D Modeling](http://arxiv.org/abs/2609.32824v1)
K. M. Choromanski et al., 2026-09-26. Contribution: enables geodesic Gromov-Wasserstein distances for 3D modeling. Relevance: optimal-transport comparison of 3D shapes.

## Cross-Topic Signals
- **Memory and experience reuse** connects LLM Agent Engineering and Continual Learning: cross-user memory, MemAgent, SCLATE, ExpVoyager, and self-probe gradients all target persistent adaptation.
- **Robustness and safety** span VLA and LLM agents: one-step observation perturbations, PlanGuard, gaslight sycophancy, intent drift, and IPI tool-call mediation.
- **World modeling and state tracking** link VLA and navigation: Devol-ONE, PF-RL, RecastVLA, SEES, AquaBEV-Nav, and PQR3D.
- **Efficiency and sparsity** recur in model compression and vision: DegreeSpar, RIPE-MambaSpike, dynamic low-rank training, and on-chip SNN training.
- **Multimodal and geometric perception** bridges navigation, point clouds, and event vision: RAO-Nav, 3D watermarking, geodesic GWD, and spiking event interfaces.

## Priority Reading
1. **Devol-ONE**: unifies VLA with latent world modeling in one autoregressive mixture, a strong reference for embodied decision-making.
2. **MemAgent**: directly addresses heterogeneous memory management, central to long-horizon LLM agents and continual learning.
3. **DegreeSpar**: offers structured degree sparsity for secure Transformer inference, highly relevant to pruning and inference optimization under cryptographic overhead.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*