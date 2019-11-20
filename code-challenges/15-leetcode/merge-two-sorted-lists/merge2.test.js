'use strict';
const merge2 = require('./merge2.js');

const l1 = {
    val: 1,
    next: {
        val:1,
        next: {
            val: 3
        }
    }
}

const l2 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val:4
        }
    }
}

const expected = {
    val: 1,
    next: {
        val:1,
        next: {
            val: 1,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: {
                        val:4
                    }
                }
            }
        }
    }
}

describe('merge 2 sorted lists', () => {
    xit('Can merge the first example', () =>{
        expect(merg2(l1,l2)).toEqual(expected);
    });
})