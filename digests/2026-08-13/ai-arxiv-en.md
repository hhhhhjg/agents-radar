# Lab Research Topics Radar 2026-08-13

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 37 new + 10 seen in the last 14 days | Generated: 2026-08-12 22:34 UTC

---

## Today's Overview

- **LLM Agent Engineering** — 10 new papers; progress on safety-harness evolution (SHE, SBCO), executable red-teaming and behavioral-safety benchmarks (REDAgentBench, ActBench), skill supply-chain backdoors (ElasticBack), agent routing (MERA), skill-based RL, and provenance-aware shared memory.
- **Agent Test-Time Scaling and Self-Improvement** — 6 new papers; verifier-free/consensus selection, retrieval-augmented reasoning traces, input-diversity test-time augmentation, tree-search idea guidance, and multi-agent social- reasoning tournaments.
- **LLM Agent Societies** — No new papers today.
- **Vision-Language-Action Models** — 10 new papers; executable chain-of-thought driving, VLA adversarial attacks, KV-cache reuse, action-language alignment, failure-aware memory, embodied 3DGS grounding, and human-centric embodied agents.
- **Embodied Navigation** — 7 new papers; active zero-shot object navigation, modality-agnostic spatial grounding, 3DGS causal/hierarchical reasoning, plus repeated UAV-VLN and interactive-dialogue navigation papers.
- **LLM Pruning and Inference Optimization** — 1 new paper on transferable task registers for token pruning; 1 repeated paper on Omni2LoRA.
- **Multimodal LLM Pruning** — 1 new paper on cross-modal residual guidance for visual token pruning.
- **Continual Learning** — 1 strongly relevant new paper on catastrophic remembering in agentic coding; two system-matched papers (fine-tuning/federated PEFT) are weak fits and omitted; 3 repeated papers remain relevant.
- **Event-Based Vision** — 2 new papers on motion-cue features and event-guided frame interpolation; 1 repeated pose-estimation solver.
- **3D Point Cloud Perception** — 1 new paper on multi-view relational distillation for 3D spatial reasoning; 2 repeated papers on damage classification and monocular 3D detection.
- **3D Point Cloud Perception and Tracking** — No new papers today.

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [REDAgentBench: Executable Red Teaming and Faithful Measurement of LLM Agent Systems](http://arxiv.org/abs/2608.10669v1)
Z. Chen et al. (2026-08-11). Proposes an executable red-teaming benchmark that measures safety-policy violations during agent execution. Relevance: directly targets the harness/tool interaction surface of LLM agents.

#### [SHE: Trajectory-driven Safety Harness Evolution for LLM Agents](http://arxiv.org/abs/2608.09885v1)
W. Qu et al. (2026-08-10). Evolves agent safety harnesses from execution trajectories instead of treating them as fixed artifacts. Relevance: provides a concrete mechanism for updating context, memory, tools, and permissions.

#### [ElasticBack: Stealthy Conditional Backdoor in LLM-Agent Skills via Coupled Trigger-Rule Optimization](http://arxiv.org/abs/2608.09577v1)
H. Sui et al. (2026-08-10). Introduces a conditional, stealthy backdoor attack into load-on-demand agent skills. Relevance: highlights supply-chain security risks in agent skill ecosystems.

#### [SBCO: Self-Supervised, Verifier-Grounded Harness Optimization For Planning Agents](http://arxiv.org/abs/2608.10157v1)
V. Kulkarni et al. (2026-08-10). Optimizes agent harnesses with verifier-grounded self-supervision for planning. Relevance: connects harness evolution to verifiable self-improvement.

#### [MERA: Model Evolution and Routing with Skill Adaptation for Agentic Systems at Scale](http://arxiv.org/abs/2608.10333v1)
Y. Yao et al. (2026-08-11). Routes heterogeneous model calls in agentic tasks to cheaper or stronger models with skill adaptation. Relevance: reduces inference cost while preserving agent reasoning quality.

#### [Bidirectional Context Self-Distillation for Reinforcement Learning of Skill-Based LLM Agents](http://arxiv.org/abs/2608.09555v1)
T. Pan et al. (2026-08-10). Uses bidirectional context distillation to help skill-based agents convert natural-language skills into actions. Relevance: improves skill-grounded policy learning for LLM agents.

#### [ActBench: Self-Evolving Benchmark of Behavioral Safety in Cowork Agents](http://arxiv.org/abs/2608.09476v1)
H. Yao et al. (2026-08-10). Evaluates behavioral safety from execution trajectories for cowork agents. Relevance: extends agent safety evaluation beyond final responses.

#### [MAP-Graph: Provenance-Aware Shared Memory for Multi-Agent Workflows](http://arxiv.org/abs/2608.10509v1)
Y. Wang et al. (2026-08-11). Adds provenance tracking to shared memory so summaries cannot conceal private, poisoned, or revoked sources. Relevance: addresses safe memory sharing in multi-agent workflows.

#### [Capability Is Not Propensity: Measuring Pressure-Robust Cooperative Behavior in Civic LLM Agents](http://arxiv.org/abs/2608.09485v1)
N.T. Shah et al. (2026-08-10). Separates what cooperative agents can do from what they do under pressure. Relevance: informs robust evaluation of dual-use civic agents.

### Agent Test-Time Scaling and Self-Improvement

#### [Consilience for Verifier-Free Test-Time Scaling](http://arxiv.org/abs/2608.09898v1)
L. Kong et al. (2026-08-10). Unifies verifier-free test-time scaling methods and analyzes how selection mechanisms work. Relevance: provides a common framework for agent self-improvement without external verifiers.

#### [Test-Time Scaling for CAD Generation via Verifier-Free Consensus Selection](http://arxiv.org/abs/2608.09706v1)
A. Haag et al. (2026-08-10). Uses consensus selection to choose CAD program samples when no ground-truth model exists. Relevance: concrete verifier-free TTS for generative agents.

#### [ThinkRetrieve: Retrieval-Augmented Reasoning Traces for Test-Time Scaling](http://arxiv.org/abs/2608.10928v1)
V. Singh et al. (2026-08-11). Retrieves supporting reasoning traces to counter diminishing returns in long chain-of-thought scaling. Relevance: improves reliability of longer test-time reasoning in agents.

#### [Test-Time Augmentation for LLMs: When Input Diversity Beats Output Diversity at Matched Compute](http://arxiv.org/abs/2608.09351v1)
N. Kozodoi et al. (2026-08-10). Shows input-diverse test-time augmentation can outperform output-diverse self-consistency at equal compute. Relevance: offers a cost-aware scaling strategy for deployed agents.

#### [Idea Search: Guiding Tree Search with Ideas to Explore Diverse Scientific Methods](http://arxiv.org/abs/2608.08958v1)
X.J. Wang et al. (2026-08-09). Guides LLM tree search with abstract ideas to avoid local optima in scientific method exploration. Relevance: improves diversity and efficiency of tree-search test-time scaling.

#### [Social Gym and SPaRTan: Benchmarking and Improving LLM Social Reasoning via Multi-Agent Game Tournaments](http://arxiv.org/abs/2608.09128v1)
K. He et al. (2026-08-10). Benchmarks social reasoning through multi-agent game tournaments and improves it with a self-play method. Relevance: connects multi-agent self-play to self-improvement.

## 具身智能

### Vision-Language-Action Models

#### [XCoT-VLA: Executable Chain-of-Thought for Vision-Language-Action Driving](http://arxiv.org/abs/2608.10976v1)
F.M. Team, XPeng Inc. (2026-08-11). Replaces open-ended natural-language CoT with executable chain-of-thought for real-time VLA driving. Relevance: directly addresses the latency/reasoning trade-off in VLA control.

#### [Hidden in Plain Sight: Diffusion-Based Unrestricted Robotic Attacks on Vision-Language-Action Models](http://arxiv.org/abs/2608.10393v1)
J. Han et al. (2026-08-11). Proposes diffusion-based unrestricted adversarial attacks against VLA robot policies. Relevance: exposes physical-world robustness risks in VLA manipulation.

#### [Neural Introspection Gating for Adaptive KV-Cache Reuse in Vision-Language-Action Models](http://arxiv.org/abs/2608.10824v1)
Z. Wu et al. (2026-08-11). Introduces adaptive gating to reuse KV representations for near-static visual tokens. Relevance: reduces real-time inference cost for autoregressive VLA models.

#### [Lost in Reconstruction: Aligning Action Representations with Language in Vision-Language-Action Models](http://arxiv.org/abs/2608.10484v1)
L. Wenjie et al. (2026-08-11). Aligns action representations with language semantics instead of raw L1/L2 action reconstruction. Relevance: improves action-verb grounding in VLA policies.

#### [DriveVLA-M0: Failure-Aware Memory Augmentation for Autonomous Driving](http://arxiv.org/abs/2608.10413v1)
Z. Xing et al. (2026-08-11). Adds failure-aware memory to VLA driving models for adapting to distribution shifts. Relevance: strengthens long-term adaptability of driving VLAs.

#### [Embodied Multimodal Grounding for Open-Vocabulary Mobile Manipulation via Semantic 3D Gaussian Splatting](http://arxiv.org/abs/2608.10756v1)
H. Ou et al. (2026-08-11). Grounds language, vision, 3D structure, and action feasibility for open-vocabulary mobile manipulation. Relevance: provides a 3DGS-based grounding backbone for embodied VLA.

#### [Toward the Cognitive--Physical Limits of Embodied Intelligence through a World-Model-Centric Autonomous Racing Agent](http://arxiv.org/abs/2608.10618v1)
Z. Shan et al. (2026-08-11). Probes cognitive-physical limits of embodied agents through autonomous racing. Relevance: pushes VLA and world-model agents beyond conservative safety margins.

#### [HUI360: A 360° Egocentric Dataset and Baselines for Human-Robot Interaction Anticipation](http://arxiv.org/abs/2608.11051v1)
R. Lorenzo-Louis et al. (2026-08-11). Introduces a 360° egocentric dataset for anticipating human-robot interactions. Relevance: supports socially aware VLA and embodied-agent perception.

#### [ComBodied Agents: a New Paradigm of Human-Centric Agentic AI](http://arxiv.org/abs/2608.10915v1)
Q. Ding et al. (2026-08-11). Proposes combined software/embodied agents that reason about user state and appropriate support. Relevance: expands VLA/embodied-agent scope toward human-centric care.

### Embodied Navigation

#### [AECNav: Active Evidence Consolidation for Efficient Zero-Shot Open-Vocabulary Object Navigation](http://arxiv.org/abs/2608.10817v1)
G. Liu et al. (2026-08-11). Reduces redundant exploration by consolidating active evidence in zero-shot object navigation. Relevance: improves latency and accuracy in open-vocabulary navigation.

#### [Chain of Spatial Thoughts: Modality-Agnostic Spatial Grounding for Vision Language Models](http://arxiv.org/abs/2608.10278v1)
H. Schofield et al. (2026-08-10). Uses explicit chain-of-spatial-thought prompting for modality-agnostic spatial grounding. Relevance: strengthens spatial reasoning needed for embodied navigation.

#### [CausalSplat: Towards Comprehensive Hierarchical Reasoning in 3D Gaussian Splatting](http://arxiv.org/abs/2608.11150v1)
J. Ding et al. (2026-08-11). Adds hierarchical causal reasoning to 3DGS for implicit intents and spatial constraints. Relevance: enables common-sense spatial reasoning in interactive 3D scenes.

#### [LEGO: Leveled Language Gaussian Splatting](http://arxiv.org/abs/2608.10057v1)
Y. Peng et al. (2026-08-10). Captures intrinsic semantic hierarchies in scenes, such as flowerpot → bouquet → bud → petal. Relevance: supports open-vocabulary navigation with hierarchical scene understanding.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [From Semantic Grounding to Decision Optimization: A Unified Framework for Long-Horizon UAV Vision-Language Navigation](http://arxiv.org/abs/2608.09564v1)
Z. Ma et al. (2026-08-10). Unifies instruction grounding and decision optimization for long-horizon UAV visual-language navigation. Relevance: addresses coupled grounding/planning issues in aerial navigation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [RecoverFly: A Failure-Aware Reinforcement Learning Post-Training Framework for Aerial Vision-Language Navigation](http://arxiv.org/abs/2608.09467v1)
B. Wang et al. (2026-08-10). Uses failure-aware RL post-training to adapt UAV vision-language-action policies. Relevance: improves robustness of end-to-end aerial navigation policies.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [SAIN: Structure-Aware Interactive Navigation with Active Dialogue Grounding for Mobile Robot](http://arxiv.org/abs/2608.09196v1)
Y. Cao et al. (2026-08-10). Handles ambiguous human instructions through structure-aware active dialogue grounding. Relevance: reduces uncertainty in interactive mobile navigation.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [Putting Registers to Work: Task Registers for Token Pruning in Vision Transformers](http://arxiv.org/abs/2608.10989v1)
H. Cao et al. (2026-08-11). Learns task-specific registers for transferable token-pruning policies across recognition tasks. Relevance: improves inference efficiency when reusing pretrained ViTs.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Omni2LoRA: Coherence-Preserving Parametric Memory for Efficient Omni Language Models](http://arxiv.org/abs/2608.09227v1)
P. Mathur et al. (2026-08-10). Compresses long joint token sequences while preserving cross-modal coherence for omni language models. Relevance: reduces inference cost in multimodal LLM deployment.

### Multimodal LLM Pruning

#### [When Vision Becomes Text: Visual Token Pruning via Cross-Modal Residual Guidance in VLMs](http://arxiv.org/abs/2608.10489v1)
C. Ou et al. (2026-08-11). Prunes visual tokens using cross-modal residual guidance instead of similarity-based scoring. Relevance: lowers VLM inference cost while retaining text-relevant visual information.

### Continual Learning

#### [Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding](http://arxiv.org/abs/2608.11095v1)
K. Chakrabarti (2026-08-11). Attributes unbounded growth of agentic coding READMEs to imperfect recall and “catastrophic remembering.” Relevance: directly connects memory management to continual adaptation in agentic coding.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Macaron-V1: Towards Open Continual Learning with Self-Improvement and Mixture-of-LoRA](http://arxiv.org/abs/2608.09819v1)
Mind Lab et al. (2026-08-10). Presents an open agent-model family for experiential intelligence with recursive improvement and Mixture-of-LoRA. Relevance: combines continual adaptation with post-deployment self-improvement.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Hyperbolic Multimodal Continual Learning](http://arxiv.org/abs/2608.09572v1)
J. Liu et al. (2026-08-10). Studies continual learning of multimodal hierarchical representations in hyperbolic geometry. Relevance: extends continual learning to structured multimodal embeddings.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Agentic Router: An Execution-Grounded Continual Learning Approach With Memory](http://arxiv.org/abs/2608.09184v1)
Y. Chen et al. (2026-08-10). Uses execution feedback and memory for continual learning in command-line agent operations. Relevance: improves agent routing from real execution outcomes.

## 视觉感知

### Event-Based Vision

#### [Static in Frames, Dynamic in Events: Rethinking Features in Event Cameras as Motion Cues](http://arxiv.org/abs/2608.11075v1)
H. Araghi et al. (2026-08-11). Treats event-camera features as motion cues rather than static intensity snapshots. Relevance: improves feature design for event-based downstream perception.

#### [Bridging Event Streams and DiT: Event-Guided Video Frame Interpolation](http://arxiv.org/abs/2608.10479v1)
G. Lin et al. (2026-08-11). Uses event streams to guide latent-diffusion video frame interpolation across large temporal gaps. Relevance: leverages event data for robust interpolation under complex motion.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [A Height-Constrained 2-Point Minimal Solver for Pose Estimation from Active LED Markers with Event Cameras](http://arxiv.org/abs/2608.09520v1)
R. Yuan et al. (2026-08-10). Derives a height-constrained minimal solver for event-camera pose estimation from LED markers. Relevance: enables low-latency localization for event-based autonomous systems.

### 3D Point Cloud Perception

#### [Multi-View Relational Distillation for Spatial Reasoning with Vision-Language Models](http://arxiv.org/abs/2608.10864v1)
K.T. Nguyen et al. (2026-08-11). Distills multi-view relational geometry into VLM spatial representations. Relevance: strengthens geometric/3D reasoning needed for embodied perception, though image-based rather than point-cloud-based.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Damage Classification for 3D Point Cloud Data via 3D Data Analysis and Vision Foundation Model-based 2D Projections](http://arxiv.org/abs/2608.08955v1)
E. Perez et al. (2026-08-09). Compares direct 3D point-cloud damage assessment with 2D-projection-based assessment. Relevance: addresses efficient fine-grained 3D damage classification.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [RefineAny3D: Depth Refinement as Semantic Alignment for Monocular 3D Detection](http://arxiv.org/abs/2608.09147v1)
Z. Zhang et al. (2026-08-10). Refines depth maps via semantic alignment for monocular 3D object detection. Relevance: improves geometric accuracy for open-vocabulary 3D detection.

## Cross-Topic Signals

- Verifier-free selection is a recurring idea across CAD generation, general TTS, and test-time augmentation: consensus or input diversity can replace expensive external verifiers.
- Token/KV pruning connects VLA inference, VLM pruning, ViT task reuse, and omni-model compression: all aim to cut autoregressive/multimodal inference cost.
- Agent-harness safety, skill supply-chain backdoors, red-teaming, and VLA adversarial robustness form a shared attack-surface theme spanning language agents and embodied policies.
- Semantic 3D Gaussian Splatting and spatial-grounding methods are increasingly shared between mobile manipulation and navigation.
- Memory/provenance management in agent workflows is converging with continual learning: unbounded memory, catastrophic remembering, and execution-grounded adaptation are common concerns.

## Priority Reading

1. **XCoT-VLA** — executable chain-of-thought directly tackles the deployment bottleneck of VLA driving and connects reasoning quality with real-time control.
#### **Consilience for Verifier-Free Test-Time Scaling** — provides a unified lens on verifier-free TTS, highly relevant to the lab’s agent self-improvement and TTS interests.
3. **REDAgentBench** — faithful, executable red-teaming measurement is a prerequisite for safe deployment of LLM agent systems.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*