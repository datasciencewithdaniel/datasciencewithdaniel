---
title: 'Understanding the AWS Cloud Part 2: Buckets of Storage in S3'
categories:
  - [general]
  - [resources]
  - [cloud]
  - [series]
author: Daniel Chegwidden
number:
tags:
---

![](/images/Post_s3.png)

[Part 1]()
This is the second post in the series exploring cloud services offered by Amazon Web Services ([AWS](https://aws.amazon.com)).

With our compute requirement satisfied with the [Elastic Compute Cloud]((https://aws.amazon.com/ec2)), the next major consideration is cloud storage. Amazon makes this easy with its Simple Storage Solution ([S3](https://aws.amazon.com/s3/)), which stores objects (your files or data) in buckets. These buckets are versatile in that they can store almost any file you have, as well as reliable enough to ensure that your data is always available.

S3 has a useful feature where you can specify if you want to make the contents of a bucket public, where anyone can access the content using a normal URL. This is what is happening for the *Data Science with Daniel* site, our S3 bucket is designated as open for public access, and then is full of the the [HTML](https://html.com) files that make up the site. This makes hosting a static site, one where the content infrequenetly changes and is not running any code, simple to set up and keep running.

Another benefit of storing your data on S3 is that the service is linked to all the other AWS services. So sending data from these services such as log files to S3, as well as utilising data in S3 for analytics and machine learning is as simple as pointing a service at the bucket. Cloud storage continues to get cheaper as the underlying hardware gets better, meaning that if you are running a state-of-the-art machine learning model in the AWS [SageMaker](https://aws.amazon.com/sagemaker/) service, then having the large amounts of data required store in S3 one of the best solutions.

S3 comes with a raft of useful features, and one the the *Data Science with Daniel* site uses is versioning. This allows us to keep track of updates to different files and see what has changed over time. Another useful feature is its lifecycle management, allowing old or outdated files to either be deleted, or transfered to even cheaper storage such as [Glacier](https://aws.amazon.com/glacier/), which is often used for archiving.

The S3 service is versatile in what you can do with your files, and is definitely a service to be familiar with if you are doing any work in the cloud. Our next post in this series is going to look at [Lambda](https://aws.amazon.com/lambda/), and how its serverless architecture helps bring all of your other services together.
