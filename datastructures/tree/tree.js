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
    function iterate(node) {
      arr.push(current.val)
      if (current.left) { iterate(node.left) }
      if (current.right) { iterate(node.right) }
    };
    iterate(current);
    return arr;
  };
  inOrder() {
    let arr = [];
    let current = this.root;
    function iterate(node) {
      if (current.left) { iterate(node.left) }
      arr.push(current.val)
      if (current.right) { iterate(node.right) }
    };
    iterate(current);
    return arr;
  };
  postOrder() {
    let arr = [];
    let current = this.root;
    function iterate(node) {
      if (current.left) { iterate(node.left) }
      if (current.right) { iterate(node.right) }
      arr.push(current.val)
    };
    iterate(current);
    return arr;
  };
};

class BinarySearchTree extends BinaryTree {
  constructor() {
    super()
  }
  add(value) {
    let current = this.root;
    if(!current){this.root = new Node(value)}
    while (current) {
      if (current.val > value) {
        if (!current.left) {
          current.left = new Node(value);
          break
        }
        else{current = current.left}
      }

      if (current.val < value) {
        if (!current.right) {
          current.right = new Node(value)
          break
        }
        else{ current = current.right}
      }
    }
    return this;
  }
  contains(value){
    return this.preOrder().includes(value)
  }
};
