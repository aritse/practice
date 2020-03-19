/*
Given a binary search tree, return a balanced binary search tree with the same node values.

A binary search tree is balanced if and only if the depth of the two subtrees of every node never differ by more than 1.

If there is more than one answer, return any of them.

 

Example 1:



Input: root = [1,null,2,null,3,null,4,null,null]
Output: [2,1,3,null,null,null,4]
Explanation: This is not the only correct answer, [3,1,4,null,2,null,null] is also correct.
 

Constraints:

The number of nodes in the tree is between 1 and 10^4.
The tree nodes will have distinct values between 1 and 10^5. */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const balanceBST = root => {
  const createTree = (start, end) => {
    if (start > end) return null;
    const mid = ((start + end) / 2) | 0;
    const node = new TreeNode(traversal[mid]);
    node.left = createTree(start, mid - 1);
    node.right = createTree(mid + 1, end);
    return node;
  };

  const traversal = inorder(root);
  return createTree(0, traversal.length - 1);
};

const inorder = root => (root ? [...inorder(root.left), root.val, ...inorder(root.right)] : []);
