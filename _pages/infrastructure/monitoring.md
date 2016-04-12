---
title: Monitoring
parent: Infrastructure
---

There are several kinds of monitoring that you will need to have in place for any application:
* **Downtime:** Is the app available?
* **Errors:** Is the app generating errors at an unacceptable rate?
* **Performance:** Even if the app is functional, is it unusably slow?

Monitoring is only useful if the relevant people are alerted when something goes wrong, and then only if those individuals...

* consider these alerts worth investigating
* have sufficient access and understanding to at least triage and escalate an alert, if not fix it
* have a clear escalation path

It will likely take some tweaking of the thresholds to get the signal-to-noise ratio right. Plan to have monitoring active for several weeks before the go-live date to give the team time to spot problems, practice response and tune the alert conditions.


## Your DevOps Team

At present we don't have a dedicated first-line support team across 18F. Projects need to coordinate their own DevOps teams for alert response.

Teams will need:

* **Reachability:** Alerts should go directly to their devices, not just to Slack.
* **Escalation path:** Team members should know how to at least _start_ dealing with alerts. [Here's a great example from College Scorecard](https://docs.google.com/document/d/1Lfr_IufB9nuTjsZJgsm5CxfBRFVbHj266zMddhzWCJg/edit). (Thanks, @abisker!)
* **Direct access to monitoring systems:** Make sure everyone has a working login on whichever monitoring systems you pick, and has at least a little experience navigating them.
* **Clear expectations of uptime & availability:** At present, 18F staff work 40 hour weeks and there is no requirement to be available in off hours. In practice, people want to make sure their stuff works, and many will jump online to fix things if they see a problem over the weekend. But **there should be no expectation of this**. Furthermore, **this understanding must be established with project partners.** Projects that need greater support coverage should arrange dedicated on-call staff elsewhere.


## Errors & Performance Problems

For a non-static site, you will want to know if exceptions are being thrown within your application. Options:

* [New Relic APM](http://newrelic.com/application-monitoring)
    * See [the FISMA Ready instructions](https://github.com/fisma-ready/new-relic) for useful settings to go in the New Relic `ini` file.
    * At time of writing, [New Relic Alerts](https://docs.newrelic.com/docs/alerts/new-relic-alerts/getting-started/new-relic-alerts) is in open beta. While it doesn't yet provide all the features of the legacy system, it's already enough of an improvement that it's worth checking out.
    * For [New Relic](https://newrelic.com) access, [open an issue in the DevOps repo](https://github.com/18F/DevOps/issues/new?title=New+Relic+account+for+%3Cname%3E) to get an account set up for your project.
* [Sentry](https://getsentry.com/)
    * You can deploy/manage this yourself—see the [deployment instructions](https://github.com/18F/how-to-deploy/blob/master/sentry/README.md). However, @jmcarp has set up [sentry.18f.gov](https://sentry.18f.gov/) for 18F-wide use. _(Moar docs needed here!)_

### Alert Conditions

Error & performance monitors can trigger alerts on a number of different conditions, including:

* Error counts (total or percentage)
* [Apdex score](http://apdex.org/overview.html) (a responsiveness statistic)
* Throughput
* Response time
* Custom metric (which can be sent to monitors for logging using the monitor's  client library)

All of the above can be set with thresholds for given time periods; for example, alerting if more than 2% of transactions in any five-minute period return errors.

We recommend creating a mixture of alert conditions during development and tuning them based on the current performance of the app. You may have an Apdex target of 0.9, but if the app is regularly scoring lower then it's counter-productive to keep that as an alert threshold: you'll just fill the alerts with noise that can't be dealt with quickly. The work to meet that performance should be managed at the project level.

Once you've created alert conditions, **ensure that they're actually working.** It helps if you have errors or performance problems that you can trigger on demand; if the production environment is already live to the public then you might need to push a test branch to staging and try your conditions there. Also, when testing conditions, make sure to limit their notifications to only go to you, or you'll need to warn everyone in advance.

## Downtime

You will want to know if your site goes down. Options:

* [New Relic Synthetics](http://newrelic.com/synthetics)
* [Pingdom](https://www.pingdom.com/)
    * [Open an issue in the DevOps repo](https://github.com/18F/DevOps/issues/new?title=set+up+Pingdom+for+%3Cproject%3E) to get this set up.

## Notification Methods

Ways to alert DevOps & project team members:

* **Slack**, though you may not want all errors going to the project's main Slack channel. (See the section below on [grouping notification channels](#grouping-notification-channels))
* **SMS**, which is only available through certain services - Pingdom and PagerDuty provide SMS, but New Relic doesn't; instead it has...
* **Push Notifications**, for which team members need to have the mobile app installed and registered.
* **Email**, which in practice isn't as useful since most people aren't immediately alerted by it.

### Grouping Notification Channels

New Relic (and possibly other monitoring tools) allows you to group notification targets - that is, individuals and Slack channels. This makes it easier to ensure that different kinds of alerts only go to team members who can act on them.

## Good production practices

- **Must-have:** User-representative tests (eg can access service, can perform a critical operation) running regularly. Both of the downtime monitors mentioned above can be scripted to perform and verify multi-step transactions.
- Tests of sub-components also running regularly. Monitoring at the sub-component level will make it significantly easier to diagnose higher-level problems.
- Historical graph (e.g. uptime)
- Tests are run frequently
- Tests are reported with low latency
- Behavior vs stated service-level targets is tracked
- Dev team regularly reviews errors caught by monitors for triage and fixing (even if they didn't set off alerts)
