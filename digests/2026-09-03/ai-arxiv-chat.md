# 实验室研究方向 Radar 2026-09-03

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 19 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-02 23:46 UTC

---

# 研究方向 Radar

## 今日总览

**LLM Agent 与多智能体**
- **LLM Agent 工程**：新增 3 篇新论文，围绕 agent harness 的自生成与演化、动态 harness 生命周期推理、递归 LLM agent 树的权限授予形成完整问题链。
- **Agent 测试时扩展与自我改进**：新增 2 篇高相关论文，分别提出诊断引导的自进化范式与面向长上下文规则的测试时“编译”架构；另有 1 篇 TempCloze 偏视频-LLM 时间推理评测，与本子方向相关性不足，未收录。
- **LLM Agent Society**：今日暂无新论文。

**具身智能**
- **视觉-语言-动作模型**：新增 3 篇新论文，覆盖面从“MLLM 直接作无人机控制器”到“VLA 长程任务统一编排”，再到动态 3D 场景图供给 VLA 使用。
- **具身导航**：系统命中 3 篇，其中 Qwen-Drive-1.0 属于自动驾驶领域的视觉语言基础模型，与具身导航直接相关；VIBE-Bench 和 ASSERT 与导航无直接关联，未收录。

**模型压缩与持续学习**
- **LLM 剪枝与推理优化**：今日暂无高相关新论文；系统命中 SinkPruner 为视觉 token 剪枝，已归入“多模态大模型剪枝”。
- **多模态大模型剪枝**：新增 3 篇新论文，是今日最集中出现的方法簇，分别处理空间剪枝偏差、sink token 问题与 VLM reranker 场景判别性 token 保持。
- **持续学习**：系统命中 3 篇相关文献，其中 2 篇与低秩持续/参数高效适配相关，另 1 篇聚焦预测多重性审计，相关性不足，未收录。

**视觉感知**
- **事件相机视觉感知**：新增 1 篇，将经典 Kalman 滤波物理先验与残差学习结合，用于事件相机场景下的无人机轨迹预测。
- **3D 点云视觉感知**：今日暂无高相关新论文；检索命中 Qwen-Drive-1.0 已归入“具身智能 / 具身导航”。
- **3D 点云感知与跟踪**：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [HarnessDev: Can LLMs Create and Evolve Their Own Agent Harness?](http://arxiv.org/abs/2609.01437v1)

Yuhao Wu 等 | 2026-09-01

- **核心贡献**：提出并系统考察 LLM 在模型权重保持不变的前提下能否自主创建并迭代演化 agent harness。
- **方向关联**：将 agent 工程的核心问题从“评估给定 harness”推向“LLM 自演化外部执行框架”。

#### [CordisBench: Can Language Models Reason About Component Lifecycles in Dynamic Agent Harnesses?](http://arxiv.org/abs/2609.01600v1)

Damien Sileo, Dimitri Kachler | 2026-09-01

- **核心贡献**：发布 1,200 问基准 CordisBench，用于评测模型对动态 harness 中组件生命周期、依赖传播与清理逻辑的推理能力。
- **方向关联**：为 agent harness 的动态软件维护与故障传播提供首个专项评测。

#### [Spawn Freely, Act Sparingly: Progressive Risk Vesting for Recursive LLM-Agent Trees](http://arxiv.org/abs/2609.01035v1)

Molly Wang | 2026-09-01

- **核心贡献**：区分沙箱 spawning 与真实 capability activation，提出渐进式风险归属机制来管理递归 LLM agent 分支的操作权限。
- **方向关联**：直接服务于递归 agent 树的权限治理与风险控制，是 agent 工程安全侧的重要补充。

### Agent 测试时扩展与自我改进

#### [DiagEvo: Diagnosis-Guided Self-Evolution via Hierarchical Error Memory](http://arxiv.org/abs/2609.00768v1)

Xincheng Wei 等 | 2026-09-01

- **核心贡献**：提出诊断引导的分层错误记忆机制，用错误根因诊断指导自博弈中的问题生成，避免自进化性能平台期或回退。
- **方向关联**：将 agent 自我改进从难度/多样性信号升级为可归因的结构化诊断信号。

#### [Compile, Don't Memorize: A Context Compilation Architecture (CCA) for In-Context Learning](http://arxiv.org/abs/2609.00759v1)

Jinhu Qi 等 | 2026-09-01

- **核心贡献**：提出上下文编译架构 CCA，将长上下文中隐含的规则与输出 schema 进行显式编译，而不是让模型在回答时隐式记忆。
- **方向关联**：属于测试时上下文增强/扩展路径，为 agent 在长上下文新规则场景下的稳定推理提供新机制。

### LLM Agent Society

今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [Evaluating Multimodal LLMs as Generalist Vision-Language-Action Agents for Drone Control: Commanding, Approaching, Tracking and Searching](http://arxiv.org/abs/2609.01404v1)

Jaewoo Park 等 | 2026-09-01

- **核心贡献**：将多模态 LLM 直接放入无人机控制回路，仅通过 prompt 声明动作空间，考察其在指挥、接近、跟踪与搜索任务中的 VLA 泛化能力。
- **方向关联**：实证检验通用 MLLM 直接充当 VLA agent 的能力边界，是“零训练部署”路线的关键探索。

#### [EmbodiedSkills: A Unified Framework for Orchestrating, Training, and Deploying VLA Agents](http://arxiv.org/abs/2609.01281v1)

Wei Wang 等 | 2026-09-01

- **核心贡献**：提出统一 VLA 框架，对长程任务的感知、规划、执行、进度验证与异常恢复进行编排、训练和部署。
- **方向关联**：推动 VLA 从“单步动作预测”走向“可扩展长程任务执行系统”。

#### [DSG: Dynamic 3D Scene Graph Construction for Embodied Agents in Changing Indoor Environments](http://arxiv.org/abs/2609.00619v1)

Ming Liao 等 | 2026-09-01

- **核心贡献**：提出动态 3D 场景图构建框架，在物体位置随人或 agent 交互而变化时持续更新场景图。
- **方向关联**：为 VLA agent 提供随时间保持一致的动态场景记忆，支撑长程操作与重规划。

### 具身导航

#### [Qwen-Drive-1.0: An Initial Step towards a Vision-Language Foundation Model for Autonomous Driving](http://arxiv.org/abs/2609.00111v1)

Xin Zhou 等 | 2026-08-31

- **核心贡献**：构建面向自动驾驶的视觉语言基础模型，在统一 VLM 架构中整合 3D 感知、视觉问答与运动规划。
- **方向关联**：体现具身导航走向“单一大模型统一感知-规划”的收敛趋势。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

今日暂无高相关新论文。检索命中的 SinkPruner 属于视觉 token 剪枝，已归入“多模态大模型剪枝”。

### 多模态大模型剪枝

#### [SinkPruner: Sink-Free Visual Token Pruning for Multimodal Large Language Models](http://arxiv.org/abs/2609.01004v1)

Shiyu Li 等 | 2026-09-01

- **核心贡献**：提出免 sink token 的视觉 token 剪枝方法，避免因保留注意力 sink token 而造成的冗余推理开销。
- **方向关联**：针对 MLLM 注意力中的 sink 机制设计剪枝准则，是通用多模态 LLM 推理压缩的一线方法。

#### [S$^2$Prune: Spatially Structured Visual Token Pruning for Multimodal Large Language Models](http://arxiv.org/abs/2609.01224v1)

Yuanyuan Jia 等 | 2026-09-01

- **核心贡献**：发现基于重要性或冗余度的视觉 token 剪枝在输入间产生稳定空间偏差，并提出空间结构化视觉 token 剪枝方法。
- **方向关联**：为多模态大模型剪枝引入空间结构约束，修正纯逐 token 重要性判断的偏差。

#### [From Saliency to Discriminability: Rank-Preserving Visual Token Pruning for VLM Rerankers](http://arxiv.org/abs/2609.00667v1)

Siyi Liu 等 | 2026-09-01

- **核心贡献**：指出在 listwise VLM reranker 中，注意力 saliency 与真实可判别性存在系统性错位，提出保持排序判别力的视觉 token 剪枝策略。
- **方向关联**：面向视觉语言模型重排器这一具体下游任务，提供任务级 token 剪枝新准则。

### 持续学习

#### [RW-LoRA: Communication-Efficient Decentralized LoRA Fine-Tuning via Random Walks](http://arxiv.org/abs/2609.00078v1)

Xingran Chen 等 | 2026-08-31

- **核心贡献**：提出基于随机游走的去中心化 LoRA 微调方法，在避免中心化聚合的同时显著降低通信开销。
- **方向关联**：为分布式或去中心化环境下的低秩持续模型更新提供通信高效的基础设施方案。

#### [Frozen Cores Need Task Signal: Fisher-Whitened Cross-Covariance for Low-Resource LLM Adaptation](http://arxiv.org/abs/2609.00762v1)

Wentao Ye 等 | 2026-09-01

- **核心贡献**：在可训练参数预算极低时，用 Fisher 白化交叉协方差决定低秩系数应该在哪些坐标上起作用，而非均匀选择位置。
- **方向关联**：讨论了冻结核心情况下“哪些参数更新、哪些参数保持冻结”的准则，与持续学习中的参数隔离思路共享同一技术问题。

## 视觉感知

### 事件相机视觉感知

#### [Residual Kalman Dynamics for Event-Based UAV Forecasting](http://arxiv.org/abs/2609.00839v1)

Per Nyblom 等 | 2026-09-01

- **核心贡献**：在 FRED 事件相机数据集上，以常速度 Kalman 滤波为物理基线，训练残差模型预测加速度类修正，用于无人机框预测。
- **方向关联**：展示事件相机场景下经典物理先验与轻量残差学习的有效组合方式。

### 3D 点云视觉感知

今日暂无高相关新论文。

### 3D 点云感知与跟踪

今日暂无新论文。

## 跨方向信号

- **视觉 token 剪枝正在成为 MLLM 推理压缩的主战场**：S2Prune、SinkPruner、From Saliency 同日出现，分别从空间偏差、sink token 与任务判别性切入，说明多模态推理优化已从权重级压缩转向输入 token 级机制化设计。
- **Agent harness 成为新的能力与风险边界**：HarnessDev、CordisBench、Spawn Freely 分别从“生成 harness”“推理 harness 生命周期”“治理递归 harness 权限”切入，共同指向 agent 工程的外部执行框架正在被“一等公民化”。
- **“结构化反馈”取代“浅层信号”**：DiagEvo 用错误根因诊断引导自我进化，DSG 用动态场景图追踪物理变化，两者都从单一标量信号转向结构化、可维护的状态反馈。
- **VLA 系统朝长程任务编排演进**：Drone Control 与 EmbodiedSkills 不再把 VLA 限定在动作映射，而是要求模型同时处理规划、验证、恢复与执行编排。
- **评测设计加速去除捷径**：TempCloze 试图消除语言捷径对视频时间推理的干扰，From Saliency 纠正显著性误导，CordisBench 强调组件生命周期推理，说明新基准正转向对机制层面的压力测试。

## 优先精读

- **HarnessDev**：最有可能改写 agent 工程研究假设的工作。若 LLM 确实能演化自身 harness，则 agent 评估和部署方式都需要整体调整。
- **SinkPruner**：今日最大的方法簇是 MLLM 视觉 token 剪枝，而 sink-free 机制直接针对注意力固有结构，潜在适用范围最广，也同时连接 LLM 推理优化与多模态压缩两条主线。
- **DiagEvo**：自我进化方向正从“难度/多样性信号”转向“诊断驱动”，DiagEvo 提供了可操作的分层错误记忆框架，对 agent 测试时自我改进路径有直接参考价值。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*