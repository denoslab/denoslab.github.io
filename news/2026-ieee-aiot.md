---
layout: event
title: Three DENOS Lab papers accepted to IEEE AIoT 2026 in Kobe
seo_title: Three DENOS Lab papers at IEEE AIoT 2026 in Kobe, Japan
permalink: /news/2026-ieee-aiot/
date: 2026-10-16
display_date: Oct 16, 2026
description: Three DENOS Lab papers are accepted to the 2026 IEEE Annual Congress on Artificial Intelligence of Things in Kobe, Japan, led by Yunkai Bao on decentralized trajectory prediction under faulty connectivity, Jiajun Wu on the safe quantization boundary for federated unlearning, and Farhan Abbas on using LLMs to monitor catastrophic forgetting in edge federated continual learning.
hero: /images/news/20261016-ieee-aiot/kobe-harbour.jpg
hero_alt: Kobe harbourfront at night with the illuminated Ferris wheel, Kobe Port Tower, the Mosaic shopping complex, and the city skyline reflected in the water
hero_caption: Kobe, Japan, where IEEE AIoT 2026 meets at the Kobe Portopia Hotel from December 14 to 16. Image from the conference website.
---
<p class="event-downloads">
  <a class="btn btn--ghost" href="https://www.ieee-aiot.org/2026/" target="_blank" rel="noopener">IEEE AIoT 2026 website</a>
</p>

CALGARY. Three papers from DENOS Lab have been accepted to the 2026 IEEE Annual Congress on Artificial Intelligence of Things (IEEE AIoT), which meets in Kobe, Japan from December 14 to 16. The conference, technically co-sponsored by IEEE, gathers researchers working where machine learning meets networks of sensors, vehicles, and edge devices, and all three DENOS Lab papers ask the same practical question from different angles. How does a learning system keep working when the devices it runs on are small, intermittently connected, or quietly failing?

The first paper, *Decentralized Maneuver-Prototype Gossip for Trajectory Prediction under Intermittent Connectivity and Faulty Nodes*, is led by PhD student [Yunkai Bao](/team/yunkai-bao/) with Dr. Xin Wang and lab director [Dr. Steve Drew](/team/steve-drew/), and was accepted in the ECFIoT track. Predicting where nearby vehicles or robots will move next is easier when agents can learn from each other, but the usual answer is a central server that every node reports to. Bao's work instead has nodes exchange compact prototypes of driving manoeuvres directly with their neighbours through gossip, the peer-to-peer protocol in which information spreads a hop at a time, and it studies how that exchange holds up when links drop in and out and some nodes send faulty information. It continues Bao's research on federated learning that respects how often a device is actually reachable.

{% include figure.html src="/images/news/20261016-ieee-aiot/ieee-iot-logos.png" alt="The IEEE logo beside the IEEE Internet of Things logo" caption="IEEE AIoT 2026 is technically co-sponsored by IEEE and carries the IEEE Internet of Things banner." link="none" %}

The second, *Quantize with Care: Mapping the Safe-Deployment Boundary for Federated Unlearning on AIoT*, is led by PhD candidate [Jiajun "Gerry" Wu](/team/jiajun-wu/) with Xiaoguang Niu, Dr. Henry Leung, and Drew, in the STPAioT track. Federated unlearning lets a model trained across many devices forget the contribution of one participant, as privacy rules increasingly require. Quantization shrinks a model so that it fits on a small device. Wu's paper asks how far a model can be quantized before unlearning stops being trustworthy, and maps the boundary inside which the two techniques can be deployed together safely.

The third, *LLM Monitoring for Catastrophic Forgetting in Edge Federated Continual Learning*, is led by [Farhan Abbas](/team/farhan-abbas/), who joined the lab as a summer intern in 2026, with Wu and Drew, in the AAI track. A model that keeps learning from a stream of new data at the edge tends to overwrite what it already knew, a failure called catastrophic forgetting, and in a federated setting that loss is hard to see because no one holds all the data. The paper puts a large language model in the role of monitor, watching the training process for the signs that forgetting is under way.

Together the three papers extend the lab's [federated learning research](/projects/federated-learning-edge-orchestration/) and its wider programme in distributed learning, agentic simulation and reasoning. Each treats the constraints of real devices, patchy connectivity, limited memory, and shifting data as the problem to solve rather than an inconvenience to assume away. The team will present the work in Kobe in December.
