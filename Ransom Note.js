/**Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true */

function canConstruct(r, m) {
  if (!r) return true;
  if (!m) return false;

  const count = new Array(128).fill(0);
  for (let i = 0; i < r.length; i++) count[r.charCodeAt(i)]++;

  for (let i = 0; i < m.length; i++) {
    const ascii = m.charCodeAt(i);
    if (count[ascii] > 0) {
      count[ascii]--;
      const done = count.every((c) => c === 0);
      if (done) return true;
    }
  }

  return false;
}
