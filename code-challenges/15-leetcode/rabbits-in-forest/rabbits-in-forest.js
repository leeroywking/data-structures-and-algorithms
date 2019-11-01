/**
 * @param {number[]} answers
 * @return {number}
 */
const numRabbits = function(answers) {
  let rabbitTracker = {};
  answers.forEach(rabbit => {
    if (rabbitTracker[rabbit]) {
      rabbitTracker[rabbit] -= 1;
    } else rabbitTracker[rabbit] = rabbit;
  });
  let values = Object.values(rabbitTracker);
  return values.reduce((acc, val) => {
    return acc + val;
  }, answers.length);
};

const numRabbits2 = answers => {
  let rabbits = new Set();
  let total = 0;
  for (let i = 0; i < answers.length; i++) {
    if (!rabbits.has(answers[i])) {
      rabbits.add(answers[i]);
      total += answers[i] + 1;
    }
  }
  return total;
};

module.exports = { numRabbits, numRabbits2 };
