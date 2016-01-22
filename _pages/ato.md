---
title: ATOs
---

An Authority to Operate (ATO) is a complicated security review process that is required before you can deploy anything on the public web. Before a system is made publicly accessible on the Internet, it must go through either the full ATO process or a 90-Day [Authority to Test](types/). If either are not yet complete, the system must have some level of authentication required for a user to enter.

As soon as your project gets off the ground, you will want to create an [ATO checklist](checklist/) and a [System Security Plan](ssp/). Neither need to be fully complete until you are ready for the ATO to be signed, but your life will be easier if you start sooner than later.

### The ATO process

While you’re in the ATO process, the following things will occur. These are largely done by the CIO shop in tandem with the 18F DevOps team, but may create some requirements for your team.

1. Once the technical architecture is stable, create a [System Security Plan (SSP)](ssp/).
1. Once the SSP is complete, the system will be [scanned](../security/scanning/) in several ways.
1. Information Security finalizes the SSP
1. If all of this is completed, GSA Information Security signs and grants an ATO for a [one year term](types/#year-authorization).

See [the checklist](checklist/) to see these tasks broken down.

### Signing an authorization

Once the entire process is complete, GSA InfoSec will make a recommendation to the head of the GSA Office of Citizen Services and Innovative Technologies (OCSIT), our current Authorizing Official, for signature.

### Re-authorization

If the system substantively changes, then a new ATO will be warranted. Examples for triggers for a new ATO include changes to:

* Encryption methodologies
* A web framework having new backend administrative frameworks
* The kinds of information you begin to store (e.g. personally identifiable information)

The 18F DevOps team will make this determination – please open a new issue if you think you have made a change that may warrant a new ATO.
