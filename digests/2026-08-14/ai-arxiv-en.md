# Lab Research Topics Radar 2026-08-14

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 27 new + 12 seen in the last 14 days | Generated: 2026-08-13 22:34 UTC

---

## 1. Today's Overview

- **LLM Agent Engineering**: 10 new papers covering trajectory-level uncertainty, backdoor decontamination, skill hijacking/harm, tool-use recovery, GPU-serving control, skill-learning economics, specialist agents, and persuasion robustness.
- **Agent Test-Time Scaling and Self-Improvement**: 5 new papers plus 1 repeated paper, spanning on-policy distillation, claim-level verification, self-evolving embodied agents, therapeutic LLM safety/environment trade-offs, and agentic optimization.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: New papers include a single-stream autoregressive VLA, in-context demonstration generalization, logistics planning, humanoid manipulation, dexterous-hand data, driving control, and world generation for embodied AI.
- **Embodied Navigation**: New aerial VLN planning paper, plus repeated navigation and scene-reasoning papers.
- **LLM Pruning and Inference Optimization**: 1 new tokenization/vocabulary-size paper, 1 repeated token-pruning paper.
- **Multimodal LLM Pruning**: No new papers today; 1 repeated visual-token-pruning paper.
- **Continual Learning**: 1 new replay-theory paper, 1 repeated agentic-memory paper.
- **Event-Based Vision**: No new papers today; 2 repeated event-camera papers.
- **3D Point Cloud Perception**: 2 new papers plus 1 repeated spatial-reasoning distillation paper.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## 2. Research Areas

## LLM Agents and Multi-Agent

### LLM Agent Engineering

#### [Beyond Single-Turn Confidence: Trajectory-Adapted Uncertainty Quantification for LLM Agents](http://arxiv.org/abs/2608.11552v1)
Bouchard, Chauhan (2026-08-12) — Proposes trajectory-adapted uncertainty quantification for LLM agents instead of single-turn confidence. Relevance: Improves reliability in interactive multi-step agent trajectories.

#### [Backdoor Decontamination Dynamics in LLM Agents](http://arxiv.org/abs/2608.11295v1)
Huang, Puri, Boisvert et al. (2026-08-11) — Studies installing known backdoors to decontaminate unknown fine-tuned backdoors in open-weight agents. Relevance: Addresses a critical security failure mode for deployed LLM agents.

#### [Convergent Detour Hijacking: Task-Preserving Resource Amplification in Skill-Based LLM Agents](http://arxiv.org/abs/2608.12273v1)
Liu, Li, Tang et al. (2026-08-12) — Shows untrusted third-party skills can hijack agents through progressive-disclosure design while preserving the original task. Relevance: Exposes a new attack surface in skill-based agent pipelines.

#### [Agent Skills Can Be Harmful: An Empirical Study of Skill-Induced Failures in LLM Agents](http://arxiv.org/abs/2608.11888v1)
Dong, Gao, Li et al. (2026-08-12) — Empirically catalogs skill-induced failures in LLM agents. Relevance: Informs when skills should be trusted, selected, or rejected.

#### [Ready Cohorts: Bounding GPU Opportunity and Avoiding Host Round Trips in LLM-Agent Control](http://arxiv.org/abs/2608.12123v1)
Chen (2026-08-12) — Proposes batching agent-control transitions into ready cohorts for GPU execution while avoiding host round trips. Relevance: Optimizes the serving and control path of LLM-agent services.

#### [From Numbers to Judgment: Specialist LLM Agents and Reinforcement Learning for European Listed Real Estate](http://arxiv.org/abs/2608.11381v1)
Taghavi, Bhavani (2026-08-11) — Introduces Larix, a framework of lens-aligned specialist LLM agents with RL for financial analysis. Relevance: Demonstrates domain-specific agent specialization and judgment.

#### [ToolHazard: Scaling Adversarial Environments for Security Evaluation and Alignment of LLM-based Agents](http://arxiv.org/abs/2608.11878v1)
Mou, Yang, Yin et al. (2026-08-12) — Builds scalable adversarial environments for tool-using LLM agents. Relevance: Provides testbeds for indirect prompt injection and alignment evaluation.

#### [Better, Faster, Stronger: Programmatic Skill Learning Best Reduces Agent Cost](http://arxiv.org/abs/2608.11338v1)
Huang, Wang, Wang et al. (2026-08-11) — Investigates which skill-learning strategies improve cost effectiveness, not just performance. Relevance: Guides cost-aware adaptation of agents to new domains.

#### [Learning to Persuade Exposes How Easily LLMs Abandon Correct Beliefs](http://arxiv.org/abs/2608.11624v1)
Bozdag, Acikgoz, Tur et al. (2026-08-12) — Shows LLMs abandon correct beliefs under learned persuasive pressure. Relevance: Highlights robustness risks in collaborative and adversarial agent interactions.

#### [Retry, Switch, or Abstain? Learning Strategy-Aware Tool-Use Policies via Controlled Error Injection](http://arxiv.org/abs/2608.11977v1)
Chen, Nguyen, Zhang et al. (2026-08-12) — Learns strategy-aware tool-use policies for transient, persistent, and silent failures. Relevance: Improves agent recovery behavior under realistic tool unreliability.

### Agent Test-Time Scaling and Self-Improvement

#### [Towards Understanding On-Policy Distillation through the Lens of Test-Time Scaling](http://arxiv.org/abs/2608.11829v1)
Ge, Zhang, Huang et al. (2026-08-12) — Re-examines on-policy distillation as a post-training technique for reasoning enhancement. Relevance: Clarifies when distillation genuinely improves student reasoning under test-time scaling.

#### [Self-Evolving Embodied Agents via Skill-Harness Evolution](http://arxiv.org/abs/2608.11350v1)
Wang, Ma, Chang et al. (2026-08-11) — Evolves the skills, context, and execution harness around embodied foundation models. Relevance: Extends self-improvement beyond weight updates for embodied agents.

#### [Claim-Level Reliability Assessment for Efficient Test-Time Reasoning](http://arxiv.org/abs/2608.11994v1)
Xu, Wang, Liu et al. (2026-08-12) — Reallocates test-time compute from extra sampling to claim-level falsification. Relevance: Offers a more efficient test-time scaling strategy for reasoning traces.

#### [Quantifying the Relationship Between Clinical Safety and Environmental Impact in Therapeutic LLMs](http://arxiv.org/abs/2608.11830v1)
Safaei, Vowels, Vowels et al. (2026-08-12) — Links clinical safety scores with life-cycle environmental cost estimates. Relevance: Quantifies safety-versus-cost trade-offs in safety-critical LLM deployment.

#### [Beyond Trial-and-Error: Agentic Optimization for Image-to-Video Adherence](http://arxiv.org/abs/2608.12290v1)
Tyagi, Boinpally, Chen et al. (2026-08-12) — Uses agentic optimization to improve image-to-video adherence in black-box models. Relevance: Applies agentic self-improvement to generation workflows.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** — [ThinkRetrieve: Retrieval-Augmented Reasoning Traces for Test-Time Scaling](http://arxiv.org/abs/2608.10928v1)
Singh, Ghosal, Gharat et al. (2026-08-11) — Retrieval-augmented reasoning traces to counter diminishing returns from long chain-of-thought. Relevance: Directly targets improving test-time scaling efficiency.

## Embodied Intelligence

### Vision-Language-Action Models

#### [StellaVLA: In-Context Structured Demonstration for Generalizable Vision-Language-Action Models](http://arxiv.org/abs/2608.11671v1)
Xu, Wang, Wang et al. (2026-08-12) — Uses structured in-context demonstrations to improve VLA out-of-distribution generalization. Relevance: Reduces the need for data collection and fine-tuning in new settings.

#### [G0.5: One Autoregressive Stream for Robot Reasoning and Action](http://arxiv.org/abs/2608.11739v1)
Liu, Dong, Ye et al. (2026-08-12) — Proposes a single autoregressive transformer decoder for robot reasoning and action. Relevance: Challenges the dominant VLM-plus-flow-matching action expert VLA recipe.

#### [HUGIN: Enhancing Vision-Language Planning for Autonomous Logistics Sorting](http://arxiv.org/abs/2608.11692v1)
Sun, Zhou, Liu et al. (2026-08-12) — Formulates logistics sorting as joint multi-scene understanding with vision-language planning. Relevance: Extends VLA-style reasoning to an industrial embodied AI setting.

#### [Policy-Induced Hand Priors in Humanoid Dual-Arm Manipulation: Diagnosing and Mitigating Initial-Pose Dependence](http://arxiv.org/abs/2608.11769v1)
Jung, Park (2026-08-12) — Diagnoses initial-pose dependence and inappropriate hand selection in humanoid dual-arm VLA policies. Relevance: Reveals hidden failure modes in VLA-based manipulation.

#### [HandEdit: A Unified Benchmark for Egocentric Human-to-Robot Dexterous Hand Image Editing](http://arxiv.org/abs/2608.12122v1)
Yang, Jiao, Zhong et al. (2026-08-12) — Provides a benchmark for editing egocentric human hand images into robot-compatible dexterous hand images. Relevance: Enables scalable data generation for dexterous VLA manipulation.

#### [Language-Structured Relational Q-Learning for Threat-Aware Control in Safety-Critical Driving](http://arxiv.org/abs/2608.11498v1)
Humnabadkar, Zhang, Behera (2026-08-11) — Uses language-structured relational Q-learning for threat-aware driving control. Relevance: Tests whether language-structured training yields adaptive VLA-style control policies.

#### [D3D-GEN: Robot-Aware Domain-Grounded Interactive 3D World Generation for Social Robotics](http://arxiv.org/abs/2608.11876v1)
Do, Scherbyna, Nguyen et al. (2026-08-12) — Generates robot-aware interactive 3D worlds for embodied AI training and validation. Relevance: Provides simulation environments useful for VLA-based social robotics systems.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** — [XCoT-VLA: Executable Chain-of-Thought for Vision-Language-Action Driving](http://arxiv.org/abs/2608.10976v1)
Foundation Model Team, XPeng Inc (2026-08-11) — Introduces executable chain-of-thought for real-time VLA driving control. Relevance: Optimizes CoT for latency-sensitive autonomous driving.

### Embodied Navigation

#### [DreamFly: Causal Memory and Receding-Horizon Diffusion Planning for Aerial Vision-Language Navigation](http://arxiv.org/abs/2608.12308v1)
Deng, Xu (2026-08-12) — Proposes causal memory and receding-horizon diffusion planning for aerial VLN under partial observability. Relevance: Addresses time-dependent planning and goal detection in embodied aerial navigation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** — [AECNav: Active Evidence Consolidation for Efficient Zero-Shot Open-Vocabulary Object Navigation](http://arxiv.org/abs/2608.10817v1)
Liu, Ling, Liu et al. (2026-08-11) — Active evidence consolidation reduces latency and improves accuracy in open-vocabulary object navigation. Relevance: Directly improves zero-shot embodied navigation efficiency.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** — [CausalSplat: Towards Comprehensive Hierarchical Reasoning in 3D Gaussian Splatting](http://arxiv.org/abs/2608.11150v2)
Ding, Song, Chen et al. (2026-08-11) — Advances hierarchical reasoning over 3DGS beyond explicit queries. Relevance: Strengthens scene reasoning needed for embodied navigation and interaction.

## Model Compression and Continual Learning

### LLM Pruning and Inference Optimization

#### [Lifecycle-Optimal Tokenization: Vocabulary Size as a Deployment-Regime-Dependent Infrastructure Parameter](http://arxiv.org/abs/2608.11361v1)
Mittal, Gubrani, Kakollu (2026-08-11) — Treats tokenizer vocabulary size as a serving-regime-dependent infrastructure parameter. Relevance: Directly informs deployment-cost optimization for LLM serving.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** — [Putting Registers to Work: Task Registers for Token Pruning in Vision Transformers](http://arxiv.org/abs/2608.10989v1)
Cao, Jaber, Yuan et al. (2026-08-11) — Uses task registers to transfer token-pruning policies across vision tasks. Relevance: Connects token-pruning policy design to inference optimization.

### Multimodal LLM Pruning

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** — [When Vision Becomes Text: Visual Token Pruning via Cross-Modal Residual Guidance in VLMs](http://arxiv.org/abs/2608.10489v1)
Ou, Song, Zhou et al. (2026-08-11) — Prunes visual tokens using cross-modal residual guidance. Relevance: Reduces visual-token inference cost in multimodal LLMs.

### Continual Learning

#### [Drift and Dependence: Layer-wise Information-Theoretic Bounds for Replay-Based Continual Learning](http://arxiv.org/abs/2608.11690v1)
Gong, Zhang, Wen et al. (2026-08-12) — Derives layer-wise information-theoretic generalization bounds for replay-based continual learning. Relevance: Provides theoretical understanding of why replay mitigates catastrophic forgetting.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** — [Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding](http://arxiv.org/abs/2608.11095v1)
Chakrabarti (2026-08-11) — Analyzes unbounded growth of agentic coding memory files as "catastrophic remembering." Relevance: Connects continual-learning memory pathologies to agentic software engineering.

## Visual Perception

### Event-Based Vision

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** — [Static in Frames, Dynamic in Events: Rethinking Features in Event Cameras as Motion Cues](http://arxiv.org/abs/2608.11075v1)
Araghi, van Gemert, Tomen (2026-08-11) — Reframes event-camera features as motion cues rather than static intensity signals. Relevance: Guides feature extraction for downstream event-based perception tasks.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** — [Bridging Event Streams and DiT: Event-Guided Video Frame Interpolation](http://arxiv.org/abs/2608.10479v2)
Lin, Yu, Ji et al. (2026-08-11) — Uses event streams to guide DiT-based video frame interpolation. Relevance: Improves temporal consistency and motion handling in event-enhanced vision.

### 3D Point Cloud Perception

#### [STAR: A Spatial-Topology Aware Routing Framework for Generalizable 3D Scene Understanding](http://arxiv.org/abs/2608.11699v1)
Xing, Wang, Shi (2026-08-12) — Introduces spatial-topology aware routing for generalizable 3D scene understanding with MoE. Relevance: Addresses cross-modal topological discrepancies in 3D perception.

#### [Map-Det3D: Metric Feed-Forward 3D Reconstruction Prior for Multi-view 3D Object Detection from Streaming Inputs](http://arxiv.org/abs/2608.12179v1)
Yang, Piccinelli, Rota Bulò et al. (2026-08-12) — Uses metric feed-forward 3D reconstruction priors for monocular multi-view 3D detection. Relevance: Enables 3D object detection for embodied agents without depth sensors.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** — [Multi-View Relational Distillation for Spatial Reasoning with Vision-Language Models](http://arxiv.org/abs/2608.10864v1)
Nguyen, Shim, Kim et al. (2026-08-11) — Distills relational spatial constraints into VLMs to improve geometry grounding. Relevance: Strengthens VLM 3D spatial representations for embodied perception.

## 3. Cross-Topic Signals

- **Skill and tool reliability is a shared failure axis**: Papers on skill hijacking, skill-induced failures, and tool-use recovery all point to the same need for robust, safety-aware agent skill ecosystems.
- **Test-time compute reallocation is spreading beyond LLM reasoning**: Claim-level verification, retrieval-augmented reasoning traces, and agentic image-to-video optimization all reframe test-time scaling as selective resource allocation.
- **Inference efficiency connects pure LLMs, VLMs, and ViTs**: Vocabulary-size optimization, visual-token pruning, and task-register pruning together show a broader trend toward deployment-aware token efficiency.
- **Memory pathologies appear in both continual learning and agentic systems**: Replay-buffer theory and CLAUDE.md growth both reflect stability-plasticity tensions, suggesting cross-pollination between continual learning and agent memory design.

## 4. Priority Reading

1. [StellaVLA](http://arxiv.org/abs/2608.11671v1) — Targets VLA out-of-distribution generalization without fine-tuning, directly reducing deployment cost for embodied agents.
2. [G0.5](http://arxiv.org/abs/2608.11739v1) — Proposes a fundamentally simpler autoregressive VLA architecture that could reshape how robot reasoning and action are combined.
3. [Convergent Detour Hijacking](http://arxiv.org/abs/2608.12273v1) — Reveals a practical and currently underexplored security vulnerability in third-party skill-based LLM agents.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*