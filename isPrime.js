const isPrime = n => {
  // Special cases
  if (n === 2) return true;
  if (n === 0 || n === 1) return false;

  // Even numbers are not prime
  if (n % 2 === 0) return false;

  for (let i = 3; i <= n / 2; i += 2) if (n % i === 0) return false;
  return true;
};

console.log("Prime numbers:");
[
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
  101,
  103,
  107,
  109,
  113,
  127,
  131,
  137,
  139,
  149,
  151,
  157,
  163,
  167,
  173,
  179,
  181,
  191,
  193,
  197,
  199
].forEach(element => {
  console.log(element, isPrime(element));
}); // true

console.log("Non-prime numbers");
[0, 1, 4, 9, 15, 30, 81].forEach(element => {
  console.log(element, isPrime(element));
}); // false
