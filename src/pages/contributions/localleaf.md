---
layout: ../../layouts/ContributionLayout.astro

title: 'Localleaf'
description: 'A local alternative to Overleaf'
startDate: 2025-10
dates: "October 2025."
tags: ["GitHub", "LaTeX"]
size: 1
---

## The project

Localleaf is a very fast, containerised, LaTeX project monitor and compiler.
It monitors .tex files and builds them on change, locally and much faster than overleaf.com.

Localleaf is one of those little tools that someone made, that exactly fulfills one need for a lot of people.
Being genuinely helpful to me, it is one of the few projects I have "starred" on GitHub.

It is very useful if you need to compile an Overleaf project that is too big to be compiled for free on overleaf.com ; e.g. beamer slides, with many images, quickly become too big.

## Contributions

Localleaf is a small project: it consists of a Dockerfile, Bash scripts, CI, tests and a Makefile.

Similarly, my contributions are not technically challenging.

[A first PR](https://github.com/loiccoyle/localleaf/pull/8) fixes an error handling mistake in the main Bash script of 300+ lines.

[A second PR](https://github.com/loiccoyle/localleaf/pull/9), that has not been merged, adds inkscape, which increases the size of the already large (~5GB) container image by 700MB, but allows to compile SVG images, a vital part of the Overleaf toolchain.  
Inkscape is the actual dependency used by the Overleaf project, as are all the dependencies used by localleaf.

I have also contributed to the discussion and stated my position [on an issue](https://github.com/loiccoyle/localleaf/issues/6).

---

This is a small project and my contributions to it are "small" relative to my other contributions.
**However**, I felt it was very important to include this project in my list of contributions, as my contributions were "organic": I improved the project as a genuine user of the project (I still use it today).
I believe caring is the core of open source, and this type of contribution is [the historical motivation](https://www.oreilly.com/openbook/freedom/ch01.html) for the free/libre and open source software movement.
