'use strict'

let bigArr = require('./longlist.js')
let insertionSort = require('./insertsort.js')
let bubbleSort = require('./bubblesort.js')

let insertOut = insertionSort([...bigArr]);

let bubbleOut = bubbleSort([...bigArr]);

console.log(insertOut);
console.log(bubbleOut);