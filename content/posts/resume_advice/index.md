---
title: "Resume Optimization"
date: 2021-11-21
draft: false
description: "Presenting yourself in the best possible light"
tags: ["professional development", "faqs"]
authors:
  - law
showAuthorsBadges : true 
---
A great tech resume isn't a rote recitation of "what I did, when I did it", it's about crafting a story and making a connection with the string of humans handling it from the time you hit 'Submit', to the time you click 'Accept' on that first interview invite.  Stories are more effective when they're relatable to wider groups of people, which can be difficult when they're written with lots of jargon.  Tech resumes, on average, tend to be jargon-heavy, which inhibits understanding and relatability.  If the resume is written with ZERO jargon, it can get passed over by the various keyword-scanning and AI-filtering steps in the modern hiring pipeline.  Let's look at some rarely-used ways to refactor that resume into a tool that connects with people, but also makes it past the benevolent AI silently judging your career accomplishments.  

Here are some example resume-entries representative of _very common anti-patterns_ in the hundreds of tech resumes we've helped improve over the years: 

```
Core Competencies
OpenShift, Buildah, Jenkins, Nexus, JFrog Artifactory, eBPF, Cilium, 
Kubernetes(CNI/CSI/ CRI), OpenStack(Nova[KVM/QEMU/ESXI]/Neutron[Contrail/
Bridging/OVS/N100V/ MidoNet/OpenDaylight(ODL)]/Cinder[iSCSI/SAN/FCoE]/
Glance/Swift/Manilla/ Murano/Sahara[CDH/Spark/Storm/MapR/Cloudera]/
Horizon/Keystone/Kolla/Barbican/ Magnum[K8S/Swarm/Marathon/Mesos]/Ironic, 
Ceph[CRUSH], Docker/Kolla, Fuel, ReST, SOAP/AXL, Cisco UCS/SAN, Apache Mesos, 
Cisco Data/ VoIP (IOS/HSRP/BGP/OSPF/ EIGRP/IPTables/Zebra)/(UCCE:ICM/
CVP/IPIVR/CUPS,CUCM/CUC/CUSP/Asterisk) design/deploy/administrate, 
Virtualbox/Xen/VMWare/GNS3, Postgres/MySQL/InfluxDB/ HBASE/Couchbase/MongoDB 
database de- sign/administration, linux/unix/windows system administration/
pentest g(PXE/NFS/LAMP/NGINX/SNMP/RRD/SVN/GIT/BZR/ HG/I[D/P]S/Trac), coding 
in: SQL, C, Java, PHP, Python, Bash, TCL, Perl, MATLAB, OSS cryptography, 
Gentoo, CentOS, Ubuntu, Debian, CoreOS, Alpine Linux, and LFS, project 
management including staffing and critical path time/resource management, 
and (IPT/ DATA) center deployments


Infra Devops Engineer, YetAnotherCorp, 01/2013 - present
YetAnotherCorp proactively coordinates cooperative niche markets to efficiently maximize next-generation growth strategies.
* Built a message queue and processor to break out from the main web application.
* Deployed Datadog into EC2 and RDS for observability and monitoring of prod issues.
* Deployed an open-source tool to allow a small group of vetted users to query active production databases.
* Wrote a Lambda to alert on IAM permission change events in Slack.
* Assisted in making a prod-grade Kubernetes cluster from the ground up for corporate services.  Installed Datadog and Threat Stack for monitoring.
* Developed CI CD pipeline for EMR Clusters via Linux Bash, Python, Lambda, and CloudFormation


Software Engineer, SomeOtherCorp, 10/2009 - 01/2013
* Full-stack Django dev writing front and backend features.
* Worked with project management to turn business needs into software.
* Provisioned & deploy AWS services such as SageMaker, Glue, EMR, Lambda, SQS, SNS, S3, EC2, & ElasticSearch into 2 production accounts


Sys Admin and Network Engineer, SomeCorp, 01/2007 - 09/2009
* Managed a small team and a 200-server environment with CDN across a dozen colocation facilities.  This helped athletic department webpages, served video-on-demand, and online television.
* Also responsible for L1 Service Provider PCI DSS compliance.

```

## Consider the AI/Automated Scanning Tech
First thing, if your resume has fancy colors and icons and typography, get rid of them.  They are a relic of the before-times when resumes were printed out as-received, and 'standing out' was a possibility, and even desired.  In this age of Applicant Tracking Systems (ATS) and AI relevancy-filtering, machines are going to have first 'eyes' on your resume.  You don't want a bug in the ingestion software to keep you from a potential new gig, so make it easy for the all-benevolent, all-seeing AI to parse, standardize, and format your resume.  The general rule is, if you can convert the resume to plain, boring, unformatted text and STILL have it maintain a good flow - sections delineated by judicious use of whitespace, etc - you're on the right track.  When you do go back to rich text, the fanciest you should go is to add underlines, italics, bold, etc.  

As far as making it past the keyword-scanning aspects, the 'Core Competencies' section is great for this.  It can safely be moved to the bottom, as humans will never read that far, but a keyword-scanner will definitely hit on anything in it.  This lets you get rid of bullet-points like the following: 

`* Provisioned & deploy AWS services such as SageMaker, Glue, EMR, Lambda, SQS, SNS, S3, EC2, & ElasticSearch into 2 production accounts`

and cram all that buzzword-goodness into your Core Competencies section.


## Formatting for Experience
A good format to consider is:

```
3-5 sentences about the company, anything special about their stack, 
and the overall "how these people are better for my involvement there" 
summary, and then:
- bullet-points
- go
- here
- each with 'a number' attached
- no number?
- no bullet-point
- and as many as
- needed to get
- the point
- across
```

you want every bullet-point in your resume to reference a number of some kind: either 'dollars earned', or 'time saved'.

For example: 

`* Developed CI/CD pipeline for EMR Clusters via Linux Bash, Python, Lambda, and CloudFormation`

This, as-written, is 'resume parsley'.  It doesn't DO anything, it takes up space, and all those keywords are better off being in the 'core competencies' section as there are no numbers attached to anything.  A first-stab rewrite might look like: 

`* Developed and deployed an EMR-focused CI/CD pipeline so the Data Science team didn't have to spend 20 hrs/wk manually ingesting terabytes of JSON into our data-lake`

Contrast that example with: 

`* Designed an automation framework via Lambda & Python APIs for AWS Glue, resulting in $11.5k annual savings`

This is excellent!  It briefly mentions 'the thing you worked with', and then puts a nice five-figure dollar number right at the end.  This is crucial for making that human connection.  

## Consider The Human
Once the AI has had its way with your resume, and it is delivered to an Actual Human™, more often than not that human is _not_ going to be particularly technical.  Put yourself in their shoes for a minute:  They'll be going cross-eyed, staring at dozens of resumes full of unfamiliar tech-jargon, with no real way to relate 'the thing that was done' back to something they understand or care about.  The 'dollars or time saved' recommendation above bypasses this entirely.  You and your peers may care what a 'kubernetes' is, but normal people don't even know how to pronounce it.  

When your bullet-point says "I deployed a flibbitygibbit with the shnozwarfle _and saved the company $30k/mo every month until the end of time_", that's a relatable (and therefor memorable) sentence.  Jargon only impresses your fellow nerds, and at this stage your resume is so far away from being parsed by nerd-eyeballs it might as well be on the far side of the moon.  Make a connection with the normal human who has to wade through mountains of jargon and nerd-talk, and you'll land interviews.  

This point is so important, we heartily recommend that if you can't get down to 'a number' (dollars earned, time saved, etc) for a bullet-point, strongly consider removing the line from your resume.  For numbers you don't know, you can make an in-good-faith guesstimation.  You can also reach out to old bosses/coworkers and ask them to help you ballpark a number.  You don't have to defend this in a court of law or for a doctoral dissertation.  No one is going to leap over the interview table yelling "FRAUD!  YOU CLAIM SAVINGS OF 10 hours per week per engineer AND IT WAS ONLY 7!!!!"

## Busting The Length Myth
The most pernicious 'rule' from the beforetimes that needs to go, is 'your resume should never be longer than one or two pages'.  This may be fine for folks early in their careers, but for those of us who have been doing it awhile, it forces us to minimize our valuable experience and professional contributions.  This field values results, and if it takes you 5-10 pages to communicate _otherwise concisely-formatted_ results, so much the better.  "All killer, no filler" should be the guiding principle.  

## The Rewrite
Here's one potential way to rewrite the sample-resume at the beginning, using the tips outlined here:

```
Infra Devops Engineer, YetAnotherCorp, 01/2013 - present
YetAnotherCorp proactively coordinates cooperative niche markets to 
efficiently maximize next-generation growth strategies.  Built out the US 
and EU portions of the YetAnotherCorp offers-portal based on Django, nginx, 
Redis, and OpenShift.  Helped them scale from 30 req/sec to 5000 req/sec 
over four years.
* Built a message queue and processor to reduce load on the main monolith 
  web application, increasing throughput from 30 req/sec to 400 req/sec
* Deployed Datadog into Amazon EC2 and RDS for observability and monitoring 
  of the environment, reducing MTTR from 3 hours per incident to 45 minutes per.  
* Assisted in making a prod-grade Kubernetes cluster from the ground up for 
  corporate services.  Standardizing our deploy methodology in this way 
  reduced deploy-times from 45 minutes each, to 15, and encouraged developers 
  to increase our deployment cadence from 3x/week to 4x/day.  
* Developed and deployed an EMR-focused CI/CD pipeline so the Data Science 
  team didn't have to spend 20 hrs/wk manually ingesting terabytes of JSON 
  into our data-lake


Software Engineer, SomeOtherCorp, 10/2009 - 01/2013
SomeOtherCorp builds real-time voice analysis tools that provide actionable 
insights from customer conversations.  Their platform is based on Ubuntu, 
Kubernetes, and Java, hosted on AWS.  As an early hire, I introduced many 
aspects of DevOps process and culture to the development team, resulting in 
increased feature-development, environmental stability, and faster resolution 
of problems, all while increasing morale.
* Full-stack Django dev writing front- and backend-focused features that 
  increased our MAU from 500/mo to 900/mo, and increased our paid-user conversion 
  pipeline 30%
* Analyzed, proposed, and migrated various 3rd-party services (DNS, 
  monitoring, Git, package, and credentials hosting, etc) to reliable, 
  redundant, locally-hosted solutions for a $1100/mo OpEx savings.
* Made recommendations on migrating self-hosted Elasticsearch to a hosted 
  third-party system, saving $1000s/mo in VM costs and hours/mo in 
  developer/systems upkeep.


Sys Admin and Network Engineer, SomeCorp, 01/2007 - 09/2009
SomeCorp specializes in cloud-based email hosting including spam filtering, 
archiving, compliance, and continuity services.  My responsibilities involved 
managing a small team of four engineers, and caring for a physical server 
footprint of 200 machines across a dozen colocation facilities.  
* Led our L1 Service Provider PCI DSS compliance audit and remediation projects, 
  qualifying us for VC funding in the mid-tens of millions of dollars when we 
  gained PCI/DSS certification in Q4 2008.
* Optimized pre-existing Jenkins jobs for end-to-end CI/CD coverage, decreasing 
  time to production from 90 minutes per, to 5 minutes per. 
* Deployed Puppet configuration management for consistent host/network/ACL 
  configuration across all environments, reducing human-error outages 
  from 4x/week to 3/year

Core Competencies
OS/Virtualization: Openstack, KVM, QEMU, ESXi, Gentoo, CentOS, Ubuntu, Debian, 
                   CoreOS, Alpine Linux, Virtualbox, Xen

Containerization: Openshift, Kubernetes (CNI/CSI/CRI), Docker/Kolla/Swarm

Networking: Cisco UCS/SAN/VoIP, Cilium, IPTables, GNS3, OVS Bridging, iSCSI, FCoE, PXE,

Databases: Postgres, MySQL, InfluxDB, HBASE, Couchbase, MonogoDB

Enterprise Tech: Buildah, Jenkins, Nexus, Artifactory, nginx, snmp, nfs, LAMP

Programming: SQL, C, Java, PHP, Python, Bash, TCL, Perl, MATLAB, REST, SOAP/XML, 
             Git, SVN, BZR, Trac

```
## Final Thoughts
In crafting an impactful engineering resume, the goal is not to blithely list past projects and employers, but to craft a compelling story that bridges technology and human interest.  A narrative approach such as this transforms a resume from a mere business formality into a conversation starter, emphasizing not just what you've done, but how your contributions have measurably advanced your past employers' missions and bottom lines.  By focusing on tangible outcomes — dollars earned, time saved, effiencies gained - you make your expertise relatable at a level far greater than buzzword-driven development and nifty-nerd-cred projects.  

Done well, a resume is an opportunity to showcase your unique blend of technical skills and professional impact.  By following the strategies outlined above, you're not just submitting a bland list of roles; you're creating interest around how you can contribute to the success of your next team, making your application memorable in a sea of jargon-laden documents.  

Make it easy for the humans at the far end of the hiring pipeline to imagine the tangible benefits you can bring to their work, ensuring it speaks not only to the AI gatekeepers but also to the people on the other side of the pipeline who are looking for someone exactly like you, and watch those interviews stack up.

Want it 'done for you'?  [Resume Raiders](https://resumeraiders.com) graciously gives members of this community a 15% discount on their services with the checkout code "XANDY".  Tell Dave we sent you!
