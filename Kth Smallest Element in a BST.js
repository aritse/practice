// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

// Note:
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

// Example 1:

// Input: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// Output: 1
// Example 2:

// Input: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// Output: 3
// Follow up:
// What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

// Recursive solution builds a complete inorder traversal of BST which results in a sorted array.
var kthSmallest = (root, k) => inOrderTraversal(root)[k - 1];
var inOrderTraversal = (root) => root ? [...inOrderTraversal(root.left), root.val, ...inOrderTraversal(root.right)] : [];

// Iterative solution builds an inorder traversal of BST of length k.
var kthSmallest = function (root, k) {
    const stack = [];
    const traversal = [];
    while (true) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            traversal.push(root.val);
            if (traversal.length === k)
                return traversal[k - 1];
            root = root.right;
        }
    }
};