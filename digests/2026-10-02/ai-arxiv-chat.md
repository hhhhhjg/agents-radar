# 实验室研究方向 Radar 2026-10-02

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 7 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-10-02 01:14 UTC

---

# 研究方向 Radar（截至 2026-10-02）

## 今日总览

**LLM Agent 与多智能体**
- LLM Agent 工程：今日暂无新论文。
- Agent 测试时扩展与自我改进：3 篇新文献，集中在顺序测试时扩展探索、LLM 服务中的推测搜索、自博弈技能发现；前两者直接面向推理算力分配，第三偏具身自我改进。
- LLM Agent Society：今日暂无新论文。

**具身智能**
- 视觉-语言-动作模型：今日暂无新论文。
- 具身导航：今日暂无新论文。

**模型压缩与持续学习**
- LLM 剪枝与推理优化：今日暂无新论文。
- 多模态大模型剪枝：今日暂无新论文。
- 持续学习：今日暂无新论文。

**视觉感知**
- 事件相机视觉感知：1 篇新文献，关注 SNN 膜电位统计用于低计算 OOD 检测。
- 3D 点云视觉感知：2 篇新文献，分别面向异步协作 3D 检测与集合式非网格视觉架构。
- 3D 点云感知与跟踪：今日暂无新论文；1 篇元数据命中经核验为儿科喘息检测，与点云跟踪不相关，未纳入。

## LLM Agent 与多智能体

### LLM Agent 工程

今日暂无新论文。

### Agent 测试时扩展与自我改进

#### [Towards Better Exploration in Sequential Test-Time Scaling](http://arxiv.org/abs/2609.39632v1)
Rance et al. | 2026-09-30。核心：提出面向顺序测试时扩展的更好探索方法，以缓解现有方法在长时程计算下收益衰减的问题。关联：直接对应 Agent 测试时扩展与自我改进中的推理算力分配与探索效率。

#### [Taming Speculative Search for Test-Time Scaling in LLM Serving](http://arxiv.org/abs/2609.39334v1)
Jeong et al. | 2026-09-30。核心：面向 LLM 服务场景，优化/驯化推测搜索以加速测试时扩展中的推理路径探索。关联：将测试时扩展与推理服务系统优化连接，提升 Agent 推理效率。

#### [Game-Guided Skill Discovery through Self-Play for Playable Agent Control](http://arxiv.org/abs/2609.40137v1)
Rho et al. | 2026-09-30。核心：提出 GGSD，通过游戏自博弈发现人类可直接玩的运动技能，将具身智能体控制抽象为少量可学习行为。关联：为 Agent 自我改进提供自博弈技能发现思路，但更偏具身控制而非 LLM 测试时扩展。

### LLM Agent Society

今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

今日暂无新论文。

### 具身导航

今日暂无新论文。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

今日暂无新论文。

### 多模态大模型剪枝

今日暂无新论文。

### 持续学习

今日暂无新论文。

## 视觉感知

### 事件相机视觉感知

#### [Vmem-$\varphi$: Low-Compute Out-of-Distribution Detection in Spiking Neural Networks from Membrane-Potential Statistics](http://arxiv.org/abs/2610.00350v1)
Rana et al. | 2026-09-29。核心：利用脉冲神经网络膜电位统计进行低计算 OOD 检测，面向事件相机数据。关联：直接服务事件相机视觉感知中的能效与分布外鲁棒性。

### 3D 点云视觉感知

#### [EgoRefine: Ego-Referenced Predictive Alignment and Trajectory-Conditioned Reliability-Aware Fusion for Asynchronous Collaborative Perception](http://arxiv.org/abs/2610.00319v1)
Kong et al. | 2026-09-29。核心：面向异步协作感知，提出 ego-referenced 预测对齐与轨迹条件可靠性感知融合，用于 3D 目标检测。关联：直接对应 3D 点云视觉感知中的多智能体协作检测与异步鲁棒融合。

#### [Atomizer-IO: Beyond Pixels, Patches and Grids](http://arxiv.org/abs/2609.40320v1)
de Turckheim et al. | 2026-09-30。核心：提出超越像素、patch 和网格的集合式视觉架构，处理通道、时间采样、空间分辨率与几何可变的传感数据。关联：为 3D 点云等非规则、非网格视觉感知提供通用表示思路。

### 3D 点云感知与跟踪

今日暂无新论文。备注：候选 WIPSNet（[链接](http://arxiv.org/abs/2610.00398v1)）虽被元数据匹配至此，但摘要为夜间阻抗体积描记的小儿喘息检测，与 3D 点云感知与跟踪无关，按相关性优先不纳入。

## 跨方向信号

- 测试时扩展正从并行独立采样转向顺序探索与推理路径搜索，服务层推测搜索同步优化计算与延迟。
- 自博弈与技能发现为 Agent 自我改进和具身控制提供紧凑技能抽象，可能连接语言智能体与低层控制。
- 事件相机感知与 SNN 结合，低计算 OOD 检测转向利用模型内部统计，适合边缘和能效敏感场景。
- 3D 协作感知强调异步鲁棒性：预测对齐、轨迹条件建模和可靠性融合成为关键设计。
- 视觉架构向集合式、非网格表示迁移，适配点云、事件等不规则采样数据。

## 优先精读

#### **Towards Better Exploration in Sequential Test-Time Scaling**：直接命中 Agent 测试时扩展核心瓶颈，聚焦长时程探索与收益衰减，适合作为该方向基准阅读。
2. **EgoRefine**：3D 点云视觉感知中高相关的异步协作检测工作，预测对齐与可靠性融合可迁移到多智能体感知系统。
3. **Vmem-$\varphi$**：事件相机方向唯一新文献，结合 SNN 与膜电位统计实现低计算 OOD 检测，兼顾能效与鲁棒性。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*