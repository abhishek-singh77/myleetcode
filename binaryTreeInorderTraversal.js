/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    let sol = [];
    traverseRecursive(root);
    return sol;
        function traverseRecursive(root){
            if(!root) 
                return;
            traverseRecursive(root.left);
            sol.push(root.val);
            traverseRecursive(root.right);
        }   
};