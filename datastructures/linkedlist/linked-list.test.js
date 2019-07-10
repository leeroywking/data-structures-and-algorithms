'use strict'

class Linkedlist {
  constructor() {
    this.head = null;
  };

  insert(data) {
    this.head = new Node(data, this.head)
    return data;
  };

  includes(value) {
    let current = this.head
    while (current) {
      if (current.data === value) {
        return true;
      };
      current = current.next;
    };
    return false;
  };

  toString() {
    let ans = '';
    let current = this.head;
    while (current) {
      ans += current.data;
      current = current.next;
    };
    return ans;
  }

  append(value) {
    let current = this.head;
    if (current) {
      while (current.next) {
        current = current.next;
      };
      current.next = new Node(value);
    }
    else{this.head = new Node(value)};
  };

  insertBefore(value, newValue) {
    let current = this.head;
    while (current.next.data !== value) {
      current = current.next;
    };
    current.next = new Node(newValue, this.next);
  };

  insertAfter(value, newValue) {
    let current = this.head;
    while (current.data !== value) {
      current = current.next;
    };
    current.next = new Node(newValue, this.next);
  };

};


class Node {
  constructor(data, next = null) {
    this.next = next;
    this.data = data;
  }
}




describe('Testing Singly Linked Lists', () => {
  test('It should be able to insert multiple nodes', () => {
    let list = new Linkedlist();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.head.next.next.next).toBeTruthy()
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
});

