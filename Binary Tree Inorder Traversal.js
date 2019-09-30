// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,3,2]
// Follow up: Recursive solution is trivial, could you do it iteratively?

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function (root) {
    const traversal = [];
    const stack = [];
    while (root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            traversal.push(root.val);
            root = root.right;
        }
    }
    return traversal;
};

var inorderTraversal = function (root) {
    const traversal = [];
    if (root) {
        traversal.push(...inorderTraversal(root.left));
        traversal.push(root.val);
        traversal.push(...inorderTraversal(root.right));
    }
    return traversal;
};

/**
 * Recursive one line found online
 */

var inorderTraversal = root => root ? [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)] : [];