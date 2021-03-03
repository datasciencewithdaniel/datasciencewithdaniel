---
title: How Statistics can be Abused
categories:
  - [general]
  - [education]
author: Weichean Liew
number:
tags:
---

![](/images/Post_Promoter.png)

As per our previous post, [Putting the Stats in Data Science](https://datasciencewithdaniel.com.au/2021/01/06/Putting-the-Stats-in-Data-Science/), statistics is the process of collecting, organising and analysing data with samples that can represent an entire population. To make sure the analysis process is correct, you need to know whether the data is continuous (like heights) or discrete (like colours), how the data has been collected, the meaning of the data, and the objective of the research. When using statistical models, each model has its own set of assumptions. For example, linear regression assumes that a linear relationship exists between predictors (what you have) and the dependent variable (what you are predicting). If you do not understand the assumptions of the statistical models, you have a higher chance of using the wrong model to do the analysis.

I am going to share with you an actual real-life example of abusing the statistical model for analysis when I worked in the market research industry. A client was doing a Net Promoter Score (NPS) study, which is a study that seeks to understand how likely a customer is to recommend their services to other people, on a scale of 0 to 10. With 0 being definitely not recommended, while 10 is definitely recommended. 

To quantify the impact of the factors toward NPS, a linear regression model should be the most appropriate model to be used. However, the client used a logistic regression model to analyse the data. The logistic model is not wrong as the model can determine whether the customer is likely to be a promoter (NPS score of 9 or 10) or non-promoter (NPS score below 9). However, the information on how the factors being rated impact the distribution of NPS will be lost, as NPS is now categorised into 2 categories. As a result, the relative importance of the factors to NPS can be different when using logistic regression compared to linear regression. 

Therefore, before using any statistical model, the objective of the research should be well-defined. From there, the appropriate statistical model can be used with the underlying data that fulfils the assumptions of the model.   
