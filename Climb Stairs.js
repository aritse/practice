/* DESCRIPTION
A child is running up a staircase with n steps. Count the number of ways to climb the staircase if the child can take:
1. 1 or 2 steps:        [1, 2]
2. 1, 2, or 3 steps     [1, 2, 3]
3. 1, 3, or 5 steps     [1, 3, 5]
4. x different steps */

// 1 or 2 steps
var steps_1_2_brute_force_recursive = function (n) {
    if (n === 0 || n === 1) return 1;
    return steps_1_2_brute_force_recursive(n - 1) + steps_1_2_brute_force_recursive(n - 2);
};

var steps_1_2_bottom_up_dynamic_programming = function (n) {
    const count = Array(n + 1);
    [count[0], count[1]] = [1, 1];
    for (let i = 2; i <= n; i++)
        count[i] = count[i - 1] + count[i - 2];
    return count[n];
};

var steps_1_2_bottom_up_dynamic_programming_constant_space = function (n) {
    let [a, b] = [1, 1];
    for (let i = 2; i <= n; i++)
        [a, b] = [b, a + b]
    return b;
};

// 1, 2, or 3 steps
var steps_1_2_3_brute_force_recursive = function (n) {
    if (n < 0) return 0;
    if (n === 0) return 1;
    return (
        steps_1_2_3_brute_force_recursive(n - 1) +
        steps_1_2_3_brute_force_recursive(n - 2) +
        steps_1_2_3_brute_force_recursive(n - 3)
    );
};

var steps_1_2_3_bottom_up_dynamic_programming = function (n) {
    const count = Array(n + 1);
    [count[0], count[1], count[2]] = [1, 1, 2];
    for (let i = 3; i <= n; i++)
        count[i] = count[i - 1] + count[i - 2] + count[i - 3];
    return count[n];
};

var steps_1_2_3_bottom_up_dynamic_programming_constant_space = function (n) {
    switch (n) {
        case 0: return 1;
        case 1: return 1;
        case 2: return 2;
    }
    let [a, b, c] = [1, 1, 2];
    for (let i = 3; i <= n; i++)
        [a, b, c] = [b, c, a + b + c];
    return c;
};

// 1, 3, or 5 steps
var steps_1_3_5_brute_force_recursive = function (n) {
    if (n < 0) return 0;
    if (n === 0) return 1;
    return (
        steps_1_3_5_brute_force_recursive(n - 1) +
        steps_1_3_5_brute_force_recursive(n - 3) +
        steps_1_3_5_brute_force_recursive(n - 5)
    );
};

var steps_1_3_5_bottom_up_dynamic_programming = function (n) {
    const steps = [1, 3, 5];
    const count = Array(n + 1);
    count[0] = 1;
    for (let i = 1; i <= n; i++) {
        let total = 0;
        steps.forEach(step => {
            if (count[i - step] > 0)
                total += count[i - step];
        });
        count[i] = total;
    }
    return count[n];
};

// x different steps
var steps_x_bottom_up_dynamic_programming = function (steps, n) {
    const count = Array(n + 1);
    count[0] = 1;
    for (let i = 1; i <= n; i++) {
        let total = 0;
        steps.forEach(step => {
            if (count[i - step] > 0)
                total += count[i - step];
        });
        count[i] = total;
    }
    return count[n];
};

// Driver
const n = 40;
console.log("N = ", n);
console.time("steps_1_2_brute_force_recursive()")
console.log(steps_1_2_brute_force_recursive(n));
console.timeEnd("steps_1_2_brute_force_recursive()");

console.time("steps_1_2_bottom_up_dynamic_programming()")
console.log(steps_1_2_bottom_up_dynamic_programming(n));
console.timeEnd("steps_1_2_bottom_up_dynamic_programming()");

console.time("steps_1_2_bottom_up_dynamic_programming_constant_space()")
console.log(steps_1_2_bottom_up_dynamic_programming_constant_space(n));
console.timeEnd("steps_1_2_bottom_up_dynamic_programming_constant_space()");

console.time("steps_1_2_3_brute_force_recursive()")
console.log(steps_1_2_3_brute_force_recursive(30));
console.timeEnd("steps_1_2_3_brute_force_recursive()");

console.time("steps_1_2_3_bottom_up_dynamic_programming()")
console.log(steps_1_2_3_bottom_up_dynamic_programming(n));
console.timeEnd("steps_1_2_3_bottom_up_dynamic_programming()");

console.time("steps_1_2_3_bottom_up_dynamic_programming_constant_space()")
console.log(steps_1_2_3_bottom_up_dynamic_programming_constant_space(n));
console.timeEnd("steps_1_2_3_bottom_up_dynamic_programming_constant_space()");

console.time("steps_1_3_5_brute_force_recursive()")
console.log(steps_1_3_5_brute_force_recursive(n));
console.timeEnd("steps_1_3_5_brute_force_recursive()");

console.time("steps_1_3_5_bottom_up_dynamic_programming()")
console.log(steps_1_3_5_bottom_up_dynamic_programming(n));
console.timeEnd("steps_1_3_5_bottom_up_dynamic_programming()");

console.time("steps_x_bottom_up_dynamic_programming()")
console.log(steps_x_bottom_up_dynamic_programming([2, 4, 6, 8], n));
console.timeEnd("steps_x_bottom_up_dynamic_programming()");
