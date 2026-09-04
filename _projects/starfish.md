---
layout: project
title: Secure, Transactable, Agentic Health Data Sharing
short_name: STARFISH
order: 2
logo: /images/starfish-logo.png
logo_alt: The STARFISH Project
card_description: >-
  STARFISH is a secure, interoperable framework for global health data
  sharing that lets individuals control their data while enabling compliant research.
description: >-
  STARFISH is a DENOS Lab framework for secure, interoperable, and individually controlled
  health data sharing. Its federated learning component, Starfish-FL, is open source and
  published in ACM Transactions on Computing for Healthcare.
lead: >-
  A secure and interoperable framework for global health data sharing that lets individuals
  control their data while enabling compliant research.
links:
  - label: Starfish-FL on GitHub
    url: https://github.com/denoslab/starfish-fl
    card: true
  - label: Read the paper
    url: https://dl.acm.org/doi/10.1145/3843774
    card: true
  - label: API reference
    url: https://denoslab.github.io/starfish-fl/
people:
  - /team/yunkai-bao/
  - /team/zainab-saad/
  - /team/farhan-abbas/
collaborators:
  - "Kaue Duarte, Tolulope Sajobi, and Bijoy Menon, Departments of Clinical Neurosciences and Community Health Sciences, University of Calgary."
  - "Jiayu Zhou, School of Information, University of Michigan."
publications:
  - title: "Starfish-FL: Harnessing Agentic Federated Analytics"
    authors: "Yunkai Bao, Zainab Saad, Farhan Abbas, Kaue Duarte, Tolulope Sajobi, Bijoy Menon, Jiayu Zhou, and **Steve Drew**"
    venue: "ACM HEALTH"
    year: 2026
    url: https://dl.acm.org/doi/10.1145/3843774
  - title: "Privacy-Preserving Federated Analysis Reproduces Non-Inferiority Results from the AcT Multicentre Stroke Trial"
    authors: "Yunkai Bao, Zainab Saad, K. Duarte, Farhan Abbas, T. Sajobi, Jessalyn K. Holodinsky, Bijoy K. Menon, et al."
    venue: "SSRN"
news:
  - /news/starfish-fl-acm-health/
---

Health data is most valuable where it is hardest to move. STARFISH treats that as a design
problem rather than a legal one, building a framework in which hospitals and research
institutions can run analyses together while each record stays where it was collected and the
individual it describes keeps control over how it is used.

Starfish-FL is the federated learning and analysis component, open source under the Apache 2.0
license and published in ACM Transactions on Computing for Healthcare. Federated learning (FL)
already lets institutions train models without pooling patient records, but orchestrating,
monitoring, and interpreting a federated analysis has stayed out of reach for the
biostatisticians and clinicians who need it most. Starfish-FL closes that gap with a
multi-tier agent harness built around one safety invariant. The large language model is
advisory and cannot independently trigger a consequential action. An Autonomous Experiment
Agent runs end-to-end experiments through command line tools, an Embedded Router Agent handles
adaptive aggregation, early stopping, and failure triage, and Controller Agent Hooks produce
per-site summaries, outlier flags, and convergence signals for the people running each site.

Three hybrid safety policies named SafeStop, SafeAggregate, and SafeTriage gate every site
exclusion, early stop, and recovery action behind deterministic preconditions, so a mistake by
the language model cannot move the system into an unsafe state. Every agent feature is opt-in
and degrades to standard federated learning when switched off. The platform ships 21 task
implementations in both Python and R, from logistic regression and Cox proportional hazards to
Kaplan-Meier curves, Poisson and negative binomial models, censored regression, and multiple
imputation, each with built-in statistical diagnostics so researchers can stay in the language
they already use.

The same approach has been applied to real trial data, reproducing the non-inferiority results
of the AcT multicentre stroke trial through federated analysis without pooling patient
records.
