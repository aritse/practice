

function generalizedGCD(num, arr) {
    let gcd = Math.min(...arr);
    while (gcd) {
        for (let j = 0; j < num; j++) {
            if (arr[j] % gcd) break;
            if (j === num - 1) return gcd;
        }
        gcd--;
    }
}
console.log(generalizedGCD(5, [4, 2, 6, 8, 10]));