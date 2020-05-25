/** Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

It's guaranteed that for the given test cases there is always possible to find a binary search tree with the given requirements. */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
function bstFromPreorder(preorder) {
    if (!preorder.length) return null;
    const root = new TreeNode(preorder[0], null, null);
    for (let i = 1; i < preorder.length; i++) helper(root, preorder[i]);
    return root;
}

function helper(root, val) {
    if (!root) return new TreeNode(val, null, null);
    if (val < root.val) root.left = helper(root.left, val);
    else root.right = helper(root.right, val);
    return root;
}
