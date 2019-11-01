'use strict';
const happycheck = require('./happy-number.js');

describe('Happy number tests', () => {
  it('returns true for a happy number', () => {
    expect(happycheck(82)).toBeTruthy();
  });
  it('returns false for an unhappy number', () => {
    expect(happycheck(2)).toBeFalsy();
  });
});
