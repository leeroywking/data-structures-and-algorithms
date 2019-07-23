'use strict';

const Queue = require('./queue.js');

describe('queue tests', () => {
    it('Can instantiate a queue', () => {
        let newQ = new Queue();
        expect(newQ.showQueue()).toStrictEqual([])
    });

    it('Can enqueue things', () => {
        let newQ = new Queue();
        newQ.enqueue(5);
        newQ.enqueue(10);
        newQ.enqueue(15);
        newQ.enqueue(20);
        console.log(newQ)
        expect(newQ.showQueue()).toStrictEqual([5,10,15,20])
    });

    it('Can dequeue things', () => {
        let newQ = new Queue();
        newQ.enqueue(5);
        newQ.enqueue(10);
        newQ.enqueue(15);
        newQ.enqueue(20);
        newQ.dequeue()
        expect(newQ.dequeue()).toStrictEqual(10)
    });

    it('peeks correctly', () => {
        let newQ = new Queue();
        newQ.enqueue(5);
        newQ.enqueue(10);
        newQ.enqueue(15);
        newQ.enqueue(20);
        expect(newQ.peek()).toBe(5);
    })
})