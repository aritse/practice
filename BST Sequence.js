/* DESCRIPTION
BST was created by traversing through an array from left to right and inserting each element.
Given a BST with distinct elements, print all possible arrays that could have led to this tree. */

import { BST } from "./MyTree";

var weave = function (listA, listB) {
    if (listA.length === 0) return [listB];
    if (listB.length === 0) return [listA];

    const result = [];
    let weaved, temp;

    // Start weaving with A
    const [a, restA] = [listA[0], listA.slice(1)];
    weaved = weave(restA, listB);
    weaved.forEach(w => {
        temp = w.slice();
        temp.splice(0, 0, a);
        result.push(temp);
    });

    // Start weaving with B
    const [b, restB] = [listB[0], listB.slice(1)];
    weaved = weave(listA, restB);
    weaved.forEach(w => {
        temp = w.slice();
        temp.splice(0, 0, b);
        result.push(temp);
    });

    return result;
};

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
            else {
                const weaved = weave(leftSeq, rightSeq);
                weaved.forEach(w => w.splice(0, 0, node.value));
                sequences.push(...weaved);
            }
        });
    });

    return sequences;
};

// Driver
const values = [1, 2, 3, 4, 5];
const tree = new BST(values);
console.log(tree);
const seq = findSequences(tree.root);
console.log(seq);
/*
EXPECTED
    [
        [3,2,5,1,4],
        [3,2,5,4,1],
        [3,2,1,5,4],
        [3,5,2,4,1],
        [3,5,2,1,4],
        [3,5,4,2,1]
    ]
*/
