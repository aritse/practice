/* DESCRIPTION
BST was created by traversing through an array from left to right and inserting each element.
Given a BST with distinct elements, print all possible arrays that could have led to this tree. */

import { BST } from "./MyTree";

var findSequences = function (root) {
    // Bases cases
    if (!root) return [];
    if (!root.left && !root.right) return [[root.value]];

    let leftSeq = root.left ? findSequences(root.left) : [];
    let rightSeq = root.right ? findSequences(root.right) : [];

    const result = [];
    if (leftSeq.length < 1) rightSeq.forEach(r => result.push([root.value, ...r]));
    else if (rightSeq.length < 1) leftSeq.forEach(l => result.push([root.value, ...l]));
    else {
        leftSeq.forEach(l =>
            rightSeq.forEach(r =>
                result.push([root.value, ...l, ...r], [root.value, ...r, ...l])
            )
        )
    }
    return result;
};

// Driver

// const values = [1, 2, 3, 4, 5, 6, 7];
const values = [1, 2, 3, 4, 5, 6, 7, 8];
const tree = new BST(values);
const seq = findSequences(tree.root);
console.log(seq);