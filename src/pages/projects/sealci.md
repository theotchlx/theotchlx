---
layout: ../../layouts/ProjectLayout.astro

title: 'SealCI'
description: 'Distributed CI system in 4 microservices.'
startDate: 2024-06
dates: "Late June 2024"
contributors: "The DO class of 2023-2026 (15 people)"
tags: ["Open-source", "Rust", "GitHub", "CI", "Microservices"]
size: 1

---

Note: this article was written in December 2024. The project has evolved since, with new features such as release packaging and signing, utilizing our new Release Agent service running in our own Virtual Machine Manager based largely on Lumper (another DO project) and Rust-VMM.

## The project

**SealCI** is a distributed CI system written in Rust.  
It is made of four microservices withcommon interface definitions using protobuff and OpenApi specifications. The interfaces are implemented using Tonic and gRPC following the API-driven development principle.

## Why SealCI?

This project is part of my training, more specifically around virtualization and microservice architecture courses.

Our next project will be a type-2 hypervisor - a VMM, in the likes of QEMU - written in Rust and integrated into SealCI, more specifically in the Agent service which we will see just below.

## How?

We are fifteen DevOps student engineers working on the project, divided in groups to distribute the efforts of designing and implementing each service together with the rest of the team.  
The APIs being defined properly, we were able to work in parallel.

I worked on most of the scheduler design and implementation, and helped review the other microservices' design and implementations with an open source philosophy in mind.

### Five sub-projects

SealCI is made of five projects.

- A standardized API.
  - Defines every interface between microservices.
- Four microservices written in Rust.
  - Monitor : watches a code repository for CI pipelines. Interfaces with the user and controller.
  - Controller : makes CI pipelines into CI workloads and transfers them to a scheduler. Interfaces with the monitor and scheduler.
  - Scheduler : schedules CI workload units on the infrastructure based on current workload. Interfaces with the controller and agents.
  - Agent : executes a CI workload unit in Docker containers.

### Standardized API

We used protobuff definitions to define remote procedure calls using the gRPC framework, as well as OpenAPI for REST API specification.

gRPC is a very interesting solution in that it generates function stubs around your procedures, that wrap around the HTTP/2 connection so that the developer is never exposed to it. It can handle unary connections as well as streams. The underlying implementation in HTTP/2 is optimized for speed efficiency.

OpenAPI is a language-agnostic specification for our REST API.

### Microservices

This part is coming soon...! I plan on writing a TAD (Technical Architecture Document) of Beep's current architecture.  

Nevertheless, here is a foretaste of the technology stack:  

Frontend:

- Responsive web application.
- React with Nx and Vite.
- Shadcn-based components.

Backend:

- AdonisJS
- PBAC permissions.
- TOTP secure authentication with QR Code.

Database:

- High-availability PostgreSQL database.
- Automatic backups.

WebRTC backend:

- STUN/TURN server for setting up peer-to-peer connections and transmitting audio and video streams with real-time speed.
- Rust and Elixir/Gleam.

Infrastructure:

- Fully Terraform-ed + Ansible.
- 3 environments managed in Kubernetes throught ArgoCD following the GitOps pull methodology.
- Kubernetes nodes managed in Proxmox on 3 physical machines, with each environment's control planes split between machines.

The source code is hosted with Git in an on-premise GitLab.

## Challenges

### Project and team management

Management isn't for everybody. This project made us realize how hard it can be. Luckily, I find this subject and the challenges around it extremely interesting!
Beep led me to read a lot on the subject, and taught me skills I wouldn't have had the chance to acquire if not with years of profesionnal experience in multiple work environments.

Organizing fifteen students around a project of this size is a real challenge.

First of all, teams above 6 persons cannot naturally communicate and channel internal needs, efforts, resources and more properly, mainly due to the fact the natural flow of communication in small organized groups is one-on-one: that is, each person communicates to all other persons individually.
For a group of n individuals, that makes (n-1)*n communication channels that have to be managed and always work. That number equals 30 for a group of 6.

Above 6 individuals, you have to implement maangement frameworks such as Scrum, and apply methodologies or principles such as those described in the Agile Manifesto, to efficiently manage the group. We learnt this the hard way, and our mistakes in this project forged our hands-on skills in management.

---

I'm still writing this article as of 14/12/2024. For now it's just a stub - but thank you for reading that far :)! There are many more challenges we faced that I have yet to describe... Stay tuned!
