* [ ] Notify any users of the system, via banner across the site, email, Slack, etc. Ideally, help them find alternatives, make sure they're off in time, etc. (The needs here will be specific to your use case.)
* [ ] Set up redirect(s), if applicable.
* [ ] Export any production data and put it into Google Drive, for [records retention](https://handbook.18f.gov/records-management/) purposes.
* [ ] Ask [cloud-gov-support@gsa.gov](mailto:cloud-gov-support@gsa.gov) for the cloud.gov organization to be deleted.
* [ ] Delete any associated AWS resources, and decommission any AWS accounts. Ask in [#infrastructure](https://gsa-tts.slack.com/messages/infrastructure) for help.
* [ ] [Archive the GitHub repositor(ies)](https://help.github.com/articles/archiving-repositories/). Ask in [#admins-github](https://gsa-tts.slack.com/messages/admins-github) if you need help.
* [ ] Clean up any DNS entries that are no longer needed, from [the DNS repository](https://github.com/18F/dns) or elsewhere.
* [ ] If there's a custom (second-level) domain, figure out what to do with it.
* [ ] Assuming it has an ATO, notify GSA IT that the system no longer exists. Ask in [#infrastructure](https://gsa-tts.slack.com/messages/infrastructure) for help.
* [ ] Email GSA Privacy Office at [gsa.privacyact@gsa.gov](mailto:gsa.privacyact@gsa.gov) so they can take down the [SORN](https://before-you-ship.18f.gov/privacy/)
* [ ] Fill out and send the `Disposal Notification Template`, which can be found in the list of [IT Security Forms](https://insite.gsa.gov/portal/content/627238)
* [ ] Remove (sub)accounts in external services
    * [ ] Mailchimp/Mandrill
    * [ ] New Relic - [#admins-newrelic](https://gsa-tts.slack.com/messages/admins-newrelic)
    * [ ] PagerDuty
    * [ ] Twilio
* [ ] Remove any external integrations
    * [ ] [Slack](https://handbook.18f.gov/slack/#integrations)
* [ ] Archive the Slack channel
* [ ] Archive the issue tracker (Trello, etc.)
* [ ] Optional: Put up a Federalist site with an embedded Google Form at [the same URL](https://federalist-docs.18f.gov/pages/how-federalist-works/custom-urls/). See [the Fugacious page](https://fugacious.18f.gov/) ([code](https://github.com/18F/fugacious-landing)) as an example.
