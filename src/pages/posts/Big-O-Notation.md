---
title: "Big O notation"
date: '2019-10-11'
spoiler: "Learn more about the purpose and usage of Big O notation"
---

## What is Big O notation?

Tool used to analyze the running time of an algorithm. Big O notation allows you to analyze algorithms in terms of overall efficiency and scalability.


<blockquote> <b>Definition:</b> Big-O Notation gives an upper bound of the complexity in the worst case, helping to quantify performance as the input size becomes arbitrarily large.</blockquote>

Let n be the size of the input. Below are the complexities you'd commonly see people convey when they highlight the complexity of an algorithm. These are listed in the order of increasing complexity.

Time | Notation
------------ | -------------
Constant | O(1)
Logarithmic | O(log(n))
Linear | O(n)
Linearithmic | O(nlog(n))
Quadratic | O($n^2$)
Cubic | O($n^3$)
Exponential | O($b^n$), where b > 1
Factorial | O(n!)

## Why is this needed?

To answer the following questions:
<ul>
<li> How much time does this algorithm need to finish?
<li> How much space does this algorithm need for it's computation?
</ul>

Let me modify the algorithm's implementation for the [same problem](https://jerwin.dev/posts/Analyzing-Algorithms/#example-of-worst-case-time-analysis-of-a-simple-algorithm) and plot them to get a better understanding of whey need such notation.

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
 
F1 = $4N + 2$  
F2 = $3N + 2$  
F3 = $3N^2 + 2$ (reference)

### Comparing the functions in a scalable plot

Let's plot the two functions and use another function ($N^2$) as well for reference.

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

You can see from the graph that the difference between linear plots F1 and F2 is insignificant and not as large when compared to F3 which scales quadractically. 

F1, F2 = Linear scaling = $O(n)$   
F3 = Quadratic scaling  = $O(n^2)$


Ultimately, we are only concerned with the growth of the time and not the intricate details of the time itself. This is where we use `Big O notation` which focuses on the `order of growth` of that function.

## Core defintion of Big O notation

If we have a function $f(x)$, there exists a function $g(x)$ such that $g(x)$ is >= $f(x)$ for all values of x where x > x$_{o}$.

<img src = "https://i.imgur.com/zeLVycZ.png"></img>

So, we can say that `Big O notation` for $f(x)$ is O($g(x)$). $g(x)$ gives the upper bound on the growth of $f(x)$.

`example 1:` $f(n)$ = 10n + 2

In this function, the dominant term contributing to the growth of the function is 10n. Also, we don't need to worry about the constants and only focus on the growth. 

So the order of the $f(n)$ is $O(n)$.

`example 2:` $f(n)$ = 3$n^2$ + 100n + 30

In this second function, the dominant term contributing to the growth of the function is 3$n^2$. Since we don't need to worry about the constants associated and only focus on the growing component, the order of the fuctions is $O(n^2)$.

The `matplotlib` python code looks like the below,

```python
import matplotlib.pyplot as plt
import numpy as np

m1, b1 = 0.6, 2.0  # slope & intercept (line 1)
m2, b2 = 2.0, -1.0  # slope & intercept (line 2)
x = np.linspace(-10, 10, 50)
plt.plot(x, x*m1+b1, 'k', color='green', label='f(x)')
plt.plot(x, x*m2+b2, 'k', color='purple', label='g(x)')
plt.xlim(0, 10)
plt.ylim(0, 10)
xi = (b1-b2) / (m2-m1)
yi = m1 * xi + b1
plt.axvline(x=xi, color='blue', linestyle='--')
plt.scatter(xi, yi, color='black', label="Xo")
plt.legend()
plt.show()
```

## Classic examples - Cheat sheet
<ul>
<li>Finding all subsets of a set - O(n^2)
<li>Finding all permutations of a string - O(n!)
<li>Sorting using mergesort - O(nlogn(n))
<li>Iterating over all the cells in a matrix of size n x m - O(nm)
</ul>

## Conclusion

This is how you determine the Big O Notation of different functions. When we apply this to our time functions which we have obtained by counting the primitive operations in the worst case of an algorithm, we can compare different algorithms by comparing the different Big O's of their time functions. That will give us a good estimate of which algorithm will take signicantly longer than others to execute.

Therefore, Big O notation is a very important tool we use when comparing algorithms based on the growth of the time w.r.t the input size.
