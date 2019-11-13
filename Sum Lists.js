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

import { LinkedList } from "./Linked List"

/**
 * 
 * @param {LinkedList} a 
 * @param {LinkedList} b 
 * @returns {LinkedList}
 */
var addNumbers = function (listA, listB) {
    const sum = new LinkedList();
    let a, b, carry = 0;
    while (listA || listB) {
        a = listA ? listA.data : 0;
        b = listB ? listB.data : 0;
        let s = a + b + carry;
        carry = s > 9 ? 1 : 0;
        s %= 10;
        sum.append(s);
        listA = listA ? listA.next : null;
        listB = listB ? listB.next : null;
    }
    return sum;
}

// Driver
const listA = new LinkedList();
listA.add(6);
listA.add(1);
listA.add(7);
console.log(listA.toString());
const listB = new LinkedList();
listB.add(2);
listB.add(9);
listB.add(5);
console.log(listB.toString());
let sum = addNumbers(listA.head, listB.head);
console.log(sum.toString());