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

function reverseList(head: Node): Node {
    let prevNode : Node = null;
    let currNode : Node = head;

    while(currNode !== null){
        const nextNode : Node = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }

    return prevNode;
};