// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (str) {
    const parens = {
        "{": "}",
        "[": "]",
        "(": ")"
    };
    const stack = [];
    for (const c of str) {
        if (Object.keys(parens).includes(c)) stack.push(c);
        else if (parens[stack.pop()] !== c) return false;
    }
    return stack.length === 0;
};