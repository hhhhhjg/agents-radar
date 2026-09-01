# Lab Research Topics Radar 2026-09-02

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 45 new + 0 seen in the last 14 days | Generated: 2026-09-01 23:43 UTC

---

## Today's Overview

- **LLM Agent 与多智能体 / LLM Agent Engineering**: 10 new papers; progress on long-horizon agent evaluation, tool-use supervision, indirect prompt-injection security, skill compression, and research-agent rubric induction.
- **LLM Agent 与多智能体 / Agent Test-Time Scaling and Self-Improvement**: 4 new papers; progress on test-time scaling for geometry, inference-as-search framing, multi-solver disagreement curricula, and self-play driving.
- **LLM Agent 与多智能体 / LLM Agent Societies**: No new papers today.
- **具身智能 / Vision-Language-Action Models**: 11 new papers; progress on 4D/temporal representation, one-step action generation, long-horizon benchmarks, training-free correction, frozen-policy memory, and driving-specific VLA adaptation.
- **具身智能 / Embodied Navigation**: 9 new papers; progress on VLM spatial intelligence for generalist navigation, geolocalization through navigation, long-horizon navigation scaffolding, and occlusion-boundary cues.
- **模型压缩与持续学习 / LLM Pruning and Inference Optimization**: One matched paper is covered under Multimodal LLM Pruning because it targets LVLM visual-token pruning; no separate LLM-weight-pruning paper today.
- **模型压缩与持续学习 / Multimodal LLM Pruning**: 1 new paper on geometry-corrected diversity-based visual-token pruning in LVLMs.
- **模型压缩与持续学习 / Continual Learning**: 9 new papers; progress on continual test-time adaptation for VLMs/OVSS, class-incremental adapters, and rare-failure hazard identification.
- **视觉感知 / Event-Based Vision**: No new papers today.
- **视觉感知 / 3D Point Cloud Perception**: 3 new papers; progress on 3DGS segmentation, point-cloud video masked modeling, and simulation-ready scene modeling.
- **视觉感知 / 3D Point Cloud Perception and Tracking**: No new papers today.

## Main Direction

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [E-Commerce Bench: Evaluating LLM Agents on Long-Horizon Autonomous Business Operation](http://arxiv.org/abs/2608.30730v1)
Fan et al. (2026-08-31). Contribution: introduces a long-horizon e-commerce benchmark requiring agents to explore, learn, and adapt over thousands of steps. Relevance: directly targets evolving environments and long-range dependencies in LLM agent engineering.

#### [CAST: Critique-Aware Supervision for Training Reliable Long-Horizon Tool-Calling Agents](http://arxiv.org/abs/2608.30147v1)
Saeidi et al. (2026-08-31). Contribution: proposes critique-aware supervision to intercept irreversible wrong actions before execution in stateful tool-calling environments. Relevance: addresses a key reliability bottleneck for long-horizon deployed agents.

#### [ATLAS: Dual-Horizon Diagnostic Evaluation for Industrial Tool-Use Agents](http://arxiv.org/abs/2608.30685v1)
Chen et al. (2026-08-31). Contribution: presents a dual-horizon diagnostic benchmark for iterative tool-use agents under dynamic business conditions. Relevance: provides capability-oriented evaluation that informs prioritization and intervention decisions.

#### [Will the User Ever Know? Covert Indirect Prompt Injection on Tool-Using LLM Agents](http://arxiv.org/abs/2608.30362v1)
Lee et al. (2026-08-31). Contribution: analyzes indirect prompt injection from the user’s perspective, moving beyond simple attack success rate. Relevance: crucial for agent safety and trustworthy tool-using LLM systems.

#### [SkillZip Pro: Execution-Aware Dynamic Compression of Progressively Loaded Skills for Self-Evolving Agents](http://arxiv.org/abs/2608.30785v1)
Bai et al. (2026-08-31). Contribution: compresses progressively loaded agent skill bundles based on execution paths. Relevance: reduces deployment cost while preserving branch-specific skill details.

#### [Towards a Systems Foundation for Agentic Skills: Architecture, Lifecycle, and Security](http://arxiv.org/abs/2608.29596v1)
Badhe et al. (2026-08-30). Contribution: proposes a systems-oriented view of agentic skills covering architecture, lifecycle, and security. Relevance: relevant to engineering scalable, reliable LLM agents beyond stateless tool calling.

#### [Learning to Evaluate Before Improving: Automatic Rubric Induction for Automatic Research Agents](http://arxiv.org/abs/2608.31076v1)
Wang et al. (2026-08-31). Contribution: introduces automatic rubric induction to evaluate open-ended research-agent workflows. Relevance: addresses missing success criteria in autonomous scientific agent evaluation.

#### [Ignorance or Incompetence? Constructing Knowledge-Gated, Verifiable Tasks for LLM Agents](http://arxiv.org/abs/2608.30322v1)
Tian et al. (2026-08-31). Contribution: designs a knowledge-gated task construction protocol separating instructions from private conventions. Relevance: enables controlled diagnosis of whether agent failures stem from missing knowledge or reasoning ability.

#### [A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting](http://arxiv.org/abs/2608.30976v1)
Tao et al. (2026-08-31). Contribution: builds an autonomous agent for task formulation, model selection, and uncertainty communication in forecasting. Relevance: extends LLM agent engineering to practical human-in-the-loop industrial workflows.

#### [Lies We Can See: Joint Verbal and Non-Verbal Deception by VLM Agents in Embodied Social Interactions](http://arxiv.org/abs/2608.30428v1)
Ahn et al. (2026-08-31). Contribution: studies coordinated verbal and non-verbal deception by VLM agents in embodied social-deduction games. Relevance: highlights alignment and safety risks in deployed agent behaviors.

### Agent Test-Time Scaling and Self-Improvement

#### [Reactivating Test-Time Scaling for Plane Geometry Problem Solving](http://arxiv.org/abs/2608.30156v1)
Kang et al. (2026-08-31). Contribution: analyzes why standard test-time scaling fails on plane geometry and proposes a reactivated TTS approach. Relevance: extends TTS to multimodal reasoning requiring visual perception and symbolic deduction.

#### [When LLM Meets Tree Search: A Systematic View of Inference as Search in Large Language Models](http://arxiv.org/abs/2608.30395v1)
Wei et al. (2026-08-31). Contribution: provides a systematic framing of test-time scaling as search over partial reasoning states. Relevance: useful for designing inference-time compute strategies for agents.

#### [Beyond Uncertainty: Multi-Solver Disagreement Rewards for Self-Evolving Reasoning Curricula](http://arxiv.org/abs/2608.30035v1)
Selvendran et al. (2026-08-31). Contribution: replaces single-solver uncertainty with multi-solver disagreement as reward for self-evolving reasoning curricula. Relevance: addresses a key bottleneck in self-improvement without human data.

#### [What Emerges and What Breaks in Self-Play Driving](http://arxiv.org/abs/2608.30819v1)
Sisask et al. (2026-08-31). Contribution: scales self-play driving policies to Transformers trained on real-city HD maps. Relevance: explores emergent behavior and failure modes in self-improving embodied policies.

## 具身智能

### Vision-Language-Action Models

#### [Temporal Forcing: 4D Representation Alignment for Vision-Language-Action Models](http://arxiv.org/abs/2608.30643v1)
Ding et al. (2026-08-31). Contribution: aligns VLA representations with temporal structure to address observation aliasing in long-horizon manipulation. Relevance: targets a core failure mode of VLAs in visually similar states.

#### [DriftingVLA: Native One-Step Vision-Language-Action Generation via Per-Dimension Temporal Drifting](http://arxiv.org/abs/2608.29749v1)
Gao et al. (2026-08-30). Contribution: introduces a native one-step VLA generator that removes multi-step flow refinement. Relevance: reduces online control latency for continuous action generation.

#### [Behavior-Skill: A Fine-Grained Benchmark for Evaluating Vision-Language-Action Policies in Long-Horizon Tasks](http://arxiv.org/abs/2608.30536v1)
Ma et al. (2026-08-31). Contribution: provides a fine-grained skill-level benchmark for long-horizon mobile manipulation. Relevance: improves diagnosis of intermediate VLA policy failures beyond full-task rollouts.

#### [CometVLA: Co-Training on an Embodied Data Pyramid towards Physical Understanding](http://arxiv.org/abs/2608.30289v1)
Wan et al. (2026-08-31). Contribution: co-trains VLA models on an embodied data pyramid linking physical VQA to robot action domains. Relevance: targets physical commonsense grounding in manipulation.

#### [PAVE: Predictive Alignment and Value-Guided Evolution for World-Action Policies](http://arxiv.org/abs/2608.30378v1)
Zhao et al. (2026-08-31). Contribution: adds predictive scene-evolution alignment and value-guided trajectory filtering to VLA policies. Relevance: addresses representation and trajectory-quality gaps in behavior cloning.

#### [AGM: Achievement-Grounded Memory for Closed-Loop Agents with Frozen VLA Policies](http://arxiv.org/abs/2608.29537v1)
Gao et al. (2026-08-30). Contribution: equips frozen VLA policies with achievement-grounded external memory for task progress. Relevance: enables grounding continue/retry/terminate decisions in closed-loop manipulation.

#### [Training-Free Action Correction for VLA Model Failures via Language Feedback](http://arxiv.org/abs/2608.29967v1)
Kwon et al. (2026-08-30). Contribution: corrects systematic VLA deployment failures using language feedback without retraining. Relevance: offers a practical intervention layer for deployed robot policies.

#### [PRACTICE: From Experience to Expertise in Self-Evolving Embodied Agents](http://arxiv.org/abs/2608.30760v1)
Bai et al. (2026-08-31). Contribution: builds embodied agents that continually improve and adapt through interaction. Relevance: connects VLA/embodied agents with self-evolution and lifelong adaptation.

#### [Aligning Multi-Trajectory Supervision with Policy Optimization for VLA Driving](http://arxiv.org/abs/2608.30122v1)
Zhang et al. (2026-08-31). Contribution: analyzes trajectory selection conflicts between multi-trajectory imitation and GRPO in driving VLAs. Relevance: improves policy optimization for vision-language-action driving.

#### [Rethinking Language's Role in Efficient VLA for Autonomous Vehicles: Toward Smarter, Trustworthy Driving](http://arxiv.org/abs/2608.30144v1)
Guo and Su (2026-08-31). Contribution: examines onboard latency/memory costs of language in VLA autonomous driving. Relevance: highlights efficiency constraints for deploying language-grounded driving policies.

### Embodied Navigation

#### [LightNav-0: Eliciting VLM Spatial Intelligence for Generalist Embodied Navigation](http://arxiv.org/abs/2608.30935v1)
Wang et al. (2026-08-31). Contribution: adapts pretrained VLM spatial priors into a generalist embodied navigation policy. Relevance: directly targets cross-task, cross-environment, and cross-embodiment navigation.

#### [Scaffolding Foundation Models into Physical-World Agents Pushes the Frontier of Long-Horizon Navigation](http://arxiv.org/abs/2608.30396v1)
Lei et al. (2026-08-31). Contribution: combines VLM high-level planning with closed-loop reactive navigation for long-horizon goals. Relevance: addresses a central integration challenge for physical world agents.

#### [GeoAgent: Evaluating VLM Geolocalization Through Embodied Navigation](http://arxiv.org/abs/2608.29483v1)
Mukherjee et al. (2026-08-30). Contribution: benchmarks VLM geolocalization in an embodied navigation setting rather than static image retrieval. Relevance: extends navigation evaluation to location-oriented decision-making.

#### [RealOOB: A Definition-Consistent Real-World Oriented Occlusion Boundary Benchmark](http://arxiv.org/abs/2608.30820v1)
Xu et al. (2026-08-31). Contribution: introduces a benchmark for occlusion boundary localization and orientation. Relevance: provides geometry-driven mid-level cues useful for navigation scene understanding.

## 模型压缩与持续学习

### Multimodal LLM Pruning

#### [Centering before Pruning: Lightweight Geometry Correction for Diversity-Based Visual Token Pruning in LVLMs](http://arxiv.org/abs/2608.30263v1)
Wen et al. (2026-08-31). Contribution: identifies raw-token similarity bias and applies lightweight geometry correction before visual-token pruning. Relevance: improves visual-token pruning efficiency and diversity preservation in LVLMs.

### Continual Learning

#### [Towards Continual Test-Time Adaptation of Vision-Language Models in Open-Vocabulary Semantic Segmentation](http://arxiv.org/abs/2608.29923v1)
Doloriel et al. (2026-08-30). Contribution: diagnoses entropy-minimization patch-level class collapse during continual TTA for OVSS. Relevance: important for adapting VLM-based segmentation under ongoing distribution shift.

#### [Continual Test-Time Adaptation via Entropy Sensitivity-Guidance in Strict Online Setting](http://arxiv.org/abs/2608.29920v1)
Doloriel et al. (2026-08-30). Contribution: proposes sensitivity-guided erasing adaptation for batch-size-one online TTA. Relevance: addresses drift and collapse in strict continual test-time adaptation.

#### [One Adapter, Many Tasks: Task-Conditioned Feature Transformations for Continual Learning](http://arxiv.org/abs/2608.31096v1)
Fu et al. (2026-08-31). Contribution: introduces task-conditioned feature transformations for class-incremental learning without old data. Relevance: improves pretrained-model-based continual learning efficiency and accuracy.

#### [GAFT: Geo-Anchored Fine-Tuning for Hazard Identification from Rare Failures](http://arxiv.org/abs/2608.30858v1)
Xu et al. (2026-08-31). Contribution: fine-tunes off-road navigation models on geo-anchored rare failure events. Relevance: tackles continual adaptation to rare hazards with limited training data.

## 视觉感知

### 3D Point Cloud Perception

#### [VCAR: Training-Free 3DGS Segmentation via View Completeness and Axis-Aware Boundary Refinement](http://arxiv.org/abs/2608.30870v1)
Cao et al. (2026-08-31). Contribution: improves 3D Gaussian Splatting segmentation boundaries without per-scene training. Relevance: advances 3D scene understanding relevant to perception and navigation.

#### [Motion-Saliency Complementary Masked Modeling for Point Cloud Video Understanding](http://arxiv.org/abs/2608.30279v1)
Wang et al. (2026-08-31). Contribution: proposes masked modeling with curriculum motion and saliency for point-cloud video self-supervised learning. Relevance: strengthens dynamic 3D perception for embodied agents.

#### [Lucida: Parse, Generate, and Place for Composable Real-to-Sim Scene Modeling](http://arxiv.org/abs/2608.30821v1)
Qin et al. (2026-08-31). Contribution: recovers indoor scenes as editable object assets for simulation-ready embodied AI environments. Relevance: supports 3D scene understanding and sim-to-real transfer for embodied agents.

## Cross-Topic Signals

- **Frozen-model memory and correction**: AGM adds memory to frozen VLA policies, while Training-Free Action Correction patches VLA failures; this mirrors continual TTA methods that adapt frozen VLMs under shift.
- **Long-horizon evaluation decomposes into skills**: E-Commerce Bench, Behavior-Skill, ATLAS, and CAST all move beyond aggregate success rates toward skill-level or subgoal-level diagnosis.
- **Temporal/4D structure is emerging across modalities**: Temporal Forcing and DriftingVLA inject temporal structure into VLA action generation, while Motion-Saliency does the same for point-cloud video self-supervision.
- **Compression/pruning as an agent-efficiency lever**: Centering before Pruning reduces LVLM visual tokens, and SkillZip Pro compresses agent skills — both connect model compression to deployment efficiency.
#### - **Self-improvement loops appear across reasoning, driving, and embodied agents**: Beyond Uncertainty, What Emerges and What Breaks in Self-Play Driving, PRACTICE, and SkillZip Pro all treat the agent as an evolving policy over time.

## Priority Reading

#### **[Temporal Forcing: 4D Representation Alignment for Vision-Language-Action Models](http://arxiv.org/abs/2608.30643v1)** — Directly targets observation aliasing in long-horizon VLA manipulation, a central robustness problem for embodied agents.
#### **[Scaffolding Foundation Models into Physical-World Agents Pushes the Frontier of Long-Horizon Navigation](http://arxiv.org/abs/2608.30396v1)** — Offers a concrete architecture bridging VLM planning and closed-loop navigation, highly relevant across agent and embodiment interests.
#### **[When LLM Meets Tree Search: A Systematic View of Inference as Search in Large Language Models](http://arxiv.org/abs/2608.30395v1)** — Useful conceptual framing for agent test-time scaling and deciding where inference compute should be allocated.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*