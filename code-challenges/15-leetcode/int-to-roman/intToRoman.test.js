'use strict';

const intToRoman = require('./intToRoman.js');

describe('Int to roman tests', () => {
    xit('true returns true', () => {
        expect(true).toBeTruthy();
    })
    xit('58 returns LVIII', () => {
        expect(intToRoman(58)).toBe('LVIII')
    })
    xit('1994 returns MCMXCIV', () => {
        expect(intToRoman(1994)).toBe('MCMXCIV')
    })
})