---
title: "Array Data Structure: Static and Dynamic Arrays"
date: '2019-10-06'
spoiler: "Understanding of Array data structure."
---

## Static Array

A `static array is a fixed length container`. This means that it is indexable and accessing elements can be done with the best possible complexity. They are also cache friendly as you place items in a contiguous fashion (right next to each other in memory) making efficient use of caches.

## Complexity of Static Arrays
- `Accessing` elements from a static array takes constant time O(1) since arrays are indexable.
- `Searching` elements in a static array takes linear time O(n). Worst case we might have to search till end of the array only to realize the element isn't present in the static array or in the last index.
- `Append, deletion and insertion` operation doesn't make sense in a static array since the container is fixed and appending defeats the purpose of having a static array

`Please Note`: Insertion (generalized) and Append operations are not the same. Appending means inserting element to the end of the array. Insertion can be done anywhere: at the start, middle, end etc.
## Dynamic Array

`Dynamic array has the automatic reszing property`. It expands as you add more elements so it's not necessary to determine the size of the array during initialization. 

## Complexity of Dynamic Arrays
- `Accessing` elements from a dynamic array takes constant time O(1) since arrays are indexable.
- `Searching` elements in a dynamic array takes linear time O(n). Worst case we might have to search till end of the array only to realize the element isn't present in the dynamic array or in the last index.

### Important note about Append operation in Dynamic Arrays

#### Scenario: 1 - Appending in a dynamic array but array capacity is full

Consider this case where we try to append an element in a dynamic array when it's initial allocation capacity is full. To expand, dynamic array automatically doubles it's size. 

`Why double? Why not just Array[endIndex + extraLengthNeeded]?`:
We cannot assume that the next memeory allocation to the initially allocated space is free. So we create double the size of the initial allocation and copy all the elements over to the new dynamic array.

This takes linear time O(n)

#### Scenario: 2 - Appending in a dynamic array when array capacity is not full
Since this happens so rarely, according to some "experts", appending in a dynamic array takes just constant time O(1) i.e. assuming dynamic array at full capacity rarely happens. 

Technically speaking, this is the best case scenario and only the amortized cost is O(1). Worst case scenario is still O(n) for appending. 

So do not be surprised if one of your colleague comes up and argues that worst case complexity for appending in a dynamic array is O(1). 

`amortized = most of the time. Not always`

- `Insertion` in a dynamic array takes linear time O(n) since inserting elements can be anywhere in the span of the array. Assume it's in the middle of the array, you'd have to scoot over other elements to make space and make it an indexable container. This takes O(n) time.

- `Deletion` in a dynamic array takes linear time O(n) as well due to the `scooting over` property explained above.

