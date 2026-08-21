# Lab Research Topics Radar 2026-08-22

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 24 new + 12 seen in the last 14 days | Generated: 2026-08-21 22:17 UTC

---

## Today's Overview

- **LLM Agent Engineering** — 10 new: skill selection/transfer, workflow policy compliance, step-level credit assignment, memory-clarification, financial rule grounding, KV-cache reuse, recursive self-improvement, and social-sim identity.
- **Agent Test-Time Scaling and Self-Improvement** — 1 new (adaptive compute allocation) plus 2 repeated (test-time scaling exploitation bottleneck, adaptive self-play environments).
- **LLM Agent Societies** — No new papers today.
- **Vision-Language-Action Models** — 7 new: safety alignment, VLA finetuning/continual skill learning, an end-to-end driving survey, hand-data recovery, and reduced-dynamics simulation; 3 repeated efficiency/egocentric/4D papers.
- **Embodied Navigation** — No new papers today; 3 relevant repeats remain (lifelong scene memory, driving representation, assistive guidance).
- **LLM Pruning and Inference Optimization** — 1 new (visual-token clustering/denoising); the related VLA token-routing paper is covered under VLA.
- **Multimodal LLM Pruning** — No new papers today.
- **Continual Learning** — 4 new: hemispheric redundancy, federated CL, frequency-aware LLM adapters, embodied-intelligence survey; 2 repeated on harness adaptation and co-observation.
- **Event-Based Vision** — No new papers today.
- **3D Point Cloud Perception** — 1 new (open-vocabulary 3D object detection); 1 repeated PCQA paper; CL4D is covered under VLA.
- **3D Point Cloud Perception and Tracking** — No new papers today.

---

## LLM Agent and Multi-Agent

### LLM Agent Engineering

#### [Optimal Skill Selection for LLM Agents with Provable Bicriteria Guarantees](http://arxiv.org/abs/2608.19993v1)
Chen et al. — 2026-08-20. Contribution: Formulates reusable-skill selection for bounded contexts as combinatorial optimization with provable trade-offs between task performance and token cost. Relevance: Directly addresses the core agent-engineering problem of loading the right skills under context limits.

#### [PolicyGuide: From Guarding One Action to Guiding the Whole Workflow for Policy-Compliant LLM Agents](http://arxiv.org/abs/2608.19861v1)
Kang et al. — 2026-08-20. Contribution: Extends runtime safeguards from single-action checks to whole-workflow guidance, covering forbidden actions and omitted procedural requirements. Relevance: Targets a practical compliance failure mode in customer-service LLM agents.

#### [Break It Down, Pass It On: Cross-Task Skill Transfer in LLM Agents](http://arxiv.org/abs/2608.20274v1)
Feng et al. — 2026-08-20. Contribution: Investigates when LLM-agent-induced skills transfer reliably across tasks and when they harm downstream behavior. Relevance: Informs safe skill accumulation and reuse for self-improving agents.

#### [MileGPO: Milestone Inference with Local Evidence for Graph-Based Policy Optimization of Long-Horizon LLM Agents](http://arxiv.org/abs/2608.19803v1)
Qian et al. — 2026-08-20. Contribution: Improves credit assignment in long-horizon agentic RL using local milestone inference and graph-based advantage estimation. Relevance: Directly addresses sparse-final-reward supervision in LLM agent training.

#### [Credit Without Ground Truth: Auditing Step-Level Credit Assignment in LLM Agents Against Executed Replay](http://arxiv.org/abs/2608.19760v1)
Zhang — 2026-08-20. Contribution: Audits step-level credit signals against executed replay and finds none identifies causally important steps. Relevance: Highlights a fundamental weakness in current LLM agent RL training signals.

#### [Remember, Verify, or Ask? Cross-Family Evaluation of Memory Commitment in LLM Agents](http://arxiv.org/abs/2608.19564v1)
Li et al. — 2026-08-20. Contribution: Proposes a memory-clarification boundary for deciding whether interaction-derived information should be persisted, reused locally, re-verified, or clarified. Relevance: Provides a principled framework for durable memory in personalized LLM agents.

#### [ReguSim: Evaluating LLM Agent Rule Grounding in Financial Compliance](http://arxiv.org/abs/2608.19974v1)
Luo et al. — 2026-08-20. Contribution: Introduces a controlled financial-compliance environment that separates stated rule citation from executable constraint violations. Relevance: Improves evaluation of rule grounding in safety-sensitive financial LLM agents.

#### [ReCache: Efficient KV Cache Reuse and Compression for Tool-Augmented LLM Agents](http://arxiv.org/abs/2608.19662v1)
Fang et al. — 2026-08-20. Contribution: Caches and compresses KV representations of recurring tool and skill schemas to avoid repeated encoding. Relevance: Reduces inference cost for agentic workflows that repeatedly combine reusable schemas.

#### [AI4AI-Bench: Benchmarking LLM Agents in Algorithmic Design for Recursive Self-Improvement](http://arxiv.org/abs/2608.20318v1)
Chi et al. — 2026-08-20. Contribution: Benchmarks LLM agents on improving training algorithms themselves for recursive self-improvement. Relevance: Connects LLM agent engineering to the broader goal of self-improving AI systems.

#### [Mitigating Identity Essentialism in LLM Agents with Longitudinal Life Trajectories](http://arxiv.org/abs/2608.19621v1)
Wang et al. — 2026-08-20. Contribution: Uses longitudinal life trajectories to reduce identity essentialism and improve diversity in LLM-based social-simulation agents. Relevance: Makes simulated LLM agent populations more human-like and credible.

### Agent Test-Time Scaling and Self-Improvement

#### [Learning When to Think: Adaptive Reasoning for Test-Time Compute Allocation](http://arxiv.org/abs/2608.20256v1)
Kassenaar et al. — 2026-08-20. Contribution: Studies whether a reasoning model can learn to allocate its own limited test-time compute adaptively across easy and hard problems. Relevance: Extends test-time scaling toward explicitly adaptive token budgets.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Test-Time Scaling in the Wild: Why Exploitation, Not Exploration, Is the Bottleneck](http://arxiv.org/abs/2608.18931v1)
Romano et al. — 2026-08-19. Contribution: Finds that on open-domain tasks, exploiting useful existing candidates rather than exploring more is the key bottleneck for test-time scaling. Relevance: Reframes TTS research priorities outside math and code.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [SPADE: Self-Play in Adaptive Synthetic Executable Environments](http://arxiv.org/abs/2608.19197v1)
Liu et al. — 2026-08-19. Contribution: Generates adaptive synthetic executable environments through self-play to continuously expand agent goal distributions. Relevance: Supports continuous self-improvement of language agents with diverse goals.

---

## Embodied Intelligence

### Vision-Language-Action Models

#### [SafeBranch: Branch-Pair Safety Alignment for Embodied Agents](http://arxiv.org/abs/2608.19729v1)
Lee et al. — 2026-08-20. Contribution: Aligns VLM-based embodied agents to satisfy interactive safety constraints using branch-pair safety alignment. Relevance: Addresses safety as a distinct objective alongside task success in VLA policies.

#### [EXIMO: VLM Guided Exploration of VLA Policies](http://arxiv.org/abs/2608.19891v1)
Sukhija et al. — 2026-08-20. Contribution: Uses a VLM to guide exploration when finetuning VLA policies for new tasks. Relevance: Reduces the teleoperation and finetuning cost for acquiring new manipulation skills.

#### [OrthoSkillVLA: Continual Skill Learning via Gradient-Informed Skill Subspace Adaptation](http://arxiv.org/abs/2608.19589v1)
Wang et al. — 2026-08-20. Contribution: Adapts pretrained VLA models to new skills in gradient-informed skill subspaces to reduce catastrophic forgetting. Relevance: Directly targets continual skill acquisition for robot learning.

#### [Fine-Tuning VLAs with Self-Demonstrated Generative Control for Multi-Task Manipulation](http://arxiv.org/abs/2608.19490v1)
Garg et al. — 2026-08-19. Contribution: Fine-tunes VLAs using self-demonstrated generative control to compensate for hardware mismatches in multi-task manipulation. Relevance: Solves deployment adaptation of large VLA models to new robots.

#### [Planning-Oriented End-to-End Autonomous Driving: Architectures, Evaluation, and Emerging Paradigms](http://arxiv.org/abs/2608.20111v1)
Guan et al. — 2026-08-20. Contribution: Surveys planning-oriented end-to-end autonomous driving, covering architectures, evaluation protocols, and emerging paradigms. Relevance: Maps the VLA/planning landscape for embodied driving agents.

#### [DreamHand: Repurposing Video Diffusion Models for Occlusion-Robust Egocentric 3D Hand Motion Recovery](http://arxiv.org/abs/2608.20308v1)
Liu et al. — 2026-08-20. Contribution: Repurposes video diffusion models for occlusion-robust egocentric 3D hand motion recovery. Relevance: Provides scalable manipulation data for embodied and VLA training.

#### [Learning the Right Abstraction: Neural Reduced Dynamics for Complex Robot Control](http://arxiv.org/abs/2608.19375v1)
Zhang & Negrut — 2026-08-19. Contribution: Advocates data-driven reduced-dynamics simulators as cheaper alternatives to high-fidelity embodied simulators for RL. Relevance: Could accelerate VLA/embodied policy training and evaluation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Role-Conditioned Sub-Token Routing for Efficient Vision-Language-Action Policies](http://arxiv.org/abs/2608.18410v1)
Jiang & Wang — 2026-08-19. Contribution: Introduces role-conditioned sub-token routing to reduce VLA inference cost without discarding entire visual token representations. Relevance: Improves efficiency of long multimodal token sequences in VLA models.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Vision-Language Models for Egocentric Video: From Hand-Object Interaction to Embodied AI](http://arxiv.org/abs/2608.18671v1)
Zamani & Ziaeetabar — 2026-08-19. Contribution: Reviews egocentric video understanding spanning hand-object interaction and embodied AI. Relevance: Grounds VLA perception and action in human-centric egocentric data.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [CL4D: Contrastive Language-4D Pretraining for Vision-Language Reasoning in Dynamic Scenes](http://arxiv.org/abs/2608.18734v1)
Hewagamage et al. — 2026-08-19. Contribution: Proposes contrastive language-4D pretraining to add temporal-geometric reasoning to vision-language models in dynamic scenes. Relevance: Enhances embodied/VLA reasoning about 4D environments.

### Embodied Navigation

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [LT-Mem: Volatility-Aware Spatio-Temporal Memory for Lifelong Scene Understanding](http://arxiv.org/abs/2608.19059v1)
Lee et al. — 2026-08-19. Contribution: Builds volatility-aware spatio-temporal memory with consistent object identity across repeated robot revisits. Relevance: Solves persistence and identity in long-term robot navigation and mapping.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [USR-Drive: Unified Driving Scene Representation via Joint Denoising of 3D Gaussians and Boxes](http://arxiv.org/abs/2608.19036v1)
Chen et al. — 2026-08-19. Contribution: Jointly denoises 3D Gaussians and object boxes to create a unified driving scene representation. Relevance: Improves structured perception for autonomous driving and navigation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [ForeSightGuide: An Anticipatory Framework toward Accurate and Low-Redundancy Guidance for the Visually Impaired](http://arxiv.org/abs/2608.18993v1)
Wang et al. — 2026-08-19. Contribution: Proposes anticipatory guidance that reduces false positives in VLM-based navigation aids for visually impaired users. Relevance: Applies embodied navigation principles to assistive mobility.

---

## Model Compression and Continual Learning

### LLM Pruning and Inference Optimization

#### [Clustering and Token Denoising for Faster and More Robust VLMs](http://arxiv.org/abs/2608.19285v1)
Rossigneux et al. — 2026-08-19. Contribution: Clusters and denoises visual tokens to speed up VLMs while improving robustness. Relevance: Enables edge deployment of multimodal LLMs by reducing visual-token compute.

### Continual Learning

#### [In Two Minds about Lifelong Learning: Exploring Hemispheric Redundancy and Specialisation in Neural Models](http://arxiv.org/abs/2608.19514v1)
Smith et al. — 2026-08-20. Contribution: Explores hemispheric redundancy and specialization as a brain-inspired way to manage the plasticity-retention trade-off. Relevance: Offers a new architectural direction for continual learning systems.

#### [An Inclusive and Lightweight Approach to Federated Continual Learning for Cultural Heritage](http://arxiv.org/abs/2608.20038v1)
Theologitis et al. — 2026-08-20. Contribution: Presents a lightweight federated continual learning method for distributed, access-constrained cultural heritage data. Relevance: Handles non-stationary data across institutions without centralizing sensitive collections.

#### [Frequency-Aware Continual Learning for Smart Contract Vulnerability Detection with Large Language Models](http://arxiv.org/abs/2608.19680v1)
Huang et al. — 2026-08-20. Contribution: Uses frequency-aware per-task adapters to adapt LLMs to sequentially arriving vulnerability categories. Relevance: Demonstrates parameter-efficient continual adaptation for security-domain LLMs.

#### [Towards general embodied intelligence: integrating large language models, knowledge bases, and reasoning capabilities to build the next generation of AI agents](http://arxiv.org/abs/2608.19794v1)
Yuan et al. — 2026-08-20. Contribution: Reviews the convergence of LLMs, structured knowledge bases, and reasoning for general embodied intelligence. Relevance: Contextualizes continual system-level adaptation for embodied agents.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Harness Continual Learning: Continual Adaptation Beyond Model Parameters](http://arxiv.org/abs/2608.19013v1)
Kang et al. — 2026-08-19. Contribution: Argues that continual learning should adapt an entire harness of prompts, memories, tools, skills, and routing rules, not just parameters. Relevance: Broadens CL beyond parameter state for agent-based systems.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Forgetting, plasticity, and co-observation: a third facet of continual learning](http://arxiv.org/abs/2608.18803v1)
Hess et al. — 2026-08-19. Contribution: Identifies co-observation as a third factor, alongside forgetting and plasticity, explaining the gap in naive sequential training. Relevance: Provides a more complete explanation of continual learning failure modes.

---

## Visual Perception

### 3D Point Cloud Perception

#### [Open-Vocabulary 3D Object Detection with Co-Distillation Discovery and Dual Guidance Robust Training](http://arxiv.org/abs/2608.19973v1)
Yuan et al. — 2026-08-20. Contribution: Combines co-distillation discovery with dual-guidance robust training for open-vocabulary 3D object detection. Relevance: Improves detection of unseen objects in 3D scenes for embodied perception.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [PCQA-R1: Advancing Generalized 3D Point Cloud Quality Assessment with Reinforcement Learning](http://arxiv.org/abs/2608.18627v1)
Ye et al. — 2026-08-19. Contribution: Advances no-reference point cloud quality assessment using reinforcement learning and large multimodal models. Relevance: Adds quality-assessment capability to point cloud perception pipelines.

---

## Cross-Topic Signals

- Skill reuse/transfer appears across LLM agents and VLA policies: Optimal Skill Selection and Cross-Task Skill Transfer parallel OrthoSkillVLA and EXIMO, suggesting shared principles for composable skills.
- Inference-efficiency methods attack recurring-embedding redundancy at multiple levels: ReCache caches tool schemas in agents, while Clustering and Token Denoising and Role-Conditioned Sub-Token Routing reduce visual token costs.
- Safety and compliance are shifting from single-action guardrails to whole-workflow constraints across SafeBranch (embodied), PolicyGuide (customer service), and ReguSim (finance).
- Credit assignment and self-improvement are converging: MileGPO and Credit Without Ground Truth critique step-level training signals, while Learning When to Think and SPADE explore adaptive compute and self-generated environments.

## Priority Reading

#### - **Optimal Skill Selection for LLM Agents with Provable Bicriteria Guarantees** — directly addresses the central agent-engineering bottleneck of bounded context, with concrete performance/cost guarantees.
#### - **EXIMO: VLM Guided Exploration of VLA Policies** — efficient VLA finetuning for new tasks is a high-value practical problem; the VLM-guided exploration approach is immediately actionable.
- **Credit Without Ground Truth** — provides rare empirical auditing of step-level credit signals used in LLM agent training, with direct implications for RL supervision design.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*