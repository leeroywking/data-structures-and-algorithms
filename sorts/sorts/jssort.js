'use strict'

module.exports = sort

function sort(arr){
    let timeStart = Date.now()
    arr.sort((a,b) => {
        return a > b ? 1: -1;
    })
    let timeEnd = Date.now()
    return {text:`js sort time ${timeEnd - timeStart}`, result: arr}
};
