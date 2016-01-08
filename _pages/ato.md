---
title: ATOs
---

An Authority to Operate (ATO) is a complicated security review process that is required before you can deploy anything on the public web. Before a system is made publicly accessible on the Internet, it must go through either the full ATO process or a 90-Day [Authority to Test](../authority-to-test/). If either are not yet complete, the system must have some level of authentication required for a user to enter.

### The ATO process

While you’re in the ATO process, the following things will occur. These are largely done by the CIO shop in tandem with the 18F DevOps team, but may create some requirements for your team.

1. Once the technical architecture is stable, a system security plan (SSP) will be created. The system architecture must be drawn out to assist with this process, but can be done so at a high level.
    * For 18F, the CIO office will complete the SSP.
1. Once the SSP is complete, the system will be scanned in several ways:
    * Web vulnerability scan
        * Static analysis
        * Active scan
    * Infrastructure-level scan
    * Penetration test
1. The scans grant one of four categorizations of vulnerabilities: low, medium, high, and critical. These vulnerabilities affect your ability to receive an ATO.
    * Low and medium can be resolved after the ATO is granted
    * High and critical must be resolved before the ATO is given
        * If any findings are from human testing or are critical vulnerabilities, you must fix or explain as a false positive.
1. Information Security finalizes the SSP
1. If all of this is completed, the system is granted an ATO for a one year term.
1. If the system substantively changes, then a new ATO will be warranted. The 18F DevOps team will make this determination – please open a new issue if you think you have made a change that may warrant a new ATO. Examples for triggers for a new ATO include changes to:
    * Encryption methodologies
    * A web framework having new backend administrative frameworks
    * The kinds of information you begin to store (e.g. personally identifiable information)

See [the checklist](checklist/) to see these tasks broken down by who's responsible for each.
