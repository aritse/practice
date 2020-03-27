/**Find the length of the longest substring T of a given string (consists of lowercase letters only) such that every character in T appears no less than k times.

Example 1:

Input:
s = "aaabb", k = 3

Output:
3

The longest substring is "aaa", as 'a' is repeated 3 times.
Example 2:

Input:
s = "ababbc", k = 2

Output:
5

The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times. */

/**
 * @param {string} string
 * @param {number} k
 * @return {number}
 */
const longestSubstring = (string, k) => {
  if (string.length < k) return 0;

  let longest = 0;
  const count = {};

  for (let right = 0; right < string.length; right++) {
    const char = string[right];
    count[char] = count[char] + 1 || 1;

    if (right < k - 1 || count[char] < k) continue;

    const temp = Object.assign({}, count);

    for (let left = 0; left <= right + 1 - k; left++) {
      if (Object.values(temp).every(v => v >= k)) {
        longest = Math.max(longest, right - left + 1);
        break;
      } else {
        temp[string[left]] = temp[string[left]] - 1;
        if (temp[string[left]] === 0) delete temp[string[left]];
      }
    }
  }

  return longest;
};

console.log(longestSubstring("bbaaa", 3)); // 3
console.log(longestSubstring("aaabb", 3)); // 3
console.log(longestSubstring("ababbc", 2)); // 5
console.log(longestSubstring("", 1)); // 0
console.log(longestSubstring("a", 1)); // 1
console.log(longestSubstring("bbaaacbd", 3)); // 3

/* Another JS solution found online ...

Count each character in the input string. Then, split the input string on a character where the count
is less than k because this character ruines everything and shouldn't be in any substrings. The split
produces an array of substrings. Finally, for each substring, recursively solve the problem.

var longestSubstring = function(s, k) {
  let map = new Map();
  map.clear();
  for (item of s) {
    if (map.has(item)) map.set(item, map.get(item) + 1);
    else map.set(item, 1);
  }
  for ([item, val] of map) {
    if (val < k) {
      let ar = s.split(item);
      let res = 0;
      for (word of ar) {
        res = Math.max(res, longestSubstring(word, k));
      }
      return res;
    }
  }
  return s.length;
};
*/
