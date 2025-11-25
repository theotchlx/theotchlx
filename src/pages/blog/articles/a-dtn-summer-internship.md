---
layout: ../../../layouts/MarkdownArticleLayout.astro

title: 'A DTN summer internship'
pubDate: 2025-11-11
abstract: 'Research and development of a BGP solution for propagating EID reachability information in DTNs.'
author: 'Théo Tchilinguirian'
tags: ["DTN", "BGP", "Computer networks", "Research"]
insight: 2
---

### Some context to this internship

Machines and computers have always piqued my curiosity. Magic black boxes that do everything.

Later when I had learnt more about them, I was curious of the way that through time, people have interact with each other through machines and the way machines interact with each other.

Through my scientific studies and now my information technology studies, this curiosity has led me to develop a strong interest for understanding the mechanisms of operating systems, computer networks and security.

<strong>In summer of 2025</strong>, I had the opportunity to undertake an internship... At CERN's <a href="https://openlab.cern/" target="_blank" rel="noopener noreferrer">openlab programme</a>!
However interesting this experience could have been through the brilliant minds of the people, the fascinating environment, its history and the groundbreaking work taking place there, I felt it was too short (9 weeks), too close to home, and the subject I was assigned to did not quite match with my interests.  
CERN, you fabulous institute, I will keep dreaming of being a part of your ingenious machinery until next time..

<strong>In parallel</strong>, I had applied to a curiously interesting and technically inclined internship opportunity at <a href="https://d3tn.com/" target="_blank" rel="noopener noreferrer">D3TN GmbH</a>, a small company conducting research and development of networking software solutions for "Delay/Disruption-Tolerant Networks" in Dresden, Germany.
The domain and its implications seemed fascinating already.

I had applied to the position, read up on the subject, and there for almost four months, I lived in Saxony and became part of a tight community of experts, industry professionals, academics and fellow students, all equally as interesting and dedicated as anybody at CERN.

I would like to express my sincere thanks to Marius Feldmann and Felix Walter for supervising my work during the course of this internship, and to Olivier De Jonckère for making this internship possible by providing me with this opportunity.

---

### A BGP extension for distributing EIDs in DTNs

<strong>The goal of this internship</strong> was to design and develop a BGP extension for propagating EID reachability information in Delay/Disruption-Tolerant Networks (DTN).

This section does not go into the architectural details explored in the paper (<a href="https://drive.google.com/file/d/14EIFBoiGF6ITR2Od8mlcMxWUBnUlRavJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">available here</a> from the <a href="https://www.stintworkshops.org/" target="_blank" rel="noopener noreferrer">STINT 2025 workshop's website</a>), and rather gives an overview of my personal experience of this work, as well as information on the continuation and implications of this work that may be interesting to DTN community members.

For the sake of brevity, the following does not explain the ins and outs of DTNs, you should read RFC 4838 for more information on this subject (such as about EIDs) and RFC 9171 to learn about BPAs, which are also mentioned in this page. The following does however briefly explain some BGP mechanisms.

Designed to propagate routes across a booming Internet and now in its fourth version, <strong>BGP scales well through private and public networks</strong>.
These attributes of BGP and this work being a solution for larger networks and part of the <a href="https://darksol.cloud/en/" target="_blank" rel="noopener noreferrer">DARKSOL</a> space Cloud project, are why BGP was chosen as the basis for this solution.
BGP does in fact not make use of multicast, which is one difference with existing DTN protocols for EID discovery such as IPND or SAND, that we otherwise would have considered more thoroughly.

<strong>This work introduces ERI:</strong> EID Reachability Information, which is the BGP Multiprotocol Extension [1] for a BGP UPDATE message's Multiprotocol Network-Layer Reachability Information (MP NLRI) to hold EIDs.  
This is simply a Type-Length-Array structure that holds most importantly <strong>a single Next Hop Address, one or more EIDs</strong> and EID-related informations (such as CLA information).
A draft ERI is presented in the paper.
This structure is bound to change with future work (<em>RFC draft to come</em>).  
Note that we can't really qualify an ERI of "Network-Layer" Reachability Information.
This abuse of language is a glimpse into the set of challenges that come with defining a BGP extension for DTNs.

The Next Hop is a reachable neighbour of the BGP node that received or sent the ERI.
In a DTN, the Next Hop Address would be the address of a DTN node and BPA exposing specific CLAs.
The extension in its current state only supports IPv4 Next Hop Addresses.  
An EID, its Next Hop and associated information is called <strong>a route</strong>.
A single ERI may transport <strong>reachable routes</strong> for a Next Hop (in which case this ERI is an MP_REACH_NLRI) or <strong>unreachable routes</strong>, i.e. routes that are not reachable anymore (MP_UNREACH_NLRI).

The following are a few novel benefits this technology offers.

#### 1. Automatic propagation of EIDs and reconfiguration of BPAs in large low-latency private networks

On Terran Clouds and other low-level environments (including clusters of satellites), this extension to BGP is a solution for <strong>automatically propagating</strong> ERI between nodes, on Linux as well as in Kubernetes.  
As it turns out, BGP is a technology used natively by some Kubernetes CNIs - though we haven't researched extending BGP for CNIs yet.

Let's consider a network of nodes running a BPA and a BGP daemon.
The process for EID propagation is the following:

1. An application registers an EID with the local BPA, either directly or through another interface [2],
2. The ERI is built, indicating a newly reachable EID, and is exchanged with the local BGP daemon - possibly by means of Hermes (introduced with the paper),
3. The ERI gets propagated through the BGP network,
4. Each receiving node's BPA is automatically reconfigured with the EID and associated information - again possibly by means of Hermes.

If the application's EID becomes unreachable, either through a normal process (e.g. the application finishes and deregisters its EID) or an abnormal process (e.g. the application or its node crashes), the same process applies, but the ERI now contains information about the unreachability of the EID.

One important thing to note is that, as defined in BGP's specification, when a BGP node becomes unreachable, all the BGP sessions with its neighbours are closed, and <strong>the related routes are forgotten</strong> from the whole BGP network

The EID is thus forgotten by every node, (every nodes' BGP and BPA daemons).

#### 2. Enhancement of Internet <-> SSI accessibility

By running a DTN-capable BGP daemon on DTN nodes throughout satellite clusters, ground station and the Internet, the ERI of a DTN application may be automatically propagated through private networks - or even throughout parts of the Internet and SSI, allowing the EID to become available for other DTN applications to route bundles back to it, although only as long as the EID is reachable.

Thus, DTN applications running in parts of the SSI can be more easily accessed from other parts, instead of relying on manual network configurations.

One other interesting thing to note is that BGP is an Internet-native technology.

As was pointed out multiple times at STINT 2025, DTN does not mean rewriting every Internet technology.
Some can be used, others adapter, though some have to be redesigned.  
This works falls into the second category, by extending an existing Internet technology for use in DTNs.

---

### Identified limitations and discrepancies of BGP for DTNs

You may have identified some limitations of this solution already:

- Due to the nature of BGP sessions, it only works in low-latency environments,
- Due to the nature of BGP messages, it can only propagate EID reachability information related to <strong>the current state of reachability</strong> of an EID, and not about future connections (as in contact plans for example).

In short, everything from the sessions to the model of reachability information exchange expects low-latencies.

Concretely, this means that we can build BGP Autonomous Systems inside DTNs, that would make use of internal BGP (iBGP) for internal route reachability propagation; but the use of BGP over high-latency connections is not possible (e.g. for external BGP between remote DTNs Autonomous Systems).  
Thus BGP can be used to form DTN Autonomous Systems, but not to exchange routes between them.
Some protocol based on BGP could be defined to exchange BGP routes over BP, in order to build interoperable DTN-aware Autonomous Systems (<em>seems like a neat PhD idea? I'd be interested</em>).

---

### STINT and the DTN community

I had the incredible opportunity to travel to <a href="https://www.stintworkshops.org/" target="_blank" rel="noopener noreferrer">STINT</a> and present our work ([see related talk article](/talks/stint2025-bgp-paper/)), thanks to D3TN, my school (Polytech Montpellier), and Olivier's laboratory (LIRMM).

We did incredible work - I could have never imagined a more productive conference than STINT.  
The DTN community really came together and went to work taming existing problems through discussions in-between stimulating talks exposing dozens of difficulties and exciting possibilities.
Of course, I also had tons of very instructive conversations with people from WiSEE, with which STINT was co-located this year, and learnt a lot on fascinating subject in and around DTNs and space or constrained networking.
I had never taken so many notes in three days!

Together with Olivier and Juan, I also got to help prepare the A-SABR hackathon that took place on the last day of STINT, which led to interesting conversations on routing in existing BPAs and interoperability.

There's much more to say about the work we did at STINT, but that will be compiled in another form.
<em>A rebirth of the late DTN wiki, perhaps?</em> Who knows.. :-)

Of course, we also had tons of fun and I got home with plenty of funny anecdotes :-).

I was very glad to meet so many kind DTN lovers in person for the first time, although there were some people missing that I wish I'd have met!

---

### A conclusion

This internship was an amazing experience.  
Both on the social and cultural level - I had amazing interactions with fascinating Humans in a quite far and somewhat different place, explored an amazing city, country, and central Europe; and got to learn some German, which I love! And on the technical level - I learnt so much, C, Rust, Nix.., and of course Delay/Disruption-Tolerant Networking!

I thank all my friends at D3TN for hosting me this summer and for all the incredible opportunities they've given me, and I'm looking forward to continuing to work with them and the whole DTN community.  
See you in our delay-tolerant email inboxes :-).

I hope this was interesting to you, and thank you for reading!
I will add some diagrams and concise-ify the content of this article later.

PS: Thank you again Felix for allowing me to completely empty your desk for me to take the CKA exam lol!

---
[1] BGP Multiprotocol Extensions are defined in RFC 4760.

[2] This could be a Linux EID network interface module, possibly with an architecture similar to the BP Socket - this does not exist yet for DTNs as far as I know.
Such an interface would allow for Linux-native BIRD EID interface drivers, and remove the need for Hermes, which would be great.

Source code for the BIRD fork and Hermes is [available on GitHub](https://github.com/darksol-cloud).
