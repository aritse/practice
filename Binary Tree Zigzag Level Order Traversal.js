/*
PROBLEM DESCRIPTION
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
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
var zigzagLevelOrder = function (root) {
    if (!root) return [];

    let zigzag = [[root]];
    for (let i = 0; i < zigzag.length; i++) {
        const niblings = [];
        for (let j = 0; j < zigzag[i].length; j++) {
            const parent = zigzag[i][j];
            if (parent.left) niblings.push(parent.left);
            if (parent.right) niblings.push(parent.right);
        }
        if (niblings.length) zigzag.push(niblings);
    }

    // replace references with their values
    zigzag = zigzag.map(level => level.map(node => node.val));

    // reverse even levels
    for (let i = 0; i < zigzag.length; i++)
        if (i % 2)
            zigzag[i] = zigzag[i].reverse();

    return zigzag;
};