---
title: Monitoring
parent: Infrastructure
---

There are a couple kinds of monitoring that you will need to have in place for any application: errors, and downtime.

Monitoring is only useful if the relevant people are alerted when something goes wrong. It might take some tweaking of the thresholds to get the signal-to-noise ratio right.

For [New Relic](https://newrelic.com) access, [open an issue in the DevOps repo](https://github.com/18F/DevOps/issues/new?title=New+Relic+account+for+%3Cname%3E) to get an account set up for your project.

### Errors

For a non-static site, you will want to know if exceptions are being thrown within your application. You have a couple of options:

* [New Relic APM](http://newrelic.com/application-monitoring)
    * See [the FISMA Ready instructions](https://github.com/fisma-ready/new-relic).
* [Sentry](https://getsentry.com/)
    * You will need to deploy/manage this yourself—see the [deployment instructions](https://github.com/18F/how-to-deploy/blob/master/sentry/README.md).

### Downtime

You will want to know if your site goes down.

* [New Relic Synthetics](http://newrelic.com/synthetics)
* [Pingdom](https://www.pingdom.com/)
    * [Open an issue in the DevOps repo](https://github.com/18F/DevOps/issues/new?title=set+up+Pingdom+for+%3Cproject%3E) to get this set up.

If your monitoring setup displays uptime statistics for your application, that's great, though not required.
