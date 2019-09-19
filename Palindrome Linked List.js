// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    const vals = [];
    while (head) {
        vals.push(head.val);
        head = head.next;
    }

    const len = vals.length;
    const mid = Math.floor(len / 2);

    if (len % 2) {
        vals.splice(mid, 1);
    }

    for (let i = 0; i < mid; i++) {
        if (vals[mid - 1 - i] !== vals[mid + i]) {
            return false;
        }
    }

    return true;
};