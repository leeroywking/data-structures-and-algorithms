'use strict'

const wordPattern = require('./word-pattern.js')

describe('Word pattern tests', () => {
    it('passes the example input', () => {
        expect(wordPattern('abba','dog cat cat dog')).toBeTruthy()
    })
    it('returns false with invalid inpute', () => {
        expect(wordPattern('abba','squirrel cat cat dog')).toBeFalsy()
    })
})