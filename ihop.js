let T = process.argv[2];

let i = 1;
while (i <= T) {
    const [L, R] = [parseInt(process.argv[i * 2 + 1]), parseInt(process.argv[i * 2 + 2])];
    const [n, l, r] = solve(L, R);
    console.log(n, l, r);
    i++;
}

function solve(L, R) {
    let i = 1;
    while (i <= L || i <= R) {
        if (L === R || L > R) {
            L -= i;
        } else {
            R -= i;
        }
        i++;
    }
    return [i - 1, L, R];
}