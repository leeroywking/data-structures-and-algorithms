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
    else { this.head = new Node(value) };
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

  kthFromEnd(k) {
    let counter = 0;
    let current = this.head;
    while(current.next){
      counter++;
      current = current.next;
    };
    let kth = counter - k;
    current = this.head;
    if((kth <= counter) && (kth >=0)){
    for(let i = 0; i < kth ; i++){
      current = current.next;
    }
  }
    else{return undefined}
    return current.data ? current.data : undefined;
  }

  length(){
    let counter = 0;
    let current = this.head;
    while(current.next){
      current = current.next;
      counter++;
    };
    return counter;
  };
};


class Node {
  constructor(data, next = null) {
    this.next = next;
    this.data = data;
  }
}

function mergeLists(mutList,readList){
  let longer = (mutList.length() > readList.length()) ? mutList : readList;
  let shorter;
  let output = new Linkedlist();
  if(mutList === longer){shorter = readList}
  else{shorter = mutList};
  let shortCurrent = shorter.head;
  let longCurrent = longer.head;
  while(shortCurrent){
    output.append(longCurrent.data);
    output.append(shortCurrent.data);
    shortCurrent = shortCurrent.next;
    longCurrent = longCurrent.next;
  };
  while(longCurrent){
    output.append(longCurrent.data);
    longCurrent = longCurrent.next;
  }
  return output.head;
};

module.exports = {Linkedlist, mergeLists};