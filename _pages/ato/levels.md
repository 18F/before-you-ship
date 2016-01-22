---
title: Levels of ATO
navtitle: Levels
---

ATOs are broken down to the following levels:

* [Open Data](#open-data-atos)
* FISMA Low
* FISMA Medium
* FISMA High

For more information, see [NIST 800-18](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf):

* [Table 1](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf#page=27) for FIPS categorization
* [Section 3.13](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf#page=31) for security controls

Note that Open Data won't be listed, as it was developed within 18F.

### Open Data ATOs

To qualify for an Open Data ATO, all of the following must be true:

* You are not dealing with Sensitive [Personally Identifiable Information (PII)](../../security/pii/)
* There is no user authentication involved
* There is no user authorization involved
* This is not the only place in the world to complete a particular task
* This functionality is not fundamental to what an agency does (e.g. the EPA tracking hazardous waste)
* All data/content is publicly available

Note that, despite the name, Open Data ATOs are not limited to data-heavy projects; "data" really means "information". If you will be using one of the FISMA levels, you should consult Noah Kunin when you begin planning.
