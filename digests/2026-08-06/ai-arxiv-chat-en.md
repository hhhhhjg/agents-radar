# Lab Research Topics Radar 2026-08-06

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 22 new + 0 seen in the last 14 days | Generated: 2026-08-05 22:53 UTC

---

## Today's Overview

- **LLM Agent Engineering**: 3 new papers — long-term memory privacy, a long-horizon pedagogical agent benchmark, and process-level attack-chain reconstruction evaluation.
- **Agent Test-Time Scaling and Self-Improvement**: 3 new papers — interpretable adaptive sampling, a TTS evaluation/reproducibility review, and a safety-oriented TTS method for image generation (tangential to LLM agents).
- **LLM Agent Societies**: 1 new paper — history-aware meta-policy delegation in heterogeneous multi-agent systems.
- **Vision-Language-Action Models**: 3 new papers — physical-attack robust fine-tuning, 3D tracker distillation, and proprioceptive-state wiring studies.
- **Embodied Navigation**: 2 new papers — future-scene video generation for driving and multi-room Manhattan layout estimation.
- **LLM Pruning and Inference Optimization**: 1 directly relevant paper on group-robust pruning selection; the two video-token-pruning papers are filed under Multimodal LLM Pruning.
- **Multimodal LLM Pruning**: 2 new papers — adaptive two-stage and global spatio-temporal visual token pruning for video LLMs.
- **Continual Learning**: 3 new matched papers — MoE-based LoRA generation, evolving-rubric RL rewards, and a dietary VLM; the first two have the strongest fit.
- **Event-Based Vision**: 1 new paper — event-camera/odometry calibration under ground motion constraints.
- **3D Point Cloud Perception**: 3 new papers — lightweight LiDAR detection distillation, zero-shot 3D visual grounding, and robust BEV detection under extrinsic perturbation.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [DP-MemView: A Memory Interface for Attribute-Level Transcript Privacy in Long-Term LLM Agents](http://arxiv.org/abs/2608.03130v1)
Jong Wook Kim et al. | 2026-08-04
Contribution: Introduces a differentially private memory interface that protects attribute-level privacy in long-term LLM agent transcripts.
Relevance: Directly addresses a core privacy engineering problem for persistent LLM agents.

#### [EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners](http://arxiv.org/abs/2608.03206v1)
Unggi Lee et al. | 2026-08-04
Contribution: Presents a long-horizon benchmark for pedagogical LLM agents operating over a learning management system with simulated learners.
Relevance: Provides longitudinal evaluation infrastructure for LLM agent engineering in education.

#### [DiagChain: A Diagnostic Benchmark for Evaluating LLM Agents on Evidence-Grounded Attack Chain Reconstruction](http://arxiv.org/abs/2608.03591v1)
Xuyang Liu et al. | 2026-08-04
Contribution: Proposes a diagnostic benchmark that evaluates LLM agent processes, not just final outputs, for attack chain reconstruction.
Relevance: Highlights evidence-grounded intermediate reasoning, an important agent-engineering evaluation dimension.

### Agent Test-Time Scaling and Self-Improvement

#### [Interpretable Adaptive Sampling for LLM Test-Time Scaling](http://arxiv.org/abs/2608.03961v1)
Mobina Kashaniyan and Ali Jannesari | 2026-08-04
Contribution: Uses interpretable adaptive sampling to allocate per-query test-time compute budgets based on prompt difficulty.
Relevance: Directly improves efficiency and explainability of LLM-agent test-time scaling.

#### [Test-Time Scaling in Reasoning LLMs: Inference Regimes, Evaluation, and Reproducibility](http://arxiv.org/abs/2608.04001v1)
Mohsen Hariri et al. | 2026-08-04
Contribution: Surveys TTS inference regimes and provides evaluation/reproducibility guidance for reasoning LLMs.
Relevance: Offers a conceptual framework for comparing and reproducing agent TTS methods.

#### [Test-Time Scaling for Safe Text-Guided Image Generation via Intermediate Clean Estimates](http://arxiv.org/abs/2608.03284v1)
Jinya Sakurai et al. | 2026-08-04
Contribution: Applies test-time scaling with intermediate clean estimates to enforce safety in text-to-image diffusion models.
Relevance: Extends TTS ideas beyond LLM agents; weak fit but relevant to self-improvement for safe generation.

### LLM Agent Societies

#### [History Matters: Meta-policy Delegation with Heterogeneous Multi-agent Reinforcement Learning](http://arxiv.org/abs/2608.03833v1)
Ziqing Lu et al. | 2026-08-04
Contribution: Studies history-dependent meta-policy delegation among heterogeneous agents with different capabilities and operating costs.
Relevance: Offers a delegation mechanism applicable to societies of specialized LLM agents.

## 具身智能

### Vision-Language-Action Models

#### [Structure-Aware Robust Fine-Tuning: Defending Vision-Language-Action Robots Against Physical Attention Hijacking](http://arxiv.org/abs/2608.03231v1)
Jinquan Zhang et al. | 2026-08-04
Contribution: Identifies a physical-attention-hijacking failure mode and proposes structure-aware robust fine-tuning for VLA policies against adversarial patches.
Relevance: Directly hardens VLA manipulation policies against physically realizable attacks.

#### [Track4Action: Distilling World-Centric 3D Tracker into Vision-Language-Action Policies](http://arxiv.org/abs/2608.03727v1)
Chenyi Wang et al. | 2026-08-04
Contribution: Distills a world-centric 3D tracker into VLA policies to supply world-change supervision from demonstration clips.
Relevance: Strengthens VLA policies' 3D scene understanding and action dynamics.

#### [How Should Vision-Language-Action Models Use Proprioceptive State?](http://arxiv.org/abs/2608.03052v1)
Yiren Zhao et al. | 2026-08-04
Contribution: Systematically studies how robot proprioceptive state should be wired into VLA models.
Relevance: Provides design guidance for a ubiquitous but often ad-hoc VLA input modality.

### Embodied Navigation

#### [SUV: Future Scene Understanding as Video Generation for End-to-End Driving](http://arxiv.org/abs/2608.03084v1)
Yibo Yuan et al. | 2026-08-04
Contribution: Uses video generation as a shared predictor of future scenes in end-to-end driving.
Relevance: Provide scalable future-scene understanding for navigation and driving decisions.

#### [PolyLayout: Multi-room Manhattan Layout Estimation](http://arxiv.org/abs/2608.03323v1)
Gustav Hanning et al. | 2026-08-04
Contribution: Estimates multi-room Manhattan layouts from multi-view imagery.
Relevance: Produces layout priors useful for indoor embodied navigation.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [When Compression Scores Cannot Decide: Information Boundaries for Group-Robust LLM Pruning](http://arxiv.org/abs/2608.02940v1)
Andrew Zhang | 2026-08-03
Contribution: Shows that reproducible pruning scores can still select worse endpoints, and models the information boundaries behind this failure.
Relevance: Important cautionary result for LLM pruning selection and inference-optimization decisions.

### Multimodal LLM Pruning

#### [Adaptive Two-Stage Visual Token Pruning for Efficient Inference in Video-Language Models](http://arxiv.org/abs/2608.03112v1)
Paribesh Regmi et al. | 2026-08-04
Contribution: Proposes adaptive two-stage visual token pruning to reduce inference latency in video-language models.
Relevance: Directly targets multimodal LLM pruning for video understanding.

#### [GSTEP: Global Spatio-Temporal Density-Driven Visual Token Pruning for Efficient Video Large Language Models](http://arxiv.org/abs/2608.03083v1)
Mengjie Zhang et al. | 2026-08-04
Contribution: Introduces global spatio-temporal density-driven visual token pruning for VideoLLMs.
Relevance: Addresses long-video token redundancy, a central multimodal LLM pruning problem.

### Continual Learning

#### [MoEGen: Mixture-of-Experts for Instance-Adaptive LoRA Generation](http://arxiv.org/abs/2608.03275v1)
Yiming Zeng et al. | 2026-08-04
Contribution: Generates instance-adaptive LoRA experts with a MoE design, avoiding linearly growing adapter storage.
Relevance: Supports parameter-efficient adaptation and continual expert updates in LLMs.

#### [Reinforcement Learning with Evolving Rubrics as Rewards for Audio Reasoning](http://arxiv.org/abs/2608.02831v1)
Fangxu Yu et al. | 2026-08-03
Contribution: Uses evolving rubrics as rewards to combine outcome- and process-level supervision for audio reasoning RL.
Relevance: The rubric-evolution mechanism connects reward design to continual improvement.

#### [OliveGemma: A 3 Billion Visual Language Model for Recognising the Mediterranean & European Diet](http://arxiv.org/abs/2608.03428v1)
Dimitrios I. Zaridis et al. | 2026-08-04
Contribution: Introduces a 3B VLM for fine-grained dietary recognition of Mediterranean/European foods.
Relevance: Domain-specific VLM adaptation; weaker continual-learning link, but matched to the topic.

## 视觉感知

### Event-Based Vision

#### [PLS-Calib: A Partial Least Squares Framework for Event Camera and Odometry Calibration under Ground Motion Constraints](http://arxiv.org/abs/2608.03296v1)
Guangyu Li et al. | 2026-08-04
Contribution: Presents a PLS-based extrinsic rotation calibration method for event cameras and odometry under ground-constrained motion.
Relevance: Addresses event-camera calibration in realistic ground-robot settings.

### 3D Point Cloud Perception

#### [Lightweight 3D Object Detection via Mamba-Based Knowledge Distillation](http://arxiv.org/abs/2608.03490v1)
Quoc Cuong Ninh et al. | 2026-08-04
Contribution: Distills Mamba-based LiDAR detection into lightweight 3D object detectors.
Relevance: Directly improves point-cloud 3D detection efficiency for onboard perception.

#### [TDVR: Joint Text Disambiguation and Viewpoint Reasoning for Zero-Shot 3D Visual Grounding](http://arxiv.org/abs/2608.03763v1)
Qingxi Du et al. | 2026-08-04
Contribution: Proposes training-free text disambiguation and viewpoint reasoning for zero-shot 3D visual grounding.
Relevance: Advances point-cloud/text grounding, important for language-guided 3D perception.

#### [NCGR: Noise-Conditional Gated Rectification for Camera Extrinsic Perturbations in BEV 3D Object Detection](http://arxiv.org/abs/2608.03895v1)
Wenbin Pan et al. | 2026-08-04
Contribution: Introduces a noise-conditional gated rectification mechanism for BEV 3D detection under camera extrinsic perturbation.
Relevance: Relevant to robust 3D perception pipelines, complementing point-cloud-based detection.

### 3D Point Cloud Perception and Tracking

No new papers today.

## Cross-Topic Signals

- Visual token pruning appears in both Multimodal LLM Pruning and general Inference Optimization, suggesting shared techniques for reducing video-token redundancy.
- Test-time scaling ideas now span LLM reasoning and diffusion-model safety, indicating adaptive compute allocation and self-correction are transferable across modalities.
- Robustness is a cross-cutting concern: adversarial patches in VLA, privacy in LLM agent memory, extrinsic perturbation in BEV detection, and group-robust pruning all address distribution shift or attack.
- World-centric and 3D representations recur in VLA tracker distillation, future-scene video generation for driving, and 3D visual grounding, linking perception to action.
- Efficient adaptation via MoE/PEFT and token pruning both target deployment constraints, but at different levels: adapter capacity versus input-token redundancy.

## Priority Reading

#### - [Structure-Aware Robust Fine-Tuning: Defending Vision-Language-Action Robots Against Physical Attention Hijacking](http://arxiv.org/abs/2608.03231v1) — physical adversarial patches are a realistic threat for deployed VLA robots; the paper exposes a new failure mode and proposes a concrete defense.
#### - [Interpretable Adaptive Sampling for LLM Test-Time Scaling](http://arxiv.org/abs/2608.03961v1) — adaptive, inspectable compute allocation is immediately useful for efficient and trustworthy agent reasoning.
#### - [Track4Action: Distilling World-Centric 3D Tracker into Vision-Language-Action Policies](http://arxiv.org/abs/2608.03727v1) — injecting 3D world dynamics into VLA policies is a concrete, underexplored way to improve action generation.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*