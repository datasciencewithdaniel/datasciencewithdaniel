---
title: Python in One Line
author: Daniel Chegwidden
categories:
  - [general]
  - [coding, python]
  - [education]
number: 28
date: 2021-05-04 14:19:34
tags:
---

![](/images/Post_OneLine.png)

[Python](https://www.python.org) is a powerful language, you can get it to do a lot of things. It is this versatility and adaptability that make it one of the most used programming languages in the world. As developers get more confident writing Python, they get lazier, as all developers do, and try to do the most work with the least amount of code. One of the foremost examples of this is the list comprehensions, which is essentially a ```for``` loop written on just one line. After all, why write this:

```python
new_list = []
for element in my_list:
    if element > 10:
        new_list.append(element)
```

When you can write this:

```python
new_list = [element for element in my_list if element > 10]
```

This is a pretty basic list comprehension, they can get a lot more complex from here. However, developers need to find a balance between writing code that is in this compressed format, with writing code that is understandable and explainable. Don't get me wrong, I love a good list comprehension, but sometimes I find myself working harder to squeeze everything onto one line when I know that I am going to have a hard to explaining what is going on.

Another example of this is the lambda function, which is an anonymous function that saves you the time and space from having to write out the complete function definition. Lambda functions can be very powerful when used, similar to list comprehensions, but they are often confusing to new developers. An example is if you had a list of tuples where each tuple was a word and the word count of that word in some given text. Like this: 

```python
word_list = [('the', 13), ('and', 7), ('if', 9)]
```

Now say we wanted to sort this by descending word count, so the most frequent words come first in our list. Well this can be done by a function that we can pass to the sort method as a key to sort on.

```python
def second(item):
    return item[1]

word_list.sort(key=second, reverse=True)
```

Now this is a lot of writing when we can accomplish the same using lambda in much less code, because we don't have to define the function that we are using.

```python
word_list.sort(key=lambda x: x[1], reverse=True)
```

There is a lot that we can accomplish in one line when writing Python. The trick is figuring out that balance between writing less and staying understandable. If you can figure that out, then your code will be elegant, but other developers will easily be able to follow along with what you are doing. For new developers, don't worry too much about putting things on one line, it is just as good to do it on three if you are accomplishing the same thing.
