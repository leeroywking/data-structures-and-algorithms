'use strict'

let multiValidate = require('./multiBracketValidation.js');


describe('multi bracket validation test', () => {
  it('validates a simple bracket string ', () => {
    expect(multiValidate('(a useless series of letters {} [])')).toBeTruthy();
  });
});