* **Main repository:** [url]
* **Site:** [url]
* **Product manager:** @[username]
* **System Owner:** @[username of technical point of contact who will be the project representative in the Sprint]
* **Infrastructure Lead:** @[username]
* **ATO folder:** [url]
* **Sprint notes:** [url]

## TODOs

If your system isn't live yet, "production" refers to the environment that _will_ be production.

### Phase 1: ATO Sprint prerequisites

Everything in this section needs to be completed before the project will be scheduled for an ATO Sprint.

#### Infrastructure Lead

- [ ] Set up an ATO intro meeting with the project team.
- [ ] Determine the [impact level](https://before-you-ship.18f.gov/ato/levels/).
    * [ ] Confirm with @[Authorizing Official]
- [ ] Add this issue to the `Backlog` of [the ATO Kanban board](https://github.com/18F/Infrastructure/projects/1).
- [ ] Assign the appropriate labels to this issue.
- [ ] Set up the project ATO folder.
    - [ ] [In the `ATOs` folder in Google Drive](https://drive.google.com/a/gsa.gov/folderview?id=0BynIxtx-CfkdckljM3BPSkdQT1U&usp=sharing), go to `18F`/`OPP`/`PIF`, then `Work in progress`, and create a subfolder called in the format `<project> ATO - <duration> <level>`. Link to it as the `ATO folder` at the top of this issue.
    - [ ] Add Rules of Engagement (RoE) template
        * Search [this page](https://insite.gsa.gov/portal/content/627238) for "Rules of Engagement (RoE) 90-Day LATO Penetration Test TEMPLATE", even if this isn't for a 90-day LATO.
    - [ ] Add [System Security Plan (SSP)](https://before-you-ship.18f.gov/ato/ssp/) template
        * For Low systems on cloud.gov, use [this template](https://docs.google.com/a/gsa.gov/document/d/1tVbH39TFfvSaBbjWfLaR3GLOuvsLuhLFJ75xKowEV5c/edit?usp=sharing)
        * For a 90-day ATO, delete Section 13.
- [ ] Make a copy of the [ATO Sprinting notes template](https://docs.google.com/document/d/1EdcNyE1kkQve3tHyiV1QIRWNOBlTeh33lAbX0h4h18M/edit) and save it in the [Sprinting Team folder](https://drive.google.com/drive/folders/0B2tmNhXsZ-EyVkVra21NTmc0U00?usp=sharing) with a title of `ATO Sprinting Team notes - <project>`.
    - [ ] Fill out the placeholders.
    - [ ] Link to it as the `Sprint notes` at the top of this issue.

#### Project team

##### Technical

These tasks apply to every repository/application/hostname/language that is directly involved in your project.

- [ ] Enable [protected branches](https://help.github.com/articles/about-protected-branches/) for the project repository.
    * Get help via #admins-github, if needed.
- [ ] Ensure that your production environment is fully set up, and matches what's described in your ATO materials.
- [ ] [Set up monitoring](https://before-you-ship.18f.gov/infrastructure/monitoring/)
    * [ ] [Downtime alerts](https://before-you-ship.18f.gov/infrastructure/monitoring/#downtime)
    * [ ] [Error & performance alerts](https://before-you-ship.18f.gov/infrastructure/monitoring/#errors--performance-problems)
- [ ] Perform security scans, and put the results (or a link to them) in the project's `ATO folder`.
    * [ ] Set up [dependency analysis](https://before-you-ship.18f.gov/security/static-analysis/) service
        * [ ] Add service badge to your README
        * [ ] Put a point-in-time PDF of the scan results in the project's `ATO folder`.
    * [ ] Set up [static code analysis](https://before-you-ship.18f.gov/security/static-analysis/)
        * [ ] If using a service, add the badge to your README.
    * [ ] [Perform dynamic vulnerability scanning](https://before-you-ship.18f.gov/security/dynamic-scanning/)
        * [ ] Resolve any visible security issues, re-running the scan as needed
        * [ ] Add the issue-free scan report or [documentation about false positives](https://before-you-ship.18f.gov/security/dynamic-scanning/#caveats) to the project's ATO folder.
- [ ] If this is a new system, add a prominent [`Beta`](https://18f.gsa.gov/dashboard/stages/) label to the site.
- [ ] Ensure the production environment has sufficient capacity to withstand the testing.
    * The testing tools create very heavy usage and traffic.

##### Documentation

...reading and writing.

- [ ] Read the LATO guide<!-- unless not doing a LATO -->.
    * Search [this page](https://insite.gsa.gov/portal/content/627230) for "Lightweight Security Authorization Process".
- [ ] Fill out the Rules of Engagement (RoE)
- [ ] Add an [`.about.yml`](https://github.com/18F/about_yml) for the main repository.
- [ ] [Update relevant documentation](https://before-you-ship.18f.gov/ato/tips/), primarily the README.
- [ ] [Fill out the System Security Plan (SSP).](https://before-you-ship.18f.gov/ato/ssp/)

### Phase 2: Documentation review

1. [ ] Move this issue to the `Documentation review` column of [the ATO Kanban board](https://github.com/18F/Infrastructure/projects/1). - @[infrastructure lead]
1. [ ] Schedule a documentation review session. - @[infrastructure lead]
    * One or more follow-up sessions may be necessary.
1. [ ] Fix any documentation issues identified in the session.
1. [ ] RoE signed
    * [ ] System Owner
    * [ ] GSA IT

### Phase 3: ATO Sprint

1. [ ] Sprint started.
1. [ ] Polish up the System Security Plan (SSP).
1. [ ] Penetration test complete. - @[tester]
    * [ ] Enhanced Scanning and Assessment Process (ESAP) document added to ATO folder - @[tester]
1. [ ] Put all vulnerabilities from the ESAP in the project's issue tracker.
1. [ ] Fix any `Critical` or `High` vulnerabilities from the ESAP.
    * This needs to be done before the ATO can be issued, though not necessarily before the end of the sprint.

### Phase 4: Post-Sprint

1. [ ] Controls tested - @[GSA IT representative]
1. [ ] Create a Plan of Actions and Milestones (POAM). - @[GSA IT representative]
1. [ ] Final review and risk acceptance signatures (issue the ATO) - @[Authorizing Official]
1. [ ] Remove the `Beta` label from the site.
1. [ ] Fix all `Moderate` vulnerabilities - due [30 days after ATO issued]
1. [ ] Fix all `Low` vulnerabilities - due [60 days after ATO issued]

---

See the [Before You Ship](https://before-you-ship.18f.gov/ato/) site for more information.

/cc @18F/ato
