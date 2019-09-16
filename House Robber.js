// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * The recursive approach works; however, it calls itself with the same argument multiple times
 * which is inefficient. We could save the result of recursive call with a specific argument.
 * The time complexity of this approach is O(2^n) because there are 2 recursive calls in each recursion.
*/
var rob_recursive = function (nums) {
    switch (nums.length) {
        case 0:
            return 0;
        case 1:
            return nums[0];
        case 2:
            return Math.max(nums[0], nums[1]);
        case 3:
            return Math.max(nums[0] + nums[2], nums[1]);
        default:
            return Math.max(nums[0] + rob(nums.slice(2)), nums[1] + rob(nums.slice(3)));
    }
};

/**
 * Dynamic Programming: start building the max_profit array. As the number of houses increase,
 * the max profit possible is determined by the previous answer when the number of houses was one less.
 * The time complexity is O(n).
 */

var rob = function (houses) {
    const numOfHouses = houses.length;
    if (numOfHouses === 0) return 0;
    if (numOfHouses === 1) return houses[0];
    if (numOfHouses === 2) return Math.max(houses[0], houses[1]);

    const max_profit = [0, houses[0], Math.max(houses[0], houses[1])];
    let i = 3;
    while (i <= numOfHouses) {
        max_profit[i] = Math.max(houses[i - 1] + max_profit[i - 2], max_profit[i - 1]);
        i++;
    }
    return max_profit[houses.length];
};

/* Solution I found online that was pretty cool */

// variable p records previous 2 max values: p[1] is the previous one and p[0] is the one before previous one. p is initialized as [0,0]. variable n is the value at each position.

var rob = function (nums) {
    return nums.reduce((p, n) => [p[1], Math.max(p[0] + n, p[1])], [0, 0])[1];
};
