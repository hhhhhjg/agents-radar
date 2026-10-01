# Lab Research Topics Radar 2026-10-01

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 19 new + 0 seen in the last 14 days | Generated: 2026-10-01 01:00 UTC

---

## Today's Overview
- **LLM Agent Engineering**: Three new papers advance RL post-training diversity, test-time harness composition, and safety of skill-based agents.
- **Agent Test-Time Scaling and Self-Improvement**: No new papers today.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: Four matched new papers span language-memory driving, adversarial robustness, compositional generalization, and self-evolving embodied agents; ASENA is cross-listed under Embodied Navigation.
- **Embodied Navigation**: Four matched new papers cover progress grounding, credit-guided test-time adaptation, self-evolving coding agents, and a cross-listed VLA driving-memory agent.
- **LLM Pruning and Inference Optimization**: Three matched new papers include predictable audio-token attention, transformer hidden-trajectory geometry, and a cross-listed VLM token-pruning method placed under Multimodal LLM Pruning.
- **Multimodal LLM Pruning**: Two new papers focus on textual-visual saliency for VLM token pruning and representation-dynamics saliency/similarity for MLLM token pruning.
- **Continual Learning**: Three new papers address federated replay, gain-guided continual test-time adaptation, and temporal knowledge graph extrapolation.
- **Event-Based Vision**: Two new papers cover source-free event-based monocular depth distillation and timing-attack blind spots from event representations.
- **3D Point Cloud Perception**: One new paper improves long-tailed LiDAR 3D object detection via geometry-augmented sampling.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [Explicit Trajectory Diversity for RL-Based Post-Training of LLM Agents](http://arxiv.org/abs/2609.38805v1)
- Authors: Fu et al.; 2026-09-30. Contribution: Proposes explicit trajectory diversity for RL-based post-training of LLM agents. Relevance: Directly targets diverse reasoning, tool-use, and interaction trajectories in agent post-training.

#### [Composing Task-specific Agent Harnesses at Test Time with Reusable Primitives](http://arxiv.org/abs/2609.38912v1)
- Authors: Kuang et al.; 2026-09-30. Contribution: Composes task-specific agent harnesses at test time from reusable primitives. Relevance: Core LLM agent engineering for context, tools, verification, state, and termination.

#### [Can Agents Trust Their Skills? Uncovering Unsafe Chains of Trust in Skill-Based LLM Agents](http://arxiv.org/abs/2609.39065v1)
- Authors: Wang et al.; 2026-09-30. Contribution: Uncovers unsafe chains of trust in skill-based LLM agents. Relevance: Addresses safety and trust when installed skills are automatically invoked across tasks.

### Agent Test-Time Scaling and Self-Improvement
No new papers today.

### LLM Agent Societies
No new papers today.

## 具身智能
### Vision-Language-Action Models
#### [Exploiting Vulnerabilities: Universal Adversarial Attacks on Vision-Language-Action Models in Robotics](http://arxiv.org/abs/2609.39178v1)
- Authors: Yang et al.; 2026-09-30. Contribution: Demonstrates universal adversarial attacks on VLA models in robotics. Relevance: Core robustness and safety issue for physical-world VLA deployment.

#### [Correcting WHERE, Preserving HOW: Compositional Generalization for Vision-Language-Action Models via Referential Guidance](http://arxiv.org/abs/2609.38616v1)
- Authors: Zhang et al.; 2026-09-29. Contribution: Uses referential guidance to improve compositional generalization in VLA models. Relevance: Directly targets VLA generalization across objects, destinations, and backgrounds.

#### [Vision-Language-Action Autonomous Driving Agent with Language-based Memory](http://arxiv.org/abs/2609.38641v1)
- Authors: Yan et al.; 2026-09-29. Contribution: Adds language-based memory to a VLA autonomous driving agent. Relevance: Extends VLA agents beyond limited frames via persistent language memory.

### Embodied Navigation
#### [ASENA: Self-evolving Agents for Embodied Navigation](http://arxiv.org/abs/2609.39207v1)
- Authors: Cheng et al.; 2026-09-30. Contribution: Connects coding agents to robot sensing, execution, and persistent experience. Relevance: Embodied navigation with self-evolving, reusable skills and experience.

#### [Seek Before You Move: Evidence Seeking for Progress Grounding in Vision-Language Navigation](http://arxiv.org/abs/2609.37353v1)
- Authors: Wang et al.; 2026-09-29. Contribution: Adds evidence seeking for progress grounding in VLN. Relevance: Addresses long-horizon VLN grounding under partial egocentric observations.

#### [Credit-Guided Policy Improvement for Test-time Adaptive Vision-Language Navigation](http://arxiv.org/abs/2609.37591v1)
- Authors: Li et al.; 2026-09-29. Contribution: Uses credit-guided policy improvement for test-time adaptive VLN. Relevance: Directly targets online adaptation and off-course decisions in VLN.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [Audio Token Attention Is Predictable Before the Language Model Runs](http://arxiv.org/abs/2609.38878v1)
- Authors: Park et al.; 2026-09-30. Contribution: Shows audio token attention is predictable before the language model runs. Relevance: Enables pre-LLM token pruning and efficiency for large audio language models.

#### [Predictive Geometry of Hidden Trajectories in Transformers](http://arxiv.org/abs/2609.37717v1)
- Authors: Mudarisov et al.; 2026-09-29. Contribution: Formalizes layerwise loss-to-go geometry for hidden trajectories in transformers. Relevance: Provides representation/inference analysis relevant to optimization and pruning.

### Multimodal LLM Pruning
#### [TReVS: Integrating Textual Relevance and Visual Saliency for Efficient Vision-Language Model Token Pruning](http://arxiv.org/abs/2609.37581v1)
- Authors: Wang et al.; 2026-09-29. Contribution: Integrates textual relevance and visual saliency for VLM token pruning. Relevance: Directly addresses multimodal LLM visual-token pruning.

#### [Representation Dynamics Reveal Semantic Saliency and Similarity for Visual Token Pruning in MLLMs](http://arxiv.org/abs/2609.36916v2)
- Authors: Li et al.; 2026-09-29. Contribution: Uses representation dynamics for semantic saliency and similarity in MLLM visual token pruning. Relevance: Directly targets visual-token pruning and inference latency.

### Continual Learning
#### [ReSCENE: Server-Side Replay for Structural Mitigation of Catastrophic Forgetting in Federated Continual Learning](http://arxiv.org/abs/2609.38833v1)
- Authors: Kang et al.; 2026-09-30. Contribution: Introduces server-side replay to mitigate catastrophic forgetting in federated continual learning. Relevance: Core continual learning under federated constraints.

#### [Not Every Correction Helps: Gain-Guided Continual Test-Time Adaptation](http://arxiv.org/abs/2609.36655v1)
- Authors: Zhang et al.; 2026-09-29. Contribution: Proposes gain-guided continual test-time adaptation. Relevance: Addresses evolving test streams and correction reliability in continual adaptation.

#### [HiTS-CL: A Continual Learning Framework for Long-Horizon Temporal Knowledge Graph Extrapolation](http://arxiv.org/abs/2609.36559v1)
- Authors: Liu et al.; 2026-09-29. Contribution: Frames long-horizon temporal knowledge graph extrapolation as continual learning. Relevance: Extends continual learning to temporal knowledge graph reasoning.

## 视觉感知
### Event-Based Vision
#### [SFE-VGGT: Source-Free VGGT Distillation for Event-Based Monocular Depth Estimation](http://arxiv.org/abs/2609.36929v1)
- Authors: Nguyen and Wang; 2026-09-29. Contribution: Distills VGGT geometry priors source-free for event-based monocular depth. Relevance: Direct event-based depth estimation without synchronized RGB-event pairs.

#### [Stealth Is a Relation, Not a Property: How Event Representations Create Blind Spots for Timing Attacks in Event-Based Perception](http://arxiv.org/abs/2609.36386v1)
- Authors: Dipu et al.; 2026-09-28. Contribution: Shows event representations create blind spots for timing attacks. Relevance: Addresses security and robustness in event-based perception.

### 3D Point Cloud Perception
#### [GA-EIRFS: A Geometry-Augmented Repeat-Factor Sampling Method for Long-Tailed LiDAR 3D Object Detection](http://arxiv.org/abs/2609.38116v1)
- Authors: Ahmed et al.; 2026-09-29. Contribution: Introduces geometry-augmented repeat-factor sampling for long-tailed LiDAR 3D detection. Relevance: Directly targets 3D point cloud perception under long-tail LiDAR conditions.

### 3D Point Cloud Perception and Tracking
No new papers today.

## Cross-Topic Signals
- **Token/representation efficiency**: TReVS, Representation Dynamics, Audio Token Attention, and Predictive Geometry all estimate importance or redundancy from attention/representation dynamics, with implications for pruning across multimodal, audio, and transformer models.
- **Continual and test-time adaptation**: ReSCENE, Gain-Guided CTTA, and Credit-Guided TTA-VLN handle distribution shifts and forgetting via replay, gain, or credit signals.
- **Embodied agent self-improvement**: ASENA, Explicit Trajectory Diversity, and Composing Task-specific Agent Harnesses connect LLM post-training and coding agents to reusable skills, harnesses, and persistent experience.
- **Safety and trust**: Unsafe skill trust chains and VLA adversarial attacks highlight security risks in agent ecosystems and physical VLA deployments.
- **Geometry-aware perception**: GA-EIRFS, SFE-VGGT, and Predictive Geometry use geometric priors or hidden-state geometry across LiDAR, event vision, and transformer analysis.

## Priority Reading
#### - [ASENA: Self-evolving Agents for Embodied Navigation](http://arxiv.org/abs/2609.39207v1): Bridges LLM agent engineering, embodied navigation, persistent experience, and self-improvement; useful for understanding test-time skill reuse.
#### - [TReVS: Integrating Textual Relevance and Visual Saliency for Efficient Vision-Language Model Token Pruning](http://arxiv.org/abs/2609.37581v1): Central to multimodal LLM pruning and inference optimization, with a concrete two-stage visual-token pruning method.
#### - [Explicit Trajectory Diversity for RL-Based Post-Training of LLM Agents](http://arxiv.org/abs/2609.38805v1): Core LLM agent engineering paper on diversity in reasoning, tool-use, and interaction trajectories during post-training.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*