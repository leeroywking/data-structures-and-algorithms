'use strict';

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  let possJudges = new Set();
  let map = new Map();
  for (let i = 1; i <= N; i++) {
    map.set(i, []);
    possJudges.add(i);
  }
  trust.forEach(pair => {
    map.get(pair[0]).push(pair[1]);
    possJudges.delete(pair[0]);
  });
  let maybejudge;
  if (possJudges.size === 1) {
    maybejudge = Array.from(possJudges)[0];
  }
  for (let i = 1; i <= N; i++) {
    if (i !== maybejudge) {
      if (!map.get(i).includes(maybejudge)) {
        return -1;
      }
    }
  }
  return maybejudge ? maybejudge : -1;
};

module.exports = findJudge;
