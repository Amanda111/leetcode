/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var rob = function(root) {
//     if(root == null){
//         return 0
//     }
//     let val = 0
//     if(root.left) {
//         val += rob(root.left.left) + rob(root.left.right)
//     }
//     if(root.right) {
//         val += rob(root.right.left) + rob(root.right.right)
//     }
//     return Math.max(root.val + val, rob(root.left) + rob(root.right))
// };

// let map = new Map()
// var rob = function(root) {
//     if(root == null){
//         return 0
//     }
//     if(map.has(root)) return map.get(root)
//     let val = 0
//     if(root.left) {
//         val += rob(root.left.left) + rob(root.left.right)
//     }
//     if(root.right) {
//         val += rob(root.right.left) + rob(root.right.right)
//     }
//     let result = Math.max(root.val + val, rob(root.left) + rob(root.right))
//     map.set(root,result)
//     return result
// }

// tail recursion
var rob = function(root) {
    let res = robSub(root)
    return Math.max(res[0],res[1])
}

var robSub = function(root) {
    if(root == null){
        return [0,0]
    }
    
    let res = []
    let left = robSub(root.left)
    let right = robSub(root.right)
    res[0] = Math.max(left[0],left[1]) + Math.max(right[0],right[1])
    res[1] = root.val + left[0] + right[0]
    
    return res
}