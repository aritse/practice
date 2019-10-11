/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];

    const levels = [[root]];
    for (let i = 0; i < levels.length; i++) {
        const niblings = [];
        for (let j = 0; j < levels[i].length; j++) {
            const parent = levels[i][j];
            if (parent.left) niblings.push(parent.left);
            if (parent.right) niblings.push(parent.right);
        }
        if (niblings.length) levels.push(niblings);
    }

    // replace references with their values
    return levels.map(level => level.map(node => node.val));
};

/*
Questions and assumptions
This is also called breadth first traversal versus the depth first traversal. It's called depth first traversal because
the traversal seeks to hit the leaf. There are 3 different kinds of depth first traversal pre-, post- and in-order.
*/