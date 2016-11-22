---
title: Types of ATO
navtitle: Types
---

There are four tracks of authorization available:

* [Pre-authorization for internal government use](#pre-authorization)
* [90-day Lightweight Authority to Operate (LATO)](#day-authorization)
* [1-year Lightweight Authority to Operate (LATO)](#year-authorization)
* [Continuous Authority to Operate (cATO)](#continuous-authorization)

Choosing an authorization is an important decision. Work with your Infrastructure Lead and Product Owner to determine which authorization you will employ, and when. The Infrastructure Lead makes all final decisions and answers in writing (email, Slack, etc) any questions the team may have on how to meet the below objectives. Many situations may have no "right answer". It is up to the Infrastructure Lead to make a risk-based decision on what to do.

### Pre-authorization

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

### 90-day authorization

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
