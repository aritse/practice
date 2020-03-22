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

const isInt = c => (c >= "0" && c <= "9" ? true : false);

/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = s => {
  s = s.trim();

  let state = "q1";

  for (let i = 0; i < s.length; i++) {
    console.log("char", s[i]);
    if (state === "q1") {
      console.log("in state", state);
      if (isInt(s[i])) {
        state = "q3";
        console.log("going to state:", state);
      } else if (s[i] === "+" || s[i] === "-") {
        state = "q2";
        console.log("going to state:", state);
      } else if (s[i] === ".") {
        state = "q4";
        console.log("going to state:", state);
      } else state = "reject";
    } else if (state === "q2") {
      console.log("in state", state);
      if (isInt(s[i])) {
        state = "q3";
        console.log("going to state:", state);
      } else if (s[i] === ".") {
        state = "q4";
        console.log("going to state:", state);
      } else state = "reject";
    } else if (state === "q3") {
      console.log("in state", state);
      while (isInt(s[i])) i++;
      if (s[i] === ".") {
        state = "q5";
        console.log("going to state:", state);
      } else if (s[i] === "e") {
        state = "q6";
        console.log("going to state:", state);
      } else if (s[i] === " ") {
        state = "q9";
        console.log("going to state:", state);
      } else if (s[i]) {
        state = "reject";
      }
    } else if (state === "q4") {
      console.log("in state", state);
      if (isInt(s[i])) {
        state = "q5";
        console.log("going to state:", state);
      } else state = "reject";
    } else if (state === "q5") {
      console.log("in state", state);
      while (isInt(s[i])) {
        i++;
      }
      if (s[i] === "e") {
        state = "q6";
        console.log("going to state:", state);
      } else if (s[i] === " ") {
        state = "q9";
        console.log("going to state:", state);
      } else if (s[i]) {
        state = "reject";
      }
    } else if (state === "q6") {
      console.log("in state", state);
      if (s[i] === "+" || s[i] === "-") {
        state = "q7";
        console.log("going to state:", state);
      } else if (isInt(s[i])) {
        state = "q8";
        console.log("going to state:", state);
      } else state = "reject";
    } else if (state === "q7") {
      console.log("in state", state);
      if (isInt(s[i])) {
        state = "q8";
        console.log("going to state:", state);
      }
    } else if (state === "q8") {
      console.log("in state", state);
      while (isInt(s[i])) i++;
      if (s[i] === " ") {
        state = "q9";
        console.log("going to state:", state);
      } else if (s[i]) {
        state = "reject";
      }
    } else if (state === "q9") {
      console.log("in state", state);
      if (s[i]) {
        state = "reject";
      }
      while (isInt(s[i])) i++;
    } else if (state === "reject") break;
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
