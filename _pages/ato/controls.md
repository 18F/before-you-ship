---
title: Controls
---

[NIST 800-53 Revision 4](http://csrc.nist.gov/groups/SMA/fisma/controls.html) lists the security control baselines that must implemented on all Federal systems.

The default and required NIST controls that 18F and GSA Information Security have agreed upon for all systems are listed here, with a short description of where the controls are implemented.

### Baseline assembly

We use a [hardened baseline](https://github.com/fisma-ready/ubuntu-lts) of Ubuntu 14.04 LTS as our default OS for all products and services.

* CM-2  Baseline configuration
* CM-3  Configuration Change Control
* CM-6  Configuration Settings

### Infrastructure as a service

Development environments are exclusively in cloud.gov or the [AWS East/West regions](https://18f.signin.aws.amazon.com/console). All AWS users must go through a DevOps [onboarding session and comply with all relevant policies of use](../infrastructure/aws/).

* SC-7 Boundary protection
* AC-3 Access enforcement
* AC-6 Least privilege

### Version control

All code must be checked into a `git` repository and a remote must be placed within the [18F Organization on GitHub.com](https://github.com/18F).

* CM-8  Information system component inventory

### HTTPS Everywhere

All 18F sites are required to use Transport Layer Security (TLS). You must follow the the [18F HTTPS standards](https://github.com/18F/https).

* SC-13 Cryptographic protection
* SC-28 (1) Protection of Information At Rest &#124; Cryptographic Protection: applicable to systems with Sensitive Personally Identifiable Information Only

### Authorization and authentication

We use AWS IAM to manage authorization and authentication.

* AC-2 Account Management
* IA-2 Identification and Authentication (Organizational Users)
* IA-2 (1) Identification and Authentication (Organizational Users) &#124; Network Access to Privileged Accounts  
* IA-2 (2) Identification and Authentication (Organizational Users) &#124; Network Access to Non-Privileged Accounts
* IA-2 (12) Identification and Authentication &#124; Acceptance of PIV Credentials:  consult with DevOps/CyberSec for Applicability

### Continuous integration and testing

InfoSec does penetration testing, everything is 18F DevOps.

* CA-8 Penetration testing
* RA-5 Vulnerability Scanning
* SA-11 (1) Developer Security Testing and Evaluation &#124; Static Code Analysis
* SI-2 Flaw Remediation
* SI-10 Information Input Validation

### Monitoring

CloudWatch, CloudTrail, New Relic, Splunk

* AU-2 Audit Events
* AU-6 Audit Review, Analysis, and Reporting
* SI-4 Information System Monitoring

### Overall system security

There are controls which are general, and the implementation may differ given the underlying technology.

* PL-8 Information Security Architecture
