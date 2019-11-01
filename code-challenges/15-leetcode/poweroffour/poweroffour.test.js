'use strict';
const powerOfFour = require('./poweroffour.js');

describe('Power of four tests', () => {
  it('returns true if something is a power of four', () => {
    expect(powerOfFour(16)).toBeTruthy();
  });
  it('handles large powers of four', () => {
    expect(powerOfFour(1048576)).toBeTruthy();
  });
});
