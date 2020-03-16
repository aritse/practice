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

const coinChange = (coins, amount) => {
  const helper = (amount, stack) => {
    if (amount === 0) return 0;

    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      if (amount >= coin) {
        stack.push(coin);
        const result = helper(amount - coin, stack);
        if (result !== -1) {
          min = Math.min(min, stack.length + result);
        }
        stack.pop();
      }
    }
    return min < Infinity ? min : -1;
  };

  let min = Infinity;
  coins = coins.sort((a, b) => b - a);
  return amount ? helper(amount, []) : 0;
};

const coins = [1, 2, 5];
const amount = 11;
console.log(`Min number of coins to make up ${amount}: ${coinChange(coins, amount)}`);
