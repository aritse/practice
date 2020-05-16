/** In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.

 

Example 1:


Input: root = [1,2,3,4], x = 4, y = 3
Output: false
Example 2:


Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
Example 3:



Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false
 

Constraints:

The number of nodes in the tree will be between 2 and 100.
Each node has a unique integer value from 1 to 100. */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = function (root, x, y) {
  const [parentX, depthX] = dfs(root, x, 0);
  const [parentY, depthY] = dfs(root, y, 0);
  return (
    parentX !== null &&
    parentY !== null &&
    parentX !== parentY &&
    depthX === depthY
  );
};

const dfs = function (root, val, d) {
  if (root.val === val) return [null, -1];
  let parent = null,
    depth = d;
  if (parent === null && root.left) {
    if (root.left.val === val) return [root, d + 1];
    [parent, depth] = dfs(root.left, val, d + 1);
  }
  if (parent === null && root.right) {
    if (root.right.val === val) return [root, d + 1];
    [parent, depth] = dfs(root.right, val, d + 1);
  }
  return [parent, depth];
};
