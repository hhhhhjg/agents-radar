# Lab Research Topics Radar 2026-10-07

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 34 new + 1 seen in the last 14 days | Generated: 2026-10-07 01:10 UTC

---

## Today's Overview
- **LLM Agent 与多智能体 / LLM Agent Engineering**: 0 new, 0 seen. No new papers today.
- **LLM Agent 与多智能体 / Agent Test-Time Scaling and Self-Improvement**: 8 new, 0 seen. Progress on calibrated self-verification, verifier-guided VLA test-time scaling, test-time selection failure analysis, agent self-improvement benchmarks, reasoning scaling prediction, game-theoretic decoding, self-play safety, and quantization for looped test-time computation.
- **LLM Agent 与多智能体 / LLM Agent Societies**: 0 new, 0 seen. No new papers today.
- **具身智能 / Vision-Language-Action Models**: 10 new, 0 seen. New work on stage-aware action generation, visual token pruning, disruption adaptation, affordance wiring, long-horizon control, safety evaluation, one-step action generation, sim-to-real manipulation, simulation-prior distillation, and humanoid manipulation benchmarking.
- **具身智能 / Embodied Navigation**: 5 new, 0 seen. New memory-visible object navigation, sim-to-real continuous VLN, spatial/trajectory guidance for VLN, long-horizon spatial memory for video generation, and open-vocabulary scene graphs for robot perception.
- **模型压缩与持续学习 / LLM Pruning and Inference Optimization**: 1 new, 0 seen. Elastic visual representations for MLLMs reduce dense fixed-size patch token costs.
- **模型压缩与持续学习 / Multimodal LLM Pruning**: 2 new, 1 seen. Action-consistent visual token pruning for VLA, adaptive multimodal acquisition/fusion, and a repeated stage-aware VLA pruning paper.
- **模型压缩与持续学习 / Continual Learning**: 10 new, 0 seen. PEFT/LoRA variants, compacted context optimization, lifelong path-loss prediction, incremental accent classification, data selection, and gradient admission for small-model finetuning.
- **视觉感知 / Event-Based Vision**: 0 new, 0 seen. No new papers today.
- **视觉感知 / 3D Point Cloud Perception**: 1 new, 0 seen. OpenSplatGraph converts dense semantic maps into structured scene graphs for open-vocabulary robot perception.
- **视觉感知 / 3D Point Cloud Perception and Tracking**: 0 new, 0 seen. No new papers today.

## LLM Agent 与多智能体
### Agent Test-Time Scaling and Self-Improvement
#### [CLIFT: Conformal Self-Verification for Web Agent Training and Test-Time Scaling](http://arxiv.org/abs/2610.06829v1)
Zhang, Dai, Prabhu et al. | 2026-10-05  
Contribution: Proposes conformal self-verification to give web agents calibrated step-level signals for RL training and test-time scaling.  
Relevance: Directly addresses self-verification and test-time scaling for LLM agents.

#### [DiVeR: Decision-Critical Verifier Learning for VLA Test-Time Scaling](http://arxiv.org/abs/2610.04933v1)
Park, Kim, Tian et al. | 2026-10-04  
Contribution: Learns decision-critical verifiers to select among sampled VLA action candidates at test time.  
Relevance: Bridges VLA action generation and verifier-guided test-time scaling.

#### [ServeLearnBench: How Well Can Agents Self-Improve from Serving Experience?](http://arxiv.org/abs/2610.07792v1)
Zheng, Di, Sadhukhan et al. | 2026-10-06  
Contribution: Benchmarks whether agents can self-improve from serving experience and implicit environment knowledge.  
Relevance: Measures self-improvement and continual adaptation of deployed agents.

#### [Verification Trap: Understanding Test-Time Selection Failures under False Premises in Code Generation](http://arxiv.org/abs/2610.05170v1)
He, Wang, Meng et al. | 2026-10-04  
Contribution: Analyzes test-time selection failures when verifiers operate under false premises in code generation.  
Relevance: Exposes limits of verifier-based test-time scaling for agentic code tasks.

#### [When Does Longer Reasoning Help? Predicting Mathematical Reasoning Through Discovery and Execution](http://arxiv.org/abs/2610.05322v1)
Hasan, Jain, Samin | 2026-10-04  
Contribution: Introduces a Discovery–Execution framework to predict mathematical reasoning scaling curves from short-budget runs.  
Relevance: Provides predictive tools for test-time compute allocation in reasoning tasks.

#### [Reflections and Fragments: Securing LLMs Against Sequential Mosaic Attacks](http://arxiv.org/abs/2610.05346v1)
La Malfa, Cohen, La Malfa et al. | 2026-10-04  
Contribution: Uses self-play red-teaming to secure LLMs against sequential mosaic attacks.  
Relevance: Connects self-play/self-improvement with safety in multi-turn agent settings.

#### [Nash Equilibrium Text: A Game-Theoretic Decoding Framework for Text Generation](http://arxiv.org/abs/2610.05817v1)
Jafari, Adibi, Ghavamzadeh et al. | 2026-10-05  
Contribution: Formulates text revision as a game-theoretic decoding problem with token positions as players.  
Relevance: Offers a game-theoretic view on iterative self-improvement during generation.

#### [Loopy: Low-Bit Quantization Framework for Looped Language Models](http://arxiv.org/abs/2610.05265v1)
Li, Zhang, Chen et al. | 2026-10-04  
Contribution: Develops low-bit post-training quantization for looped language models that reuse a shared recurrent core.  
Relevance: Supports efficient test-time computation in looped models by reducing memory and inference cost.

## 具身智能
### Vision-Language-Action Models
#### [StairVLA: Stage-Aware Hierarchical Action Generation for Vision-Language-Action Models](http://arxiv.org/abs/2610.07756v1)
Yuan, Qi, Pu et al. | 2026-10-06  
Contribution: Proposes stage-aware hierarchical action generation for diffusion/flow-based VLA action heads.  
Relevance: Improves VLA policy generation by adapting conditioning focus across denoising stages.

#### [Adapting Vision-Language-Action Models to Unknown Visual Disruptions During Execution](http://arxiv.org/abs/2610.07946v1)
Lee, Seo, Jang et al. | 2026-10-06  
Contribution: Uses leftover unexecuted trajectories for self-supervised adaptation to unknown visual disruptions during execution.  
Relevance: Enables VLA policies to recover online from unexpected visual changes.

#### [Wiring Matters: Injection Topology and Initialization of Affordance Heads in Vision-Language-Action Policies](http://arxiv.org/abs/2610.06318v1)
An, Wang, Wang et al. | 2026-10-05  
Contribution: Studies injection topology and initialization of affordance heads in VLA policies on LIBERO.  
Relevance: Clarifies how auxiliary affordance supervision can be safely added to VLA models.

#### [ESP: Energy-Score Policy for One-Step Multimodal Action Generation](http://arxiv.org/abs/2610.07696v1)
Makabe, Kim, Matsushita | 2026-10-06  
Contribution: Introduces an energy-score policy for one-step multimodal action generation in VLA settings.  
Relevance: Reduces iterative sampling cost while preserving diverse valid action sequences.

#### [Attacca: Goal-Directed Control under State Continuity for Long-Horizon Embodied Agents](http://arxiv.org/abs/2610.07785v1)
Seo and Yoon | 2026-10-06  
Contribution: Targets goal-directed control under state continuity for long-horizon embodied agents.  
Relevance: Extends visual goal-conditioned policies to interdependent task sequences.

#### [SMART: Zero-Shot Sim-to-Real Articulated Object Manipulation via Large-Scale Synthetic Pretraining](http://arxiv.org/abs/2610.07652v1)
Ao, Jiang, Zhong et al. | 2026-10-06  
Contribution: Achieves zero-shot sim-to-real articulated object manipulation via large-scale synthetic pretraining.  
Relevance: Addresses data scarcity for contact-rich VLA manipulation.

#### [SimForcing: Distilling Simulation Motion Priors into Real-Domain Robot World Models](http://arxiv.org/abs/2610.06598v1)
Wang, Li, Song et al. | 2026-10-05  
Contribution: Distills simulation motion priors into real-domain robot world models.  
Relevance: Improves action-conditioned world models for VLA planning and simulation transfer.

#### [BiGym 2.0: Benchmarking Learned and Agent-Developed Policies for Humanoid Household Manipulation](http://arxiv.org/abs/2610.07594v1)
Zhang, Zhu, Chen et al. | 2026-10-06  
Contribution: Benchmarks learned and agent-developed policies for humanoid household manipulation on Unitree G1.  
Relevance: Provides a standardized humanoid VLA/whole-body manipulation evaluation suite.

#### [Inspect Robots: Evaluating the Capabilities and Safety of Embodied AI](http://arxiv.org/abs/2610.06306v1)
Leet, Menon, Machcha et al. | 2026-10-05  
Contribution: Introduces a modular, open evaluation of embodied AI capabilities and safety.  
Relevance: Supplies safety and capability assessment for language-model-controlled robots.

### Embodied Navigation
#### [MarvisNav: Making Memory Visible on Route Choices for Zero-Shot Object Navigation](http://arxiv.org/abs/2610.06510v1)
Wang, Chan, Zeng et al. | 2026-10-05  
Contribution: Makes memory visible on route choices for zero-shot object navigation.  
Relevance: Improves zero-shot object navigation by combining target likelihood and explored-place memory.

#### [Sim-to-Real Transfer of Vision-Language Navigation in Continuous Environments Using an Ackermann-Steered Mobile Robot](http://arxiv.org/abs/2610.07192v1)
Abeywansa, Gunasekara, De Silva et al. | 2026-10-05  
Contribution: Transfers continuous-environment VLN to an Ackermann-steered mobile robot.  
Relevance: Addresses real-world VLN without navigation graphs, 360-degree views, or perfect localization.

#### [StageVLN: Spatial and Trajectory Auxiliary Guidance for Efficient Vision-Language Navigation](http://arxiv.org/abs/2610.05664v1)
Dao, Pham, Vinh et al. | 2026-10-05  
Contribution: Adds spatial and trajectory auxiliary guidance for efficient vision-language navigation.  
Relevance: Encourages VLN representations to preserve geometry and orientation for better navigation.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [VisionWeave: Weaving Elastic Visual Representations as a Native Capability of MLLMs](http://arxiv.org/abs/2610.07987v1)
Feng, Yang, Chen et al. | 2026-10-06  
Contribution: Weaves elastic visual representations natively into MLLMs to avoid dense fixed-size patch tokens.  
Relevance: Reduces visual token inference cost through adaptive representation granularity.

### Multimodal LLM Pruning
#### [VLA-ACL: Action-Consistent Visual Token Pruning for Efficient Vision-Language-Action Models](http://arxiv.org/abs/2610.08133v1)
Du, Yue, Zhang et al. | 2026-10-06  
Contribution: Proposes action-consistent visual token pruning for efficient VLA models.  
Relevance: Directly targets visual token redundancy in VLA control steps.

#### [Efficient Multimodal Inference through Adaptive Acquisition and Sequential Fusion](http://arxiv.org/abs/2610.07466v1)
Mohapatra, Yang, Sui et al. | 2026-10-05  
Contribution: Uses adaptive acquisition and sequential fusion to encode only necessary modalities.  
Relevance: Provides inference-time pruning-like savings for multimodal systems.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [When and What to Prune? Stage-Aware Visual Token Pruning for Efficient VLA](http://arxiv.org/abs/2610.05273v1)
Shi, Xiong, Gong et al. | 2026-10-04  
Contribution: Prunes visual tokens in a stage-aware manner for efficient VLA inference.  
Relevance: Repeated recent work on visual token pruning for VLA acceleration.

### Continual Learning
#### [The Optimization Landscape of Learning Compacted Context Models](http://arxiv.org/abs/2610.05885v1)
Villeneuve, Sandomirsky, O'Neill et al. | 2026-10-05  
Contribution: Studies KV-cache compaction as direct memory manipulation for infinite-context continual learning.  
Relevance: Connects context compaction with continual memory without weight updates.

#### [LiLib: Lifelong Air-to-Ground Path-Loss Prediction on UAVs via a Drift-Triggered Model Library](http://arxiv.org/abs/2610.07111v1)
Tran | 2026-10-05  
Contribution: Uses a drift-triggered model library for lifelong air-to-ground path-loss prediction on UAVs.  
Relevance: Handles recurring domains and concept drift in continual regression.

#### [AccentCL: Robust Accent Classification with Incremental Expansion](http://arxiv.org/abs/2610.07426v1)
Tseng, Quamer, Nasrallah et al. | 2026-10-05  
Contribution: Enables robust accent classification with incremental expansion to new accent categories.  
Relevance: Addresses class-incremental learning under imbalance and domain shift.

#### [Which and When to Admit: Gradient Admission for Data-Centric Small Language Model Finetuning](http://arxiv.org/abs/2610.07553v1)
Cao, Liu, Liu et al. | 2026-10-06  
Contribution: Proposes gradient admission for data-centric small-language-model finetuning.  
Relevance: Tackles conflicting gradients and static data selection in adaptive finetuning.

#### [A Riemannian Geometry for Low-rank Adaptation](http://arxiv.org/abs/2610.08049v1)
Takeda, Yamaguchi, Suzuki et al. | 2026-10-06  
Contribution: Provides a Riemannian geometry view of LoRA parameterization.  
Relevance: Improves understanding of low-rank adaptation for continual model updates.

#### [Privileged Context as Drift in On-Policy Self-Distillation](http://arxiv.org/abs/2610.07842v1)
Davion and Rui | 2026-10-06  
Contribution: Analyzes how privileged context design causes drift in on-policy self-distillation.  
Relevance: Informs stable self-distillation and continual adaptation.

#### [Dynamic Positional Attention Modulation for Parameter-Efficient Fine-Tuning of Large Language Models](http://arxiv.org/abs/2610.07848v1)
Pan, Wang, Yu | 2026-10-06  
Contribution: Modulates positional attention for parameter-efficient LLM finetuning.  
Relevance: Offers structured, non-uniform PEFT for downstream adaptation.

#### [A Fine-Grained Analysis of the LoRA Fine-Tuning Landscape with Implications for Data Selection](http://arxiv.org/abs/2610.06542v1)
Zhang, Fang, Ma et al. | 2026-10-05  
Contribution: Analyzes LoRA rank choice and optimization landscape conditioning.  
Relevance: Guides adapter rank selection in continual/PEFT settings.

#### [RoSA: Rotational Sparse Adaptation for Memory-Efficient Fine-Tuning](http://arxiv.org/abs/2610.06243v1)
Lodhi, Zhou, Burkholz | 2026-10-05  
Contribution: Introduces rotational sparse adaptation by freezing layers and training a subset at a time.  
Relevance: Reduces memory cost for adapting foundation models.

## 视觉感知
### 3D Point Cloud Perception
#### [OpenSplatGraph: From Dense Semantic Maps to Structured Scene Graphs for Open-Vocabulary Robot Perception](http://arxiv.org/abs/2610.07569v1)
Nguyen, Nguyen, Fookes et al. | 2026-10-06  
Contribution: Converts dense semantic maps into structured scene graphs for open-vocabulary robot perception.  
Relevance: Links 3D Gaussian Splatting mapping with structured 3D scene understanding.

## Cross-Topic Signals
- Visual token pruning and elastic visual representations connect Multimodal LLM Pruning, LLM Pruning/Inference Optimization, and VLA efficiency.
- Verifier-guided test-time scaling connects Agent Test-Time Scaling with VLA action selection (DiVeR) and code-generation verification.
- Self-supervised adaptation and sim-to-real transfer connect VLA and Embodied Navigation for robust deployment under disruption.
- PEFT/LoRA and KV compaction link Continual Learning with inference optimization and agent memory.
- 3D scene graphs and spatial memory connect 3D Point Cloud Perception, Embodied Navigation, and VLA spatial reasoning.

## Priority Reading
#### - **CLIFT: Conformal Self-Verification for Web Agent Training and Test-Time Scaling** — central to agent test-time scaling; introduces calibrated self-verification that could generalize to other agentic domains.
#### - **DiVeR: Decision-Critical Verifier Learning for VLA Test-Time Scaling** — bridges Agent Test-Time Scaling and VLA; shows how verifier-guided sampling can improve robot policies without extra data.
#### - **VLA-ACL: Action-Consistent Visual Token Pruning for Efficient Vision-Language-Action Models** — directly addresses VLA inference cost via visual token pruning, important for real-time deployment.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*