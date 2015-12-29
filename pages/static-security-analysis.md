---
title: Static Security Analysis
permalink: /static-security-analysis/
---

Static analysis is an important part of the development process, and is required for ATO. There are two main types of static security testing that needs to be done: dependency analysis, where the ruby gems, python modules, and js packages your app uses are checked against a list of known vulnerabilities; and code analysis in which your code is checked against a list of antipatterns. There are tools for JS, Ruby, and Python, and you are encouraged to set up this scanning early on in the development cycle to prevent unexpected delays when it's time to get your ATO.

## Javascript

### Dependency analysis

We recommend using the Node Security Project's [NSP tool](https://nodesecurity.io/tools) to scan your package.json or npm-shrinkwrap.json file for known security issues.

To install:

    $ npm install nsp

To run, from your project directory:

    $ nsp check

### Static code analysis

There are several tools available for running analysis on JS projects, but the most full featured seems to be [ESLint](https://eslint.org). ESLint doesn't offer security scanning out of the box, but it is pluggable and Mozilla has provided a set of rules that mimic the behavior of their now deprecated ScanJS. These rules are available on [github](https://github.com/mozfreddyb/eslint-plugin-scanjs-rules).

To install:

    $ npm install eslint
    $ npm install eslint-plugin-scanjs-rules

___TODO: PROVIDE BASELINE .eslintrc___

To scan, from your project directory:

    $ eslint -c <PATH_TO_ESLINTRC> .

## Ruby

### Dependency analysis

We recommend using [Bundler Audit](https://github/com/rubysec/bundler-audit) to scan your gems for known vulnerabilities. There are other tools available, most notably Gemnasium, but we are currently suggesting Bundler Audit until we can evaluate whether Gemnasium will work as a replacement for all of our languages.

To install:

    $ gem install bundler-audit

To scan, from your project directory:

    $ bundle-audit

### Static code analysis

There are several free and paid services that will do static security analysis of Ruby code, but almost all of them appear to be wrappers around [Brakeman](https://github.com/presidentbeef/brakeman). As such, we suggest going straight to the source.

To install:

    $ gem install brakeman

To scan, from your project directory:

    $ brakeman

## Python

### Dependency analysis

___TODO: DECISION ON GEMNASIUM. IF YES, UPDATE RUBY AND JS SECTIONS ACCORDINGLY___

### Static code analysis

There are suprisingly few security focused static code analyzers for Python.  The best seems to be OpenStack's [Bandit](https://github.com/openstack/bandit).

To install (preferably in a virtual environment):

    $ pip install bandit

To scan, from your project directory:

    $ bandit -r .

## Automation and future plans

A representative from Code Climate recently gave a presentation at 18F about their new platform and CLI tool. It acts as a wrapper around Docker images that can run any number of scans across projects, and many of the above tools are already available as engines for the platform (Brakeman, bundler-audit, nsp, and ESLint). The lift to create a new engine seems relatively low, so plans are in the works to attempt to package Bandit as an engine as well. Using Code Climate Platform for all of our static security analysis would allow all projects to use the same toolset, regardless of language, with minor config changes required. It also would allow for easy insertion intoa project's existing CI workflow.

Additionally, Gemnasium currently supports dependency checking for all of our languages. We are currently looking into it, but it's highly possible that we will discard NSP and Bundler Audit in favor of standardizing on Gemnasium for all projects. Again, this allows for all projects and teams to use use the same toolset.
