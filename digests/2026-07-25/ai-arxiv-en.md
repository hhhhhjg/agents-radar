# Lab Research Topics Radar 2026-07-25

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 24 new + 16 seen in the last 14 days | Generated: 2026-07-24 22:56 UTC

---

## Today's Overview

- **LLM Agent Engineering**: 8 new papers on memory (AttriMem), RL training (PATS, Dark Room), multi‑agent RAG (GRADRAG), benchmarking (Tencent WorkBuddy Bench, GenDB), provenance auditing, and health agents (HiMe). Progress in agent memory optimization and RL stability.
- **Agent Test‑Time Scaling and Self‑Improvement**: 1 new paper (Test‑Time Scaling via Error Localization) introducing token‑level credit assignment for scaling inference compute. 2 repeated papers on latent reasoning and self‑evolution.
- **LLM Agent Societies**: No new papers today.
- **Vision‑Language‑Action Models**: 3 new papers: HyWorldVLA with hybrid world modelling, VoLN for long‑horizon VLN (also navigation), AXIS for scalable data engines. Emphasis on world models and data scalability.
- **Embodied Navigation**: 4 new papers: VoLN (long‑horizon VLN), ZONDA (zero‑shot multi‑floor), Scene Parameter Saliency (interpretability), Unified Video Dense Prediction. Advances in zero‑shot and dense prediction.
- **LLM Pruning and Inference Optimization**: 1 new paper (Leaky Language Models) on timing attacks to leak model architecture and deployment details. Security‑focused.
- **Multimodal LLM Pruning**: 1 new paper (Beyond Independent Optimization) reviewing compression, MoE routing, quantization for multimodal edge intelligence.
- **Continual Learning**: 4 new papers: federated PEFT spectral control (Three‑Pronged), LoRA memorisation capacity (How Many Bits), diffusion model adaptation (Source‑Prior‑Driven), adaptive multi‑horizon RL. Repeated papers on ECRAM hardware, LoRA rank allocation, and backdoor defences.
- **Event‑Based Vision**: No new papers today.
- **3D Point Cloud Perception**: 3 new papers: loss landscape topology for class imbalance, RECO for roadside detection, ODeform for 4D deformation. Repeated paper on view‑synthesis segmentation.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [Demonstrating GenDB: Instance-Optimized and Customized Query Processing Code Generation via LLM Agents](http://arxiv.org/abs/2607.20630v1)
Jiale Lao, Immanuel Trummer | 2026-07-22 | Contribution: Proposes using LLM agents to generate instance‑optimised query processing code, bypassing traditional engine extensions. | Relevance: Directly addresses agent‑based automation for database tasks, a core LLM agent engineering challenge.

##### [The Dark Room in the Reward Channel: Dense Prediction Rewards Collapse GRPO-Trained LLM Agents — and What Actually Works](http://arxiv.org/abs/2607.21273v1)
Yu Wang | 2026-07-23 | Contribution: Shows that dense per‑step prediction rewards under GRPO destroy LLM agent policy and identifies effective alternatives. | Relevance: Critical insights for designing reward functions in long‑horizon agent RL training.

#### [Auditing Provenance Sensitivity in LLM Agent Action Selection](http://arxiv.org/abs/2607.20827v1)
Junchi Liao | 2026-07-23 | Contribution: Introduces a targeted auditing approach to measure whether an LLM agent’s action is grounded only in permitted evidence. | Relevance: Addresses trust and safety in agent tool use, a key engineering requirement.

#### [PATS: Policy-Aware Training Scaffolding for Agentic Reinforcement Learning](http://arxiv.org/abs/2607.21419v1)
Yipeng Shi, Zhipeng Ma, Yue Wang et al. | 2026-07-23 | Contribution: Proposes a policy‑aware scaffolding method that provides failure‑guided exploration for weakly performing agent policies. | Relevance: Directly improves RL training efficiency for LLM agents with sparse rewards.

#### [AttriMem: Attribution-Guided Process Feedback for Agent Memory Learning](http://arxiv.org/abs/2607.21106v1)
Qinfeng Li, Yuntai Bao, Xinyan Yu et al. | 2026-07-23 | Contribution: Learns memory construction policy via attribution‑guided process feedback, replacing heuristic rules. | Relevance: Advances memory management in LLM agents, a core engineering challenge.

#### [HiMe: Real-Time Self-Hosted Personal Agent Platform for Health Insights with Wearable Devices](http://arxiv.org/abs/2607.21019v1)
Wei Liu, Siya Qi, Linhai Zhang et al. | 2026-07-23 | Contribution: Builds a personal health agent platform using wearable data and LLM agents for adaptive, privacy‑preserving insights. | Relevance: Demonstrates real‑world deployment of LLM agents in sensitive health domain.

#### [GRADRAG: Cross-Component Prompt Adaptation for Coordinated Multi-Agent RAG](http://arxiv.org/abs/2607.21324v1)
Paolo Pedinotti, Enrico Santus | 2026-07-23 | Contribution: Proposes cross‑component prompt adaptation to coordinate optimisation across the entire multi‑agent RAG pipeline. | Relevance: Tackles system‑level coordination in multi‑agent RAG, an emerging agent engineering topic.

#### [Tencent WorkBuddy Bench: A Multi-Domain Coding-Agent Benchmark with Contamination-Resistant Task Construction](http://arxiv.org/abs/2607.20911v1)
Tencent WorkBuddy Bench Team, Siqi Cai, Shaopeng Chen et al. | 2026-07-23 | Contribution: Introduces a benchmark for coding agents with contamination‑resistant task construction and cross‑model leaderboard. | Relevance: Provides standardised evaluation for coding agent capabilities, essential for engineering progress.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [PRO-LONG: Programmatic Memory Enables Long-Horizon Reasoning](http://arxiv.org/abs/2607.20064v2)
Alexis Fox, Junlin Wang, Paul Rosu et al. | 2026-07-22 | Contribution: Proposes programmatic memory for LLM agents to improve performance on continual‑learning benchmarks like ARC‑AGI‑3. | Relevance: Combines agent memory with continual learning, relevant to both engineering and learning.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [PerfAgent: Profiler-Guided Iterative Refinement for Repository-Level Code Optimization](http://arxiv.org/abs/2607.19653v1)
Ryan Deng, Yuanzhe Liu, Bastian Lipka et al. | 2026-07-22 | Contribution: Uses LLM agents with profiler feedback to iteratively optimise repository‑level code without breaking functionality. | Relevance: Applies agent engineering to practical code optimisation, demonstrating iterative refinement.

### Agent Test-Time Scaling and Self-Improvement

#### [Test-Time Scaling via Error Localization](http://arxiv.org/abs/2607.21453v1)
Rajiv Shailesh Chitale, Rahul Madhavan, Taneesh Gupta et al. | 2026-07-23 | Contribution: Introduces token‑level error localisation to guide test‑time scaling, improving LLM performance on reasoning tasks. | Relevance: Directly advances test‑time scaling methods, a key research area for agent self‑improvement.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Audio-Zero: Label-Free Self-Evolution for Fine-Grained Audio Reasoning](http://arxiv.org/abs/2607.20166v1)
Siqian Tong, Xuan Li, Chaozhuo Li et al. | 2026-07-22 | Contribution: Proposes a label‑free self‑evolution framework for audio language models to improve fine‑grained reasoning. | Relevance: Extends self‑improvement to audio domain, offering cross‑modal agent scaling insights.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [SLPO: Scaling Latent Reasoning via a Surrogate Policy](http://arxiv.org/abs/2607.19691v1)
Runyang You, Zhiyuan Liu, Yongqi Li et al. | 2026-07-22 | Contribution: Uses a surrogate policy to scale latent reasoning without per‑token decoding, reducing test‑time cost. | Relevance: Proposes a novel approach to test‑time scaling for latent reasoning, applicable to agent inference.

## 具身智能

### Vision-Language-Action Models

#### [HyWorldVLA: A Vision-Language-Action Model with Hybrid World Modeling for Autonomous Driving](http://arxiv.org/abs/2607.20988v1)
Quanfu Yu, Xian Wu, Hao Xu et al. | 2026-07-23 | Contribution: Combines pixel‑level and latent world modelling in a VLA model for robust autonomous driving prediction. | Relevance: Advances VLA models with world modelling, directly applicable to embodied driving agents.

#### [AXIS: A Growable Community-Driven Data Engine for Scalable Robot Manipulation](http://arxiv.org/abs/2607.21588v1)
Mengfei Zhao, Dihong Huang, Yikai Tang et al. | 2026-07-23 | Contribution: Proposes a community‑driven data pipeline for collecting diverse robot manipulation demonstrations without specialised hardware. | Relevance: Addresses data scalability for VLA policy learning, a critical bottleneck.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [ReferTrack: Referring Then Tracking for Embodied Visual Tracking](http://arxiv.org/abs/2607.20061v1)
Hanjing Ye, Tianle Zeng, Jiazhao Zhang et al. | 2026-07-22 | Contribution: Improves embodied visual tracking by decomposing VLA policy into referring and tracking stages with chain‑of‑thought. | Relevance: Enhances VLA policy interpretability and accuracy for target following.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Closing the Lab-to-Store Gap: A Data-Efficient Post-Training and Experience-Driven Learning VLA Framework for Retail Humanoids](http://arxiv.org/abs/2607.20345v1)
Roger Sala Sisó, Tiago Silvério, Jakob Sand et al. | 2026-07-22 | Contribution: Develops a data‑efficient post‑training framework for VLA humanoid robots in retail environments using experience replay. | Relevance: Bridges simulation‑to‑reality gap for VLA agents in real‑world deployment.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [LENS: LLM-guided Environment Simplification for Planning and Control in Clutter](http://arxiv.org/abs/2607.19633v1)
Aileen Liao, Rachel Holladay, Dinesh Jayaraman et al. | 2026-07-22 | Contribution: Uses LLM to simplify cluttered environments (e.g., remove or rearrange objects) to aid downstream planning and control. | Relevance: Demonstrates synergy between LLM reasoning and robotic manipulation, relevant to VLA systems.

### Embodied Navigation

##### [VoLN: Vision-Only Long-Horizon Navigation—Paradigm, Benchmark, and Method](http://arxiv.org/abs/2607.21400v1)
Jiabin Lou, Haopeng Wang, Yuanshuai Wang et al. | 2026-07-23 | Contribution: Introduces a vision‑only long‑horizon VLN benchmark and method without relying on spatial priors from GPS or depth. | Relevance: Shifts VLN toward more realistic, GPS‑denied settings, extending embodied navigation capabilities.

#### [ZONDA: Zero-shot Object Navigation with Dynamic Avoidance in Multi-floor Environments](http://arxiv.org/abs/2607.21025v1)
Shaomin Liang, Xuanhong Liao, Shiyao Zhang | 2026-07-23 | Contribution: Proposes a zero‑shot object navigation method that handles cross‑floor topology and dynamic obstacles without prior training. | Relevance: Addresses critical real‑world deployment challenges for object goal navigation.

#### [Scene Parameter Saliency via Differentiable Light Transport](http://arxiv.org/abs/2607.21562v1)
Linas Beresna, Eugene Fiume | 2026-07-23 | Contribution: Applies differentiable rendering to produce saliency maps over scene parameters, enabling interpretable navigation‑relevant features. | Relevance: Provides a novel interpretability tool for embodied navigation policies.

#### [Unified Video Dense Prediction from Disjoint Data](http://arxiv.org/abs/2607.21592v1)
Yihong Sun, Seoung Wug Oh, Jiahui Huang et al. | 2026-07-23 | Contribution: Unifies geometry, appearance, and semantic prediction from disjointly annotated video data, enabling dense scene understanding. | Relevance: Dense prediction is crucial for navigation; this reduces annotation burden.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [NavVerse: Benchmarking Indoor-to-Outdoor Embodied Navigation in Continuous Robot Simulation](http://arxiv.org/abs/2607.19695v1)
Junzhe Wu, Yue Hu, Zeyu Han et al. | 2026-07-22 | Contribution: Proposes a benchmark for continuous indoor‑to‑outdoor navigation, including exit finding and boundary crossing. | Relevance: Fills a gap in navigation evaluation for real‑world deployment scenarios.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [EA-Nav: Learning Safe Visual Navigation Policies with Embodiment Awareness](http://arxiv.org/abs/2607.19880v1)
Jialu Zhang, Yong Du, Xianda Guo et al. | 2026-07-22 | Contribution: Learns cross‑embodiment navigation policies that are aware of different robot physical properties to ensure safety. | Relevance: Advances safe, generalisable navigation across diverse embodied agents.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Multimodal Large Language Models for Remote Sensing Image Understanding: Domain-Specific or General-Purpose?](http://arxiv.org/abs/2607.20284v1)
Qiwei Ma, Chunping Qiu, Xinjun Cheng et al. | 2026-07-22 | Contribution: Systematically evaluates MLLMs for remote sensing, revealing cross‑task generalisation gaps relevant to aerial navigation. | Relevance: Provides insights for using MLLMs in navigation‑oriented remote sensing.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [OffNadirLoc: Benchmark and Framework for Challenging UAV-to-Satellite Geo-Localization under Large Off-Nadir Views](http://arxiv.org/abs/2607.19951v1)
Qian Qiao, Wenye Liu, Ting Liu et al. | 2026-07-22 | Contribution: Introduces a benchmark and framework for UAV geo‑localisation under large off‑nadir views, addressing a challenging navigation perception task. | Relevance: Directly relevant to UAV navigation under extreme viewpoint changes.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [Leaky Language Models: Stealing Architecture and Inference Optimizations via Per-Token Timing](http://arxiv.org/abs/2607.20723v1)
Sadegh Majidi, Niloofar Mireshghallah, Kazem Taram | 2026-07-22 | Contribution: Demonstrates that timing attacks can leak proprietary model architecture and deployment details from production LLMs. | Relevance: Highlights security risks in LLM inference optimisation pipelines, important for deployment.

### Multimodal LLM Pruning

#### [Beyond Independent Optimization: Compression, MoE Routing, and Quantization Interactions in Multimodal Edge Intelligence](http://arxiv.org/abs/2607.20981v1)
Jay Gor, Karm Dave, Akshita Abrol et al. | 2026-07-23 | Contribution: Reviews and analyses interactions between compression, MoE routing, and quantisation for efficient multimodal inference on edge devices. | Relevance: Provides a holistic view of pruning and optimisation for multimodal LLMs, directly relevant to the sub‑topic.

### Continual Learning

#### [Three-Pronged Spectral Control for Federated Parameter Efficient Fine Tuning](http://arxiv.org/abs/2607.20914v1)
Shiva Raj Pokhrel, Dipsan Bhattarai, Anwar Walid | 2026-07-23 | Contribution: Proposes spectral regularisation for LoRA in federated settings to mitigate client heterogeneity. | Relevance: Ties continual learning with federated PEFT, addressing catastrophic forgetting on non‑IID data.

#### [How Many Bits Can an Adapter Write? Measuring the Capacity and Memorization of Parameter-Efficient Fine-Tuning](http://arxiv.org/abs/2607.21351v1)
Kaizhen Tan, Heqing Du, Yang Feng | 2026-07-23 | Contribution: Measures the information capacity of LoRA adapters, revealing that they can memorise training data beyond “skill” representations. | Relevance: Directly addresses memorisation in continual learning with PEFT, important for privacy and forgetting.

#### [Source-Prior-Driven Selective Adaptation for Efficient Diffusion Model Finetuning](http://arxiv.org/abs/2607.20913v1)
Yi Xiong, Yuan-Yuan Cheng, Xiao-Ming Fu | 2026-07-23 | Contribution: Uses source‑prior signals to selectively adapt only relevant weights during diffusion model fine‑tuning, preserving generalisation. | Relevance: Provides a principled approach to trade‑off between adaptation and forgetting in generative models.

#### [Adaptive Multi-Horizon Reinforcement Learning](http://arxiv.org/abs/2607.20656v1)
Manoosh Samiei, Doina Precup, Paul Masset | 2026-07-22 | Contribution: Learns to dynamically adjust discount factors across multiple temporal horizons for better adaptation to changing environments. | Relevance: Offers a novel RL perspective on continual learning by balancing short‑term and long‑term adaptation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Leveraging ECRAM for Edge Continual Learning](http://arxiv.org/abs/2607.19661v1)
Nabila Tasnim, Haoran Liu, Qing Cao et al. | 2026-07-22 | Contribution: Explores analog ECRAM devices for energy‑efficient continual learning on edge platforms. | Relevance: Hardware–algorithm co‑design for continual learning, relevant to efficiency.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [The Blessing of Dimensionality: How Near-Orthogonality in High-Dimensional Spaces Explains Temporal Portability](http://arxiv.org/abs/2607.20301v1)
Abigail Woodring, Adrian Chan, Rana Muhammad Shahroz Khan et al. | 2026-07-22 | Contribution: Provides a theoretical explanation for the temporal portability of PEFT methods like LoRA using high‑dimensional near‑orthogonality. | Relevance: Theoretical underpinning for why LoRA adapters generalise over time in continual learning.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Statistical Inference for Rank Allocation in Low-Rank Adaptation](http://arxiv.org/abs/2607.20205v1)
Yihang Gao, Vincent Y. F. Tan | 2026-07-22 | Contribution: Develops a statistical framework to allocate ranks across LoRA modules under a fixed budget, improving adaptation efficiency. | Relevance: Addresses resource allocation in continual PEFT, directly impacting capacity and forgetting.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Defense Against LLM Backdoors using Critical Neuron Isolation Pruning](http://arxiv.org/abs/2607.19894v1)
Yuxi Li, Zhibo Zhang, Kailong Wang et al. | 2026-07-22 | Contribution: Proposes pruning critical neurons to defend against backdoor attacks in LLMs, including those via PEFT. | Relevance: Connects pruning (compression) with continual learning security, relevant to robust adaptation.

## 视觉感知

### 3D Point Cloud Perception

#### [Loss Landscape Topology Reveals Why Simple Baselines are Competitive at 3D Point Cloud Segmentation Under Class Imbalance](http://arxiv.org/abs/2607.21089v1)
Antonis Savva, Christos Kyrkou, Theocharis Theocharides | 2026-07-23 | Contribution: Uses loss landscape topology to explain why simple baselines often match complex imbalance‑aware methods on 3D segmentation. | Relevance: Provides theoretical insight for designing robust 3D perception models under data imbalance.

#### [RECO: Region-Aware Compensation for Extrinsic Perturbations in Roadside 3D Detection](http://arxiv.org/abs/2607.20947v1)
Junsheng Du, Zhaocheng He, Yuhuan Lu | 2026-07-23 | Contribution: Compensates for camera extrinsic perturbations in roadside 3D detection using region‑aware correction. | Relevance: Improves robustness of 3D detection in real‑world intelligent transportation systems.

#### [ODeform: Learning Continuous 4D Motion for Shape Deformation with Neural ODEs](http://arxiv.org/abs/2607.20670v1)
Yordanka Velikova, Mahdi Saleh, Liming Kuang et al. | 2026-07-22 | Contribution: Models continuous 4D shape deformation using neural ODEs, enabling smooth temporal interpolation for 3D point clouds. | Relevance: Advances dynamic 3D perception, applicable to tracking and manipulation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Extending a Large View Synthesis Model for Multi-view Panoptic Segmentation](http://arxiv.org/abs/2607.19765v1)
Kwonyoung Ryu, In-Jae Lee, Jonghyun Jin et al. | 2026-07-22 | Contribution: Extends a large view synthesis model to perform multi‑view panoptic segmentation without explicit 3D representations. | Relevance: Demonstrates cross‑task generalisation of view synthesis to 3D scene understanding, relevant to point cloud perception.

## Cross‑Topic Signals

- **Token‑level credit assignment** appears in both “Test‑Time Scaling via Error Localization” (Agent Test‑Time Scaling) and “PATS” (LLM Agent Engineering), suggesting a growing trend to provide fine‑grained feedback for agent improvement.
- **Memory systems** are central in “AttriMem” and “PRO‑LONG” (LLM Agent Engineering) and also underpin “Source‑Prior‑Driven Selective Adaptation” (Continual Learning), indicating cross‑pollination between agent memory and model adaptation.
- **Federated and edge continual learning** are linked via “Three‑Pronged Spectral Control” (Continual Learning) and “Leveraging ECRAM” (Continual Learning), while “Beyond Independent Optimization” (Multimodal LLM Pruning) also addresses edge constraints—a convergence of privacy, efficiency, and adaptation.
- **Robustness to distribution shifts** unites “HyWorldVLA” (VLA), “RECO” (3D Detection), and “Adaptive Multi‑Horizon RL” (Continual Learning), each tackling dynamic environments from different angles.
- **Security and safety** topics span “Leaky Language Models” (Inference Optimization), “Defense Against LLM Backdoors” (Continual Learning), and “Auditing Provenance Sensitivity” (LLM Agent Engineering), reflecting a holistic concern for trustworthy deployed systems.

## Priority Reading

1. **“The Dark Room in the Reward Channel”** — Exposes a critical failure mode in GRPO‑trained LLM agents: dense prediction rewards collapse the policy. Essential for anyone designing reward schemes for long‑horizon agent RL.
2. **“Test‑Time Scaling via Error Localization”** — Proposes token‑level error localisation for targeted test‑time compute scaling. Provides a principled method to improve agent reasoning without brute‑force sampling.
3. **“How Many Bits Can an Adapter Write?”** — Quantifies the memorisation capacity of LoRA adapters, challenging the assumption that adapters only learn “skills”. Critical for understanding privacy and forgetting in continual learning and agent fine‑tuning.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*