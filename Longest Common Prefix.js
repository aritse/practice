// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strings
 * @return {string}
 */
var longestCommonPrefix = function (strings) {
    let commonPrefix = '';
    if (strings.length > 0) {
        let shortest = strings.reduce((shortest, str) => Math.min(shortest, str.length), 100);
        for (let i = 0; i < shortest; i++) {
            let char = strings[0].charAt(i);
            for (const str of strings)
                if (str.charAt(i) !== char)
                    return commonPrefix;
            commonPrefix = commonPrefix.concat(char);
        }
    }
    return commonPrefix;
};

/*
Questions and assumptions:
1. Array of strings
    a. empty array acceptable
    b. is there any limit or constraint on the size of the array
    c. duplicate entries allowed
2. Strings
    a. case-sensitive
*/