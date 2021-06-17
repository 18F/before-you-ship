---
title: General Security Standards
navtitle: Security
redirect_to: https://handbook.tts.gsa.gov/security/
---

In the Federal government, the principal law governing the security of information systems is the Federal Information Security Modernization Act (FISMA). For more information on FISMA, check out the [FISMA Implementation Project ](https://csrc.nist.gov/projects/risk-management), which will help you stay up to date and in the know about all things FISMA. If you're inclined to see TTS' intepretation of FISMA from a user-center approach, take a look at a previous project from the TTS Tech Portfolio and cloud.gov known as [FISMA Ready](https://github.com/fisma-ready/introduction).  

Most of the security practices have been integrated into the [ATO](../ato) portion of this guide and summarized in this [slide deck](https://docs.google.com/presentation/d/1IJurX7Jc5XAQqmJSZtGZeJ8pk3IMfEIMRh1frmCpHlA/edit#slide=id.g601ed6ebc1_0_496) from one of the 18F engineers. Here are a few pointers to get you started:

- DevOps isn't a team at TTS, but a skillset. We are all responsible for the security and operations of our systems.
- The security of our users' information is paramount, even moreso when it is [personally identifiable information (PII)](../privacy/). The types of information your system may process helps determine the type of ATOs available to you and [whether or not you will need to conduct a Privacy Impact Assessment (PIA)](../privacy/).
- Be wary of systems that:
  - trust unsanitized information from the internet
  - do not encrypt data, both at rest and in transit
  - may be subject to privilege escalation
  - other items from the [OWASP Top 10](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project)
