/**Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them. */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// function diameterOfBinaryTree(root) {
//   if (root === null) return 0;

//   const leftHeight = height(root.left);
//   const rightHeight = height(root.right);

//   const leftDiameter = diameterOfBinaryTree(root.left);
//   const rightDiameter = diameterOfBinaryTree(root.right);

//   return Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));
// }

// const height = (root) => (root ? Math.max(height(root.left), height(root.right)) + 1 : 0);

// Eric's solution online
function dfs(root) {
  if (!root) return [0, 0];
  let [left, right] = [dfs(root.left), dfs(root.right)];
  // [diameter, depth]
  let diameter = Math.max(left[0], right[0], left[1] + right[1]);
  return [diameter, Math.max(left[1], right[1]) + 1];
}

function diameterOfBinaryTree(root) {
  return dfs(root)[0];
}
