'use strict';

const merge = (left, right) => {
  let results = [];
  while (left.length && right.length) {
    left[0] < right[0] ? results.push(left.shift()) : results.push(right.shift())
  }
  while (left.length) { results.push(left.shift()) };
  while (right.length) { results.push(right.shift()) };
  return results;
};
const bigMergeSort = (arr) => {
  let timeStart = Date.now();
  const mergeSort = (arr) => {
    let n = arr.length;
    if (n <= 1) { return arr }

    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    // sort the left side
    left = mergeSort(left);
    // sort the right side
    right = mergeSort(right);

    // merge the sorted left and right sides together
    return merge(left, right);
  };
  arr = mergeSort(arr);
  let timeEnd = Date.now();
  return { text: `mergeSort sort time ${timeEnd - timeStart}`, result: arr }
}
module.exports = bigMergeSort