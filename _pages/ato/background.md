---
title: Background on the ATO Process
navtitle: Background
---

***[This page is in need of a rewrite.](https://github.com/18F/before-you-ship/issues/89)***

<iframe width="560" height="315" src="https://www.youtube.com/embed/T1S52B1-NT4" frameborder="0" allowfullscreen></iframe>

* Governed by the [Federal Information Security Management Act of 2002](http://csrc.nist.gov/drivers/documents/FISMA-final.pdf) (FISMA)
    * FISMA does a few things. It puts the Chief Information Security Officer in charge of consulting the agency head with the process they should have for the security clearance process. FISMA also empowers the agency head with accepting all the risk posed by information systems.
        * Good news is that agency head can delegate that authority at their choosing.
    * This agency-specific process then binds agency heads with the process that they must then follow.
        * In practice, what this means is setting up a series of controls for each new system that will be launched.
* 18F simplifies this process by implementing the bulk of the controls [at the infrastructure level](../../infrastructure/aws/) to the AWS account. This is reflected in a baseline minimum controls we’ve created.
    * Controls can range from human controls to business processes to mechanical ones.
