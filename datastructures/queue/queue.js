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
    if(this.front){this.front = this.front.previous};
    if(oldFront){oldFront.previous = null;}
    return oldFront ? oldFront.value : null;
  };

  peek() {
    return this.front ? this.front.value : null;
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