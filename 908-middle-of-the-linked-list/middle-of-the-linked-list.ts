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

type TNode = ListNode | null;

function middleNode(head: ListNode | null): ListNode | null {
    let slo: TNode = head;
    let fst: TNode = head;

    while(fst && fst.next){
        fst = fst.next.next;
        slo = slo.next;
    }

    return slo;
};