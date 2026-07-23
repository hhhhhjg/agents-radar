# Medical AI Industry Digest 2026-07-23

> Sources: GitHub medical agents (20) + Hugging Face medical models (24) + medical AI industry news (1); paper feeds excluded | Generated: 2026-07-23 04:46 UTC

---

**Medical AI Industry Digest — 2026-07-23**

## Bottom Line
No credible new medical-specific model or agent with demonstrated clinical validation, regulatory clearance, or production readiness appeared today. The landscape remains dominated by low-maturity GitHub projects and Hugging Face checkpoints that lack evidence of diagnostic accuracy or real-world deployment. Attention signals (stars, likes, downloads) are modest and do not substitute for clinical evidence.

## Medical Agents
1. **aws-samples/sample-healthcare-agents**  
   *Link*: https://github.com/aws-samples/sample-healthcare-agents  
   *Purpose*: AWS‑provided sample healthcare agent (stack unspecified).  
   *Maturity*: 2 stars, last push 21 Jul 2026, MIT-0 license.  
   *Limitation*: No description of clinical use case; likely a generic template rather than a validated clinical workflow.

2. **HarishSingh220/Medical-rag-agent-**  
   *Link*: https://github.com/HarishSingh220/Medical-rag-agent-  
   *Purpose*: Retrieval‑augmented medical assistant using parent‑child retrieval, BM25, ensemble retrieval, cross‑encoder reranking, PubMed and OpenFDA integration.  
   *Maturity*: 0 stars, last push 22 Jul 2026, no license.  
   *Limitation*: No evaluation on medical benchmarks; Python notebook‑style project with no deployment artifacts.

3. **basitali08/med-agent**  
   *Link*: https://github.com/basitali08/med-agent  
   *Purpose*: 4‑agent pipeline with RAG, supervisor validation, Flutter frontend, Django backend, local Ollama LLM.  
   *Maturity*: 0 stars, 1 fork, last push 22 Jul 2026, no license.  
   *Limitation*: No evidence of clinical reasoning validation; architecture is complex but unverified.

4. **Tasmiabashir/sehatbot**  
   *Link*: https://github.com/Tasmiabashir/sehatbot  
   *Purpose*: Bilingual (Urdu/English) AI medical assistant for Pakistan using LangGraph, 7 specialized tools, and OCR for prescription images.  
   *Maturity*: 0 stars, last push 22 Jul 2026, no license.  
   *Limitation*: Narrow geographic scope; no privacy/compliance documentation for handling real patient data.

5. **PragyApurva/Anamnesis**  
   *Link*: https://github.com/PragyApurva/Anamnesis  
   *Purpose*: Clinical agent for conducting patient medical history interviews.  
   *Maturity*: 0 stars, last push 23 Jul 2026, no license.  
   *Limitation*: Prototype only; no validation of interview quality or safety.

## Medical Models
1. **MohamedAhmedAE/llava-medical-3B-medsiglip-stage2**  
   *Link*: https://huggingface.co/MohamedAhmedAE/llava-medical-3B-medsiglip-stage2  
   *Task*: Multimodal (image+text) – LLaVA architecture with MedSigLip encoder.  
   *Evidence*: 913 downloads, 0 likes; attention signal only.  
   *License*: Unknown (safetensors, no license in metadata).  
   *Deployment caveat*: Large 3B model requires significant GPU memory; no benchmark results on medical imaging tasks.

2. **GAD-Research-Lab/MedicalAI-Light-Weight**  
   *Link*: https://huggingface.co/GAD-Research-Lab/MedicalAI-Light-Weight  
   *Task*: image‑to‑text (image‑text‑to‑text).  
   *Evidence*: 0 downloads, 0 likes; attention signal only.  
   *License*: Unknown (ONNX + safetensors).  
   *Deployment caveat*: Designed for chest X‑ray/radiology but no performance metrics; light weight implies limited capacity.

3. **EpistemeAI/Reasoning-Medical0.1-E4B-sft**  
   *Link*: https://huggingface.co/EpistemeAI/Reasoning-Medical0.1-E4B-sft  
   *Task*: image‑text‑to‑text (Gemma‑4 based, SFT).  
   *Evidence*: 3 likes, 364 downloads – moderate attention.  
   *License*: Unknown (safetensors, unsloth).  
   *Deployment caveat*: No clinical evaluation; uses unsloth for efficiency, but safe deployment requires explicit medical validation.

4. **genzeonplatform/healthcare-brain-diagnosis-icd-ner**  
   *Link*: https://huggingface.co/genzeonplatform/healthcare-brain-diagnosis-icd-ner  
   *Task*: token‑classification (NER for ICD‑coded diagnoses).  
   *Evidence*: 20 likes, 19 downloads – highest attention in the set.  
   *License*: Unknown (transformers, safetensors, BERT).  
   *Deployment caveat*: NER only; not a diagnostic system. Use requires alignment with local ICD‑coding guidelines.

5. **genzeonplatform/healthcare-brain-medication-ner**  
   *Link*: https://huggingface.co/genzeonplatform/healthcare-brain-medication-ner  
   *Task*: token‑classification (NER for medication mentions).  
   *Evidence*: 19 likes, 20 downloads.  
   *License*: Unknown.  
   *Deployment caveat*: Extracts medication entities without dose‑response validation; may miss novel drug names.

## Industry Updates
1. **Henry Schein One goes AI‑native with AI Product Discovery and Strategy**  
   *Source*: https://aws.amazon.com/blogs/industries/henry-schein-one-goes-ai-native-with-ai-product-discovery-and-strategy/  
   *Relevance*: Dental practice software provider (100,000+ practices) is shifting to an AI‑native cloud stack on AWS; signals growing enterprise adoption of AI in specialty healthcare, though no clinical AI agent is described.

## Assessment
- **Clinical validation**: None of the agents or models provide published benchmark results, diagnostic accuracy metrics, or clinician‑in‑the‑loop studies. All are pre‑production or research‑grade.
- **Privacy/compliance**: Most GitHub projects lack HIPAA/GDPR statements; Hugging Face models hosted in the US region without explicit data governance. The genzeonplatform NER models are trained on clinical text but source dataset is undisclosed.
- **What deserves follow‑up**: The **genzeonplatform healthcare‑brain NER suite** (20+ likes) warrants investigation for entity extraction tasks. The **LLaVA‑medical multimodal models** (913 downloads) could be candidates for vision‑based triage if benchmarked. Henry Schein One’s AI‑native strategy is a signal of commercial interest but not a product.

---
*This digest is auto-generated by [agents-radar](https://github.com/hhhhhjg/agents-radar).*