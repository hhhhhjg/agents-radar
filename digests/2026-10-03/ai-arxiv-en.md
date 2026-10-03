# Lab Research Topics Radar 2026-10-03

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 47 new + 12 seen in the last 14 days | Generated: 2026-10-03 00:52 UTC

---

## Today's Overview
- LLM Agent Engineering: 10 new papers advance long-horizon control, memory/belief states, failure attribution, tool security, authorization, and auditability.
- Agent Test-Time Scaling and Self-Improvement: 3 new papers cover computational diversity, weight-update prediction for test-time adaptation, and skill evolution; 7 repeated papers continue scaling-curve, exploration, and self-improvement analyses.
- LLM Agent Societies: No new papers today.
- Vision-Language-Action Models: 10 new papers focus on action chunking, predictive alignment, safety, stochastic tokenization, flow/velocity fields, token-efficient agents, unified world-action models, memory, and RL token routing.
- Embodied Navigation: 9 new papers span adaptive VLN goals, fast navigation world models, social HRI, 3D spatial relations, reliable driving VLMs, streaming spatial memory, generalized pose, latent world models, and agentic sim-to-real ISAC.
- LLM Pruning and Inference Optimization: 5 new papers cover MoE expert pruning, quantized reasoning inference, activation sparsity, compressed CLIP diagnostics, and parallel visual grounding; 2 repeated papers address audio-token and world-action sparsity.
- Multimodal LLM Pruning: No new papers today.
- Continual Learning: 10 new papers cover task-oriented LoRA, geometry-preserving merging, 6-DoF grasp, neuroevolution, hyperbolic prototype routing, LoRA backdoor purification, adaptation surveys, dynamic LoRA experts, personalized federated VLMs, and quantized protein LMs.
- Event-Based Vision: No new papers today.
- 3D Point Cloud Perception: 1 new paper on syn2real category-level object pose; 1 repeated paper on set-based irregular sensing architectures.
- 3D Point Cloud Perception and Tracking: No new papers today; the one repeated match is weak for point-cloud tracking.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [Beyond Memory: Harnessing Long-Horizon Agents with Explicit Belief States](http://arxiv.org/abs/2610.01415v1)
Yu Luo et al., 2026-10-01. Introduces PoS, an inference-time framework maintaining explicit belief states. Relevance: long-horizon agent memory and world-state coherence.
#### [Mem++: Non-Destructive Memory for Long-Term Organizational LLM Agents](http://arxiv.org/abs/2610.02002v1)
Ahmad Yehia et al., 2026-10-01. Non-destructive memory tracks document versions over months. Relevance: organizational long-term agent memory.
#### [DeFA: Dependency-Guided Failure Attribution for LLM Agents](http://arxiv.org/abs/2610.01256v1)
Bo Deng et al., 2026-10-01. Dependency-guided failure attribution localizes decisive errors. Relevance: agent debugging and reliability.
#### [PACE: Provenance-Aware Capability Enforcement for Tool-Using LLM Agents](http://arxiv.org/abs/2610.01349v1)
Fengpeng Li et al., 2026-10-01. Provenance-aware capability enforcement secures tool use. Relevance: tool-agent security.
#### [OverAct: Measuring and Mitigating Proactive Over-Authorization in LLM Tool-Calling Agents](http://arxiv.org/abs/2610.01508v1)
Taolin Zhang et al., 2026-10-01. Measures and mitigates proactive over-authorization. Relevance: safe tool-calling authorization.
#### [Mimir: Physics-Grounded LLM Agents for Long-Horizon Irrigation Control](http://arxiv.org/abs/2610.02038v1)
Yimeng Liu et al., 2026-10-01. Physics-grounded agents handle long-horizon irrigation control. Relevance: physical long-horizon agent engineering.

### Agent Test-Time Scaling and Self-Improvement
#### [Architectural Sampling: Test-Time Scaling via Computational Diversity in Frozen Vision-Language Models](http://arxiv.org/abs/2610.01687v1)
Akshit Singh et al., 2026-10-01. Training-free test-time scaling uses architectural computational diversity. Relevance: test-time scaling for frozen VLMs.
#### [Learning to Predict Distributions over Weight Updates for Test-Time Adaptation](http://arxiv.org/abs/2610.01934v1)
Azal Ahmad Khan et al., 2026-10-01. Predicts distributions over weight updates using only the input query. Relevance: test-time adaptation.
#### [SkillEvoLean: Mutation-enhanced skill evolution for Lean provers](http://arxiv.org/abs/2610.01799v1)
Kuo Zhou et al., 2026-10-01. Mutation-enhanced skill evolution improves Lean provers without parameter updates. Relevance: agent self-improvement.
🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Towards Better Exploration in Sequential Test-Time Scaling](http://arxiv.org/abs/2609.39632v1)
Joseph Rance et al., 2026-09-30. Explores sequential test-time scaling for better exploration. Relevance: test-time scaling exploration.
🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [How Much Can Language Models Gain from Test-Time Computation?](http://arxiv.org/abs/2610.01110v1)
Bangji Yang et al., 2026-10-01. Benchmarks gains and costs of test-time computation. Relevance: test-time scaling evaluation.

## 具身智能
### Vision-Language-Action Models
#### [ChunkVLA-AM: Parallel Action Chunking for Vision-Language-Action Robot Control in Additive Manufacturing](http://arxiv.org/abs/2610.01856v1)
Zhugang Liu et al., 2026-10-01. Parallel action chunking adapts VLA control to additive manufacturing. Relevance: VLA embodiment adaptation.
#### [ATI-VLA: Action-Centric Predictive Vision-Language-Action Models via Actionable Alignment Then Adaptive Injection](http://arxiv.org/abs/2610.01741v1)
Yijie Zhu et al., 2026-10-01. Action-centric predictive VLA uses actionable alignment then adaptive injection. Relevance: predictive VLA manipulation.
#### [WBAG: A Whole-Body and Attached-Geometry Safety Framework for Vision-Language-Action Manipulation](http://arxiv.org/abs/2610.01083v1)
Samuel Zhen et al., 2026-10-01. Whole-body and attached-geometry safety framework for VLA manipulation. Relevance: VLA safety.
#### [TOAST: Stochastic Robot Action Tokenization for Autoregressive Vision-Language-Action Models](http://arxiv.org/abs/2610.00899v1)
Keisuke Shirai et al., 2026-10-01. Stochastic action tokenization for autoregressive VLA models. Relevance: VLA action representation.
#### [NarrativeFlow: Flow-Based Vision-Language-Action Model Using Robot Velocity Fields](http://arxiv.org/abs/2610.00981v1)
Shota Kobayashi et al., 2026-10-01. Flow-based VLA uses robot velocity fields. Relevance: embodiment-agnostic motion representation.
#### [UniWAM: Unified World-Action Model](http://arxiv.org/abs/2610.02054v1)
Jiayi Chen et al., 2026-10-01. Unified world-action model combines VLA reasoning with video-pretrained dynamics. Relevance: world-action modeling.
#### [Divide-and-Remember: Recursive Action-Relevant Memory for Long-Horizon VLA Policies](http://arxiv.org/abs/2610.00982v1)
Xuehui Yu et al., 2026-10-01. Recursive action-relevant memory for long-horizon VLA policies. Relevance: VLA memory.

### Embodied Navigation
#### [NavHarness: Adaptive Goals for Agentic Vision-Language Navigation](http://arxiv.org/abs/2609.39915v1)
Haoxiang Shi et al., 2026-09-30. Adaptive goals for agentic vision-language navigation. Relevance: VLN agent goal consistency.
#### [DiffWAM: A Fast and Efficient Navigation World Action Model](http://arxiv.org/abs/2609.39763v1)
Mo Zhu et al., 2026-09-30. Fast navigation world action model uses future visual motion. Relevance: navigation world models.
#### [STARS: From Spatiotemporal Dynamics to Social Representations in Human-Robot Interaction](http://arxiv.org/abs/2609.40245v2)
Nathan Tsoi et al., 2026-09-30. Social representations from spatiotemporal dynamics for HRI navigation. Relevance: socially compliant navigation.
#### [Towards Reliable Vision-Language Models for Autonomous Driving](http://arxiv.org/abs/2610.01531v1)
Manasa Mariam Mammen et al., 2026-10-01. Studies reliability of VLMs for autonomous driving. Relevance: embodied driving reliability.
#### [LOCI: Spatial Linear Memory for Streaming World Models](http://arxiv.org/abs/2609.40222v1)
Ji Xia et al., 2026-09-30. Spatial linear memory for streaming world models. Relevance: streaming navigation memory.
🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [ASENA: Self-evolving Agents for Embodied Navigation](http://arxiv.org/abs/2609.39207v1)
An-Chieh Cheng et al., 2026-09-30. Self-evolving agents for embodied navigation. Relevance: self-evolving navigation agents.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [MoRA: MoE Pruning via Router Bias Learning and Expert Approximation](http://arxiv.org/abs/2610.00367v1)
Yushuai Sun et al., 2026-09-30. MoE pruning via router bias learning and expert approximation. Relevance: expert pruning.
#### [RATIO: Reasoning Analysis and Token-level Inference Optimization for Quantized Reasoning Models](http://arxiv.org/abs/2609.39801v1)
Chengzhu Bao et al., 2026-09-30. Token-level inference optimization for quantized reasoning models. Relevance: quantized reasoning inference.
#### [TopK-Guided: Adaptive, Budget-Aware Activation Sparsity for Efficient LLM Inference](http://arxiv.org/abs/2610.01763v1)
Mukund Agarwalla & Chih-Jen Lin, 2026-10-01. Adaptive budget-aware activation sparsity for LLM inference. Relevance: activation sparsity.
#### [When Masking Helps or Hurts Robustness in Compressed CLIP: A Pre-Deployment Diagnostic](http://arxiv.org/abs/2609.39704v1)
Muhammad Zawish & Steven Davy, 2026-09-30. Pre-deployment diagnostic for masking-based token pruning robustness. Relevance: compressed multimodal robustness.
#### [GroundAnything: Reconciling Parallel Decoding with Precise Visual Grounding at Flash Speed](http://arxiv.org/abs/2609.39600v1)
Qize Yu et al., 2026-09-30. Parallel decoding for precise visual grounding. Relevance: inference optimization for grounding.
🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Audio Token Attention Is Predictable Before the Language Model Runs](http://arxiv.org/abs/2609.38878v1)
Kyoungjun Park et al., 2026-09-30. Predicts audio-token attention for prefill pruning. Relevance: multimodal token pruning.

### Continual Learning
#### [Task-Oriented Rank Adaptation for Continual Learning in Text Classification](http://arxiv.org/abs/2610.01702v1)
Rey Sanchez Lopez et al., 2026-10-01. Task-oriented rank adaptation for continual text classification. Relevance: PEFT continual learning.
#### [ChainLoRA: Geometry-Preserving Task Vector Merging for Continual Learning in LLMs](http://arxiv.org/abs/2610.00431v1)
Hang Yin et al., 2026-09-30. Geometry-preserving task-vector merging for replay-free continual LLMs. Relevance: continual merging.
#### [Continual Learning for 6-DoF Grasp Synthesis via Experience and Demonstrations](http://arxiv.org/abs/2610.01301v1)
Giulio Schiavi et al., 2026-10-01. Continual grasp synthesis from experience and demonstrations. Relevance: robotics continual learning.
#### [Hyperbolic Prototype Routing for Rehearsal-Free Class-Incremental Learning](http://arxiv.org/abs/2609.39550v1)
HongWei Zhao et al., 2026-09-30. Hyperbolic prototype routing for rehearsal-free CIL. Relevance: class-incremental learning.
#### [Backdoor Purification for LoRA-Tuned LLMs via Null-Space Projection](http://arxiv.org/abs/2610.00685v1)
Jianwei Li & Jung-Eun Kim, 2026-09-30. Null-space projection purifies LoRA-tuned LLM backdoors. Relevance: PEFT safety in continual adaptation.
#### [Dynamic LoRA-Experts and Prototype-Ensemble Matching for Class-Incremental Learning](http://arxiv.org/abs/2609.39839v1)
Hongwei Zhao et al., 2026-09-30. Dynamic LoRA experts for class-incremental learning. Relevance: PEFT-based CIL.

## 视觉感知
### 3D Point Cloud Perception
#### [GenCOPE: Syn2Real Generalized Category-Level Object Pose Estimation for Robotic Picking](http://arxiv.org/abs/2610.01758v1)
Jian Liu et al., 2026-10-01. Syn2real category-level object pose estimation for robotic picking. Relevance: 3D perception for robotics.
🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Atomizer-IO: Beyond Pixels, Patches and Grids](http://arxiv.org/abs/2609.40320v1)
Hugo Riffaud de Turckheim et al., 2026-09-30. Set-based architecture for irregular sensing data. Relevance: point-cloud-like geometric perception.

## Cross-Topic Signals
- Memory and belief-state management recurs in LLM agents (Mem++, Beyond Memory) and embodied/VLA policies (Divide-and-Remember, LOCI, ASENA).
- Token/action efficiency connects VLA, inference optimization, and multimodal grounding (TOAST, TopK-Guided, GroundAnything, Audio Token Attention).
- Test-time scaling and self-improvement appear in agent TTS (Architectural Sampling, SkillEvoLean) and embodied navigation (ASENA).
- World-action and predictive models bridge VLA and navigation (UniWAM, NarrativeFlow, DiffWAM).
- Parameter-efficient adaptation and continual learning overlap with VLA/robotics adaptation (ChainLoRA, Dynamic LoRA-Experts, Task-Oriented Rank Adaptation).

## Priority Reading
- [ATI-VLA](http://arxiv.org/abs/2610.01741v1): central predictive VLA design; directly targets action-centric alignment and injection for manipulation.
- [Beyond Memory](http://arxiv.org/abs/2610.01415v1): explicit belief states offer a concrete route to more coherent long-horizon LLM agents.
- [ChainLoRA](http://arxiv.org/abs/2610.00431v1): replay-free geometry-preserving merging is highly relevant to continual LLM adaptation under parameter budgets.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*