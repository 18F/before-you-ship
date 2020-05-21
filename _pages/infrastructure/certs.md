---
title: HTTPS Certificates
parent: Infrastructure
---

HTTPS should be enforced on every public endpoint ([here's why](https://18f.gsa.gov/2014/11/13/why-we-use-https-in-every-gov-website-we-make/)). There are a number of ways to get certificates for systems at TTS, depending on what [infrastructure](..) you're using:

- If using cloud.gov, obtain through the [CDN broker](https://cloud.gov/docs/services/cdn-route/).
- If using [Federalist](https://federalist-docs.18f.gov/pages/how-federalist-works/custom-urls/#technical-steps-to-set-up-a-new-site), they are set up automatically.
- If using AWS, there are a few options:
  - [Let's Encrypt](https://letsencrypt.org/)
  - GSA IT
    - [Service Desk](https://servicedesk.gsa.gov) > Service Catalog > New Account or Access Requests > Internal Certificate Request
    - Unclear if they can also create certificates for public web. Please update this page if you find out!
  - SSLMate through #acquisition, via an approved [purchase request](https://handbook.18f.gov/purchase-requests/)
  - If in OPP, get a GoDaddy certificate through #opp-infra
- If using another agency's infrastructure, consult their IT department.
