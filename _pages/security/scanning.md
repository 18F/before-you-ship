---
title: Security Scanning
navtitle: Scanning
parent: Security
---

Security scanning is broken down in several areas:

* [Static](../static-analysis/)
* [Dynamic](../dynamic-scanning/)
    * Active
        * Infrastructure-level scan (done at the cloud.gov level)
        * Penetration test (required if dealing with sensitive information)
    * Passive

## Alerts

Alerts come in one of four categorizations:

* **Low** and **Medium** can be resolved after the ATO is granted.
* **High** and **Critical** must be resolved before the ATO is granted.

Any false positives should be documented as such, through an "ignore" file (e.g. with a `note` in [Brakeman](http://brakemanscanner.org/docs/ignoring_false_positives/)) or with your ATO-related documentation.
