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
var addTwoNumbers = function(l1, l2) {
    let flag = 0
    let result;
    let curr;
    while(l1 || l2){
        var value = (l1?l1.val:0) + (l2?l2.val:0) + flag
        if(parseInt(value/10)){
            flag = 1
        }else{
            flag = 0
        }
        var node = new ListNode(value%10)
        if(!result) {
            result = node
            curr = node
        }else{
            curr.next = node
            curr = curr.next
        }
        l1 = (l1?l1.next:null)
        l2 = (l2?l2.next:null)
    }
    if(flag) {
        curr.next = new ListNode(1)
    }
    return result
};