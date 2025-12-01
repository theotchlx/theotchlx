---
layout: ../../layouts/ContributionLayout.astro

title: 'Ratatui'
abstract: 'A Rust crate for cooking up Terminal User Interfaces'
startDate: 2024-01
dates: "December 2024."
tags: ["GitHub", "Rust", "TUI"]
size: 1
---

## The project

**[Ratatui](https://ratatui.rs/)** is a lightweight library that provides a set of widgets and utilities to build complex TUIs (Terminal User Interfaces) in Rust beautifully and with low-effort.

As of 2025, as other TUI projects get archived (such as tui-rs), Ratatui is commonly recommended as a feature-rich, actively maintained TUI library for Rust projects.

I was able to experience the dedication and passion that the maintainers have for TUIs, textual arts and character representations.
Their commitment to the project and TUIs in general correlates with how easy it is to make clean and beautiful TUIs with Ratatui.

Ratatui development hosts its source code on GitHub, features a very complete CI system that includes test coverage analysis (which is impeccably followed), a well-organized review and feedback system between maintainers and contributors, and a very modular codebase that allows for easy TUI "widget" development, with essential widgets included by default in the top-level crate.

## The issue

Before then, Ratatui's public API only exposed "full" or "contiguous" border types such as the following:

┌─────────────┐
│Plain borders│
└─────────────┘

╭───────────────╮
│Rounded borders│
╰───────────────╯

╔══════════════╗
║double borders║
╚══════════════╝

And many others, including notably block borders and borders using specific drawing techniques.
All of Ratatui's currently available border sets [are listed here](https://docs.rs/ratatui/latest/ratatui/symbols/border/index.html).

However, Ratatui lacked dashed and dotted borders.
Such feature is obviously quite important for a TUI crate, and the request for this feature came with [the following GitHub issue](https://github.com/ratatui/ratatui/issues/1355).
The author presents one of their use-case and the fact they currently use workarounds to get around the missing dashed borders.
In two weeks, others joined in wanting this feature completed.

Two potential contributors committed themselves to developing this feature, but for one reason or another either couldn't do it, or never provided.
Seeing this recent issue on standby, and its interesting prospects, I mentioned the last assignee to ask if the task could be handed over to me ([in the following message](https://github.com/ratatui/ratatui/issues/1355#issuecomment-2543860415)).
One of the maintainers gave me the go.

Apart from the lack of dashed and dotted borders, a second issue that was identified during my work is the naming of private and public APIs not following UTF-8 naming standards, reducing the convenience of using the crate.

## My contributions

I added dotted borders into Ratatui [with the following PR](https://github.com/ratatui/ratatui/pull/1573), complete with maximum test coverage, and improvements to the naming conventions.  
Ratatui's community is great, and it has been a very good experience working with them so far. I very much recommend the experience with the maintainers.

Contributed to Ratatui - a Rust library to build TUIs (Terminal User Interfaces).

This was a great experience working with the maintainers - and I believe this PR encompasses my commitment and ability to follow rigorous guidelines and improve test coverage, refactor a codebase into cleaner code, all the while adding new features.

It took around a month from December 2024 to January 2025, and the feature got released around 10 months later in the November 1st [v0.30.0-beta.0 release](https://github.com/ratatui/ratatui/releases/tag/ratatui-v0.30.0-beta.0). Here's the [whole beta release](https://github.com/ratatui/ratatui/pull/2162).

The following [Ratatui article](https://ratatui-0-30.ratatui.pages.dev/highlights/v030/) highlights the new features, including the numerous [new border types](https://ratatui-0-30.ratatui.pages.dev/highlights/v030/#new-bordertypes).

---

This was my first open source contribution to a project I hadn't been a part of before. I'm glad it was such a great experience, it really makes you appreciate working on open source projects and in such collaborative environments.
