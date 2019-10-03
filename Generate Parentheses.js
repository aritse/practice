// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   '((()))',
//   '(()())',
//   '(())()',
//   '()(())',
//   '()()()'
// ]

// (()

/**
 * @param {number} n
 * @return {string[]}
 */

/*
My approach:
I am thinking of '(' as 0 and ')' as 1. Therefore, there are pow(2, 2*n) combinations. First, I generate all possible combinations
and then eliminate invalid parenthesis combinations using a stack.
*/

var generateParenthesis = function (n) {
    const solution = [];
    let s = 2 ** (2 * n);
    while (s--) {
        const bits = s.toString(2).padStart(2 * n, '0');            // 011101
        const parens = bits.replace(/0/g, '(').replace(/1/g, ')');  // ()))()
        if (isValidParens(parens)) solution.push(parens);
    }
    return solution;
};

var isValidParens = function (string) {
    const stack = [];
    for (let c of string) {
        if (c === '(') stack.push('(');
        else {
            if (stack.length > 0) stack.pop();
            else return false;
        }
    }
    return stack.length === 0 ? true : false;
}

console.log(generateParenthesis(3));