---
title: Infrastructure
---

18F uses Amazon Web Services (AWS) as the underlying Infrastructure-as-a-Service (aka IaaS) cloud platform, but spending effort at the IaaS level is not the best use of your team’s time. 18F has invested in developing cloud.gov to provide for the most common infrastructure needs. cloud.gov uses Cloud Foundry – an open source Platform-as-a-Service (PaaS) – as team-friendly abstraction above AWS, encapsulating best-practice cloud hosting without having to worry about a lot of the details. For most of the products that 18F develops, deploying onto cloud.gov will:

- Make it easier for teams to ensure high availability/scalability
- Reduce security concerns
- Minimize ATO compliance overhead (which can be hefty)
- Reduce 18F’s overhead for handling infrastructure billing, since it is fully self-service
- Minimize any delays due to missing access on the AWS level

As a result, it will reduce the portion of your team’s capacity that you need to dedicate to operational concerns. For this reason, when making infrastructure decisions, **opt to use cloud.gov for your deployment whenever possible, and only resort to directly using AWS for infrastructure pieces that are impossible to achieve through cloud.gov**.

There are some specific cases where cloud.gov may not be a good choice for your project. This is particularly the case when the product is classified “FISMA High”. This would usually only happen due to your product handling extremely sensitive information  or being critical to normal government function. FISMA High products require wholly dedicated infrastructure, so neither cloud.gov nor AWS are options for deploying them. 

Note however that when partner agencies assert that **of course** their product will be FISMA High, 18F often finds upon examination that a product should be really be judged FISMA Moderate or FISMA Low... So don’t discard cloud.gov or AWS as options before probing that point carefully!
