---
title: Types of ATO
navtitle: Types
---

In most cases, the types of ATO that will be pursued for GSA systems are the *GSA Lightweight ATO (LATO)*. The GSA LATO process is described in a guide on [Insite](https://insite.gsa.gov/topics/information-technology/security-and-privacy/it-security/it-security-procedural-guides) (search for "Lightweight Security Authorization Guide" on that page). Systems that are under development must fulfill the requirements for [pre-assessment for internal government use](#conditions-for-pre-assessment).

The GSA LATO is designed for **Low** and **Moderate** impact [level](../levels/) systems built using agile methods that run on top of cloud infrastructure which has already received an ATO (such as AWS, Azure, and [cloud.gov](https://cloud.gov)). It is "lightweight" because it represents a tailored subset of the hundreds of controls in NIST Special Publication (SP) 800-53.

 **Low** impact system ATOs are valid for 3 years. **Moderate** impact system ATOs are valid for 1 year. The Authorizing Official (AO) and Chief Information Security Officer (CISO) may sometimes grant a 90-day ATO, on a case by case basis. The default expectation is to avoid 90-day ATOs whenever possible, since they make more work for everyone.

### Conditions for pre-assessment

_Previously known as "pre-authorization"._

You may operate without further authorization, based on our approved pre-existing security authorization, if all of the following conditions are met:

* The system is deployed to [cloud.gov](https://cloud.gov) or the [18F AWS East/West environment](../../infrastructure/aws/).
* The system does _not_:
    * interact with or change the state of any production Federal information system, whether it is operated by TTS or our Federal partners
    * collect or store any sensitive [personally identifiable information (PII)](../../privacy/)
    * is not the canonical source of any "production" data
* The system is _only_ available to:
    * staff of the General Services Administration
    * other Federal staff / agencies, by one of:
        * IP CIDR block
        * some kind of auth mechanism
            * HTTP Basic Auth (one set of credentials shared amonst the team is fine)
            * OAuth ([cloud.gov authentication](https://docs.cloud.gov/apps/leveraging-authentication/), or [GitHub authentication](https://developer.github.com/v3/oauth/) limited to a particular organization)
            * etc.

For systems where _all_ of the information in the system is already publicly available and is non-confidential, the last step can be skipped once you have begun your ATO assesment with GSA IT.
