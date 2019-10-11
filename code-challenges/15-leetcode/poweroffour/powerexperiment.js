'use strict'
let base = 4
let power = 0;
let obj = {};

while(power < 15 ){
    let current = Math.pow(base, power);
    obj[current] = true;
    power = power + 1
}
console.log(obj)