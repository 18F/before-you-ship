---
title: ATOs, the 18F way
permalink: /ato/
---

## What is the Authority to Operate Process

<iframe width="560" height="315" src="https://www.youtube.com/embed/T1S52B1-NT4" frameborder="0" allowfullscreen></iframe>

* Governed by the Federal Information Security Management Act of 2002, or FISMA
    * FISMA does a few things. It puts the Chief Information Security Officer in charge of consulting the agency head with the process they should have for the security clearance process. FISMA also empowers the agency head with accepting all the risk posed by information systems.
        * Good news is that agency head can delegate that authority at their choosing.
    * This agency-specific process then binds agency heads with the process that they must then follow.
       * In practice, what this means is setting up a series of controls for each new system that will be launched.
* 18F simplifies this process by implementing the bulk of the controls at the infrastructure level to the AWS account. This is reflected in a baseline minimum controls we’ve created.
    * Controls can range from human controls to business processes to mechanical ones.
* Before a system is made publicly accessible on the Internet, it must go through either the full ATO process or a 90-Day Authority to Test. If either are not yet complete, the system must have some level of authentication required for a user to enter.

## Steps to obtain an Authority to Operate

Prior to entering the security clearance process, the following must be completed. [Create an issue in the Devops repository](https://github.com/18F/DevOps/issues/new?title=ATO+for+%3Cproject%3E) using this template, replacing the items in angle brackets (`<...>`).

```markdown
* **Main repository:** <url>
* **Running libraries:**
    * <url>
    * ...
* **Site:** <url>
* **Launch date/deadline:** <date>

## Project team TODOs

* [ ] Add an [`about.yml`](https://github.com/18F/about_yml) for the main repository
* [ ] Add a `system-security-plan.yml` to the repository
* [ ] Add scanning badges from static analysis tool(s) to the README
* [ ] Select the security controls
* [ ] Implement the controls
* [ ] [Run OWASP ZAP](https://pages.18f.gov/before-you-ship/zap/), and add the report to Google Drive
* [ ] Resolve any visible security issues
* [ ] Conduct a preliminary code review
* [ ] Update relevant documentation, primarily the README
* [ ] Draw a top-level diagram of the system architecture

## Security team TODOs

* [ ] Final review and risk acceptance signatures (ATO)
```

DevOps will schedule a time to meet with you and discuss the ATO.

### ATO tips

* One thing that will help the process is great documentation, which can mitigate some problems from occurring during the ATO process.
    * Documentation, and specifically your README, should reflect a high level narrative of the architecture and data flows of the application.
        * Questions to consider include; what does it do? How does it move information around? What does it accomplish by doing it?
* Once the technical architecture is stable, a system security plan (SSP) will be created. The system architecture must be drawn out to assist with this process, but can be done so at a high level.
    * For 18F, the CIO office will complete the SSP. Once the SSP is complete, the system will be scanned in three ways for a static code analysis. The scans include:
        * Web vulnerability scan
        * Infrastructure-level scan
        * Penetration test
* The static code analysis grants one of four categorizations of vulnerabilities: low, medium, high, and critical. These vulnerabilities affect your ability to receive an ATO.
    * Low and medium can be resolved after the ATO is granted
    * High and critical must be resolved before the ATO is given
        * If any findings are from the human or critical tools, you must fix or explain as a false positive.
* If all of this is completed, the system is granted an ATO for a one year term. However, if the system substantively changes then a new ATO will be warranted. The 18F devops team will make this determination.
    * Examples for triggers for a new ATO include:
        * Encryption methodologies;
        * If a web framework has new backend administrative frameworks; and
        * The kinds of information you begin to store (e.g., personally identifiable information).

### During the ATO Process

While you’re in the ATO process, the following things will occur. These are largely done by the CIO shop in tandem with the 18F DevOps team, but may create some requirements for your team.

1. The SSP is written
1. The system is scanned
1. Information Security finalizes the SSP
1. Upon successful completion, the ATO is signed

## Optional - 90-day Authority to Test

* 18F offers a 90 day authority to test security clearance process.
    * Estimated to take approximately 2 weeks to get materials together and information security team has a service level agreement of 2 weeks to approve a completed system security plan, do the testing, and give a 90 day authorization.
    * The 90 day ATO can be re-upped as long as the security boundary hasn’t changed; the automatic scans must not show any new vulnerabilities.
* Sensitive PII is documented here; this process is not analogous to the PIA/SORN process and they must be handled separately
    * Broad safe harbor granted for when users may accidentally put their PII in; it must be actually requested.
