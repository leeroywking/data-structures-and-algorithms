/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    function nextValue(input){
    let split = input.split('');
    let current = 0;
    output = [];
    let count = 1;
    while(current < split.length){
        if(split[current] == split[current +1]){
            count += 1;
            current += 1;
        }
        else{
            output.push(count);
            output.push(split[current]);
            count = 1;
            current = current +1;
        }
    }
    return output.join('');
}
let start = '1'
for(i = 1; i<n ; i++){
    start = nextValue(start)
}
return start
};
module.exports = countAndSay