---
title: ATO Walkthrough
navtitle: Walkthrough
parent: ATOs
---

### Step 0 — Consult 18F Infrastructure

As soon as you begin developing an [alpha](https://18f.gsa.gov/dashboard/stages/#alpha) (post [Intake](https://pages.18f.gov/intake/), [Agreement Financing](https://pages.18f.gov/intake/funding-and-iaa/), and [Discovery](https://18f.gsa.gov/dashboard/stages/#discovery)), [create your ATO checklist](../checklist/) to begin the ATO process and set up a tracking mechanism for your ATO. You can ask questions in your checklist thread to understand the specific considerations for your system.

### Step 1 — Categorize

Categorize your system's impact levels using the [ATO Levels](../levels/) guide.

### Step 2 — Select controls

Your system's baseline will determine the "controls" you need to implement. **"Controls" are individual security requirements** laid out by the National Institute of Standards and Technology (NIST) — for a list of them, see the [Controls](../controls/) page. [NIST 800-53 Table D-2](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r4.pdf#page=109) shows how each control maps to a baseline.

If your system's impact levels don't match one of the "overall levels" listed  at [Levels](../levels/) (for example, you have a `low | moderate | moderate` system), you need to create a new baseline by making a new [certification schema](https://github.com/opencontrol/schemas#certifications) in [Compliance Masonry](https://github.com/opencontrol/compliance-masonry). Do this early on in your project. It's possible to downgrade the level for any particular control, as long as it doesn't affect any other controls with a higher level (e.g. account management can be `low` if it doesn't allow you to edit confidential data). Note that there aren't that many specifics around what each level means for each control.

### Step 3 — Implement the controls

This step is essentially "state how your system meets each of the regulations". Using established web frameworks (Rails, Django, etc.) and hosting in cloud.gov/AWS take care of a lot of the lower-level controls and security best practices for you, so you only need to be concerned with your application's custom code/configuration. This custom code/configuration is known as the "attack surface". For background:

1. [Read the Infrastructure section.](../../infrastructure/)
1. [Read the Security section.](../../security)

#### Compliance Masonry

The [Compliance Masonry](https://github.com/opencontrol/compliance-masonry) YAML file uses structured data to state how each control is one of the following:

* Not relevant to the system
* Relevant to the system, and is one of the following:
    * Taken care of by (in Masonry, inherited from) one of:
        * The platform (cloud.gov)
        * The framework
        * The authorization layer
        * Etc.
    * Implemented by you
    * Not yet taken care of

An "inherited" control would be something like FedRAMP requiring that fire extinguishers be present near the servers, which is something that AWS needs to worry about for _their_ compliance, and we don't need to re-explain when launching an application hosted there. Your Masonry file essentially contains the "overrides".

The controls that are _not_ inherited from an underlying system must be listed in your Masonry file with a short explanation ("narrative"), and "implemented" before the system can receive an ATO. "Implementation" in the compliance sense is the same as in the code sense: ensure that the system meets that requirement, based on current industry best practices.

### Step 4 — Assess the controls

In other words, "verify that your system is secure". To do so, run the [security scans](../../security/scanning/).

### Step 5 — Authorize the system

The full list of data and functions in and of the system (in government parlance "mission based information types" and "delivery mechanisms") must be itemized in structured data. While the data types are obviously arbitrary and custom to each system we produce, the government has a formalized data set of mission functions that should be mapped to the system via NIST 800-60. For a Rails app, for example, this can simply be a link to the `db/schema.rb` file on GitHub.

Fill out the [System Security Plan (SSP)](../ssp/) and link from your project's [checklist](../checklist/) issue. The designated AO will conduct a quality assurance check on your materials.

You should send materials to the Authorizing Official (AO) as soon as the security boundary of the system is fixed and implemented (i.e. none of the [categorization](../levels) is changing). This is a judgement call. If your are uncertain as to your system's security boundary, you should consult with 18F Infrastructure early in your development process. If your system is providing novel or risky functions, or handling extremely sensitive data, you should consult with 18F Infrastructure as early as possible.

#### Signing an authorization

Once all of the materials are prepared and the system is considered "ready" by the Authorizing Official, they will sign the ATO.

### Step 6 — Continuously monitor the controls

There are several ways to ensure that your system remains compliant:

* Set up [static analysis](../../security/static-analysis/) to run on an ongoing basis through one of the hosted [services](../../security/static-analysis/#services).
* Set up [automated vulnerability scanning](../../security/dynamic-scanning/#automated-scanning).
* Keep your `about.yml`, `system-security-plan.yml`, and security-related documentation up-to-date.
