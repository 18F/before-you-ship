---
title: Static Security Analysis
navtitle: Static Analysis
parent: Security
---

Static analysis is an important part of the development process, and is required for ATO. There are two main types of static security testing that needs to be done:

* [**Dependency analysis**](#dependency-analysis), where the Ruby gems, Python modules, and JavaScript packages your app uses are checked against a list of known vulnerabilities.
* [**Code security analysis**](#code-analysis), in which your code is checked against a list of antipatterns.

There are tools for JS, Ruby, and Python, and you are encouraged to set up this scanning early on in the development cycle to prevent unexpected delays when it's time to get your ATO. Note that there are _many_ tools out there for doing code style linting, but this page is specifically security-focused.

## Recommendations by language

Language | Dependency analysis | Code security analysis
--- | --- | ---
Go | [Snyk](https://snyk.io/docs/snyk-for-golang) | [Go Meta Linter](https://github.com/alecthomas/gometalinter), with the security-related [linters](https://github.com/alecthomas/gometalinter#supported-linters) (like [SafeSQL](https://github.com/stripe/safesql), if you're doing SQL queries) enabled
JavaScript | [Code Climate](https://docs.codeclimate.com/v1.0/docs/nodesecurity) or [Snyk](https://snyk.io/docs/snyk-for-nodejs) | [eslint-config-scanjs](https://www.npmjs.com/package/eslint-config-scanjs) / [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security)
Python | [Snyk](https://snyk.io/docs/snyk-for-python) | [Bandit](https://github.com/openstack/bandit) with the provided [config file](https://github.com/18F/compliance-toolkit/blob/master/configs/static/.bandit); [engine for Code Climate](https://github.com/18F/codeclimate-bandit)
Ruby | [Code Climate](https://docs.codeclimate.com/v1.0/docs/bundler-audit) or [Snyk](https://snyk.io/docs/snyk-for-ruby) | [Code Climate](https://docs.codeclimate.com/v1.0/docs/brakeman) or [Hakiri](https://hakiri.io/) - _Rails only_

### Notes

* Code Climate only scans when the code is `push`ed, meaning it won't catch any vulnerabilities if the code isn't being actively worked on.
* Wherever the table says "see below", that means there is no service available for scanning. Therefore, the recommended tool(s) should be run in continuous integration. Alternatively, you can also look into [building a Code Climate engine](https://docs.codeclimate.com/docs/building-a-code-climate-engine).

## Dependency analysis

Use one of the services above, which should support adding public repositories yourself. If you need scanning on a private repository, [file an issue in the Infrastructure repo](https://github.com/18F/Infrastructure/issues/new).

### Snyk

When starting a new project for an agency partner, consider creating a new Snyk organization for your project and invite the agency partners (in addition to the 18F team). This will facilitate the project's hand-off in the future.

For repositories which include multiple dependency manifests (e.g. due to multiple sub-projects or crossing languages), be sure to configure Snyk to track each dependency file. By default, Snyk's import will stop after finding the first dependency manifest.

## Code analysis

This is commonly referred to as "static analysis". Code analysis can be done by a [service](#recommendations-by-language) (recommended), or within your existing continuous integration tool. Additional configuration information available below.

### Config files

Basic config files for some static analysis tools can be found in the [compliance-toolkit repo](https://github.com/18F/compliance-toolkit). These currently are little more than the default settings, but the recommendations may change. If you find a test that you believe is invalid, file an issue in the repo.

We are especially interested to know if you get lots of false positives. We believe the default config files will grow and evolve, but the most up-to-date versions will always be found in the repo.

More advanced configuration options for all the tools can be found in their respective docs.
