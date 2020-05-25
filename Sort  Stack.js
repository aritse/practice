/** Sort a stack such that the smallest items are on the top. Can use an additional temp stack, but must not copy the elements into any
 * other data structure such as an array */

function sort(A) {
    const B = new Stack();
    while (!A.isEmpty()) {
        const t = A.pop();
        while (!B.isEmpty() && t < B.peek()) A.push(B.pop());
        B.push(t);
    }
    return B;
}
