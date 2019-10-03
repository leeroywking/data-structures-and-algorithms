'use strict'
let quicksort = require('./quicksort.js');
const bigArr = require('../sorts/longlist.js');



describe('Insert sort tests', () => {
    xit('Sorts a short array', () => {
        expect(quicksort([4,2,7,9]).result).toEqual([2,4,7,9])
    });
    xit('sorts an extremely long array', () => {
        expect (
            quicksort([...bigArr]).result
        ).toEqual(
            [...bigArr].sort((a,b) => {
                return a > b ? 1: -1
            })
        )
    })
    it('Fails miserably to sort an array of strings', () => {
        expect(
            quicksort(['a','b','z','g','y']).result
        ).not.toBe(['a','b','g','y','z'])
    })
})