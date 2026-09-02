# Lab Research Topics Radar 2026-09-03

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 19 new + 0 seen in the last 14 days | Generated: 2026-09-02 23:46 UTC

---

## Today's Overview

- **LLM Agent Engineering**: Three papers progress agent-harness engineering: HarnessDev asks whether LLMs can create/evolve their own harness, CordisBench benchmarks lifecycle reasoning in dynamic harnesses, and “Spawn Freely, Act Sparingly” formalizes authority for recursive agent trees.
- **Agent Test-Time Scaling and Self-Improvement**: DiagEvo adds diagnosis-guided self-evolution with error memory; the Context Compilation Architecture is a relevant test-time/in-context method, though less agent-specific.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: EmbodiedSkills and drone-control evaluation advance VLA orchestration; DSG links dynamic scene graphs to embodied agents.
- **Embodied Navigation**: Qwen-Drive provides an initial driving-oriented VLM with unified 3D perception, VQA, and motion planning.
- **LLM Pruning and Inference Optimization**: SinkPruner contributes sink-free visual-token pruning as an inference-optimization method, with strong overlap into multimodal pruning.
- **Multimodal LLM Pruning**: S2Prune and From Saliency add spatial-structure and rank-preserving pruning criteria for MLLMs/VLM rerankers.
- **Continual Learning**: RW-LoRA advances decentralized LoRA fine-tuning, while Fisher-whitened cross-covariance improves low-resource frozen-core adaptation.
- **Event-Based Vision**: A residual Kalman model improves event-camera UAV bounding-box forecasting.
- **3D Point Cloud Perception**: No new papers today; Qwen-Drive’s matched 3D perception component is covered under Embodied Navigation because its core contribution is autonomous driving.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## Research Areas

## LLM Agent 与多智能体 (LLM Agents and Multi-Agent Systems)

### LLM Agent Engineering

#### [HarnessDev: Can LLMs Create and Evolve Their Own Agent Harness?](http://arxiv.org/abs/2609.01437v1)

Wu et al. | 2026-09-01 | Contribution: asks whether LLMs can create and iteratively evolve their model-external execution harness while model weights stay fixed. Relevance: directly targets agent engineering by treating harness code as an evolvable capability-bearing artifact.

#### [CordisBench: Can Language Models Reason About Component Lifecycles in Dynamic Agent Harnesses?](http://arxiv.org/abs/2609.01600v1)

Sileo & Kachler | 2026-09-01 | Contribution: introduces a 1,200-question benchmark on lifecycle reasoning for dynamic agent harnesses, including dependency propagation and cleanup effects. Relevance: provides a focused evaluation for the increasingly important problem of self-modifying agent software.

#### [Spawn Freely, Act Sparingly: Progressive Risk Vesting for Recursive LLM-Agent Trees](http://arxiv.org/abs/2609.01035v1)

M. Wang | 2026-09-01 | Contribution: separates sandbox spawning from capability activation and proposes progressive risk vesting before recursive agent branches can act. Relevance: gives an engineering/safety framework for delegating authority inside recursive LLM-agent systems.

### Agent Test-Time Scaling and Self-Improvement

#### [DiagEvo: Diagnosis-Guided Self-Evolution via Hierarchical Error Memory](http://arxiv.org/abs/2609.00768v1)

Wei et al. | 2026-09-01 | Contribution: proposes diagnosis-guided self-evolution with hierarchical error memory to prevent solver performance plateaus across self-play rounds. Relevance: directly improves self-improvement by replacing unguided difficulty/diversity signals with error-diagnosis-guided training material.

#### [Compile, Don't Memorize: A Context Compilation Architecture (CCA) for In-Context Learning](http://arxiv.org/abs/2609.00759v1)

Qi et al. | 2026-09-01 | Contribution: proposes a context compilation architecture that transforms long novel contexts into reusable structures rather than memorizing them, improving detail-critical ICL accuracy. Relevance: promising test-time infrastructure for agents that must obey long, evolving context specifications.

### LLM Agent Societies

No new papers today.

## 具身智能 (Embodied Intelligence)

### Vision-Language-Action Models

#### [EmbodiedSkills: A Unified Framework for Orchestrating, Training, and Deploying VLA Agents](http://arxiv.org/abs/2609.01281v1)

Wei Wang et al. | 2026-09-01 | Contribution: presents a unified framework covering perception, planning, execution, progress verification, and recovery for long-horizon VLA agents. Relevance: highly relevant to VLA engineering because it addresses orchestration and deployment beyond raw action prediction.

#### [Evaluating Multimodal LLMs as Generalist Vision-Language-Action Agents for Drone Control: Commanding, Approaching, Tracking and Searching](http://arxiv.org/abs/2609.01404v1)

Park et al. | 2026-09-01 | Contribution: evaluates MLLMs directly in a drone control loop with the action space declared only in the prompt. Relevance: tests whether generalist MLLMs can serve as VLA agents in real robot-control settings such as tracking and searching.

#### [DSG: Dynamic 3D Scene Graph Construction for Embodied Agents in Changing Indoor Environments](http://arxiv.org/abs/2609.00619v1)

Liao et al. | 2026-09-01 | Contribution: introduces a dynamic 3D scene-graph framework that keeps semantic environment representations consistent after object movements or agent interactions. Relevance: provides state-tracking structure that can ground long-horizon VLA policies in changing physical scenes.

### Embodied Navigation

#### [Qwen-Drive-1.0: An Initial Step towards a Vision-Language Foundation Model for Autonomous Driving](http://arxiv.org/abs/2609.00111v1)

Zhou et al. | 2026-08-31 | Contribution: presents a driving-oriented vision-language foundation model integrating 3D perception, visual question answering, and motion planning in one framework. Relevance: strong embodied-navigation signal because it couples scene understanding directly with planning for autonomous vehicles.

## 模型压缩与持续学习 (Model Compression and Continual Learning)

### LLM Pruning and Inference Optimization

#### [SinkPruner: Sink-Free Visual Token Pruning for Multimodal Large Language Models](http://arxiv.org/abs/2609.01004v1)

Li et al. | 2026-09-01 | Contribution: proposes sink-free visual token pruning to avoid attention sinks while reducing multimodal LLM inference costs. Relevance: demonstrates inference optimization through token-level pruning rather than weight pruning, bridging LLM optimization and multimodal pruning interests.

### Multimodal LLM Pruning

#### [S$^2$Prune: Spatially Structured Visual Token Pruning for Multimodal Large Language Models](http://arxiv.org/abs/2609.01224v1)

Jia et al. | 2026-09-01 | Contribution: observes stable spatial biases in token-pruning criteria and proposes spatially structured visual token pruning for MLLMs. Relevance: directly targets multimodal LLM pruning with spatial regularization of retained visual tokens.

#### [From Saliency to Discriminability: Rank-Preserving Visual Token Pruning for VLM Rerankers](http://arxiv.org/abs/2609.00667v1)

Liu et al. | 2026-09-01 | Contribution: shows attention saliency is misaligned with listwise reranking discriminability and proposes rank-preserving visual token pruning for VLM rerankers. Relevance: extends multimodal pruning to practical retrieval/reranking settings where many visual candidates must be processed jointly.

### Continual Learning

#### [RW-LoRA: Communication-Efficient Decentralized LoRA Fine-Tuning via Random Walks](http://arxiv.org/abs/2609.00078v1)

Chen et al. | 2026-08-31 | Contribution: develops a random-walk gossip procedure for decentralized LoRA fine-tuning that avoids centralized aggregation bottlenecks. Relevance: supports continual and distributed adaptation of foundation models with low communication overhead.

#### [Frozen Cores Need Task Signal: Fisher-Whitened Cross-Covariance for Low-Resource LLM Adaptation](http://arxiv.org/abs/2609.00762v1)

Ye et al. | 2026-09-01 | Contribution: analyzes where trainable coefficients should be placed in frozen-core LLM adaptation and proposes Fisher-whitened cross-covariance for selecting transformation bases. Relevance: informs low-resource and continual updating of frozen LLMs by making parameter placement task-sensitive.

## 视觉感知 (Visual Perception)

### Event-Based Vision

#### [Residual Kalman Dynamics for Event-Based UAV Forecasting](http://arxiv.org/abs/2609.00839v1)

Nyblom et al. | 2026-09-01 | Contribution: augments a constant-velocity Kalman filter with a residual model predicting acceleration-like corrections for short- and mid-horizon UAV box forecasting on FRED event-camera data. Relevance: advances event-based perception for fast-moving UAVs by combining physical priors with learned residual dynamics.

### 3D Point Cloud Perception

No new papers today.

### 3D Point Cloud Perception and Tracking

No new papers today.

## Cross-Topic Signals

- **Agent harness and recursive-agent safety are converging**: HarnessDev/CordisBench treat the harness as an evolving software artifact, while Spawn Freely introduces progressive authorization for recursive branches; both concern controlling the infrastructure an agent can modify.
- **Token pruning is moving from importance to structure**: S2Prune, SinkPruner, and From Saliency all move beyond simple saliency and toward spatial structure, sink avoidance, or rank preservation, suggesting more robust criteria for multimodal inference efficiency.
- **Scene/3D abstraction as an action interface**: DSG and Qwen-Drive both use structured 3D/scene representations to connect perception to embodied decision-making, joining 3D perception and VLA/navigation.
- **Efficient adaptation methods increasingly matter for continual deployment**: RW-LoRA and frozen-core coefficient placement address where and how adaptation should happen, relevant to both continual learning and deployment-time customization.
- **Self-improvement is becoming diagnosis-driven**: DiagEvo uses error memory to guide evolution, paralleling HarnessDev’s idea that agents should inspect and modify their own execution infrastructure rather than only generating more data.

## Priority Reading

1. **DiagEvo** — Most directly advances self-evolution by replacing plateau-prone signals with hierarchical error memory; relevant to any lab working on agent self-improvement.
2. **HarnessDev** — Reframes the agent harness as something LLMs can create and evolve; important for scalable agent engineering and evaluation.
3. **Qwen-Drive-1.0** — Integrates 3D perception, VQA, and planning into a driving foundation model, making it a useful bridge across radar topics in embodied navigation and multimodal perception.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*