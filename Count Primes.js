// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

var primes;
var countPrimes = n => generatePrimes(n).length;

var generatePrimes = n => {
    primes = [];
    for (let i = 0; i < n; i++)
        if (isPrime(i))
            primes.push(i);
    return primes;
};

var isPrime = function (n) {
    if (n < 10) return [false, false, true, true, false, true, false, true, false, false][n];
    if (n % 2 === 0) return false; // even number is NOT prime

    for (let i = 1; primes[i] <= Math.sqrt(n); i++)
        if (n % primes[i] === 0)
            return false;
    return true;
}
