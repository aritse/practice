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

export class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(data) {
        const link = new Link(data);

        if (this.head === null) {
            this.head = link;
        } else {
            let runner = this.head;
            while (runner.next !== null) {
                runner = runner.next;
            }
            runner.next = link;
        }

        this.length++;
    }

    add(data) {
        const link = new Link(data);

        link.next = this.head;
        this.head = link;
        this.length++;
    }

    deleteNodes(data) {
        while (this.head.data === data) {
            this.head = this.head.next;
            this.length--;
        }
        let h = this.head;
        while (h.next !== null) {
            if (h.next.data === data) {
                h.next = h.next.next;
                this.length--;
            }
            else {
                h = h.next;
            }
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
                this.append(Number(k));
            }
        }
    }

    /* Using two pointers is the better approach to the problem
    because it leaves the original linked list in tact. */
    removeDups() {
        let current = this.head;
        while (current !== null) {
            let runner = current;
            while (runner.next !== null) {
                if (current.data === runner.next.data) {
                    runner.next = runner.next.next;
                    this.length--;
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

    findKthFromLast(k) {
        let kth = this.head;
        let runner = this.head;
        while (k--) {
            if (runner === null) {
                return null;
            }
            runner = runner.next;
        }
        while (runner !== null) {
            kth = kth.next;
            runner = runner.next;
        }
        return kth;
    };
}
