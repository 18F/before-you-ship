---
title: Levels of ATO
navtitle: Levels
---

ATOs are broken down to the following levels:

* Open Data
* FISMA Low
* FISMA Medium
* FISMA High

For more information, see [NIST 800-18](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf):

* [Table 1](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf#page=27) for FIPS categorization
* [Section 3.13](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf#page=31) for security controls

Note that Open Data won't be listed, as it was developed within 18F.

### Criteria for Open Data ATOs

The following are signs that your ATO process cannot qualify for as Open Data, and thus will be more complicated:

* Are you dealing with Sensitive [Personally Identifiable Information (PII)](../../security/pii/)?
* Any authentication?
* Any authorization?
* Is this the only place in the world you can do x? Is that x fundamental to what that agency does? (e.g. EPA tracking hazardous waste)
* Is the data not open?

If you will be using one of the FISMA levels, you should consult Noah Kunin when you begin planning.
