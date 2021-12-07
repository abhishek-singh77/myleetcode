/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
	// Create a dummy head node because
    // we need a pointer to the first node in the solution.
	// See how we return headNode.next at the end of the code.
    let headNode = new ListNode('dummy_node');
	
	// Keep track of the current node so that we can easily add a new node at the end
    let currNode = headNode;
	
	// Value carried over from previous addition (is either 0 or 1)
    let carry = 0;
    
	// Same as:  while (l1 != null || l2 != null || carry != 0)
    while (l1 || l2 || carry) {
        let sum = carry;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        if (sum >= 10) {
		    // If the sum is two digit,
			// we need to carry over 1 to the next loop
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }
		// Add a new node to our solution (linked list)
        currNode.next = new ListNode(sum);
		
		// advance the current node
        currNode = currNode.next;
    }
    
    return headNode.next;     
};