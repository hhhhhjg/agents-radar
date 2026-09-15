# Lab Research Topics Radar 2026-09-16

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 17 new + 0 seen in the last 14 days | Generated: 2026-09-15 23:53 UTC

---

## Today's Overview
- **LLM Agent Engineering:** 3 new matches progressed tool-using agent isolation and oversight failures, plus a cross-listed agent test-time strategy analysis.
- **Agent Test-Time Scaling and Self-Improvement:** 3 new matches focused on adaptive test-time compute, Elo-per-token agent strategies, and resource-allocation evidence.
- **LLM Agent Societies:** No new papers today.
- **Vision-Language-Action Models:** 4 new matches advanced VLA robustness, attribution, grounded reasoning-to-action, and cross-listed navigation world modeling.
- **Embodied Navigation:** 3 new papers covered training-free navigation, memory-based active exploration, and VLM-guided costmap correction.
- **LLM Pruning and Inference Optimization:** 3 new matches included VLM token pruning, RAG context-compression attribution, and edge early-exit inference; the first two are most LLM-relevant.
- **Multimodal LLM Pruning:** No new papers today.
- **Continual Learning:** 3 new matches covered federated continual learning, PEFT layer selection for VLM adaptation, and a cross-listed agent test-time strategy paper.
- **Event-Based Vision:** No new papers today.
- **3D Point Cloud Perception:** 1 new paper on lightweight multimodal 3D UAV localization.
- **3D Point Cloud Perception and Tracking:** No new papers today.

## LLM Agent 与多智能体

### LLM Agent Engineering
#### [The Stochastic Deputy: Structural Tenant Isolation for Tool-Using LLM Agents](http://arxiv.org/abs/2609.14780v1)
- **Authors:** M. S. A. Baig, S. A. Gillani, A. Ali et al. | **Published:** 2026-09-13
- **Contribution:** Formalizes the stochastic deputy problem for tool-using LLM agents and proposes structural tenant isolation.
- **Relevance:** Core to LLM agent engineering for secure tool use and multi-tenant deployment.

#### [Why LLM Agents Collapse Without Oversight: The Enforcement Gap as the Mechanism Behind Emergence World Failures](http://arxiv.org/abs/2609.15293v1)
- **Authors:** Y. Wang | **Published:** 2026-09-14
- **Contribution:** Identifies the enforcement gap as the mechanism behind unsupervised multi-agent simulation failures.
- **Relevance:** Informs LLM agent engineering on oversight mechanisms and failure modes in unsupervised agents.

### Agent Test-Time Scaling and Self-Improvement
#### [When Agents Slow Down: Understanding LLM Agents' Test-Time Strategies via Elo-per-token Analysis](http://arxiv.org/abs/2609.15309v1)
- **Authors:** K. Liu, Q. Mang, B. Peng et al. | **Published:** 2026-09-14
- **Contribution:** Analyzes LLM agents' test-time strategies using Elo-per-token analysis to measure how performance scales with adaptive compute.
- **Relevance:** Directly measures agent test-time scaling and self-improvement strategies.

#### [Beyond Depth and Width: The Information-Slack Dilemma in Streaming Test-Time Compute](http://arxiv.org/abs/2609.14995v1)
- **Authors:** X. Zhang | **Published:** 2026-09-14
- **Contribution:** Identifies an information-slack dilemma in streaming test-time compute and how evidence order affects reasoning policies.
- **Relevance:** Directly addresses test-time compute allocation and reasoning policy under streaming evidence.

#### [When does a scaling result justify a different allocation? A critical review of resource-allocation evidence for AI systems](http://arxiv.org/abs/2609.14500v1)
- **Authors:** S. M. Emadi | **Published:** 2026-09-13
- **Contribution:** Critically reviews when scaling results justify different resource allocations for AI systems with retrieval, search, verification, tools, and interaction.
- **Relevance:** Provides resource-allocation evidence for deciding when test-time scaling justifies different budgets.

### LLM Agent Societies
No new papers today.

## 具身智能

### Vision-Language-Action Models
#### [GRAVA: Grounded Reasoning-to-Action Representation and Learning for Autonomous Driving](http://arxiv.org/abs/2609.15169v1)
- **Authors:** X. Liu, H. Li, J. Leng et al. | **Published:** 2026-09-14
- **Contribution:** Proposes Grounded Reasoning-to-Action to unify grounded reasoning and executable behavior for autonomous driving VLA models.
- **Relevance:** Core VLA contribution for grounded reasoning and action in driving.

#### [IMPACT-VLA: Interaction-aware Multimodal Propagation Attribution via Counterfactual Trajectories for Vision-Language-Action Policies](http://arxiv.org/abs/2609.15005v1)
- **Authors:** J. Kim, S. Park | **Published:** 2026-09-14
- **Contribution:** Uses counterfactual trajectories to attribute multimodal input contributions across VLA execution stages.
- **Relevance:** Improves VLA interpretability and multimodal attribution during execution.

#### [Beyond Single-Axis Testing: Paired Evaluation of Compound Robustness in Vision-Language-Action Policies](http://arxiv.org/abs/2609.15940v1)
- **Authors:** H. Sawada, S. Kasahara | **Published:** 2026-09-14
- **Contribution:** Evaluates compound robustness of VLA policies under multiple simultaneous perturbations via paired testing.
- **Relevance:** Advances VLA robustness evaluation under realistic compound distribution shifts.

### Embodied Navigation
#### [HarnessVLN: Unifying Training-Free Embodied Navigation through an Agent Harness](http://arxiv.org/abs/2609.15195v1)
- **Authors:** Y. Chen, L. Che, Z. Huang et al. | **Published:** 2026-09-14
- **Contribution:** Unifies training-free embodied navigation through an agent harness.
- **Relevance:** Directly targets embodied navigation with training-free agent orchestration.

#### [GLAM: Training a latent world model over global spatiotemporal memory for active exploration and navigation](http://arxiv.org/abs/2609.14561v1)
- **Authors:** I.-T. Ieong, R. Feng, Z. Lu et al. | **Published:** 2026-09-13
- **Contribution:** Trains a goal-conditioned latent world model over global spatiotemporal memory for active exploration and navigation.
- **Relevance:** Core embodied navigation/exploration with memory-based world modeling.

#### [NavPatch: Evidence-Guided Object-Level Costmap Correction with Vision-Language Models](http://arxiv.org/abs/2609.14543v1)
- **Authors:** S. Sun, X. Tao, H. Wang et al. | **Published:** 2026-09-13
- **Contribution:** Corrects object-level navigation costmaps using evidence from vision-language models.
- **Relevance:** Directly improves navigation costmap correction using VLM evidence.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization
#### [Don't Send What You Don't Need: Question-Guided Token Pruning as a Privacy Defense for Vision-Language Models](http://arxiv.org/abs/2609.15671v1)
- **Authors:** M. K. Syfullah, A. A. Khalil | **Published:** 2026-09-14
- **Contribution:** Uses question-guided token pruning to reduce transmitted visual tokens as a privacy defense for VLMs.
- **Relevance:** Token pruning/inference optimization for multimodal LLMs, with privacy implications.

#### [The Attribution-Compression Frontier in Retrieval-Augmented Generation](http://arxiv.org/abs/2609.14245v1)
- **Authors:** D. Mody | **Published:** 2026-09-13
- **Contribution:** Measures citation attribution across context-compression methods and budgets in retrieval-augmented generation.
- **Relevance:** Context compression for inference optimization and attribution trade-offs in RAG pipelines.

### Multimodal LLM Pruning
No new papers today.

### Continual Learning
#### [Sylvas: Synergistic Learning Value based Device Scheduling in Federated Continual Learning](http://arxiv.org/abs/2609.15763v1)
- **Authors:** Y. Sun, Y. Bai, T. Chen et al. | **Published:** 2026-09-14
- **Contribution:** Introduces a synergistic learning-value based device scheduling method for federated continual learning.
- **Relevance:** Core continual learning under federated, non-stationary data streams.

#### [Pre-PEFT Probing: Weight Statistics and Perturbation Robustness for Layer Selection in VLM Vision Encoders](http://arxiv.org/abs/2609.15229v1)
- **Authors:** Q. Xia, J. Bao, S. Cheng et al. | **Published:** 2026-09-14
- **Contribution:** Proposes pre-fine-tuning probing of weight statistics and perturbation robustness for PEFT layer selection in VLM vision encoders.
- **Relevance:** Efficient adaptation angle with potential continual-learning utility.

## 视觉感知

### Event-Based Vision
No new papers today.

### 3D Point Cloud Perception
#### [PRI-Net: A Lightweight Multimodal Framework for 3D UAV Localization](http://arxiv.org/abs/2609.14469v1)
- **Authors:** Z. Chen, J. Lu, Z. Ye et al. | **Published:** 2026-09-13
- **Contribution:** Proposes a lightweight multimodal framework for 3D UAV localization addressing sparse LiDAR geometry and modality-imbalanced fusion.
- **Relevance:** 3D point cloud/LiDAR perception for UAV localization.

### 3D Point Cloud Perception and Tracking
No new papers today.

## Cross-Topic Signals
- **Adaptive compute/resource allocation** connects Agent Test-Time Scaling with Inference Optimization: Elo-per-token, information-slack, and scaling-allocation reviews all ask how to spend limited compute dynamically.
- **Token/context compression** bridges LLM Pruning and Multimodal LLM Pruning: VLM token pruning and RAG context compression both trade input size against quality or attribution.
- **Grounded action and memory** links VLA and Embodied Navigation: spatiotemporal world models, agent harnesses, and VLM-guided costmaps all convert multimodal evidence into navigation/action.
- **Robustness and attribution** connects VLA evaluation/interpretability with agent oversight/security: both diagnose failure modes under perturbation or unsupervised conditions.
- **Adaptation under non-stationarity** connects Continual Learning with PEFT/VLM adaptation: federated device scheduling and pre-PEFT probing both target efficient adaptation, while test-time strategy work studies dynamic adaptation.

## Priority Reading
- **When Agents Slow Down** — Read in full because it directly measures agent test-time scaling/self-improvement and introduces Elo-per-token analysis for adaptive compute, stopping, and tool use.
- **Sylvas** — Read in full because it is the strongest Continual Learning paper today, addressing federated non-stationary data streams and device scheduling.
- **GRAVA** — Read in full because it targets a core VLA weakness: grounding intermediate reasoning in physical scene evidence and connecting it to executable driving behavior.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*