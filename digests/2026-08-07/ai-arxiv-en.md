# Lab Research Topics Radar 2026-08-07

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 43 new + 13 seen in the last 14 days | Generated: 2026-08-07 01:28 UTC

---

## Today's Overview

- **LLM Agent Engineering** (LLM Agent 与多智能体): 10 new papers; harness evolution, runtime guardrails, graph memory, skill-use evaluation, and self-evolution failure analysis are the active threads.
- **Agent Test-Time Scaling and Self-Improvement** (LLM Agent 与多智能体): 2 new papers; test-time refinement and collaborative harness evolution join repeated adaptive-sampling and survey work.
- **LLM Agent Societies** (LLM Agent 与多智能体): No new papers today.
- **Vision-Language-Action Models** (具身智能): 10 new papers; in-context post-training, memory-augmented long-horizon control, hierarchical policies, risk detection, and task-vector audits progress substantially.
- **Embodied Navigation** (具身智能): 6 new papers; spiking policies and physical prompt-injection attacks stand out, alongside repeated driving/layout papers.
- **LLM Pruning and Inference Optimization** (模型压缩与持续学习): 2 new papers; edge MoE/speculative decoding and VLM efficiency methods, with one repeated serving study.
- **Multimodal LLM Pruning** (模型压缩与持续学习): 3 new papers; token-role analysis, iterative evidence construction, and 3D token compression, plus two repeated video token-pruning papers.
- **Continual Learning** (模型压缩与持续学习): 10 new papers; paradigm redefinition, neuromodulatory control, PINN continual learning, and continual retrieval are the strongest signals.
- **Event-Based Vision** (视觉感知): 2 new papers; a kitchen stereo-event dataset and event-driven reflection removal, plus a repeated calibration paper.
- **3D Point Cloud Perception** (视觉感知): 4 new papers; point-cloud generation, dynamic 3D modality orchestration, and outdoor language splatting, plus repeated detection/grounding papers.
- **3D Point Cloud Perception and Tracking** (视觉感知): No new papers today.

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [EvoHarness-RL: Learning Self-Evolving Runtime Harness for Long-Horizon LLM Agents](http://arxiv.org/abs/2608.05446v1)
X. Ning et al. (2026-08-05). Introduce an RL-learned, self-evolving runtime harness that manages state, tools, verification, and experience reuse for long-horizon agents. Directly targets agent harness engineering at the system level.

#### [State2State: Environment-Derived Mid-Training for LLM Agents](http://arxiv.org/abs/2608.04934v1)
X. Lei et al. (2026-08-05). Propose environment-derived mid-training on state transitions to reduce dependence on expert trajectories and handcrafted verifiers. Relevant to scalable agent training beyond human-specified supervision.

#### [DreamGuard: Efficient Runtime Guardrail for LLM Agents via Risk-Aware World Model](http://arxiv.org/abs/2608.05695v1)
W. Lin et al. (2026-08-06). Present a runtime guardrail that uses a risk-aware world model to check unsafe tool actions before execution. Highly relevant to safe deployment of tool-using LLM agents.

#### [Hierarchical Graph Memory for LLM Agents with Path-level Localization and Rewrite](http://arxiv.org/abs/2608.05095v1)
X. Yue et al. (2026-08-05). Propose hierarchical graph memory with path-level localization and rewrite for updatable long-term agent memory. Relevant to persistent, structurally organized agent memory.

#### [When Self-Evolution Backfires: Pre-Commit Gating against Skill Contamination in LLM Agents](http://arxiv.org/abs/2608.05810v1)
L. Shang et al. (2026-08-06). Formalize a capability-contamination phase transition in self-evolving agents and propose pre-commit gating against harmful skills. Important for preventing skill accumulation from degrading agent performance.

#### [EcoAgent-Bench: Evaluating Economic Decision-Making in Budget-Constrained LLM Agents](http://arxiv.org/abs/2608.05519v1)
J. Wu et al. (2026-08-06). Introduce a benchmark where resource-use choices are part of task success for budget-constrained agents. Relevant to cost-aware agent evaluation.

#### [Skill-Use: Can LLMs Actually Use Skills in Agentic Harnesses?](http://arxiv.org/abs/2608.04828v1)
J. Han et al. (2026-08-05). Evaluate whether agents can correctly retrieve and apply structured skills inside agentic harnesses. Relevant to skill-based agent engineering and evaluation.

#### [Learning Globally Reusable Skills for Coding Agents](http://arxiv.org/abs/2608.06153v1)
C. Yang et al. (2026-08-06). Propose global skill evolution that models relationships among skills to avoid overfitted local updates. Relevant to reusable skill accumulation in coding agents.

#### [ArtAnno: Annotating Implicit Semantics in Artworks through LLM Agent-Driven Bidirectional Human-AI Augmentation](http://arxiv.org/abs/2608.05026v1)
X. Gu et al. (2026-08-05). Present an LLM-agent-driven bidirectional human-AI augmentation pipeline for implicit art annotation. Relevant to agent-driven data annotation workflows.

### Agent Test-Time Scaling and Self-Improvement

#### [Refining Over Resampling: Test-Time Self-Correction for LLM Reasoning](http://arxiv.org/abs/2608.05643v1)
A. Bilal et al. (2026-08-06). Show that refining existing rollouts can outperform wider sampling for test-time LLM reasoning. Directly relevant to compute-efficient self-correction.

#### [EvolveNet: Collaborative Harness Evolution for Agent Self-Improvement](http://arxiv.org/abs/2608.04968v1)
J. Nie et al. (2026-08-05). Evolve executable agent harnesses collaboratively to improve agent performance without updating model weights. Bridges self-improvement and harness design.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Interpretable Adaptive Sampling for LLM Test-Time Scaling](http://arxiv.org/abs/2608.03961v1)
M. Kashaniyan, A. Jannesari (2026-08-04). Propose interpretable, adaptive per-query sampling budgets for test-time scaling. Relevant to efficient and inspectable test-time compute allocation.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Test-Time Scaling for Safe Text-Guided Image Generation via Intermediate Clean Estimates](http://arxiv.org/abs/2608.03284v1)
J. Sakurai et al. (2026-08-04). Apply test-time scaling to avoid unsafe image generations via intermediate clean estimates. Relevant to test-time safety methods beyond reasoning.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Test-Time Scaling in Reasoning LLMs: Inference Regimes, Evaluation, and Reproducibility](http://arxiv.org/abs/2608.04001v1)
M. Hariri et al. (2026-08-04). Survey inference regimes, evaluation, and reproducibility of test-time scaling. Useful as a reference for the test-time scaling research line.

### LLM Agent Societies

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [History Matters: Meta-policy Delegation with Heterogeneous Multi-agent Reinforcement Learning](http://arxiv.org/abs/2608.03833v1)
Z. Lu et al. (2026-08-04). Study history-based meta-policy delegation in heterogeneous multi-agent systems. Relevant to agent societies with asymmetric capabilities.

## 具身智能

### Vision-Language-Action Models

#### [In-Context VLA: Endowing Vision-Language-Action Models with Language via In-Context Post-Training and Agentic Tool Use](http://arxiv.org/abs/2608.05738v1)
J. Yang et al. (2026-08-06). Use in-context post-training and agentic tool use to inject explicit reasoning into VLA policies. Directly extends VLA models beyond static behavior cloning.

#### [Beyond Flat Policies: Hierarchical Post-Training for Embodied Agents in Robotic Manipulation](http://arxiv.org/abs/2608.05999v1)
H. Kong et al. (2026-08-06). Propose hierarchical post-training that explicitly models task progression in VLA manipulation. Relevant to structured policy decomposition for long-horizon tasks.

#### [SkillMemo: Expert-guided Skill Memory Framework for Compositional Embodied Manipulation](http://arxiv.org/abs/2608.05970v1)
C. Wang et al. (2026-08-06). Introduce expert-guided skill memory to improve compositional manipulation in DP/VLA models. Relevant to reusable skill accumulation in embodied policies.

#### [BridgeVLA++: A Data-Efficient, Generalizable, and Memory-Augmented Vision-Language-Action Framework for 3D Manipulation](http://arxiv.org/abs/2608.05042v1)
P. Li et al. (2026-08-05). Present a memory-augmented 3D VLA framework for data-efficient manipulation under distribution shifts. Relevant to 3D VLA generalization.

#### [Explicit Language Memory for Long-Horizon Planning in Vision-Language-Action Models](http://arxiv.org/abs/2608.04765v1)
H. Xu et al. (2026-08-05). Introduce explicit language memory to improve long-horizon compositional generalization in VLA. Relevant to VLA memory and planning.

#### [Mind-VLA: Instruction-Aware Spatial Representation Alignment for Vision-Language-Action Models](http://arxiv.org/abs/2608.04633v1)
X. Ding et al. (2026-08-05). Align VLA representations with instruction-relevant 3D object geometry rather than the whole scene. Relevant to instruction-conditioned 3D grounding in VLA.

#### [Mimir: A Neuro-Symbolic Memory System with Dynamic Grounding for Embodied Agents in Interactive Environments](http://arxiv.org/abs/2608.04933v1)
H. Xu et al. (2026-08-05). Build a neuro-symbolic memory system with dynamic grounding for long-horizon embodied tasks. Relevant to explicit memory interfaces in embodied VLA/agents.

#### [World-to-Wrist: Task-Conditioned Future Wrist Modeling for Fine-Grained Robot Manipulation](http://arxiv.org/abs/2608.05369v1)
Y. Pan et al. (2026-08-05). Model future wrist-local interactions conditioned on global task context for fine-grained VLA manipulation. Relevant to multi-view VLA policy design.

#### [GUARD: Grounding Uncertainty and Ablation-Based Risk Detection for Diffusion-Based VLAs](http://arxiv.org/abs/2608.04510v1)
S. Hegde, J. Y. B. Katta (2026-08-05). Detect weakly grounded VLA action predictions at test time without modifying the policy. Relevant to risk detection for diffusion-based VLA policies.

#### [Suppression Sticks, Locality Is Fragile: A Closed-Loop Target-and-Control Audit of Task-Vector Negation in VLA Policies](http://arxiv.org/abs/2608.04692v1)
S. Wang et al. (2026-08-05). Audit task-vector subtraction in multitask VLA policies, showing fragile behavioral locality in closed-loop control. Relevant to interpretability and controllable VLA modification.

### Embodied Navigation

#### [SpikingNav: Robust Embodied Navigation with Spiking Neural Policies](http://arxiv.org/abs/2608.05078v1)
J. Zhang et al. (2026-08-05). Use spiking neural policies for embodied navigation robust to visual corruptions. Relevant to efficient, robust navigation policies.

#### [Hijacking Robots with a Piece of Paper: A Systematic Study of Physical Prompt Injection in VLM-Controlled Robots](http://arxiv.org/abs/2608.05715v1)
S. M. B. P. Samarakoon et al. (2026-08-06). Systematically study physical prompt-injection attacks on VLM-controlled robots. Relevant to security of VLM-based robot perception and planning.

#### [SurgNarrator: A Generative Retrieval Framework for Surgical Video Understanding](http://arxiv.org/abs/2608.04676v1)
Y. Feng et al. (2026-08-05). Combine generative and retrieval mechanisms for real-time surgical video understanding. Relevant to embodied perception in structured, procedural environments.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [SUV: Future Scene Understanding as Video Generation for End-to-End Driving](http://arxiv.org/abs/2608.03084v1)
Y. Yuan et al. (2026-08-04). Use video generation as a shared predictor for future scenes in end-to-end driving. Relevant to predictive embodied navigation.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [PolyLayout: Multi-room Manhattan Layout Estimation](http://arxiv.org/abs/2608.03323v1)
G. Hanning et al. (2026-08-04). Estimate multi-room Manhattan layouts from multi-view imagery. Relevant to indoor scene understanding for navigation.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [EdgeXpert: An Edge Device for Memory-Efficient LLM Inference with Mixture-of-Experts and Speculative Decoding](http://arxiv.org/abs/2608.05303v1)
S. Ha et al. (2026-08-05). Combine MoE and speculative decoding in an edge device to reduce external memory access for LLM inference. Relevant to memory-bound edge LLM deployment.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [LLM Serving in the Wild: An Empirical Study of Frameworks, Methods, and System Designs](http://arxiv.org/abs/2608.03036v1)
F. Majidi et al. (2026-08-04). Empirically study LLM serving frameworks and system designs. Useful for practical inference optimization choices.

### Multimodal LLM Pruning

#### [Not All Redundant Tokens Are Alike: Analyzing Visual Token Pruning through Token Roles](http://arxiv.org/abs/2608.04483v1)
H. Kim et al. (2026-08-05). Analyze how visual token pruning decisions relate to token roles in vision-language models. Relevant to principled multimodal token pruning.

#### [DIVE: Dynamic Iterative Visual Evidence Construction for Efficient Vision-Language Models](http://arxiv.org/abs/2608.04496v1)
C. Zhong et al. (2026-08-05). Build visual evidence iteratively instead of one-shot pruning for efficient VLM inference. Relevant to dynamic visual token reduction.

#### [HiSC: Hierarchical Spatial Clustering Token Compression for Efficient 3D Scene Understanding](http://arxiv.org/abs/2608.04610v1)
J. Qu et al. (2026-08-05). Compress 3D VLM tokens via hierarchical spatial clustering. Relevant to efficiency of 3D vision-language models.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Adaptive Two-Stage Visual Token Pruning for Efficient Inference in Video-Language Models](http://arxiv.org/abs/2608.03112v1)
P. Regmi et al. (2026-08-04). Propose adaptive two-stage pruning for video-language model tokens. Relevant to efficient video VLM inference.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [GSTEP: Global Spatio-Temporal Density-Driven Visual Token Pruning for Efficient Video Large Language Models](http://arxiv.org/abs/2608.03083v1)
M. Zhang et al. (2026-08-04). Use global spatio-temporal density for visual token pruning in VideoLLMs. Relevant to redundancy reduction in long-video LLMs.

### Continual Learning

#### [Continual Learning in Transition](http://arxiv.org/abs/2608.06216v1)
Z. Hou et al. (2026-08-06). Argue that continual learning is being reshaped beyond parameter-centric mechanisms by emerging paradigms. Highly relevant for positioning the lab’s CL research agenda.

#### [NeuMoSync: End-to-End Neuromodulatory Control for Plasticity and Adaptability in Continual Learning](http://arxiv.org/abs/2608.04358v1)
S. R. Razavi Rohani et al. (2026-08-05). Introduce end-to-end neuromodulatory control for plasticity and knowledge transfer in CL. Relevant to biologically inspired CL.

#### [Continual-Learning Physics-Informed Neural Networks for Parameterized Partial Differential Equations](http://arxiv.org/abs/2608.04778v1)
X. Chen et al. (2026-08-05). Apply continual learning to parameterized PINNs for PDE solution approximation. Relevant to CL in scientific ML.

#### [DARAD: Dual Adapters and Ranking-Aware Distillation for Continual Remote Sensing Image-Text Retrieval](http://arxiv.org/abs/2608.06059v1)
X. Chen et al. (2026-08-06). Use dual adapters and ranking-aware distillation for continual cross-modal retrieval. Relevant to continual learning in retrieval tasks.

#### [ATLAS: Adaptive Topological Learning with Abstract Successors for Continual Learning](http://arxiv.org/abs/2608.04334v1)
R. B. Lawlor, D. S. Brown (2026-08-05). Combine adaptive topological learning and abstract successors for continual model-based RL. Relevant to continual RL under environment shifts.

#### [Energy- and Memory-Efficient PEFT Methods for Personalized On-Device SLMs on Consumer GPUs](http://arxiv.org/abs/2608.04488v1)
K. Akhmetzhanov, J.-G. Park (2026-08-05). Evaluate parameter-efficient fine-tuning for personalized on-device small language models under energy/memory constraints. Relevant to resource-constrained continual personalization.

## 视觉感知

### Event-Based Vision

#### [Cooking beyond Frames: A Stereo Event Camera Dataset in the Kitchen](http://arxiv.org/abs/2608.04865v1)
C. Feng et al. (2026-08-05). Introduce a stereo event-camera dataset for human-centric kitchen scenes. Relevant to event-based robust perception.

#### [EvReflection: Event-Driven Micro-Dynamics for Reflection Removal](http://arxiv.org/abs/2608.06184v1)
J. Wang et al. (2026-08-06). Leverage event signals to model micro-dynamics for reflection removal. Relevant to event-camera image enhancement.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [PLS-Calib: A Partial Least Squares Framework for Event Camera and Odometry Calibration under Ground Motion Constraints](http://arxiv.org/abs/2608.03296v1)
G. Li et al. (2026-08-04). Calibrate event cameras and odometry under constrained ground motion using partial least squares. Relevant to event-camera system calibration.

### 3D Point Cloud Perception

#### [Hierarchical Flow Matching for 3D Point Cloud Generation](http://arxiv.org/abs/2608.05557v1)
L. Wang et al. (2026-08-06). Propose hierarchical flow matching to generate high-quality point clouds while avoiding expensive ODE solving. Relevant to efficient 3D point-cloud generation.

#### [SmartMage: Dynamic Modality Orchestration for 3D Scene Understanding](http://arxiv.org/abs/2608.05137v1)
Y. Zhang et al. (2026-08-05). Dynamically orchestrate visual and geometric modalities for 3D scene understanding. Relevant to multimodal 3D perception.

#### [OutLangSplat: 3D Language Gaussian Splatting for UAV Outdoor Scenes](http://arxiv.org/abs/2608.04560v1)
X. Yan et al. (2026-08-05). Extend 3D language Gaussian splatting to outdoor UAV-scale scenes. Relevant to open-vocabulary 3D scene understanding.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Lightweight 3D Object Detection via Mamba-Based Knowledge Distillation](http://arxiv.org/abs/2608.03490v1)
Q. C. Ninh et al. (2026-08-04). Distill Mamba-based 3D detectors into lightweight models for LiDAR perception. Relevant to efficient point-cloud detection.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [NCGR: Noise-Conditional Gated Rectification for Camera Extrinsic Perturbations in BEV 3D Object Detection](http://arxiv.org/abs/2608.03895v1)
W. Pan et al. (2026-08-04). Rectify camera extrinsic perturbations in BEV 3D detection with noise-conditional gating. Relevant to robust 3D detection.

🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [TDVR: Joint Text Disambiguation and Viewpoint Reasoning for Zero-Shot 3D Visual Grounding](http://arxiv.org/abs/2608.03763v1)
Q. Du et al. (2026-08-04). Improve zero-shot 3D visual grounding with text disambiguation and viewpoint reasoning. Relevant to language-driven point-cloud grounding.

## Cross-Topic Signals

- **Memory is becoming a shared bottleneck** across LLM agents, VLA policies, and embodied navigation: hierarchical graph memory, neuro-symbolic memory, explicit language memory, and skill memory all emphasize structured, updatable memory for long-horizon tasks.
- **Self-improvement is moving beyond model weights**: harness evolution, skill memory, and skill contamination gating show that persistent improvement is increasingly engineered at the system/skill level rather than through retraining.
- **Token/context compression is the common efficiency lever** across 2D/3D and video VLMs: iterative evidence construction, hierarchical clustering, and spatio-temporal density pruning are converging on similar ideas.
- **Test-time methods are expanding from pure sampling** into refinement, grounding checks, and risk-aware world models, bridging LLM reasoning and robot policy safety.
- **Event/neuromorphic sensors appear in both perception and control** — spiking navigation, event-driven reflection removal, and event-camera calibration indicate growing interest in robustness beyond conventional frame-based pipelines.

## Priority Reading

#### **Continual Learning in Transition** — useful as a framework-level redefinition of continual learning; worth reading in full to align the lab’s CL research direction with emerging paradigms.
2. **EvolveNet** — directly connects agent harness engineering with self-improvement, a high-leverage intersection of two configured research topics.
3. **In-Context VLA** — represents a clear shift from static VLA behavior cloning toward language-mediated reasoning and tool use; highly actionable for the lab’s VLA work.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*