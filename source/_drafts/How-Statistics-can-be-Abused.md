---
title: How Statistics can be Abused
categories:
  - [general]
  - [education]
author: Weichean Liew
number:
tags:
---



As per a previous post, [Putting the Stats in Data Science](https://datasciencewithdaniel.com.au/2021/01/06/Putting-the-Stats-in-Data-Science/), statistics is the process of collecting, organising and analysing data with samples that can represent a whole population, using mathematical methods. To make sure the analysis process is correct, you need to know whether the data is continuous or discrete, how the data has been collected, the meaning of the data, and the objective of the research as the data itself can change the meaning of the analysis output and the objective of the research. When using statistical models, each model has its own set of assumptions for the underlying data to be analysed. For example, multiple linear regression assumes that a linear relationship exists between predictors and the dependent variable. If you do not understand the assumptions of the statistical models, you might have a higher chance of using the wrong models to do analysis.

I am going to share with you an actual real-life example of abusing the statistical model for analysis when I worked in the market research industry. A client was doing a net promoter score (NPS) study which is a study that seeks to understand how likely a customer is to recommend the client to other people, by giving a rating from 0 to 10. 0 is definitely not recommended while 10 is definitely recommended. Therefore, the targeted group of people will be the client’s customers and the customers that are currently with the client’s competitors. 

From the data, the client can compare the performance with competitors and identify which factors influence NPS, assuming the factors are rated by giving a rating from 0 to 10, where 0 is extremely unsatisfied while 10 is extremely satisfied. The ratings for NPS and satisfaction can be classified as an ordinal or interval scale, as it can classify a customer based on the range of the score and measure the satisfaction with the client and the tendency of recommending the client. 

To quantify the impact of the factors toward NPS, a linear regression model should be the most appropriate model to be used. However, the client used a logistic regression model to analyse the data. The model is not wrong as the model can determine whether the customer is likely to be a promoter or non-promoter based on the factors by categorising NPS into promoter (rated 9-10) and non-promoter (below 9) and estimating the likelihood of a customer as a promoter based on the factors. However, the information on how the factors being rated impacting the rating distribution of NPS will be lost as NPS is categorised into 2 categories. As a result, the relative importance of the factors onto NPS can be different using logistic regression compared to linear regression. 

Therefore, before using any statistical model, the objective of the research should be well-defined. From there, the appropriate statistical model can be used with the underlying data fulfil the assumptions of the model.   
