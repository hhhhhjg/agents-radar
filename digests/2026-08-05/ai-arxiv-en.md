# Lab Research Topics Radar 2026-08-05

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 44 new + 0 seen in the last 14 days | Generated: 2026-08-04 22:57 UTC

---

## Today's Overview

- **LLM Agent Engineering**: 10 new papers. Advances center on memory arbitration, real-time failure detection/repair, harness evolution from failure trajectories, composable skill graphs, policy-bound enterprise agents, and resource-constrained post-training.
- **Agent Test-Time Scaling and Self-Improvement**: 6 new papers. Themes include consistency-based selection auditing for vision-language test-time scaling, self-play for search agents, co-evolving knowledge graphs, test-time latent reasoning, and a controlled negative result for adversarial self-play.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: 10 new papers. Progress focuses on long-horizon execution state, instruction generalization, positional blind spots, action-chunk trajectory priors, multi-camera policies, mobile manipulation, and VLA failure diagnostics.
- **Embodied Navigation**: 4 new candidates; the directly relevant advances are aerial object-oriented VLN and endoscopic world-action navigation. Two other matched MLLM-efficiency papers are tangential.
- **LLM Pruning and Inference Optimization**: 2 new relevant papers on budgeted replanning for embodied agents and a linear-retention vision-language bridge for memory-efficient inference.
- **Multimodal LLM Pruning**: 2 new papers on visual token pruning and differentiable token selection in VLMs/MLLMs.
- **Continual Learning**: 10 new papers spanning medical segmentation continual learning, growing/elastic networks, PEFT security and uncertainty, federated adaptation, AIGV detection, and geospatial cross-sensor fine-tuning.
- **Event-Based Vision**: 1 new paper on voxel-guided event-cloud attribution.
- **3D Point Cloud Perception**: 1 new candidate (PromptPath), but its abstract is about prompt-adaptive in-context learning rather than point cloud; treated as a weak match.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [MemArbiter: Decision-Time Memory Arbitration for Long-Horizon LLM Agents](http://arxiv.org/abs/2608.02113v1)
J. Dong et al., 2026-08-03. Proposes arbitrating which retained memories should drive the current decision in long-horizon tasks. Directly targets memory organization and prioritization in agent scaffolding.

#### [Harness-R1: Learning to Edit Executable Runtime Harnesses from Agent Failure Trajectories](http://arxiv.org/abs/2608.02276v1)
Shao et al., 2026-08-03. Learns to improve agent harnesses from accumulated failure trajectories without weight updates. Core to practical LLM-agent engineering.

#### [Real-Time Detection and Repair of LLM Agent Failures](http://arxiv.org/abs/2608.02464v1)
Dubey, 2026-08-03. Detects and repairs agent failures from step telemetry at runtime. Reduces the cost of supervising LLM agents mid-episode.

#### [SkillTrace: Traversing a Query-Skill Graph for Composable LLM Agents](http://arxiv.org/abs/2608.02356v1)
Yao et al., 2026-08-03. Formulates skill composition as traversal over a query-skill graph. Improves selection of complete executable skill chains.

#### [HarnessCompass: Guiding Automatic Harness Evolution toward Generalizable and Effective Agent Harnesses](http://arxiv.org/abs/2608.01918v1)
L. Zhang et al., 2026-08-03. Adds guidance to automatic harness evolution from agent-environment interactions. Relevant to systematic agent-harness design.

#### [Beyond Solution-Centric Search: Adaptive Inquiry and Knowledge Revision for Autonomous ML Engineering](http://arxiv.org/abs/2608.02143v1)
S. Fu et al., 2026-08-03. Proposes adaptive inquiry and knowledge revision for long-horizon ML engineering under budget constraints. Relevant to agentic research workflows.

#### [Cooperative Coevolution for Resource-Constrained Agentic LLM Post-Training](http://arxiv.org/abs/2608.02391v1)
Z. Wang et al., 2026-08-03. Uses cooperative coevolution and evolution strategies for memory-efficient agent post-training. Relevant to resource-constrained agent improvement.

#### [FRAMES: Guarded and Dual-Objective Skill Evolution for Agents in Policy-Governed Enterprise Workflows](http://arxiv.org/abs/2608.01772v1)
X. Wang et al., 2026-08-03. Evolves agent skills under policy constraints and sparse operational feedback. Relevant to auditable enterprise agents.

#### [ParEvalLayer: When Partial LLM-Agent Evaluations Support a Decision](http://arxiv.org/abs/2608.02444v1)
Huang & Shen, 2026-08-03. Determines when partial benchmark results support the same conclusion as full evaluation. Relevant to efficient agent evaluation.

#### [From Profiling to Synthesis: Benchmarking Implicit Behavioral Alignment in Personalized LLM Agents](http://arxiv.org/abs/2608.02171v1)
Song et al., 2026-08-03. Benchmarks implicit behavioral alignment in personalized agents beyond static preferences. Views personalization as agent-level behavioral synthesis.

### Agent Test-Time Scaling and Self-Improvement

#### [GradCuit: Credit-Assigned Gradient Flow Enables Robust and Interpretable Test-Time Latent Reasoning](http://arxiv.org/abs/2608.02585v1)
Z. Yu et al., 2026-08-03. Assigns credit through gradient flow for optimizing latent reasoning states at test time. Directly extends test-time scaling and latent self-improvement.

#### [It's the Decoding Format, Not the Perturbation: Auditing Consistency-Based Selection for Vision-Language Test-Time Scaling](http://arxiv.org/abs/2608.01207v1)
Zheng & Kurban, 2026-08-02. Shows that consistency-based selection in VLM test-time scaling is driven by decoding format, not perturbation. Informs when self-verification selection is valid.

#### [SearchMaster: Grounded and Regulated Self-Play for Search Agents](http://arxiv.org/abs/2608.01822v1)
Tan et al., 2026-08-03. Generates grounded search tasks and trajectories through regulated self-play. Provides self-improvement data for multi-hop search agents.

#### [CoEvoKG: Co-Evolving Knowledge Graphs with Self-Evolving Search Agents](http://arxiv.org/abs/2608.01904v1)
Z. Li et al., 2026-08-03. Turns knowledge graphs into verifiable tasks and retains successful search knowledge. Enables self-evolving search agents.

#### [Does the Competitive Component of Adversarial Self-Play Improve Legal Reasoning? A Controlled Negative Result](http://arxiv.org/abs/2608.01559v1)
Kim, 2026-08-03. Tests a verifiable survival reward for adversarial self-play in legal reasoning and reports a negative result. Important evidence on self-play limits.

#### [Language Equality has a Price: A Systematic Investigation of Multi-turn LLM Performance for EU-24+](http://arxiv.org/abs/2608.01395v1)
Hakimov et al., 2026-08-02. Evaluates LLM agents in multi-turn, programmatically scored dialogue games across 30 languages. Provides a multilingual benchmark for agent self-play behavior.

## 具身智能

### Vision-Language-Action Models

#### [ChainVLA: Chaining Vision-Language-Action Queries through a Unified Execution State for Long-Horizon Manipulation](http://arxiv.org/abs/2608.02326v1)
Y. Huang et al., 2026-08-03. Maintains a unified execution state across VLA queries instead of replanning from scratch. Directly targets long-horizon manipulation.

#### [Demystifying When and Why VLAs Fail in Contact-Rich Tasks and How to Fix Them](http://arxiv.org/abs/2608.01402v1)
Parés-Morlans et al., 2026-08-02. Analyzes VLA failure modes in contact-rich manipulation and proposes fixes. Provides actionable diagnostics for VLA robustness.

#### [Grounded Semantic Re-Binding for Robust Instruction Generalization in Vision-Language-Action Models](http://arxiv.org/abs/2608.02497v1)
Yin & Zhang, 2026-08-03. Identifies architectural causes of VLA brittleness to paraphrased instructions and proposes grounded semantic re-binding. Improves instruction generalization without data scaling.

#### [Look Where It Matters: Adaptive Visual Refinement for Vision-Language-Action Models](http://arxiv.org/abs/2608.02197v1)
Cui et al., 2026-08-03. Uncores attention artifacts in VLA vision encoders and adaptively refines visual features. Targets spatial precision in manipulation.

#### [Uncovering and Mitigating Positional Blind Spots in Vision-Language-Action Models](http://arxiv.org/abs/2608.01573v1)
An et al., 2026-08-03. Shows VLA competence is not spatially uniform and mitigates positional blind spots. Relevant to workspace-coverage evaluation.

#### [Hermite Curves as Trajectory Priors for Vision-Language-Action Models](http://arxiv.org/abs/2608.01265v1)
Lv et al., 2026-08-02. Uses Hermite curves to structure action chunks as smoother trajectory priors. Addresses jagged motion and boundary discontinuity.

#### [Multi-View Unified Camera Fields: Geometry-Shaped Action-Facing Representations for RGB-Only Multi-Camera VLA Policies](http://arxiv.org/abs/2608.01826v1)
J. Yang et al., 2026-08-03. Fuses multi-camera observations into geometry-shaped action-facing representations. Improves multi-camera VLA policies under occlusion.

#### [DreamTrajectory: Trajectory-Guided Action Generation with World Model Alignment for Mobile Manipulation](http://arxiv.org/abs/2608.01381v1)
Z. Yang et al., 2026-08-02. Aligns VLA action generation with world-model trajectory guidance for mobile manipulation. Addresses base-arm coordination.

#### [Weights or Skills? A Survey of Robot-Learning Techniques: from Action-Predicting Weights to Robots that Write their Own Skills](http://arxiv.org/abs/2608.01851v1)
Jena et al., 2026-08-03. Surveys robot learning across VLA-style frozen weights and executable skill-writing agents. Frames the broader VLA design space.

### Embodied Navigation

#### [FreqNav: Stage-Wise Frequency Routing for Object-Oriented Aerial Vision-Language Navigation](http://arxiv.org/abs/2608.00970v1)
Tang et al., 2026-08-02. Routes perceptual priorities by frequency stage for object-oriented aerial VLN. Directly addresses long-horizon, closed-loop target search and landing.

#### [EndoWAM: A Grounded World-Action Model for Generalizable Endoscopic Navigation](http://arxiv.org/abs/2608.01221v1)
Lin et al., 2026-08-02. Learns a grounded world-action model for endoscopic navigation under tissue deformation. Targets robust clinical embodied navigation.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [When Replanning Becomes the Bottleneck: Budgeted Replanning for Embodied Agents](http://arxiv.org/abs/2608.01428v1)
Liu et al., 2026-08-02. Introduces budgeted replanning to reduce LLM-based replanning latency in embodied agents. Aligns with LLM inference optimization for agent control loops.

#### [Linear Multi-Timescale Retention as a Memory-Efficient Vision-Language Bridge](http://arxiv.org/abs/2608.01614v1)
Yeafi et al., 2026-08-03. Substitutes Softmax attention with linear multi-timescale retention for O(N) memory in vision-language models. Reduces inference cost for high-resolution visual inputs.

### Multimodal LLM Pruning

#### [ET-Prune: Evidence-Aware Dynamic Budgeting for Visual Token Pruning in Text-Rich MLLMs](http://arxiv.org/abs/2608.01979v1)
Ding et al., 2026-08-03. Allocates token-pruning budgets dynamically based on OCR evidence and question relevance. Cuts MLLM inference cost without dropping decisive visual tokens.

#### [DiffPrune: differentiable information throttling for token pruning in vision-language models](http://arxiv.org/abs/2608.01985v1)
He et al., 2026-08-03. Uses differentiable information throttling instead of Gumbel-Softmax for visual token selection. Improves trainability of token pruning in VLMs.

### Continual Learning

#### [UCBound-Net: Uncertainty-Guided Boundary-Aware Continual Learning for Domain-Incremental Ultrasound Segmentation](http://arxiv.org/abs/2608.01518v1)
M.A. Rahman, 2026-08-02. Uses uncertainty and boundary awareness to mitigate catastrophic forgetting in ultrasound segmentation. Directly targets domain-incremental medical continual learning.

#### [Plasticity of Growing and Elastic Neural Networks in Online Continual Learning](http://arxiv.org/abs/2608.01475v1)
Kong & Sutton, 2026-08-02. Studies growing and elastic networks' plasticity in online continual learning. Informs architecture-level CL strategy.

#### [Learning What to Remember: Test-Time Training via Context Distillation](http://arxiv.org/abs/2608.01672v1)
Z. Wang et al., 2026-08-03. Uses context distillation to select what to retain during test-time training for long-context modeling. Connects online parameter updates to memory preservation.

#### [Two-Stage Bengali Sentiment Classification: Domain Adaptation Through Continual Learning and Parameter-Efficient Fine-Tuning](http://arxiv.org/abs/2608.01471v1)
Rahman et al., 2026-08-02. Combines continual pretraining and PEFT for low-resource sentiment classification. Applies CL/PEFT to domain adaptation.

#### [SphereVideo: Prototype-anchored Hyperspherical Boundary for Continual AI-generated Video Detection](http://arxiv.org/abs/2608.01334v1)
F. Li et al., 2026-08-02. Anchors hyperspherical boundaries to prototypes for continual AIGV detection. Addresses CL for emerging generative models.

#### [SPECTRA: Band-Routed Embedding and Stage-Wise LoRA for Cross-Sensor Fine-Tuning of Geospatial Foundation Models](http://arxiv.org/abs/2608.01751v1)
X. Li et al., 2026-08-03. Routes spectral bands and uses stage-wise LoRA for cross-sensor GeoFM adaptation. Relevant to continual/fine-grained adaptation across sensor domains.

#### [EulerLoRA: Rank-Driven Jump Dynamics for Calibrated Parameter-Efficient Fine-Tuning](http://arxiv.org/abs/2608.01142v1)
Anumasa & Liu, 2026-08-02. Extends LoRA into stochastic trajectories for predictive uncertainty in PEFT. Relevant to calibrated parameter-efficient adaptation.

#### [Z-PEFT: Zero-shot Backdoor Detection in Parameter-Efficient Fine-Tuning via Canonical Spectral Signatures](http://arxiv.org/abs/2608.02271v1)
Pitzalis et al., 2026-08-03. Detects backdoors in PEFT adapters using canonical spectral signatures. Relevant to safe reuse of adapters in continual fine-tuning pipelines.

#### [MineGrad: Gradient Inversion Attacks on LoRA Fine-Tuning](http://arxiv.org/abs/2608.01521v1)
Sami et al., 2026-08-02. Shows gradient inversion attacks against LoRA fine-tuning in federated settings. Relevant to privacy/security of continual federated adaptation.

#### [FedChronos: Federated Fine-Tuning of Time-Series Foundation Models for Privacy-Preserving Commodity Price Forecasting](http://arxiv.org/abs/2608.01290v1)
Sharma et al., 2026-08-02. Federated fine-tuning of time-series foundation models without centralizing data. Relevant to decentralized continual adaptation.

## 视觉感知

### Event-Based Vision

#### [VGER: Voxel-Guided Global Event Ranking for Event Cloud Attribution](http://arxiv.org/abs/2608.01470v1)
Jiang et al., 2026-08-02. Proposes voxel-guided global event ranking for attributing sparse asynchronous event streams. Directly advances event-based perception and interpretability.

## Cross-Topic Signals

- PEFT/LoRA appears across Continual Learning, PEFT security, and geospatial fine-tuning; adapter safety and calibration are becoming cross-cutting concerns.
- Test-time optimization and self-play recur in both LLM-agent scaling (GradCuit, SearchMaster, CoEvoKG) and VLA policy improvement (ChainVLA, DreamTrajectory).
- Efficiency methods span visual token pruning in MLLMs and memory-efficient vision-language bridges, with the same compression ideas being applied to embodied perception and VLA pipelines.
- Failure-driven improvement is shared across agent engineering and VLA research: LLM agent harnesses are edited from failure trajectories (Harness-R1), while VLA papers analyze when and why policies fail (Demystifying VLAs Fail).

## Priority Reading

- **[ChainVLA](http://arxiv.org/abs/2608.02326v1)** — Full read: introduces a unified execution state directly attacking long-horizon VLA limitations, a central lab interest.
- **[Harness-R1](http://arxiv.org/abs/2608.02276v1)** — Full read: makes agent harnesses learnable from failure trajectories without weight updates, a practical route for LLM-agent improvement.
- **[GradCuit](http://arxiv.org/abs/2608.02585v1)** — Full read: offers a new gradient-flow mechanism for test-time latent reasoning, highly relevant to agent test-time scaling and self-improvement.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*