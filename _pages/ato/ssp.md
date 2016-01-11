---
title: System Security Plan
---

As described in [the NIST guide](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf#page=7):

> The purpose of the system security plan is to provide an overview of the security requirements of the system and describe the controls in place or planned for meeting those requirements.

GSA provides a [Word template](http://www.gsa.gov/graphics/staffoffices/System_Security_Plan_Template_072312_508.docx), but for 18F's purposes, we create a machine-readable version.

We are working on a tool to help generate SSPs – check out [Compliance Masonry](https://github.com/opencontrol/compliance-masonry).

### Template

Add the following to your repository as `system-security-plan.yml`, with the information in the `<angle brackets>` filled in. Note that there are `TODO`s in some places where we need more documentation – for now, reach out to Noah Kunin for help with what should be filled in there.

```yaml
---
name: <project name>
# this should match the infrastructure Tag
uniqueID: <partner-acronym>-<beginning-of-agreement>-<end-of-agreement>-<iaa-number>
version: 0.1.0
phase: <discovery|alpha|beta|live>
information-types:
- <TODO>

# criteria:
# http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf#page=27
confidentiality: <none|open data|low|moderate|high>
integrity: <open data|low|moderate|high>
availability: <open data|low|moderate|high>
# https://pages.18f.gov/before-you-ship/ato/levels/
security-baseline: <open data|low|moderate|high>

system-type: <major|minor|general support>
level-of-identity-assurance: <TODO>
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
- <links to repositories>
diagram: <link to architecture diagram>
network-architecture: <TODO>
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
