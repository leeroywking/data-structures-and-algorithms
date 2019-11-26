'use strict'

const validator = require('./validparens.js');

describe('Valid parens tests', () => {
    it('Validates a simple set of parens {}', () => {
        expect(validator('{}')).toBeTruthy()
    })
    it('invalidates an incomplete set of parens {[', () => {
        expect(validator('{[')).toBeFalsy()
    });
    it('invalidates an tricky set of parens {[}]', () => {
        expect(validator('{[}]')).toBeFalsy()
    });
    it('validates an complicated set of parens {[()[]]}', () => {
        expect(validator('{[()[]]}')).toBeTruthy()
    })
})