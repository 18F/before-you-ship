---
title: Types of ATO
navtitle: Types
---

Choosing an authorization is an important decision. Work with your Infrastructure Lead and Product Owner to determine which authorization you will employ, and when. The Infrastructure Lead makes all final decisions and answers in writing (email, Slack, etc) any questions the team may have on how to meet the below objectives. Many situations may have no "right answer". It is up to the Infrastructure Lead to make a risk-based decision on what to do.

In most cases, the two types of ATO that will be pursued for GSA systems are the *GSA Lightweight ATO (LATO)* and the *FedRAMP Agency ATO*. Systems that are under development can be operated without an ATO provided they fulfil the requirements for [pre-authorization for internal government use](#conditions-for-pre-authorization).

The [GSA LATO](#gsa-lato) is designed for systems built using agile methods that run on top of cloud infrastructure which has already received an ATO (such as AWS, Azure, and soon [cloud.gov](https://cloud.gov)). It's "lightweight" because only 24 NIST controls must be implemented in order to grant this type of ATO. It is initially valid for 90 days, but can be extended for longer periods with additional work. The GSA LATO is a good option for systems we intend to own and operate operate ourselves.

However a GSA LATO is not suitable for systems we intend to hand over to other agencies to operate, or which will hold other agencies' information. This is because an ATO is agency specific. That is, a system that is granted an ATO by one agency cannot be used by another agency unless that agency also grants it an ATO. Since the LATO is a GSA invention, other agencies will not typically be able to use it as a basis for obtaining their own ATO.

The problem of ATOs being agency specific has led to a lot of duplicated work within government as, in theory, every agency must independently go through the entire [Risk Management Framework](../background) to grant an ATO to cloud infrastructure providers such as Amazon Web Services (AWS), Microsoft Azure, and Google Compute, as well as cloud software services such as Google G Suite, Microsoft Office 365, and SalesForce. The Federal Risk and Authorization Management Program (FedRAMP) program was designed to address this problem by providing "a standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services" which allows FedRAMP-compliant ATOs issued by one agency to be leveraged by others.

By pursuing a [FedRAMP Agency ATO](#fedramp-agency-ato) for systems we intend to hand over to other agencies, or which hold other agencies' information (with the exception of open data), we can substantially reduce the compliance burden of our partner agencies.

### Conditions for pre-authorization

You may operate without further authorization, based on our approved pre-existing security authorization, if all of the following conditions are met:

* The system is deployed to [cloud.gov](https://cloud.gov) or the [18F AWS East/West environment](../../infrastructure/aws/).
* The system does _not_:
    * interact with or change the state of any production Federal information system, whether it is operated by 18F or our Federal partners
    * collect or store any [sensitive PII](../../security/pii)
    * is not the canonical source of any "production" data
* The system is _only_ available to:
    * staff of the General Services Administration
    * other Federal staff / agencies, by one of:
        * IP CIDR block
        * some kind of auth mechanism
            * HTTP Basic Auth (one set of credentials shared amonst the team is fine - please send them through [Fugacious](https://fugacious.18f.gov/))
            * OAuth ([cloud.gov authentication](https://docs.cloud.gov/apps/leveraging-authentication/), or [GitHub authentication](https://developer.github.com/v3/oauth/) limited to a particular organization)
            * etc.

Note that this last requirement can be skipped for [Open Data](../levels/#open-data-atos) systems once you initiate [the ATO process](../checklist/). This is greater incentive to do so early.

### GSA LATO

The GSA LATO process is described in a [procedural guide](https://insite.gsa.gov/portal/content/627230) which can be accessed from [Insite](https://insite.gsa.gov/portal/content/627230) (search for "14-68"). The GSA LATO is initially valid for 90 days. With additional work it can be extended up to a 1 year period for a moderate impact system, or up to a 3 years period for a low impact system.

In order to get a 90 day LATO, you must:

* Work with your Infrastructure Lead to complete sections 1-12 of the [LATO SSP](https://insite.gsa.gov/portal/getMediaData?mediaId=693530). This should be done as soon as the high level architecture of the system is stable. Note that your Infrastructure Lead should review your architecture early on before any final design decisions are made.
* Set up [scanning](../../security/scanning/) for your project.
* The Infrastructure Leads will prioritize your ATO based on available capacity.
* Once your ATO has been prioritized, the Infrastructure Lead will work with an ISSO in GSA OCISO to create a [project plan](https://insite.gsa.gov/portal/getMediaData?mediaId=693530) to schedule the security testing activities necessary to obtain GSA CISO concurrence.
* Security testing will commence. This process typically takes 2 weeks. The latest scans should be passed to the OCISO team as part of this process. Testing may reveal problems that require fixes as part of this process.
* Once the security test is successfully complete, the CISO will issue concurrence to the AO, who will issue an ATO for the system.

The 90-day ATO can be renewed once for an additional 90 days. However you do not have to wait for the 90 days to complete before moving to a 1 year authorization.

The 1 Year is inclusive of all the steps above. However additional sections of the SSP must be completed, additional controls are assessed, and a more thorough penetration test is done which may reveal other vulnerabilities that will need to be resolved before the ATO is granted.

### FedRAMP Agency ATO

At present we are awaiting the JAB P-ATO for cloud.gov. Once that is in hand, we provide more information on the FedRAMP Agency ATO process.
