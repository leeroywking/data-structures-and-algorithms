'use strict';

const Hashmap = require('./hashmap.js');

describe('hashmap tests', () => {
  it('can set and retrieve a value', () => {
    let hashmap = new Hashmap(16);
    hashmap.set('cinco', 'the number five');
    expect(hashmap.get('cinco')).toBe('the number five');
  });
  it('can utilize the has function to return a boolean', () => {
    let hashmap = new Hashmap(16);
    hashmap.set('cinco', 'the number five');
    expect(hashmap.has('cinco')).toBe(true);
  });
});
