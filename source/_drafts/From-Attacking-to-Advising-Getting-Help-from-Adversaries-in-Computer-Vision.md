---
title: From Attacking to Advising; Getting Help from Adversaries in Computer Vision
categories:
  - [general]
  - [projects]
  - [education]
  - [series]
author: Camilo Pestana
number:
tags:
---



Adversarial attacks in Computer Vision are attempts to mislead the model into misclassifying what it is looking at. What may appear to be a simple banana to you and me, the model may think is a toaster. This is a threat that raises numerous concerns when these models are put into production and are interfacing with our world, and making decision that could impact numerous lives. The heart of this problem is a simple one, how do we improve the accuracy of our models and ensure that they are not so easily confused at what they are looking at.

What I am looking at is taking this same approach, applying an adversarial attack to an image, and flipping it around so that it becomes useful to the model. These attacks are often in the form of patches, small squares that are added to an image that overwhelm the model's interpretation of the original image. By taking these patches and redesigning them to boost the how the model sees the image, the model is able to more clearly and consistently identify what is in the image. So bananas stay as bananas.

Something interesting that came out of this work was looking at the representation of the image, that is, how the model sees the image. This can be extended to what the model already knows, so we can extract the representation of banana that the model is looking for when we give it new images. These representations are lacking in texture and are essentially 3D blobs that resemble everyday objects.

We can take these representations, alongside an ensemble of state-of-the-art models that have been developed, and use these models to add the texture to the representation. This works by each model trying to maximise its confidence that the representation that it is looking at actually is the image that we want. This takes a grey blob of a goldfish and turns it into a realistic orange fish, which each model in our ensemble can confidently classify as a goldfish.
