import { Stack } from "./Stack";

/* DESCRIPTION
Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structures such as an array. The stack supports the following operations: push, pop, peek, an isEmpty. */

const N = 20;

var merge = function (a, b, c) {
    while (!b.isEmpty() && !c.isEmpty())
        if (b.peek() < c.peek())
            a.push(b.pop());
    while (!a.isEmpty() || !c.isEmpty()) {
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
    while (!a.isEmpty()) {
        if (a.peek() >= c.peek())
            c.push(a.pop());
        else
            b.push(a.pop());
    }
    const t = sort(b);
    return merge(a, t, c);
};

var sort = function (stack) {
    if (!stack.isEmpty()) {
        const [b, c] = [new Stack(), new Stack()];
        c.push(stack.pop());
        stack = helper(stack, b, c);
    }
    return stack;
};

// Driver
let stack = new Stack();
for (let i = 0; i < N; i++)
    stack.push(Math.random() * 10 | 0);
console.log("Unsorted: ", stack.list());
stack = sort(stack);
console.log("Sorted: ", stack.list());
