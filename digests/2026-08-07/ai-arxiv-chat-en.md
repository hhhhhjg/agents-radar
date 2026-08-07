# Lab Research Topics Radar 2026-08-07

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 20 new + 0 seen in the last 14 days | Generated: 2026-08-07 01:28 UTC

---

# Research Topics Radar — 2026-08-07

## 1. Today's Overview

- **LLM Agent Engineering**: 3 new papers — learnable runtime harnesses (EvoHarness-RL), environment-derived mid-training (State2State), and risk-aware runtime guardrails (DreamGuard) expand the agent scaffolding toolkit.
- **Agent Test-Time Scaling and Self-Improvement**: 2 new papers — collaborative harness evolution (EvolveNet) and self-correction over resampling (Refining Over Resampling) push self-improvement beyond weight updates.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: 3 new papers — in-context post-training with tool use, memory-augmented 3D manipulation, and explicit language memory for long-horizon tasks.
- **Embodied Navigation**: 1 new paper — SpikingNav brings spiking neural policies for robust, efficient navigation.
- **LLM Pruning and Inference Optimization**: 1 new paper — EdgeXpert co-designs edge hardware with MoE and speculative decoding to cut memory access.
- **Multimodal LLM Pruning**: 3 new papers — token-role analysis (Not All Redundant Tokens), hierarchical spatial clustering for 3D VLMs (HiSC), and iterative visual evidence construction (DIVE).
- **Continual Learning**: 3 new papers — geometry-informed PEFT for molecular GNNs, continual-learning PINNs, and a field-transition position paper.
- **Event-Based Vision**: 2 new papers — a stereo event camera kitchen dataset and event-driven reflection removal.
- **3D Point Cloud Perception**: 2 new papers — hierarchical flow matching for generation and dynamic modality orchestration for scene understanding.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## 2. Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [EvoHarness-RL: Learning Self-Evolving Runtime Harness for Long-Horizon LLM Agents](http://arxiv.org/abs/2608.05446v1)
Xuying Ning, Dongqi Fu, Tianxin Wei et al. | 2026-08-05. Contribution: Learns a self-evolving runtime harness with RL to handle state formation from noisy traces and runtime adaptation for long-horizon agents. Relevance: Directly targets the scaffold layer that determines long-horizon agent reliability, a core lab interest.

#### [State2State: Environment-Derived Mid-Training for LLM Agents](http://arxiv.org/abs/2608.04934v1)
Xuanyu Lei, Yiqi Zhu, Chenliang Li et al. | 2026-08-05. Contribution: Proposes mid-training on environment-derived state transitions to reduce reliance on externally specified tasks and handcrafted verifiers. Relevance: Offers a scalable training signal alternative for agent policy learning.

#### [DreamGuard: Efficient Runtime Guardrail for LLM Agents via Risk-Aware World Model](http://arxiv.org/abs/2608.05695v1)
Wenhao Lin, Chenyu Yu, Xingwei Lin et al. | 2026-08-06. Contribution: Introduces a risk-aware world model to check proposed agent actions before execution, preventing irreversible external-state damage. Relevance: Addresses safety at runtime, an essential component of production agent systems.

### Agent Test-Time Scaling and Self-Improvement

#### [EvolveNet: Collaborative Harness Evolution for Agent Self-Improvement](http://arxiv.org/abs/2608.04968v1)
Jun Nie, Yonggang Zhang, Qianshu Cai et al. | 2026-08-05. Contribution: Evolves the agent harness collaboratively across episodes to yield persistent capability improvements without updating model weights. Relevance: Demonstrates self-improvement through the surrounding program rather than the policy, a key test-time scaling path.

#### [Refining Over Resampling: Test-Time Self-Correction for LLM Reasoning](http://arxiv.org/abs/2608.05643v1)
Ahsan Bilal, Muhammad Ahmed Mohsin, Muhammad Umer et al. | 2026-08-06. Contribution: Refines existing rollouts instead of wider sampling to overcome diminishing returns in test-time scaling and improve verifier-based selection. Relevance: Directly addresses efficiency and diversity limits of test-time compute scaling.

### LLM Agent Societies

No new papers today.

## 具身智能

### Vision-Language-Action Models

#### [In-Context VLA: Endowing Vision-Language-Action Models with Language via In-Context Post-Training and Agentic Tool Use](http://arxiv.org/abs/2608.05738v1)
Jiarui Yang, Wen Huang, Jiale Zhang et al. | 2026-08-06. Contribution: Injects explicit reasoning into VLA models through in-context post-training and agentic tool use instead of behavior cloning alone. Relevance: Challenges the dominant BC paradigm for generalist manipulation and opens a new training recipe for VLA.

#### [BridgeVLA++: A Data-Efficient, Generalizable, and Memory-Augmented Vision-Language-Action Framework for 3D Manipulation](http://arxiv.org/abs/2608.05042v1)
Peiyan Li, Yuze Zhu, Yixiang Chen et al. | 2026-08-05. Contribution: Builds a memory-augmented VLA framework on pre-trained VLMs for 3D manipulation with improved data efficiency and generalization under distribution shifts. Relevance: Tackles known VLA weaknesses — data hunger, distribution shift, and missing explicit memory.

#### [Explicit Language Memory for Long-Horizon Planning in Vision-Language-Action Models](http://arxiv.org/abs/2608.04765v1)
Houze Xu, Jizhong Li, Ziyi Ye | 2026-08-05. Contribution: Adds explicit language memory to VLA models to improve cross-task compositional generalization in long-horizon tasks with sparse demonstrations. Relevance: Targets a core VLA limitation that blocks real-world deployment.

### Embodied Navigation

#### [SpikingNav: Robust Embodied Navigation with Spiking Neural Policies](http://arxiv.org/abs/2608.05078v1)
Jiahong Zhang, Sijun Shen, Dehua Wu et al. | 2026-08-05. Contribution: Uses spiking neural policies for embodied navigation, reducing dense computation and improving robustness under visual corruptions. Relevance: Offers a bio-inspired, efficient alternative to ANN-based navigation policies.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [EdgeXpert: An Edge Device for Memory-Efficient LLM Inference with Mixture-of-Experts and Speculative Decoding](http://arxiv.org/abs/2608.05303v1)
Sangwoo Ha, Hyunwoo Seo, Yurim Jo et al. | 2026-08-05. Contribution: Designs edge hardware that combines MoE and speculative decoding to reduce external memory access in FFN layers. Relevance: Hardware-software co-design directly attacks the dominant on-device LLM inference bottleneck.

### Multimodal LLM Pruning

#### [Not All Redundant Tokens Are Alike: Analyzing Visual Token Pruning through Token Roles](http://arxiv.org/abs/2608.04483v1)
Hyeonyu Kim, Sehwan Lim, Youngwon Choi et al. | 2026-08-05. Contribution: Analyzes which visual token roles are pruned by existing methods, revealing how pruning decisions relate to token semantics. Relevance: Provides role-based insight to guide more principled visual pruning in VLMs.

#### [HiSC: Hierarchical Spatial Clustering Token Compression for Efficient 3D Scene Understanding](http://arxiv.org/abs/2608.04610v1)
Jiuhe Qu, Yingping Liang, Ying Fu | 2026-08-05. Contribution: Compresses redundant 3D VLM tokens via hierarchical spatial clustering to cut computation in multi-view scene understanding. Relevance: Extends token-compression benefits from 2D to 3D vision-language models.

#### [DIVE: Dynamic Iterative Visual Evidence Construction for Efficient Vision-Language Models](http://arxiv.org/abs/2608.04496v1)
Chen Zhong, Xiao An, Zijie Wang et al. | 2026-08-05. Contribution: Builds visual evidence iteratively and dynamically rather than pruning low-scoring tokens in a single pass. Relevance: Proposes an alternative, more adaptive paradigm for VLM visual token efficiency.

### Continual Learning

#### [Geometry-Informed Parameter-Efficient Fine-Tuning of Pre-trained Molecular GNNs for Blood-Brain Barrier Permeability Prediction](http://arxiv.org/abs/2608.04257v1)
Marco Vieto Vega, Long D. Nguyen, Binh P. Nguyen | 2026-08-04. Contribution: Applies geometry-informed PEFT to pre-trained molecular GNNs for BBB permeability prediction. Relevance: Shows parameter-efficient adaptation of pre-trained models in a domain with scarce labeled data.

#### [Continual-Learning Physics-Informed Neural Networks for Parameterized Partial Differential Equations](http://arxiv.org/abs/2608.04778v1)
Xujia Chen, Xinyue Hu, Letian Chen et al. | 2026-08-05. Contribution: Integrates continual learning into parameterized PINNs so a single model can solve multiple PDE parameter regimes without forgetting. Relevance: Bridges CL methods with scientific ML and multi-task PDE solving.

#### [Continual Learning in Transition](http://arxiv.org/abs/2608.06216v1)
Zhiyan Hou, Dan Zhang, Tao Feng et al. | 2026-08-06. Contribution: Surveys how emerging paradigms are expanding CL beyond parameter-centric mechanisms such as training strategies and weight adaptation. Relevance: Frames where the CL field is heading, useful for positioning the lab's CL agenda.

## 视觉感知

### Event-Based Vision

#### [Cooking beyond Frames: A Stereo Event Camera Dataset in the Kitchen](http://arxiv.org/abs/2608.04865v1)
Chengming Feng, Hesam Araghi, Liming Zheng et al. | 2026-08-05. Contribution: Introduces a stereo event camera dataset in kitchen settings for human-centric neuromorphic vision research. Relevance: Provides a new benchmark for event-based human activity understanding beyond automotive and drone scenes.

#### [EvReflection: Event-Driven Micro-Dynamics for Reflection Removal](http://arxiv.org/abs/2608.06184v1)
Jiaxiao Wang, Dachun Kai, Huyue Zhu et al. | 2026-08-06. Contribution: Leverages event camera micro-dynamics to disambiguate reflection and transmission layers that static single frames cannot separate. Relevance: Demonstrates a novel event-based solution to a classical, ill-posed computer vision problem.

### 3D Point Cloud Perception

#### [Hierarchical Flow Matching for 3D Point Cloud Generation](http://arxiv.org/abs/2608.05557v1)
Linhao Wang, Qichang Zhang, Ye Su et al. | 2026-08-06. Contribution: Proposes hierarchical flow matching to capture global shape topology and local details without costly ODE solving or hundreds of diffusion steps. Relevance: Advances efficient 3D point cloud generation with better cost-quality trade-offs.

#### [SmartMage: Dynamic Modality Orchestration for 3D Scene Understanding](http://arxiv.org/abs/2608.05137v1)
Yue Zhang, Yingzhao Jian, Yunqiu Xu et al. | 2026-08-05. Contribution: Dynamically orchestrates visual and geometric modalities per query for 3D scene understanding with multimodal LLMs. Relevance: Makes 3D scene reasoning more adaptive to query-dependent modality relevance.

### 3D Point Cloud Perception and Tracking

No new papers today.

## 3. Cross-Topic Signals

- **The "harness" is becoming a first-class learnable artifact**: EvoHarness-RL, EvolveNet, and DreamGuard all treat the surrounding execution scaffold — context construction, tool invocation, verification, safety checks — as something to learn or evolve, not hand-code.
- **Memory augmentation is converging across agent settings**: BridgeVLA++ and Explicit Language Memory add memory to VLA policies, while EvoHarness-RL reuses experience across interactions; memory is the shared answer to long-horizon and compositional generalization.
- **Token/evidence redundancy reduction is moving from static pruning to iterative and spatial-aware methods**: DIVE, HiSC, and Not All Redundant Tokens all reject single-pass importance scoring in favor of role-aware, hierarchical, or iterative construction, applicable from 2D VLMs to 3D scene understanding.
- **Efficiency motifs recur across hardware and algorithm layers**: EdgeXpert (speculative decoding, MoE), DIVE, and HiSC are all attacking the same inference-cost problem from device, token, and scene levels, suggesting an opportunity for combined co-design.
- **Event-based sensing is emerging as a robustness and disambiguation signal**: EvReflection uses event micro-dynamics to solve static-image ambiguity, and SpikingNav uses spiking policies for visual robustness — both point to non-frame or bio-inspired sensing as a complement to standard RGB pipelines.

## 4. Priority Reading

1. **In-Context VLA** (http://arxiv.org/abs/2608.05738v1) — Directly challenges the behavior-cloning assumption underlying most VLA models and proposes a post-training plus tool-use recipe that could redefine the lab's VLA research direction.
2. **EvoHarness-RL** (http://arxiv.org/abs/2608.05446v1) — A concrete RL formulation for evolving the agent's runtime harness; highly relevant to both the lab's LLM Agent Engineering and long-horizon agent priorities.
#### **Continual Learning in Transition** (http://arxiv.org/abs/2608.06216v1) — A compact field-mapping paper that clarifies how CL is expanding beyond parameter-centric methods, useful for aligning the lab's CL portfolio with emerging paradigms.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*