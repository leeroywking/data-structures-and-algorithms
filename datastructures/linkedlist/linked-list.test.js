'use strict';
const linkFile = require('./linked-list.js');
const Linkedlist = linkFile.Linkedlist;
const mergeLists = linkFile.mergeLists;

describe('Testing Singly Linked Lists', () => {
  test('It should be able to insert multiple nodes', () => {
    let list = new Linkedlist();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.head.next.next.next).toBeTruthy();
  });
  test('it should start instantiate empty', () => {
    let list = new Linkedlist();
    expect(list.head).toBeFalsy();
  });
  test('the head points to the first node in the linked list', () => {
    let list = new Linkedlist();
    list.insert(5);
    expect(list.head.data).toEqual(5);
  });
  test('It will return true when finding a value within the LL that exists', () => {
    let list = new Linkedlist();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.includes(1)).toBeTruthy();
  });
  test('it should return false if trying to find a value which is not included', () => {
    let list = new Linkedlist();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.includes(5)).toBeFalsy();
  });
  test('it should concat all the items inside it into a string', () => {
    let list = new Linkedlist();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.toString()).toBe('4321');
  });

  test('it should insert multiple nodes to the end of the list', () => {
    let list = new Linkedlist();
    list.append(5);
    list.append(3);
    list.append(7);
    list.append(10);
    list.append(55555);
    expect(list.head.next.next.next.next.data).toEqual(55555);
  });

  test('it should insert before a given value', () => {
    let list = new Linkedlist();
    list.append(5);
    list.append(3);
    list.append(7);
    list.append(10);
    list.append(55555);
    list.insertBefore(55555, 69);
    expect(list.head.next.next.next.next.data).toEqual(69);
  });

  test('it should insert after a given value', () => {
    let list = new Linkedlist();
    list.append(5);
    list.append(3);
    list.append(7);
    list.append(10);
    list.append(55555);
    list.insertAfter(55555, 69);
    expect(list.head.next.next.next.next.next.data).toBe(69);
  });

  it('if K is greater than the length of linked list reply undefined', () => {
    let list = new Linkedlist();
    list.append(5);
    list.append(3);
    list.append(7);
    list.append(10);
    list.append(55555);
    expect(list.kthFromEnd(10)).toBeUndefined();
  });

  it('if k and the length are the same', () => {
    let list = new Linkedlist();
    list.append(5);
    list.append(3);
    list.append(7);
    list.append(10);
    list.append(55555);
    expect(list.kthFromEnd(5)).toBeUndefined();
  });

  it('is not positive the method throws undefined', () => {
    let list = new Linkedlist();
    list.append(5);
    list.append(3);
    list.append(7);
    list.append(10);
    list.append(55555);
    expect(list.kthFromEnd(-10)).toBeUndefined();
  });

  it('deals with a 1 node LL correctly', () => {
    let list = new Linkedlist();
    list.append(5);
    expect(list.kthFromEnd(0)).toBe(5);
  });

  it('Actually returns the thing we want it to (the kth value from the linked list)', () => {
    let list = new Linkedlist();
    list.append(5);
    list.append(3);
    list.append(7);
    list.append(10);
    expect(list.kthFromEnd(2)).toBe(3);
  });
});

describe('Function tests for Linked lists (not methods)', () => {
  it('the head of the longer array is the return', () => {
    let list1 = new Linkedlist();
    let list2 = new Linkedlist();
    list1.append(10);
    list1.append(11);
    list1.append(12);
    list2.append(20);
    list2.append(21);
    list2.append(22);
    list2.append(23);
    list2.append(24);
    list2.append(25);
    expect(mergeLists(list1, list2).data).toBe(list2.head.data);
  });
  it('the head of the longer array is the return even when the inputs are reversed', () => {
    let list1 = new Linkedlist();
    let list2 = new Linkedlist();
    list1.append(10);
    list1.append(11);
    list1.append(12);
    list2.append(20);
    list2.append(21);
    list2.append(22);
    list2.append(23);
    list2.append(24);
    list2.append(25);
    expect(mergeLists(list2, list1).data).toBe(list2.head.data);
  });

  describe('looping tests for merge lists', () => {
    let array1 = [10, 11, 12, 13, 14, 15];
    let array2 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
    let testArray = [
      20,
      10,
      21,
      11,
      22,
      12,
      23,
      13,
      24,
      14,
      25,
      15,
      26,
      27,
      28,
      29
    ];
    let list1 = new Linkedlist();
    let list2 = new Linkedlist();
    array1.forEach(item => list1.append(item));
    array2.forEach(item => list2.append(item));
    let mergedLists = mergeLists(list1, list2);
    testArray.forEach((entry, idx) => {
      let current = mergedLists;
      it(`matches the value at ${idx} in the test array (depth of list) `, () => {
        for (let j = 0; j < idx; j++) {
          current = current.next;
        }
        expect(current.data).toBe(entry);
      });
    });
  });
});
