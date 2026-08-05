# Lab Research Topics Radar 2026-08-06

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 37 new + 15 seen in the last 14 days | Generated: 2026-08-05 22:53 UTC

---

# Research Topics Radar — 2026-08-06

## Today's Overview

- **LLM Agent Engineering** — 10 new papers: memory and privacy hardening (DP-MemView, MAFIA, LeanMem, Verifiable Memory), agent benchmarks (EduClaw-Bench, DiagChain, ContinualSkillBench), sequential decision-making (Rada & Lisý), input-perturbation robustness (Hu et al.), and clinical decision agents (Bolton & Torr).
- **Agent Test-Time Scaling and Self-Improvement** — 3 new papers: a reproducibility-focused survey of TTS inference regimes, interpretable adaptive sampling budgets, and TTS for safe text-to-image generation.
- **LLM Agent Societies** — 1 new paper: history-aware meta-policy delegation in heterogeneous multi-agent RL.
- **Vision-Language-Action Models** — 8 new papers: physical adversarial robustness (Structure-Aware, DRIFT), 3D supervision (Track4Action), proprioceptive-state design (Zhao et al.), value estimation (ValueFormer), adaptive replanning (Continue or Replan), unified edge/cloud inference (PhyAI), and diffusion navigation (UniNav).
- **Embodied Navigation** — 2 new papers: video-generation future-scene prediction for driving (SUV) and multi-room Manhattan layout estimation (PolyLayout).
- **LLM Pruning and Inference Optimization** — New papers on compression-score reliability, RoPE-wavelength attention windows, and serving frameworks; visual-token-pruning papers are reported under Multimodal LLM Pruning.
- **Multimodal LLM Pruning** — 2 new papers: GSTEP and Adaptive Two-Stage visual token pruning for efficient video-LLM inference.
- **Continual Learning** — 3 new papers: MoE-based instance-adaptive LoRA generation, domain-specific VLM fine-tuning (OliveGemma), and RL with evolving rubrics for audio reasoning.
- **Event-Based Vision** — 1 new paper: PLS-based event-camera/odometry calibration under ground-motion constraints.
- **3D Point Cloud Perception** — 4 new papers: Mamba-distilled lightweight LiDAR detection, BEV extrinsic-perturbation rectification, zero-shot 3D visual grounding, and test-time adaptation for laparoscopic registration.
- **3D Point Cloud Perception and Tracking** — No new papers today.

## LLM Agent and Multi-Agent

### LLM Agent Engineering

#### [DP-MemView: A Memory Interface for Attribute-Level Transcript Privacy in Long-Term LLM Agents](http://arxiv.org/abs/2608.03130v1)
Kim, Min, Edemacu et al. | 2026-08-04 — Differentially private memory interface preventing cumulative attribute leakage. Adds transcript-level privacy guarantees to long-term agent memory.

#### [MAFIA: Query-Only Memory Attacks via Probing and Factual Injection against Audited LLM Agents](http://arxiv.org/abs/2608.03844v1)
Chen, Gao, Li et al. | 2026-08-04 — Query-only memory poisoning that remains effective even under auditing. Exposes a persistent attack surface in agent memory modules.

#### [LeanMem: Simple and Efficient Long-Term Memory for LLM Agents](http://arxiv.org/abs/2608.03463v1)
Liao, Wu, Hou et al. | 2026-08-04 — Long-term memory design avoiding uniform summarization of heterogeneous dialogue. Reduces token consumption in sustained agent interaction.

#### [Verifiable Memory: Learning Unified Memory Management with Local and Global Verifiers for Large Language Model Agents](http://arxiv.org/abs/2608.03137v1)
Sun, Wang, Li et al. | 2026-08-04 — Learns unified short/long-term memory management with local and global verifiers. Replaces hand-crafted memory policies in long-horizon agents.

#### [DiagChain: A Diagnostic Benchmark for Evaluating LLM Agents on Evidence-Grounded Attack Chain Reconstruction](http://arxiv.org/abs/2608.03591v1)
Liu, Han, Zhang et al. | 2026-08-04 — Benchmark for evidence-grounded reconstruction of ordered attacker actions. Provides process-level, not just aggregate, evaluation of security agents.

#### [ContinualSkillBench: Can LLM Agents Truly Evolve Their Capabilities?](http://arxiv.org/abs/2608.03874v1)
Guan, Wang, Yang et al. | 2026-08-04 — Benchmark probing whether agents genuinely evolve and reuse external skills. Directly connects agent engineering with continual improvement.

#### [EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners](http://arxiv.org/abs/2608.03206v1)
Lee, Lee, Jeong et al. | 2026-08-04 — Long-horizon tutoring benchmark with simulated learners over an LMS. Stress-tests agent memory, planning, and skill evolution.

#### [Towards Improving Sequential Decision-Making in LLM Agents via Experience Memory](http://arxiv.org/abs/2608.03420v1)
Rada & Lisý | 2026-08-04 — Studies experience memory for LLM agents in two-player zero-sum games. Ground-truth evaluation of memory benefits in sequential decisions.

### Agent Test-Time Scaling and Self-Improvement

#### [Test-Time Scaling in Reasoning LLMs: Inference Regimes, Evaluation, and Reproducibility](http://arxiv.org/abs/2608.04001v1)
Hariri, Chen, Shahini et al. | 2026-08-04 — Survey of TTS inference regimes, evaluation, and reproducibility. Provides a taxonomy and guidance for positioning TTS research.

#### [Interpretable Adaptive Sampling for LLM Test-Time Scaling](http://arxiv.org/abs/2608.03961v1)
Kashaniyan & Jannesari | 2026-08-04 — Learns interpretable per-query compute budgets instead of fixed sampling budgets. Makes TTS compute allocation adaptive and inspectable.

#### [Test-Time Scaling for Safe Text-Guided Image Generation via Intermediate Clean Estimates](http://arxiv.org/abs/2608.03284v1)
Sakurai, Yan & Xu | 2026-08-04 — Uses TTS with intermediate clean estimates to enforce safety in text-to-image diffusion. Extends TTS methods beyond reasoning into multimodal safety.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [SearchMaster: Grounded and Regulated Self-Play for Search Agents](http://arxiv.org/abs/2608.01822v1)**
Tan, Cao, Wang et al. | 2026-08-03 — Self-play pipeline generating multi-hop search tasks and trajectories. Enables self-improvement without human demonstrations or stronger teachers.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [CoEvoKG: Co-Evolving Knowledge Graphs with Self-Evolving Search Agents](http://arxiv.org/abs/2608.01904v1)**
Li, Fu, Ai et al. | 2026-08-03 — Reuses knowledge gained during successful searches by co-evolving a knowledge graph. Closes a self-improvement loop with structured memory.

### LLM Agent Societies

#### [History Matters: Meta-policy Delegation with Heterogeneous Multi-agent Reinforcement Learning](http://arxiv.org/abs/2608.03833v1)
Lu, Mudireddy, Alqahtani et al. | 2026-08-04 — History-aware meta-policy delegation among heterogeneous agents with different capabilities and costs. Models when and to whom agents should delegate in collaborative systems.

## Embodied Intelligence

### Vision-Language-Action Models

#### [Structure-Aware Robust Fine-Tuning: Defending Vision-Language-Action Robots Against Physical Attention Hijacking](http://arxiv.org/abs/2608.03231v1)
Zhang, Yin, Yang et al. | 2026-08-04 — Identifies policy-critical action attention hijacking and proposes structure-aware robust fine-tuning. New physical-world attack mechanism and defense for VLA manipulation.

#### [Track4Action: Distilling World-Centric 3D Tracker into Vision-Language-Action Policies](http://arxiv.org/abs/2608.03727v1)
Wang, Wang, Lin et al. | 2026-08-04 — Distills a world-centric 3D tracker into VLA policies to add geometry/motion supervision. Teaches action effects on the 3D world beyond action labels.

#### [How Should Vision-Language-Action Models Use Proprioceptive State?](http://arxiv.org/abs/2608.03052v1)
Zhao, Chen, Rao et al. | 2026-08-04 — Compares text/prefix/action-expert wiring and frame history for proprioception in VLAs. Answers a core architectural design question for VLA models.

#### [ValueFormer: A Causal Transformer Value Function with Stage-Aware Labels for Semi-Autonomous Vision-Language-Action Policies](http://arxiv.org/abs/2608.02958v1)
Sa, Stulov & Bhageria | 2026-08-03 — Causal value function with stage-aware labels estimating rollout progress. Detects silent failures in behavior-cloned VLA policies.

#### [DRIFT: Derailing Denoising Trajectories of Flow-Matching VLAs with Adversarial Patch Attack](http://arxiv.org/abs/2608.03207v1)
Tae & Lee | 2026-08-04 — Shows flow-matching VLAs remain vulnerable to adversarial patches despite claimed robustness. Challenges the perceived robustness of pi0-style policies.

#### [Continue or Replan? Bernoulli-Continuation Policy Learning for Adaptive Horizon Execution](http://arxiv.org/abs/2608.03483v1)
Xu, Liu, Luo et al. | 2026-08-04 — Learns a Bernoulli continuation policy for adaptive replanning in chunked VLAs. Removes fixed periodic replanning boundaries.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [ChainVLA: Chaining Vision-Language-Action Queries through a Unified Execution State for Long-Horizon Manipulation](http://arxiv.org/abs/2608.02326v2)**
Huang, Bu, Xiong et al. | 2026-08-03 — Chains VLA queries through a unified execution state for long-horizon tasks. Preserves context across repeated replanning.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [Grounded Semantic Re-Binding for Robust Instruction Generalization in Vision-Language-Action Models](http://arxiv.org/abs/2608.02497v1)**
Yin & Zhang | 2026-08-03 — Fixes paraphrase brittleness via grounded semantic re-binding. Data-free robustness for VLA instruction generalization.

### Embodied Navigation

#### [SUV: Future Scene Understanding as Video Generation for End-to-End Driving](http://arxiv.org/abs/2608.03084v1)
Yuan, Fu, Zhu et al. | 2026-08-04 — Uses video generation as a shared future-scene predictor for end-to-end driving. Replaces task-specific heads with a scalable generator.

#### [PolyLayout: Multi-room Manhattan Layout Estimation](http://arxiv.org/abs/2608.03323v1)
Hanning, Liu, Pautrat et al. | 2026-08-04 — Estimates multi-room Manhattan layouts from multi-view imagery. Relaxes single-room assumptions for indoor scene understanding.

## Model Compression and Continual Learning

### LLM Pruning and Inference Optimization

#### [When Compression Scores Cannot Decide: Information Boundaries for Group-Robust LLM Pruning](http://arxiv.org/abs/2608.02940v1)
Zhang | 2026-08-03 — Models information boundaries where reproducible compression scores select wrong candidates. Cautions against score-only validation of pruning decisions.

#### [ATFlash: Per-RoPE-Wavelength Attention Windows for Compute/Memory-Efficient LLM Inference](http://arxiv.org/abs/2608.02947v1)
Hayashi, Mukunoki, Hoshino et al. | 2026-08-03 — Prunes query-key attention using per-RoPE-wavelength distance windows. Structure-aligned sparsity for efficient LLM inference.

#### [LLM Serving in the Wild: An Empirical Study of Frameworks, Methods, and System Designs](http://arxiv.org/abs/2608.03036v1)
Majidi, Morovati, Khomh et al. | 2026-08-04 — Empirical study of LLM serving frameworks and system designs. Maps practical inference-optimization trade-offs.

### Multimodal LLM Pruning

#### [GSTEP: Global Spatio-Temporal Density-Driven Visual Token Pruning for Efficient Video Large Language Models](http://arxiv.org/abs/2608.03083v1)
Zhang, Zhu, Zhang et al. | 2026-08-04 — Global spatio-temporal density-driven token pruning for VideoLLMs. Cuts redundant video tokens while preserving understanding.

#### [Adaptive Two-Stage Visual Token Pruning for Efficient Inference in Video-Language Models](http://arxiv.org/abs/2608.03112v1)
Regmi, Chen, Zhang et al. | 2026-08-04 — Two-stage adaptive visual token pruning for video-language inference. Targets resource-constrained edge and real-time applications.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [ET-Prune: Evidence-Aware Dynamic Budgeting for Visual Token Pruning in Text-Rich MLLMs](http://arxiv.org/abs/2608.01979v1)**
Ding, Li, Liu et al. | 2026-08-03 — Evidence-aware dynamic token budgets for text-rich MLLMs. Avoids pruning decisive OCR evidence.

### Continual Learning

#### [MoEGen: Mixture-of-Experts for Instance-Adaptive LoRA Generation](http://arxiv.org/abs/2608.03275v1)
Zeng, Lu, Li et al. | 2026-08-04 — MoE-based LoRA generation without storing full LoRA experts per instance. Keeps adapter storage constant while increasing PEFT capacity.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [Z-PEFT: Zero-shot Backdoor Detection in Parameter-Efficient Fine-Tuning via Canonical Spectral Signatures](http://arxiv.org/abs/2608.02271v1)**
Pitzalis, Shenaj, Cignoni et al. | 2026-08-03 — Zero-shot backdoor detection in PEFT models via spectral signatures. Security for downloaded fine-tuned adapters.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 **[SEEN IN THE LAST 14 DAYS] [Learning What to Remember: Test-Time Training via Context Distillation](http://arxiv.org/abs/2608.01672v1)**
Wang, Dang, Zhu et al. | 2026-08-03 — TTT via context distillation selects what to retain for long-context modeling. Online memory adaptation during inference.

## Visual Perception

### Event-Based Vision

#### [PLS-Calib: A Partial Least Squares Framework for Event Camera and Odometry Calibration under Ground Motion Constraints](http://arxiv.org/abs/2608.03296v1)
Li, Li, Wu et al. | 2026-08-04 — PLS-based extrinsic rotation calibration for ground-constrained robots. Calibrates event cameras without full 6-DoF excitation.

### 3D Point Cloud Perception

#### [Lightweight 3D Object Detection via Mamba-Based Knowledge Distillation](http://arxiv.org/abs/2608.03490v1)
Ninh, Pham, Nguyen et al. | 2026-08-04 — Distills complex LiDAR detectors into lightweight Mamba-based models. Balances accuracy and efficiency for onboard perception.

#### [NCGR: Noise-Conditional Gated Rectification for Camera Extrinsic Perturbations in BEV 3D Object Detection](http://arxiv.org/abs/2608.03895v1)
Pan, Liu, Luo et al. | 2026-08-04 — Gated rectification of spatial cross-attention under extrinsic noise. Improves robustness to camera mis-calibration in BEV detection.

#### [TDVR: Joint Text Disambiguation and Viewpoint Reasoning for Zero-Shot 3D Visual Grounding](http://arxiv.org/abs/2608.03763v1)
Du, Wang, Li et al. | 2026-08-04 — Training-free text disambiguation and viewpoint reasoning for zero-shot 3D grounding. Handles ambiguous queries and deficient viewpoints.

#### [Test Time Adaptation Methods for Point Cloud Registration in Laparoscopic Surgery](http://arxiv.org/abs/2608.02883v1)
Bodelot, Belharbi & Granger | 2026-08-03 — Test-time adaptation for sim-to-real organ registration. Bridges synthetic training and real intraoperative data.

## Cross-Topic Signals

- **Adaptive compute is spreading across modalities**: interpretable adaptive sampling for LLM TTS, TTS for safe image generation, and Bernoulli-based adaptive replanning in VLA robots all allocate inference compute by difficulty or progress instead of fixed budgets.
- **Visual token pruning is the emerging efficiency lever**: GSTEP and Adaptive Two-Stage extend MLLM pruning ideas (ET-Prune, DiffPrune) to video LLMs, linking multimodal compression to long-context and embodied inference costs.
- **Agent memory is both capability and attack surface**: privacy (DP-MemView), poisoning (MAFIA), and management (LeanMem, Verifiable Memory) papers converge on memory as the critical frontier for agent reliability and security.
- **Robustness recurs across embodied and agentic systems**: physical adversarial patches for VLA policies (Structure-Aware, DRIFT) parallel query-only memory attacks on agents (MAFIA) and backdoors in PEFT (Z-PEFT) — all evaluate constrained, realistic attackers.
- **Self-improvement requires verification**: SearchMaster and CoEvoKG build self-play loops, while ContinualSkillBench asks whether agents truly evolve skills; together they emphasize measuring genuine capability gain.

## Priority Reading

1. **Test-Time Scaling in Reasoning LLMs** (Hariri et al., [2608.04001](http://arxiv.org/abs/2608.04001v1)) — Survey clarifying inference regimes, evaluation, and reproducibility; essential grounding for the lab's TTS/self-improvement agenda.
2. **How Should VLA Models Use Proprioceptive State?** (Zhao et al., [2608.03052](http://arxiv.org/abs/2608.03052v1)) — Direct architectural guidance for VLA policy design, a central lab interest with immediate design implications.
3. **When Compression Scores Cannot Decide** (Zhang, [2608.02940](http://arxiv.org/abs/2608.02940v1)) — Methodological warning about score-based pruning selection that should inform how the lab validates compression results.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*