// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

/* My solution doesn't use any built-in string functions. It is a raw index manipulation. */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let h = 0; // hay index
    let n = 0; // needle index
    while (h < haystack.length && n < needle.length) {
        if (haystack[h] === needle[n]) {
            h++;
            n++;
        } else if (n > 0) {
            h = h - n + 1; // backtrack
            n = 0;
        } else h++;
    }
    if (n < needle.length) return -1;
    return h - n;
};

/* Another simple and clever solution that does the work even though it
uses a built-in function. I found it online. */

var strStr2 = function (haystack, needle) {
    if (needle === '') return 0;
    const split = haystack.split(needle);
    return split.length > 1 ? split[0].length : -1;
};

/*
Questions and assumptions:
What should be returned if haystack is empty?
What should be return if needle is empty?
What if both are empty?
Is it case-sensitive?
What is the character set?
*/