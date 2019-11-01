'use strict';
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = root => {
  let total = 0;
  const walkLeft = node => {
    if (!node.left && !node.right) {
      total += node.val;
    } else {
      if (node.left) {
        walkLeft(node.left);
      }
      if (node.right) {
        walkRight(node.right);
      }
    }
  };
  const walkRight = node => {
    if (node.left) {
      walkLeft(node.left);
    }
    if (node.right) {
      walkRight(node.right);
    }
  };
  if (!root) {
    return 0;
  }
  if (root.left) {
    walkLeft(root.left);
  }
  if (root.right) {
    walkRight(root.right);
  }
  return total;
};

module.exports = sumOfLeftLeaves;
