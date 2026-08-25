# 实验室研究方向 Radar 2026-08-26

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 16 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-08-25 22:19 UTC

---

# 研究方向 Radar

## 今日总览

- **LLM Agent 工程**（属于 LLM Agent 与多智能体）：3 篇新论文，集中关注 Agent 的可靠性与技能边界，包括闭环网络配置评测、自进化技能库、以及“何时不模仿”的边界感知。
- **Agent 测试时扩展与自我改进**（属于 LLM Agent 与多智能体）：3 篇新论文，覆盖软件 Agent 的补丁搜索路由、具身推理测试时缩放、自改进 RLM harness。
- **LLM Agent Society**（属于 LLM Agent 与多智能体）：今日暂无新论文。
- **视觉-语言-动作模型**（属于具身智能）：4 篇候选，分方向详情保留 3 篇高相关；进展集中在空间接地接口、行为意图蒸馏、统一多模态记忆，另有轻量化 ROS2 工业集成工作。
- **具身导航**（属于具身智能）：跨论文按最相关方向去重后保留 2 篇高相关；RACO 面向巡检无人机 VLN 的可靠停靠，OptiSight 结合语义推理与几何控制。
- **LLM 剪枝与推理优化**（属于模型压缩与持续学习）：今日暂无新论文；相关视觉 token 剪枝工作 E2S-Pruner 因对象为视觉-语言模型，归入多模态大模型剪枝。
- **多模态大模型剪枝**（属于模型压缩与持续学习）：1 篇新论文，E2S-Pruner 提出两阶段证据融合的视觉 token 剪枝。
- **持续学习**（属于模型压缩与持续学习）：2 篇新论文，分别面向恶意流量识别与空间机器人免奖励在线适应。
- **事件相机视觉感知**（属于视觉感知）：今日暂无新论文。
- **3D 点云视觉感知**（属于视觉感知）：1 篇新论文，BenthicFlow 用 flow matching 生成可扩展水下 3D 场景。
- **3D 点云感知与跟踪**（属于视觉感知）：今日暂无新论文。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [NetConfArena: An Executable Benchmark for LLM Agents in Closed-Loop Network Configuration](http://arxiv.org/abs/2608.23179v1)

作者：C. Liu 等｜2026-08-24  
核心贡献：构建了闭环、可执行的网络配置评测环境，用于在无风险环境中评估 LLM Agent 的可靠性。  
方向关联：为 LLM Agent 工程提供贴近真实部署的闭环评测基准。

#### [TRACE: A Self-Evolving Skill Bank for Consistent, Limit-Aware LLM Agents](http://arxiv.org/abs/2608.22793v1)

作者：W. Wu 等｜2026-08-24  
核心贡献：提出自进化技能库，让 Agent 在重复任务中保持一致行为，并识别“不能或暂不能安全完成”的请求。  
方向关联：直接面向 Agent 工程中的一致性与限制感知能力。

#### [When Not to Imitate: Boundary-Aware Skill Memory for Reliable Tool-Use LLM Agents](http://arxiv.org/abs/2608.22339v1)

作者：Z. Lin 等｜2026-08-23  
核心贡献：提出边界感知技能记忆，主张从成功轨迹中提取技能时应学会“何时不模仿”。  
方向关联：修正了 Agent 自进化中盲目积累技能可能导致可靠性下降的问题。

### Agent 测试时扩展与自我改进

#### [Disagree to Explore, Agree to Commit: Routing-Guided Test-Time Scaling for Software Agents](http://arxiv.org/abs/2608.22191v1)

作者：K. Chen 等｜2026-08-23  
核心贡献：针对软件 Agent 补丁搜索中 sibling action 相关性问题，提出路由引导的测试时缩放。  
方向关联：为仓储级软件任务中的测试时扩展提供探索-提交决策机制。

#### [ParallelWorld: Test-Time Scaling for Embodied Reasoning](http://arxiv.org/abs/2608.22971v1)

作者：M. Chen 等｜2026-08-24  
核心贡献：将测试时缩放引入具身推理，推动从静态感知走向动态探索的研究范式。  
方向关联：连接 Agent 测试时扩展与具身智能两个研究方向。

#### [Prime Agent: A Self-Improving RLM Harness](http://arxiv.org/abs/2608.23552v1)

作者：S. Karten 等｜2026-08-24  
核心贡献：提供开源自改进 RLM harness，用持久化 IPython REPL 支持长时程评测与编码 Agent 工作流。  
方向关联：为 Agent 自我改进提供可复用的外部计算与评测基础设施。

### LLM Agent Society

今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [Pointing-VLA: Typed Spatial Grounding Interfaces for Vision-Language-Action Manipulation](http://arxiv.org/abs/2608.23138v1)

作者：X. Chen 等｜2026-08-24  
核心贡献：提出类型化隐状态空间读出接口，替代文本坐标或不透明动作 token，改进 VLA 的空间接地。  
方向关联：直接解决 VLA 操作中多模态推理与机器人执行之间的接口脆弱问题。

#### [Act with Intent: Distilling Behavior Intent for Vision-Language-Action Models](http://arxiv.org/abs/2608.23478v1)

作者：S. Lee 等｜2026-08-24  
核心贡献：从演示中蒸馏行为意图，使 VLA 解码器不只模仿电机命令，也学习命令背后的局部目标。  
方向关联：弥补 VLA 行为克隆训练中缺乏意图监督的短板。

#### [UniMem: Unifying Multimodal Memory and Control for Vision-Language-Action Models](http://arxiv.org/abs/2608.22869v1)

作者：L. Osterberg 等｜2026-08-24  
核心贡献：统一多模态记忆与控制，使 VLA 模型能够处理需要记忆的非马尔可夫长时程任务。  
方向关联：补足 VLA 模型在长期任务中的记忆机制短板。

### 具身导航

#### [RACO: Reliability-Aware Coarse-Goal Optimization for Inspection-Oriented UAV Vision-Language Navigation](http://arxiv.org/abs/2608.22678v1)

作者：S. Wang 等｜2026-08-24  
核心贡献：面向巡检场景提出可靠性感知粗粒度目标优化，使 UAV 在有效巡检区域停靠并避免相似干扰物。  
方向关联：将 VLN 从单纯到达目标扩展为“可靠停靠+抗干扰”。

#### [OptiSight: Bridging Semantic Reasoning and Geometric Control for Embodied Navigation](http://arxiv.org/abs/2608.23354v1)

作者：A. Avan 等｜2026-08-24  
核心贡献：提出混合导航框架，将 VLM 语义推理与确定性视觉伺服通过有限状态思维链结合。  
方向关联：为室内具身导航提供语义-几何融合的可行范式。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

今日暂无新论文；相关视觉 token 剪枝工作 E2S-Pruner 归入多模态大模型剪枝。

### 多模态大模型剪枝

#### [E2S-Pruner: Progressive Two-Stage Evidence Fusion for Visual Token Pruning in Vision-Language Models](http://arxiv.org/abs/2608.23253v1)

作者：T. Qian 等｜2026-08-24  
核心贡献：提出渐进两阶段证据融合来剪枝视觉 token，缓解直接跨注意力头和层聚合证据的困难。  
方向关联：直接降低多模态大模型推理延迟与 GPU 内存占用。

### 持续学习

#### [Adapter-Based Few-Shot Continual Learning for Malicious Packet Recognition](http://arxiv.org/abs/2608.23536v1)

作者：K. Stein 等｜2026-08-24  
核心贡献：用适配器实现恶意报文识别的少样本持续学习，缓解新威胁适应中的灾难性遗忘。  
方向关联：将持续学习扩展到网络安全检测场景。

#### [Reward-Free Continual Adaptation for Resilient Space Robots](http://arxiv.org/abs/2608.23452v1)

作者：A. Orsula 等｜2026-08-24  
核心贡献：面向空间机器人硬件退化，提出无需奖励信号的持续适应方法。  
方向关联：拓展持续强化学习到部署阶段无奖励的在线适应场景。

## 视觉感知

### 事件相机视觉感知

今日暂无新论文。

### 3D 点云视觉感知

#### [BenthicFlow: Generating Extensible Underwater Environments via Flow Matching](http://arxiv.org/abs/2608.23173v1)

作者：J. Figueira 等｜2026-08-24  
核心贡献：用 flow matching 生成可扩展水下 3D 场景数据，缓解水下 3D 数据稀缺与地表模型泛化差问题。  
方向关联：为水下 3D 点云理解与场景生成提供数据支撑。

### 3D 点云感知与跟踪

今日暂无新论文。

## 跨方向信号

- **从“模仿成功”到“边界感知”**：TRACE、When Not to Imitate 和 RACO 都强调“知道何时不该行动/不能确认”，可靠性正成为 Agent 与导航系统的共同核心指标。
- **测试时扩展从软件 Agent 走向具身推理**：Disagree to Explore 和 ParallelWorld 分别在软件任务与具身推理中利用测试时计算，表明该范式正在跨场景迁移。
- **记忆与外部状态成为长时程任务共性方案**：UniMem、Prime Agent 和 TRACE 分别用统一记忆、持久化 REPL 和技能库来突破模型上下文限制。
- **数据生成与模型剪枝都服务于成本控制**：BenthicFlow 用生成模型补充稀缺水下数据，E2S-Pruner 用视觉 token 剪枝降低多模态推理成本，体现供给侧优化趋势。
- **持续学习向少标签/无奖励场景延伸**：Adapter-Based Few-Shot 与 Reward-Free Continual Adaptation 分别在网络攻防与空间机器人领域降低在线适应成本。

## 优先精读

- **Pointing-VLA**：空间接地是 VLA 从推理到执行的关键接口，该工作直接挑战文本坐标与动作 token 的不稳定范式，值得精读。
- **Disagree to Explore, Agree to Commit**：软件 Agent 测试时扩展面临补丁无规范答案与轨迹相关性问题，其路由思想可迁移到其他长时程 Agent 任务。
- **E2S-Pruner**：视觉 token 剪枝是多模态大模型推理优化的关键环节，两阶段证据融合对后续剪枝方法有较强参考价值。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*