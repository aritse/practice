class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        # Naive solution O(n * n)
        # max_profit = 0
        # for sell_day in reversed(range(len(prices))):
        #     for buy_day in (range(sell_day)):
        #         potential = prices[sell_day] - prices[buy_day]
        #         if potential > max_profit:
        #             max_profit = potential
        # return max_profit

        # Faster solution O(n)
        max_profit = 0
        if len(prices):
            buy_price = max(prices)
            for price in prices:
                if price < buy_price:
                    buy_price = price
                    potential = 0
                else:
                    potential = price - buy_price
                    if potential > max_profit:
                        max_profit = potential
        return max_profit
