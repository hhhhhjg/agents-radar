# Lab Research Topics Radar 2026-08-13

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 19 new + 0 seen in the last 14 days | Generated: 2026-08-12 22:34 UTC

---

## Today's Overview

- **LLM Agent Engineering (3 new):** Adaptive safety harness evolution, bidirectional self-distillation for skill-based RL agents, and an executable red-teaming benchmark all push agent-harness safety and policy learning forward.
- **Agent Test-Time Scaling and Self-Improvement (3 new):** Verifier-free test-time scaling is advanced via consilience-based selection, CAD-consensus sampling, and retrieval-augmented reasoning traces.
- **LLM Agent Societies:** No new papers today.
- **Vision-Language-Action Models (4 new matches; distillation paper placed under 3D Point Cloud Perception):** Executable CoT, diffusion-based attacks, KV-cache introspection gating, and multi-view spatial distillation all target VLA efficiency, robustness, or control.
- **Embodied Navigation (4 new matches; driving and spatial-distillation papers placed elsewhere):** Active evidence consolidation improves open-vocab object navigation, while modality-agnostic spatial CoT strengthens VLM grounding for navigation.
- **LLM Pruning and Inference Optimization (1 new):** Task-register token pruning studies how pruning policies transfer across vision tasks.
- **Multimodal LLM Pruning (1 new):** Cross-modal residual guidance prunes visual tokens in VLMs more effectively than similarity-based methods.
- **Continual Learning (3 new):** Papers cover memory growth in agentic coding, heterogeneous federated LoRA adaptation, and Burmese medical ASR fine-tuning, with varying directness to continual learning.
- **Event-Based Vision (2 new):** Event features are reframed as motion cues, and event streams guide diffusion-based frame interpolation.
- **3D Point Cloud Perception (1 new):** Multi-view relational distillation improves VLM spatial representations relevant to 3D/embodied perception.
- **3D Point Cloud Perception and Tracking:** No new papers today.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [SHE: Trajectory-driven Safety Harness Evolution for LLM Agents](http://arxiv.org/abs/2608.09885v1)

Authors: Wanying Qu, Qinghua Mao, Yu Li et al. | Published: 2026-08-10

**Contribution:** Proposes evolving the LLM-agent harness—context, memory, tools, permissions, and runtime control—along execution trajectories rather than treating it as fixed.  
**Relevance:** Directly addresses agent engineering by making the safety layer adaptive and runtime-aware.

#### [REDAgentBench: Executable Red Teaming and Faithful Measurement of LLM Agent Systems](http://arxiv.org/abs/2608.10669v1)

Authors: Zixing Chen, Xingyuan Liu, Jie Zhu et al. | Published: 2026-08-11

**Contribution:** Introduces an executable red-teaming benchmark that measures adversarial safety violations in LLM-agent systems more faithfully than simplified evaluations.  
**Relevance:** Provides a concrete evaluation and safety-measurement tool for agent engineering.

#### [Bidirectional Context Self-Distillation for Reinforcement Learning of Skill-Based LLM Agents](http://arxiv.org/abs/2608.09555v1)

Authors: Tianjun Pan, Yuan Li, Hongda Wang et al. | Published: 2026-08-10

**Contribution:** Uses bidirectional context self-distillation to help LLM agents translate external natural-language skills into effective task actions during RL.  
**Relevance:** Advances skill-based LLM-agent policy learning and self-improvement.

### Agent Test-Time Scaling and Self-Improvement

#### [Consilience for Verifier-Free Test-Time Scaling](http://arxiv.org/abs/2608.09898v1)

Authors: Lecheng Kong, Like Hui, Haitao Mao et al. | Published: 2026-08-10

**Contribution:** Proposes a consilience-based selection criterion for verifier-free test-time scaling, enabling high-quality rollouts without external verifiers.  
**Relevance:** Core to agent TTS and self-improvement because it removes the need for task-specific verifier signals.

#### [Test-Time Scaling for CAD Generation via Verifier-Free Consensus Selection](http://arxiv.org/abs/2608.09706v1)

Authors: Aaron Haag, Altay Kaçan, Bertram Fuchs et al. | Published: 2026-08-10

**Contribution:** Applies verifier-free consensus selection to text-to-CAD sampling, identifying good parametric CAD programs without ground-truth models.  
**Relevance:** Demonstrates a practical verifier-free TTS mechanism for generative agent tasks.

#### [ThinkRetrieve: Retrieval-Augmented Reasoning Traces for Test-Time Scaling](http://arxiv.org/abs/2608.10928v1)

Authors: Vaibhav Singh, Soumya Suvra Ghosal, Sarvesh Gharat et al. | Published: 2026-08-11

**Contribution:** Augments reasoning traces with retrieval to mitigate diminishing or negative returns from sequential test-time scaling.  
**Relevance:** Addresses a key failure mode of TTS in large reasoning models.

### LLM Agent Societies

No new papers today.

## 具身智能

### Vision-Language-Action Models

#### [XCoT-VLA: Executable Chain-of-Thought for Vision-Language-Action Driving](http://arxiv.org/abs/2608.10976v1)

Authors: Foundation Model Team, XPeng Inc | Published: 2026-08-11

**Contribution:** Replaces verbose natural-language CoT with executable CoT for VLA driving, reducing decoding cost and improving suitability for real-time control.  
**Relevance:** Targets a central VLA limitation—open-ended CoT being too costly for closed-loop control.

#### [Hidden in Plain Sight: Diffusion-Based Unrestricted Robotic Attacks on Vision-Language-Action Models](http://arxiv.org/abs/2608.10393v1)

Authors: Jiahui Han, Yuhui Yao, Xin Wang et al. | Published: 2026-08-11

**Contribution:** Develops diffusion-based unrestricted adversarial attacks against VLA manipulation models, exposing physical-world robustness risks.  
**Relevance:** Highlights the adversarial robustness gap in VLA-based robot control.

#### [Neural Introspection Gating for Adaptive KV-Cache Reuse in Vision-Language-Action Models](http://arxiv.org/abs/2608.10824v1)

Authors: Zhijie Wu, Kento Kawaharazuka, Kei Okada | Published: 2026-08-11

**Contribution:** Introduces adaptive gating to reuse KV representations for barely-changing visual tokens in autoregressive VLA transformers, reducing compute.  
**Relevance:** Improves real-time inference efficiency of VLA models.

### Embodied Navigation

#### [AECNav: Active Evidence Consolidation for Efficient Zero-Shot Open-Vocabulary Object Navigation](http://arxiv.org/abs/2608.10817v1)

Authors: Guanlin Liu, Shaobin Ling, Renyuan Liu et al. | Published: 2026-08-11

**Contribution:** Presents active evidence consolidation to reduce redundant exploration and improve accuracy in zero-shot open-vocabulary object navigation.  
**Relevance:** Directly advances efficient embodied navigation in unseen environments.

#### [Chain of Spatial Thoughts: Modality-Agnostic Spatial Grounding for Vision Language Models](http://arxiv.org/abs/2608.10278v1)

Authors: Hunter Schofield, Mohammed Elmahgiubi, Mohammad Mahdavian et al. | Published: 2026-08-10

**Contribution:** Proposes a modality-agnostic spatial chain-of-thought method to improve VLM spatial grounding for manipulation, navigation, and driving.  
**Relevance:** Provides a general spatial-reasoning method applicable to embodied navigation.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [Putting Registers to Work: Task Registers for Token Pruning in Vision Transformers](http://arxiv.org/abs/2608.10989v1)

Authors: Hongsen Cao, Mona Jaber, Shanxin Yuan et al. | Published: 2026-08-11

**Contribution:** Introduces task registers to transfer token-pruning policies across image classification, semantic segmentation, and object detection.  
**Relevance:** Offers reusable pruning-policy mechanisms relevant to vision-transformer inference optimization in LLM/VLM pipelines.

### Multimodal LLM Pruning

#### [When Vision Becomes Text: Visual Token Pruning via Cross-Modal Residual Guidance in VLMs](http://arxiv.org/abs/2608.10489v1)

Authors: Congyang Ou, Ruike Song, Yang Zhou et al. | Published: 2026-08-11

**Contribution:** Prunes visual tokens in VLMs using cross-modal residual guidance instead of pairwise similarity metrics, lowering inference cost while preserving perception.  
**Relevance:** Directly targets multimodal LLM inference efficiency via visual-token compression.

### Continual Learning

#### [Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding](http://arxiv.org/abs/2608.11095v1)

Authors: Kushal Chakrabarti | Published: 2026-08-11

**Contribution:** Analyzes unbounded growth of agentic coding memory files as “catastrophic remembering,” where appending instructions is cheap but deleting obsolete ones is hard.  
**Relevance:** Connects agent memory management to continual-learning-style retention and forgetting problems.

#### [SeFoRA: Sketch-Aggregated Federated Low-Rank Adaptation with Heterogeneous Client Ranks](http://arxiv.org/abs/2608.10144v1)

Authors: Yue Xia, Tayyebeh Jahani-Nezhad, Mayank Bakshi et al. | Published: 2026-08-10

**Contribution:** Provides sketch-based aggregation for federated LoRA when clients use different ranks, enabling parameter-efficient federated fine-tuning.  
**Relevance:** Supports distributed, low-rank adaptation settings relevant to continual and lifelong model updates.

#### [myMediWhisper: Construction of Burmese Medical Speech Corpus and Whisper Fine-Tuning for Clinical Dialogue ASR](http://arxiv.org/abs/2608.11036v1)

Authors: Ye Kyaw Thu, Ye Bhone Lin, Thura Aung et al. | Published: 2026-08-11

**Contribution:** Constructs a 28-hour Burmese medical speech corpus and fine-tunes Whisper for clinical dialogue ASR.  
**Relevance:** Demonstrates domain adaptation of a pretrained model, a lightweight continual-learning-style update path.

## 视觉感知

### Event-Based Vision

#### [Static in Frames, Dynamic in Events: Rethinking Features in Event Cameras as Motion Cues](http://arxiv.org/abs/2608.11075v1)

Authors: Hesam Araghi, Jan van Gemert, Nergis Tomen | Published: 2026-08-11

**Contribution:** Argues that event-derived features should be treated as motion cues rather than static snapshots, reframing event-camera preprocessing.  
**Relevance:** Provides a conceptual advance for event-based vision representations.

#### [Bridging Event Streams and DiT: Event-Guided Video Frame Interpolation](http://arxiv.org/abs/2608.10479v1)

Authors: Guixu Lin, Yuyang Yu, Xiang Ji et al. | Published: 2026-08-11

**Contribution:** Uses event streams to guide latent-diffusion-based video frame interpolation across large temporal gaps and complex motion.  
**Relevance:** Shows event data improving a difficult vision task and expands event-based vision applications.

### 3D Point Cloud Perception

#### [Multi-View Relational Distillation for Spatial Reasoning with Vision-Language Models](http://arxiv.org/abs/2608.10864v1)

Authors: Kiet T. Nguyen, Hanbo Shim, Jinwoo Kim et al. | Published: 2026-08-11

**Contribution:** Distills multi-view relational geometry into VLM representations to improve spatial reasoning for embodied AI and robotics.  
**Relevance:** Strengthens 3D/geometric perceptual grounding needed for embodied and point-cloud-based perception tasks.

### 3D Point Cloud Perception and Tracking

No new papers today.

## Cross-Topic Signals

- **Token/KV efficiency connects VLA, VLM, and ViT work:** KV-cache gating for VLA, task-register token pruning for ViTs, and cross-modal visual-token pruning for VLMs all attack the same compute bottleneck from different angles.
- **Verifier-free selection is emerging as a general TTS strategy:** CAD-consensus sampling and consilience-based selection both aim to identify good rollouts without ground-truth verifiers.
- **Spatial grounding is a shared bottleneck across embodied topics:** XCoT-VLA, Chain of Spatial Thoughts, and Multi-View Relational Distillation all improve geometry-aware reasoning for control and navigation.
- **Agent harness/memory is becoming a first-class safety-and-learning artifact:** SHE, REDAgentBench, and the CLAUDE.md analysis treat harness/memory as adaptive infrastructure rather than static configuration.
- **Event-based motion cues complement frame-based perception:** Reframing event features as motion cues and using event streams to guide interpolation both leverage asynchronous temporal information beyond static frames.

## Priority Reading

#### - [**XCoT-VLA: Executable Chain-of-Thought for Vision-Language-Action Driving**](http://arxiv.org/abs/2608.10976v1) — Full read because it proposes a concrete alternative to costly natural-language CoT in VLA control, with direct implications for real-time driving.
#### - [**Consilience for Verifier-Free Test-Time Scaling**](http://arxiv.org/abs/2608.09898v1) — Full read because it offers a general, verifier-free TTS selection mechanism that could transfer across coding, CAD, and LLM-agent tasks.
#### - [**REDAgentBench: Executable Red Teaming and Faithful Measurement of LLM Agent Systems**](http://arxiv.org/abs/2608.10669v1) — Full read because it provides an executable benchmark for measuring agent safety, directly useful for evaluating and improving agent harnesses.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*