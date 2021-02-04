---
title: A covid analysis; the importance of finding data that interests you
author:
  - Daniel Chegwidden
  - Di Yao
categories:
  - - general
  - - education
  - - projects
  - - coding
    - python
number: 13
date: 2021-02-04 09:31:22
tags:
---


![](/images/Post_Covid.png)

Part of the [Data Warehousing](https://handbooks.uwa.edu.au/unitdetails?code=CITS5504) unit in the [Master of Data Science](https://www.uwa.edu.au/study/courses/master-of-data-science) course involved a project around pattern discovery and predictive analytics. We worked in pairs and had to bring our own dataset, or use the [1994 US Census](https://archive.ics.uci.edu/ml/datasets/census+income) data. This was a key point, as we had no interest in the demographics of people in the US from over 25 years ago, and wanted to do meaningful analysis. This project was completed in May 2020, at the height of the covid pandemic. This led us to pull together a few different datasets containing covid data; including deaths, lockdowns, and country health system data, all available on [Kaggle](https://www.kaggle.com/datasets) at the time.

Using these datasets was a challenge, as we had to clean each individual dataset and transform it in a way that it could be connected with the others. There were a lot of variables in the data that were either irrelevant to our analysis, or were lacking in data that rendered them useless. We spent a lot of time cleaning this data and bringing it all together in a consolidated file that we could perform our work on. This involved the calculation of custom metrics that were more meaningful such as the number of cases recorded before a lockdown was initiated.

With the dataset built, we performed the actual analytics required; classification using decision trees, clustering using k-nearest neighbour, and association rule mining. These methods allowed us to extract insights from the data and to draw conclusions to make this analysis real. We used [python](https://www.python.org/) for the main analysis, and the [weka](https://www.cs.waikato.ac.nz/ml/weka/) software to do the association rule mining. Python was versatile to allow us to perform all of the analytics, and weka simplified the work for the association rules.

We put a lot of work into this project, with the report, including the code, coming out to 42 pages. This may not have been the case if we used the census data. By selecting data that we were interested in analysing, and having an investment in what the insights said, definitely contributed to putting more effort and writing more code. This is important, as often projects at university use nice clean datasets such as the US census data, but it does not inspire students to really go deep in their analysis. 

This holds true for where Data Scientists choose to work after graduation too. By being invested in the data, and going somewhere that aligns with your interests, you will be motivated to perform at a higher level. The hardset part of this is finding where your interest lies, and then finding data that is in that space too. Our advice is to spend time upfront finding a dataset that is interesting to you, it will make the rest of the project that much more enjoyable.
