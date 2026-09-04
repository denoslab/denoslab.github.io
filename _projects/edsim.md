---
layout: project
title: Agentic Simulation for Emergency Department Operations
short_name: EDSim
order: 1
logo: /images/edsim.png
logo_class: research-logo--photo
logo_alt: EDSim emergency department floor plan
card_description: >-
  EDSim is a large language model simulation of an emergency department,
  with autonomous agents for patients, nurses, and physicians.
description: >-
  EDSim is a DENOS Lab large language model simulation of an emergency department, with
  autonomous agents for patients, nurses, and physicians, used to find bottlenecks and test
  operational changes without disrupting real care.
lead: >-
  A large language model simulation of an emergency department, with autonomous agents for
  patients, nurses, and physicians.
links:
  - label: EDSim on GitHub
    url: https://github.com/denoslab/edsim
  - label: Watch the demo
    url: "https://www.youtube.com/watch?v=FakLPb3d83s&t=3s"
people:
  - /team/jiajun-wu/
  - /team/zirui-wang/
  - /team/alexander-burn/
  - /team/hutton-ledingham/
capstone_teams:
  - year: 2027
    students:
      - name: Alexey Grekov
        photo: /images/capstone-teams/edsim/2027/Alexey-Grekov.jpg
      - name: Christopher Michaud
        photo: /images/capstone-teams/edsim/2027/Christopher-Michaud.jpg
      - name: Brandon Nguyen
        photo: /images/capstone-teams/edsim/2027/Brandon-Nguyen.jpg
      - name: Amina Sagheer
        photo: /images/capstone-teams/edsim/2027/Amina-Sagheer.png
publications:
  - title: "EDSim: An Agentic Simulator for Emergency Department Operations"
    authors: "Jiajun Wu, Hutton Ledingham, Zirui Wang, Braden Teitge, Alexander Burn, Oussama Ouadihi, Mohamad Ghattas, Darin Vicaldo, Sergiu Cociuba, Megan Harmon, Tanvir Chowdhury, Zack Marshall, Tyler Williamson, Tracie Risling, Eddy Lang, Jiayu Zhou, Jessalyn Holodinsky, and **Steve Drew**"
    venue: "Research Square"
    year: 2026
    url: https://doi.org/10.21203/rs.3.rs-8960989/v1
  - title: "Can human-aware agentic artificial intelligence transform emergency care workflows?"
    authors: "Jiajun Wu, et al."
    venue: "CJEM"
    year: 2026
  - title: "Small Language Models for Emergency Departments Decision Support: A Benchmark Study"
    authors: "Jiajun Wu, et al."
    venue: "IEEE ATC"
    year: 2025
    url: https://ieeexplore.ieee.org/abstract/document/11395121/
---

EDSim models an emergency department as a population of autonomous agents. Patients arrive
with complaints and histories, nurses triage and monitor them, and physicians order tests and
decide on disposition, each agent driven by a large language model that reads the state of the
department and acts on it. The simulation covers the whole floor rather than a single
encounter, so the queues, handoffs, and waiting that shape a real shift emerge from what the
agents do to each other.

Simulating the department makes it possible to try a change before it reaches patients.
Staffing mixes, triage rules, and bed allocation can be varied across runs to show where the
bottlenecks sit and which changes move the numbers, work that is hard to do in a live
department without disrupting care.

EDSim sits alongside the lab's other work on emergency care, including a benchmark of small
language models for emergency department decision support and a study of how human-aware
agentic artificial intelligence could reshape emergency care workflows. The simulator is open
source, with a short video walking through a full run.
