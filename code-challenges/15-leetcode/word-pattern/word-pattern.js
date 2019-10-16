'use strict' 

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let pattArr = pattern.split('');
    let strArr = str.split(' ');
    let holder1 = {};
    let holder2 = {};
    let bool = true;
    for(let i = 0; i< pattArr.length ; i++){
        if(
            holder1[pattArr[i]] && !(holder1[pattArr[i]] === strArr[i])
            ||
            holder2[strArr[i]] && !(holder2[strArr[i]] == pattArr[i])
            )
        {
            bool = false 
        }

        else{
            holder1[pattArr[i]] = strArr[i];
            holder2[strArr[i]] = pattArr[i];
        }
    }
    bool = pattArr.length === strArr.length ?  bool : false
    return bool
};

module.exports = wordPattern;