/**Given a set of reviews provided by the customers for different hotels and a string containing “Good Words”, you need to sort the reviews in descending order according to their “Goodness Value” (Higher goodness value first). We define the “Goodness Value” of a string as the number of “Good Words” in that string.

Note: Sorting should be stable. If review i and review j have the same “Goodness Value” then their original order would be preserved.
Input: 
S = "cool_ice_wifi"
R = ["water_is_cool", "cold_ice_drink", "cool_wifi_speed"]

Output:
ans = [2, 0, 1]
Here, sorted reviews are ["cool_wifi_speed", "water_is_cool", "cold_ice_drink"]*/

module.exports = {
  //param A : string
  //param B : array of strings
  //return a array of integers
  solve: function (A, B) {
    const words = A.split("_");
    let C = [];
    B.forEach((b) => {
      let t = b.split("_").filter((w) => words.includes(w));
      C.push(t);
    });
    const D = Array.from(C);
    C.sort((a, b) => {
      if (a.length > b.length) return -1;
      if (a.length < b.length) return 1;
      return 0;
    });
    return C.map((b) => D.indexOf(b));
  },
};
