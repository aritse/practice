/* Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  const helper = (s, words) => {
    if (s === "") return true;
    if (words.length < 1) return false;

    for (let i = 0; i < words.length; i++) {
      const substrings = s.split(words[i]);

      const copy = [...words];
      copy.splice(i, 1);

      let solved = true;
      for (let j = 0; j < substrings.length; j++) {
        if (solutions[substrings[j]] === undefined) {
          solutions[substrings[j]] = helper(substrings[j], copy);
        }
        solved &= solutions[substrings[j]];
      }
      if (solved) return true;
    }
    return false;
  };

  const solutions = {};
  return helper(s, wordDict);
};

console.log(wordBreak("leetcode", ["leet", "code"])); // true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false
console.log(wordBreak("cbca", ["bc", "ca"])); // false
console.log(wordBreak("cars", ["car", "ca", "rs"])); // true
console.log(wordBreak("a", ["b"])); // false
console.log(
  wordBreak("bccdbacdbdacddabbaaaadababadad", [
    "cbc",
    "bcda",
    "adb",
    "ddca",
    "bad",
    "bbb",
    "dad",
    "dac",
    "ba",
    "aa",
    "bd",
    "abab",
    "bb",
    "dbda",
    "cb",
    "caccc",
    "d",
    "dd",
    "aadb",
    "cc",
    "b",
    "bcc",
    "bcd",
    "cd",
    "cbca",
    "bbd",
    "ddd",
    "dabb",
    "ab",
    "acd",
    "a",
    "bbcc",
    "cdcbd",
    "cada",
    "dbca",
    "ac",
    "abacd",
    "cba",
    "cdb",
    "dbac",
    "aada",
    "cdcda",
    "cdc",
    "dbc",
    "dbcb",
    "bdb",
    "ddbdd",
    "cadaa",
    "ddbc",
    "babb",
  ])
); // true
