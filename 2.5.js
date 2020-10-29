class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  toString = () => this.data.toString().concat(this.next ? " => " : "");
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const node = new Node(data);
    if (this.head) {
      let runner = this.head;
      while (runner.next) {
        runner = runner.next;
      }
      runner.next = node;
    } else {
      this.head = node;
    }
  }

  toString() {
    let h = this.head;
    let str = "";
    while (h !== null) {
      str += h.toString();
      h = h.next;
    }
    return str;
  }

  appendBulk(values) {
    values.forEach((value) => {
      this.append(value);
    });
  }

  removeDupes() {
    const set = new Set();
    let [prev, node] = [null, this.head];
    while (node) {
      if (set.has(node.data)) prev.next = node.next;
      else {
        set.add(node.data);
        prev = node;
      }
      node = node.next;
    }
  }

  removeDupes2() {
    let curr = this.head;
    while (curr) {
      let runner = curr;
      while (runner.next) {
        if (curr.data === runner.next.data) runner.next = runner.next.next;
        else runner = runner.next;
      }
      curr = curr.next;
    }
  }

  kthToLast(k) {
    let runner = this.head;
    while (k-- && runner) runner = runner.next;
    if (!runner) return null;

    let kth = this.head;
    while (runner) [runner, kth] = [runner.next, kth.next];

    return kth;
  }

  deleteMiddleNode(node) {
    if (node && node.next) {
      node.data = node.next.data;
      node.next = node.next.next;
    }
  }

  partition(x) {
    let last = this.head;
    while (last && last.next) last = last.next;

    let [prev, curr, tail] = [null, this.head, last];
    while (curr !== last) {
      if (curr.data < x) {
        prev = curr;
        curr = curr.next;
      } else {
        tail.next = curr;
        prev.next = curr.next;
        tail = tail.next;
        curr = prev.next;
        tail.next = null;
      }
    }
  }
}

function sumLists(first, second) {
  const sum = new LinkedList();
  let carry = 0;
  let s = 0;
  while (first && second) {
    s = first.data + second.data + carry;
    carry = (s / 10) | 0;
    sum.append(s % 10);
    first = first.next;
    second = second.next;
  }

  while (first) {
    s = first.data + carry;
    carry = (s / 10) | 0;
    sum.append(s % 10);
    first = first.next;
  }

  while (second) {
    s = second.data + carry;
    sum.append(second.data + carry);
    carry = (s / 10) | 0;
    second = second.next;
  }

  if (carry) {
    sum.append(1);
  }
  return sum;
}

const first = new LinkedList();
first.append(8);
first.append(1);
first.append(9);
first.append(9);
first.append(9);
const second = new LinkedList();
second.appendBulk([5, 9, 2]);
console.log(sumLists(first.head, second.head).toString());
