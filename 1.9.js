function stringRotation(a, b) {
  return a.concat(a).includes(b);
}
const [a, b] = ["waterbottle", "erbottlewat"];
console.log(stringRotation(a, b));
