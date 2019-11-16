
class TrieNode {
    constructor(value = "") {
        this.value = value;
        this.children = [];
        for (let i = 0; i < 27; i++) {
            this.children.push(null);
        }
    }
}

export class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insertHelper(node, word) {
        if (word.length) {
            const index = word.charCodeAt(0) - 97;
            if (!node.children[index]) {
                node.children[index] = new TrieNode(word.charAt(0));
            }
            this.insertHelper(node.children[index], word.slice(1));
        } else {
            node.children[26] = new TrieNode('*');
        }
    }

    searchHelper(node, word) {
        if (word.length) {
            const index = word.charCodeAt(0) - 97;
            if (!node.children[index]) {
                return false;
            }
            return this.searchHelper(node.children[index], word.slice(1));
        } else {
            return node.children[26] !== null;
        }
    }

    startsWithHelper(node, word) {
        if (word.length) {
            const index = word.charCodeAt(0) - 97;
            if (!node.children[index]) {
                return false;
            }
            return this.startsWithHelper(node.children[index], word.slice(1));
        } else {
            return true;
        }
    }

    /**
     * Inserts a word into the trie. 
     * @param {string} word
     * @return {void}
     */
    insert(word) { this.insertHelper(this.root, word); }

    /**
     * Returns if the word is in the trie. 
     * @param {string} word
     * @return {boolean}
     */
    search(word) { return this.searchHelper(this.root, word); }

    /**
     * Returns if there is any word in the trie that starts with the given prefix. 
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(word) { return this.startsWithHelper(this.root, word); }
}

// Driver
const trie = new Trie();
trie.insert("apple");
console.log("Inserted apple");
console.log("Found apple: ", trie.search("apple")); // returns true
console.log("Found app: ", trie.search("app")); // returns false
console.log("Starts with app: ", trie.startsWith("app")); // returns true
trie.insert("app");
console.log("Inserted app");
console.log("Found app: ", trie.search("app")); // returns false
console.log("Found apples: ", trie.search("apples")); // returns false
