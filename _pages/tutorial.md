---
layout: tutorial
title: Utility-Centric Retrieval
title_only: true
permalink: /utility-tutorial/
nav: false
---

<!-- ==================== HEADER ==================== -->
<div style="text-align: center; padding: 20px 0 40px 0;">
  <h1 style="font-size: 2em; margin-bottom: 10px;">Beyond Relevance: Utility-Centric Retrieval in the LLM Era</h1>
  <p style="font-size: 1.2em; color: #666; margin-bottom: 5px;">
    Tutorial at <strong>SIGIR 2026</strong>
  </p>
  <p style="font-size: 1em; color: #888;">
    📅 Monday, 20 July 2026, 13:30–17:00 &nbsp;|&nbsp; <a href="https://sigir2026.org/en-AU/pages/program/accepted-tutorials" target="_blank">SIGIR 2026</a>
  </p>
  <p style="margin-top: 15px;">
    <a href="{{ '/utility-tutorial/material/' | relative_url }}" style="display: inline-block; background: #3b5998; color: #fff; padding: 10px 28px; border-radius: 5px; text-decoration: none; font-weight: bold;">
      📂 View Materials & Reading List →
    </a>
  </p>
</div>

<hr>

<!-- ==================== ABOUT ==================== -->
<h2 id="about">About This Tutorial</h2>

<!-- TODO: 替换为正式的 tutorial 介绍文字 -->
<p>
Retrieval-Augmented Generation (RAG) has become a foundational paradigm for enhancing large language models (LLMs) with external knowledge. While traditional information retrieval (IR) systems primarily optimize for <em>relevance</em> — matching queries to documents based on topical similarity — the emergence of LLMs has fundamentally reshaped what makes retrieved information <em>useful</em>.
</p>
<p>
This tutorial explores a paradigm shift from relevance-centric to <strong>utility-centric retrieval</strong>, where the value of retrieved information is measured not by its topical match to a query, but by its actual contribution to downstream LLM tasks. We cover:
</p>
<ul>
  <li><strong>Section 1:</strong> Introduction & Foundations</li>
  <li><strong>Section 2:</strong> What Is LLM-Centric Utility?</li>
  <li><strong>Section 3:</strong> Utility Modeling & Optimization</li>
  <li><strong>Section 4:</strong> Utility in Agentic RAG</li>
  <li><strong>Section 5:</strong> Open Problems & Q&A</li>
</ul>
<p>
This tutorial aims to generate broader attention to utility-centric retrieval issues in the LLM era, facilitate an understanding of the relevant literature, and lower the barrier to entry for interested researchers and practitioners.
</p>

<hr>

<!-- ==================== Organizer ==================== -->
<h2 id="speakers">Organizers</h2>

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 30px; padding: 20px 0;">

  <!-- Speaker 1: Hengran Zhang -->
  <div style="text-align: center; width: 220px;">
    <img src="{{ '/assets/img/people/hengran.jpg' | relative_url }}" alt="Hengran Zhang" style="width: 200px; height: 200px; border-radius: 8px; object-fit: cover;">
    <p style="margin: 8px 0 2px 0; font-weight: bold;">
      <a href="https://hengran.github.io" target="_blank">Hengran Zhang</a>
    </p>
    <p style="font-size: 0.85em; color: #666; margin: 0;">ICT, CAS</p>
  </div>

  <!-- Speaker 2: Minghao Tang -->
  <div style="text-align: center; width: 220px;">
    <img src="{{ '/assets/img/people/minghao2.jpg' | relative_url }}" alt="Minghao Tang" style="width: 200px; height: 200px; border-radius: 8px; object-fit: cover;">
    <p style="margin: 8px 0 2px 0; font-weight: bold;">
      <a href="https://scholar.google.com/citations?user=FQuHc8oAAAAJ" target="_blank">Minghao Tang</a>
    </p>
    <p style="font-size: 0.85em; color: #666; margin: 0;">ICT, CAS</p>
  </div>

  <!-- Speaker 3: Keping Bi -->
  <div style="text-align: center; width: 220px;">
    <img src="{{ '/assets/img/people/keping2.jpg' | relative_url }}" alt="Keping Bi" style="width: 200px; height: 200px; border-radius: 8px; object-fit: cover;">
    <p style="margin: 8px 0 2px 0; font-weight: bold;">
      <a href="https://kepingbi.github.io" target="_blank">Keping Bi</a>
    </p>
    <p style="font-size: 0.85em; color: #666; margin: 0;">ICT, CAS</p>
  </div>

  <!-- Speaker 4: Jiafeng Guo -->
  <div style="text-align: center; width: 220px;">
    <img src="{{ '/assets/img/people/jiafeng.jpg' | relative_url }}" alt="Jiafeng Guo" style="width: 200px; height: 200px; border-radius: 8px; object-fit: cover;">
    <p style="margin: 8px 0 2px 0; font-weight: bold;">
      <a href="http://www.bigdatalab.ac.cn/gjf/" target="_blank">Jiafeng Guo</a>
    </p>
    <p style="font-size: 0.85em; color: #666; margin: 0;">ICT, CAS</p>
  </div>

</div>

<hr>

<!-- ==================== SCHEDULE ==================== -->
<h2 id="schedule">Schedule</h2>

<p><em>Format: Half-day (3.5-hour) lecture-style tutorial. Monday, 20 July 2026.</em></p>

<style>
  table.schedule td:nth-child(3), table.schedule th:nth-child(3) { white-space: nowrap; }
</style>
<table class="table schedule" style="max-width: 900px; margin: 0 auto;">
  <thead style="border-top: 2px solid #dee2e6;">
    <tr>
      <th style="width: 150px;">Time</th>
      <th>Section</th>
      <th style="width: 150px;">Presenter</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f9f9f9;">
      <td colspan="3" style="font-weight: bold; text-align: center;">First Half (13:30–15:00)</td>
    </tr>
    <tr>
      <td>13:30–14:10</td>
      <td><strong>Section 1:</strong> Introduction & Foundations</td>
      <td>Keping Bi</td>
    </tr>
    <tr>
      <td>14:10–15:00</td>
      <td><strong>Section 2:</strong> What Is LLM-Centric Utility?</td>
      <td>Keping Bi</td>
    </tr>
    <tr>
      <td>15:00–15:30</td>
      <td><em>☕ Coffee Break</em></td>
      <td>—</td>
    </tr>
    <tr style="background: #f9f9f9;">
      <td colspan="3" style="font-weight: bold; text-align: center;">Second Half (15:30–17:00)</td>
    </tr>
    <tr>
      <td>15:30–16:10</td>
      <td><strong>Section 3:</strong> Utility Modeling & Optimization</td>
      <td>Hengran Zhang</td>
    </tr>
    <tr>
      <td>16:10–16:50</td>
      <td><strong>Section 4:</strong> Utility in Agentic RAG</td>
      <td>Keping Bi</td>
    </tr>
    <tr>
      <td>16:50–17:00</td>
      <td><strong>Section 5:</strong> Open Problems & Q&A</td>
      <td>Keping Bi</td>
    </tr>
  </tbody>
</table>

<hr>

<!-- ==================== BIBTEX ==================== -->
<h2 id="bibtex">BibTeX</h2>

<div style="background: #f5f5f5; padding: 15px 20px; border-radius: 5px; font-family: monospace; font-size: 0.9em; overflow-x: auto;">
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

<!-- ==================== FOOTER LINK ==================== -->
<div style="text-align: center; padding: 20px 0;">
  <a href="{{ '/utility-tutorial/material/' | relative_url }}" style="display: inline-block; background: #3b5998; color: #fff; padding: 10px 28px; border-radius: 5px; text-decoration: none; font-weight: bold;">
    📂 View Materials & Reading List →
  </a>
</div>

<div style="text-align: center; padding: 10px 0 30px 0; font-size: 0.85em; color: #999;">
  <a href="https://stay-hungry-time.github.io/">TIME Group</a>
  &nbsp;|&nbsp;
  Contact Keping Bi: <a href="mailto:bikeping@ict.ac.cn">bikeping@ict.ac.cn</a>
</div>
