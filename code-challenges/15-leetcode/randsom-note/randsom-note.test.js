'use strict';

let canConstruct = require('./randsom-note.js');

describe('Randsome note tests', () => {
  it('passes the example test 1', () => {
    expect(canConstruct('a', 'b')).toBeFalsy();
  });
  it('passes the leetcode examples 2', () => {
    expect(canConstruct('aa', 'ab')).toBeFalsy();
  });
  it('it passes the leetcode examples 3', () => {
    expect(canConstruct('aa', 'aab')).toBeTruthy();
  });
});
