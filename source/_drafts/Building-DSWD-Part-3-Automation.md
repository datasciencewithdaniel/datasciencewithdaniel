---
title: 'Building DSWD Part 3: Automation'
categories:
  - [general]
  - [cloud]
  - [projects]
  - [series]
author: Daniel Chegwidden
number: 21
tags:
---



[Part 1](https://www.datasciencewithdaniel.com.au/2021/01/10/Building-DSWD-Part-1-Gitting-Started/) [Part 2](https://datasciencewithdaniel.com.au/2021/02/08/Building-DSWD-Part-2-Cloud-Native/)
This is the third post in the series exploring the creation of the *Data Science with Daniel* site.

Now that the site is up and running, the next focus was to make the process as automatic as possible. The first item on the agenda was the deployment of the site. To do this, ```hexo deploy``` needs to be run locally with all of the relevant [Node.js](https://nodejs.org/en/) packages. This was inconvenient as it could only be run at the time when the next post was to be published, and required having access to everything locally.

To solve this problem, we configured [GitHub Actions](https://github.com/datasciencewithdaniel/datasciencewithdaniel/blob/master/.github/workflows/deploy.yml). These actions are triggered when a Pull Request is merged into the Master branch, esentially signalling that a new version of the site is ready to go live. The action creates a virtual machine with all of the relevent packages installed, and then runs the same ```hexo deploy``` command once the environment is ready to go. The environment also brings in our [AWS](https://aws.amazon.com) access key to allow the deployment to access the S3 bucket where the site content is stored. To have visibility on this, we added the below badge to the README file on the GitHub Repository. While this badge is *passing*, we know that the GitHub Actions are working as intended. ![](https://img.shields.io/github/workflow/status/datasciencewithdaniel/datasciencewithdaniel/S3-Deployment?style=plastic)

The second service that we used was [Lambda](https://aws.amazon.com/lambda/), which works in a similar fashion to GitHub Actions by running code once a trigger event occurs. We configured Lambda to invalidate the [CloudFront](https://aws.amazon.com/cloudfront/) cache, ensuring that the latest version of the site with the new changes is what users will access next time the navigate to the site. Without this code, we would have to wait until the cached content expired and was replaced from S3 for the new content to display. 

Now the site is able to be updated automatically, and we can publish new posts faster. With these features in place, [GitHub Issues](https://github.com/datasciencewithdaniel/datasciencewithdaniel/issues) are being raised for all of the new features that we are exploring to increase the functionality of the site.
