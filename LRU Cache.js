/** Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity? */

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  head = null;
  tail = null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty = function () {
    return this.head === null && this.tail === null;
  };

  insertAtHead = function (node) {
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  };

  insertAtTail = function (node) {
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  };

  removeAtHead = function () {
    let node = null;
    if (!this.isEmpty()) {
      node = this.head;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      node.next = null;
    }
    return node;
  };

  removeAtTail = function () {
    let node = null;
    if (!this.isEmpty()) {
      node = this.tail;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      node.prev = null;
    }
    return node;
  };

  removeNode = function (node) {
    if (node === this.head) {
      this.removeAtHead();
    } else if (node === this.tail) {
      this.removeAtTail();
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.next = null;
      node.prev = null;
    }
  };

  promoteNode = function (node) {
    this.removeNode(node);
    this.insertAtHead(node);
  };
}

const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = {};
  this.list = new DoublyLinkedList();
  this.length = 0;
};

LRUCache.prototype.evict = function () {
  node = this.list.removeAtTail();
  this.length--;
  const evict = Object.keys(this.cache).find((k) => this.cache[k] === node);
  delete this.cache[evict];
};

LRUCache.prototype.put = function (key, value) {
  let node = this.cache[key];
  if (node) {
    node.value = value;
    this.list.promoteNode(node);
  } else {
    if (this.length >= this.capacity) this.evict();
    const node = new Node(value);
    this.list.insertAtHead(node);
    this.length++;
    this.cache[key] = node;
  }
};

LRUCache.prototype.get = function (key) {
  const node = this.cache[key];
  if (node) this.list.promoteNode(node);
  return node ? node.value : -1;
};

// Driver
const lruCache = new LRUCache(4);
lruCache.put("a", 1);
lruCache.put("b", 2);
lruCache.put("c", 3);
lruCache.put("d", 4);
lruCache.put("e", 5);
lruCache.put("f", 6);
lruCache.put("d", 44);
console.log("a = ", lruCache.get("a")); // -1
console.log("b = ", lruCache.get("b")); // -1
console.log("c = ", lruCache.get("c")); // 3
console.log(lruCache); // head: ("c", 3) tail: ("e", 5)
