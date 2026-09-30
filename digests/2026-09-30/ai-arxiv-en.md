# Lab Research Topics Radar 2026-09-30

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 62 new + 0 seen in the last 14 days | Generated: 2026-09-30 00:57 UTC

---

## Today's Overview
- LLM Agent Engineering: 10 new; progress on token-cost forecasting, personalized tool-planning benchmarks, credit assignment, tool-schema bias, and agent state management.
- Agent Test-Time Scaling and Self-Improvement: 10 new; looped transformers, token-level latent scaling, budgeted verification, hypergraph MCTS, and multi-agent debate pruning.
- LLM Agent Societies: No new papers today.
- Vision-Language-Action Models: 11 new; failure-guided driving, visual interruption robustness, causal action tokenization, multi-scale tuning, and calibrated rejectable heads.
- Embodied Navigation: 10 new; round-trip VLN, lifelong navigation, aerial VLN, edge deployment, and action-centric visual compression.
- LLM Pruning and Inference Optimization: 5 new; layer-adaptive semi-structured sparsity and multimodal token/sublayer skipping.
- Multimodal LLM Pruning: 6 new; attention-coverage pruning, text-aware design, joint pruning+quantization, and mutual-information coverage.
- Continual Learning: 10 new; activation-subspace LoRA, spatial-coherence replay, learning dynamics, and bilevel representation refinement.
- Event-Based Vision: 3 new; continuous event optical flow and event-augmented manipulation.
- 3D Point Cloud Perception: 4 new; superquadric decomposition, active scene-state construction, and FMCW LiDAR benchmarking.
- 3D Point Cloud Perception and Tracking: 1 new; state-space metric 3D point tracking.

## LLM Agent 与多智能体

### LLM Agent Engineering
#### [TokenCast: Forecasting Token Consumption During LLM Agent Execution](http://arxiv.org/abs/2609.35760v1)
Ouyang et al.; 2026-09-28. Forecasts token consumption during LLM agent execution. Relevance: addresses high run-to-run cost variability for agent deployment.

#### [PDEU-Bench: Benchmarking the Personalized Planning Lifecycle of Tool-Calling LLM Agents](http://arxiv.org/abs/2609.34930v1)
Lai et al.; 2026-09-28. Benchmarks personalized planning over sustained tool-calling interactions. Relevance: evaluates multi-step personalized agent goals beyond isolated calls.

#### [GraphHCA: Closed-Form Hindsight Credit Assignment for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.35084v1)
Zhu et al.; 2026-09-28. Provides closed-form hindsight credit assignment for long-horizon LLM agents. Relevance: improves step-level credit under sparse terminal rewards.

#### [Action-Space Shaping for LLM Agents: Measuring and Mitigating Tool-Schema Bias](http://arxiv.org/abs/2609.34971v1)
Liu et al.; 2026-09-28. Measures and mitigates tool-schema bias in LLM agents. Relevance: shows interface representation shapes executable action spaces.

#### [Planarian: Managing Agent State with Statepoints](http://arxiv.org/abs/2609.35366v1)
Guo et al.; 2026-09-28. Manages agent state with statepoints across local and remote changes. Relevance: supports reverting/replaying exploratory agent actions.

### Agent Test-Time Scaling and Self-Improvement
#### [Improving Test-Time Scaling with Adaptive Looped Transformers](http://arxiv.org/abs/2609.35748v1)
You et al.; 2026-09-28. Studies whether looping improves test-time scaling as outputs grow. Relevance: links looped architectures to inference-time compute scaling.

#### [Token-Disentangled Latent Test-Time Scaling for Vision-Language Reasoning](http://arxiv.org/abs/2609.35228v1)
Ma et al.; 2026-09-28. Applies token-level latent test-time scaling for vision-language reasoning. Relevance: avoids global scalar rewards across editable latent tokens.

#### [Test-Time Scaling via Budgeted Multi-Attribute Verification](http://arxiv.org/abs/2609.34322v1)
Xue et al.; 2026-09-28. Formulates verification as multi-attribute good-arm identification under budget. Relevance: jointly selects candidates and verification attributes.

#### [HyperMCTS: Hypergraph-Augmented MCTS for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.33920v1)
Xiao et al.; 2026-09-27. Uses hypergraph-augmented MCTS for long-horizon LLM agents. Relevance: scales test-time search under model/environment constraints.

#### [Beyond Solo and Consistency: Vindicating Multi-Agent Debate via Conditional Progressive Pruning](http://arxiv.org/abs/2609.33974v1)
Ye et al.; 2026-09-27. Vindicates multi-agent debate via conditional progressive pruning. Relevance: treats debate as test-time scaling and prunes ineffective debate.

## 具身智能

### Vision-Language-Action Models
#### [RefineDrive: Reliable Failure-Guided Learning for Vision-Language-Action Driving](http://arxiv.org/abs/2609.35078v1)
Sun et al.; 2026-09-28. Learns from reliable failure-guided corrections for VLA driving. Relevance: exploits model-specific failures beyond expert demonstrations.

#### [Learning to Act under Visual Interruptions with Vision-Language-Action Models](http://arxiv.org/abs/2609.35003v1)
Jiang et al.; 2026-09-28. Enables VLA policies to act when camera streams interrupt. Relevance: improves robustness to missing visual observations during execution.

#### [Rethinking Causal Action Tokenization with Conditional Annealing in Flow Matching](http://arxiv.org/abs/2609.35469v1)
Zhang et al.; 2026-09-28. Proposes causal action tokenization with conditional annealing. Relevance: aligns action tokens with autoregressive VLA backbones.

#### [ActionUNet: Improving Robustness of VLA Models with Efficient Multi-scale Fine-tuning](http://arxiv.org/abs/2609.34982v1)
Zhu et al.; 2026-09-28. Uses multi-scale fine-tuning for more robust VLA models. Relevance: addresses coarse-semantic to fine-temporal action alignment.

#### [Do Not Cut When Uncertain: Rejectable and Calibrated Decision Heads for VLA Policies in Robotic Harvesting](http://arxiv.org/abs/2609.35039v1)
Heng Zhang; 2026-09-28. Adds rejectable and calibrated decision heads to VLA policies. Relevance: lets policies express uncertainty and avoid unsafe actions.

### Embodied Navigation
#### [Reliability-Aware Sparse Route Memory for Round-Trip Vision-Language Navigation](http://arxiv.org/abs/2609.34163v1)
Long et al.; 2026-09-28. Studies round-trip VLN with reliability-aware sparse route memory. Relevance: targets return-navigation failures in observability and recovery.

#### [NavHarness: Towards Lifelong Embodied Navigation](http://arxiv.org/abs/2609.34276v1)
Zhao et al.; 2026-09-28. Builds lifelong embodied navigation with evolving maps and search records. Relevance: handles incomplete or conflicting memory across tasks.

#### [ForeFly: A Dual-Horizon World Action Model for Aerial Vision-Language Navigation](http://arxiv.org/abs/2609.33581v1)
Wang et al.; 2026-09-27. Introduces a dual-horizon world action model for aerial VLN. Relevance: improves long-horizon instruction following in 3D UAV environments.

#### [EdgeVLN: Runtime-Aware Deployment Ready Quantized Vision Language Navigation Model](http://arxiv.org/abs/2609.35570v1)
Jonna et al.; 2026-09-28. Makes quantized VLN runtime-aware for edge deployment. Relevance: checks memory, latency, and energy budgets on robotic edge devices.

#### [NavJev: Efficient Vision-Language Navigation via Action-Centric Visual Compression and Discriminative Action-Semantic Memory](http://arxiv.org/abs/2609.34969v1)
Sheng et al.; 2026-09-28. Compresses visual observations and stores action-semantic memory for VLN. Relevance: reduces repeated MLLM reasoning in zero-shot navigation.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization
#### [SPIDER: Multi-Layer Semantic Token Pruning and Adaptive Sub-Layer Skipping in Multimodal Large Language Models](http://arxiv.org/abs/2609.34977v1)
Chen et al.; 2026-09-28. Prunes semantic tokens and skips sub-layers adaptively in MLLMs. Relevance: attacks data and computational redundancy together.

#### [GroupMask: Layer-Adaptive Group-wise Sparsity for Semi-Structured LLM Pruning](http://arxiv.org/abs/2609.33977v1)
Li et al.; 2026-09-27. Allocates layer-adaptive group-wise sparsity for semi-structured LLM pruning. Relevance: moves beyond fixed N:M local sparsity patterns.

### Multimodal LLM Pruning
#### [ACPruner: Visual Token Pruning as Biased Attention Coverage Maximization in LVLMs](http://arxiv.org/abs/2609.34558v1)
Li et al.; 2026-09-28. Prunes visual tokens by maximizing biased attention coverage. Relevance: revisits importance-versus-diversity selection in LVLMs.

#### [When Text Matters: Design Principles for Visual Token Pruning in Vision-Language Model](http://arxiv.org/abs/2609.34861v1)
Kang et al.; 2026-09-28. Derives design principles for visual token pruning in VLMs. Relevance: shows text context should guide visual token selection.

#### [P4Q: Co-designing Token Pruning and Quantization for Vision-Language Model Acceleration](http://arxiv.org/abs/2609.34867v1)
Jing et al.; 2026-09-28. Co-designs token pruning and quantization for VLM acceleration. Relevance: combines two compression dimensions for deployment.

#### [MiCo: Mutual Information Coverage Optimization through Semantic Erasure Modeling for Efficient MLLM Inference](http://arxiv.org/abs/2609.34330v1)
Wang et al.; 2026-09-28. Uses mutual-information coverage via semantic erasure for MLLM inference. Relevance: prunes visual tokens with a semantic coverage objective.

### Continual Learning
#### [SPACE-LoRA: Allocating Activation-Subspace Protection for Continual Learning](http://arxiv.org/abs/2609.34453v1)
Yoo et al.; 2026-09-28. Allocates activation-subspace protection for continual learning. Relevance: reduces catastrophic forgetting in sequential LoRA updates.

#### [Reliable Replay through Spatial Coherence in Online Continual Learning](http://arxiv.org/abs/2609.33725v1)
Sun et al.; 2026-09-27. Prioritizes replay using spatial coherence in online continual learning. Relevance: improves retention beyond isolated loss-based priorities.

#### [Learning Dynamics of Continual Learning: A Unified View of Data Attribution, Forgetting, and Plasticity Loss](http://arxiv.org/abs/2609.33620v1)
Ren et al.; 2026-09-27. Unifies data attribution, forgetting, and plasticity loss. Relevance: frames recurring update cycles in lifelong model updates.

#### [A Light Bilevel Refinement Aligns Self-Supervised Representations for Stronger Task-Specific Learning](http://arxiv.org/abs/2609.33424v1)
Zakarias et al.; 2026-09-27. Refines self-supervised representations with bilevel alignment. Relevance: addresses pretraining-downstream objective misalignment.

## 视觉感知

### Event-Based Vision
#### [E-WAVE: Event-based Continuous Optical Flow via Warping-Aligned Visual Encoding](http://arxiv.org/abs/2609.34346v1)
Wu et al.; 2026-09-28. Estimates continuous optical flow from events via warping-aligned encoding. Relevance: enables temporally dense flow for VR/AR perception.

#### [ECHO: Event-Augmented Context with Hindsight and Outlook for Wrist-Only Manipulation](http://arxiv.org/abs/2609.34893v1)
Wang et al.; 2026-09-28. Augments wrist-only manipulation with event-based hindsight and outlook. Relevance: uses event cameras under extreme exposure.

### 3D Point Cloud Perception
#### [Superquadric Primitive Decomposition of 3D point clouds via Geometric-Aware Inlier Refinement](http://arxiv.org/abs/2609.35725v1)
Rinaldi et al.; 2026-09-28. Decomposes 3D point clouds into superquadric primitives. Relevance: advances interpretable geometric primitive extraction.

#### [SceneScaffold: Active Scene-State Construction for Unified 3D Scene Understanding](http://arxiv.org/abs/2609.33518v1)
Li et al.; 2026-09-27. Builds active scene states for unified 3D scene understanding. Relevance: compresses 3D evidence into LLM-compatible visual tokens.

#### [AevaScenes: An FMCW LiDAR Dataset and Benchmark for Long-Range Perception](http://arxiv.org/abs/2609.33230v1)
Narasimhan et al.; 2026-09-27. Releases an FMCW LiDAR dataset with radial Doppler velocity. Relevance: supports long-range 3D perception benchmarking.

### 3D Point Cloud Perception and Tracking
#### [3D Point Tracking with State Space Models](http://arxiv.org/abs/2609.34035v1)
Ogawa et al.; 2026-09-27. Tracks any point in metric 3D using state space models. Relevance: targets absolute-scale tracking for reconstruction, navigation, and driving.

## Cross-Topic Signals
- Agent engineering and test-time scaling increasingly overlap on cost-aware control: TokenCast, GraphHCA, Budgeted Multi-Attribute Verification, and HyperMCTS all manage compute or credit under constraints.
- Multimodal pruning is becoming navigation- and VLA-aware through compression: SPIDER, ACPruner, P4Q, EdgeVLN, and NavJev reduce visual-token or runtime costs.
- Continual learning and agent self-improvement share protection/replay/alignment logic: SPACE-LoRA, Reliable Replay, and Light Bilevel Refinement could inform long-horizon agent updates.
- Embodied navigation and 3D perception converge on scene-state and memory construction: NavHarness, SceneScaffold, and AevaScenes all emphasize evolving spatial evidence.
- Event-based vision connects robust embodied perception: E-WAVE and ECHO address dynamic or degraded visual conditions relevant to VLA robustness.

## Priority Reading
- [TokenCast](http://arxiv.org/abs/2609.35760v1): token-cost forecasting is a practical bottleneck for deploying and budgeting LLM agent runs.
#### - [Improving Test-Time Scaling with Adaptive Looped Transformers](http://arxiv.org/abs/2609.35748v1): directly interrogates whether looped architectures improve test-time scaling, a core configured topic.
- [SPACE-LoRA](http://arxiv.org/abs/2609.34453v1): offers a concrete activation-subspace mechanism for reducing forgetting in sequential LoRA continual learning.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*