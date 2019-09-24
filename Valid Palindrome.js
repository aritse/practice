// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */

const isAlpha = c => (c > 64 && c < 91) || (c > 96 && c < 123); // [A..Za..z]
const isDigit = c => c > 47 && c < 58;                          // [0..9]
const isAlphaNumeric = c => isAlpha(c) || isDigit(c);

const isEqualCaseInsensitive = function (a, b) {
    if (a === b) return true;
    return isAlpha(a) && isAlpha(b) ? Math.abs(a - b) === 32 : false;
};

var isPalindrome = function (s) {
    if (s === '') return true;
    let [head_ptr, tail_ptr] = [0, s.length - 1];
    while (head_ptr < tail_ptr) {
        while (!isAlphaNumeric(s.charCodeAt(head_ptr))) {
            head_ptr++;
            if (head_ptr === s.length) return true;
        }
        while (!isAlphaNumeric(s.charCodeAt(tail_ptr))) {
            tail_ptr--;
            if (tail_ptr === -1) return true;
        }
        if (!isEqualCaseInsensitive(s.charCodeAt(head_ptr), s.charCodeAt(tail_ptr)))
            return false;
        head_ptr++;
        tail_ptr--;
    }
    return true;
};

/* Questions and assumptions to consider:
    a. Is the input string empty?
    b. What is the character set? My solution assumes it is ASCII.
    c. What is the max length?
    d. Case-sensitive?
    e. Alphanumeric only?
    f. Is empty string a valid palindrome?
    g. Ignore white space and non-alphanumeric characters?
    h. What if a non-empty string only consisting of non-alphanumeric characters? Is it palindrome?
    i. Where is it called from and how many times? Does it need to be optimized?
    j. Can I use built-in string functions? My solution assumes that I can't use.
*/