# Lab Research Topics Radar 2026-10-09

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 35 new + 21 seen in the last 14 days | Generated: 2026-10-09 01:39 UTC

---

## Today's Overview
- **LLM Agent Engineering**: 10 new papers advanced policy-verified tool calls, persistent memory governance, partial-observability harnesses, embedded/data-engineering evaluation, self-evolving multi-agent training, reward-in-context learning, and generative UI.
- **Agent Test-Time Scaling and Self-Improvement**: 2 new papers introduced self-play OCR and bandit-based strategy selection; seen work covered personalized TTS, serving-experience self-improvement, and full-duplex turn-taking.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: 10 new papers focused on geometric chain-of-thought, camera/view robustness, language sensitivity, instruction grounding, action-centric transformers, skill initiation, shortcut mitigation, RL fine-tuning, self-assessment, and visuo-tactile policies.
- **Embodied Navigation**: 3 new papers covered lifelong small-object navigation, intact world modeling, and cross-listed camera-trajectory generation; seen work included risk-certified replanning, sign navigation, object ownership, active 3D mapping, and UAV search.
- **LLM Pruning and Inference Optimization**: No new papers today.
- **Multimodal LLM Pruning**: No new papers today.
- **Continual Learning**: 8 new papers explored singular-vector stability, prompt repertoires, training-free continual learning, coding-agent ARC learning, layer-selective PEFT, generative-image detection, and evolving skills; seen work covered PEFT comparisons, source-free test-time adaptation, and serving-experience self-improvement.
- **Event-Based Vision**: No new papers today.
- **3D Point Cloud Perception**: 2 new papers addressed audio-visual floormaps and camera-trajectory generation; seen work covered cooperative 3D detection.
- **3D Point Cloud Perception and Tracking**: 1 new paper introduced point-focused attention with state-space context for point cloud representation.

## LLM Agent 与多智能体

### LLM Agent Engineering
#### [Safe, Persistent, and Evolving Agent Harness for Understanding Partially Observable Worlds](http://arxiv.org/abs/2610.11552v1)
Gao et al. | 2026-10-08 | Contribution: proposes a safe, persistent, evolving harness for policy-compliant long-horizon enterprise agents. Relevance: core LLM agent engineering under partial observability.

#### [NOMOS: Compiling Written Policies into Statically Verified Tool-Call Gates for LLM Agents](http://arxiv.org/abs/2610.11030v1)
Yu et al. | 2026-10-08 | Contribution: compiles written policies into statically verified tool-call gates. Relevance: agent safety and tool-call governance.

#### [What to Admit and How to Present: Governing Persistent Memory in LLM Agents](http://arxiv.org/abs/2610.11188v1)
Liu & Ding | 2026-10-08 | Contribution: separates admission and presentation for persistent agent memory governance. Relevance: reduces sycophancy and cross-domain leakage in agent memory.

#### [Closed-loop evaluation of LLM agents for embedded software development](http://arxiv.org/abs/2610.11447v1)
García-Carrasco et al. | 2026-10-08 | Contribution: evaluates coding agents on embedded firmware via closed-loop build/test/repair. Relevance: agent evaluation in safety-critical software engineering.

#### [Memory Type Varies: Empowering LLM Agents for Long-Term Memory with Diverse Strategies](http://arxiv.org/abs/2610.11573v1)
Wen et al. | 2026-10-08 | Contribution: uses diverse strategies for different memory types in LLM agents. Relevance: long-term agent memory architecture.

#### [Evaluating Local Language Model Agents for Reproducible Data Engineering](http://arxiv.org/abs/2610.11482v1)
García-Carrasco et al. | 2026-10-08 | Contribution: empirical study of locally deployable open-weight agents for data-engineering workflows. Relevance: agent reliability and reproducibility.

#### [SynCo: Data Synthesis Co-Training for Self-Evolving LLMs via Multi-Agent Reinforcement Learning](http://arxiv.org/abs/2610.11345v1)
Yang et al. | 2026-10-08 | Contribution: co-trains self-evolving LLM agents via data synthesis and multi-agent RL. Relevance: multi-agent self-evolution.

#### [Do LLMs Learn from Rewards in Context? : Rethinking the role of reward in In-Context Reinforcement Learning](http://arxiv.org/abs/2610.11152v1)
Kwon et al. | 2026-10-08 | Contribution: tests whether in-context reward learning can play the role of RL. Relevance: inference-time agent improvement.

#### [When Interfaces Speak: Data-Aware Generative UI Harness for Active Interaction](http://arxiv.org/abs/2610.11123v1)
Li et al. | 2026-10-08 | Contribution: proposes GenUI-Harness for data-aware generative UIs in human-agent interaction. Relevance: agent interface engineering.

#### [Why LLM Agents Favor Their Group: Stakes, Observed Norms, and Reputation](http://arxiv.org/abs/2610.11008v1)
Chen | 2026-10-07 | Contribution: shows group favoritism in LLM agent societies depends on observed norms, stakes, and reputation. Relevance: agent social behavior.

### Agent Test-Time Scaling and Self-Improvement
#### [SP-DocReader: Difference-Aware Self-Play for Precise Document OCR](http://arxiv.org/abs/2610.11148v1)
Liao et al. | 2026-10-08 | Contribution: self-play OCR framework targeting residual errors after supervised fine-tuning. Relevance: test-time self-improvement.

#### [Constrained Command-Conditioned Reinforcement Learning with Bandit Strategy Selection in Real-Time Strategy Games](http://arxiv.org/abs/2610.11663v1)
Leenders et al. | 2026-10-08 | Contribution: separates strategic command selection via bandits from unit control. Relevance: adaptive test-time strategy selection.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [From Pareto to Preference: Personalized Test-Time Scaling via Amortized Agentic Policy Discovery](http://arxiv.org/abs/2610.09684v1)
Wang et al. | 2026-10-07 | Contribution: personalizes test-time scaling via amortized agentic policy discovery. Relevance: efficient, preference-aware TTS.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [ServeLearnBench: How Well Can Agents Self-Improve from Serving Experience?](http://arxiv.org/abs/2610.07792v1)
Zheng et al. | 2026-10-06 | Contribution: benchmarks agent self-improvement from serving experience. Relevance: deployment-time self-improvement.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Coupled but Late: Turn-Taking Between Full-Duplex Speech Models in Unscripted Dialogue](http://arxiv.org/abs/2610.08683v1)
Zhu et al. | 2026-10-06 | Contribution: studies turn-taking between full-duplex speech models in dialogue. Relevance: agent-agent self-play and evaluation.

### LLM Agent Societies
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Beyond Nominal Equilibria: Risk-Averse Multi-Population Mean-Field Games](http://arxiv.org/abs/2610.09244v1)
Jeloka et al. | 2026-10-07 | Contribution: models risk-averse multi-population mean-field games. Relevance: multi-agent society modeling under uncertainty.

## 具身智能

### Vision-Language-Action Models
#### [WARP-VLA: Wrist-Camera Adaptation for View-Robust Policy Execution in Vision-Language-Action Models](http://arxiv.org/abs/2610.11508v1)
Lee et al. | 2026-10-08 | Contribution: adapts wrist-camera views for robust VLA policy execution. Relevance: camera-configuration robustness in VLA.

#### [Rewiring Semantics, Dynamics, and Control: A Simple yet Effective Action-Centric Tri-Stream Transformer](http://arxiv.org/abs/2610.11416v1)
Luo et al. | 2026-10-08 | Contribution: proposes an action-centric tri-stream transformer with physical dynamics priors. Relevance: VLA architecture for manipulation.

#### [Experience-Guided Initiation Search for Learned Skills in Skill Composition](http://arxiv.org/abs/2610.11418v1)
Li et al. | 2026-10-08 | Contribution: searches initiation configurations for composing frozen VLA skills. Relevance: VLA skill composition.

#### [Explicit Geometric Chain-of-Thought for Vision-Language-Action in Autonomous Driving](http://arxiv.org/abs/2610.10390v1)
Gui et al. | 2026-10-07 | Contribution: injects explicit 3D geometric chain-of-thought into driving VLA. Relevance: VLA spatial reasoning.

#### [Rephrase Before You Act: Characterizing and Mitigating Language Sensitivity in Vision-Language-Action Models](http://arxiv.org/abs/2610.10526v1)
Watts & Cui | 2026-10-07 | Contribution: characterizes and mitigates VLA sensitivity to instruction phrasing. Relevance: language robustness for VLA.

#### [Do Vision-Language-Action Models Understand Instructions? A Mechanistic Interpretability Study on Language Grounding](http://arxiv.org/abs/2610.10178v1)
Wulff & Cangelosi | 2026-10-07 | Contribution: mechanistically studies language grounding in VLAs. Relevance: VLA instruction understanding.

#### [When Listening Becomes Easier: Scrubbing Visual Cues for Shortcut-Free VLAs](http://arxiv.org/abs/2610.10912v1)
Gerigk et al. | 2026-10-07 | Contribution: scrubs visual cues to reduce shortcut learning in VLAs. Relevance: robust VLA policy learning.

#### [Q-Learning with Scalar Adjoint Matching](http://arxiv.org/abs/2610.10437v1)
Dong et al. | 2026-10-07 | Contribution: fine-tunes flow policies with off-policy RL via scalar adjoint matching. Relevance: RL improvement for VLA policies.

#### [iAm.md: Robot Skill Self-Assessment through Agentic Introspection for Unknown Open-Vocabulary Domains](http://arxiv.org/abs/2610.10962v1)
Guarino et al. | 2026-10-07 | Contribution: robot skill self-assessment via agentic introspection. Relevance: VLA self-assessment in open domains.

#### [OpenViTac: Learning and Benchmarking Visuo-Tactile Policies in a Unified Sim-and-Real Framework](http://arxiv.org/abs/2610.10384v1)
Wu et al. | 2026-10-07 | Contribution: unified sim-and-real benchmark for visuo-tactile policies. Relevance: VLA with tactile feedback.

### Embodied Navigation
#### [Lifelong small-object navigation in changing object layouts: a benchmark and method](http://arxiv.org/abs/2610.10125v1)
Huang et al. | 2026-10-07 | Contribution: benchmark and method for lifelong small-object navigation under changing layouts. Relevance: core embodied navigation.

#### [IntactWorld: Joint World Modeling with Intact Features](http://arxiv.org/abs/2610.11174v1)
Tan et al. | 2026-10-08 | Contribution: joint world modeling with intact features for real-world logic. Relevance: world models for embodied navigation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Adaptive Risk-Certified Event-Triggered Replanning for Dynamic Navigation](http://arxiv.org/abs/2610.09302v1)
Suganda & Hu | 2026-10-07 | Contribution: risk-certified event-triggered replanning for dynamic navigation. Relevance: safe navigation under uncertain predictions.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [SiGNgapore - An Interactive Dataset for Sign-based Visual Navigation](http://arxiv.org/abs/2610.09488v2)
Zimmerman et al. | 2026-10-07 | Contribution: interactive dataset for sign-based visual navigation. Relevance: navigation using environmental cues.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [COOL: Curiosity-Driven Object Ownership Learning for Personalized Robotic Assistance](http://arxiv.org/abs/2610.09358v1)
Huber et al. | 2026-10-07 | Contribution: learns object ownership for personalized robotic assistance. Relevance: grounded navigation to personal objects.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [ActiveLang: Active Open-Vocabulary 3D Mapping with Semantic-Uncertainty-Guided Exploration](http://arxiv.org/abs/2610.09518v1)
Chen et al. | 2026-10-07 | Contribution: active open-vocabulary 3D mapping with semantic-uncertainty exploration. Relevance: language-conditioned embodied navigation.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [SearchWorld: Spatial Value-Grounded Imagination for UAV Object Search via World Models](http://arxiv.org/abs/2610.09335v1)
Ji et al. | 2026-10-07 | Contribution: world-model imagination for UAV object search under partial observability. Relevance: embodied aerial navigation/search.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Understanding and Mitigating Token-Pruning-Induced Vulnerabilities in VLMs](http://arxiv.org/abs/2610.09703v1)
Wang et al. | 2026-10-07 | Contribution: evaluates and mitigates safety vulnerabilities from token pruning in VLMs. Relevance: pruning safety and inference optimization.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [VisionWeave: Weaving Elastic Visual Representations as a Native Capability of MLLMs](http://arxiv.org/abs/2610.07987v1)
Feng et al. | 2026-10-06 | Contribution: uses elastic visual representations to reduce dense tokens in MLLMs. Relevance: multimodal inference optimization.

### Multimodal LLM Pruning
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [VLA-ACL: Action-Consistent Visual Token Pruning for Efficient Vision-Language-Action Models](http://arxiv.org/abs/2610.08133v2)
Du et al. | 2026-10-06 | Contribution: action-consistent visual token pruning for efficient VLA models. Relevance: multimodal/VLA pruning.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [DIPrune: Task-Aware Token Pruning with Dual Importance for Efficient Multimodal Language Models](http://arxiv.org/abs/2610.08341v1)
Yang et al. | 2026-10-06 | Contribution: task-aware dual-importance token pruning for MLLMs. Relevance: multimodal LLM pruning.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [CARE: Certifying Acceleration for Vision-Language-Action Inference](http://arxiv.org/abs/2610.08917v1)
Liu et al. | 2026-10-06 | Contribution: certifies acceleration for VLA inference with token pruning. Relevance: safe multimodal inference optimization.

### Continual Learning
#### [Stability-Plasticity Balance via Singular-Vector Selection in LLM Continual Learning](http://arxiv.org/abs/2610.11076v1)
Wang et al. | 2026-10-08 | Contribution: selects singular vectors to balance stability and plasticity in LLM continual learning. Relevance: continual learning for LLMs.

#### [From a Prompt to Repertoires: Evolving Functional REpertoires Enable LLM Continual Learning](http://arxiv.org/abs/2610.11373v1)
Liu et al. | 2026-10-08 | Contribution: evolves functional repertoires via prompts for continual learning. Relevance: prompt-based continual learning.

#### [Continual Learning without Continual Training](http://arxiv.org/abs/2610.10379v1)
Narayanan et al. | 2026-10-07 | Contribution: avoids continued optimization for continual learning. Relevance: alternative continual learning paradigm.

#### [Tracing the Thoughts of a Coding Agent Playing ARC-AGI-3: Lessons for Continual Learning](http://arxiv.org/abs/2610.11450v1)
Wu et al. | 2026-10-08 | Contribution: studies coding-agent learning across abstract reasoning tasks using written artifacts as state. Relevance: continual learning in agents.

#### [Where to Adapt Matters: Layer-Selective Fine-Tuning for Capability Retention](http://arxiv.org/abs/2610.11620v1)
Pang et al. | 2026-10-08 | Contribution: layer-selective fine-tuning for retaining general capabilities. Relevance: mitigating forgetting in continual adaptation.

#### [EvoKnow: Continual Knowledge Evolution for AI-Generated Image Detection](http://arxiv.org/abs/2610.11381v1)
Peng et al. | 2026-10-08 | Contribution: continual knowledge evolution for AI-generated image detection. Relevance: continual learning under emerging generators.

#### [UniSkill: Learning Actor-Aligned Skill Proposals for an Evolving Policy](http://arxiv.org/abs/2610.10164v1)
Lu et al. | 2026-10-07 | Contribution: actor-aligned skill proposals for an evolving policy and skillbank. Relevance: continual skill learning.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Are Parameter-Efficient Fine-tuning Methods Really Different?](http://arxiv.org/abs/2610.09122v1)
Li et al. | 2026-10-06 | Contribution: compares six PEFT methods on performance, forgetting, and pretrained-weight changes. Relevance: continual learning/PEFT.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [CIRSeg: Coarse-to-Fine Intensity-Robust Liver Segmentation with Source-Free Continual Test-Time Adaptation](http://arxiv.org/abs/2610.09784v1)
Xu et al. | 2026-10-07 | Contribution: source-free continual test-time adaptation for liver segmentation. Relevance: continual learning under domain shift.

## 视觉感知

### Event-Based Vision
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Bringing BNNs to Fast Event Processing](http://arxiv.org/abs/2610.09873v1)
Longour et al. | 2026-10-07 | Contribution: applies binary neural networks to event-camera processing. Relevance: efficient event-based vision.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [PIE-PS: Photometric Stereo from Physical Irradiance Event Streams](http://arxiv.org/abs/2610.08188v1)
Meng et al. | 2026-10-06 | Contribution: performs photometric stereo from physical irradiance event streams. Relevance: event-based geometry.

### 3D Point Cloud Perception
#### [FloorSAV: Elucidating Spatial Audio-Visual Context with 2D Floormap for AV-LLMs](http://arxiv.org/abs/2610.11310v1)
Kim et al. | 2026-10-08 | Contribution: uses 2D floormaps to provide spatial audio-visual context for AV-LLMs. Relevance: 3D spatial reasoning for embodied perception.

#### [TKCAM: Text and Keyframe to Camera Trajectory Generation](http://arxiv.org/abs/2610.11105v1)
Yang et al. | 2026-10-08 | Contribution: generates controllable camera trajectories from text and keyframes. Relevance: 3D scene and camera-motion understanding.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Sparse2comm: Towards Robust Cooperative 3D Object Detection](http://arxiv.org/abs/2610.08573v1)
Yang et al. | 2026-10-06 | Contribution: robust cooperative 3D object detection under bandwidth and unreliable cooperation. Relevance: 3D point cloud perception.

### 3D Point Cloud Perception and Tracking
#### [Point-Focused Attention Meets Context-Scan State Space: Robust Biological Visual Perception for Point Cloud Representation](http://arxiv.org/abs/2610.11342v1)
Qu et al. | 2026-10-08 | Contribution: PointLearner combines point-focused attention with state-space context for point cloud representation. Relevance: point cloud perception/tracking backbone.

## Cross-Topic Signals
- Persistent agent memory governance and continual learning both target retention-versus-adaptation trade-offs, especially admit/present decisions versus stability-plasticity control.
- Verified tool-call gates and certified pruning/acceleration show a shared push toward safety certification in agent workflows and compressed inference.
- VLA robustness, geometric reasoning, and multimodal pruning converge on efficient spatial grounding for embodied action models.
- Self-play and self-improvement recur across test-time scaling, OCR, and continual-learning agents, suggesting serving/test-time experience as a learning substrate.
- World models, camera trajectories, and 3D perception feed embodied navigation and VLA spatial reasoning through richer scene representations.

## Priority Reading
#### [Safe, Persistent, and Evolving Agent Harness for Understanding Partially Observable Worlds](http://arxiv.org/abs/2610.11552v1)
Reason: Directly addresses enterprise-agent requirements: policy compliance, hidden side effects, partial observability, and long-horizon persistence.

#### [Explicit Geometric Chain-of-Thought for Vision-Language-Action in Autonomous Driving](http://arxiv.org/abs/2610.10390v1)
Reason: Targets the core VLA mismatch between 2D language/vision reasoning and precise 3D action requirements.

#### [Stability-Plasticity Balance via Singular-Vector Selection in LLM Continual Learning](http://arxiv.org/abs/2610.11076v1)
Reason: Provides a concrete parameter-selection method for catastrophic forgetting, a central continual-learning bottleneck.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*