---
draft: false
title: Constellation
description: Constellation is my homelab. It contains a Raspberry Pi Kubernetes cluster, a Proxmox cluster and a TrueNAS server. The homelab serves as a learning tool, as well as providing self-hosting to myself and others.
keywords:
  - Kubernetes
  - Proxmox
  - TrueNAS
  - k3s
  - Homelab
  - Docker
  - MikroTik
  - Container orchestration
  - Server rack
  - Home server
date: 2024-07-01
logo: 
  src: /images/constellation.webp
  alt: Constellation logo
links:
  github: constellation-net
  website: starsystem.dev
technologies:
  - Kubernetes
  - Proxmox
  - TrueNAS
  - Docker
---

Constellation is a homelab; a collection of consumer and enterprise hardware that I use to learn about various technologies, and provide hosting for services.
I've been working on the project since Summer 2024, and since then it's seen many, many iterations and refactors.
I can't go into the project's entire history here, but I can talk about the current state of the project, what I hope to achieve with it in the future, and what I've learnt from it.

## Constellation's Architecture

Constellation is stored in a 20U server rack in my bedroom, and the hardware can be split into four main categories:

- Networking
- [Kubernetes](https://kubernetes.io) cluster
- [Proxmox](https://www.proxmox.com/en/) cluster
- Storage

### Networking

Constellation has its own MikroTik router separate from the rest of my home network.
This allows me to make mistakes without affecting the others in my household (though it does create a double NAT which is not very efficient).
It also includes a Power-over-Ethernet (PoE) capable switch, which allows me to power the devices in my Kubernetes cluster without needing a spare power socket for each device.

### Kubernetes Cluster

My Kubernetes cluster (codename: Hydra) is made up of five identical [Raspberry Pi 5s](https://thepihut.com/products/raspberry-pi-5).
Each Pi has:

- 8GB RAM
- 128GB SATA SSD over USB
- 16GB microSD for the OS
- [PoE HAT](https://thepihut.com/products/poe-hat-for-raspberry-pi-5-with-cooling-fan)

On the software side, the cluster runs [K3s](https://k3s.io), a lightweight Kubernetes distribution that's easy to get up-and-running without a faff.
It also includes various controllers that expand its functionality, such as:

- [Traefik](https://traefik.io), an ingress controller
- [MetalLB](https://metallb.io), which provides Highly Available networking
- [Longhorn](https://longhorn.io), for Highly Available clustered storage

My goal with Hydra is for it to be a Highly Available cluster that runs most of the services in my homelab.
Having HA means that if any two of the Raspberry Pis go offline, the cluster will still operate as normal.
This is important for a lot of the services that run on my other hardware, as they may depend on the software running on Hydra.

### Proxmox Cluster

OK, so my Proxmox cluster (codename: Olympus) isn't actually a cluster.
Currently, it's just a single node running all of my virtual machines.
However, I do plan to expand upon it and make it a fully HA cluster in the future.

My needs with Olympus are quite different to Hydra.
While Hydra handles all the essential things, Olympus tends to be more of a playground: it runs testing VMs, game servers, and anything I simply can't put elsewhere.

### Storage

Constellation also happens to have its own storage server (codename: Sagittarius).
Sagittarius runs [TrueNAS SCALE](https://truenas.com), with over 20TB of usable storage across 8x 4TB hard drives in a 2x4 RAIDZ1 configuration.
It also has two additional 128GB SSDs for metadata and small files, and in future will have a dedicated SLOG and L2ARC SSD for caching.

The storage server is primarily used for backups, including of the other hardware in Constellation, and of my own devices through macOS Time Machine.
It also serves as a media server, hosting my personal collection of music, videos and photos.

Sagittarius is also capable of running virtual machines, but this is reserved for things like [Proxmox Backup Server](https://www.proxmox.com/en/products/proxmox-backup-server/overview), which can only be run as an OS.
As a general rule: if it doesn't have to run on Sagittarius, it shouldn't.

## What I've Learnt

Constellation has been invaluable in teaching me various skills that can be applied in industry.
Primarily, I've learnt about the basics of [Kubernetes](https://kubernetes.io) and horizontal scaling, along with networking topics like subnetting, VLANs and cybersecurity.

It's been so instrumental, that I've even decided to teach others what I've learnt.
I've already ran a [workshop on Kubernetes](/events/k8s), and in the future plan to run workshops on subnetting and VLANs under [ShefESH](/committees/shefesh).