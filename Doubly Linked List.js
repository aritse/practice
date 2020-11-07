class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const node = this.tail;
    if (!this.tail.prev) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return node;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    const node = this.head;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return node;
  }

  get(index) {
    if (index >= this.length) return null;
    let node = this.head;
    while (index--) node = node.next;
    return node;
  }

  set(index, val) {
    const node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const node = this.get(index);
    if (!node) return undefined;
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.length--;
    return node;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    const previous = this.get(index - 1);
    const node = new Node(val);
    node.prev = previous;
    node.next = previous.next;
    prev.next = node;
    node.next.prev = node;
    this.length++;
    return true;
  }

  reverse() {
    [this.head, this.tail] = [this.tail, this.head];
    let node = this.head;
    while (node) {
      [node.next, node.prev] = [node.prev, node.next];
      node = node.next;
    }
    return this;
  }
}
