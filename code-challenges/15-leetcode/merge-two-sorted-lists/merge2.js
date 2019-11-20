'use strict'
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let current1 = l1;
    let current2 = l2;
    let output = {};
    let currentOutput = output;
    while (l1.next && l2.next){
        if(current1.val >= current2.val){
            currentOutput.val = current2.val;
            current2 = current2.next;
            currentOutput = currentOutput.next;
        };
        if(current1.val < current2.val){
            currentOutput.val = current1.val;
            current1 = current1.next;
            currentOutput = currentOutput.next;
        };
    }
    while (current1.next){
        currentOutput.val = current1.val;
        current1.next = current1.next;
        currentOutput = currentOutput.next;
    }
};