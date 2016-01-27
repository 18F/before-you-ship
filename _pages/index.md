---
title: Introduction
permalink: /
---

The goal of this site is to provide 18F staff with the information they need to launch software. It's a mix of requirements and best practices for projects at 18F, which may or may not be applicable for other teams inside or outside of government.

* **This list is:**
    * A general guide to review early and often
    * _Especially_ important when you're starting to consider a future project launch or feature release
* **This list is not:**
    * A last-minute pre-launch checklist, despite the "Before You Ship" title

Like with most things in 18F, this guide is a user-contributed work in progress. Let us know [how to improve it!](https://github.com/18F/before-you-ship/issues/new)

### Compliance

You need an Authority to Operate (ATO). Essentially, ATOs cover the important security reviews and approvals **required** for public government websites. They can take months (albeit rarely). You should review this [overview of ATOs](ato/) and these [tips](ato/tips/) to start planning.

### Outreach

* Add your launch plans and project milestones to the 18F Events calendar (a shared Google calendar). This helps several teams, especially the #outreach team. Rough estimates are welcome; the earlier you can update the calendar, the better.
* Are you doing a big, splashy public launch? We recommend that you start releasing the site to more and more users slowly in advance of the announcement. This will require planning with public affairs folks who want to help you avoid getting scooped, but it's also an incredibly important way to prevent last minute problems. Additionally, make sure at least one engineer is available to troubleshoot &mdash; somewhere with reliable internet &mdash; during an announcement (instead of, for example, on stage at the White House conference center).
* Are your project's details up to date on the [18F Dashboard](https://18f.gsa.gov/dashboard)?
    * The dashboard team recommends you create this at the beginning of your project and update it monthly.
    * Instructions for adding your project will be [here](https://github.com/18F/dashboard/#creating-content-for-your-dashboard-entry), but in the meantime, it will be easiest to ask for help in the #dashboard channel.
* You need to share details about your project and develop a communications plan with our outreach team (who will also help coordinate with the necessary GSA front offices, such as press and congressional affairs). To do this, complete this [communications plan template](https://docs.google.com/document/d/1xc7H6m7lfesCN-phJGvGSDPmtoinB5sM9KAA8deMNTQ/edit).
* Share the good news about your launch with everyone at 18F by telling Kara DeFrias or Leah Gitter that you'd like to announce something at the next Tuesday all hands meeting.

### Client expectations

* Exactly how big of a splashy launch are you planning? Is POTUS announcing it? Have you decided on the level of spikes in traffic your budget supports? You should coordinate this with your engineers, client, and the Infrastructure Team.
* Will your team need to work more than 40 hours in a week to support the launch? You should start the [comp time approvals process before launch, which is described in our handbook](https://github.com/18F/handbook/blob/staging/articles/5-training-and-professional-development/classes/benefits.md#comp-time). We take this seriously.
* What will you do if something breaks? Have you talked to your client about their expectations of up time and their budget? 18F currently does not offer Service Level Agreements (SLAs), which normally include agreements about uptime and response time to downtime, but you should have an escalation protocol in place. Here is an example from the [betaFEC](https://beta.fec.gov) team.

    > 18F does not officially offer Service Level Agreements (SLAs), but we would still like to clarify expectations of up time for our client and users:
    >
    > Three main components are responsible for hosting [beta.fec.gov](https://beta.fec.gov) and its data: the betaFEC web app, cloud.gov, and api.data.gov. These services are all under constant monitoring and set up for low or zero-downtime deployments, and we expect them to operate continuously. Our data is updated nightly. Cloud.gov's current status and history of uptime is available at https://cloudgov.statuspage.io and api.data.gov's is at https://synthetics.newrelic.com/report/UIoF9.
    >
    > Problems should be reported by opening an issue on [GitHub](https://github.com/18F/openfec). If you would like to escalate the issue, you can reach out to your 18F Product Manager by [texting/calling (555)555-5555/slack DMing/emailing/etc.]. We may not address issues outside of business hours until the next day.

### Technical

* Is your project accessible and [Section 508](laws/508/) compliant? The team will need to incorporate this throughout the project, but you'll also need to set up a review at least two weeks before launch.
* How good is your code test coverage? Before shipping, you should have codecov badges on your GitHub repo READMEs and coverage should be above 90 percent (green). (This is not a perfect measure for code quality, but a helpful check.) The testing working group recommends reviewing your status early and often. _Ask #wg-testing if you have questions._
* Are your APIs up to [18F's API Standards](https://github.com/18f/api-standards)? _Ask the #wg-api if you have questions._
* Have you installed 18F's Google Analytics and [DAP](https://www.digitalgov.gov/services/dap/) on everything?
    * Learn more in our [Analytics Standards](https://github.com/18F/analytics-standards).
    * _Ask #wg-analytics if you have questions._
* Open source is much more than just the license we choose. Are your GitHub repos (and their descriptions, READMEs, issues, etc.) up to our standards? Check out:
    * [The Open Source Style Guide](https://pages.18f.gov/open-source-guide/)
    * The [Writing Lab](https://github.com/18F/writing-lab) for help with documentation
    * [CFPB's open source checklist](https://github.com/cfpb/open-source-project-template/blob/master/opensource-checklist.md)
    * _Ask #wg-opensource if you have questions._
* Make sure you have all the social media metadata and preview images.
* Set up [security scanning](security/scanning/).
* Look through the [framework-specific guides](security/frameworks/).

### Operations

* Is [SSL](https://github.com/18f/https) enabled for everything?
    * Do all of your URLs start with `https://`?
    * Does visiting your site with `http://` redirect to `https://`?
* Reach out to the #devops team at least a month in advance of launch to give them a heads up.
* Take a look at the [infrastructure best practices](infrastructure/).

## Also consider

* Are you addressing user needs? How will you validate this a few months after launch?
* Do you have a metrics and measurements strategy? Who owns this?
* Review the [18F Guides](https://guides.18f.gov).
* Once you have reviewed everything here, the DigitalGov team at GSA has collected a list of [Requirements for Federal Websites and Digital Services](http://www.digitalgov.gov/resources/checklist-of-requirements-for-federal-digital-services/) that you should familiarize yourself with. We recommend reviewing this last, because many of the requirements are explained or managed in the above guides and processes.

### Post-launch releases

For every release after your public launch, you should consider: _(Explained in detail above.)_

* Accessibility reviews should be done for any changes.
* Add project milestones and new features to the events calendar and 18F dashboard.
* Should we promote the new features with a blog post, tweets, etc?
* Do you need to update your GitHub documentation?
* Planning for comp time might be necessary, especially in case there are problems.

### Additional resources

* [thoughtbot's playbook](https://playbook.thoughtbot.com/#production)
* [pixel lab's website pre-launch checklist](http://thepixellab.com.au/the-website-pre-launch-checklist/)

---

How'd it go? Is this list missing anything important? [Submit a pull request](https://github.com/18f/before-you-ship) or [open an issue](https://github.com/18f/before-you-ship/issues/new)!
