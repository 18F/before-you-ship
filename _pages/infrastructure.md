---
title: Infrastructure
---

At some point, you're going to want to move the system you are building
into production. You should decide the final destination of your system early on
in the project. If you're building a site that has no server-side
code, your options are [cloud.gov](#cloudgov-1) or [Federalist](#federalist). If you're
going to host server-side code, you should aim to deploy to [cloud.gov](#cloudgov).
We also support deployments to [Amazon Web Services(AWS)](#amazon-web-services-aws), but with no external support. For GSA systems, see [comparison of hosting options](https://docs.google.com/spreadsheets/d/1TTu6R9vKOR5eiyC0tjF5XfaM9ozVp0FMoKDn_ZJOxG8/edit#gid=0).

Whichever option you choose, you should start deploying to a
production-like environment from early on in the development
process.

Note that sending traffic from the internet to your
local machine for _any_ testing purposes is not permitted. In order to
enable testing, you can request [sandbox accounts](sandbox/) on both cloud.gov or AWS.

### Notes

- Below, "internal" projects mean "things built by and for TTS", i.e. "not for a partner agency".
- **If an option isn't listed below, you probably can't use it** for deploying TTS projects. This includes:
  - GitHub Pages ([why](https://18f.gsa.gov/2015/05/14/18Fpages/))
  - Heroku and other platform services
  - Your personal AWS account
- Any questions? Ask in [#infrastructure](https://18f.slack.com/messages/infrastructure/).

### Server-side code

#### cloud.gov

TTS uses AWS as the underlying Infrastructure-as-a-Service (aka IaaS) cloud platform, but spending effort at the IaaS level is not the best use of your team’s time. TTS has invested in developing [cloud.gov](https://cloud.gov/) to provide for the most common infrastructure needs. cloud.gov uses [Cloud Foundry](https://www.cloudfoundry.org/) – an open source Platform-as-a-Service (PaaS) – as a team-friendly abstraction above AWS, encapsulating good practice cloud hosting without having to worry about a lot of the details. For most of the products that TTS develops, deploying onto cloud.gov will:

- Minimize [ATO](../ato/) compliance overhead (which is quite hefty) and reduce security concerns
- Reduce TTS’s overhead for handling infrastructure billing, since it is fully self-service
- Make it easier for teams to ensure high availability/scalability

As a result, cloud.gov significantly reduces the portion of your team’s capacity that
you need to dedicate to operational concerns. For this reason, when
making infrastructure decisions, **opt to use cloud.gov for your
deployment whenever possible, and only resort to directly using AWS
for infrastructure pieces that are impossible to achieve through
cloud.gov or use new AWS services not yet available in cloud.gov**.

Comprehensive [documentation](https://docs.cloud.gov/) for
cloud.gov is available.

Cloud.gov has
[a FedRAMP JAB Provisional ATO at
the Moderate level](https://marketplace.fedramp.gov/#/product/18f-cloudgov?sort=productName).

#### Amazon Web Services (AWS)

If you do want to use AWS directly, see the [AWS](aws/) page.

#### FISMA High systems

There are some specific cases where the product is
[categorized](../ato/levels/) “FISMA High”. This would usually only
happen due to your product handling extremely sensitive information or
being critical to normal government function. AWS GovCloud has
received a [FedRAMP JAB Provisional ATO at the High level](https://www.fedramp.gov/marketplace/compliant-systems/amazon-web-services-aws-government-community-cloud-govcloud/).

Note however that when partner agencies assert that **of course** their product will be FISMA High, TTS often finds upon examination that a product should really be judged FISMA Moderate or FISMA Low... So don’t discard cloud.gov or AWS as options before probing that point carefully!

### Static sites

#### cloud.gov

See cloud.gov page on [deploying static sites](https://docs.cloud.gov/apps/static/).

- **Internal:** Likely free, but start by checking with #cloud-gov-business with your use case.
- **External:** see the [pricing page](https://docs.cloud.gov/intro/pricing/pricing-model/)

#### Federalist

[More information.](federalist/)
