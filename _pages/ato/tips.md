---
title: Tips
---

* As soon as you have a stable server that isn’t changing its security boundary (talk to the project developers about this, but it can be very early on), you should start this process. As long as there aren’t those significant changes, the tests will run periodically on any updates you make. At the very latest, start this process at least two months before launch. Do not commit to a launch date without coordinating with your AO on this first.
* One thing that will help the process is great documentation, which can mitigate some problems from occurring during the ATO process. Documentation, and specifically your README, should reflect a high level narrative of the architecture and data flows of the application. Questions to consider include:
    * What does it do?
    * How does it move information around?
    * What does it accomplish by doing it?
* For every release after your public launch, you should consider:
    * Accessibility reviews should be done for any changes.
    * Do you need to update your GitHub documentation?
* The DigitalGov team at GSA has collected a list of [Requirements for Federal Websites and Digital Services](http://www.digitalgov.gov/resources/checklist-of-requirements-for-federal-digital-services/) that you should familiarize yourself with.
* Exactly how big of a splashy launch are you planning? Is POTUS announcing it? Have you figured out what level of traffic you need to support? This should be coordinated between the engineers on your team, your client, and the Infrastructure Team.
* Is your project accessible and [Section 508](../../laws/508/) compliant? The team will need to incorporate this throughout the project, but you'll also need to set up a review at least two weeks before launch.
* How good is your code test coverage? Before shipping, you should have codecov badges on your GitHub repo READMEs and coverage should be above 90 percent (green). (This is not a perfect measure for code quality, but a helpful check.) The testing working group recommends reviewing your status early and often. _Ask #wg-testing if you have questions._
* Are your APIs up to [18F's API Standards](https://github.com/18f/api-standards)? _Ask the #wg-api if you have questions._
* Have you installed 18F's Google Analytics and [DAP](https://digital.gov/dap/) on everything?
    * Learn more in our [Analytics Standards](https://github.com/18F/analytics-standards).
    * _Ask #g-analytics if you have questions._
* Make sure you have all the social media metadata and preview images.
