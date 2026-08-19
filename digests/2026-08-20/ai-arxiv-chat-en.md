# Lab Research Topics Radar 2026-08-20

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 13 new + 0 seen in the last 14 days | Generated: 2026-08-19 22:18 UTC

---

# Research Topics Radar (2026-08-20)

## Today's Overview

- **LLM Agent 与多智能体 / LLM Agent Engineering**: Three new papers matched; two are strong — task-aware harness provisioning for mission-critical infrastructure and the HarnessRisk lifecycle-oriented safety benchmark. Agentic ESOpt also matched here but is covered under Test-Time Scaling and Self-Improvement because its focus is long-horizon agent optimization with minimal GPU requirements.
- **LLM Agent 与多智能体 / Agent Test-Time Scaling and Self-Improvement**: Two new matches returned, but only Agentic ESOpt is highly relevant; the concentration-game theory paper is a weak match and is omitted from the topic list.
- **LLM Agent 与多智能体 / LLM Agent Societies**: No new papers today.
- **具身智能 / Vision-Language-Action Models**: Three strong new papers — stereo evidence routing for humanoid VLA, visual-cue following safety benchmarking, and inference-time attention steering for VLA driving models.
- **具身智能 / Embodied Navigation**: Two strong new papers — diagnostic analysis of conditional branching in VLN and Embodied-Navigator, a point/think/memorize/align approach; the legal RAG paper matched only on surface keywords and is omitted.
- **模型压缩与持续学习 / LLM Pruning and Inference Optimization**: No new papers today.
- **模型压缩与持续学习 / Multimodal LLM Pruning**: No new papers today.
- **模型压缩与持续学习 / Continual Learning**: Three new papers — spaced repetition for continual pre-training, Chain-of-Experience for continual LLM improvement, and an empirical study of VLM specialization/transfer for analog gauge reading.
- **视觉感知 / Event-Based Vision**: No new papers today.
- **视觉感知 / 3D Point Cloud Perception**: No new papers today.
- **视觉感知 / 3D Point Cloud Perception and Tracking**: No new papers today.

## Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [Task-Aware Harness Provisioning for LLM Agents in Mission-Critical Infrastructure Operations](http://arxiv.org/abs/2608.17433v1)

Authors: L. Lin, Q. Zhang, Z. Zhu et al. | Date: 2026-08-18

Contribution: Proposes task-aware provisioning of agent harnesses so mission-critical infrastructure agents receive only the information, tools, and actions relevant to each task instead of a fixed comprehensive harness.

Relevance: Directly targets safe and efficient LLM agent engineering in high-stakes deployment, aligning with the lab's focus on agent harness design.

#### [HarnessRisk: A Lifecycle-Oriented Benchmark for Agent Harness Safety](http://arxiv.org/abs/2608.17597v1)

Authors: Y. Bai, J. Duan, J. Peng et al. | Date: 2026-08-18

Contribution: Introduces a lifecycle-oriented benchmark for evaluating LLM agent harness safety across tools, extensions, persistent state, permissions, and external actions.

Relevance: Provides a structured evaluation framework for agent harness safety, complementing task-aware provisioning work in the lab's LLM agent portfolio.

### Agent Test-Time Scaling and Self-Improvement

#### [Agentic ESOpt: Fine-Tuning Long-Horizon LLM Agents with Minimal GPU Requirements](http://arxiv.org/abs/2608.17310v1)

Authors: Z. Zheng, R. Chen, Y. Ba et al. | Date: 2026-08-18

Contribution: Proposes an optimization method for long-horizon LLM agents that avoids heavyweight backpropagation-based RL and achieves fine-tuning with minimal GPU requirements under branching interactions and sparse rewards.

Relevance: Addresses cost-efficient self-improvement of long-horizon agent policies, fitting the lab's interest in scalable LLM agent optimization even though it is closer to training than test-time inference scaling.

### LLM Agent Societies

No new papers today.

## 具身智能

### Vision-Language-Action Models

#### [EATR-Stereo: Embodiment-Aware Routing of Paired Stereo Evidence for Humanoid Vision-Language-Action Control](http://arxiv.org/abs/2608.17453v1)

Authors: S. Wu, R. Zhao, F. Yang et al. | Date: 2026-08-18

Contribution: Introduces an embodiment-aware routing mechanism for paired stereo evidence in humanoid VLA control, exploiting complementary stereo views while remaining compatible with pretrained representations.

Relevance: Strongly relevant to the lab's VLA research, particularly for humanoid robots with head-mounted stereo cameras.

#### [LIBERO-VIFO: Benchmarking the Capability and Safety of Visual Cue Following in Vision-Language-Action Models](http://arxiv.org/abs/2608.17600v1)

Authors: Z. Qian, R. Yan, A. J. Wang et al. | Date: 2026-08-18

Contribution: Proposes a benchmark for evaluating whether VLA models can follow authorized visual cues while disregarding unauthorized ones, going beyond final task success.

Relevance: Directly addresses instruction-following and safety in VLA models, relevant to both the lab's VLA and agent safety interests.

#### [Inference-Time Attention Steering for Vision-Language-Action Driving Models](http://arxiv.org/abs/2608.17095v1)

Authors: D. N. Prasad, L. Ullrich, K. Graichen | Date: 2026-08-17

Contribution: Studies a bounded additive pre-softmax attention bias that redirects VLA driving models' attention toward safety-critical actors at inference time without retraining.

Relevance: Presents a practical test-time intervention for VLA models, connecting the lab's VLA work with inference-time control.

### Embodied Navigation

#### [If, Then, Otherwise: Diagnosing Conditional Branching in Vision-Language Navigation](http://arxiv.org/abs/2608.17318v1)

Authors: S. Lee, N. P. Bhatt, P. Samineni et al. | Date: 2026-08-18

Contribution: Diagnoses whether vision-language navigation agents can follow instructions that branch conditionally on observed environment states rather than only route-like instructions toward a fixed goal.

Relevance: Expands evaluation of embodied navigation agents to realistic conditional instructions, a strong fit for the lab's navigation sub-topic.

#### [Embodied-Navigator: Point, Think, Memorize, and Align for Efficient Navigation](http://arxiv.org/abs/2608.17512v1)

Authors: H. Feng, S. Chen, X. Liu et al. | Date: 2026-08-18

Contribution: Proposes an embodied navigation method that aligns VLMs with natural action spaces through point, think, memorize, and align stages, addressing rigid reasoning schedules and 2D pretraining misalignment.

Relevance: Tackles core design challenges in VLM-based embodied navigation, directly relevant to the lab's navigation research focus.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

No new papers today.

### Multimodal LLM Pruning

No new papers today.

### Continual Learning

#### [When to Review: Spaced Repetition for Continual Pre-Training of Language Models](http://arxiv.org/abs/2608.17530v1)

Authors: A. Atreya, D. Batra, Y. K. Mantri et al. | Date: 2026-08-18

Contribution: Frames continual pre-training as adaptive spaced repetition, scheduling reviews of old examples based on how quickly they are forgotten rather than sampling uniformly.

Relevance: Offers a practical replay-scheduling strategy for reducing catastrophic forgetting in LLM continual learning.

#### [Chain-of-Experience for Continual LLM Improvement](http://arxiv.org/abs/2608.18027v1)

Authors: H. Tu, Y. Fang, Y. Wang et al. | Date: 2026-08-18

Contribution: Introduces a setting and method for LLMs to learn from iterative experience at test time through a Chain-of-Experience mechanism, rather than being evaluated only in a static setting.

Relevance: Bridges continual learning and inference-time self-improvement, relevant to the lab's continual learning and agent self-improvement interests.

#### [Vision-Language Models for Analog Gauge Reading: An Empirical Study of Specialization, Transfer and Reliability](http://arxiv.org/abs/2608.17723v1)

Authors: A. Mueez, A. Baranwal, J. Chaj-Mejia et al. | Date: 2026-08-18

Contribution: Empirically evaluates VLM specialization, transfer, and reliability for direct numerical reading of single-target analog gauge images.

Relevance: Application-focused, but its transfer and specialization analysis informs how continual learning and domain adaptation behave in VLM-based industrial perception.

## 视觉感知

### Event-Based Vision

No new papers today.

### 3D Point Cloud Perception

No new papers today.

### 3D Point Cloud Perception and Tracking

No new papers today.

## Cross-Topic Signals

- **Selective steering without retraining**: Inference-time attention steering for VLA driving models and HarnessRisk's tool/permission controls both modify agent behavior at inference time, one at the attention level and one at the harness level.
- **Authorized vs. unauthorized signals**: LIBERO-VIFO's visual-cue-following safety benchmark parallels task-aware harness provisioning — both require agents to distinguish permissible from impermissible instructions or actions.
- **Experience replay across timescales**: Spaced-repetition continual pre-training and Chain-of-Experience both treat structured reuse of past experience as central to improving LLMs, a principle that also applies to LLM agent self-improvement.
- **Long-horizon efficiency and alignment**: Agentic ESOpt, EATR-Stereo, and Embodied-Navigator all address long-horizon decision-making, either by reducing optimization cost, routing multimodal evidence, or aligning VLMs with natural action spaces.
- **VLM pretraining priors in embodiment**: EATR-Stereo and Embodied-Navigator both emphasize preserving or aligning with 2D pretrained VLM representations when moving into embodied settings, a shared constraint for VLA and navigation agents.

## Priority Reading

- **[EATR-Stereo](http://arxiv.org/abs/2608.17453v1)** — Humanoid VLA is a core lab interest, and this paper directly addresses how to exploit stereo evidence without breaking pretrained representations.
- **[HarnessRisk](http://arxiv.org/abs/2608.17597v1)** — Agent harness safety is rapidly becoming critical for deployment; this lifecycle benchmark gives a concrete evaluation target for the lab's LLM agent systems.
- **[Agentic ESOpt](http://arxiv.org/abs/2608.17310v1)** — Proposes a low-GPU route to improving long-horizon agent policies, highly relevant to the lab's LLM agent and self-improvement agenda.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*