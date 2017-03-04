* **Main repository:** [url]
* **Site:** [url]
* **Product manager:** @[username]
* **System Owner:** @[username of technical point of contact who will be the project representative in the Sprint]
* **Infrastructure Lead:** @[username]
* **ATO folder:** [url]
* **Sprint notes:** [url]

## TODOs

### ATO Sprint prerequisites

#### Infrastructure Lead

- [ ] Set up an ATO intro meeting with the team.
- [ ] Determine the [impact level](https://pages.18f.gov/before-you-ship/ato/levels/).
- [ ] Add this issue to the `Backlog` of [the ATO Kanban board](https://github.com/18F/Infrastructure/projects/1).
- [ ] Assign the appropriate labels to this issue.
- [ ] Set up the project ATO folder.
    - [ ] Create as a sub-folder of [the `ATOs` folder in Google Drive](https://drive.google.com/a/gsa.gov/folderview?id=0BynIxtx-CfkdckljM3BPSkdQT1U&usp=sharing) under 18F/OPP/PIF then "Work in progress". Link to it above.
    - [ ] Add Rules of Engagement (RoE) template
    - [ ] Add [System Security Plan (SSP)](https://pages.18f.gov/before-you-ship/ato/ssp/) template
    - [ ] Add Project Plan template
- [ ] Make a copy of the [notes doc template](https://docs.google.com/document/d/1EdcNyE1kkQve3tHyiV1QIRWNOBlTeh33lAbX0h4h18M/edit) in the [Sprinting Team folder](https://drive.google.com/open?id=1EdcNyE1kkQve3tHyiV1QIRWNOBlTeh33lAbX0h4h18M).
    - [ ] Fill out the placeholders.
    - [ ] Add link at the top of this issue.

#### Project team

##### Technical

- [ ] Enable [protected branches](https://help.github.com/articles/about-protected-branches/) for the project repositor(ies).
    * Get admin access via #admins-github, if needed.
- [ ] Ensure that a staging environment is fully set up.
    * This should be as [production](https://pages.18f.gov/before-you-ship/infrastructure/)-like as possible.
- [ ] [Set up monitoring](https://pages.18f.gov/before-you-ship/infrastructure/monitoring/)
    * [ ] [Downtime alerts](https://pages.18f.gov/before-you-ship/infrastructure/monitoring/#downtime)
    * [ ] [Error alerts](https://pages.18f.gov/before-you-ship/infrastructure/monitoring/#errors)
- [ ] Perform security scans, and put the results (or a link to them) in the ATO folder.
    * [ ] Set up [static analysis](https://pages.18f.gov/before-you-ship/security/static-analysis/) service
        * [ ] Add service badges to the README
        * [ ] Put a point-in-time PDF of the scan results in the ATO folder
    * [ ] [Perform dynamic vulnerability scanning](https://pages.18f.gov/before-you-ship/security/dynamic-scanning/)
        * [ ] Resolve any visible security issues, re-running the scan as needed
        * [ ] Add the issue-free scan report or [documentation about false positives](https://pages.18f.gov/before-you-ship/security/dynamic-scanning/#caveats) to the ATO folder.
- [ ] If this is a new system, add a prominent [`Beta`](https://18f.gsa.gov/dashboard/stages/) label to the site
- [ ] Ensure the staging environment has sufficient capacity to withstand the testing
    * The testing tools create very heavy usage and traffic.

##### Content

- [ ] Read the LATO guide<!-- unless not doing a LATO -->.
    * Search [this page](https://insite.gsa.gov/portal/content/627230) for "Lightweight Security Authorization Process".
- [ ] Create a [system diagram](https://pages.18f.gov/before-you-ship/ato/ssp/#systemnetwork-diagrams)
- [ ] Fill out the Rules of Engagement (RoE)
    * Use staging URLs, rather than production ones.
- [ ] Fill out the Project Plan
- [ ] Add an [`.about.yml`](https://github.com/18F/about_yml) for the main repository
- [ ] [Update relevant documentation](https://pages.18f.gov/before-you-ship/ato/tips/), primarily the README
- [ ] Add a [System Security Plan YAML file](https://pages.18f.gov/before-you-ship/ato/ssp/#template) to the repository
- [ ] [Set up Compliance Masonry documentation](https://github.com/18F/cg-compliance#starting-ato-documentation-for-cloudgov-applications)
- [ ] [Implement the controls](https://pages.18f.gov/before-you-ship/ato/walkthrough/#step-3--implement-the-controls)

### Documentation review

1. [ ] Move this issue to the `Documentation review` column of [the ATO Kanban board](https://github.com/18F/Infrastructure/projects/1). - @[infrastructure lead]
1. [ ] Schedule a documentation review session. - @[infrastructure lead]
    * One or more follow-up sessions may be necessary.
1. [ ] Fix any documentation issues identified in the session.
1. [ ] RoE signed
    * [ ] System Owner
    * [ ] GSA IT

### Mid-Sprint

1. [ ] Penetration test complete. - @[tester]
    * [ ] Enhanced Scanning and Assessment Process (ESAP) document added to ATO folder
1. [ ] Put all findings in project's issue tracker.
1. [ ] Fix any `Critical` or `High` vulnerabilities.
    * This needs to be done before the ATO can be issued, but not necessarily before the end of the sprint.

### Post-Sprint

1. [ ] [Controls](https://pages.18f.gov/before-you-ship/ato/controls/) tested - @[GSA IT representative]
1. [ ] Create a Plan of Actions and Milestones (POAM). - @[GSA IT representative]
1. [ ] Final review and risk acceptance signatures (issue the ATO) - @NoahKunin
1. [ ] Remove the `Beta` label from the site.
1. [ ] Fix all `Moderate` vulnerabilities - due [30 days after ATO issued]
1. [ ] Fix all `Low` vulnerabilities - due [60 days after ATO issued]

---

See the [Before You Ship](https://pages.18f.gov/before-you-ship/ato/) site for more information.

/cc @18F/ato
