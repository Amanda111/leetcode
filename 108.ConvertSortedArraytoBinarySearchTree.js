/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length == 0) return null
    return TreeGen(nums)
};

var TreeGen = function(arr){
    if(arr.length == 0) return null
    if(arr.length == 1) return new TreeNode(arr[0])
    let rootIndex = parseInt(arr.length/2)
    let rootNode = new TreeNode(arr[rootIndex])
    rootNode.left = TreeGen(arr.slice(0,rootIndex))
    rootNode.right = TreeGen(arr.slice(rootIndex+1))
    return rootNode
}