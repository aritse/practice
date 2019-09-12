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

    deleteNode(data) {
        let n = this.head;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        while (n.next) {
            if (n.next.data === data) n.next = n.next.next;
            else n = n.next;
        }
    }

    toString() {
        let n = this.head;
        let str = "Linked list:     ";
        while (n) {
            str = str.concat(n.toString());
            n = n.next;
        }
        return str;
    }
}

const linkedList = new LinkedList();
for (let i = 0; i < 10; i++) { linkedList.appendToTail(i); }
console.log(linkedList.toString());
linkedList.deleteNode(5);
console.log(linkedList.toString());