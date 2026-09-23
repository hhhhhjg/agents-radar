# Lab Research Topics Radar 2026-09-23

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 42 new + 0 seen in the last 14 days | Generated: 2026-09-22 23:57 UTC

---

# Today's Overview
- **LLM Agent Engineering**: New papers target harness self-improvement, MCP tool-interface granularity, action governance, collusion, security benchmarking, memory calibration, paired-rollout RL, self-modification oversight, and execution integrity.
- **Agent Test-Time Scaling and Self-Improvement**: One new paper, FLARE, uses a generative reward model for dense supervision in long-horizon coding agents, addressing sparse-reward credit assignment.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: New papers advance 3D grounding, failure recovery, force-aware humanoid contact, topology-informed prompting, simulation infrastructure, world-model distillation, closed-loop robustness, and 3D endoscopic navigation.
- **Embodied Navigation**: New papers cover USV vision-language navigation, VLM policy interpretation, spatial audio, topological instance navigation, embodied VLM coordination, UAV Physical AI benchmarking, and monocular depth estimation.
- **LLM Pruning and Inference Optimization**: New papers address native low-bit VLA quantization and in-encoder token pruning for whole-slide pathology MLLMs.
- **Multimodal LLM Pruning**: New papers focus on training-free pre-LLM visual token pruning and layer-aware position embeddings for pruned visual tokens.
- **Continual Learning**: New papers span Muon vs. dedicated CL, federated PEFT fairness, self-distillation, LoRA factor optimization, ego-exo continual learning, efficient VFM adaptation, LoRA hypernetworks, agent post-training, time-incremental pretraining, and streaming anomaly detection.
- **Event-Based Vision**: No new papers today.
- **3D Point Cloud Perception**: New papers cover robust multimodal 3D object detection, forest point-cloud foundation models, and point-cloud completion under unknown scale.
- **3D Point Cloud Perception and Tracking**: No new papers today.

# Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering
#### [RRSI: Regularized Recursive Self-Improvement of Agent Harnesses](http://arxiv.org/abs/2609.24972v1)
Peng Xia et al. | 2026-09-21. Contribution: Regularized recursive self-improvement for agent harnesses, iteratively proposing and selecting component-wise edits. Relevance: Directly targets automated agent-harness improvement.

#### [MCP-GRANITE Benchmark: GRANularity Interface TEsting for MCP-Based LLM Agents](http://arxiv.org/abs/2609.24161v1)
Demetris Paschalides et al. | 2026-09-21. Contribution: Benchmark for MCP tool-interface granularity testing. Relevance: Evaluates how functional decomposition affects tool selection and argument construction.

#### [ActGov: Governing LLM Agent Actions via Policy-Constrained Validation](http://arxiv.org/abs/2609.24446v1)
Kaiyuan Zhang et al. | 2026-09-21. Contribution: Policy-constrained validation to govern LLM agent actions. Relevance: Addresses authorization and tool-output propagation risks in long-horizon agents.

#### [Emergent Collusion in Long-Horizon LLM Agent Interaction](http://arxiv.org/abs/2609.24967v1)
Xinrui Shi et al. | 2026-09-21. Contribution: Studies collusion emergence in long-horizon multi-agent interaction. Relevance: Informs multi-agent safety and coordination in agent engineering.

#### [DUMA-Bench: A Dual-Control Multi-Agent Benchmark for Evaluating LLM Agent Security](http://arxiv.org/abs/2609.24662v1)
Ivan Aleksandrov et al. | 2026-09-21. Contribution: Dual-control multi-agent benchmark for LLM agent security. Relevance: Tests interactive security dynamics beyond static evaluations.

#### [MemCalib: Benchmarking and Optimizing Memory Use in LLM Agents](http://arxiv.org/abs/2609.24259v1)
Ruike Cao et al. | 2026-09-21. Contribution: Benchmarks and optimizes memory use in LLM agents. Relevance: Focuses on how context memories influence agent responses.

#### [Luck Is Not Skill: When Do Paired Rollouts Help Group-Relative RL of LLM Agents?](http://arxiv.org/abs/2609.24144v1)
Nazmus Sakib | 2026-09-21. Contribution: Studies paired rollouts for group-relative RL of LLM agents under environment noise. Relevance: Improves agent RL credit assignment during training.

#### [Self-Healing Harness for Runtime Oversight of Agent Self-Modification](http://arxiv.org/abs/2609.24130v1)
Sina Tayebati et al. | 2026-09-21. Contribution: Runtime admission control for agent self-modification. Relevance: Provides oversight for persistence of self-generated agent changes.

#### [APEXA: Execution-Integrity Enforcement for Multi-Agent LLM Automation of Synchrotron Data Reduction](http://arxiv.org/abs/2609.24165v1)
Pawan K. Tripathi et al. | 2026-09-21. Contribution: Execution-integrity enforcement for multi-agent LLM automation of synchrotron data reduction. Relevance: Shows multi-agent LLM control in a real scientific pipeline.

### Agent Test-Time Scaling and Self-Improvement
#### [FLARE: A Full-Lifecycle Dense Supervision Paradigm for Long-Horizon Coding Agents via Generative Reward Model](http://arxiv.org/abs/2609.23808v1)
Jingxuan Xu et al. | 2026-09-20. Contribution: Full-lifecycle dense supervision via generative reward model for long-horizon coding agents. Relevance: Directly addresses test-time scaling and credit assignment in agent self-improvement.

## 具身智能

### Vision-Language-Action Models
#### [Bridge3D: Enabling Vision-Language-Action Models to See and Act in 3D](http://arxiv.org/abs/2609.24525v1)
Haoxuan Li et al. | 2026-09-21. Contribution: Enables VLA models to see and act in 3D for precise spatial manipulation. Relevance: Core VLA capability for 3D grounding.

#### [CARE: Experience-Guided Atomic Corrective Execution for Vision-Language-Action Policies](http://arxiv.org/abs/2609.24118v1)
Junlan Xiao et al. | 2026-09-21. Contribution: Experience-guided atomic corrective execution for VLA policies. Relevance: Improves VLA recovery when execution deviates from nominal trajectories.

#### [Opt2VLA: Force-Aware Vision-Language-Action for Contact-Rich Humanoid Whole-Body Manipulation](http://arxiv.org/abs/2609.23968v1)
Fukang Liu et al. | 2026-09-21. Contribution: Force-aware VLA for contact-rich humanoid whole-body manipulation. Relevance: Extends VLA to force regulation in humanoid control.

#### [Topology-Informed Visual Prompting For Vision Language Action Policies](http://arxiv.org/abs/2609.23944v1)
Haoyang Wu et al. | 2026-09-20. Contribution: Topology-informed visual prompting for VLA policies. Relevance: Tackles partial observability in manipulation with complex obstacle geometry.

#### [Uranus: Building the Next-Generation Simulation Infrastructure for Embodied AI](http://arxiv.org/abs/2609.24815v1)
Wenkang Qin et al. | 2026-09-21. Contribution: Data-driven robot simulator for embodied AI. Relevance: Infrastructure for VLA policy training, data generation, and evaluation.

#### [Think Like a World Model, Act Like a VLA: Distilling World-Model Representations into Compact Robot Policies](http://arxiv.org/abs/2609.24682v1)
Trung Dao et al. | 2026-09-21. Contribution: Distills world-model representations into compact robot policies. Relevance: Improves VLA robustness by adding world-response objectives.

#### [LIBERO-VPro: Benchmarking Closed-Loop Visual Robustness of Robotic Foundation Models](http://arxiv.org/abs/2609.24350v1)
Huiqiong Li et al. | 2026-09-21. Contribution: Benchmark for closed-loop visual robustness of robotic foundation models. Relevance: Evaluates VLA behavior under corrupted visual observations.

#### [StenoVLA-3D: 3D-Aware Reasoning VLA for Navigation Through Gastrointestinal Stenoses](http://arxiv.org/abs/2609.24187v1)
Tamima Tabassum et al. | 2026-09-21. Contribution: 3D-aware reasoning VLA for navigation through gastrointestinal stenoses. Relevance: Applies VLA to texture-poor endoscopic navigation with lesion retention.

### Embodied Navigation
#### [RiverVLN: Phase-Grounded Temporal Vision--Language Navigation for Unmanned Surface Vehicles](http://arxiv.org/abs/2609.23423v1)
Jieling Wu et al. | 2026-09-20. Contribution: Phase-grounded temporal VLN for unmanned surface vehicles. Relevance: Extends VLN to river navigation with dynamic, continuous motion.

#### [What do VLM-Based Vision-Language Navigation Models Rely on: Interpreting and Steering Policy Behavior](http://arxiv.org/abs/2609.24576v1)
Débora Oliveira Makowski et al. | 2026-09-21. Contribution: Interprets and steers VLM-based VLN policy behavior. Relevance: Explains modality routing in navigation policies.

#### [A Topological Representation with Object-Path Graphs for Open-Vocabulary Instance Navigation](http://arxiv.org/abs/2609.24189v1)
Linwei Zheng et al. | 2026-09-21. Contribution: Object-path graphs for open-vocabulary instance navigation. Relevance: Uses topological priors for language-guided navigation.

#### [ME-VLM: A Unified VLM for Embodied Cognition and Agent Coordination](http://arxiv.org/abs/2609.24526v1)
Li Auto Inc. | 2026-09-21. Contribution: Unified VLM for embodied cognition and agent coordination. Relevance: Grounds vision-language understanding in embodied navigation and coordination.

#### [OmniEcho: Spatial Audio Understanding for Embodied Agents](http://arxiv.org/abs/2609.23407v1)
Ruixun Liu et al. | 2026-09-20. Contribution: Spatial audio understanding for embodied agents. Relevance: Adds auditory localization to embodied navigation perception.

#### [PhysAI-Bench: A Benchmark for LLM-Based Agentic Decision-Making in Autonomous UAV-Centric Physical AI](http://arxiv.org/abs/2609.23695v1)
Mohamed Amine Ferrag et al. | 2026-09-20. Contribution: Benchmark for LLM-based agentic decision-making in UAV-centric Physical AI. Relevance: Evaluates embodied navigation and physical decision-making.

#### [CMAMBADEPTH: Self-supervised Monocular Depth Estimation with Channel Mamba and Hybrid Attention](http://arxiv.org/abs/2609.24494v1)
Xuezhi Xiang et al. | 2026-09-21. Contribution: Self-supervised monocular depth estimation with channel Mamba and hybrid attention. Relevance: Provides single-camera scene understanding for navigation.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization
#### [FoldQuantVLA: Native Low-Bit Quantization of Vision-Language-Action Models via Consistent Folding](http://arxiv.org/abs/2609.24433v1)
Hung T. Ho et al. | 2026-09-21. Contribution: Native low-bit post-training quantization for VLA inference. Relevance: Reduces observation-to-action latency while preserving robot behavior.

#### [SLICEChat: Progressive In-Encoder Token Pruning for Whole-Slide Pathology Language Models](http://arxiv.org/abs/2609.24894v1)
Ali Kerem Bozkurt et al. | 2026-09-21. Contribution: Progressive in-encoder token pruning for whole-slide pathology language models. Relevance: Compresses gigapixel-scale MLLM inputs before slide encoding.

### Multimodal LLM Pruning
#### [VPRune: Efficient Training-free Pre-LLM Visual Token Pruning](http://arxiv.org/abs/2609.24485v1)
Guangchuan Lv et al. | 2026-09-21. Contribution: Training-free pre-LLM visual token pruning for LVLMs. Relevance: Reduces visual token cost while addressing text-guided selection bias and information loss.

#### [Layer-Aware Position Embeddings for Visual Token Pruning in Multimodal Large Language Models](http://arxiv.org/abs/2609.23715v1)
Yahong Wang et al. | 2026-09-20. Contribution: Layer-aware position embeddings for visual token pruning in MLLMs. Relevance: Mitigates position-embedding disruption after visual token reduction.

### Continual Learning
#### [Muon Can Outperform Dedicated Continual Learning Methods](http://arxiv.org/abs/2609.24678v1)
Sebastian George Sincari et al. | 2026-09-21. Contribution: Shows Muon can outperform dedicated continual learning methods. Relevance: Challenges LoRA orthogonality assumptions in CL.

#### [iSDFT: Information-Proximal Self-Distillation for Continual Learning in LLMs](http://arxiv.org/abs/2609.24646v1)
Ahmed Khaled Khamis et al. | 2026-09-21. Contribution: Information-proximal self-distillation for continual learning in LLMs. Relevance: Controls demonstration information during on-policy self-distillation.

#### [Bilinear Optimization Divergence: Diagnosing Factor-Constrained LoRA Continual Learning](http://arxiv.org/abs/2609.23594v1)
YongShun Wang et al. | 2026-09-20. Contribution: Diagnoses factor-constrained LoRA continual learning. Relevance: Analyzes how LoRA updates distribute energy and protect past knowledge.

#### [CE$^4$L: Continual Ego, Exo, and Ego-Exo Learning](http://arxiv.org/abs/2609.23492v1)
Hongwei Yan et al. | 2026-09-20. Contribution: Continual ego, exo, and ego-exo learning. Relevance: Couples viewpoint and task shifts for embodied continual perception.

#### [LoRA-generating hypernetworks for efficient on-device LLM generative personalization](http://arxiv.org/abs/2609.24979v1)
Sean Augenstein et al. | 2026-09-21. Contribution: Hypernetworks for on-device LLM generative personalization. Relevance: Efficient adaptation and personalization related to continual learning.

#### [ACLArena: Agent Continue Learning in Multi-stage Post-training](http://arxiv.org/abs/2609.23989v1)
Haixin Wang et al. | 2026-09-21. Contribution: Benchmark for agent continual learning in multi-stage post-training. Relevance: Studies capability integration and forgetting across training stages.

#### [Time-Incremental Continued Pretraining of LLMs: Knowledge Updates Without Catastrophic Forgetting](http://arxiv.org/abs/2609.23916v1)
Fırat Öncel et al. | 2026-09-20. Contribution: Time-incremental CPT for knowledge updates without catastrophic forgetting. Relevance: Addresses temporal knowledge updates in LLMs.

#### [Perplexity Predicts Protection: Choosing Pretrained Backbones for Worst-Client Fairness in Federated Parameter-Efficient Fine-Tuning](http://arxiv.org/abs/2609.23463v1)
Kiran Naseer et al. | 2026-09-20. Contribution: Chooses pretrained backbones for worst-client fairness in federated PEFT. Relevance: Connects backbone choice to fairness in continual/federated adaptation.

#### [0.5\%>100\%: Bidirectional Reciprocal Learning for Referring Image Segmentation](http://arxiv.org/abs/2609.24510v1)
Xiaoqiang Lu et al. | 2026-09-21. Contribution: Bidirectional reciprocal learning for referring image segmentation. Relevance: Efficient VFM adaptation with minimal fine-tuning.

#### [Collaborative Streaming Anomaly Detection with Interactive Explanations and Ensemble Consensus](http://arxiv.org/abs/2609.23883v1)
Diogo Risca et al. | 2026-09-20. Contribution: Human-in-the-loop ensemble streaming anomaly detection. Relevance: Continual adaptation in high-speed data streams.

## 视觉感知

### 3D Point Cloud Perception
#### [Towards robust multimodal 3D object detection via visual foundation models](http://arxiv.org/abs/2609.23541v1)
Ziying Song et al. | 2026-09-20. Contribution: Uses visual foundation models for robust multimodal 3D object detection. Relevance: Improves LiDAR-camera robustness under OOD corruptions.

#### [ScaleBlind: Point Cloud Completion under Unknown Scale](http://arxiv.org/abs/2609.23404v1)
Shenghui Wu et al. | 2026-09-20. Contribution: Point cloud completion under unknown scale. Relevance: Removes implicit ground-truth scale reliance in 3D completion.

#### [Toward a foundation model for forest point clouds](http://arxiv.org/abs/2609.24787v1)
Yuanwen Yue et al. | 2026-09-21. Contribution: Foundation model for forest point clouds. Relevance: Generalizes 3D point-cloud perception across tasks, sensors, and forest types.

# Cross-Topic Signals
- Efficient multimodal inference: FoldQuantVLA, VPRune, SLICEChat, and Layer-Aware all reduce activation or token cost for VLA/MLLM inference.
- Continual adaptation and agent self-improvement: ACLArena, CE4L, iSDFT, RRSI, and FLARE connect long-horizon learning with agent/VLA capability accumulation.
- 3D/world grounding across VLA and navigation: Bridge3D, Think Like a World Model, Topological Representation, StenoVLA-3D, and CMAMBADEPTH share spatial representation, depth, and world-model needs.
- Agent safety/governance meets multi-agent interaction: ActGov, DUMA-Bench, Self-Healing Harness, Emergent Collusion, and MCP-GRANITE address tool use, security, and oversight.
- Point-cloud robustness and multimodal 3D detection support embodied perception: Song et al., ScaleBlind, and forest point-cloud foundation modeling feed perception for navigation and manipulation.

# Priority Reading
- **Bridge3D**: Central VLA 3D grounding; addresses the fundamental 2D-observation limitation for precise spatial manipulation.
- **RRSI**: Automated agent-harness self-improvement; directly relevant to LLM Agent Engineering and recursive self-improvement.
- **FLARE**: The only Agent Test-Time Scaling and Self-Improvement match; gives a concrete dense-supervision method for long-horizon coding agents under sparse rewards.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*