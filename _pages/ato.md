---
title: ATOs
---

Every federal information system must go through NIST's [Risk Management Framework](background/) before it can be used to process federal information. This process culminates in a signed Authority to Operate (ATO) being issued. Because the Risk Management Process is a complex, multi-step process which will constrain the design and implementation of your system, you should start thinking about how it applies to your system _before_ you begin designing and implementing it. The steps of the Risk Management Process should be executed in parallel with other project activities. Please get in touch with the TTS Infrastructure Team as soon as your project gets funding so you can discuss which category of ATO will be required for your system, and understand what will be required to gain an ATO for it.

### Starting the ATO process

To start the ATO process, follow the [walkthrough](walkthrough/).

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

### ATO status of Federalist/Pages sites

If you are publishing a new site through [Federalist](../infrastructure/#federalist) or [18F Pages](../infrastructure/#f-pages) and it's not connecting to any APIs or third-party services (i.e. it's a simple static site), the site is considered part of that system, so it does not require its own ATO ([source](https://github.com/18F/before-you-ship/issues/95#issuecomment-174011747)). *Note: Technically, static site builders are just adding a collection of pages in an existing system. Therefore, from an ATO perspective, "sites" created through Federalist or 18F Pages remain within the respective security boundary, and thus ATO.*

