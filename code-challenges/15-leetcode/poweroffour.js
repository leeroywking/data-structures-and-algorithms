'use strict'

/**
 * @param {number} num
 * @return {boolean}
 * 
 */
const isPowerOfFour = function(num) {
    if(num === 1){return true}
    let checker = 4
    while(checker < 2147483647  && checker <= num){
        if(num === checker){return true }
        else(checker = checker * 4)
    }
    return false
};

console.log(isPowerOfFour(16))

module.exports  = isPowerOfFour