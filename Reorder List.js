/** Given a singly linked list

    L: L0 → L1 → … → Ln-1 → Ln,
reorder it to:

    L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …
You must do this in-place without altering the nodes’ values.

For example,
Given {1,2,3,4}, reorder it to {1,4,2,3}. */

module.exports = {
  reverseList: function (A) {
    if (!A) return A;
    let [prev, curr, next] = [null, A, A.next];
    while (next) {
      curr.next = prev;
      prev = curr;
      curr = next;
      next = next.next;
      curr.next = prev;
    }
    return curr;
  },

  weaveLists: function (A, B) {
    if (!A) return B;
    if (!B) return A;
    const tmp = A.next;
    A.next = B;
    B.next = this.weaveLists(tmp, B.next);
    return A;
  },

  reorderList: function (A) {
    if (!A || !A.next) return A;
    let [mid, end] = [A, A];
    while (end && end.next) {
      mid = mid.next;
      end = end.next.next;
    }
    let tmp = A;
    while (tmp.next !== mid) tmp = tmp.next;
    tmp.next = null;
    return this.weaveLists(A, this.reverseList(mid));
  },
};
