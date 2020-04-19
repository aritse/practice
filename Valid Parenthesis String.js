/** Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid. */

/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = function (s) {
  const stack = [];
  const stars = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") stars.push(i);
    else if (s[i] === "(") stack.push(i);
    else {
      if (stack.length > 0) stack.pop();
      else if (stars.length > 0) stars.pop();
      else return false;
    }
  }

  while (stack.length) {
    if (stack[stack.length - 1] < stars[stars.length - 1]) {
      stack.pop();
      stars.pop();
    } else return false;
  }

  return true;
};
