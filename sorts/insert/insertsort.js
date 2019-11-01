'use strict';

const insertionSort = function(arr) {
  let timeStart = Date.now();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  let timeEnd = Date.now();
  return { text: `insert sort time ${timeEnd - timeStart}`, result: arr };
};

module.exports = insertionSort;
