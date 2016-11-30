---
title: ATO Impact Levels
navtitle: Impact Levels
---

### Overview

This part of the process looks at the functionality and data of the system, and categorizes the impact on organizations or individuals of an incident which compromises the system. The potential impact is evaluated using three security objectives (`confidentiality`, `integrity`, and `availability`), each of which can be assigned one of three impact levels (`low`, `moderate`, `high`). This process is described in [NIST's FIPS 199 publication](http://csrc.nist.gov/publications/fips/fips199/FIPS-PUB-199-final.pdf). Once the potential impact on these three objectives is determined, the overall impact level of the system is determined based on the "high water mark" principle. This process is described in [NIST's FIPS 200 publication](http://csrc.nist.gov/publications/fips/fips200/FIPS-200-final-march.pdf). 

Determining the impact levels is subjective; it is either the designated Authorizing Official (AO) or full AO who owns the final decision.

### Categorize Using the Three Security Objectives

To categorize your system, go through each of the security objectives and determine the impact on the organization or individuals if the system is compromised. The framework we usually use is to ask ourselves (and the agency we are creating the system with) three worst case scenario questions:

* What is the worst possible outcome if all of the _confidentiality_ of the system is lost? i.e.
    * What if all of the data/content in the system is exposed to the public?
* What is the worst possible outcome if all of the _integrity_ of the system is lost? i.e.
    * What if an error makes it into the data/content?
    * What if an update to the data/content is lost?
* What is the worst possible outcome if all of the _availability_ of the system is lost? i.e.
    * What if the system has downtime?

If the potential impact is a _limited_ adverse effect on organizational operations, organizational assets, or individuals, we select "low". If the potential adverse impact is _serious_, we select "moderate". If the potential adverse impact is _severe or catastrophic_, we choose "high". 

The answer to each question should then be interpreted in terms of impact to either the government or the public. The "high water mark" for either impacted party must be used.

The canonical or singular nature of a function being provided by the system must be taken into consideration in the categorization. The more singular and canonical the system under evaluation is, the higher the impact level (for any of the three metrics). For example, if we re-post data from weather.gov, it is less impactful for us to lose availability than it is for weather.gov itself. Conversely, we are the only source of FedBizOpps data - therefore our availability is much more important for that data and function, and we should select a higher impact level for `availability`.

### Conditions

* [Sensitive PII](../../security/pii/) always raises the level to at least `moderate` for the `confidentiality` and `integrity` metrics.
* If there is any authorization or authentication being done, it is likely at the `moderate` level for all metrics.
* Just because we need `availability: high`, doesn't mean it needs `confidentiality: high` or `integrity: high`.

### Selecting the Overall Impact Level

Once you have decided on the impact level (`low`, `moderate`, `high`) for each of three metrics (`confidentiality`, `integrity`, and `availability`), you must then determine the overall impact level of the system. A _low impact system_ is one in which all three of the security objectives are low. A _moderate impact system_ is one in which at least one of the objectives is moderate, and none are greater than moderate. A _high impact system_ is one in which at least one objective is high. Finally, the GSA TTS recognizes a category of system classified as _open data_, in which the integrity and availability objectives are classified as `low`, and there is zero confidentiality impact because the system contains only [Open Data](#open-data-atos). 

For more information, see [NIST 800-18](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf):

* [Table 1](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-18r1.pdf#page=27) for FIPS categorization
* [Section 3.13](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf#page=31) for security controls

Note that `Open Data` won't be listed, as it was developed within the GSA TTS.

### Examples

* Open Data: beta.fec.gov.
* FISMA Moderate: cloud.gov.
* FISMA High: the login.gov platform.

### Open Data ATOs

To qualify for an Open Data ATO, all of the following must be true:

* You are not dealing with Sensitive [Personally Identifiable Information (PII)](../../security/pii/)
* There is no user authentication involved
* There is no user authorization involved
* This is not the only place in the world to complete a particular task that's fundamental to what an agency does, e.g. the EPA tracking hazardous waste (`availability: low`)
* All data/content is publicly available (`confidentiality: none`)

Note that, despite the name, Open Data ATOs are not limited to data-heavy projects; "data" really means "information". If you will be using one of the FISMA levels, create your [checklist](../checklist/) issue when you begin planning and start the conversation there.
