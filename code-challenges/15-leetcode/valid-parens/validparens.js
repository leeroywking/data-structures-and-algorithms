'use strict'
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  let parens = {
    "}":"{",
    ")":"(",
    "]":"["
  };
  const stack = [];
  for(const i of s){
    if(stack.length && stack[stack.length -1] === parens[i]){stack.pop()}
    else{stack.push(i)}
  }
  return !stack.length ? true : false
};

module.exports = isValid