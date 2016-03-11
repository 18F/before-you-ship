---
title: ATO Checklist
navtitle: Checklist
---

To start the security clearance process, [create an issue in the Infrastructure repository](https://github.com/18F/Infrastructure/issues/new?title=ATO+for+%3Cproject%3E) using this template. Make sure to replace the placeholders at the top. Feel free to add a username after each task to assign it, and/or make corresponding items in your issue tracker. After the Infrastructure issue is created, the Infrastructure Team will schedule a time to meet with you and discuss the ATO.

Make sure to:

* Mention the [@18F/ato](https://github.com/orgs/18F/teams/ato) team in any issues or pull requests.
* Leave a comment in the ATO issue when the `Project team` section of the checklist is complete and ready for review.

You are welcome to ask any questions as comments in the issue or #infrastructure.

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

1. [Set up monitoring](https://pages.18f.gov/before-you-ship/infrastructure/monitoring/)
    * [ ] [Downtime alerts](https://pages.18f.gov/before-you-ship/infrastructure/monitoring/#downtime)
    * [ ] [Error alerts](https://pages.18f.gov/before-you-ship/infrastructure/monitoring/#errors)
1. [ ] Add an [`about.yml`](https://github.com/18F/about_yml) for the main repository
1. [ ] [Security scans](https://pages.18f.gov/before-you-ship/security/scanning/)
    * [ ] Set up [static analysis](https://pages.18f.gov/before-you-ship/security/static-analysis/) service
        * [ ] Add service badges to the README
    * [ ] [Run OWASP ZAP](https://pages.18f.gov/before-you-ship/security/dynamic-scanning/)
        1. [ ] Resolve any visible security issues, re-running the scan as needed
        1. [ ] Add the issue-free scan report to [the `ATOs` folder in Google Drive](https://drive.google.com/a/gsa.gov/folderview?id=0BynIxtx-CfkdckljM3BPSkdQT1U&usp=sharing)
1. [ ] Update relevant documentation, primarily the README
1. [ ] Add a [System Security Plan](https://pages.18f.gov/before-you-ship/ato/ssp/#template) to the repository

### Authorizing Official

* [ ] Final review and risk acceptance signatures (ATO)

---

See the [Before You Ship](https://pages.18f.gov/before-you-ship/ato/) site for more information.

/cc @18F/ato
```
