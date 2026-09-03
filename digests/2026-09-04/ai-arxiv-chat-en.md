# Lab Research Topics Radar 2026-09-04

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 18 new + 0 seen in the last 14 days | Generated: 2026-09-03 23:44 UTC

---

# Research Topics Radar — 2026-09-04

## Today's Overview
- **LLM Agent and Multi-Agent — LLM Agent Engineering**: 3 new matches on long-horizon efficiency, tool-use harness design, and memory safety for personalized agents. The cluster shows growing emphasis on reducing per-step decisions and hardening agent memory.
- **LLM Agent and Multi-Agent — Agent Test-Time Scaling and Self-Improvement**: 2 high-confidence new matches — a broad test-time self-improvement survey and a post-training pipeline for competitive-programming agents. A third auto-matched OpenIE diffusion paper is dotted-line relevant and omitted as a weak match.
- **LLM Agent and Multi-Agent — LLM Agent Societies**: No new papers today.
- **Embodied Intelligence — Vision-Language-Action Models**: 2 strong new papers on VLA interpretability and long-horizon human-intent manipulation; LookStep, a third matched paper, is also navigation-specific and is covered under Embodied Navigation.
- **Embodied Intelligence — Embodied Navigation**: 3 new matches spanning VLN efficiency, world-model benchmarks for action-conditional dynamics, and query robustness in dynamic 4D scenes.
- **Model Compression and Continual Learning — LLM Pruning and Inference Optimization**: 1 new matched paper (ShallowStream) on multimodal streaming-video inference; it is placed under the more specific Multimodal LLM Pruning heading.
- **Model Compression and Continual Learning — Multimodal LLM Pruning**: 1 new paper (ShallowStream), which is detailed here.
- **Model Compression and Continual Learning — Continual Learning**: 3 new PEFT/LoRA-heavy candidates; none is a canonical continual-learning paper, but all concern incremental or per-cohort adaptation.
- **Visual Perception — Event-Based Vision**: No new papers today.
- **Visual Perception — 3D Point Cloud Perception**: 3 new papers covering radar point clouds, laser-scanning defect detection, and 3D plant phenotyping.
- **Visual Perception — 3D Point Cloud Perception and Tracking**: No new papers today.

## LLM Agent and Multi-Agent

### LLM Agent Engineering
#### [Act More, Decide Less: Skill-Guided Adaptive Action Chunking for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.02042v1)
Y. Yang, C. Jin, J. Zhao et al. | 2026-09-02 | Contribution: Proposes adaptive, skill-guided action chunking so agents execute routine action sequences in one LLM round instead of one primitive action at a time. | Relevance: Directly tackles round-efficiency and replanning overhead for long-horizon LLM agent workflows.

#### [Harness Engineering in LLM Tool Use via Agent-Native Reusable Tool Primitives](http://arxiv.org/abs/2609.01736v1)
H. Jin, S. Wang, X. Yu et al. | 2026-09-01 | Contribution: Introduces reusable agent-native tool primitives to smooth incompatible API schemas and tool output types in multi-turn reasoning. | Relevance: Addresses a core systems bottleneck in reliable LLM tool-use and multi-step agent execution.

#### [CAPTURE: Disentangling Preference Drift from Memory Poisoning in Personalized LLM Agents](http://arxiv.org/abs/2609.02265v1)
S. M. A. Hossain, R. K. Shayoni, M. K. Morol et al. | 2026-09-02 | Contribution: Presents a method for separating genuine preference drift from adversarial or transient memory conflicts in persistent agent memory. | Relevance: Targets memory robustness and trust in long-lived personalized agents, an increasingly central agent-engineering concern.

### Agent Test-Time Scaling and Self-Improvement
#### [A Survey on Self-Improving Test-Time Intelligence: Feedback-Driven Adapting, Learning, and Scaling at Inference](http://arxiv.org/abs/2609.01679v1)
S. Niu, G. Chen, Y. Chen et al. | 2026-09-01 | Contribution: Systematizes methods by which models adapt, learn, and scale their behaviour from test-time feedback during deployment. | Relevance: Provides a field-level map directly aligned with this lab interest on agent test-time scaling and self-improvement.

#### [Post-Training Language Models for Gold-Medal Performance in Coding Competitions](http://arxiv.org/abs/2609.02849v1)
A. Ficek, S. Narenthiran, M. Samadi et al. | 2026-09-02 | Contribution: Combines large-scale problem curation, synthetic reasoning traces, and post-training into a specialization pipeline for competitive programming. | Relevance: Offers a concrete self-improvement/specialization recipe applicable to reasoning-capable agents.

### LLM Agent Societies
No new papers today.

## Embodied Intelligence

### Vision-Language-Action Models
#### [Latent Cluster Analysis for Vision-Language-Action Models](http://arxiv.org/abs/2609.02634v1)
T. Wulff, S. Lanza, T. Bila et al. | 2026-09-02 | Contribution: Proposes a latent cluster-analysis framework for probing internal representations of VLA models. | Relevance: Adds interpretability tooling for VLA behaviors, which is still underexplored relative to LLM interpretability.

#### [HINT: Human-Intent Inception for Long-Horizon Robot Manipulation](http://arxiv.org/abs/2609.02653v1)
M. Mei, H. Xu, S. Jin et al. | 2026-09-02 | Contribution: Injects high-level human intent into policies so robots adapt to evolving visual observations during long-horizon manipulation. | Relevance: Extends VLA-style control toward flexible, human-intent-conditioned task execution.

### Embodied Navigation
#### [LookStep: Efficient Vision-Language Navigation with Linguistic Foresight and Event Driven Memory](http://arxiv.org/abs/2609.02350v1)
K.-Y. Yu, Y. Li, H. Xu et al. | 2026-09-02 | Contribution: Proposes a VLM-based VLN method that uses linguistic foresight and event-driven memory rather than only next-step action supervision. | Relevance: Directly improves efficiency and memory use in instruction-following embodied navigation.

#### [AGI Maze Prediction Datasets: A Compact Benchmark for Learning World Dynamics with Transformers](http://arxiv.org/abs/2609.02339v1)
A. Potapov | 2026-09-02 | Contribution: Introduces a lightweight maze benchmark for testing whether predictive models maintain and update internal world state under actions. | Relevance: Supplies a controlled action-conditional world-modeling testbed relevant to embodied navigation and planning agents.

#### [Query Rewriting for Complex Object Segmentation in 4D Gaussian Representations](http://arxiv.org/abs/2609.02664v1)
T.-K. Nguyen, T.-P. Tran, M.-T. Tran et al. | 2026-09-02 | Contribution: Studies how verbose, narrative-style queries degrade language-guided dynamic-scene segmentation and evaluates query-rewriting remedies. | Relevance: Improves robust language grounding in changing 4D scenes, a capability useful for embodied agents navigating and querying environments.

## Model Compression and Continual Learning

### LLM Pruning and Inference Optimization
Its single matched paper (ShallowStream) targets multimodal streaming-video understanding and is detailed under Multimodal LLM Pruning below; no standalone LLM-only pruning/inference paper is new today.

### Multimodal LLM Pruning
#### [ShallowStream: Index Shallow then Answer Deep for Streaming Video Understanding](http://arxiv.org/abs/2609.02780v1)
J. Hao, K. Yang, Q. Huang et al. | 2026-09-02 | Contribution: Proposes a two-stage index-then-answer framework to reduce the cost of processing continuous video with multimodal LLMs. | Relevance: Targets inference-time efficiency for multimodal LLMs in embodied and streaming settings, bridging pruning/inference-optimization interests.

### Continual Learning
#### [Federated LoRA Adaptation of BiomedCLIP Across Four International Chest X-Ray Cohorts](http://arxiv.org/abs/2609.02101v1)
S. Poudel, N. Kunwor, M. Dhakal et al. | 2026-09-02 | Contribution: Demonstrates federated LoRA fine-tuning of BiomedCLIP across private chest X-ray cohorts with compact update communication. | Relevance: Shows a practical continual/cross-cohort adaptation pattern for shared multimodal medical models.

#### [Choosing a PEFT Variant for Per-Patient Dysarthric ASR: A Single-Speaker Case Study on Two ASR Bases](http://arxiv.org/abs/2609.02735v1)
B. Muller, L. Tóth, L. Roberts | 2026-09-02 | Contribution: Compares seven LoRA-family parameter-efficient fine-tuning variants for single-speaker per-patient ASR adapters. | Relevance: Provides empirical guidance for repeatedly adding new patient-specific adapters without full model retraining.

#### [TaRA: Training-Aware Low-Rank Adaptation Initialization](http://arxiv.org/abs/2609.02639v1)
T. Kim, E. Park | 2026-09-02 | Contribution: Develops a training-aware LoRA initialization strategy to mitigate the information bottleneck of low-rank decomposition. | Relevance: Improves low-rank adapter quality and stability, which underpins many continual and federated adaptation pipelines.

## Visual Perception

### Event-Based Vision
No new papers today.

### 3D Point Cloud Perception
#### [Stereo 4D Radar for 3D Object Detection: Integrating Geometric Alignment and Absolute Velocity Estimation](http://arxiv.org/abs/2609.02560v1)
S.-H. Song, D.-H. Paek, W.-C. Byun et al. | 2026-09-02 | Contribution: Integrates stereo 4D radar geometric alignment with absolute velocity estimation to improve 3D object detection in clutter. | Relevance: Advances perception from sparse radar point clouds, directly relevant to robust 3D scene understanding.

#### [Integrated Laser Scanning and Image-Based Topology Optimization Techniques for Detection and Quantification of Visible and Subsurface Structural Defects](http://arxiv.org/abs/2609.01808v1)
M. Shafiei Dizaji, D. Harris | 2026-09-01 | Contribution: Combines laser scanning and image-based topology optimization to detect and quantify visible and subsurface structural defects. | Relevance: Demonstrates point-cloud-based geometric analysis for infrastructure inspection, a practical 3D perception application.

#### [Automated Maize Ear Phenotyping Using 3D Reconstructions](http://arxiv.org/abs/2609.01921v1)
R. A. Kumar, S. Tripathi, P. Matthews et al. | 2026-09-01 | Contribution: Automates extraction of maize ear and kernel traits from 3D reconstructions for breeding-scale phenotyping. | Relevance: Highlights downstream 3D geometry-processing workloads that point-cloud perception pipelines must support.

### 3D Point Cloud Perception and Tracking
No new papers today.

## Cross-Topic Signals
- **Action abstraction is emerging as a shared lever**: adaptive action chunking for LLM agents (Act More, Decide Less) parallels long-horizon human-intent manipulation for VLA robots (HINT): both compress low-level decisions into reusable higher-level units.
- **LoRA/PEFT is becoming the connective tissue for adaptation**: federated LoRA, per-patient adapter selection, and LoRA initialization appear across Continual Learning and privately adapted multimodal models.
- **Memory design spans LLM agents and embodied navigation**: CAPTURE treats persistent agent memory as an attack surface, while LookStep introduces event-driven memory for VLN; both treat memory as a curated, selective resource rather than a raw log.
- **Inference-time efficiency is spreading from LLM agents to multimodal streaming**: the test-time self-improvement survey and ShallowStream both frame deployment-time computation as optimizable and adaptive, not fixed.
- **Weak auto-matching should be watched**: DiffIE (OpenIE diffusion) was tagged as test-time self-improvement but has no substantive agent/test-time connection, while several LoRA papers are matched to Continual Learning mainly through adaptation keywords.

## Priority Reading
- **Act More, Decide Less** — Most directly actionable for this lab's LLM-agent engineering work; action-chunking is a practical knob for long-horizon cost/latency.
- **A Survey on Self-Improving Test-Time Intelligence** — Useful orientation for deciding where agent test-time scaling and self-improvement research should focus next.
- **LookStep** — A strong bridge between VLA, embodied navigation, and memory-efficiency concerns; likely to inform future multimodal embodied-agent designs.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*