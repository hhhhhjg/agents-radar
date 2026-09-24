# Lab Research Topics Radar 2026-09-24

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 33 new + 13 seen in the last 14 days | Generated: 2026-09-24 00:10 UTC

---

## Today's Overview
- **LLM Agent Engineering**: 10 new papers advanced agent runtime reliability, task-state handling, reusable harnesses, failure-informed policies, scalable multi-agent orchestration, semantic coordination, post-training delivery, trajectory auditing, social reasoning, and omni-modal agentic models.
- **Agent Test-Time Scaling and Self-Improvement**: 4 new papers focused on better search/sampling policies, direct generator optimization for theorem proving, and cost-efficient long-horizon agent compaction.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: 11 new papers covered geometry-change supervision, medical VLA, RL specialist routing, safety rollback, action tokenization, instruction-following, unified generation/understanding, humanoid collaboration, imperfect-data upcycling, and deployment foundations.
- **Embodied Navigation**: 3 new papers focused on instruction-conditioned sparse perception, foundation-model deployment for navigation, and cooperative 3D tracking.
- **LLM Pruning and Inference Optimization**: 1 new paper presented omni-modal embeddings with a shared multimodal backbone.
- **Multimodal LLM Pruning**: 1 new paper rethought visual token removability beyond importance/redundancy.
- **Continual Learning**: 3 new papers covered MoE sub-expert PEFT, brain-inspired hierarchical modularity, and cross-session agent compaction.
- **Event-Based Vision**: 1 new paper introduced completion-augmented event propagation for high-rate dense prediction.
- **3D Point Cloud Perception**: 2 new papers used point-cloud map priors for camera 3D detection/HD mapping and type-aware point-language alignment for 3D anomaly detection.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [REFLEX with Jev for Efficient Selective Control in LLM Agents](http://arxiv.org/abs/2609.26532v1)
Wu & Lim | 2026-09-22 | Uses Jev as a fast typed decision layer and calls a strong LLM only when confidence is low. | Relevance: efficient selective control for LLM agent engineering.
#### [How Strongly Should Task State Influence an LLM Agent?](http://arxiv.org/abs/2609.25686v1)
Zhang et al. | 2026-09-22 | Studies whether task state stays as prompt text or is enforced by a module. | Relevance: core long-horizon agent state management.
#### [Grow the Harness, Not the Context: From Strategy-Free Scaffolds to Reusable Specialist Agents](http://arxiv.org/abs/2609.26760v1)
Li et al. | 2026-09-22 | Turns recurring control decisions into reusable executable specialist agents. | Relevance: reusable agent harness design.
#### [FIRE: Failure-Informed Runtime Engineering for Reliable Language-Model Agents](http://arxiv.org/abs/2609.26048v1)
Agarwal & Jain | 2026-09-22 | Applies runtime instructions and action denials at states preceding observed failures. | Relevance: agent reliability without weight changes.
#### [Agensh: Scaling Organizational Intelligence to 1,024 Agents](http://arxiv.org/abs/2609.26781v1)
Zhan et al. | 2026-09-22 | Presents a scalable multi-agent harness beyond central-orchestrator limits. | Relevance: scalable LLM multi-agent organizations.
#### [Passes Alone, Fails Together: Benchmarking Semantic Coordination in Parallel LLM-Agent Development](http://arxiv.org/abs/2609.25396v1)
Xia et al. | 2026-09-21 | Introduces a benchmark for semantic coordination failures when parallel coding agents' patches merge. | Relevance: multi-agent coordination in software workflows.
#### [Trains but Doesn't Learn: A Post-Training Delivery Benchmark for LLM Agents as Forward-Deployed Engineers](http://arxiv.org/abs/2609.25237v1)
Ding & Zhan | 2026-09-21 | Benchmarks LLM agents as forward-deployed engineers in post-training-as-a-service settings. | Relevance: practical agent post-training delivery.
#### [Testing-Driven Reliability Audit of Trajectory-Based Early Outcome Prediction for LLM Agents](http://arxiv.org/abs/2609.25647v1)
Cao | 2026-09-22 | Audits calibration transfer for trajectory-based early outcome prediction. | Relevance: reliable early termination and agent evaluation.
#### [When LLM Agents Fail to Read the Room: ReAdapt for Relational Social Reasoning](http://arxiv.org/abs/2609.25284v1)
Lin et al. | 2026-09-21 | Proposes ReAdapt for relational social reasoning using tie strength and reciprocity. | Relevance: social decision-making for LLM agents.
#### [Qwen3.8-Omni: Towards Native Omni-Modal Agents](http://arxiv.org/abs/2609.25611v1)
Qwen Team | 2026-09-22 | Introduces a natively multimodal agentic model for multimodal productivity. | Relevance: foundation model for omni-modal LLM agents.

### Agent Test-Time Scaling and Self-Improvement
#### [Hill Sampling for Test-Time Scaling: A Simple and Better Alternative to Repeated Sampling, Evolution, and Training](http://arxiv.org/abs/2609.25510v1)
Beck et al. | 2026-09-22 | Proposes hill sampling for test-time scaling without elaborate evolution or training. | Relevance: direct alternative for test-time compute scaling.
#### [Beyond Repeated Sampling: Learning Search Policies for LLM Reasoning](http://arxiv.org/abs/2609.26704v1)
Labiad et al. | 2026-09-22 | Learns search policies instead of relying on naive repeated sampling. | Relevance: self-improving search for hard reasoning.
#### [Direct Optimization of Generators for Search in Automated Theorem Proving](http://arxiv.org/abs/2609.25575v1)
Ousherovitch & Tewari | 2026-09-22 | Directly optimizes LLM generators for search in automated theorem proving. | Relevance: generator policy improvement for search-based test-time reasoning.
#### [CliffCompaction: Cost-Efficient Compaction for Long-Horizon Coding Agents](http://arxiv.org/abs/2609.26779v1)
Nguyen et al. | 2026-09-22 | Autocompaction reduces context cost up to 50% while maintaining or improving coding-agent performance. | Relevance: bounded-context scaling for long-horizon agents.

## 具身智能
### Vision-Language-Action Models
#### [HABILIS Brain 0: Geometry-Change Supervision for Vision-Language-Action and Residual Flow Recovery](http://arxiv.org/abs/2609.25558v1)
Pahk et al. | 2026-09-22 | Uses geometry-change supervision for VLA and residual flow recovery. | Relevance: direct VLA representation learning.
#### [MedVLA: A Hierarchical Vision-Language-Action Framework for Closed-Loop Precision Medical Robot Manipulation](http://arxiv.org/abs/2609.25756v1)
Xie et al. | 2026-09-22 | Proposes hierarchical VLA for closed-loop precision medical robot manipulation. | Relevance: safety-critical VLA manipulation.
#### [RouteRLT: Learning When and Which RL Specialist Should Control a Vision-Language-Action Policy](http://arxiv.org/abs/2609.26467v1)
Zhu et al. | 2026-09-22 | Learns routing to RL specialists that control a pretrained VLA. | Relevance: VLA refinement for precision tasks.
#### [SafeLoop: Risk-Aware Rollback for Vision-Language-Action Manipulation](http://arxiv.org/abs/2609.26313v1)
Lou et al. | 2026-09-22 | Adds risk-aware rollback to avoid irreversible long-horizon VLA failures. | Relevance: safety mechanism for VLA execution.
#### [Beyond Reconstruction Error: Analytical and Data-Driven Action Tokenization for Autoregressive Vision-Language-Action Models](http://arxiv.org/abs/2609.25820v1)
Yang et al. | 2026-09-22 | Compares action tokenization properties for closed-loop VLA control beyond reconstruction. | Relevance: core action representation for autoregressive VLA.
#### [RoboFollow: Unveiling the Instruction Following Mirage in Embodied Agents](http://arxiv.org/abs/2609.25636v1)
Guo et al. | 2026-09-22 | Shows low scene entropy inflates instruction-following success in embodied agents. | Relevance: diagnoses VLA instruction following.
#### [MachEmbodied-U0: Unified Understanding and Generation Model for Embodied Intelligence](http://arxiv.org/abs/2609.25627v1)
Wen et al. | 2026-09-22 | Unifies understanding and generation for embodied intelligence with scene dynamics. | Relevance: VLA and world-action model direction.
#### [MATE: Multi-Agent Virtual Teleoperation Platform for Humanoid Collaboration Data Collection](http://arxiv.org/abs/2609.26520v1)
Yu et al. | 2026-09-22 | Presents multi-agent virtual teleoperation for humanoid collaboration data. | Relevance: scalable VLA data collection for collaboration.
#### [Imperfection for Precision: Upcycling Imperfect Data for High-Precision Robotic Manipulation](http://arxiv.org/abs/2609.26672v1)
Wei et al. | 2026-09-22 | Upcycles imperfect data for high-precision robotic manipulation. | Relevance: data-efficient VLA training.

### Embodied Navigation
#### [SparseNav: Instruction-conditioned Sparse Semantic Perception for Training-Free Vision-Language Navigation](http://arxiv.org/abs/2609.26408v1)
Chen et al. | 2026-09-22 | Uses instruction-conditioned sparse semantic perception for training-free VLN. | Relevance: reduces perception cost in embodied navigation.
#### [Deploying Foundation Models for Embodied Navigation](http://arxiv.org/abs/2609.25666v1)
Dorbala & Manocha | 2026-09-22 | Tackles training bias and limited context for foundation models in embodied navigation. | Relevance: direct FM deployment for navigation.
#### [CDKF-Track: Cluster-aware Data-Driven Kalman Filtering for Cooperative 3D Multi-Object Tracking](http://arxiv.org/abs/2609.25668v1)
Damanaki et al. | 2026-09-22 | Uses cluster-aware data-driven Kalman filtering for cooperative 3D MOT. | Relevance: multi-agent tracking for navigation perception.
🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [What do VLM-Based Vision-Language Navigation Models Rely on: Interpreting and Steering Policy Behavior](http://arxiv.org/abs/2609.24576v1)
Makowski et al. | 2026-09-21 | Interprets and steers VLM-based VLN policy behavior. | Relevance: explains navigation policy reliance.
🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [A Topological Representation with Object-Path Graphs for Open-Vocabulary Instance Navigation](http://arxiv.org/abs/2609.24189v1)
Zheng et al. | 2026-09-21 | Uses object-path graphs for open-vocabulary instance navigation. | Relevance: topological representation for navigation.
🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [ME-VLM: A Unified VLM for Embodied Cognition and Agent Coordination](http://arxiv.org/abs/2609.24526v2)
Foundation Model, Li Auto Inc | 2026-09-21 | Introduces a unified VLM for embodied cognition and agent coordination. | Relevance: VLM grounding for embodied navigation.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [Ovis-Embedding: Pushing the Frontiers of Universal Omni-Modal Embeddings](http://arxiv.org/abs/2609.25165v1)
Ovis-Embedding Team | 2026-09-21 | Introduces an omni-modal embedding family with a shared multimodal backbone. | Relevance: efficient unified multimodal inference representation.
🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [SLICEChat: Progressive In-Encoder Token Pruning for Whole-Slide Pathology Language Models](http://arxiv.org/abs/2609.24894v1)
Bozkurt et al. | 2026-09-21 | Applies progressive in-encoder token pruning for gigapixel pathology MLLMs. | Relevance: inference optimization via token pruning.

### Multimodal LLM Pruning
#### [From Token Importance to Conditional Removability: Rethinking Visual Token Pruning in Multimodal Large Language Models](http://arxiv.org/abs/2609.26484v1)
He et al. | 2026-09-22 | Shows token importance and redundancy alone do not characterize conditional removability. | Relevance: directly rethinks multimodal visual token pruning.
🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [VPRune: Efficient Training-free Pre-LLM Visual Token Pruning](http://arxiv.org/abs/2609.24485v2)
Lv et al. | 2026-09-21 | Performs training-free pre-LLM visual token pruning and analyzes text-guided bias/information loss. | Relevance: direct multimodal LLM pruning method.

### Continual Learning
#### [From Experts to Sub-experts: Fine-grained Parameter-Efficient Fine-Tuning for MoE LLMs](http://arxiv.org/abs/2609.25655v1)
Tan et al. | 2026-09-22 | Studies PEFT granularity for MoE LLMs via sub-experts. | Relevance: modular adaptation for continual learning.
#### [Brain-Inspired Hierarchical Modularity for General Continual Learning](http://arxiv.org/abs/2609.25146v1)
Yan et al. | 2026-09-21 | Proposes brain-inspired hierarchical modularity for general continual learning. | Relevance: core continual learning architecture.
🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Muon Can Outperform Dedicated Continual Learning Methods](http://arxiv.org/abs/2609.24678v1)
Sincari et al. | 2026-09-21 | Shows Muon can outperform dedicated continual learning methods with LoRA. | Relevance: alternative optimizer for reducing forgetting.
🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [iSDFT: Information-Proximal Self-Distillation for Continual Learning in LLMs](http://arxiv.org/abs/2609.24646v1)
Khamis et al. | 2026-09-21 | Controls teacher influence in self-distillation for continual LLM learning. | Relevance: reduces forgetting in LLM continual learning.
🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [LoRA-generating hypernetworks for efficient on-device LLM generative personalization](http://arxiv.org/abs/2609.24979v1)
Augenstein et al. | 2026-09-21 | Uses LoRA-generating hypernetworks for on-device LLM personalization. | Relevance: efficient continual personalization.
🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [ACLArena: Agent Continue Learning in Multi-stage Post-training](http://arxiv.org/abs/2609.23989v1)
Wang et al. | 2026-09-21 | Studies agent continual learning across multi-stage post-training. | Relevance: agent continual learning benchmark and analysis.

## 视觉感知
### Event-Based Vision
#### [LiFR v2: Completion-Augmented Event Propagation for High-Rate Dense Prediction](http://arxiv.org/abs/2609.25803v1)
Wan et al. | 2026-09-22 | Augments event propagation with completion for high-rate dense prediction. | Relevance: direct event-based vision method.

### 3D Point Cloud Perception
#### [Leveraging Vision-Based Point Cloud Map Priors for Camera-Based 3D Object Detection and Online Vectorized HD Mapping](http://arxiv.org/abs/2609.26325v1)
Käppeler et al. | 2026-09-22 | Uses accumulated point-cloud map priors for camera-based 3D detection and HD mapping. | Relevance: 3D point cloud priors for perception.
#### [AT3D-AD: Anomaly Type-Aware 3D Anomaly Detection via Hierarchical Point-Language Alignment](http://arxiv.org/abs/2609.25930v1)
Zeng et al. | 2026-09-22 | Uses hierarchical point-language alignment for anomaly type-aware 3D detection. | Relevance: 3D point cloud anomaly perception.
🔁 **[SEEN IN THE LAST 14 DAYS]**
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Toward a foundation model for forest point clouds](http://arxiv.org/abs/2609.24787v1)
Yue et al. | 2026-09-21 | Builds a foundation model for forest point clouds across tasks and sensors. | Relevance: foundation model for 3D point cloud perception.

## Cross-Topic Signals
- Agent runtime/harness papers (REFLEX, FIRE, Grow the Harness, CliffCompaction) converge on moving control decisions out of prompt context into typed, reusable, or runtime-enforced modules.
- Test-time scaling is shifting from repeated sampling toward learned search policies, direct generator optimization, and cost-aware compaction.
- VLA precision/safety increasingly combines VLA priors with RL specialists, rollback, geometry-change supervision, and better action tokenization.
- Multimodal efficiency advances focus on conditional removability and in-encoder pruning, linking multimodal LLM pruning with general inference optimization.
- Continual learning and agent post-training overlap via modularity, PEFT/sub-experts, self-distillation, and cross-session compaction, suggesting a path toward lifelong agent learning.

## Priority Reading
#### **REFLEX with Jev for Efficient Selective Control in LLM Agents** — concrete architecture for selective LLM control; central to efficient LLM agent engineering.
2. **Hill Sampling for Test-Time Scaling** — simple alternative to repeated sampling, evolution, and test-time training; high relevance to agent test-time scaling.
#### **SafeLoop: Risk-Aware Rollback for Vision-Language-Action Manipulation** — directly addresses long-horizon VLA safety and irreversible failure recovery, a key embodied-agent concern.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*