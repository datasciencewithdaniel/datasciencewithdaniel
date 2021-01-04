---
title: 'Building DSWD Part 1: Gitting Started'
categories:
  - [general]
  - [coding]
  - [projects]
author: Daniel Chegwidden
tags:
---

This is the first in a series of posts that explores the creation of the *Data Science with Daniel* blog, from the research done to the technologies used.

To begin with, there were two main questions that needed to be answered, how are we going to generate content, and where are we going to store it? These questions drove the initial research which involved reading a lot of other blog posts around the best way to generate a static site. We settled on using [Hexo](https://hexo.io/) as a framework due to its ability to generate all of the files required to publish the site quickly and easily.

With Hexo chosen, it was installed locally and configured to make the site look like we wanted it to. This involved a lot of iteration through more blog posts and all of the configuration files to find the lines of code that needed to be changed. Hexo has the ability to run a local version of the site which made changes easy to visualise and ensure that the code was doing what we expected it to.

With the content sorted, apart from having to actually write the posts, the next question of where this was going to be stored was now the focus. Knowing the [GitHub](https://github.com/) was where a lot of software development is done through, we created a repository and used that to store all of the files for the blog. This involved a crash course on Git and GitHub to understand the process from cloning a repo locally, branches and commits, and then merging changes back. That in itself was a great learning opportunity about collaborative software development and source control.

The GitHub repo is currently private, however the aim is to make it public going forward so anyone can clone it, write a post following the guide, and then have that accepted through a pull request to be published on the site. This allows content to come from a variety of sources, allowing the site, and the community, can grow exponentially.

The next post in this series will explore the use of Amazon Web Services and putting the blog in the cloud so that it is accessible to everyone, everywhere.