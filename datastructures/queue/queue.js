class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
      this.queue = [];
    }
    enqueue(value){
      this.queue.push(value);
      this.rear = value;
      this.front = this.queue[0];
    }
    dequeue(){
      this.rear = this.queue[this.queue.length-1];
      this.front = this.queue[1];
      return this.queue.shift();
    }
    peek(){
      return this.front;
    }
  };

  module.exports = Queue;