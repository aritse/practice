import { LinkedList } from "./Linked List";

/* Driver */
const linkedList = new LinkedList();
for (let i = 0; i < 4; i++) { linkedList.append(5); }
for (let i = 0; i < 10; i++) { linkedList.append(i); }
for (let i = 0; i < 10; i += 3) { linkedList.append(i); }

console.log("Original linked list:");
console.log(linkedList.toString());
console.log("Length: ", linkedList.length);

console.log("\nDeleted all ", 5);
linkedList.deleteNodes(5);
console.log(linkedList.toString());
console.log("Length: ", linkedList.length);

console.log("\nDuplicates removed:");
linkedList.removeDups();
console.log(linkedList.toString());
console.log("Length: ", linkedList.length);
