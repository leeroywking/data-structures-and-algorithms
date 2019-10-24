'use strict'

const checker = require('./maximize-sum.js')

describe('Maximize-sum-k-negations test suite', () => {
  it('Passes testcase 1', () => {
    expect(checker([4,2,3],1)).toBe(5)
  });
  it('Passes testcase 1', () => {
    expect(checker([3,-1,0,2],3)).toBe(6)
  });
  it('Passes testcase 1', () => {
    expect(checker([2,-3,-1,5,-4],2)).toBe(13)
  });
})