# Lab Research Topics Radar 2026-10-02

> Source: [ArXiv](https://arxiv.org/) | 3-day search window | 4 groups / 11 configured topics | 7 new + 0 seen in the last 14 days | Generated: 2026-10-02 01:14 UTC

---

## Today's Overview
- **LLM Agent Engineering** (LLM Agent 与多智能体): No new papers today.
- **Agent Test-Time Scaling and Self-Improvement**: Two highly relevant new papers address exploration in sequential test-time scaling and speculative search for LLM serving; a third matched paper on self-play motor-skill discovery is a weak fit for LLM test-time scaling.
- **LLM Agent Societies**: No new papers today.
- **Vision-Language-Action Models** (具身智能): No new papers today.
- **Embodied Navigation** (具身智能): No new papers today.
- **LLM Pruning and Inference Optimization**: No new papers today.
- **Multimodal LLM Pruning**: No new papers today.
- **Continual Learning**: No new papers today.
- **Event-Based Vision**: One new paper introduces low-compute out-of-distribution detection for spiking neural networks using membrane-potential statistics.
- **3D Point Cloud Perception**: Two new papers cover a grid-free set-based vision architecture and asynchronous collaborative perception with trajectory-conditioned fusion.
- **3D Point Cloud Perception and Tracking**: One new matched paper, but it is paediatric wheeze detection from impedance pneumography and does not address 3D point clouds or tracking; no relevant progress today.

## Research Areas
## LLM Agent 与多智能体
### LLM Agent Engineering
No new papers today.

### Agent Test-Time Scaling and Self-Improvement
#### [Towards Better Exploration in Sequential Test-Time Scaling](http://arxiv.org/abs/2609.39632v1)
- **Authors:** Rance, Pizzati, Sock et al.
- **Published:** 2026-09-30
- **Contribution:** Studies better exploration for sequential test-time scaling to sustain inference-time improvement over long timescales.
- **Relevance:** Directly targets the lab’s agent test-time scaling and self-improvement interest in improving reasoning via additional inference compute.

#### [Taming Speculative Search for Test-Time Scaling in LLM Serving](http://arxiv.org/abs/2609.39334v1)
- **Authors:** Jeong, Choi, Jeon et al.
- **Published:** 2026-09-30
- **Contribution:** Examines speculative search for test-time scaling in LLM serving to accelerate exploration of reasoning paths.
- **Relevance:** Connects test-time scaling with serving-system efficiency, an important practical angle for scalable agent inference.

### LLM Agent Societies
No new papers today.

## 具身智能
### Vision-Language-Action Models
No new papers today.

### Embodied Navigation
No new papers today.

## 模型压缩与持续学习
### LLM Pruning and Inference Optimization
No new papers today.

### Multimodal LLM Pruning
No new papers today.

### Continual Learning
No new papers today.

## 视觉感知
### Event-Based Vision
#### [Vmem-$\varphi$: Low-Compute Out-of-Distribution Detection in Spiking Neural Networks from Membrane-Potential Statistics](http://arxiv.org/abs/2610.00350v1)
- **Authors:** Rana, Tripathi, Dipu et al.
- **Published:** 2026-09-29
- **Contribution:** Proposes Vmem-$\varphi$, a low-compute OOD detection method for spiking neural networks based on membrane-potential statistics.
- **Relevance:** Directly addresses event-camera-oriented SNN processing and reliability under distribution shift.

### 3D Point Cloud Perception
#### [EgoRefine: Ego-Referenced Predictive Alignment and Trajectory-Conditioned Reliability-Aware Fusion for Asynchronous Collaborative Perception](http://arxiv.org/abs/2610.00319v1)
- **Authors:** Kong, Zang, Kang et al.
- **Published:** 2026-09-29
- **Contribution:** Proposes EgoRefine, using ego-referenced predictive alignment and trajectory-conditioned reliability-aware fusion for asynchronous collaborative perception.
- **Relevance:** Directly targets 3D object detection and robust multi-agent 3D perception under delayed cooperative features.

#### [Atomizer-IO: Beyond Pixels, Patches and Grids](http://arxiv.org/abs/2609.40320v1)
- **Authors:** Riffaud de Turckheim, Lobry, Houdré et al.
- **Published:** 2026-09-30
- **Contribution:** Introduces Atomizer-IO, a set-based architecture for sensing data with varying channels, temporal sampling, spatial resolution, and geometry beyond regular grids.
- **Relevance:** Relevant to 3D point cloud perception because point clouds and other geometric sensing modalities are not naturally regular-grid observations.

### 3D Point Cloud Perception and Tracking
No highly relevant papers today; the only matched candidate (WIPSNet) is paediatric wheeze detection from impedance pneumography and does not address 3D point clouds or tracking.

## Cross-Topic Signals
- Test-time scaling is being optimized at two levels: sequential exploration policy and serving-time speculative search, suggesting shared demand for compute-aware search control.
- Non-grid representation is a bridge between 3D point clouds and event-based vision: Atomizer-IO’s set-based abstraction could transfer to irregular event streams and point sets.
- Reliability under imperfect data appears in both EgoRefine’s asynchronous collaborative fusion and Vmem-$\varphi$’s OOD detection for SNNs.
- Low-compute inference pressure connects speculative test-time scaling in LLM serving with energy-efficient SNN-based event-vision detection.
- Asynchronous multi-agent perception in EgoRefine may inform future coordination ideas for multi-agent embodied or sensing systems.

## Priority Reading
#### **[Towards Better Exploration in Sequential Test-Time Scaling](http://arxiv.org/abs/2609.39632v1)** — Core to the configured Agent Test-Time Scaling and Self-Improvement topic; likely offers directly reusable insights on exploration over long inference horizons.
#### **[Taming Speculative Search for Test-Time Scaling in LLM Serving](http://arxiv.org/abs/2609.39334v1)** — Important for understanding how test-time scaling can be made practical in LLM serving systems.
3. **[EgoRefine](http://arxiv.org/abs/2610.00319v1)** — Strong 3D perception paper on asynchronous collaborative fusion, relevant to point-cloud detection and multi-agent robustness.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*