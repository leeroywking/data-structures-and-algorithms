'use strict'

function firstRepeat(bigStr) {
  let hashmap = new Array(1024).fill([]);
  let bigArr = bigStr.split(' ');
  for(let i = 0; i <bigArr.length ; i ++){
  hasher(bigArr[i])
 
  return bigArr;
  }
  function hasher(smStr) {
    let smArr = smStr.split('');
    let output = smArr.reduce((acc, val, idx) => {
      return acc + smStr.charCodeAt(idx);
    }, 0);

    let hash = (output * 599) % 1024
    if (!checker(hash, smStr, hashmap)) {
      putter(hash, smStr, hashmap)
    }
    return smStr
  }


function checker(hash, smStr, hashmap) {
  let arr = hashmap[hash];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === smStr) {
      return true;
    }
  }
}

function putter(hash, smStr, hashmap) {
  hashmap[hash].push(smStr)
}
}
firstRepeat('Once upon a time, there was a brave princess who..')