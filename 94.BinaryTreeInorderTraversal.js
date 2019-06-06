/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// Recursive
var inorderTraversal = function(root) {
    if(root == null) return []
    let result = []
    nodeTraversal(root, result)
    return result
};

var nodeTraversal = function(node, result){
    if(node.left){
        nodeTraversal(node.left,result)
    }
    result.push(node.val)
    if(node.right){
        nodeTraversal(node.right,result)
    }
}

// Iterative
var inorderTraversal = function(root) {
    if(root == null) return []
    let stack = [root]
    let result = []
    while(stack.length > 0){
        let curr = stack[stack.length - 1]
        if(curr.left){
            stack.push(curr.left)
            curr.left = null
            continue
        }
        result.push(stack.pop().val)
        if(curr.right !== null){
            stack.push(curr.right)
        }
    }
    return result
};