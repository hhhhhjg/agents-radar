# 实验室研究方向 Radar 2026-09-10

> 数据来源：[ArXiv](https://arxiv.org/) | 统一检索近3天 | 配置 4 个板块 / 11 个研究方向 | 20 篇新文献 + 0 篇过去14天内已出现 | 生成时间：2026-09-09 23:45 UTC

---

## 今日总览

- **LLM Agent 工程（LLM Agent 与多智能体）**：新论文集中在 Agent 长期记忆、多用户 KV Cache 访问控制与安全任务评测；记忆正在从“工具”升级为系统核心。
- **Agent 测试时扩展与自我改进（LLM Agent 与多智能体）**：RLVR 树结构策略和自博弈近似价值迭代均指向“低成本测试时扩展”。
- **LLM Agent Society（LLM Agent 与多智能体）**：今日暂无新论文。
- **视觉-语言-动作模型（具身智能）**：出现物理接触建模、上下文模仿、非英语语言迁移三类进展，继续强化 VLA 的快速部署与泛化。
- **具身导航（具身智能）**：长时程导航与终身导航基准是今日重点，强调场景记忆与新经验的跨阶段复用。
- **LLM 剪枝与推理优化（模型压缩与持续学习）**：结构化剪枝、动态层路由、视觉 token 剪枝三种效率路线同时推进。
- **多模态大模型剪枝（模型压缩与持续学习）**：今日暂无新论文。
- **持续学习（模型压缩与持续学习）**：长时记忆化设置和动态多模态任务设置是两个新切入点。
- **事件相机视觉感知（视觉感知）**：新工作把事件相机引入隐私感知情感识别。
- **3D 点云视觉感知（视觉感知）**：无监督语义分割与球面观测下的 3D 场景理解有新进展。
- **3D 点云感知与跟踪（视觉感知）**：提出免模板的 LiDAR 3D 单目标跟踪框架。

## 分方向情报

## LLM Agent 与多智能体

### LLM Agent 工程

#### [Graph-Based Personalized Memory for LLM Agents: Representation, Evolution, Retrieval, and Evaluation](http://arxiv.org/abs/2609.08599v1)

作者缩写：Dac Duy Anh Nguyen et al. ｜ 发布：2026-09-08  
核心贡献：提出图结构个性化记忆的“表示—演化—检索—评测”闭环，为长期 Agent 记忆提供系统化设计框架。  
方向关联：直接支撑 LLM Agent 工程中跨会话个性化与长期记忆需求。

#### [BIO-MEMART: Biometric-Aware KV Cache Memory for Multi-User LLM Agents](http://arxiv.org/abs/2609.08566v1)

作者缩写：Yanhong Qian et al. ｜ 发布：2026-09-08  
核心贡献：将多用户 KV Cache 视为外部记忆基底，并加入生物特征感知的访问控制。  
方向关联：把 LLM Agent 记忆工程与推理缓存安全边界结合。

#### [VEX-Bench: Benchmarking LLM Agents for Assessing Exploitability of Software Supply Chain Vulnerabilities](http://arxiv.org/abs/2609.08040v1)

作者缩写：Jiahao Shi et al. ｜ 发布：2026-09-07  
核心贡献：构建漏洞可利用性评估基准，用 LLM Agent 自动筛除软件供应链告警中的误报。  
方向关联：为 LLM Agent 工程提供安全攻防类任务评测基准。

### Agent 测试时扩展与自我改进

#### [Difficulty-Adaptive Tree-Structured Policy Optimization for Expanding Reasoning Coverage in RLVR](http://arxiv.org/abs/2609.08650v1)

作者缩写：Youngjun Yu et al. ｜ 发布：2026-09-08  
核心贡献：在 RLVR 中按难度自适应构造树结构策略，扩大推理搜索覆盖并提升 pass@k。  
方向关联：直接作用于 LLM 推理中的测试时扩展与自我改进。

#### [The Surprising Effectiveness of Approximate Value Iteration in Self-Play](http://arxiv.org/abs/2609.09094v1)

作者缩写：Raphael Boige et al. ｜ 发布：2026-09-08  
核心贡献：表明自博弈中近似价值迭代可在多项游戏上以更低搜索开销逼近 MCTS 风格方法。  
方向关联：为自博弈与测试时计算提供低开销算法替代。

### LLM Agent Society

今日暂无新论文。

## 具身智能

### 视觉-语言-动作模型

#### [DeCAL: Towards Physically-Grounded Dexterous Vision-Language-Action Models via Contact-Aware Latent Co-Imagination](http://arxiv.org/abs/2609.09119v1)

作者缩写：Yankai Fu et al. ｜ 发布：2026-09-08  
核心贡献：引入接触感知的潜在协同想象并融合触觉，为灵巧操作 VLA 提供物理接地。  
方向关联：增强视觉-语言-动作模型对接触丰富任务的建模能力。

#### [ICI-VLA: In-Context Imitation with Spatiotemporally Aligned Demonstrations for Vision-Language-Action Models](http://arxiv.org/abs/2609.07581v1)

作者缩写：Songhua Yang et al. ｜ 发布：2026-09-07  
核心贡献：通过时空对齐示范实现免梯度更新的上下文模仿，使 VLA 快速适应新任务。  
方向关联：直接改善 VLA 在少样本场景下的部署效率。

#### [Measuring Language Transfer in Robot Policies: Adding Greek to a Cosmos3 Vision-Language-Action Policy](http://arxiv.org/abs/2609.07470v1)

作者缩写：Ayoub Kirouane et al. ｜ 发布：2026-09-07  
核心贡献：仅用机器改写指令将希腊语加入 Cosmos3 VLA，观察架构不变时的语言迁移效果。  
方向关联：揭示 VLA 多语言扩展中的表示与泛化问题。

### 具身导航

#### [OmniNav: Robust Long-Horizon Target Navigation in Dynamic Environments](http://arxiv.org/abs/2609.08159v1)

作者缩写：Yujie Tang et al. ｜ 发布：2026-09-08  
核心贡献：提出长时目标导航框架，联合维护场景记忆、目标信念修正与交互可行性选择。  
方向关联：回应具身导航中动态环境与长时程决策的耦合问题。

#### [EvoNav-Bench: Benchmarking Lifelong Navigation in Evolving Environments](http://arxiv.org/abs/2609.08292v1)

作者缩写：Xilin Wang et al. ｜ 发布：2026-09-08  
核心贡献：发布演化环境中的终身导航基准，强调跨阶段经验压缩与复用。  
方向关联：为具身导航智能体的持续学习与长期部署提供评测平台。

## 模型压缩与持续学习

### LLM 剪枝与推理优化

#### [Train Overcomplete, Deploy Compact: Scaling Recovery Capacity for Structured LLM Pruning](http://arxiv.org/abs/2609.06974v1)

作者缩写：Seungmin Oh et al. ｜ 发布：2026-09-07  
核心贡献：提出“过完备训练、紧凑部署”策略，缓解结构化剪枝恢复阶段的容量失配。  
方向关联：直接改进 LLM 结构化剪枝后的性能恢复能力。

#### [Do Dynamic Routers Need Memory? HeRo: History-Aware Routing for Efficient LLM Inference](http://arxiv.org/abs/2609.08189v1)

作者缩写：Hongjin Lin et al. ｜ 发布：2026-09-08  
核心贡献：让动态层路由引入历史状态，从而更稳定地跳过冗余层并降低 LLM 推理成本。  
方向关联：为 LLM 动态推理和路由优化增添记忆维度。

#### [CoVeR: Coverage-Based Token Pruning for Multi-View 3D Reasoning in VLMs](http://arxiv.org/abs/2609.08345v1)

作者缩写：Nhat-Tan Bui et al. ｜ 发布：2026-09-08  
核心贡献：面向多视角 3D 推理 VLM，用覆盖率约束剪除大量冗余视觉 token。  
方向关联：是 LLM/VLM 推理侧 token 剪枝的代表性效率方法。

### 多模态大模型剪枝

今日暂无新论文。

### 持续学习

#### [Continual Learning Mechanisms Compose for Long-Horizon Memorization](http://arxiv.org/abs/2609.06986v1)

作者缩写：Zheyuan Zhang et al. ｜ 发布：2026-09-07  
核心贡献：提出长时记忆化设置，在 100 个持续问答任务中研究记忆保留与机制组合。  
方向关联：为 LLM 持续学习提供长时程记忆评测与分析视角。

#### [NeuCME: Toward Dynamic Multimodal Continual Learning via Neural Combinatorics of Multiple Experts](http://arxiv.org/abs/2609.07009v1)

作者缩写：Kai Guo et al. ｜ 发布：2026-09-07  
核心贡献：突破“每任务模态集合固定”假设，用多专家神经组合处理模态动态变化的多模态持续学习。  
方向关联：扩展持续学习到更真实的多模态任务流设定。

## 视觉感知

### 事件相机视觉感知

#### [Emo-DVS: A Multimodal Benchmark for Privacy-Aware Emotion Recognition with Event Cameras](http://arxiv.org/abs/2609.06928v1)

作者缩写：Jiaqi Chen et al. ｜ 发布：2026-09-07  
核心贡献：构建事件相机驱动的多模态情感识别基准，以硬件层面缓解 RGB 隐私风险。  
方向关联：拓展事件相机视觉感知在隐私敏感情感任务上的应用。

### 3D 点云视觉感知

#### [MSSP: Multi-Scale Spatially-Constrained Partition for Unsupervised Semantic Segmentation of 3D Point Clouds](http://arxiv.org/abs/2609.06959v1)

作者缩写：Zhenghao Zhang et al. ｜ 发布：2026-09-07  
核心贡献：提出多尺度空间约束超点分区，改进无监督 3D 点云语义分割。  
方向关联：直接推动无标注 3D 点云视觉感知。

#### [Spheriverse: 3D Scene Understanding from Spherical Observations in the Wild](http://arxiv.org/abs/2609.09012v1)

作者缩写：Fei Teng et al. ｜ 发布：2026-09-08  
核心贡献：面向球面观测与笛卡尔空间之间的表示鸿沟，提出 3D 场景理解方案。  
方向关联：为开放场景中的 3D 视觉感知与几何对应提供新思路。

### 3D 点云感知与跟踪

#### [TFTrack: A Template-Free Framework for Efficient 3D Point Cloud Tracking](http://arxiv.org/abs/2609.07738v1)

作者缩写：Zhaofeng Hu et al. ｜ 发布：2026-09-07  
核心贡献：提出免模板的三帧单目标跟踪框架，绕过双输入 Siamese 设计和高运动先验依赖。  
方向关联：直接改进 LiDAR 点云下的高效 3D 单目标跟踪。

## 跨方向信号

- **记忆正在成为跨层系统组件**：Agent 图记忆、多用户 KV Cache 授权、动态路由历史感知共同表明，“记忆”正从应用层蔓延到推理基础设施层。
- **无梯度或少梯度快速适应正在扩散**：ICI-VLA 的上下文模仿与 Cosmos3 的多语言机器改写指令，均试图以最少架构改动换取新场景适配。
- **测试时计算走向更精细搜索**：近似价值迭代替代重搜索 MCTS、难度自适应树结构策略扩大 RLVR 覆盖，说明测试时扩展正从“堆算力”转向“结构化探索”。
- **稀疏化与剪枝从权重层扩展到运行时 token/路由层**：结构化 LLM 剪枝、视觉 token 剪枝、动态路由共享同一目标——在不同抽象层级消除冗余计算。

## 优先精读

- [DeCAL](http://arxiv.org/abs/2609.09119v1)：融合触觉、接触建模与 VLA，跨越视觉感知、灵巧操作和具身智能，架构价值高。
- [Do Dynamic Routers Need Memory? HeRo](http://arxiv.org/abs/2609.08189v1)：为高效 LLM 推理引入历史信息，对动态路由类方法的后续发展有较强启发。
#### - [Continual Learning Mechanisms Compose for Long-Horizon Memorization](http://arxiv.org/abs/2609.06986v1)：与持续学习、LLM Agent 长期记忆两条研究方向高度重合，评测设置值得借鉴。

---
*本日报由 [agents-radar](https://github.com/hhhhhjg/agents-radar) 自动生成。*