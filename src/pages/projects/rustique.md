---
layout: ../../layouts/ProjectLayout.astro

title: 'Rustique'
description: 'Scientific article analyser'
startDate: 2024-01
dates: "in design phase since October 2024."
contributors: "Théo Tchilinguirian, Julien Tchilinguirian (independant arachnologist and MSc. in ecology)"
tags: ["open source", "large", "gitlab", "web", "devops", "cloud", "webrtc", "management"]
size: 1
wip: true
---

## The project

**Rustique** is a program that takes in scientific literature, papers, text... Independant of their format, and outputs suggestions to a database based on defined interfaces.

For example, you may have a website such as [Aranea](https://araneae.nmbe.ch/) from the NMBE. Each article such as [this one](https://araneae.nmbe.ch/data/5094/Zodarion_algiricum) is a display of information stored in a database.  
As you can see in these articles, data may be text, geographical data, photographs, drawings, references, authors, past and present scientific classification, etc.  
Rustique would interface with such a database to suggest updates and additions, which can be reviewed and corrected by experts before being added to the database.

Rustique could work with any database, as its interfaces from the database would be defined separately.

I am currently in the process of designing the different components of Rustique, and making proof-of-concepts (POCs) for this project.

## Why Beep?

This is a class project we have been building for more than a year now, and we will continue to build on it for the next two years, as part of our studies.  
This is the project we'll be working on for the next two years until we graduate, with our teachers supervising the project acting as our clients.

They request features under a deadline, then it's up to us to quantify, allocate and manage ou our resources: time and effort; to reach our milestones in time.

Their requested features have been crafted to direct us to face specific technical and organisational challenges. This allowed us to develop a hands-on experience in team and project management, as well as face technical challenges and understand core principles of the DevOps methodology, clean code, open source, refactoring and much more.

## How?

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
