/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    //we will iterate through the list and keep comparing the shorter element and add
    // the shorter one in the new linked list it'll take O(n) time and space complexity
    let temp = new ListNode(0, null);
    let currentNode = temp;
    
    while (list1 && list2) {
        if(list1.val < list2.val) {
            currentNode.next = list1;
            list1 = list1.next
        } else {
            currentNode.next = list2;
            list2 = list2.next
        }
        currentNode = currentNode.next;
    }
    currentNode.next = list1 || list2;
    
    return temp.next;    
};