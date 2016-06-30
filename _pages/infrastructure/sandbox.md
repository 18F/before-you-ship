---
title: Sandbox Accounts
parent: Infrastructure
---

Sandbox accounts - both cloud.gov and AWS - are available to all TTF staff for non-production use. Things to bear in mind about sandbox accounts:

- Sandbox accounts should be used for demo and testing purposes.
- Sandbox accounts _must_ be used when you are sending internet traffic to a non-production system: tools such as ngrok and localtunnel are strictly forbidden since they can enable your machine to be compromised.
- No sensitive or [personally identifiable information](../../security/pii) should be stored in sandbox accounts.
- No systems running on sandbox accounts can be exposed to the public without authentication in place. Exposing systems to the public without authentication requires an [ATO](../../ato/).

