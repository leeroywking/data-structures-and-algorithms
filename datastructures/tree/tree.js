'use strict'

let Queue = require('../queue/queue.js');
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.val = value;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  };
  preOrder() {
    let arr = [];
    let current = this.root;
    function iterate(current) {
      arr.push(current.val)
      if (current.left) { iterate(current.left) }
      if (current.right) { iterate(current.right) }
    };
    iterate(current);
    return arr;
  };
  inOrder() {
    let arr = [];
    let current = this.root;
    function iterate(current) {
      if (current.left) { iterate(current.left) }
      arr.push(current.val)
      if (current.right) { iterate(current.right) }
    };
    iterate(current);
    return arr;
  };
  postOrder() {
    let arr = [];
    let current = this.root;
    function iterate(current) {
      if (current.left) { iterate(current.left) }
      if (current.right) { iterate(current.right) }
      arr.push(current.val)
    };
    iterate(current);
    return arr;
  };

  breadthFirst() {
    let arr = [];
    let queue = new Queue();
    let current = this.root;
    queue.enqueue(current);
    function walk(current) {
      if (current.left) { queue.enqueue(current.left) }
      if (current.right) { queue.enqueue(current.right) }
      arr.push(queue.dequeue().val);
    };
    while (queue.peek()) { walk(queue.front.value) };
    return arr;
  };
};

class BinarySearchTree extends BinaryTree {
  constructor() {
    super()
  }
  add(value) {
    let current = this.root;
    if (!current) { this.root = new Node(value) }
    while (current) {
      if (current.val > value) {
        if (!current.left) {
          current.left = new Node(value);
          break
        }
        else { current = current.left }
      }

      if (current.val < value) {
        if (!current.right) {
          current.right = new Node(value)
          break
        }
        else { current = current.right }
      }
    }
    return this;
  }
  contains(value) {
    return this.preOrder().includes(value)
  }
};

module.exports = BinarySearchTree