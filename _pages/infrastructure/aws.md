---
title: Amazon Web Services
parent: Infrastructure
---

At 18F, we use [Amazon Web Services](https://aws.amazon.com/) (AWS) as our [infrastructure as a service](https://en.wikipedia.org/wiki/Cloud_computing#Infrastructure_as_a_service_.28IaaS.29) (IaaS). We have separate AWS accounts for our production systems and [sandboxes](../sandbox) for development and testing. If you're used to developing locally, you should feel empowered to do everything you'd like in an AWS [sandbox account](../sandbox). Note that AWS is currently the **only** approved IaaS provider. You're free to develop purely locally as long as you'd like, but _if you want to get a system with server-side code online, AWS and cloud.gov are your only options_, of which cloud.gov is preferred.

In particular, you *cannot* send traffic from the internet to your local machine - you *must* use a sandbox account for this purpose.

## Fundamentals

If you are familiar with running virtual machines on your own computer, through Parallels, VirtualBox, or VMWare, AWS operates on the same principles but on a truly massive [scale](http://www.enterprisetech.com/2014/11/14/rare-peek-massive-scale-aws/). Pretty much everything in AWS can be orchestrated via the [AWS API](https://aws.amazon.com/documentation/) & [command-line interface](https://docs.aws.amazon.com/cli/latest/reference/).

The core service of AWS is the [Elastic Compute Cloud](https://aws.amazon.com/documentation/ec2/) (EC2). These are virtual machines just like on your computer, but hosted in the AWS environment.

If you want very basic and cheap object storage, AWS provides the [Simple Storage Service](https://aws.amazon.com/s3/) (S3).

These are just the concepts necessary for initial on-boarding. AWS has an [extensive list](https://aws.amazon.com/products/) of other services.

## Building systems that will be deployed directly to AWS

Although cloud.gov is strongly preferred as the production environment for the systems we build, there are some systems that will need to run on AWS, particularly those that require FISMA High.

In order to ensure systems deployed to AWS are robust and reliable, and to ensure the integrity of information stored in AWS, we impose some additional restrictions on systems deployed to the 18F production AWS environment.

### Permissions

Anyone in 18F can get access to the AWS [sandbox account](../sandbox). However only the 18F infrastructure team has login credentials to our production 18F account, and they are only used for debugging and incident management purposes. All systems are deployed using a continuous delivery service from scripts stored in version control, and registered in [Chandika](https://chandika.apps.cloud.gov).

This means:

* All configuration of your production environment must be performed using Terraform scripts checked into version control.
* There will be no "back channel" access to AWS resources for systems deployed into production. Any routine activities such as data management, import / export / archiving, must be performed through your system.

### Auto scale groups

In order to ensure that systems remain available even in the face of hardware failures within AWS leading to VMs being terminated, all EC2 instances must be launched within an [auto-scaling group](https://aws.amazon.com/autoscaling/) from an AMI.

### VPCs

To ensure logical partitioning of systems running within the 18F production environment, every system must be hosted within its own [virtual private cloud](https://aws.amazon.com/vpc/) (VPC). Network security settings are set at the VPC level, including what ports IP addresses EC2 instances can communicate with each other and back out to the internet.

Occasionally, out-of-date documentation from third parties and Amazon itself may reference *EC2 Classic*. We at 18F do not support this environment.

### HTTPS Everywhere

Regardless of what your system does, we enforce [HTTPS Everywhere](https://18f.gsa.gov/2014/11/13/why-we-use-https-in-every-gov-website-we-make/).

### OS baseline

We use a pre-hardened version of [Ubuntu](https://en.wikipedia.org/wiki/Ubuntu_%28operating_system%29) as our baseline OS for all EC2 instances in AWS. In AWS, there are [Amazon Machine Images](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html) (AMIs) in each AWS Region that these controls already implemented. You should always launch new instances from this baseline.

### Other people's information

Any system in AWS might have the public's information (as opposed to *public* data) at any time. Some systems, like [MyUSA](https://github.com/18F/myusa), use row-level encryption to help protect that information. Depending on the data being stored, others may not, and you may have access to the underlying data in order to do your job.

In order to make sure we are protecting the privacy and integrity of the public's data, *you have no expectation of privacy on these systems*. Everything you do on these systems is subject to monitoring and auditing. Use common sense when handling this information. Unless you have permission *and* need to in order to do your job:

* Don't release information
* Don't share information
* Don't view information

Regardless of your own norms around privacy, always assume the owner of that data has the most conservative requirements unless they have taken express action, either through a communication or the system itself, telling you otherwise.

We also take particular care in protecting [sensitive personally identifiable information (PII)](../../security/pii). PII is any information that can be linked back to an individual. For example, this includes a person's full name, their home address, and their phone number.
