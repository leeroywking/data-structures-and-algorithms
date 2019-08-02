'use strict'

function multiBracketValidation(string){
  let tracker = {'(':0,')':0,'[':0,']':0,'{':0,'}':0 };
  string.split('').forEach(char => tracker[char]++)
  return (
    (tracker['('] - tracker[')']) ||
    (tracker['['] - tracker[']']) ||
    (tracker['{'] - tracker['}'])
  ) ? false : true
}

module.exports = multiBracketValidation;