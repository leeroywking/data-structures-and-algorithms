'use strict'
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function (A, K) {
  for (let j = 0; j < K; j++) {
    let smallestIdx = 0
    for (let i = 0; i < A.length; i++) {
      if (A[smallestIdx] > A[i]) { 
        smallestIdx = i 
      }
    }
    A[smallestIdx] = A[smallestIdx] * -1
  }
  return A.reduce((a, b) => a + b)
};

module.exports = largestSumAfterKNegations