---
title: "Data Structures and Computational Complexity"
date: '2019-10-02'
spoiler: "An introduction to data structures and compuational complexity"
---

## What is a Data Structure? 

A `data structure` is a way of organizing data so it can be used effectively. Knowing when to use which data structure based on trade-offs can significantly improve the runtime efficiency of an application. Moreover it makes the code very clean and you don't have to reinvent the wheel every time you come across a situation where you require them.

## Abstract Data Type (ADT)

`Abstraction` of data structure provides interface to a data structure. We aren't concerned about the implementation of the data structure but just the operations it performs and what we can do with it. Anyone familiar with Object Oriented Programming (OOP) langue would be able to relate to this easily.

Some of the abstract data types are: List, Queue and Map.

- `List`  -> It can be implemented using a Dynamic Array and Linked List data structures.
- `Queue` -> It can be queue implemented using linked lists, arrays or even stack. Yes, it is indeed possible to implement a Queue using Stack data structure.
- `Map`  -> This can either be a Tree map / Hash Map / Hash Table

## Computational Complexity Analysis

Programmers solving a particular problem are worried about two things:
- How much time does it take to run this program?
- How much space does it require to run this program?

We are only worried about the worst case scenario, i.e. analyzing what happens when the input size becomes artbitrarly large. 

### Why worst case? 
- Worst case is dependent on the size of the input given to the program.
- When we try to reduce the worst case time, we'd also be reducing the average case and best case in the process as well. 

### Properties
We'll see some main properties involved when it comes to calculating complexity of a particular program.

Let c be any constant > 0 and n be the input size. 

`Property I :` O(n + c) = O(n)

`Property II:` O(cn) = O(n)

The above two properties equate to `linear time` complexity since the effect of the constant factors to the input size does not have a considerable impact in the worst case scenario. There are practical exceptions surely but in most cases this doesn't matter. You'll learn why this is the case clearly in my next post titled `Big-O Notation`.

- `Propert III:`, primitive operations like assignments, calculations, indexing, calling/return operations take unit or `constant time`-> O(1)

Hope this was useful. Any corrections or updates, please feel free to send a PR to my GitHub repo. Next I'll try to explain with an example about Big-O notation.