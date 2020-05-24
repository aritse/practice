/** Given 2 singly linked lists, determine if the two intersect. Return the intersecting node.
 * Note that the intersection is defined based on reference, not value. */

function intersect(aLL, bLL) {
    const [aLen, bLen] = [length(aLL), length(bLL)];
    const diff = Math.abs(aLen, bLen);
    if (aLen > bLen) {
        aLL = advance(aLL, diff);
    } else {
        bLL = advance(bLL, diff);
    }
    while (aLL.next && bLL.next) {
        if (aLL.next === bLL.next) return aLL;
        aLL = aLL.next;
        bLL = bLL.next;
    }
    return null;
}
