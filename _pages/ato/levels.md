---
title: Levels of ATO
navtitle: Levels
---

### Overview

This part of the process looks at the functionality and data of the system, and categorizes its impact on three metrics (`confidentiality`, `integrity`, and `availability`) with three impact levels (`low`, `moderate`, `high`). The combination of these levels across the three metrics then correspond to an overall level, as seen in the table below.

Determining the impact levels (and overall level) is subjective; it is either the designated Authorizing Official (AO) or full AO who owns the final decision.

Every ATO at 18F is done at one of the following levels:

Overall level | Confidentiality | Integrity | Availability
--- | --- | --- | ---
**[Open Data](#open-data-atos)** | none | low | low
**FISMA Low** | low | low | low
**FISMA Medium** | medium | medium | medium
**FISMA High** | high | high | high

For more information, see [NIST 800-18](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf):

* [Table 1](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf#page=27) for FIPS categorization
* [Section 3.13](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf#page=31) for security controls

Note that `Open Data` won't be listed, as it was developed within 18F.

### Categorize

To categorize your system, go through each of the metrics and determine your system's impact level. `low`, `moderate`, and `high` refer to the impact on either the government or the public if the metric is lost. Whatever the highest impact level is among the three metrics will be the overall level of the ATO (i.e. the "high water mark").

The framework we usually use, since must address a high water mark methodology anyway, is to ask ourselves (and the agency we are creating the system with) three worst case scenario questions:

* What is the worst possible outcome if all of the _confidentiality_ of the system is lost? i.e.
    * What if all of the data/content in the system is exposed to the public?
* What is the worst possible outcome if all of the _integrity_ of the system is lost? i.e.
    * What if an error makes it into the data/content?
    * What if an update to the data/content is lost?
* What is the worst possible outcome if all of the _availability_ of the system is lost? i.e.
    * What if the system has downtime?

The answer to each question should then be interpreted in terms of impact to either the government or the public. In either case, the high water mark for either impacted party must be used.

The canonical or singular nature of a function being provided by the system must be taken into consideration in the categorization. The more singular and canonical the system under evaluation is, the higher the impact level (for any of the three metrics). For example, if we re-post data from weather.gov, it is less impactful for us to lose availability than it is for weather.gov itself. Conversely, we are the only source of FedBizOpps data - therefore our availability is much more important for that data and function, and we should select a higher impact level for `availability`.

### Conditions

* [Sensitive PII](../../security/pii/) always raises the level to at least `moderate` for the `confidentiality` and `integrity` metrics.
* If there is any authorization or authentication being done, it is likely at the `moderate` level for all metrics.
* Just because we need `availability: high`, doesn't mean it needs `confidentiality: high` or `integrity: high`.

#### Open Data ATOs

To qualify for an Open Data ATO, all of the following must be true:

* You are not dealing with Sensitive [Personally Identifiable Information (PII)](../../security/pii/)
* There is no user authentication involved
* There is no user authorization involved
* This is not the only place in the world to complete a particular task that's fundamental to what an agency does, e.g. the EPA tracking hazardous waste (`availability: low`)
* All data/content is publicly available (`confidentiality: none`)

Note that, despite the name, Open Data ATOs are not limited to data-heavy projects; "data" really means "information". If you will be using one of the FISMA levels, you should consult Noah Kunin when you begin planning.
