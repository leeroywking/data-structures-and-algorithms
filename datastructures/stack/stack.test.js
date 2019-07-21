'use strict';

const Stack = require('./stack.js').Stack;

describe('Stack tests', () => {

  it('Can push things on to the stack', () =>{
    let stack = new Stack ();
    stack.push(5);
    stack.push(10);
    stack.push(15);
    stack.peek()
    expect(stack.peek()).toBe(15);
  });

  it('Can pop things off the stack', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.push(15);
    stack.peek();
    expect(stack.peek()).toBe(stack.pop())
  });

  it('can peek (it already can I used it for testing', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.push(15);
    stack.peek();
    expect(stack.peek()).toBe(15)
  });
})