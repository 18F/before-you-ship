---
title: Personally Identifiable Information (PII)
---

***...and the Privacy Act of 1974.***

**Personally Identifiable Information (PII)** is any information that can distinguish or trace an individual, either alone or when combined with other information. **Sensitive PII** is information that, if misused, could cause substantial harm, embarrassment, inconvenience, or unfairness to a person. 

No system may store Sensitive PII until it has received an [Authority to Operate](../../ato/). If you are uncertain as to the sensitivity of the information your system may process, please speak with [the GSA Privacy Office](https://insite.gsa.gov/portal/category/533866) or 18F Infrastructure beforehand. Note that this process is not analogous to the [Privacy Impact Assessment (PIA)](../../privacy/pia/) and [System of Record Notice (SORN)](../../privacy/sorn/) processes; those must be handled separately and, if necessary, should be initiated as close to the start of the project as possible.

Collecting information that is ancillary to your system's purpose — in a search box, for expample — does not necessarily trigger [the Privacy Act](https://www.gsa.gov/portal/content/104250). On the other hand, a system that, for example, prompts people for contact information to later communicate with them is definitely processing PII.

### Always

While the sensitivity of information is somewhat context-specific, there are certain types of information we always treat as sensitive PII:

* Driver's license or state identification number
* Social security number (SSN)
* Financial account number(s)
* Alien Registration Number
* Passport number
* Biometric identifiers
* Passwords

### Paired

Sometimes sensitive PII can be created by pairing different types of PII. These types of PII become sensitive if paired:

* Citizenship or immigration status
* Ethnic or religious affiliation
* Mother's maiden name
* Last 4 digits of SSN
* Medical information
* Sexual orientation
* Account passwords
* Criminal history
* Date of birth

### Privacy Act Statement

You must inform people from whom you wish to collect PII of the reason you are requesting their information; how you will use their information; and what the consequences are, if any, of their refusal to provide the information you've requested. Implicit in this requirement is the notion of informed consent. 

Privacy Act Statements must be accessible where the PII is collected; for example, on the webpage where the user inputs information. When drafting a Privacy Act Statement, make sure to include the following elements:

* The legal authority for collecting the information – statute, executive order, regulation.
* The purpose(s) for collecting the information and how you will use it.
* A reference to the SORN that covers your system; and
* Whether providing the information is mandatory or voluntary and what the effects of not providing the information are – for example the loss or denial of a privilege, benefit, or entitlement.

Once you've drafted the statement, submit it for review to the Privacy Office.
