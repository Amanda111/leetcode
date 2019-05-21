/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null
    let pointer = head
    while(pointer){
        let temp = pointer.next
        pointer.next = prev
        if(temp == null){
            return pointer
        }else{
            prev = pointer
            pointer = temp
        }
    }
    return head
};