import { BST } from "./MyTree";

/* DESCRIPTION
Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree.
Avoid storing additional nodes in a data structure. Note: This is not necessarily BST. */

/**
 * @param {BST} tree
 * @param {number} a 
 * @param {number} b 
 * @returns {TreeNode}
 */
var commonAncestor = function (tree, a, b) {
    const node = tree.root;
    if (node === null) return null;
    const [leftTree, rightTree] = [new BST(), new BST()];
    [leftTree.root, rightTree.root] = [node.left, node.right];

    if (leftTree.root && leftTree.getNodeByValue(a) && leftTree.getNodeByValue(b)) return commonAncestor(leftTree, a, b);
    if (rightTree.root && rightTree.getNodeByValue(a) && rightTree.getNodeByValue(b)) return commonAncestor(rightTree, a, b);
    return node;
}

// Driver
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tree = new BST(values);
let i, j;

// TEST CASES
[i, j] = [2, 4]; // expect 3 PASS
// [i, j] = [1, 6]; // expect 5 PASS
// [i, j] = [7, 8]; // expect 8 PASS
// [i, j] = [9, 5]; // expect 5 PASS
// [i, j] = [4, 1]; // expect 3 PASS
// [i, j] = [1, 1]; // expect 1 PASS
// [i, j] = [8, 8]; // expect 8 PASS
// [i, j] = [5, 5]; // expect 5 PASS
// [i, j] = [1, 9]; // expect 5 PASS
// [i, j] = [1, 3]; // expect 3 PASS

console.log("Common ancestor at node: ", commonAncestor(tree, i, j).value);
