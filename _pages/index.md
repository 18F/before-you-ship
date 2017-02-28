---
title: Your guide to launching software at 18F
permalink: /
---

The goal of this guide is to provide 18F staff with the information they need to launch software from a technical and compliance perspective. It explains requirements and best practices for projects at 18F. **This site is a companion to [the Lifecycle section of 18F's Product Guide](https://pages.18f.gov/product-guide/lifecycle-of-a-project/)**, which gives broader guidance.

**Read this guide early and often**, especially when you're starting to consider a future project launch or feature release. **This isn't a last-minute pre-launch checklist.**

### Lifecycle of a Launch

To launch software you need an Authority to Operate (ATO). ATOs cover the important security reviews and approvals **required** for public government websites. They can sometimes take months to obtain, so you should start this process soon after a project begins. Review the [**overview of ATOs**](ato/) to start planning.

### Technical

* Exactly how big of a splashy launch are you planning? Is POTUS announcing it? Have you figured out what level of traffic you need to support? This should be coordinated between the engineers on your team, your client, and the Infrastructure Team.
* Is your project accessible and [Section 508](laws/508/) compliant? The team will need to incorporate this throughout the project, but you'll also need to set up a review at least two weeks before launch.
* How good is your code test coverage? Before shipping, you should have codecov badges on your GitHub repo READMEs and coverage should be above 90 percent (green). (This is not a perfect measure for code quality, but a helpful check.) The testing working group recommends reviewing your status early and often. _Ask #wg-testing if you have questions._
* Are your APIs up to [18F's API Standards](https://github.com/18f/api-standards)? _Ask the #wg-api if you have questions._
* Have you installed 18F's Google Analytics and [DAP](https://www.digitalgov.gov/services/dap/) on everything?
    * Learn more in our [Analytics Standards](https://github.com/18F/analytics-standards).
    * _Ask #g-analytics if you have questions._
* Make sure you have all the social media metadata and preview images.

---

How'd it go? Is this list missing anything important? [Submit a pull request](https://github.com/18f/before-you-ship) or [open an issue](https://github.com/18f/before-you-ship/issues/new)!
