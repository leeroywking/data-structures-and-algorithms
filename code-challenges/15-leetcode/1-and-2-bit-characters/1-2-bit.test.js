'use strict'
let checker = require('./1-2-bit.js')

describe('1 2 bit checker', () => {
    it('passes testcase 1', () => {
        expect(checker([0])).toBeTruthy()
    });
    it('passes testcase 2', () => {
        expect(checker([0,1,0])).toBeFalsy()
    });
    it('passes testcase 3', () => {
        expect(checker([1,0,0])).toBeTruthy()
    });
    it('passes testcase 4', () => {
        expect(checker([1, 1, 1, 0])).toBeFalsy()
    });
})