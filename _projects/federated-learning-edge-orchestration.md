---
layout: project
title: Federated Learning for Edge Service Orchestration
order: 6
card_description: >-
  As federated learning (FL) spreads across heterogeneous infrastructures,
  slow convergence drives excessive energy use on cloud and battery-powered edge devices. We
  design FL methods that budget clients by availability and carbon footprint and guide
  cloud-edge orchestration toward resilient, real-world deployment.
description: >-
  DENOS Lab designs federated learning methods that budget clients by availability and carbon
  footprint and guide cloud-edge service orchestration toward resilient, real-world
  deployment.
lead: >-
  Federated learning methods that budget clients by availability and carbon footprint and
  guide cloud-edge orchestration toward resilient, real-world deployment.
people:
  - /team/yunkai-bao/
  - /team/hossein-khademsohi/
  - /team/jialin-yang/
  - /team/zainab-saad/
  - /team/fan-dong/
  - /team/ali-abbasi/
publications:
  - title: "Towards Carbon-Aware Container Orchestration: Predicting Workload Energy Consumption with Federated Learning"
    authors: "Zainab Saad, Jialin Yang, Henry Leung, and **Steve Drew**"
    venue: "IEEE SWC"
    year: 2025
    url: https://arxiv.org/html/2510.03970v1
  - title: "Owen Sampling Accelerates Contribution Estimation in Federated Learning"
    authors: "Hossein KhademSohi, Hadi Hemmati, Jiayu Zhou, and **Steve Drew**"
    venue: "arXiv"
    year: 2025
    url: https://arxiv.org/abs/2508.21261
  - title: "Semi-decentralized Federated Time Series Prediction with Client Availability Budgets"
    authors: "Yunkai Bao, R. Safarzadeh, Xin Wang, and **Steve Drew**"
    venue: "IEEE INFOCOM-W"
    year: 2025
  - title: "Energy-efficient Federated Learning with Dynamic Model Size Allocation"
    authors: "M. S. C. Kumar, Yunkai Bao, Xin Wang, and **Steve Drew**"
    venue: "IEEE BigData"
    year: 2024
  - title: "FedGreen: Carbon-aware Federated Learning with Model Size Adaptation"
    authors: "Ali Abbasi, Fan Dong, Xin Wang, Henry Leung, Jiayu Zhou, and **Steve Drew**"
    venue: "IEEE ICC-W"
    year: 2024
    url: https://arxiv.org/abs/2404.15503
  - title: "Topology-aware Federated Learning in Edge Computing: A Comprehensive Survey"
    authors: "Jiajun Wu, Fan Dong, Henry Leung, Zhuangdi Zhu, Jiayu Zhou, and **Steve Drew**"
    venue: "ACM CSUR"
    year: 2024
    url: https://dl.acm.org/doi/10.1145/3659205
  - title: "Federated Learning with Client Availability Budgets"
    authors: "Yunkai Bao, **Steve Drew**, Xin Wang, Jiayu Zhou, and Xiaoguang Niu"
    venue: "IEEE GLOBECOM"
    year: 2023
  - title: "FedLE: Federated Learning Client Selection with Lifespan Extension for Edge IoT Networks"
    authors: "Jiajun Wu, **Steve Drew**, and Jiayu Zhou"
    venue: "IEEE ICC"
    year: 2023
    url: https://arxiv.org/abs/2302.07305
---

As federated learning (FL) spreads across heterogeneous infrastructures, slow convergence
drives excessive energy use on cloud and battery-powered edge devices. The lab designs FL
methods that budget clients by availability and carbon footprint and guide cloud-edge
orchestration toward resilient, real-world deployment.

Three threads run through the work. **Client selection** decides who trains and when, with
lifespan extension for battery-powered IoT networks in FedLE, availability budgets that drop
the assumption that every client is reachable every round, and Owen sampling that makes
contribution estimation fast enough to use while training is still going. **Model adaptation**
changes what each client receives, adapting model size to a client's carbon profile and
location in FedGreen and allocating size dynamically for energy efficiency. **Orchestration**
carries the result up to the platform layer, where federated prediction of workload energy
lets container schedulers such as Kubernetes account for carbon without centralizing
operational data from any enterprise.

Underneath all three sits the question of how the network shapes federated training, surveyed
for edge computing in ACM Computing Surveys and pushed to its limit in aerial and space
networks, where connectivity is intermittent and clients differ from one another far more than
in a data centre.
