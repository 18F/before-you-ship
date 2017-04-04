---
title: System Security Plan
---

As described in [the NIST guide](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf#page=7):

> The purpose of the system security plan is to provide an overview of the security requirements of the system and describe the controls in place or planned for meeting those requirements.

The system security plan (SSP) is a long Google Doc. 18F is actively working on a tool to generate them called [Compliance Masonry](https://github.com/opencontrol/compliance-masonry), which uses a machine-readable format for which template is below. For now, the Google Docs are the canonical versions of the SSP.

### System/network diagrams

One of the requirements for an SSP is to include a network diagram for your system. It is helpful to create this diagram as a Google Drawing so that your Infrastructure Lead and AO can edit it as needed during the ATO assessment process.

The diagram should be as detailed as possible. Include things like what ports are in use, and what they are used for.

When creating the diagram, include the "ATO Boundary." A dotted line box is a nice way to do this. The system diagram includes things outside of the ATO boundary for context, such as the cloud.gov platform itself, and delineating the parts of the diagram being ATOd versus the parts that exist for context is important.

A few example diagrams can be found below:

1. [A simple application running on cloud.gov](https://docs.google.com/drawings/d/1nwclBJQfbuzsnGOqe88VukQl3uiH1Jfa4c0FT1Cq43I/edit)
1. [A more complex application running on cloud.gov](https://docs.google.com/drawings/d/1k1wykk5PbLKSNJj8FyZbIlpX0D8r1q3-w-uRK_WWt9g/edit)
1. [A complex application not running on cloud.gov](https://docs.google.com/drawings/d/10cH-OUB1NWzCI0v9LPzm7AXCfrHXNkDgnae-7hcUFu8/edit)
