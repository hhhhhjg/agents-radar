# Lab Research Topics Radar 2026-07-25

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 17 new + 0 seen in the last 14 days | Generated: 2026-07-24 22:56 UTC

---

# Research Topics Radar

## Today’s Overview

- **LLM Agent Engineering**: Three new papers advance agent code generation, reward collapse in RL training, and provenance auditing in tool selection.
- **Agent Test-Time Scaling and Self-Improvement**: A single paper introduces token-level error localization to improve test-time scaling for reasoning tasks.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: Two new papers – one on hybrid world modeling for autonomous driving, another on a community-driven data engine for robot manipulation.
- **Embodied Navigation**: Two new papers – one on vision-only long-horizon navigation without GPS, another on zero-shot object navigation in multi-floor dynamic environments.
- **LLM Pruning and Inference Optimization**: One new paper reveals how token-generation timings can leak proprietary model architecture and deployment optimizations.
- **Multimodal LLM Pruning**: One survey reviews interactions among compression, MoE routing, and quantization for efficient multimodal edge inference.
- **Continual Learning**: Three new papers – spectral control for federated PEFT, measuring memorization capacity of adapters, and selective adaptation for diffusion model fine-tuning.
- **Event-Based Vision**: No new papers today.
- **3D Point Cloud Perception**: Three new papers – loss landscape topology under class imbalance, region-aware compensation for roadside detection, and continuous 4D deformation modeling with neural ODEs.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [Demonstrating GenDB: Instance-Optimized and Customized Query Processing Code Generation via LLM Agents](http://arxiv.org/abs/2607.20630v1)
Jiale Lao, Immanuel Trummer (2026-07-22)
**Contribution**: Proposes an LLM agent that generates instance-optimized query processing code to replace rigid database engines.
**Relevance**: Directly demonstrates how LLM agents can dynamically generate and optimize domain-specific code, a core engineering challenge.

##### [The Dark Room in the Reward Channel: Dense Prediction Rewards Collapse GRPO-Trained LLM Agents – and What Actually Works](http://arxiv.org/abs/2607.21273v1)
Yu Wang (2026-07-23)
**Contribution**: Shows that dense per-step prediction rewards destroy policies under group-normalized RL (GRPO), and identifies alternative reward designs that preserve agent learning.
**Relevance**: Provides critical failure mode analysis and practical guidance for training LLM agents with reinforcement learning, directly impacting agent engineering pipelines.

#### [Auditing Provenance Sensitivity in LLM Agent Action Selection](http://arxiv.org/abs/2607.20827v1)
Junchi Liao (2026-07-23)
**Contribution**: Introduces a targeted auditing method to check whether an LLM agent’s tool selection relies on unauthorized or irrelevant evidence.
**Relevance**: Addresses trustworthiness and safety in agent decision-making, essential for production-grade agent deployments.

### Agent Test-Time Scaling and Self-Improvement

#### [Test-Time Scaling via Error Localization](http://arxiv.org/abs/2607.21453v1)
Rajiv Shailesh Chitale, Rahul Madhavan, Taneesh Gupta et al. (2026-07-23)
**Contribution**: Proposes a method that assigns token-level credit to localize errors in initial outputs, enabling more efficient test-time computation scaling.
**Relevance**: Directly tackles the sub-topic of self-improvement by using error feedback to guide iterative refinement, improving reasoning and coding performance.

### LLM Agent Societies
No new papers today.

## 具身智能

### Vision-Language-Action Models

#### [HyWorldVLA: A Vision-Language-Action Model with Hybrid World Modeling for Autonomous Driving](http://arxiv.org/abs/2607.20988v1)
Quanfu Yu, Xian Wu, Hao Xu et al. (2026-07-23)
**Contribution**: Combines pixel-level and latent world modeling in a VLA framework to improve robustness in noisy driving scenarios.
**Relevance**: Advances VLA models for autonomous driving by addressing the trade-off between fine-grained prediction and noise robustness, a key challenge in embodied action generation.

#### [AXIS: A Growable Community-Driven Data Engine for Scalable Robot Manipulation](http://arxiv.org/abs/2607.21588v1)
Mengfei Zhao, Dihong Huang, Yikai Tang et al. (2026-07-23)
**Contribution**: Presents a community-driven pipeline that collects diverse robot manipulation demonstrations without specialized hardware or centralized operators.
**Relevance**: Enables scalable data collection for training VLA policies, addressing a critical bottleneck in real-world robot learning.

### Embodied Navigation

##### [VoLN: Vision-Only Long-Horizon Navigation—Paradigm, Benchmark, and Method](http://arxiv.org/abs/2607.21400v1)
Jiabin Lou, Haopeng Wang, Yuanshuai Wang et al. (2026-07-23)
**Contribution**: Proposes a vision-only navigation paradigm that infers spatial priors from visual observations alone, and introduces a new benchmark for long-horizon VLN without GPS.
**Relevance**: Directly advances embodied navigation by removing reliance on privileged spatial information, making deployment in GPS-denied environments feasible.

#### [ZONDA: Zero-shot Object Navigation with Dynamic Avoidance in Multi-floor Environments](http://arxiv.org/abs/2607.21025v1)
Shaomin Liang, Xuanhong Liao, Shiyao Zhang (2026-07-23)
**Contribution**: Extends object goal navigation to realistic multi-floor environments with dynamic pedestrians, using zero-shot generalization.
**Relevance**: Addresses practical deployment challenges (cross-floor topology, moving obstacles) that are often ignored, making embodied navigation more robust and applicable.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [Leaky Language Models: Stealing Architecture and Inference Optimizations via Per-Token Timing](http://arxiv.org/abs/2607.20723v1)
Sadegh Majidi, Niloofar Mireshghallah, Kazem Taram (2026-07-22)
**Contribution**: Demonstrates that token-generation timing alone can leak proprietary model architecture and inference optimization details.
**Relevance**: Highlights a new side-channel vulnerability that directly impacts the confidentiality of inference optimizations, crucial for secure deployment of optimized LLMs.

### Multimodal LLM Pruning

#### [Beyond Independent Optimization: Compression, MoE Routing, and Quantization Interactions in Multimodal Edge Intelligence](http://arxiv.org/abs/2607.20981v1)
Jay Gor, Karm Dave, Akshita Abrol et al. (2026-07-23)
**Contribution**: Reviews how compression, mixture-of-experts routing, and quantization interact under memory, latency, and energy constraints for efficient multimodal inference.
**Relevance**: Provides a comprehensive view of joint optimization strategies for multimodal LLM pruning and edge deployment, informing practical model compression choices.

### Continual Learning

#### [Three-Pronged Spectral Control for Federated Parameter Efficient Fine Tuning](http://arxiv.org/abs/2607.20914v1)
Shiva Raj Pokhrel, Dipsan Bhattarai, Anwar Walid (2026-07-23)
**Contribution**: Introduces spectral control across three dimensions to mitigate client drift in federated PEFT (LoRA) under non-IID data.
**Relevance**: Directly addresses a key continual learning challenge – non-IID client heterogeneity – by leveraging spectral analysis for stable fine-tuning.

#### [How Many Bits Can an Adapter Write? Measuring the Capacity and Memorization of Parameter-Efficient Fine-Tuning](http://arxiv.org/abs/2607.21351v1)
Kaizhen Tan, Heqing Du, Yang Feng (2026-07-23)
**Contribution**: Quantifies, in bits, how much a LoRA adapter memorizes training data, extending compression-based analysis to the frozen-base setting.
**Relevance**: Provides a theoretical and empirical tool to assess memorization risk in PEFT, essential for understanding when adapters act as skill records vs. data stores in continual learning.

#### [Source-Prior-Driven Selective Adaptation for Efficient Diffusion Model Finetuning](http://arxiv.org/abs/2607.20913v1)
Yi Xiong, Yuan-Yuan Cheng, Xiao-Ming Fu (2026-07-23)
**Contribution**: Proposes a selective adaptation method that preserves pretrained generative capability while adapting to new domains via source-prior guidance.
**Relevance**: Tackles the catastrophic forgetting trade-off in continual learning for diffusion models, offering a principled approach to domain-specific fine-tuning.

## 视觉感知

### Event-Based Vision
No new papers today.

### 3D Point Cloud Perception

#### [Loss Landscape Topology Reveals Why Simple Baselines are Competitive at 3D Point Cloud Segmentation Under Class Imbalance](http://arxiv.org/abs/2607.21089v1)
Antonis Savva, Christos Kyrkou, Theocharis Theocharides (2026-07-23)
**Contribution**: Uses loss landscape topology analysis to explain why standard baselines often outperform specialized imbalance-aware methods in 3D segmentation.
**Relevance**: Provides theoretical insight into model behavior under extreme class imbalance, guiding practical choices for 3D point cloud perception pipelines.

#### [RECO: Region-Aware Compensation for Extrinsic Perturbations in Roadside 3D Detection](http://arxiv.org/abs/2607.20947v1)
Junsheng Du, Zhaocheng He, Yuhuan Lu (2026-07-23)
**Contribution**: Develops a region-aware compensation method to correct camera extrinsic perturbations that degrade roadside 3D detection.
**Relevance**: Directly improves robustness of 3D point cloud perception in intelligent transportation systems, addressing a practical deployment issue.

#### [ODeform: Learning Continuous 4D Motion for Shape Deformation with Neural ODEs](http://arxiv.org/abs/2607.20670v1)
Yordanka Velikova, Mahdi Saleh, Liming Kuang et al. (2026-07-22)
**Contribution**: Models continuous 4D shape deformation over time using neural ODEs, avoiding discrete time-step limitations.
**Relevance**: Advances spatiotemporal 3D perception by enabling smooth, physically plausible deformation tracking, useful for manipulation and simulation tasks.

### 3D Point Cloud Perception and Tracking
No new papers today.

## Cross-Topic Signals

- **Reward Design for Agent Training**: The collapse of GRPO under dense prediction rewards (paper 9) connects to test-time scaling via error localization (paper 6), suggesting that fine-grained credit assignment must be carefully structured to avoid policy destruction.
- **Memorization and Continual Learning**: Paper 11’s bit-level measurement of LoRA adapter memorization has direct implications for continual learning (paper 4 and 12), as it quantifies how much client data is retained during federated or incremental fine-tuning.
- **Pruning and Multimodal Efficiency**: The survey on compression–MoE–quantization interactions (paper 15) complements the timing-based attack on inference optimizations (paper 7), highlighting both the need for joint optimization and the security risks of even partially optimized deployments.
- **Loss Landscape Topology Across Domains**: Paper 2 uses topological analysis to understand 3D segmentation under imbalance; similar topological methods could be applied to study reward landscapes in LLM agent training (paper 9) or federated LoRA convergence (paper 4).

## Priority Reading

1. **[HyWorldVLA](http://arxiv.org/abs/2607.20988v1)** – First VLA model to combine pixel-level and latent world modeling; directly relevant to building robust autonomous driving agents and may inspire hybrid world models for other embodied tasks.
#### **[Test-Time Scaling via Error Localization](http://arxiv.org/abs/2607.21453v1)** – Introduces a principled token-level credit assignment method that could become a standard component for agent self-improvement; highly actionable for LLM agent pipelines.
3. **[How Many Bits Can an Adapter Write?](http://arxiv.org/abs/2607.21351v1)** – Provides a novel, quantifiable perspective on memorization in PEFT, with immediate implications for data privacy, continual learning, and the interpretability of fine-tuned adapters.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*