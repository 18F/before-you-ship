---
title: Static Security Analysis
navtitle: Static Analysis
parent: Security
---

Static analysis is an important part of the development process, and is required for ATO. There are two main types of static security testing that needs to be done:

* **Dependency analysis**, where the Ruby gems, Python modules, and JavaScript packages your app uses are checked against a list of known vulnerabilities.
* **Code analysis**, in which your code is checked against a list of antipatterns.

There are tools for JS, Ruby, and Python, and you are encouraged to set up this scanning early on in the development cycle to prevent unexpected delays when it's time to get your ATO.

## Dependency Analysis (All Languages)

[Gemnasium](https://gemnasium.com) provides dependency scanning for all our supported languages. The CLI tool requires a higher tier account then we currently have, but you can currently use their web version using the 18F account. You can get account details by asking in #devops or [filing an issue in the devops repo](https://github.com/18F/DevOps/issues/new).

## Static Analysis

### Javascript

There are several tools available for running analysis on JS projects, but the most full featured seems to be [ESLint](http://eslint.org). ESLint doesn't offer security scanning out of the box, but it is pluggable and Mozilla has provided a set of rules that mimic the behavior of their now deprecated ScanJS. These rules are available on [github](https://github.com/mozfreddyb/eslint-plugin-scanjs-rules).

To install:

    $ npm install eslint
    $ npm install eslint-plugin-scanjs-rules

To scan, from your project directory (for now, you can use the eslintrc file found [here](https://github.com/mozfreddyb/eslint-config-scanjs/blob/master/.eslintrc)):

    $ eslint -c <PATH_TO_ESLINTRC> .

### Ruby

There are several free and paid services that will do static security analysis of Ruby code, but almost all of them appear to be wrappers around [Brakeman](https://github.com/presidentbeef/brakeman). As such, we suggest going straight to the source.

To install:

    $ gem install brakeman

To scan, from your project directory:

    $ brakeman

### Python

There are surprisingly few security focused static code analyzers for Python.  The best seems to be OpenStack's [Bandit](https://github.com/openstack/bandit).

To install (preferably in a virtual environment):

    $ pip install bandit

To scan, from your project directory:

    $ bandit -r .

## Automation and future plans

A representative from Code Climate recently gave a presentation at 18F about their new platform and CLI tool. It acts as a wrapper around Docker images that can run any number of scans across projects, and many of the above tools are already available as engines for the platform (Brakeman, bundler-audit, nsp, and ESLint). The lift to create a new engine seems relatively low, so plans are in the works to attempt to package Bandit as an engine as well.

Using a single tool for all of our static security analysis would allow all projects and teams, regardless of language, to have the same workflow with minor config changes required. It also would allow for easy insertion into a project's existing CI workflow. We already have this advantage with dependency analysis.
