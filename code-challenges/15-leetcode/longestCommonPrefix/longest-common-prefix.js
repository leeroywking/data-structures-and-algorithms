/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if(strs.length === 0){return ''}
  if(strs.length === 1){return strs[0]}
  let matches = [];
  let counter = 0;
  let done = false;
  function checkAllAtPlace(strs, place){
    let output = true
    let checker = strs[0][place]
    for(let i = 1; i < strs.length ; i++){
      if(checker !== strs[i][place]){
        output = false;
        done = true;
      };
    };
    return output
  }
  function findShortest(strs){
    let shortest = 0
    strs.forEach(val=> {
      if(val.length > shortest){
        shortest = val.length
      }
    })
    console.log(shortest)
    return shortest
  }
  let shortest = findShortest(strs)
  while(!done && (counter < shortest)){
    if(checkAllAtPlace(strs, counter)){
      matches.push(strs[0][counter])
      counter +=1
    }
    else{
      done = true;
    }
  }
  return matches.join('')
};

module.exports = longestCommonPrefix