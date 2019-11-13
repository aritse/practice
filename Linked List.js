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
    }

    isEmpty() {
        return this.head === null;
    }

    length() {
        let len = 0;
        let runner = this.head;
        while (runner) {
            len++;
            runner = runner.next;
        }
        return len;
    }

    add(data) {
        const link = new Link(data);
        link.next = this.head;
        this.head = link;
    }

    insert(data, position) {
        const link = new Link(data);
        let runner = this.head;
        while (position > 1) {
            runner = runner.next;
            position--;
        }
        link.next = runner.next;
        runner.next = link;
    }

    appendBulk(values) {
        values.forEach(value => {
            this.append(value);
        });
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
    }

    truncate() {
        if (this.head !== null) {
            if (this.head.next === null) {
                this.head = null;
            } else {
                let runner = this.head;
                while (runner.next.next !== null) {
                    runner = runner.next;
                }
                runner.next = null;
            }
        }
    }

    remove() {
        if (this.head != null) {
            this.head = this.head.next;
        }
    }

    delete(position) {
        if (this.head === null || position < 1) {
            return;
        }
        if (position === 1) {
            this.head = this.head.next;
        } else {
            let runner = this.head;
            for (let i = 1; i < position - 1 && runner.next.next !== null; i++) {
                runner = runner.next;
            }
            if (runner.next.next !== null) {
                runner.next = runner.next.next;
            }
        }
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
    // removeDups2() {
    //     let hash = {};
    //     let h = this.head;

    //     // Count (duplicate element count will be > 1)
    //     while (h !== null) {
    //         hash[h.data] = hash[h.data] + 1 || 1;
    //         h = h.next;
    //     }

    //     for (const [k, v] of Object.entries(hash)) {
    //         if (v > 1) {
    //             this.deleteNodes(Number(k));
    //             this.append(Number(k));
    //         }
    //     }
    // }

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
