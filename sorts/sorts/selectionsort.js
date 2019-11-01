'use strict';

function selectionSort(arr) {
  let timeStart = Date.now();
  function swap(idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], [arr[idx1]]];
  }

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        lowest = j;
      }
    }
    swap(i, lowest, arr);
  }
  let timeEnd = Date.now();
  return { text: `selection sort time ${timeEnd - timeStart}`, result: arr };
}

module.exports = selectionSort;
