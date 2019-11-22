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

// Driver
console.time("steps_1_2_brute_force_recursive()")
console.log(steps_1_2_brute_force_recursive(40));
console.timeEnd("steps_1_2_brute_force_recursive()");

console.time("steps_1_2_bottom_up_dynamic_programming()")
console.log(steps_1_2_bottom_up_dynamic_programming(40));
console.timeEnd("steps_1_2_bottom_up_dynamic_programming()");

console.time("steps_1_2_bottom_up_dynamic_programming_constant_space()")
console.log(steps_1_2_bottom_up_dynamic_programming_constant_space(40));
console.timeEnd("steps_1_2_bottom_up_dynamic_programming_constant_space()");
