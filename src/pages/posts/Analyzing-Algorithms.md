---
title: "Analysis of Algorithms"
date: '2019-10-10'
spoiler: "First of many blog posts about Data Structures and Algorithms series."
---

## What is an Algorithm? 

Algorithm is a set of steps required to solve a particular problem. A problem can be solved by many algorithms though. So how do you determine which algorithm to use for a particular problem? That's when you compare algorithms on the basis of time and space as per their use case and constraints. 

Generally an algorithm which takes the least amount of time is considered the best algorithm.

## Example 

Consider a search function which takes in an array of integers 'A' and an element 'x' which needs to be searched in that array.

Let A = [2, 4, 15, 6, 3]

`Search function`: search(A, x)

### `First case: Let x = 2`

Here if you are trying to traverse through the array 'A' to look for the element '2', you'd see that it is found right away on `index 0` - First element in the list. (Best case scenario)

No. of comparison checks made = 1

### `Second case: Let x = 3`

In this case, element '3' is found at the end of the list. For this you'd be (let's say) traversing through the entire list upto the last element to find '3'. (Worst case scenario)

No. of comparison checks made = 5 = Number of elements present in the array, len(A) = N (say)

### `Important point to remember:` 

When analysing algorithms and comparing them on the basis of time, we consider the worst case scenario. This is because,

1) The worst case is dependent on the size of the input given to the algorithm. ~N

2) When we try to reduce the worst case time, we'd also be reducing the average case and best case in the process as well. 

In conclusion, if the worst case time goes down, the best case time also goes down. 

## Worst case time analysis

How do you calculate how much time an algorithm takes? 

**Rules:**

Primitive Operations take `UNIT TIME`

What are primitive operations? They are assignment, calculations, Indexing and calling / return operations.

`Example`:

1) i = 5 ; Time taken = 1 unit of time for one assignment operation.

2) A[i] = 30 ; Time taken = 2 units of time - 1 for indexing and for assignment.

## Example of worst case time analysis of a simple algorithm

```python
def sumofall(N):
   
    count = 0  # Assignment = Takes Unit time = 1*
   
    for i in range(N):  # Loop executes N times

        # range(N) = [0, 1, 2, 3, 4, 5]

        # i is assigned 0, 1, 2, 3, 4, 5 on each iteration = 1(N)*
   
        count = count + i # Time = {Increment + Assignment} * N times = (1+1)N* 

    return count  # Takes unit time - return operation = 1*

# Total time = 1 + 1(N) + 2(N) + 1 
# Total time = 3N + 2
```
`Total time taken for this algorithm is a function or dependent on the size of the input ~ N`