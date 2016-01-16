---
title: Common Infrastructure Questions we get from clients
navtitle: Common Questions
---

### Do you support DNSSEC?

DNSSEC compliance is currently impossible, and even if it was possible, it would be without merit on web based systems. If a client wants to set up DNSSEC systems in cloud.gov, for either internal or external based resolution, there's technically nothing that would prevent that. However, we strongly recommend not investing in it, as there are many things you should be doing instead to secure your communications.

For more read the [18F DNSSEC policy here](../../assets/18F DNSSEC Policy 2015.pdf).

### Do you support IPv6?

AWS does not yet support IPv6 for resources created within its Virtual Private Cloud (VPC) systems. Since VPCs are fundamental to our security model, the choice between supporting IPv6 or VPC was obvious. This is also compensated by by AWS being in control of truly massive ranges of IPv4. Since the IPv6 policy is there to ensure Federal agencies are not caught flat footed by a sudden unavailability of IP addresses, we are confident in our mitigation (not to mention the significant network address translation which happens on a PaaS anyway).

As soon as AWS supports IPv6 within VPCs, specifically on their Elastic Load Balancers, it will become available to all clients of cloud.gov. Until then, we are secure in our assessment that AWS will not "accidentally" run out of IPv4, as that would be catastrophic to their business line. AWS has committed to implementing IPv6 well ahead of any shortage of IPv4, and they expect IPv6 in VPCs in 2016.


### Do you allow "Direct Connections"?

18F does not support direct connections, either via fiber or VPN, into the cloud.gov environment. If systems launched on cloud.gov either require initial data from an internal customer system, or ongoing communications with internal customer systems that are unavailable over the public internet, we recommend working with 18F Infrastructure to devise alternatives.
