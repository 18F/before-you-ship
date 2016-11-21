---
title: Types of ATO
navtitle: Types
---

In most cases, the two types of ATO that will be pursued for GSA systems are the *GSA Lightweight ATO (LATO)* and the *FedRAMP Agency ATO*. Systems that are under development can be operated without an ATO provided they fulfil the requirements for [pre-authorization for internal government use](#pre-authorization).

The [GSA LATO](#gsa-lato) is designed for systems built using agile methods that run on top of cloud infrastructure which has already received an ATO (such as AWS, Azure, and soon [cloud.gov](https://cloud.gov)). It's "lightweight" because only 24 NIST controls must be implemented in order to grant this type of ATO. It is initially valid for 90 days, but can be extended for longer periods with additional work.

However a GSA LATO is not suitable for systems we intend to hand over to other agencies to operate, or which will hold other agencies' information. This is because an ATO is agency specific. That is, a system that is granted an ATO by one agency cannot be used by another agency unless that agency also grants it an ATO. Since the LATO is a GSA invention, other agencies will not typically be able to use it as a basis for obtaining their own ATO.

The problem of ATOs being agency specific has led to a lot of duplicated work within government as, in theory, every agency must independently go through the entire [Risk Management Framework](../background) to grant an ATO to cloud infrastructure providers such as Amazon Web Services (AWS), Microsoft Azure, and Google Compute, as well as cloud software services such as Google G Suite, Microsoft Office 365, and SalesForce. The Federal Risk and Authorization Management Program (FedRAMP) program was designed to address this problem by providing "a standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services" which allows FedRAMP-compliant ATOs issued by one agency to be leveraged by others.

By pursuing a [FedRAMP Agency ATO](#fedramp-ato) for systems we intend to hand over to other agencies, or which hold other agencies' information (with the exception of open data), we can substantially reduce the compliance burden of our partner agencies.

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

*

Once you're ready to move beyond the restrictions of pre-authorization, you must go through the process to obtain a LATO for 90 Days. This authorization can cover any system in the Discovery, Alpha, or Beta phases.

You **must** have a 90 day authorization before violating _any_ of the restrictions in the section above.

The authorization is rolling, and can be renewed for an additional 90 days as long as you require additional testing. This essentially functions as our [Authority to Test](#authority-to-test).

You do not have to wait for the 90 days to complete before moving to a new authorization.

### Authority to Test

18F offers a 90-day Authority to Test security clearance process.

* Estimated to take approximately 2 weeks to get materials together
* Information security team has a service level agreement of 2 weeks to:
    1. Approve a completed [system security plan](../ssp/)
    1. Do the testing
    1. Give a 90 day authorization
* The 90 day ATO can be extended for an additional 90 days _once_, as long as the security boundary hasn’t changed.
    * The automatic scans must not show any new vulnerabilities.

### 1-year authorization

The 1 Year is inclusive of all the steps of [the 90 Day process](#day-authorization). Additional controls are assesed, and a more thorough penetration test is done, which may reveal other vulnerabilities that will need to be resolved before the system is put into operation.

### Continuous authorization

A system's compliance can be continuously monitored, rather than expiring and needing to be re-submitted for approval. This is the goal of the [Compliance Toolkit](https://github.com/18F/compliance-toolkit) project, but is not yet A Thing™.
