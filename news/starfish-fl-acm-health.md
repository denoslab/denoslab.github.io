---
layout: event
title: Starfish-FL paper on agentic federated analytics published in ACM Transactions on Computing for Healthcare
seo_title: Starfish-FL published in ACM Transactions on Computing for Healthcare
permalink: /news/starfish-fl-acm-health/
date: 2026-08-25
display_date: Aug 25, 2026
description: DENOS Lab's paper Starfish-FL, Harnessing Agentic Federated Analytics, is published in ACM Transactions on Computing for Healthcare, with the open source framework available on GitHub.
hero: /images/news/starfish-fl-acm-health/starfish-fl-logo.png
hero_alt: The Starfish-FL logo, agentic federated learning in Python and R
hero_link: none
---
DENOS Lab's paper [*Starfish-FL: Harnessing Agentic Federated Analytics*](https://dl.acm.org/doi/10.1145/3843774) has been published in ACM Transactions on Computing for Healthcare. The authors are [Yunkai Bao](/team/yunkai-bao/), [Zainab Saad](/team/zainab-saad/), [Farhan Abbas](/team/farhan-abbas/), Kaue Duarte, Tolulope Sajobi, Bijoy Menon, Jiayu Zhou, and [Dr. Steve Drew](/team/steve-drew/), spanning the Department of Electrical and Software Engineering, the Department of Clinical Neurosciences, and the Department of Community Health Sciences at the University of Calgary together with the School of Information at the University of Michigan. The framework is open source under the Apache 2.0 license at [github.com/denoslab/starfish-fl](https://github.com/denoslab/starfish-fl), and it is the federated learning and analysis component of the lab's STARFISH project for secure and transactable health data sharing.

Federated learning (FL) lets hospitals and research institutions build models together without pooling patient records, but orchestrating, monitoring, and interpreting a federated analysis has remained out of reach for the biostatisticians and clinicians who most need it. Starfish-FL closes that gap with a multi-tier agent harness for cross-silo healthcare analytics, built around a single safety invariant. The large language model is advisory and cannot independently trigger consequential actions. Agents operate at three tiers. An Autonomous Experiment Agent orchestrates end-to-end experiments through command line tools, an Embedded Router Agent handles adaptive aggregation, early stopping, and failure triage, and Controller Agent Hooks produce per-site summaries, outlier flags, and convergence signals for the people running each site.

Three hybrid safety policies, SafeStop, SafeAggregate, and SafeTriage, gate every site exclusion, early stop, and recovery action behind deterministic preconditions, so an error by the language model cannot cause an unsafe state transition as long as the guards themselves are correct. All agent features are opt-in and degrade gracefully to standard federated learning when they are switched off. Underneath, the platform ships 21 task implementations in both Python and R, from logistic regression and Cox proportional hazards to Kaplan-Meier curves, Poisson and negative binomial models, censored regression, and multiple imputation, each with built-in statistical diagnostics so researchers can work in the language they already use.

The evaluation ran across four LLM providers with repeated-run confidence intervals. Task selection reached about 97 percent accuracy with hosted models, the online SafeStop policy saved 50 to 70 percent of training rounds with no loss in accuracy, and safety-policy validation showed a 100 percent safe-action rate under injected failures, confirming that the deterministic guards, not the language model, are what preserve safety.

The code, documentation, and a Docker based workbench for trying the whole system locally are on [GitHub](https://github.com/denoslab/starfish-fl), with the full API reference at [denoslab.github.io/starfish-fl](https://denoslab.github.io/starfish-fl/). Congratulations to Yunkai, Zainab, Farhan, and our collaborators.
