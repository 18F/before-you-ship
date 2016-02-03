---
title: ATO Walkthrough
navtitle: Walkthrough
parent: ATOs
---

### Step 0 - Consult 18F Infrastructure

As soon as you begin developing an [alpha](https://18f.gsa.gov/dashboard/stages/#alpha) (post [Intake](https://pages.18f.gov/intake/), [Agreement Financing](https://pages.18f.gov/intake/funding-and-iaa/), and [Discovery](https://18f.gsa.gov/dashboard/stages/#discovery)) you should consult with [18F Infrastructure](https://github.com/18F/handbook/blob/staging/articles/2-about-us/teams/infrastructure.md) on the possible risk impacts of your project and the system's boundaries, which will provide important context and scoping for the rest of the risk management framework.

### Step 1 - Categorize

See the [Levels](../levels/) page.

### Step 2 - Select controls

This is also known as selecting the "baseline".

* [NIST 800-53 Security Control Baselines](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r4.pdf#page=109)
* Select from:
    * 18F FISMA Open Data baseline (ex: beta.fec.gov) (`none | low | low`)
    * 18F FISMA Moderate (`moderate | moderate | moderate`) (ex: cloud.gov, MyUSA)
    * 18F FISMA High (`high | high | high`) will soon be available, modeled after the new Identity platform
* If your system does not fall into one of these buckets (for example, you have a `low | moderate | moderate` system) you must create a new baseline. You will do this by making a new certification schema in Compliance Masonry.
* it is possible to downgrade the level for any particular control, as long as it doesn't affect any other controls with a higher level (e.g. account management can be low if it doesn't allow you to edit confidential data)
* note that there aren't that many specifics around what each level means for each control

### Step 3 - Implement the controls

* Creating a Compliance Masonry schema for your system should tell you what controls you need are already handled via encircling systems, and are unnecessary for you to replicate. For example, all of the Physical and Environmental Protection (PE controls in NIST 800-53) are already met by the FedRAMP Authorization Controls on 18F's infrastructure as a service (IaaS) layer, in Amazon Web Services (AWS). See the [Infrastructure](../../infrastructure/) page for more information.
* Any controls that are not met by either the IaaS layer or 18F's platform as a service (PaaS) layer, cloud.gov, should be implemented by your application.
* Most web frameworks (Rails, Django, etc) already include the vast majority of these application level controls and best practices. The more custom functionality you implement, the more attention you should pay to the new attack surface area you create. The majority of the types of scenarios you should be wary of is trusting unsanitized information from the internet, encrypting both at rest and in transit, and privilege escalation. Increasingly, cloud.gov will take care of these controls for you.
* If you need to implement controls that are not implemented elsewhere, research best practices on Google, StackOverflow etc, ask your colleagues if they have advice, then come to in #devops.
* In Compliance Masonry, there will be a base set of controls and how they are fulfilled by the underlying system (e.g. Rails), so the Masonry file created for your project will only be the “overrides”.
    * One or two lines per control (or better yet, a link)

### Step 4 - Assess the controls

In other words, "test the controls". To do so, run the [security scans](../../security/scanning/).

### Step 5 - Authorize the system

Fill out the [System Security Plan (SSP)](../ssp/) and link from your project's [checklist](../checklist/) issue. The designated AO will conduct a quality assurance check on your materials.

You should send materials to the AO as soon as the security boundary of the system is fixed and implemented. This is inherently a subjective judgement call. If your are uncertain as to your system's security boundary, you should consult with 18F Infrastructure early in your development process. If your system is providing novel or risky functions, or handling extremely sensitive data, you should also consult with 18F Infrastructure early, long before you start the risk management process.

### Step 6 - Continuously monitor the controls

There are several ways to ensure that your system remains compliant:

* Set up [static analysis](../../security/static-analysis/) to run on an ongoing basis through one of the hosted [services](../../security/static-analysis/#services).
* Keep your `about.yml`, `system-security-plan.yml`, and security-related documentation up-to-date.

In the future, there will be a matching process on the Infrastructure team side to ensure your system is [continually authorized](../types/#continuous-authorization).
