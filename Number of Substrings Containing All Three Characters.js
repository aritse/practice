/** Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.

 

Example 1:

Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 
Example 2:

Input: s = "aaacb"
Output: 3
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 
Example 3:

Input: s = "abc"
Output: 1
 

Constraints:

3 <= s.length <= 5 x 10^4
s only consists of a, b or c characters. */

/**
 * @param {string} s
 * @return {number}
 */
function numberOfSubstrings(s) {
    const enough = () => count["a"] > 0 && count["b"] > 0 && count["c"] > 0;
    const reset = () => Object.assign(count, { a: 0, b: 0, c: 0 });

    let [left, right] = [0, 0];
    const len = s.length;
    let total = 0;
    const count = { a: 0, b: 0, c: 0 };

    while (left < len) {
        right = left;
        while (right < len) {
            const c = s[right];
            count[c]++;
            if (enough()) {
                total += len - right;
                break;
            }
            right++;
        }
        reset(count);
        left++;
    }

    return total;
}
