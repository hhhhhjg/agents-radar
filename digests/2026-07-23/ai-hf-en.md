# Hugging Face Trending Models Digest 2026-07-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-23 04:46 UTC

---

# Hugging Face Trending Models Digest
*July 23, 2026*

---

## 1. Today's Highlights

This week's trending models slate reveals an ecosystem pulsing with extreme quantization, multimodal MoE architectures, and a robotics frontier. **google/gemma-4-31B-it** leads in raw download volume (12.1M) while **zai-org/GLM-5.2** tops weekly likes (4,345)—both signaling the community's hunger for large-scale, open-weight language models. Extreme compression is a dominant narrative: **prism-ml** is shipping 1-bit and 2-bit 27B-parameter models that retain conversational quality, while uncensored fine-tunes like **HauhauCS/Qwen3.6-35B-A3B-Uncensored** rank high in both likes and downloads. Notably, robotics pipelines from **openbmb (MiniCPM-RobotManip/Track)** and streaming ASR from **nvidia (Nemotron-3.5)** suggest the hub is expanding beyond pure text into embodied and real-time audio domains.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, Chat, Instruction-Tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 4,345 likes / 545K downloads  
  A 5.2B-parameter mixture-of-experts (MoE) model with dynamic sparse attention; trending for its strong conversational quality and efficient inference profile.

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — google | 3,333 likes / 12.1M downloads  
  Google’s flagship open-weight instruction-tuned LLM combining text and image inputs; its massive adoption reflects trust in the Gemma lineage and strong benchmark performance.

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** — upstage | 341 likes / 0 downloads  
  A 250B-parameter open-weight model pre-trained on diverse multilingual data; notable as one of the largest fully open models available.

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** — Nanbeige | 245 likes / 0 downloads  
  A compact 3B-parameter LLM optimized for efficient deployment on edge devices; draws interest for its small footprint and competitive reasoning.

- **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** — Motif-Technologies | 162 likes / 125 downloads  
  A feature-extraction and text-generation model designed for retrieval-augmented pipelines; its beta release signals growing interest in hybrid embed-and-generate architectures.

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | 2,768 likes / 2.2M downloads  
  A universal OCR model supporting over 100 languages and document layouts; its high download count reflects broad demand for reliable document understanding.

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** — thinkingmachines | 1,465 likes / 16K downloads  
  A multimodal conversational model blending image and text inputs; stands out for its creative response style and strong image grounding.

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** — moonshotai | 1,227 likes / 722K downloads  
  A compressed code-generation model from the Kimi family; excels in multi-turn code editing and repository-level reasoning.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | 2,420 likes / 2.1M downloads  
  A quantized reasoning model fine-tuned on Claude-distilled data; popular for its blend of creative writing and logical chain-of-thought.

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** — openbmb | 157 likes / 58 downloads  
  A vision-language-action (VLA) model for zero-shot robot manipulation; represents a new pipeline category on the hub and early traction in robotics.

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — nvidia | 914 likes / 590K downloads  
  A streaming automatic speech recognition model optimized for low-latency deployment; widely adopted for real-time transcription apps.

- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** — microsoft | 135 likes / 0 downloads  
  A diffusion-based text-to-image model with integrated image-editing capabilities; notable for its high-fidelity generation and editing control.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — Alissonerdx | 235 likes / 0 downloads  
  A LoRA for identity-preserving text-to-video generation; gains attention for its ability to maintain consistent face identity across video frames.

### 🔧 Specialized Models (Code, Math, OCR, Robotics, Embeddings)

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** — ATH-MaaS | 250 likes / 17K downloads  
  A Qwen3.5-based OCR model specialized for scanned documents and handwritten text; fills a niche for high-accuracy text extraction.

- **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** — openbmb | 114 likes / 72 downloads  
  A companion VLA model for object tracking during robotic manipulation; demonstrates growing interest in embodied AI pipelines.

- **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)** — nvidia | 102 likes / 93K downloads  
  A 1B-parameter sentence embedding model based on Ministral-3B; competitive on retrieval benchmarks and used widely in RAG systems.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — OpenMOSS-Team | 310 likes / 92K downloads  
  An audio-to-text model that simultaneously transcribes and speaker-diaries multi-party conversations; fills a real-world meeting transcription need.

### 📦 Fine-tunes & Quantizations (Community Fine-tunes, GGUF, AWQ, MLX)

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — prism-ml | 601 likes / 1.4M downloads  
  A 1-bit quantized 27B LLM powered by Qwen3.5; makes large-model reasoning accessible on consumer hardware, driving massive adoption.

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — prism-ml | 952 likes / 432K downloads  
  A 2-bit ternary quantization of the Bonsai family; improves quality over 1-bit while maintaining extreme compression, ideal for CPU inference.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 3,011 likes / 2.0M downloads  
  An uncensored MoE fine-tune of Qwen3.6 with aggressive creative alignment; one of the most downloaded models this week, reflecting demand for "unfiltered" roleplay and story generation.

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — DavidAU | 334 likes / 63K downloads  
  A heavily fine-tuned and quantized uncensored LLM merging multiple datasets; showcases the community's appetite for custom narrative and "heretic" chatbots.

- **[poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF)** — poolside | 96 likes / 289 downloads  
  Official GGUF quantization of the Laguna-S-2.1 base model; provides easy deployment for developers needing a reliable text-generation workhorse.

- **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)** — prism-ml | 165 likes / 25K downloads  
  MLX-format 1-bit quantization for Apple Silicon devices; extends the extreme quantization trend to the macOS ecosystem.

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF)** — LuffyTheFox | 103 likes / 19K downloads  
  Another uncensored Qwen3.6 MoE fine-tune, this one blending Hermes and Genesis distribution data; adds to the vibrant ecosystem of community fine-tunes.

---

## 3. Ecosystem Signal

**Extreme Quantization Becomes Mainstream.** The Bonsai family (1‑bit and 2‑bit) from prism-ml is reshaping how large models are consumed. With 1.4M downloads for the 1‑bit 27B GGUF, users are demonstrating that language quality at these compression levels is now sufficient for real-world chat and creative writing. Ternary quantization is a new frontier, and **MLX** format support hints at platform-specific optimization gaining traction alongside GGUF.

**MoE and Uncensored Fine-tuning Converge.** Qwen3.6‑based MoE models dominate the fine-tune category. The combination of mixture-of-experts architecture (high capacity with sparse activation) and “uncensored” alignment is a potent formula for the community—these models deliver vivid, unguarded creativity while remaining efficient. The ecosystem is seeing a shift from monolithic dense LLMs to MoE-based base models that invite deep customization.

**Robotics and Real‑Time Audio Emerge as New Categories.** The presence of two **MiniCPM** robotics models (Manip, Track) and **NVIDIA’s streaming ASR** model signals that Hugging Face is becoming the distribution channel for embodied AI and real‑time audio pipelines. These models are early in adoption (hundreds of downloads vs. millions for LLMs), but they represent the next wave of deployment patterns beyond text chat.

**Open‑Weight Momentum Continues.** Google’s Gemma‑4, Upstage’s Solar‑Open2‑250B, and ZAI’s GLM‑5.2 all contribute to a thriving open‑weight landscape. No single proprietary model dominates the trending list; instead, a diverse set of transparent, reproducible architectures is defining the community standard.

---

## 4. Worth Exploring

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — This model exemplifies the frontier of extreme compression: 2‑bit ternary quantization of a 27B LLM. It is worth studying for its surprisingly high generation quality at this bitwidth, and for benchmarking how far we can compress before losing conversational coherence. Practical for anyone running inference on CPU or low‑VRAM GPUs.

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** — A rare example of a vision‑language‑action pipeline directly on Hugging Face. This model is worth exploring for researchers and tinkerers interested in zero‑shot robotic control—it demonstrates how pretrained VLMs can be adapted for physical world interaction without task‑specific fine‑tuning.

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** — While OCR may seem mature, this model’s combination of Qwen3.5 reasoning with high‑accuracy document parsing makes it a compelling choice for any pipeline that needs structured text extraction from messy real‑world images. Its quality‑for‑size ratio deserves a close look.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*