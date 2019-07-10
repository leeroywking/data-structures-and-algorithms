# Challenge Summary
This was an assigned code challenge in order to better understand linked lists, the task was to extend our class by adding the append, insert before and insert after methods
## Challenge Description

    .append(value) which adds a new node with the given value to the end of the list
    .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
    .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

## Approach & Efficiency

Approach was for time efficiency, 

The append is in O(n) time since by necessity it must iterate through the entire linked list (we have not implemented tails yet)
insertBefore and insertAfter are both O(n) time as well


## Solution
<!-- Embedded whiteboard image -->

![Whiteboard image](https://raw.githubusercontent.com/leeroywking/data-structures-and-algorithms/master/datastructures/assets/ll_insertions.jpg)