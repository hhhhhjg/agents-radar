# Lab Research Topics Radar 2026-07-24

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 10 configured topics | 5 new + 0 seen in the last 14 days | Generated: 2026-07-23 22:51 UTC

---

# Research Topics Radar

## Today's Overview

- **LLM Agent 与多智能体 / LLM Agent Engineering**: No new papers today
- **LLM Agent 与多智能体 / Agent Test-Time Scaling and Self-Improvement**: Two new papers advance test-time scaling and self-evolution in language and audio reasoning – one introduces a surrogate policy for latent reasoning (SLPO) and the other proposes a label-free self-evolution method for fine-grained audio reasoning (Audio-Zero).
- **LLM Agent 与多智能体 / LLM Agent Societies**: No new papers today
- **具身智能 / Vision-Language-Action Models**: No new papers today
- **具身智能 / Embodied Navigation**: Three new papers – a benchmark for indoor-to-outdoor navigation (NavVerse), a cross-embodiment safety-aware policy (EA-Nav), and a test-time scaling approach for UAV VLN (No Training, Better Flights). All focus on bridging simulation gaps, embodiment awareness, or inference-time improvement.
- **模型压缩与持续学习 / LLM Pruning and Inference Optimization**: No new papers today
- **模型压缩与持续学习 / Multimodal LLM Pruning**: No new papers today
- **模型压缩与持续学习 / Continual Learning**: No new papers today
- **视觉感知 / Event-Based Vision**: No new papers today
- **视觉感知 / 3D Point Cloud Perception**: No new papers today

## Research Areas

### Agent Test-Time Scaling and Self-Improvement

#### [SLPO: Scaling Latent Reasoning via a Surrogate Policy](http://arxiv.org/abs/2607.19691v1)
Runyang You, Zhiyuan Liu, Yongqi Li et al. | 2026-07-22
Contribution: Proposes a reinforcement learning framework with a surrogate policy that enables test-time scaling in latent reasoning without decoding intermediate tokens, reducing computational cost compared to explicit Chain-of-Thought.
Relevance: Directly addresses test-time scaling for reasoning agents, a core focus of this topic.

#### [Audio-Zero: Label-Free Self-Evolution for Fine-Grained Audio Reasoning](http://arxiv.org/abs/2607.20166v1)
Siqian Tong, Xuan Li, Chaozhuo Li et al. | 2026-07-22
Contribution: Introduces a self-evolution approach that uses per-step self-rewarding and curriculum scaling to improve fine-grained audio reasoning (e.g., event order, duration) in LALMs without external labels.
Relevance: Demonstrates a label-free self-improvement method for audio agents, expanding the scope of agent self-evolution beyond text-based reasoning.

### Embodied Navigation

#### [NavVerse: Benchmarking Indoor-to-Outdoor Embodied Navigation in Continuous Robot Simulation](http://arxiv.org/abs/2607.19695v1)
Junzhe Wu, Yue Hu, Zeyu Han et al. | 2026-07-22
Contribution: Introduces a benchmark and continuous simulation framework for evaluating robots that must navigate from indoor to outdoor environments in a single episode, addressing a gap in existing separate indoor/outdoor benchmarks.
Relevance: Provides a new evaluation standard for embodied navigation that aligns with real-world deployment scenarios (delivery, emergency).

#### [EA-Nav: Learning Safe Visual Navigation Policies with Embodiment Awareness](http://arxiv.org/abs/2607.19880v1)
Jialu Zhang, Yong Du, Xianda Guo et al. | 2026-07-22
Contribution: Presents a cross-embodiment navigation policy that uses embodiment-conditioned action prediction and a safety critic to handle ambiguous visual observations across different robot morphologies.
Relevance: Tackles the key challenge of embodiment awareness in visual navigation, directly relevant to safe policy learning for varied agents.

#### [No Training, Better Flights: Test-Time Scaled VLMs for UAV Navigation](http://arxiv.org/abs/2607.19288v1)
Feinan Cheng, Dongliang Xu, Wenli Nong et al. | 2026-07-21
Contribution: Applies test-time scaling to Vision-Language Models for UAV navigation, improving robustness in complex scenarios by allowing multiple inference passes without additional training.
Relevance: Bridges test-time scaling techniques with embodied navigation, showing that inference-time compute can boost VLM-based drone navigation performance.

### LLM Agent Engineering

No new papers today

### LLM Agent Societies

No new papers today

### Vision-Language-Action Models

No new papers today

### LLM Pruning and Inference Optimization

No new papers today

### Multimodal LLM Pruning

No new papers today

### Continual Learning

No new papers today

### Event-Based Vision

No new papers today

### 3D Point Cloud Perception

No new papers today

## Cross-Topic Signals

- **Test-time scaling crosses domains**: Two papers (SLPO for latent reasoning, “No Training, Better Flights” for UAV navigation) both exploit test-time compute scaling to improve agent performance without training, suggesting a unifying trend across reasoning and embodied tasks.
- **Self-evolution without labels**: Audio-Zero and SLPO both avoid expensive human/external supervision – one via self-rewarding, the other via a surrogate policy – indicating a growing emphasis on autonomous agent improvement.
- **Embodiment awareness meets safety**: EA-Nav explicitly conditions policy on embodiment and incorporates a safety critic, which could inform safe multi-agent or heterogeneous robot deployment – linking to LLM Agent Societies and safety considerations.
- **Benchmarking bridges simulation and reality**: NavVerse focuses on continuous indoor-to-outdoor scenarios, highlighting the need for more realistic simulation environments that can be reused across navigation, planning, and agent evaluation.

## Priority Reading

#### **SLPO: Scaling Latent Reasoning via a Surrogate Policy** – The surrogate policy approach offers a novel way to achieve test-time scaling in latent space without token-by-token decoding, which could significantly reduce inference costs for reasoning agents. High methodological value for the lab’s core interest in Agent Test-Time Scaling.
#### **EA-Nav: Learning Safe Visual Navigation Policies with Embodiment Awareness** – Embodiment-aware policies are critical for deploying the same policy across different robot platforms, directly relevant to the lab’s embodied navigation focus. The safety critic component adds practical robustness.
#### **Audio-Zero: Label-Free Self-Evolution for Fine-Grained Audio Reasoning** – Extends agent self-improvement to the audio modality, which is underexplored. The curriculum scaling and self-rewarding techniques may be transferable to other multimodal agent settings.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*