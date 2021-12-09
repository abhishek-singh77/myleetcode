/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


/*
We are given with head to find the middle we can follow many aproaches one of them is let's find the total length of the linked list using one loop and then divide the length by 2 and take the ceil value and further we'll traverse till that position and return the value there.

*/

let findLength = function(node) {
    let length = 0;
    while(node.next) {//till node next is not null we will traverse the list and increment 
        length += 1;
        node = node.next;
    }
    return length;
};

//now we will return the element at that position 

let Position = function(node, target) {
    for(let i = 0; i < target; i++) {
        node = node.next;
    }
    return node;
};

var middleNode = function(head) {
    let target = Math.ceil(findLength(head)/2);
    return Position(head, target);
};