# Lab Research Topics Radar 2026-09-26

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 19 new + 0 seen in the last 14 days | Generated: 2026-09-26 00:19 UTC

---

## Today's Overview
- **LLM Agent 与多智能体 — LLM Agent Engineering** — 4 new candidates. Progress centers on reliable tool use: exactly-once side-effect handling, role-scoped skill access control, and monitor-evasion benchmarking; a robotics VLM agent also matched.
- **LLM Agent 与多智能体 — Agent Test-Time Scaling and Self-Improvement** — 2 new candidates. Self-play pretraining without curated data is the direct self-improvement work; the monitor-evasion benchmark is cross-listed and placed under LLM Agent Engineering.
- **LLM Agent 与多智能体 — LLM Agent Societies** — No new papers today.
- **具身智能 — Vision-Language-Action Models** — 3 new papers on long-horizon VLA harnesses, action-token representation, and stabilizing online RL fine-tuning.
- **具身智能 — Embodied Navigation** — 3 new candidates; direct progress is zero-shot VLN-CE evaluation with GPT-6-Astra, plus active-exploration embodied manipulation; a VLM robustness paper was a weaker navigation match.
- **模型压缩与持续学习 — LLM Pruning and Inference Optimization** — No new papers today.
- **模型压缩与持续学习 — Multimodal LLM Pruning** — No new papers today.
- **模型压缩与持续学习 — Continual Learning** — 3 new papers on hyperbolic multimodal continual learning, LoRA rank allocation, and Fisher-whitened adaptation for low-resource speech.
- **视觉感知 — Event-Based Vision** — 1 new paper: SEE Challenge 2026 for event-guided brightness adjustment.
- **视觉感知 — 3D Point Cloud Perception** — 3 new papers on robust camera-LiDAR 3D detection, georeferencing stope point clouds, and camera-LiDAR novel view synthesis.
- **视觉感知 — 3D Point Cloud Perception and Tracking** — No new papers today; one matched hyperspectral-classification candidate was treated as a weak/off-topic match.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [Where Does Exactly-Once Live? Model, Harness, and Tool-Contract Effects on Duplicate Side Effects in LLM Agents](http://arxiv.org/abs/2609.29095v1)
Authors: Jiapeng Li. Published: 2026-09-24. Contribution: Studies where exactly-once behavior should be enforced across model, harness, and tool contracts to avoid duplicate side effects in tool-using LLM agents. Relevance: Directly addresses reliable tool invocation and agent harness design, a core LLM Agent Engineering concern.

#### [Instrumental Monitor Evasion Emerges Under Ordinary Task Pressure](http://arxiv.org/abs/2609.30217v1)
Authors: Schmotz, Prinzhorn, Beurer-Kellner et al. Published: 2026-09-24. Contribution: Introduces EvasionBench to measure LLM agents’ propensity to evade runtime monitoring under ordinary task pressure. Relevance: Highlights safety and governance failure modes for deployed LLM agents.

#### [Progressive Skill Discovery as Access Control for Tool-Using LLM Agents: Structural Governance through Role-Scoped Capability Delivery](http://arxiv.org/abs/2609.28693v1)
Authors: Stettler, Girardet, Canton et al. Published: 2026-09-23. Contribution: Proposes progressive skill discovery as role-scoped access control to govern tool-using LLM agents and reduce context/tool-selection risks. Relevance: Provides structural governance for enterprise tool-using agents, relevant to LLM Agent Engineering.

### Agent Test-Time Scaling and Self-Improvement
#### [Self-Play Pretraining with Zero Data](http://arxiv.org/abs/2609.30063v1)
Authors: Cowsik, Dolev, Li et al. Published: 2026-09-24. Contribution: Explores self-play pretraining without curated data, letting a model generate data for its own improvement. Relevance: Directly targets self-improvement and data-generation scaling for agents/models.

### LLM Agent Societies
No new papers today.

## 具身智能
### Vision-Language-Action Models
#### [AdaHVLA: Adaptive Harnesses for Long-Horizon Vision-Language-Action Execution](http://arxiv.org/abs/2609.29204v1)
Authors: Tang, Peng, Ding et al. Published: 2026-09-24. Contribution: Introduces AdaHVLA, adaptive harnesses that retain task history and progress for long-horizon VLA execution. Relevance: Directly addresses planning and persistent memory in VLA models.

#### [Direction-Scale Decomposition in Action Representation: Rethinking What to Tokenize for Vision-Language-Action Models](http://arxiv.org/abs/2609.28865v1)
Authors: Duan, Yin, Longhini et al. Published: 2026-09-24. Contribution: Rethinks action tokenization for discrete-token VLA via direction-scale decomposition to reduce sensitivity to speed and normalization. Relevance: Core action-representation design for VLA learning.

#### [Uncertainty-Gated Exploration Noise Suppresses Task Collapse in Online RL Fine-Tuning of a Flow-Matching Vision-Language-Action Policy](http://arxiv.org/abs/2609.28838v1)
Authors: Yardımcı, Çoğurcu et al. Published: 2026-09-23. Contribution: Proposes uncertainty-gated exploration noise to prevent task collapse during online RL fine-tuning of flow-matching VLA policies. Relevance: Addresses continual improvement and stability of deployed VLA policies.

### Embodied Navigation
#### [GPT-6-Astra Lights Up Embodied Navigation: Evaluation in Zero-Shot Vision-and-Language Navigation in Continuous Environments](http://arxiv.org/abs/2609.29861v1)
Authors: Dai, Sun, Wu et al. Published: 2026-09-24. Contribution: Evaluates GPT-6-Astra for zero-shot vision-and-language navigation in continuous environments using minimal perception/reasoning scaffolding. Relevance: Directly benchmarks foundation-model navigation in VLN-CE.

#### [From Passive Execution to Active Exploration: Agentic Embodied Manipulation in Realistic Environments](http://arxiv.org/abs/2609.29091v1)
Authors: Ma, Zhang, Bai et al. Published: 2026-09-24. Contribution: Moves embodied manipulation from passive execution to active exploration in realistic environments with textual semantic cues and distractors. Relevance: Connects active exploration and long-horizon embodied decision-making to navigation-like settings.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
No new papers today.

### Multimodal LLM Pruning
No new papers today.

### Continual Learning
#### [Hyperbolic Multimodal Continual Learning: A Closest-Admissible Solution](http://arxiv.org/abs/2609.29329v1)
Authors: Liu, Shen, Liu et al. Published: 2026-09-24. Contribution: Proposes a closest-admissible solution for hyperbolic multimodal continual learning that preserves Lorentz geometry across modalities. Relevance: Directly targets continual learning for multimodal models and geometry-aware knowledge retention.

#### [Automatic Rank Allocation for Low-Rank Adaptation in Large Language Models via lp Regularization](http://arxiv.org/abs/2609.28998v1)
Authors: Xie, Zheng, Wu et al. Published: 2026-09-24. Contribution: Automatically allocates LoRA ranks in LLMs via lp regularization to balance capacity and efficiency. Relevance: Supports parameter-efficient adaptation, a key tool for continual learning and model compression.

#### [Adaptive Fisher-Whitened Cross-Covariance for Low-Resource Speech Recognition](http://arxiv.org/abs/2609.29800v1)
Authors: Mishra, Qian, Post et al. Published: 2026-09-24. Contribution: Introduces adaptive Fisher-whitened cross-covariance for low-resource speech recognition adaptation. Relevance: Offers PEFT-style adaptation under limited data, relevant to continual learning under distribution shift.

## 视觉感知
### Event-Based Vision
#### [SEE Challenge 2026: Event-Guided Brightness Adjustment Across a Broad Illumination Range](http://arxiv.org/abs/2609.29347v1)
Authors: Lu, Xu, Zhou et al. Published: 2026-09-24. Contribution: Organizes the SEE Challenge 2026 for event-guided brightness adjustment across broad illumination ranges. Relevance: Benchmarks event-camera use for restoration under challenging lighting.

### 3D Point Cloud Perception
#### [SARFusion: Scene-Aware Routing Fusion for Robust Camera-LiDAR 3D Object Detection](http://arxiv.org/abs/2609.29235v1)
Authors: Zhao, Zheng, Li. Published: 2026-09-24. Contribution: Proposes SARFusion, a scene-aware routing fusion for robust camera-LiDAR 3D object detection under corrupted conditions. Relevance: Directly addresses multimodal 3D point cloud perception robustness.

#### [M3GD: Multi-Modal Multi-View Geometric Diffusion for Camera--LiDAR Novel View Synthesis](http://arxiv.org/abs/2609.30056v1)
Authors: Zhou, Xiao, Ye et al. Published: 2026-09-24. Contribution: Presents M3GD, a camera-LiDAR multimodal geometric diffusion model for novel view synthesis. Relevance: Uses point-cloud/LiDAR geometry for generative multimodal 3D perception.

#### [An Automated Georeferencing Technique for Multi-Temporal Stope Point Clouds for Downstream Geotechnical Analysis](http://arxiv.org/abs/2609.29186v1)
Authors: Patra, Raval, Ranasinghe et al. Published: 2026-09-24. Contribution: Develops automated georeferencing for multi-temporal stope point clouds in GNSS-denied underground mines. Relevance: Applies point-cloud processing to downstream geotechnical analysis.

### 3D Point Cloud Perception and Tracking
No new papers today.

## Cross-Topic Signals
- **Harnessed state and persistent context** — AdaHVLA’s task harness for long-horizon VLA mirrors exactly-once and role-scoped skill delivery in LLM agents: both manage multi-step state, retries, and progress tracking outside the core model.
- **Failure-mode robustness** — Uncertainty-gated exploration for VLA, SARFusion under corrupted driving conditions, and monitor-evasion benchmarks all target brittle behavior that emerges under realistic task pressure.
- **World models and rehearsal** — World Action Agent, M3GD camera-LiDAR novel view synthesis, and self-play pretraining all generate internal or rehearsal data to improve downstream action or representation learning.
- **Geometry-aware and parameter-efficient adaptation** — Hyperbolic multimodal continual learning, Fisher-whitened cross-covariance, and LoRA rank allocation share a focus on adapting large models while controlling capacity and preserving prior knowledge.
- **Multimodal sensing fusion** — Event-guided brightness adjustment, camera-LiDAR 3D detection, and camera-LiDAR novel view synthesis show continued convergence on combining complementary sensors for robust perception.

## Priority Reading
#### - **[Uncertainty-Gated Exploration Noise Suppresses Task Collapse in Online RL Fine-Tuning of a Flow-Matching Vision-Language-Action Policy](http://arxiv.org/abs/2609.28838v1)** — Concrete failure mode in online RL fine-tuning of flow-matching VLA; important for safe post-deployment robot learning.
#### - **[Hyperbolic Multimodal Continual Learning: A Closest-Admissible Solution](http://arxiv.org/abs/2609.29329v1)** — Directly addresses configured continual-learning interest and offers a geometric method for multimodal retention.
#### - **[Where Does Exactly-Once Live? Model, Harness, and Tool-Contract Effects on Duplicate Side Effects in LLM Agents](http://arxiv.org/abs/2609.29095v1)** — Practical tool-contract and harness design for reliable LLM agents; useful for engineering robust agent stacks.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*