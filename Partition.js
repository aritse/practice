import { LinkedList } from "./Linked List"
/* DESCRIPTION
Write code to partition a linked list around a value x such that all nodes less than x come before all noces greater than or eaual to x. If x is contained within the list, the values of x only need to be after the elements less than x.

Input: 3->5->8->5->10->2->1 (partition = 5)
Output: 3->1->2->10->5->5->8 */

var partition = function (linkedList, x) {
    let runner = linkedList.head;
    while (runner.next) {
        if (runner.next.data < x) {
            let temp = runner.next;
            runner.next = temp.next;
            temp.next = linkedList.head;
            linkedList.head = temp;
        } else {
            runner = runner.next;
        }
    }
};

// Driver
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.append(2);
linkedList.add(3);
linkedList.append(4);
linkedList.add(5);
let position = 3;
linkedList.insert(6, position);
position = 4;
linkedList.insert(3, position);
console.log(linkedList.toString());
let x = 3;
partition(linkedList, x)
console.log(linkedList.toString());