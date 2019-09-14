'use strict'


// credit to https://www.w3resource.com/javascript-exercises/javascript-function-exercise-24.php
// this was not part of our assignment so I did not bother to reinvent the wheel. 


function bubbleSort(a){
      let timeStart = Date.now()
    let swapp;
    let n = a.length-1;
    let x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
    
  let timeEnd = Date.now()
return {text:`bubble sort time ${timeEnd - timeStart}`, result: a};
}

module.exports = bubbleSort