---
title: Don't Forget the Importance of Metadata
author: Mukund Srinivas
categories:
  - [general]
  - [projects]
number: 9
date: 2021-01-21 10:26:01
tags:
---


![Source: Earth Observatory NASA](/images/agriculture_satellite_image.jpg)

Agricultural technology (Agri-Tech) is a portfolio of products and services that help the agricultural industry, ranging from helping in reducing costs (efficiently moving and storing food) to making policy decisions (providing subsidies for crops). Working at an  Agri-Tech consultancy has taught me a few things about data and drawing inferences from it. The most profound of them is the ability to tell the most useful piece of information from the least. It might happen that the most significant piece of information is actually the metadata. It is a file that accompanies the main file and typically contains information describing the data  that might be helpful in answering rudimentary questions about the contents of the main file. A good analogy is if data is the textbook, the metadata is its table of contents.

An important technology being used by the Agri-Tech industry today for modelling crop acarages and yields is called Remote Sensing, which is about capturing information about the surface of a planet using a spacebound instrument aboard a satellite. My role was to map agricultural fields during various cropping seasons, using a series of such satellite  images over time. In Remote Sensing, the timestamp of the image is a very important piece of data, and it can be found in the metadata, as well as as part of the file name.

One time whilst working with this data, I renamed the file so many times that the timestamp was difficult to retrieve. This is an important piece of data for the analysis, and I  had to redo a lot of my work in order to keep the timestamp available. When I spoke about this with my colleague, he pulled up the metadata and showed me where the timestamp could easily be found, independent of the name of the file. This was a hard way to learn the value of the metadata.

Therefore, before beginning to play around with data, take a few minutes to glance over its metadata. It might help you answer some simple questions that can guide and inform your later work.
