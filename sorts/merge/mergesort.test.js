'use strict'
let insertsort = require('./mergesort.js');
const bigArr = require('../sorts/longlist.js');



describe('Insert sort tests', () => {
    it('Sorts a short array', () => {
        expect(insertsort([4,2,7,9]).result).toEqual([2,4,7,9])
    });
    it('sorts an extremely long array', () => {
        expect (
            insertsort([...bigArr]).result
        ).toEqual(
            [...bigArr].sort((a,b) => {
                return a > b ? 1: -1
            })
        )
    })
    it('Fails miserably to sort an array of strings', () => {
        expect(
            insertsort(['a','b','z','g','y']).result
        ).not.toBe(['a','b','g','y','z'])
    })
})