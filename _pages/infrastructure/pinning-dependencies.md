---
title: Pinning Dependencies
parent: Good Production Practices
---

The practice of "pinning dependencies" refers to making explicit the versions
of software your application depends on. It takes different forms in different
frameworks, but the high-level idea is to "freeze" dependencies so that
deployments are repeatable. Without this, we run the risk of executing
different software whenever servers are restaged, a new team-member joins the
project, or between development and production environments. In addition to
repeatability, pinning dependencies allow automatic notifications of
vulnerable dependencies (via [Gemnasium](https://gemnasium.com),
[Requires.io](https://requires.io/), etc.).

As such, all deployed applications should be pinning their library (and where
possible: language, OS, etc.) versions. Let's look at how to implement this in
different languages.

## Ruby

A paragraph or two on how to use bundler, the role of Gemfile.lock, etc.

## Node.JS

A paragraph or two about `shrinkwrap`, similar tools

## Python

A paragraph or two describing `requirements.txt` and how to generate it
