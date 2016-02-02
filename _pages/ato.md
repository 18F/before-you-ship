---
title: ATOs
---

An Authority to Operate (ATO) is a complex security review process that is required before you can deploy anything on the public web. See also: [the more formal definition](https://github.com/fisma-ready/introduction#introduction).

Before a system is made publicly accessible on the Internet, it must go through either the full ATO process or a 90-Day [Limited Authority to Operate](types/). Systems can be made available for use in an extremely limited capacity if they meet the [pre-authorization criteria](types/#pre-authorization).

While the ATO is the final (regulatory) step that's required before launching an application, you will want to **start the process as soon as possible** after your project gets off the ground.

### The ATO process

1. Read through the [walkthrough](walkthrough/).
1. Take a look at [the checklist](checklist/) to see the tasks broken down by who is responsible for each.

### Signing an authorization

Once the entire process is complete, GSA InfoSec will make a recommendation to the head of the GSA Office of Citizen Services and Innovative Technologies (OCSIT), our current Authorizing Official, for signature.

### Re-authorization

If the system substantively changes, then a new ATO will be warranted. Examples for triggers for a new ATO include changes to:

* Encryption methodologies
* Administrative functionality within the application
* The kinds of information you begin to store (e.g. [personally identifiable information](../security/pii/))

The 18F Infrastructure team will make this determination – please open a new issue if you think you have made a change that may warrant a new ATO.
