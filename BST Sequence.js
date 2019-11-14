/* DESCRIPTION
BST was created by traversing through an array from left to right and inserting each element.
Given a BST with distinct elements, print all possible arrays that could have led to this tree. */

import { BST } from "./MyTree";

var findSequences = function (node) {
    if (!node) return [[]];
    const leftSequences = findSequences(node.left);
    const rightSequences = findSequences(node.right);

    const sequences = [];
    leftSequences.forEach(leftSeq => {
        rightSequences.forEach(rightSeq => {
            if (leftSeq.length === 0 && rightSeq.length === 0)
                sequences.push([node.value]);
            else if (leftSeq.length === 0)
                sequences.push([node.value, ...rightSeq]);
            else if (rightSeq.length === 0)
                sequences.push([node.value, ...leftSeq]);
            else sequences.push(
                [node.value, ...leftSeq, ...rightSeq],
                [node.value, ...rightSeq, ...leftSeq]
            );
        });
    });

    return sequences;
};

// Driver
const values = [1, 2, 3, 4, 5, 6, 7, 8];
const tree = new BST(values);
console.log(tree);
const seq = findSequences(tree.root);
console.log(seq);