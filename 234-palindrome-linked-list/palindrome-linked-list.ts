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

function print(head: Node):void {
    let curr : Node = head;
    const res : number[] = [];

    while(curr){
        res.push(curr.val);
        curr = curr.next;
    }

    console.log(res.join(" => "));
}

function isPalindrome(head: Node): boolean {
    if(!head) return true;
    
    // Find Midnode
    let slo : Node = head;
    let fst : Node = head;

    while(fst && fst.next && fst.next.next){
        fst = fst.next.next;
        slo = slo.next;
    }

    const midNode = slo;

    // Reverse Last Half
    midNode.next = reverseList(midNode.next);
    
    let pt1 = head;
    let pt2 = midNode.next;

    while(pt2){
        if(pt1.val !== pt2.val) return false;
        pt1 = pt1.next;
        pt2 = pt2.next;
    }

    return true;
};
