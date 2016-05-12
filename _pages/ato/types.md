---
title: Types of ATO
navtitle: Types
---

There are three tracks of documentation available:

* [90-day Lightweight Authority to Operate (LATO)](#day-authorization)
* [1-year Lightweight Authority to Operate (LATO)](#year-authorization)
* [Continuous Authority to Operate (cATO)](#continuous-authorization)

### Pre-authorization

You may operate without authorization under the following conditions:

* The system is deployed to [cloud.gov](https://cloud.gov) or the [18F AWS East/West environment](../../infrastructure/aws/).
* The system does _not_:
    * interact with or change the state of any production Federal information system, whether it is operated by 18F or our Federal partners
    * collect or store any [sensitive PII](../../security/pii)
* The system is _only_ available to:
    * staff of the General Services Administration
    * other Federal staff / agencies, by one of:
        * IP CIDR block
        * some kind of auth mechanism
            * HTTP Basic Auth
            * OAuth (MyUSA)
            * etc.

Note that this last requirement can be skipped for [Open Data](../levels/#open-data-atos) systems once you initiate [the ATO process](../checklist/). This is greater incentive to do so early.

### 90-day authorization

Once you're ready to move beyond the restrictions of pre-authorization, you must go through the process to obtained a LATO for 90 Days. This authorization can cover any system in the Discovery, Alpha, or Beta phases.

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
* The 90 day ATO can be re-upped as long as the security boundary hasn’t changed.
    * The automatic scans must not show any new vulnerabilities.

### 1-year authorization

The 1 Year is inclusive of all the steps of [the 90 Day process](#day-authorization). A more thorough penetration test is done, which may reveal other vulnerabilities that will need to be resolved.

### Continuous authorization

Coming soon.
