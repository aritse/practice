class TrieNode {
  constructor(value) {
    this.value = value;
    this.children = Array(27).fill(null);
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insertHelper(node, word) {
    if (word.length > 0) {
      const i = word.charCodeAt(0) - 97;
      if (!node.children[i]) node.children[i] = new TrieNode(word.charAt(0));
      this.insertHelper(node.children[i], word.slice(1));
    } else node.children[26] = new TrieNode("*");
  }

  searchHelper(node, word) {
    if (word.length > 0) {
      const i = word.charCodeAt(0) - 97;
      if (!node.children[i]) return false;
      return !!this.searchHelper(node.children[i], word.slice(1));
    } else return node.children[26] !== null;
  }

  startsWithHelper(node, prefix) {
    if (prefix.length > 0) {
      const i = prefix.charCodeAt(0) - 97;
      if (!node.children[i]) return false;
      return !!this.startsWithHelper(node.children[i], prefix.slice(1));
    } else return true;
  }

  insert(word) {
    this.insertHelper(this.root, word);
  }
  search(word) {
    return !!this.searchHelper(this.root, word);
  }
  startsWith(prefix) {
    return !!this.startsWithHelper(this.root, prefix);
  }
}
