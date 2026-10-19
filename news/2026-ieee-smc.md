---
layout: event
title: "Ruili Xu's work on agentic wildfire evacuation simulation presented at IEEE SMC 2026"
permalink: /news/2026-ieee-smc/
date: 2026-10-07
display_date: Oct 7, 2026
description: Dr. Steve Drew presented an abstract by incoming DENOS Lab student Ruili Xu at the 2026 IEEE International Conference on Systems, Man, and Cybernetics in Bellevue, Washington. The work connects the lab's wildfire evacuation simulator with OASIS, an LLM-agent social simulation framework, to study how official warnings, peer behaviour, and recommendation algorithms shape when residents leave.
hero: /images/news/20261007-ieee-smc/steve-drew-smc-banner.jpg
hero_alt: Dr. Steve Drew standing in front of the IEEE SMC 2026 banner, which reads IEEE International Conference on Systems, Man, and Cybernetics, Human-Centric Intelligence Shaping the Digital Future, October 4 to 7, 2026, Bellevue, WA, USA
hero_caption: Dr. Steve Drew at IEEE SMC 2026 in Bellevue, Washington, where he presented the abstract on October 7.
---
BELLEVUE, WASHINGTON. DENOS Lab director [Dr. Steve Drew](/team/steve-drew/) travelled to the Seattle area this month for the [2026 IEEE International Conference on Systems, Man, and Cybernetics](https://www.ieeesmc2026.org/) (SMC), held at the Hyatt Regency Bellevue from October 4 to 7 under the theme "Human-Centric Intelligence: Shaping the Digital Future". On the final afternoon he presented *Simulating Socially Mediated Wildfire Evacuation Decisions with LLM Agents*, an abstract completed by incoming DENOS Lab student [Ruili Xu](/team/ruili-xu/) with Drew as co-author.

The talk opened session WeB12 on Wednesday, October 7, and sat under the conference's Social simulations, Artificial Social Intelligence, and Generative AI topics. Its starting point is that a household's decision to evacuate from a wildfire is shaped by more than the fire itself. Official warnings, what the neighbours are doing, and what shows up on social media all push the decision one way or the other. Existing evacuation simulators handle traffic, route choice, and departure timing well, but they usually decide whether a resident leaves with a fixed rule, and a fixed rule cannot follow how people respond to information that changes by the minute and arrives through other people.

{% include figure.html src="/images/news/20261007-ieee-smc/smc-conference-banners.jpg" alt="Two standing banners at the conference venue, one for the AICA 2026 Competition and one for IEEE SMC 2026 listing keynote speakers Mengchu Zhou, Danielle Belgrave, and Hiroshi Ishiguro" caption="Conference banners at the Hyatt Regency Bellevue. The SMC 2026 keynotes came from Mengchu Zhou, Danielle Belgrave, and Hiroshi Ishiguro." class="event-figure--portrait" %}

The study connects the lab's in-house wildfire evacuation simulator, [AgentEvac](/projects/agent-evac/), with OASIS, an open LLM-agent framework for simulating social media platforms at scale. Each resident becomes an LLM agent who reads official announcements, watches peer behaviour, and receives posts chosen by a platform recommendation algorithm, then decides whether and when to go. The combination lets the team study evacuation from the resident's point of view rather than from the traffic engineer's.

Preliminary single-run results on a scenario modelled on Halifax and Tantallon, the Nova Scotia suburb evacuated during the 2023 wildfires, point to a result the team did not set out to find. Simulated evacuation timing moved at least as much with the choice of the underlying language model as with the recommendation policy the platform used. For anyone planning to use LLM agents to test emergency communication strategies, that is a caution worth carrying forward, since conclusions about a policy may partly be conclusions about the model running the agents.

The abstract grew out of Xu's summer at DENOS Lab, and the work continues as Xu joins the lab as a graduate student. It extends the lab's research on distributed learning, agentic simulation and reasoning, where AgentEvac already couples LLM-driven households following the Protective Action Decision Model (PADM) with SUMO traffic simulation. Adding a social layer on top asks a harder question, how the information a community shares with itself during a disaster changes how fast it can get out.
