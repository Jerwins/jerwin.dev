---
title: "[DS & A] Series: Big O notation - #2"
date: '2019-10-11'
spoiler: "Learn more about the purpose and usage of Big O notation"
---

## What is Big O notation?

Tool used to analyze the running time of an algorithm. Big O notation allows you to analyze algorithms in terms of overall efficiency and scaleability.

## Why is this needed?

Let me modify the algorithm's implementation for the [same problem](https://jerwin.dev/posts/Analyzing-Algorithms/#example-of-worst-case-time-analysis-of-a-simple-algorithm).

```python
def sumofall(N):
   
    count = 0  # Assignment = Takes Unit time = 1*
   
    for i in range(N):  # Loop executes N times

        # range(N) = [0, 1, 2, 3, 4, 5]

        # i is assigned 0, 1, 2, 3, 4, 5 on each iteration = 1(N)*
   
        count = count + i # Time = {Increment + Assignment} * N times = (1+1)N* 

        sum = count # Time = 1(N)*

    return sum  # Takes unit time - return operation = 1*

# Total time = 1 + 1(N) + 2(N) + N + 1 

# Total time = 4N + 2
```
Now the time taken changes to `4N + 2` compared to the previous time of `3N + 2`.
 
func_1 = 4N + 2  
func_2 = 3N + 2  
func_3 = 3N^2 + 2

## Comparing the functions in a scalable plot

Let's plot the two functions and use another function (N^2) as well for reference.

The `matplotlib` python code looks like the below,

```python

import numpy as np
import matplotlib.pyplot as plt

plt.figure()
xlist = np.linspace(1, 12, 2)
ylist = np.linspace(1, 12, 2)
F1 = xlist*4 + 2
F2 = xlist*3 + 2
F3 = ((xlist)**2)*3 + 2
plt.plot(xlist, F1, label='4N + 2')
plt.plot(xlist, F2, label='3N + 2')
plt.plot(xlist, F3, label='3N^2 + 2')
plt.legend()
plt.show()
```
<img src="https://i.imgur.com/EzyxYuL.png"></img>

You can see from the graph that the difference between linear plots F1 and F2 is insignificant and not as large when compared to F3 which scales quadractically. We are only worried about the growth of the time of the algorithm and not the actual details of the time itself.

F1, F2 = Linear scaling  
F3 = Quadractic scaling

Ultimately, we are only concerned with the growth of the time and not the details of the time itself. This is where we use `Big O notation` gives the `order of growth` of that function.

### Core defintion of Big O notation

// Developing....