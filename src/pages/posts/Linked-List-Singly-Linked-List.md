---
title: "Linked List - Singly Linked List"
date: '2019-10-08'
spoiler: "Understanding of linked list and implementation of a singly linked list using python."
---

## What is a Linked List? 
A linked list is a sequential list of nodes that hold data which point to other nodes also containing data. 

Data -> Data -> Data -> NULL

+ Every node is a pointer to the next node.
+ Last node always points to NULL indicating that there are no more nodes after that point.

## Understanding some Jargons

`Head` - Head is the first node in a linked list.

`Tail` - Tail is the last node in a linked list.

`node` - An object containing data and a pointer(s).

`pointer` - Reference to another node.

## What is a Singly Linked List? 

Singly linked list only holds reference to the next node. In the implementation, you always maintain reference to the Head of the linked list and a reference to the Tail nodes for efficient addition and removals.

`Head` -> 1 -> 2 -> 3 -> 5 <- `Tail`

### Inserting an element in a singly linked list

Let's take an example case to understand how we can insert elements in a singly linked list.

 `Head` -> 4 -> 23 -> 63 -> 99 <- `Tail`

This is a singly linked list which holds two pointers, head pointing towards the start of the linked list and tail pointing towards the last element in the linked list.

`Objective`: Insert the value `11` where the third node is (for reference 63's position).

1) Create a new pointer `trav` which points to the head of the linked list.

`Head` -> *`4` -> `23` -> `63` -> `99` <- `Tail`

[`trav`] -> *`4`

2) Traverse upto but not including the node where we want to insert. 

`Head` -> `4` -> *`23` -> `63` -> `99` <-`Tail`

[`trav`] -> *`23`

3) Create a new node with data `11` and point it to `63` since we can locate using `[trav] + 1`.

`Head` -> `4` -> *`23` -> *`63` -> `99` <-`Tail`

[`trav`] -> *`23`

`11` -> *`63`

4) Point `23` -> `11` which removes the link between `23` and `63`. In case of languages other than Python, you might want to point that link to NULL for garbage collection reasons. 

`Head` -> `4` -> `23` -> `11` -> `63` -> `99` <-`Tail`

[`trav`] -> *`23`


### Removing element in a Singly linked List

Consider a similar example where we are trying to remove the element `63`.

1) Create two pointers `trav-1` and `trav-2` which points to head and to the node next to it.

`Head` -> *`4` -> *`23` -> `63` -> `99` -> `77` <- `Tail`

[`trav-1`] -> *`4`

[`trav-2`] -> *`23` by using `Head + 1`

2) Traverse [`trav-1`] upto but not including the element we want to remove. 

`Head` -> `4` -> **`23` -> `63` -> `99` -> `77` <-`Tail`

[`trav-1`] -> *`23`

[`trav-2`] -> *`23`

3) Traverse pointer [`trav-2`] next to [`trav-1`] pointer.

`Head` -> `4` -> *`23` -> *`63` -> `99` -> `77` <-`Tail`

[`trav-1`] -> *`23`

[`trav-2`] -> *`63`

4) Create another pointer [`temp`] and point it in the same location as [`trav-2`]

`Head` -> `4` -> *`23` -> **`63` -> `99` -> `77` <-`Tail`

[`trav-1`] -> *`23`

[`trav-2`] -> *`63`

[`temp`] -> *`63`

5) Now increment [`trav-2`] pointer by 1 to the next location.

`Head` -> `4` -> *`23` -> *`63` -> *`99` -> `77` <-`Tail`

[`trav-1`] -> *`23`

[`temp`] -> *`63`

[`trav-2`] -> *`99`

6) Point `23` via [`trav-1`] to `99` via [`trav-2`] which removes `temp`.

`Head` -> `4` -> *`23` -> *`99` -> `77` <-`Tail`

[`trav-1`] -> *`23`

[`trav-2`] -> *`99`

[`temp`] -> `NULL`

## Implementation - Code for a Singly Linked List

```python
class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None


class singly_linked_list:
    def __init__(self):
        self.head = Node()

    def append(self, data):
        newNode = Node(data)
        trav = self.head
        while trav.next != None:
            trav = trav.next
        trav.next = newNode

    def lengthOfSinglyList(self):
        trav = self.head
        count = 0
        while trav.next != None:
            count += 1
            trav = trav.next

        return count

    def show(self):
        trav = self.head
        #count = 0
        while trav != None:
            # print(count)
            print(trav.data, "->", end=" ")
            # print("\n")
            trav = trav.next
            #count += 1

    def get(self, index):
        if index >= self.lengthOfSinglyList():
            return "Index out of range"

        position = 0
        trav = self.head
        while trav.next != None:
            trav = trav.next
            if position == index:
                return trav.data
            position += 1

    def delete(self, index):
        if index >= self.lengthOfSinglyList():
            return "Index out of range"
        position = 0
        trav = self.head
        while trav.next != None:
            tail_node = trav
            trav = trav.next
            if position == index:
                tail_node.next = trav.next
                return "Node deleted"
            position += 1

    def insert(self, index, value):
        if index >= self.lengthOfSinglyList():
            return "Index out of range"
        elif index == self.lengthOfSinglyList():
            self.append(value)
            return "Node inserted at tail position"

        newNode = Node(value)
        position = 0
        trav = self.head
        while trav.next != None:
            tail_node = trav
            trav = trav.next
            if position == index:
                tail_node.next = newNode
                newNode.next = trav
                return "Node Added"

            position += 1


sample = singly_linked_list()
```


### Important point to remember regarding insertion / deletion in the middle

When you try to `insert or remove in the middle`, note that the "process" involves two operations,

- Traversing till the node of where we want to insert / remove.
- Standalone inserting or removing the element.

Know that "insertion or deletion" can also be considered as one single operation. This might be confusing when you calculate time complexity.

Some might say insertion and deletion from a singly linked list takes only constant time O(1) which is true for a standalone operation i.e. if you do not consider the traversing part.

If you do indeed consider the traversal part, inserting in the middle or removal in the middle does take linear time O(n).


## Worst Case Complexity Analysis of a Singly Linked List

- `Insert at Head` - This takes O(1) time for a singly linked list since we always maintain pointer to Head.
- `Insert at Tail` - This takes O(1) time for a singly linked list since we always maintain pointer to Tail.
- `Remove at Head` - This takes O(1) time. You can simply reset Head pointing to next on the singly linked list as we have a pointer from the start.
- `Remove at Tail` - This takes linear time O(n). The reason behind this is, you can only remove in constant time O(1) only once. After that for any removal at tail again, you'd have to traverse till the end to identify tail since you cannot reset it. So worst case takes O(n) time.
- `Remove in the middle` - This also takes linear time O(n) because consider the case where you have to remove the (n-1)th element. 
- `Search` - Searching an element in a singly linked list takes linear time O(n).

