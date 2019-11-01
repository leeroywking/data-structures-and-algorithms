'use strict'
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let change = {
    5: 0,
    10: 0,
    20: 0
  };
  console.log(bills.length)
  for (let i = 0; i < bills.length; i++) {
    let current = bills[i]
    change[current] += 1;
    if (current === 10) {
      console.log(current)
      // good if there is at least one 5
      bills[5] -= 1;
      if(bills[5] < 0){
        return false
      }
    }
    if (current === 20) {
      // good if there is one 5 and one ten
      bills[5] -= 1;
      bills[10] -= 1;
      if(bills[5] < 0  || bills[10] < 0){
        return false
      }
    }
  }
  return true
};

module.exports = lemonadeChange;
