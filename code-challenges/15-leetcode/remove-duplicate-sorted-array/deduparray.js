'use strict'

var removeDuplicates = function (nums) {
  // checker
  // remover
  function removeIPlus1(i){
    for(let j = i +1; j < nums.length -1 ; j++){
    nums[j] = nums [j + 1]
    }
    nums.pop()
  }
  // checker only needs to check the next value
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      removeIPlus1(i)
      i -=1
    }
  }
  return nums.length
};

module.exports = removeDuplicates