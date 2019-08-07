'use strict'

let BST = require('./tree.js')

describe('Tree tests', () => {
  it('Can successfully instantiate an empty tree', () => {
    let bst = new BST();
    expect(bst).toEqual({ root: null })
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    let bst = new BST();
    bst.add(5);
    expect(bst.root).toEqual({ left: null, right: null, val: 5 })
  });
  it('Can successfully add a right child to a single root node', () => {
    let bst = new BST();
    bst.add(5);
    bst.add(1);
    bst.add(10);
    expect(bst.root.right).toBeDefined()
  });
  it('Can successfully add a left child to a single root node', () => {
    let bst = new BST();
    bst.add(5);
    bst.add(1);
    bst.add(10);
    expect(bst.root.left).toBeDefined()
  });
  it('Can successfully return a collection from a preorder traversal', () => {
    let bst = new BST();
    bst.add(5);
    bst.add(1);
    bst.add(10);
    bst.add(15);
    bst.add(2);
    bst.add(50);
    expect(bst.preOrder([5, 1, 2, 10, 15, 50])).tobe
  });
  it('Can successfully return a collection from a inorder traversal', () => {
    let bst = new BST();
    bst.add(5);
    bst.add(1);
    bst.add(10);
    bst.add(15);
    bst.add(2);
    bst.add(50);
    expect(bst.inOrder([1, 2, 5, 10, 15, 50])).tobe
  });
  it('Can successfully return a collection from a postorder traversal', () => {
    let bst = new BST();
    bst.add(5);
    bst.add(1);
    bst.add(10);
    bst.add(15);
    bst.add(2);
    bst.add(50);
    expect(bst.postOrder([2, 1, 50, 15, 10, 5])).tobe
  });
})
