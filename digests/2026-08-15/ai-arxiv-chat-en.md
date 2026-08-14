# Lab Research Topics Radar 2026-08-15

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 15 new + 0 seen in the last 14 days | Generated: 2026-08-14 22:16 UTC

---

## Today's Overview

- **LLM Agent 与多智能体 – LLM Agent Engineering**: 3 papers — self-evolving runtime defense, semantic-segment memory consolidation, and compositional agent-harness repair.
- **LLM Agent 与多智能体 – Agent Test-Time Scaling and Self-Improvement**: 2 papers — generative retrieval embeddings and evolution-strategy solution coverage.
- **LLM Agent 与多智能体 – LLM Agent Societies**: No new papers today.
- **具身智能 – Vision-Language-Action Models**: 3 papers — adversarial textures, failure-informed self-evolution, and temporal GRPO credit assignment.
- **具身智能 – Embodied Navigation**: 3 papers — hierarchical open-vocab object navigation, humanoid VLN benchmark, and spatial memory grounded in experience.
- **模型压缩与持续学习 – LLM Pruning and Inference Optimization**: 1 paper — coverage-driven token pruning for 3D VLMs.
- **模型压缩与持续学习 – Multimodal LLM Pruning**: No new papers today.
- **模型压缩与持续学习 – Continual Learning**: 2 papers — learnable wavelet activations and behavioral reprogramming of open-weights models.
- **视觉感知 – Event-Based Vision**: No new papers today.
- **视觉感知 – 3D Point Cloud Perception**: 1 paper — geometry-grounded unified 3D perception for autonomous driving.
- **视觉感知 – 3D Point Cloud Perception and Tracking**: No new papers today.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [Beyond Handcrafted Security: Towards Self-Evolving Defense for LLM Agents](http://arxiv.org/abs/2608.12977v1)
Ruan, Li, Chen et al. — 2026-08-13. Proposes a self-evolving runtime defense that adapts security mechanisms inside the LLM agent execution loop instead of relying on handcrafted rules. Relevant because runtime security is a core engineering challenge for deployed LLM agents.

#### [LycheeMemory V2: Efficient Long-Term Memory for LLM Agents via Semantic Segment-Level Consolidation](http://arxiv.org/abs/2608.12990v1)
Li, Liu, Wang et al. — 2026-08-13. Introduces segment-level semantic memory consolidation to avoid expensive per-interaction LLM calls. Relevant to agent engineering because it directly reduces the cost of long-horizon memory construction.

#### [Capability Sheaves for Compositional Agent-Harness Repair: Controlled Quotients and a Real-Repository Stress Test](http://arxiv.org/abs/2608.13228v1)
Batruin — 2026-08-13. Uses a finite capability sheaf to model shared-state disagreements among retrieval, routing, state, and verification components in agent harnesses. Relevant for compositional reliability and repair of multi-component agent systems.

### Agent Test-Time Scaling and Self-Improvement

#### [GEM: A Generative Embedding Model Bridging Reasoning and Retrieval](http://arxiv.org/abs/2608.13200v1)
Shen, Macdonald — 2026-08-13. Presents a generative embedding model that uses LLM reasoning to bridge complex user needs and retrieval. Relevant to agent test-time scaling because it strengthens retrieval-based reasoning in augmented agent pipelines.

#### [Beyond the Best Guess: Improving LLM Solution Coverage with Evolution Strategies](http://arxiv.org/abs/2608.12679v1)
Hayes, Meyerson, Schweighofer et al. — 2026-08-13. Applies evolution strategies to guide additional test-time compute toward diverse LLM-generated solutions. Relevant because it directly addresses test-time scaling for discovery-oriented agent tasks.

### LLM Agent Societies

No new papers today.

## 具身智能

### Vision-Language-Action Models

#### [UniTexture: Cross-Task Universal Adversarial Textures for Vision-Language-Action Models](http://arxiv.org/abs/2608.13453v1)
Dai, Dai, Wang et al. — 2026-08-13. Generates universal adversarial textures that can transfer across tasks and disrupt VLA policies. Relevant because it exposes safety and robustness vulnerabilities in vision-language-action control.

#### [FIRE-VLA: Failure-Informed Self-Evolution for Vision-Language-Action Models in Autonomous Driving](http://arxiv.org/abs/2608.13395v1)
Dou — 2026-08-13. Improves GRPO-based VLA post-training by leveraging failure signals when all sampled trajectories in a rollout group are poor. Relevant because it addresses a key failure mode in relative-preference RL for autonomous-driving VLAs.

#### [Temporal GRPO: Beyond Trajectory-Level Credit in Vision-Language-Action Reinforcement Learning](http://arxiv.org/abs/2608.13026v1)
Zhou, Gao, Wu et al. — 2026-08-13. Extends GRPO to assign finer-grained temporal credit instead of one trajectory-level advantage to all actions. Relevant to VLA post-training from sparse task-success feedback.

### Embodied Navigation

#### [SAP-Nav: Spatial Semantic Representation Meets Active Perception for Hierarchical Open-Vocabulary Object Navigation](http://arxiv.org/abs/2608.12707v1)
Pei, Liu, Munasinghe et al. — 2026-08-13. Combines spatial semantic representation with active perception for hierarchical open-vocabulary object navigation in unseen environments. Relevant because it advances language-guided navigation under partial observability.

#### [HumanoidVLN: A Physics-Grounded Simulator and Benchmark for Vision-Language Navigation Across Diverse Humanoid Embodiments](http://arxiv.org/abs/2608.12860v1)
Pham, Dao, Nguyen et al. — 2026-08-13. Introduces a physics-grounded humanoid VLN benchmark capturing bipedal locomotion and morphology constraints. Relevant because it extends embodied navigation from wheeled agents to physically grounded humanoid platforms.

#### [Spatial Memory Agent: Experience-Grounded Procedure Memory for Spatial Intelligence](http://arxiv.org/abs/2608.12743v1)
Zhang, Ding, Zhou et al. — 2026-08-13. Builds experience-grounded procedure memory to improve spatial reasoning in VLM agents. Relevant to embodied navigation and planning because it turns past spatial experience into reusable procedural knowledge.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [CoverPrune: Coverage-Driven Token Pruning for 3D VLMs via Optimal Transport](http://arxiv.org/abs/2608.13226v1)
Ling, Yin, Zhu et al. — 2026-08-13. Proposes coverage-driven token pruning for 3D Vision-Language Models using optimal transport to reduce visual token bottlenecks. Relevant because token reduction is a practical inference-optimization lever for multimodal, token-heavy 3D pipelines.

### Multimodal LLM Pruning

No new papers today.

### Continual Learning

#### [Sustaining Plasticity via Learnable Wavelet Activations in Continual Learning](http://arxiv.org/abs/2608.12874v1)
Zhang, Gong, Lu et al. — 2026-08-13. Introduces learnable wavelet activations to counteract spectral bias and plasticity loss in sequential task learning. Relevant because preserving plasticity is a central challenge in continual learning.

#### [Behavioral Reprogramming of Open-Weights Models: Cognitive Plasticity and Alignment Bounds](http://arxiv.org/abs/2608.13069v1)
Malíčková — 2026-08-13. Empirically evaluates whether open-weight LLMs can be behaviorally reprogrammed away from passive, sycophantic assistant defaults. Relevant to continual adaptation because it tests the plasticity of LLM behavior beyond standard alignment.

## 视觉感知

### Event-Based Vision

No new papers today.

### 3D Point Cloud Perception

#### [Geometry-Grounded Unified 3D Perception for Autonomous Driving](http://arxiv.org/abs/2608.13147v1)
Xu, Wang, Huang et al. — 2026-08-13. Learns a shared geometry-grounded representation that preserves metric 3D structure across synchronized multi-camera streams. Relevant because it improves unified 3D perception in camera-based autonomous driving systems.

### 3D Point Cloud Perception and Tracking

No new papers today.

## Cross-Topic Signals

- **Memory consolidation is moving beyond per-interaction logging**: LycheeMemory V2 for LLM agents and Spatial Memory Agent for embodied agents both store structured, reusable experience rather than raw conversation or trajectory history.
- **Self-evolution is a recurring design pattern**: defense mechanisms, VLA RL, and solution-search systems all propose self-improving loops, from self-evolving runtime defense to failure-informed VLA self-evolution and evolution-strategy search.
- **GRPO credit assignment is being refined for embodied agents**: FIRE-VLA handles uniformly poor rollout groups, while Temporal GRPO moves beyond trajectory-level rewards to action-level temporal credit.
- **Plasticity is a connecting concern across continual learning and agent behavior**: wavelet-activation design and behavioral reprogramming both ask how models can keep adapting without losing previously learned capabilities.
- **Efficiency work is increasingly targeting visual tokens, not just weights**: CoverPrune’s 3D VLM token pruning aligns with the broader embodied-agent goal of reducing multimodal inference cost.

## Priority Reading

- **Temporal GRPO** — Directly improves VLA post-training by fixing a known limitation of trajectory-level GRPO; the idea transfers to other agent RL settings.
- **SAP-Nav** — Strong match to embodied navigation with a realistic open-vocabulary, partial-observability setting and active perception.
- **CoverPrune** — A practical inference-optimization contribution for token-heavy 3D VLMs, with direct relevance to the lab’s pruning and multimodal efficiency interests.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*