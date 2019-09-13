class Link {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    toString() {
        if (this.next) return this.data.toString().concat(" => ");
        else return this.data.toString().concat(" : ");
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    appendToTail(data) {
        let n = this.head;
        let link = new Link(data);
        if (this.head) {
            while (n.next) n = n.next;
            n.next = link;
        } else this.head = link;
    }

    removeDups() {
        let hash = {};
        let n = this.head;
        while (n) {
            hash[n.data] = hash[n.data] + 1 || 1;
            n = n.next;
        }
        for (const [k, v] of Object.entries(hash)) {
            if (v > 1) {
                this.deleteNode(Number(k));
                this.appendToTail(Number(k));
            }
        }
    }

    deleteNode(data) {
        while (this.head.data === data) {
            this.head = this.head.next;
        }
        let n = this.head;
        while (n.next) {
            if (n.next.data === data) n.next = n.next.next;
            else n = n.next;
        }
    }

    toString() {
        let n = this.head;
        let str = "";
        while (n) {
            str = str.concat(n.toString());
            n = n.next;
        }
        return str;
    }
}


const linkedList = new LinkedList();
for (let i = 0; i < 4; i++) { linkedList.appendToTail(5); }
for (let i = 0; i < 10; i++) { linkedList.appendToTail(i); }
for (let i = 0; i < 10; i += 3) { linkedList.appendToTail(i); }
console.log(linkedList.toString());
console.log("Deleting ", 3);
linkedList.deleteNode(3);
console.log(linkedList.toString());
console.log("Deleted ", 3);
console.log("Removing duplicates");
linkedList.removeDups();
console.log(linkedList.toString());
console.log("Removed duplicates");
