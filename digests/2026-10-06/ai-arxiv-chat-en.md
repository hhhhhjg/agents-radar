# Lab Research Topics Radar 2026-10-06

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 9 new + 0 seen in the last 14 days | Generated: 2026-10-06 02:01 UTC

---

## Today's Overview
- **LLM Agent Engineering:** Three new papers advance agent-harness evaluation, provenance-aware memory invalidation for long-term agents, and a lifelong health digital-twin agent harness.
- **Agent Test-Time Scaling and Self-Improvement:** No new papers today.
- **LLM Agent Societies:** No new papers today.
- **Vision-Language-Action Models:** No new papers today.
- **Embodied Navigation:** No new papers today.
- **LLM Pruning and Inference Optimization:** No new papers today.
- **Multimodal LLM Pruning:** One new paper introduces stage-aware visual token pruning for efficient VLA inference.
- **Continual Learning:** Three new papers address paced LoRA updates, off-policy merging versus on-policy self-distillation, and gated target propagation for compositional generalization.
- **Event-Based Vision:** One new paper uses event-based sensors for asynchronous tracking, optical communication, and 3D motion capture.
- **3D Point Cloud Perception:** One new paper introduces selective spatiotemporal aggregation for 3D occupancy and scene flow prediction.
- **3D Point Cloud Perception and Tracking:** No new papers today.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [PACMI: Provenance-Aware Cascading Memory Invalidation for Long-Term LLM Agents](http://arxiv.org/abs/2610.05732v1)
**Authors:** Y. Wang, J. Liu, J. Zhang et al. | **Published:** 2026-10-05  
**Contribution:** Proposes provenance-aware cascading memory invalidation to handle outdated memories as new observations or domain evidence arrive.  
**Relevance:** Directly targets long-term memory maintenance, a core requirement for long-horizon LLM agents.

#### [MedicalHarness: A Controlled Evaluation of LLMs and Agent Harnesses on Medical Tasks](http://arxiv.org/abs/2610.05778v1)
**Authors:** Z. Wang, L. Zhao, K. Ding | **Published:** 2026-10-05  
**Contribution:** Conducts a controlled evaluation of LLMs and agent harnesses on medical tasks, treating agent scores as properties of model-harness pairs.  
**Relevance:** Highlights harness design as a key variable in agent evaluation for high-stakes domains.

#### [LifeLong Digital Twin: A Unified Modeling Paradigm and Agent Harness for Event-Driven Lifelong Health State Trajectories](http://arxiv.org/abs/2610.05566v1)
**Authors:** J. Jiang, S. Yates, J. Chong et al. | **Published:** 2026-10-04  
**Contribution:** Introduces a unified modeling paradigm and agent harness for event-driven lifelong health state trajectories.  
**Relevance:** Shows how agent harnesses can support longitudinal, event-driven modeling in a domain-specific lifelong setting.

### Agent Test-Time Scaling and Self-Improvement
No new papers today.

### LLM Agent Societies
No new papers today.

## 具身智能
### Vision-Language-Action Models
No new papers today.

### Embodied Navigation
No new papers today.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
No new papers today.

### Multimodal LLM Pruning
#### [When and What to Prune? Stage-Aware Visual Token Pruning for Efficient VLA](http://arxiv.org/abs/2610.05273v1)
**Authors:** T. Shi, H. Xiong, Z. Gong et al. | **Published:** 2026-10-04  
**Contribution:** Proposes stage-aware visual token pruning that decides when and what to prune for efficient VLA inference.  
**Relevance:** Directly addresses multimodal token pruning to accelerate vision-language-action inference.

### Continual Learning
#### [Off-Policy Merging Beats On-Policy Self-Distillation for Continual Learning](http://arxiv.org/abs/2610.05872v1)
**Authors:** C. H. Wu, T. Zhang, A. Raghunathan | **Published:** 2026-10-05  
**Contribution:** Shows that off-policy merging can outperform on-policy self-distillation for continual learning on post-trained models.  
**Relevance:** Challenges the common assumption that on-policy training is necessary for continual learning and suggests an alternative for reducing forgetting.

#### [PaLoRA: Paced Low-Rank Adaptation for Continual Learning](http://arxiv.org/abs/2610.04226v1)
**Authors:** Y. Li, F. Zeng, H. Tang | **Published:** 2026-10-03  
**Contribution:** Introduces paced low-rank adaptation to control gradient scaling with theoretical guidance rather than fixed small learning rates.  
**Relevance:** Improves LoRA-based continual learning by providing a principled way to restrict updates.

#### [Gated Target Propagation for Compositional Generalization in Continual Learning](http://arxiv.org/abs/2610.04649v1)
**Authors:** A. M. Njupoun, C. Bredenberg, B. A. Richards et al. | **Published:** 2026-10-03  
**Contribution:** Introduces gated target propagation to help continual learners reuse and recombine prior knowledge for novel task compositions.  
**Relevance:** Extends continual learning beyond retention toward compositional generalization.

## 视觉感知
### Event-Based Vision
#### [Asynchronous Tracking, Optical Communication and 3D Motion Capture using Event-based Sensors](http://arxiv.org/abs/2610.04342v1)
**Authors:** Z. Wang, A. Apps, H. Battisson et al. | **Published:** 2026-10-03  
**Contribution:** Uses event-based sensors for asynchronous tracking, optical communication, and 3D motion capture in cooperative robotics.  
**Relevance:** Advances event-based vision for robot localization, communication, and motion capture.

### 3D Point Cloud Perception
#### [SelectOccFlow: Selective Spatiotemporal Aggregation for 3D Occupancy and Scene Flow Prediction](http://arxiv.org/abs/2610.04356v1)
**Authors:** Y. Wang, K. Luo, Y. Zheng et al. | **Published:** 2026-10-03  
**Contribution:** Proposes selective spatiotemporal aggregation to avoid unreliable feature and history aggregation in camera-based 3D occupancy and scene flow prediction.  
**Relevance:** Improves robust 3D scene understanding for autonomous driving.

### 3D Point Cloud Perception and Tracking
No new papers today.

## Cross-Topic Signals
- Agent harness design is emerging as a control layer across evaluation, memory, and lifelong modeling, connecting **LLM Agent Engineering** with domain-specific agent applications.
- Long-term memory invalidation and lifelong health trajectories both manage outdated or evolving knowledge, linking **LLM Agent Engineering** to **Continual Learning**.
- Visual token pruning for VLA connects **Multimodal LLM Pruning** with **Vision-Language-Action Models** and inference optimization.
- Event-based asynchronous tracking and selective 3D spatiotemporal aggregation both target robust perception under noisy, delayed, or misaligned signals, linking **Event-Based Vision** and **3D Point Cloud Perception**.
- Continual learning methods such as paced LoRA, off-policy merging, and gated target propagation offer update-control and knowledge-reuse mechanisms that could inform agent memory maintenance and efficient multimodal adaptation.

## Priority Reading
#### - [PACMI: Provenance-Aware Cascading Memory Invalidation for Long-Term LLM Agents](http://arxiv.org/abs/2610.05732v1) — Directly addresses long-term memory invalidation, a core bottleneck for long-horizon LLM agents.
#### - [When and What to Prune? Stage-Aware Visual Token Pruning for Efficient VLA](http://arxiv.org/abs/2610.05273v1) — Bridges multimodal token pruning with VLA efficiency, useful for inference optimization in embodied settings.
#### - [Off-Policy Merging Beats On-Policy Self-Distillation for Continual Learning](http://arxiv.org/abs/2610.05872v1) — Challenges a common continual-learning assumption and proposes an off-policy alternative to reduce forgetting.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*