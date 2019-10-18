/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = {};
    let bool = false
    let current = n;
    while(!bool){
    let intstrarray = current.toString().split('')
    let newInt = intstrarray.reduce((acc, val) => {
        return acc + (parseInt(val) * parseInt(val))
    }, 0)
    if(newInt === 1){bool = true}
    else{
        if(seen[newInt]){bool = false; break}
        seen[newInt] = true
        current = newInt
        }
    }
    return bool;
};