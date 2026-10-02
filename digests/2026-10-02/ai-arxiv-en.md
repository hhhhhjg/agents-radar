# Lab Research Topics Radar 2026-10-02

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 14 new + 4 seen in the last 14 days | Generated: 2026-10-02 01:14 UTC

---

## Today's Overview
- **LLM Agent 与多智能体 — LLM Agent Engineering**: No new papers today.
- **LLM Agent 与多智能体 — Agent Test-Time Scaling and Self-Improvement**: 10 new papers, centered on better exploration, speculative search for serving, certified scaling curves, limits of recursive reasoning, quantified test-time computation value, and test-time RL entry-state sharpening; several other matches are peripheral.
- **LLM Agent 与多智能体 — LLM Agent Societies**: No new papers today.
- **具身智能 — Vision-Language-Action Models**: No new papers today.
- **具身智能 — Embodied Navigation**: No new papers today.
- **模型压缩与持续学习 — LLM Pruning and Inference Optimization**: No new papers today.
- **模型压缩与持续学习 — Multimodal LLM Pruning**: No new papers today; two previously seen visual-token pruning papers remain relevant.
- **模型压缩与持续学习 — Continual Learning**: No new papers today.
- **视觉感知 — Event-Based Vision**: 1 new paper on low-compute OOD detection in spiking neural networks from membrane-potential statistics, plus a repeated event-based depth distillation paper.
- **视觉感知 — 3D Point Cloud Perception**: 2 new papers on set-based sensing architectures and asynchronous collaborative 3D perception, plus a repeated LiDAR long-tailed detection paper.
- **视觉感知 — 3D Point Cloud Perception and Tracking**: One matched new candidate appeared, but it concerns paediatric wheeze detection from impedance pneumography; no substantive point-cloud tracking progress today.

## Research Areas
## LLM Agent 与多智能体
### Agent Test-Time Scaling and Self-Improvement
#### [How Much Can Language Models Gain from Test-Time Computation?](http://arxiv.org/abs/2610.01110v1)
- Authors: Yang, Li, Fan et al. | Published: 2026-10-01
- Contribution: Introduces SELF-POT, a benchmark/evaluator that quantifies test-time computation gains while charging selection to the budget.
- Relevance: Directly measures whether test-time scaling substitutes for larger models across domains and at what cost.

#### [Sharpen Before You Adapt: Data-Free Entry-State Sharpening for Test-Time Reinforcement Learning](http://arxiv.org/abs/2610.00903v1)
- Authors: Zhang & Selvendran | Published: 2026-10-01
- Contribution: Proposes data-free entry-state sharpening to improve the checkpoint policy before test-time reinforcement learning adaptation.
- Relevance: Addresses noisy self-supervision and limited adaptation budgets in test-time self-improvement.

#### [Towards Better Exploration in Sequential Test-Time Scaling](http://arxiv.org/abs/2609.39632v1)
- Authors: Rance, Pizzati, Sock et al. | Published: 2026-09-30
- Contribution: Targets exploration in sequential test-time scaling to sustain improvement over long timescales.
- Relevance: Addresses a core failure mode of parallel and sequential scaling on hard problems.

#### [Taming Speculative Search for Test-Time Scaling in LLM Serving](http://arxiv.org/abs/2609.39334v1)
- Authors: Jeong, Choi, Jeon et al. | Published: 2026-09-30
- Contribution: Applies speculative search to accelerate reasoning-path exploration during LLM serving.
- Relevance: Bridges test-time scaling algorithms with practical serving efficiency.

#### [Cheap to Draw, Expensive to Trust: Certifying Test-Time Scaling Curves](http://arxiv.org/abs/2609.40190v1)
- Authors: Sohail, Sarkar, Baichoo | Published: 2026-09-30
- Contribution: Studies certification of accuracy-versus-k scaling curves for verifier-based sampling.
- Relevance: Provides a reliability lens for making trustworthy test-time budget decisions.

#### [What Limits Recursive Reasoning Models: Optimization, Architecture and Test-Time Scaling](http://arxiv.org/abs/2609.39967v1)
- Authors: Shakhvalieva, Kharchev, Bezrukov et al. | Published: 2026-09-30
- Contribution: Analyzes optimization, architecture, and test-time scaling limits of recursive reasoning models with shared Transformer blocks.
- Relevance: Informs compact solver design and when test-time scaling helps algorithmic tasks.

#### [Mid-Harness: Scaling Actions Between Model and Harness for Terminal Agents](http://arxiv.org/abs/2609.39982v1)
- Authors: Kang, Hachiuma, Zhang et al. | Published: 2026-09-30
- Contribution: Scales actions between model and harness to improve reliable terminal-agent execution.
- Relevance: Connects action scaling and execution reliability with agent self-improvement.

## 模型压缩与持续学习
### Multimodal LLM Pruning
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [TReVS: Integrating Textual Relevance and Visual Saliency for Efficient Vision-Language Model Token Pruning](http://arxiv.org/abs/2609.37581v1)
- Authors: Wang, Wu, Ren et al. | Published: 2026-09-29
- Contribution: Integrates textual relevance and visual saliency for efficient vision-language model token pruning.
- Relevance: Directly targets multimodal LLM inference acceleration via visual-token reduction.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Representation Dynamics Reveal Semantic Saliency and Similarity for Visual Token Pruning in MLLMs](http://arxiv.org/abs/2609.36916v2)
- Authors: Li, Zhou, Zhuang et al. | Published: 2026-09-29
- Contribution: Analyzes representation dynamics for semantic saliency and similarity in MLLM visual token pruning.
- Relevance: Provides analysis for deciding when and how to prune visual tokens.

## 视觉感知
### Event-Based Vision
#### [Vmem-$\varphi$: Low-Compute Out-of-Distribution Detection in Spiking Neural Networks from Membrane-Potential Statistics](http://arxiv.org/abs/2610.00350v1)
- Authors: Rana, Tripathi, Dipu et al. | Published: 2026-09-29
- Contribution: Uses membrane-potential statistics for low-compute OOD detection in spiking neural networks on event-camera data.
- Relevance: Directly targets event-based vision robustness and energy efficiency.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [SFE-VGGT: Source-Free VGGT Distillation for Event-Based Monocular Depth Estimation](http://arxiv.org/abs/2609.36929v1)
- Authors: Nguyen & Wang | Published: 2026-09-29
- Contribution: Performs source-free VGGT distillation for event-based monocular depth without synchronized RGB-event pairs or depth annotations.
- Relevance: Advances event-based depth estimation and cross-modal distillation.

### 3D Point Cloud Perception
#### [EgoRefine: Ego-Referenced Predictive Alignment and Trajectory-Conditioned Reliability-Aware Fusion for Asynchronous Collaborative Perception](http://arxiv.org/abs/2610.00319v1)
- Authors: Kong, Zang, Kang et al. | Published: 2026-09-29
- Contribution: Proposes ego-referenced predictive alignment and trajectory-conditioned reliability-aware fusion for asynchronous collaborative perception.
- Relevance: Improves 3D object detection under delayed cooperative point-cloud features.

#### [Atomizer-IO: Beyond Pixels, Patches and Grids](http://arxiv.org/abs/2609.40320v1)
- Authors: de Turckheim, Lobry, Houdré et al. | Published: 2026-09-30
- Contribution: Introduces a set-based architecture for irregular sensing data beyond regular grids.
- Relevance: Relevant to non-grid 3D and remote-sensing point-cloud-like perception.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [GA-EIRFS: A Geometry-Augmented Repeat-Factor Sampling Method for Long-Tailed LiDAR 3D Object Detection](http://arxiv.org/abs/2609.38116v1)
- Authors: Ahmed, Álvarez Casado, Herrera Castro et al. | Published: 2026-09-29
- Contribution: Uses geometry-augmented repeat-factor sampling for long-tailed LiDAR 3D object detection.
- Relevance: Addresses LiDAR supervision quality and geometry in long-tailed 3D detection.

## Cross-Topic Signals
- Test-time scaling is moving from raw sampling toward exploration, speculative search, and certified verifier-based selection, linking TTS methods with LLM serving efficiency.
- Self-derived supervision recurs across test-time reinforcement learning and self-play skill discovery, suggesting shared interest in improving policies without external labels.
- Efficient inference connects multimodal visual-token pruning and agent action/harness scaling: both decide what to keep, execute, or ignore under a compute budget.
- Irregular and asynchronous sensing appears across event-based OOD detection and 3D collaborative perception, where robustness and low-compute fusion are central.

## Priority Reading
#### [How Much Can Language Models Gain from Test-Time Computation?](http://arxiv.org/abs/2610.01110v1) — Strongest evaluation framing for deciding whether test-time compute is worth the selection cost.
#### [Towards Better Exploration in Sequential Test-Time Scaling](http://arxiv.org/abs/2609.39632v1) — Directly addresses the long-horizon exploration bottleneck in sequential test-time scaling.
#### [Sharpen Before You Adapt: Data-Free Entry-State Sharpening for Test-Time Reinforcement Learning](http://arxiv.org/abs/2610.00903v1) — Concrete test-time adaptation method for improving self-supervision and adaptation efficiency.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*