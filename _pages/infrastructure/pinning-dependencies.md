---
title: Pinning Dependencies
parent: Good Production Practices
---

The practice of "pinning dependencies" refers to making explicit the versions
of software your _application_ depends on (defining the dependencies of new
software _libraries_ is outside the scope of this document). Dependency
pinning takes different forms in different frameworks, but the high-level idea
is to "freeze" dependencies so that deployments are repeatable. Without this,
we run the risk of executing different software whenever servers are restaged,
a new team-member joins the project, or between development and production
environments. In addition to repeatability, pinning dependencies allows
automatic notification of vulnerable dependencies (via
[Gemnasium](https://gemnasium.com), [Requires.io](https://requires.io/),
etc.).

As such, all deployed applications should be pinning their library (and where
possible: language, OS, etc.) versions. Let's look at how to implement this in
different languages.

## Ruby

No action is necessary for dependencies to be pinned. This is because the
auto-generated `Gemfile.lock` [should be committed to the repo](http://bundler.io/v1.12/rationale.html)
in development, causing it to be deployed along with the source code:

>  . . . the Gemfile.lock makes your application a single package of both your own
>  code and the third-party code it ran the last time you know for sure that everything worked.

## Node.JS

### Using npm

Package locking is built into `npm` >= 5. As you `npm install` packages,
they'll be added to your `package.json` file and exact versions of all
libraries (including dependencies of dependencies) will be referenced in the
[`package-lock.json`](https://docs.npmjs.com/files/package-lock.json) file.
Running `npm install` with no arguments will install the versions of libraries
defined in that lock file. Both the `package.json` and lock file should be
committed to the project repo.

If using `npm` < 5, you may imitate some of the above behavior by creating a
"shrinkwrap" file. As you install packages, use `npm install --save` to update
your `package.json`. After making changes, run [`npm
shrinkwrap`](https://docs.npmjs.com/cli/shrinkwrap) to generate an
`npm-shrinkwrap.json` file, which references the versions of all the currently
installed packages. `npm install` with no arguments will inspect that file and
install the versions it defines. Both the `package.json` and shrinkwrap file
should be committed to the project repo.

### Using yarn

If you are using [`yarn`](https://yarnpkg.com) to manage your node dependencies,
you will automatically have dependency pinning due to the [`yarn.lock`](https://yarnpkg.com/en/docs/yarn-lock)
file that `yarn` produces and uses. `yarn.lock` [should be committed to your repository](https://yarnpkg.com/en/docs/yarn-lock#toc-check-into-source-control)
during development:

> All yarn.lock files should be checked into source control (e.g. git or mercurial).
> This allows Yarn to install the same exact dependency tree across all machines,
> whether it be your coworker’s laptop or a CI server.


## Python

### Using pipenv

[Pipenv](https://docs.pipenv.org/) is [Python.org](https://python.org)'s
officially recommended packaging tool. It's a mixture of dependency tracking
and virtualenv management (bringing it close to Ruby's `bundler`). To install
dependencies use

```
pipenv install django
# or, with stricter version bounds
pipenv install django~=2.0.4
```

This will generate a `Pipfile` containing a loose Django definition and a
`Pipfile.lock` referencing an exact Django version as well as all its
dependencies. Users need only run `pipenv install` with no arguments to
synchronize the latest libraries.

Pipenv can also export a `requirements.txt` file for tools that need one:

```
pipenv lock -r > requirements.txt
```

### Manually

If Pipenv isn't available, we can imitate some of its functionality by using
pip directly. We'll create a `requirements.in` file, specifying un-pinned
dependencies and install it via

```
pip install -r requirments.in
```

Then, we can "freeze" our libraries, generating a list of the exact versions
of not only our immediate dependencies but _their_ dependencies, by using:

```
pip freeze > requirements.txt
```

Be sure to run this command in an activated virtualenv to avoid freezing
system-wide dependencies.

[`pip-tools`](https://github.com/nvie/pip-tools) provides a more automated
method of managing this flow.
