# Lab Research Topics Radar 2026-09-24

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 19 new + 0 seen in the last 14 days | Generated: 2026-09-24 00:10 UTC

---

## Today's Overview
- **LLM Agent Engineering:** New work on efficient selective control (REFLEX), post-training delivery benchmarks for forward-deployed engineer agents, and relational social reasoning for agent decisions.
- **Agent Test-Time Scaling and Self-Improvement:** New test-time sampling/search methods (Hill Sampling, learned search policies) and context compaction for long-horizon coding agents.
- **LLM Agent Societies:** No new papers today.
- **Vision-Language-Action Models:** New VLA work on geometry-change supervision, hierarchical medical manipulation, and RL specialist routing for precision tasks.
- **Embodied Navigation:** New instruction-conditioned sparse perception, foundation-model deployment solutions, and cooperative 3D tracking for EdgeAI perception.
- **LLM Pruning and Inference Optimization:** One new omni-modal embedding report with a shared multimodal backbone relevant to inference efficiency.
- **Multimodal LLM Pruning:** One new paper reframes visual token pruning around conditional removability.
- **Continual Learning:** New work on hierarchical modularity for general continual learning and fine-grained MoE PEFT for modular adaptation.
- **Event-Based Vision:** One new paper on completion-augmented event propagation for high-rate dense prediction.
- **3D Point Cloud Perception:** New work on vision-based point cloud map priors for camera 3D detection/HD mapping and anomaly type-aware 3D anomaly detection.
- **3D Point Cloud Perception and Tracking:** No new papers today.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [REFLEX with Jev for Efficient Selective Control in LLM Agents](http://arxiv.org/abs/2609.26532v1)
*T. Wu, W. Y. B. Lim | 2026-09-22.* Contribution: Introduces REFLEX with Jev as a fast typed decision layer that calls a strong LLM only when confidence is low. Relevance: Directly targets efficient selective control in LLM agents without reducing task success.

#### [Trains but Doesn't Learn: A Post-Training Delivery Benchmark for LLM Agents as Forward-Deployed Engineers](http://arxiv.org/abs/2609.25237v1)
*W. Ding, J. Zhan | 2026-09-21.* Contribution: Proposes a post-training delivery benchmark for LLM agents serving as forward-deployed engineers under budget, approval, and reproducibility constraints. Relevance: Directly studies real-world LLM agent engineering workflows around fine-tuning, evaluation, and deployment.

#### [When LLM Agents Fail to Read the Room: ReAdapt for Relational Social Reasoning](http://arxiv.org/abs/2609.25284v1)
*J. Lin, X. Li, Y. Liu et al. | 2026-09-21.* Contribution: Presents ReAdapt for relational social reasoning, where agent actions depend on latent relationships rather than content salience. Relevance: Relevant to LLM agent engineering for social decision-making and relational context.

### Agent Test-Time Scaling and Self-Improvement
#### [Hill Sampling for Test-Time Scaling: A Simple and Better Alternative to Repeated Sampling, Evolution, and Training](http://arxiv.org/abs/2609.25510v1)
*J. Beck, P. V. Ogren, A. Kobren | 2026-09-22.* Contribution: Proposes Hill Sampling as a simple alternative to repeated sampling, evolution, and test-time training for verifiable problems. Relevance: Directly addresses test-time scaling for LLMs.

#### [Beyond Repeated Sampling: Learning Search Policies for LLM Reasoning](http://arxiv.org/abs/2609.26704v1)
*I. Labiad, M. Kowalski, M. Schoenauer et al. | 2026-09-22.* Contribution: Learns search policies for LLM reasoning instead of relying on naive repeated sampling. Relevance: Directly targets better use of test-time compute for reasoning.

#### [CliffCompaction: Cost-Efficient Compaction for Long-Horizon Coding Agents](http://arxiv.org/abs/2609.26779v1)
*T. Nguyen, E. Cho, B. Chen et al. | 2026-09-22.* Contribution: Develops autocompaction for long-horizon coding agents, reducing cost up to 50% under bounded context. Relevance: Relevant to agent test-time scaling by managing long contexts across sessions; also bridges continual-learning concerns.

### LLM Agent Societies
No new papers today.

## 具身智能
### Vision-Language-Action Models
#### [HABILIS Brain 0: Geometry-Change Supervision for Vision-Language-Action and Residual Flow Recovery](http://arxiv.org/abs/2609.25558v1)
*J. Pahk, J. Kang, T. Park et al. | 2026-09-22.* Contribution: Proposes geometry-change supervision for VLA policies, using residual flow recovery to capture manipulation changes. Relevance: Directly advances VLA representation learning by supervising geometric changes rather than only current-frame geometry.

#### [MedVLA: A Hierarchical Vision-Language-Action Framework for Closed-Loop Precision Medical Robot Manipulation](http://arxiv.org/abs/2609.25756v1)
*J. Xie, C. He, A. Ye et al. | 2026-09-22.* Contribution: Introduces a hierarchical VLA framework for closed-loop precision medical robot manipulation under safety and interpretability constraints. Relevance: Directly targets VLA continuous action generation in a high-precision medical robotics domain.

#### [RouteRLT: Learning When and Which RL Specialist Should Control a Vision-Language-Action Policy](http://arxiv.org/abs/2609.26467v1)
*C. Zhu, J. Hinds, H. Kim et al. | 2026-09-22.* Contribution: Learns when and which RL specialist should control a pretrained VLA policy for precision-critical contact-rich tasks. Relevance: Directly relevant to improving VLA policies by routing between broad manipulation competence and RL specialists.

### Embodied Navigation
#### [SparseNav: Instruction-conditioned Sparse Semantic Perception for Training-Free Vision-Language Navigation](http://arxiv.org/abs/2609.26408v1)
*Q. Chen, J. Kang, R. Lin et al. | 2026-09-22.* Contribution: Proposes instruction-conditioned sparse semantic perception for training-free vision-language navigation. Relevance: Directly advances map-based VLN with efficient spatial representations for embodied navigation.

#### [Deploying Foundation Models for Embodied Navigation](http://arxiv.org/abs/2609.25666v1)
*V. S. Dorbala, D. Manocha | 2026-09-22.* Contribution: Tackles training bias and limited context length when deploying foundation models on embodied navigation agents. Relevance: Directly addresses foundation-model deployment for personalization and long-horizon navigation.

#### [CDKF-Track: Cluster-aware Data-Driven Kalman Filtering for Cooperative 3D Multi-Object Tracking](http://arxiv.org/abs/2609.25668v1)
*M. Damanaki, N. Piperigkos, A. Gkillas et al. | 2026-09-22.* Contribution: Introduces cluster-aware data-driven Kalman filtering for cooperative 3D multi-object tracking in EdgeAI perception. Relevance: Relevant to embodied navigation perception by improving multi-agent 3D tracking for safe decision-making.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [Ovis-Embedding: Pushing the Frontiers of Universal Omni-Modal Embeddings](http://arxiv.org/abs/2609.25165v1)
*Ovis-Embedding Team | 2026-09-21.* Contribution: Introduces Ovis-Embedding, an omni-modal embedding family with a shared multimodal backbone for text, image, video, and audio. Relevance: Its native shared multimodal backbone may reduce separate modality towers, making it adjacent to inference optimization, though it is not a pruning paper.

### Multimodal LLM Pruning
#### [From Token Importance to Conditional Removability: Rethinking Visual Token Pruning in Multimodal Large Language Models](http://arxiv.org/abs/2609.26484v1)
*S. He, Y. Liang, R. He et al. | 2026-09-22.* Contribution: Shows that token importance and redundancy alone do not characterize removability, proposing conditional removability for visual token pruning. Relevance: Directly targets training-free visual token pruning in multimodal LLMs.

### Continual Learning
#### [Brain-Inspired Hierarchical Modularity for General Continual Learning](http://arxiv.org/abs/2609.25146v1)
*H. Yan, K. Zhou, Q. Cheng et al. | 2026-09-21.* Contribution: Proposes brain-inspired hierarchical modularity for general continual learning beyond offline task-wise training. Relevance: Directly targets continual learning under changing environments and weak task boundaries.

#### [From Experts to Sub-experts: Fine-grained Parameter-Efficient Fine-Tuning for MoE LLMs](http://arxiv.org/abs/2609.25655v1)
*Z. Tan, C. Liu, Y. Liu et al. | 2026-09-22.* Contribution: Investigates fine-grained parameter-efficient fine-tuning for MoE LLMs at sub-expert granularity. Relevance: Relevant to modular adaptation and efficient specialization, with implications for continual learning.

## 视觉感知
### Event-Based Vision
#### [LiFR v2: Completion-Augmented Event Propagation for High-Rate Dense Prediction](http://arxiv.org/abs/2609.25803v1)
*T. Wan, X. Wu, Y. Yu et al. | 2026-09-22.* Contribution: Presents completion-augmented event propagation for high-rate dense prediction using event cameras and RGB fusion. Relevance: Directly relevant to event-based vision for temporally dense perception.

### 3D Point Cloud Perception
#### [Leveraging Vision-Based Point Cloud Map Priors for Camera-Based 3D Object Detection and Online Vectorized HD Mapping](http://arxiv.org/abs/2609.26325v1)
*M. Käppeler, R. Mohan, A. Valada | 2026-09-22.* Contribution: Leverages vision-based point cloud map priors for camera-based 3D object detection and online vectorized HD mapping. Relevance: Directly addresses 3D point cloud perception as map priors for camera-based 3D scene understanding.

#### [AT3D-AD: Anomaly Type-Aware 3D Anomaly Detection via Hierarchical Point-Language Alignment](http://arxiv.org/abs/2609.25930v1)
*J. Zeng, H. Lu, C. Gao | 2026-09-22.* Contribution: Proposes anomaly type-aware 3D anomaly detection via hierarchical point-language alignment for industrial inspection. Relevance: Directly addresses 3D point cloud perception for defect localization.

### 3D Point Cloud Perception and Tracking
No new papers today.

## Cross-Topic Signals
- Test-time scaling and agent context management are converging: Hill Sampling and learned search policies optimize extra computation, while CliffCompaction compacts context for long-horizon agents.
- VLA and embodied navigation share foundation-model deployment challenges: geometry-change supervision, RL specialist routing, sparse instruction-conditioned perception, bias, and context limits all target robust real-world action.
- Multimodal efficiency appears across pruning and embedding work: conditional visual-token removability and Ovis-Embedding’s shared omni-modal backbone both push toward leaner multimodal representation and inference.
- Continual learning and modular adaptation intersect with MoE PEFT: sub-expert fine-tuning and brain-inspired hierarchical modularity suggest modular retention/adaptation strategies.
- 3D perception, tracking, and event-based vision provide complementary spatial-temporal sensing for embodied autonomy: point cloud map priors, cooperative 3D tracking, and event propagation all support high-rate scene understanding.

## Priority Reading
1. **[HABILIS Brain 0](http://arxiv.org/abs/2609.25558v1):** Read in full for a concrete VLA supervision idea—geometry-change supervision plus residual flow recovery—directly relevant to manipulation and embodiment-agnostic visual interfaces.
2. **[Hill Sampling for Test-Time Scaling](http://arxiv.org/abs/2609.25510v1):** Read in full for a simple, potentially general alternative to repeated sampling, evolution, and test-time training in verifiable settings.
3. **[From Token Importance to Conditional Removability](http://arxiv.org/abs/2609.26484v1):** Read in full for a sharper formulation of visual token removability in multimodal LLMs, with direct implications for pruning and inference optimization.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*