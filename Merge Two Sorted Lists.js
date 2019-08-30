// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/* My solution */

var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  var node;
  if (l1.val > l2.val) {
    node = new ListNode(l2.val);
    node.next = mergeTwoLists(l1, l2.next);
  } else {
    node = new ListNode(l1.val);
    node.next = mergeTwoLists(l1.next, l2);
  }
  return node;
};

/* Solution that I found it cool */

// var mergeTwoLists = function(l1, l2) {
//   // return the non-empty one
//   if (!l1 || !l2) return l1 || l2;

//   // swap to make sure l1 is always smaller than l2
//   if (l1.val > l2.val) [l1, l2] = [l2, l1];

//   l1.next = mergeTwoLists(l1.next, l2);
//   return l1;
// };
