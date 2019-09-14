'use strict'
const fs = require('fs');


let bigArr = require('./longlist.js')
let insertionSort = require('./insertsort.js')
let bubbleSort = require('./bubblesort.js')
let mergeSort = require('./mergesort.js')
let jsSort = require('./jssort.js')
let leesort = require('./leesort.js')
let selectionsort = require('./selectionsort.js')
let quicksort = require('./quicksort.js')

let insertOut = insertionSort([...bigArr]);
let mergeOut = mergeSort([...bigArr]);
let bubbleOut = bubbleSort([...bigArr]);
let jssortOut = jsSort([...bigArr]);
let leeOut = leesort([...bigArr]);
// let quickOut = quicksort([...bigArr]);
// let selectionOut = selectionsort([...bigArr]);


console.log(insertOut.text);
console.log(bubbleOut.text);
console.log(mergeOut.text);
console.log(jssortOut.text);
console.log(leeOut.text);
// console.log(quickOut.text);
// console.log(selectionOut.text)

fs.writeFileSync('./outputInsert.js',    `insertion: ${insertOut.result}`);
fs.appendFileSync('./outputInsert.js', `\nMerge    : ${mergeOut.result}`);
fs.appendFileSync('./outputInsert.js', `\nbubble   : ${bubbleOut.result}`);
fs.appendFileSync('./outputInsert.js', `\nJS sort  : ${jssortOut.result}`);
fs.appendFileSync('./outputInsert.js', `\nLee sort : ${leeOut.result}`);
// fs.appendFileSync('./outputInsert.js', `\nLee sort : ${quickOut.result}`);
// fs.appendFileSync('./outputInsert.js', `\nSelection: ${selectionOut.result}`)
console.log('done')