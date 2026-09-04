---
layout: project
title: Role-Aware Multi-Agent Grading of Clinical Summaries
short_name: LENS
order: 5
logo: /images/lens-logo.png
logo_alt: LENS
card_description: >-
  LENS is a role-aware multi-agent pipeline that grades clinical summaries
  using open-weight LLMs.
description: >-
  LENS is a DENOS Lab role-aware multi-agent pipeline that grades clinical summaries using
  open-weight large language models.
lead: >-
  A role-aware multi-agent pipeline that grades clinical summaries using open-weight large
  language models.
---

A clinical summary is only useful if the reader can trust what was left out of it. LENS grades
summaries with a pipeline of open-weight large language models, each agent reading the same
text from a different professional role. Quality is not one number. What a summary has to
carry depends on who is reading it and what they have to do next, so LENS scores the text
through several role-aware graders rather than collapsing it into a single verdict.

Open-weight models keep the grading reproducible and let it run inside a hospital network
where a hosted model is not an option. LENS complements the human judgment the lab has
collected on summarization work, including a tool built for gathering physician ratings of
summarized patient charts, and it applies to the lab's own summarizers, among them a
dual-stage system that condenses emergency department charts offline on embedded devices.
