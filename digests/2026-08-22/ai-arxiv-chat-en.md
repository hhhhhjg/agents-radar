# Lab Research Topics Radar 2026-08-22

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 12 new + 0 seen in the last 14 days | Generated: 2026-08-21 22:17 UTC

---

## 1. Today's Overview

- **LLM Agent 与多智能体 / LLM Agent Engineering**: 3 new papers — provable skill selection under bounded context, workflow-level policy compliance, and cross-task skill transfer.
- **LLM Agent 与多智能体 / Agent Test-Time Scaling and Self-Improvement**: 1 new paper — adaptive reasoning for test-time compute allocation.
- **LLM Agent 与多智能体 / LLM Agent Societies**: No new papers today.
- **具身智能 / Vision-Language-Action Models**: 3 new papers — safety alignment for embodied VLM agents, a planning-oriented autonomy survey, and VLM-guided exploration of VLA policies.
- **具身智能 / Embodied Navigation**: No new papers today.
- **模型压缩与持续学习 / LLM Pruning and Inference Optimization**: 1 new paper — visual-token clustering and denoising for faster VLMs.
- **模型压缩与持续学习 / Multimodal LLM Pruning**: No new papers today.
- **模型压缩与持续学习 / Continual Learning**: 3 new papers — federated continual learning for cultural heritage, frequency-aware continual learning for smart contracts, and hemispheric redundancy/specialisation.
- **视觉感知 / Event-Based Vision**: No new papers today.
- **视觉感知 / 3D Point Cloud Perception**: 1 new paper — open-vocabulary 3D object detection via co-distillation discovery.
- **视觉感知 / 3D Point Cloud Perception and Tracking**: No new papers today.

## 2. Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [Optimal Skill Selection for LLM Agents with Provable Bicriteria Guarantees](http://arxiv.org/abs/2608.19993v1)
Chen, Chen, Wang et al. | Published: 2026-08-20
Contribution: Formalizes skill selection for bounded-context LLM agents as a bicriteria optimization problem with provable guarantees on task performance and token cost.
Relevance: Targets the core agent-engineering trade-off between capability and context budget, with direct implications for skill-retrieval system design.

#### [PolicyGuide: From Guarding One Action to Guiding the Whole Workflow for Policy-Compliant LLM Agents](http://arxiv.org/abs/2608.19861v1)
Kang, Yu, Hwang | Published: 2026-08-20
Contribution: Extends runtime safeguards from single-action interception to whole-workflow guidance, covering both forbidden actions and omitted procedural requirements in customer-service agents.
Relevance: Addresses workflow-level compliance, a practical and under-served aspect of LLM-agent engineering.

#### [Break It Down, Pass It On: Cross-Task Skill Transfer in LLM Agents](http://arxiv.org/abs/2608.20274v1)
Feng, Bijoy, Balasubramanian et al. | Published: 2026-08-20
Contribution: Investigates when agent-induced skills transfer reliably across tasks and when they degrade the performance of retrieving agents.
Relevance: Provides evidence on when skill reuse helps versus hurts in experience-growing LLM agents, informing transfer-safe agent design.

### Agent Test-Time Scaling and Self-Improvement

#### [Learning When to Think: Adaptive Reasoning for Test-Time Compute Allocation](http://arxiv.org/abs/2608.20256v1)
Kassenaar, Yang, François-Lavet | Published: 2026-08-20
Contribution: Studies whether reasoning models can learn to allocate their own test-time compute adaptively rather than relying on a fixed token budget.
Relevance: Directly advances adaptive test-time scaling, a central mechanism for self-improving reasoning agents.

### LLM Agent Societies
No new papers today

## 具身智能

### Vision-Language-Action Models

#### [SafeBranch: Branch-Pair Safety Alignment for Embodied Agents](http://arxiv.org/abs/2608.19729v1)
Lee, Jeong, Lee et al. | Published: 2026-08-20
Contribution: Proposes branch-pair safety alignment for VLM-based embodied agents, treating safety and task success as distinct objectives in interactive safety.
Relevance: Addresses a key gap in VLA policies — safety compliance while following instructed tasks in embodied settings.

#### [Planning-Oriented End-to-End Autonomous Driving: Architectures, Evaluation, and Emerging Paradigms](http://arxiv.org/abs/2608.20111v1)
Guan, Liu, Rao et al. | Published: 2026-08-20
Contribution: Surveys the transition from camera-to-control regression to planning-oriented, trajectory-level end-to-end driving systems with realistic evaluation protocols.
Relevance: Provides a structural map of VLA-style driving architectures and benchmarks, useful for positioning embodied autonomy work.

#### [EXIMO: VLM Guided Exploration of VLA Policies](http://arxiv.org/abs/2608.19891v1)
Sukhija, Groth, Shridhar et al. | Published: 2026-08-20
Contribution: Uses VLM-guided exploration to efficiently finetune large VLA manipulation policies on the fly, reducing reliance on large teleoperation datasets.
Relevance: Addresses the data-efficiency bottleneck in adapting VLA models to new manipulation tasks.

### Embodied Navigation
No new papers today

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [Clustering and Token Denoising for Faster and More Robust VLMs](http://arxiv.org/abs/2608.19285v1)
Rossigneux, Kucher, Lorrain et al. | Published: 2026-08-19
Contribution: Reduces the visual-token burden in LLaVA-style VLMs via clustering and token denoising to enable faster, more robust edge deployment.
Relevance: Provides a lightweight inference-optimization strategy for multimodal models, aligned with the lab's pruning and efficiency targets.

### Multimodal LLM Pruning
No new papers today

### Continual Learning

#### [An Inclusive and Lightweight Approach to Federated Continual Learning for Cultural Heritage](http://arxiv.org/abs/2608.20038v1)
Theologitis, Meng, Eleftheriadis et al. | Published: 2026-08-20
Contribution: Proposes a lightweight federated continual learning approach for distributed, access-restricted, and continuously evolving cultural heritage collections.
Relevance: Combines continual learning with federated data constraints, matching the lab's interest in realistic continual-learning settings.

#### [Frequency-Aware Continual Learning for Smart Contract Vulnerability Detection with Large Language Models](http://arxiv.org/abs/2608.19680v1)
Huang, Kang, Liu et al. | Published: 2026-08-20
Contribution: Applies frequency-aware, parameter-efficient continual learning so LLMs adapt to sequentially arriving vulnerability categories without full retraining.
Relevance: Demonstrates LLM continual adaptation under sequential tasks with constrained update budgets, a directly transferable methodology.

#### [In Two Minds about Lifelong Learning: Exploring Hemispheric Redundancy and Specialisation in Neural Models](http://arxiv.org/abs/2608.19514v1)
Smith, Kuhlmann, Roy et al. | Published: 2026-08-20
Contribution: Explores hemisphere-inspired redundancy and specialisation to balance retention of prior knowledge with adaptation in continual learning.
Relevance: Offers a bio-inspired perspective on the stability-plasticity trade-off that is central to lifelong learning.

## 视觉感知

### Event-Based Vision
No new papers today

### 3D Point Cloud Perception

#### [Open-Vocabulary 3D Object Detection with Co-Distillation Discovery and Dual Guidance Robust Training](http://arxiv.org/abs/2608.19973v1)
Yuan, Xu, Zhu et al. | Published: 2026-08-20
Contribution: Improves open-vocabulary 3D object detection by co-distilling novel-object discovery from foundation models and applying dual-guidance robust training.
Relevance: Advances detection of unseen objects in point clouds, directly strengthening open-vocabulary 3D perception capabilities.

### 3D Point Cloud Perception and Tracking
No new papers today

## 3. Cross-Topic Signals

- **Token/compute efficiency as a cross-cutting theme**: skill selection under context budgets (Chen et al.), adaptive test-time compute allocation (Kassenaar et al.), and visual-token clustering/denoising (Rossigneux et al.) all optimize resource use in LLM/VLM inference.
- **Foundation models as teachers**: co-distillation from foundation models for 3D-OVD (Yuan et al.) and VLM-guided exploration for VLA finetuning (Sukhija et al.) both use strong pretrained models to supervise downstream policies.
- **Safety as structured process rather than single action**: SafeBranch aligns embodied-agent safety at branch-pair level (Lee et al.), while PolicyGuide enforces whole-workflow compliance (Kang et al.) — parallel views of safety spanning multiple decision points.
- **Continual adaptation under constraints**: federated continual learning (Theologitis et al.), adapter-based LLM continual learning (Huang et al.), and hemispheric specialisation (Smith et al.) all tackle learning with retention and update limits.

## 4. Priority Reading

#### - **Optimal Skill Selection for LLM Agents with Provable Bicriteria Guarantees** — provable guarantees on the capability-versus-token-cost trade-off make this directly actionable for designing bounded-context agent systems.
#### - **Learning When to Think: Adaptive Reasoning for Test-Time Compute Allocation** — addresses the core open problem of adaptive test-time compute, with immediate relevance to agent self-improvement.
#### - **EXIMO: VLM Guided Exploration of VLA Policies** — offers a practical recipe for data-efficient finetuning of VLA policies, highly relevant to embodied manipulation efforts.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*