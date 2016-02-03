---
title: Levels of ATO
navtitle: Levels
---

This part of the process looks at the functionality and data of the system, and categorizes its impact on three metrics (`confidentiality`, `integrity`, and `availability`) with three impact levels (`low`, `moderate`, `high`). The metrics are objective, while the levels are subjective. It is either the designated Authorizing Official (AO) or full AO who owns the final decision - they should consult broadly within their organization before making a decision, especially with new system functions or new data.

ATOs are broken down to the following levels:

* [Open Data](#open-data-atos)
* FISMA Low
* FISMA Medium
* FISMA High

For more information, see [NIST 800-18](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf):

* [Table 1](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf#page=27) for FIPS categorization
* [Section 3.13](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf#page=31) for security controls

Note that Open Data won't be listed, as it was developed within 18F.

### Categorize

* Low, Moderate, High refer to the impact on either the government or the public if the metric is lost.
* The `Open Data` level is defined by confidentiality N/A, integrity low, and availability low
* conditions
    * [Sensitive PII](../../security/pii/) always raises the level to at least Moderate for the confidentiality and integrity metrics.
    * If there is any authorization or authentication being done, it is likely at the Moderate level for all metrics.
* At 18F, the vast majority of use cases and data types have been categorized by the designated 18F AO, who is currently the Infrastructure Director (Noah Kunin).
* technically there is no overall level, so go with the high water mark for each of the three verticals
* just because we need high for availability, doesn't mean it needs high confidentiality or integrity.
* The framework we usually use, since must address a high water mark methodology anyway, is to ask ourselves (and the agency we are creating the system with) 3 worst case scenario questions:
    * What is the worst possible outcome if all of the confidentiality of the system is lost?
    * What is the worst possible outcome if all of the integrity of the system is lost?
    * What is the worst possible outcome if all of the availability of the system is lost?
* The answer to each question, should then be interpreted in terms of impact to either the government or the public. In either case, the high water mark for either impacted party must be used.
* The full list of data and functions (in government parlance, these are mission based information types and delivery mechanisms) in and of the system, must be itemized in structured data. While the data types are obviously arbitrary and custom to each system we produce, the Government has a formalized data set of mission functions that should be mapped to the system via NIST 800-60.
    * for a Rails app, this can simply be a link to the `db/schema.rb` on GitHub
* The canonical or singular nature of a function being provided by the system must be taken into consideration in the categorization. The more singular and canonical the system under evaluation is, the higher the impact level (for any of the three metrics). For example, if we re-post data from weather.gov, it is less impactful for us to lose availability than it is for weather.gov itself. Conversely, we are the only source of FedBizOpps data - therefore our availability is much more important for that data and function, and we should select a higher impact level for availability.

### Open Data ATOs

To qualify for an Open Data ATO, all of the following must be true:

* You are not dealing with Sensitive [Personally Identifiable Information (PII)](../../security/pii/)
* There is no user authentication involved
* There is no user authorization involved
* This is not the only place in the world to complete a particular task that's fundamental to what an agency does (e.g. the EPA tracking hazardous waste)
* All data/content is publicly available

Note that, despite the name, Open Data ATOs are not limited to data-heavy projects; "data" really means "information". If you will be using one of the FISMA levels, you should consult Noah Kunin when you begin planning.
