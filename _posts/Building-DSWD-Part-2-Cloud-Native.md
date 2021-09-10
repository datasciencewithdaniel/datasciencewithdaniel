---
title: 'Building DSWD Part 2: Cloud Native'
author: 
  name: Daniel Chegwidden
coverImage: '/images/blog/Post_Cloud.png'
categories:
  - [general]
  - [cloud]
  - [projects]
  - [series]
number: 14
date: '2021-02-08T13:46:00Z'
tags:
---

[Part 1](https://www.datasciencewithdaniel.com.au/posts/Building-DSWD-Part-1-Gitting-Started/)
This is the second post in the series exploring the creation of the *Data Science with Daniel* site.

Making ths site accessible for a low cost with high availability is the goal. Having completed the Cloud Computing unit the previous semester, the obvious choice due to familiarity was to leverage Amazon Web Services (AWS). The services that play a major role in the site is the [Simple Storage Solution](https://aws.amazon.com/s3/) (S3), [Route 53](https://aws.amazon.com/route53/), and the content delivery network, [CloudFront](https://aws.amazon.com/cloudfront/).

Hexo has a lot of useful plugins that have been developed by the community. Installing the S3 Deployer and changing the config file allows for one-command deployment to an S3 bucket. This bucket was created and setup to host a static website by making the contents public, which was very easy to follow the steps on AWS. S3 works well in this situation as it will automatically scale with the demand to ensure that the site is always accessible.

To make the site live, we registered a domain with Route 53 and pointed it at the contents of our public bucket. There was some configuration required here to make sure that everything pointed at the right things, such as allowing for both the inclusion and non-inclusion of *www* in the address.

With the deployment sorted, we leveraged CloudFront to handle traffic, as well as include security by adding a certificate and redirecting HTTP traffic through the more secure HTTPS. With CloudFront running, the site is now faster, more secure, and easier to find. An interesting learning is that when new posts go up, the content in CloudFront endpoints has to be invalidated so it pulls the latest content from the S3 bucket and actually serves the new post straight away.

The next post in this series will explore the automation aspects of making the site run with as little manual intervention as possible.
