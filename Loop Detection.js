/** Given a circular linked list, return the node at the beginning of the loop. */

function loopDetection(head) {
    let fast = findLoop(head);
    if (fast === null) return null; // no loop
    let slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return fast;
}

function findLoop(head) {
    let [slow, fast] = [head, head];
    while (fast && fast.next) {
        if (slow === fast) {
            return slow;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return null;
}
