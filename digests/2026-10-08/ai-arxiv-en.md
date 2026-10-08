# Lab Research Topics Radar 2026-10-08

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 44 new + 11 seen in the last 14 days | Generated: 2026-10-08 01:29 UTC

---

## Today's Overview
- **LLM Agent Engineering** (LLM Agent 与多智能体): 10 new; progress on uncertainty-guided steering, trained advisors, dynamic skill lifecycles, runtime control, long-term thinking policies, process/benchmark evaluation, forensics, and edge context robustness.
- **Agent Test-Time Scaling and Self-Improvement**: 2 new; personalized test-time scaling via amortized policy discovery and multi-agent turn-taking self-play; repeated work adds serving-experience self-improvement and conformal self-verification.
- **LLM Agent Societies**: 1 new; risk-averse multi-population mean-field games for heterogeneous multi-agent systems under uncertainty.
- **Vision-Language-Action Models**: 10 new; advances in perception-action bridging, predictive latents, visual attenuation, hallucination unlearning, backdoor detection, tempo control, action tokenization, retiming, and certified inference acceleration.
- **Embodied Navigation**: 7 new; progress in risk-certified replanning, sign-based navigation, object-ownership search, active open-vocabulary 3D mapping, and UAV world-model search; repeated work covers zero-shot object navigation and sim-to-real VLN.
- **LLM Pruning and Inference Optimization**: 3 new; certified VLA acceleration, token-pruning safety vulnerabilities, and task-aware multimodal pruning.
- **Multimodal LLM Pruning**: 2 new; DIPrune and CARE target task-aware/visual-token pruning for efficient MLLM/VLA inference.
- **Continual Learning**: 9 new; PEFT differences, orthogonal LoRA, rank diagnostics, continual TTA, edge LoRA, catastrophic forgetting, evolving-agent verification, and SSM conditioning.
- **Event-Based Vision**: 2 new; binary networks for fast event processing and physical-irradiance event-stream photometric stereo.
- **3D Point Cloud Perception**: 1 new; robust cooperative 3D object detection; one repeated open-vocabulary scene-graph mapping paper.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## LLM Agent 与多智能体
### LLM Agent Engineering
#### [From Uncertainty to Action: Learning to Steer LLM Agents](http://arxiv.org/abs/2610.09115v1)
H. Li et al., 2026-10-06. Studies whether uncertainty can guide when, where, and how to correct LLM agent trajectories. Core agent steering and correction.
#### [Training Advisors for LLM Agents from Task Outcomes](http://arxiv.org/abs/2610.09858v1)
S. Polezhaev et al., 2026-10-07. Trains critics/advisors from task outcomes to help agents revise decisions. Directly targets agent feedback and self-correction.
#### [SkillForge: Co-Evolving Skills and Agents via Dynamic Skill Lifecycles](http://arxiv.org/abs/2610.09832v1)
Y. Ge et al., 2026-10-07. Co-evolves skills and agents through dynamic skill lifecycles. Relevant to memory-augmented long-horizon agent learning.
#### [AgentTime: Can Agents Estimate and Control Their Own Runtime?](http://arxiv.org/abs/2610.09944v1)
M. Ofengenden, M. Andriushchenko, 2026-10-07. Tests whether agents can estimate and control wall-clock runtime. Addresses agent self-awareness and runtime control.
#### [Learning Situation-Conditioned Thinking Policies for Long-Term LLM Agents](http://arxiv.org/abs/2610.09590v1)
H. Su, 2026-10-07. Learns when to reuse accumulated reasoning without unbounded memory/context. Relevant to long-term agent memory and thinking control.
#### [LiveMACE: Process-Aware Evaluation of LLM Agent Capabilities in Evolving Markets](http://arxiv.org/abs/2610.09872v1)
J. Zhao et al., 2026-10-07. Introduces process-aware benchmarking for agents in evolving environments. Relevant to agent evaluation beyond outcomes.
#### [DUDA-Bench: Benchmarking LLM Agents on Multimodal Data-Driven Urban Diagnosis](http://arxiv.org/abs/2610.09374v1)
Y. Song et al., 2026-10-07. Benchmarks agents on multimodal urban diagnosis workflows. Relevant to tool-using multimodal agent evaluation.
#### [GeoNatureAgent (GNA): A Framework and Benchmark for Pre-Production Evaluation of Tool-Using Agents on Geospatial and Environmental Tasks](http://arxiv.org/abs/2610.09112v1)
G. Diaz-Ireland et al., 2026-10-06. Evaluates tool-using agents against real geospatial/environmental APIs. Relevant to pre-deployment agent reliability.
#### [Correct Answers, Unsupported Findings: Evidence Binding in Forensic Reconstruction of LLM Agent Logs](http://arxiv.org/abs/2610.09581v1)
T. Yun et al., 2026-10-07. Studies evidence binding in forensic reconstruction of agent actions from logs. Relevant to agent observability and auditing.
#### [Decoupling Logic from Persona: Structural Immunity of Edge LLM Agents to Context Pollution](http://arxiv.org/abs/2610.09772v1)
M. Nakatsu, R. Wang, 2026-10-07. Examines logic degradation under long persona-heavy context in edge agents. Relevant to edge agent robustness.

### Agent Test-Time Scaling and Self-Improvement
#### [From Pareto to Preference: Personalized Test-Time Scaling via Amortized Agentic Policy Discovery](http://arxiv.org/abs/2610.09684v1)
X. Wang et al., 2026-10-07. Uses amortized agentic policy discovery for personalized test-time scaling under user preferences/resources. Core test-time scaling.
#### [Coupled but Late: Turn-Taking Between Full-Duplex Speech Models in Unscripted Dialogue](http://arxiv.org/abs/2610.08683v1)
L. Zhu et al., 2026-10-06. Analyzes turn-taking errors when full-duplex speech models converse in self-play. Relevant to self-play and model-based evaluation.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [ServeLearnBench: How Well Can Agents Self-Improve from Serving Experience?](http://arxiv.org/abs/2610.07792v1)
H. Zheng et al., 2026-10-06. Benchmarks agents self-improving from serving experience. Relevant to continual self-improvement.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [CLIFT: Conformal Self-Verification for Web Agent Training and Test-Time Scaling](http://arxiv.org/abs/2610.06829v1)
Y. Zhang et al., 2026-10-05. Uses conformal self-verification for web agent RL and test-time scaling. Relevant to self-verification.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Nash Equilibrium Text: A Game-Theoretic Decoding Framework for Text Generation](http://arxiv.org/abs/2610.05817v1)
A. Jafari et al., 2026-10-05. Formulates text revision as a game-theoretic decoding process. Relevant to inference-time decoding strategies.

### LLM Agent Societies
#### [Beyond Nominal Equilibria: Risk-Averse Multi-Population Mean-Field Games](http://arxiv.org/abs/2610.09244v1)
B. Jeloka et al., 2026-10-07. Models risk-averse multi-population mean-field games under uncertain behavior. Theoretical foundation for heterogeneous agent societies.

## 具身智能
### Vision-Language-Action Models
#### [PAIR: Bridging Perception and Action in Vision-Language-Action Models](http://arxiv.org/abs/2610.09016v1)
K. Feng et al., 2026-10-06. Addresses the transition from scene/instruction representations to action generation in continuous-action VLAs. Core VLA representation issue.
#### [Juno: Taming Predictive Latents for Vision-Language-Action Models](http://arxiv.org/abs/2610.09940v1)
Y. Zhu et al., 2026-10-07. Makes JEPA predictive latents useful across VLA pretraining, policy learning, and deployment. Relevant to VLA representation learning.
#### [Sparse Feature Policy Unlearning Mitigates State Hallucination in Vision-Language-Action Models](http://arxiv.org/abs/2610.09496v1)
J. Lee et al., 2026-10-07. Uses sparse feature policy unlearning to reduce state hallucination. Relevant to VLA reliability.
#### [TMT: Runtime Backdoor Detection for Vision-Language-Action Policies on Unseen Tasks](http://arxiv.org/abs/2610.09462v1)
Z. Zhou et al., 2026-10-07. Detects backdoor activation in VLA policies at runtime. Relevant to VLA security.
#### [TempoBridge: Language-Guided Tempo Control for Vision-Language-Action Policies](http://arxiv.org/abs/2610.09451v1)
Y. Lee et al., 2026-10-07. Modulates frozen VLA actions via language-guided tempo control. Relevant to VLA controllability.
#### [DIVA: Dual-Space Intent-Aware Visual Attenuation for Vision-Language-Action Policies](http://arxiv.org/abs/2610.09144v1)
K. Feng et al., 2026-10-06. Regulates visual-token influence on VLA policy computation via intent-aware attenuation. Relevant to VLA visual grounding.
#### [YUBI-STAG: Contact and Semantic-Rich Alignment for VLAs via Automated Video-Language Grounding](http://arxiv.org/abs/2610.09718v1)
M. Tateno et al., 2026-10-07. Automates video-language grounding for fine-grained instruction-physical interaction alignment. Relevant to VLA data alignment.
#### [RoboPace: Contact-Aware Time-Optimal Retiming for Action-Chunk Policies](http://arxiv.org/abs/2610.09696v1)
M. Shirasaka et al., 2026-10-07. Retimes action-chunk policies with contact-aware time optimality. Relevant to VLA execution timing.
#### [Beyond Reconstruction: What Matters in Action Tokenization for Robot Policies?](http://arxiv.org/abs/2610.09170v1)
H. Chen et al., 2026-10-06. Analyzes action tokenization objectives for autoregressive robot policies. Relevant to VLA action tokenization.

### Embodied Navigation
#### [Adaptive Risk-Certified Event-Triggered Replanning for Dynamic Navigation](http://arxiv.org/abs/2610.09302v1)
R. R. Suganda, B. Hu, 2026-10-07. Certifies risk and triggers replanning under uncertain obstacle predictions. Relevant to safe dynamic navigation.
#### [SiGNgapore - An Interactive Dataset for Sign-based Visual Navigation](http://arxiv.org/abs/2610.09488v1)
N. Zimmerman et al., 2026-10-07. Provides a dataset for sign-based visual navigation without prebuilt maps. Relevant to human-aid navigation.
#### [COOL: Curiosity-Driven Object Ownership Learning for Personalized Robotic Assistance](http://arxiv.org/abs/2610.09358v1)
S. Huber et al., 2026-10-07. Learns object ownership for personalized service-robot commands. Relevant to language-grounded embodied search.
#### [ActiveLang: Active Open-Vocabulary 3D Mapping with Semantic-Uncertainty-Guided Exploration](http://arxiv.org/abs/2610.09518v1)
L. Chen et al., 2026-10-07. Uses semantic uncertainty to guide active open-vocabulary 3D mapping. Relevant to open-vocabulary navigation/mapping.
#### [SearchWorld: Spatial Value-Grounded Imagination for UAV Object Search via World Models](http://arxiv.org/abs/2610.09335v1)
Y. Ji et al., 2026-10-07. Uses world-model imagination for UAV object search under partial observability. Relevant to embodied object search.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [MarvisNav: Making Memory Visible on Route Choices for Zero-Shot Object Navigation](http://arxiv.org/abs/2610.06510v1)
J. Wang et al., 2026-10-05. Exposes memory for route choices in zero-shot object navigation. Relevant to object-goal navigation.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Sim-to-Real Transfer of Vision-Language Navigation in Continuous Environments Using an Ackermann-Steered Mobile Robot](http://arxiv.org/abs/2610.07192v1)
C. Abeywansa et al., 2026-10-05. Transfers VLN policies to an Ackermann-steered robot. Relevant to real-world embodied navigation.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
#### [CARE: Certifying Acceleration for Vision-Language-Action Inference](http://arxiv.org/abs/2610.08917v1)
R. Liu et al., 2026-10-06. Certifies acceleration for VLA inference under action chunking and visual-token pruning. Relevant to safe inference optimization.
#### [Understanding and Mitigating Token-Pruning-Induced Vulnerabilities in VLMs](http://arxiv.org/abs/2610.09703v1)
S. Wang et al., 2026-10-07. Evaluates and mitigates safety vulnerabilities caused by token pruning in VLMs. Relevant to pruning safety.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [VisionWeave: Weaving Elastic Visual Representations as a Native Capability of MLLMs](http://arxiv.org/abs/2610.07987v1)
Y. Feng et al., 2026-10-06. Builds elastic visual representations for efficient MLLM inference. Relevant to visual-token efficiency.

### Multimodal LLM Pruning
#### [DIPrune: Task-Aware Token Pruning with Dual Importance for Efficient Multimodal Language Models](http://arxiv.org/abs/2610.08341v1)
S. Yang et al., 2026-10-06. Uses task-aware dual importance to prune multimodal tokens without semantic degradation. Core multimodal token pruning.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [VLA-ACL: Action-Consistent Visual Token Pruning for Efficient Vision-Language-Action Models](http://arxiv.org/abs/2610.08133v1)
O. Du et al., 2026-10-06. Prunes visual tokens with action consistency for VLA efficiency. Relevant to multimodal/VLA pruning.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Efficient Multimodal Inference through Adaptive Acquisition and Sequential Fusion](http://arxiv.org/abs/2610.07466v1)
P. Mohapatra et al., 2026-10-05. Adaptively acquires modalities and fuses them sequentially to cut inference cost. Relevant to multimodal inference efficiency.

### Continual Learning
#### [CoDe-LoRA: Mitigating the Orthogonality Dilemma in Continual Learning of LLMs via Knowledge Consolidation and Decoupling](http://arxiv.org/abs/2610.08312v1)
M. Liu et al., 2026-10-06. Addresses strict orthogonality in O-LoRA via consolidation and decoupling. Relevant to LLM continual learning.
#### [Are Parameter-Efficient Fine-tuning Methods Really Different?](http://arxiv.org/abs/2610.09122v1)
Y. Li et al., 2026-10-06. Compares six PEFT methods on performance, forgetting, and pretrained-weight changes. Relevant to PEFT/continual adaptation.
#### [When Rank Rises as LLMs Degrade](http://arxiv.org/abs/2610.09647v1)
Z. G. Wang, 2026-10-07. Shows rank-based representation health assumptions can fail in LLM post-training. Relevant to continual-learning diagnostics.
#### [CIRSeg: Coarse-to-Fine Intensity-Robust Liver Segmentation with Source-Free Continual Test-Time Adaptation](http://arxiv.org/abs/2610.09784v1)
R. Xu et al., 2026-10-07. Applies source-free continual test-time adaptation for robust liver segmentation. Relevant to continual TTA in medical vision.
#### [MemFLoRA: Memory-Floor LoRA for CNN Adaptation at the Edge](http://arxiv.org/abs/2610.08669v1)
M. E. Akbulut et al., 2026-10-06. Introduces memory-floor LoRA for edge CNN adaptation. Relevant to efficient continual adaptation.
#### [Catastrophic Forgetting in Sequential Thermal Anti-UAV Detection: The Role of Scale-Conditioned Gradient Imbalance](http://arxiv.org/abs/2610.08315v1)
K. D. G. Nguyen et al., 2026-10-06. Characterizes catastrophic forgetting in sequential thermal anti-UAV detection. Relevant to continual perception.
#### [Verify Less, Evolve More: Training Idea-Level Critics for Verification-Efficient ML Evolving Agents](http://arxiv.org/abs/2610.08993v1)
J. Bai et al., 2026-10-06. Trains idea-level critics to reduce verification cost in self-evolving agents. Relevant to continual/self-evolving agents.
#### [MaRK: Markov-adapted Recurrent Kernels for Dynamic Operator Conditioning in State Space Models](http://arxiv.org/abs/2610.09092v1)
S. I. Omer et al., 2026-10-06. Conditions pretrained SSMs through Markov-adapted recurrent kernels. Relevant to iterative generation adaptation.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [Dynamic Positional Attention Modulation for Parameter-Efficient Fine-Tuning of Large Language Models](http://arxiv.org/abs/2610.07848v1)
D. Pan et al., 2026-10-06. Modulates positional attention dynamically for PEFT. Relevant to continual fine-tuning efficiency.

## 视觉感知
### Event-Based Vision
#### [Bringing BNNs to Fast Event Processing](http://arxiv.org/abs/2610.09873v1)
P. Longour et al., 2026-10-07. Applies binary neural networks to event-camera processing. Relevant to efficient event-based vision.
#### [PIE-PS: Photometric Stereo from Physical Irradiance Event Streams](http://arxiv.org/abs/2610.08188v1)
X. Meng et al., 2026-10-06. Uses physical irradiance event streams for photometric stereo under moving illumination. Relevant to event-based 3D vision.

### 3D Point Cloud Perception
#### [Sparse2comm: Towards Robust Cooperative 3D Object Detection](http://arxiv.org/abs/2610.08573v1)
L. Yang et al., 2026-10-06. Enables robust cooperative 3D object detection under limited bandwidth and unreliable cooperation. Relevant to 3D point cloud perception.
#### 🔁 **[SEEN IN THE LAST 14 DAYS]** [OpenSplatGraph: From Dense Semantic Maps to Structured Scene Graphs for Open-Vocabulary Robot Perception](http://arxiv.org/abs/2610.07569v1)
B. L. Nguyen et al., 2026-10-06. Converts dense semantic maps into structured scene graphs for open-vocabulary perception. Relevant to 3D scene graph perception.

## Cross-Topic Signals
- VLA efficiency and multimodal pruning converge on visual-token selection: CARE certifies acceleration, VLA-ACL enforces action consistency, and DIPrune uses task-aware dual importance.
- Agent self-improvement and continual learning share outcome-driven critics, skill/memory lifecycles, and serving/context experience to reduce forgetting.
- Predictive/world-model representations connect VLA and embodied navigation: Juno’s JEPA latents, SearchWorld’s world models, and ActiveLang’s semantic uncertainty all support planning/action.
- Safety and robustness recur across VLA backdoor/hallucination work, token-pruning vulnerabilities, agent-log evidence binding, and risk-certified navigation.
- Parameter-efficient adaptation links continual learning and inference efficiency through LoRA variants, rank diagnostics, and elastic visual representations.

## Priority Reading
#### [CARE: Certifying Acceleration for Vision-Language-Action Inference](http://arxiv.org/abs/2610.08917v1) — bridges VLA, pruning, and inference optimization with a certification angle for safe deployment.
#### [Juno: Taming Predictive Latents for Vision-Language-Action Models](http://arxiv.org/abs/2610.09940v1) — central VLA representation paper spanning pretraining, policy learning, and deployment.
#### [SkillForge: Co-Evolving Skills and Agents via Dynamic Skill Lifecycles](http://arxiv.org/abs/2610.09832v1) — core LLM agent engineering work on memory, skills, and long-horizon self-improvement.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*