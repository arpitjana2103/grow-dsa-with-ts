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

function hasCycle(head: ListNode | null): boolean {
    
    let slo : ListNode | null = head;
    let fst : ListNode | null = head;

    while(fst !== null && fst.next !== null){
        slo = slo.next;
        fst = fst.next.next;
        if(slo === fst) return true;
    }

    return false;

};