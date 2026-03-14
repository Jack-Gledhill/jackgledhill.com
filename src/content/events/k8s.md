---
draft: false
title: Kubernetes Workshop
description: This was an introductory workshop on Kubernetes. The workshop introduces Kubernetes, its uses and how to get started with it. Students learn the basics of container orchestration, setting up a cluster with Docker Desktop and deploying Pods and Services to the cluster.
keywords:
  - Kubernetes
  - University of Sheffield
  - Sheffield Students' Union
  - Sheffield CompSoc
  - Container orchestration
  - Docker
  - Kubernetes Engineer
  - DevOps
  - DevOps Engineer
date: 2025-04-01
banner: /images/kubernetes/banner.webp
logo: /images/kubernetes/logo.webp
links:
  github: shefcompsoc/k8s-workshop
---

# Introduction

[Kubernetes](https://kubernetes.io) is a container orchestration platform used by companies all over the world to scale their software across entire datacenters.
It's a highly sought-after skill in the industry, in part because of its steep learning curve that challenges almost everyone that tries to learn it.

Having self-taught Kubernetes in Summer 2024, using my homelab [Constellation](/projects/constellation), I decided I wanted to share my knowledge with others.

## What the Workshop Covers

My workshop introduced attendees to the basics of Kubernetes and containerisation, who uses Kubernetes and why they should learn it.
The main focuses of the workshop were:

- Clustering and setting up a basic cluster with [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Manifests and what they mean within a cluster
- Interacting with a cluster with kubectl
- Pods and containers
- Replica Sets and its derivatives
- Basic Pod networking with Services

## What the Workshop Doesn't Cover

Unfortunately I couldn't cover everything in my workshop. Were I to run a more advanced sequel to this workshop, the topics I'd include would be:

- PersistentVolumes and PVClaims
- CD tools like [ArgoCD](https://argo-cd.readthedocs.io/en/stable/) and [FluxCD](https://fluxcd.io)
- Ingress and [MetalLB](https://metallb.io)

## Workshop Links

- [Workshop slides](https://docs.google.com/presentation/d/1gUAFvMCad-gJ7Em19_P0BnAhQpC_Osm9TZagCTWB4Aw/edit?usp=sharing)
- [GitHub repo](https://github.com/shefcompsoc/k8s-workshop)