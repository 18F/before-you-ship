---
title: Decommissioning
parent: infrastructure
---

When taking down a production system, [create an issue in the TTS Tech Portfolio repository](https://github.com/18F/tts-tech-portfolio/issues/new?title=Decommissioning+%5Bproject%5D) using [this template](https://raw.githubusercontent.com/18F/before-you-ship/master/_includes/decommissioning_checklist.md) as the body. Feel free to add/remove tasks as appropriate, add a username after each task to assign it, and/or make corresponding items in your issue tracker. [Here's a more extensive list](https://github.com/18F/myusa/issues/762). The [General Records Schedules 3.x](https://www.archives.gov/records-mgmt/grs.html) are relevant, as well.

You are welcome to ask any questions as comments in the issue or [#infrastructure](https://gsa-tts.slack.com/messages/infrastructure).

## Checklist preview

---

{% comment %}
  render the checklist, showing the checkboxes (as GitHub will) and making the links back to this site relative
  https://github.com/jekyll/jekyll/issues/1303#issuecomment-21067548
{% endcomment %}
{% capture checklist_content %}{% include decommissioning_checklist.md %}{% endcapture %}
{{ checklist_content | replace: '- [ ]', '* [ ]' | replace: '* [ ]', '* <input type="checkbox" disabled>' | replace: '1. [ ]', '1. <input type="checkbox" disabled>' | replace: 'https://before-you-ship.18f.gov/', '../../' }}
