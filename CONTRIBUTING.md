## Welcome!

We're so glad you're thinking about contributing to an 18F open source project! If you're unsure or afraid of anything, just ask or submit the issue or pull request anyways. The worst that can happen is that you'll be politely asked to change something. We appreciate any sort of contribution, and don't want a wall of rules to get in the way of that.

Before contributing, we encourage you to read our CONTRIBUTING policy (you are here), our LICENSE, and our README, all of which should be in this repository. If you have any questions, or want to read more about our underlying policies, you can consult the 18F Open Source Policy GitHub repository at https://github.com/18f/open-source-policy, or just shoot us an note to [18f@gsa.gov](mailto:18f@gsa.gov).

## Guidelines

For each task to complete "before you ship", there should be a clear indication of:

* The "what" and the "when" (and maybe the "who")
* The "how", either included in the site or with a link elsewhere
* External links for:
    * The "why" (when available)
    * The legal or regulation text itself (where applicable)
    * Additional information
* Whether it's a hard requirement or a guideline/recommendation/best practice
* Where the item came from (law, regulation, OMB Memo, GSA, the 18F Infrastructure team, etc.)
* Where to get help, e.g.
    * A Slack channel
    * An email list
    * Where to file a GitHub issue
    * A specific person (if necessary)

## Public domain

This project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project are submitted under the CC0
dedication. By submitting a commit, issue, or pull request, you are agreeing to comply
with this waiver of copyright.

## Usage

To run the site locally, you will need Ruby 1.9+. Run:

```bash
bundle
bundle exec ./go serve
```

### Running the tests

```bash
bundle exec ./go test
```
