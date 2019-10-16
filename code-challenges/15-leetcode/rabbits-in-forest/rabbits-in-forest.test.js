'use strict';

let rabbits = require('./rabbits-in-forest.js')

let rabbit1 = rabbits.numRabbits;
let rabbit2 = rabbits.numRabbits2;

describe('rabbit tester', () => {
  it('can do the rabbit thing', () => {
    expect(rabbit2([4,2,1,1])).toEqual(10)
  })
})