# Lab Research Topics Radar 2026-10-08

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 20 new + 0 seen in the last 14 days | Generated: 2026-10-08 01:29 UTC

---

## Today's Overview
- **LLM Agent Engineering**: Three new papers advance uncertainty-guided step-level agent steering, evidence binding for forensic agent-log reconstruction, and situation-conditioned thinking policies for long-term agents.
- **Agent Test-Time Scaling and Self-Improvement**: Two new papers study personalized test-time scaling via amortized agentic policy discovery and turn-taking dynamics between full-duplex speech models in self-play/society loops.
- **LLM Agent Societies**: One new paper models risk-averse multi-population mean-field games, adding uncertainty to large-scale heterogeneous multi-agent equilibria.
- **Vision-Language-Action Models**: Three matched papers progress perception-action bridging, certified VLA inference acceleration, and predictive latent pretraining/policy learning for VLA models.
- **Embodied Navigation**: Three new papers cover risk-certified event-triggered replanning, sign-based visual navigation, and curiosity-driven object ownership for personalized robot assistance.
- **LLM Pruning and Inference Optimization**: Three matched papers address certified VLA acceleration, token-pruning safety vulnerabilities in VLMs, and task-aware dual-importance token pruning for MLLMs.
- **Multimodal LLM Pruning**: Two matched papers target certified VLA inference acceleration and task-aware token pruning with dual importance for efficient MLLMs.
- **Continual Learning**: Three new papers compare PEFT parameterizations for forgetting, mitigate orthogonality in LoRA-based LLM continual learning, and use source-free continual test-time adaptation for liver segmentation.
- **Event-Based Vision**: Two new papers bring binary neural networks to fast event processing and derive photometric stereo from physical irradiance event streams.
- **3D Point Cloud Perception**: One new paper proposes sparse cooperative 3D object detection robust to bandwidth and unreliable cooperation.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [From Uncertainty to Action: Learning to Steer LLM Agents](http://arxiv.org/abs/2610.09115v1)
**Authors:** H. Li, J. Duan, G. Zhu et al. · **Date:** 2026-10-06 · **Contribution:** Investigates whether uncertainty can guide when, where, and how to correct LLM agent trajectories at every non-terminal step. · **Relevance:** Directly addresses step-level steering and correction for LLM agent engineering.
#### [Learning Situation-Conditioned Thinking Policies for Long-Term LLM Agents](http://arxiv.org/abs/2610.09590v1)
**Authors:** H. Su · **Date:** 2026-10-07 · **Contribution:** Learns situation-conditioned thinking policies so long-running agents reuse reasoning experience without unbounded memory/context growth. · **Relevance:** Core method for long-term LLM agent memory and thinking control.
#### [Correct Answers, Unsupported Findings: Evidence Binding in Forensic Reconstruction of LLM Agent Logs](http://arxiv.org/abs/2610.09581v1)
**Authors:** T. Yun, D. Kim, G. Kim et al. · **Date:** 2026-10-07 · **Contribution:** Studies how forensic reconstruction of LLM-agent actions must bind correct findings to preserved evidence records. · **Relevance:** Improves auditing and reliability of LLM agent logs.

### Agent Test-Time Scaling and Self-Improvement
#### [From Pareto to Preference: Personalized Test-Time Scaling via Amortized Agentic Policy Discovery](http://arxiv.org/abs/2610.09684v1)
**Authors:** X. Wang, Z. Liu, T. Zheng et al. · **Date:** 2026-10-07 · **Contribution:** Personalizes test-time scaling by discovering amortized agentic policies that balance accuracy against multiple resource dimensions. · **Relevance:** Directly advances efficient, preference-aware agent test-time scaling.
#### [Coupled but Late: Turn-Taking Between Full-Duplex Speech Models in Unscripted Dialogue](http://arxiv.org/abs/2610.08683v1)
**Authors:** L. Zhu, Y. Lin, Y. Wang et al. · **Date:** 2026-10-06 · **Contribution:** Analyzes turn-taking timing errors in self-play between full-duplex speech models. · **Relevance:** Relevant to self-improvement and agent-society loops where models converse with each other.

### LLM Agent Societies
#### [Beyond Nominal Equilibria: Risk-Averse Multi-Population Mean-Field Games](http://arxiv.org/abs/2610.09244v1)
**Authors:** B. Jeloka, S. Ganguly, P. Tsiotras · **Date:** 2026-10-07 · **Contribution:** Introduces risk-averse multi-population mean-field games that account for uncertainty in representative-agent behavior. · **Relevance:** Provides equilibrium modeling for large heterogeneous multi-agent societies.

## 具身智能
### Vision-Language-Action Models
#### [PAIR: Bridging Perception and Action in Vision-Language-Action Models](http://arxiv.org/abs/2610.09016v1)
**Authors:** K. Feng, G. Sun, A. Li · **Date:** 2026-10-06 · **Contribution:** Addresses the representation transition from scene/instruction understanding to continuous action generation in VLA models. · **Relevance:** Core VLA perception-action gap.
#### [Juno: Taming Predictive Latents for Vision-Language-Action Models](http://arxiv.org/abs/2610.09940v1)
**Authors:** Y. Zhu, C. Xu, Y. Zhang et al. · **Date:** 2026-10-07 · **Contribution:** Adapts JEPA-style predictive latents for VLA pretraining, policy learning, and deployment. · **Relevance:** Directly targets VLA representation learning for action.
#### [CARE: Certifying Acceleration for Vision-Language-Action Inference](http://arxiv.org/abs/2610.08917v1)
**Authors:** R. Liu, T. Zheng, J. Gu et al. · **Date:** 2026-10-06 · **Contribution:** Certifies acceleration for VLA inference that uses action chunking and visual-token pruning. · **Relevance:** Connects VLA deployment with reliable inference optimization.

### Embodied Navigation
#### [Adaptive Risk-Certified Event-Triggered Replanning for Dynamic Navigation](http://arxiv.org/abs/2610.09302v1)
**Authors:** R. R. Suganda, B. Hu · **Date:** 2026-10-07 · **Contribution:** Proposes risk-certified event-triggered replanning for safe navigation under uncertain, non-stationary obstacle predictions. · **Relevance:** Directly addresses safe dynamic navigation.
#### [SiGNgapore - An Interactive Dataset for Sign-based Visual Navigation](http://arxiv.org/abs/2610.09488v1)
**Authors:** N. Zimmerman, J. Loo, Z. Wang et al. · **Date:** 2026-10-07 · **Contribution:** Introduces an interactive dataset for map-free visual navigation using human-oriented navigational signs. · **Relevance:** Supports sign-based embodied navigation in human environments.
#### [COOL: Curiosity-Driven Object Ownership Learning for Personalized Robotic Assistance](http://arxiv.org/abs/2610.09358v1)
**Authors:** S. Huber, R. Hammele, S. Pirk · **Date:** 2026-10-07 · **Contribution:** Learns object ownership via curiosity so robots can ground personalized commands about people’s objects. · **Relevance:** Extends embodied navigation/assistance toward personalized object-level reasoning.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [CARE: Certifying Acceleration for Vision-Language-Action Inference](http://arxiv.org/abs/2610.08917v1)
**Authors:** R. Liu, T. Zheng, J. Gu et al. · **Date:** 2026-10-06 · **Contribution:** Certifies VLA inference acceleration using action chunking and visual-token pruning beyond latency and average success. · **Relevance:** Core to certified inference optimization and pruning for VLA/multimodal models.
#### [Understanding and Mitigating Token-Pruning-Induced Vulnerabilities in VLMs](http://arxiv.org/abs/2610.09703v1)
**Authors:** S. Wang, X. Lyu, S. Yuan et al. · **Date:** 2026-10-07 · **Contribution:** Presents a safety evaluation of token-pruning mechanisms and finds most pruning strategies significantly degrade safety. · **Relevance:** Highlights safety risks in inference-optimized multimodal models.

### Multimodal LLM Pruning
#### [DIPrune: Task-Aware Token Pruning with Dual Importance for Efficient Multimodal Language Models](http://arxiv.org/abs/2610.08341v1)
**Authors:** S. Yang, C. Li, L. Yang et al. · **Date:** 2026-10-06 · **Contribution:** Proposes task-aware token pruning with dual importance to avoid semantic degradation in MLLMs. · **Relevance:** Directly targets efficient multimodal LLM pruning.

### Continual Learning
#### [CoDe-LoRA: Mitigating the Orthogonality Dilemma in Continual Learning of LLMs via Knowledge Consolidation and Decoupling](http://arxiv.org/abs/2610.08312v1)
**Authors:** M. Liu, Q. Fang, Y. He · **Date:** 2026-10-06 · **Contribution:** Mitigates strict orthogonal LoRA limitations in LLM continual learning via knowledge consolidation and decoupling. · **Relevance:** Core LLM continual-learning method.
#### [Are Parameter-Efficient Fine-tuning Methods Really Different?](http://arxiv.org/abs/2610.09122v1)
**Authors:** Y. Li, P. Lu, F. Liu · **Date:** 2026-10-06 · **Contribution:** Compares six PEFT methods across language and diffusion models in relation to performance, forgetting, and pretrained-weight changes. · **Relevance:** Clarifies how PEFT parameterizations affect continual-learning behavior.
#### [CIRSeg: Coarse-to-Fine Intensity-Robust Liver Segmentation with Source-Free Continual Test-Time Adaptation](http://arxiv.org/abs/2610.09784v1)
**Authors:** R. Xu, M. Gao, S. Luo et al. · **Date:** 2026-10-07 · **Contribution:** Uses source-free continual test-time adaptation for robust liver segmentation under scanner/vendor intensity shifts. · **Relevance:** Applies continual adaptation to medical imaging domain shift.

## 视觉感知
### Event-Based Vision
#### [Bringing BNNs to Fast Event Processing](http://arxiv.org/abs/2610.09873v1)
**Authors:** P. Longour, J. Moreau, F. Davoine · **Date:** 2026-10-07 · **Contribution:** Explores binary neural networks for efficient event-camera processing on resource-constrained devices. · **Relevance:** Directly combines event-based vision with efficient binary models.
#### [PIE-PS: Photometric Stereo from Physical Irradiance Event Streams](http://arxiv.org/abs/2610.08188v1)
**Authors:** X. Meng, G. Li, J. Li et al. · **Date:** 2026-10-06 · **Contribution:** Derives photometric stereo from raw event streams using a physical irradiance event-trigger model. · **Relevance:** Advances event-based 3D/lighting perception.

### 3D Point Cloud Perception
#### [Sparse2comm: Towards Robust Cooperative 3D Object Detection](http://arxiv.org/abs/2610.08573v1)
**Authors:** L. Yang, B. Li, C. Lin et al. · **Date:** 2026-10-06 · **Contribution:** Proposes sparse cooperative 3D object detection robust to limited bandwidth and unreliable cooperation. · **Relevance:** Directly addresses cooperative 3D point-cloud perception for autonomous driving.

### 3D Point Cloud Perception and Tracking
No new papers today.

## Cross-Topic Signals
- Pruning and inference optimization are becoming safety- and certification-aware: CARE certifies VLA acceleration, token-pruning work exposes VLM safety degradation, and DIPrune adds task-aware dual importance. This links VLA, LLM pruning, and multimodal pruning.
- LLM agent control is shifting toward step-level uncertainty, situation-conditioned thinking policies, and evidence-bound logs, connecting agent engineering, long-horizon memory, and continual self-improvement.
- Multi-agent/self-play appears in both LLM Agent Societies and Agent Test-Time Scaling: risk-averse mean-field equilibria for heterogeneous populations and turn-taking between full-duplex speech models.
- Embodied navigation increasingly combines risk certification, human-designed sign cues, and personalized object ownership, suggesting richer navigation pipelines that depend on VLA perception-action and multimodal grounding.
- Continual learning and efficient adaptation recur across PEFT comparison, orthogonal LoRA, and source-free test-time adaptation, offering methods for deployment under domain shift and limited memory.

## Priority Reading
#### - [CARE: Certifying Acceleration for Vision-Language-Action Inference](http://arxiv.org/abs/2610.08917v1): Directly connects VLA inference acceleration with certification, a cross-cutting concern for pruning, multimodal efficiency, and reliable embodied deployment.
#### - [From Uncertainty to Action: Learning to Steer LLM Agents](http://arxiv.org/abs/2610.09115v1): Core LLM-agent engineering paper on when, where, and how to correct agent trajectories using uncertainty.
#### - [DIPrune: Task-Aware Token Pruning with Dual Importance for Efficient Multimodal Language Models](http://arxiv.org/abs/2610.08341v1): Provides a concrete task-aware multimodal token-pruning method central to MLLM efficiency and visual-token compression.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*