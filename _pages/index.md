---
title: Your guide to launching software at 18F
permalink: /
---

The goal of this site is to provide 18F staff with the information they need to launch software from a technical and compliance perspective. It explains requirements and best practices for projects at 18F, which may or may not apply to other teams inside or outside of government. **This site is a companion to [the Lifecycle section of 18F's Product Guide](https://pages.18f.gov/product-guide/lifecycle-of-a-project/)**, which gives broader guidance.

You need this if you're a product lead or technical lead, but since all project team members contribute to launches, everyone at 18F can benefit from reading it.

**Read this guide early and often**, especially when you're starting to consider a future project launch or feature release. **This isn't a last-minute pre-launch checklist.**

This page gives the big picture, and the left sidebar gives details about some of the key parts. Like most things at 18F, this guide is a user-contributed work in progress. Let us know [how to improve it](https://github.com/18F/before-you-ship/issues/new)!

### Compliance

Every project needs an Authority to Operate (ATO). ATOs cover the important security reviews and approvals **required** for public government websites. They can sometimes take months, so you should start this process very soon after a project begins. Review the [**overview of ATOs**](ato/) to start planning.

### Technical

* Exactly how big of a splashy launch are you planning? Is POTUS announcing it? Have you figured out what level of traffic you need to support? This should be coordinated between the engineers on your team, your client, and the Infrastructure Team.
* Is your project accessible and [Section 508](laws/508/) compliant? The team will need to incorporate this throughout the project, but you'll also need to set up a review at least two weeks before launch.
* How good is your code test coverage? Before shipping, you should have codecov badges on your GitHub repo READMEs and coverage should be above 90 percent (green). (This is not a perfect measure for code quality, but a helpful check.) The testing working group recommends reviewing your status early and often. _Ask #wg-testing if you have questions._
* Are your APIs up to [18F's API Standards](https://github.com/18f/api-standards)? _Ask the #wg-api if you have questions._
* Have you installed 18F's Google Analytics and [DAP](https://www.digitalgov.gov/services/dap/) on everything?
    * Learn more in our [Analytics Standards](https://github.com/18F/analytics-standards).
    * _Ask #g-analytics if you have questions._
* Open source is much more than just the license we choose. Are your GitHub repos (and their descriptions, READMEs, issues, etc.) up to our standards? Check out:
    * [The Open Source Style Guide](https://pages.18f.gov/open-source-guide/)
    * The [Writing Lab](https://github.com/18F/writing-lab) for help with documentation
    * [CFPB's open source checklist](https://github.com/cfpb/open-source-project-template/blob/master/opensource-checklist.md)
    * _Ask #wg-opensource if you have questions._
* Make sure you have all the social media metadata and preview images.

### Security and operations

* Review the [**security best practices**](security/), including [scanning](security/scanning/) and the [framework-specific guides](security/frameworks/).
* Is [SSL](https://github.com/18f/https) enabled for everything?
    * Do all of your URLs start with `https://`?
    * Does visiting your site with `http://` redirect to `https://`?
* Review the [**infrastructure best practices**](infrastructure/).
* Reach out to the #infrastructure team at least a month in advance of launch to give them a heads up.

### Also consider

* Do you have a metrics and measurements strategy? Who owns this?
* Review the [18F Guides](https://guides.18f.gov).
* Once you have reviewed everything here, the DigitalGov team at GSA has collected a list of [Requirements for Federal Websites and Digital Services](http://www.digitalgov.gov/resources/checklist-of-requirements-for-federal-digital-services/) that you should familiarize yourself with. We recommend reviewing this last, because many of the requirements are explained or managed in the above guides and processes.

### Post-launch releases

For every release after your public launch, you should consider: _(Explained in detail above.)_

* Accessibility reviews should be done for any changes.
* Do you need to update your GitHub documentation, or your `.about.yml`?

### Additional resources

* [thoughtbot's playbook](https://playbook.thoughtbot.com/#production)
* [pixel lab's website pre-launch checklist](http://thepixellab.com.au/the-website-pre-launch-checklist/)

---

How'd it go? Is this list missing anything important? [Submit a pull request](https://github.com/18f/before-you-ship) or [open an issue](https://github.com/18f/before-you-ship/issues/new)!
