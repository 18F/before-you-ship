---
title: Controls
---

[NIST 800-53 Revision 4](http://csrc.nist.gov/groups/SMA/fisma/controls.html) lists the security control baselines that must implemented on all Federal systems. The default and required NIST controls that 18F and GSA Information Security have agreed upon for all systems are listed here, with a short description of where the controls are implemented.

Here are controls that are required for web applications:

### Baseline assembly

We use a [hardened baseline](https://github.com/fisma-ready/ubuntu-lts) of Ubuntu 14.04 LTS as our default OS for all products and services.

* [CM-2 Baseline configuration](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=CM-2)
* [CM-3 Configuration Change Control](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=CM-3)
* [CM-6 Configuration Settings](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=CM-6)

### Infrastructure as a service

Development environments are exclusively in cloud.gov or the [AWS East/West regions](https://18f.signin.aws.amazon.com/console). All AWS users must go through a DevOps onboarding session and comply with all relevant [policies of use](../../infrastructure/aws/).

* [SC-7 Boundary protection](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=SC-7)
* [AC-3 Access enforcement](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=AC-3)
* [AC-6 Least privilege](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=AC-6)

### Version control

All code must be checked into a Git repository and a remote must be placed within the [18F Organization on GitHub.com](https://github.com/18F).

* [CM-8 Information system component inventory](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=CM-8)

### HTTPS Everywhere

All 18F sites are required to use Transport Layer Security (TLS). You must follow the the [18F HTTPS standards](https://github.com/18F/https).

* [SC-13 Cryptographic protection](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=SC-13)
* [SC-28 (1) Protection of Information At Rest &#124; Cryptographic Protection](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=SC-28#enhancement-1): applicable to systems with Sensitive Personally Identifiable Information Only

### Authorization and authentication

We use AWS IAM to manage authorization and authentication.

* [AC-2 Account Management](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=AC-2)
* [IA-2 Identification and Authentication (Organizational Users)](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=IA-2)
* [IA-2 (1) Identification and Authentication (Organizational Users) &#124; Network Access to Privileged Accounts](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=IA-2#enhancement-1)
* [IA-2 (2) Identification and Authentication (Organizational Users) &#124; Network Access to Non-Privileged Accounts](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=IA-2#enhancement-2)
* [IA-2 (12) Identification and Authentication &#124; Acceptance of PIV Credentials](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=IA-2#enhancement-12): consult with the Infrastructure Team for Applicability

### Continuous integration and testing

See the [security scanning](../../security/scanning/) page for more details.

* [CA-8 Penetration testing](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=CA-8)
* [RA-5 Vulnerability Scanning](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=RA-5)
* [SA-11 (1) Developer Security Testing and Evaluation &#124; Static Code Analysis](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=SA-11#enhancement-1)
* [SI-2 Flaw Remediation](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=SI-2)
* [SI-10 Information Input Validation](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=SI-10)

### Monitoring

One or more of CloudWatch, CloudTrail, New Relic, Splunk, etc.

* [AU-2 Audit Events](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=AU-2)
* [AU-6 Audit Review, Analysis, and Reporting](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=AU-6)
* [SI-4 Information System Monitoring](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=SI-4)

### Overall system security

There are controls which are general, and the implementation may differ given the underlying technology.

* [PL-8 Information Security Architecture](https://web.nvd.nist.gov/view/800-53/Rev4/control?controlName=PL-8)
