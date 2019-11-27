'use strict'
/**
 * @param {string} S
 * @return {boolean}
 */
var isValid = function (S) {
  let fail = false
  while (S.length && !fail) {
    if (S[0] !== 'a') { fail = true }
    else if (S[1] !== 'b') {
      if (S[S.length - 1] === 'c' && S[S.length - 2] === 'b') {
        S = S.slice(1).slice(0, S.length - 3)
      }
      else{fail = true}
    }
    else if (S[2] !== 'c') {
      if (S[S.length - 1] === 'c') {
        S = S.slice(2).slice(0, S.length - 3)
      }
      else{fail = true}
    }
    else {
      S = S.slice(3);
    }
  }
  return !fail
};

module.exports = isValid