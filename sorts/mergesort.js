'use strict';

const merge = (left, right, arr) => {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i = i + 1
        }

        else {
            arr[k] = right[j];
            j = j + 1;
        }

        k = k + 1;
    }

    if (i === left.length) {
        let arr = right;
        //set remaining entries in arr to remaining values in right
    }

    else {
        let arr = left;
        //set remaining entries in arr to remaining values in left
    }
};

const mergeSort = (arr) => {
    let timeStart = Date.now();
    let n = arr.length;
    if (n > 1) {
        let mid = n / 2;
        let left = arr.slice(0,mid);
        let right = arr.slice(mid,n);
        // sort the left side
        mergeSort(left);
        // sort the right side
        mergeSort(right);
        // merge the sorted left and right sides together
        merge(left, right, arr);
    }
  let timeEnd = Date.now();
  return {text:`mergeSort sort time ${timeEnd - timeStart}`, result: arr}
};

module.exports = mergeSort