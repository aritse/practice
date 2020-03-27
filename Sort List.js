/* Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const findSecondHalfHead = head => {
  let [slow, fast] = [head, head];
  while (fast.next) {
    slow = slow.next;
    fast = fast.next.next || fast.next;
  }
  return slow;
};

const findFirstHalfTail = (walk, secondHalf) => {
  while (walk && walk.next !== secondHalf) walk = walk.next;
  return walk;
};

const printList = head => {
  while (head) {
    process.stdout.write(`${head.val}${head.next ? "=>" : "\n"}`);
    head = head.next;
  }
};

const merge = (first, second) => {
  if (first === null) return second;
  if (second === null) return first;

  if (first.val > second.val) {
    const temp = second.next;
    second.next = first;
    first = temp;
    second.next = merge(first, second.next);
    return second;
  } else {
    const temp = first.next;
    first.next = second;
    second = temp;
    first.next = merge(first.next, second);
    return first;
  }
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = head => {
  if (head === null || head.next === null) return head;
  const first = head;
  const second = findSecondHalfHead(head);
  const tail = findFirstHalfTail(head, second);
  tail.next = null;
  // printList(first);
  // printList(second);
  return merge(sortList(first), sortList(second));
};
