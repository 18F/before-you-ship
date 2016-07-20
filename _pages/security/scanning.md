---
title: Security Scanning
navtitle: Scanning
parent: Security
---

Security scanning is separated into a few categories:

* [Static](../static-analysis/): Static Code Analysis (SCA) is similar to the [linters](https://en.wikipedia.org/wiki/Lint_(software)) that many developers use on a day-to-day basis. While many linters focus on stylistic concerns, we are interested in those tools that target security flaws.
* [Dynamic](../dynamic-scanning/)
    * Active
        * Infrastructure-level scan (done at the cloud.gov level)
        * Penetration test
    * Passive: Monitors network traffic, but does not generate its own traffic.

## Alerts

Alerts come in one of four categorizations:

* **Low** and **Medium** can be resolved after the ATO is granted.
* **High** and **Critical** must be resolved before the ATO is granted.

Any false positives should be documented as such, through an "ignore" file (e.g. with a `note` in [Brakeman](http://brakemanscanner.org/docs/ignoring_false_positives/)) or with your ATO-related documentation.

## ATO Scanning

### Getting ready to scan

The system's technical stack needs to be relatively stable before authorization.

If, during testing, the system performs:

* user authentication or authorization
* back-end administrative functions
* encryption

...then those features cannot be "relatively simple" but must in fact be *complete* before an authorization will be given. Note that the use of common web frameworks and [18F HTTPS standards](https://github.com/18F/https) resolves these issues in almost every case.

Lastly, make sure the `README` file in your repo is fully up to date and clearly explains what the system does and why at a high level. You should also include the above information in your `README`.

### Greybox testing

Once you are ready, the 18F Infrastructure Team will start both automated and manual scanning and testing. This includes:

* [web vulnerability scanning](../../security/dynamic-scanning/) on the front-end
* [static code analysis](../../security/static-analysis/) on the `master` branch of your repo
* for higher FISMA levels, penetration testing by third party security consultants.

For greybox testing, the testing team has significant (but not necessarily complete) knowledge of how the system works, as opposed to black box testing, where they have zero knowledge, or white box testing, where they have complete knowledge.

All of these tests must be conducted on all environments and stacks, including one _identical to production_. We call this environment and stack "pre-production" and will also affix the designation "scanee" so there is no ambiguity as to what is being scanned.

This also requires creating a stable `release` branch. You can continue working on `master` and deploy builds from `master` to a development environment.

### Expectation management

Overall, if *no* vulnerabilities are found, this process has been taking approximately 2 weeks for test preparation and [System Security Plan](../../ato/ssp/) writing and 2 weeks for [greybox testing](#greybox-testing) and [signature](../../ato/walkthrough/#signing-an-authorization). FISMA Moderate and FISMA High will require additional time.

Since the time it would take to resolve vulnerabilities is not known until a vulnerability is identified, it is **strongly recommended** that no expectations are set with Federal partners or GSA stakeholders when public testing will begin. Instead, we recommend that the authorization process is seen as part of the delivery process and your definition of "done".

After the system has been authorized, you can then begin planning a public roll out of your system.
