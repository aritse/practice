/*
There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. given two strings, write a function to check if they are one edit away. */

const oneEditAway = (a, b) => {
  if (a === b) return true;
  const [al, bl] = [a.length, b.length];
  if (Math.abs(al - bl) > 1) return false;

  let [insert, remove, replace] = [false, false, false];
  if (al === bl) replace = true;
  else if (al + 1 === bl) insert = true;
  else remove = true;

  if (remove) {
    for (let i = 0; i < bl; i++) {
      if (a[i] !== b[i]) return a.slice(i + 1) === b.slice(i);
    }
    return true;
  }

  if (insert) {
    for (let i = 0; i < al; i++) {
      if (a[i] !== b[i]) return a.slice(i) === b.slice(i + 1);
    }
  }

  if (replace) {
    for (let i = 0; i < al; i++) {
      if (a[i] !== b[i]) return a.slice(i + 1) === b.slice(i + 1);
    }
  }
};

console.log(oneEditAway("ple", "pale")); // true by inserting a
console.log(oneEditAway("plc", "pale")); // false by inserting
console.log(oneEditAway("pales", "pale")); // true by removing s
console.log(oneEditAway("pyles", "pale")); // false by removing
console.log(oneEditAway("pale", "bale")); // true by replacing p with b
console.log(oneEditAway("pale", "balc")); // false by replacing
console.log(oneEditAway("pale", "pale")); // true by noop
console.log(oneEditAway("palesh", "pale")); // false by noop
