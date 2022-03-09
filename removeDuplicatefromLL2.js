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
var deleteDuplicates = function(head) {
  let dummy = { next: head }, toReturn = dummy;
  while (dummy) {
    let changed = false;
    if (dummy.next && dummy.next.next && dummy.next.val === dummy.next.next.val) {
      let runner = dummy.next.next, toDelete = runner.val;
      while (runner && runner.val === toDelete) runner = runner.next;
      dummy.next = runner;
      changed = true;
    }
    if (!changed) dummy = dummy.next;
  }
  return toReturn.next;
};
