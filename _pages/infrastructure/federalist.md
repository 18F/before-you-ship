---
title: Federalist
parent: infrastructure
---

Use Federalist for publishing static sites. See [the Federalist homepage](https://federalist.18f.gov) for more information.

## Cost

* **Internal:** Likely free, but start by checking with #federalist with your use case.
* **External:** Federalist is currently offered for $12000/year. Check in with #federalist about your sales lead!

## ATOs

If you are publishing a new site through Federalist and it's not connecting to any APIs or third-party services beyond public API calls from the browser (i.e. it's a simple static site), the site is considered part of that system, so **it does not require its own ATO** ([source](https://github.com/18F/before-you-ship/issues/95#issuecomment-174011747)). *Note: Technically, static site builders are just adding a collection of pages in an existing system. Therefore, from an ATO perspective, "sites" created through Federalist remain within the security boundary, and thus ATO.*

To make a new Federalist site public (and covered under the ATO), **see [the custom domain setup instructions](https://federalist-docs.18f.gov/pages/how-federalist-works/custom-urls/#technical-steps-to-set-up-a-new-site)**.
