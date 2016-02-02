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

[Gemnasium](https://gemnasium.com) provides dependency scanning for all our supported languages – you should be able to add a public repository by clicking "add new project" after signing up/in with GitHub. If you need scanning on a private repository, [file an issue in the devops repo](https://github.com/18F/DevOps/issues/new).

## Static Analysis

### Javascript

There are several tools available for running analysis on JS projects, but the most full featured seems to be [ESLint](http://eslint.org). ESLint doesn't offer security scanning out of the box, but it is pluggable and Mozilla has provided a set of rules that mimic the behavior of their now deprecated ScanJS. These rules are available on [github](https://github.com/mozfreddyb/eslint-plugin-scanjs-rules).

To install:

    $ npm install eslint
    $ npm install eslint-plugin-scanjs-rules
    $ npm install eslint-plugin-no-unsafe-innerhtml

Download the [config file](https://github.com/18F/compliance-toolkit/blob/master/configs/static/.eslintrc) from the compliance-toolkit repo and copy it to project root.

To scan, from your project directory:

    $ eslint .

If you have an existing `.eslintrc` file in your project root, you can instead download the file elsewhere and run:

    $ eslint -c <PATH_TO_ESLINTRC> .

### Ruby

#### Rails

There are several free and paid services that will do static security analysis of Ruby code, but almost all of them appear to be wrappers around [Brakeman](https://github.com/presidentbeef/brakeman). As such, we suggest going straight to the source.

To install:

    $ gem install brakeman

Download the [config file](https://github.com/18F/compliance-toolkit/blob/master/configs/static/brakeman.yml) from the compliance-toolkit repo and copy it to ./config/brakeman.yml.

To scan, from your project directory:

    $ brakeman

If you saved the config file elsewhere, you can also run:

    $ brakeman -c <PATH_TO_BRAKEMAN_YML>

#### Other Ruby Frameworks 

[Dawnscanner](https://github.com/thesp0nge/dawnscanner) is a scanner that supports Ruby on Rails, Sinatra, and Padrino. It makes an excellent second-line scanner for Rails applications, and a primary scanner for Sinatra & Padrino.

To install:

    $ gem install dawnscanner

To scan from your project directory and get output in the console:

    $ dawn -K .

### Python

There are surprisingly few security-focused static code analyzers for Python. The best seems to be OpenStack's [Bandit](https://github.com/openstack/bandit).

To install (preferably in a virtual environment) (NOTE: There is a version on PyPI, but it is currently out of date. Installation instructions will be updated when that version catches up):

    $ pip install git+https://github.com/openstack/bandit.git

Download the [config file](https://github.com/18F/compliance-toolkit/blob/master/configs/static/.bandit) from the compliance-toolkit repo into your project root. It will be automatically detected when you run Bandit.

To scan, from your project directory:

    $ bandit -r .

## Config files

Basic config files for the three static analysis tools can be found in the [compliance-toolkit repo](https://github.com/18F/compliance-toolkit). These currently are little more than the default settings, but the recommendations may change. If you find a test that you believe is invalid, file an issue in the repo and give a shout in #compliance-toolkit in Slack.

We are especially interested to know if you get lots of false positives. We believe the default config files will grow and evolve, but the most up-to-date versions will always be found in the repo.

More advanced configuration options for all three tools can be found in their respective docs.

## Automation and future plans

A representative from Code Climate recently gave a presentation at 18F about their new platform and [CLI](https://github.com/codeclimate/codeclimate). It acts as a wrapper around Docker images that can run any number of scans across projects, and many of the above tools are already available as [engines](https://docs.codeclimate.com/docs/list-of-engines) for the platform (Brakeman, bundler-audit, nsp, and ESLint). The lift to [create a new engine](http://blog.codeclimate.com/blog/2015/07/07/build-your-own-codeclimate-engine/) seems relatively low, so plans are in the works to [attempt to package Bandit as an engine](https://trello.com/c/PTL7z9uU/20-investigate-writing-a-code-climate-platform-engine-for-bandit) as well.

Using a single tool for all of our static security analysis would allow all projects and teams, regardless of language, to have the same workflow with minor config changes required. It also would allow for easy insertion into a project's existing CI workflow. We already have this advantage with dependency analysis.
