/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let tail = head;
  while (tail && tail.next) {
    let save = head;
    head = tail.next;
    tail.next = tail.next.next;
    head.next = save;
  }
  return head;
};
