---
title: "Stack Data Structure"
date: '2019-10-11'
spoiler: "Understanding and implementation of Stack data structure in Python."
---

## What is a Stack?
Stack is a one-ended linear data structure which models a real world stack. It has two main operations:
- `Push`
- `Pop`

In a stack data strucutre, adding and removing elements happens on top of the stack. Adding an element to the top of the stack is performed by the push operation and removing an element from the top of the Stack is performed by the pop operation.

So as you can tell by that definition, a pointer is always referenced to the top of the stack to do these operations for maximum efficiency. Stack's mechanism or property is popularly known as LIFO, which means `Last In First Out` (LIFO).

You can also implement other operations like `peek` in a stack, meaning: `fetch top element in a stack`, display all elements of a stack or check if the stack is empty.

Stack data structure can be implemented using arrays and linked lists.

## Worst Case Complexity Analysis

`push` operation takes constant time O(1) to add element to the top of the stack, because we have reference to the top of the stack at all times. 

`pop` operation takes constant time O(1) to remove element from top of the stack as we have a pointer at top of the stack at all times.

`peek` operation returns the value of the top element in the stack. This also takes constant time O(1) as we have a pointer at top of the stack at all times.

`search` - searching an element in a stack takes linear time in the worst case O(n) because element that we are searching might be in the lowest layer (bottom most / first inserted element) of the stack. Hence we have to search fully from top to bottom in worst case.

## Implementation of a Stack data structure using a singly linked list

```python
class Node:
    # Constructor initializes node automatically
    # Node contains data and a pointer to the next node
    def __init__(self, data):
        self.data = data
        self.next = None


class Stack:

    def __init__(self):
        self.head = None

    # Adding element to the top of the stack
    # Both for push & pop operation, we first check if the stack is empty first
    def push(self, data):
        if not self.head:
            self.head = Node(data)

        else:
            newNode = Node(data)
            newNode.next = self.head
            self.head = newNode

    # Python grabage collection happens implicitly
    # Returns the removed element in the top of the stack
    def pop(self):
        if not self.head:
            return None
        nodeToBeRemoved = self.head.data
        self.head = self.head.next
        return nodeToBeRemoved

    # Traverse through the stack and display items in the stack
    def display(self):
        traverse = self.head
        while traverse != None:
            print(traverse.data, "->", end=" ")
            traverse = traverse.next

    # Returns the top most element in a stack
    def peek(self):
        if not self.head:
            return None
        return self.head.data


sampleStack = Stack()

# example instructions
sampleStack.push(140)
sampleStack.push(3)
sampleStack.push(49)
sampleStack.push(77)
print(sampleStack.peek(),
      "Peek element = Recently pushed to the stack / Top element in a stack",
      end="\n")
sampleStack.display()


# Output

77 Peek element = Recently pushed to the stack / Top element in a stack
77 -> 49 -> 3 -> 140 ->
```

Code on [GitHub: Jerwin](https://github.com/Jerwins/Data-Structures-using-Python/blob/master/stack_using_singly_linked_list.py)