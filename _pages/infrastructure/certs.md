---
title: HTTPS Certificates
parent: Infrastructure
https://handbook.tts.gsa.gov/launching-software/infrastructure/#https-certificate
---

HTTPS should be enforced on every public endpoint ([here's why](https://18f.gsa.gov/2014/11/13/why-we-use-https-in-every-gov-website-we-make/)). There are a number of ways to get certificates for systems at TTS, depending on what [infrastructure](..) you're using:

- If using cloud.gov, obtain through the [CDN broker](https://cloud.gov/docs/services/cdn-route/).
- If using [Federalist](https://federalist-docs.18f.gov/pages/how-federalist-works/custom-urls/#technical-steps-to-set-up-a-new-site), they are set up automatically.
- If using [TTS-managed infrastructure as a service (IaaS)](../../infrastructure/#infrastructure-as-a-service-iaas), there are a few options:
  - [Let's Encrypt](https://letsencrypt.org/)
  - GSA IT [Service Desk](https://servicedesk.gsa.gov) > Service Catalog > Account Services > Internal/External Certificate Request
  - SSLMate through #acquisition, via an approved [purchase request](https://handbook.18f.gov/purchase-requests/)
  - If in OPP, get a GoDaddy certificate through #opp-infra
- If using another agency's infrastructure, consult their IT department.
