* **Main repository:** [url]
* **Running libraries:**
    * [url]
    * ...
* **Site:** [url]
* **Product manager:** @[username]
* **Technical point of contact:** @[username]

## TODOs

### Project team

Many of these tasks can be done in parallel. This is just a suggestion of priority.

- [ ] [Set up monitoring](https://pages.18f.gov/before-you-ship/infrastructure/monitoring/)
    * [ ] [Downtime alerts](https://pages.18f.gov/before-you-ship/infrastructure/monitoring/#downtime)
    * [ ] [Error alerts](https://pages.18f.gov/before-you-ship/infrastructure/monitoring/#errors)
- [ ] Add an [`.about.yml`](https://github.com/18F/about_yml) for the main repository
- [ ] Create a sub-folder in [the `ATOs` folder in Google Drive](https://drive.google.com/a/gsa.gov/folderview?id=0BynIxtx-CfkdckljM3BPSkdQT1U&usp=sharing) under 18F/OPP/PIF then "Work in progress". This will be knows as the "ATO Folder". Link it here.
- [ ] Security scans (make this a link to the ATO Folder where you put a copy of the security scan results)
    * [ ] Set up [static analysis](https://pages.18f.gov/before-you-ship/security/static-analysis/) service
        * [ ] Add service badges to the README
    * [ ] [Perform dynamic vulnerability scanning](https://pages.18f.gov/before-you-ship/security/dynamic-scanning/)
        * [ ] Resolve any visible security issues, re-running the scan as needed
        * [ ] Add the issue-free scan report or [documentation about false positives](https://pages.18f.gov/before-you-ship/security/dynamic-scanning/#caveats) to the ATO folder.
- [ ] [Update relevant documentation](https://pages.18f.gov/before-you-ship/ato/tips/), primarily the README
- [ ] If this will be a new ATO, add a prominent [`Beta`](https://18f.gsa.gov/dashboard/stages/) label to any currently-running sites
- [ ] Add a [System Security Plan yml](https://pages.18f.gov/before-you-ship/ato/ssp/#template) to the repository
- [ ] Add a System Security Plan Google doc to the ATO folder (talk to your Infrastructure Lead for a template)
- [ ] [Set up Compliance Masonry documentation](https://github.com/18F/cg-compliance#starting-ato-documentation-for-cloudgov-applications)
- [ ] [Implement the controls](https://pages.18f.gov/before-you-ship/ato/walkthrough/#step-3--implement-the-controls)
- [ ] Add a Rules of Engagement (RoE) Google doc to the ATO folder (talk to your Infrastructure Lead for a template)
- [ ] Ensure system environment referenced in the RoE for security testing is ready for testing. No production links should be included in the RoE so as to avoid any testing happening on production (which could lead to downtime).
- [ ] Add a Project Plan Google doc to the ATO folder (talk to your Infrastructure Lead for a template)

### Authorizing Official

* [ ] Final review and risk acceptance signatures (ATO)

---

See the [Before You Ship](https://pages.18f.gov/before-you-ship/ato/) site for more information.

/cc @18F/ato
