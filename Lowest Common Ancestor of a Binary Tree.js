/* DESCRIPTION
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3

Example 2:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5

QUESTIONS & ASSUMPTIONS
Will all of the nodes' values be unique? Yes
Can I assume that p and q are different and both values will exist in the binary tree? Yes */

/**
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
* @param {TreeNode} root
* @param {TreeNode} p
* @param {TreeNode} q
* @return {TreeNode}
*/
var lowestCommonAncestor = function (root, p, q) {
    if (root) {
        if (root.left && treeHas(root.left, p) && treeHas(root.left, q)) return lowestCommonAncestor(root.left, p, q);
        if (root.right && treeHas(root.right, p) && treeHas(root.right, q)) return lowestCommonAncestor(root.right, p, q);
    }
    return root;
};

/**
* @param {TreeNode} root
* @param {TreeNode} node
* @return {boolean}
*/
var treeHas = function (root, node) {
    if (!root) return false;
    if (root === node) return true;
    return treeHas(root.left, node) || treeHas(root.right, node);
};