'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
  }

  push(value) {
    this.top = new Node(value, this.top);
  }

  pop() {
    //assign temp value;
    let temp = this.top;
    //reassign top to top.next
    this.top = this.top.next;
    //set old top.next = null;
    temp.next = null;
    //return this.top.value
    return temp.value;
  }

  peek() {
    if (this.top) {
      return this.top.value;
    } else {
      return null;
    }
  }
}

module.exports = { Stack };
