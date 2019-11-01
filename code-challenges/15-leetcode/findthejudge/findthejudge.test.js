'use strict';

const findthejudge = require('./findthejudge.js');

describe('find the judge tests', () => {
  it('Can return the judge if there is a judge', () => {
    expect(findthejudge(2, [[1, 2]])).toBe(2);
  });
  it('returns -1 if there is no judge', () => {
    expect(findthejudge(2, [[1, 2], [2, 1]])).toBe(-1);
  });
  it('handles multiple potential judges correctly (there cannot be multiple judges this is exercising an edgecase)', () => {
    expect(findthejudge(2, [])).toBe(-1);
  });
});
