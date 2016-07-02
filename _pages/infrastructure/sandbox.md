---
title: Sandbox Accounts
parent: Infrastructure
---

Sandbox accounts - both cloud.gov and AWS - are available to all TTF staff for non-production use. Things to bear in mind about sandbox accounts:

- Sandbox accounts should be used for testing and demonstration
  purposes. Nobody outside the federal government should be given
  access details for systems running in the sandbox unless
  authentication is in place. Exposing systems to the public without
  authentication requires an [ATO](../../ato/).
- Sandbox accounts _must_ be used when you are sending internet traffic to a non-production system: tools such as ngrok and localtunnel are strictly forbidden since they can enable your machine to be compromised.
- No sensitive or [personally identifiable information](../../security/pii) should be stored in sandbox accounts.
- Any system that is publicly routable for more than one day must have
a robots.txt configuration that prevents indexing by search engines.

## Cloud.gov sandbox accounts ##

Information on cloud.gov sandboxes is available in the
[Getting Started section of the cloud.gov documentation](https://docs.cloud.gov/getting-started/accounts/).
## AWS sandbox accounts

Anybody in TTS can get an AWS sandbox account. Sandbox users have
`power user` access, which means they have full privileges to all AWS services
except Identity and Access Management (IAM).

Everything in the sandbox accounts gets deleted once a week, at 11pm
Eastern time on Sunday night. A notification email gets sent out at
11pm Eastern time on Thursday night detailing the resources that will
be deleted: all sandbox users should [subscribe to receive this email](https://groups.google.com/a/gsa.gov/forum/#!forum/chandika-updates).

You can however protect resources from deletion by following two
steps. First, register the system you are working on in
[Chandika](https://chandika.apps.cloud.gov). When creating the system,
make sure you enter a short, unique name for your system in the field
`Infrastructure Tag`. Second, make sure you tag all resources you create
in the AWS sandbox with the tag `Project=<system_infrastructure_tag>`,
where `<system_infrastructure_tag>` is the name you entered under
`Infrastructure Tag` in Raktabija.

[Request a sandbox account here](https://docs.google.com/a/gsa.gov/forms/d/1h3dSZ0BgYvWowo6OvYlGQq2uwhqg0GxklpLTnWGqHSs/viewform)

## Important notes for AWS users

There are a few special notes on using any IaaS in the Federal context.

### Other people's money

The Federal Government cannot pay one penny more than it is authorized to spend. There is no retroactive justification for spends. When Government exceeds these limits, a report and explanation is required to the GSA Administrator, General Counsel, and Congress. So tracking costs is a *big deal*.

Every inter-agency agreement (IAA) at 18F needs to have a line item on a total value to spend on infrastructure, including Amazon Web Services (AWS). Unless it is part of a negotiation with 18F Infrastructure, we *do not* pay for non-production hosting costs. All costs must go back to the Federal partner or another funding source. There is no actual concept of _non-billable_ - there are only costs that are directly or indirectly billable. If we don't bill a funding source, it means that 18F's rates must go up that next fiscal year in order indirectly recoup costs.

### Security

Once you gain access to AWS, you will find yourself responsible for some serious stuff.

#### Credentials

These are things like your AWS password, secret API key, and the
mobile device that generates your multi-factor authentication
token. You are wholly and solely responsible for safeguarding them,
and are responsible if they are released to non-authorized parties.

In particular, your AWS credentials, like all other credentials and
secrets, must *never* be checked in to version control. If you check
them in by mistake, please treat this as a
[security incident](https://github.com/18F/security-incidents#process).

If you are unfamiliar with how to protect these credentials, please consult with 18F Infrastructure. We're working on getting additional tools to help make this easy for everyone.

#### OS baseline

We use a pre-hardened version of [Ubuntu](https://en.wikipedia.org/wiki/Ubuntu_%28operating_system%29) as our baseline OS for all EC2 instances in AWS. In AWS, there are [Amazon Machine Images](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html) (AMIs) in each AWS Region that these controls already implemented. You should always launch new instances from this baseline.

#### HTTPS Everywhere

Regardless of what your system does, we enforce [HTTPS Everywhere](https://18f.gsa.gov/2014/11/13/why-we-use-https-in-every-gov-website-we-make/).
