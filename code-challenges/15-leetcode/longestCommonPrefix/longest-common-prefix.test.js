'use strict'

const longestcommonprefix = require('./longest-common-prefix.js')

describe('longest common prefix tests', () => {
    it('Passes testcase 1', () => {
        expect(
            longestcommonprefix(["flower","flow","flight"])
        ).toEqual('fl')
    });
    it('Passes testcase 2', () => {
        expect(
            longestcommonprefix(["dog","racecar","car"])
        ).toEqual('')
    });
    it('Passes testcase 3', () => {
        expect(
            longestcommonprefix([])
        ).toEqual('')
    });
    it('Passes testcase 4', () => {
        expect(
            longestcommonprefix([""])
        ).toEqual('')
    });
    it('Passes testcase 5', () => {
        expect(
            longestcommonprefix(["dog"])
        ).toEqual('dog')
    });
    it('Passes testcase 6', () => {
        expect(
            longestcommonprefix(["", ""])
        ).toEqual('')
    });
})