/**Given strings S and T, find the minimum (contiguous) substring W of S, so that T is a subsequence of W.

If there is no such window in S that covers all characters in T, return the empty string "". If there are multiple such minimum-length windows, return the one with the left-most starting index.

Example 1:

Input: 
S = "abcdebdde", T = "bde"
Output: "bcde"
Explanation: 
"bcde" is the answer because it occurs before "bdde" which has the same length.
"deb" is not a smaller window because the elements of T in the window must occur in order.
 

Note:

All the strings in the input will only contain lowercase letters.
The length of S will be in the range [1, 20000].
The length of T will be in the range [1, 100]. */

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
const minWindow = (S, T) => {
  const lengths = Array(S.length - T.length + 1).fill(Infinity);

  for (let i = 0; i < S.length - T.length + 1; i++) {
    if (S[i] === T[0]) {
      lengths[i] = helper(S.slice(i), T, 0);
    }
  }

  let result = S;
  let found = false;
  for (let i = 0; i < lengths.length; i++) {
    if (lengths[i] > -1 && lengths[i] < Infinity) {
      if (lengths[i] < result.length) {
        found = true;
        result = S.slice(i, i + lengths[i]);
      }
    }
  }
  return found ? result : "";
};

const helper = (S, T, len) => {
  if (T.length < 1) return len;
  if (S.length < 1) return -1;

  return S[0] === T[0] ? helper(S.slice(1), T.slice(1), len + 1) : helper(S.slice(1), T, len + 1);
};

const S = "abcdebdde";
const T = "bde";

console.log(minWindow(S, T));
