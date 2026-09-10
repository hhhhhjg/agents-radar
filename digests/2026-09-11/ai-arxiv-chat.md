# 实验室研究方向 Radar 2026-09-11

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 12 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-10 23:37 UTC

---

# 研究方向 Radar（2026-09-11）

## 今日总览
- LLM Agent 与多智能体——LLM Agent 工程：3 篇新文献，聚焦企业工具 Agent 基准、agent harness 搜索控制、多智能体图学习。
- LLM Agent 与多智能体——Agent 测试时扩展与自我改进：2 篇新文献，涉及自博弈代码蒸馏文本 harness、验证鸿沟与现实结算奖励。
- LLM Agent 与多智能体——LLM Agent Society：今日暂无新论文。
- 具身智能——视觉-语言-动作模型：3 篇新文献，集中在频率条件流匹配、时频几何交叉注意力、物理世界可变形物体长时程基准。
- 具身智能——具身导航：今日暂无新论文。
- 模型压缩与持续学习——LLM 剪枝与推理优化：今日暂无独立新论文；重叠候选已按最相关归入多模态大模型剪枝。
- 模型压缩与持续学习——多模态大模型剪枝：2 篇新文献，覆盖样本自适应视觉 token 剪枝、GUI Agent 轨迹视觉 token 剪枝。
- 模型压缩与持续学习——持续学习：2 篇新文献，涉及 Bangla 方言 LLM 与地铁 kiosk 运行时评测。
- 视觉感知——事件相机视觉感知：今日暂无新论文。
- 视觉感知——3D 点云视觉感知：今日暂无新论文。
- 视觉感知——3D 点云感知与跟踪：今日暂无新论文。

**分方向情报**

## LLM Agent 与多智能体
### LLM Agent 工程
#### [RobustSGPO: Search-Space Control for Agent Harness Evolution](http://arxiv.org/abs/2609.09646v1)
Z. Zhao, J. Shi, M. Zhou 等 | 2026-09-09  
核心贡献：为语义梯度提示优化引入搜索空间控制，显式指定编辑范围、构造并检查补丁后继续搜索。  
关联：直接面向 agent harness 演化与工程化优化。

#### [The Era by Eon Benchmark: A Generated Enterprise Estate with Exact Ground Truth for Benchmarking LLM Agents](http://arxiv.org/abs/2609.09853v1)
B. Gruenbaum, D. Porat, A. Natanzon 等 | 2026-09-09  
核心贡献：提出围绕完整虚构公司、含企业工具与精确 ground truth 的 LLM Agent 基准。  
关联：为企业系统记录中的 Agent 工具使用提供可评估环境。

#### [Multi-Agent Agentic Graph Learning via Structural Signatures](http://arxiv.org/abs/2609.09565v1)
L. Qu, J. Li, H. Wang | 2026-09-09  
核心贡献：通过结构签名推进多智能体 agentic graph learning。  
关联：多智能体协作与图证据采样，属于 LLM Agent 工程与多智能体交叉。

### Agent 测试时扩展与自我改进
#### [Building the Harness Automatically: Self-Play in Code Distills a Text Harness for Black-Box Optimization](http://arxiv.org/abs/2609.09468v1)
Y. Wu, Z. Ren, Z. Hu 等 | 2026-09-08  
核心贡献：让 agent 通过可执行实践与自博弈学习数值搜索策略，并蒸馏为文本 harness 迁移。  
关联：体现测试时自我改进与可执行经验蒸馏。

#### [Proof-Carrying Cognition: Closing the Verification Gap with Reality-Settled Reward](http://arxiv.org/abs/2609.09776v1)
E. Reddy M, S. Karmakar | 2026-09-09  
核心贡献：指出推理自我改进受限于验证鸿沟，并提出 reality-settled reward 思路。  
关联：面向无廉价形式验证域中的可扩展奖励与自我改进。

### LLM Agent Society
今日暂无新论文。

## 具身智能
### 视觉-语言-动作模型
#### [Frequency-Conditioned Flow Matching for Vision-Language-Action Models](http://arxiv.org/abs/2609.10405v1)
H. Niu, S. Dong, H. Liu 等 | 2026-09-09  
核心贡献：在 VLA 流匹配中显式建模动作轨迹频率分量，应对非均匀能量分布。  
关联：直接改进 VLA 动作生成范式。

#### [Time-Frequency Geometric Cross-Attention for Chunked Vision-Language-Action Models](http://arxiv.org/abs/2609.09925v1)
S. Dong, H. Niu, H. Liu 等 | 2026-09-09  
核心贡献：针对 chunked VLA 的动作块，引入时频几何交叉注意力。  
关联：提升动作 chunk 的轨迹结构建模能力。

#### [FolDeX: A Physical-World Benchmark for Long-Horizon Robotic Manipulation of Deformable Objects](http://arxiv.org/abs/2609.10243v1)
C. Liu, Y. Xu, F. Wu 等 | 2026-09-09  
核心贡献：提出物理世界长时程可变形物体机器人操作基准。  
关联：为 VLA 与世界动作模型提供真实机器人评估。

### 具身导航
今日暂无新论文。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
今日暂无新论文（重叠候选已按最相关归入多模态大模型剪枝）。

### 多模态大模型剪枝
#### [Beyond One-Size-Fits-All: Sample-Adaptive Strategy Routing for Vision Token Pruning in MLLMs](http://arxiv.org/abs/2609.10346v1)
H. Liang, P. Zhou, Z. Wan 等 | 2026-09-09  
核心贡献：指出单一固定视觉 token 剪枝策略不足，提出样本自适应策略路由。  
关联：直接优化 MLLM 视觉 token 剪枝与推理成本。

#### [TRACE: Trajectory-robust Admission with Evidence Ordering for Efficient GUI Agents](http://arxiv.org/abs/2609.10297v1)
Y. Wang, M. Qiao, X. Zhang 等 | 2026-09-09  
核心贡献：针对 GUI Agent 轨迹截图累积，提出训练无关的视觉 token 剪枝与证据排序。  
关联：降低 GUI Agent 多模态推理延迟与内存占用。

### 持续学习
#### [5-Dialects-BN: Unmasking the Impact of Transliteration on Bangla Dialectal LLMs](http://arxiv.org/abs/2609.09964v1)
M. M. Jawad, G. M. Jim, R. Ahmed 等 | 2026-09-09  
核心贡献：研究转写对 Bangla 方言 LLM 的影响，揭示低资源与方言场景性能退化。  
关联：关联语言模型领域适应与持续学习鲁棒性。

#### [MetroLLM-Bench: Evaluating Language Models as Transit Kiosk Runtimes](http://arxiv.org/abs/2609.10016v1)
R. Hendriks | 2026-09-09  
核心贡献：提出 955 例地铁 kiosk 运行时基准，覆盖六城地铁与十一类任务。  
关联：为 LLM 策略层部署与适应评测提供持续学习相关场景。

## 视觉感知
### 事件相机视觉感知
今日暂无新论文。
### 3D 点云视觉感知
今日暂无新论文。
### 3D 点云感知与跟踪
今日暂无新论文。

## 跨方向信号
- VLA 动作生成正从逐时间步坐标转向频率、时频与几何结构建模，可能同时影响动作 chunk 表示与机器人策略。
- Agent 工程从提示优化扩展到 harness 搜索控制与自博弈蒸馏，测试时自我改进与工程优化边界正在融合。
- 视觉 token 剪枝成为多模态大模型与 GUI Agent 推理成本的关键瓶颈，样本自适应与轨迹鲁棒性成为新问题。
- 企业工具、物理世界机器人、推理奖励三类基准/验证机制同步推进，显示 Agent 评估正从通用问答转向可验证任务。
- 低资源语言与垂直部署场景仍暴露适应与退化问题，持续学习需求从参数更新延伸到评测与运行时策略层。

## 优先精读
#### - **Frequency-Conditioned Flow Matching for Vision-Language-Action Models**：直接针对 VLA 动作频率非均匀分布，可能影响动作生成主干设计。
- **Building the Harness Automatically**：代表 Agent 自博弈、代码实践与文本 harness 蒸馏路径，对测试时自我改进有方法启发。
- **Beyond One-Size-Fits-All**：面向 MLLM 视觉 token 剪枝提出样本自适应策略路由，兼顾通用性与推理成本控制。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*