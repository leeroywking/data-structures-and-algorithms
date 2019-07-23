'use strict'

const QWS = require('./queue-with-stacks.js');

describe('Queue with stacks tests', () => {
  it('can enqueue things', () => {
    let qs = new QWS;
    qs.enqueue(5);
    qs.enqueue(10);
    qs.enqueue(15);
    qs.enqueue(20);
    expect(qs.stack1.top.value).toBe(20)
  });

  it('can dequeue things', () => {
    let qs = new QWS;
    qs.enqueue(5);
    qs.enqueue(10);
    qs.enqueue(15);
    qs.enqueue(20);
    expect(qs.dequeue()).toBe(5)
  });

})