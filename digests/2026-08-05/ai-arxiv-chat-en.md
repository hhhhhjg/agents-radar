# Lab Research Topics Radar 2026-08-05

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 20 new + 0 seen in the last 14 days | Generated: 2026-08-04 22:57 UTC

---

## Today's Overview

- **LLM Agent Engineering**: Three new papers: MemArbiter introduces decision-time memory arbitration for long-horizon agents, From Profiling to Synthesis benchmarks implicit behavioral alignment for personalization, and Real-Time Detection and Repair offers low-cost failure detection from step telemetry.
- **Agent Test-Time Scaling and Self-Improvement**: Three new papers: SearchMaster generates search-agent training data via regulated self-play, Decoding Format audits consistency-based selection in vision-language test-time scaling, and Adversarial Self-Play reports a controlled negative result for legal reasoning.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models**: Three new papers: ChainVLA chains queries through a unified execution state, Grounded Semantic Re-Binding targets paraphrased-instruction brittleness, and Positional Blind Spots reveals spatial non-uniformity in VLA performance.
- **Embodied Navigation**: Two relevant new papers: FreqNav for object-oriented aerial VLN and EndoWAM for generalizable endoscopic navigation; a third matched VLM-bridge paper is off-target and omitted.
- **LLM Pruning and Inference Optimization**: One relevant new paper: budgeted replanning reduces heavy-tailed LLM replanning latency in embodied agents; no direct LLM pruning paper today.
- **Multimodal LLM Pruning**: Two new papers: ET-Prune for evidence-aware visual token budgeting in text-rich MLLMs and DiffPrune for differentiable token pruning in VLMs.
- **Continual Learning**: Three new papers: UCBound-Net for domain-incremental ultrasound segmentation, Bengali sentiment classification via continual pretraining and PEFT, and Z-PEFT for zero-shot backdoor detection in PEFT models.
- **Event-Based Vision**: One new paper: VGER for voxel-guided global event ranking and event cloud attribution.
- **3D Point Cloud Perception**: No relevant new papers today; the matched ICL paper is off-topic.
- **3D Point Cloud Perception and Tracking**: No new papers today.

## LLM Agent 与多智能体

### LLM Agent Engineering

#### [MemArbiter: Decision-Time Memory Arbitration for Long-Horizon LLM Agents](http://arxiv.org/abs/2608.02113v1)
Jiajun Dong et al. | 2026-08-03 | Proposes decision-time memory arbitration to form, organize, prioritize, and prune stored information so action-relevant memory guides current decisions. | Directly targets a core LLM-agent engineering bottleneck: memory relevance at decision time.

#### [From Profiling to Synthesis: Benchmarking Implicit Behavioral Alignment in Personalized LLM Agents](http://arxiv.org/abs/2608.02171v1)
Jiajia Song et al. | 2026-08-03 | Introduces a benchmark that moves from static preference snapshots to implicit behavioral alignment for personalized agents. | Provides evaluation methodology for personalization, a key practical requirement for LLM agents.

#### [Real-Time Detection and Repair of LLM Agent Failures](http://arxiv.org/abs/2608.02464v1)
Sunny Dubey | 2026-08-03 | Shows that many agent failures can be detected and repaired from observable step telemetry without a second LLM judging every step. | Offers a low-cost reliability layer for deployed LLM agents.

### Agent Test-Time Scaling and Self-Improvement

#### [SearchMaster: Grounded and Regulated Self-Play for Search Agents](http://arxiv.org/abs/2608.01822v1)
Wentao Tan et al. | 2026-08-03 | Generates multi-hop search tasks and tool-use trajectories via grounded, regulated self-play without human demonstrations or stronger teachers. | Provides a scalable self-improvement recipe for LLM-based search agents.

#### [It's the Decoding Format, Not the Perturbation: Auditing Consistency-Based Selection for Vision-Language Test-Time Scaling](http://arxiv.org/abs/2608.01207v1)
Puzhuo Zheng et al. | 2026-08-02 | Finds that consistency-based selection in VLM test-time scaling is influenced more by decoding format than by perturbation design. | Challenges common assumptions in test-time scaling transfer from text LLMs to VLMs.

#### [Does the Competitive Component of Adversarial Self-Play Improve Legal Reasoning? A Controlled Negative Result](http://arxiv.org/abs/2608.01559v1)
Miseog Shawn Kim | 2026-08-03 | Reports that adversarial self-play with a verifiable survival reward does not improve legal reasoning in a controlled setting. | Provides a cautionary result for applying self-play to specialized reasoning domains.

### LLM Agent Societies
No new papers today.

## 具身智能

### Vision-Language-Action Models

#### [Grounded Semantic Re-Binding for Robust Instruction Generalization in Vision-Language-Action Models](http://arxiv.org/abs/2608.02497v1)
Zhaokai Yin et al. | 2026-08-03 | Identifies an architectural cause of VLA brittleness to paraphrased instructions and proposes grounded semantic re-binding to remedy it. | Directly targets robust instruction generalization in VLA manipulation.

#### [ChainVLA: Chaining Vision-Language-Action Queries through a Unified Execution State for Long-Horizon Manipulation](http://arxiv.org/abs/2608.02326v1)
Yuzhi Huang et al. | 2026-08-03 | Maintains a unified execution state across action-chunked queries for long-horizon manipulation. | Addresses VLA replanning limitations by preserving established action context.

#### [Uncovering and Mitigating Positional Blind Spots in Vision-Language-Action Models](http://arxiv.org/abs/2608.01573v1)
Dongdong An et al. | 2026-08-03 | Shows that aggregated VLA success rates hide spatially non-uniform competence and proposes mitigation. | Brings evaluation and robustness awareness to VLA deployment.

### Embodied Navigation

#### [EndoWAM: A Grounded World-Action Model for Generalizable Endoscopic Navigation](http://arxiv.org/abs/2608.01221v1)
Jinsong Lin et al. | 2026-08-02 | Grounds actions in a world-action model for navigation under tissue deformation and viewpoint changes. | Applies embodied navigation to a challenging clinical setting.

#### [FreqNav: Stage-Wise Frequency Routing for Object-Oriented Aerial Vision-Language Navigation](http://arxiv.org/abs/2608.00970v1)
Yin Tang et al. | 2026-08-02 | Uses stage-wise frequency routing to match evolving perceptual priorities in object-oriented aerial VLN. | Advances long-horizon closed-loop VLN with dynamic perceptual selection.

## 模型压缩与持续学习

### LLM Pruning and Inference Optimization

#### [When Replanning Becomes the Bottleneck: Budgeted Replanning for Embodied Agents](http://arxiv.org/abs/2608.01428v1)
Shuaijun Liu et al. | 2026-08-02 | Proposes budgeted replanning to curb growing LLM context and heavy-tailed replanning latency in embodied agents. | Directly addresses inference cost and latency in LLM-driven embodied systems.

### Multimodal LLM Pruning

#### [ET-Prune: Evidence-Aware Dynamic Budgeting for Visual Token Pruning in Text-Rich MLLMs](http://arxiv.org/abs/2608.01979v1)
Zizhong Ding et al. | 2026-08-03 | Dynamically budgets visual tokens based on question-relevant evidence in text-rich multimodal tasks. | Tailors visual token pruning to OCR-centric multimodal LLM inference.

#### [DiffPrune: differentiable information throttling for token pruning in vision-language models](http://arxiv.org/abs/2608.01985v1)
Landi He et al. | 2026-08-03 | Learns token scores via differentiable information throttling instead of Gumbel-Softmax discrete selection. | Improves training stability and efficiency for VLM token pruning.

### Continual Learning

#### [UCBound-Net: Uncertainty-Guided Boundary-Aware Continual Learning for Domain-Incremental Ultrasound Segmentation](http://arxiv.org/abs/2608.01518v1)
Mohammad Amanour Rahman | 2026-08-02 | Combines uncertainty guidance and boundary awareness to mitigate catastrophic forgetting in domain-incremental clinical segmentation. | Strongly relevant to continual learning under domain shift in medical imaging.

#### [Two-Stage Bengali Sentiment Classification: Domain Adaptation Through Continual Learning and Parameter-Efficient Fine-Tuning](http://arxiv.org/abs/2608.01471v1)
MD Shaikh Rahman et al. | 2026-08-02 | Proposes a two-stage framework combining domain-adaptive continual pretraining with PEFT for low-resource Bengali sentiment classification. | Demonstrates continual learning and PEFT for low-resource domain adaptation.

#### [Z-PEFT: Zero-shot Backdoor Detection in Parameter-Efficient Fine-Tuning via Canonical Spectral Signatures](http://arxiv.org/abs/2608.02271v1)
Nicola Pitzalis et al. | 2026-08-03 | Detects backdoored PEFT models in a zero-shot manner using canonical spectral signatures. | Addresses security risks in the PEFT ecosystem that overlaps continual learning workflows.

## 视觉感知

### Event-Based Vision

#### [VGER: Voxel-Guided Global Event Ranking for Event Cloud Attribution](http://arxiv.org/abs/2608.01470v1)
Youxin Jiang et al. | 2026-08-02 | Proposes voxel-guided global event ranking to identify salient events in event-cloud perception. | Advances explainability and attribution for event-based vision models.

### 3D Point Cloud Perception
No new papers today.

### 3D Point Cloud Perception and Tracking
No new papers today.

## Cross-Topic Signals

- **Context and memory pressure is a shared bottleneck**: MemArbiter, When Replanning, and ET-Prune/DiffPrune all attack growing context/memory costs from different angles; together they suggest token, memory, and replanning budgets should be coordinated.
- **Surface-level robustness assumptions are being revisited**: Grounded Semantic Re-Binding attributes VLA paraphrased-instruction failures to architecture, while Decoding Format shows decoding format matters more than perturbation in VLM selection.
- **Self-play is being stress-tested**: SearchMaster uses self-play as a data-generation engine, while Adversarial Self-Play reports a negative result in legal reasoning; the contrast highlights task-dependent benefits of self-play.
- **PEFT is a cross-cutting surface for efficiency and security**: Bengali continual learning uses PEFT for domain adaptation, while Z-PEFT detects backdoors in downloaded PEFT models.

## Priority Reading

- **Grounded Semantic Re-Binding** — Most actionable VLA paper today: it identifies an architectural fix for instruction brittleness, potentially reducing the need for costly data scaling.
- **SearchMaster** — A self-play pipeline that needs no human demonstrations or stronger teacher, directly scalable for agent self-improvement.
- **MemArbiter** — Addresses a fundamental long-horizon LLM-agent failure mode: stored memory not guiding the current decision.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*