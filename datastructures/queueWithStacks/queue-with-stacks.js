'use strict'

const Stack = require('../stack/stack.js').Stack;

class QWS {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  };

  enqueue(val) {
    this.stack1.push(val);
  };
  dequeue() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop())
    };
    let ret = this.stack2.pop();

    while(this.stack2.peek()){
      this.stack1.push(this.stack2.pop())
    };
    return ret;
  };
};


module.exports = QWS;