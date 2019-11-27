'use strict'

const dedup = require('./deduparray.js');

describe('Dedup array in place tests', () => {
    it(' passes [1,1,2] testcase', () => {
        const arr = [1,1,2];
        const newLength = dedup(arr);
        expect(arr.length === 2 && newLength === 2).toBeTruthy()
    })
    it(' passes [0,0,1,1,1,2,2,3,3,4] testcase', () => {
        const arr = [0,0,1,1,1,2,2,3,3,4];
        const newLength = dedup(arr);
        expect(arr.length === 5 && newLength === 5).toBeTruthy()
    })
})