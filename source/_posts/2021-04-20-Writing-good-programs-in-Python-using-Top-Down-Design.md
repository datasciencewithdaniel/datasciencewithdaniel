---
title: Writing good programs in Python using Top-Down Design
author: Daniel Chegwidden
categories:
  - [general]
  - [coding, python]
  - [education]
number: 26
date: 2021-04-20 12:43:07
tags:
---

![](/images/Post_Python.png)

Recently I have seen a lot of new [Python](https://www.python.org) programmers writing code for their first assignments. This is an exciting milestone on their journey as developers, however, they have a tendency to jump in and write as much code as possible, without giving enough time to the proper planning. One of the best ways to write a Python (or any other object-oreitnated language) program is to use a technique called Top-Down Design.

Top-Down Design starts with the problem that you want to solve, and then breaks that up into pieces. It then breaks those pieces into smaller pieces again and again until each remaining piece is doing only a single thing. These pieces become our functions in Python. By using this approach, any developer can define the functions that they expect to require to make their program to work, and then complete these functions one at a time (or work with other developers to split up filling out these functions).

An example of this is if you want to access some data from a file. The first function that you need is a way to open the file and extract that data. Now you may not know how to do the opening and extracting, but you can write a function that will eventually accomplish that.

```python
def open_file(filename):
    pass
```

With this function defined (using ```pass``` to ensure our program still runs), we go down to our ```main``` function and call our ```open_file``` function that we know will eventually give us the data we are after. We then call our ```main``` function with the name of the file we want to open.

```python
def main(filename):
	data = open_file(filename)

main("our_file.csv")
```

Now we have a working Python program that will eventually open our file. We continue to do this development, writing function definitions that walk through what the complete program will do. This allows us to map out the logic and ensure that we can go from the beginning to the end and solve the problem. All that is left once our program has all of these function definitions is to write the content of each function. Because we have broken each down to a very simple task, this should be easy enough to do, and there is lots of help online with this side of things (because everyone has opened a file before).

Of course, we may add new functions, or modify our planned functions as we develop our program, but no one said we would get it right the first time, all Top-Down Design gives us is a framework to start writing a good program.
