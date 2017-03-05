---
title: System Security Plan
---

As described in [the NIST guide](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf#page=7):

> The purpose of the system security plan is to provide an overview of the security requirements of the system and describe the controls in place or planned for meeting those requirements.

The system security plan (SSP) is a long Google Doc. 18F is actively working on a tool to generate them called [Compliance Masonry](https://github.com/opencontrol/compliance-masonry), which uses a machine-readable format for which template is below. For now, the Google Docs are the canonical versions of the SSP.

### System/Network Diagrams

One of the requirements for an SSP is to include a network diagram for your system. It is helpful to create this diagram as a Google Drawing so that your Infrastructure Lead and AO can edit it as needed during the ATO assessment process.

When creating the diagram include the "ATO Boundary." A dotted line box is a nice way to do this. The system diagram includes things outside of the ATO boundary for context, such as the cloud.gov platform itself, and delineating the parts of the diagram being ATOd versus the parts that exist for context is important.



A few example diagrams can be found below:

1. [A simple application running on cloud.gov](https://docs.google.com/drawings/d/1nwclBJQfbuzsnGOqe88VukQl3uiH1Jfa4c0FT1Cq43I/edit)
1. [A more complex application running on cloud.gov](https://docs.google.com/drawings/d/1k1wykk5PbLKSNJj8FyZbIlpX0D8r1q3-w-uRK_WWt9g/edit)
1. [A complex application not running on cloud.gov](https://docs.google.com/drawings/d/10cH-OUB1NWzCI0v9LPzm7AXCfrHXNkDgnae-7hcUFu8/edit)

### Compliance Masonry Template

Add the following to your repository as `system-security-plan.yml`, with the information in the `<angle brackets>` filled in. Once added to your repository, it should be kept up-to-date as the project progresses.

```yaml
---
name: <project name>
uniqueID: <MB number – see https://docs.google.com/spreadsheets/d/1v4QfXGaJVy9-CZ0n6cFLHGGs_5TL1l8uCh6ZyNYjMDk/edit#gid=2047916505>
version: <application version>
# descriptions:
# https://18f.gsa.gov/dashboard/
phase: <discovery|alpha|beta|live>
# `D26 Civilian Operations` is most common for 18F projects.
# http://csrc.nist.gov/publications/nistpubs/800-60-rev1/SP800-60_Vol1-Rev1.pdf#page=23
information-types:
- <Dxx + name>

# https://pages.18f.gov/before-you-ship/ato/levels/
confidentiality: <none|low|moderate|high>
integrity: <low|moderate|high>
availability: <low|moderate|high>
security-baseline: <open data|low|moderate|high>

system-type: <major|minor|general support>
level-of-identity-assurance: <0 if no authentication, or a link to SSP of the forthcoming identity system>
staff:
  authorizing-official:
    name: Noah Kunin
    title: TTS Infrastructure Director
    org: General Services Administration
    unit: TTS
    email: devops@gsa.gov
  system-owner:
    name: <developer's name>
    title: System Owner
    org: General Services Administration
    unit: 18F
    email: <developer's email>
  system-management:
    name: Noah Kunin
    title: TTS Infrastructure Director
    org: General Services Administration
    unit: TTS
    email: devops@gsa.gov
  system-security-officer:
    name: Noah Kunin
    title: TTS Infrastructure Director
    org: General Services Administration
    unit: TTS
    email: devops@gsa.gov
  technical-lead:
    name: <developer's name>
    title: Technical Lead
    org: General Services Administration
    unit: 18F
    email: <developer's email>
leveraged-authorizations:
- https://www.fedramp.gov/marketplace/compliant-systems/amazon-web-services-aws-eastwest-us-public-cloud/
purpose: <link to README>
components:
- <link to item under https://18f.gsa.gov/dashboard/>
- <links to repositories>

# these will be the same unless your architecture is especially complex
system-diagram: <link>
network-diagram: <link>

environments:
- Cloud Foundry
- Amazon Web Services East
user-types:
  developer:
    functions:
    - deployment
    - engineering
controls:
- <links to your security documentation>
```
