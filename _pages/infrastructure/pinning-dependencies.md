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

In Python, you should specify pinned dependencies in `requirements.txt`, and
you should be sure to use specific, frozen versions -- e.g. `Django==1.9.6`,
`six==1.10.0`, etc. You can generate this using `pip freeze`; a common idiom
is `pip freeze > requirements.txt` to generate the frozen list and stream it
into `requirements.txt`. Be sure to run this command in an activated virtualenv
to avoid freezing system-wide dependencies.

Unlike Ruby and Node, Python doesn't have a separate file for "input"
dependencies (`Gemfile` in Ruby, `package.json` in Node) vs "frozen" ones
(`Gemfile.lock` / `npm-shrinkwrap.json`). This can lead to some confusion:
you'll sometimes see un-pinned dependencies (e.g. just `Django` or `six`) in
`requirements.txt`. This is a bad idea as it can cause dependency failures in
the future.

However, since having an "input" dependency list can be useful, here are
a couple of not-yet-standardized-but-widespread practices you can use:

- Create a `requirements.in` file, specifying un-pinned dependencies. You can
then use `pip install --upgrade -r requirements.in` to upgrade all your
requirements, test that they work, and the `pip freeze > requirements.txt` to
re-freeze them. [pip-tools](https://github.com/nvie/pip-tools) automates this
(and might end up becoming a built-in part of `pip` in the future).
`requirements.in` is a good choice for *sites* that are themselves not
dependencies of other codebases.

- Specify un-pinned (or semi-pinned, e.g. `Django>1.9,<1.10`) dependencies in a
`setup.py`. `setup.py` is out of scope for this document; see [the Python
Packaging Guide](http://python-packaging.readthedocs.io/en/latest/index.html)
for information. This `setup.py` technique is a good choice for *libraries* that
will be installed as a dependency elsewhere.
