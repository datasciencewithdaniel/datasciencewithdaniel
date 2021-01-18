---
title: The Importance of Metadata
author: Mukund Srinivas
categories: general
date:
number:
tags:
---
Working as a consultant at a an Agri-Tech consultancy has taught me a few things about data and drawing inferences from data. The most profound of them is the ability to tell the most useful piece of information from the least . It might so happen that the most significant piece of information is actually the metadata.

To set a context, One of the key technologies being used by the industry today for modelling crop acarages and yields is called Remote Sensing, which is about capturing information about  phenomenon on the surface of a given planet. The scope of my role was limited to earth and particularly agricultural phenomenon. My role was to  map agricultural fields during various cropping seasons(a season is from sowing to harvest of the crops) using a time series of satellite images. In Remote Sensing language , the date/time at which an image was acquired is called the date/time of overpass, which is very often mentioned in the metadata, sometimes it is also the filename of that particular image, therefore it is not very easy to forget.

Information about the dataset is called metadata and is often overlooked by novice data scientists (like myself). It so happened once when I was classifying crops across a whole region and somewhere in the process forgot the date at which these satellite images were captured. The date is critical for the client, and there is a penality for every mistake. Being a naive graduate, ended up doing the whole thing again. The next morning, upon narrating the incident to a colleague, he told me about metadata and that was the greatest facepalm I ever had.

So everyone who wants to play around with data, please take a few minutes to glance over the metadata. It might help you answer some rudimentary questions like "What is this ?" , "When is this ?" , "What is not in this ?", which are often mission critical.
