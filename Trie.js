/* DESCRIPTION
Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.*/

const CHILDREN = 26 + 1; // 26 letters + '*' (word flag)
const BASE = 97;         // ASCII for 'a'

class TrieNode {
    constructor(value = '') {
        this.value = value;
        this.children = Array(CHILDREN).fill(null);
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insertHelper(node, word) {
        if (word.length > 0) {
            const i = word.charCodeAt(0) - BASE;
            if (node.children[i] === null) {
                node.children[i] = new TrieNode(word.charAt(0));
            }
            this.insertHelper(node.children[i], word.slice(1));
        } else {
            node.children[CHILDREN - 1] = new TrieNode('*');
        }
    }

    searchHelper(node, word) {
        if (word.length > 0) {
            const i = word.charCodeAt(0) - BASE;
            if (node.children[i] === null) {
                return false;
            }
            return !!this.searchHelper(node.children[i], word.slice(1));
        } else {
            return node.children[CHILDREN - 1] !== null;
        }
    }

    startsWithHelper(node, prefix) {
        if (prefix.length > 0) {
            const i = prefix.charCodeAt(0) - BASE;
            if (node.children[i] === null) {
                return false;
            }
            return !!this.startsWithHelper(node.children[i], prefix.slice(1));
        } else {
            return true;
        }
    }

    /**
     * Inserts a word into the trie
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        this.insertHelper(this.root, word);
    }

    /**
     * Returns if the word is in the trie 
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return !!this.searchHelper(this.root, word);
    }

    /**
     * Returns if there is any word in the trie that starts with the given prefix
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        return !!this.startsWithHelper(this.root, prefix);
    }
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
console.log("Found app: ", trie.search("app")); // returns true
console.log("Found apples: ", trie.search("apples")); // returns false

// Another solution found online that uses a dictionary

/*
function Trie() {
    const root = {};
    return { insert, search, startsWith };

    function insert(word) {
        let node = root;
        word.split('').forEach(char => node = node[char] = node[char] || {});
        node.isWord = true;
    }

    function traverse(word) {
        let node = root;
        word.split('').forEach(char => {
            if (!node) return null;
            node = node[char];
        });
        return node;
    }

    function search(word) {
        let node = traverse(word);
        return !!node && !!node.isWord;
    }

    function startsWith(word) {
        return !!traverse(word);
    }
}
*/