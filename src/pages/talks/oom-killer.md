---
layout: ../../layouts/TalkLayout.astro

title: 'Beep'
abstract: 'An interactive talk about a practical use of the Linux OOM killer.'
dateGiven: 2024-06
dates: "at the Polycloud in June 2024."
talkers: "Théo Tchilinguirian"
tags: ["Linux"]
size: 3
---

## What is this about?

I gave this talk at Polytech Montpellier, during the Polycloud 2024.  
It's more like a hands-on demonstration of the Linux OOM (Out-Of-Memory) Killer, that is, the mechanism that protects a Linux system against memory overflow.

## How does it work?

In Linux, a running program is called a process. The Linux Kernel allocates a vast range of virtual memory to each running process, to keep track of their state, and map their virtual memory to physical RAM efficiently.

The Kernel does not limit processes in how much virtual memory they can use. However, if the total virtual memory of every process exceeds the total physical memory available, the OOM mechanism built into the kernel will wake up to handle the issue.

For this demonstration, I made a program whose only purpose was to fill its virtual memory. However, sometimes programs have bugs that cause memory leaks, which can be an unintentional cause of memory overflow.

### Observations

Here is what could be observed by running the program:

1. After the available memory gets completely allocated, the cached memory is emptied to make space.
2. When all RAM is allocated to the process, memory is re-organized withing SWAP space, with the least-used memory ranges moved to SWAP.
3. When the whole memory (RAM + SWAP) is allocated, the OOM killer uses its last resort: killing the most likely culprit. In this case, that would be our memory-hungry process.

### Explanations and further comments

As you can see, the OOM killer only kills processes as a last resort, and will first use a fascinating memory-rearrangement mechanism. This is quite understandable, as ending working processes should be the very last resort. This mechanism should be well understood by Kubernetes users, as the orchestrator and its Cloud platforms' derivates make good use of this Kernel mechanism to restart containers and execute alerting procedures in monitoring strategies.

One practical yet peculiar use we can derive from the OOM Killer could be to rearrange unused memory in SWAP.

This mechanism is completely different to CPU throttling, which occurs when the CPU is overused, and merely slows down all processes without causing their death.
A simple automatic workflow to manage CPU throttling would simply be to allocate more resources, such as virtual CPUs to a machine, or nodes to a shared resource pool. These strategies are known as "vertical scaling" and "horizontal scaling", respectively.

## Throwback to the talk

It was very fun doing this talk at the Polycloud. This event is hosted each year at the Polytech, where I am currently studying computer science.

This was one of the "free talks" in the evening, and one of my first talks. Thanks to my professors, classmates and professionals from the field for attending my talk!

It was packed with fun, the audience was great and loved the little demonstrations I did in TTY (`/dev/random` video and audio pipe) during memory allocation.

And thank you for reading!
