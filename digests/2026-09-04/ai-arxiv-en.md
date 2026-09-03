# Lab Research Topics Radar 2026-09-04

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 31 new + 16 seen in the last 14 days | Generated: 2026-09-03 23:44 UTC

---

# Research Topics Radar — 2026-09-04

## 1. Today’s Overview

- **LLM Agent Engineering** — 10 new papers: strongest signals are tool-use harness design, skill-guided action chunking, agent memory trust/authorization, and scaffold-level optimizers that leave base LLM weights frozen.
- **Agent Test-Time Scaling and Self-Improvement** — 3 new papers; one broad survey formalizes feedback-driven test-time adaptation, complemented by post-training evidence for Gold-medal coding agents.
- **LLM Agent Societies** — No new papers today.
- **Vision-Language-Action Models** — 5 new papers: progress on latent representation analysis, human-intent long-horizon manipulation, and zero-shot cross-embodiment (manipulation + driving) transfer.
- **Embodied Navigation** — 4 new papers: VLN efficiency, active mapping in cluttered scenes, more robust language-guided dynamic-scene querying.
- **LLM Pruning and Inference Optimization** — 1 new paper (ShallowStream) on efficient streaming-video understanding; listed under this topic, though it was also matched to Multimodal LLM Pruning.
- **Multimodal LLM Pruning** — 1 newly surfaced paper (ShallowStream) cross-listed from the inference-optimization topic; 3 visual-token-pruning papers were already seen within the last 14 days.
- **Continual Learning** — 6 new papers: agent skill consolidation, federated LoRA, low-rank initialization, and PEFT specialization dominate.
- **Event-Based Vision** — No new papers today (1 relevant paper seen in the last 14 days).
- **3D Point Cloud Perception** — 3 new papers: radar-based 3D detection, structural-defect scanning, and plant phenotyping from 3D reconstructions.
- **3D Point Cloud Perception and Tracking** — No new papers today.

## 2. Research Areas

## LLM Agents and Multi-Agent Systems

### LLM Agent Engineering

#### [Act More, Decide Less: Skill-Guided Adaptive Action Chunking for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.02042v1)
Yanting Yang et al., 2026-09-02 — Proposes skill-guided adaptive action chunking so long-horizon LLM agents execute routine multi-step behaviors in fewer LLM rounds. Relevance: directly improves the efficiency/replanning trade-off in ReAct-style agent scaffolds.

#### [Harness Engineering in LLM Tool Use via Agent-Native Reusable Tool Primitives](http://arxiv.org/abs/2609.01736v1)
Haibo Jin et al., 2026-09-01 — Addresses brittle multi-step tool use by introducing reusable agent-native tool primitives and harness-level abstractions. Relevance: a practical engineering layer for robust tool-augmented LLM agents.

#### [SkillGLoW: Procedural-Family Skill Consolidation for Self-Improving Agents on Long-Horizon Task Streams](http://arxiv.org/abs/2609.02217v1)
Ao Yan et al., 2026-09-02 — Consolidates procedural-family skills into structured libraries instead of growing one global document or flat task pool. Relevance: scales skill reuse for long-horizon, self-improving LLM agents.

#### [CAPTURE: Disentangling Preference Drift from Memory Poisoning in Personalized LLM Agents](http://arxiv.org/abs/2609.02265v1)
S M Asif Hossain et al., 2026-09-02 — Separates genuine user preference drift from adversarial or ephemeral memory changes in personalized agents. Relevance: motivates memory-trust mechanisms for long-lived personalization.

#### [Belief-Calibrated Optimization: An Explicit World Model for Agentic Optimization](http://arxiv.org/abs/2609.01861v1)
Yuhan Chen et al., 2026-09-01 — Adds an explicit, belief-calibrated world model to coding-agent optimizers so each candidate edit is chosen according to predicted effect. Relevance: improves agent scaffolds without changing frozen model weights.

#### [Agent Memory Is a Surface for Endogenous Authorization Laundering](http://arxiv.org/abs/2609.01836v1)
Tommaso Cerruti et al., 2026-09-01 — Shows persistent memory can misrepresent evolving authorization, letting agents grant privileges the interaction history never permitted. Relevance: identifies a security flaw specific to memory-augmented, long-running agents.

### Agent Test-Time Scaling and Self-Improvement

#### [A Survey on Self-Improving Test-Time Intelligence: Feedback-Driven Adapting, Learning, and Scaling at Inference](http://arxiv.org/abs/2609.01679v1)
Shuaicheng Niu et al., 2026-09-01 — Surveys how models use test-time information and feedback to adapt, learn, and scale during deployment. Relevance: provides a useful map of the agent test-time scaling and self-improvement space.

#### [Post-Training Language Models for Gold-Medal Performance in Coding Competitions](http://arxiv.org/abs/2609.02849v1)
Aleksander Ficek et al., 2026-09-02 — Builds an end-to-end specialization pipeline (curation, synthetic reasoning traces, post-training) reaching Gold-medal-level competitive programming. Relevance: demonstrates scalable post-training/self-improvement recipes that can transfer to agent coding tasks.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] DiagEvo: Diagnosis-Guided Self-Evolution via Hierarchical Error Memory](http://arxiv.org/abs/2609.00768v1)
Xincheng Wei et al., 2026-09-01 — Guides self-evolution with hierarchical error memory and diagnosis to avoid self-play plateaus or declines. Relevance: an error-memory design for continual agent self-improvement.

## Embodied Intelligence

### Vision-Language-Action Models

#### [Latent Cluster Analysis for Vision-Language-Action Models](http://arxiv.org/abs/2609.02634v1)
Theodor Wulff et al., 2026-09-02 — Introduces LAVLA, a latent cluster analysis framework for interpreting VLA internal representations. Relevance: first steps toward interpretability and debugging of VLA models.

#### [ZETA: A Controlled Study of Zero-Shot Cross-Embodiment VLA Transfer for Tabletop Manipulation](http://arxiv.org/abs/2609.02546v1)
Mi Yan et al., 2026-09-02 — Provides a controlled protocol and study for zero-shot cross-embodiment VLA transfer in tabletop manipulation. Relevance: fills a gap in systematic evaluation of embodiment generalization.

#### [Towards Zero-Shot Transfer Across Embodiments For Driving VLAs](http://arxiv.org/abs/2609.02341v1)
Caio Azevedo et al., 2026-09-02 — Analyzes zero-shot cross-embodiment transfer for Vision-Language-Action models in autonomous driving. Relevance: extends the cross-embodiment transfer question beyond robotic manipulation.

#### [HINT: Human-Intent Inception for Long-Horizon Robot Manipulation](http://arxiv.org/abs/2609.02653v1)
Mingyu Mei et al., 2026-09-02 — Incepts high-level human intent into VLA policies so they adapt to evolving visual observations over long-horizon manipulation. Relevance: targets flexible long-horizon control with weaker supervision than step-by-step commands.

### Embodied Navigation

#### [LookStep: Efficient Vision-Language Navigation with Linguistic Foresight and Event Driven Memory](http://arxiv.org/abs/2609.02350v1)
Kun-Yang Yu et al., 2026-09-02 — Uses linguistic foresight plus event-driven memory to make MLLM-based Vision-Language Navigation more efficient in unseen environments. Relevance: reduces dependence on next-step expert supervision while improving VLN efficiency.

#### [MS-MEM: Multi-Skill Manipulation-Enhanced Mapping via Uncertainty- and Disturbance-Aware Action Selection](http://arxiv.org/abs/2609.02493v1)
Yitian Shi et al., 2026-09-02 — Selects manipulation actions that actively reduce mapping uncertainty in confined, cluttered shelf scenes. Relevance: integrates manipulation and navigation for embodied scene understanding under occlusion.

#### [Query Rewriting for Complex Object Segmentation in 4D Gaussian Representations](http://arxiv.org/abs/2609.02664v1)
Thanh-Khoi Nguyen et al., 2026-09-02 — Rewrites verbose narrative queries to stabilize language-guided segmentation of dynamic 4D Gaussian scenes. Relevance: supports embodied agents that must understand dynamic environments from noisy natural-language queries.

## Model Compression and Continual Learning

### LLM Pruning and Inference Optimization

#### [ShallowStream: Index Shallow then Answer Deep for Streaming Video Understanding](http://arxiv.org/abs/2609.02780v1)
Jitai Hao et al., 2026-09-02 — Reduces MLLM cost on continuous video streams by indexing shallow representations and answering with deep computation only when needed. Relevance: an inference-optimization pattern for real-time, embodied and streaming multimodal use.

### Multimodal LLM Pruning

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] SinkPruner: Sink-Free Visual Token Pruning for Multimodal Large Language Models](http://arxiv.org/abs/2609.01004v1)
Shiyu Li et al., 2026-09-01 — Removes sink-attention distortion before pruning visual tokens for MLLMs. Relevance: keeps visual token pruning from being misled by attention-sink artifacts.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] S$^2$Prune: Spatially Structured Visual Token Pruning for Multimodal Large Language Models](http://arxiv.org/abs/2609.01224v1)
Yuanyuan Jia et al., 2026-09-01 — Diagnostic experiments show importance/redundancy scores produce stable spatial biases, so pruning should be spatially structured. Relevance: informs spatial-prior design in visual token pruning.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] From Saliency to Discriminability: Rank-Preserving Visual Token Pruning for VLM Rerankers](http://arxiv.org/abs/2609.00667v1)
Siyi Liu et al., 2026-09-01 — Retains tokens by rank-preserving discriminability rather than raw attention saliency for VLM listwise rerankers. Relevance: makes token pruning practical for vision-language reranking pipelines at scale.

### Continual Learning

#### [MASkills: Continual Skills Optimization for Multi-Agent LLM Systems](http://arxiv.org/abs/2609.02094v1)
Huaiyuan Yao et al., 2026-09-02 — Treats agent skills as the unit of continual learning, replacing poorly invocable experience memories in multi-agent LLM systems. Relevance: directly combines multi-agent systems with continual improvement from interaction.

#### [Federated LoRA Adaptation of BiomedCLIP Across Four International Chest X-Ray Cohorts](http://arxiv.org/abs/2609.02101v1)
Sanjaya Poudel et al., 2026-09-02 — Demonstrates federated LoRA parameter-efficient updates for medical vision-language models across private hospital cohorts. Relevance: shows LoRA-style continual adaptation can preserve privacy in federated settings.

#### [TaRA: Training-Aware Low-Rank Adaptation Initialization](http://arxiv.org/abs/2609.02639v1)
Taehyeon Kim, Eunhyeok Park, 2026-09-02 — Constructs LoRA initializations that account for the training dynamics imposed by low-rank bottlenecks. Relevance: improves PEFT stability across continual-adaptation and lifelong-learning workloads.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] Frozen Cores Need Task Signal: Fisher-Whitened Cross-Covariance for Low-Resource LLM Adaptation](http://arxiv.org/abs/2609.00762v1)
Wentao Ye et al., 2026-09-01 — Shows where adapter coefficients are placed matters as much as how many are trained under severe budgets, using Fisher-whitened covariance. Relevance: informs budget-constrained parameter-efficient continual adaptation of LLMs.

## Visual Perception

### Event-Based Vision

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] Residual Kalman Dynamics for Event-Based UAV Forecasting](http://arxiv.org/abs/2609.00839v1)
Per Nyblom et al., 2026-09-01 — Fits a constant-velocity Kalman baseline and trains a residual model on event-camera box-history for UAV forecasting. Relevance: a strong physical-model-plus-residual approach for event-based perception.

### 3D Point Cloud Perception

#### [Stereo 4D Radar for 3D Object Detection: Integrating Geometric Alignment and Absolute Velocity Estimation](http://arxiv.org/abs/2609.02560v1)
Seung-Hyun Song et al., 2026-09-02 — Integrates geometric alignment and Doppler-based absolute velocity estimation to detect 3D objects from stereo 4D-radar signals. Relevance: advances radar point-cloud perception under clutter and diverse weather.

#### [Integrated Laser Scanning and Image-Based Topology Optimization Techniques for Detection and Quantification of Visible and Subsurface Structural Defects](http://arxiv.org/abs/2609.01808v1)
Mehrdad Shafiei Dizaji, Devin Harris, 2026-09-01 — Combines laser scanning and image-based topology methods to quantify visible and subsurface structural defects. Relevance: demonstrates fused 3D point-cloud and image analysis for inspection.

#### [Automated Maize Ear Phenotyping Using 3D Reconstructions](http://arxiv.org/abs/2609.01921v1)
Ritwesh A. Kumar et al., 2026-09-01 — Automates maize-ear kernel trait measurement from 3D reconstructions at breeding-program scale. Relevance: shows 3D point-cloud perception enabling high-throughput agricultural phenotyping.

## 3. Cross-Topic Signals

- **Adaptive action chunking crosses text agents and embodied VLA policies**: LLM-agent chunking (`Act More, Decide Less`) mirrors VLA chunking work (`Knowing When to Stop`, previously seen), suggesting chunk length as a shared skill abstraction.
- **Memory is becoming a trust and learning boundary everywhere**: preference-drift disentanglement (CAPTURE), authorization laundering, hierarchical error memory (DiagEvo), and agent skill consolidation (MASkills, SkillGLoW) all treat memory/skills as the main mutable state to secure and organize.
- **Skill/program libraries are replacing flat memories for long-horizon behavior**: SkillGLoW and MASkills in LLM space parallel REFACTOR-VLA-style motor-program libraries in embodied space.
- **Efficiency pruning ideas are moving from static MLLMs to streaming/embodied deployment**: ShallowStream (continuous video) and visual-token pruning (SinkPruner, S²Prune) point to token/index-level selection as the new frontier for embodied streaming input.

## 4. Priority Reading

- **[A Survey on Self-Improving Test-Time Intelligence](http://arxiv.org/abs/2609.01679v1)** — Read first: it consolidates terminology, methods, and open questions for the entire feedback-driven test-time adaptation/self-improvement area, which several new agent papers assume.
- **[Act More, Decide Less](http://arxiv.org/abs/2609.02042v1)** — Highest cross-topic leverage: adaptive action chunking is emerging simultaneously in LLM agent engineering and VLA action execution, and this paper gives a clean formulation.
- **[ZETA: A Controlled Study of Zero-Shot Cross-Embodiment VLA Transfer](http://arxiv.org/abs/2609.02546v1)** — Several new papers (driving VLA, HINT, LAVLA) depend on claims about embodiment and generalization; ZETA supplies a controlled protocol that makes those claims comparable and testable.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*