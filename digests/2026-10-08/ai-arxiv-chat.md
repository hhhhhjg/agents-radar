# 实验室研究方向 Radar 2026-10-08

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 20 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-10-08 01:29 UTC

---

# 研究方向 Radar

## 今日总览
- **LLM Agent 工程**：3 篇新文献，聚焦不确定性引导纠错、Agent 日志取证与证据绑定、长期 Agent 的情境化思考策略。
- **Agent 测试时扩展与自我改进**：2 篇新文献，涉及个性化测试时扩展策略发现，以及全双工语音模型互相对话的轮流机制。
- **LLM Agent Society**：1 篇新文献，风险规避多群体平均场博弈，为异质多智能体不确定性建模提供理论工具。
- **视觉-语言-动作模型**：3 篇新文献，覆盖感知-动作桥接、VLA 推理认证加速、预测潜变量利用。
- **具身导航**：3 篇新文献，涉及风险认证重规划、标志视觉导航数据集、物体所有权学习辅助导航。
- **LLM 剪枝与推理优化**：3 篇相关新文献，主线从单纯加速转向认证、安全与任务感知剪枝。
- **多模态大模型剪枝**：2 篇新文献，关注 token 剪枝引发的安全漏洞与任务感知双重要性剪枝。
- **持续学习**：3 篇新文献，覆盖 PEFT 遗忘比较、LoRA 正交困境缓解、无源持续测试时适应。
- **事件相机视觉感知**：2 篇新文献，探索 BNN 快速事件处理与事件流光度立体。
- **3D 点云视觉感知**：1 篇新文献，面向鲁棒协同 3D 目标检测。
- **3D 点云感知与跟踪**：今日暂无新论文。

## LLM Agent 与多智能体
### LLM Agent 工程
#### [From Uncertainty to Action: Learning to Steer LLM Agents](http://arxiv.org/abs/2610.09115v1)
- 作者：H. Li et al.｜发布：2026-10-06
- 核心贡献：在每个非终止步利用不确定性决定是否纠正、何时纠正及采用何种机制。
- 方向关联：直接服务 LLM Agent 工程中的轨迹纠错与控制。
#### [Learning Situation-Conditioned Thinking Policies for Long-Term LLM Agents](http://arxiv.org/abs/2610.09590v1)
- 作者：H. Su｜发布：2026-10-07
- 核心贡献：学习情境条件化思考策略，复用推理经验且避免历史与上下文无限增长。
- 方向关联：面向长期 Agent 的记忆与思考策略工程。
#### [Correct Answers, Unsupported Findings: Evidence Binding in Forensic Reconstruction of LLM Agent Logs](http://arxiv.org/abs/2610.09581v1)
- 作者：T. Yun et al.｜发布：2026-10-07
- 核心贡献：研究 Agent 日志取证中恢复正确值之外，还需绑定支撑该结论的证据记录。
- 方向关联：提升 Agent 工具日志、审计与可解释工程能力。
### Agent 测试时扩展与自我改进
#### [From Pareto to Preference: Personalized Test-Time Scaling via Amortized Agentic Policy Discovery](http://arxiv.org/abs/2610.09684v1)
- 作者：X. Wang et al.｜发布：2026-10-07
- 核心贡献：通过摊销式 Agent 策略发现实现个性化测试时扩展，在准确率-成本/延迟偏好间选择。
- 方向关联：直接对应测试时扩展与自我改进。
#### [Coupled but Late: Turn-Taking Between Full-Duplex Speech Models in Unscripted Dialogue](http://arxiv.org/abs/2610.08683v1)
- 作者：L. Zhu et al.｜发布：2026-10-06
- 核心贡献：分析全双工语音模型相互对话时的轮流发言耦合与时序错误传播。
- 方向关联：关联自我博弈、模型评估中的多模型交互改进。
### LLM Agent Society
#### [Beyond Nominal Equilibria: Risk-Averse Multi-Population Mean-Field Games](http://arxiv.org/abs/2610.09244v1)
- 作者：B. Jeloka et al.｜发布：2026-10-07
- 核心贡献：提出风险规避多群体平均场博弈，显式处理代表性智能体行为不确定性。
- 方向关联：为 LLM Agent Society 提供多群体、风险敏感的社会博弈建模。

## 具身智能
### 视觉-语言-动作模型
#### [Juno: Taming Predictive Latents for Vision-Language-Action Models](http://arxiv.org/abs/2610.09940v1)
- 作者：Y. Zhu et al.｜发布：2026-10-07
- 核心贡献：研究 JEPA 预测潜变量在 VLA 预训练、策略学习与部署中的可用性。
- 方向关联：提升 VLA 的表征预测与动作生成衔接。
#### [PAIR: Bridging Perception and Action in Vision-Language-Action Models](http://arxiv.org/abs/2610.09016v1)
- 作者：K. Feng et al.｜发布：2026-10-06
- 核心贡献：关注从场景/指令描述表征到动作生成表征之间的转换断层。
- 方向关联：直接针对 VLA 的感知-动作桥接问题。
### 具身导航
#### [Adaptive Risk-Certified Event-Triggered Replanning for Dynamic Navigation](http://arxiv.org/abs/2610.09302v1)
- 作者：R. R. Suganda, B. Hu｜发布：2026-10-07
- 核心贡献：在障碍预测误差不确定、非平稳时，用风险认证事件触发重规划保障动态导航。
- 方向关联：面向具身导航的安全重规划。
#### [SiGNgapore - An Interactive Dataset for Sign-based Visual Navigation](http://arxiv.org/abs/2610.09488v1)
- 作者：N. Zimmerman et al.｜发布：2026-10-07
- 核心贡献：提供基于标志的交互式视觉导航数据集，支持无预建地图环境。
- 方向关联：补充具身导航中的视觉线索与人类导向设施利用。
#### [COOL: Curiosity-Driven Object Ownership Learning for Personalized Robotic Assistance](http://arxiv.org/abs/2610.09358v1)
- 作者：S. Huber et al.｜发布：2026-10-07
- 核心贡献：通过好奇心驱动学习物体所有权，支持个性化机器人寻找与辅助任务。
- 方向关联：关联具身导航中的语义目标与个性化服务。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
#### [CARE: Certifying Acceleration for Vision-Language-Action Inference](http://arxiv.org/abs/2610.08917v1)
- 作者：R. Liu et al.｜发布：2026-10-06
- 核心贡献：面向 VLA 推理加速，强调在延迟与平均成功率之外进行认证评估。
- 方向关联：跨 VLA 与剪枝推理优化，推动加速方法的安全可信评估。
### 多模态大模型剪枝
#### [DIPrune: Task-Aware Token Pruning with Dual Importance for Efficient Multimodal Language Models](http://arxiv.org/abs/2610.08341v1)
- 作者：S. Yang et al.｜发布：2026-10-06
- 核心贡献：提出任务感知、双重要性的 token 剪枝，缓解语义退化与注意力不可靠。
- 方向关联：直接改进多模态大模型剪枝效率与任务保真。
#### [Understanding and Mitigating Token-Pruning-Induced Vulnerabilities in VLMs](http://arxiv.org/abs/2610.09703v1)
- 作者：S. Wang et al.｜发布：2026-10-07
- 核心贡献：首次系统评估 token 剪枝安全性，发现多数策略显著降低 VLM 安全性。
- 方向关联：揭示多模态剪枝的安全代价并提出缓解方向。
### 持续学习
#### [CoDe-LoRA: Mitigating the Orthogonality Dilemma in Continual Learning of LLMs via Knowledge Consolidation and Decoupling](http://arxiv.org/abs/2610.08312v1)
- 作者：M. Liu et al.｜发布：2026-10-06
- 核心贡献：通过知识巩固与解耦缓解正交 LoRA 在 LLM 持续学习中的困境。
- 方向关联：直接面向 LLM 持续学习与灾难性遗忘。
#### [CIRSeg: Coarse-to-Fine Intensity-Robust Liver Segmentation with Source-Free Continual Test-Time Adaptation](http://arxiv.org/abs/2610.09784v1)
- 作者：R. Xu et al.｜发布：2026-10-07
- 核心贡献：用无源持续测试时适应提升肝脏分割对强度变化的鲁棒性。
- 方向关联：持续学习在医学视觉分割中的测试时适应。
#### [Are Parameter-Efficient Fine-tuning Methods Really Different?](http://arxiv.org/abs/2610.09122v1)
- 作者：Y. Li et al.｜发布：2026-10-06
- 核心贡献：比较六种 PEFT 方法在语言和扩散模型中与性能、遗忘及预训练权重变化的关系。
- 方向关联：为持续学习中的参数高效适配与遗忘机制提供分析。

## 视觉感知
### 事件相机视觉感知
#### [Bringing BNNs to Fast Event Processing](http://arxiv.org/abs/2610.09873v1)
- 作者：P. Longour et al.｜发布：2026-10-07
- 核心贡献：将二值神经网络用于事件相机快速处理，压缩权重与激活以降低推理成本。
- 方向关联：事件相机视觉感知的轻量化部署。
#### [PIE-PS: Photometric Stereo from Physical Irradiance Event Streams](http://arxiv.org/abs/2610.08188v1)
- 作者：X. Meng et al.｜发布：2026-10-06
- 核心贡献：从事件流物理辐照度建模光度立体，应对稀疏事件与未知对比阈值。
- 方向关联：事件相机视觉感知中的光照与几何恢复。
### 3D 点云视觉感知
#### [Sparse2comm: Towards Robust Cooperative 3D Object Detection](http://arxiv.org/abs/2610.08573v1)
- 作者：L. Yang et al.｜发布：2026-10-06
- 核心贡献：面向带宽受限与不可靠协作，处理丢包、延迟和空间错位下的协同 3D 检测。
- 方向关联：3D 点云视觉感知中的鲁棒协同检测。
### 3D 点云感知与跟踪
今日暂无新论文。

## 跨方向信号
- **推理加速进入认证与安全阶段**：CARE 强调 VLA 加速认证，Token-Pruning 漏洞揭示剪枝安全退化，DIPrune 则提升任务感知剪枝。
- **Agent 工程转向轨迹级控制与可审计性**：不确定性纠错、日志证据绑定、长期思考策略共同指向可靠 Agent 运行时治理。
- **测试时扩展与多智能体交互融合**：个性化 TTS 与全双工模型轮流机制，和风险规避多群体博弈共同关注多模型/多智能体动态。
- **具身智能共享风险、潜变量与语义线索**：VLA 的预测潜变量、导航的风险认证重规划、标志与所有权学习形成互补。
- **持续学习强调遗忘控制与测试时适应**：LoRA 解耦、PEFT 遗忘比较、医学无源持续 TTA 覆盖参数适配与域漂移。

## 优先精读
- [CARE](http://arxiv.org/abs/2610.08917v1)：跨 VLA 与剪枝推理，提出“认证加速”视角，可能影响安全关键机器人部署。
- [CoDe-LoRA](http://arxiv.org/abs/2610.08312v1)：直接处理 LLM 持续学习中的正交困境，方法新颖且可迁移到多任务适配。
- [PAIR](http://arxiv.org/abs/2610.09016v1)：聚焦 VLA 感知到动作的表征转换断层，是具身智能基础问题。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*