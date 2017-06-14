---
title: General Security Standards
navtitle: Security
---

In the Federal government, the principal law governing the security of information systems is the Federal Information Security Management Act (FISMA). For more information on FISMA, check out the [FISMA Ready introduction](https://github.com/fisma-ready/introduction), a community project co-managed by 18F. Cloud.gov and the 18F Infrastructure team have done most of the heavy lifting with regards to FISMA, but it is still important to understand the context into which we ship.

Most of the security practices have been integrated into the [ATO](../ato) portion of this guide. Here are a few pointers to get you started:

* DevOps isn't a team at 18F, but a skillset. We are all responsible for the security and operations of our systems.
* The security of our users' information is paramount, even moreso when it is personally identifiable information (PII). The types of information your system may process helps determine the type of ATOs available to you and [whether or not you will need to conduct a Privacy Impact Assessment (PIA)](../privacy/).
* Be wary of systems that:
    * trust unsanitized information from the internet
    * do not encrypt data, both at rest and in transit
    * may be subject to privilege escalation
    * other items from the [OWASP Top 10](https://www.owasp.org/index.php/Top_10_2013-Top_10)
