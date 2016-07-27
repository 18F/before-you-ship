---
title: Pinning Dependencies
parent: Good Production Practices
---

The practice of "pinning dependencies" refers to making explicit the versions
of software your application depends on. It takes different forms in different
frameworks, but the high-level idea is to "freeze" dependencies so that
deployments are repeatable. Without this, we run the risk of executing
different software whenever servers are restaged, a new team-member joins the
project, or between development and production environments. In addition to
repeatability, pinning dependencies allow automatic notifications of
vulnerable dependencies (via [Gemnasium](https://gemnasium.com),
[Requires.io](https://requires.io/), etc.).

As such, all deployed applications should be pinning their library (and where
possible: language, OS, etc.) versions. Let's look at how to implement this in
different languages.

## Ruby

Ensure that `Gemfile.lock` [is committed to the repo](http://bundler.io/v1.12/rationale.html),
causing it to be deployed along with the source code:

>  . . . the Gemfile.lock makes your application a single package of both your own
>  code and the third-party code it ran the last time you know for sure that everything worked.

## Node.JS

`npm shrinkwrap` is the command to lock down versions of all
dependencies of a Node project. When run, `npm shrinkwrap` will recursively
traverse the dependency tree of the target project and generate a file called
`npm-shrinkwrap.json`. This file will list the currently installed versions of
all packages in the local project's `node_modules` folder. You should commit
`npm-shrinkwrap.json` to your project's repository.

When `npm-shrinkwrap.json` is present, future uses of `npm install` will
reproduce the dependency tree represented in it. Running
`npm install --save <package_name>` will update `npm-shrinkwrap.json` with the
new or updated package and its dependencies.

More information on `npm shrinkwrap` can be found at https://docs.npmjs.com/cli/shrinkwrap

## Python

A paragraph or two describing `requirements.txt` and how to generate it
