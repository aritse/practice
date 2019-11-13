/* DESCRIPTION
You have 2 numbers represented by a linked list where each node contains a single digit. The digits are stored in reverse order such that the 1s digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.
EXAMPLE
Input: (7->1->6) + (5->9->2). That is 617+295
Output: 2->1->9. That is 912.

FOLLOW UP
Suppose that the digits are stored in forward order and repeat the above problem
EXAMPLE
Input: (6->1->7) + (2->9->5). That is 617+295
Output: 9->1->2. That is 912.
*/

import { LinkedList } from "./Linked List"; // Run as: node -r esm "Sum Lists.js"

/**
 * 
 * @param {LinkedList} listA
 * @param {LinkedList} listB
 * @returns {LinkedList}
 */
var addNumbersInReverse = function (listA, listB) {
    let [nodeA, nodeB] = [listA.head, listB.head];
    const sum = new LinkedList();
    let a, b, carry = 0;
    while (nodeA || nodeB) {
        a = nodeA ? nodeA.data : 0;
        b = nodeB ? nodeB.data : 0;
        let s = a + b + carry;
        carry = s > 9 ? 1 : 0;
        s %= 10;
        sum.append(s);
        nodeA = nodeA ? nodeA.next : null;
        nodeB = nodeB ? nodeB.next : null;
    }
    return sum;
}

var addNumbersInForward = function (listA, listB) {
    var reverseBoth = function (nodeA, nodeB) {
        if (nodeA && nodeB) {
            reverseBoth(nodeA.next, nodeB.next);
            let s = nodeA.data + nodeB.data + carry;
            carry = s > 9 ? 1 : 0;
            s %= 10;
            sum.add(s);
        }
    }

    var reverseLonger = function (node, diff) {
        if (diff < 1) return;
        diff--;
        reverseLonger(node, diff);
        if (carry) {
            sum.add(node.data + carry);
            carry = 0;
        }
        sum.add(node.data);
    }

    // advance pointer of the longer list by diff amount
    let [runnerA, runnerB] = [listA.head, listB.head];
    let [lenA, lenB] = [listA.length(), listB.length()];
    let diff = Math.abs(lenA - lenB);
    while (lenA > lenB && diff--) runnerA = runnerA.next;
    while (lenA < lenB && diff--) runnerB = runnerB.next;

    // add digits as reversing
    const sum = new LinkedList();
    let carry = 0;
    reverseBoth(runnerA, runnerB);

    // concat the rest of the longer list to sum
    const longer = lenA < lenB ? listB : listA;
    reverseLonger(longer.head, Math.abs(lenA - lenB));

    return sum;
}

// Driver

// Build linked lists
const listA = new LinkedList();
listA.append(6);
listA.append(1);
listA.append(7);
listA.append(3);
const listB = new LinkedList();
listB.append(2);
listB.append(9);
listB.append(5);

// Print linked lists
console.log("list A: ", listA.toString());
console.log("list B: ", listB.toString());

// Add numbers in reverse
// Input: (6->1->7->3) + (2->9->5). That is, 3716 + 592.
// Output: 8->0->3->4. That is, 4308.
const sumInReverse = addNumbersInReverse(listA, listB);
console.log("Sum in Reverse: ", sumInReverse.toString());


// Add numbers in forward
// Input: (6->1->7->3) + (2->9->5). That is, 6173 + 295.
// Output: 6->4->6->8. That is, 6468.
const sumInForward = addNumbersInForward(listA, listB);
console.log("Sum in Forward: ", sumInForward.toString());
