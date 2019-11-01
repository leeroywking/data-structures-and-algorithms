/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  while (bits.length > 1) {
    if (bits[0] === 1) {
      bits.shift();
      bits.shift();
    } else {
      bits.shift();
    }
  }
  return !!bits.length;
};

module.exports = isOneBitCharacter;
/*
[0] true
[0,1,0] false
[1,0,0] true
[1, 1, 1, 0] false
*/
// psuedo code

// If ends with zero than either length -2 = 1 or 0
// if 1 then
// rip through array and pop off 2 bit numbers

/*
96.25% time
100% space

*/
