# Lab Research Topics Radar 2026-08-26

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 29 new + 0 seen in the last 14 days | Generated: 2026-08-25 22:19 UTC

---

## 1. Today's Overview

- **LLM Agent 与多智能体 — LLM Agent Engineering**: New papers span agent security, skill memory, reliability, ontology-guided reasoning, agent decomposition, terminal-agent RL, simulation foundations, network configuration, and molecular-agent design.
- **LLM Agent 与多智能体 — Agent Test-Time Scaling and Self-Improvement**: New papers cover routing-guided test-time scaling for software agents, test-time scaling for embodied reasoning, a self-improving harness, and proficiency-tailored conversational agents.
- **LLM Agent 与多智能体 — LLM Agent Societies**: No new papers today.
- **具身智能 — Vision-Language-Action Models**: New work improves spatial readouts, intent distillation, memory, bimanual robustness, instruction following, retrieval intervention, small-model deployment, and plan guarantees for VLA manipulation.
- **具身智能 — Embodied Navigation**: New papers advance inspection-oriented UAV-VLN, hybrid semantic-geometric navigation, and long-term retrieval memory for embodied agents.
- **模型压缩与持续学习 — LLM Pruning and Inference Optimization**: One matched paper on visual token pruning; it is detailed under Multimodal LLM Pruning.
- **模型压缩与持续学习 — Multimodal LLM Pruning**: E2S-Pruner proposes progressive two-stage evidence fusion for pruning visual tokens in vision-language models.
- **模型压缩与持续学习 — Continual Learning**: New papers address adapter-based few-shot continual learning for malicious packet recognition and reward-free continual adaptation for space robots.
- **视觉感知 — Event-Based Vision**: No new papers today.
- **视觉感知 — 3D Point Cloud Perception**: BenthicFlow generates extensible underwater 3D scenes to improve underwater scene understanding.
- **视觉感知 — 3D Point Cloud Perception and Tracking**: No new papers today.

## 2. Research Areas

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [InjecMEM: Memory Injection Attack on LLM Agent Memory Systems](http://arxiv.org/abs/2608.23471v1)
Hanling Tian et al. — 2026-08-24 — Proposes a new memory injection attack paradigm against LLM agent memory subsystems.  
Relevance: Highlights a critical, newly exposed security surface for deployed agent memory.

#### [TRACE: A Self-Evolving Skill Bank for Consistent, Limit-Aware LLM Agents](http://arxiv.org/abs/2608.22793v1)
Wenhao Wu et al. — 2026-08-24 — Introduces a self-evolving skill bank that improves consistency and limit-awareness in LLM agents.  
Relevance: Directly targets reliability in user-facing agent deployment.

#### [When Not to Imitate: Boundary-Aware Skill Memory for Reliable Tool-Use LLM Agents](http://arxiv.org/abs/2608.22339v1)
Zihan Lin et al. — 2026-08-23 — Argues that skill memory from successful trajectories is not always beneficial and proposes boundary-aware skill memory.  
Relevance: Important negative result for agent self-evolution and skill extraction.

#### [Toward Effective and Reliable LLM Agents via Dynamic Ontology](http://arxiv.org/abs/2608.22974v1)
Xiaohui Zhang et al. — 2026-08-24 — Uses dynamic ontologies to expose implicit semantic connections for domain-specific agent tasks.  
Relevance: Improves evidence use and multi-step decision reliability in LLM agents.

#### [Right-Sizing LLM-Agent Decomposition in VAT Determination: A Pilot Controlled Sweep](http://arxiv.org/abs/2608.23395v1)
Pedro Santos — 2026-08-24 — Empirically compares many narrow agents versus one strong tool-using agent on VAT determination.  
Relevance: Provides evidence on the decomposition trade-off central to LLM-agent system design.

#### [NetConfArena: An Executable Benchmark for LLM Agents in Closed-Loop Network Configuration](http://arxiv.org/abs/2608.23179v1)
Chang Liu et al. — 2026-08-24 — Presents a risk-free executable benchmark for evaluating LLM agents in network configuration.  
Relevance: Offers realistic closed-loop evaluation for an emerging agent application domain.

#### [Aligned Alone, Misaligned Together: Forecasting Adversarial Capture in LLM Agent Populations](http://arxiv.org/abs/2608.22444v1)
Isotta Magistrali and Chen Shani — 2026-08-23 — Studies adversarial capture in interacting LLM agent populations, beyond single-agent audits.  
Relevance: Extends agent safety evaluation to population-level behavior.

#### [Learning Generalizable Behaviors for Terminal Agents](http://arxiv.org/abs/2608.22631v1)
Yihang Yao et al. — 2026-08-23 — Uses RL to learn generalizable terminal-agent behaviors with scalable public training environments.  
Relevance: Advances training methodology for deeply integrated personal agents.

#### [Minimal Local Simulation Foundations for LLM- and VLM-Driven Agents in 2D and 3D Environments](http://arxiv.org/abs/2608.22833v1)
Ryuki Hyodo — 2026-08-24 — Provides intentionally minimal 2D and 3D simulation foundations for agent research.  
Relevance: Lowers barriers to studying and modifying LLM/VLM agent environments.

#### [Molecular LLM Agents: From Architectural Design to Scientific Autonomy](http://arxiv.org/abs/2608.23104v1)
Jiatong Li et al. — 2026-08-24 — Surveys architectural design and scientific autonomy for molecular LLM agents.  
Relevance: Maps domain-specific agent engineering for chemistry and molecular science.

### Agent Test-Time Scaling and Self-Improvement

#### [Disagree to Explore, Agree to Commit: Routing-Guided Test-Time Scaling for Software Agents](http://arxiv.org/abs/2608.22191v1)
Kang Chen et al. — 2026-08-23 — Proposes routing-guided test-time scaling that explores on disagreement and commits on agreement.  
Relevance: A concrete mechanism for scaling software-agent inference over long tool-use trajectories.

#### [ParallelWorld: Test-Time Scaling for Embodied Reasoning](http://arxiv.org/abs/2608.22971v1)
Min Chen et al. — 2026-08-24 — Applies test-time scaling to embodied reasoning through dynamic exploration.  
Relevance: Extends reasoning-time compute to embodied agents.

#### [Prime Agent: A Self-Improving RLM Harness](http://arxiv.org/abs/2608.23552v1)
Seth Karten et al. — 2026-08-24 — Presents an open-source harness for long-horizon coding agents with a persistent REPL and self-improvement capabilities.  
Relevance: Infrastructure-level contribution to agent self-improvement and evaluation.

#### [Clarify User Expertise: Towards Proactive Conversational Agents Tailoring Responses to User Proficiency](http://arxiv.org/abs/2608.22266v1)
Zhihong Cao and Chen Huang — 2026-08-23 — Proposes proactive conversational agents that tailor responses to user proficiency.  
Relevance: Inference-time personalization for conversational agent behavior.

## 具身智能

### Vision-Language-Action Models

#### [Pointing-VLA: Typed Spatial Grounding Interfaces for Vision-Language-Action Manipulation](http://arxiv.org/abs/2608.23138v1)
Xiwen Chen et al. — 2026-08-24 — Introduces a typed hidden-state spatial readout for VLA manipulation to improve spatial grounding.  
Relevance: Addresses brittle interfaces between multimodal reasoning and robot execution.

#### [Act with Intent: Distilling Behavior Intent for Vision-Language-Action Models](http://arxiv.org/abs/2608.23478v1)
Sangoh Lee et al. — 2026-08-24 — Distills local behavior intent from demonstrations to improve VLA action-decoder training.  
Relevance: Moves VLA training beyond pure behavior cloning.

#### [Think Only When Needed: Prompt-Authority Control for Selective Slow-Path Intervention in Vision-Language-Action Manipulation](http://arxiv.org/abs/2608.23224v1)
Zhiruo Zhou et al. — 2026-08-24 — Controls when retrieved text should intervene in a frozen VLA policy, avoiding raw-prompt degradation.  
Relevance: Provides a safety mechanism for retrieval-augmented VLA control.

#### [UniMem: Unifying Multimodal Memory and Control for Vision-Language-Action Models](http://arxiv.org/abs/2608.22869v1)
Lars Osterberg et al. — 2026-08-24 — Unifies multimodal memory and control for non-Markovian long-horizon VLA tasks.  
Relevance: Directly targets memory limitations in VLA models.

#### [Robust Bimanual Vision-Language-Action Models via Embarrassingly Simple Modality Masking](http://arxiv.org/abs/2608.22419v1)
Dongzhou Cheng et al. — 2026-08-23 — Uses modality masking to stabilize query-based VLA models for bimanual manipulation.  
Relevance: Improves robustness in complex dual-arm tasks.

#### [InstructMove: A Text-Indispensable Benchmark for Instruction-Following Manipulation](http://arxiv.org/abs/2608.22990v1)
Mengao Zhao et al. — 2026-08-24 — Proposes a manipulation benchmark where language instructions are indispensable for successful policy execution.  
Relevance: Enables more rigorous evaluation of instruction following in VLA models.

#### [Meta-Ctrl: Guaranteed Plan Generation by Decoupling Syntactic and Semantic Constraints](http://arxiv.org/abs/2608.22149v1)
Gwen Yidou-Weng et al. — 2026-08-23 — Separates syntactic and semantic constraints to generate formally guaranteed robot plans.  
Relevance: Balances formal guarantees and plan quality in LLM-generated robot plans.

#### [ROS2SmolVLA: Enabling Small Vision-Language-Action Models for Integration into Industrial-Grade Lightweight Robots](http://arxiv.org/abs/2608.23320v1)
Nils Mandischer et al. — 2026-08-24 — Enables small VLA models for deployment on industrial lightweight robot systems.  
Relevance: Addresses efficiency and integration constraints for edge-deployed VLAs.

### Embodied Navigation

#### [RACO: Reliability-Aware Coarse-Goal Optimization for Inspection-Oriented UAV Vision-Language Navigation](http://arxiv.org/abs/2608.22678v1)
Sen Wang et al. — 2026-08-24 — Optimizes coarse goals for UAV-VLN with explicit stopping-region and distractor reliability.  
Relevance: Refines navigation success criteria for inspection-oriented UAV tasks.

#### [OptiSight: Bridging Semantic Reasoning and Geometric Control for Embodied Navigation](http://arxiv.org/abs/2608.23354v1)
Alperen Avan and Jordi Sanchez-Riera — 2026-08-24 — Combines VLM reasoning with deterministic visual servoing for indoor navigation.  
Relevance: Demonstrates a hybrid semantic-geometric navigation architecture.

#### [The Retriever Should Remember: Experience-Amortized Reranking for Long-Term Agent Memory](http://arxiv.org/abs/2608.22767v1)
Qi Feng et al. — 2026-08-24 — Proposes experience-amortized reranking to improve long-term memory retrieval for agents.  
Relevance: Supports persistent spatio-semantic memory needed by long-horizon embodied agents.

## 模型压缩与持续学习

### Multimodal LLM Pruning

#### [E2S-Pruner: Progressive Two-Stage Evidence Fusion for Visual Token Pruning in Vision-Language Models](http://arxiv.org/abs/2608.23253v1)
Taoyu Qian et al. — 2026-08-24 — Prunes visual tokens via progressive two-stage evidence fusion to reduce VLM latency and memory.  
Relevance: Directly tackles multimodal LLM inference cost through visual-token reduction.

### Continual Learning

#### [Adapter-Based Few-Shot Continual Learning for Malicious Packet Recognition](http://arxiv.org/abs/2608.23536v1)
Kyle Stein et al. — 2026-08-24 — Uses adapter-based few-shot continual learning to adapt malware detection without catastrophic forgetting.  
Relevance: Applies continual learning to a practical network-security domain.

#### [Reward-Free Continual Adaptation for Resilient Space Robots](http://arxiv.org/abs/2608.23452v1)
Andrej Orsula et al. — 2026-08-24 — Enables continual adaptation for space robots without requiring a reward signal during deployment.  
Relevance: Extends continual RL to degraded hardware and reward-scarce robotics.

## 视觉感知

### 3D Point Cloud Perception

#### [BenthicFlow: Generating Extensible Underwater Environments via Flow Matching](http://arxiv.org/abs/2608.23173v1)
Joaquín Figueira et al. — 2026-08-24 — Generates extensible underwater 3D scenes with flow matching to address scarce underwater data.  
Relevance: Supports 3D scene understanding and point-cloud perception in underwater settings.

## 3. Cross-Topic Signals

- **Memory as a security and reliability surface**: Memory appears across VLA models, skill banks, long-term retrieval, and agent systems — and InjecMEM shows it is also vulnerable to attack.
- **Selective test-time compute is spreading**: Routing-guided disagreement in software agents, selective slow-path intervention in VLAs, and test-time scaling for embodied reasoning all shift compute allocation to inference time.
- **Self-improvement needs explicit boundaries**: TRACE and When Not to Imitate both argue that skill memory and self-evolution must know their limits rather than blindly accumulate success cases.
- **Formal reliability is moving into interfaces and evaluation**: Meta-Ctrl decouples syntactic/semantic constraints, Pointing-VLA redesigns spatial readouts, and RACO redefines navigation success around valid inspection regions.
- **Deployment efficiency spans pruning, small models, and simulation**: E2S-Pruner, ROS2SmolVLA, and minimal simulation foundations all target reduced resource requirements for real-world LLM/VLM agents.

## 4. Priority Reading

#### - [**InjecMEM: Memory Injection Attack on LLM Agent Memory Systems**](http://arxiv.org/abs/2608.23471v1) — Memory is becoming a default agent subsystem; this paper identifies a new attack class that likely needs immediate mitigation.
#### - [**Disagree to Explore, Agree to Commit: Routing-Guided Test-Time Scaling for Software Agents**](http://arxiv.org/abs/2608.22191v1) — A practical, transferable test-time scaling strategy for long-horizon tool-use agents.
#### - [**Act with Intent: Distilling Behavior Intent for Vision-Language-Action Models**](http://arxiv.org/abs/2608.23478v1) — Reframes VLA action learning from behavior cloning to intent distillation, with likely impact on policy generalization.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*