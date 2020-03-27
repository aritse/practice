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
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubstring = (s, k) => {
  let max = 0;
  const count = {};
  for (let i = 0; i < s.length; i++) {
    count[s[i]] = count[s[i]] + 1 || 1;

    if (i < k - 1) continue;

    const temp = Object.assign({}, count);

    for (let j = 0; j <= i; j++) {
      if (Object.values(temp).every(v => v >= k)) {
        max = Math.max(max, i - j + 1);
        break;
      } else {
        temp[s[j]]--;
        // console.log("temp:", temp);
      }
    }
  }
  return max;
};

console.log(longestSubstring("bbaaa", 3)); // 3
console.log(longestSubstring("aaabb", 3)); // 3
console.log(longestSubstring("ababbc", 2)); // 5
console.log(longestSubstring("", 1)); // 0
console.log(longestSubstring("a", 1)); // 1
console.log(longestSubstring("bbaaacbd", 3)); // 3
