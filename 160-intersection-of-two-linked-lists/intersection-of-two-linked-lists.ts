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

type Node = ListNode | null;

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let l1: Node = headA;
    let l2: Node = headB;

    while(l1 !== l2){
        if(l1 === null) l1  = headB;
        else l1 = l1.next;

        if(l2 === null) l2 = headA;
        else l2 = l2.next;
    }

    return l1;
};