class Link {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    toString() {
        if (this.next) {
            return this.data.toString().concat(" => ");
        } else {
            return this.data.toString().concat(" => end ");
        }
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    appendToTail(data) {
        let n = this.head;
        let link = new Link(data);
        if (this.head === null) {
            this.head = link;
        } else {
            while (n.next !== null) {
                n = n.next;
            }
            n.next = link;
        }
    }

    deleteNodes(data) {
        while (this.head.data === data) {
            this.head = this.head.next;
        }
        let h = this.head;
        while (h.next !== null) {
            if (h.next.data === data) h.next = h.next.next;
            else h = h.next;
        }
    }

    /* We can use a hash table because a link pointer is unique
     * and therefore can serve as a key to the hash table. This approach
     * removes duplicates; however, modifies the order of linked list.
     * This is only to show that for some problems, we can use a hash table. */
    removeDups2() {
        let hash = {};
        let h = this.head;

        // Count (duplicate element count will be > 1)
        while (h !== null) {
            hash[h.data] = hash[h.data] + 1 || 1;
            h = h.next;
        }

        for (const [k, v] of Object.entries(hash)) {
            if (v > 1) {
                this.deleteNodes(Number(k));
                this.appendToTail(Number(k));
            }
        }
    }

    /* Using two pointers is the better approach to the problem
    because it leaves the original linked list in tact. */
    removeDups() {
        let current = this.head;
        while (current) {
            let runner = current;
            while (runner.next) {
                if (current.data === runner.next.data) {
                    runner.next = runner.next.next;
                } else {
                    runner = runner.next;
                }
            }
            current = current.next;
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
}

/** Driver program */
// Build a linked list
const linkedList = new LinkedList();
for (let i = 0; i < 4; i++) { linkedList.appendToTail(5); }
for (let i = 0; i < 10; i++) { linkedList.appendToTail(i); }
for (let i = 0; i < 10; i += 3) { linkedList.appendToTail(i); }

console.log("Original linked list:");
console.log(linkedList.toString());

console.log("\nDeleted all ", 5);
linkedList.deleteNodes(5);
console.log(linkedList.toString());

console.log("\nDuplicates removed:");
linkedList.removeDups();
console.log(linkedList.toString());
