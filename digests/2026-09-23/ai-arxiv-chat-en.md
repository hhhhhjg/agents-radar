# Lab Research Topics Radar 2026-09-23

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 20 new + 0 seen in the last 14 days | Generated: 2026-09-22 23:57 UTC

---

## Today's Overview
- **LLM Agent Engineering**: 4 new matches. Progress includes agent-harness self-improvement, MCP tool-interface benchmarking, policy-constrained action governance, plus cross-listed coding-agent reward work.
- **Agent Test-Time Scaling and Self-Improvement**: 1 new match. FLARE proposes dense generative-reward supervision for long-horizon coding agents.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: 5 new matches. Themes include 3D spatial grounding, low-bit quantization, failure recovery, navigation-oriented VLA, and embodied simulation infrastructure.
- **Embodied Navigation**: 3 new matches. Work covers USV river navigation, VLN policy interpretation/steering, and open-vocabulary instance navigation with topological graphs.
- **LLM Pruning and Inference Optimization**: 3 new matches. Includes whole-slide pathology token pruning and cross-listed visual-token/simulation efficiency work.
- **Multimodal LLM Pruning**: 2 new matches. Both target visual token pruning, with training-free pre-LLM pruning and layer-aware position embeddings.
- **Continual Learning**: 3 new matches. Covers Muon for continual learning, information-proximal self-distillation, and federated PEFT backbone selection.
- **Event-Based Vision**: No new papers today.
- **3D Point Cloud Perception**: 3 new matches. Includes robust multimodal 3D detection, forest point-cloud foundation modeling, and unknown-scale point-cloud completion.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [RRSI: Regularized Recursive Self-Improvement of Agent Harnesses](http://arxiv.org/abs/2609.24972v1)
Peng Xia, Rujun Han, Zifeng Wang et al. | 2026-09-21 — Automates component-wise edits of an LLM agent’s prompts, control flow, tooling, memory, and context management. Relevance: directly targets automated agent-harness engineering.
#### [MCP-GRANITE Benchmark: GRANularity Interface TEsting for MCP-Based LLM Agents](http://arxiv.org/abs/2609.24161v1)
Demetris Paschalides, Moysis Symeonides, George Pallis et al. | 2026-09-21 — Benchmarks how tool-interface granularity affects MCP-based agent tool selection and argument construction. Relevance: informs MCP tool design and agent engineering evaluation.
#### [ActGov: Governing LLM Agent Actions via Policy-Constrained Validation](http://arxiv.org/abs/2609.24446v1)
Kaiyuan Zhang, Yuke Peng, Ke Jiang et al. | 2026-09-21 — Validates LLM agent actions against policy constraints to govern long-horizon external-tool execution. Relevance: addresses safe and authorized agent action execution.

### Agent Test-Time Scaling and Self-Improvement
#### [FLARE: A Full-Lifecycle Dense Supervision Paradigm for Long-Horizon Coding Agents via Generative Reward Model](http://arxiv.org/abs/2609.23808v1)
Jingxuan Xu, Gang Wu, Yanan Wu et al. | 2026-09-20 — Uses a generative reward model to provide dense supervision across long-horizon coding-agent trajectories. Relevance: improves credit assignment for test-time scaling and agent self-improvement.

### LLM Agent Societies
No new papers today.

## 具身智能
### Vision-Language-Action Models
#### [Bridge3D: Enabling Vision-Language-Action Models to See and Act in 3D](http://arxiv.org/abs/2609.24525v1)
Haoxuan Li, Sixu Yan, Lianghui Zhu et al. | 2026-09-21 — Extends VLA models beyond 2D-centric observations toward precise 3D spatial manipulation. Relevance: core VLA improvement for spatial grounding and embodied control.
#### [FoldQuantVLA: Native Low-Bit Quantization of Vision-Language-Action Models via Consistent Folding](http://arxiv.org/abs/2609.24433v1)
Hung T. Ho, Khanh D. Nguyen, Quang D. Nguyen et al. | 2026-09-21 — Presents post-training low-bit quantization with consistent activation representation for VLA inference. Relevance: supports efficient VLA deployment under latency constraints.
#### [CARE: Experience-Guided Atomic Corrective Execution for Vision-Language-Action Policies](http://arxiv.org/abs/2609.24118v1)
Junlan Xiao, Junwei Jiang, Zaibin Zhang et al. | 2026-09-21 — Learns from execution failures to perform corrective atomic robotic execution. Relevance: improves VLA policy robustness and recovery.

### Embodied Navigation
#### [What do VLM-Based Vision-Language Navigation Models Rely on: Interpreting and Steering Policy Behavior](http://arxiv.org/abs/2609.24576v1)
Débora Oliveira Makowski, Samiran Gode, Abhijeet Nayak et al. | 2026-09-21 — Interprets and steers how VLM-based VLN policies route visual and language information. Relevance: improves understanding and control of embodied navigation policies.
#### [A Topological Representation with Object-Path Graphs for Open-Vocabulary Instance Navigation](http://arxiv.org/abs/2609.24189v1)
Linwei Zheng, Daojie Peng, Bingtao Wang et al. | 2026-09-21 — Uses object-path graphs as a topological representation for open-vocabulary instance navigation. Relevance: advances structured memory and language-guided embodied navigation.
#### [RiverVLN: Phase-Grounded Temporal Vision--Language Navigation for Unmanned Surface Vehicles](http://arxiv.org/abs/2609.23423v1)
Jieling Wu, Yuehao Huang, Jiajun Lv et al. | 2026-09-20 — Adapts vision-language navigation to USVs with phase-grounded temporal reasoning. Relevance: extends embodied navigation beyond indoor/terrestrial assumptions.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [SLICEChat: Progressive In-Encoder Token Pruning for Whole-Slide Pathology Language Models](http://arxiv.org/abs/2609.24894v1)
Ali Kerem Bozkurt, Baris Cem Bakay, Ibrahim Kulac et al. | 2026-09-21 — Applies progressive in-encoder token pruning for gigapixel whole-slide pathology language models. Relevance: reduces multimodal long-context inference cost in a specialized LLM setting.

### Multimodal LLM Pruning
#### [VPRune: Efficient Training-free Pre-LLM Visual Token Pruning](http://arxiv.org/abs/2609.24485v1)
Guangchuan Lv, Dianxing Shi, Dingjie FU | 2026-09-21 — Proposes training-free visual token pruning before the LLM while identifying sources of degradation. Relevance: directly targets multimodal LLM inference efficiency.
#### [Layer-Aware Position Embeddings for Visual Token Pruning in Multimodal Large Language Models](http://arxiv.org/abs/2609.23715v1)
Yahong Wang, Zhangkai Ni, Juncheng Wu et al. | 2026-09-20 — Reassigns position embeddings in a layer-aware way to preserve performance after visual token pruning. Relevance: addresses a key failure mode in pruned MLLMs.

### Continual Learning
#### [iSDFT: Information-Proximal Self-Distillation for Continual Learning in LLMs](http://arxiv.org/abs/2609.24646v1)
Ahmed Khaled Khamis, Xiaotong Ji, Hassan Jaber et al. | 2026-09-21 — Controls demonstration influence in on-policy self-distillation to reduce forgetting. Relevance: directly advances continual learning for LLMs.
#### [Muon Can Outperform Dedicated Continual Learning Methods](http://arxiv.org/abs/2609.24678v1)
Sebastian George Sincari, Bogdan Alexandru Gheorghe, Antonio Barbalau | 2026-09-21 — Examines Muon optimizer behavior for continual learning with LoRA. Relevance: challenges dedicated continual-learning methods and links optimization to forgetting.
#### [Perplexity Predicts Protection: Choosing Pretrained Backbones for Worst-Client Fairness in Federated Parameter-Efficient Fine-Tuning](http://arxiv.org/abs/2609.23463v1)
Kiran Naseer, Samreen Azhar, Umar Shoaib et al. | 2026-09-20 — Relates pretrained-backbone perplexity to worst-client fairness in federated LoRA fine-tuning. Relevance: informs parameter-efficient adaptation under heterogeneous continual/federated settings.

## 视觉感知
### Event-Based Vision
No new papers today.

### 3D Point Cloud Perception
#### [Towards robust multimodal 3D object detection via visual foundation models](http://arxiv.org/abs/2609.23541v1)
Ziying Song, Lin Liu, Hongyu Pan et al. | 2026-09-20 — Uses visual foundation models to improve LiDAR-camera 3D detection robustness under OOD corruptions. Relevance: directly targets robust 3D point-cloud perception.
#### [Toward a foundation model for forest point clouds](http://arxiv.org/abs/2609.24787v1)
Yuanwen Yue, Stefano Puliti, Damien Robert et al. | 2026-09-21 — Builds a foundation model for forest point-cloud attributes across tasks, sensors, and forest types. Relevance: extends 3D point-cloud perception toward general-purpose foundation modeling.
#### [ScaleBlind: Point Cloud Completion under Unknown Scale](http://arxiv.org/abs/2609.23404v1)
Shenghui Wu, Chen Wang, Yuan Feng et al. | 2026-09-20 — Tackles point-cloud completion when the input scale is unknown. Relevance: addresses a practical robustness gap in 3D point-cloud perception pipelines.

### 3D Point Cloud Perception and Tracking
No new papers today.

## Cross-Topic Signals
- **Agent self-improvement and test-time scaling are converging**: RRSI automates agent-harness edits, while FLARE supplies dense rewards for long-horizon coding-agent trajectories.
- **Visual token compression spans multiple MLLM stages**: VPRune prunes before the LLM, SLICEChat prunes inside the encoder, and Layer-Aware position embeddings repair pruned-token representations.
- **3D structure is entering embodied action and navigation**: Bridge3D grounds VLA in 3D, Object-Path Graphs structure navigation, and robust 3D detection/forest point clouds advance 3D perception.
- **Efficient embodied deployment is becoming a distinct thread**: FoldQuantVLA connects VLA models with low-bit inference optimization.
- **PEFT and continual adaptation remain linked**: iSDFT, Muon, and federated backbone selection all address LoRA-style adaptation, forgetting, or fairness.

## Priority Reading
- **RRSI** — Read fully because it directly automates agent harness improvement, a core LLM Agent Engineering problem.
- **Bridge3D** — Read fully because it addresses the 2D-to-3D spatial gap in VLA models, central to embodied intelligence.
- **FLARE** — Read fully because it bridges long-horizon agent engineering with test-time scaling via dense generative rewards.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*