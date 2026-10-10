# Lab Research Topics Radar 2026-10-10

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 16 new + 0 seen in the last 14 days | Generated: 2026-10-10 01:26 UTC

---

## Today's Overview

- **LLM Agent Engineering** (under `LLM Agent 与多智能体`): Five matched new papers. Core progress includes Agentic BBO benchmarking, epistemic humility under knowledge conflict, and industrial ontology grounding; two memory/self-improvement papers are cross-listed with Continual Learning and are treated there.
- **Agent Test-Time Scaling and Self-Improvement**: Three matched new papers. Direct progress is in test-time compute mechanisms for tabular foundation models and Agentic-TTT; VINCIE-NExT is a weaker video-editing match and is omitted from detailed topic entries.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: Three new VLA papers on path-time decoupling, latent reasoning flow reuse/refinement, and predictive latent world modeling.
- **Embodied Navigation**: Three matched new papers. Direct progress is in spatial memory for streaming 3D reconstruction and predictive spatial reasoning; MAMHOI is less navigation-specific and is omitted from detailed entries.
- **LLM Pruning and Inference Optimization**: One new paper, SparseDecoding, on decoding-aware pruning for LLM inference.
- **Multimodal LLM Pruning**: No new papers today.
- **Continual Learning**: Two new papers on intent-structured experience consolidation and model-based recursive self-improvement.
- **Event-Based Vision**: One new paper on confidence-weighted event-camera localization in LiDAR maps.
- **3D Point Cloud Perception**: No new papers today.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [A Closer Look at Agentic BBO: Benchmarking LLM Agents for Black-Box Optimization](http://arxiv.org/abs/2610.12183v1)
Authors: Chen et al. | Published: 2026-10-08  
Contribution: Benchmarks LLM agents for black-box optimization by combining task semantics, computation, optimization tools, and feedback-driven decision-making.  
Relevance: Directly evaluates agentic engineering for scientific and engineering optimization workflows.

#### [Accurate but Not Humble: Evaluating Epistemic Humility in LLM Agents under Knowledge Conflict](http://arxiv.org/abs/2610.12360v1)
Authors: Sun et al. | Published: 2026-10-08  
Contribution: Proposes an evaluation of whether LLM agents revise, acknowledge uncertainty, or persist when retrieved evidence contradicts prior beliefs.  
Relevance: Addresses robustness and epistemic behavior in deployed LLM agents beyond task success.

#### [Narrow and Deep: An Ontology Tower as the Knowledge of an LLM Agent for an Industrial Equipment System](http://arxiv.org/abs/2610.11768v1)
Authors: Joo & Kim | Published: 2026-10-08  
Contribution: Builds a narrow, deep ontology tower to supply plant-specific knowledge for an LLM agent operating industrial energy equipment.  
Relevance: Shows how domain knowledge structuring affects correctness in industrial LLM-agent operation.

### Agent Test-Time Scaling and Self-Improvement

#### [Agentic-TTT: Training test-time policy for test-time training](http://arxiv.org/abs/2610.12002v1)
Authors: Lu & Kankanhalli | Published: 2026-10-08  
Contribution: Turns deployment experience into parameter updates by training a test-time policy for test-time training.  
Relevance: Directly targets agent test-time adaptation and self-improvement mechanisms.

#### [Test-Time Compute for Tabular Foundation Models: Mechanisms, Gains, and Limits](http://arxiv.org/abs/2610.12005v1)
Authors: Ning et al. | Published: 2026-10-08  
Contribution: Systematically studies adaptation, aggregation, and context construction as test-time compute axes for tabular foundation models.  
Relevance: Provides a mechanism/gains/limits framework for test-time scaling beyond LLM-only settings.

### LLM Agent Societies

No new papers today.

## 具身智能

### Vision-Language-Action Models

#### [Recompose and Refine Latent Reasoning Flows for Vision-Language-Action Models](http://arxiv.org/abs/2610.12090v1)
Authors: Shi et al. | Published: 2026-10-08  
Contribution: Reuses and refines successful latent reasoning flows for VLA policy queries instead of discarding them after each action.  
Relevance: Improves internal reasoning for continuous robot action generation in VLA policies.

#### [PLaW-VLA: Predictive Latent World Modeling for Vision-Language-Action Policies](http://arxiv.org/abs/2610.12285v1)
Authors: Liu et al. | Published: 2026-10-08  
Contribution: Models task-relevant future latent representations to condition VLA action generation for long-horizon control.  
Relevance: Directly advances predictive world modeling in VLA policies.

#### [PathTime-VLA: Path-Time Decoupling for Factorized Post-Training of Vision-Language-Action Policies](http://arxiv.org/abs/2610.11771v1)
Authors: Huang et al. | Published: 2026-10-08  
Contribution: Decouples path and timing in VLA post-training so geometric guidance can be adapted separately from execution pace.  
Relevance: Addresses teleoperation adaptation and factorized VLA policy learning.

### Embodied Navigation

#### [Slot3R: Set-Associative Spatial Memory for Streaming 3D Reconstruction](http://arxiv.org/abs/2610.12282v1)
Authors: Zhang et al. | Published: 2026-10-08  
Contribution: Introduces set-associative spatial memory for streaming 3D reconstruction instead of relying only on spatial proximity.  
Relevance: Supports online spatial memory needed by embodied agents navigating expanding scenes.

#### [SpaceCast-Bench: Evaluating Predictive Spatial Reasoning in Vision-Language Models](http://arxiv.org/abs/2610.12402v1)
Authors: Li et al. | Published: 2026-10-08  
Contribution: Benchmarks predictive spatial reasoning by constructing scenes, anticipating interventions, and reasoning about unseen spatial outcomes.  
Relevance: Tests capabilities central to embodied navigation and spatial planning.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [SparseDecoding: Decoding-Aware Pruning for Accurate and Efficient LLM Inference](http://arxiv.org/abs/2610.12327v1)
Authors: Wang et al. | Published: 2026-10-08  
Contribution: Proposes decoding-aware, training-free pruning guided by Hessian information to reduce nonzero parameters read during memory-bound LLM decoding.  
Relevance: Directly targets LLM inference latency through pruning.

### Multimodal LLM Pruning

No new papers today.

### Continual Learning

#### [Use and Disuse: Intent-Structured Experience Consolidation for Memory and Learning in LLM Agents](http://arxiv.org/abs/2610.12124v1)
Authors: Zeng et al. | Published: 2026-10-08  
Contribution: Proposes Hippocam, a hierarchical memory and continual learning architecture that consolidates continuous experience into reusable knowledge.  
Relevance: Directly addresses long-term memory and continual learning for LLM agents.

#### [Memento 3: Model-Based Recursive Self-Improvement through Reflective Rulebooks](http://arxiv.org/abs/2610.11794v1)
Authors: Zhao et al. | Published: 2026-10-08  
Contribution: Introduces reflective rulebooks for recursive self-improvement as agents revise world models under limited observations.  
Relevance: Advances continual learning and self-improvement in unfamiliar environments.

## 视觉感知

### Event-Based Vision

#### [Learning Which Correspondences to Trust: Confidence-Weighted Event-Camera Localization in LiDAR Maps](http://arxiv.org/abs/2610.11967v1)
Authors: Kiousis et al. | Published: 2026-10-08  
Contribution: Uses confidence-weighted correspondences for event-camera localization against LiDAR maps, improving pose estimation beyond geometric consensus.  
Relevance: Advances event-based vision for robust localization.

### 3D Point Cloud Perception

No new papers today.

### 3D Point Cloud Perception and Tracking

No new papers today.

## Cross-Topic Signals

- Structured memory is a shared thread: Hippocam’s intent-structured experience consolidation, Memento 3’s reflective rulebooks, and Slot3R’s set-associative spatial memory all convert streamed experience into reusable internal state.
- Test-time adaptation is expanding beyond LLM agents: Agentic-TTT updates parameters from deployment experience, while tabular TFM test-time compute formalizes adaptation, aggregation, and context construction.
- VLA progress is converging on latent predictive/reasoning states: recompose-and-refine latent flows and PLaW-VLA both manipulate latent task/future representations to condition action generation.
- Efficiency and scaling interact: SparseDecoding reduces decoding memory reads, which could complement test-time scaling by making extra inference or adaptation cheaper.
- Event-camera localization and streaming 3D reconstruction both emphasize confidence and spatial association for robust embodied spatial perception.

## Priority Reading

#### - **Agentic-TTT: Training test-time policy for test-time training** — directly addresses test-time training policy and deployment-experience-to-parameter updates, central to self-improvement.
#### - **SparseDecoding: Decoding-Aware Pruning for Accurate and Efficient LLM Inference** — provides a concrete decoding-aware pruning method for memory-bound LLM inference, relevant to inference optimization.
#### - **PLaW-VLA: Predictive Latent World Modeling for Vision-Language-Action Policies** — represents the VLA trend toward predictive latent world modeling for long-horizon control.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*