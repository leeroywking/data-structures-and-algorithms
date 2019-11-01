'use strict';
let leomonadeChange = require('./leomonadechange.js');

describe('leomonade Tests', () => {
    it('Passes first testcase', () => {
        expect(leomonadeChange([5,5,10,10,20])).toBeFalsy()
    });
    xit('Passes first testcase', () => {
        expect(leomonadeChange([5,5,5,10,20])).toBeTruthy()
    });
    xit('Passes first testcase', () => {
        expect(leomonadeChange([5,5,10])).toBeTruthy()
    });
    xit('Passes first testcase', () => {
        expect(leomonadeChange([10,10])).toBeFalsy()
    });
})