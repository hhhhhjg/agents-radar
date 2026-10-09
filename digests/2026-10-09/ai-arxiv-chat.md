# 实验室研究方向 Radar 2026-10-09

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 16 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-10-09 01:39 UTC

---

**今日总览**

**LLM Agent 与多智能体**
- LLM Agent 工程：3 篇新文献，聚焦策略合规、工具调用门控、持久记忆治理。
- Agent 测试时扩展与自我改进：2 篇新文献，自博弈 OCR 与 bandit 策略选择。
- LLM Agent Society：今日暂无新论文。

**具身智能**
- 视觉-语言-动作模型：3 篇新文献，围绕 3D 几何、腕相机视角、语言措辞鲁棒性。
- 具身导航：新文献覆盖小物体终身导航与联合世界建模；TKCAM 跨匹配去重至 3D 点云视觉感知。

**模型压缩与持续学习**
- LLM 剪枝与推理优化：今日暂无新论文。
- 多模态大模型剪枝：今日暂无新论文。
- 持续学习：3 篇新文献，PEFT 奇异向量、提示库、免持续训练。

**视觉感知**
- 事件相机视觉感知：今日暂无新论文。
- 3D 点云视觉感知：2 篇新文献，floormap 空间音视觉与文本关键帧相机轨迹。
- 3D 点云感知与跟踪：1 篇新文献，点聚焦注意力与状态空间点云表示。

## LLM Agent 与多智能体
### LLM Agent 工程
#### [Safe, Persistent, and Evolving Agent Harness for Understanding Partially Observable Worlds](http://arxiv.org/abs/2610.11552v1)
作者：Y. Gao et al.；发布：2026-10-08；核心贡献：提出面向部分可观测企业工作流的持久、安全、可演化 agent harness。关联：直接对应 LLM Agent 工程中的策略合规、长时程与工具反馈处理。

#### [NOMOS: Compiling Written Policies into Statically Verified Tool-Call Gates for LLM Agents](http://arxiv.org/abs/2610.11030v1)
作者：M.-Y. Yu et al.；发布：2026-10-08；核心贡献：将书面策略编译为静态验证的工具调用门控。关联：为工具型 LLM Agent 提供可验证合规约束。

#### [What to Admit and How to Present: Governing Persistent Memory in LLM Agents](http://arxiv.org/abs/2610.11188v1)
作者：C. Liu, D. Ding；发布：2026-10-08；核心贡献：区分持久记忆的准入与呈现治理。关联：针对 agent 记忆引发的谄媚与跨域泄漏。

### Agent 测试时扩展与自我改进
#### [SP-DocReader: Difference-Aware Self-Play for Precise Document OCR](http://arxiv.org/abs/2610.11148v1)
作者：W. Liao et al.；发布：2026-10-08；核心贡献：提出差异感知自博弈 OCR 框架，在监督微调后针对残余错误改进。关联：体现测试时/后训练自我改进与自博弈扩展。

#### [Constrained Command-Conditioned Reinforcement Learning with Bandit Strategy Selection in Real-Time Strategy Games](http://arxiv.org/abs/2610.11663v1)
作者：N. Leenders et al.；发布：2026-10-08；核心贡献：分离战略命令选择与单位控制，并用 bandit 策略选择应对分布外对手。关联：为 agent 测试时选择策略与适应提供思路。

### LLM Agent Society
今日暂无新论文。

## 具身智能
### 视觉-语言-动作模型
#### [WARP-VLA: Wrist-Camera Adaptation for View-Robust Policy Execution in Vision-Language-Action Models](http://arxiv.org/abs/2610.11508v1)
作者：J. Lee et al.；发布：2026-10-08；核心贡献：通过腕部相机适配提升 VLA 在相机配置变化下的策略执行鲁棒性。关联：直接解决 VLA 跨设置部署的视角鲁棒性问题。

#### [Explicit Geometric Chain-of-Thought for Vision-Language-Action in Autonomous Driving](http://arxiv.org/abs/2610.10390v1)
作者：X. Gui et al.；发布：2026-10-07；核心贡献：为自动驾驶 VLA 引入显式几何链式推理，弥合 2D 视觉语言与 3D 动作几何需求。关联：对应 VLA 中几何推理与动作精确性。

#### [Rephrase Before You Act: Characterizing and Mitigating Language Sensitivity in Vision-Language-Action Models](http://arxiv.org/abs/2610.10526v1)
作者：M. Watts, Y. Cui；发布：2026-10-07；核心贡献：刻画并缓解 VLA 对指令措辞的敏感性，提出改写后再行动。关联：针对 VLA 语言鲁棒性与指令泛化。

### 具身导航
#### [Lifelong small-object navigation in changing object layouts: a benchmark and method](http://arxiv.org/abs/2610.10125v1)
作者：J. Huang et al.；发布：2026-10-07；核心贡献：提出变化物体布局下小物体终身导航基准与方法。关联：直接面向具身导航中的小目标、遮挡与物体移动。

#### [IntactWorld: Joint World Modeling with Intact Features](http://arxiv.org/abs/2610.11174v1)
作者：B. Tan et al.；发布：2026-10-08；核心贡献：以完整特征进行联合世界建模，增强对真实世界逻辑的理解。关联：为具身导航提供世界模型与空间动态理解基础。

## 模型压缩与持续学习
### LLM 剪枝与推理优化
今日暂无新论文。
### 多模态大模型剪枝
今日暂无新论文。
### 持续学习
#### [Stability-Plasticity Balance via Singular-Vector Selection in LLM Continual Learning](http://arxiv.org/abs/2610.11076v1)
作者：L. Wang et al.；发布：2026-10-08；核心贡献：通过奇异向量选择平衡 LLM 持续学习中的稳定性与可塑性。关联：直接针对 LLM 持续适应中的灾难性遗忘。

#### [From a Prompt to Repertoires: Evolving Functional REpertoires Enable LLM Continual Learning](http://arxiv.org/abs/2610.11373v1)
作者：F. Liu et al.；发布：2026-10-08；核心贡献：从提示演化出功能库以支持 LLM 持续学习。关联：以提示操作而非仅参数更新实现持续学习。

#### [Continual Learning without Continual Training](http://arxiv.org/abs/2610.10379v1)
作者：N. Narayanan et al.；发布：2026-10-07；核心贡献：提出无需持续训练的持续学习思路。关联：为减少优化开销与遗忘提供新范式。

## 视觉感知
### 事件相机视觉感知
今日暂无新论文。
### 3D 点云视觉感知
#### [FloorSAV: Elucidating Spatial Audio-Visual Context with 2D Floormap for AV-LLMs](http://arxiv.org/abs/2610.11310v1)
作者：K.-R. Kim et al.；发布：2026-10-08；核心贡献：用 2D floormap 为音视频 LLM 显式引入全局空间几何。关联：增强动态自我中心环境中的 3D 空间推理与空间感知。

#### [TKCAM: Text and Keyframe to Camera Trajectory Generation](http://arxiv.org/abs/2610.11105v1)
作者：H. Yang et al.；发布：2026-10-08；核心贡献：基于文本和关键帧生成可控相机轨迹。关联：服务于 3D 场景理解与空间运动建模；跨匹配具身导航，去重归此。

### 3D 点云感知与跟踪
#### [Point-Focused Attention Meets Context-Scan State Space: Robust Biological Visual Perception for Point Cloud Representation](http://arxiv.org/abs/2610.11342v1)
作者：K. Qu et al.；发布：2026-10-08；核心贡献：结合点聚焦注意力与上下文扫描状态空间，提升点云表示。关联：面向 3D 点云感知与跟踪的鲁棒表示学习。

**跨方向信号**
- Agent 工程从“会用工具”转向“可治理”：策略静态验证、记忆准入/呈现、部分可观测长时程。
- 持续学习出现免持续训练、提示库、奇异向量选择等低参数更新路线，降低遗忘与优化成本。
- VLA 鲁棒性成为焦点：3D 几何 CoT、腕相机适配、指令改写共同补足空间与语言泛化。
- 空间智能汇合具身与 3D 视觉：世界模型、floormap、相机轨迹增强场景与动态理解。
- 自博弈与 bandit 策略选择可迁移至 agent 测试时适应与自我改进。

**优先精读**
#### - [Safe, Persistent, and Evolving Agent Harness for Understanding Partially Observable Worlds](http://arxiv.org/abs/2610.11552v1)：覆盖企业级 agent 安全、持久、演化与部分可观测，工程价值高。
#### - [Explicit Geometric Chain-of-Thought for Vision-Language-Action in Autonomous Driving](http://arxiv.org/abs/2610.10390v1)：直击 VLA 的 2D 理解与 3D 动作错配，方向代表性强。
#### - [Stability-Plasticity Balance via Singular-Vector Selection in LLM Continual Learning](http://arxiv.org/abs/2610.11076v1)：面向 LLM 持续学习的 PEFT 新思路，适合复现与对比。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*