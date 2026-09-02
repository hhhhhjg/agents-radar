# Lab Research Topics Radar 2026-09-03

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 32 new + 17 seen in the last 14 days | Generated: 2026-09-02 23:46 UTC

---

# Research Topics Radar — 2026-09-03

## 1. Today's Overview

- **LLM Agent 与多智能体 / LLM Agent Engineering** — 10 new papers. Progress centers on adaptive agent harnesses (HarnessDev, CordisBench), context assembly and compression-aware training (ContextPipe, MemoryWalker), route optimization and triage (RL-for-VRP, TRIAGE), outcome-only RL for long-horizon agents, recursive-agent risk vesting, and evaluation construct validity in agent guardrails.
- **LLM Agent 与多智能体 / Agent Test-Time Scaling and Self-Improvement** — 3 new papers. DiagEvo adds diagnosis-guided self-evolution; TempCloze targets language-shortcut-free temporal video reasoning; Context Compilation Architecture improves long-context inference. Three repeats revisit test-time scaling for geometry, inference-as-search, and self-play driving.
- **LLM Agent 与多智能体 / LLM Agent Societies** — No new papers today.
- **具身智能 / Vision-Language-Action Models** — 9 new papers. Themes: MLLMs as drone-control agents, dynamic scene graphs and hierarchical 3D memory for changing environments, VLA skill orchestration and typed motor-program libraries, adaptive action chunking, interaction-aware world models, and generalizable grounded exploration.
- **具身智能 / Embodied Navigation** — 3 new system tags; Qwen-Drive-1.0 is the substantive direct match (unified 3D perception, VQA, and planning), while the other two tags (VIBE-Bench, ASSERT) are tangential to navigation and omitted from detailed topics below.
- **模型压缩与持续学习 / LLM Pruning and Inference Optimization** — SinkPruner is the only new match; it reduces MLLM inference cost by pruning visual/sink tokens and is reported under this topic for its inference-optimization framing.
- **模型压缩与持续学习 / Multimodal LLM Pruning** — New spatial-structure pruning (S²Prune) and rank-preserving pruning for VLM rerankers; geometry-correction prior work (Centering before Pruning) reappears as a repeat.
- **模型压缩与持续学习 / Continual Learning** — New decentralized LoRA via random walks and Fisher-whitened cross-covariance PEFT for low-resource adaptation; a third tagged paper on predictive-multiplicity auditing is tangential. Repeat: task-conditioned feature transforms for class-incremental learning.
- **视觉感知 / Event-Based Vision** — 1 new paper: residual Kalman dynamics for event-based UAV bounding-box forecasting.
- **视觉感知 / 3D Point Cloud Perception** — No strong new point-cloud-specific paper; Qwen-Drive (counted here by tag) is analyzed under Embodied Navigation. Repeats: VCAR for 3DGS segmentation and Lucida for real-to-sim scene modeling.
- **视觉感知 / 3D Point Cloud Perception and Tracking** — No new papers today.

---

## 2. Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [HarnessDev: Can LLMs Create and Evolve Their Own Agent Harness?](http://arxiv.org/abs/2609.01437v1)
Yuhao Wu et al. — 2026-09-01. Contribution: Shows that changing the agent harness with model weights fixed substantially changes task performance and asks whether LLMs can create/evolve their own harness. Relevance: Directly targets the emerging engineering bottleneck of agent execution infrastructure.

#### [CordisBench: Can Language Models Reason About Component Lifecycles in Dynamic Agent Harnesses?](http://arxiv.org/abs/2609.01600v1)
Damien Sileo, Dimitri Kachler — 2026-09-01. Contribution: Introduces a 1,200-question benchmark on how plugin changes propagate through dependencies and cleanup in dynamic agent harnesses. Relevance: Expands LLM-agent reasoning from task-level to software lifecycle-level.

#### [ContextPipe: Database-Inspired Context Assembly for Long-Horizon Agents](http://arxiv.org/abs/2609.00749v1)
Peng Xu et al. — 2026-09-01. Contribution: Treats context assembly as a database problem—selection, ordering, compaction, and cache-awareness under context-window budgets. Relevance: Provides a principled runtime primitive for production long-horizon LLM agents.

#### [MemoryWalker: Stop Training Agents on Contexts They Never Saw](http://arxiv.org/abs/2609.00865v1)
J. Zinco et al. — 2026-09-01. Contribution: Shows compression during rollout turns agent training into tree-conditioned learning, and proposes avoiding training on unobserved contexts. Relevance: Addresses the train/serve mismatch created by context eviction in deployed harnesses.

#### [TRIAGE: Three-level Routing and Intelligent Agent Guidance for Efficient Execution](http://arxiv.org/abs/2609.01428v1)
Ruocan Wei — 2026-09-01. Contribution: Proposes three-level routing to reuse prior reasoning steps and avoid a full ReAct loop for every query. Relevance: A practical efficiency layer for tool-use LLM agents.

#### [Explore More, Drift Less: Outcome-Only Reinforcement Learning Can Suffice for Long-Horizon Interactive Agents](http://arxiv.org/abs/2609.01245v1)
Liming Pu et al. — 2026-09-01. Contribution: Challenges the assumption that outcome-only RL quickly plateaus on small open models for long-horizon agent tasks. Relevance: Could simplify and scale agent post-training without dense reward engineering.

#### [Reinforcement Learning Enhanced LLM Agents for Complex Vehicle Routing Problems](http://arxiv.org/abs/2609.00859v1)
Yi Chen et al. — 2026-09-01. Contribution: Combines LLM agents with RL to model and solve complex VRP variants without heavy domain-expert modeling. Relevance: Demonstrates agent+RL hybrid reasoning on structured combinatorial optimization.

#### [Spawn Freely, Act Sparingly: Progressive Risk Vesting for Recursive LLM-Agent Trees](http://arxiv.org/abs/2609.01035v1)
Molly Wang — 2026-09-01. Contribution: Distinguishes sandbox spawning from capability activation and proposes progressive risk vesting before recursive spawned agents may act. Relevance: A governance mechanism for increasingly recursive LLM-agent workloads.

#### [When Guardrails Look Effective: Construct Validity Failures in LLM Agent Commerce Evaluation](http://arxiv.org/abs/2609.01519v1)
Peiying Zhu, Sidi Chang — 2026-09-01. Contribution: Audits interactive buyer–seller simulations and finds economic-looking outputs that do not instantiate the intended behaviors. Relevance: Warns against over-trusting agent-evaluation numbers in commerce/policy settings.

#### [GlossoGen: Emergent Language in Complex Multi-Agent LLM Interactions](http://arxiv.org/abs/2609.01491v1)
Elias Stengel-Eskin et al. — 2026-09-01. Contribution: Introduces a platform for studying emergent-language dynamics in multi-LLM-agent interactions. Relevance: Raises monitorability/safety questions for deployed LLM-agent ecosystems.

### Agent Test-Time Scaling and Self-Improvement

#### [DiagEvo: Diagnosis-Guided Self-Evolution via Hierarchical Error Memory](http://arxiv.org/abs/2609.00768v1)
Xincheng Wei et al. — 2026-09-01. Contribution: Uses hierarchical error memory to guide question generation during self-play so solving performance does not plateau or decline. Relevance: Offers a corrective signal for language-model self-evolution.

#### [TempCloze: Can Video-LLMs Identify the Missing Middle?](http://arxiv.org/abs/2609.01515v1)
Wenqi Pei et al. — 2026-09-01. Contribution: Video cloze benchmark designed to remove linguistic shortcuts in visual temporal reasoning. Relevance: Provides a cleaner evaluation signal for test-time multimodal reasoning.

#### [Compile, Don't Memorize: A Context Compilation Architecture (CCA) for In-Context Learning](http://arxiv.org/abs/2609.00759v1)
Jinhu Qi et al. — 2026-09-01. Contribution: Compiles long novel contexts into reusable structures for answering series of questions. Relevance: Relevant to test-time compute and inference-side context optimization.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [Reactivating Test-Time Scaling for Plane Geometry Problem Solving](http://arxiv.org/abs/2608.30156v1)**
Xiaoqiang Kang et al. — 2026-08-31. Contribution: Identifies why generic TTS fails for plane-geometry multimodal reasoning and re-activates it with visual/multimodal constraints. Relevance: Shows domain-specific limits of standard test-time scaling.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [When LLM Meets Tree Search: A Systematic View of Inference as Search in Large Language Models](http://arxiv.org/abs/2608.30395v1)**
Jiaqi Wei et al. — 2026-08-31. Contribution: Surveys and unifies test-time scaling methods as search over partial reasoning states. Relevance: Useful organizing framework for inference-time compute allocation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [What Emerges and What Breaks in Self-Play Driving](http://arxiv.org/abs/2608.30819v1)**
Laur Sisask et al. — 2026-08-31. Contribution: Scales self-play driving policies to transformers and a real-city HD map, analyzing emergent behaviors and failure modes. Relevance: Connects self-improvement/self-play with embodied policy learning.

---

## 具身智能

### Vision-Language-Action Models

#### [Evaluating Multimodal LLMs as Generalist Vision-Language-Action Agents for Drone Control](http://arxiv.org/abs/2609.01404v1)
Jaewoo Park et al. — 2026-09-01. Contribution: Drops MLLMs directly into a drone control loop with actions declared only in the prompt, covering command, approach, track, and search. Relevance: Strong probe of whether MLLMs can serve as generalist embodied action agents.

#### [DSG: Dynamic 3D Scene Graph Construction for Embodied Agents in Changing Indoor Environments](http://arxiv.org/abs/2609.00619v1)
Ming Liao et al. — 2026-09-01. Contribution: Constructs dynamic 3D scene graphs that keep pace with object moves caused by humans or the agent itself. Relevance: Updates scene memory needed by downstream VLA planning.

#### [EmbodiedSkills: A Unified Framework for Orchestrating, Training, and Deploying VLA Agents](http://arxiv.org/abs/2609.01281v1)
Wei Wang et al. — 2026-09-01. Contribution: Frames long-horizon VLA tasks as coordination of perception, planning, execution, progress verification, and recovery. Relevance: Moves VLA systems from action prediction to full skill orchestration.

#### [Knowing When to Stop: Adaptive Action Chunking via Internal Cross-Attention Dynamics in VLAs](http://arxiv.org/abs/2609.00908v1)
Runze Xu et al. — 2026-09-01. Contribution: Uses internal cross-attention dynamics to end action chunks adaptively instead of fixing horizon length. Relevance: Directly resolves the efficiency-vs-accuracy trade-off in VLA execution.

#### [IMPACT: Attention Is the Interaction Map for Scalable Interaction-Aware World Model Training](http://arxiv.org/abs/2609.00161v1)
Rongze Tang et al. — 2026-08-31. Contribution: Uses attention as an interaction map to train action-conditioned world models with physically plausible interactions. Relevance: Improves future-state prediction for embodied agents without extra external constraint representations.

#### [REFACTOR-VLA: Unsupervised Library Learning of Typed Motor Programs](http://arxiv.org/abs/2609.01215v1)
Riyaaz Shaik, Chandru Venkataraman — 2026-09-01. Contribution: Discovers reusable typed motor-program libraries from monolithic VLA behavior. Relevance: Counteracts VLA degradation on long-horizon tasks and improves interpretability.

#### [Towards Generalizable Visually Grounded Exploration of Household Devices](http://arxiv.org/abs/2609.00845v1)
Linhao Zheng et al. — 2026-09-01. Contribution: Proposes visually grounded exploration of household devices that reduces dependence on human-annotated trajectory imitation. Relevance: Targets generalization of embodied VLM/VLA exploration to new device interactions.

#### [HitMem: Hierarchical Temporal 3D Memory with Multi-Modal Context-Aware Retrieval for Dynamic Environments](http://arxiv.org/abs/2609.00950v1)
Ruijie Tang et al. — 2026-09-01. Contribution: Maintains hierarchical temporal 3D memory for long-horizon tasks when objects are displaced by unobserved events. Relevance: Supplies memory infrastructure for VLAs operating in non-static scenes.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [Temporal Forcing: 4D Representation Alignment for Vision-Language-Action Models](http://arxiv.org/abs/2608.30643v1)**
Xingyu Ding et al. — 2026-08-31. Contribution: Aligns VLA representations with 4D temporal structure to reduce aliasing between visually similar states. Relevance: Previously seen prior work directly on long-horizon VLA manipulation limitations.

### Embodied Navigation

#### [Qwen-Drive-1.0: An Initial Step towards a Vision-Language Foundation Model for Autonomous Driving](http://arxiv.org/abs/2609.00111v1)
Xin Zhou et al. — 2026-08-31. Contribution: Unifies 3D perception, visual question answering, and motion planning within a vision-language driving foundation model. Relevance: A concrete generalist model spanning embodied perception-to-action for navigation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [LightNav-0: Eliciting VLM Spatial Intelligence for Generalist Embodied Navigation](http://arxiv.org/abs/2608.30935v1)**
Shaoan Wang et al. — 2026-08-31. Contribution: Elicits spatial priors already present in VLMs to handle heterogeneous navigation goals across tasks/environments. Relevance: Strong prior evidence for VLM-based generalist navigation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [Scaffolding Foundation Models into Physical-World Agents Pushes the Frontier of Long-Horizon Navigation](http://arxiv.org/abs/2608.30396v1)**
Zixing Lei et al. — 2026-08-31. Contribution: Combines VLMs for high-level reasoning with reliable closed-loop behavior for long-horizon physical navigation. Relevance: Reinforces scaffolded architecture direction for embodied navigation.

---

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [SinkPruner: Sink-Free Visual Token Pruning for Multimodal Large Language Models](http://arxiv.org/abs/2609.01004v1)
Shiyu Li et al. — 2026-09-01. Contribution: Proposes sink-free visual token pruning to remove misleading attention-sink tokens in MLLM inference. Relevance: Reduces inference cost of long visual token sequences while improving pruning robustness.

### Multimodal LLM Pruning

#### [S²Prune: Spatially Structured Visual Token Pruning for Multimodal Large Language Models](http://arxiv.org/abs/2609.01224v1)
Yuanyuan Jia et al. — 2026-09-01. Contribution: Finds that importance/redundancy criteria produce stable spatial biases and proposes spatially structured visual token pruning. Relevance: Improves MLLM visual-token pruning by correcting input-agnostic spatial bias.

#### [From Saliency to Discriminability: Rank-Preserving Visual Token Pruning for VLM Rerankers](http://arxiv.org/abs/2609.00667v1)
Siyi Liu et al. — 2026-09-01. Contribution: Shows attention-saliency pruning is misaligned with ranking objectives and introduces rank-preserving token pruning for VLM listwise rerankers. Relevance: Makes VLM reranking practical when jointly processing tens of candidates.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [Centering before Pruning: Lightweight Geometry Correction for Diversity-Based Visual Token Pruning in LVLMs](http://arxiv.org/abs/2608.30263v1)**
Shunjie Wen et al. — 2026-08-31. Contribution: Identifies raw-token cosine-similarity distortion and adds lightweight geometry correction before diversity-based pruning. Relevance: Complementary to today's spatial-bias and pruning-quality findings.

### Continual Learning

#### [RW-LoRA: Communication-Efficient Decentralized LoRA Fine-Tuning via Random Walks](http://arxiv.org/abs/2609.00078v1)
Xingran Chen et al. — 2026-08-31. Contribution: Replaces centralized aggregation in distributed LoRA with random-walk gossip to reduce communication cost. Relevance: Enables parameter-efficient adaptation without a central server.

#### [Frozen Cores Need Task Signal: Fisher-Whitened Cross-Covariance for Low-Resource LLM Adaptation](http://arxiv.org/abs/2609.00762v1)
Wentao Ye et al. — 2026-09-01. Contribution: Shows where PEFT coefficients act matters most under severe trainable-state budgets, and uses Fisher-whitened cross-covariance to choose them. Relevance: Provides principled placement of adaptation parameters for frozen-core continual updating.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [One Adapter, Many Tasks: Task-Conditioned Feature Transformations for Continual Learning](http://arxiv.org/abs/2608.31096v1)**
Yunxiang Fu et al. — 2026-08-31. Contribution: Adapts frozen backbones with task-conditioned feature transformations for class-incremental learning. Relevance: Strong established baseline for rehearsal-free continual learning.

---

## 视觉感知

### Event-Based Vision

#### [Residual Kalman Dynamics for Event-Based UAV Forecasting](http://arxiv.org/abs/2609.00839v1)
Per Nyblom et al. — 2026-09-01. Contribution: Combines a constant-velocity Kalman baseline with a learned residual model for UAV bounding-box forecasting on FRED event data. Relevance: Shows event-camera dynamics can be forecast with lightweight hybrid physical/learned models.

### 3D Point Cloud Perception

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [VCAR: Training-Free 3DGS Segmentation via View Completeness and Axis-Aware Boundary Refinement](http://arxiv.org/abs/2608.30870v1)**
Kun Cao et al. — 2026-08-31. Contribution: Avoids expensive feature-distillation per-scene by training-free 3DGS segmentation with view-completeness scoring and axis-aware refinement. Relevance: Reduces cost and boundary blur in 3D scene segmentation for downstream perception.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [Lucida: Parse, Generate, and Place for Composable Real-to-Sim Scene Modeling](http://arxiv.org/abs/2608.30821v1)**
Minghan Qin et al. — 2026-08-31. Contribution: Recovers real indoor scenes as editable, individually manipulable object assets for simulation. Relevance: Supplies simulation-ready 3D scenes for embodied-agent and VLA evaluation.

---

## 3. Cross-Topic Signals

- **Context as an engineering artifact**: Agent-harness memory (ContextPipe, MemoryWalker, CordisBench) and context compilation (Compile, Don't Memorize) both treat prompts/history as structured infrastructure rather than raw token streams.
- **Dynamic memory for embodied agents**: DSG and HitMem independently target objects displaced by human or agent activity, echoing the growing need for temporally aware 3D state beyond static scene assumptions.
- **Spatial/temporal bias correction**: All three token-pruning papers (S²Prune, SinkPruner, Centering) show that pruning quality is limited not by token redundancy alone but by systematic spatial or sink-attention biases.
- **Evaluation validity crisis**: Guardrails in commerce, TempCloze language shortcuts, and predictive-multiplicity auditing all probe whether strong benchmark numbers reflect genuine agent/model competence.
- **RL and self-improvement as training-time compute**: Outcome-only RL for long-horizon agents, DiagEvo's guided self-play, and self-play driving all push capability growth through interaction rather than architecture scaling.

## 4. Priority Reading

- **Explore More, Drift Less** — Challenges the widespread assumption that outcome-only RL plateaus on small open models; directly relevant to LLM-agent post-training and self-improvement investment decisions.
- **MemoryWalker** — Identifies a fundamental train/serve mismatch introduced by context compression in deployed agent harnesses; important for anyone training agents that will run under production compaction.
- **EmbodiedSkills** — Provides a unified orchestration/training/deployment view of VLA agents for long-horizon physical tasks, bridging the gap between action prediction and full embodied skill execution.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*