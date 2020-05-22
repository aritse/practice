/** Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.
Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0. */

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
function removeKdigits(num, k) {
    while (k--) {
        let i, a, b;
        for (i = 0; i < num.length - 1; i++) {
            // find the peak and remove it
            [a, b] = [num.charCodeAt(i) - 48, num.charCodeAt(i + 1) - 48];
            if (a > b) {
                num = num.replace(a, "");
                break;
            }
        }

        //  if no peak found, remove the last
        if (i === num.length - 1 && !(a > b)) {
            num = num.substring(0, num.length - 1);
        }
    }
    // remove leading zeros
    num = num.replace(/^0+/, "");

    // if num is "", return 0
    return num || "0";
}
