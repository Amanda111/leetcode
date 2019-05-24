/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//BFS
var zigzagLevelOrder = function(root) {
    if(!root || root.length) return []
    let curr = [root]
    let result = []
    let flag = true
    let temp = []
    let group = []
    while(curr.length>0){
        let nodes = curr.pop()
        if(flag) group.unshift(nodes.val) 
        else group.push(nodes.val)
        if(nodes.right != null) temp.unshift(nodes.right)
        if(nodes.left != null) temp.unshift(nodes.left)
        if(curr.length == 0) {
            result.push(group)
            group = []
            curr = temp
            temp = []
            flag = !flag
        }
    }
    return result
};

// DFS
var zigzagLevelOrder = function(root) {
    let result = []
    travel(root, result, 0)
    return result
};

var travel = function(curr, result, level){
    if(curr == null) return
    if(result.length <= level) {
        result[level] = []
    }
    if(level % 2 == 0){
        result[level].push(curr.val)
    }else {
        result[level].unshift(curr.val)
    }
    travel(curr.left, result, level + 1);
    travel(curr.right, result, level + 1);
}