---
title: Domains
---

## Getting a new second-level domain

_something.gov_

[Information from DotGov.](https://home.dotgov.gov/registration/)

## DNS

DNS for domains in TTS is managed one of a few ways—see [this diagram](https://docs.google.com/drawings/d/18POi-tbIqI7vzM2wnGKjOk4eC1fTAsnggGAeRK3Q3rk/edit?ts=5f4fea7a). For those that are managed within TTS, see [the DNS repository](https://github.com/18F/dns).

## DNSSEC

[cloud.gov (and thus Federalist) do not support DNSSEC.](https://cloud.gov/docs/compliance/domain-standards/#dnssec)

For domains owned by TTS that speak HTTP, TTS follows the requirements of [OMB M-15-13](https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2015/m-15-13.pdf), including [HTTP Strict Transport Security](https://https.cio.gov/hsts/) and the recommended additional step of [HSTS preloading](https://https.cio.gov/hsts/#hsts-preloading).

For information on how HTTPS and HSTS compensate for an absence of DNSSEC for HTTP-based services, see:

- [Why isn't DNSSEC good enough?](https://https.cio.gov/faq/#why-isnt-dnssec-good-enough)
- [How does HTTPS protect against DNS spoofing?](https://https.cio.gov/faq/#how-does-https-protect-against-dns-spoofing)

## IPv6

[Information from cloud.gov.](https://cloud.gov/docs/apps/custom-domains/)
