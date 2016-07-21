---
title: ATOs
---

An Authority to Operate (ATO) is a complex security review process that is required before you can deploy anything on the public web. See also: [the more formal definition](https://github.com/fisma-ready/introduction#introduction).

Before a system is made publicly accessible on the Internet, it must go through either the full ATO process or a 90-Day [Lightweight Authority to Operate (LATO)](types/). Systems can be made available for use in an extremely limited capacity if they meet the [pre-authorization criteria](types/#pre-authorization).

While the ATO is the final compliance step that's required before launching an application, you will want to **start the process as soon as possible** after your project gets off the ground.

### Starting the ATO process

To start the ATO process, follow the [walkthrough](walkthrough/).

### ATO status of Federalist/Pages sites

If you are publishing a new site through [Federalist](../infrastructure/#federalist) or [18F Pages](../infrastructure/#f-pages) and it's not connecting to any APIs or third-party services (i.e. it's a simple static site), the site is considered part of that system, so it does not require its own ATO ([source](https://github.com/18F/before-you-ship/issues/95#issuecomment-174011747)). *Note: Technically, static site builders are just adding a collection of pages in an existing system. Therefore, from an ATO perspective, "sites" created through Federalist or 18F Pages remain within the respective security boundary, and thus ATO.*

### How to get re-authorization (get a new ATO)

If your system already has an ATO, there are two cases where it needs a new ATO: if you plan to make a substantive system change, or if your ATO is going to expire.


#### System changes that may require a new ATO

Your system may need a new ATO if your application team is planning to make substantive changes, such as changes to:

* Encryption methodologies
* Administrative functionality within the application
* The kinds of information you store (e.g. [personally identifiable information](../security/pii/))

The 18F Infrastructure team determines whether a system needs a new ATO. If you're planning a change that you think may require a new ATO, please [open a new issue in the Infrastructure repository](https://github.com/18F/Infrastructure/issues/new?title=ATO+re-authorization+for+%3Cproject%3E?) to explain your planned change, so they can evaluate whether it needs a new ATO.

If it needs a new ATO, follow the usual steps for getting an ATO, starting with [the checklist](checklist/). You may be able to reuse and update your existing ATO materials.

#### Replacing an expiring ATO with a new one

If your current ATO is going to expire, you'll need to replace that ATO with a new one. Follow the usual steps for getting an ATO, starting with [the checklist](checklist/). You may be able to reuse and update your existing ATO materials.