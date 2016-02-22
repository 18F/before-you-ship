---
title: Levels of ATO
navtitle: Levels
---

In the [ATO Categorization](../categorize/) step, you picked an impact level (`low`, `medium`, `high`) for each of three metrics (`confidentiality`, `integrity`, and `availability`). The combination of these levels across the three metrics then correspond to an overall level:

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

Whatever the highest impact level is among the three metrics will be the overall level of the ATO (i.e. the "high water mark"). This is also known as "selecting the baseline".

### Examples

* Open Data: beta.fec.gov
* FISMA Moderate: cloud.gov, MyUSA
* FISMA High: the forthcoming Identity platform

### Open Data ATOs

To qualify for an Open Data ATO, all of the following must be true:

* You are not dealing with Sensitive [Personally Identifiable Information (PII)](../../security/pii/)
* There is no user authentication involved
* There is no user authorization involved
* This is not the only place in the world to complete a particular task that's fundamental to what an agency does, e.g. the EPA tracking hazardous waste (`availability: low`)
* All data/content is publicly available (`confidentiality: none`)

Note that, despite the name, Open Data ATOs are not limited to data-heavy projects; "data" really means "information". If you will be using one of the FISMA levels, create your [checklist](../checklist/) issue when you begin planning and start the conversation there.
