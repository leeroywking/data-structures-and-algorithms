'use strict'

const insertionSort = function(arr){
  let timeStart = Date.now()
for (let i = 1; i < arr.length; i++) {

  let j = i - 1
  let temp = arr[i]

  while(j >= 0 && temp < arr[j]){
    arr[j + 1] = arr[j]
    j = j - 1
  }
  arr[j + 1] = temp
}
  let timeEnd = Date.now()
return {text:`insert sort time ${timeEnd - timeStart}`, result: arr}
}

module.exports = insertionSort;