---
layout: event
title: DENOS Lab paper on patient-governed agentic health data exchange published in npj Health Systems
seo_title: STARFISH patient-governed health data exchange published in npj Health Systems
permalink: /news/2026-starfish-npj-health-systems/
date: 2026-09-25
display_date: Sep 25, 2026
description: DENOS Lab's Perspective Patient-governed agentic health data exchange is published in npj Health Systems, setting out STARFISH, a framework in which personal health AI agents negotiate, license, and get paid for health data on each patient's terms.
hero: /images/news/20260925-starfish-npj/starfish-fig1.png
hero_alt: Overview of the STARFISH architecture, in which a Personal Health Agent manages health records from EHRs, wellness apps, wearables, and smart devices, and a Research Agent acts for clinical trials, public health agencies, researchers, and pharmaceutical companies, with a payment network between them
hero_caption: The STARFISH architecture. A Personal Health Agent cleans, filters, advertises, negotiates, and delivers a person's health data, a Research Agent discovers, matches, negotiates, contracts, and pays on behalf of data consumers, and a payment network settles between them. Figure 1 from Drew et al., npj Health Systems, 2026, under CC BY-NC-ND 4.0.
hero_link: https://www.nature.com/articles/s44401-026-00155-3/figures/1
---
<p class="event-downloads">
  <a class="btn btn--ghost" href="https://www.nature.com/articles/s44401-026-00155-3" target="_blank" rel="noopener">Read the paper in npj Health Systems</a>
</p>

CALGARY. What if every patient had an AI assistant whose only job was to guard their health data, and to get them paid when they chose to share it? That is the future a team led by University of Calgary researchers lays out in a new paper published Friday in *npj Health Systems*, a Nature Portfolio journal.

The Perspective, [*Patient-governed agentic health data exchange*](https://www.nature.com/articles/s44401-026-00155-3), is written by DENOS Lab director [Dr. Steve Drew](/team/steve-drew/) PhD student [Guojun Tang](/team/guojun-tang/), and MSc student [Zainab Saad](/team/zainab-saad/) of the Department of Electrical and Software Engineering at the Schulich School of Engineering, with Dr. Jiayu Zhou of the University of Michigan School of Information, Dr. Yong Chen of the Perelman School of Medicine at the University of Pennsylvania, and Dr. Fei Wang of Weill Cornell Medicine. It sets out STARFISH, the Secure Transactable Agentic Research Framework for Interoperable Sharing of Health data, and is published open access.

The problem it takes on is familiar to anyone who has tried to move a medical record. Health data sits in hospital systems, lab databases, fitness trackers, and phone apps that rarely talk to each other, and sharing it for research still runs on manual paperwork, one-off agreements, and consent forms few people read. The authors point to a 2025 global meta-analysis that found 77 per cent of people are willing to share their health data for research given proper safeguards, while trust in how that data is used drops to about 54 per cent when the recipient is a private company. Patients who do share rarely see anything back.

Under STARFISH, each person would have a Personal Health Agent (PHA), an AI assistant under their full control that pulls their records from clinics, wearables, genetic tests, and wellness apps into one private longitudinal record. Hospitals, public health agencies, trial organizers, and drug makers would run Research Agents that post what data they are looking for. When a request matches a patient's profile and the preferences that patient has set in plain language, the two agents negotiate the scope, purpose, duration, and compensation, and the Personal Health Agent asks the patient before agreeing to anything new or high risk.

The deal is sealed with a Consent Mandate, a digital contract signed with the patient's private key that spells out who gets which data, for what purpose, for how long, and on what terms, and that cannot be quietly changed or forged. Where raw records are too sensitive to leave the patient's hands, an Analysis Mandate sends the research instead. Using federated learning, the research agent's model trains on the patient's own device and only the learned updates travel back, the same approach behind the lab's open source [Starfish-FL](/news/starfish-fl-acm-health/) framework published in ACM Transactions on Computing for Healthcare last month.

Payment is built in. Drawing on the Agent Payments Protocol (AP2), STARFISH attaches compensation to the mandate so data is delivered only when the agreed payment arrives, whether that is money, digital tokens, or service credits. A compliance layer works out which laws apply based on where the patient and the requester are, so a European patient's data requested by a U.S. company is checked against both GDPR and HIPAA before it moves. Patients can review every logged decision their agent makes, change their preferences at any time, or withdraw consent entirely.

The authors see the biggest early gains in rare disease trials, where eligible patients are few and far apart. A research agent could publish its eligibility criteria and have matching personal agents respond within days rather than the months recruitment often takes, widening trials beyond major academic centres. Drug and device safety monitoring could run the same way, with personal agents flagging adverse events from medication logs and wearable data as they happen instead of waiting on voluntary reports.

The paper is frank about what stands in the way. Agentic exchange assumes reliable internet, compatible devices, and digital literacy that rural, elderly, and low-income patients may not have, and payments risk becoming an undue pull on people who need the money. AI agents still make mistakes, and the law has little to say about who is liable when one does. Data already handed to a third party cannot be guaranteed deleted after consent is withdrawn. The authors call for pilot deployments, safety benchmarks for agent behaviour, and regulatory sandboxes built with patients, regulators, and health systems at the table.

The paper grows out of the lab's [STARFISH project](/projects/starfish/) on secure and transactable health data sharing, part of its research on distributed learning, agentic simulation and reasoning.
