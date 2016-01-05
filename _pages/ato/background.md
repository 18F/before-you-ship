---
title: Background on the ATO Process
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/T1S52B1-NT4" frameborder="0" allowfullscreen></iframe>

* Governed by the Federal Information Security Management Act of 2002, or FISMA
    * FISMA does a few things. It puts the Chief Information Security Officer in charge of consulting the agency head with the process they should have for the security clearance process. FISMA also empowers the agency head with accepting all the risk posed by information systems.
        * Good news is that agency head can delegate that authority at their choosing.
    * This agency-specific process then binds agency heads with the process that they must then follow.
        * In practice, what this means is setting up a series of controls for each new system that will be launched.
* 18F simplifies this process by implementing the bulk of the controls at the infrastructure level to the AWS account. This is reflected in a baseline minimum controls we’ve created.
    * Controls can range from human controls to business processes to mechanical ones.
* Before a system is made publicly accessible on the Internet, it must go through either the full ATO process or a 90-Day Authority to Test. If either are not yet complete, the system must have some level of authentication required for a user to enter.
