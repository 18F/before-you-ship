---
title: Levels of ATO
---

ATOs are broken down to the following levels:

* Open Data
* FISMA Low
* FISMA Medium
* FISMA High

See [NIST SP 800-18 Rev. 1 Section 3.13 ](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf#page=31) for more information. Note that Open Data won't be listed, as it was developed within 18F.

### Criteria for Open Data ATOs

The following are signs that your ATO process cannot qualify for as Open Data, and thus will be more complicated:

* Are you dealing with Sensitive Personally Identifiable Information (PII)? ([see explanation](../../security/pii/))
* Any authentication?
* Any authorization?
* Is this the only place in the world you can do x? Is that x fundamental to what that agency does? (e.g. EPA tracking hazardous waste)
* Is the data not open?

If you will be using one of the FISMA levels, you should consult Noah Kunin when you begin planning.
