/**Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.) */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const bst = (root, val) => {
  if (root) {
    if (root.val > val) root.left = bst(root.left, val);
    else root.right = bst(root.right, val);
    return root;
  }
  return new TreeNode(val);
};

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = (preorder) => {
  const root = new TreeNode(preorder[0]);
  for (let i = 1; i < preorder.length; i++) bst(root, preorder[i]);
  return root;
};
