---
title: Static Security Analysis
navtitle: Static Analysis
parent: Security
---

Static analysis is an important part of the development process, and is required for ATO. There are two main types of static security testing that needs to be done:

* [**Dependency analysis**](#dependency-analysis), where the Ruby gems, Python modules, and JavaScript packages your app uses are checked against a list of known vulnerabilities.
* [**Code security analysis**](#code-analysis), in which your code is checked against a list of antipatterns.

There are tools for JS, Ruby, and Python, and you are encouraged to set up this scanning early on in the development cycle to prevent unexpected delays when it's time to get your ATO. Note that there are _many_ tools out there for doing code style linting, but this page is specifically security-focused.

### Services

Service | Dependency analysis | Code security analysis
--- | --- | --- | ---
[Code Climate](https://codeclimate.com/) | [Ruby](https://docs.codeclimate.com/v1.0/docs/bundler-audit) and [Node](https://docs.codeclimate.com/v1.0/docs/nodesecurity) (on `push` only) | [Rails](https://docs.codeclimate.com/v1.0/docs/brakeman) and [Node](https://docs.codeclimate.com/v1.0/docs/eslint) (using [plugins](#javascript))
[Gemnasium](#gemnasium) | [list](http://support.gemnasium.com/knowledgebase/articles/1162735-what-dependency-technologies-are-you-supporting) | N
[Hakiri](https://hakiri.io/) | Ruby | Rails only

#### Gemnasium

Gemnasium is used to scan your code for possible security issues and provides alerts for new issues that come to light.

##### Setting up your account

1. [Sign into Gemnasium using your GitHub account.](https://gemnasium.com/login)
1. Go to [your settings page](https://gemnasium.com/settings) and change it to use your work email, if it isn't already.
1. Ask in [#infrastructure](https://gsa-tts.slack.com/messages/infrastructure/) to be invited to the devops@gsa.gov account.
1. This provides you with access to the common dashboard for our projects. Make sure your project has multiple people with access to the gemnasium dashboard.

##### Adding projects

Do not add repos to Gemnasium on your individual account.

Unfortunately, Gemnasium struggles (as of 01/2017) to handle all of 18F's repositories when adding a new one to monitor. Instead, use this work around:

1. Go to [https://gemnasium.com/projects/new_from_github?for=11206](https://gemnasium.com/projects/new_from_github?for=11206).
1. Open the web developer console in your browser.
1. Edit this text (replacing `18F/repo-name` for your repo) and execute it:

    ```
    $('[name=submit_github_projects]').before('<input type="hidden" name="full_names[]" value="18F/repo-name" />').click()
    ```

1. [Add the Gemnasium webhook to the GitHub repository.](http://support.gemnasium.com/knowledgebase/articles/829368-how-do-i-manually-create-a-webhook-on-github)

### Dependency analysis

Use one of the services above, which should support adding public repositories yourself. If you need scanning on a private repository, [file an issue in the Infrastructure repo](https://github.com/18F/Infrastructure/issues/new).

### Code analysis

This is commonly referred to as "static analysis". Code analysis can be done by a [service](#services) (recommended), or within your existing continuous integration tool. Additional configuration information available below.

#### JavaScript

There are several tools available for running analysis on JS projects, but the most full featured seems to be [ESLint](http://eslint.org). ESLint doesn't offer security scanning out of the box, but it is pluggable and Mozilla has provided a set of rules that mimic the behavior of their now deprecated ScanJS. These rules are available on [github](https://github.com/mozfreddyb/eslint-plugin-scanjs-rules).

To install:

    $ npm install eslint-config-scanjs

To scan, from your project directory:

    $ eslint .

If you have an existing `.eslintrc` file in your project root, you can instead download the file elsewhere and run:

    $ eslint -c <PATH_TO_ESLINTRC> .

#### Python

There are surprisingly few security-focused static code analyzers for Python. The best seems to be OpenStack's [Bandit](https://github.com/openstack/bandit).

To install (preferably in a virtual environment):

    $ pip install bandit

Download the [config file](https://github.com/18F/compliance-toolkit/blob/master/configs/static/.bandit) from the compliance-toolkit repo into your project root. It will be automatically detected when you run Bandit.

To scan, from your project directory:

    $ bandit -r .

#### Config files

Basic config files for the three static analysis tools can be found in the [compliance-toolkit repo](https://github.com/18F/compliance-toolkit). These currently are little more than the default settings, but the recommendations may change. If you find a test that you believe is invalid, file an issue in the repo and give a shout in #cloud-gov-highbar in Slack.

We are especially interested to know if you get lots of false positives. We believe the default config files will grow and evolve, but the most up-to-date versions will always be found in the repo.

More advanced configuration options for all three tools can be found in their respective docs.

### Automation and future plans

A representative from Code Climate recently gave a presentation at 18F about their new platform and [CLI](https://github.com/codeclimate/codeclimate). It acts as a wrapper around Docker images that can run any number of scans across projects, and many of the above tools are already available as [engines](https://docs.codeclimate.com/docs/list-of-engines) for the platform (Brakeman, bundler-audit, nsp, and ESLint). The lift to [create a new engine](http://blog.codeclimate.com/blog/2015/07/07/build-your-own-codeclimate-engine/) seems relatively low, so plans are in the works to [attempt to package Bandit as an engine](https://trello.com/c/PTL7z9uU/20-investigate-writing-a-code-climate-platform-engine-for-bandit) as well.

Using a single tool for all of our static security analysis would allow all projects and teams, regardless of language, to have the same workflow with minor config changes required. It also would allow for easy insertion into a project's existing CI workflow. We already have this advantage with dependency analysis.
