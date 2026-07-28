# 实验室研究方向 Radar 2026-07-29

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 17 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-07-28 22:54 UTC

---

好的，这是根据您提供的论文列表和配置要求生成的《研究方向 Radar》。

---

### 研究方向 Radar

**报告日期:** 2026-07-29

---

### 1. 今日总览

- **LLM Agent 与多智能体 / LLM Agent 工程**: 今日出现3篇新论文，重点关注 Agent 安全（污点隔离）、记忆机制（可解释性与结构化存储）以及特定领域应用（极端天气预警）。
- **LLM Agent 与多智能体 / Agent 测试时扩展与自我改进**: 今日出现1篇新论文，探索通过任务转换生成自验证奖励，以将强化学习扩展到开放域任务。
- **LLM Agent 与多智能体 / LLM Agent Society**: 今日暂无新论文。
- **具身智能 / 视觉-语言-动作模型**: 今日出现3篇新论文，核心趋势包括引入触觉模态、利用多种数据源构建预训练数据金字塔以及针对VLA模型的专用推理加速架构。
- **具身智能 / 具身导航**: 今日出现3篇新论文，侧重于社交机器人的长期记忆、自动驾驶在恶劣天气下的鲁棒性评估以及多模态大模型的视觉对齐方法。
- **模型压缩与持续学习 / LLM 剪枝与推理优化**: 今日出现1篇新论文，提出面向全模态大模型的查询感知统一Token剪枝方法，以降低推理延迟。
- **模型压缩与持续学习 / 多模态大模型剪枝**: 今日出现2篇新论文，除了全模态剪枝外，还出现了针对病理切片图像超长序列的Token选择方法。
- **模型压缩与持续学习 / 持续学习**: 今日出现3篇新论文，重点聚焦于测试时的域适应（CTTA）、基于LoRA的增量学习新架构以及通过知识蒸馏实现的长程规划能力习得。
- **视觉感知 / 事件相机视觉感知**: 今日出现1篇新论文，提出结合事件相机和主动立体视觉的快速深度传感新范式。
- **视觉感知 / 3D 点云视觉感知**: 今日出现1篇新论文，利用双曲空间处理点云高曲率区域，以增强对细粒度几何结构的表征能力。
- **视觉感知 / 3D 点云感知与跟踪**: 今日暂无新论文。

---

### 2. 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程
#### #### [Agentic Permissions Policy Algebra for Taint Confinement in LLM Agents](http://arxiv.org/abs/2607.24625v1)
    作者: Kravchenko A. et al. | 发布日期: 2026-07-27
    核心贡献: 提出了一套用于LLM Agent的权限策略代数运算，以实现对污点数据的结构化隔离，提升混合机密性数据场景下的安全性。
    关联: 该工作直接解决了LLM Agent在安全领域的核心工程问题，即信息流控制与权限管理。

#### #### [MemChain: Learning Interpretable Memory Traces for Memory-Augmented LLM Agents](http://arxiv.org/abs/2607.24097v1)
    作者: Ma Y. et al. | 发布日期: 2026-07-27
    核心贡献: 提出 MemChain，一种可学习的、结构化的记忆追踪方法，使 Agent 能更有效地解决记忆冗余和冲突问题。
    关联: 该方法为LLM Agent工程提供了新的、更具可解释性的记忆架构，有助于提升Agent长期推理能力。

#### #### [SIREN: Towards End-to-End Extreme-Weather Early Warning with Experience-Grounded LLM Agents](http://arxiv.org/abs/2607.24588v1)
    作者: Ni H. et al. | 发布日期: 2026-07-27
    核心贡献: 构建了基于 LLM Agent 的端到端极端天气预警系统，利用经验知识驱动 Agent 完成预警全流程。
    关联: 展示了LLM Agent工程在气象预警这一复杂、高风险领域的应用潜力，验证了其工程化可行性。

### Agent 测试时扩展与自我改进
#### #### [From RLVR to RLSVR: Task Transformation Induces Self-Verifiable Rewards for Open-Ended LLM Self-Improvement](http://arxiv.org/abs/2607.23802v1)
    作者: Wang Q. et al. | 发布日期: 2026-07-26
    核心贡献: 提出通过任务转换（RLVR->RLSVR）为开放域任务生成可自我验证的奖励信号，从而扩展强化学习的适用范围。
    关联: 该工作直接服务于 Agent 的自我改进能力，为在缺乏明确答案的开放任务中进行测试时扩展提供了新的范式。

### LLM Agent Society
今日暂无新论文。

---

## 具身智能

### 视觉-语言-动作模型
#### #### [τ: Learning Touch-Augmented Vision-Language-Action Models from Future Visual Supervision](http://arxiv.org/abs/2607.24485v1)
    作者: Cheng N. et al. | 发布日期: 2026-07-27
    核心贡献: 提出一种名为 τ 的 VLA 模型，通过利用未来视觉信息作为监督信号，学习将触觉表征有效集成到预训练模型中。
    关联: 直接扩展了VLA模型的多模态信息来源，将触觉这一关键感知模态融入机器人操作，提升了模型的感知丰富度。

#### #### [Data Pyramid for Embodied Manipulation](http://arxiv.org/abs/2607.24744v1)
    作者: Ye Y. et al. | 发布日期: 2026-07-27
    核心贡献: 提出“数据金字塔”概念，通过融合不同来源（如仿真、遥操作）的数据来训练具身操作模型，以解决机器人数据稀缺问题。
    关联: 该方法为训练更强大的视觉-语言-动作模型提供了可行的大规模数据构建路径，是VLA模型工程实践的关键进步。

#### #### [A Motion-Aware Vector Quantization Framework with Centroid Reuse for Efficient VLA Inference](http://arxiv.org/abs/2607.24148v1)
    作者: Song Z. et al. | 发布日期: 2026-07-27
    核心贡献: 提出一种运动感知的向量量化框架，通过质心复用技术，显著加速了VLA模型在GPU上的推理。
    关联: 该工作直接针对VLA模型部署的瓶颈——推理延迟，提供了硬件友好的剪枝加速方案。

### 具身导航
#### #### [Not Forgotten: Implementation and Evaluation of a Personalized Episodic Memory for the Humanoid Robot Head Kim](http://arxiv.org/abs/2607.24190v1)
    作者: Aschenbrenner S. et al. | 发布日期: 2026-07-27
    核心贡献: 为人形机器人头部集成了一种轻量级的情境记忆模块，使其能够跨会话保持个性化交互信息。
    关联: 该工作增强了社交机器人在导航交互中的长期记忆能力，是其实现持久、个性化服务的关键组件。

#### #### [ObsDriveBench: Benchmarking Multimodal Understanding under Adverse Weather with Observability Awareness](http://arxiv.org/abs/2607.23537v1)
    作者: Yan Q. et al. | 发布日期: 2026-07-26
    核心贡献: 发布了 ObsDriveBench 基准测试，专门用于评估视觉-语言模型在真实恶劣天气条件下的多模态理解能力。
    关联: 该基准为衡量导航系统的鲁棒性提供了关键工具，指明了提升自动驾驶等具身导航系统在复杂环境下的可观测性方向。

#### #### [DICA: Dual-Indicator Guided Contrastive Alignment in Multimodal Large Language Models](http://arxiv.org/abs/2607.23944v1)
    作者: Yang H. et al. | 发布日期: 2026-07-27
    核心贡献: 提出一种双指标引导的对比对齐方法，旨在缓解多模态大语言模型中的注意力漂移问题，强化视觉信息利用。
    关联: 该方法能提升模型对场景的理解精度，对依赖视觉信息进行决策的具身导航任务具有潜在价值。

---

## 模型压缩与持续学习

### LLM 剪枝与推理优化
#### #### [Omni-Prune: Query-Aware Unified Token Pruning for Efficient Omnimodal Large Language Models](http://arxiv.org/abs/2607.23445v1)
    作者: Zhong Y. et al. | 发布日期: 2026-07-26
    核心贡献: 提出 Omni-Prune，一种查询感知的统一Token剪枝方法，专门用于优化处理音视频长序列的全模态大模型推理。
    关联: 该方法直接针对全模态LLM的推理瓶颈（长音频-视频Token序列），通过剪枝降低预填充延迟和显存占用，属于LLM推理优化。

### 多模态大模型剪枝
#### #### [PathSelect: Sequential Token Selection for Whole Slide Pathology](http://arxiv.org/abs/2607.23631v1)
    作者: Chen J. et al. | 发布日期: 2026-07-26
    核心贡献: 提出 PathSelect 方法，通过在序列层面选择关键Token，解决了病理全切片图像（WSI）视觉-语言模型处理中序列过长的问题。
    关联: 该工作是一种面向医学特定领域多模态模型的Token级剪枝方法，有效降低了计算负担。

#### #### [Omni-Prune: Query-Aware Unified Token Pruning for Efficient Omnimodal Large Language Models](http://arxiv.org/abs/2607.23445v1)
    作者: Zhong Y. et al. | 发布日期: 2026-07-26
    核心贡献: 提出一种统一的Token剪枝框架，可同时适用于图像、音频和视频模态，在保持性能的同时大幅降低推理成本。
    关联: 该工作是多模态大模型通用剪枝方法的代表，适用于多种模态输入的场景。

### 持续学习
#### #### [Latent-LoRA: Compact Latent-Space Adapters with Gradient-Free Routing for Continual Learning](http://arxiv.org/abs/2607.23837v1)
    作者: Azghan R. R. et al. | 发布日期: 2026-07-26
    核心贡献: 提出 Latent-LoRA，一种在潜在空间中使用紧凑适配器并采用无梯度路由的方法，以解决LoRA持续学习中的灾难性遗忘问题。
    关联: 该工作直接针对持续学习中任务数量增加导致参数量膨胀和遗忘的难点，提供了一种更高效的解决方案。

#### #### [Source-Free Controlled Adaptation of Teachers for Continual Test-Time Adaptation](http://arxiv.org/abs/2607.23735v1)
    作者: Roy A. et al. | 发布日期: 2026-07-26
    核心贡献: 提出一种无源域的、受控的教师模型适配方法，用于持续测试时域适应（CTTA），以提升模型在部署后的鲁棒性。
    关联: 该工作是持续学习在测试时场景的重要应用，解决了模型在推理过程中不断遇到新域分布的适应问题。

#### #### [The Physics of Multi-Turn Long-Horizon Planning: From Pre-training to Post-training via Single- and Multi-Teacher On-Policy Agentic Distillation](http://arxiv.org/abs/2607.24720v1)
    作者: Men T. et al. | 发布日期: 2026-07-27
    核心贡献: 通过单/多教师策略蒸馏，系统研究了基础模型从预训练到后训练过程中长程规划能力的习得与整合机制。
    关联: 该工作从持续学习交叉知识蒸馏的角度，分析了复杂规划能力的获取过程，对Agent的持续学习具有指导意义。

---

## 视觉感知

### 事件相机视觉感知
#### #### [Towards Ultrafast Depth Sensing Via Active Event-based Stereo Vision](http://arxiv.org/abs/2607.23684v1)
    作者: Li J. et al. | 发布日期: 2026-07-26
    核心贡献: 提出一种新型主动事件立体视觉方法，用于实现超高速深度传感，解决了传统帧相机在快速运动场景下的限制。
    关联: 该工作直接拓展了事件相机在深度感知这一核心视觉任务中的应用，提出了全新的传感器融合与算法范式。

### 3D 点云视觉感知
#### #### [PointCHR: Point Cloud Analysis via Curvature-Aware Hyperbolic Rectification](http://arxiv.org/abs/2607.24052v1)
    作者: Yu X. et al. | 发布日期: 2026-07-27
    核心贡献: 提出 PointCHR，利用曲率感知的双曲空间矫正方法，专门处理点云中高曲率区域的稀疏松散问题。
    关联: 该方法从特征空间建模角度切入，增强了对点云关键几何细节的感知能力，是3D点云分析领域的新探索。

### 3D 点云感知与跟踪
今日暂无新论文。

---

### 3. 跨方向信号

- **记忆增强与专家系统兴起**: 无论是 LLM Agent 工程（MemChain）、具身导航（Not Forgotten）还是极端天气预警（SIREN），都在强调引入结构化的、可解释的记忆或专家经验，以克服纯大模型推理的局限性和不可靠性。
- **持续学习中的适配器路由与教师-学生框架**: 持续学习方向下的 Latent-LoRA 和 CTTA 工作，分别展现了以无梯度方式选择适配器和以受控方式更新教师模型的趋势，这些技术有望迁移到其他涉及模型在线更新或任务切换的Agent系统中。
- **具身模型的软硬件协同优化**: 针对 VLA 模型的推理加速（Motion-Aware VQ）和对长序列的Token剪枝（Omni-Prune, PathSelect），体现了从模型架构和运筹优化两个层面，共同解决具身模型实际部署中计算瓶颈的趋势。
- **测试时自我改进的新范式**: 从依赖标准答案的 RLVR 到任务转换后的 RLSVR，标志着 Agent 自我改进能力正从受限的数学/代码领域向更开放的、需要因果推理和常识的领域拓展。

### 4. 优先精读

#### **τ: Learning Touch-Augmented Vision-Language-Action Models from Future Visual Supervision**
    - **理由**: 该工作创新性地解决了触觉感知与VLA模型结合的难题，提出了行之有效的学习范式。触觉是精细操作的关键，此项研究可能为下一代具身智能模型奠定基础。

#### **From RLVR to RLSVR: Task Transformation Induces Self-Verifiable Rewards for Open-Ended LLM Self-Improvement**
    - **理由**: 此工作直面RLVR在开放领域应用的瓶颈，其提出的任务转换思路非常具有启发性。若能成功，将极大地拓展自我改进技术的适用范围，对 Agent 的通用性和自主性有重大影响。

#### **Agentic Permissions Policy Algebra for Taint Confinement in LLM Agents**
    - **理由**: 该工作直击 LLM Agent 在落地应用中的核心安全难题。其提出的形式化代数方法为保障 Agent 在复杂、混合权限环境下的安全运行提供了坚实理论基础，极具工程和商业价值。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*