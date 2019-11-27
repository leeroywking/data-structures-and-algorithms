'use strict'

const isValid = require('./validABC.js');

describe('ValidABC tests', () => {
    it('passes abcabcababcc test case', () => {
        expect(isValid('abcabcababcc')).toBeTruthy()
    })
    it('passes aabcbc test case', () => {
        expect(isValid('aabcbc')).toBeTruthy()
    });
    it('passes ababcc test case', () => {
        expect(isValid('ababcc')).toBeTruthy()
    })
    it('passes abcabcabc test case', () => {
        expect(isValid('abcabcabc')).toBeTruthy()
    })
    it('passes aabbcc test case', () => {
        expect(isValid('aabbcc')).toBeFalsy()
    })
    it('passes aabcbcabc test case', () => {
        expect(isValid('aabcbcabc')).toBeTruthy()
    })
})



