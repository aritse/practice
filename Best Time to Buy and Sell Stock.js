// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

/**
 * @param {number[]} prices
 * @return {number}
 */

/* One liner using reduce() */

var maxProfit = function(prices) {
  return prices.reduce(
    (profit, price) => Math.max(profit, Math.max(Math.max(...prices.slice(prices.indexOf(price) + 1)) - price, 0)),
    0
  );
};

/* One liner expanded */

// var maxProfit = function(prices) {
//   return prices.reduce((profit, price) => {
//     var i = prices.indexOf(price);
//     var rest = prices.slice(i + 1);
//     var max = Math.max(...rest);
//     var potential = Math.max(max - price, 0);
//     profit = Math.max(profit, potential);
//     return profit;
//   }, 0);
// };
