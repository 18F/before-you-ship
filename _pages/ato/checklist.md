---
title: ATO Checklist
navtitle: Checklist
---

To start the security clearance process, [create an issue in the DevOps repository](https://github.com/18F/DevOps/issues/new?title=ATO+for+%3Cproject%3E) using this template. Make sure to replace the placeholders at the top. Feel free to add a username after each task to assign it, and/or make corresponding items in your issue tracker. After the DevOps issue is created, DevOps will schedule a time to meet with you and discuss the ATO.

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

1. [ ] Add an [`about.yml`](https://github.com/18F/about_yml) for the main repository
1. [ ] Run the [security scans](https://pages.18f.gov/before-you-ship/security/scanning/)
    * [ ] [Static analysis](https://pages.18f.gov/before-you-ship/security/static-analysis/)
    * [ ] [Dynamic scans](https://pages.18f.gov/before-you-ship/security/dynamic-scanning/)
    * [ ] Add badges to the README
1. [ ] Resolve any visible security issues, re-running the scans as needed
1. [ ] Add the issue-free scan reports to [the `ATOs` folder in Google Drive](https://drive.google.com/a/gsa.gov/folderview?id=0BynIxtx-CfkdckljM3BPSkdQT1U&usp=sharing)
1. [ ] Update relevant documentation, primarily the README
1. [ ] Add a [System Security Plan](https://pages.18f.gov/before-you-ship/ato/ssp/#template) to the repository

### Authorizing Official

* [ ] Final review and risk acceptance signatures (ATO)

---

See the [Before You Ship](https://pages.18f.gov/before-you-ship/) site for more information.
```
