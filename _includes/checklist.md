* **Main repository:** [url]
* **Site:** [url]
* **Product manager:** @[username]
* **Technical point of contact:** @[username]
* **Infrastructure Lead:** @[username]
* **ATO folder:** [url]

## TODOs

### ATO Sprint prerequisites

#### Infrastructure lead

- [ ] Determine the [impact level](https://pages.18f.gov/before-you-ship/ato/levels/)
- [ ] Assign the appropriate labels to this issue
- [ ] Create an "ATO folder" for the project as a sub-folder of [the `ATOs` folder in Google Drive](https://drive.google.com/a/gsa.gov/folderview?id=0BynIxtx-CfkdckljM3BPSkdQT1U&usp=sharing) under 18F/OPP/PIF then "Work in progress". Link to it above.
- [ ] Add templates to the ATO folder
    - [ ] Rules of Engagement (RoE)
    - [ ] System Security Plan
    - [ ] Project Plan

#### Project team

##### Technical

- [ ] Ensure that a staging environment is fully set up.
    * This should be as production-like as possible.
- [ ] [Set up monitoring](https://pages.18f.gov/before-you-ship/infrastructure/monitoring/)
    * [ ] [Downtime alerts](https://pages.18f.gov/before-you-ship/infrastructure/monitoring/#downtime)
    * [ ] [Error alerts](https://pages.18f.gov/before-you-ship/infrastructure/monitoring/#errors)
- [ ] Perform security scans, and put the results (or a link to them) in the ATO folder.
    * [ ] Set up [static analysis](https://pages.18f.gov/before-you-ship/security/static-analysis/) service
        * [ ] Add service badges to the README
    * [ ] [Perform dynamic vulnerability scanning](https://pages.18f.gov/before-you-ship/security/dynamic-scanning/)
        * [ ] Resolve any visible security issues, re-running the scan as needed
        * [ ] Add the issue-free scan report or [documentation about false positives](https://pages.18f.gov/before-you-ship/security/dynamic-scanning/#caveats) to the ATO folder.
- [ ] If this is a new system, add a prominent [`Beta`](https://18f.gsa.gov/dashboard/stages/) label to the site
- [ ] Ensure the staging environment has sufficient capacity to withstand the testing
    * The testing tools create very heavy usage and traffic.

##### Writing

- [ ] Fill out the Rules of Engagement (RoE)
    * Use staging URLs, rather than production ones.
- [ ] Fill out the Project Plan
- [ ] Add an [`.about.yml`](https://github.com/18F/about_yml) for the main repository
- [ ] [Update relevant documentation](https://pages.18f.gov/before-you-ship/ato/tips/), primarily the README
- [ ] Add a [System Security Plan yml](https://pages.18f.gov/before-you-ship/ato/ssp/#template) to the repository
- [ ] [Set up Compliance Masonry documentation](https://github.com/18F/cg-compliance#starting-ato-documentation-for-cloudgov-applications)
- [ ] [Implement the controls](https://pages.18f.gov/before-you-ship/ato/walkthrough/#step-3--implement-the-controls)

### Mid-Sprint

* [ ] Penetration test conducted - @[tester]

### Post-Sprint

* [ ] Final review and risk acceptance signatures (ATO) - @NoahKunin
* [ ] Remove the `Beta` label from the site

---

See the [Before You Ship](https://pages.18f.gov/before-you-ship/ato/) site for more information.

/cc @18F/ato
