---
layout: project
title: Agentic Simulation for Wildfire Evacuations
short_name: AgentEvac
order: 3
logo: /images/agent-evac-logo.png
logo_alt: AgentEvac
card_description: >-
  AgentEvac is an agentic simulator for wildfire evacuations that couples
  SUMO traffic simulation with LLM-driven agents following the Protective Action Decision
  Model (PADM).
description: >-
  AgentEvac is a DENOS Lab agentic simulator for wildfire evacuations, coupling SUMO traffic
  simulation with large language model agents that follow the Protective Action Decision Model
  (PADM).
lead: >-
  An agentic simulator for wildfire evacuations that couples SUMO traffic simulation with
  large language model agents following the Protective Action Decision Model (PADM).
---

AgentEvac simulates a wildfire evacuation as a population of households deciding what to do.
Each agent is driven by a large language model and reasons through the Protective Action
Decision Model (PADM), the behavioural framework for how people notice a warning, interpret
the threat it describes, and choose a protective action. Those decisions become vehicle trips
inside SUMO, an open source traffic simulator, so the moment a household chooses to leave
turns into load on a real road network.

Coupling the two puts behaviour and traffic in the same model instead of feeding a fixed
departure curve into a network simulation. The aim is to study how warning timing, staged
departures, and route guidance change the time a community needs to clear, and where a plan
that looks sound on paper produces congestion that costs people the margin they were given.
