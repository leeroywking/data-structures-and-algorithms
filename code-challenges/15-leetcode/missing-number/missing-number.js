/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort( (a,b) => {
        if(a > b){return 1}
        else{return -1}
    })
    if(nums[0] !== 0){return 0}
    for(let i = 1; i < nums.length ; i++){
        if(nums[i] - nums[i -1] > 1){
            console.log(nums)
            return nums[i] -1
        }
    }
    return nums.length
};

module.exports = missingNumber