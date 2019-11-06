import { LinkedList } from "./Linked List"
/* DESCRIPTION
Implememnt an algorith to delete a node in the middle of a singly linked list
given only access to that node */

var deleteMiddleNode = function (node) {
    let temp = node.next;
    while (temp.next !== null) {
        node.data = temp.data;
        node = temp;
        temp = temp.next;
    }
    node.data = temp.data;
    node.next = null;
};

const linkedList = new LinkedList();
for (let i = 0; i < 4; i++) { linkedList.append(5); }
for (let i = 0; i < 10; i++) { linkedList.add(i); }
for (let i = 0; i < 10; i += 3) { linkedList.append(i); }
console.log("Original linked list:");
console.log(linkedList.toString());
console.log("Length: ", linkedList.length);

const k = 17;
const kth = linkedList.findKthFromLast(k);
if (kth !== null) {
    console.log("\nRemoving k = ", k, " from last: ", kth.data);
    deleteMiddleNode(kth);
    linkedList.length--;
    console.log(linkedList.toString());
    console.log("Length: ", linkedList.length);
} else {
    console.log("element from last k = ", k, ": Out of bound");
}
