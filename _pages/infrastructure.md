---
title: Infrastructure
---

At some point, you're going to want to put the system you are building
live. You should decide the final destination of your system early on
in the project. If you're building a site that has no server-side
code, your options are [cloud.gov](#cloudgov-1), [Federalist](#federalist), or [18F pages](#f-pages). If you're
going to host server-side code, you should aim to deploy to [cloud.gov](#cloudgov),
but we also support deployments to [AWS](#amazon-web-services-aws).

Whichever option you choose, you should start deploying to a
production-like environment from early on in the development
process. In particular, sending traffic from the internet to your
local machine for testing purposes is strictly forbidden. In order to
enable testing, you can request [sandbox accounts](sandbox/) on both cloud.gov and AWS.

### Notes

* Below, "internal" projects mean "things built by and for 18F", i.e. "not for a partner agency".
* **If an option isn't listed below, you probably can't use it** for deploying 18F projects. This includes:
    * GitHub Pages ([why](https://18f.gsa.gov/2015/05/14/18Fpages/))
    * Heroku
* Any questions? Ask in [#infrastructure](https://18f.slack.com/messages/infrastructure/).

### Server-side code

#### cloud.gov

18F uses Amazon Web Services (AWS) GovCloud as the underlying Infrastructure-as-a-Service (aka IaaS) cloud platform, but spending effort at the IaaS level is not the best use of your team’s time. 18F has invested in developing cloud.gov to provide for the most common infrastructure needs. cloud.gov uses Cloud Foundry – an open source Platform-as-a-Service (PaaS) – as team-friendly abstraction above AWS, encapsulating best-practice cloud hosting without having to worry about a lot of the details. For most of the products that 18F develops, deploying onto cloud.gov will:

- Make it easier for teams to ensure high availability/scalability
- Reduce security concerns
- Minimize ATO compliance overhead (which can be hefty)
- Reduce 18F’s overhead for handling infrastructure billing, since it is fully self-service
- Minimize any delays due to missing access on the AWS level

As a result, it will reduce the portion of your team’s capacity that
you need to dedicate to operational concerns. For this reason, when
making infrastructure decisions, **opt to use cloud.gov for your
deployment whenever possible, and only resort to directly using AWS
for infrastructure pieces that are impossible to achieve through
cloud.gov**.

Excellent, comprehensive [documentation](https://docs.cloud.gov/) for
cloud.gov is available.

Cloud.gov is currently
[in process to receive a FedRAMP JAB Provisional ATO at
the Moderate level](https://www.fedramp.gov/marketplace/fedramp-ready-systems/18f-cloud-gov/).

#### Amazon Web Services (AWS)

If you do want to use AWS directly, see the [AWS](aws/) page.

#### FISMA High systems

There are some specific cases where the product is
[classified](../ato/levels/) “FISMA High”. This would usually only
happen due to your product handling extremely sensitive information or
being critical to normal government function. AWS GovCloud has
received a [FedRAMP JAB Provisional ATO at the High level](https://www.fedramp.gov/marketplace/compliant-systems/amazon-web-services-aws-government-community-cloud-govcloud/).

Note however that when partner agencies assert that **of course** their product will be FISMA High, 18F often finds upon examination that a product should be really be judged FISMA Moderate or FISMA Low... So don’t discard cloud.gov or AWS as options before probing that point carefully!

### Static sites

#### cloud.gov

See cloud.gov page on [deploying static sites](https://docs.cloud.gov/apps/static/).

* **Internal:** Likely free, but start by checking with #cloud-gov-business with your use case.
* **External:** see the [pricing page](https://docs.cloud.gov/intro/pricing/pricing-model/)

#### Federalist

See [the Federalist homepage](https://federalist.18f.gov) for more information.

* **Internal:** Likely free, but start by checking with #federalist with your use case.
* **External:** Federalist is currently offered for $12000/year. Check in with #federalist about your sales lead!

#### 18F Pages

Find instructions [here](https://github.com/18f/pages-server#publishing).

* **Internal:** Check with #wg-documentation with your use case.
* **External:** not applicable
