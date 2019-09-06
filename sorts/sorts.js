'use strict'
const fs = require('fs');


let bigArr = require('./longlist.js')
let insertionSort = require('./insertsort.js')
let bubbleSort = require('./bubblesort.js')
let mergeSort = require('./mergesort.js')


let insertOut = insertionSort([...bigArr]);
let mergeOut = mergeSort([...bigArr]);
let bubbleOut = bubbleSort([...bigArr]);

console.log(insertOut.text);
console.log(bubbleOut.text);
console.log(mergeOut.text);

fs.writeFileSync('./outputInsert.js', insertOut.result);
fs.appendFileSync('./outputInsert.js', mergeOut.result);
fs.appendFileSync('./outputInsert.js', bubbleOut.result);
console.log('done')