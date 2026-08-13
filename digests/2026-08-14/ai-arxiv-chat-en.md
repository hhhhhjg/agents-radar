# Lab Research Topics Radar 2026-08-14

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 14 new + 0 seen in the last 14 days | Generated: 2026-08-13 22:34 UTC

---

## Today's Overview

- **LLM Agent Engineering**: Three new papers on agent reliability and security—trajectory-level uncertainty quantification, backdoor decontamination dynamics, and detour hijacking via third-party skills.
- **Agent Test-Time Scaling and Self-Improvement**: Three new works—on-policy distillation analysis, claim-level reliability assessment for test-time reasoning, and skill-harness evolution for embodied agents.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: Two highly relevant new papers (StellaVLA, G0.5), with additional embodied-planning work covered under navigation; progress on OOD robustness and unified reasoning/action streams.
- **Embodied Navigation**: New papers on aerial vision-language navigation (DreamFly) and embodied logistics sorting (HUGIN); STAR is covered under 3D point cloud perception.
- **LLM Pruning and Inference Optimization**: One new paper treats tokenizer vocabulary size as a deployment-dependent infrastructure parameter.
- **Multimodal LLM Pruning**: No new papers today.
- **Continual Learning**: One new information-theoretic analysis of replay-based continual learning.
- **Event-Based Vision**: No new papers today.
- **3D Point Cloud Perception**: New work on spatial-topology aware routing (STAR) and metric 3D reconstruction prior for detection (Map-Det3D).
- **3D Point Cloud Perception and Tracking**: No new papers today.

## Main Direction

### LLM Agent Engineering

#### [Beyond Single-Turn Confidence: Trajectory-Adapted Uncertainty Quantification for LLM Agents](http://arxiv.org/abs/2608.11552v1)
Authors: D. Bouchard, M. S. Chauhan | Date: 2026-08-12
Contribution: Proposes trajectory-adapted uncertainty quantification for interactive LLM agent trajectories rather than single-turn outputs.
Relevance: Directly addresses agent-level uncertainty, a core engineering need for reliable tool-use and multi-step decision-making.

#### [Backdoor Decontamination Dynamics in LLM Agents](http://arxiv.org/abs/2608.11295v1)
Authors: G. Huang, A. Puri, L. Boisvert et al. | Date: 2026-08-11
Contribution: Studies decontamination of fine-tuned LLM agents by installing known triggers when defenders do not know existing backdoors.
Relevance: Highlights practical security risks and remediation strategies for agent fine-tuning pipelines.

#### [Convergent Detour Hijacking: Task-Preserving Resource Amplification in Skill-Based LLM Agents](http://arxiv.org/abs/2608.12273v1)
Authors: J. Liu, R. Li, W. Tang et al. | Date: 2026-08-12
Contribution: Identifies a resource-amplification attack in which third-party skills steer LLM agents onto detours without breaking the final task.
Relevance: Points to a new exploit class for progressive-disclosure skill libraries, important for trustworthy agent engineering.

### Agent Test-Time Scaling and Self-Improvement

#### [Towards Understanding On-Policy Distillation through the Lens of Test-Time Scaling](http://arxiv.org/abs/2608.11829v1)
Authors: X. Ge, Z. Zhang, Y. Huang et al. | Date: 2026-08-12
Contribution: Re-examines on-policy distillation as a test-time scaling phenomenon rather than simple knowledge transfer from a stronger teacher.
Relevance: Reframes a popular post-training method and clarifies when and where to allocate compute for LLM reasoning.

#### [Claim-Level Reliability Assessment for Efficient Test-Time Reasoning](http://arxiv.org/abs/2608.11994v1)
Authors: S. Xu, W. Wang, S. Liu et al. | Date: 2026-08-12
Contribution: Introduces claim-level falsification, a training-free framework that redirects test-time compute from additional sampling to targeted verification.
Relevance: Offers a concrete compute-adaptive reasoning strategy aligned with test-time scaling objectives.

#### [Self-Evolving Embodied Agents via Skill-Harness Evolution](http://arxiv.org/abs/2608.11350v1)
Authors: P. Wang, Z. Ma, Y. Chang et al. | Date: 2026-08-11
Contribution: Evolves the skills, context, action interfaces, and execution harness around embodied foundation-model agents instead of only fine-tuning weights.
Relevance: Demonstrates self-improvement at the system level, expanding the notion of agent self-improvement beyond parameters.

### LLM Agent Societies
No new papers today.

## Main Direction

### Vision-Language-Action Models

#### [StellaVLA: In-Context Structured Demonstration for Generalizable Vision-Language-Action Models](http://arxiv.org/abs/2608.11671v1)
Authors: S. Xu, Y. Wang, Z. Wang et al. | Date: 2026-08-12
Contribution: Uses in-context structured demonstrations to prevent VLA performance collapse under out-of-distribution scene, viewpoint, or object changes.
Relevance: Directly targets VLA generalization without per-scenario fine-tuning, a central deployment bottleneck.

#### [G0.5: One Autoregressive Stream for Robot Reasoning and Action](http://arxiv.org/abs/2608.11739v1)
Authors: Y. Liu, Z. Dong, B. Ye et al. | Date: 2026-08-12
Contribution: Proposes a pretrained autoregressive VLA with a single transformer decoder that handles both reasoning and action, avoiding a separately trained flow-matching action expert.
Relevance: Unifying reasoning and action in one stream may simplify VLA training and improve decision-making efficiency.

### Embodied Navigation

#### [DreamFly: Causal Memory and Receding-Horizon Diffusion Planning for Aerial Vision-Language Navigation](http://arxiv.org/abs/2608.12308v1)
Authors: Y. Deng, F. Xu | Date: 2026-08-12
Contribution: Combines causal memory and receding-horizon diffusion planning for aerial vision-language navigation under partial observability.
Relevance: Extends perception-to-action VLA methods to aerial navigation with explicit temporal memory and planning.

#### [HUGIN: Enhancing Vision-Language Planning for Autonomous Logistics Sorting](http://arxiv.org/abs/2608.11692v1)
Authors: X. Sun, C. Zhou, K. Liu et al. | Date: 2026-08-12
Contribution: Formulates Joint Multi-Scene Understanding for logistics sorting and applies vision-language task planning over spatially disjoint camera views.
Relevance: Brings embodied spatial planning to an industrial setting, broadening navigation-like capabilities to non-mobile manipulation.

## Main Direction

### LLM Pruning and Inference Optimization

#### [Lifecycle-Optimal Tokenization: Vocabulary Size as a Deployment-Regime-Dependent Infrastructure Parameter](http://arxiv.org/abs/2608.11361v1)
Authors: R. Mittal, A. Gubrani, S. Kakollu | Date: 2026-08-11
Contribution: Shows that tokenizer vocabulary size should be optimized for the serving/deployment regime rather than fixed by convention at training time.
Relevance: Provides an infrastructure-level lever for LLM inference cost and latency, relevant to optimization-oriented work.

### Multimodal LLM Pruning
No new papers today.

### Continual Learning

#### [Drift and Dependence: Layer-wise Information-Theoretic Bounds for Replay-Based Continual Learning](http://arxiv.org/abs/2608.11690v1)
Authors: T. Gong, Z. Zhang, W. Wen et al. | Date: 2026-08-12
Contribution: Derives layer-wise information-theoretic generalization bounds for replay-based continual learning that account for drift and data dependence.
Relevance: Provides theoretical grounding for why replay works and how memory buffers should be designed in continual learning systems.

## Main Direction

### Event-Based Vision
No new papers today.

### 3D Point Cloud Perception

#### [STAR: A Spatial-Topology Aware Routing Framework for Generalizable 3D Scene Understanding](http://arxiv.org/abs/2608.11699v1)
Authors: M. Xing, X. Wang, Y. Shi | Date: 2026-08-12
Contribution: Introduces spatial-topology aware routing in a Mixture-of-Experts framework to unify 3D scene understanding across sensor modalities.
Relevance: Improves multi-domain 3D perception, supporting embodied agents that need robust scene understanding from varied point-cloud sources.

#### [Map-Det3D: Metric Feed-Forward 3D Reconstruction Prior for Multi-view 3D Object Detection from Streaming Inputs](http://arxiv.org/abs/2608.12179v1)
Authors: Y.-H. Yang, L. Piccinelli, S. Rota Bulò et al. | Date: 2026-08-12
Contribution: Uses a metric feed-forward 3D reconstruction prior to enable reliable monocular multi-view 3D object detection.
Relevance: Provides a depth-sensor-free 3D perception path for embodied agents, reducing cost and power while preserving metric grounding.

### 3D Point Cloud Perception and Tracking
No new papers today.

## Cross-Topic Signals

- **Skill-level abstraction is shared across security and self-improvement**: backdoor decontamination, detour hijacking, and skill-harness evolution all treat skills/harnesses as first-class objects, suggesting a common interface for both attacking and improving agents.
- **Test-time compute allocation is becoming trajectory-aware**: claim-level reliability, on-policy distillation analysis, and trajectory-level uncertainty all reframe agent quality as a function of where compute or verification is placed over a trajectory.
- **3D perception is converging with VLA design**: STAR and Map-Det3D emphasize structured 3D representations; paired with G0.5/StellaVLA, they point toward embodied systems that perceive metric scenes without relying on depth sensors.
- **Infrastructure choices are being linked to deployment regimes**: tokenization is recast as deployment-dependent, mirroring the test-time scaling theme of moving optimization from training-time defaults to serving-time adaptivity.

## Priority Reading

- **G0.5** — Highest architectural impact: if one autoregressive stream can replace a VLM plus separate action expert, it may reshape VLA training and inference.
- **Claim-Level Reliability Assessment** — Directly actionable test-time scaling: a training-free method that reallocates compute to verification, which is useful for LLM agents under budget constraints.
- **Convergent Detour Hijacking** — Novel attack surface on third-party skills; essential for any lab shipping skill-based LLM agents.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*