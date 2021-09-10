---
title: Why you should be using Python virtual environments
author: 
  name: Daniel Chegwidden
coverImage: '/images/blog/Post_Storage.png'
categories:
  - [general]
  - [coding, python]
number: 15
date: '2021-02-11T10:42:11Z'
tags:
---

When we start to code, often we are eager the jump in and get something to happen. Working with [Python](https://www.python.org) sometimes requires a little bit of preparation, especially in ensuring that packages are available and ready to use. This is where virtual environments come into play. By isolating the environment where your Python packages are located, you can maintain control over the specific versions that you use, an important tool when there are different package version dependencies. You can create as many virtual environments as you require, and I often have one for each project that I am working on to ensure that nothing breaks.

To create a virtual environment, you can use tools such as [pip](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/), which comes with Python, or [conda](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html), which you need to download. Both of these are able to manage your packages and allow you to specify the specific version you are after, if the latest one is not suitable. I am currently exploring using conda to manage my virtual environments, but I still find a place to use pip here and there. I do enjoy the simplicity of running the following command to activate an environment: ``` $ conda activate env ```

At the end of the day, you want to isolate your Python environment, especially on a Mac which already has Python running, and inadvertently overwriting the operating system settings could definitely cause problems. Creating a virtual environment and installing only the packages you need, leads to a safer development experience, plus you can even use scripts to automate this process if you want to speed it up.

There are lots of blogs out there that explore the differences between pip and conda, and can guide you through getting you set up and running in a virtual environment. Choose what works best for you and what you understand, just make sure that you activate your environment before you start installing packages.
