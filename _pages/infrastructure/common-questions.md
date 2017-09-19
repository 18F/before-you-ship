---
title: Common Infrastructure Questions we get from clients
navtitle: Common Questions
---

### Do you support DNSSEC?

For domains owned by 18F, 18F complies with the full requirements and recommendations in the [HTTPS-Only Standard](https://https.cio.gov/), including [HTTP Strict Transport Security](https://https.cio.gov/hsts/) and the recommended additional step of [HSTS preloading](https://https.cio.gov/hsts/#hsts-preloading). The HTTPS-Only Standard includes guidance related to DNSSEC:

* [Why isn’t DNSSEC good enough?](https://https.cio.gov/faq/#why-isn't-dnssec-good-enough%3f)
* [How does HTTPS protect against DNS spoofing?](https://https.cio.gov/faq/#how-does-https-protect-against-dns-spoofing%3f)

For customer applications hosted on cloud.gov that use domains owned by customers outside 18F (such as partner agency subdomains), see [cloud.gov DNSSEC information](https://cloud.gov/docs/apps/custom-domains/).

### Do you support IPv6?

Yes! [More information.](https://cloud.gov/docs/apps/custom-domains/)

### Do you allow "Direct Connections"?

18F does not support direct connections, either via fiber or VPN, into the cloud.gov environment. If systems launched on cloud.gov either require initial data from an internal customer system, or ongoing communications with internal customer systems that are unavailable over the public internet, we recommend working with 18F Infrastructure to devise alternatives.

### Where can I get compliance information about cloud.gov?

More info about cloud.gov's

* FedRAMP package
* System Security Plan
* Control Implementation Summary
* Customer Responsibility Matrix

can be found on [cloud.gov's FedRAMP page](https://cloud.gov/overview/security/fedramp-tracker/#how-you-can-use-this-p-ato).
