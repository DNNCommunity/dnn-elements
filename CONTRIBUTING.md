# How to contribute

Community contributions are an essential part of any open source project.
There are a few guidelines that we need contributors to follow so that we can have a chance of keeping on top of things.

## Getting Started

This project is a set of WebComponents built with stencil.js
Stencil is a toolchain for building reusable, scalable Design Systems. Generate small, blazing fast, and 100% standards based Web Components that run in every browser.
[Read Stencil documentation](https://stenciljs.com/)

* Make sure you have a [GitHub account](https://github.com/signup/free)
* [Submit an issue](https://github.com/dnncommunity/dnn-elements/issues/new), assuming one does not already exist.  After review, if the pull request is accepted, we will mark the issue as resolved and assign it to a release so it can be QA'ed.
  * Clearly describe the issue including steps to reproduce when it is a bug.
  * Add a comment to the issue notifying the team of your intention to work on this item, including if known, an estimated time for Pull Request submission. This helps to limit duplication of works and allows the reviewers to plan for potential items incoming for a release.
  * A good bug report should always contain:
    * Detailed steps to reproduce.
    * What is happening wrong.
    * What is the expected behavior.

## Fork the repository on GitHub

If this is your first time working with dnn-elements, you will need to fork the repository to get your system configured for local development.

* Click fork on the dnn-elements project
* Clone your fork locally with `git clone https://github.com/[username]/dnn-elements.git` replacing [username] with your account information.
* Add the upstream connection so you can rebase and update your fork with `git remote add upstream https://github.com/DNNCommunity/dnn-elements.git`
* To update your fork to the latest, you can then run `git fetch upstream` followed by `git pull upstream develop`

## Making Changes

* Create a topic branch from where you want to base your work.
  * This is usually the 'develop' branch.
  * Release branches should only be targeted in special cases and with approval from the approver group.
  * To quickly create a topic branch based on develop; `git checkout -b my_contribution develop`
* Make commits of logical units.
* When ready to publish your changes, you can with `git push -u origin my_contribution`
* Make sure your pull request description tags the GitHub issue ID, so it is clear what issue you have fixed.

````
    Short (72 chars or less) summary.

    More detailed explanatory text. Wrap it to 72 characters. The blank line separating the summary from the body is critical (unless you omit
    the body entirely).

    Write your commit message in a way that makes sense to non-technical readers in release notes: "Fixed a bug where [short description of the issue]" and not "Fix bug" or "Fixes bug #123."

    Further paragraphs come after blank lines.

    - Bullet points are okay, too.
    - Typically a hyphen or asterisk is used for the bullet, followed by a
      single space. Use a hanging indent.
  
    Fix bug #123 #345
````

## Making Trivial Changes

### Documentation

For changes of a trivial nature to comments and documentation, it is not
always necessary to create a new ticket in the issue tracker.

## Submitting Changes
* [General GitHub documentation](http://help.github.com/)
* [GitHub pull request documentation](http://help.github.com/send-pull-requests/)
* Security issues should be initially submitted to the [Security Team](https://github.com/dnnsoftware/Dnn.Platform/security/policy) and should never be discussed in any public channel

