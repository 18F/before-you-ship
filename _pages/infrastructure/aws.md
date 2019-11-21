---
title: Amazon Web Services
parent: Infrastructure
---

At TTS, we use [Amazon Web Services](https://aws.amazon.com/) (AWS) as our [infrastructure as a service](https://en.wikipedia.org/wiki/Cloud_computing#Infrastructure_as_a_service_.28IaaS.29) (IaaS). We have separate AWS accounts for our production systems and [sandboxes](../sandbox) for development and testing. If you're used to developing locally, you should feel empowered to do everything you'd like in an AWS [sandbox account](../sandbox). Note that AWS is currently the **only** IaaS provider we are able to use in TTS right now. You're free to develop purely locally as long as you'd like, but _if you want to get a system online, AWS and cloud.gov are your only options_, of which cloud.gov is preferred.

In particular, you _cannot_ send traffic from the internet to your local machine - you _must_ use a sandbox account for this purpose.

## Fundamentals

If you are familiar with running virtual machines on your own computer, through Parallels, VirtualBox, or VMWare, AWS operates on the same principles but on a truly massive [scale](http://www.enterprisetech.com/2014/11/14/rare-peek-massive-scale-aws/). Pretty much everything in AWS can be orchestrated via the [AWS API](https://aws.amazon.com/documentation/) & [command-line interface](https://docs.aws.amazon.com/cli/latest/reference/).

The core service of AWS is the [Elastic Compute Cloud](https://aws.amazon.com/documentation/ec2/) (EC2). These are virtual machines just like on your computer, but hosted in the AWS environment.

If you want very basic and cheap object storage, AWS provides the [Simple Storage Service](https://aws.amazon.com/s3/) (S3).

These are just the concepts necessary for initial on-boarding. AWS has an [extensive list](https://aws.amazon.com/products/) of other services.

## Building systems that will be deployed directly to AWS

Although cloud.gov is strongly preferred as the production environment for the systems we build, there are some systems that will need to run on AWS. You can **see the GSA approval status and caveats for using different AWS services in [this spreadsheet](https://docs.google.com/spreadsheets/d/1kJrPqu10x80LaGQ_oXFDuoPkBdnaXrXTQVF_uJ14-ok/edit#gid=0)**.

In order to ensure systems deployed to AWS are robust and reliable, and to ensure the integrity of information stored in AWS, we impose some additional restrictions on systems deployed to the TTS production AWS environment.

### Permissions

Anyone in TTS can get access to the AWS [sandbox account](../sandbox). However only the TTS infrastructure team has login credentials to our production TTS account, and they are only used for debugging and incident management purposes. All systems are deployed using a continuous delivery service from scripts stored in version control, and registered with [#infrastructure](https://gsa-tts.slack.com/messages/C039MHHF8/).

This means:

- All configuration of your production environment must be performed using Terraform scripts checked into version control.
- There will be no "back channel" access to AWS resources for systems deployed into production. Any routine activities such as data management, import / export / archiving, must be performed through your system.

### Auto scale groups

In order to ensure that systems remain available even in the face of hardware failures within AWS leading to VMs being terminated, all EC2 instances must be launched within an [auto-scaling group](https://aws.amazon.com/autoscaling/) from an AMI.

### VPCs

To ensure logical partitioning of systems running within the TTS production environment, every system must be hosted within its own [virtual private cloud](https://aws.amazon.com/vpc/) (VPC). Network security settings are set at the VPC level, including what ports IP addresses EC2 instances can communicate with each other and back out to the internet.

Occasionally, out-of-date documentation from third parties and Amazon itself may reference _EC2 Classic_. We at TTS do not support this environment.

### HTTPS Everywhere

Regardless of what your system does, we enforce [HTTPS Everywhere](../certs/).

### Approved services for production use

Not all AWS services are approved by GSA IT for production use. GSA IT maintains [a current list of approved services](https://docs.google.com/spreadsheets/d/1kJrPqu10x80LaGQ_oXFDuoPkBdnaXrXTQVF_uJ14-ok/edit#gid=0) (note: only visible to GSA employees and contractors).

### Operating system (OS) baseline

We use a pre-hardened version of [Ubuntu](https://en.wikipedia.org/wiki/Ubuntu_%28operating_system%29) as our baseline OS for all EC2 instances in AWS. These are created using the [FISMA Ready project on GitHub](https://github.com/fisma-ready/ubuntu-lts). In AWS, there are [Amazon Machine Images](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html) (AMIs) in each AWS Region with these controls already implemented. You should always launch new instances from this baseline. You can find them by searching for the most recent AMI with the name `FISMA Ready Baseline Ubuntu (TIMESTAMP - Packer)`, where `TIMESTAMP` will be a timestamp value.

### Other people's information

Any system in AWS might have the public's information (as opposed to _public_ data) at any time. Some systems use stronger measures to help protect the information if it is sensitive. For example, [MyUSA](https://github.com/18F/myusa) uses row-level encryption. If you are unsure of the sensitivity of the data you're going to be handling, consult with TTS Infrastructure first.

Use common sense when handling this information. Unless you have permission _and_ need to in order to do your job:

- Don't release information
- Don't share information
- Don't view information

Regardless of your own norms around privacy, always assume the owner of that data has the most conservative requirements unless they have taken express action, either through a communication or the system itself, telling you otherwise. Take particular care in protecting sensitive [personally identifiable information (PII)](../../privacy/).

### Your information

In order to make sure we are protecting the integrity of the public systems, **_you_ have no expectation of privacy on any federal system**. Everything you do on these systems is subject to monitoring and auditing.

### Tagging

Tagging resources in AWS is essential for identifying and tracking resources deployed. A tagged resource makes it easier for reasoning from a [billing perspective](../sandbox#other-peoples-money) and aids in determining if a system is in a particular environment (ex. production). See the [sandbox](../sandbox) environment to see how tagged resources enables lifecycle management of resources in AWS.

At a minimum, an AWS resource must have a `Project` tag defined with enough information to be able to identify a project that the AWS resource is associated with.

## Creating new accounts

1. Forecast the spending for the next 6-12 months.
   - If you expect the spend across your accounts to increase by more than a few percent, the contract may need to be mofified.
1. Reach out to [#admins-iaas](https://gsa-tts.slack.com/messages/admins-iaas) with info about:
   - Who/what the account is for
   - Mailing list to use as the technical contact
   - If you need an associated GovCloud account
1. The admins will:
   1. Create an account using email `devops+aws-<program>-<env>@gsa.gov`
   1. Add to [account list](https://docs.google.com/spreadsheets/d/1DedSCiU9AsCAAVvAFZT0_Ii7AFIKlI-JNifzlpHNbDg/edit#gid=0)
   1. Create an IAM user with `Administrator` permissions

### If needed

The Tech Portfolio will:

1. Reset root password by email
1. [Change account email](https://console.aws.amazon.com/billing/home#/account) to `devops+aws-<account number>@gsa.gov`
1. [Add to KeePass](https://drive.google.com/drive/folders/1iQnvC8o_MU_DR5u7TYtC9pEKZXtBq03f?usp=sharing) and re-upload database
1. [Set up MFA](https://console.aws.amazon.com/iam/home?#/security_credentials)
1. Add relevant users via IAM
