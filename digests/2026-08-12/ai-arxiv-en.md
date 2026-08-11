# Lab Research Topics Radar 2026-08-12

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 31 new + 0 seen in the last 14 days | Generated: 2026-08-11 22:35 UTC

---

## Today's Overview

- **LLM Agent Engineering**: No new papers today.
- **Agent Test-Time Scaling and Self-Improvement**: No new papers today.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: Progress on reliable test-time training (VANE), speculative decoding (WA-SpecDec), joint-embedding world modeling (JEPA-WAM), and compact action-grounded predictive latents (SLIM-0.5B).
- **Embodied Navigation**: Progress on UAV vision-language navigation, interactive dialogue grounding, urban navigation benchmarks, instruction generation, and autonomous driving reasoning.
- **LLM Pruning and Inference Optimization**: Progress on KV-cache eviction, WebGPU dispatch overhead, and omnimodal token/parametric memory compression.
- **Multimodal LLM Pruning**: No new papers today.
- **Continual Learning**: Progress on open continual learning, hyperbolic multimodal continual learning, execution-grounded memory, and catastrophic forgetting in RL.
- **Event-Based Vision**: Progress on event camera simulation, active-marker pose estimation, and event-stream 3D Gaussian splatting.
- **3D Point Cloud Perception**: Progress on damage classification in point clouds and monocular 3D detection depth refinement.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## Main Direction

### Vision-Language-Action Models

#### [VANE: Reliable Test-Time Training for Vision-Language-Action Models via Future Visual Representation Prediction](http://arxiv.org/abs/2608.09448v1)
Hongjin Ji et al. | 2026-08-10. Contribution: proposes future visual representation prediction to make test-time training reliable for closed-loop VLA policies. Relevance: directly targets deployment-time adaptation reliability for VLA manipulation.

#### [JEPA-WAM: Learning Vision-Language-Action Policies with Joint-Embedding World Modeling](http://arxiv.org/abs/2608.09381v1)
Yihan Lin et al. | 2026-08-10. Contribution: learns VLA policies with joint-embedding world models, avoiding costly video generation while capturing predictive state transitions. Relevance: offers a scalable world-model path for VLA policy learning.

#### [WA-SpecDec: World-Aware Speculative Decoding for Vision-Language-Action Models](http://arxiv.org/abs/2608.08725v1)
Zikang Wen et al. | 2026-08-09. Contribution: uses world-aware speculative decoding to verify blocks of draft action tokens in VLA policies. Relevance: reduces the closed-loop latency bottleneck of autoregressive robot control.

#### [World Tokens: Enhancing Embodied Policies with Training-Time World Modeling](http://arxiv.org/abs/2608.09730v1)
Qu Tang et al. | 2026-08-10. Contribution: injects training-time world modeling into VLA policies without requiring full video generation. Relevance: bridges VLA control and world-model predictive understanding.

#### [SLIM-0.5B: Learning Action-Grounded Predictive Latents for Robot Manipulation](http://arxiv.org/abs/2608.09771v1)
Jingkai Wang et al. | 2026-08-10. Contribution: learns compact action-grounded predictive latents so VLA policies require a much smaller multimodal backbone. Relevance: makes continuous robot manipulation more efficient by trimming open-domain semantic capacity.

#### [From Recovery to Drop-off: How Action Post-training Reduces a VLM's Late-Layer Depth Decodability](http://arxiv.org/abs/2608.08904v1)
Alexander Hackett et al. | 2026-08-09. Contribution: probes how VLA action post-training changes depth perception across decoder layers of the base VLM. Relevance: clarifies what spatial understanding is retained or lost during VLA training.

#### [Discovering Diverse Planning Policies for Multimodal Embodied Agents with Quality-Diversity Optimization](http://arxiv.org/abs/2608.08523v1)
Pengfei Xu et al. | 2026-08-09. Contribution: uses quality-diversity optimization to discover diverse planning modes for multimodal embodied agents. Relevance: counters single-style planner collapse in long-horizon embodied decision making.

### Embodied Navigation

#### [From Semantic Grounding to Decision Optimization: A Unified Framework for Long-Horizon UAV Vision-Language Navigation](http://arxiv.org/abs/2608.09564v1)
Zeyuan Ma et al. | 2026-08-10. Contribution: unifies instruction-relevant landmark grounding and decision optimization for UAV vision-language navigation. Relevance: addresses grounding and long-horizon action coupling in aerial VLN.

#### [RecoverFly: A Failure-Aware Reinforcement Learning Post-Training Framework for Aerial Vision-Language Navigation](http://arxiv.org/abs/2608.09467v1)
Boxiong Wang et al. | 2026-08-10. Contribution: post-trains UAV vision-language-action policies with failure-aware RL to improve navigation recovery. Relevance: connects action post-training with embodied navigation robustness.

#### [SAIN: Structure-Aware Interactive Navigation with Active Dialogue Grounding for Mobile Robot](http://arxiv.org/abs/2608.09196v1)
Yuhao Cao et al. | 2026-08-10. Contribution: introduces active questioning and structure-aware grounding for ambiguous human instructions in mobile robot navigation. Relevance: extends VLN to realistic underspecified instructions.

#### [360CityArena: A Realistic Virtual Urban Navigation Benchmark for Embodied Agents](http://arxiv.org/abs/2608.08814v1)
Kenta Watanabe et al. | 2026-08-09. Contribution: presents a photorealistic benchmark built from 360-degree videos for urban embodied agent evaluation. Relevance: provides a more realistic outdoor navigation benchmark than existing alternatives.

#### [GRASP: Granularity-Aware Region Alignment and Semantic Prototype Learning for Fine-Grained Cross-Modal Understanding in Drone Views](http://arxiv.org/abs/2608.09270v1)
Jiahui Cui et al. | 2026-08-10. Contribution: improves fine-grained vision-language alignment for drone-view navigation with region alignment and semantic prototypes. Relevance: targets macro/micro perception barriers in aerial VLN.

#### [Goal-oriented Navigation Instruction Generation with Tour Video Priors](http://arxiv.org/abs/2608.08596v1)
Fangdi Li et al. | 2026-08-09. Contribution: generates step-by-step navigation instructions using tour video priors rather than as a VLN auxiliary task only. Relevance: advances instruction generation for navigation guidance.

#### [DH-VLM: Dual-Horizon Cooperative Latent Reasoning for Autonomous Driving](http://arxiv.org/abs/2608.09333v1)
Ziyi Song et al. | 2026-08-10. Contribution: uses dual-horizon cooperative latent reasoning to improve long-horizon autonomous driving under limited sensing. Relevance: applies latent reasoning to embodied navigation in driving scenarios.

#### [RayLift: Lifting Complementary Ray-Wise Evidence with 3D Geometry Priors for Semantic Scene Completion](http://arxiv.org/abs/2608.08476v1)
Meng Wang et al. | 2026-08-09. Contribution: lifts ray-wise evidence with 3D geometry priors to improve camera-based semantic scene completion. Relevance: provides dense 3D scene understanding that supports embodied navigation.

#### [OccAnyScene: Towards Unified Indoor-Outdoor 3D Occupancy Prediction](http://arxiv.org/abs/2608.08696v1)
Junjie Liu et al. | 2026-08-09. Contribution: proposes unified indoor-outdoor 3D semantic occupancy prediction as a new task. Relevance: offers cross-scene 3D occupancy priors useful for navigation and scene understanding.

## Main Direction

### LLM Pruning and Inference Optimization

#### [DistillCache: KL-Guided Adaptive KV-Cache Eviction for Memory-Efficient LLM Inference](http://arxiv.org/abs/2608.08878v1)
Asaad Althoubi | 2026-08-09. Contribution: introduces KL-guided adaptive KV-cache eviction to reduce the memory bottleneck in long-context LLM inference. Relevance: directly targets LLM inference memory efficiency.

#### [Omni2LoRA: Coherence-Preserving Parametric Memory for Efficient Omni Language Models](http://arxiv.org/abs/2608.09227v1)
Puneet Mathur et al. | 2026-08-10. Contribution: compresses long joint audio-visual token sequences into coherence-preserving parametric memory. Relevance: reduces inference cost for omnimodal language models.

#### [Measuring and Reducing WebGPU Dispatch Overhead for LLM Inference](http://arxiv.org/abs/2608.08730v1)
Jędrzej Maczan | 2026-08-09. Contribution: characterizes and reduces WebGPU per-operation dispatch overhead in browser-based LLM inference. Relevance: improves LLM inference efficiency on edge and browser deployments.

### Continual Learning

#### [Macaron-V1: Towards Open Continual Learning with Self-Improvement and Mixture-of-LoRA](http://arxiv.org/abs/2608.09819v1)
Mind Lab et al. | 2026-08-10. Contribution: introduces an open agent-model family that continues learning after deployment via recursive model-harness improvement and Mixture-of-LoRA. Relevance: connects continual learning to deployed LLM agents and self-improvement.

#### [Hyperbolic Multimodal Continual Learning](http://arxiv.org/abs/2608.09572v1)
Jiahong Liu et al. | 2026-08-10. Contribution: studies how hyperbolic hierarchical representations behave under continual multimodal learning. Relevance: brings geometry-aware representation learning to multimodal continual learning.

#### [Agentic Router: An Execution-Grounded Continual Learning Approach With Memory](http://arxiv.org/abs/2608.09184v1)
Yuxuan Chen et al. | 2026-08-10. Contribution: uses command execution outcomes as training signal with memory to continually improve LLM agent routing for network operations. Relevance: demonstrates execution-grounded continual learning for LLM agents.

#### [Catastrophic Forgetting in Continual Reinforcement Learning](http://arxiv.org/abs/2608.08673v1)
Emma Graham | 2026-08-09. Contribution: analyzes how task similarity modulates catastrophic forgetting in continual reinforcement learning. Relevance: informs mitigation strategies for lifelong learning agents.

## Main Direction

### Event-Based Vision

#### [EsaacSim: A Multimodal Event Camera Add-on for NVIDIA Isaac Sim](http://arxiv.org/abs/2608.08522v1)
Ignacio Bugueno-Cordova et al. | 2026-08-09. Contribution: provides an event camera add-on for NVIDIA Isaac Sim to support robotics research. Relevance: lowers the simulation barrier for event-based vision.

#### [A Height-Constrained 2-Point Minimal Solver for Pose Estimation from Active LED Markers with Event Cameras](http://arxiv.org/abs/2608.09520v1)
Runze Yuan et al. | 2026-08-10. Contribution: derives a height-constrained 2-point solver for active-marker pose estimation with event cameras. Relevance: improves low-latency localization for autonomous systems.

#### [EvTrajGS: Accurate and Efficient 3D Gaussian Splatting from Unposed Event Streams](http://arxiv.org/abs/2608.08585v1)
Zixuan Chen et al. | 2026-08-09. Contribution: reconstructs 3D Gaussian splatting directly from unposed event streams. Relevance: advances event-based dense 3D reconstruction for embodied perception.

### 3D Point Cloud Perception

#### [Damage Classification for 3D Point Cloud Data via 3D Data Analysis and Vision Foundation Model-based 2D Projections](http://arxiv.org/abs/2608.08955v1)
Evan Perez et al. | 2026-08-09. Contribution: compares 3D point-cloud-based and 2D-projection-based methods for fine-grained damage classification. Relevance: addresses computational cost and label scarcity in point-cloud perception.

#### [RefineAny3D: Depth Refinement as Semantic Alignment for Monocular 3D Detection](http://arxiv.org/abs/2608.09147v1)
Zhihao Zhang et al. | 2026-08-10. Contribution: reformulates monocular depth refinement as semantic alignment for open-vocabulary 3D detection. Relevance: extends 3D perception to arbitrary categories using depth foundation models.

## Cross-Topic Signals

- Test-time adaptation and world modeling are converging in VLA research: VANE, JEPA-WAM, World Tokens, and SLIM-0.5B all seek predictive or adaptive latents without expensive video generation.
- Inference efficiency appears across modalities: WA-SpecDec reduces VLA latency, while DistillCache, Omni2LoRA, and WebGPU work target LLM/omnimodal memory and dispatch bottlenecks.
- Continual learning is increasingly agent-centric: Macaron-V1, Agentic Router, RecoverFly, and Catastrophic Forgetting in RL all address post-deployment adaptation or catastrophic forgetting in deployed agents.
- Event-based vision is moving toward 3D geometry and simulation: EvTrajGS for 3D Gaussian splatting and EsaacSim for robotic simulation connect event sensing to broader embodied AI stacks.

## Priority Reading

- **VANE** — Offers a concrete reliability mechanism for test-time adaptation of VLA policies, a critical gap for closed-loop deployment.
- **WA-SpecDec** — Directly tackles VLA closed-loop latency via speculative decoding, making it highly actionable for real-time robot control.
- **Macaron-V1** — Spans continual learning, self-improvement, and Mixture-of-LoRA, aligning with multiple configured research interests.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*