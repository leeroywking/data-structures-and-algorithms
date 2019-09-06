'use strict'

function leesort(arr){
    let timeStart = Date.now()
    let holder = {};
    arr.forEach(element => {
        if(holder[element]){holder[element]++}
        else{holder[element] = 1;}
    });
    
    let output = [];
    let keys = Object.keys(holder)
    keys.forEach(key => {
        while(holder[key]) {
            output.push(key);
            holder[key] -= 1;
        }
    })
    
    let timeEnd = Date.now()
    return {text:`lee sort time ${timeEnd - timeStart}`, result: output}
}

module.exports = leesort