/* Implement a function to check if a linked list is a palindrome */
import LinkedList from "./Linked List.js";

function isPalindrome(head) {
    const LL = [];
    while (head) {
        LL.push(head.data);
        head = head.next;
    }
    for (let i = 0; i < LL.length / 2; i++) {
        if (LL[i] !== LL[LL.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

const list = new LinkedList();
list.append(0);
list.append(1);
list.append(2);
list.append(1);
list.append(0);
console.log(list.toString(), ": ", isPalindrome(list.head));
