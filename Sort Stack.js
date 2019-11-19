import { Stack } from "./Stack";

/* DESCRIPTION
Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structures such as an array. The stack supports the following operations: push, pop, peek, an isEmpty. */

const N = 20;

var merge = function (a, b, c) {
    while (b.isEmpty() === false && c.isEmpty() === false)
        if (b.peek() < c.peek())
            a.push(b.pop());
    while (a.isEmpty() === false || c.isEmpty() === false) {
        if (a.isEmpty())
            b.push(c.pop());
        else if (c.isEmpty())
            b.push(a.pop());
        else if (c.peek() >= a.peek())
            b.push(c.pop());
        else
            b.push(a.pop());
    }
    return b;
};

var helper = function (a, b, c) {
    while (a.isEmpty() === false) {
        if (a.peek() >= c.peek())
            c.push(a.pop());
        else
            b.push(a.pop());
    }
    b = sort(b);
    return merge(a, b, c);
};

var sort = function (a) {
    if (a.isEmpty() === false) {
        const [b, c] = [new Stack(), new Stack()];
        c.push(a.pop());
        a = helper(a, b, c);
    }
    return a;
};

// Driver
const unsorted = new Stack();
for (let i = 0; i < N; i++)
    unsorted.push(Math.random() * 100 | 0);
console.log("Unsorted: ", unsorted.list());
const sorted = sort(unsorted);
console.log("Sorted: ", sorted.list());

/* EXPLANATION
Setting: Think of 3 poles (A, B, C) with 10 unsorted rings stacked on A. B and C are empty.
Step 1: Keep popping A onto B and C such that C is reverse sorted and B is unsorted.
Step 2: Sort B recursively. When it returns, B is sorted.
Step 3: Keep popping B onto A until the top of B is greater than the top of C.
Step 4: Keep popping the larger of A and C onto B. */
