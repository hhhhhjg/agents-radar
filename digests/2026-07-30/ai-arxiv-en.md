# Lab Research Topics Radar 2026-07-30

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 29 new + 9 seen in the last 14 days | Generated: 2026-07-29 22:56 UTC

---

## Today's Overview

- **LLM Agent 与多智能体 / LLM Agent Engineering**: 10 new papers today cover control-theoretic harnesses, tool retrieval via hyperedge prediction, hierarchical skill graphs, secure MCP tool use, security distribution, context compaction, affect propagation in multi-agent crowds, and bias in long-running loops.
- **LLM Agent 与多智能体 / Agent Test-Time Scaling and Self-Improvement**: 3 new papers: driving self-play at scale, GUI task evaluation for reward signals, and visual prompt engineering for video models.
- **LLM Agent 与多智能体 / LLM Agent Societies**: No new papers today.
- **具身智能 / Vision-Language-Action Models**: 4 new papers: CoTinyVLA (sub‑B parameter VLA), SAM3D-guided object-centric alignment, HiFi-UMI (deployable policies from UMI data), and causality-aware modality adaptation. 5 repeated papers also appear.
- **具身智能 / Embodied Navigation**: 1 new paper: IMPRINT (image-conditioned queries for long‑tail object goal navigation). 2 repeated papers.
- **模型压缩与持续学习 / LLM Pruning and Inference Optimization**: 1 new paper: linguistic‑rule based prompt compression.
- **模型压缩与持续学习 / Multimodal LLM Pruning**: 1 new paper: sparse cross-modal routing for multimodal QA.
- **模型压缩与持续学习 / Continual Learning**: 2 new papers directly relevant: developmental learning framework and calibrated partial resets for continual RL. 1 repeated paper.
- **视觉感知 / Event-Based Vision**: No new papers today.
- **视觉感知 / 3D Point Cloud Perception**: No new papers today; 1 repeated paper (PointCHR).
- **视觉感知 / 3D Point Cloud Perception and Tracking**: No new papers today.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [Context Assembly as the Controlled Variable: A Control-Theoretic View of Harness Policies for Frozen LLM Agents](http://arxiv.org/abs/2607.25408v1)
Debjyoti Paul, 2026-07-28
Proposes a control‑theoretic framework where context assembly is treated as the controlled variable for frozen LLM agent harnesses.
Directly addresses how to structure agent harnesses, a core engineering concern.

#### [A Control System, a Dataset, and a Recipe for Making Frozen LLM Agents Learn a Domain](http://arxiv.org/abs/2607.25415v1)
Debjyoti Paul, 2026-07-28
Introduces a control system, dataset, and recipe to enable frozen LLM agents to acquire domain knowledge through harness design.
Provides a practical method for domain adaptation without model fine‑tuning, relevant to agent engineering.

#### [Hybrid Analysis for Secure MCP Tool Use in LLM Agents](http://arxiv.org/abs/2607.25297v1)
Ping He et al., 2026-07-28
Presents a hybrid static‑dynamic analysis for securing Model Context Protocol (MCP) tool calls in LLM agents.
Addresses a critical security aspect of LLM agent tool use.

#### [Distributing Security Controls Through Harness Engineering](http://arxiv.org/abs/2607.25890v1)
William Robert Gore, 2026-07-28
Proposes a harness‑engineering approach to systematically distribute security controls for AI coding agents.
Focuses on security as part of agent systematic design, relevant to engineering robust agents.

#### [Tools Are Not Islands: Set-Level Tool Retrieval for LLM Agents via Query-Conditioned Hyperedge Prediction](http://arxiv.org/abs/2607.25718v1)
Xinyi Hong et al., 2026-07-28
Introduces set‑level tool retrieval using query‑conditioned hyperedge prediction for LLM agents.
Improves tool selection, a key component in agent pipelines.

#### [HiSkill: Empowering LLM Agents with Hierarchical Skill Graphs](http://arxiv.org/abs/2607.25853v1)
Yu Hao et al., 2026-07-28
Proposes constructing hierarchical skill graphs from trajectories to enable reusable skills for LLM agents.
Enhances agent skill reuse, directly relevant to engineering long‑horizon agents.

#### [CAST: Game Solvers as Turn-Level Teachers for LLM Agents](http://arxiv.org/abs/2607.25308v1)
Yu Wang et al., 2026-07-28
Uses game solvers to provide turn‑level process rewards for training LLM agents in long‑horizon games.
Provides a dense reward signal for agent training, relevant to agent engineering.

#### [How Affect Propagates among LLM Agents: Emergent Emotional Contagion in Crowd Simulation](http://arxiv.org/abs/2607.25140v1)
Funda Durupinar, 2026-07-27
Studies emotional contagion in multi‑agent LLM crowd simulations through perception and appraisal channels.
Demonstrates emergent social dynamics in multi‑agent systems, relevant for agent societies.

#### [When Do Agent Loops Mistake Stagnation for Progress? Self-Evaluation Bias and Externally Grounded Verification in Long-Running Autonomous LLM Agent Loops](http://arxiv.org/abs/2607.25152v1)
Hyundoo Park & Byungho Choi, 2026-07-27
Identifies self‑evaluation bias in long‑running agents and proposes externally grounded verification to prevent stagnation.
Addresses a critical failure mode in autonomous agent loops.

#### [Addressable Recall Compaction for Long Context-Window Control in AI Agents](http://arxiv.org/abs/2607.25066v1)
Thang Dang et al., 2026-07-27
Introduces a recall compaction method that preserves addressability for long‑horizon LLM agent contexts.
Improves context management, essential for long‑running agent loops.

### Agent Test-Time Scaling and Self-Improvement

#### [Pictura: Perspective-View Self-Play at Scale for Driving](http://arxiv.org/abs/2607.26005v1)
Yuan Yin et al., 2026-07-28
Scales self‑play to perspective‑view observations for driving policies, bridging the representation gap with vectorized privileged data.
Demonstrates test‑time scaling in a driving domain via self‑play improvement.

#### [Interactive Reward Agent: GUI Task Evaluation via Environment-State Verification](http://arxiv.org/abs/2607.25904v1)
Chenrui Shi et al., 2026-07-28
Proposes an interactive reward agent that verifies environment state to evaluate GUI agent task completion for test‑time scaling.
Provides a reward signal directly useful for test‑time scaling and post‑training.

#### [Visual prompt engineering for video models](http://arxiv.org/abs/2607.25537v1)
Robert Geirhos et al., 2026-07-28
Explores visual prompt engineering for video foundation models, analogous to text prompt engineering.
Applicable to improving video model outputs at test time without model updates.

## 具身智能

### Vision-Language-Action Models

#### [CoTinyVLA: Chain-of-Thought Distillation for a Sub-Billion-Parameter Vision-Language-Action Model](http://arxiv.org/abs/2607.25487v1)
Minhyeok Lee et al., 2026-07-28
Distills a 0.9B parameter VLA model using chain‑of‑thought reasoning, achieving strong performance on LIBERO-Plus.
Relevance to building efficient VLA models for embedded robotics.

#### [SAM3D-Guided Object-Centric Representation Alignment for Vision-Language-Action Models](http://arxiv.org/abs/2607.25912v1)
Zonghe Liu et al., 2026-07-28
Aligns VLA representations with 3D object‑centric features using SAM3D to improve generalization under occlusion and pose variation.
Enhances robustness of VLA models through better 3D understanding.

#### [HiFi-UMI: Learning Deployable Manipulation Policies from High-Fidelity UMI Data Alone](http://arxiv.org/abs/2607.25895v1)
Simple AI et al., 2026-07-28
Learns deployable manipulation policies directly from high‑fidelity robot‑free UMI data, bypassing real‑robot telemetry.
Directly relevant to scaling data for VLA policy learning.

#### [A Causality-aware Infer-diagnose-refine Framework for Test-time Modality Adaptation in VLA Models](http://arxiv.org/abs/2607.25516v1)
Haoyu Zhang et al., 2026-07-28
Adapts VLA models at test time by inferring causal modality importance and refining fusion.
Addresses dynamic modality fusion in VLA, improving test‑time performance.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] **τ: Learning Touch-Augmented Vision-Language-Action Models from Future Visual Supervision** (http://arxiv.org/abs/2607.24485v1)
Ning Cheng et al., 2026-07-27
Integrates tactile representation into VLA models using future visual supervision.
Relevant for multi‑modal VLA with touch.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] **Data Pyramid for Embodied Manipulation** (http://arxiv.org/abs/2607.24744v1)
Yifan Ye et al., 2026-07-27
Proposes a data pyramid framework combining multiple data sources for embodied manipulation.
Relevant for data composition in VLA training.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] **A Motion-Aware Vector Quantization Framework with Centroid Reuse for Efficient VLA Inference** (http://arxiv.org/abs/2607.24148v1)
Zhuoran Song et al., 2026-07-27
Compresses VLA models via motion‑aware vector quantization and centroid reuse to reduce latency.
Addresses inference efficiency of VLA models.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] **DeVA: Decoupled Video-Action Model with physical guidance for robot policy learning** (http://arxiv.org/abs/2607.24159v1)
Mengqi Zhang et al., 2026-07-27
Decouples video and action streams with physical guidance to improve generalization.
Relevant for learning video‑conditioned VLA policies.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] **FutureRTC: Real-Time Robot Execution with Anticipatory-Conditioned Action Chunking** (http://arxiv.org/abs/2607.24008v1)
Hai Jiang et al., 2026-07-27
Addresses prediction‑execution misalignment in real‑time VLA via anticipatory action chunking.
Directly relevant to deploying VLA in real‑time settings.

### Embodied Navigation

#### [IMPRINT: Image-Conditioned Query Enrichment for Long-Tail Object Goal Navigation](http://arxiv.org/abs/2607.25106v1)
Jelin Raphael Akkara et al., 2026-07-27
Enriches text queries with image exemplars to improve zero‑shot object goal navigation for long‑tail objects.
Directly advances object goal navigation using VLMs.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] **Not Forgotten: Implementation and Evaluation of a Personalized Episodic Memory for the Humanoid Robot Head Kim** (http://arxiv.org/abs/2607.24190v1)
Steve Aschenbrenner et al., 2026-07-27
Implements episodic memory on a humanoid robot to retain person‑specific information across sessions.
Relevant for embodied navigation in social contexts.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] **DICA: Dual-Indicator Guided Contrastive Alignment in Multimodal Large Language Models** (http://arxiv.org/abs/2607.23944v1)
Hao Yang et al., 2026-07-27
Aligns visual and language features with dual indicators for coarse‑to‑fine reasoning.
Can be applied to navigation tasks requiring fine‑grained visual grounding.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [Every Time I Hire a Linguist, Inference Costs Go Down: On Linguistic Rules as Effective Prompt Compressors](http://arxiv.org/abs/2607.25335v1)
Jianfei Ma et al., 2026-07-28
Shows that rule‑based linguistic compression reduces inference cost without training.
Provides a lightweight, zero‑cost method for prompt compression.

### Multimodal LLM Pruning

#### [Salient Knowledge Pathways: Sparse Cross-Modal Routing for Efficient Knowledge-Intensive Multimodal Question Answering](http://arxiv.org/abs/2607.25422v1)
Noor Islam S. Mohammad & Uluğ Bayazıt, 2026-07-28
Introduces sparse cross‑modal routing to reduce computation in multimodal QA by selecting only relevant visual and retrieval tokens.
Directly targets pruning of multimodal LLM inference.

### Continual Learning

#### [Multi-Scale Structural Features for Continual, Comprehensible Visual Recognition in a Developmental Learning Framework](http://arxiv.org/abs/2607.25531v1)
Zeki Doruk Erden, 2026-07-28
Proposes a gradient‑free developmental framework that learns discrete topological models for continual visual recognition.
Addresses catastrophic forgetting in visual recognition, core to continual learning.

#### [Calibrated Partial Resets: Preventing Policy Collapse in Continual Reinforcement Learning](http://arxiv.org/abs/2607.24996v1)
Luc McCutcheon et al., 2026-07-27
Introduces calibrated partial neuron resets to maintain plasticity and prevent collapse in continual RL.
Directly relevant to continual learning in RL settings.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] **The Physics of Multi-Turn Long-Horizon Planning: From Pre-training to Post-training via Single- and Multi-Teacher On-Policy Agentic Distillation** (http://arxiv.org/abs/2607.24720v1)
Tianyi Men et al., 2026-07-27
Distills planning abilities from teacher agents into foundation models for multi‑turn tasks.
Can be interpreted as a continual learning pipeline for agent planning.

## 视觉感知

### 3D Point Cloud Perception

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] **PointCHR: Point Cloud Analysis via Curvature-Aware Hyperbolic Rectification** (http://arxiv.org/abs/2607.24052v1)
Xinxing Yu et al., 2026-07-27
Improves point cloud analysis by leveraging hyperbolic geometry for high‑curvature regions.
Relevant to 3D perception of fine‑grained geometric details.

## Cross-Topic Signals

- **Control theory meets agent engineering**: Two papers by Debjyoti Paul (3,4) apply control‑theoretic frameworks to harness design, a theme that appears in both LLM Agent Engineering and could inform test‑time scaling (e.g., stability guarantees in long‑running loops).
- **Test‑time adaptation and verification appear across topics**: The “Interactive Reward Agent” (24) for GUI evaluation connects Agent Test‑Time Scaling with the self‑evaluation bias paper (12) under LLM Agent Engineering, both addressing how agents judge their own progress.
- **Sparse routing and compression linking inference optimization and VLA**: Paper 18 (sparse cross‑modal routing) and Paper 19 (linguistic prompt compression) both aim to reduce inference cost, while the VLA motion‑aware quantization paper (33) pursues similar efficiency goals in a different modality.
- **Continual learning techniques for agent training**: The calibrated partial resets (15) and developmental framework (14) share objectives with the on‑policy agentic distillation (38) – all address maintaining or transferring knowledge over time, relevant to both continual learning and agent self‑improvement.

## Priority Reading

1. **“When Do Agent Loops Mistake Stagnation for Progress?”** (Park & Choi, paper 12). Reason: Directly identifies a critical failure mode in long‑running autonomous agents (self‑evaluation bias) and proposes externally grounded verification – highly actionable for debugging agent loops.
#### **“CoTinyVLA: Chain-of-Thought Distillation for a Sub-Billion-Parameter Vision-Language-Action Model”** (Lee et al., paper 1). Reason: Achieves strong VLA performance with a very small 0.9B model, which is immediately relevant for embedded robotic platforms where compute is constrained.
#### **“Tools Are Not Islands: Set-Level Tool Retrieval for LLM Agents via Query-Conditioned Hyperedge Prediction”** (Hong et al., paper 7). Reason: Improves tool selection from sets rather than individually, which is a key engineering challenge in agent toolkits and could yield significant performance gains.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*