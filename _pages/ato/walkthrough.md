---
title: ATO Walkthrough
navtitle: Walkthrough
parent: ATOs
---

#### Step 0 - Consult 18F Infrastructure?

As soon as you begin developing an alpha (post Intake, Agreement Financing, and Discovery) you should consult with 18F Infrastructure on the possible risk impacts of your project and the system's boundaries, which will provide important context and scoping for the rest of the risk management framework.

#### Step 1 - Categorize

This part of the process looks at the functionality and data of the system, and categorizes its impact on three metrics (confidentiality, integrity, availability) with three impact levels (low, moderate, high). The metrics are objective - the levels are subjective. It is either the designated Authorizing Official (AO) or full AO who owns the final decision - they should consult broadly within their organization before making a decision, especially with new system functions or new data.

* Low, Moderate, High refer to the impact on either the government or the public if the metric is lost.
* The ‘Open Data’ level is defined by confidentiality N/A, integrity low, and availability low
* conditions
    * Sensitive PII always raises the level to at least Moderate for the confidentiality and integrity metrics.
    * If there is any authorization or authentication being done, it is likely at the Moderate level for all metrics.
* At 18F, the vast majority of use cases and data types have been categorized by the designated 18F AO, who is currently the Infrastructure Director (Noah Kunin).
* technically there is no overall level, so go with the high water mark for each of the three verticals
* just because we need high for availability, doesn’t mean it needs high confidentiality or integrity.
* The framework we usually use, since must address a high water mark methodology anyway, is to ask ourselves (and the agency we are creating the system with) 3 worst case scenario questions:
    * What is the worst possible outcome if all of the confidentiality of the system is lost?
    * What is the worst possible outcome if all of the integrity of the system is lost?
    * What is the worst possible outcome if all of the availability of the system is lost?
* The answer to each question, should then be interpreted in terms of impact to either the government or the public. In either case, the high water mark for either impacted party must be used.
* The full list of data and functions (in government parlance, these are mission based information types and delivery mechanisms) in and of the system, must be itemized in structured data. While the data types are obviously arbitrary and custom to each system we produce, the Government has a formalized data set of mission functions that should be mapped to the system via NIST 800-60.
    * for a Rails app, this can simply be a link to the `db/schema.rb` on GitHub
* The canonical or singular nature of a function being provided by the system must be taken into consideration in the categorization. The more singular and canonical the system under evaluation is, the higher the impact level (for any of the three metrics). For example, if we re-post data from weather.gov, it is less impactful for us to lose availability than it is for weather.gov itself. Conversely, we are the only source of FedBizOpps data - therefore our availability is much more important for that data and function, and we should select a higher impact level for availability.

#### Step 2 - Select Controls (aka the baseline)

* http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r4.pdf#page=109
* Select from:
    * 18F FISMA Open Data baseline (ex: beta.fec.gov) (none | low | low)
    * 18F FISMA Moderate (moderate | moderate | moderate) (ex: cloud.gov, MyUSA)
    * 18F FISMA High (high | high | high) will soon be available modeled after the new Identity platform
* If your system does not fall into one of these buckets (for example, you have a low | moderate | moderate system) you must create a new baseline. You will do this by making a new certification schema in Compliance Masonry.
* it is possible to downgrade the level for any particular control, as long as it doesn’t affect any other controls with a higher level (e.g. account management can be low if it doesn’t allow you to edit confidential data)
* note that there aren’t that many specifics around what each level means for each control

#### Step 3 - Implement the controls

* Creating a Compliance Masonry schema for your system should tell you what controls you need are already handled via encircling systems, and are unnecessary for you to replicate. For example, all of the Physical and Environmental Protection (PE controls in NIST 800-53) are already met by the FedRAMP Authorization Controls on 18F's infrastructure as a service (IaaS) layer, in Amazon Web Services (AWS).
* Any controls that are not met by either the IaaS layer or 18F's platform as a service (PaaS) layer, cloud.gov, should be implemented by your application.
* Most web frameworks (Rails, Django, etc) already include the vast majority of these application level controls and best practices. The more custom functionality you implement, the more attention you should pay to the new attack surface area you create. The majority of the types of scenarios you should be wary of is trusting unsanitized information from the internet, encrypting both at rest and in transit, and privilege escalation. Increasingly, cloud.gov will take care of these controls for you.
* If you need to implement controls that are not implemented elsewhere, research best practices on Google, StackOverflow etc, ask your colleagues if they have advice, then come to in #devops
* In Compliance Masonry, there will be a base set of controls and how they are fulfilled by the underlying system (e.g. Rails), so the Masonry file created for your project will only be the “overrides”.
    * One or two lines per control (or better yet, a link)

#### Step 4 - Assess (i.e. test) the controls

* Run the testing toolkit as it exists at that point (i.e. OWASP Zap, Nessus, Hakiri/CodeClimate, etc etc)
* Insert additional documentation about testing here

#### Step 5 - Authorize the system

* Fill out the System Security Plan (SSP) YML and link from your project’s ATO issue in the DevOps repository.
* The designated AO will conduct a quality assurance check on your materials. You should send materials to the AO as soon as the security boundary of the system is fixed and implemented. This is inherently a subjective judgement call. If your are uncertain as to your system's security boundary, you should consult with 18F Infrastructure early in your development process. If your system is providing novel or risky functions, or handling extremely sensitive data, you should also consult with 18F Infrastructure early, long before you start the risk management process.

#### Step 6 - Continuously monitor the controls

* Ongoing automated scans
