/* DESCRIPTION
BST was created by traversing through an array from left to right and inserting each element.
Given a BST with distinct elements, print all possible arrays that could have led to this tree. */

import { Tree as BST } from "./MyTree";

var findSequences = function (root) {
    const result = [];
    if (root) {
        if (root.left === null && root.right === null) return [[root.value]];
        if (root.left === null || root.right === null) {
            const arrays = (root.left === null) ? findSequences(root.right) : findSequences(root.left);
            arrays.forEach(t => t.splice(0, 0, root.value));
            return arrays;
        }
        let seq;
        const leftSeq = findSequences(root.left); // [[2, 1, 3], [2, 3, 1]]
        const rightSeq = findSequences(root.right); // [[8, 7, 9], [8, 9, 7]]
        leftSeq.forEach(l => {
            rightSeq.forEach(r => {
                seq = [];
                seq.push(root.value, ...l, ...r);
                result.push(seq);
            });
        });
        rightSeq.forEach(r => {
            leftSeq.forEach(l => {
                seq = [];
                seq.push(root.value, ...r, ...l);
                result.push(seq);
            });
        });

    }
    return result;
};

const values = [1, 2, 3, 4, 5, 6, 7];
const tree = new BST(values);
const seq = findSequences(tree.root);
console.log(seq);