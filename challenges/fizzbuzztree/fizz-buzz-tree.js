'use strict';

/**
 *
 *
 * @param {*} tree
 * @returns modified tree
 */

function fizzBuzzTree(tree) {
  function fizzbuzzer(value) {
    if (value % 3 === 0 && value % 5 === 0) {
      value = 'FizzBuzz';
      return value;
    }
    if (!(value % 3)) {
      value = 'Fizz';
      return value;
    }
    if (!(value % 5)) {
      value = 'Buzz';
      return value;
    }
    return value;
  }

  let current = tree.root;

  function iterate(current) {
    if (current.left) {
      iterate(current.left);
    }
    if (current.right) {
      iterate(current.right);
    }
    current.val = fizzbuzzer(current.val);
  }

  iterate(current);
  return tree;
}

module.exports = fizzBuzzTree;
