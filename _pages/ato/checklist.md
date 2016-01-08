---
title: ATO Checklist
---

To start the security clearance process, [create an issue in the DevOps repository](https://github.com/18F/DevOps/issues/new?title=ATO+for+%3Cproject%3E) using this template. Make sure to replace the placeholders at the top.

```markdown
* **Main repository:** <url>
* **Running libraries:**
    * <url>
    * ...
* **Site:** <url>
* **Product manager:** @<username>
* **Technical point of contact:** @<username>
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
