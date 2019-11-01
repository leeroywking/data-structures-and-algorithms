'use strict';

let Tree = require('../../datastructures/tree/tree.js');
let fizzBuzzTree = require('./fizz-buzz-tree.js');

describe('fizzbuzz tests', () => {
  it('Can make a tree', () => {
    let tree = new Tree();
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    tree.add(5);
    tree.add(6);
    tree.add(7);
    tree.add(8);
    tree.add(9);
    tree.add(10);
    tree.add(11);
    tree.add(12);
    tree.add(13);
    tree.add(14);
    tree.add(15);
    expect(tree.inOrder()).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ]);
  });
  it('Can fizzbuzz the tree', () => {
    let tree = new Tree();
    tree.add(1);
    tree.add(4);
    tree.add(3);
    tree.add(15);
    tree.add(5);
    tree.add(14);
    tree.add(6);
    tree.add(10);
    tree.add(7);
    tree.add(2);
    tree.add(8);
    tree.add(11);
    tree.add(13);
    tree.add(9);
    tree.add(12);
    expect(fizzBuzzTree(tree).inOrder()).toEqual([
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz'
    ]);
  });
});
