---
title: Sandbox Accounts
parent: Infrastructure
---

Sandbox accounts - both cloud.gov and AWS - are available to all 18F staff for non-production use. Things to bear in mind about sandbox accounts:

- Sandbox accounts should be used for testing and demonstration
  purposes. Nobody outside the federal government should be given
  access details for systems running in the sandbox unless
  authentication is in place. Exposing systems to the public without
  authentication requires an [ATO](../../ato/).
- Sandbox accounts _must_ be used when you are sending internet traffic to a non-production system: tools such as `ngrok` and `localtunnel` are strictly forbidden since they can allow your laptop to be compromised.
- No sensitive or [personally identifiable information](../../privacy/pii) should be stored in sandbox accounts.
- Any system that becomes publicly routable (ex: for testing) must have a [robots.txt configuration](http://www.robotstxt.org/faq/prevent.html) that prevents indexing by all search engine robots.

## Cloud.gov sandbox accounts ##

Information on cloud.gov sandboxes is available in the
[Getting Started section of the cloud.gov documentation](https://docs.cloud.gov/getting-started/accounts/).

## AWS sandbox accounts

Anybody in 18F can get an AWS sandbox account. Sandbox users have
`power user` access, which means they have full privileges to all AWS services
except Identity and Access Management (IAM).

Everything in the sandbox accounts gets deleted once a week, at 11pm
Eastern Time on Sunday night. A notification email gets sent out at
11pm Eastern Time on Thursday night detailing the resources that will
be deleted: all sandbox users should [subscribe to receive this email](https://groups.google.com/a/gsa.gov/forum/#!forum/chandika-updates).

You can however protect resources from deletion by following two
steps. First, register the system you are working on in
[Chandika](https://chandika.fr.cloud.gov). When creating the system,
make sure you enter a short, unique name for your system in the field
`Infrastructure Tag`. Second, make sure you tag all resources you create
in the AWS sandbox with the tag `Project=<system_infrastructure_tag>`,
where `<system_infrastructure_tag>` is the name you entered under
`Infrastructure Tag` in Chandika.

* [Request a sandbox account](https://docs.google.com/a/gsa.gov/forms/d/e/1FAIpQLSeXlsfDyAZi5P_5lS8InCeZxvA3JA3-g8aYWdkgkFmGPcYmLQ/viewform)
* [Sign in to your sandbox account](https://tts-sandbox.signin.aws.amazon.com/console)

## Important notes for AWS users

There are a few special notes on using any "Infrastructure as a Service" in the Federal context.

### Other people's money

The federal government cannot pay one penny more than it is authorized to spend. There is no retroactive justification for spends. When government exceeds these limits, a report and explanation is required to the GSA Administrator, General Counsel, and Congress. So tracking costs is a *big deal*.

However we recognize that it's important to provide compute resources for 18F
folks to be able to experiment. Thus sandbox users can spend up to
**$500 per month** without explicit permission from Infrastructure. This
money counts towards our operating costs, which are ultimately
indirectly billed to customers in the form of increased rates.

Thus in order to keep our rates low, it's extremely important to bill infrastructure costs,
including non-production costs, to agency partners wherever
possible. If the work you are doing is in support of a project which has an
inter-agency agreement (IAA), you *must* create an entry for your
system in [Chandika](https://chandika.fr.cloud.gov), including the
Tock project code and the infrastructure tag you will be using, and tag
any AWS resources accordingly so we can bill these costs to our partner agencies.

### Credentials

These are things like your AWS password, secret API key, and the
mobile device that generates your multi-factor authentication
token. You are wholly and solely responsible for safeguarding them,
and are responsible if they are released to non-authorized parties.

In particular, your AWS credentials, like all other credentials and
secrets, must *never* be checked in to version control. If you check
them in by mistake, please treat this as a
[security incident](https://github.com/18F/security-incidents#process).

If you are unfamiliar with how to protect these credentials, please consult with 18F Infrastructure. We're working on getting additional tools to help make this easy for everyone.
