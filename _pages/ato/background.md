---
title: Background on the Risk Management Process
navtitle: Background
---

One of the goals of the Federal Information Security Management Act of 2002 (FISMA) is to "provide a comprehensive framework for ensuring the effectiveness of information security controls over information resources that support Federal operations and assets." The National Institute of Standards and Technology (NIST) was tasked with designing and implementing this framework: the result is NIST's Risk Management Framework (RMF). All federal information and information systems (except classified information and national security systems) are subject to NIST's RMF.

There's [an introduction to the RMF on NIST's website](http://csrc.nist.gov/groups/SMA/fisma/framework.html). A more comprehensive guide, including how to apply the framework, references to the various relevant publications, and definitions of roles and responsibilities, is found in NIST's [Special Publication 800-37](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-37r1.pdf).

A key role in the RMF is the Authorizing Official (AO). By default this is the agency head, but they can delegate this authority. In the GSA TTS, the Director of Infrastructure is the delegated AO. The AO is ultimately responsible for determining if the risk of operating the system is acceptable, and if so, issuing an Authority to Operate (ATO) for that system.

The steps in the process are as follows:

### Step 1: Categorize Information System

The information systems' owner, working with the AO, categorizes the system based on the potential impact on the organization if the information system, or the information within it, is jeapordized. The system will end up with a category of _low_, _moderate_ or _high_, based on criteria described in [FIPS Publication 199](http://csrc.nist.gov/publications/fips/fips199/FIPS-PUB-199-final.pdf), which is summarized [here](../levels/).

### Step 2: Select Security Controls

The information system's owner, working with the AO, decides which controls should be implemented. NIST's encyclopedic [Special Publication 800-53](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r4.pdf) (currently on revision 4) is the definitive guide to security and privacy controls for federal information systems. Which controls are selected is based on the following:

* *The impact level of the system* (low, moderate or high). SP 800-53 provides a "baseline" set of controls for each level. The higher the level, the more controls or control enhancements are in scope. For systems running on cloud infrastructure, you should consult [FedRAMP's security control documentation](https://www.fedramp.gov/resources/documents-2016/).
* *Which controls are already taken care of by your infrastructure*. If you're running in the cloud, many controls are taken care of at the infrastructure or platform layer. If your provider has received a FedRAMP ATO, it will provide a document called a _customer responsibility matrix_ (CRM) listing the residual or hybrid controls that are the responsibility (or partial responsibility) of the applications running on the infrastructure or platform.
* *What type of ATO you want to receive*. The GSA provides a "lightweight" ATO process designed for pilot systems running on GSA authorized infrastructure, for which fewer controls are in scope.
* *Tailoring*. The information system owner, working with the AO and the agency's information security team, can then add, remove or modify controls to achieve cost-effective, risk-based security, based on the agency's mission or business need.

This step should happen as an integral part of any system design activities. The team should also develop a monitoring strategy to ensure that security controls continue to be effective once the system receives its authority to operate. The results of this step of the RMF are documented in a _System Security Plan_, or SSP. SSP templates are available for both GSA LATOs and FedRAMP ATOs.

### Step 3: Implement Security Controls

As part of system development work, controls are implemented. The implementation is documented in the SSP.

### Step 4: Assess Security Controls

Before your system can go live with government information, your contol implementation must be tested. Testing is often performed by the development team and infrastructure team working together with the agency's information security team, based on a security assessment plan. The security assessment plan will depend upon the type of ATO. FedRAMP has a [Security Assessment Framework](https://www.fedramp.gov/resources/documents-2016/) for FedRAMP ATOs, as does the GSA for its LATOs.

The results of the assessment are documented in a _security assessment report_ (SAR). Depending on the findings of the security assessment, remediation work may have to take place before the system receives its ATO. Other problems that are less critical can be remediated at a later date: these are listed in a document called a _plan of action and milestones_ (POAM or POA&M). POAM templates are available for both GSA LATOs and FedRAMP ATOs.

### Step 5: Authorize Information System

The SSP, SAR and POAM together form a _security authorization package_ (FedRAMP requires a further document: a continuous monitoring strategy). The Authorizing Official will make a risk-based decision whether to grant an ATO based on the information in this package. This decision, made in consultation with other key stakeholders such as the CISO, balances security considerations with the mission and operational needs of the agency. If an ATO is granted, an _authorization decision document_ is issued and signed by the AO which lists the conditions under which the ATO will remain valid, including the ATO's expiry date.

### Step 6: Monitor Security Controls

Once a system receives an ATO, it must be assessed at regular intervals to ensure the effectiveness of the control implementation. Any changes to the system's security boundary or its environment should also be assessed to determine their impact.

### An introduction to compliance

For an introduction to compliance for federal information systems, check out this video by 18F's Aidan Feldman.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-Nc4GXPxpQg?list=PLd9b-GuOJ3nG5zDAg7exOHusZKVVrkhjO" frameborder="0" allowfullscreen></iframe>