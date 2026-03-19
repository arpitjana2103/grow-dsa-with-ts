/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const res : ListNode = new ListNode();
    let curr : ListNode = res;

    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            curr.next = new ListNode(list1.val);
            list1 = list1.next;
        }else{
            curr.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        curr = curr.next;
    }

    if(list1 !== null) curr.next = list1;
    else if(list2 !== null) curr.next = list2;

    return res.next; 
};