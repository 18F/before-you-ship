---
title: System Security Plan
redirect_to: https://handbook.tts.gsa.gov/launching-software/lifecycle/#system-security-plan
---

As described in [the NIST guide](http://csrc.nist.gov/publications/nistpubs/800-18-Rev1/sp800-18-Rev1-final.pdf#page=7):

> The purpose of the system security plan is to provide an overview of the security requirements of the system and describe the controls in place or planned for meeting those requirements.

At TTS, the system security plan (SSP) is a long Google Doc.

<a href="https://atos.open-control.org/tips/#system-security-plans-ssps" class="usa-button">Tips</a>

## Diagrams

<a href="https://atos.open-control.org/tips/#systemnetwork-diagrams" class="usa-button">General info</a>

### Examples within TTS

- A simple application running on cloud.gov: [FBI Crime Data Explorer](https://docs.google.com/drawings/d/1nwclBJQfbuzsnGOqe88VukQl3uiH1Jfa4c0FT1Cq43I/edit)
- A more complex application running on cloud.gov: [CALC](https://docs.google.com/drawings/d/1k1wykk5PbLKSNJj8FyZbIlpX0D8r1q3-w-uRK_WWt9g/edit)
- Another complex application running on cloud.gov: [data.gov](https://github.com/GSA/datagov-compliance/blob/2e07827/datagov-components-scratchpad.md#boundary-traversal) (drawn with [PlantUML](https://plantuml.com/))
- [A complex application not running on cloud.gov](https://docs.google.com/drawings/d/10cH-OUB1NWzCI0v9LPzm7AXCfrHXNkDgnae-7hcUFu8/edit)
- [cloud.gov itself](https://diagrams.fr.cloud.gov/) (drawn with [Mermaid](http://mermaid-js.github.io/mermaid/))

### Tools

The following have been used / are available for use in TTS:

- Google Drawings
- [Mermaid](http://mermaid-js.github.io/mermaid/)
- [OmniGraffle](https://handbook.tts.gsa.gov/design/#drawing-lines-on-a-screen)
- [PlantUML](https://plantuml.com/)
- [Visio](https://handbook.tts.gsa.gov/design/#drawing-lines-on-a-screen)

## FedRAMP packages

Often you'll be building on top of services that have FedRAMP authorizations. When writing your SSP, you'll need to mark certain controls as "inherited", based on the Customer Responsibility Matrices (CRMs) of the Cloud Service Providers (CSPs).

- For cloud.gov, you can download the CRM from [their website](https://cloud.gov/docs/overview/fedramp-tracker/#how-you-can-use-this-p-ato).
- For others, you'll need to [put in a package request](https://app.docusign.com/templates/details/434e60cc-fbd1-4708-9373-aef41439ff05).
