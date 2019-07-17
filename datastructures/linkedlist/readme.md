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



# Challenge Summary
This challenge was to implement the kthfromEnd method on our linked lists
## Challenge Description

Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency

Approach was for space efficiency, 

since the primary advantage of linked lists is in space efficiency we tried to maximize that by eliminating extra stored information IE reusing variables and not creating arrays needlessly.

## Solution
<!-- Embedded whiteboard image -->

![Whiteboard image](https://files.slack.com/files-pri/T039KG69K-FLEGDEVPY/image_from_ios.jpg)




# Challenge Summary
This challenge was to merge two linked lists 

## Challenge Description

Write a function which takes in two linked lists and returns the head of the merged linked lists

## Approach & Efficiency

Approach was for space efficiency, 

The image reflected a more ambitious solution which I ran out of time to implement the problem with the solution in the image is that it overwrites itself and then never does what it is supposed to do, a solution that would work is iterating the two lists at 1 off from each other e
## Solution


<!-- Embedded whiteboard image -->

![Whiteboard image](https://raw.githubusercontent.com/leeroywking/data-structures-and-algorithms/master/datastructures/assets/ll_merge.jpg)

