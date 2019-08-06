'use strict';

const Queue = require('./queue.js');

describe('queue tests', () => {
    it('Can instantiate a queue', () => {
        let newQ = new Queue();
        expect(newQ.showQueue()).toStrictEqual([])
    });

    it('Can successfully enqueue into a queue', () => {
        let newQ = new Queue();
        newQ.enqueue(5);
        newQ.enqueue(10);
        newQ.enqueue(15);
        newQ.enqueue(20);
        expect(newQ.showQueue()).toStrictEqual([5,10,15,20])
    });
    it('Can successfully enqueue multiple values into a queue', () => {
        let newQ = new Queue();
        newQ.enqueue(5);
        newQ.enqueue(10);
        newQ.enqueue(15);
        newQ.enqueue(20);
        expect(newQ.showQueue()).toStrictEqual([5,10,15,20])
    });

    it('Can successfully dequeue out of a queue the expected value', () => {
        let newQ = new Queue();
        newQ.enqueue(5);
        newQ.enqueue(10);
        newQ.enqueue(15);
        newQ.enqueue(20);
        newQ.dequeue()
        expect(newQ.dequeue()).toStrictEqual(10)
    });

    it('Can successfully peek into a queue, seeing the expected value', () => {
        let newQ = new Queue();
        newQ.enqueue(5);
        newQ.enqueue(10);
        newQ.enqueue(15);
        newQ.enqueue(20);
        expect(newQ.peek()).toBe(5);
    })
    it('Can successfully empty a queue after multiple dequeues', () => {
        let newQ = new Queue();
        newQ.enqueue(5);
        newQ.enqueue(10);
        newQ.dequeue();
        newQ.dequeue();
        expect(newQ.front).toBeNull();
    });
    it('Can successfully instantiate an empty queue', () => {
        let newQ = new Queue();
        expect(newQ.front).toBeNull();
    })
})

// 
// Can successfully instantiate an empty queue