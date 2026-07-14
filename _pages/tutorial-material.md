---
layout: tutorial
title: Utility-Centric Retrieval - Materials
title_only: true
permalink: /utility-tutorial/material/
nav: false
---

<div style="text-align: center; padding: 10px 0 30px 0;">
  <h1 style="font-size: 1.8em; margin-bottom: 10px;">Tutorial Materials</h1>
  <p style="color: #666;">
    <strong>Beyond Relevance: Utility-Centric Retrieval in the LLM Era</strong> — SIGIR 2026
  </p>
  <p>
    <a href="{{ '/utility-tutorial/' | relative_url }}">← Back to Tutorial Home</a>
  </p>
</div>

<hr>

<style>
  details { margin-bottom: 0.6em; }
  h3 { margin-top: 1.8em; margin-bottom: 0.6em; }
</style>

<!-- ==================== SLIDES ==================== -->
<h2 id="slides">Slides</h2>

<!-- TODO: 替换为真实的 slides 链接（上传到 assets/pdf/ 或用 Google Drive 链接） -->
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 15px; padding: 10px 0 30px 0;">

  <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; text-align: center;">
    <h4 style="margin-bottom: 10px;">Section 1</h4>
    <p style="font-size: 0.9em; color: #666;">Introduction and Foundations</p>
    <p style="margin-top: 10px;">
      <a href="#" target="_blank">📄 Slides (PDF)</a>
    </p>
  </div>

  <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; text-align: center;">
    <h4 style="margin-bottom: 10px;">Section 2</h4>
    <p style="font-size: 0.9em; color: #666;">What Is LLM-Centric Utility?</p>
    <p style="margin-top: 10px;">
      <a href="#" target="_blank">📄 Slides (PDF)</a>
    </p>
  </div>

  <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; text-align: center;">
    <h4 style="margin-bottom: 10px;">Section 3</h4>
    <p style="font-size: 0.9em; color: #666;">Utility Modeling and Optimization Methods</p>
    <p style="margin-top: 10px;">
      <a href="#" target="_blank">📄 Slides (PDF)</a>
    </p>
  </div>

  <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; text-align: center;">
    <h4 style="margin-bottom: 10px;">Section 4</h4>
    <p style="font-size: 0.9em; color: #666;">LLM Information Needs and Agentic RAG</p>
    <p style="margin-top: 10px;">
      <a href="#" target="_blank">📄 Slides (PDF)</a>
    </p>
  </div>

</div>

<hr>

<!-- ==================== READING LIST ==================== -->
<h2 id="reading-list">Reading List</h2>

<p>
  <strong>Main Survey Paper:</strong> 
  <a href="https://arxiv.org/abs/2604.08920" target="_blank">"Beyond Relevance: Utility-Centric Retrieval in the LLM Era"</a> (arXiv: 2604.08920)
</p>

<p>
  <strong>Paper Repository:</strong>
  <a href="https://github.com/hengran/awesome-papers-on-Utility-focused-retrieval-augmented-generation" target="_blank">awesome-papers-on-Utility-focused-RAG</a> (GitHub)
</p>

<!-- ===== Section 1: Introduction and Foundations ===== -->
<h3>Section 1: Introduction and Foundations</h3>

<details>
<summary><h4 style="display:inline;">1.1 RAG Foundations</h4></summary>
<ul>
  <li><a href="https://proceedings.neurips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html" target="_blank">Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.</a> (Lewis et al. NeurIPS 2020.)</li>
  <li><a href="https://aclanthology.org/2024.naacl-long.463" target="_blank">REPLUG: Retrieval-Augmented Black-Box Language Models.</a> (Shi et al. NAACL 2024.)</li>
  <li><a href="https://dl.acm.org/doi/10.5555/3648699.3648950" target="_blank">Atlas: Few-shot Learning with Retrieval Augmented Language Models.</a> (Izacard et al. JMLR 2023.)</li>
</ul>
</details>

<details>
<summary><h4 style="display:inline;">1.2 Classical Relevance and Utility</h4></summary>
<ul>
  <li><a href="https://www.sciencedirect.com/science/article/abs/pii/0020027171900246" target="_blank">A Definition of Relevance for Information Retrieval.</a> (Cooper. Information Storage and Retrieval 1971.)</li>
  <li><a href="https://asistdl.onlinelibrary.wiley.com/doi/abs/10.1002/asi.4630260604" target="_blank">Relevance: A Review of and a Framework for the Thinking on the Notion in Information Science.</a> (Saracevic. JASIS 1975.)</li>
  <li><a href="https://www.bibsonomy.org/bibtex/2c3f30a1af84eb099284f266679ff41f2/aschmidt" target="_blank">Relevance Reconsidered.</a> (Saracevic. CoLIS 1996.)</li>
  <li><a href="https://dl.acm.org/doi/10.5555/275537.275553" target="_blank">A Study of Information Seeking and Retrieving. I. Background and Methodology.</a> (Saracevic et al. JASIS 1988.)</li>
</ul>
</details>

<details>
<summary><h4 style="display:inline;">1.3 User-Centric Utility in Web Search</h4></summary>
<ul>
  <li><a href="https://dl.acm.org/doi/abs/10.1016/j.ipm.2006.07.021" target="_blank">Click Data as Implicit Relevance Feedback in Web Search.</a> (Jung et al. IP&amp;M 2007.)</li>
  <li><a href="https://dl.acm.org/doi/10.1145/1008992.1009057" target="_blank">Display Time as Implicit Feedback: Understanding Task Effects.</a> (Kelly. SIGIR 2004.)</li>
  <li><a href="https://dl.acm.org/doi/10.1145/1571941.1571955" target="_blank">Segment-Level Display Time as Implicit Feedback: A Comparison to Eye Tracking.</a> (Buscher et al. SIGIR 2009.)</li>
  <li><a href="https://dl.acm.org/doi/10.1145/3018661.3018694" target="_blank">Does Document Relevance Affect the Searcher's Perception of Time?</a> (Luo et al. WSDM 2017.)</li>
  <li><a href="https://dl.acm.org/doi/10.1145/2396761.2398523" target="_blank">More than Relevance: High Utility Query Recommendation by Mining Users' Search Behaviors.</a> (Zhu et al. CIKM 2012.)</li>
  <li><a href="https://dl.acm.org/doi/10.1145/2835776.2835824" target="_blank">Beyond Ranking: Optimizing Whole-Page Presentation.</a> (Wang et al. WSDM 2016.)</li>
</ul>
</details>

<details>
<summary><h4 style="display:inline;">1.5 Related Perspective: Denoising-First IR</h4></summary>
<ul>
  <li><a href="https://dl.acm.org/doi/10.1145/3805712.3808544" target="_blank">LLM-Oriented Information Retrieval: A Denoising-First Perspective.</a> (Dai et al. SIGIR 2026.)</li>
</ul>
</details>

<!-- ===== Section 2: What Is LLM-Centric Utility? ===== -->
<h3>Section 2: What Is LLM-Centric Utility?</h3>

<!-- <h4>2.1 From Relevance-Based RAG to Utility-Aware RAG</h4>
<ul>
  <li><a href="https://dl.acm.org/doi/10.1145/3626772.3657784" target="_blank">Are Large Language Models Good at Utility Judgments?</a> (Zhang et al. SIGIR 2024.)</li>
  <li><a href="https://aclanthology.org/2026.findings-acl.1579" target="_blank">An Iterative Utility Judgment Framework via LLMs Inspired by Relevance in Philosophy.</a> (Zhang et al. ACL 2026.)</li>
  <li><a href="https://aclanthology.org/2024.naacl-long.463" target="_blank">REPLUG: Retrieval-Augmented Black-Box Language Models.</a> (Shi et al. NAACL 2024.)</li>
  <li><a href="https://arxiv.org/abs/2510.11358" target="_blank">LLM-Specific Utility: A New Perspective for Retrieval-Augmented Generation.</a> (Zhang et al. arXiv 2025.)</li>
  <li><a href="https://openreview.net/forum?id=ixMBnOhFGd" target="_blank">SePer: Measure Retrieval Utility Through the Lens of Semantic Perplexity Reduction.</a> (Dai et al. ICLR 2025.)</li>
  <li><a href="https://aclanthology.org/2025.findings-emnlp.511/" target="_blank">Uplift-RAG: Uplift-Driven Knowledge Preference Alignment for Retrieval-Augmented Generation.</a> (Qu et al. EMNLP 2025.)</li>
</ul> -->

<details>
<summary><h4 style="display:inline;">2.2 Task-Specific Definitions of Utility</h4></summary>

<p><em>Factoid QA</em></p>
<ul>
  <li><a href="https://dl.acm.org/doi/10.1145/3626772.3657784" target="_blank">Are Large Language Models Good at Utility Judgments?</a> (Zhang et al. SIGIR 2024.)</li>
  <li><a href="https://dl.acm.org/doi/10.1145/3626772.3657957" target="_blank">Evaluating Retrieval Quality in Retrieval-Augmented Generation.</a> (Salemi et al. SIGIR 2024.)</li>
</ul>

<p><em>Non-Factoid and Complex QA</em></p>
<ul>
  <li><a href="https://dl.acm.org/doi/10.1145/3580305.3599931" target="_blank">WebGLM: Towards an Efficient Web-Enhanced Question Answering System with Human Preferences.</a> (Liu et al. KDD 2023.)</li>
  <li><a href="https://openreview.net/forum?id=97NEP1pyS3" target="_blank">DR Tulu: Reinforcement Learning with Evolving Rubrics for Deep Research.</a> (Shao et al. ICML 2026.)</li>
</ul>

<p><em>Fact Verification and Classification</em></p>
<ul>
  <li><a href="https://aclanthology.org/2023.findings-emnlp.422/" target="_blank">From Relevance to Utility: Evidence Retrieval with Feedback for Fact Verification.</a> (Zhang et al. EMNLP 2023.)</li>
  <li><a href="https://dl.acm.org/doi/10.1145/3539618.3592049" target="_blank">Read It Twice: Towards Faithfully Interpretable Fact Verification by Revisiting Evidence.</a> (Hu et al. SIGIR 2023.)</li>
</ul>

<p><em>Code Generation</em></p>
<ul>
  <li><a href="https://dl.acm.org/doi/10.1145/3691620.3694987" target="_blank">Preference-Guided Refactored Tuning for Retrieval Augmented Code Generation.</a> (Gao et al. ASE 2024.)</li>
  <li><a href="https://aclanthology.org/2025.emnlp-main.541/" target="_blank">SelfRACG: Enabling LLMs to Self-Express and Retrieve for Code Generation.</a> (Dong et al. EMNLP 2025.)</li>
</ul>

<p><em>Tool and Skill Retrieval</em></p>
<ul>
  <li><a href="https://arxiv.org/abs/2511.01854" target="_blank">Tool-to-Agent Retrieval: Bridging Tools and Agents for Scalable LLM Multi-Agent Systems.</a> (Lumer et al. 2025.)</li>
  <li><a href="https://arxiv.org/abs/2604.24594" target="_blank">Skill Retrieval Augmentation for Agentic AI.</a> (Su et al. 2026.)</li>
  <li><a href="https://arxiv.org/abs/2602.05366" target="_blank">Multi-Field Tool Retrieval.</a> (Tang et al. 2026.)</li>
  <li><a href="https://arxiv.org/abs/2606.10388" target="_blank">SkillResolve-Bench: Measuring and Resolving Same-Capability Ambiguity in Agent Skill Retrieval.</a> (Ding et al. 2026.)</li>
</ul>
</details>

<details>
<summary><h4 style="display:inline;">2.3 LLM-Agnostic vs. LLM-Specific Utility</h4></summary>

<p><em>LLM-Agnostic Utility</em></p>
<ul>
  <li><a href="https://dl.acm.org/doi/10.1145/3626772.3657784" target="_blank">Are Large Language Models Good at Utility Judgments?</a> (Zhang et al. SIGIR 2024.)</li>
  <li><a href="https://aclanthology.org/2026.findings-acl.1579" target="_blank">An Iterative Utility Judgment Framework via LLMs Inspired by Relevance in Philosophy.</a> (Zhang et al. ACL 2026.)</li>
</ul>

<p><em>LLM-Specific Utility</em></p>
<ul>
  <li><a href="https://arxiv.org/abs/2510.11358" target="_blank">LLM-Specific Utility: A New Perspective for Retrieval-Augmented Generation.</a> (Zhang et al. 2025.)</li>
  <li><a href="https://openreview.net/forum?id=ixMBnOhFGd" target="_blank">SePer: Measure Retrieval Utility Through the Lens of Semantic Perplexity Reduction.</a> (Dai et al. ICLR 2025.)</li>
  <li><a href="https://aclanthology.org/2025.findings-emnlp.511/" target="_blank">Uplift-RAG: Uplift-Driven Knowledge Preference Alignment for Retrieval-Augmented Generation.</a> (Qu et al. EMNLP 2025.)</li>
</ul>
</details>

<details>
<summary><h4 style="display:inline;">2.5 Pointwise, Marginal, and Set-Level Utility</h4></summary>

<p><em>Pointwise Utility</em></p>
<ul>
  <li><a href="https://aclanthology.org/2024.naacl-long.463" target="_blank">REPLUG: Retrieval-Augmented Black-Box Language Models.</a> (Shi et al. NAACL 2024.)</li>
  <li><a href="https://dl.acm.org/doi/10.5555/3648699.3648950" target="_blank">Atlas: Few-shot Learning with Retrieval Augmented Language Models.</a> (Izacard et al. JMLR 2023.)</li>
  <li><a href="https://openreview.net/forum?id=ixMBnOhFGd" target="_blank">SePer: Measure Retrieval Utility Through the Lens of Semantic Perplexity Reduction.</a> (Dai et al. ICLR 2025.)</li>
  <li><a href="https://aclanthology.org/2025.findings-emnlp.511/" target="_blank">Uplift-RAG: Uplift-Driven Knowledge Preference Alignment for Retrieval-Augmented Generation.</a> (Qu et al. EMNLP 2025.)</li>
</ul>

<p><em>Set-Level Utility</em></p>
<ul>
  <li><a href="https://aclanthology.org/2025.ijcnlp-short.37/" target="_blank">Modeling Contextual Passage Utility for Multihop Question Answering.</a> (Jain et al. IJCNLP 2025.)</li>
  <li><a href="https://dl.acm.org/doi/10.1145/3767695.3769496" target="_blank">Distilling a Small Utility-Based Passage Selector to Enhance Retrieval-Augmented Generation.</a> (Zhang et al. SIGIR-AP 2025.)</li>
  <li><a href="https://aclanthology.org/2025.acl-long.861/" target="_blank">Shifting from Ranking to Set Selection for Retrieval Augmented Generation.</a> (Lee et al. ACL 2025.)</li>
  <li><a href="https://arxiv.org/abs/2601.05027" target="_blank">OptiSet: Unified Optimizing Set Selection and Ranking for Retrieval-Augmented Generation.</a> (Jiang et al. 2026.)</li>
  <li><a href="https://aclanthology.org/2024.acl-long.562/" target="_blank">BGM: Bridging the Preference Gap between Retrievers and LLMs.</a> (Ke et al. ACL 2024.)</li>
</ul>
</details>

<details>
<summary><h4 style="display:inline;">2.6 Evidence Format and Presentation to LLMs</h4></summary>
<ul>
  <li><a href="https://aclanthology.org/2026.findings-acl.1513/" target="_blank">Relevance to Utility: Process-Supervised Rewrite for RAG.</a> (Kim et al. ACL 2026.)</li>
  <li><a href="https://aclanthology.org/2025.findings-acl.1365/" target="_blank">ECoRAG: Evidentiality-Guided Compression for Long Context RAG.</a> (Jeong et al. ACL 2025.)</li>
  <li><a href="https://dl.acm.org/doi/10.1145/3726302.3729957" target="_blank">Parametric Retrieval-Augmented Generation.</a> (Su et al. SIGIR 2025.)</li>
  <li><a href="https://aclanthology.org/2024.emnlp-main.813/" target="_blank">Chain-of-Note: Enhancing Robustness in Retrieval-Augmented Language Models.</a> (Yu et al. EMNLP 2024.)</li>
  <li><a href="https://dl.acm.org/doi/10.1145/3767695.3769515" target="_blank">Injecting External Knowledge into the Reasoning Process Enhances Retrieval-Augmented Generation.</a> (Tang et al. SIGIR-AP 2025.)</li>
  <li><a href="https://arxiv.org/abs/2604.24658" target="_blank">The Last Human-Written Paper: Agent-Native Research Artifacts.</a> (Liu et al. 2026.)</li>
</ul>
</details>

<!-- ===== Section 3: Utility Modeling and Optimization Methods ===== -->
<h3>Section 3: Utility Modeling and Optimization Methods</h3>

<details>
<summary><h4 style="display:inline;">3.1 Utility Signals</h4></summary>

<p><em>Signal A: Verbalized LLM Utility Judgment (no ground-truth answer required)</em></p>
<ul>
  <li><a href="https://dl.acm.org/doi/10.1145/3626772.3657784" target="_blank">Are Large Language Models Good at Utility Judgments?</a> (Zhang et al. SIGIR 2024.)</li>
  <li><a href="https://aclanthology.org/2026.findings-acl.1579" target="_blank">An Iterative Utility Judgment Framework via LLMs Inspired by Relevance in Philosophy.</a> (Zhang et al. ACL 2026.)</li>
  <li><a href="https://aclanthology.org/2025.findings-acl.220/" target="_blank">Bridging Relevance and Reasoning: Rationale Distillation in Retrieval-Augmented Generation.</a> (Jia et al. ACL 2025.)</li>
</ul>

<p><em>Signal B: Attention / Reader-Derived Signals (no ground-truth answer required)</em></p>
<ul>
  <li><a href="https://openreview.net/forum?id=NTEz-6wysdb" target="_blank">FiD: Distilling Knowledge from Reader to Retriever for Question Answering.</a> (Izacard et al. ICLR 2021.)</li>
  <li><a href="https://dl.acm.org/doi/10.5555/3648699.3648950" target="_blank">Atlas: Few-shot Learning with Retrieval Augmented Language Models.</a> (Izacard et al. JMLR 2023.)</li>
  <li><a href="https://arxiv.org/abs/2510.11358" target="_blank">LLM-Specific Utility: A New Perspective for Retrieval-Augmented Generation.</a> (Zhang et al. 2025.)</li>
</ul>

<p><em>Signal C: Likelihood and Perplexity (ground-truth answer required)</em></p>
<ul>
  <li><a href="https://aclanthology.org/2024.naacl-long.463" target="_blank">REPLUG: Retrieval-Augmented Black-Box Language Models.</a> (Shi et al. NAACL 2024.)</li>
  <li><a href="https://arxiv.org/abs/2604.22722" target="_blank">Aligning Dense Retrievers with LLM Utility via Distillation.</a> (Sandhu et al. 2026.)</li>
  <li><a href="https://dl.acm.org/doi/10.5555/3648699.3648950" target="_blank">Atlas: Few-shot Learning with Retrieval Augmented Language Models.</a> (Izacard et al. JMLR 2023.)</li>
  <li><a href="https://dl.acm.org/doi/10.1007/978-3-032-21289-4_24" target="_blank">Predicting Retrieval Utility and Answer Quality in Retrieval-Augmented Generation.</a> (Tian et al. ECIR 2026.)</li>
  <li><a href="https://aclanthology.org/2024.emnlp-main.178/" target="_blank">SEER: Self-Aligned Evidence Extraction for Retrieval-Augmented Generation.</a> (Zhao et al. EMNLP 2024.)</li>
  <li><a href="https://aclanthology.org/2026.acl-long.1620/" target="_blank">Utility-Oriented Visual Evidence Selection for Multimodal Retrieval-Augmented Generation.</a> (Luo et al. ACL 2026.)</li>
  <li><a href="https://aclanthology.org/2025.emnlp-main.33/" target="_blank">Training a Utility-based Retriever Through Shared Context Attribution for Retrieval-Augmented Language Models.</a> (Xu et al. EMNLP 2025.)</li>
</ul>

<p><em>Signal D: Downstream Performance (ground-truth answer required)</em></p>
<ul>
  <li><a href="https://arxiv.org/abs/2405.19893" target="_blank">Similarity Is Not All You Need: Endowing Retrieval-Augmented Generation with Multi-Layered Thoughts.</a> (Gan et al. 2024.)</li>
  <li><a href="https://arxiv.org/abs/2510.11358" target="_blank">LLM-Specific Utility: A New Perspective for Retrieval-Augmented Generation.</a> (Zhang et al. 2025.)</li>
</ul>
</details>

<details>
<summary><h4 style="display:inline;">3.2 Efficiency Ladder: From Small Candidate Sets to Corpus-Scale</h4></summary>

<p><em>Level 1: Small Candidate Sets (10–20) — High-Fidelity Judgments</em></p>
<ul>
  <li><a href="https://dl.acm.org/doi/10.1145/3626772.3657784" target="_blank">Are Large Language Models Good at Utility Judgments?</a> (Zhang et al. SIGIR 2024.)</li>
  <li><a href="https://aclanthology.org/2026.findings-acl.1579" target="_blank">An Iterative Utility Judgment Framework via LLMs Inspired by Relevance in Philosophy.</a> (Zhang et al. ACL 2026.)</li>
  <li><a href="https://arxiv.org/abs/2510.11358" target="_blank">LLM-Specific Utility: A New Perspective for Retrieval-Augmented Generation.</a> (Zhang et al. 2025.)</li>
</ul>

<p><em>Level 2: Medium Candidate Sets (dozens to hundreds) — Selectors and Rerankers</em></p>
<ul>
  <li><a href="https://dl.acm.org/doi/10.1145/3767695.3769496" target="_blank">Distilling a Small Utility-Based Passage Selector to Enhance Retrieval-Augmented Generation.</a> (Zhang et al. SIGIR-AP 2025.)</li>
  <li><a href="https://dl.acm.org/doi/10.1007/978-3-032-21289-4_24" target="_blank">Predicting Retrieval Utility and Answer Quality in Retrieval-Augmented Generation.</a> (Tian et al. ECIR 2026.)</li>
  <li><a href="https://aclanthology.org/2023.findings-emnlp.422/" target="_blank">From Relevance to Utility: Evidence Retrieval with Feedback for Fact Verification.</a> (Zhang et al. EMNLP 2023.)</li>
  <li><a href="https://dl.acm.org/doi/10.1145/3539618.3592049" target="_blank">Read It Twice: Towards Faithfully Interpretable Fact Verification by Revisiting Evidence.</a> (Hu et al. SIGIR 2023.)</li>
  <li><a href="https://aclanthology.org/2025.ijcnlp-short.37/" target="_blank">Modeling Contextual Passage Utility for Multihop Question Answering.</a> (Jain et al. IJCNLP 2025.)</li>
  <li><a href="https://aclanthology.org/2025.findings-acl.220/" target="_blank">Bridging Relevance and Reasoning: Rationale Distillation in Retrieval-Augmented Generation.</a> (Jia et al. ACL 2025.)</li>
  <li><a href="https://openreview.net/forum?id=Pnktu2PBXD" target="_blank">RAG-DDR: Optimizing Retrieval-Augmented Generation Using Differentiable Data Rewards.</a> (Li et al. ICLR 2025.)</li>
  <li><a href="https://aclanthology.org/2024.tacl-1.14/" target="_blank">Retrieve What You Need: A Mutual Learning Framework for Open-Domain Question Answering.</a> (Wang et al. TACL 2024.)</li>
  <li><a href="https://aclanthology.org/2026.acl-long.1406/" target="_blank">Optimizing RAG Rerankers with LLM Feedback via Reinforcement Learning.</a> (Wu et al. ACL 2026.)</li>
</ul>

<p><em>Level 3: Corpus-Scale — Utility-Oriented Retrievers</em></p>
<ul>
  <li><a href="https://aclanthology.org/2025.emnlp-main.88/" target="_blank">Utility-Focused LLM Annotation for Retrieval and Retrieval-Augmented Generation.</a> (Zhang et al. EMNLP 2025.)</li>
  <li><a href="https://proceedings.neurips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html" target="_blank">Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.</a> (Lewis et al. NeurIPS 2020.)</li>
  <li><a href="https://dl.acm.org/doi/10.1145/3626772.3657923" target="_blank">Stochastic RAG: End-to-End Retrieval-Augmented Generation through Expected Utility Maximization.</a> (Zamani et al. SIGIR 2024.)</li>
  <li><a href="https://aclanthology.org/2024.naacl-long.463" target="_blank">REPLUG: Retrieval-Augmented Black-Box Language Models.</a> (Shi et al. NAACL 2024.)</li>
  <li><a href="https://arxiv.org/abs/2604.22722" target="_blank">Aligning Dense Retrievers with LLM Utility via Distillation.</a> (Sandhu et al. 2026.)</li>
  <li><a href="https://dl.acm.org/doi/10.1145/3583780.3614901" target="_blank">GripRank: Bridging the Gap between Retrieval and Generation via Generative Knowledge Improved Passage Ranking.</a> (Bai et al. CIKM 2023.)</li>
  <li><a href="https://openreview.net/forum?id=NTEz-6wysdb" target="_blank">FiD: Distilling Knowledge from Reader to Retriever for Question Answering.</a> (Izacard et al. ICLR 2021.)</li>
  <li><a href="https://dl.acm.org/doi/10.5555/3648699.3648950" target="_blank">Atlas: Few-shot Learning with Retrieval Augmented Language Models.</a> (Izacard et al. JMLR 2023.)</li>
  <li><a href="https://aclanthology.org/2025.emnlp-main.33/" target="_blank">Training a Utility-based Retriever Through Shared Context Attribution for Retrieval-Augmented Language Models.</a> (Xu et al. EMNLP 2025.)</li>
  <li><a href="https://arxiv.org/abs/2307.12798" target="_blank">RRAML: Reinforced Retrieval Augmented Machine Learning.</a> (Bacciu et al. 2023.)</li>
</ul>
</details>

<details>
<summary><h4 style="display:inline;">3.3 Evaluation: What Should We Measure?</h4></summary>
<ul>
  <li><a href="https://dl.acm.org/doi/10.1145/3626772.3657957" target="_blank">eRAG: Evaluating Retrieval Quality in Retrieval-Augmented Generation.</a> (Salemi et al. SIGIR 2024.)</li>
  <li><a href="https://aclanthology.org/2026.acl-long.923/" target="_blank">RARE: Redundancy-Aware Retrieval Evaluation Framework for High-Similarity Corpora.</a> (Cho et al. ACL 2026.)</li>
  <li><a href="https://arxiv.org/abs/2604.15827" target="_blank">UsefulBench: Towards Decision-Useful Information as a Target for Information Retrieval.</a> (Schimanski et al. 2026.)</li>
</ul>
</details>

<!-- ===== Section 4: LLM Information Needs and Agentic RAG ===== -->
<h3>Section 4: LLM Information Needs and Agentic RAG</h3>

<details>
<summary><h4 style="display:inline;">4.2 Query-side Utility</h4></summary>
<ul>
  <li>Active Retrieval Augmented Generation. (Jiang et al. EMNLP 2023.)</li>
  <li>DRAGIN: Dynamic Retrieval Augmented Generation Based on the Real-Time Information Needs of Large Language Models. (ACL 2024.)</li>
  <li>Search-R1: Training LLMs to Reason and Leverage Search Engines with Reinforcement Learning. (COLM 2025.)</li>
  <li>AgentIR: Reasoning-Aware Retrieval for Deep Research Agents. (TODO)</li>
  <li>SubSearch: Intermediate Rewards for Unsupervised Guided Reasoning in Complex Retrieval. (TODO)</li>
</ul>
</details>

<details>
<summary><h4 style="display:inline;">4.3 Document-side Utility</h4></summary>
<ul>
  <li>Revisiting Text Ranking in Deep Research. (SIGIR 2026.)</li>
  <li>Agentic-R: Learning to Retrieve for Agentic Search. (ACL 2026.)</li>
  <li>Learning to Retrieve from Agent Trajectories. (SIGIR 2026.)</li>
  <li>Rethinking Reasoning-Intensive Retrieval: Evaluating and Advancing Retrievers in Agentic Search Systems. (ACL 2026.)</li>
</ul>
</details>

<details>
<summary><h4 style="display:inline;">4.4 Action-side Utility</h4></summary>
<ul>
  <li>StepSearch: Igniting LLMs Search Ability via Step-Wise Proximal Policy Optimization. (EMNLP 2025.)</li>
  <li>Information Gain-Based Policy Optimization: A Simple and Effective Approach for Multi-Turn Search Agents. (ICLR 2026.)</li>
  <li>Adaptive-RAG: Learning to Adapt Retrieval-Augmented Large Language Models Through Question Complexity. (Jeong et al. NAACL 2024.)</li>
  <li>Beyond Monolithic Architectures: A Multi-Agent Search and Knowledge Optimization Framework for Agentic Search. (TODO)</li>
  <li>Beyond Semantic Similarity: Rethinking Retrieval for Agentic Search via Direct Corpus Interaction. (TODO)</li>
</ul>
</details>

<hr>

<!-- ==================== BIBTEX ==================== -->
<h2 id="bibtex">Citation</h2>

<div style="background: #f5f5f5; padding: 15px; border-radius: 8px; font-family: monospace; font-size: 0.85em; overflow-x: auto;">
<pre>
@inproceedings{zhang2026beyond,
  title={Beyond Relevance: Utility-Centric Retrieval in the LLM Era},
  author={Zhang, Hengran and Tang, Minghao and Bi, Keping and Guo, Jiafeng},
  booktitle={Proceedings of the 49th International ACM SIGIR Conference on Research and Development in Information Retrieval},
  pages={5357--5361},
  year={2026}
}
</pre>
</div>

<hr>

<div style="text-align: center; padding: 20px 0;">
  <a href="{{ '/utility-tutorial/' | relative_url }}" style="display: inline-block; background: #3b5998; color: #fff; padding: 10px 28px; border-radius: 5px; text-decoration: none; font-weight: bold;">
    ← Back to Tutorial Home
  </a>
</div>

<div style="text-align: center; padding: 10px 0 30px 0; font-size: 0.85em; color: #999;">
  <a href="https://stay-hungry-time.github.io/">TIME Group</a>
  &nbsp;|&nbsp;
  Contact Keping Bi: <a href="mailto:bikeping@ict.ac.cn">bikeping@ict.ac.cn</a>
</div>
