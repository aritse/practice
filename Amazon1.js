function cellCompete(states, days) {
    while (days--) {
        const padded = [0, ...states, 0];
        for (let i = 1; i < 9; i++)
            states[i - 1] = padded[i - 1] + padded[i + 1] === 1 ? 1 : 0;
    }
    return states;
}
console.log(cellCompete([1, 0, 0, 0, 0, 1, 0, 0], 1));

console.log(cellCompete([1, 1, 1, 0, 1, 1, 1, 1], 2));