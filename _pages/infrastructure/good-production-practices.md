---
title: Good Production Practices
parent: Infrastructure
---

Below is a list of "good" production ops practices, which product and tech leads should consider early in their development and review as part of any major launch. Items in **bold** are considered must-haves.

We will be adding more documentation about how to achieve these within 18F's infrastructure soon, but [docs.cloud.gov](https://docs.cloud.gov/) is a good place to start. It includes a [guide to production-ready apps on cloud.gov](https://docs.cloud.gov/apps/production-ready/) with tips about how to implement relevant practices.

### Backups

- **All volatile data storage is on redundant infrastructure**
- **Periodic snapshots of volatile data storage are happening**
- Ideally, point-in-time recovery is possible
- Recovery is documented in a testable procedure
- Tests of the recovery path are part of the continuous deployment pipeline

### Deployment

- Can push a new version with a single command
- More than one person is able to do it
- Blue-green deployment
- Automated schema updates
- Snapshot/rollback of volatile data is incorporated in the process
- Deployment only includes production-necessary files
- Secrets are retrieved securely (eg via credential service rather than setting environment variables)
- Download, build, and configuration limited to staging, not runtime
- [Pin dependencies](../pinning-dependencies/)

### Support

- Service-level targets are documented
- Clear entry point for complaints
- Clear escalation for handling infrastructure vs application vs api problems
- Support queue is public

### Logs

- **Logs are captured to durable storage before rotation**
- **Logs with sensitive data are only available to appropriate people**
- Logs can be browsed/drilled with low-latency (eg grepping not necessary)

### Monitoring

See [the page on monitoring](../monitoring/).

### Alerting

- **_Someone_ is alerted, somehow, if a monitor test is failing**
- Flexible targets (for vacation, by component, etc), eg PagerDuty
- Alerts triggered based on "out of the norm" thresholds
- Flapping status does not result in excess/bouncing alerts

### Status communication

- A status page is available to all users and downstream services
- The status page is hosted off-infrastructure
- The status page shows any planned and all previous outages
- Users can subscribe to notices

### Security

- **In-person discussion/audit around launch and major changes**
- **Third-party services are approved to hold the data being sent to them**
- Automated pen-testing in a staging environment as part of continuous deployment
- Automated vuln-scanning in production environment that is fed with newly-discovered vulns
- Enable [SSL](https://github.com/18f/https) for everything
- Redirect http to https

### Load-testing

- Periodic tests of in-scope components in a staging environment as part of continuous deployment pipeline
- Upstream components are known to be load-tested up to max foreseeable pressure

### Capacity-planning

- **Planning around launch, significant news, and seasonal deadlines**
- Analysis of similar service traffic in steady state
- Ideally app-relevant elastic response to scale up as needed and back down to control costs

### Scalability

- **Each component has at least two instances at all times**
- Each component horizontally scalable with more instances
- Must-be-vertical components do not pressure their hosts in even elevated traffic condition
- Ideally must-be-vertical components do not share hosts

### Resilience

- Instances are distributed across availability zones
- No in-app dependencies on the number/distribution of upstream instances
- Upstream is similarly resilient (multiple instances in multiple zones)

### Access Control

- **Expected exposure for alpha/beta/blue-green environments is enforced**
- Exposure is controlled via configurable non-bespoke proxy (eg not the app)
- A/B cohorts/affinity supported
