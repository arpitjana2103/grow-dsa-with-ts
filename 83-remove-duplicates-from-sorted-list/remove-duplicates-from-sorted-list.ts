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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(head === null) return head;

    let slo: Node = head;
    let fst: Node = head.next;

    while(fst !== null){
        if(slo.val === fst.val) fst = fst.next;
        else {
            slo.next = fst;
            slo = slo.next;
            fst = fst.next;
        }
    }

    slo.next = fst;

    return head;
};