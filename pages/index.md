---
permalink: /
title: Introduction
---

This list is a general guide to review periodically, especially when you are starting to consider a potential future launch. It is not a comprehensive pre-launch checklist because many of the items listed here _should_ be completed or updated well before launch (and sometimes regularly). But just in case, here are some things to review.

* You need to consider your ATO early and often. At a very high level, they are governmental security reviews and approvals required for public websites. [Learn about requirements and timelines for ATO approval here.](https://pages.18f.gov/before-you-ship/ato/)
* Is [SSL](https://github.com/18f/https) enabled for everything? (Does everything start with https?)
* Is your project accessible and Section 508 compliant? Developers should first review [this checklist](https://pages.18f.gov/accessibility/checklist/). Once that is complete and at least **2 weeks** before launch, you should give Nick Bristow a heads up on slack and open an issue in the [Accessibility Reviews](https://github.com/18F/Accessibility_Reviews) repo using this template:
```markdown
* Name of the Project: 
* URL:
* Login details: 
* Date the review is needed: 
* Is this a DHS project?
```


* Are your project's details up to date on the [18F Dashboard](https://18f.gsa.gov/dashboard)? _The Dashboard team recommends you update this monthly, at a minimum._
* Are your APIs up to [18F API Standards](https://github.com/18f/api-standards)? _You can also talk to the API working group (#wg-api) if you have questions._
* Have you installed Google Analytics and [DAP](https://www.digitalgov.gov/services/dap/) on all public-facing web properties? [Analytics Standards](https://github.com/18F/analytics-standards) (_You can also talk to the analytics working group (#wg-analytics) if you have questions._
* Open Source is much more than just the license we choose. Are your GitHub repos (and their descriptions, READMEs, issues, etc.) up to our standards? [Open Source Style Guide](https://pages.18f.gov/open-source-guide/index.html).
* Review the [18F Guides](https://guides.18f.gov) (many of which are also specifically referenced above.)
* Once you have reviewed everything here, the DigitalGov team has collected a list of [Requirements for Federal Websites and Digital Services](http://www.digitalgov.gov/resources/checklist-of-requirements-for-federal-digital-services/) that you should familiarize yourself with. We recommend reviewing this last, because many of the requirements are explained or managed in the above guides and processes.
