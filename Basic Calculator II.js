/** Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

Example 1:

Input: "3+2*2"
Output: 7
Example 2:

Input: " 3/2 "
Output: 1
Example 3:

Input: " 3+5 / 2 "
Output: 5
Note:

You may assume that the given expression is always valid.
Do not use the eval built-in library function. */

/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
    s = s.split(" ").join("");

    let num = "";
    const terms = [];

    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if (c >= "0" && c <= "9") num += c;
        else {
            terms.push(parseInt(num), c);
            num = "";
        }
    }
    terms.push(parseInt(num));

    for (let i = 0; i < terms.length; i++) {
        const c = terms[i];
        if (c === "*" || c === "/") {
            const [op1, op2] = [terms[i - 1], terms[i + 1]];
            const res = c === "*" ? op1 * op2 : Math.floor(op1 / op2);
            terms.splice(i - 1, 3, res);
        }
    }

    for (let i = 0; i < terms.length; i++) {
        const c = terms[i];
        if (c === "+" || c === "-") {
            const [op1, op2] = [terms[i - 1], terms[i + 1]];
            const res = c === "+" ? op1 + op2 : op1 - op2;
            terms.splice(0, 3, res);
        }
    }
    return terms[0];
}
