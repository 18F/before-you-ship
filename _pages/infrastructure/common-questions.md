---
title: Common Infrastructure Questions we get from clients
navtitle: Common Questions
---

### Do you support DNSSEC?

For domains owned by TTS that speak HTTP, TTS follows the requirements of [OMB M-15-13](https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2015/m-15-13.pdf), including [HTTP Strict Transport Security](https://https.cio.gov/hsts/) and the recommended additional step of [HSTS preloading](https://https.cio.gov/hsts/#hsts-preloading).

For information on how HTTPS and HSTS compensate for an absence of DNSSEC for HTTP-based services, see:

- [Why isn’t DNSSEC good enough?](https://https.cio.gov/faq/#why-isnt-dnssec-good-enough)
- [How does HTTPS protect against DNS spoofing?](https://https.cio.gov/faq/#how-does-https-protect-against-dns-spoofing)

Customer applications hosted on [cloud.gov](https://cloud.gov) that use domains owned by customers outside TTS (such as partner agency subdomains) can implement DNSSEC. See [cloud.gov's DNSSEC information](https://cloud.gov/docs/apps/custom-domains/) for details.

### Do you support IPv6?

Yes! [More information.](https://cloud.gov/docs/apps/custom-domains/)

### Do you allow "Direct Connections"?

TTS does not support direct connections, either via fiber or VPN, into the cloud.gov environment. If systems launched on cloud.gov either require initial data from an internal customer system, or ongoing communications with internal customer systems that are unavailable over the public internet, we recommend working with TTS Infrastructure to devise alternatives.

### Where can I get compliance information about cloud.gov?

More info about cloud.gov's

- FedRAMP package
- System Security Plan
- Control Implementation Summary
- Customer Responsibility Matrix

can be found on [cloud.gov's FedRAMP page](https://cloud.gov/overview/security/fedramp-tracker/#how-you-can-use-this-p-ato).
