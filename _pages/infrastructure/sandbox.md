---
title: Sandbox Accounts
parent: Infrastructure
redirect_to: https://handbook.tts.gsa.gov/launching-software/infrastructure/#sandbox-accounts
---

Sandbox accounts - both cloud.gov and AWS - are available to all TTS staff for non-production use. Things to bear in mind about sandbox accounts:

- Sandbox accounts should be used for testing and demonstration
  purposes. Nobody outside the federal government should be given
  access details for systems running in the sandbox unless
  authentication is in place. Exposing systems to the public without
  authentication requires an [ATO](../../ato/).
- Sandbox accounts _must_ be used when you are sending internet traffic to a non-production system: tools such as `ngrok` and `localtunnel` are strictly forbidden since they can allow your laptop to be compromised.
- No sensitive or [personally identifiable information (PII)](../../privacy/) should be stored in sandbox accounts.
- Any system that becomes publicly routable (ex: for testing) must have a [robots.txt configuration](http://www.robotstxt.org/faq/prevent.html) that prevents indexing by all search engine robots.

## Cloud.gov sandbox accounts

Information on cloud.gov sandboxes is available in the
[Getting Started section of the cloud.gov documentation](https://docs.cloud.gov/getting-started/accounts/).

## AWS sandbox accounts

Anybody in TTS can get an AWS sandbox account. Sandbox users have
`power user` access, which means they have full privileges to all AWS services
except Identity and Access Management (IAM).

- Request a sandbox account:
   - [18F](https://github.com/18F/aws-admin/issues/new?template=new_sandbox_user.md&title=sandbox+account+for+[your+email])
   - [COE](https://docs.google.com/forms/d/e/1FAIpQLSdn8Pjof5xWZSkopkEU6pumQlXGYfU4fMN9efmoDzffm2MW4A/viewform)
- [Sign in to your sandbox account](https://tts-sandbox.signin.aws.amazon.com/console)

### Rules

- The sandbox is for testing and demonstration purposes only. Nobody outside the federal government should be given access details for systems running in the sandbox unless authentication is in place.
- No [sensitive information](https://github.com/18F/open-source-policy/blob/master/practice.md#protecting-sensitive-information) can be stored in the sandbox accounts.
- Creating resources that will cost more than $500 per month requires prior agreement from the Tech Portfolio team.
- All resources must be tagged with a `Project`. Resources without this tag can be deleted at any time.
- Any website that is publicly routable for more than one day must have a robots.txt configuration that prevents indexing by search engines.

## Important notes for AWS users

There are a few special notes on using any "Infrastructure as a Service" in the Federal context.

### Other people's money

The federal government cannot pay one penny more than it is authorized to spend. There is no retroactive justification for spends. When government exceeds these limits, a report and explanation is required to the GSA Administrator, General Counsel, and Congress. So tracking costs is a _big deal_.

However we recognize that it's important to provide compute resources for TTS
folks to be able to experiment. Thus sandbox users can spend up to
**\$500 per month** without explicit permission from Infrastructure. This
money counts towards our operating costs, which are ultimately
indirectly billed to customers in the form of increased rates.

Thus in order to keep our rates low, it's extremely important to bill
infrastructure costs, including non-production costs, to agency partners
wherever possible. If the work you are doing is in support of a project which
has an inter-agency agreement (IAA), you _must_ register your system with
[#infrastructure](https://gsa-tts.slack.com/messages/C039MHHF8/), including the
Tock project code and the infrastructure tag you will be using, and tag any AWS
resources accordingly so we can bill these costs to our partner agencies.

### Credentials

These are things like your AWS password, secret API key, and the
mobile device that generates your multi-factor authentication
token. You are wholly and solely responsible for safeguarding them,
and are responsible if they are released to non-authorized parties.

In particular, your AWS credentials, like all other credentials and
secrets, must _never_ be checked in to version control. If you check
them in by mistake, please treat this as a
[security incident](https://github.com/18F/security-incidents#process).

If you are unfamiliar with how to protect these credentials, please consult with TTS Infrastructure. We're working on getting additional tools to help make this easy for everyone.
