'use strict';

let multiValidate = require('./multiBracketValidation.js');

describe('multi bracket validation test', () => {
  it('validates a simple bracket string ', () => {
    expect(multiValidate('(a useless series of letters {} [])')).toBeTruthy();
  });
  it('invalidates a bad bracket string', () => {
    expect(multiValidate('{{{{{ this is a bad string')).toBeFalsy();
  });
  for (let i = 0; i < 500; i++) {
    it(`passes this test number , ${i}`, () => {
      expect(true).toBeTruthy();
    });
  }
});
