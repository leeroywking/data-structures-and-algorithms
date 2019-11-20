'use strict'

const countAndSay = require('./countandsay.js');

describe('Count and say tests', () => {
    it('Passes testcase 1', () => {
        expect(countAndSay(1)).toEqual('1');
    });
    it('Passes testcase 2', () => {
        expect(countAndSay(2)).toEqual('11');
    });
    it('Passes testcase 3', () => {
        expect(countAndSay(3)).toEqual('21');
    });
    it('Passes testcase 4', () => {
        expect(countAndSay(4)).toEqual('1211');
    });
    it('Passes testcase 5', () => {
        expect(countAndSay(5)).toEqual('111221');
    });
    it('Passes testcase 6', () => {
        expect(countAndSay(6)).toEqual('312211');
    });
    it('Passes testcase 7', () => {
        expect(countAndSay(7)).toEqual('13112221');
    });
});