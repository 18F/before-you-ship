---
title: General Security Standards
navtitle: Security
---

In the Federal government, the principal law governing the security of information systems is the Federal Information Security Management Act (FISMA). For more information on FISMA, check out the [FISMA Ready introduction](https://github.com/fisma-ready/introduction), a community project co-managed by 18F. Cloud.gov and the 18F Infrastructure team have done most of the heavy lifting with regards to FISMA, but it is still important to understand the context into which we ship.

Most of the security practices have been integrated into the [ATO](../ato) portion of this guide. Here are a few pointers to get you started:

* DevOps isn't a team at 18F, but a skillset. We are all responsible for the security of our systems.
    * _If you see something that isn't right or that you are unsure of, drop a note in #infrastructure._
* The security of our users information is of the utmost importance, even moreso when we hold [Personally Identifiable Information (PII)](../security/pii). This will have implications on the type of ATOs available to you and the necessity of a [Privacy Impact Assessment (PIA)](../laws/pia).
* The tools necessary to keep your application safe are available to everyone on the team. For more information, see the [Scanning](../security/scanning) section.
    * _If you need assistance, drop a note into #infrastructure or #cloud-gov-highbar._
* The [System Security Plan (SSP)](../ato/ssp) is foundational to getting through the ATO process efficiently. Get started on it at the beginning of the project, and ask questions on your [ATO issue](../ato/checklist).
* The majority of the types of scenarios you should be wary of are:
    * trusting unsanitized information from the internet
    * not encrypting both at rest and in transit
    * privilege escalation
    * other items from the [OWASP Top 10](https://www.owasp.org/index.php/Top_10_2013-Top_10)
