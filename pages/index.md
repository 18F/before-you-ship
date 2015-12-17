---
permalink: /
title: Introduction
---

Everything on this list should be considered early and often. This list is: a general guide to review periodically, _especially_ when you are starting to consider a potential future launch or releasing new features. This list is not: a final pre-launch checklist.

* You need an Authority to Operate (ATO). At a very high level, it covers the security reviews and approvals required for public government websites. [Learn about requirements and timelines for ATO approval here.](https://pages.18f.gov/before-you-ship/ato-and-you/)
* Is [SSL](https://github.com/18f/https) enabled for everything? (Does everything start with https?)
* Is your project accessible and Section 508 compliant? Developers should first review [this checklist](https://pages.18f.gov/accessibility/checklist/). Once that is complete and at least **2 weeks** before launch, you should give Nick Bristow a heads up on slack and open an issue in the [Accessibility Reviews](https://github.com/18F/Accessibility_Reviews) repo using this template:
```markdown
* Name of the Project: 
* URL:
* Login details: 
* Date the review is needed: 
* Is this a DHS project?
```
* Reach out to the #devops team at least a month in advance of launch to give them a heads up. **They also have infrastructure review checklist coming soon to PM guide and here. For now,** [a trello board with required items in bold](https://trello.com/c/8o8LQrbI/273-checklist-of-prodops-best-practices-for-app-teams-with-cloud-gov-specifics) and these [cloud.gov docs about deployment](https://docs.cloud.gov/apps/deployment/).
* How good is your code test coverage? Before shipping, you should have codecov badges on your GitHub repo READMEs and coverage should be above 90% (green). (This is not an accurate measure for code quality, but a helpful check.) _The testing working group recommends reviewing your status early and often. Refer to [this PM guide section]() or the testing working group #wg-testing for more information about this._
* What will you do if something breaks? Have you talked to your client about their expectations of up time and their budget? 18F currently does not offer Service Level Agreements (SLAs) where we guarantee uptime, but you should have an "escalation protocol" in place. Here is an example from the [betaFEC](https://beta.fec.gov) team.

> 18F does not officially offer Service Level Agreements (SLAs), but we would still like to clarify expectations of up time for our client and users:

> Three main components are responsible for hosting [beta.fec.gov](https://beta.fec.gov) and its data: the betaFEC web app, cloud.gov, and api.data.gov. These services are all under constant monitoring and set up for low or zero-downtime deployments, and should be expected to operate continuously. Data is updated nightly. Cloud.gov's current status and history of uptime is available at https://cloudgov.statuspage.io and api.data.gov's is at https://synthetics.newrelic.com/report/UIoF9.

> Problems should be reported by opening an issue on https://github.com/18F/openfec. If you would like to escalate the issue, you can reach out to your 18F Product Manager. Reports outside of business hours may not be addressed until the next day.

* Are your project's details up to date on the [18F Dashboard](https://18f.gsa.gov/dashboard)? For now, the best way to do this is to reach out to the #dashboard slack channel. **update coming soon** _The dashboard team recommends you create this at the beginning of your project and update it monthly._
* Are your APIs up to [18F API Standards](https://github.com/18f/api-standards)? _You can also talk to the API working group (#wg-api) if you have questions._
* Have you installed Google Analytics and [DAP](https://www.digitalgov.gov/services/dap/) on all public-facing web properties? [Analytics Standards](https://github.com/18F/analytics-standards) (_You can also talk to the analytics working group (#wg-analytics) if you have questions._
* Open Source is much more than just the license we choose. Are your GitHub repos (and their descriptions, READMEs, issues, etc.) up to our standards? [Open Source Style Guide](https://pages.18f.gov/open-source-guide/index.html).
* You need to update our outreach and communications front office teams. [Complete this document](https://docs.google.com/document/d/1xc7H6m7lfesCN-phJGvGSDPmtoinB5sM9KAA8deMNTQ/edit).
* Make sure you have all the social media metadata and preview images.

Also consider:
* Are you addressing user needs?  How will you validate this a few months after launch?
* Do you have a metrics and measurements strategy? Who owns this?
* Review the [18F Guides](https://guides.18f.gov) (many of which are also specifically referenced above.)
* Once you have reviewed everything here, the DigitalGov team has collected a list of [Requirements for Federal Websites and Digital Services](http://www.digitalgov.gov/resources/checklist-of-requirements-for-federal-digital-services/) that you should familiarize yourself with. We recommend reviewing this last, because many of the requirements are explained or managed in the above guides and processes.
