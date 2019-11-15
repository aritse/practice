/* DESCRIPTION
Implement an algorithm to determine if a string has all unique characters
without using additional data structures. */

var isUnique = function (str) {
    var getBit = i => bitVector & (1 << i);
    var setBit = i => bitVector |= (1 << i);

    let bitVector = 0;
    for (const char of str) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        if (getBit(index))
            return false;
        setBit(index);
    }
    return true;
};

// Driver
let string = "abcde";
console.log(isUnique(string));
string = "abcded";
console.log(isUnique(string));
string = "abcdeF";
console.log(isUnique(string));


/* QUESTIONS & CLARIFICATIONS
Are the characters lowercase, alphabetical? No.
Are special symbols, numbers, uppercase allowed? No.
Are uppercase and lowercase chars are treated diff? Yes.
*/