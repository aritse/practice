/*
PROBLEM DESCRIPTION
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) return null;

    const root = new TreeNode(preorder.shift());

    let i = 0;
    while (inorder[i] != root.val) i++;

    const left_preorder = preorder.splice(0, i);
    const right_preorder = preorder.splice(0);
    const left_inorder = inorder.splice(0, i);
    const right_inorder = inorder.splice(1);

    root.left = buildTree(left_preorder, left_inorder);
    root.right = buildTree(right_preorder, right_inorder);
    return root;
};