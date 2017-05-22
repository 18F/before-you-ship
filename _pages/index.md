---
title: Your guide to launching software at 18F
navtitle: Overview
permalink: /
---

The goal of this guide is to provide 18F staff with the information they need to launch software from a technical and compliance perspective. It explains requirements and best practices for projects at 18F, and the process of obtaining an ATO. **This site is a companion to [the Lifecycle section of 18F's Product Guide](https://product-guide.18f.gov/lifecycle-of-a-project/)**, which gives broader guidance.

**Read this guide early and often**, especially when you're starting to consider a future project launch or feature release. **This isn't a last-minute pre-launch checklist.**

### Key roles

- **Authorizing Official (AO)** The AO is ultimately responsible for determining if the risk of operating the system is acceptable, and if so, issuing an Authority to Operate (ATO) for that system. At 18F the Director of Infrastructure is the AO.
- **System Owner** The system owner is usually the product lead or tech lead of the project team. They will be named in the ATO documents and are the main contact during the evaluation process that leads up to an ATO.

### ATO status of Federalist sites

If you are publishing a new site through [Federalist](infrastructure/#federalist) and it's not connecting to any APIs or third-party services beyond public API calls from the browser (i.e. it's a simple static site), the site is considered part of that system, so it does not require its own ATO ([source](https://github.com/18F/before-you-ship/issues/95#issuecomment-174011747)). *Note: Technically, static site builders are just adding a collection of pages in an existing system. Therefore, from an ATO perspective, "sites" created through Federalist remain within the security boundary, and thus ATO.*
