---
title: The Importance of Metadata
author: Mukund Srinivas
categories: general
date:
number:
tags:
---
Working as a consultant at an Agri-Tech consultancy has taught me a few things about data and drawing inferences from data. The most profound of them is the ability to tell the most useful piece of information from the least . It might so happen that the most significant piece of information is actually the metadata. The metadata is a file that is recieved along with the main file, it contains information regarding the date of collection of that information and information that might be helpful in answering rudimentary questions about the data itself.
For example, census dataset might have a metadata that describes the number of respondents , the type of the data itself (csv,txt) , the source of the dataset (survey year, survey type), the methology of collection(internet survey, ground based survey). A good analogy is if data is the textbook, the metadata is its table of contents.

To set a context, One of the key technologies being used by the industry today for modelling crop acarages and yields is called Remote Sensing, which is about capturing information about  phenomenon on the surface of a given planet. The scope of my role was limited to earth and particularly agricultural phenomenon. My role was to  map agricultural fields during various cropping seasons(a season is from sowing to harvest of the crops) using a time series of satellite images. In Remote Sensing language , the date/time at which an image was acquired is called the date/time of overpass, which is very often mentioned in the metadata, sometimes it is also the filename of that particular image, therefore it is not very easy to forget. This Satellite information is later used by the Agri-Tech firm short for (Agricultural Technology). Agricultural technology is a portfolio of products and serivices that help the agricultural industry, these could range from products that help in reducing operational costs of the client(developing algorithms for efficiently moving and storing food), to make policy decisions (What are the crops that need a subsidy that particular season).

 One time when I was classifying crops across a whole region and somewhere in the process renamed the file so many times that the date at which these satellite images were captured was very difficult retrieve, since this information is central to all of the analysis , and there is a penality for every mistake, I decided to set up my camp at the office and did the whole thing overnight all over again and delivering the project on time. In the morning, when I narrated the whole story to a colleague who knew better, he retrieved the metadata from the file and that was the biggest facepalm I ever had. That was a very critical lessson which I learnt the hard way.

So everyone who wants to play around with data, please take a few minutes to glance over the metadata. It might help you answer some rudimentary questions like "What is this ?" , "When is this ?" , "What is not in this ?", which are often mission critical.
