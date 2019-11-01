'use strict';
const sumOfLeftLeaves = require('./sum-of-left-leaves.js');

describe('sums the left leaves of a tree', () => {
  it('sums the left leaves of a tree', () => {
    let tree = {};
    let first = { val: 3 };
    let second = { val: 9 };
    let third = { val: 20 };
    let fourth = { val: 15 };
    let fifth = { val: 7 };
    tree.root = first;
    first.left = second;
    first.right = third;
    third.left = fourth;
    third.right = fifth;
    expect(sumOfLeftLeaves(tree.root)).toBe(24);
  });
  xit('sums the left leaves of a tree', () => {
    let tree = {};
    let first = { val: 3 };
    let second = { val: 9 };
    let third = { val: 20 };
    let fourth = { val: 15 };
    let fifth = { val: 7 };
    tree.root = first;
    first.left = third;
    first.right = second;
    third.left = fourth;
    third.right = fifth;
    expect(sumOfLeftLeaves(tree.root)).toBe(24);
  });
});
