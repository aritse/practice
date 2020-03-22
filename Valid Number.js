/**Validate if a given string can be interpreted as a decimal number.

Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
" -90e3   " => true
" 1e" => false
"e3" => false
" 6e-1" => true
" 99e2.5 " => false
"53.5e93" => true
" --6 " => false
"-+3" => false
"95a54e53" => false

Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one. However, here is a list of characters that can be in a valid decimal number:

Numbers 0-9
Exponent - "e"
Positive/negative sign - "+"/"-"
Decimal point - "."
Of course, the context of these characters also matters in the input.

Update (2015-02-10):
The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button to reset your code definition. */

// My state diagram was pretty similar to this - https://github.com/gigglegrig/LeetCode/wiki/65.-Valid-Number
// Coding is basically following the state diagram

const isInt = c => (c >= "0" && c <= "9" ? true : false);

/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = s => {
  s = s.trim();

  let state = "q1";

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (state === "q1") {
      if (isInt(c)) state = "q3";
      else if (c === "+" || c === "-") state = "q2";
      else if (c === ".") state = "q4";
      else state = "R";
    } else if (state === "q2") {
      if (isInt(c)) state = "q3";
      else if (c === ".") state = "q4";
      else state = "R";
    } else if (state === "q3") {
      while (isInt(c)) c = s[++i];
      if (c === ".") state = "q5";
      else if (c === "e") state = "q6";
      else if (c === " ") state = "q9";
      else if (c) state = "R";
    } else if (state === "q4") {
      if (isInt(c)) state = "q5";
      else state = "R";
    } else if (state === "q5") {
      while (isInt(c)) c = s[++i];
      if (c === "e") state = "q6";
      else if (c === " ") state = "q9";
      else if (c) state = "R";
    } else if (state === "q6") {
      if (c === "+" || c === "-") state = "q7";
      else if (isInt(c)) state = "q8";
      else state = "R";
    } else if (state === "q7") {
      if (isInt(c)) state = "q8";
    } else if (state === "q8") {
      while (isInt(c)) c = s[++i];
      if (c === " ") state = "q9";
      else if (c) state = "R";
    } else if (state === "q9") {
      if (c) state = "R";
      while (isInt(c)) c = s[++i];
    } else if (state === "R") break;
  }

  return state === "q3" || state === "q5" || state === "q8" || state === "q9" ? true : false;
};

console.log("0", isNumber("0")); // true
console.log("11", isNumber("11")); // true
console.log("e9", isNumber("e9")); // false
console.log("..2", isNumber("..2")); // false
console.log("1 4", isNumber("1 4")); // false
console.log("0..", isNumber("0..")); // false
console.log(".20", isNumber(".20")); // true
console.log("53K", isNumber("53K")); // false
console.log("3.5e+3.5e+3.5", isNumber("3.5e+3.5e+3.5")); // false
console.log("+N1", isNumber("+N1")); // false
console.log("6ee69", isNumber("6ee69")); // false
