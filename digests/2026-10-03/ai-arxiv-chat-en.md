# Lab Research Topics Radar 2026-10-03

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 19 new + 0 seen in the last 14 days | Generated: 2026-10-03 00:52 UTC

---

# Research Topics Radar

## Today's Overview
- LLM Agent Engineering: 3 new papers advance long-horizon physical control, evolving agent harnesses for video grounding, and provenance-aware capability enforcement for tool-using agents.
- Agent Test-Time Scaling and Self-Improvement: 3 new papers cover architectural sampling for test-time scaling, query-conditioned weight-update distributions for adaptation, and mutation-enhanced skill evolution for Lean provers.
- LLM Agent Societies: No new papers today.
- Vision-Language-Action Models: 3 new papers address parallel action chunking for additive manufacturing, predictive VLA alignment/injection, and whole-body/attached-geometry safety for VLA manipulation.
- Embodied Navigation: 3 directly navigation-focused papers cover adaptive goals for vision-language navigation, fast navigation world-action modeling, and social representations for human-robot navigation; one cross-listed robotic pose paper is counted under 3D Point Cloud Perception.
- LLM Pruning and Inference Optimization: 3 new papers target MoE expert pruning, token-level optimization for quantized reasoning models, and adaptive budget-aware activation sparsity.
- Multimodal LLM Pruning: No new papers today.
- Continual Learning: 3 new papers cover task-oriented rank adaptation, geometry-preserving task-vector merging, and continual 6-DoF grasp synthesis.
- Event-Based Vision: No new papers today.
- 3D Point Cloud Perception: 1 new paper presents Syn2Real generalized category-level object pose estimation for robotic picking.
- 3D Point Cloud Perception and Tracking: No new papers today.

## LLM Agent 与多智能体

### LLM Agent Engineering
#### [Mimir: Physics-Grounded LLM Agents for Long-Horizon Irrigation Control](http://arxiv.org/abs/2610.02038v1)
Authors: Liu, Zhang, Dong, et al. | Published: 2026-10-01.  
Contribution: Builds physics-grounded LLM agents for long-horizon irrigation control where actions alter future states and errors compound.  
Relevance: Targets long-running physical control, a key gap beyond episodic LLM-agent tasks.

#### [VideoEvolve: Evolving Agent Harnesses for Video Temporal Grounding](http://arxiv.org/abs/2610.01766v1)
Authors: Luo, Fan, Guo, et al. | Published: 2026-10-01.  
Contribution: Evolves agent harnesses for video temporal grounding instead of manually refining how frozen video-language models localize events.  
Relevance: Shows automated harness improvement as an agent-engineering lever for multimodal perception.

#### [PACE: Provenance-Aware Capability Enforcement for Tool-Using LLM Agents](http://arxiv.org/abs/2610.01349v1)
Authors: Li, Wang, Hu, et al. | Published: 2026-10-01.  
Contribution: Proposes provenance-aware capability enforcement to stop poisoned tool metadata, retrieved pages, memory, or skills from steering tool calls.  
Relevance: Addresses security and side-effect control for tool-using LLM agents.

### Agent Test-Time Scaling and Self-Improvement
#### [Architectural Sampling: Test-Time Scaling via Computational Diversity in Frozen Vision-Language Models](http://arxiv.org/abs/2610.01687v1)
Authors: Singh, Marjit, Lin, et al. | Published: 2026-10-01.  
Contribution: Introduces architectural sampling, a training-free method that generates candidates through distinct computation paths.  
Relevance: Broadens test-time scaling beyond temperature sampling for frozen VLMs.

#### [Learning to Predict Distributions over Weight Updates for Test-Time Adaptation](http://arxiv.org/abs/2610.01934v1)
Authors: Khan, Ramji, Naseem, et al. | Published: 2026-10-01.  
Contribution: Predicts distributions over weight updates using only the input query for runtime LLM adaptation.  
Relevance: Connects hypernetwork-based adaptation to test-time self-improvement under limited task signals.

#### [SkillEvoLean: Mutation-enhanced skill evolution for Lean provers](http://arxiv.org/abs/2610.01799v1)
Authors: Zhou, Yang, Zhang. | Published: 2026-10-01.  
Contribution: Applies mutation-enhanced skill evolution to improve Lean provers without updating model parameters.  
Relevance: Demonstrates parameter-free agent self-improvement in formal theorem proving.

### LLM Agent Societies
No new papers today.

## 具身智能

### Vision-Language-Action Models
#### [ChunkVLA-AM: Parallel Action Chunking for Vision-Language-Action Robot Control in Additive Manufacturing](http://arxiv.org/abs/2610.01856v1)
Authors: Liu, Zhang, Zhang, et al. | Published: 2026-10-01.  
Contribution: Introduces parallel action chunking for VLA robot control in additive manufacturing and targets costly adaptation to unseen robot embodiments.  
Relevance: Directly advances VLA deployment in novel embodiments and industrial additive manufacturing.

#### [ATI-VLA: Action-Centric Predictive Vision-Language-Action Models via Actionable Alignment Then Adaptive Injection](http://arxiv.org/abs/2610.01741v1)
Authors: Zhu, Shao, He, et al. | Published: 2026-10-01.  
Contribution: Proposes actionable alignment then adaptive injection to address modal limitations in predictive VLA models for robotic manipulation.  
Relevance: Improves predictive VLA design, a core VLA modeling question.

#### [WBAG: A Whole-Body and Attached-Geometry Safety Framework for Vision-Language-Action Manipulation](http://arxiv.org/abs/2610.01083v1)
Authors: Zhen, Jo, Zhang, et al. | Published: 2026-10-01.  
Contribution: Presents a whole-body and attached-geometry safety framework to reduce collisions for VLA manipulation policies.  
Relevance: Addresses real-world safety for VLA deployment.

### Embodied Navigation
#### [NavHarness: Adaptive Goals for Agentic Vision-Language Navigation](http://arxiv.org/abs/2609.39915v1)
Authors: Shi, Li, Ding, et al. | Published: 2026-09-30.  
Contribution: Uses adaptive goals to keep agentic vision-language navigation execution consistent with intended routes.  
Relevance: Connects general-purpose multimodal agents to embodied navigation control.

#### [DiffWAM: A Fast and Efficient Navigation World Action Model](http://arxiv.org/abs/2609.39763v1)
Authors: Zhu, Wu, Huang, et al. | Published: 2026-09-30.  
Contribution: Investigates whether motion implicit in future visual prediction can produce UAV motion without expensive future-video synthesis and reconstruction.  
Relevance: Offers a fast world-action model for embodied navigation.

#### [STARS: From Spatiotemporal Dynamics to Social Representations in Human-Robot Interaction](http://arxiv.org/abs/2609.40245v2)
Authors: Tsoi, Munje, Oberoi, et al. | Published: 2026-09-30.  
Contribution: Derives social representations from spatiotemporal dynamics for socially-compliant robot navigation in human-centered environments.  
Relevance: Advances social scene understanding for embodied navigation.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization
#### [MoRA: MoE Pruning via Router Bias Learning and Expert Approximation](http://arxiv.org/abs/2610.00367v1)
Authors: Sun, Zhou, Gao, et al. | Published: 2026-09-30.  
Contribution: Prunes MoE experts via router bias learning and expert approximation to reduce memory usage.  
Relevance: Directly targets structured expert pruning for LLM inference optimization.

#### [RATIO: Reasoning Analysis and Token-level Inference Optimization for Quantized Reasoning Models](http://arxiv.org/abs/2609.39801v1)
Authors: Bao, Yan, Zhang, et al. | Published: 2026-09-30.  
Contribution: Analyzes and optimizes token-level inference for quantized reasoning models, addressing PTQ-induced reasoning degradation and overthinking.  
Relevance: Links quantization, reasoning behavior, and inference optimization.

#### [TopK-Guided: Adaptive, Budget-Aware Activation Sparsity for Efficient LLM Inference](http://arxiv.org/abs/2610.01763v1)
Authors: Agarwalla, Lin. | Published: 2026-10-01.  
Contribution: Proposes adaptive, budget-aware activation sparsity to balance threshold-based and top-k trade-offs for efficient LLM inference.  
Relevance: Advances training-free activation sparsity for inference optimization.

### Multimodal LLM Pruning
No new papers today.

### Continual Learning
#### [Task-Oriented Rank Adaptation for Continual Learning in Text Classification](http://arxiv.org/abs/2610.01702v1)
Authors: Sanchez Lopez, Morales Manzanares, Escalante. | Published: 2026-10-01.  
Contribution: Adapts LoRA-style rank allocation to task needs for continual text classification, targeting catastrophic forgetting and negative transfer.  
Relevance: Improves parameter-efficient continual learning.

#### [ChainLoRA: Geometry-Preserving Task Vector Merging for Continual Learning in LLMs](http://arxiv.org/abs/2610.00431v1)
Authors: Yin, Wang, Luo, et al. | Published: 2026-09-30.  
Contribution: Proposes a replay-free continual merging framework based on chain-updated task-vector geometry under strict parameter budgets.  
Relevance: Addresses retention, adaptation, and budget trade-offs in continual LLM fine-tuning.

#### [Continual Learning for 6-DoF Grasp Synthesis via Experience and Demonstrations](http://arxiv.org/abs/2610.01301v1)
Authors: Schiavi, Cramariuc, Pantic, et al. | Published: 2026-10-01.  
Contribution: Enables continual 6-DoF grasp synthesis from experience and demonstrations so robots can adapt to unfamiliar objects.  
Relevance: Applies continual learning to embodied robotic manipulation.

## 视觉感知

### Event-Based Vision
No new papers today.

### 3D Point Cloud Perception
#### [GenCOPE: Syn2Real Generalized Category-Level Object Pose Estimation for Robotic Picking](http://arxiv.org/abs/2610.01758v1)
Authors: Liu, Sun, Dai, et al. | Published: 2026-10-01.  
Contribution: Presents Syn2Real generalized category-level object pose estimation for robotic picking to reduce real-world data recollection for novel categories.  
Relevance: Advances 3D point cloud perception for category-level robotic pose estimation.

### 3D Point Cloud Perception and Tracking
No new papers today.

## Cross-Topic Signals
- Test-time adaptation and inference optimization converge on adaptive computation: architectural sampling, query-conditioned weight updates, activation sparsity, and quantized-reasoning optimization all trade runtime compute for better outputs.
- Externalized agent improvement is growing: VideoEvolve and SkillEvoLean improve harnesses or skills without weight updates, linking LLM Agent Engineering with Test-Time Scaling and Self-Improvement.
- Safety and security constraints are moving into action generation: PACE for tool-using agents and WBAG for VLA manipulation both enforce capability or geometry limits around generated actions.
- Parameter-efficient continual adaptation appears across modalities: Task-Oriented Rank Adaptation, ChainLoRA, and test-time weight-update prediction share low-rank or update-merging strategies to avoid forgetting.
- Multimodal action models and navigation share world/action prediction: ATI-VLA, ChunkVLA-AM, DiffWAM, and NavHarness all use predictive or chunked action representations for embodied control.

## Priority Reading
- Mimir: Best example today of long-horizon physical LLM-agent control with compounding errors, directly relevant to agent engineering beyond episodic tasks.
- Architectural Sampling: Training-free test-time scaling via computational diversity; likely reusable across agent and VLM self-improvement.
- GenCOPE: The only 3D point cloud perception paper today and a focused Syn2Real approach for category-level robotic picking.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*