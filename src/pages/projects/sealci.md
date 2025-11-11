---
layout: ../../layouts/ProjectLayout.astro

title: 'SealCI'
description: 'Distributed CI system in 4 microservices.'
startDate: 2024-06
dates: "Late June 2024"
contributors: "The DO class of 2023-2026 (15 people)"
tags: ["Open-source", "Rust", "GitHub", "CI", "Microservices"]
size: 1
people: 15

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

We used Protobuf definitions to define remote procedure calls using the gRPC framework, as well as OpenAPI for REST API specification.

gRPC is a very interesting solution in that it generates function stubs around your procedures, that wrap around the HTTP/2 connection so that the developer is never exposed to it. It can handle unary connections as well as streams. The underlying implementation in HTTP/2 is optimized for speed efficiency.

OpenAPI is a language-agnostic specification for our REST API.

More coming soon - there's a lot to say about SealCI and I still have to finish this article.
