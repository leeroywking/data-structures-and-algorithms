class Node {
  constructor(value, previous = null) {
    this.value = value;
    this.previous = previous;
  };
};

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  };
  
  enqueue(value) {
    let newNode = new Node(value);
    if(this.rear){this.rear.previous = newNode;}
    this.rear = newNode;
    if(!this.front){this.front = newNode;}
  };

  dequeue() {
    let oldFront = this.front;
    this.front = this.front.previous;
    oldFront.previous = null;
    return oldFront.value;
  };

  peek() {
    return this.front.value;
  };

  // this is a utility function for testing, not for Datastructure use
  showQueue() {
    let que = [];
    let current = this.front;
    while (current) {
      que.push(current.value);
      current = current.previous
    };
    return que;
  }
};

module.exports = Queue;