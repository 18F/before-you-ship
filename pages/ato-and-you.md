---
title: Your ATO
permalink: /ato/
---

An Authority to Operate (ATO) is a complicated security review process that is required for deploying any web service on the public web. [You can learn more about ATOs here](https://pages.18f.gov/before-you-ship/ato/)

First, make sure that your project is not more complicated than the typical Open Data ATO. The following are signs that your ATO process will be more complicated and you should consult Noah when you begin planning:
* Anytime you touch Sensitive PII (see explanation: https://hub.18f.gov/standards/aws/)
* Any authentication?
* Any authorization?
* Is this the only place in the world you can do x? Is that x fundamental to what that agency does? (e.g. EPA tracking hazardous waste)
* Is the data not open?

If you project is none of the above, you will likely be able to get an Open Data ATO, which is less complicated. 

Second, as soon as you have a stable server that isn’t changing its security boundary (talk to your devs about this, but it can be very early on), you should start this process. As long as there aren’t those significant changes, the tests will run periodically on any updates you make. At the very latest, start this process at least 2 months before launch. Do not commit to a launch date without coordinating with Noah Kunin on this first.

Third, reach out to Noah to make sure he’s aware that you're about to start the application process (detailed below). You will know when you can set your launch date about six weeks later (likely sooner, but not reliably).

## Steps to obtain an ATO

To start the security clearance process, [create an issue in the DevOps repository](https://github.com/18F/DevOps/issues/new?title=ATO+for+%3Cproject%3E) using this template. Make sure to replace the placeholders at the top.

```markdown
* **Main repository:** <url>
* **Running libraries:**
    * <url>
    * ...
* **Site:** <url>
* **Launch date/deadline:** <date>

## TODOs

### High-level

* [ ] Select the security controls
* [ ] Implement the controls

### Project team

* [ ] Add an [`about.yml`](https://github.com/18F/about_yml) for the main repository
* [ ] Set up static analysis tool(s)
    * [ ] Add badges to the README
* [ ] Add a `system-security-plan.yml` to the repository
* [ ] Scan the system
    * [ ] Run Nessus
    * [ ] [Run OWASP ZAP](https://pages.18f.gov/before-you-ship/zap/)
* [ ] Resolve any visible security issues, re-running the scans as needed
* [ ] Add the issue-free scan reports to [the `ATOs` folder in Google Drive](https://drive.google.com/a/gsa.gov/folderview?id=0BynIxtx-CfkdckljM3BPSkdQT1U&usp=sharing)
* [ ] Update relevant documentation, primarily the README
    * [ ] Draw a top-level diagram of the system architecture

### Information Security team

* [ ] Conduct a preliminary code review
* [ ] Final review
* [ ] Risk acceptance signatures (ATO)

---

See the [Before You Ship](https://pages.18f.gov/before-you-ship/) site for more information.
```

Feel free to add a username after each task to assign it, or make corresponding items in your issue tracker. After the DevOps issue is created, DevOps will schedule a time to meet with you and discuss the ATO.
