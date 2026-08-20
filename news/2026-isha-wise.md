---
layout: event
title: Isha Goyal builds CardiCare, an on-device AI assistant for coronary artery disease patients
permalink: /news/2026-isha-wise/
display_date: Aug 2026
description: WISE summer intern Isha Goyal built CardiCare, an on-device AI patient assistant for coronary artery disease that answers only from clinician-approved content and refuses everything else.
poster: /images/news/2026-isha-wise/isha-wise-poster-2026.jpg
poster_link: /images/news/2026-isha-wise/isha-wise-poster-2026.pdf
poster_caption: Isha Goyal's WISE research poster, CardiCare, AI Patient Assistant Chatbot for Coronary Artery Disease. Click to open the full poster.
images:
  - /images/news/2026-isha-wise/2026-isha-wise.jpg
---
Isha Goyal spent her Women in Science and Engineering (WISE) summer internship at DENOS Lab building CardiCare, an artificial intelligence patient assistant for people living with coronary artery disease (CAD). Coronary artery disease is the second leading cause of death in Canada, and the people who live with it manage chronic symptoms, medication, exercise, and a reduced quality of life with very little day to day support. General purpose chatbots fill part of that gap but they invent answers, which is the one failure a patient facing tool cannot afford. Isha presented the work in a poster titled *CardiCare: AI Patient Assistant Chatbot for Coronary Artery Disease (CAD)*, co-authored with Jiajun Wu and Dr. Steve Drew of the Department of Electrical and Software Engineering at the Schulich School of Engineering.

CardiCare never writes medical content of its own. It answers from a bank of clinician approved questions and answers, and it returns the source alongside every reply. A patient query arrives as text or speech and first passes an emergency check that watches for chest pain, stroke symptoms, and similar descriptions. Anything that looks like an emergency gets an abstention and a referral to the care team or to 911. Everything else is embedded and handed to a small language model, Qwen 3:4b, which verifies whether the query really matches an approved entry. A confirmed match returns the approved answer and its source. A near miss or no match returns an abstention rather than a guess. The whole system runs locally on an NVIDIA Jetson Nano with 8 GB of memory, so patient questions never leave the device.

Isha evaluated four versions of the system, a baseline and three successive design changes she called Levers A through C, on a 270 case development split covering topics from medication and procedures to diet, recovery, and living with CAD. The test set deliberately stressed the hard cases with paraphrased typed and spoken questions, near misses, emergency descriptions, off-topic questions, and false alarms. Correct entry coverage climbed from 23.0 percent typed and 25.7 percent spoken at the baseline to 87.8 percent typed and 86.5 percent spoken at Lever C. Across all 270 tests the final system produced zero unsafe answers. It refused 55 of 55 near-miss questions and 22 of 22 out-of-scope questions, and it correctly identified 26 of 26 emergency descriptions and 19 of 19 non-emergencies.

The comparison against a much larger model is the result worth sitting with. GPT-OSS-20B running on a desktop workstation GPU reached higher coverage at 93.2 percent typed and 90.5 percent spoken, but it also accepted one near miss and delivered one wrong answer. CardiCare on the 8 GB Jetson made neither mistake and answered in a median of 3 seconds. For a tool that speaks to patients about their own heart condition, refusing well matters more than answering often.

An attribution analysis pointed to the verifier as the remaining bottleneck, so the next steps are improving verifier accuracy, testing on an independent dataset, and expanding the approved knowledge bank. Isha thanks the WISE Program, Canadian Women in Energy (CWiE), and the University of Calgary for supporting the internship. Congratulations, Isha, and thank you for a summer of careful work.
