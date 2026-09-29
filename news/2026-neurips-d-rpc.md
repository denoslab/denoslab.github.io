---
layout: event
title: DENOS Lab paper on structural rationale distillation accepted to NeurIPS 2026
seo_title: D-RPC reasoning distillation paper accepted to NeurIPS 2026
permalink: /news/2026-neurips-d-rpc/
date: 2026-09-28
display_date: Sep 28, 2026
description: Structural Rationale Distillation via Reasoning Space Compression, by DENOS Lab PhD students Jialin Yang and Gerry Wu with collaborators at the University of Michigan, is accepted to NeurIPS 2026. Its D-RPC method teaches small language models to reason by giving them consistent worked solutions built from a compact bank of reusable reasoning paths.
hero: /images/news/20260928-neurips-accepted/neurips-logo.png
hero_alt: The Neural Information Processing Systems logo
hero_link: none
---
<p class="event-downloads">
  <a class="btn btn--ghost" href="https://arxiv.org/abs/2605.07139" target="_blank" rel="noopener">Read the preprint on arXiv</a>
</p>

CALGARY. A small AI model learns to reason better when its teacher explains similar problems the same way every time, and University of Calgary researchers have found a way to make that happen. Their method has been accepted to NeurIPS 2026, the Conference on Neural Information Processing Systems and one of the most competitive venues in artificial intelligence research.

The paper, [*Structural Rationale Distillation via Reasoning Space Compression*](https://arxiv.org/abs/2605.07139), is led by DENOS Lab PhD student [Jialin Yang](/team/jialin-yang/) and co-authored by PhD candidate [Jiajun "Gerry" Wu](/team/jiajun-wu/), Dr. Henry Leung, and lab director [Dr. Steve Drew](/team/steve-drew/) of the Department of Electrical and Software Engineering at the Schulich School of Engineering. They are joined by Jiankun Wang, who shares first authorship with Yang, and Dr. Jiayu Zhou, both of the University of Michigan.

The work tackles a problem at the heart of how today's AI gets smaller and cheaper. Frontier large language models (LLMs) reason well but are expensive to run, so developers often distill them, training a compact student model on thousands of worked solutions, or rationales, written by a large teacher. The catch is that the teacher rarely solves two similar problems the same way. The authors compare it to a chef who makes the same dish differently each time. A student fed that inconsistency ends up memorizing one-off tricks rather than learning strategies it can reuse.

Their answer is Distillation through Reasoning Path Compression, or D-RPC. Before training begins, the teacher solves a small seed set of about 5 per cent of the training questions, and the system groups those solutions by intent into a compact bank of reusable, high-level reasoning paths. For every new training question, D-RPC retrieves the most relevant paths from the bank and asks the teacher to follow one while writing out the full solution. Similar problems end up with similar explanations, while different kinds of problems still get different approaches. When the teacher finds a new strategy that works, it is set aside and periodically folded into the bank, so the bank grows as new problem types appear. The student is then fine-tuned on those consistent rationales using LoRA, a lightweight training technique.

That raises an obvious question about how big the bank should be. Too few paths and some problems have no good fit. Too many and the supervision drifts back toward noise. The team worked through the trade-off with a PAC-Bayes analysis, a mathematical framework for bounding how well a model generalizes, and the bound predicts a sweet spot in the middle. The experiments agree. On the GSM8K grade-school math benchmark, a bank of 75 paths reached 84.34 per cent accuracy, ahead of 83.19 per cent with 50 paths and 82.90 per cent with 125.

The researchers used GPT-5.1 as the teacher and tested two students, Meta's Llama 3.1 8B Instruct and the much smaller Qwen 3 1.7B, on five math and commonsense reasoning benchmarks, GSM8K, AQUA, StrategyQA, AI2ARC, and MATH. With the Llama student, D-RPC posted the highest accuracy on all five, averaging 73.75 per cent against 70.16 per cent for standard chain-of-thought distillation. The biggest gains came on the hardest tests, 3.53 points over the next best method on the competition-level MATH benchmark and 3.50 points on AQUA. With the 1.7-billion-parameter Qwen student, D-RPC led on four of the five benchmarks and lifted MATH accuracy to 59.72 per cent from 49.21 per cent under chain-of-thought distillation, a jump of more than 10 points. It also beat SuperCorrect, a template-heavy approach, while using substantially fewer tokens.

The authors are candid about the costs and the open questions. Building the bank and guiding the teacher takes about twice the teacher queries of standard chain-of-thought distillation, though that cost is paid once, offline, and does not slow the finished student. All the experiments used one teacher and two students on math and commonsense reasoning, so whether the gains carry over to other teachers, other model sizes, or tasks such as code generation remains to be tested.

For Yang, the paper is the latest step in a research program on compressing the reasoning of large models into smaller ones, and it sits within the lab's wider research on distributed learning, agentic simulation and reasoning. Smaller models that reason well can run on modest hardware, closer to where data lives, which matters for the privacy-sensitive settings such as health care where much of the lab's work takes place.
