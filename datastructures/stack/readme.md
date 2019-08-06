# Challenge Summary
Implement a stack

## Challenge Description

### Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
### Create a Stack class that has a top property. It creates an empty Stack when instantiated.

  * This object should be aware of a default empty value assigned to top when the stack is created.
  * Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
  * Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
  * Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.


## Approach & Efficiency

There isn't really any approach to be had here its a stack, I will instantiate a new class and then define the methods which it uses in order to behave in a way that stacks are supposed to behave.

### success criteria
-  [x] Can successfully push onto a stack
-  [x] Can successfully push multiple values onto a stack
-  [x] Can successfully pop off the stack
-  [x] Can successfully empty a stack after multiple pops
-  [x] Can successfully peek the next item on the stack
-  [x] Can successfully instantiate an empty stack