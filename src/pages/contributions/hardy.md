---
layout: ../../layouts/ContributionLayout.astro

title: 'Ratatui'
abstract: 'A BPv7 DTN server implementation tailored for the Cloud'
startDate: 2025-11
dates: "November 2025."
tags: ["GitHub", "Rust", "BP"]
size: 1
---

## The project

Hardy is a Bundle Protocol implementation strongly optimized for running on the Cloud, and designed with assumptions of high-throughput connectivity on hyperscaler infrastructures.
It implements the Bundle Protocol version 7 and the TCPCLv4.

Rick Taylor is a DTN expert and the sole developer and maintainer of Hardy.

Hardy follows a very modular design that makes understanding the codebase, and contributing easier.

## Contributions

There's a lot to do on Hardy.
I had some free time and saw there were some interesting issues, so I decided to do a first one to get familiar with Hardy.
[This first issue](https://github.com/ricktaylor/hardy/issues/276) is about making an underlying public API for advanced bundle creation options (cyclic redundancy checks and bundle processing control flags) available to the CLI bundle creation tools.

[Here is the relevant PR](https://github.com/ricktaylor/hardy/pull/277)

Since Hardy is well divided into modules with different responsibilities, I had to keep the parsing of the CLI flags contained into the CLI module - so no adding FromStr or Display implementations in the bundle API module.

I followed Git best practices of making commits that are singular in scope, atomic in effects, have clear messages that explain the context and reasons for the changes, and amending commits until they are perfect, in the form of patchsets.
Sadly, GitHub does not allow for easy display and manipulation of patchsets (even though they are available to the Git store).
(I consider that [Gerrit](https://www.gerritcodereview.com/) and [GerritHub](https://gerrithub.io/) offer some of the best interfaces to Git best practices).

In my first patchset, I implemented custom input parsing functions that you can plug in to specific clap parameters.
One example is the following:

```rust
/// Parse bundle process control flags
fn parse_flags(s: &str) -> anyhow::Result<Flags, String> {
    let bits = if let Some(stripped) = s.strip_prefix("0x") {
        // Parse hex string
        u64::from_str_radix(stripped, 16)
    } else if let Some(stripped) = s.strip_prefix("0b") {
        // Parse binary string
        u64::from_str_radix(stripped, 2)
    } else {
        s.parse::<u64>()
    }
    .map_err(|e| format!("Failed to parse flags '{s}': {e}"))?;

    Ok(Flags::from(bits))
}
```

This allowed to enter the parameters using common bases (bin, hex, dec) useful for test automation... However that isn't the point of this CLI -

After a few iterations improving upon this design and exposing a couple limitations of Rust (the if-let-guard still being considered an experimental feature of the compiler) and clap (ValueEnums not displaying value aliases in the help output - see [clap issue #4416](https://github.com/clap-rs/clap/issues/4416)), we finally settled on a more idiomatic way to parse the parameters, using clap's native ValueEnum type, with an easy to use interface and CLI aliases, to avoid having to take a look at the BPv7 RFC to know what parameter you need to input.
This did require going around current limitations of this type, but I believe we did it in the cleanest way.

I'm glad I was able to relieve Rick of this task, and work with him on his project :-).
I like that he has good standards for his codebase.

Looking forward to the next time we go to the pub...

---

One tangential effect worth noting is that I directly and indirectly attracted attention to the project.
Rick consequently wrote a whole bunch of new issues to make the most of this, and I made sure to advertise them.

Notably, Charley, an alumnus of my training, made interesting contributions to the project.
