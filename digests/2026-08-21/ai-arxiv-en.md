# Lab Research Topics Radar 2026-08-21

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 21 new + 17 seen in the last 14 days | Generated: 2026-08-20 22:20 UTC

---

## Today's Overview

- **LLM Agent Engineering**: Five new papers advance agent auditing, cyber-threat-intelligence corpus scaffolding, long-horizon management benchmarks, augmentation-vs-automation evaluation, and AI post-training analysis.
- **Agent Test-Time Scaling and Self-Improvement**: Two new papers focus on the exploitation bottleneck in real-world test-time scaling and self-play in adaptive synthetic environments.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: New work spans egocentric video understanding, usage-driven scene generation, viewpoint canonicalization, and the embodiment gap; related efficiency and 4D-perception papers are filed under inference optimization and 3D point-cloud perception.
- **Embodied Navigation**: New papers address lifelong scene memory, unified driving scene representation, and anticipatory guidance for visually impaired navigation.
- **LLM Pruning and Inference Optimization**: One new paper proposes sub-token routing to reduce Vision-Language-Action inference cost.
- **Multimodal LLM Pruning**: No new papers today.
- **Continual Learning**: Three new papers extend continual learning to harness state, identify co-observation, and introduce reversible forgetting for enterprise agents.
- **Event-Based Vision**: No new papers today.
- **3D Point Cloud Perception**: Two new papers cover RL-based point cloud quality assessment and contrastive language-4D pretraining.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [LEDGER: Claim-to-Evidence Trace Graphs for Auditing LLM Agents](http://arxiv.org/abs/2608.18398v1)
Authors: Daehong Kim, Haichao Miao, Shusen Liu | Date: 2026-08-19 | Contribution: Introduces claim-to-evidence trace graphs for auditing long-horizon LLM agent workflows. | Relevance: Targets the auditing bottleneck created by fast agent output.

#### [CTIFoundry: An Agent-Native Corpus Scaffold for Cyber Threat Intelligence](http://arxiv.org/abs/2608.18613v1)
Authors: Yutong Cheng, Changze Li, Qian Cui et al. | Date: 2026-08-19 | Contribution: Builds an agent-native corpus scaffold for cyber threat intelligence consumed by LLM agents. | Relevance: Extends agent-harness maturity to the corpus side of multi-step investigations.

#### [FM-Bench: A Benchmark for Long-Horizon Management with Competing Agents](http://arxiv.org/abs/2608.18423v1)
Authors: Tianyou Wang, Chongyang Gao, Kezhen Chen et al. | Date: 2026-08-19 | Contribution: Benchmarks long-horizon management with cumulative consequences and competing agents. | Relevance: Evaluates sustained agent decision-making beyond bounded tasks.

#### [CentaurBench: Benchmarking LLM Capabilities on Augmenting vs. Automating Real-World Work Tasks](http://arxiv.org/abs/2608.18554v1)
Authors: Pattaraphon Kenny Wongchamcharoen, Kris Gulati, Min Min Fong et al. | Date: 2026-08-19 | Contribution: Separates augmentation from automation capability in real-world work tasks. | Relevance: Reframes LLM evaluation around improving human or LLM workers.

#### [What is Missing from AI Post-Training AI: An Empirical Analysis](http://arxiv.org/abs/2608.19072v1)
Authors: Joy Jia Yin Lim, Xin Huang, Hao Peng et al. | Date: 2026-08-19 | Contribution: Distinguishes execution-level capability from iterative self-improvement in LLM-agent post-training. | Relevance: Identifies missing capabilities for AI-for-AI agent engineering.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [HarnessRisk: A Lifecycle-Oriented Benchmark for Agent Harness Safety](http://arxiv.org/abs/2608.17597v1)
Authors: Yajing Bai, Jinhao Duan, Jie Peng et al. | Date: 2026-08-18 | Contribution: Provides a lifecycle-oriented benchmark for agent harness safety. | Relevance: Evaluates safety across tools, permissions, and persistent agent state.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Agentic ESOpt: Fine-Tuning Long-Horizon LLM Agents with Minimal GPU Requirements](http://arxiv.org/abs/2608.17310v1)
Authors: Zhi Zheng, Rongsheng Chen, Yunpeng Ba et al. | Date: 2026-08-18 | Contribution: Fine-tunes long-horizon LLM agents with evolutionary strategies and minimal GPU requirements. | Relevance: Offers a low-resource alternative to RL for agent training.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](http://arxiv.org/abs/2608.17933v1)
Authors: Lei Jiang, Ye Wei, Xinyu Xi et al. | Date: 2026-08-18 | Contribution: Presents a self-evolving LLM agent for financial time-series change-point detection. | Relevance: Demonstrates agentic model selection in non-stationary domains.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [GraphWake: Group Polarization via Memory-Mediated Polarization Cascade in LLM-Agent Communities](http://arxiv.org/abs/2608.17665v1)
Authors: Haoran Bu, Zejian Chen, Litian Zhang et al. | Date: 2026-08-18 | Contribution: Shows memory-mediated polarization cascades in LLM-agent communities. | Relevance: Highlights security risks in agent societies with shared memory.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Agent Lightning v1.0: Towards Harnessed Agentic RL](http://arxiv.org/abs/2608.17528v1)
Authors: Zhiyuan He, Siwei Zhang, Zhiwen Zhou et al. | Date: 2026-08-18 | Contribution: Proposes a disaggregated architecture for connecting arbitrary agents to RL training. | Relevance: Advances harness-centric agentic RL.

### Agent Test-Time Scaling and Self-Improvement

#### [Test-Time Scaling in the Wild: Why Exploitation, Not Exploration, Is the Bottleneck](http://arxiv.org/abs/2608.18931v1)
Authors: Davide Romano, Kanak Raj, Jerrod Parker et al. | Date: 2026-08-19 | Contribution: Finds that exploitation, not exploration, is the bottleneck in real-world test-time scaling. | Relevance: Challenges exploration-heavy assumptions for agent TTS.

#### [SPADE: Self-Play in Adaptive Synthetic Executable Environments](http://arxiv.org/abs/2608.19197v1)
Authors: Bo Liu, Simon Yu, Yiding Jiang et al. | Date: 2026-08-19 | Contribution: Introduces self-play in adaptive synthetic executable environments for continuous self-improvement. | Relevance: Generates diverse, adaptive goals for language-agent improvement.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [The concentration game: Bayesian updating, regret, and information](http://arxiv.org/abs/2608.18061v1)
Authors: Akshay Balsubramani | Date: 2026-08-18 | Contribution: Unifies Bayesian updating, regret, and concentration through a repeated game. | Relevance: Provides theoretical grounding for adaptive and self-improving agents.

## 具身智能

### Vision-Language-Action Models

#### [Vision-Language Models for Egocentric Video: From Hand-Object Interaction to Embodied AI](http://arxiv.org/abs/2608.18671v1)
Authors: Mohammad Zamani, Fatemeh Ziaeetabar | Date: 2026-08-19 | Contribution: Surveys egocentric VLM capabilities for hand-object interaction and embodied AI. | Relevance: Connects egocentric perception to VLA and embodied-agent pipelines.

#### [Beyond Placement and Articulation: Usage-Driven Code Scenes for Embodied Interaction](http://arxiv.org/abs/2608.18840v1)
Authors: Zijian Xiao, Zipeng Ye, Jinkun Hao et al. | Date: 2026-08-19 | Contribution: Extends code-based scene generation to usage-driven interactions for embodied AI. | Relevance: Provides richer training environments for VLA policies.

#### [GS-VLA: Plug-and-Play Viewpoint Canonicalization for Frozen VLA Policies via Gaussian Splatting](http://arxiv.org/abs/2608.19066v1)
Authors: Yechan Park, HyunJin Kim | Date: 2026-08-19 | Contribution: Uses 3D Gaussian novel-view synthesis to canonicalize viewpoints for frozen VLA policies. | Relevance: Improves VLA viewpoint robustness without policy retraining.

#### [The Embodiment Gap in Robot Foundation Models](http://arxiv.org/abs/2608.18433v1)
Authors: Yukiyasu Domae, Keisuke Shirai, Hanbit Oh et al. | Date: 2026-08-19 | Contribution: Analyzes the gap between model-level generalization and robot-level execution in RFMs/VLAs. | Relevance: Highlights deployment constraints beyond data and scale.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [EATR-Stereo: Embodiment-Aware Token Routing of Paired Stereo Evidence for Humanoid Vision-Language-Action Control](http://arxiv.org/abs/2608.17453v2)
Authors: Songwei Wu, Rui Zhao, Fan Yang et al. | Date: 2026-08-18 | Contribution: Exploits paired stereo evidence via embodiment-aware token routing for humanoid VLA control. | Relevance: Preserves complementary views while maintaining pretrained representations.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [LIBERO-VIFO: Benchmarking the Capability and Safety of Visual Cue Following in Vision-Language-Action Models](http://arxiv.org/abs/2608.17600v1)
Authors: Zhengyan Qian, Rui Yan, Alex Jinpeng Wang et al. | Date: 2026-08-18 | Contribution: Benchmarks visual cue following and safety in VLA models. | Relevance: Tests whether VLAs follow authorized cues while rejecting unauthorized ones.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [CompCPZ: Preserving Multi-Modal Intent in Language-Guided Robot Manipulation](http://arxiv.org/abs/2608.17717v1)
Authors: Zhen Zhang, Ahmad Hafez, Peng Xie et al. | Date: 2026-08-18 | Contribution: Preserves multi-modal intent in language-guided manipulation. | Relevance: Avoids silent semantic failures in disjunctive instructions.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Calibrated Predictive Safety for Heterogeneous Robots: An Action-Conditioned JEPA Framework with Model-Based Safety Shields](http://arxiv.org/abs/2608.17496v1)
Authors: Kaiming Zhong, Tianhua Liu, Yue Wang | Date: 2026-08-18 | Contribution: Combines an action-conditioned JEPA world model with model-based safety shields. | Relevance: Adds execution-time guarantees to generalist VLA policies.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Teach and Grow: An Agent-Centered Architecture for General Robot Learning](http://arxiv.org/abs/2608.17209v1)
Authors: Chang Nie, Zhe Liu, Hesheng Wang | Date: 2026-08-17 | Contribution: Proposes an agent-centered architecture for expanding validated physical coverage of VLA/world-action models. | Relevance: Provides a continual-growth mechanism for general robot learning.

### Embodied Navigation

#### [LT-Mem: Volatility-Aware Spatio-Temporal Memory for Lifelong Scene Understanding](http://arxiv.org/abs/2608.19059v1)
Authors: Yumin Lee, Hyoseok Ju, Giseop Kim | Date: 2026-08-19 | Contribution: Introduces volatility-aware spatio-temporal memory for lifelong object-level scene understanding. | Relevance: Supports persistent navigation in evolving environments.

#### [USR-Drive: Unified Driving Scene Representation via Joint Denoising of 3D Gaussians and Boxes](http://arxiv.org/abs/2608.19036v1)
Authors: Li-Heng Chen, Haokai Pang, Chengye Su et al. | Date: 2026-08-19 | Contribution: Jointly denoises 3D Gaussians and boxes for unified driving scene representation. | Relevance: Builds structured spatial representations for autonomous navigation.

#### [ForeSightGuide: An Anticipatory Framework toward Accurate and Low-Redundancy Guidance for the Visually Impaired](http://arxiv.org/abs/2608.18993v1)
Authors: Zhiyuan Wang, Xu Li, Shikang Guo et al. | Date: 2026-08-19 | Contribution: Uses anticipatory VLM reasoning to reduce false positives in guidance for visually impaired users. | Relevance: Improves embodied navigation assistance in dynamic scenes.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [If, Then, Otherwise: Diagnosing Conditional Branching in Vision-Language Navigation](http://arxiv.org/abs/2608.17318v1)
Authors: Seoyoung Lee, Neel P. Bhatt, Pranay Samineni et al. | Date: 2026-08-18 | Contribution: Diagnoses conditional branching in vision-language navigation instructions. | Relevance: Tests state-dependent instruction following beyond fixed routes.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Embodied-Navigator: Point, Think, Memorize, and Align for Efficient Navigation](http://arxiv.org/abs/2608.17512v1)
Authors: Hongyan Feng, Sunlai Chen, Xuanyu Liu et al. | Date: 2026-08-18 | Contribution: Aligns VLM 2D priors with embodied navigation action spaces. | Relevance: Improves sample-efficient VLM-based navigation.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [Role-Conditioned Sub-Token Routing for Efficient Vision-Language-Action Policies](http://arxiv.org/abs/2608.18410v1)
Authors: Wei Jiang, Wei Wang | Date: 2026-08-19 | Contribution: Proposes role-conditioned sub-token routing to reduce VLA inference cost without dropping whole tokens. | Relevance: Optimizes inference for long multimodal token sequences in agent policies.

### Continual Learning

#### [Harness Continual Learning: Continual Adaptation Beyond Model Parameters](http://arxiv.org/abs/2608.19013v1)
Authors: Borui Kang, Jinrui Gu, Junhan Lv et al. | Date: 2026-08-19 | Contribution: Treats prompts, memories, tools, skills, and routing rules as the state that changes during continual learning. | Relevance: Broadens continual learning to agent harness state.

#### [Forgetting, plasticity, and co-observation: a third facet of continual learning](http://arxiv.org/abs/2608.18803v1)
Authors: Timm Hess, Abhishek Jha, Gido M. van de Ven et al. | Date: 2026-08-19 | Contribution: Identifies co-observation as a third challenge beyond forgetting and plasticity. | Relevance: Explains residual performance gaps in sequential training.

#### [Towards Reversible Forgetting: Managing Obsolete Knowledge in Continual Enterprise AI Agents](http://arxiv.org/abs/2608.18177v1)
Authors: Nilutpaul Sarker Yash, Tirtho Roy, Ushashi Bhattacharjee | Date: 2026-08-18 | Contribution: Argues for reversible forgetting to manage obsolete knowledge in enterprise agents. | Relevance: Reframes forgetting as a controlled capability rather than only a failure.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [When to Review: Spaced Repetition for Continual Pre-Training of Language Models](http://arxiv.org/abs/2608.17530v1)
Authors: Alankar Atreya, Devesh Batra, Yoages Kumar Mantri et al. | Date: 2026-08-18 | Contribution: Formulates continual pre-training as spaced repetition with adaptive review scheduling. | Relevance: Improves replay policies for language-model continual learning.

#### 🔁 **[SEEN IN THE LAST 14 DAYS]** 🔁 [SEEN IN THE LAST 14 DAYS] [Chain-of-Experience for Continual LLM Improvement](http://arxiv.org/abs/2608.18027v1)
Authors: Haoqin Tu, Yunhao Fang, Yizhong Wang et al. | Date: 2026-08-18 | Contribution: Studies how LLMs improve through iterative experience at inference time. | Relevance: Bridges continual learning and test-time adaptation.

## 视觉感知

### 3D Point Cloud Perception

#### [PCQA-R1: Advancing Generalized 3D Point Cloud Quality Assessment with Reinforcement Learning](http://arxiv.org/abs/2608.18627v1)
Authors: Kangning Ye, Yunhao Li, Sijing Wu et al. | Date: 2026-08-19 | Contribution: Uses reinforcement learning to generalize no-reference point cloud quality assessment with LMMs. | Relevance: Advances quality-aware 3D point cloud perception.

#### [CL4D: Contrastive Language-4D Pretraining for Vision-Language Reasoning in Dynamic Scenes](http://arxiv.org/abs/2608.18734v1)
Authors: Kumal Hewagamage, Isuranga Senavirathne, Sasika Amarasinghe et al. | Date: 2026-08-19 | Contribution: Pretrains contrastive language-4D representations for reasoning in dynamic 3D scenes. | Relevance: Provides temporal point-cloud representations for embodied agents.

## Cross-Topic Signals

- **Token- and structure-level efficiency is a shared lever**: sub-token routing for VLA, stereo token routing for humanoid control, and harnessed RL all reduce or redirect computational effort rather than retraining models from scratch.
- **Continual adaptation is moving from weights to agent state**: harness continual learning, reversible forgetting, and Teach-and-Grow-style architectures treat prompts, tools, memories, and skills as first-class adaptative state.
- **Benchmarks are shifting toward long-horizon and assistant-style evaluation**: FM-Bench, CentaurBench, LIBERO-VIFO, and conditional-branching navigation all move beyond single-turn automation accuracy.
- **Test-time compute and self-generated goals are being re-examined together**: the TTS exploitation bottleneck and SPADE self-play both question where additional inference-time effort should be invested.

## Priority Reading

- **Test-Time Scaling in the Wild** — directly questions where inference compute should be spent in real-world agent tasks; essential for TTS and benchmarking decisions.
- **Harness Continual Learning** — reframes continual learning as harness-state adaptation, connecting agent engineering and continual learning.
#### - **Role-Conditioned Sub-Token Routing for Efficient Vision-Language-Action Policies** — a practical inference-optimization method for VLA deployment, relevant to both embodied AI and model compression.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*