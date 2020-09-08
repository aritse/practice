/* You should design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) adds word to the data structure, it can be matched later.
bool search(word) returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 

Example:

Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
 

Constraints:

1 <= word.length <= 500
word in addWord consists lower-case English letters.
word in search consist of  '.' or lower-case English letters.
At most 50000 calls will be made to addWord and search . */

function WordDictionary() {
  this.trie = {};
}

WordDictionary.prototype.addWord = function (word) {
  let node = this.trie;
  [...word].forEach((c) => {
    node[c] = node[c] || {};
    node = node[c];
  });
  node.isWord = true;
};

WordDictionary.prototype.search = function (word) {
  function dfs(i, node) {
    if (i === word.length) return !!node.isWord;

    const c = word[i];
    if (c === ".") {
      for (const key in node) {
        if (dfs(i + 1, node[key])) return true;
      }
    } else {
      if (node[c]) return dfs(i + 1, node[c]);
    }
    return false;
  }

  return dfs(0, this.trie);
};