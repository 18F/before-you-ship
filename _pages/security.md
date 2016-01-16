---
title: General Security Standards
navtitle: Security
---

In the Federal government, the principal law governing the security of information systems is the Federal Information Security Management Act (FISMA).

_**Before reading the rest of this policy**_, you must read the [readme file at FISMA Ready](https://github.com/fisma-ready/fisma-ready.github.io/blob/master/README.md), a community project co-managed by 18F. You should also take a quick glance at the [components that are already FISMA Ready](https://github.com/fisma-ready).

Also, the _document_ for an [ATO](../ato/) requires a something known as [System Security Plan (SSP)](../ato/ssp/).

## Compliance

Hopefully, at this point you're not **too** burned out on bureacracy! What all of that boils down is we need to always _document_ our security procedures and then be sure to _follow_ them by creating appropriate controls.

## Documentation

See the [ATO documentation](../ato/).

### Getting ready to test

The system's technical stack needs to be relatively stable before authorization. This includes a complete list of:

* AWS services required
* base code language(s) used and their frameworks
* third-party services, regardless of level of integration
* all top-level URLS (ex: staging.18f.us _and_ 18f.gsa.gov)

If during testing the system performs:

* user authentication or authorization
* back-end administrative functions
* encryption

...then those features cannot be "relatively simple" but must in fact be *complete* before an authorization will be given. Note that the use of common web frameworks and [18F HTTPS standards](https://github.com/18F/https) resolves these issues in almost every case.

Lastly, make sure the `README` file in your repo is fully up to date and clearly explains what the system does and why at a high level. You should also include the above information in your `README`.

### Greybox testing

Once you are ready, 18F DevOps and GSA InfoSec will start both automated and manual scanning and testing. This includes:

* using SSH to go into your EC2 servers to run tests on the operating system
* checking for web vulnerability scanning on the front-end
* [static code analysis](static-analysis/) on the `master` branch of your repo
* white hat hackers attempting to penetrate the system

For greybox testing, the independent testing team has significant (but not necessarily complete) knowledge of how the system works, as opposed to black box testing, where they have zero knowledge, or white box testing, where they have complete knowledge.

All of these tests must be conducted on all environments and stacks, including one _identical to production_. We call this environment and stack "pre-production" and will also affix the designation "scanee" so there is no ambiguity as to what is being scanned.

This also requires a stable `master` branch. You can continue working on `feature` branches and deploy those to a development environment.

### Resolving vulnerabilities

See [Alerts](../security/scanning/#alerts).

### Expectation management

Overall, if *no* vulnerabilities are found, this process has been taking approximately 2 weeks for test preparation and system security plan writing and 2 weeks for [greybox testing](#greybox-testing) and signature.

Since the time it would take to resolve vulnerabilities is not known until a vulnerability is identified, it is **strongly recommended** that no expectations are set with Federal partners or GSA stakeholders when public testing will begin. Instead, we recommend that the authorization process is seen as part of the delivery process and your definition of "done".

After the system has been authorized, you can then begin planning a public roll out of your test system.
