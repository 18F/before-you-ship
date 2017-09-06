---
title: Static Security Analysis
navtitle: Static Analysis
parent: Security
---

Static analysis is an important part of the development process, and is required for ATO. There are two main types of static security testing that needs to be done:

* [**Dependency analysis**](#dependency-analysis), where the Ruby gems, Python modules, and JavaScript packages your app uses are checked against a list of known vulnerabilities.
* [**Code security analysis**](#code-analysis), in which your code is checked against a list of antipatterns.

There are tools for JS, Ruby, and Python, and you are encouraged to set up this scanning early on in the development cycle to prevent unexpected delays when it's time to get your ATO. Note that there are _many_ tools out there for doing code style linting, but this page is specifically security-focused.

## Services

Service | Dependency analysis | Code security analysis
--- | --- | --- | ---
[Code Climate](https://codeclimate.com/) | [Ruby](https://docs.codeclimate.com/v1.0/docs/bundler-audit) and [Node](https://docs.codeclimate.com/v1.0/docs/nodesecurity) (on `push` only) | [Rails](https://docs.codeclimate.com/v1.0/docs/brakeman) and [Node](https://docs.codeclimate.com/v1.0/docs/eslint) (using [plugins](#javascript))
[Gemnasium](#gemnasium) | [list](http://support.gemnasium.com/knowledgebase/articles/1162735-what-dependency-technologies-are-you-supporting) | N
[Hakiri](https://hakiri.io/) | Ruby | Rails only

### Gemnasium

Gemnasium is used to scan your code for possible security issues and provides alerts for new issues that come to light. Their list of supported dependency technologies is [here](http://support.gemnasium.com/knowledgebase/articles/1162735-what-dependency-technologies-are-you-supporting).

#### Setting up your account

1. [Sign into Gemnasium using your GitHub account.](https://gemnasium.com/login)
1. Go to [your settings page](https://gemnasium.com/settings) and change it to use your work email, if it isn't already.
1. Ask in [#infrastructure](https://gsa-tts.slack.com/messages/infrastructure/) to be invited to the devops@gsa.gov account.
1. This provides you with access to the common dashboard for our projects. Make sure your project has multiple people with access to the gemnasium dashboard.

#### Adding projects

Do not add repos to Gemnasium on your individual account.

Unfortunately, Gemnasium struggles (as of 01/2017) to handle all of 18F's repositories when adding a new one to monitor. Instead, use this work around:

1. Go to [https://gemnasium.com/projects/new_from_github?for=11206](https://gemnasium.com/projects/new_from_github?for=11206).
1. Open the web developer console in your browser.
1. Edit this text (replacing `18F/repo-name` for your repo) and execute it:

    ```
    $('[name=submit_github_projects]').before('<input type="hidden" name="full_names[]" value="18F/repo-name" />').click()
    ```

1. [Add the Gemnasium webhook to the GitHub repository.](http://support.gemnasium.com/knowledgebase/articles/829368-how-do-i-manually-create-a-webhook-on-github)

## Dependency analysis

Use one of the services above, which should support adding public repositories yourself. If you need scanning on a private repository, [file an issue in the Infrastructure repo](https://github.com/18F/Infrastructure/issues/new).

## Code analysis

This is commonly referred to as "static analysis". Code analysis can be done by a [service](#services) (recommended), or within your existing continuous integration tool. Additional configuration information available below.

### Go

Use [Go Meta Linter](https://github.com/alecthomas/gometalinter), with the security-related [linters](https://github.com/alecthomas/gometalinter#supported-linters) (like [SafeSQL](https://github.com/stripe/safesql), if you're doing SQL queries) enabled.

### JavaScript

Try [eslint-config-scanjs](https://www.npmjs.com/package/eslint-config-scanjs) and [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security).

### Python

Use [Bandit](https://github.com/openstack/bandit) with the provided [config file](https://github.com/18F/compliance-toolkit/blob/master/configs/static/.bandit) in your project root. There is also a work-in-progress [engine for Code Climate](https://github.com/18F/codeclimate-bandit).

### Config files

Basic config files for some static analysis tools can be found in the [compliance-toolkit repo](https://github.com/18F/compliance-toolkit). These currently are little more than the default settings, but the recommendations may change. If you find a test that you believe is invalid, file an issue in the repo.

We are especially interested to know if you get lots of false positives. We believe the default config files will grow and evolve, but the most up-to-date versions will always be found in the repo.

More advanced configuration options for all the tools can be found in their respective docs.
