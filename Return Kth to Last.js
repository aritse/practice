import { LinkedList } from "./Linked List";

/* DESCRIPTION
Implement an algorithm to find the kth to last element of a singly linked list. */

/* Driver */
const linkedList = new LinkedList();
for (let i = 0; i < 4; i++) { linkedList.append(5); }
for (let i = 0; i < 10; i++) { linkedList.add(i); }
for (let i = 0; i < 10; i += 3) { linkedList.append(i); }
console.log("Original linked list:");
console.log(linkedList.toString());
console.log("Length: ", linkedList.length);

const k = 2;
const kth = linkedList.findKthFromLast(k);
if (kth !== null) {
    console.log("element from last k = ", k, ": ", kth.data);
} else {
    console.log("element from last k = ", k, ": Out of bound");
}
