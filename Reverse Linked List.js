// Reverse a singly linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/* My solution */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function(head) {
//   if (!head) {
//     return null;
//   }

//   // save address of each node
//   pointers = [];
//   while (head.next) {
//     pointers.push(head);
//     head = head.next;
//   }
//   pointers.push(head);

//   // redirect the next pointer
//   len = pointers.length;
//   for (i = len - 1; i > 0; i--) {
//     pointers[i].next = pointers[i - 1];
//   }
//   pointers[0].next = null;

//   return head;
// };

/* Solution that I found it cool */
function reverseList(head) {
    let [prev, next] = [null, null];
    while (head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
