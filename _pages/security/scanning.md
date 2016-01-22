---
title: Security Scanning
navtitle: Scanning
parent: Security
---

Security scanning is broken down in several areas:

* [Static](../static-analysis/): Static Code Analysis (SCA) is similar to the [linters](https://en.wikipedia.org/wiki/Lint_(software)) that many developers use on a day-to-day basis. While many linters focus on stylistic concerns, we are interested in those tools that target security flaws.
* [Dynamic](../dynamic-scanning/): ZAP is one of the tools we use for Dynamic Scanning. It can function as both an active (Spider & Attack options) and a passive (man-in-the-middle/proxy) scanner.
    * Active
        * Infrastructure-level scan (done at the cloud.gov level)
        * Penetration test (required if dealing with sensitive information)
    * Passive: Monitors network traffic, but does not generate its own traffic.

## Alerts

Alerts come in one of four categorizations:

* **Low** and **Medium** can be resolved after the ATO is granted.
* **High** and **Critical** must be resolved before the ATO is granted.

Any false positives should be documented as such, through an "ignore" file (e.g. with a `note` in [Brakeman](http://brakemanscanner.org/docs/ignoring_false_positives/)) or with your ATO-related documentation.
