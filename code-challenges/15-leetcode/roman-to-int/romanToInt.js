'use strict'

function romanToInt(romannum){
    let mapping = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    };
    let total = 0;
    let split = romannum.split('')
    console.log(split)
    split.forEach((letter, idx) => {
        total += mapping[letter];
        if(mapping[letter] > mapping[split[idx -1]]){
            total -= mapping[split[idx -1]] * 2
        }
    })
    return total
}




module.exports = romanToInt

/*

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 */