---
title: 'Understanding the AWS Cloud Part 1: Virtual Computing on EC2'
categories:
  - [general]
  - [resources]
  - [cloud]
  - [series]
author: Daniel Chegwidden
number: 23
tags:
---

![](/images/Post_ec2.png)

The reason that you can read this blog is due to the cloud, specifically, the services provided by Amazon Web Services (AWS). The use of the cloud is only going to grow as the quantity of data grows and the requirement for compute alongside it. This series seeks to fill a gap where many people have heard about the cloud, but may not know where to get started. We will explore some of the core AWS services, including the ones that make Data Science with Daniel run, to give you are starting point for your own cloud journey. This series explores the AWS services specifically, as they sit behind this site, but the main ones covered in this series are also available through other major cloud providers such as Microsoft's Azure, and the Google Cloud Platform, GCP.

The main service that cloud providers offer is compute, that is, the ability to run other people's computers. This is a slight simplification, these 'other computers' are servers that sit inside AWS sites and are being accessed by many people around the world, simultanesously. The AWS service is called the Elastic Compute Cloud ([EC2](https://aws.amazon.com/ec2/?ec2-whats-new.sort-by=item.additionalFields.postDateTime&ec2-whats-new.sort-order=desc)), and works by allowing customers to access machines (called instances) with different hardware specifications, depending on their need. This saves everyone from going out and building these expensive setups, as AWS has already done that for you. You simply request the amount of resources you need, and you virtual compute is allocated to you.

The first time that I accessed by own EC2 instance and had control of some powerful computer sitting in some server room on the other side of the country was a cool experience. I am not going to go into the detail of all the different types of EC2 instances as, suffice to say, there is a machine to suit any need you have. The thing about using EC2 is that you only pay for the time you need. So you spin up an instance (or ten), do what you need to do, and then shut them down, and you are only on the hook to pay for that time. This allows AWS to dynamically allocate their own compute resources to customers on demand.

If you don't want to buy expensive computer parts and want to experiment or test something out, the cloud is the way to go. EC2 isntances can be used to run web servers to host your website, or explore the latest machine learning model, or any other use case you can think of, because at the end of the day, its just another computer. If you are just getting started with the cloud, EC2 should be one of the first services on your list to try out and see what you can do.

The next post in this series about the AWS cloud is going to look at the other major service you should definitely look at, the Simple Storage Solution (S3), which is where this blog post is actually stored whilst you are reading it.
