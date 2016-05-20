---
title: Infrastructure
---

Below, "internal" projects mean "things built by and for 18F", i.e. "not for a partner agency".

### Servers

#### cloud.gov

18F uses Amazon Web Services (AWS) as the underlying Infrastructure-as-a-Service (aka IaaS) cloud platform, but spending effort at the IaaS level is not the best use of your team’s time. 18F has invested in developing cloud.gov to provide for the most common infrastructure needs. cloud.gov uses Cloud Foundry – an open source Platform-as-a-Service (PaaS) – as team-friendly abstraction above AWS, encapsulating best-practice cloud hosting without having to worry about a lot of the details. For most of the products that 18F develops, deploying onto cloud.gov will:

- Make it easier for teams to ensure high availability/scalability
- Reduce security concerns
- Minimize ATO compliance overhead (which can be hefty)
- Reduce 18F’s overhead for handling infrastructure billing, since it is fully self-service
- Minimize any delays due to missing access on the AWS level

As a result, it will reduce the portion of your team’s capacity that you need to dedicate to operational concerns. For this reason, when making infrastructure decisions, **opt to use cloud.gov for your deployment whenever possible, and only resort to directly using AWS for infrastructure pieces that are impossible to achieve through cloud.gov**.

#### Amazon Web Services (AWS)

If you do want to use AWS directly, see the [AWS](aws/) page.

#### FISMA High systems

There are some specific cases where the product is [classified](../ato/levels/) “FISMA High”. This would usually only happen due to your product handling extremely sensitive information or being critical to normal government function. FISMA High products require wholly dedicated infrastructure, so neither cloud.gov nor AWS are options for deploying them.

Note however that when partner agencies assert that **of course** their product will be FISMA High, 18F often finds upon examination that a product should be really be judged FISMA Moderate or FISMA Low... So don’t discard cloud.gov or AWS as options before probing that point carefully!

### Static sites

There are several options for deploying static sites at 18F:

#### cloud.gov

See cloud.gov page on [deploying static sites](https://docs.cloud.gov/apps/static/).

* **Internal:** free
* **External:** see the [pricing page](https://docs.cloud.gov/intro/pricing/pricing-model/)

#### Federalist

See [the Federalist homepage](https://federalist.18f.gov) for more information.

* **Internal:** free
* **External:** ask in [#federalist](https://18f.slack.com/messages/federalist/)

#### 18F Pages

Find instructions [here](https://github.com/18f/pages-server#publishing).

* **Internal:** free
* **External:** not applicable
