# Lab Research Topics Radar 2026-08-08

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 2 new + 40 seen in the last 14 days | Generated: 2026-08-07 22:29 UTC

---

## Today's Overview

- LLM Agent 与多智能体 / LLM Agent Engineering: 1 new paper — AV-AIVAT introduces certified anytime-valid stopping for cheaper agent evaluation.
- LLM Agent 与多智能体 / Agent Test-Time Scaling and Self-Improvement: No new papers today.
- LLM Agent 与多智能体 / LLM Agent Societies: No new papers today.
- 具身智能 / Vision-Language-Action Models: 1 new paper — DyPES-VLA targets cross-embodiment manipulation with shared dynamics priors and embodiment-specific control.
- 具身智能 / Embodied Navigation: No new papers today.
- 模型压缩与持续学习 / LLM Pruning and Inference Optimization: No new papers today.
- 模型压缩与持续学习 / Multimodal LLM Pruning: No new papers today.
- 模型压缩与持续学习 / Continual Learning: No new papers today.
- 视觉感知 / Event-Based Vision: No new papers today.
- 视觉感知 / 3D Point Cloud Perception: No new papers today.
- 视觉感知 / 3D Point Cloud Perception and Tracking: No new papers today.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [AV-AIVAT: 74x Cheaper Agent Evaluation with Certified Anytime-Valid Stopping in Imperfect-Information Games](http://arxiv.org/abs/2608.06362v1)
B. Li et al. | 2026-08-06
Contribution: Proposes anytime-valid stopping rules to decide which agent is stronger while cutting evaluation cost.  
Relevance: Directly improves cost-efficient, statistically robust evaluation of LLM agents.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [EvoHarness-RL: Learning Self-Evolving Runtime Harness for Long-Horizon LLM Agents](http://arxiv.org/abs/2608.05446v1)
X. Ning et al. | 2026-08-05
Contribution: Learns a self-evolving runtime harness for state tracking, tool invocation, and outcome verification.  
Relevance: Central to LLM agent engineering because harness design increasingly determines agent capability.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [State2State: Environment-Derived Mid-Training for LLM Agents](http://arxiv.org/abs/2608.04934v1)
X. Lei et al. | 2026-08-05
Contribution: Trains LLM agents from environment-derived states rather than expert trajectories or handcrafted tasks.  
Relevance: Offers a scalable alternative to supervised fine-tuning and RL for agent training.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [DreamGuard: Efficient Runtime Guardrail for LLM Agents via Risk-Aware World Model](http://arxiv.org/abs/2608.05695v1)
W. Lin et al. | 2026-08-06
Contribution: Uses a risk-aware world model to check proposed agent actions before execution.  
Relevance: Addresses safety for LLM agents invoking external tools and interacting with real systems.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Hierarchical Graph Memory for LLM Agents with Path-level Localization and Rewrite](http://arxiv.org/abs/2608.05095v1)
X. Yue et al. | 2026-08-05
Contribution: Introduces hierarchical graph memory with path-level localization and rewrite for agent reasoning.  
Relevance: Strong fit for long-horizon LLM agent memory and multi-hop retrieval.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [When Self-Evolution Backfires: Pre-Commit Gating against Skill Contamination in LLM Agents](http://arxiv.org/abs/2608.05810v1)
L. Shang et al. | 2026-08-06
Contribution: Identifies a phase transition where added skills degrade self-evolving agent performance and proposes gating.  
Relevance: Important for safely scaling agent skill self-improvement.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Learning Globally Reusable Skills for Coding Agents](http://arxiv.org/abs/2608.06153v1)
C. Yang et al. | 2026-08-06
Contribution: Learns globally reusable skills for coding agents while avoiding overfitted local updates.  
Relevance: Relevant to building scalable skill libraries for LLM agents.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [EcoAgent-Bench: Evaluating Economic Decision-Making in Budget-Constrained LLM Agents](http://arxiv.org/abs/2608.05519v1)
J. Wu et al. | 2026-08-06
Contribution: Benchmarks agents on choosing tools, models, or human escalation under budget constraints.  
Relevance: Relevant to real-world deployment and resource-aware agent behavior.

### Agent Test-Time Scaling and Self-Improvement

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Refining Over Resampling: Test-Time Self-Correction for LLM Reasoning](http://arxiv.org/abs/2608.05643v1)
A. Bilal et al. | 2026-08-06
Contribution: Refines existing rollouts instead of sampling more, improving reasoning diversity at test time.  
Relevance: Directly relevant to test-time scaling and verifier-based reasoning.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [EvolveNet: Collaborative Harness Evolution for Agent Self-Improvement](http://arxiv.org/abs/2608.04968v1)
J. Nie et al. | 2026-08-05
Contribution: Evolves agent harnesses collaboratively without updating model weights.  
Relevance: Key self-improvement paradigm for LLM agents beyond model fine-tuning.

## 具身智能

### Vision-Language-Action Models

#### [DyPES-VLA: Learning Shared Dynamics Priors and Embodiment-Specific Control for Cross-Embodiment Manipulation](http://arxiv.org/abs/2608.06374v1)
J. Li et al. | 2026-08-06
Contribution: Shares dynamics priors across robot embodiments while learning embodiment-specific control.  
Relevance: Directly targets the lab's VLA interest in generalist cross-embodiment manipulation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [In-Context VLA: Endowing Vision-Language-Action Models with Language via In-Context Post-Training and Agentic Tool Use](http://arxiv.org/abs/2608.05738v1)
J. Yang et al. | 2026-08-06
Contribution: Adds explicit reasoning and agentic tool use to VLA models via in-context post-training.  
Relevance: Strongly relevant to improving VLA policies beyond plain behavior cloning.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Beyond Flat Policies: Hierarchical Post-Training for Embodied Agents in Robotic Manipulation](http://arxiv.org/abs/2608.05999v1)
H. Kong et al. | 2026-08-06
Contribution: Models task progression explicitly through hierarchical post-training of VLA policies.  
Relevance: Addresses long-horizon manipulation limits of flat VLA policies.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [SkillMemo: Expert-guided Skill Memory Framework for Compositional Embodied Manipulation](http://arxiv.org/abs/2608.05970v1)
C. Wang et al. | 2026-08-06
Contribution: Uses expert-guided skill memory to improve compositional manipulation with limited trajectory data.  
Relevance: Directly addresses VLA data scarcity and skill reuse.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [BridgeVLA++: A Data-Efficient, Generalizable, and Memory-Augmented Vision-Language-Action Framework for 3D Manipulation](http://arxiv.org/abs/2608.05042v1)
P. Li et al. | 2026-08-05
Contribution: Builds a memory-augmented 3D VLA framework for data-efficient manipulation.  
Relevance: Relevant to 3D VLA generalization and explicit memory.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Explicit Language Memory for Long-Horizon Planning in Vision-Language-Action Models](http://arxiv.org/abs/2608.04765v1)
H. Xu et al. | 2026-08-05
Contribution: Adds explicit language memory to VLA models for long-horizon compositional tasks.  
Relevance: Strong fit for improving VLA cross-task generalization.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Mind-VLA: Instruction-Aware Spatial Representation Alignment for Vision-Language-Action Models](http://arxiv.org/abs/2608.04633v1)
X. Ding et al. | 2026-08-05
Contribution: Aligns VLA representations with instruction-relevant 3D object geometry.  
Relevance: Relevant to spatial grounding in robot manipulation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [World-to-Wrist: Task-Conditioned Future Wrist Modeling for Fine-Grained Robot Manipulation](http://arxiv.org/abs/2608.05369v1)
Y. Pan et al. | 2026-08-05
Contribution: Models future wrist interactions conditioned on global task context for fine-grained control.  
Relevance: Relevant to VLA architectures that distinguish main-view and wrist-view roles.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Suppression Sticks, Locality Is Fragile: A Closed-Loop Target-and-Control Audit of Task-Vector Negation in VLA Policies](http://arxiv.org/abs/2608.04692v1)
S. Wang et al. | 2026-08-05
Contribution: Audits task-vector subtraction in closed-loop VLA policies across LIBERO-Goal skills.  
Relevance: Relevant to interpretable behavior modification in VLA models.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Mimir: A Neuro-Symbolic Memory System with Dynamic Grounding for Embodied Agents in Interactive Environments](http://arxiv.org/abs/2608.04933v1)
H. Xu et al. | 2026-08-05
Contribution: Provides explicit neuro-symbolic memory with dynamic grounding for long-horizon embodied tasks.  
Relevance: Relevant to memory interfaces for embodied VLA systems.

### Embodied Navigation

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [SpikingNav: Robust Embodied Navigation with Spiking Neural Policies](http://arxiv.org/abs/2608.05078v1)
J. Zhang et al. | 2026-08-05
Contribution: Uses spiking neural policies for robust embodied navigation under visual corruption.  
Relevance: Directly relevant to energy-efficient and robust navigation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Hijacking Robots with a Piece of Paper: A Systematic Study of Physical Prompt Injection in VLM-Controlled Robots](http://arxiv.org/abs/2608.05715v1)
S. M. B. P. Samarakoon et al. | 2026-08-06
Contribution: Studies physical prompt injection attacks against VLM-controlled robots.  
Relevance: Important security consideration for embodied navigation and planning.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [EdgeXpert: An Edge Device for Memory-Efficient LLM Inference with Mixture-of-Experts and Speculative Decoding](http://arxiv.org/abs/2608.05303v1)
S. Ha et al. | 2026-08-05
Contribution: Combines MoE and speculative decoding to reduce external memory access in edge LLM inference.  
Relevance: Directly aligned with LLM inference optimization and edge deployment.

### Multimodal LLM Pruning

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Not All Redundant Tokens Are Alike: Analyzing Visual Token Pruning through Token Roles](http://arxiv.org/abs/2608.04483v1)
H. Kim et al. | 2026-08-05
Contribution: Analyzes visual token pruning decisions through token roles in VLMs.  
Relevance: Helps explain and improve VLM token pruning.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [DIVE: Dynamic Iterative Visual Evidence Construction for Efficient Vision-Language Models](http://arxiv.org/abs/2608.04496v1)
C. Zhong et al. | 2026-08-05
Contribution: Constructs visual evidence iteratively instead of pruning tokens in a single pass.  
Relevance: Relevant to efficient VLM inference with fewer visual tokens.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [HiSC: Hierarchical Spatial Clustering Token Compression for Efficient 3D Scene Understanding](http://arxiv.org/abs/2608.04610v1)
J. Qu et al. | 2026-08-05
Contribution: Compresses redundant 3D VLM tokens via hierarchical spatial clustering.  
Relevance: Relevant to multimodal LLM pruning for 3D spatial reasoning.

### Continual Learning

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Continual Learning in Transition](http://arxiv.org/abs/2608.06216v1)
Z. Hou et al. | 2026-08-06
Contribution: Reframes continual learning beyond parameter-centric mechanisms toward emerging paradigms.  
Relevance: Broad perspective for guiding the lab's continual learning agenda.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [NeuMoSync: End-to-End Neuromodulatory Control for Plasticity and Adaptability in Continual Learning](http://arxiv.org/abs/2608.04358v1)
S. R. Razavi Rohani et al. | 2026-08-05
Contribution: Draws on global neuromodulation to mitigate plasticity loss and improve knowledge transfer.  
Relevance: Strongly relevant to continual learning and adaptivity.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [ATLAS: Adaptive Topological Learning with Abstract Successors for Continual Learning](http://arxiv.org/abs/2608.04334v1)
R. B. Lawlor et al. | 2026-08-05
Contribution: Uses topological learning and abstract successors for continual model-based RL.  
Relevance: Relevant to continual learning in reinforcement learning settings.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Continual-Learning Physics-Informed Neural Networks for Parameterized Partial Differential Equations](http://arxiv.org/abs/2608.04778v1)
X. Chen et al. | 2026-08-05
Contribution: Applies continual learning to PINNs for parameterized PDEs.  
Relevance: Relevant to CL in scientific machine learning.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [DARAD: Dual Adapters and Ranking-Aware Distillation for Continual Remote Sensing Image-Text Retrieval](http://arxiv.org/abs/2608.06059v1)
X. Chen et al. | 2026-08-06
Contribution: Uses dual adapters and ranking-aware distillation for continual remote sensing retrieval.  
Relevance: Relevant to continual multimodal retrieval and distribution shift.

## 视觉感知

### Event-Based Vision

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [EvReflection: Event-Driven Micro-Dynamics for Reflection Removal](http://arxiv.org/abs/2608.06184v1)
J. Wang et al. | 2026-08-06
Contribution: Leverages event signals to disambiguate reflection and transmission layers.  
Relevance: Applies event-based vision to a challenging static-image perception task.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Cooking beyond Frames: A Stereo Event Camera Dataset in the Kitchen](http://arxiv.org/abs/2608.04865v1)
C. Feng et al. | 2026-08-05
Contribution: Introduces a stereo event camera dataset for human-centric kitchen scenes.  
Relevance: Supports event-based vision research beyond automotive and drone settings.

### 3D Point Cloud Perception

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Hierarchical Flow Matching for 3D Point Cloud Generation](http://arxiv.org/abs/2608.05557v1)
L. Wang et al. | 2026-08-06
Contribution: Proposes hierarchical flow matching to generate 3D point clouds without expensive ODE solving.  
Relevance: Relevant to efficient 3D point cloud generation and geometric modeling.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [OutLangSplat: 3D Language Gaussian Splatting for UAV Outdoor Scenes](http://arxiv.org/abs/2608.04560v1)
X. Yan et al. | 2026-08-05
Contribution: Extends 3D language Gaussian splatting to large-scale UAV outdoor scenes.  
Relevance: Relevant to 3D scene understanding in outdoor embodied settings.

## Cross-Topic Signals

- Memory augmentation appears across LLM agents and embodied VLA systems: EvoHarness-RL, Hierarchical Graph Memory, Mimir, and SkillMemo all use explicit structures to compress experience and support long-horizon tasks.
- Self-improvement loops are spreading from LLM agents to VLA and reasoning: EvolveNet, When Self-Evolution Backfires, Learning Globally Reusable Skills, and Refining Over Resampling all confront the risk of overfitting to one's own outputs.
- Token and state compression unify VLM efficiency and 3D scene understanding: Not All Redundant Tokens, DIVE, HiSC, and SmartMage all try to retain only task-relevant information.
- Budget-aware evaluation and compute allocation connect agent engineering with test-time scaling: AV-AIVAT and EcoAgent-Bench address when to stop or spend, while Refining Over Resampling addresses how to use test-time compute more effectively.

## Priority Reading

1. **DyPES-VLA** — The only new VLA paper and directly on cross-embodiment manipulation, a core frontier for the lab's VLA interest.
2. **AV-AIVAT** — A principled way to cut agent evaluation cost dramatically; highly relevant to agent engineering and resource-aware deployment.
#### **Continual Learning in Transition** — A broad reframing of continual learning that can help position the lab's CL work relative to emerging paradigms.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*