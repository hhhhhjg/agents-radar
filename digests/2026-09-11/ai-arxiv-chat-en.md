# Lab Research Topics Radar 2026-09-11

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 12 new + 0 seen in the last 14 days | Generated: 2026-09-10 23:37 UTC

---

**Today's Overview**
- **LLM Agent Engineering**: 3 new papers cover enterprise-agent benchmarking, robust prompt/harness evolution, and multi-agent graph reasoning.
- **Agent Test-Time Scaling and Self-Improvement**: 2 new papers explore self-play code distillation for black-box optimization and reality-settled reward for verification.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: 3 new papers advance frequency-conditioned action generation, time-frequency action-chunk modeling, and physical long-horizon deformable manipulation benchmarking.
- **Embodied Navigation**: No new papers today.
- **LLM Pruning and Inference Optimization**: No new papers today; the cross-listed MLLM token-pruning paper is assigned to Multimodal LLM Pruning.
- **Multimodal LLM Pruning**: 2 new papers cover sample-adaptive vision token pruning and trajectory-robust token admission for GUI agents.
- **Continual Learning**: 2 new papers provide evaluation settings for transit-kiosk LLM runtimes and Bangla dialectal LLM adaptation.
- **Event-Based Vision**: No new papers today.
- **3D Point Cloud Perception**: No new papers today.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [RobustSGPO: Search-Space Control for Agent Harness Evolution](http://arxiv.org/abs/2609.09646v1)
Z. Zhao, J. Shi, M. Zhou et al. | 2026-09-09 | Introduces RobustSGPO, which specifies and validates prompt/harness edits to improve semantic-gradient-based prompt optimization. Directly addresses agent harness evolution and engineering.
#### [The Era by Eon Benchmark: A Generated Enterprise Estate with Exact Ground Truth for Benchmarking LLM Agents](http://arxiv.org/abs/2609.09853v1)
B. Gruenbaum, D. Porat, A. Natanzon et al. | 2026-09-09 | Builds a fictional-company benchmark with exact ground truth for evaluating LLM agents using enterprise tools. Provides a controlled evaluation target for agent engineering.
#### [Multi-Agent Agentic Graph Learning via Structural Signatures](http://arxiv.org/abs/2609.09565v1)
L. Qu, J. Li, H. Wang | 2026-09-09 | Uses structural signatures to coordinate multiple LLM roles for agentic graph reasoning. Relevant to multi-agent agent design and orchestration.

### Agent Test-Time Scaling and Self-Improvement
#### [Building the Harness Automatically: Self-Play in Code Distills a Text Harness for Black-Box Optimization](http://arxiv.org/abs/2609.09468v1)
Y. Wu, Z. Ren, Z. Hu et al. | 2026-09-08 | Lets an agent learn a numerical search strategy through executable self-play and distill it as text. Directly targets self-improvement and test-time search strategy transfer.
#### [Proof-Carrying Cognition: Closing the Verification Gap with Reality-Settled Reward](http://arxiv.org/abs/2609.09776v1)
E. Reddy M, S. Karmakar | 2026-09-09 | Proposes reality-settled reward to provide scalable verification for reasoning beyond formal domains. Relevant to self-improvement under reliable reward signals.

### LLM Agent Societies
No new papers today.

## 具身智能
### Vision-Language-Action Models
#### [Frequency-Conditioned Flow Matching for Vision-Language-Action Models](http://arxiv.org/abs/2609.10405v1)
H. Niu, S. Dong, H. Liu et al. | 2026-09-09 | Conditions flow-matching action generation on frequency components of robot trajectories. Directly improves VLA action generation by modeling non-uniform temporal energy.
#### [Time-Frequency Geometric Cross-Attention for Chunked Vision-Language-Action Models](http://arxiv.org/abs/2609.09925v1)
S. Dong, H. Niu, H. Liu et al. | 2026-09-09 | Treats action chunks as short multivariate trajectories and applies time-frequency geometric cross-attention. Directly addresses VLA chunked action representations.
#### [FolDeX: A Physical-World Benchmark for Long-Horizon Robotic Manipulation of Deformable Objects](http://arxiv.org/abs/2609.10243v1)
C. Liu, Y. Xu, F. Wu et al. | 2026-09-09 | Introduces a physical-world benchmark for long-horizon deformable-object manipulation. Relevant to evaluating VLA/world-action models beyond simulation.

### Embodied Navigation
No new papers today.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
No new papers today; the cross-listed MLLM token-pruning paper appears under Multimodal LLM Pruning.

### Multimodal LLM Pruning
#### [Beyond One-Size-Fits-All: Sample-Adaptive Strategy Routing for Vision Token Pruning in MLLMs](http://arxiv.org/abs/2609.10346v1)
H. Liang, P. Zhou, Z. Wan et al. | 2026-09-09 | Routes different vision-token pruning strategies per sample instead of using one fixed policy. Directly targets multimodal LLM pruning and inference cost.
#### [TRACE: Trajectory-robust Admission with Evidence Ordering for Efficient GUI Agents](http://arxiv.org/abs/2609.10297v1)
Y. Wang, M. Qiao, X. Zhang et al. | 2026-09-09 | Introduces training-free visual token pruning with trajectory-robust admission and evidence ordering for GUI agents. Relevant to multimodal agent memory and latency reduction.

### Continual Learning
#### [MetroLLM-Bench: Evaluating Language Models as Transit Kiosk Runtimes](http://arxiv.org/abs/2609.10016v1)
R. Hendriks | 2026-09-09 | Creates a 955-case benchmark for LLMs as transit-kiosk policy layers across six metro systems. Relevant to robustness and adaptation evaluation in changing real-world policy settings.
#### [5-Dialects-BN: Unmasking the Impact of Transliteration on Bangla Dialectal LLMs](http://arxiv.org/abs/2609.09964v1)
M. M. Jawad, G. M. Jim, R. Ahmed et al. | 2026-09-09 | Evaluates how transliteration affects Bangla dialectal LLM performance. Relevant to continual adaptation for low-resource and dialectally diverse language variants.

## 视觉感知
### Event-Based Vision
No new papers today.

### 3D Point Cloud Perception
No new papers today.

### 3D Point Cloud Perception and Tracking
No new papers today.

**Cross-Topic Signals**
- Frequency and time-frequency modeling appears across VLA action generation, treating action sequences as signals rather than generic tokens.
- Agent harness optimization and self-play code distillation both use execution feedback to improve agent behavior, linking agent engineering with self-improvement.
- Verification/reality-settled reward connects self-improvement to the ground-truth evaluation needs highlighted by enterprise-agent benchmarks.
- Vision token pruning for MLLMs and GUI agents bridges inference optimization with multimodal/agentic deployment under trajectory and cache constraints.
- Continual/adaptation evaluation in transit kiosks and Bangla dialects highlights domain shift robustness for deployed LLM systems.

**Priority Reading**
#### - **Frequency-Conditioned Flow Matching for Vision-Language-Action Models** — likely high-impact VLA method using frequency-domain action generation, directly relevant to embodied intelligence.
#### - **Beyond One-Size-Fits-All: Sample-Adaptive Strategy Routing for Vision Token Pruning in MLLMs** — concrete inference-cost reduction with adaptive pruning, central to multimodal LLM efficiency.
#### - **Building the Harness Automatically: Self-Play in Code Distills a Text Harness for Black-Box Optimization** — shows self-play/code distillation for transferable search strategies, central to agent self-improvement.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*