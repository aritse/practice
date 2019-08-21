# Say you have an array for which the ith element is the price of a given stock on day i.

# Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

# Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).


class Solution(object):
    def maxProfit(self, prices):
        max_profit = 0
        for i in range(1, len(prices)):
            diff = prices[i] - prices[i-1]
            max_profit += diff if diff > 0 else 0
        return max_profit
