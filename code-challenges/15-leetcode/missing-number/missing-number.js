/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  nums.sort((a, b) => {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });
  if (nums[0] !== 0) {
    return 0;
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      console.log(nums);
      return nums[i] - 1;
    }
  }
  return nums.length;
};

var missingNumber2 = function(nums) {
  let total = nums.reduce((a, b) => {
    return a + b;
  });
  let max = (nums.length * nums.length + 1) / 2 + 1;
  console.log(max);
  return max - total;
};

module.exports = missingNumber2;

// / 0 ,1,2,3,4,5,6,7,8,9,10

// 10 + 1
// 9+2
// 8 3
// 7 4
// 6 5

// 55

// 11 * 10 / 2
