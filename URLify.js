// Write a method to replace all spaces in a string with "%20"

const urlify2 = s =>
  s
    .trim()
    .split(" ")
    .join("%20");

const urlify = (str, len) => {
  // JS string is immutable (unchangeable)
  const chars = str.split("");

  // count spaces
  let spaces = 0;
  for (let i = 0; i < len; i++) if (chars[i] === " ") spaces++;

  let newLen = len + spaces * 2;
  chars[newLen] = "\0";

  for (let i = len - 1; i >= 0; i--) {
    if (chars[i] === " ") {
      chars[newLen - 1] = "0";
      chars[newLen - 2] = "2";
      chars[newLen - 3] = "%";
      newLen -= 3;
    } else {
      chars[newLen - 1] = chars[i];
      newLen--;
    }
  }
  return chars.join("");
};

const s = "Mr John Smith    ";
console.log(urlify(s, 13));
