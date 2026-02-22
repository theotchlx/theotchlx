---
layout: ../../layouts/ContributionLayout.astro

title: 'A-SABR'
description: 'The Adaptive Library for Schedule-Aware Bundle Routing'
startDate: 2025-11
dates: "Since November 2025."
tags: ["GitHub", "Rust", "BP"]
size: 1
---

## The project

A-SABR "The Adaptive Library for Schedule Aware-Bundle Routing" is the definitive Rust library for state-of-the-art Bundle routing in Delay-Tolerant Networks (DTN). It offers tons of Bundle routing capabilities, fixes standards and implements state of the art routing policies.

Despite this, its use is very limited in operations.
My objective is to widen the adoption of the project, with targeted technical and scientific contributions, with the final goal being to promote more efficient routing in delay-tolerant networks, thus better success in future DTN missions, and promotion of delay-tolerant networking as a field of study and engineering.

It is a Rust library that offers tons of Bundle routing capabilities, as well as Python bindings for Python programs.

Olivier De Jonckère, a DTN expert and researcher at LIRMM (Montpellier, France), is the maintainer of A-SABR.

A-SABR leverages complex Rust primitives for maximum usability and maintainability with a small performance and memory footprint.
It has follows a very modular design that makes it easier to understand the codebase and contribute.

## Contributions

I am involved in the project on multiple aspects: I wish to promote A-SABR for operational Bundle routing in future DTN missions. This requires integrating A-SABR with existing Bundle Protocol implementations, such as [Hardy](https://github.com/ricktaylor/hardy/) (in Rust) or uD3TN (in C).

I helped design and review the STINT 2025 hackathon exercises on A-SABR, I also initialized their structure based on my similar personal experiences at other events, in [the following PR](https://github.com/DTN-MTP/A-SABR/pull/6). I added Hackathon guidelines [in this other PR](https://github.com/DTN-MTP/A-SABR/pull/12).
At the event, I helped supervise the Hackathon.

In the following PRs [#7](https://github.com/DTN-MTP/A-SABR/pull/7) and [#8](https://github.com/DTN-MTP/A-SABR/pull/8), I fixed typos in the documentation and exercises.

---

Integrating A-SABR into other toolchains requires it to be ready as a production payload.

Pursuing this objective, in [PR #18](https://github.com/DTN-MTP/A-SABR/pull/18), I address almost all Clippy warnings in the codebase, and bring up flaws in testing and benchmarking.

In order to improve maintainability of the code, I make use of some Rust features (namely, guard patterns on Options), in [PR #19](https://github.com/DTN-MTP/A-SABR/pull/19).
Since A-SABR recently switched to Rust edition 2024, I came back to PR #19, to improve upon it in [PR #33](https://github.com/DTN-MTP/A-SABR/pull/33), with a newer feature of Rust: "[if-let chains](https://doc.rust-lang.org/nightly/edition-guide/rust-2024/let-chains.html)".

Still towards the objective of making A-SABR production-ready, and for integration with Hardy and other Bundle Protocol implementations, error handling is required: this was implemented by Olivier in [PR #25](https://github.com/DTN-MTP/A-SABR/pull/25), which I reviewed, tested, and provided feedback for.

A recurring theme in those last PRs is reproducible testing and benchmarking of A-SABR.
As A-SABR is routing software, it is vital for it to have precise and reproducible benchmarks.
In this regard, we have compiled these requirements in [issue #23](https://github.com/DTN-MTP/A-SABR/issues/23), from experience in PRs #18 and #19.

A-SABR integration into Hardy, as well as A-SABR benchmarking and testing, are currently being reviewed as potential projects for computer science students at the faculty.

---

I am working towards a design and implementation of routing across *regions* in A-SABR, a contribution much aligned with my upcoming thesis work.

Currently, we are at the design phase, where I explore the problem without assumptions, in order to discover and wholly define the fundamental concepts that make up the problem.

This implementation will compare two regional routing techniques: contact passageways and node passageways, and aims to compare them empirically.  
This work will result in a paper to present the results.

---

In a different, but related project of the DTN-MTP GitHub organisation, I have compiled mechanisms for avoiding Kernel module loading in BP-Socket in [the following issue](https://github.com/DTN-MTP/bp-socket/issues/40).
These mechanisms were explored with peers, at and after the STINT 2025 conference, as well as explored further during the Nuit de l'Info 2025 by the Distracted/Defiant Tough Newts (DDTN) team, under the influence of caffeine and pizza.

I'm currently involved in A-SABR by helping in cleaning the codebase, refactoring here and there.
This gives me a better understanding of such Bundle routing libraries, as well as allows me to lend a helping hand to a professor to whom I'm very grateful.
