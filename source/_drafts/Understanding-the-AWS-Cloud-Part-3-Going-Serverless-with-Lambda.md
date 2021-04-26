---
title: 'Understanding the AWS Cloud Part 3: Going Serverless with Lambda'
categories:
  - [general]
  - [resources]
  - [cloud]
  - [series]
author: Daniel
number:
tags:
---

![](/images/Post_lambda.png)

[Part 1](https://datasciencewithdaniel.com.au/2021/03/29/Understanding-the-AWS-Cloud-Part-1-Virtual-Computing-on-EC2/) [Part 2](https://datasciencewithdaniel.com.au/2021/04/13/Understanding-the-AWS-Cloud-Part-2-Buckets-of-Storage-in-S3/)
This is the third post in the series exploring cloud services offered by Amazon Web Services ([AWS](https://aws.amazon.com)).

The great thing about the cloud is that it is flexible. You pay for what you use, when you use it, and that's it. A downside of the [EC2](https://aws.amazon.com/ec2/) instances that we explored in Part 1 is that they are complete machines. You have to provision them, maintain them, and monitor them. If you only require compute in short bursts, then AWS [Lambda](https://aws.amazon.com/lambda/) may be the service that meets you need.

Lambda is a serverless compute service that runs code without needing to create instances. It is perfect for those tasks where you want to execute some code that runs over a short period of time. And the best part, the first one million lambda requests are free, so it's easy to run your code for next to nothing every month. Lambda scales with your code, meaning that it can run in parallel and scales with the size of the workload, so your code never has to wait.

*Data Science with Daniel* uses Lambda for two main purposes, email forwarding and [CloudFront](https://aws.amazon.com/cloudfront/) invalidation. The first is to ensure that when people email contact@datasciencewithdaniel.com.au, that the email finds itself in my inbox, as the @datasciencewithdaniel.com.au domain is not associated with an email server. The second is to invalidate CloudFront caches, which automatically occur every time the site is updated, meaning the next time you visit, you can see the latest posts straight away.

Lambda is a versatile service, our email forwarding is written in [JavaScript](https://www.javascript.com) and the CloudFront invalidations in [Python](https://www.python.org). This means you can use your existing code, or write new code, and can still leverage the power of Lambda. It's great if you want to do any sort of data processing, just set up your function to be triggered by the event you want to process. Lambda can help build, test and deploy functions, and it is always great to see when everything has worked successfully.
