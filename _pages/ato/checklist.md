---
title: ATO Checklist
navtitle: Checklist
---

The ATO checklist helps you track progress towards a successful launch throughout your project. It is a formatted issue on GitHub, and is the canonical source of information for your path to launch.

To start the security clearance process, [create an issue in the Infrastructure repository](https://github.com/18F/Infrastructure/issues/new?title=ATO+for+%5Bproject%5D-+due+%5Bdeadline%5D) using [this template](https://raw.githubusercontent.com/18F/before-you-ship/master/_includes/ato_checklist.md) as the body. Make sure to replace the placeholders (the things in `[square brackets]`). Feel free to add a username after each task to assign it, and/or make corresponding items in your issue tracker. Unless otherwise specified, all tasks are the responsibility of the project team.

The tasks are in suggested order of priority, though they can often be done in parallel. Note that **all of the prerequisite tasks need to be completed before your project will be scheduled for a sprint**.

Make sure to:

* Mention the [@18F/ato](https://github.com/orgs/18F/teams/ato) team in any issues or pull requests.
* Leave a comment in the ATO issue when the `Project team` section of the checklist is complete and ready for review.

You are welcome to ask any questions as comments in the issue or #infrastructure.

## Checklist preview

---

{% comment %}
  render the checklist, showing the checkboxes (as GitHub will) and making the links back to this site relative
  https://github.com/jekyll/jekyll/issues/1303#issuecomment-21067548
{% endcomment %}
{% capture checklist_content %}{% include ato_checklist.md %}{% endcapture %}
{{ checklist_content | replace: '- [ ]', '* [ ]' | replace: '* [ ]', '* <input type="checkbox" disabled>' | replace: '1. [ ]', '1. <input type="checkbox" disabled>' | replace: 'https://before-you-ship.18f.gov/', '../../' }}
