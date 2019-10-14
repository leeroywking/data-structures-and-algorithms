/**
 * @param {number[]} answers
 * @return {number}
 */
const numRabbits = function(answers) {
    let rabbitTracker = {};
    answers.forEach(rabbit => {
        if(rabbitTracker[rabbit]){rabbitTracker[rabbit] -= 1}
        else(rabbitTracker[rabbit] = rabbit)
    })
    let values = Object.values(rabbitTracker)
    return values.reduce(((acc,val) => {
        return acc + val
    }), answers.length)
};

module.exports = numRabbits;