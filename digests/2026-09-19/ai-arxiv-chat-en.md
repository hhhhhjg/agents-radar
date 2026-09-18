# Lab Research Topics Radar 2026-09-19

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 22 new + 0 seen in the last 14 days | Generated: 2026-09-18 23:48 UTC

---

## Today's Overview
- **LLM Agent Engineering**: Three new papers on harness planning/release control, dual-axis RL feedback optimization, and cut-point replay for regression testing. Progress centers on reliability, reproducibility, and policy learning.
- **Agent Test-Time Scaling and Self-Improvement**: Three new papers on candidate-generation strategy for test-time scaling, equilibrium selection in regularized self-play, and dynamic state-space reasoning benchmarks. Progress centers on budget-aware scaling and self-play evaluation.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: Four VLA-related papers include human-in-the-loop post-training, federated consensus training, persistent adversarial effects, plus Navi-Agent cross-listed with navigation. Progress spans adaptation, distributed training, and robustness.
- **Embodied Navigation**: Three new papers on cooperative referring Gaussian splatting, unlocalized monocular navigation, and safety-constrained negative scene understanding. Progress spans multi-agent mapping, zero-shot VLN-CE, and risk-aware perception.
- **LLM Pruning and Inference Optimization**: No new papers today.
- **Multimodal LLM Pruning**: One new paper on query-conditioned visual token pruning. Progress targets training-free MLLM inference under fixed budgets.
- **Continual Learning**: Three new papers on post-hoc stability-plasticity rectification, geometry-aware point cloud prompting, and long-horizon agent architecture. Progress spans forgetting mitigation and efficient adaptation.
- **Event-Based Vision**: Three new papers on velocity-invariant event representation, serialized motion evidence for tiny object detection, and a fully spiking state-space model. Progress spans representations, detection, and real-time temporal perception.
- **3D Point Cloud Perception**: Three new papers on open-vocabulary 3D detection, urban building instance segmentation, and PBR Gaussian asset decomposition. Progress spans open-vocabulary perception and modular 3D pipelines.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [How Do Agent Harnesses Create Value? Planning Information and Release Control in Stateful LLM Agents](http://arxiv.org/abs/2609.20474v1)
- Y. Zhang, K. Xu, Y. Chen | 2026-09-17 | **Contribution:** Studies how planning guidance, execution organization, and release control affect success, erroneous acceptance, and cost in stateful LLM agents. **Relevance:** Directly informs harness design and agent reliability engineering.
#### [Chronicle: Cut-Point Replay for Regression Testing of LLM Agents](http://arxiv.org/abs/2609.20625v1)
- T. Chawla, S. Koul | 2026-09-17 | **Contribution:** Introduces cut-point replay to reproduce and regression-test non-deterministic LLM agent failures. **Relevance:** Addresses reproducibility and testing infrastructure for agent engineering.
#### [Dual-Axis Policy Optimization for LLM Agents: Bayesian Feedback Attribution and Trajectory Mass Normalization](http://arxiv.org/abs/2609.19830v1)
- Y. Zhuang, B. Yu, J. Yang et al. | 2026-09-17 | **Contribution:** Formulates intra-trajectory feedback attribution and inter-trajectory aggregation for RL of LLM agents. **Relevance:** Provides an optimization method for improving agent policy learning from environment feedback.

### Agent Test-Time Scaling and Self-Improvement
#### [Sample Count Is Not Enough: Candidate-Generation Strategy Shapes the Energy and Performance of LLM Test-Time Scaling](http://arxiv.org/abs/2609.19499v1)
- M. Kashaniyan, A. Jannesari | 2026-09-16 | **Contribution:** Shows candidate-generation strategy, not just sample count N, shapes energy and performance in sampling-based test-time scaling. **Relevance:** Directly targets efficient test-time scaling and inference-budget design.
#### [PetriBench: Benchmarking LLM Reasoning over Dynamic State Spaces](http://arxiv.org/abs/2609.19883v1)
- P. Koussios, B. Jäger, J. H. Yao et al. | 2026-09-17 | **Contribution:** Introduces a compact, self-contained benchmark for LLM reasoning over dynamic state spaces. **Relevance:** Provides evaluation for state tracking and reasoning relevant to self-improvement.
#### [Steering Equilibrium Selection in Regularized Self-Play via the Reference Policy](http://arxiv.org/abs/2609.19820v1)
- L. Leal | 2026-09-17 | **Contribution:** Studies how the regularized reference policy selects among value-equivalent equilibria in self-play. **Relevance:** Relevant to self-play equilibrium selection and agent self-improvement dynamics.

### LLM Agent Societies
No new papers today.

## 具身智能
### Vision-Language-Action Models
#### [HIL-UMI: Bringing Human-in-the-Loop Post-Training of Vision-Language-Action Models to Universal Manipulation Interface](http://arxiv.org/abs/2609.20659v1)
- Z. Han, Y. Zeng, J. Zhang et al. | 2026-09-17 | **Contribution:** Brings human-in-the-loop post-training to VLA models within the UMI platform to address static supervised fine-tuning limits. **Relevance:** Directly advances practical VLA adaptation for deployment.
#### [Co-VLA: Consensus-based Federated Training for Vision-Language-Action Models](http://arxiv.org/abs/2609.19923v1)
- H. Li, G. D. Er, M. Muehlebach et al. | 2026-09-17 | **Contribution:** Proposes consensus-based federated training for VLA models across distributed robot data. **Relevance:** Relevant to scaling robot learning without centralizing data.
#### [Beyond Patch Removal: Persistent Adversarial Effects in Vision-Language-Action Policies](http://arxiv.org/abs/2609.19669v1)
- E. Wu, F. Guo, Y. Cao et al. | 2026-09-17 | **Contribution:** Separates immediate action corruption from persistent state effects after adversarial patches are removed in VLA policies. **Relevance:** Highlights robustness evaluation gaps for deployed VLA systems.

### Embodied Navigation
#### [Navi-Agent: Unlocalized Monocular Navigation Agent](http://arxiv.org/abs/2609.20388v1)
- W. Xie, M. Hong, Y. Wang et al. | 2026-09-17 | **Contribution:** Presents a zero-shot VLN-CE agent that avoids geometric localization and coordinate-based spatial states. **Relevance:** Directly targets unlocalized monocular navigation in unknown environments.
#### [CoRef-GS: Cooperative Referring Gaussian Splatting for Multi-Agent Scene Understanding](http://arxiv.org/abs/2609.20586v1)
- Z. Zhou, K. Peng, R. Yang et al. | 2026-09-17 | **Contribution:** Enables cooperative referring scene understanding across multi-agent Gaussian maps from designated viewpoints. **Relevance:** Relevant to multi-agent embodied navigation and language grounding.
#### [Absence is Presence: Understanding Visual Scene Negative Events Under Safety Cognitive Constraint](http://arxiv.org/abs/2609.19812v1)
- Z. Jiang, H. Wang, B. Liang et al. | 2026-09-17 | **Contribution:** Introduces visual scene negative captioning for recognizing safety-critical absent objects. **Relevance:** Relevant to embodied navigation safety and scene understanding under missing-evidence constraints.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
No new papers today.

### Multimodal LLM Pruning
#### [QCPruner: Query-Conditioned Population Coverage for Visual Token Pruning](http://arxiv.org/abs/2609.19990v1)
- S. He, Y. Liang, R. He et al. | 2026-09-17 | **Contribution:** Proposes query-conditioned population coverage for training-free visual token pruning under fixed budgets. **Relevance:** Directly addresses efficient MLLM inference by preserving query-relevant evidence.

### Continual Learning
#### [Past, Future, All at Once: Mitigating Stability-Plasticity Dilemma via Post-hoc JANUS Rectification](http://arxiv.org/abs/2609.19985v1)
- Z. Zheng, L. Tao, Y. Guan et al. | 2026-09-17 | **Contribution:** Introduces post-hoc JANUS rectification to mitigate catastrophic forgetting without restrictive subspace orthogonality. **Relevance:** Core continual-learning method for the stability-plasticity trade-off.
#### [GAPrompt++: Multi-Granular Geometry-Aware Point Cloud Prompt for 3D Vision Model](http://arxiv.org/abs/2609.19716v1)
- Z. Ai, Z. Cui, Y. Guo et al. | 2026-09-17 | **Contribution:** Develops multi-granular geometry-aware prompts for parameter-efficient adaptation of 3D vision models. **Relevance:** Relevant to continual adaptation and storage-efficient fine-tuning.
#### [An Architecture for Long-Horizon Agents: Levels, Ticks and Cascaded Intelligence](http://arxiv.org/abs/2609.19519v1)
- E. Nijkamp, A. Koul, E. Pakhomov et al. | 2026-09-17 | **Contribution:** Proposes levels, ticks, and cascaded intelligence for long-horizon agents that outlive context windows. **Relevance:** Connects long-horizon agent memory and continual operation to continual-learning concerns.

## 视觉感知
### Event-Based Vision
#### [An Event Preserving Velocity Invariant Representation for Event Cameras](http://arxiv.org/abs/2609.19973v1)
- M. Ikura, L. Gava, J. Wu et al. | 2026-09-17 | **Contribution:** Introduces a velocity-invariant event representation that preserves events for low-latency perception. **Relevance:** Directly improves event-camera representations for robotics.
#### [PointEvent: Rethinking Event-based Tiny Object Detection via Serialized Motion Evidence Accumulation](http://arxiv.org/abs/2609.20066v1)
- Z. Wu, B. Jia, W. Yan et al. | 2026-09-17 | **Contribution:** Accumulates serialized motion evidence for event-based tiny UAV object detection under sparse, fragmented events. **Relevance:** Relevant to event-based detection in cluttered dynamic scenes.
#### [REACT: A Fully Spiking State-Space Model for Real-Time Event-Driven Temporal Perception](http://arxiv.org/abs/2609.19204v1)
- G. Keime, N. Cuperlier, B. R. Cottereau | 2026-09-16 | **Contribution:** Proposes a fully spiking state-space model for continuous event-driven temporal perception. **Relevance:** Relevant to real-time robotic perception without frame/bin accumulation.

### 3D Point Cloud Perception
#### [Open-vocabulary 3D object detection with promptable segmentation](http://arxiv.org/abs/2609.19358v1)
- Ö. F. Deniz, M. T. Koçyiğit | 2026-09-16 | **Contribution:** Asks whether 3D object detection can be solved training-free and open-vocabulary using promptable segmentation. **Relevance:** Directly targets open-vocabulary 3D point cloud detection.
#### [Instance Segmentation and Fine-grained Classification for Urban Buildings with Adaptive Region Dividing and Spatially-Supervised Contrastive Learning](http://arxiv.org/abs/2609.19631v1)
- W. Zhang, Q. Zhang, H. Huang | 2026-09-17 | **Contribution:** Uses adaptive region dividing and spatially supervised contrastive learning for building instance segmentation and classification in large urban point clouds. **Relevance:** Relevant to large-scale point cloud perception and urban scene understanding.
#### [GS-PI: An Optimization-Decoupled Appearance Decomposition Approach for Generating PBR Gaussian Assets](http://arxiv.org/abs/2609.19907v1)
- J. Xu, R. Xie, Z. Huang et al. | 2026-09-17 | **Contribution:** Decouples optimization for appearance decomposition to generate PBR Gaussian assets from Gaussian Splatting. **Relevance:** Adjacent 3D asset generation relevance to point-cloud/3D perception pipelines.

### 3D Point Cloud Perception and Tracking
No new papers today.

## Cross-Topic Signals
- Agent harnesses, test-time scaling, self-play, and long-horizon architecture all tackle control over inference budgets, feedback, and stability across extended trajectories.
- VLA post-training, federated training, and adversarial persistence connect directly to embodied navigation robustness and deployment safety.
- Event-based perception and embodied navigation both target low-latency, dynamic, safety-critical robotic sensing.
- Parameter-efficient 3D prompting, multimodal token pruning, and post-hoc continual rectification all seek cheaper adaptation or inference without full retraining.
- Open-vocabulary 3D detection and Gaussian asset decomposition point toward more general, modular, and training-free 3D perception pipelines.

## Priority Reading
1. **HIL-UMI** — Concrete human-in-the-loop post-training for VLA deployment; key for manipulation adaptation under static SFT limits.
2. **Chronicle** — Reproducible regression testing for non-deterministic LLM agents; foundational for reliable agent engineering.
3. **Past, Future, All at Once** — Post-hoc rectification for stability-plasticity; directly addresses catastrophic forgetting in continual learning.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*