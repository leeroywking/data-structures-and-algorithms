'use strict';

/**
 * @param {number} num
 * @return {boolean}
 *
 */
const isPowerOfFourOld = function(num) {
  let set = new Set();
  if (num === 1) {
    return true;
  }
  let checker = 1;
  while (checker < 2147483647 && checker <= num) {
    set.add(checker);
    if (num === checker) {
      return true;
    } else checker = checker * 4;
  }
  return false;
};

function isPowerOfFour(num) {
  let base = 4;
  let power = 0;
  let set = new Set();
  while (power < 15) {
    let current = Math.pow(base, power);
    set.add(current);
    power = power + 1;
  }
  return set.has(num);
}

module.exports = isPowerOfFour;

// isPowerOfFour(4)
// isPowerOfFourOld(1073741824);
