---
title: ATO Checklist
navtitle: Checklist
---

The ATO checklist helps you track progress towards a successful launch throughout your project. It is a formatted issue on GitHub, and is the canonical source of information for your path to launch.

To start the security clearance process, [create an issue in the Infrastructure repository](https://github.com/18F/Infrastructure/issues/new?title=ATO+for+%3Cproject%3E+-+due+%3Cdeadline%3E) using [this template](https://raw.githubusercontent.com/18F/before-you-ship/master/_includes/checklist.md). Make sure to replace the placeholders at the top. Feel free to add a username after each task to assign it, and/or make corresponding items in your issue tracker. After the Infrastructure issue is created, the Infrastructure Team will schedule a time to meet with you and discuss the ATO.

Make sure to:

* Mention the [@18F/ato](https://github.com/orgs/18F/teams/ato) team in any issues or pull requests.
* Leave a comment in the ATO issue when the `Project team` section of the checklist is complete and ready for review.

You are welcome to ask any questions as comments in the issue or #infrastructure.

## Checklist preview

---

{% comment %} https://github.com/jekyll/jekyll/issues/1303#issuecomment-21067548 {% endcomment %}
{% capture checklist_content %}{% include checklist.md %}{% endcapture %}
{{ checklist_content | replace: '<', '&lt;' | replace: '>', '&gt;' | replace: '- [ ]', '* [ ]' | replace: '* [ ]', '* <input type="checkbox" disabled>' }}
