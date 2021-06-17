---
title: Federalist
parent: infrastructure
redirect_to: https://handbook.tts.gsa.gov/launching-software/infrastructure/#federalist
---

Use Federalist for publishing static sites. See [the Federalist homepage](https://federalist.18f.gov) for more information.

## Cost

- **Within TTS:** Likely free, but check with #federalist on Slack with your use case.
- **External to TTS:** Check out the Federalist website for [pricing](https://federalist.18f.gov/pricing/).

## ATOs

If you are publishing a new site through Federalist and it's not connecting to any APIs or third-party services beyond public API calls from the browser (i.e. it's a simple static site), the site is considered part of that system, so **it does not require its own ATO** ([source](https://github.com/18F/before-you-ship/issues/95#issuecomment-174011747)). _Note: Technically, static site builders are just adding a collection of pages in an existing system. Therefore, from an ATO perspective, "sites" created through Federalist remain within the security boundary, and thus ATO._

To make a new Federalist site public (and covered under the ATO), **see [the launch checklist](https://federalist.18f.gov/documentation/launch-checklist/)**.

## How to check if a site is on Federalist

1. Open a Terminal
1. Run

   ```sh
   curl -Is https://<site>.gov | grep -I x-server
   ```

If it outputs `x-server: Federalist`, it's a Federalist site. Otherwise, it's not.
