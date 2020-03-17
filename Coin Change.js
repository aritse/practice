/* You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin. */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
  const dp = [0].concat(Array(amount).fill(Infinity));

  for (let i = 1; i <= amount; i++) {
    coins.forEach(coin => {
      if (i >= coin) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    });
  }

  return dp[amount] !== Infinity ? dp[amount] : -1;
};

const coins = [1, 2, 5];
const amount = 11;
console.log(`Min number of coins to make up ${amount}: ${coinChange(coins, amount)}`);
