---
title: System Security Plan
---

As described in [the NIST guide](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf#page=7):

> The purpose of the system security plan is to provide an overview of the security requirements of the system and describe the controls in place or planned for meeting those requirements.

The system security plan (SSP) is a long Google Doc. 18F is actively working on a tool to generate them called [Compliance Masonry](https://github.com/opencontrol/compliance-masonry), which uses a machine-readable format for which template is below. For now, the Google Docs are the canonical versions of the SSP.

* Filling out the SSP is hard, and will likely be the most time-consuming part of the ATO process.
* Work with your Infrastructure Lead on completing the SSP.
* Sections 9, 10, and 13 are the hard/important ones to fill out.
* It will be easiest to fill out your SSP while going through side-by-side with a recent SSP, ideally for a similar system.
    * Looking at another SSP will help you understand the language/detail required.
    * Reuse/adapt content from previous SSP(s) whenever possible.
    * Your Infrastructure Lead can find an example SSP for you.
* When filling out the SSP, try taking a rough first pass, and flesh it out later.

### System/network diagrams

One of the requirements for an SSP (and the Rules of Engagement) is to include a network diagram for your system. Some tips:

* Create this diagram as a Google Drawing so that your Infrastructure Lead and AO can comment/edit as needed.
* The diagram should be as detailed as possible.
* The boxes in the diagram should roughly correspond to the rows in the `Software Components` tables.
    * Include all external services, such as:
        * The Digital Analytics Program
        * New Relic
* The arrows should correspond to rows in the `Ports, Protocols, and Services` table(s), with labels of the format `<protocol> <port>(<T(CP) or U(DP)>) - <Purpose>`.
    * Example: `HTTPS 443(T) - uploading files`
* Include a visual "ATO Boundary."
    * A dotted line box is a nice way to do this.
    * The system diagram includes things outside of the ATO boundary for context. Delineating the parts of the diagram being ATOd versus the parts that exist for context (such as the cloud.gov router) is helpful for reviewers.

#### Examples

* A simple application running on cloud.gov: [FBI Crime Data Explorer](https://docs.google.com/drawings/d/1nwclBJQfbuzsnGOqe88VukQl3uiH1Jfa4c0FT1Cq43I/edit)
* A more complex application running on cloud.gov: [CALC](https://docs.google.com/drawings/d/1k1wykk5PbLKSNJj8FyZbIlpX0D8r1q3-w-uRK_WWt9g/edit)
* [A complex application not running on cloud.gov](https://docs.google.com/drawings/d/10cH-OUB1NWzCI0v9LPzm7AXCfrHXNkDgnae-7hcUFu8/edit)
