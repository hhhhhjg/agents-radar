# Lab Research Topics Radar 2026-10-09

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 16 new + 0 seen in the last 14 days | Generated: 2026-10-09 01:39 UTC

---

## Today's Overview
- **LLM Agent Engineering**: 3 new papers on safe/persistent agent harnesses, statically verified tool-call policy gates, and governed persistent memory.
- **Agent Test-Time Scaling and Self-Improvement**: 2 new papers: self-play for document OCR and constrained bandit-strategy selection for RL agents.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: 3 new papers on geometric chain-of-thought for driving, wrist-camera view robustness, and instruction-language sensitivity.
- **Embodied Navigation**: 3 new matches: lifelong small-object navigation, IntactWorld world modeling, and cross-listed TKCAM camera-trajectory generation (placed under 3D point cloud perception).
- **LLM Pruning and Inference Optimization**: No new papers today.
- **Multimodal LLM Pruning**: No new papers today.
- **Continual Learning**: 3 new papers on singular-vector selection, evolving prompt repertoires, and continual learning without continual training.
- **Event-Based Vision**: No new papers today.
- **3D Point Cloud Perception**: 2 new papers: FloorSAV for spatial audio-visual context and TKCAM for camera-trajectory generation.
- **3D Point Cloud Perception and Tracking**: 1 new paper: PointLearner for biological-visual point cloud representation.

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [Safe, Persistent, and Evolving Agent Harness for Understanding Partially Observable Worlds](http://arxiv.org/abs/2610.11552v1)
Y. Gao et al.; 2026-10-08. Contribution: proposes an agent harness for strict policy compliance, hidden side effects, and long-horizon persistence under partial observability. Relevance: directly targets core LLM agent engineering for enterprise tool-use workflows.

#### [NOMOS: Compiling Written Policies into Statically Verified Tool-Call Gates for LLM Agents](http://arxiv.org/abs/2610.11030v1)
M.-Y. Yu et al.; 2026-10-08. Contribution: compiles written policies into statically verified tool-call gates to prevent silent policy violations. Relevance: central to safe, policy-compliant LLM agent tool use.

#### [What to Admit and How to Present: Governing Persistent Memory in LLM Agents](http://arxiv.org/abs/2610.11188v1)
C. Liu, D. Ding; 2026-10-08. Contribution: separates admission and presentation governance for persistent memory to reduce sycophancy and cross-domain leakage. Relevance: directly addresses LLM agent memory governance.

### Agent Test-Time Scaling and Self-Improvement

#### [SP-DocReader: Difference-Aware Self-Play for Precise Document OCR](http://arxiv.org/abs/2610.11148v1)
W. Liao et al.; 2026-10-08. Contribution: presents a self-play OCR framework using reading discrepancy masking to target residual errors. Relevance: applies self-improvement/test-time self-play to vision-language document reading.

#### [Constrained Command-Conditioned Reinforcement Learning with Bandit Strategy Selection in Real-Time Strategy Games](http://arxiv.org/abs/2610.11663v1)
N. Leenders et al.; 2026-10-08. Contribution: separates strategic command selection via bandit strategy selection from learned unit control under constraints. Relevance: relevant to adaptive strategy selection and self-improvement in RL agents, though not LLM-specific.

### LLM Agent Societies
No new papers today.

## 具身智能

### Vision-Language-Action Models

#### [Explicit Geometric Chain-of-Thought for Vision-Language-Action in Autonomous Driving](http://arxiv.org/abs/2610.10390v1)
X. Gui et al.; 2026-10-07. Contribution: introduces explicit geometric chain-of-thought to align 2D vision-language reasoning with precise 3D geometric cues for VLA driving. Relevance: directly addresses VLA grounding and reasoning for autonomous driving.

#### [WARP-VLA: Wrist-Camera Adaptation for View-Robust Policy Execution in Vision-Language-Action Models](http://arxiv.org/abs/2610.11508v1)
J. Lee et al.; 2026-10-08. Contribution: adapts wrist-camera views to improve VLA policy execution under camera configuration changes. Relevance: targets cross-setup VLA deployment and view robustness in robotic manipulation.

#### [Rephrase Before You Act: Characterizing and Mitigating Language Sensitivity in Vision-Language-Action Models](http://arxiv.org/abs/2610.10526v1)
M. Watts, Y. Cui; 2026-10-07. Contribution: characterizes VLA sensitivity to instruction phrasing and proposes mitigation. Relevance: addresses language robustness in VLA models.

### Embodied Navigation

#### [Lifelong small-object navigation in changing object layouts: a benchmark and method](http://arxiv.org/abs/2610.10125v1)
J. Huang et al.; 2026-10-07. Contribution: introduces a benchmark and method for lifelong navigation to small portable objects in changing layouts. Relevance: directly targets embodied navigation under object movement and occlusion.

#### [IntactWorld: Joint World Modeling with Intact Features](http://arxiv.org/abs/2610.11174v1)
B. Tan et al.; 2026-10-08. Contribution: proposes joint world modeling with intact features to improve intrinsic real-world logic in generated video. Relevance: relevant to embodied navigation through better world modeling.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization
No new papers today.

### Multimodal LLM Pruning
No new papers today.

### Continual Learning

#### [Stability-Plasticity Balance via Singular-Vector Selection in LLM Continual Learning](http://arxiv.org/abs/2610.11076v1)
L. Wang et al.; 2026-10-08. Contribution: uses singular-vector selection to balance stability and plasticity in PEFT for LLM continual learning. Relevance: directly addresses catastrophic forgetting in LLM domain adaptation.

#### [From a Prompt to Repertoires: Evolving Functional REpertoires Enable LLM Continual Learning](http://arxiv.org/abs/2610.11373v1)
F. Liu et al.; 2026-10-08. Contribution: evolves prompt-based functional repertoires for continual learning instead of only updating model parameters. Relevance: offers a prompt-level approach to LLM continual learning.

#### [Continual Learning without Continual Training](http://arxiv.org/abs/2610.10379v1)
N. Narayanan et al.; 2026-10-07. Contribution: proposes continual learning without continued optimization or replay/regularization. Relevance: challenges optimization-centric continual learning for new domains and classes.

## 视觉感知

### Event-Based Vision
No new papers today.

### 3D Point Cloud Perception

#### [FloorSAV: Elucidating Spatial Audio-Visual Context with 2D Floormap for AV-LLMs](http://arxiv.org/abs/2610.11310v1)
K.-R. Kim et al.; 2026-10-08. Contribution: uses a 2D floormap to give audio-visual LLMs global geometric context without costly fine-tuning. Relevance: relevant to 3D spatial perception and geometric context for embodied AV-LLMs.

#### [TKCAM: Text and Keyframe to Camera Trajectory Generation](http://arxiv.org/abs/2610.11105v1)
H. Yang et al.; 2026-10-08. Contribution: generates controllable camera motion via text- and keyframe-conditioned generative masked modeling. Relevance: relevant to 3D scene understanding through camera trajectory generation; cross-listed with embodied navigation.

### 3D Point Cloud Perception and Tracking

#### [Point-Focused Attention Meets Context-Scan State Space: Robust Biological Visual Perception for Point Cloud Representation](http://arxiv.org/abs/2610.11342v1)
K. Qu et al.; 2026-10-08. Contribution: introduces PointLearner combining point-focused attention and context-scan state space for point cloud representation. Relevance: directly targets robust 3D point cloud perception/tracking representation.

## Cross-Topic Signals
- Policy and memory governance in LLM agents (NOMOS, What to Admit, Safe Harness) connects agent engineering with persistent adaptation and safety.
- Self-play and strategy selection (SP-DocReader, bandit RL) cross-cuts Agent Test-Time Scaling/Self-Improvement and robust agent decision-making.
- Geometric/spatial reasoning methods appear across VLA, 3D point cloud perception, and embodied navigation (Explicit Geometric CoT, FloorSAV, TKCAM, PointLearner).
- Robustness under distribution shift links VLA camera/instruction sensitivity, navigation changing object layouts, and continual learning stability-plasticity.
- World modeling and persistent representations (IntactWorld, governed persistent memory) both address evolving internal models of environments.

## Priority Reading
- [NOMOS](http://arxiv.org/abs/2610.11030v1): concrete static verification mechanism for tool-call safety in LLM agents.
#### - [Explicit Geometric Chain-of-Thought for Vision-Language-Action in Autonomous Driving](http://arxiv.org/abs/2610.10390v1): central to improving VLA 3D geometric grounding.
#### - [Stability-Plasticity Balance via Singular-Vector Selection in LLM Continual Learning](http://arxiv.org/abs/2610.11076v1): concrete PEFT method for LLM continual learning and forgetting.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*