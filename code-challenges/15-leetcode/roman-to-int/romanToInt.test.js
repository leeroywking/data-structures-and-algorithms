'use strict'

const romanToInt = require('./romanToInt.js')

describe('roman to int tests', () => {
    it('returns 3 when given III', () => {
        expect(romanToInt('III')).toBe(3);
    });
    it('returns 4 when given IV', () => {
        expect(romanToInt('IV')).toBe(4);
    })
    it('returns 9 when given IX', () => {
        expect(romanToInt('IX')).toBe(9);
    })
    it('returns 58 when given LVIII', () => {
        expect(romanToInt('LVIII')).toBe(58);
    })
    it('returns 1994 when given MCMXCIV', () => {
        expect(romanToInt('MCMXCIV')).toBe(1994);
    })
})