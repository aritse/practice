/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/
/**
 * @param {string[]} strings
 * @return {string[][]}
 */
const groupAnagrams = (strings) => {
  const anagrams = [];
  strings.forEach((string) => {
    const key = string.split("").sort().join("");
    anagrams[key] ? anagrams[key].push(string) : (anagrams[key] = [string]);
  });

  return Object.values(anagrams);
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

/*
Questions and assumptions:
What is an anagram? An anagram is a group of words that are made up of the same set of characters.
Can the input array be empty? Yes, the input array can be empty.
Can I modify the input array? Sure, you can and modifying the input array has no effect on the
    array in the caller because there is no tie.
Are the characters both upper and lowercase? No, they are all lowercase.
Does the order of the output matter? No, the order doesn't matter.
How big is the input array? You can assume that the size is not big enough to worry.
How long is the maximum length of a string in the input array. You don't need to worry about that.
*/

/*
For each string, sort its characters to find its hash key. groups{} is a hash of arrays.
Push new strings into their correct hash entries in groups{}.
Finally, convert groups{} hash to anagrams[] array.
*/
