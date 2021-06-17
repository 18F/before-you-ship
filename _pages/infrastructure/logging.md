---
title: Logging
parent: Infrastructure
https://handbook.tts.gsa.gov/launching-software/infrastructure/#logging
---

When using cloud.gov, logs sent to standard out are automatically captured by [logs.fr.cloud.gov](https://logs.fr.cloud.gov). [More info.](https://cloud.gov/docs/apps/logs/)

## What to log

Things you are required to log:

- Successful and unsuccessful account logon events
- Account management events
- Object access
    - Examples: reading database records or files on disk
- Policy change
- Privilege functions
- Process tracking
- System events
- For Web applications:
    - All administrator activity
    - Authentication checks
    - Authorization checks
    - Data deletions
    - Data access
    - Data changes
    - Permission changes

_This list comes from GSA’s [AU-2a](https://nvd.nist.gov/800-53/Rev4/control/au-2#Rev4Statements) Parameter Requirement - see the “Audit and Accountability” doc on [this page](https://insite.gsa.gov/topics/information-technology/security-and-privacy/it-security/it-security-procedural-guides)._

**Do not log [sensitive information](https://github.com/18F/open-source-policy/blob/master/practice.md#protecting-sensitive-information).**

## Other notes

- It's important that the events are traceable back to the user that performed them (if possible), and when, so include things like:
    - The user ID
    - Timestamps, standardized in UTC
- Make sure the right logging is done in production (outside of debug/development mode)
    - [Example change for Django from the FEC project](https://github.com/18F/fec-cms/commit/39961b3ef84b1c2abe882959f15b9bc5d2e25bc8)
- If not using cloud.gov, here are some things to think about:
    - Logs are captured to durable storage before rotation
    - Logs with sensitive data are only available to appropriate people
    - Logs can be browsed/drilled with low-latency (e.g. grepping not necessary)
