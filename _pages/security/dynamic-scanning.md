---
title: Dynamic Scanning
parent: Security
---

[OWASP ZAP](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project) is the tool we use for doing automated vulnerability scanning.

![zap home screen](../../assets/images/zap_home.png)

## Usage

You will need a running application to test, which you will want to be as production-like as possible. The 'Attack' scripts shouldn't do anything destructive, but will cause a spike in requests and errors. **Inform your team and #devops before running it on live (not locally-hosted) sites.**

We gave an introduction to ZAP talk as part of our engineering tech talks series. [![Vulnerability Scanning with OWASP ZAP](http://img.youtube.com/vi/2Dp7pAvKHaM/0.jpg)](http://www.youtube.com/watch?v=2Dp7pAvKHaM)

Slides and additional information available [here](https://github.com/18F/tech-talks/tree/master/vuln-scanning).

To get started:

1. [Install the ZAP desktop app](https://github.com/zaproxy/zaproxy/wiki/Downloads).
1. In the Quick Start tab, enter the URL of your application.
    * While you will need to run against production for the official ATO, you can also try out ZAP running against a local server.

1. Click "Attack".
    * You should see a bunch of URLs start to pop up in the Spider tab, then the Active Scan tab.
    * This will take a while.
    * There is a progress bar in the Spider and Active Scan tabs. You can click the <img class="inline" src="../../assets/images/zap_graph.png" alt="small graph icon"/> button in the latter to get more details.
1. Wait for the "Progress" area to say say "Attack complete".
1. Open the Alerts tab.

You can now click on each alert to see more details.

### Examining the Results

#### The Spider

![spider results](../../assets/images/spider_results.png)
As configured, the Quick Start Attack scan does not follow links to other domains or subdomains. If your project uses either (for example, you use S3 for assets, or the api is at a different sub domain), you will want to click <img class="inline" src="../../assets/images/zap_options.png" alt="small options icon"/> and update the options to include the domains & subdomains within the scope. There is a guide available for those options [here](https://github.com/zaproxy/zap-core-help/wiki/HelpUiDialogsOptionsSpider).

#### Alerts

![alert results](../../assets/images/alert_results.png)
The Alerts pane lists all alerts discovered while scanning the site. As described on the [alerts page](../scanning#alerts), the red and orange-flagged alerts must be taken care of before the application can be ATO'd. You have a little more flexibility when dealing with the yellow and blue flags, but all of them must be either corrected or, in the case of false positives, documented.

If you're running the attack against a local server you may see some alerts that you wouldn't see on cloud.gov. Debugging web servers are more 'chatty' about errors than production servers.

### Authentication

Testing the application in an authenticated state is easiest when done with ZAP acting as a Man In The Middle Proxy. Unfortunately, the "Plug-n-Hack" extension mentioned on the Quick Start page is currently non-functional. ZAP provides an excellent guide to configuring a proxy [here](https://github.com/zaproxy/zap-core-help/wiki/HelpStartProxies).

Authentication can be handled in several ways; the following links provide guidance on handling the most common forms. If these are insufficient, the authentication method is scriptable.
 
* <https://github.com/zaproxy/zap-core-help/wiki/HelpStartConceptsAuthentication>
* <https://github.com/zaproxy/zaproxy/wiki/FAQformauth>

### Other Tools Within ZAP

#### Ajax Spider

The Attack Script runs the Active Scan and Spider functions. If your page is a javascript-driven single page application, you will want to run the Ajax Spider in addition to the standard spider. The Ajax Spider will instantiate a browser window and spider the application visually. This is significantly slower than the standard spider. Read more about the Ajax Spider [here](https://github.com/zaproxy/zap-core-help/wiki/HelpAddonsSpiderAjaxConcepts).

#### Fuzzing

["Fuzzing"](https://en.wikipedia.org/wiki/Fuzz_testing) refers to feeding a large amount of random (and/or potentially malicious) data to an application with the intention of finding vulnerabilities related to poor error handling or incomplete input validation. Typically, fuzzing is used on query parameters and form fields.

Any request in ZAP can be fuzzed. Simply right click on it, select Attack -> Fuzzer. Read more about ZAP's Fuzzing capabilities [here](https://github.com/zaproxy/zap-core-help/wiki/HelpAddonsFuzzConcepts).

### More Information

The [ZAP User Guide](https://github.com/zaproxy/zap-core-help/wiki) is phenomenal. If you run into an issue, this should be the first place you check.

The [OWASP Vulnerable Web Applications Directory](https://www.owasp.org/index.php/OWASP_Vulnerable_Web_Applications_Directory_Project#tab=Main) has a great list of (intentionally) vulnerable targets that are useful for testing the capability of ZAP.

We are currently collecting best practices for using ZAP. If you have a particular approach, extension, or option that you find effective, let us know in #compliance-toolkit or [open an issue](https://github.com/18f/before-you-ship/issues/new)!

