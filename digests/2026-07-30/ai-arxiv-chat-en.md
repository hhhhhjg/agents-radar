# Lab Research Topics Radar 2026-07-30

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 16 new + 0 seen in the last 14 days | Generated: 2026-07-29 22:56 UTC

---

## Today's Overview

- **LLM Agent Engineering**: Three papers advance the control-theoretic and security perspectives of frozen LLM agents with harness-based designs.
- **Agent Test-Time Scaling and Self-Improvement**: Three papers explore self-play for driving, GUI task evaluation as reward signal, and visual prompt engineering for video models.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: Three papers propose efficiency improvements (co-distillation, 3D object-centric alignment, and high-fidelity data-only policy learning) for robot manipulation.
- **Embodied Navigation**: One paper introduces image-conditioned query enrichment for long-tail object goal navigation.
- **LLM Pruning and Inference Optimization**: Two papers address inference cost reduction via sparse cross-modal routing and linguistic-rule-based prompt compression.
- **Multimodal LLM Pruning**: One paper on sparse cross-modal routing (same as above) also falls under this topic.
- **Continual Learning**: Three papers cover developmental gradient-free learning, calibrated partial resets for RL, and a controlled study of LoRA/quantization trade-offs.
- **Event-Based Vision**: No new papers today.
- **3D Point Cloud Perception**: No new papers today.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering
#### [Context Assembly as the Controlled Variable: A Control-Theoretic View of Harness Policies for Frozen LLM Agents](http://arxiv.org/abs/2607.25408v1)
*D. Paul, 2026-07-28.* Proposes that context assembly acts as the controlled variable in a control-theoretic model of frozen LLM agents, linking harness design to stability guarantees.  
*Relevance:* Directly addresses the engineering of harness policies for frozen LLM agents, a core interest of the lab.

#### [A Control System, a Dataset, and a Recipe for Making Frozen LLM Agents Learn a Domain](http://arxiv.org/abs/2607.25415v1)
*D. Paul, 2026-07-28.* Introduces a control system, dataset, and recipe that enables frozen LLM agents to acquire domain-specific knowledge through harness tuning without modifying the model.  
*Relevance:* Provides a practical methodology for domain adaptation of frozen LLM agents, aligning with the lab's focus on agent engineering.

#### [Hybrid Analysis for Secure MCP Tool Use in LLM Agents](http://arxiv.org/abs/2607.25297v1)
*P. He, Y. Xie, Y. Li et al., 2026-07-28.* Combines static and dynamic analysis to detect and mitigate security vulnerabilities in MCP-based tool use by LLM agents.  
*Relevance:* Addresses a critical security concern in LLM agent engineering, relevant to production deployment.

### Agent Test-Time Scaling and Self-Improvement
#### [Pictura: Perspective-View Self-Play at Scale for Driving](http://arxiv.org/abs/2607.26005v1)
*Y. Yin, E. Ramzi, M. Lafon et al., 2026-07-28.* Leverages self-play in simulation with perspective-view images (not privileged vectorized data) to learn robust driving policies, bridging the perception-representation gap.  
*Relevance:* Exemplifies test-time scaling via self-improvement in a realistic driving scenario, directly relevant to agent self-play.

#### [Interactive Reward Agent: GUI Task Evaluation via Environment-State Verification](http://arxiv.org/abs/2607.25904v1)
*C. Shi, Y. Wu, Y. Liu et al., 2026-07-28.* Proposes a reward agent that evaluates GUI task completion through environment-state verification, providing feedback for test-time scaling and post-training.  
*Relevance:* Offers a concrete method for using evaluation as reward signal, a key component of test-time scaling for GUI agents.

#### [Visual prompt engineering for video models](http://arxiv.org/abs/2607.25537v1)
*R. Geirhos, Y. Li, T. Wiedemer et al., 2026-07-28.* Investigates prompt engineering techniques for video foundation models, showing that visual prompts can improve performance on visual reasoning tasks.  
*Relevance:* Extends test-time scaling concepts to video models, relevant for multimodal agent self-improvement.

### LLM Agent Societies
No new papers today.

## 具身智能

### Vision-Language-Action Models
#### [CoTinyVLA: Chain-of-Thought Distillation for a Sub-Billion-Parameter Vision-Language-Action Model](http://arxiv.org/abs/2607.25487v1)
*M. Lee, C. Kim, C. Gu et al., 2026-07-28.* Distills a 0.9B-parameter VLA model from larger backbones using chain-of-thought reasoning, achieving competitive performance on LIBERO-Plus with lower memory footprint.  
*Relevance:* Directly addresses model efficiency for VLA, a core interest in embodied AI.

#### [SAM3D-Guided Object-Centric Representation Alignment for Vision-Language-Action Models](http://arxiv.org/abs/2607.25912v1)
*Z. Liu, S. Jie, X. Sun et al., 2026-07-28.* Aligns 2D visual-language features with 3D object-centric representations using SAM3D guidance, improving manipulation under occlusion and pose variation.  
*Relevance:* Enhances VLA models' 3D understanding, critical for robust robot manipulation.

#### [HiFi-UMI: Learning Deployable Manipulation Policies from High-Fidelity UMI Data Alone](http://arxiv.org/abs/2607.25895v1)
*Simple AI, Y. Wei et al., 2026-07-28.* Shows that high-fidelity UMI (robot-free) data alone can train deployable manipulation policies without additional real-robot fine-tuning.  
*Relevance:* Offers a scalable data collection paradigm for VLA policy learning, potentially reducing deployment barriers.

### Embodied Navigation
#### [IMPRINT: Image-Conditioned Query Enrichment for Long-Tail Object Goal Navigation](http://arxiv.org/abs/2607.25106v1)
*J. R. Akkara, F. Ziliotto, L. Serafini et al., 2026-07-27.* Enriches text queries with image examples to improve zero-shot object goal navigation for long-tail objects using pre-trained vision-language models.  
*Relevance:* Directly advances zero-shot object navigation, a key embodied navigation task.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization
#### [Salient Knowledge Pathways: Sparse Cross-Modal Routing for Efficient Knowledge-Intensive Multimodal Question Answering](http://arxiv.org/abs/2607.25422v1)
*N. I. S. Mohammad, U. Bayazıt, 2026-07-28.* Introduces sparse cross-modal routing that selectively activates only relevant visual tokens and retrieval passages per query, reducing multimodal QA inference cost.  
*Relevance:* Addresses inference optimization by sparsifying expensive cross-modal fusion, directly relevant to pruning and efficient inference.

#### [Every Time I Hire a Linguist, Inference Costs Go Down: On Linguistic Rules as Effective Prompt Compressors](http://arxiv.org/abs/2607.25335v1)
*J. Ma, Z. Feng, E. Chersoni et al., 2026-07-28.* Proposes rule-based prompt compression using linguistic principles, achieving cost reduction without LM forward passes for token selection.  
*Relevance:* Offers a lightweight alternative to learned prompt compressors, relevant to inference optimization.

### Multimodal LLM Pruning
#### [Salient Knowledge Pathways: Sparse Cross-Modal Routing for Efficient Knowledge-Intensive Multimodal Question Answering](http://arxiv.org/abs/2607.25422v1)
*N. I. S. Mohammad, U. Bayazıt, 2026-07-28.* (Same paper as above) Sparse routing effectively prunes unnecessary cross-modal interactions, reducing the effective model size during inference.  
*Relevance:* Directly contributes to multimodal LLM pruning by selectively activating only relevant components.

### Continual Learning
#### [Multi-Scale Structural Features for Continual, Comprehensible Visual Recognition in a Developmental Learning Framework](http://arxiv.org/abs/2607.25531v1)
*Z. D. Erden, 2026-07-28.* Proposes a gradient-free, developmental learning framework using discrete topological models to enable continual visual recognition with interpretable internal structures.  
*Relevance:* Addresses continual learning without catastrophic forgetting, a core challenge in the lab's interest.

#### [Calibrated Partial Resets: Preventing Policy Collapse in Continual Reinforcement Learning](http://arxiv.org/abs/2607.24996v1)
*L. McCutcheon, E. Chatzaroulas, S. Fallah, 2026-07-27.* Introduces calibrated partial neuron resets to restore plasticity and prevent policy collapse in continual RL and supervised learning.  
*Relevance:* Provides a practical technique to maintain learning capacity over time, directly relevant to continual RL.

#### [How Small Can You Go? A Controlled Study of LoRA Rank, Target Modules, and Quantization Trade-offs for Text-to-SQL on a 60M-Parameter Model](http://arxiv.org/abs/2607.25583v1)
*M. S. Rathor, A. Azzam, 2026-07-28.* Systematically studies LoRA rank, target modules, and quantization interactions on a small 60M-parameter model, revealing design insights for parameter-efficient continual fine-tuning.  
*Relevance:* Though focused on fine-tuning, the findings on LoRA/quantization trade-offs are relevant to continual learning under resource constraints.

## 视觉感知

### Event-Based Vision
No new papers today.

### 3D Point Cloud Perception
No new papers today.

### 3D Point Cloud Perception and Tracking
No new papers today.

## Cross-Topic Signals

1. **Control theory meets agent engineering**: Two papers (Paul, 2026-07-28) explicitly frame LLM agent harness design as a control problem, bridging the gap between LLM Agent Engineering and established control-theoretic methods—a potentially unifying framework for test-time scaling and self-improvement.
#### **Prompt engineering for test-time scaling**: Visual prompt engineering for video models (Geirhos et al.) and rule-based prompt compression for inference cost (Ma et al.) both treat prompt design as an optimization lever, linking Agent Test-Time Scaling with LLM Pruning and Inference Optimization.
3. **Self-play and evaluation as reward signals**: Pictura (driving self-play) and Interactive Reward Agent (GUI task evaluation) both generate reward signals from environment interaction, connecting test-time scaling (self-improvement) with the broader theme of agent learning from interaction—relevant also to continual RL.
4. **3D object-centric representations in embodied AI**: SAM3D-guided alignment for VLA models (Liu et al.) and IMPRINT's image-conditioned queries for navigation both emphasize moving beyond 2D vision-language features toward 3D understanding, a cross-cutting need across Vision-Language-Action Models and Embodied Navigation.
5. **Sparse routing and pruning across modalities**: The sparse cross-modal routing approach (Mohammad & Bayazıt) simultaneously addresses pruning/inference optimization for both LLMs and multimodal models, showing a transferable method that could be applied to VLA or navigation contexts.

## Priority Reading

1. **Context Assembly as the Controlled Variable (Paul)** – Offers a novel control-theoretic view that could underpin future LLM agent harness design; highly relevant to the lab's core agent engineering focus.
#### **Pictura: Perspective-View Self-Play at Scale for Driving (Yin et al.)** – Demonstrates a scalable self-play pipeline using only perspective images, a concrete advance in agent test-time scaling with direct applicability to embodied driving.
3. **SAM3D-Guided Object-Centric Representation Alignment for VLA Models (Liu et al.)** – Addresses a critical gap in VLA models' 3D understanding, with clear implications for robust robot manipulation—aligns with the lab's embodied intelligence interests.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*