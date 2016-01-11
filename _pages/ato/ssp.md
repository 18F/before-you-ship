---
title: System Security Plan
---

As described in [the NIST guide](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf#page=7):

> The purpose of the system security plan is to provide an overview of the security requirements of the system and describe the controls in place or planned for meeting those requirements.

GSA provides a [Word template](http://www.gsa.gov/graphics/staffoffices/System_Security_Plan_Template_072312_508.docx), but for 18F's purposes, we create a machine-readable version.

We are working on a tool to help generate SSPs – check out [Compliance Masonry](https://github.com/opencontrol/compliance-masonry).

### Template

Add the following to your repository as `system-security-plan.yml`, with the information in the `<angle brackets>` filled in:

```yaml
---
name: <project name>
uniqueID: <MB number – see https://docs.google.com/spreadsheets/d/1hjCYIskgD_x_MI1ehXoiz2Qvsyxj1yK3fxabkezMPiE/edit#gid=0>
version: 0.1.0
phase: <discovery|alpha|beta|live>
# http://csrc.nist.gov/publications/nistpubs/800-60-rev1/SP800-60_Vol1-Rev1.pdf#page=23
information-types:
- <Dxx + name>

# criteria:
# http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf#page=27
confidentiality: <none|low|moderate|high>
integrity: <low|moderate|high>
availability: <low|moderate|high>
# https://pages.18f.gov/before-you-ship/ato/levels/
security-baseline: <open data|low|moderate|high>

system-type: <major|minor|general support>
level-of-identity-assurance: <0 if no authentication, or a link to SSP of the forthcoming identity system>
staff:
  authorizing-official:
    name: Aaron Snow
    title: 18F Executive Director
    org: General Services Administration
    unit: 18F
    email: 18F@gsa.gov
  system-owner:
    name: Noah Kunin
    title: 18F Infrastructure Director
    org: General Services Administration
    unit: 18F
    email: devops@gsa.gov
  system-management:
    name: Noah Kunin
    title: 18F Infrastructure Director
    org: General Services Administration
    unit: 18F
    email: devops@gsa.gov
  system-security-officer:
    name: Noah Kunin
    title: 18F Infrastructure Director
    org: General Services Administration
    unit: 18F
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

## Examples

* [ATF eRegs](https://github.com/18F/atf-eregs/blob/master/system-security-plan.yml)
* [Every Kid In a Park (EKIP) API](https://github.com/18F/ekip-api/blob/master/system-security-plan.yml)
